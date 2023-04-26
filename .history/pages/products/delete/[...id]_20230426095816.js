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
        axios.get('/api/products?id='+id).then(response =>{
           setProductInfo(response.data)
        })
    },[id]);

    

    const goBack =()=>{
        router.push('/products');
    }

    return(
        <Layout>
            <h1>
           Do you really want to delete product 
           &nbsp; "{productInfo?.title}" ?
           </h1>
           <div className="flex">
           <button 
           className="btn-red">Yes</button>
           <button 
           className="btn-default" 
           onClick={goBack}>NO</button> 
           </div>
           
        </Layout>
    )

}