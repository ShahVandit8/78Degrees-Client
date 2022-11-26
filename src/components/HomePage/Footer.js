import React from 'react'
import './footer.css'
import { NavHashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
      <>
  <section className="deneb_cta pt-5">
    <div className="container">
      <div className="cta_wrapper">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <div className="cta_content">
              <h3>Try 78 Degrees Cafe Once</h3>
              <p>
              Food is not just eating energy, it’s an experience. With a unique range of heavenly food, 78° knows nothing brings people together more than food.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="button_box">
              <NavHashLink to="/#services" className="btn btn-dark smooth-scroll" style={{ color: 'white'}}>
                See What We Serve
              </NavHashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="deneb_footer">
    <div
      className="widget_wrapper"
      style={{
        backgroundColor:
          "white"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
          {/* <h1 className="text-custom"><b>Foodamy</b></h1> */}
          {/* <img src="../assets/images/logo.png" style={{height : '60px'}} alt="" /> */}
            <div className="widget widegt_about">
              <div className="widget_title">
                <img
                  src="https://i.ibb.co/QPrqYGh/Blue-Charcoal-Grid-Etsy-Shop-Icon-1-2.png"
                  className="img-fluid"
                  alt=""
                  style={{height : '60px'}}
                />
              </div>
              <p>
                78 Degree Cafe is one of the most popular and trusted cafes in Vadodara for locals and out of town visitors.
              </p>
              <ul className="social">
                <li>
                  <a href="/">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="widget widget_link">
              <div className="widget_title pl-1 pl-sm-4">
                <h4 style={{color: 'black'}}>Links</h4>
              </div>
              <ul className="pl-3 pl-sm-5">
                <li>
                  <NavHashLink to="/#main">Home</NavHashLink>
                </li>
                <li>
                  <NavHashLink  to="/#services">Services</NavHashLink>
                </li>
                <li>
                  <NavHashLink  to="/#about">About Us</NavHashLink>
                </li>
                <li>
                  <NavHashLink  to="/#contact">Contact</NavHashLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="widget widget_contact">
              <div className="widget_title">
                <h4 style={{color: 'black'}}>Contact Us</h4>
              </div>
              <div className="contact_info">
                <div className="single_info">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="info">
                    {/* <p>
                      <a href="tel:+919246147999">1800-121-0001</a>
                    </p> */}
                    <p style={{marginTop: '-4px'}}>
                      <a href="tel:+919246147999">+91 977-310-4623</a>
                    </p>
                  </div>
                </div>
                <div className="single_info">
                  <div className="icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="info">
                    {/* <p>
                      <a href="mailto:info@deneb.com">info@foodamy.com</a>
                    </p> */}
                    <p style={{marginTop: '-4px'}}>
                      <a href="mailto:services@deneb.com">78degreescafe@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="single_info">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <p>
                      Department of Computer Application, The MS University<span>Vadodara.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright_text">
              <p>Copyright © 2022 - 78° Degree Cafe. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>
  )
}
