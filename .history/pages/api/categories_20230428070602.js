import { Category } from "@/models/Category";


const handle = async (req, res) => {
    const { method } = req;

    if (method === 'POST') {
        const { name } = req.body;
        const categoryDoc = await Category.create({ name });
        res.json(cate)
    }
}

export default handle