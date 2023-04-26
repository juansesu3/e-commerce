import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm({
    _id,
    title: existinTitle,
    description: esxistingDescription,
    price: existingPrice }) {

    const [title, setTitle] = useState(existinTitle|| '');
    const [description, setDescription] = useState(esxistingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    console.log({_id})

    const saveProduct = async (ev) => {
        ev.preventDefault();
        if(_id){
            //update
            await axios.put('')
        }else{
            //create
            const data = { title, description, price };
            await axios.post('/api/products', data);
            setGoToProducts(true);
        }
       
        
    }

    if (goToProducts) {
        router.push('/products');
    }

    return (

        <form onSubmit={saveProduct}>


            
            <label >Product name</label>
            <input
                type=""
                name=""
                value={title}
                onChange={ev => setTitle(ev.target.value)}
                placeholder="product name" />
            <label >Descripiton</label>
            <textarea
                placeholder="Descripiton"
                value={description}
                onChange={ev => setDescription(ev.target.value)} />

            <label >Price (in USD)</label>
            <input
                type="number"
                name=""
                value={price}
                onChange={ev => setPrice(ev.target.value)}
                placeholder="Price" />
            <button type='submit' className="btn-primary">Save</button>
        </form>


    );
}