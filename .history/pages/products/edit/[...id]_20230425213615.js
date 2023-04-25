import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EditProductPage() {

    const router = useRouter();
    const {id} = router.query;

    useEffect(()=>{
        if(!id)

        axios.get('/api/products?'+id).then(response =>{
            console.log(response.data);

        })

    },[id]);

    return (
        <Layout>
            Edit product from here{id}
        </Layout>
    )

}
