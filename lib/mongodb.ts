import { MongoClient, Db, Collection, Document } from "mongodb";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
  var mongoose: { conn: any; promise: any } | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

/**
 * Helper to get a MongoDB collection (Native Driver)
 */
export async function getCollection<T extends Document>(collectionName: string): Promise<Collection<T>> {
  const client = await clientPromise;
  const dbName = process.env.DB_NAME || "onlinemanipal";
  return client.db(dbName).collection<T>(collectionName);
}

/**
 * Mongoose Connection Helper
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached!.conn) return cached!.conn;

  if (!cached!.promise) {
    const dbName = process.env.DB_NAME || "onlinemanipal";
    const opts = {
      bufferCommands: false,
      dbName: dbName,
    };
    cached!.promise = mongoose.connect(uri!, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached!.conn = await cached!.promise;
  return cached!.conn;
}

export default clientPromise;
