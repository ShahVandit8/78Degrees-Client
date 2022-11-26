import React, { useState, useEffect } from 'react'
import PageHeading from '../../components/PageHeading';
import { getTotalOrder } from '../../services/api';
import moment from 'moment';
import { Link } from 'react-router-dom'


function TotalOrders() {

  const [order, setOrder] = useState([]);

  useEffect(() => {
    getTotalOrderDetails();
  }, []);

  const getTotalOrderDetails = async () => {
    let allOrder = await getTotalOrder();
    setOrder(allOrder.data);
  }

  return (
    <>
      <div>
        <div style={{ paddingLeft: 13 }}>
          <PageHeading title="Total Orders" />
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Table No.</th>
              <th scope="col">No. of Items</th>
              <th scope="col">Order Time</th>
              <th scope="col">Order Date</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>


              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              order.map(item => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.Customer.name}</td>
                  <td>{item.TableId}</td>
                  <td>{item.cart.length}</td>
                  <td>{moment(item.time).format('hh:mm:ss a')}</td>
                  <td>{moment(item.time).format('DD/mm/yyyy')}</td>
                  <td>{item.Customer.phone}</td>
                  <td>₹ {item.totalamount}</td>
                  <td>{item.status}</td>
                  <td>
                    <Link to={`/dashboard/vieworder/${item._id}`} className="btn " style={{ marginRight: 5, backgroundColor: '#42A2C3', color: 'white' }}><i class="fas fa-eye"></i> View</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TotalOrders
