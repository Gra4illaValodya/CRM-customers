import { useEffect } from "react";
import "./Pagination.scss";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const visiblePages = 4; // Количество видимых номеров страниц
  const maxPagesToShow = visiblePages + 1; // Включая "..."

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Функция для генерации списка номеров страниц
  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={currentPage === i ? "active" : "s"}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= visiblePages - 1) {
        for (let i = 1; i <= visiblePages; i++) {
          pageNumbers.push(
            <button
              key={i}
              className={currentPage === i ? "active" : "s"}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(<span key="ellipsis">...</span>);
        pageNumbers.push(
          <button
            key={totalPages}
            className={currentPage === totalPages ? "active" : "s"}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </button>
        );
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(
          <button
            key={1}
            className={currentPage === 1 ? "active" : "s"}
            onClick={() => handlePageClick(1)}
          >
            {1}
          </button>
        );
        pageNumbers.push(<span key="ellipsis">...</span>);
        for (let i = totalPages - visiblePages + 1; i <= totalPages; i++) {
          pageNumbers.push(
            <button
              key={i}
              className={currentPage === i ? "active" : "s"}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </button>
          );
        }
      } else {
        pageNumbers.push(
          <button
            key={1}
            className={currentPage === 1 ? "active" : "s"}
            onClick={() => handlePageClick(1)}
          >
            {1}
          </button>
        );
        pageNumbers.push(<span key="ellipsis">...</span>);
        const middlePages = [currentPage - 1, currentPage, currentPage + 1];
        middlePages.forEach((page) => {
          pageNumbers.push(
            <button
              key={page}
              className={currentPage === page ? "active" : "s"}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          );
        });
        pageNumbers.push(<span key="ellipsis-end">...</span>);
        pageNumbers.push(
          <button
            key={totalPages}
            className={currentPage === totalPages ? "active" : "s"}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <div className="pagination__data">
        Showing data 1 to {itemsPerPage} of {totalItems} entries
      </div>
      <div className="pagination__wrapper">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
