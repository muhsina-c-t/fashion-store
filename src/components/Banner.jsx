import React from 'react'
import Carousel from 'react-bootstrap/Carousel';




function Banner() {
  return (
    <div className='container mt-sm-5'>
             <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://graphicgoogle.com/wp-content/uploads/2017/10/Facebook-New-Fashion-Sale-Banner.jpg"
          alt="First slide" height={500}
        />
        <Carousel.Caption>
          <h5>Limited stocks only!</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/bb34f0161286933.63c2ab4d5d473.jpg"
          alt="Second slide" height={500}
        />
        <Carousel.Caption>
          <h5>New fashion sale</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/6405057838d8ee1d17d6a246/1bfd4b2a-d845-47f2-8e92-0a4efecdfab4/Yellow+and+White+Minimalist+Big+Sale+Banner.png?format=2500w"
          alt="Third slide" height={500}
        />
        <Carousel.Caption>
          <h5>Dont miss our special offer</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
    </div>
  )
}

export default Banner
