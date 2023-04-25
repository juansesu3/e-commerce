import clientPromise from "@/lib/mongodb";
import mongoose from "mongoose";

export default function handle(req, res) {
    const {method} = req;
    mongoose.connect(clientPromise.url)
    if(method === 'POST'){
        res.js

    }

}