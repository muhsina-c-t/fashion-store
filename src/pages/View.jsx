import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'



function View() {

  const { pid } = useParams()

  const [product, setProducts] = useState({})
  console.log(product);

  const dispatch = useDispatch()

  const wishlist = useSelector(state => state.wishlistReducer) //??????????

  const cartlist = useSelector(state => state.cartReducer)








  useEffect(() => {
    if (localStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(localStorage.getItem('allProducts'))
      console.log("pp", allProducts);

      setProducts(allProducts.find(p => p.id == pid))
    }
  }, [])





  const handleWishlist = (product) => {

    const existingProduct = wishlist.find(p => p.id == product.id)
    if (existingProduct) {
      alert("Product allready in your wishlist")
    }
    else {
      dispatch(addToWishlist(product))
    }


  }

  //cart push
  const handleCart = (product) => {
    const existingProduct = cartlist.find(p => p.id == product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      alert('product allready in yr cart')
    }
    else {
      dispatch(addToCart(product))
    }
  }





  return (
    <>
      <Header />
      <Row className='py-sm-5 container'>
        <Col className='d-flex align-items-center justify-content-center p-5' lg={6} md={6} sm={12}>
          <img src={product.thumbnail} alt="" height={"350px"} width={"350px"} />
        </Col>
        <Col className='d-flex flex-column justify-content-center p-3 ' g={6} md={6} sm={12}>
          <div className='p-5'>
            <h5 className='text-info'>Product ID:{product.id}</h5>
            <h2 className='fw-bold text-success' style={{ fontFamily: "Merienda" }}>{product.title}</h2>
            <h2 className='fw-bolder text-primary' style={{ fontFamily: "Caveat" }}>${product.price}</h2>
            <p className='text-secondary' style={{ fontFamily: "italic" }}>{product.description}</p>

          </div>
          <div className='d-flex align-items-center justify-content-between px-5'>
            <button className='btn border rounded bg-body-tertiary shadow' onClick={() => handleWishlist(product)} ><i className="fa-solid fa-heart-circle-plus text-danger"></i></button>
            <button className='btn me-5 border rounded bg-body-tertiary shadow' onClick={() => handleCart(product)} ><i className="fa-solid fa-cart-plus text-primary"></i></button>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default View
