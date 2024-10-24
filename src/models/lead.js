
import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
    name:String,
    email:String,
    status:String,
    createdAt:{type:Date, default:Date.now},
})


export const Lead = mongoose.model("Lead", leadSchema);