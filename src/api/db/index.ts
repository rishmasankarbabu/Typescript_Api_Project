import mongoose, {Schema, model, connect } from 'mongoose'
import { MongoClient } from 'mongodb'
import dotenv from "dotenv"

dotenv.config()


interface IPost {
    content: string,
    author: string
}


const postSchema = new Schema<IPost>({
    content: { type: String, required: true },
    author: { type: String, required:true }
})

const Post = model<IPost>('Post',postSchema)


export const client = new MongoClient(process.env.MONGO_URI!);
export const db = client.db('node-ts-api')

const connectToMongoDb = async() : Promise<Object> => {

    try{
      
        await connect(process.env.MONGO_URI!);
        console.log('Connected!')
      

        const post = new Post({
            content: "First Post",
            author: "author0"
        })

        await post.save();
        console.log("post added")
        return {status: 200, msg: 'Connected to MongoDB and post added successfully'}
         

    }
    catch(err){
        console.error(err)
        return { status: 400,  msg: 'Bad request, couldnt connect' }
    }


}

export default connectToMongoDb;