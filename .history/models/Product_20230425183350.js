import { Schema } from "mongoose";

const ModelSchema = new Schema({
    title: {type:String, required:},
    description: String,
    price:{type: Number, required:true},

})