import {React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getEditFoodItem, getCategory, editFoodItem } from '../../services/api.js'
import PageHeading from '../../components/PageHeading';


function EditFoodItem() {

    const defaultValue1 = {
        Item_Name : '',
        Category : "",
        Unit_Price : 0,
        Quantity : 0,
        Description : "",
    }

    const [fooditem, setFoodItem] = useState(defaultValue1);
    const [category, setCategory] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        loadItemDetails();
        getAllCategory();
    }, [])

    const loadItemDetails = async () =>{
        const response = await getEditFoodItem(id);
        setFoodItem(response.data);
    }

    const getAllCategory = async () => {
        let allCategory = await getCategory();
        setCategory(allCategory.data);
    }

    const onValueChange = (e) => {
        setFoodItem({ ...fooditem, [e.target.name]: e.target.value})
        console.log(fooditem)
    } 

    const editFoodItemDetails = async (e) => {
        e.preventDefault();
        
        const ItemEdited = await editFoodItem(fooditem, id);

        if(ItemEdited){
          alert('Food Item Details Edited Successfully')
          navigate(-1)
        }
        else(
          alert("Item Details Edit Failure")
        )
    
    }

  return (
    <div>
     <div style={{paddingLeft: 13}}>
          <PageHeading title="Edit Food Item" />
        </div>
    <div className="mx-1 my-1 px-1 py-1">
        <button class="btn btn-primary mx-2" onClick={() => navigate(-1)}> 	&larr; Back</button>
    </div>
    <div className="row ">
      <div className="col-lg-7 mx-auto">
        <div className="card mt-2 mx-auto p-4 bg-light">
          <div className="card-body bg-light">
            <div className="container">
              <form id="contact-form" role="form" onSubmit={editFoodItemDetails} >
                <div className="controls">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_name">Item Name</label>
                        <input id="form_name" type="text" name="Item_Name" className="form-control" required data-error="Item Name is required." onChange={(e) => onValueChange(e)} value={fooditem.Item_Name}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                      <label htmlFor="form_need">Categoty</label>
                        <select id="form_need" name="Category" className="form-control" required data-error="Please select category." onChange={(e) => onValueChange(e)} value={fooditem.Category}>
                          <option value selected disabled>--Select Category--</option>
                        {
                            category.map(category => (
                                <option>{category.Category}</option>
                            ))
                        }
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_email">Unit Price</label>
                        <input id="form_email" type="text" name="Unit_Price" className="form-control" placeholder="Enter Only Number" required data-error="Valid Unit Price is required." onChange={(e) => onValueChange(e)} value={fooditem.Unit_Price} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                      <label htmlFor="form_lastname">Quantity</label>
                        <input id="form_lastname" type="text" name="Quantity" className="form-control" placeholder="Enter Only Number" required data-error="Quantity is required." onChange={(e) => onValueChange(e)} value={fooditem.Quantity}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="form_message">Description</label>
                        <textarea id="form_message" name="Description" className="form-control" rows={4} required="required" data-error="Please, leave us a message." defaultValue={""} onChange={(e) => onValueChange(e)} value={fooditem.Description}/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-primary pt-2 btn-block" style={{color: 'white'}} >Edit Item</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /.8 */}
      </div>
      {/* /.row*/}
    </div>
  </div>
  )
}

export default EditFoodItem
