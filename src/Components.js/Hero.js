import React from 'react'

export default function Hero() {
  return (
    <div className='hero'>
<h1 className='heroTitle'>Three Years of Social Impact !</h1>
<p className='heroInfo'>We are here with the initiatve to spread awareness about menstural health and hygiene</p>
   <div id="carouselExample" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./nithya_pic2.jpg" class="d-block w-100" alt="Slide 1"/>
    </div>
    <div class="carousel-item"  style={{height:"500px"}}>
      <img src="./nithya web2.avif" class="d-block w-100" alt="Slide 2"/>
    </div>
    <div class="carousel-item">
      <img src="./nithya_pic4.jpg" class="d-block w-100" alt="Slide 3"/>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
