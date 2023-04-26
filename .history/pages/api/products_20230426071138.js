import clientPromise from "@/lib/mongodb";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import mongoose from "mongoose";

export default async function handle(req, res) {
    const { method } = req;
    await mongooseConnect();
    
console.log({req})
    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Product.findOne())
        } else {
            res.json(await Product.find({ _id: req.query.id }));
           
        }
    }

    if (method === 'POST') {
        const { title, description, price } = req.body;
        const ProductDoc = await Product.create({
            title, description, price

        })

        res.json(ProductDoc);

    }

}