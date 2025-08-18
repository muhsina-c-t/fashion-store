import React from 'react'

function Pagination({ totalProducts, productPerPage, currentPage, setCurrentPage }) {
    console.log(totalProducts, productPerPage);

    let pages = []
    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pages.push(i)
    }


    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }



    return (
        <>
            <div className='d-flex align-items-center justify-content-center mt-5 pt-5'>
                <button onClick={handlePrev} className='btn  me-2 border rounded text-dark btn-success shadow' disabled={currentPage == 1}><i class="fa-solid fa-angles-left"></i></button>
                {
                    pages.length > 0 &&
                    pages.map(pro => (
                        <button onClick={() => setCurrentPage(pro)} className={`btn border rounded shadow border-success text-black text-light me-2 ${currentPage == pro ? "active" : ""}`}>{pro}</button>

                    ))
                }
                <button onClick={handleNext} className='btn btn-success border rounded shadow text-dark' disabled={currentPage == pages.length}><i class="fa-solid fa-angles-right"></i></button>

            </div>

        </>
    )
}

export default Pagination
