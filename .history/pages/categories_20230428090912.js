import Layout from "@/components/Layout"
import axios from "axios";
import { Result } from "postcss";
import { useEffect, useState } from "react"



const Categories = () => {

  const [name, setName] = useState('');
  const [parentCategory, setParentCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios.get('/api/categories').then(result => {
      setCategories(result.data);
    });
  }

  const saveCategory = async (ev) => {
    ev.preventDefault();
    await axios.post('/api/categories', { name, parentCategory });
    setName('');
    fetchCategories();
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

        <select
          className="mb-0"
          onChange={ev => setParentCategory(ev.target.value)}
          value={parentCategory}>
          <option value="">No parent catedory</option>
          {categories.length > 0 && categories.map(category => (
            <option key={category._id} value={category._id}>{category.name}</option>
          ))}
        </select>
        <button
          type='submit'
          className="btn-primary py-1" >Save</button>
      </form>
      <table className="basic mt-4">
        <thead>
          <tr>
            <td>Category name</td>
            <td>Parent category</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 && categories.map(category => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td>{category?.parent?.name}</td>
              <td>
                <div className="flex">
                <button className="btn-primary">Edit</button>
                <button className="btn-primary">Delete</button>
                  
                </div>
               
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Categories