import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";


const handle = async (req, res) => {
    const { method } = req;
    await mongooseConnect();

    if (method === 'GET') {
        res.json(await Category.find().populate('parent'));
    }

    if (method === 'POST') {
        const { name, parentCategory } = req.body;
        const categoryDoc = await Category.create({
            name,
            parent: parentCategory
        });
        res.json(categoryDoc);
    }
}

export default handle