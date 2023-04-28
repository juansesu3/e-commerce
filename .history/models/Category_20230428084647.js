import { models, Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: { type: String, required: true },
    parent:{type:mongoose.ty}
});

export const Category = models?.Category || model('Category', CategorySchema );