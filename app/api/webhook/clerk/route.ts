import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createUser, deleteUser, updateUser } from "@/lib/actions/user.actions";
import { clerkClient } from "@clerk/clerk-sdk-node";
import { NextResponse } from "next/server";
import { CreateUserParams, UpdateUserParams } from "@/types";

export async function POST(req: Request) {
  try {
    const SIGNING_SECRET = process.env.SIGNING_SECRET;

    if (!SIGNING_SECRET) {
      throw new Error("SIGNING_SECRET is not defined in environment variables.");
    }

    // Create new Svix instance with secret
    const wh = new Webhook(SIGNING_SECRET);

    // Get headers
    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // Log headers for debugging
    console.log("Svix Headers:", { svix_id, svix_timestamp, svix_signature });

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      throw new Error("Missing Svix headers.");
    }

    // Get body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Log the payload for debugging
    console.log("Raw payload:", payload);

    let evt: WebhookEvent;

    // Verify payload with headers
    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;
    } catch (err) {
      console.error("Webhook verification failed:", err);
      throw new Error("Webhook verification failed.");
    }

    // Log verified event
    console.log("Verified webhook event:", evt);

    const eventType = evt.type;
    const { id } = evt.data;

    if (eventType === "user.created") {
      const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;

      // Validate presence of critical fields
      if (!id || !first_name || !last_name || !email_addresses || email_addresses.length === 0) {
        console.error("Missing required fields in Clerk webhook payload:", evt.data);
        throw new Error("Missing required fields: first_name, last_name, or email_addresses.");
      }

      // Construct user object for MongoDB
      const user: CreateUserParams = {
        clerkId: id || "unknown-id",
        email: email_addresses[0]?.email_address || "no-email@example.com",
        username: username || "anonymous",
        firstName: first_name || "unknown",
        lastName: last_name || "unknown",
        photo: image_url || "",
      };

      console.log("Constructed user object for MongoDB:", user);

      // Attempt to create the user in MongoDB
      const newUser = await createUser(user);

      if (newUser) {
        console.log("New user successfully created in MongoDB:", newUser);
        await clerkClient.users.updateUserMetadata(id, {
          publicMetadata: {
            userId: newUser._id,
          },
        });
      }

      return NextResponse.json({ message: "OK", user: newUser });
    }

    if (eventType === "user.updated") {
      const { id, image_url, first_name, last_name, username } = evt.data;

      if (!id || !first_name || !last_name) {
        console.error("Missing required fields in Clerk webhook payload:", evt.data);
        throw new Error("Missing required fields: id, first_name, or last_name.");
      }

      const user: UpdateUserParams = {
        firstName: first_name || "Unknown", // Fallback for first name
        lastName: last_name || "Unknown", // Fallback for last name
        username: username || "anonymous", // Fallback for username
        photo: image_url || "", // Fallback for image URL
      };

      const updatedUser = await updateUser(id, user);

      return NextResponse.json({ message: "OK", user: updatedUser });
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;
    
      if (!id) {
        console.error("Missing required field: id");
        throw new Error("Missing required field: id.");
      }
    
      const deletedUser = await deleteUser(id);
    
      return NextResponse.json({ message: "OK", user: deletedUser });
    }

    return NextResponse.json({ message: "Unhandled event type." });
  } catch (error: any) {
    console.error("Error in webhook handler:", error);
    return NextResponse.json({ error: error.message || "Unknown error" }, { status: 500 });
  }
}
