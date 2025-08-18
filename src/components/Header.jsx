import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';



export default function Header({ insideLanding }) {

    const wishCount = useSelector(state => state.wishlistReducer)
    const cartCount = useSelector(state => state.cartReducer)

    const dispatch = useDispatch()


    return (
        <div>
            {/*navbar  */}
            <Navbar expand="lg" className="bg-body-tertiary shadow-sm" >
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold d-flex align-items-center fs-3' style={{ fontFamily: "Dancing Script" }}>
                        <img
                            alt=""
                            src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Emblem.png"
                            width="80"
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}
                        Shopify
                    </Navbar.Brand>        <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">


                        <Nav
                            className="ms-auto d-flex align-items-center justify-content-between"

                        >
                            {
                                insideLanding &&
                                <div className='me-5 pe-5'>
                                    <input type='text' className='form-control fs-6 border rounded' onChange={(e) => dispatch(searchProduct(e.target.value))} style={{ fontFamily: "Caveat", width: "300px" }} placeholder='Search for Products...' />

                                </div>
                            }

                            <Link to="/wishlist"><i className="fa-solid fa-heart text-danger fs-5"></i><Badge bg="light">{wishCount.length}</Badge></Link>
                            <Link to="/cart"><i className="fa-solid fa-cart-shopping text-primary fs-5"></i><Badge bg="light">{cartCount.length}</Badge></Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
