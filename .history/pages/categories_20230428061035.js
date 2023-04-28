import Layout from "@/components/Layout"
import { useState } from "react";


const Categories = () => {
  const [name, setName] = useState('');


  const saveCategory = () => {

  }


  return (

    <Layout>
      <h1>Categories</h1>
      <label >New category name</label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          className="mb-0"
          type="text"
          placeholder='Category name'
          onChange={(ev)=>{setName(ev.target.name)}}
          
        />
        <button
          type='submit'
          className="btn-primary py-1" >Save</button>

      </form>

    </Layout>
  )
}

export default Categories