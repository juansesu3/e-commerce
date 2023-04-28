import Layout from "@/components/Layout"
import axios from "axios";
import { useState } from "react"



const Categories = () => {

  const [name, setName] = useState('');

  const saveCategory = async(ev) => {
    ev.preventDefault();
    await axios.post('/api/categories', {name});
    setName('');

  }


  return (
    <Layout>
      <h1>Categories</h1>
      <label >New category name</label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          type=""
          name=""
          className="mb-0"
          value={name}
          onChange={ev => setName(ev.target.value)}
          placeholder="New category" />
        <button
          type='submit'
          className="btn-primary py-1" >Save</button>
      </form>
      <table>
        thead
        
      </table>
    </Layout>
  )
}

export default Categories