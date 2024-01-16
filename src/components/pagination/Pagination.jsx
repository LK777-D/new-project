"use client";

import { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    // Render pagination links using buttons, a library, or custom styling
    // Example using buttons:
    <nav>
      <button onClick={() => handlePageClick(0)} disabled={currentPage === 0}>
        First
      </button>
      {/* ... buttons for previous, next, and specific pages ... */}
      <button
        onClick={() => handlePageClick(totalPages - 1)}
        disabled={currentPage === totalPages - 1}
      >
        Last
      </button>
    </nav>
  );
};

export default Pagination;
