import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Initialized a cached variable by attempting to retrieve a mongoose propery from a global. 
// In Node.js (global as any) provides a space to store global variables. 
// Cached variable is intended to hold a cached connection for our db. 
let cached = (global as any).mongoose || { conn: null, promise: null};

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error("MONGODB_URI connection is missing");

    // Connect to an already cached connection or create a new connection.  
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'evently',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}

// Setting up a cached db connection for cross multiple implications on serverless routes on Next.js like Vercel.
// Serverless functions and/or environments - where code executed multiple times but NOT in a single continuous server process we need to MANAGE DB CONNECTIONS efficiently R/T each invocation of a servless function, could result in a new connection to the db = which is insufficient and uses alot of db resources

// Each server action will have to call connectToDatabase() repeatedly but by caching the connection or "promise of a connection" - all the subsequent invocations can resuse the existing connection if is still open or just try to create a new one. 