import clientPromise from "@/lib/mongodb";
import { Product } from "@/models/Product";
import mongoose from "mongoose";

export default function handle(req, res) {
    const {method} = req;
    mongoose.Promise = clientPromise;
    if(method === 'POST'){
        const {}
        Product.create({

        })

        res.json('post');

    }

}