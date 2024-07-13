import './Pagination.css';
function Pagination({ pageNumber, handleNext, handlePrevious }) {
  return (
    <div className="pagination">
      <div className="prev" onClick={handlePrevious}>prev</div>
      <div>{pageNumber}</div>
      <div className="next" onClick={handleNext}>next</div>
    </div>
  );
}

export default Pagination;