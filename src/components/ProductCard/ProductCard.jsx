import './ProductCard.css';
// import Rating from './Rating.js'
function ProductCard({ name, price }) {
  return (
    <div className="card">
      <div>
        {name}
      </div>
      <div>
        {price.value}
      </div>
    </div>
  )
}

export default ProductCard;