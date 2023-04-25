import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    return(
        <Layout>
            <h1 >New Product</h1>
            <label >Product name</label>
           <input type="" name="" value={title} onChange={set} placeholder="product name"/>
           <label >Descripiton</label>
           <textarea placeholder="Descripiton"></textarea>
           <label >Price (in USD)</label>
           <input type="number" name="" value="" placeholder="Price"/>
           <button className="btn-primary">Save</button>
          
        </Layout>
    )

}