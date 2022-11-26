import React from 'react'

function MainSec() {
  return (
    <>
    <div className="mt-5 mt-sm-5" id="main">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://i.ibb.co/w6mHKHP/1.png" alt="First slide" />
    </div>
    <div class="carousel-item">
      {/* <img class="d-block w-100" src="https://i.ibb.co/Y0BN4VZ/2.png" alt="Second slide" /> */}
      <img class="d-block w-100" src="https://i.ibb.co/rvZ419M/2.png" alt="Second slide" />
    </div>
    <div class="carousel-item">
      {/* <img class="d-block w-100" src="https://i.ibb.co/Lgr0SFm/3.png" alt="Third slide" /> */}
      <img class="d-block w-100" src="https://i.ibb.co/wBQGdGC/3.png" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
    </>
  )
}

export default MainSec
