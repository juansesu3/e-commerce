import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const createProduct= ()=

    return (
        <Layout>
            <form onSubmit={}>
                
           
            <h1 >New Product</h1>
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

        </Layout>
    )

}