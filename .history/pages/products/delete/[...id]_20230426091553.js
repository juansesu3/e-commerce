import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function DeleteProductPage() {

    const router = useRouter();

    const goBack =()=>{
        router.

    }

    return(
        <Layout>
           Do you really want to delete product X?
           <button type="">Yes</button>
           <button>NO</button>
        </Layout>
    )

}