import React, { useState, useEffect } from 'react'
import PageHeading from '../../components/PageHeading';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getTotalOrder } from '../../services/api'


function SalesAndBills() {

  const [order, setOrder] = useState([]);

  useEffect(() => {
    geNewOrderDetails();
  }, []);

  const geNewOrderDetails = async () => {
    let allNewOrder = await getTotalOrder();
    setOrder(allNewOrder.data);
  }

  return (
    <>
      <div>
        <div style={{ paddingLeft: 13 }}>
          <PageHeading title="Sales and Bills" />
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Invoice ID</th>
              <th scope="col">Date</th>
              <th scope="col">Customer</th>
              <th scope="col">Amount</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              order.map(item => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{moment(item.time).format('DD/mm/yyyy')}</td>
                  <td>{item.Customer.name}</td>
                  <td>₹ {item.totalamount}</td>
                  <td>
                    <Link to={`/dashboard/viewbill/${item._id}`} className="btn " style={{ marginRight: 5, backgroundColor: '#42A2C3', color: 'white' }}><i class="fas fa-eye"></i> View</Link>
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

export default SalesAndBills
