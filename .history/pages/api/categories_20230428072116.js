import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";


const handle = async (req, res) => {
    const { method } = req;
    await mongooseConnect();

    if(method === 'GET'){
        res.json(Category)

    }

    if (method === 'POST') {
        const { name } = req.body;
        const categoryDoc = await Category.create({ name });
        res.json(categoryDoc);
    }
}

export default handle