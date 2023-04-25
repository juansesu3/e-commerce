import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products(){
    return(
        <Layout>
            <Link className="bg-green" href={'/products/new'}>Add new product</Link>
        </Layout>
    )

}