import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EditProductPage() {

    const router = useRouter();
    const {id} = router.query;

    useEffect(()=>{

        axios.get('/aou/')

    },[]);

    return (
        <Layout>
            Edit product from here{id}
        </Layout>
    )

}