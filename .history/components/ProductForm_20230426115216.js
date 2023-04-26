import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm({
    _id,
    title: existinTitle,
    description: esxistingDescription,
    price: existingPrice,
    images, }) {

    const [title, setTitle] = useState(existinTitle || '');
    const [description, setDescription] = useState(esxistingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    console.log({ _id })

    const saveProduct = async (ev) => {
        ev.preventDefault();
        const data = { title, description, price };
        if (_id) {
            //update           
            await axios.put('/api/products', { ...data, _id });
        } else {
            //create           
            await axios.post('/api/products', data);
        }
        setGoToProducts(true);
    }

    if (goToProducts) {
        router.push('/products');
    }

    const uploadImages = (ev) => {
        const files = ev.target.files
        if (files?.length > 0) {
            const data = new FormData();
            for (const file of files){
                files.forEach(file => {data.append('file', file)});
            }
        }


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
            <label>
                Photos
            </label>
            <div className="mb-2">
                <label className="w-24 h-24 cursor-pointer text-center 
                flex flex-col items-center justify-center text-sm gap-1
                 text-gray-500 rounded-lg bg-gray-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <div>Upload</div>
                    <input type="file" onChange={uploadImages} className="hidden" />
                </label>
                {!images?.length && (
                    <div>No photos in this product</div>
                )}

            </div>
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