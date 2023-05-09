import Layout from "@/components/Layout";
import axios from "axios";
import { Result } from "postcss";
import { useEffect, useState } from "react";
import { withSwal } from 'react-sweetalert2';

const Categories = ({ swal }) => {
  const [editedCtegory, setEditedCtegory] = useState(null);
  const [name, setName] = useState('');
  const [parentCategory, setParentCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [properties, setProperties] = useState([]);

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
    const data = {
      name,
      parentCategory,
      properties: properties.map(p => ({
        name: p.name,
        values: p.values.split(',')
      })),
    }
    if (editedCtegory) {
      data._id = editedCtegory._id;
      await axios.put('/api/categories', data);
      setEditedCtegory(null);
    } else {
      await axios.post('/api/categories', data);
    }
    setName('');
    setParentCategory('');
    setProperties([]);
    fetchCategories();
    console.log(categories)
  };

  const editCategory = (category) => {
    setEditedCtegory(category);
    setName(category.name);
    setParentCategory(category.parent?._id)
    if (setParentCategory === null) {
      setParentCategory('')
    }
    console.log(parentCategory)

  };

  const deleCategory = (category) => {
    swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${category.name}"?`,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Yes, Delete!',
      confirmButtonColor: '#d55',
      reverseButtons: true,
    }).then(async result => {
      // when confirmed and promise resolved...
      //console.log({result})
      if (result.isConfirmed) {
        const { _id } = category;
        await axios.delete('/api/categories?_id=' + _id);
        fetchCategories();
      }
    });
  }

  const addProperty = () => {
    setProperties(prev => {
      return [...prev, { name: '', values: '' }];
    });
  }
  const handlelPropertyNameChage = (index, property, newName) => {
    setProperties(prev => {
      const properties = [...prev];
      properties[index].name = newName;
      return properties
    });
  }

  const handlelPropertyValuesChage = (index, property, newValues) => {
    setProperties(prev => {
      const properties = [...prev];
      properties[index].values = newValues;
      return properties
    });

  }
  const removeProperty = (indexToRemove) => {
    setProperties(prev => {
      return [...prev].filter((p, pIndex) => {
        return pIndex !== indexToRemove;
      });
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
      <form onSubmit={saveCategory} >
        <div className="flex gap-1">
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
              <option key={category._id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-2">

          <label className="block">
            Properties
          </label >
          <button
            onClick={addProperty}
            type="button"
            className="btn-default text-sm mb-2">
            Add New Property
          </button>

          {properties.length > 0 && properties.map((property, index) => (
            <div className=" flex gap-1 mb-2">
              <input
                type="text"
                className="mb-0"
                placeholder="property name (example)"
                onChange={(ev) => handlelPropertyNameChage(
                  index,
                  property,
                  ev.target.value)}
                value={property.name} />
              <input
                type="text"
                className="mb-0"
                placeholder="values, comma separated"
                onChange={(ev) => handlelPropertyValuesChage(
                  index,
                  property,
                  ev.target.value)}
                value={property.values} />
              <button
                onClick={() => removeProperty(index)}
                type="button"
                className="btn-default">Remove
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-1">
          {editedCtegory && (
            <button
              type="button"
              onClick={() => {
                setEditedCtegory(null);
                setName('');
                setParentCategory('');
              }
              }
              className="btn-default">Cancel
            </button>
          )}
          <button
            type='submit'
            className="btn-primary py-1" >Save</button>
        </div>

      </form>
      {!editedCtegory && (
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
      )}

    </Layout>
  )
}

export default withSwal(({ swal }, ref) => (
  <Categories swal={swal} />
));





//export default Categories