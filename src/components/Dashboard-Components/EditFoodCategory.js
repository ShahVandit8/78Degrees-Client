import {React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editCategory, getEditCategory } from '../../services/api.js'
import PageHeading from '../../components/PageHeading';


function EditFoodCategory() {

    const defaultValue1 = {
        Category : "",
        Description: "",
    }

    const [category, setCategory] = useState(defaultValue1);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        loadCategoryDetails();
    }, [])

    const loadCategoryDetails = async () =>{
        const response = await getEditCategory(id);
        setCategory(response.data);
    }

    const onValueChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value})
        console.log(category)
    } 

    const editFoodCategory = async (e) => {
      e.preventDefault();
      
        const categoryedited = await editCategory(category, id);

        if(categoryedited){
          alert('Category Updated Successfully')
          navigate(-1)
        }
        else(
          alert("Category Update Failure")
        )
    
    }

  return (
    <div>
    <div style={{paddingLeft: 13}}>
        <PageHeading title="Edit Food Category" />
    </div>
    <div className="mx-1 my-1 px-1 py-1">
        <button class="btn btn-primary mx-2" onClick={() => navigate(-1)}> 	&larr; Back</button>
    </div>
    <div className="container">
        <div className="row ">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form" role="form" onSubmit={editFoodCategory} >
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_name">Food Category Name</label>
                            <input id="form_name" type="text" name="Category" className="form-control" required data-error="Firstname is required." onChange={(e) => onValueChange(e)} value={category.Category}/>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Description</label>
                            <textarea id="form_message" name="Description" className="form-control" rows={4} required data-error="Please, leave us a message." onChange={(e) => onValueChange(e)} value={category.Description}/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="btn btn-primary pt-2 btn-block" style={{color: 'white'}} >Edit Category</button>
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

export default EditFoodCategory
