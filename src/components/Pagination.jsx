import React from 'react'

const Pagination = ({ currentPage, totalPages, onPrev, onNext }) => {

    const disabledPrev = currentPage === 1;
    const disabledNext = currentPage === totalPages;

    return (
        <div className='join bg-white text-teal-700 flex justify-center mt-4'>
            <button onClick={onPrev} className={`join-item btn bg-white text-teal-700 outline-0 border-0 ${disabledPrev ? "btn-disabled" : ""}`}>Previous</button>
            <button className='join-item btn bg-white text-teal-700 outline-0 border-0 btn-disabled no-animation'>Page {currentPage} of {totalPages}</button>
            <button onClick={onNext} className={`join-item btn bg-white text-teal-700 outline-0 border-0 ${disabledNext ? "btn-disabled" : ""}`}>Next</button>
        </div>
    )
}

export default Pagination