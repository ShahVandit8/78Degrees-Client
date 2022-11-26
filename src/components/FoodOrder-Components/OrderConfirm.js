import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOrder } from '../../services/api'
import moment from 'moment';
import axios from 'axios';

function OrderConfirm() {

    const { id } = useParams();
    const [order, setOrder] = useState([]);

    useEffect(() => {
        getOrderDetails();
    }, [])

    const getOrderDetails = async () => {
        const OrderDetails = await getOrder(id);
        setOrder(OrderDetails.data)
    }

    const GenerateInvoice = async () => {
      
        const productlist = order[0]

        const value1 = {
            "data": {

                "settings": {
                    //"documentTitle": "RECEIPT", //Defaults to INVOICE
                    "currency": "INR",
                    "tax-notation": "gst", //or gst
                    "marginTop": 25,
                    "marginRight": 25,
                    "marginLeft": 25,
                    "marginBottom": 25,
                    "logo": "https://i.ibb.co/QPrqYGh/Blue-Charcoal-Grid-Etsy-Shop-Icon-1-2.png", //or base64
                    "logoExtension": "png", //only when logo is base64
                },
                
                "images": {
                    // The logo on top of your invoice
                    "logo": "https://i.ibb.co/QPrqYGh/Blue-Charcoal-Grid-Etsy-Shop-Icon-1-2.png",
                    // The invoice background
                    // "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
                },
                
                "sender": {
                    "company": "78 Degrees Cafe",
                    "address": "DCA Dept, MSU",
                    "zip": "390018",
                    "city": "Vadodara",
                },
                "client": {
                    "company": order.map(item => (item.Customer.name)),
                    "zip": order.map(item => (item.Customer.phone)),
                },

                "information": {
                    "number": productlist._id,
                    "date": moment(productlist.time).format('DD/mm/yyyy'),
                    "due-date": moment(productlist.time).format('hh:mm:ss a')
                },

                "products": 
                productlist.cart.map(item => ({
                        "quantity": item.qty,
                        "description": item.name,
                        "tax-rate": 0,
                        "price": item.unitprice
                }
                ))
                ,
                "bottom-notice": "This is a online invoice, no signature needed",

                "translate": {
                    "number": "Invoice No",
                    "due-date": "Time"
                }
            }
        }

        const result = await axios.post('https://api.easyinvoice.cloud/v2/free/invoices', value1)

        const linkSource = `data:application/pdf;base64,${result.data.data.pdf}`;
        const downloadLink = document.createElement("a");
        const fileName = `Invoice#${order.map(item => (item._id))}-${order.map(item => (item.Customer.name))}.pdf`;

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
       
    }

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>


                <div className="container mt-4 mb-4">
                    <div className="card mx-auto">
                        <div>
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/party-popper_1f389.gif" className="mx-auto d-block mt-3 h-25 w-25" />
                        </div>

                        <div className="mt-5">
                            <h3 className="text-center" style={{ color: 'black' }}>Your Order has been confirmed</h3>
                            <p className="text-center" >Thanks for ordering from us</p>
                            <p className="text-center" >Your order will be served at your table.</p>
                        </div>

                        <div className="container mt-3 text-center">
                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                View Order Details
                            </button>
                            <div class="collapse" id="collapseExample">
                                <div class="card mt-2">
                                    <div className=''>
                                        <h4>Order #{id}</h4>
                                        {
                                            order.map(item => (
                                                <>
                                                    <h6>Name: {item.Customer.name}</h6>
                                                    <h6>Phone: {item.Customer.phone}</h6>
                                                </>
                                            ))
                                        }

                                        <table className="table table-striped">

                                            <thead>
                                                <th>Name</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                            </thead>

                                            <tbody>
                                                {
                                order.map(item => (
                                    item.cart.map(c => (
                                        <>
                                        <tr>
                                            <td>{c.name}</td>
                                            <td>{c.qty}</td>
                                            <td>₹ {c.wholeprice}</td>
                                        </tr>
                                    </>
                                    ))                    
                                ))
                            }

                                            </tbody>
                                        </table>

                                        <div className="row mx-auto bg-dark mt-1 pt-2" style={{color: 'white'}}>
                                        <div className="col-6"><h6 style={{fontSize: '18px'}}>Total Amount</h6></div>
                                        <div className="col-6">{order.map(item => (<h6 style={{fontSize: '18px'}}>₹  {item.totalamount}</h6>))}</div>
                                        </div>

                                        <button  class="btn btn-primary my-4" type="button" onClick={() => GenerateInvoice()}><i className="fas fa-download"></i> Download receipt</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to='/' className="small m-4 text-center" href="">Back to Home Page</Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default OrderConfirm
