import Layout from "@/components/Layout"
import axios from "axios";
import { Result } from "postcss";
import { useEffect, useState } from "react"
import { withSwal } from 'react-sweetalert2';

const Categories = ({ swal }) => {
  const [editedCtegory, setEditedCtegory] = useState(null);
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
    const data = { name, parentCategory }
    if (editedCtegory) {
      data._id = editedCtegory._id;
      await axios.put('/api/categories', data);
      setEditedCtegory(null);
    } else {
      await axios.post('/api/categories', data);
    }
    setName('');
    fetchCategories();
  };

  const editCategory = (category) => {
    setEditedCtegory(category);
    setName(category.name);
    setParentCategory(category.parent?._id)
  };

  const deleCategory = (category) => {
    swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${category.name}"?`,
      showCancelButton:true,
      cancelButtonTitle: ''

    }).then(result => {
      // when confirmed and promise resolved...
    }).catch(error => {
      // when promise rejected...
    });
  }

  return (
    <Layout>
      <h1>Categories</h1>
      <label >
        {editedCtegory
          ? `Edit category ${editedCtegory.name}`
          : 'New category name'}
      </label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          type=""
          name=""
          className="mb-0"
          value={name}
          onChange={ev => setName(ev.target.value)}
          placeholder="Category name" />
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
                  <button
                    onClick={() => editCategory(category)}
                    className="btn-primary mr-1">Edit</button>
                  <button
                    onClick={() => deleCategory(category)}
                    className="btn-primary">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default withSwal(({ swal }, ref) => (
  <Categories swal={swal} />
));





//export default Categories