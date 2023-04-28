import Layout from "@/components/Layout"


const Categories = () => {
  return (
    
    <Layout>
         <h1>Categories</h1>
        <label >New category name</label>
        <div className="flex gap-1">
        <input className="mb-0" type="text" name="" value="" placeholder={'Category name'} />
        <button className="btn-primary py-1" >Save</button>
            
        </div>
         
    </Layout>
  )
}

export default Categories