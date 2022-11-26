import {React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addCategory } from '../../services/api.js'
import PageHeading from '../../components/PageHeading';


function AddFoodCategory() {

    const defaultValue1 = {
        Category : "",
        Description: "",
    }

    const [category, setCategory] = useState(defaultValue1);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value})
        console.log(category)
    } 

    const addFoodCategory = async (e) => {
        e.preventDefault();

        const categoryadded = await addCategory(category);

        if(categoryadded){
          alert('Category Added Successfully')
          navigate(-1)
        }
        else(
          alert("Category Added Failure")
        )
    
    }

  return (
    <div>
    <div style={{paddingLeft: 13}}>
        <PageHeading title="Add Food Category" />
    </div>
    <div className="mx-1 my-1 px-1 py-1">
        <button class="btn btn-primary mx-2" onClick={() => navigate(-1)}> 	&larr; Back</button>
    </div><div className="container">
        <div className="row ">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form" role="form" onSubmit={addFoodCategory}>
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_name">Food Category Name</label>
                            <input id="form_name" type="text" name="Category" className="form-control" required data-error="Category Name is required." onChange={(e) => onValueChange(e)} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Description</label>
                            <textarea id="form_message" name="Description" className="form-control" rows={4} required data-error="Please, enter description" defaultValue={""} onChange={(e) => onValueChange(e)} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="btn btn-primary pt-2 btn-block" style={{color: 'white'}}>Add Category</button>
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
      </div>
  )
}

export default AddFoodCategory
