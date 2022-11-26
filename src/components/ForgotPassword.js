import { React, useState, useEffect } from 'react'
import './css/login.css'
import { Link, useNavigate} from 'react-router-dom'
import { pwdforgot } from '../services/api.js'

function ForgotPassword() {

    const navigate = useNavigate();

  const [user, setUser] = useState({ email: ""})

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)
  }

  const recoverPassword = async (e) => {
    e.preventDefault()
    const result = await pwdforgot(user.email);
    if(result){
        alert("Password is send to your email")
        navigate('/login')
    }
    else{
        alert("Sorry this email doesn't exist in our system. Please try again with correct email")
        document.getElementById("form").reset();
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
                          <h1 className="h2 text-gray-900 mb-4 mt-4"> Forget Password </h1>
                        </div>
                        <form className="user mt-5" id="form" onSubmit={recoverPassword} >
                          <div className="form-group">
                            <input type="email" style={{fontSize: '16px'}} required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" onChange={(e) => onValueChange(e)} />
                          </div>
                          <button type="submit" className="btn btn-primary btn-user btn-block mt-5" style={{ backgroundColor: '#42A2C3', fontSize: "16px" }} >
                            Submit
                          </button>
                          <hr />
                          <p className="text-center"> Note: The password will be sent to your email address.</p>
                        </form>
                        <div className="text-center">
                          <Link to='/login' className="small ml-4" href="">Login</Link>
                          <Link to='/' className="small ml-4" href="">Back to Home Page</Link>
                        </div>
                        <div className="text-center">
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

export default ForgotPassword
