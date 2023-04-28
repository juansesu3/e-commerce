import Layout from "@/components/Layout"
import { useState } from "react"



const Categories = () => {

  const [name, setName] = useState('');

  const saveCategory = (ev) => {
    ev.preventDefault()

  }
 

  return (
    <Layout>
      <h1>Categories</h1>
      <label >New category name</label>
      <form onSubmit={saveCategory} className="flex gap-1">
      <input
                type=""
                name=""
                value={name}
                onChange={ev => setName(ev.target.value)}
                placeholder="New category" />
        <button
          type='submit'
          className="btn-primary py-1" >Save</button>
      </form>
    </Layout>
  )
}

export default Categories