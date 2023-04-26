import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function DeleteProductPage() {

    const router = useRouter();
    const {}

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