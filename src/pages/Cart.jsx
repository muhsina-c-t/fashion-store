import React from 'react'
import Header from '../components/header'
import Table from 'react-bootstrap/Table';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice';

export default function Cart() {
  const cartpage = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleDecrement = (pid) => {
    const existingProduct = cartpage.find(pro => pro.id == pid)
    if (existingProduct.quantity > 1) {
      dispatch(decrementQuantity(pid))
    }
    else {
      dispatch(removeCartItem(pid))
    }
  }



  //checkout
  const handleCheckOut = () => {
    alert('your order successfull')
    dispatch(emptyCart())
    navigate("/")
  }
  return (
    <>
      <Header />
      <h1 className='fw-bold text-primary mt-5 ms-5' style={{ fontFamily: "Merienda" }}>Cart Summary</h1>

      {
        cartpage?.length > 0 ?
        <Row className='d-flex align-items-center mt-5 ms-5'>
          <Col lg={8} md={8} sm={12}>
            {/* table */}



            <Table className='table' responsive="md">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tittle</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartpage.map((pr, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{pr.title}</td>
                      <td><img src={pr.thumbnail} alt="" height={'50px'} width={'50px'} /></td>
                      <td><div className='d-flex'>
                        <button className='btn border border-3 rounded  bg-body-tertiary' onClick={() => handleDecrement(pr?.id)}>-</button>
                        <h5 className='p-2'>{pr.quantity}</h5>
                        <button className='btn border border-3 rounded  bg-body-tertiary' onClick={() => dispatch(incrementQuantity(pr?.id))}>+</button>
                      </div></td>
                      <td>{pr.totalprice}</td>
                      <td><button className='btn border border-3 rounded  bg-body-tertiary' onClick={() => dispatch(removeCartItem(pr?.id))}><i className="fa-solid fa-trash text-secondary"></i></button></td>
                    </tr>

                  ))
                }
              </tbody>
            </Table>

            <div className='d-flex justify-content-end gap-4'>
              <button className='btn btn-info ' onClick={() => dispatch(emptyCart())}>EMPTY CART</button>
              <Link to={'/'} className='btn btn-success  me-5'>SHOPE MORE</Link>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <div className=' border border-3 shadow p-5 mt-3 d-flex flex-column justify-content-center me-5' style={{ fontFamily: "italic" }}>
              <h3>Total Items:<span className='text-primary'>{cartpage.reduce((a,b)=>a+b.quantity,0)}</span></h3>
              <h2>Total Amount:<span className='text-primary'>{cartpage.reduce((a, b) => a + b.totalprice, 0)}</span></h2>
              <button className='btn btn-warning form-control border rounded ' onClick={handleCheckOut} style={{ fontFamily: "Roboto Condensed" }}>CHECKOUT</button>
            </div>
          </Col>
        </Row>
        :
        <div className='d-flex align-items-center justify-content-center'>
          <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt=""  />
        </div>
        
      }    </>
  )
}
