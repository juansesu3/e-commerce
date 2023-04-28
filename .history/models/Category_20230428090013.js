import mongoose, { models, Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: { type: String, required: true },
    parent: { type: mongoose.Types.ObjectId,ref:'Categpry' },
});

export const Category = models?.Category || model('Category', CategorySchema);