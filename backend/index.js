import express from 'express';
import {Book} from "./models/bookModel.js"
import config from './config.js';
import mongoose from 'mongoose';
let PORT = config.PORT; 
import bookRoute from "./routes/bookroutes.js";
import cors from 'cors';

const app = express();

app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:["GET",'POST',"PUT",'DELETE'],
//     allowedHeaders :['Content-Type']
// }));

mongoose.connect(config.mongoConnectUrl).then(()=>{
    console.log("connected succesfully with mongodb!!!");
}).catch((err)=>{
    console.log("Not able to connect with mongodb ",err);
})

app.use("/book",bookRoute);

app.get("/home",(reqBody,res)=>{
    res.status(200).json({"name":"kanav guleria",age:24});
})


app.listen(PORT,()=>{
    console.log(`App is listening at port : ${PORT}`)
})

