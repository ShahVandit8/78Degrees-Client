import React from 'react'

export default function About() {
  return (
    <div style={{backgroundColor : '#fff'}} id="about">
    <div className="container py-5">
  <div className="row align-items-center">
    <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-6">
          <div className="row">
            <div className="col-lg-12 col-md-12 mt-4 pt-2">
              <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuL5srcF6GktLb505pJBRQJ3NcqjaIYNXlEg&usqp=CAU"
                  className="img-fluid"
                  alt="Image3"
                />
                <div className="img-overlay bg-dark" />
              </div>
            </div>
            {/*end col*/}
            <div className="col-12">
              <div className="mt-4 pt-2 text-right">
              </div>
            </div>
          </div>
          {/*end row*/}
        </div>
        {/*end col*/}
        <div className="col-lg-6 col-md-6 col-6">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                <img
                  src="https://b.zmtcdn.com/data/reviews_photos/96c/6901521498603929b09ece97800cb96c_1615563903.jpg"
                  className="img-fluid"
                  alt="Image2"
                />
                <div className="img-overlay bg-dark" />
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-12 col-md-12 mt-4 pt-2">
              <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                <img
                  src="https://b.zmtcdn.com/data/reviews_photos/a4c/4823abb233c5860d5467b2be5b7a1a4c_1615564335.jpg?fit=around|750:500&crop=750:500;*,*"
                  className="img-fluid"
                  alt="Image1"
                />
                <div className="img-overlay bg-dark" />
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
    </div>
    {/*end col*/}
    <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
      <div className="section-title ml-lg-5">
        <h1 className="text-custom font-weight-normal mb-3" style={{color: 'black'}}>About Us</h1>
        <h4 className="title mb-4">
          Our mission is to <br />
          serve you best food.
        </h4>
        <p className="text-muted mb-0">
        Serving Coffee, Tea, Breakfast, Pizza, Sandwiches, Burger, Shakes And Much More!
        </p>
        <div className="row">
          <div className="col-lg-6 mt-4 pt-2">
            <div className="media align-items-center rounded shadow p-3">
              <i className="fa fa-glass h4 mb-0 text-custom" style={{color: '#42A2C3'}} />
              <h6 className="ml-3 mb-0">
                <a href="#" style={{color: '#42A2C3', textDecoration: 'none'}}>
                Delicious Food
                </a>
              </h6>
            </div>
          </div>
          <div className="col-lg-6 mt-4 pt-2">
            <div className="media align-items-center rounded shadow p-3">
              <i className="fa fa-star h4 mb-0 text-custom" style={{color: '#42A2C3'}}/>
              <h6 className="ml-3 mb-0">
                <a href="#" style={{color: '#42A2C3', textDecoration: 'none'}}>
                Good Ambiance
                </a>
              </h6>
            </div>
          </div>
          <div className="col-lg-6 mt-4 pt-2">
            <div className="media align-items-center rounded shadow p-3">
              <i className="fa fa-hourglass-end h4 mb-0 text-custom" style={{color: '#42A2C3'}} />
              
              <h6 className="ml-3 mb-0">
                <a href="#" style={{color: '#42A2C3', textDecoration: 'none'}}>
                Quality Time
                </a>
              </h6>
            </div>
          </div>
          <div className="col-lg-6 mt-4 pt-2">
            <div className="media align-items-center rounded shadow p-3">
              <i className="fa fa-thumbs-up h4 mb-0 text-custom" style={{color: '#42A2C3'}} />
              <h6 className="ml-3 mb-0">
                <a href="#" style={{color: '#42A2C3', textDecoration: 'none'}}>
                Customer Service
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*end col*/}
  </div>
  {/*enr row*/}
</div>

    </div>
  )
}
