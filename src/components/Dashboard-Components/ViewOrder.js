import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOrder } from '../../services/api.js'
import PageHeading from '../../components/PageHeading';
import moment from 'moment';
import jsPDF from 'jspdf';

function ViewOrder() {

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
        var doc = new jsPDF("p", "pt");
        doc.html(document.querySelector('#OrderPDF'), {
            callback: function(pdf){
                pdf.save("OrderHelloPDF.pdf");
            }
        })
    }

    return (
        <>
            <div>
                <div style={{ paddingLeft: 13 }}>
                    <PageHeading title="View Order Details" />
                </div>
                <div className="mx-1 my-1 px-1 py-1">
                    <button class="btn btn-primary mx-2" onClick={() => navigate(-1)}> 	&larr; Back</button>
                </div>
                <div className="row" >
                    <div className="col-lg-8 mx-auto">
                        <div className="card mt-2 d-flex justify-content-center" id="OrderPDF">
                            <div className="card card-header" style={{ backgroundColor: 'white' }}>
                                <h3 className="text-center">Order No : {order.map(item => (item._id))}</h3>
                                <div className="row mt-3">
                                    <div className="col-6 text-center">Name: {order.map(item => (item.Customer.name))}</div>
                                    <div className="col-6 text-center">Phone : {order.map(item => (item.Customer.phone))}</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6 text-center">Date: {order.map(item => (moment(item.time).format('DD/mm/yyyy')))}</div>
                                    <div className="col-6 text-center">Time : {order.map(item => (moment(item.time).format('hh:mm:ss a')))}</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="">
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
                                                        item.cart.map((c,key) => (
                                                            <>
                                                                <tr>
                                                                    <td>{key+1}</td>
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

                                        <button class="btn btn-primary mt-5 d-block mx-auto" type="button" onClick={generatePDF}><i className="fas fa-download"></i> Download receipt</button>
                                </div>
                            </div>
                        </div>
                        {/* /.8 */}
                    </div>
                    {/* /.row*/}
                </div>
            </div>
        </>
    )
}

export default ViewOrder
