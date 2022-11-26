import React, { useState } from 'react'
import { placeFoodOrder } from '../../services/api'
import { useNavigate, useParams } from 'react-router-dom'


const CustomerOrder = ({ fooditem }) => {

  const { id } = useParams();
  const [customer, setCustomer] = useState({
    name: '',
    phone: 0,
  })
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value })
  }


  const placeOrderFood = async (e) => {
    e.preventDefault()
    let total = 0;
    fooditem.map(item => {
      total = total + item.wholeprice;
    })

    const cart = { Customer: customer, cart: fooditem, time: Date().toString(), status: "new", totalamount: total };
    console.log(cart)

    if (fooditem.length) {
      const order = await placeFoodOrder(cart, id);

      if (order) {
        alert('Food Order Placed Successfully')
        const mainid = order.data._id;
        navigate(`/orderconfirm/${mainid}`)
      }
      else (
        alert("Sorry Food Order is not placed")
      )
    }
    else{
      alert("Please select any food item to place order")
    }


  }

  return (
    <>
      <div className="row justify-content-center d-flex">
        <div className="col-lg-7">
          <div className="card mx-auto p-1 bg-light">
            <div className="card-body bg-light">
              <div className="container">
                <form id="contact-form" role="form" onSubmit={placeOrderFood}>
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input id="form_name" type="text" name="name" className="form-control" required data-error="Name is required." placeholder="Name" onChange={(e) => onValueChange(e)} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input id="form_name" type="tel" placeholder="Phone No." pattern="[0-9]{10}" onInvalid={e => e.target.setCustomValidity("Enter a vaild phone number.")} onInput={F => F.target.setCustomValidity('')} name="phone" className="form-control" required data-error="Phone number is required." onChange={(e) => onValueChange(e)} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-primary pt-2 btn-block" style={{ color: 'white', backgroundColor: '#42A2C3' }} >Place Order</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CustomerOrder
