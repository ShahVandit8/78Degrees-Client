import {React, useState} from 'react'

const ItemCard = (props) => {

    const [qty, setQty] = useState(1);

    const onValueChange = (e, item) => {
        const updatedQuantity = Number(e.target.value)
        setQty(updatedQuantity)
        // change quantity in cart if product is added
        if (props.foodcart.some(cart=> cart.name === props.Item_Name)){
            props.setFoodCart(
                [...props.foodcart.filter(cart=> cart.name !== props.Item_Name),
                    {id: props.item._id, name: props.Item_Name, qty: updatedQuantity, unitprice: props.Unit_Price, wholeprice: props.Unit_Price * updatedQuantity }
                ]
            )
        }
    }

  return (
    <>
                                    <div className="col-16 col-md-6 mt-4 pr-2 card" style={{ border: 'none'}}>
                                <div className="shadow border-bottom border-primary p-2 rounded">
                                    <img src="https://i.imgur.com/UxWNRX4.png" style={{ height: 18 }} />
                                    <br />
                                    {/* <p style={{ fontSize: 13, marginTop: 2, color: 'black' }}>Item No: {key}</p> */}
                                    <p style={{ fontSize: 22, marginTop: 2, color: 'black' }}>{props.Item_Name}</p>
                                    <p style={{ fontSize: 13, color: '#4A4A4A', marginTop: '-12px' }}>{props.Description}</p>
                                    <p style={{ fontSize: 19, marginTop: 1 }}>₹ {props.Unit_Price}</p>

                                    <div className="row">
                                        <div className="col-6">
                                            <p style={{ fontSize: 15, marginTop: 1 }}>Qty :
                                                <select style={{ marginLeft: 10 }} name="qty" onChange={(e, item) => onValueChange(e, props.item)}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                </select>
                                            </p>
                                        </div>
                                        <div className="col-6">
                                            {
                                                props.foodcart.some(cart=> cart.name === props.Item_Name) ? 
                                                
                                                <button 
                                                    className="btn btn-primary float-right mr-3" 
                                                    style={{ width: '90px', fontSize: 13, marginTop: '-5px' }}
                                                    disabled='true'
                                                    > Added </button>
                                                
                                                : (

                                                    <button 
                                                    className="btn float-right mr-3" 
                                                    style={{ width: '90px', fontSize: 13, marginTop: '-5px', backgroundColor: '#42A2C3', color: 'white' }}
                                                    onClick={() => props.handleclick(props.item, qty)}
                                                    > Add </button>
                                                    )
                                                }
                                        </div>
                                    </div>
                                </div>
                            </div>
                                    </>
  )
}

export default ItemCard

