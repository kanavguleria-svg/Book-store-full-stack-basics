import express from 'express';
import {Book} from "../models/bookModel.js"


const route = express.Router();

route.post("/createBook",async(req,res)=>{
    try {
        let reqBody = req.body;
        if(!reqBody.title || !reqBody.author || !reqBody.publishYear){
            res.status(400).send({message:"please send title,author and publishYear"});
        }
        let book = {
            title:reqBody.title,
            author:reqBody.author,
            publishYear:reqBody.publishYear
        }
        let db_book = await Book.create(book);
        return res.status(201).json({_id:db_book._id,status:"Success"});
    } catch (error) {
        console.log("not able to create book");
        return res.status(500).send({message:"Not able to create the book"});
    }
})

route.get("/allBooks",async(req,res)=>{
    try{
        let booksList = await Book.find({}).lean();
        let booksCount = await Book.countDocuments({});
        return res.status(200).json({count:booksCount,data:booksList});
    }catch(err){
        console.log("not able to fetch the data from db");
        res.status(500).send({message:"not able to send the all the books",status:"Failed"});
    }
})

route.get("/:id",async (req,res)=>{
    try {
        let _id = req.params.id
        let dbBook = await Book.findOne({_id}).select({"title":1,"author":1,"publishYear":1});
        return res.status(200).json({data:dbBook,status:"Success"});
    } catch (error) {
        console.log("can not find the data with this id ",error);
        return res.status(500).send({message:"Id not found",status:"Failed"});
    }
})


route.put("/:id",async (req,res)=>{
    try {
        let _id = req.params.id
        let reqBody = req.body;
        let dbBook = await Book.findOne({_id});
        if(!dbBook){
            return res.status(500).send({"message":"id not found",status:"failed"});
        }
        else{
            let upBookReq = reqBody;
            let upDbBook = await Book.findOneAndUpdate({_id},{$set:upBookReq},{ new : true });
            return res.status(200).json({"_id":upDbBook._id,status:"success"});
        }
    } catch (error) {
        console.log("can not find the data with this id ",error);
        return res.status(500).send({message:"Id not found",status:"Failed"});
    }
})

route.delete("/:id",async(req,res)=>{
    try {
        let _id = req.params.id;
        
        let dbBook = await Book.findOneAndDelete({_id},{new:true});
        if(dbBook){
            return res.status(200).json({"id":dbBook._id,status:"success deleted"});
        }
        return res.status(500).send({message:"id not found",status:"failed"});
    } catch (error) {
        return res.status(500).send({message:"id not found",status:"Failed"});
    }
})

export default route;