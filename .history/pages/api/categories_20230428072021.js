import { Category } from "@/models/Category";


const handle = async (req, res) => {
    const { method } = req;
    aw

    if(method === 'GET'){

    }

    if (method === 'POST') {
        const { name } = req.body;
        const categoryDoc = await Category.create({ name });
        res.json(categoryDoc);
    }
}

export default handle