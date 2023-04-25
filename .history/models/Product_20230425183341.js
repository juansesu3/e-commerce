import { Schema } from "mongoose";

const ModelSchema = new Schema({
    title: {type:String,
    description: String,
    price:{type: Number, required:true},

})