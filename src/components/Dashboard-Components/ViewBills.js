import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOrder } from '../../services/api.js'
import PageHeading from '../../components/PageHeading';
import moment from 'moment';
import axios from 'axios';
import { saveAs } from 'file-saver'

function ViewBills() {

    const [order, setOrder] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadOrderDetails();
    }, [])

    const loadOrderDetails = async () => {
        const response = await getOrder(id);
        setOrder(response.data);
    }

    const generatePDF = async () => {

        const productlist = order[0]
        console.log(productlist)

        const value1 = {
            "data": {

                "settings": {
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
                    "logo": "https://i.ibb.co/QPrqYGh/Blue-Charcoal-Grid-Etsy-Shop-Icon-1-2.png",
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
            <div>
                <div style={{ paddingLeft: 13 }}>
                    <PageHeading title="View Bills" />
                </div>
                <div className="mx-1 my-1 px-1 py-1">
                    <button class="btn btn-primary mx-2" onClick={() => navigate(-1)}> 	&larr; Back</button>
                </div>
                <div className="row" >
                    <div className="col-lg-6 mx-auto">
                        <div className="card mt-2 d-flex justify-content-center" id="OrderPDF">
                            <div className="card card-header" style={{ backgroundColor: 'white', border: 'none' }}>
                                <div className="row mt-5">
                                    <div className="col-6 text-start ml-4">
                                        <img
                                            src="https://i.ibb.co/QPrqYGh/Blue-Charcoal-Grid-Etsy-Shop-Icon-1-2.png"
                                            className="img-fluid mb-3"
                                            alt=""
                                            style={{ height: '55px' }}
                                        />
                                        <h6>DCA Department, MSU,</h6>
                                        <h6>Vadodara - 390018</h6>
                                        <h6>9773104623</h6>
                                    </div>
                                    <div className="col-5 text-center"><h3>Order Invoice</h3></div>
                                </div>
                                <hr />
                            </div>
                            <div className="card-body border" style={{ marginTop: '-25px' }}>
                                <div className="row">
                                    <div className="col-6 text-start ml-4">
                                        <h6>Bill To,</h6>
                                        <h6>{order.map(item => (item.Customer.name))}</h6>
                                        <h6>{order.map(item => (item.Customer.phone))}</h6>

                                    </div>
                                    <div className="col-5 ml-4">
                                        <h6><b>Invoice No - {order.map(item => (item._id))}</b></h6>
                                        <h6><b>Date </b>{order.map(item => (moment(item.time).format('DD/mm/yyyy')))}</h6>
                                        <h6><b>Time </b>{order.map(item => (moment(item.time).format('hh:mm:ss a')))}</h6>
                                    </div>
                                </div>
                                <div className="mt-5 mb-2">
                                    <table className="table table-striped">
                                        <thead>
                                            <th>Item#</th>
                                            <th>Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </thead>
                                        <tbody>
                                            {
                                                order.map(item => (
                                                    item.cart.map((c, key) => (
                                                        <>
                                                            <tr>
                                                                <td>{key + 1}</td>
                                                                <td>{c.name}</td>
                                                                <td>{c.qty}</td>
                                                                <td>₹ {c.unitprice}</td>
                                                                <td>₹ {c.wholeprice}</td>
                                                            </tr>
                                                        </>
                                                    ))
                                                ))
                                            }

                                        </tbody>
                                    </table>

                                    <div className="row mx-auto bg-dark mt-1 pt-2" style={{ color: 'white' }}>
                                        <div className="col-6 pl-4"><h6 style={{ fontSize: '18px' }}>Total Amount</h6></div>
                                        <div className="col-6 text-right pr-4">{order.map(item => (<h6 style={{ fontSize: '18px' }}>&#8377;  {item.totalamount}</h6>))}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* /.8 */}
                    </div>
                    {/* /.row*/}
                </div>
                <button class="btn btn-primary mt-5 mb-5 d-block mx-auto" type="button" onClick={generatePDF}><i className="fas fa-download"></i> Download receipt</button>
            </div>
        </>
    )
}

export default ViewBills
