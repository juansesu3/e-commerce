import { models, Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: { type: String, required: true },
    parent:{type:mongo}
});

export const Category = models?.Category || model('Category', CategorySchema );