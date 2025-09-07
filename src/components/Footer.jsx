import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <>
            <div className='row p-5 m-sm-5 mt-3 bg-body-tertiary shadow-sm'>
                <div className='col-lg-5'>
                    <div className='d-flex align-items-center mb-5'>
                        <img src="http://freelogopng.com/images/all_img/1655837345shopify-png-icon.png" alt="" height={35} width={35} />
                        <h2 className='text-dark fw-bold ms-2' style={{ fontFamily: 'Dancing Script' }}>E.cart</h2>
                    </div>
                    <p className='text-dark pe-sm-5' style={{ textAlign: "justify", fontFamily: "italic" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga suscipit, aliquam alias libero itaque dolorum ullam doloribus debitis deserunt error assumenda consequuntur laudantium sunt, blanditiis iusto, unde ipsum necessitatibus consectetur.</p>
                    <p className='text-dark' style={{ fontFamily: "italic" }}>Lorem ipsum dolor sit amet</p>
                    <p className='text-dark' style={{ fontFamily: "italic" }}>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='col-lg-2'>
                    <h2 className='text-dark mb-5' style={{ fontFamily: "italic" }}>Links</h2>
                    <Link className='text-decoration-none text-dark' to={'/'} style={{ fontFamily: "italic" }}>Landing</Link><br />
                    <Link className='text-decoration-none text-dark' to={'/cart'} style={{ fontFamily: "italic" }}>Cart</Link><br />
                    <Link className='text-decoration-none text-dark' to={'/wishlist'} style={{ fontFamily: "italic" }}>Wishlist</Link>
                </div>
                <div className='col-lg-2'>
                    <h2 className='text-dark mb-5' style={{ fontFamily: "italic" }}>Guides</h2>
                    <Link className='text-decoration-none text-dark' to={'/'} style={{ fontFamily: "italic" }}>React</Link><br />
                    <Link className='text-decoration-none text-dark' to={'/'} style={{ fontFamily: "italic" }}>React-Bootstrap</Link><br />
                    <Link className='text-decoration-none text-dark' to={'/'} style={{ fontFamily: "italic" }}>React-Router</Link>
                </div>
                <div className='col-lg-3'>
                    <h2 className='text-dark mb-5' style={{ fontFamily: "italic" }}>Contact Us</h2>
                    <div className='d-flex align-items-center justify-content-center'>
                        <input className='border rounded form-control fw-bolder fs-5' style={{ fontFamily: "Caveat" }} type="text" placeholder='enter email' />
                        <button className='btn btn-dark ms-2'><i className="fa-solid fa-arrow-right "></i></button>
                    </div>
                    <div className='mt-4'>
                        <i className="fa-brands fa-square-facebook fa-xl ms-2 text-success"></i>
                        <i className="fa-brands fa-square-twitter fa-xl ms-3 text-success"></i>
                        <i className="fa-brands fa-instagram fa-xl ms-3 text-success"></i>
                        <i className="fa-brands fa-linkedin fa-xl ms-3 text-success"></i>
                        <i className="fa-brands fa-github fa-xl ms-3 text-success"></i>
                        <i className="fa-solid fa-square-phone fa-xl ms-3 text-success"></i>

                    </div>

                </div>


                <div className='text-center text-dark' style={{ fontFamily: "italic" }}>Copyright © april 2025 Batch, fashion store, Built with rect</div>
            </div>

        </>
    )
}
