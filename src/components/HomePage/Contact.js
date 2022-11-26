import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_fr7m31j', 'template_bfyba8n', form.current, 'uGyZ85-fLebbxp4vd')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          alert('Message sent sucessfully');
      }, (error) => {
          console.log(error.text);
          alert('Message was not sent, please try again later')
      });
  };


  return (
    <>
    <div className="content" style={{backgroundColor : '#EEE'}} id="contact">
  <div className="container py-5">
    <div className="row align-items-stretch no-gutters contact-wrap">
      <div className="col-md-12">
        <div className="form h-100">
          <h3>Contact Us</h3>
          <form
            className="mb-5"
            method="post"
            id="contactForm"
            ref={form} onSubmit={sendEmail}
          >
            <div className="row">
              <div className="col-md-6 form-group mb-3">
                <label htmlFor="" className="col-form-label">
                  Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="user_name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="col-md-6 form-group mb-3">
                <label htmlFor="" className="col-form-label">
                  Email *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="user_email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-12 form-group mb-3">
                <label htmlFor="budget" className="col-form-label">
                  Budget
                </label>
                <select className="custom-select" id="budget">
                  <option selected="">Choose...</option>
                  <option value="$1000 below">&lt; $1,000</option>
                  <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                  <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                  <option value="$15,000 - $25,000">$15,000 - $25,000</option>
                  <option value="$25,000 >">$25,000 &gt;</option>
                </select>
              </div>
            </div> */}
            <div className="row">
              <div className="col-md-12 form-group mb-3">
                <label htmlFor="message" className="col-form-label">
                  Message *
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  cols={30}
                  rows={4}
                  placeholder="Write your message"
                  defaultValue={""}
                  name="message"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  value="Send Message"
                  className="btn rounded-0 py-2 px-4"
                    style={{backgroundColor: '#42A2C3', color: 'white', cursor: 'pointer'}}
                    type="submit"
                />
                <span className="submitting" />
              </div>
            </div>
          </form>
          <div id="form-message-warning mt-4" />
          <div id="form-message-success">Your message was sent, thank you!</div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
