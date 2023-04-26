import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {

    const router = useRouter();
    const [productInfo, setProductInfo] = useState();
    const {id} = router.query;

    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get('/api/products?=id'+id).then(response =>{
           setProductInfo(response.data)
        })
    },[id]);
    console.log('Hola',productInfo )

    const goBack =()=>{
        router.push('/products');
    }

    return(
        <Layout>
           Do you really want to delete product {productInfo?title} ?
           <button type="">Yes</button>
           <button onClick={goBack}>NO</button>
        </Layout>
    )

}