import { Category } from "@/models/Category";


const handle = (req, res) => {
    const {method} = req;

    if(method==='POST'){
        const{name} = req.body;
        Category.cre
    }
}

export default handle