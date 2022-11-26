import React from 'react'

export default function Register() {
  return (
    <div id="reg">
    <div className="page-content border">
  <div className="form-v10-content">
    <form className="form-detail" action="#" method="post" id="myform">
      <div className="form-left">
        <h2>Contact Information</h2>
        <div className="form-group">
          <div className="form-row form-row-1">
            <input
              type="text"
              id="first_name"
              className="input-text"
              placeholder="First Name"
              required=""
            />
          </div>
          <div className="form-row form-row-2">
            <input
              type="text"
              id="last_name"
              className="input-text"
              placeholder="Last Name"
              required=""
            />
          </div>
        </div>
        <div className="form-row">
          <input
            type="text"
            id="your_email"
            className="input-text"
            required=""
            pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
            placeholder="Your Email"
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            id="your_email"
            className="input-text"
            required=""
            pattern="^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$"
            placeholder="Username"
          />
        </div>
        <div className="form-row">
          <input
            type="password"
            className="company"
            id="company"
            placeholder="Password"
            required=""
          />
        </div>
        <div className="form-row">
          <input
            type="password"
            className="company"
            id="company"
            placeholder="Re-enter Password"
            required=""
          />
        </div>
        <div className="form-group">
          <div className="form-row form-row-3">
            <input
              type="text"
              className="business"
              id="business"
              placeholder="Business Arena"
              required=""
            />
          </div>
          <div className="form-row form-row-4">
            <select>
              <option value="employees">Employees</option>
              <option value="trainee">Trainee</option>
              <option value="colleague">Colleague</option>
              <option value="associate">Associate</option>
            </select>
            <span className="select-btn">
              <i className="zmdi zmdi-chevron-down" />
            </span>
          </div>
        </div>
      </div>
      <div className="form-right">
        <h2>Business Details</h2>
        <div className="form-row">
          <select>
            <option className="option" value="select">
              Business Type
            </option>
            <option className="option" value="Cafe">
              Cafe
            </option>
            <option className="option" value="restaurant">
              Restaurant
            </option>
          </select>
          <span className="select-btn">
            <i className="zmdi zmdi-chevron-down" />
          </span>
        </div>
        <div className="form-row">
        <input
            type="text"
            className="company"
            id="company"
            placeholder="Business Name"
            required=""
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            className="street"
            id="street"
            placeholder="Address"
            required=""
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
              id="zip"
              placeholder="Zip Code"
              required=""
            />
          </div>
          <div className="form-row form-row-2">
          <input
              type="text"
              className="zip"
              id="zip"
              placeholder="City"
              required=""
            />
          </div>
        </div>
        <div className="form-row">
          <select>
            <option value="country">Country</option>
            <option value="India">India</option>
          </select>
          <span className="select-btn">
            <i className="zmdi zmdi-chevron-down" />
          </span>
        </div>
        <div className="form-group">
          <div className="form-row form-row-1">
            <input
              type="text"
              className="code"
              id="code"
              placeholder="Code +"
              required=""
            />
          </div>
          <div className="form-row form-row-2">
            <input
              type="text"
              className="phone"
              id="phone"
              placeholder="Phone Number"
              required=""
            />
          </div>
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
            <input type="checkbox" className="mt-2"/>
            <span className="checkmark mt-2"/>
          </label>
        </div>
        <div className="form-row-last">
          <button
            type="submit"
            className="register"
            style={{height: '50px'}}
            defaultValue="Register Badge"
          >Register</button>
        </div>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}
