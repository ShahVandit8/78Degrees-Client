import React from 'react'
import { useEffect, useState } from 'react'
import '../css/FoodOrder.css'
import { getFoodItems } from '../../services/api'
import ItemCard from '../FoodOrder-Components/ItemCard'
import CustomerOrder from './CustomerOrder'

const MainMenu = () => {

    const [foodItem, setFoodItem] = useState([]);
    const [foodcart, setFoodCart] = useState([]);

    const handleclick = (id, price) => {
        if (foodcart.some(cart => cart.id === id)) {
            setFoodCart(
                [...foodcart.filter(cart => cart.id !== id)]
            )
        }
    }


    const additem = (item, quantity) => {
        setFoodCart([...foodcart, { id: item._id, name: item.Item_Name, qty: quantity, unitprice: item.Unit_Price, wholeprice: item.Unit_Price * quantity }])
    }

    const getAllFoodItems = async () => {
        let allFoodItems = await getFoodItems();
        setFoodItem(allFoodItems.data);

    }

    useEffect(() => {
        getAllFoodItems();
    }, []);

    return (
        <>
            <div style={{ width: '100%', position: 'fixed', bottom: '0', zIndex: '1', backgroundColor: '#42A2C3', color: 'white', outline: 'none' }}>
                <button class="btn mt-2" style={{ outline: 'none', width: '100%', backgroundColor: '#42A2C3', color: 'white', borderRadius: "0" }} type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <div className="row">
                        <div className="col-6"><h5 className="d-flex justify-content-start">Cart</h5></div>
                        <div className="col-6 d-flex justify-content-end"><h5 className=""><i class="fa fa-shopping-cart" aria-hidden="true"></i><sup><span className="badge badge-dark badge-counter" style={{ marginTop: '-20' }}>{foodcart.length}</span></sup></h5></div>
                    </div>
                </button>
                <div class="collapse" id="collapseExample">
                    <div class="card mt-2">

                        {
                            foodcart.length ? <div className=''>
                                <table className="table table-striped">
                                    <thead>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Remove</th>
                                    </thead>
                                    <tbody>
                                        {
                                            foodcart.map(item => (
                                                <>

                                                    <tr>
                                                        <td>{item.name}</td>
                                                        <td>{item.qty}</td>
                                                        <td>{item.wholeprice}</td>
                                                        <td><button className="btn btn-danger float-right mr-3"
                                                            style={{ fontSize: 13, marginTop: '-5px', color: 'white' }}
                                                            onClick={() => handleclick(item.id, item.wholeprice)}
                                                            F><i class="far fa-trash-alt"></i></button></td>
                                                    </tr>

                                                </>
                                            ))
                                        }
                                        <tr>
                                            <td colspan="3">Total Amount</td>
                                            <td>₹ {foodcart.reduce((total, currentItem) => total = total + currentItem.wholeprice, 0)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="col-md-12 col-12">
                                    <button type="button d-flex justify-content-center " className="btn btn-dark pt-2 btn-block my-3" style={{ color: 'white' }} data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">Enter Details</button>

                                    <div class="collapse" id="collapseExample1">
                                        <div class="card mt-2" style={{ color: 'black' }}>
                                            <CustomerOrder fooditem={foodcart} />
                                        </div>
                                    </div>

                                </div>
                            </div>

                                :

                                <div className=''>
                                    <div className="col-md-12 col-12 d-flex justify-content-center">
                                        <h6 className="pt-2 my-3" style={{ color: 'black' }} >No item in Cart</h6>
                                    </div>
                                </div>
                        }


                    </div>
                </div>

            </div>
            <div>
                <div>
                    {/* style={{ backgroundColor: '#FF3C6A', color: 'white'}} */}
                    <main id="main">
                        <div className="container py-4 py-sm-5 mx-0 mx-sm-auto">

                            <div className="d-flex mt-5">
                                <p style={{ fontSize: 30 }}><b>Menu</b></p>

                            </div>

                            <div className="row">

                                {
                                    foodItem.map((item, index,) => (
                                        <ItemCard key={index} foodcart={foodcart} setFoodCart={setFoodCart} item={item} Item_Name={item.Item_Name} Description={item.Description} Unit_Price={item.Unit_Price} handleclick={additem} />
                                    ))
                                }


                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default MainMenu
