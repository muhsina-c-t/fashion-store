import React from 'react'
import Carousel from 'react-bootstrap/Carousel';




function Banner() {
  return (
    <div className='container mt-5'>
             <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/004/299/815/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          alt="First slide" height={500}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
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
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/18d60b107187879.5fa16aecd880f.jpg"
          alt="Third slide" height={500}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
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
