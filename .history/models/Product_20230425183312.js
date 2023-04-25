import { Schema } from "mongoose";

const ModelSchema = new Schema({
    title: String,
    description: String,
    price:{type: Number, required:true},

})