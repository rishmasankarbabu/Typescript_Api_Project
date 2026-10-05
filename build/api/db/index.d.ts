import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
export declare const client: MongoClient;
export declare const db: mongoose.mongo.Db;
declare const connectToMongoDb: () => Promise<Object>;
export default connectToMongoDb;
//# sourceMappingURL=index.d.ts.map