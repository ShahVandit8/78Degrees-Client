import { React, useState } from 'react'
import './css/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../services/api.js'


function Signin() {

  const navigate = useNavigate();

  const defaultValue = {
    email: "",
    password: "",
  }

  const [user, setUser] = useState(defaultValue)

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)
  }

  const LoginUser = async (e) => {
    e.preventDefault()
    const userloggedin = await loginUser(user);

    if (userloggedin) {

      const userToken = userloggedin.data;
      const token = userToken.usertoken;
      const userdetails = userToken.user;
      const usertype = userToken.emptype;
      console.log(userToken.usertoken)

      if (userToken.usertoken) {
        localStorage.setItem('token', userToken.usertoken)
        localStorage.setItem('username', JSON.stringify(userdetails))
        console.log(userToken);

        if (usertype === 'manager') {
          alert('Manager Login Successful')
          navigate('/dashboard')
        }
        else if (usertype === 'headchef') {
          alert('Head Chef Login Successful')
          navigate('/headchefdashboard')
        }

        // window.location.replace('http://localhost:3000/dashboard');
      }
      else {
        alert('Login Failure')
      }
    }
    else {
      alert('Login Failure')
    }

  }

  return (
    <>
      <div>
        <div className="container">
          {/* <!-- Outer Row --> */}
          <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/* <!-- Nested Row within Card Body --> */}
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <img
                            src="https://i.ibb.co/QPrqYGh/Blue-Charcoal-Grid-Etsy-Shop-Icon-1-2.png"
                            className="img-fluid"
                            alt=""
                            style={{ height: '50px' }}
                          />
                          <h1 className="h2 text-gray-900 mb-4 mt-4"> Login </h1>
                        </div>
                        <form className="user mt-3" id="form" onSubmit={LoginUser}>
                          <div className="form-group">
                            <input type="email" style={{fontSize: '16px'}} className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Enter Email Address..." name="email" onChange={(e) => onValueChange(e)} />
                          </div>
                          <div className="form-group">
                            <input type="password" style={{fontSize: '16px'}} className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" required name="password" onChange={(e) => onValueChange(e)} />
                          </div>
                          <div className="form-group">
                            {/* <div className="custom-control custom-checkbox small">
                              <input type="checkbox" className="custom-control-input" id="customCheck" />
                              <label className="custom-control-label" for="customCheck">Remember Me</label>
                            </div> */}
                          </div>
                          <button type="submit" className="btn btn-primary btn-user btn-block mt-5" style={{ backgroundColor: '#42A2C3', fontSize: "16px" }} >
                            Login
                          </button>
                          <hr />
                        </form>
                        <div className="text-center">
                          <Link className="small mr-4" to="/fgpassword">Forgot Password?</Link>
                          <Link to='/' className="small ml-4" href="">Back to Home Page</Link>
                        </div>
                        <div className="text-center">
                          {/* <Link className="small" to="/signup">Create an Account!</Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Signin
