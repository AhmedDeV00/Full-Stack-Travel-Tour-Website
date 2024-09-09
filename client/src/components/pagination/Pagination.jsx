import React from 'react'
import "./pagination.css"


function Pagination({ pages, currentPage, setCurrentPage }) {

    // Helper function to create array of page numbers
    const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);

    // Handle click on a page number
    const handlePageChange = (page) => {

        if (page !== currentPage) {
            setCurrentPage(page); // Update the current page in the parent component
            console.log(`Navigating to page: ${page}`);
        }
    };

    // Handle going to the previous page
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            console.log(`Navigating to previous page: ${currentPage - 1}`);
        }
    };

    // Handle going to the next page
    const handleNext = () => {
        if (currentPage < pages) {
            setCurrentPage(currentPage + 1);
            console.log(`Navigating to next page: ${currentPage + 1}`);
        }
    };



    return (
        <div className="pagination">
            <button
                className="page previous"
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            {pageNumbers.map((page) => (
                <button
                    key={page}
                    className={currentPage === page ? "page active" : "page"}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                className="page next"
                onClick={handleNext}
                disabled={currentPage === pages}
            >
                Next
            </button>
        </div>
    );
}


export default Pagination