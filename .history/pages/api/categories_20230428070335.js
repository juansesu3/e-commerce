import { Category } from "@/models/Category";


const handle = (req, res) => {
    const {method} = req;

    if(method==='POST'){
        const{name} = req.body;
        Category.create({name});
    }
}

export default handle