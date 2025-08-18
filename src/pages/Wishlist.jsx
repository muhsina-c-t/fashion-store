import React from 'react'
import Header from '../components/header'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';



export default function Wishlist() {

  const wishadd = useSelector(state => state.wishlistReducer)
  const cartadd = useSelector(state => state.cartReducer)  //


  const dispatch = useDispatch()

  const handleCart = (product) => {
    const existingProduct = cartadd.find(p => p.id == product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      alert("product allredy in ur cart")
    } else {
      dispatch(addToCart(product))

    }
  }

  return (

    <>
      <Header />
      <h1 className='fw-bold text-primary mt-5 ms-5' style={{ fontFamily: "Merienda" }}>Your Wishlist</h1>
      {/* card */}
      {
        wishadd?.length > 0 ?
          <Row className='mt-5'>
            {
              wishadd.map(p => (
                <Col className='mb-2 me-2 d-flex align-items-center justify-content-center' xl={3} lg={4} md={6} sm={12} >
                  {/* card */}
                  <Card className='shadow' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={p.thumbnail} />
                    <Card.Body>
                      <Card.Title className='text-center mb-3' style={{ fontFamily: "Caveat" }}>{p.title}</Card.Title>
                      {/* <Link className='text-decoration-none' to={'/view/:id'}>View more</Link> */}

                      <div className='d-flex align-items-center justify-content-between'>
                        <button className='btn border rounded bg-body-tertiary shadow' onClick={() => dispatch(removeFromWishlist(p?.id))} ><i class="fa-solid fa-heart-circle-xmark text-danger"></i></button>
                        <button className='btn  border rounded bg-body-tertiary shadow' onClick={() => handleCart(p)}><i className="fa-solid fa-cart-plus text-primary"></i></button>
                      </div>


                    </Card.Body>
                  </Card>

                </Col>

              ))

            }
          </Row>
          :
          <div className='d-flex justify-content-center p-5'>
            <img src="https://cdn-icons-png.flaticon.com/512/2854/2854363.png" alt="" height={400} width={400} />
          </div>
      }
    </>
  )
}
