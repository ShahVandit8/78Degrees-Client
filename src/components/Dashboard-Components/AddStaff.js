import { React, useState, useEffect } from 'react'
import '../css/registration.css'
import { addUser, getEditEmp } from '../../services/api.js'
import { useParams, useNavigate } from 'react-router-dom'
import PageHeading from '../../components/PageHeading';



function AddStaff() {

  const defaultValue = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    empType: "",
    gender: "",
    doj: "",
    address: "",
    zip: "",
    city: "",
    phone: "",
  }

  const [user, setUser] = useState(defaultValue);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadEmpDetails();
  }, [])

  const loadEmpDetails = async () => {
    const response = await getEditEmp(id);
    setUser(response.data);
    console.log(user)
  }

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)
  }

  const addUserDetails = async (e) => {
    e.preventDefault();

    const useradded = await addUser(user);

    if (useradded) {
      alert('Employee Registered Successfully')
      navigate(-1)
    }
    else (
      alert("Employee Registration Unsuccessful")
    )

  }


  return (
    <>
      <div style={{ paddingLeft: 13 }}>
        <PageHeading title="Add Staff Details" />
      </div>
      <div className="mx-1 my-1 px-1 py-1">
        <button class="btn btn-primary mx-2" onClick={() => navigate(-1)}> 	&larr; Back</button>
      </div>
      <div id="reg">
        <div className="page-content" style={{ backgroundColor: '#F8F9FC' }}>
          <form className="form-v10-content" onSubmit={addUserDetails} >
            <div className="form-detail">
              <div className="form-left">
                <h2>Employee Information</h2>
                <div className="form-group">
                  <div className="form-row form-row-1">
                    <input
                      type="text"
                      id="first_name"
                      className="input-text"
                      name="first_name"
                      placeholder="First Name"
                      required
                      onChange={(e) => onValueChange(e)}
                      value={user.first_name}
                    />
                  </div>
                  <div className="form-row form-row-2">
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="input-text"
                      placeholder="Last Name"
                      required
                      onChange={(e) => onValueChange(e)}
                      value={user.last_name}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    id="your_email"
                    name="email"
                    className="input-text"
                    required
                    pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                    placeholder="Your Email"
                    onChange={(e) => onValueChange(e)}
                    value={user.email}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="password"
                    className="company"
                    name="password"
                    id="company"
                    placeholder="Password"
                    required
                    onChange={(e) => onValueChange(e)}
                  />
                </div>
                <div className="form-row">
                  <select name="empType" onChange={(e) => onValueChange(e)} required>
                    <option value="select" selected>Select Employee Type</option>
                    <option value="manager">Manager</option>
                    <option value="headchef">Head Chef</option>
                  </select>
                </div>
              </div>
              <div className="form-right">
                <h2>Contact Details</h2>
                <div className="form-row">
                  <select
                    name="gender"
                    onChange={(e) => onValueChange(e)}
                    required >
                    <option className="option" value="select">
                      Gender
                    </option>
                    <option className="option" value="male">
                      Male
                    </option>
                    <option className="option" value="female">
                      Female
                    </option>
                    <option className="option" value="other">
                      Other
                    </option>
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down" />
                  </span>
                </div>
                <div className="form-row">
                  <input
                    type="date"
                    className="company"
                    name="doj"
                    id="doj"
                    placeholder="Date of Joining"
                    required
                    onChange={(e) => onValueChange(e)}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    className="street"
                    name="address"
                    id="street"
                    placeholder="Address"
                    required
                    onChange={(e) => onValueChange(e)}
                    value={user.address}
                  />
                </div>
                <div className="form-group">
                  <div className="form-row form-row-1">
                    <input
                      type="text"
                      className="zip"
                      name="zip"
                      id="zip"
                      placeholder="Zip Code"
                      required
                      onChange={(e) => onValueChange(e)}
                      value={user.zip}
                    />
                  </div>
                  <div className="form-row form-row-2">
                    <input
                      type="text"
                      className="zip"
                      id="city"
                      name="city"
                      placeholder="City"
                      required
                      onChange={(e) => onValueChange(e)}
                      value={user.city}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    className="phone"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    onChange={(e) => onValueChange(e)}
                    value={user.phone}
                  />
                </div>
                <div className="form-row-last">
                  <input
                    type="submit"
                    className="register"
                    style={{ height: '50px' }}
                    value="Add Employee"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default AddStaff
