import React, { useEffect, useState } from 'react'
import { getCategory, deleteCategory } from '../../services/api'
import { Link } from 'react-router-dom'
import PageHeading from '../../components/PageHeading';



function FoodCategory() {

  const [category, setCategory] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    let allCategory = await getCategory();
    setCategory(allCategory.data);
  }

  const deleteFoodCategory = async (id) => {
    if (window.confirm('Are you sure you want to Delete Food Category Details ?')) {
      await deleteCategory(id);
      getAllCategory();
    } else {
      alert('Food Category details not deleted')
    }
  }

  return (
    <div>
      <div style={{ paddingLeft: 13 }}>
        <PageHeading title="Food Category" />
      </div>
      <div className="mx-1 my-1 px-1 py-1">
        <Link to="/dashboard/addfoodcategory" className="btn btn-primary">Add New Category +</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            category.map(category => (
              <tr key={category._id}>
                <td>{category._id}</td>
                <td>{category.Category}</td>
                <td>{category.Description}</td>
                <td>
                  <Link to={`/dashboard/editfoodcategory/${category._id}`} className="btn btn-primary" style={{ marginRight: 5 }}><i class="far fa-edit"></i> Edit</Link>
                  <button type="button" className="btn btn-danger" onClick={() => deleteFoodCategory(category._id)}><i class="far fa-trash-alt"></i> Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default FoodCategory
