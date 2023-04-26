import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DeleteProductPage() {

    const router = useRouter();
    const []
    const {id} = router.query;

    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get('/api/products?=id'+id).then(response =>{
            response.data
        })
    },[id]);


    const goBack =()=>{
        router.push('/products');

    }

    return(
        <Layout>
           Do you really want to delete product X?
           <button type="">Yes</button>
           <button onClick={goBack}>NO</button>
        </Layout>
    )

}