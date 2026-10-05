import express, {Request, Response } from 'express'
import cors from 'cors';
import {db} from "./api/db/index";
import {ObjectId} from 'mongodb';

require('dotenv').config();

const PORT= process.env.port || 3001;
const app = express();

app.use(cors());

app.get("/",(req:Request, res:Response): void => {

    try {
          res.json({
           msg: "It working!"
      });
    }
    catch(x){
        console.error(x)
        res.json({error:x});
    }
});

app.get("/item/all", async ( req:Request, res: Response): Promise<void> => {
    try{
        const allItems = await db.collection('posts').find().toArray()
        res.json({ docs: allItems})
    }
    catch(x){
        console.error(x);
        res.json({error: x});
    }

});

app.get("/item/:id", async ( req:Request, res: Response): Promise<void> => {

    const { id } = req.params
     
    try{
        const singleItem = await db.collection('posts').find({_id: new ObjectId(id)}).toArray()
        res.json({ result: singleItem})
    }
    catch(x){
        console.error(x);
        res.json({error: x});
    }

});

app.listen(process.env.PORT || PORT, ():void => {
    console.log("And we're rolling!");
});

export default app;
