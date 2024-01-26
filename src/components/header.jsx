import React from 'react'

function Header() {
  return (
    <header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 ">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/banner1.jpg" class="d-block w-10 img-fluid rounded mx-auto" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="img/banner2.jpg" class="d-block w-10 img-fluid rounded mx-auto" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="img/banner3.jpg" class="d-block w-10 img-fluid rounded mx-auto" alt="..."/>
    </div>
  </div>
</div>
    </div>
</header>
  )
}

export default Header