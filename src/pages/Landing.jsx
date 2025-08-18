import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { fetchProducts } from '../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

import Pagination from '../components/Pagination';
import Banner from '../components/Banner';


export default function Landing() {

  const { allProducts, loading, error } = useSelector(state => state.productReducer)
  console.log(allProducts, loading);

  //pagination

  const [currentPage, setCurrentPage] = useState(1)

  const productPerPage = 8

  let endingIndex = currentPage * productPerPage
  let startingIndex = endingIndex - productPerPage
  let currentProduct = allProducts.slice(startingIndex, endingIndex)



  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])







  return (
    <>
      <Header insideLanding={true} />

      {/* banner -carousel */}
      <Banner/>
      <div className='container'>
        {
          loading ?
            <div className='mt-5 text-center'>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
            :

            allProducts?.length > 0 ?
              <Row className='mt-5 d-flex justify-content-center'>
                {
                  currentProduct.map(pro => (
                    <Col className='mb-2 me-2 d-flex align-items-center justify-content-center' xl={3} lg={4} md={6} sm={12} >
                      {/* card */}
                      <Card className='shadow' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pro.thumbnail} />
                        <Card.Body className='text-center'>
                          <Card.Title style={{ fontFamily: "Caveat" }}>{pro.title.slice(0, 12)}...</Card.Title>
                          <Link className='text-decoration-none text-center' to={`/view/${pro.id}`}>View more</Link>
                        </Card.Body>
                      </Card>

                    </Col>

                  ))
                }
                <Pagination totalProducts={allProducts.length} productPerPage={productPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
              </Row>
              
              :
              <div className='d-flex justify-content-center'>
                <img src="https://cdn.arihantbooks.com/assets/ProductImage/product-not-found.png" alt="" />
              </div>

        }

      </div>
    </>
  )
}
