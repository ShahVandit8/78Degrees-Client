import React from 'react'
import { useEffect, useState } from 'react'
import PageHeading from '../../components/PageHeading';
import { getFoodItems, deleteItem } from '../../services/api'
import { Link } from 'react-router-dom'

function FoodItemMenu() {

  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    getAllFoodItems();
  }, []);

  const getAllFoodItems = async () => {
    let allFoodItems = await getFoodItems();
    setFoodItem(allFoodItems.data);
  }

  const deleteFoodItem = async (id) => {
    if (window.confirm('Are you sure you want to Delete Food Item ?')) {
      await deleteItem(id);
      getAllFoodItems();
    } else {
      alert('Food Item details not deleted')
    }
  }

  return (
    <div>
      <div style={{ paddingLeft: 13 }}>
        <PageHeading title="Food Item" />
      </div>
      <div className="mx-1 my-1 px-1 py-1">
        <Link to="/dashboard/addfooditem" className="btn btn-primary">Add New Food Item +</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Item Name</th>
            <th scope="col">Category</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            foodItem.map(foodItem => (
              <tr key={foodItem._id}>
                <td>{foodItem._id}</td>
                <td>{foodItem.Item_Name}</td>
                <td>{foodItem.Category}</td>
                <td>₹ {foodItem.Unit_Price}</td>
                <td>{foodItem.Quantity}</td>
                <td>{foodItem.Description}</td>
                <td>
                  <Link to={`/dashboard/editfooditem/${foodItem._id}`} className="btn btn-primary" style={{ marginRight: 5 }}><i class="far fa-edit"></i> Edit</Link>
                  <button type="button" className="btn btn-danger" onClick={() => deleteFoodItem(foodItem._id)}><i class="far fa-trash-alt"></i> Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default FoodItemMenu
