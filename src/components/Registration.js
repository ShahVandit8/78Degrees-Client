import {React, useState } from 'react'
import './css/registration.css'
import { Link } from 'react-router-dom'
import { addUser } from '../services/api.js'

function Registration() {

    const url = 'http://localhost:3000'

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

    const [user, setUser] = useState(defaultValue)

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
        console.log(user)
    }   

    // const onHandleChange = (e) => {
    //   e.preventDefault()
    //   addUserDetails()
    // }

    const addUserDetails = async (e) => {
        e.preventDefault();
        const useradded = await addUser(user);

        if(useradded){
          alert('User Registered Successfully')
          window.location.replace(`${url}`)
        }
        else(
          alert("Registration Unsuccessful")
        )
    }



  return (
    <div id="reg">
    <div className="page-content border">
  <form className="form-v10-content" onSubmit={addUserDetails}>
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
            <select name="empType"  onChange={(e) => onValueChange(e)} required>
              <option value="select" disabled selected>Select Employee Type</option>
              <option value="manager">Manager</option>
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
          />
        </div>
        {/* <div className="form-row">
          <input
            type="text"
            className="additional"
            id="additional"
            placeholder="Additional Information"
            required=""
          />
        </div> */}
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
            />
          </div>
        <div className="form-checkbox">
          <label className="container">
            <p className="mt-1">
              I do accept the{" "}
              <a href="/" className="text">
                Terms and Conditions
              </a>{" "}
              of your site.
            </p>
            <input type="checkbox" className="mt-2" required/>
            <span className="checkmark mt-2"/>
          </label>
        </div>
        <div className="form-row-last">
          <input
            type="submit"
            className="register"
            style={{height: '50px'}}
            value="Register"
            // onClick={() => addUserDetails()}
          />
        </div>
        <div className="form-row">
            <p className="mt-1" style={{color: 'white', textDecoration: 'none'}}>Already registered ? <Link to="/login" style={{color: 'black', textDecoration: 'none'}}>Click here</Link> to login.</p>
        </div>
      </div>
    </div>
  </form>
</div>

    </div>
  )
}

export default Registration
