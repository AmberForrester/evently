"use server";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { revalidatePath } from "next/cache";
import Order from "../database/models/order.model";
import Event from "../database/models/event.model";



export const createUser = async (user: CreateUserParams) => {
    try {
        // Validate required fields
        if (!user.clerkId || !user.email || !user.username || !user.firstName || !user.lastName) {
          console.error("Validation failed in createUser. Missing fields:", user);
          throw new Error("Missing required fields for user creation.");
      }

      console.log("Connecting to database...");
      await connectToDatabase();

      console.log("Creating user in MongoDB with data:", user);
      const newUser = await User.create(user);

      console.log("User successfully created in MongoDB:", newUser);
      return JSON.parse(JSON.stringify(newUser));
    } 
        catch (error) {
        console.error("Error creating user in MongoDB:", error);
        handleError(error);
    }
}

export async function getUserById(userId: string) {
    try {
      await connectToDatabase()
  
      const user = await User.findById(userId)
  
      if (!user) throw new Error("User not found")
      return JSON.parse(JSON.stringify(user))
    } catch (error) {
      handleError(error)
    }
  }
  
  export async function updateUser(clerkId: string, user: UpdateUserParams) {
    try {
      await connectToDatabase()
  
      const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })
  
      if (!updatedUser) throw new Error("User update failed")
      return JSON.parse(JSON.stringify(updatedUser))
    } catch (error) {
      handleError(error)
    }
  }
  
  export async function deleteUser(clerkId: string) {
    try {
      await connectToDatabase()
  
      // Find user to delete
      const userToDelete = await User.findOne({ clerkId })
  
      if (!userToDelete) {
        throw new Error("User not found")
      }
  
      // Unlink relationships
      await Promise.all([
        // Update the 'events' collection to remove references to the user
        Event.updateMany(
          { _id: { $in: userToDelete.events } },
          { $pull: { organizer: userToDelete._id } }
        ),
  
        // Update the 'orders' collection to remove references to the user
        Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),
      ])
  
      // Delete user
      const deletedUser = await User.findByIdAndDelete(userToDelete._id)
      revalidatePath("/")
  
      return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
    } catch (error) {
      handleError(error)
    }
  }