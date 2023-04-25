import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function EditProductPage() {

    const router = useRouter();
    const {id} = router.query;

    

    return (
        <Layout>
            Edit product from here{id}
        </Layout>
    )

}
