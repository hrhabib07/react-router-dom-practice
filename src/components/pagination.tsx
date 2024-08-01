const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const getVisiblePages = () => {
    const visiblePage = 5;
    let startPage = Math.max(1, currentPage - Math.floor(visiblePage / 2));
    const endPage = Math.min(totalPages, startPage + visiblePage - 1);
    const pages = [];
    if (endPage - startPage <= visiblePage - 1) {
      startPage = Math.max(1, endPage - visiblePage + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const totalVisiblePages = getVisiblePages();

  return (
    <div className="my-4">
      <button
        className={`mr-2  rounded p-2 bg-gray-50 ${
          currentPage === 1 && "text-gray-500"
        }`}
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
        aria-label="First page"
      >
        &laquo; &laquo;
      </button>
      <button
        className={`mr-2  rounded p-2 bg-gray-50 ${
          currentPage === 1 && "text-gray-500"
        }`}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="previous page"
      >
        &laquo;
      </button>
      {totalVisiblePages.map((page) => {
        return (
          <button
            key={page}
            className={`mr-2 border rounded p-2  ${
              currentPage === page ? "bg-blue-600 text-white" : "bg-gray-50"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      {/* {Array.from({ length: totalPages }, (_, index) => {
                return (
                  <button
                    key={index}
                    className={`mr-2 border rounded p-2  ${
                      currentPage === index + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-50"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                );
              })} */}
      <button
        className={`mr-2 rounded p-2 bg-gray-50 ${
          currentPage === totalPages && "text-gray-500"
        }`}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === totalPages}
        aria-label="next-page"
      >
        &raquo;
      </button>
      <button
        className={`mr-2 rounded p-2 bg-gray-50 ${
          currentPage === totalPages && "text-gray-500"
        }`}
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
        aria-label="Last page"
      >
        &raquo; &raquo;
      </button>
    </div>
  );
};

export default Pagination;
