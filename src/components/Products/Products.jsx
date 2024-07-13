import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
// export let d = 200;

// const products = [
//   {
//     title: "Apple iPhone 14",
//     price: "Rs. 1,00,000"
//   },
//   {
//     title: "Apple iPhone 13",
//     price: "Rs. 70,000"
//   },
//   {
//     title: "Google Pixel 7",
//     price: "Rs. 50,000"
//   },
//   {
//     title: "Nokia 1100",
//     price: "Rs. 2,000"
//   },
//   {
//     title: "Samsung Galaxy S10",
//     price: "Rs. 1,00,000"
//   },
//   {
//     title: "Sony Xperia S10",
//     price: "Rs. 1,00,000"
//   }
// ]

function Products() {
  let [products, setProducts] = useState([]);
  useEffect(function () {
    fetch('https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products').then((response) => {
      return response.json();
    }).then((res) => {
      console.log(res);
      setProducts(res);
    })
  }, [])

  return (
    <div>
      {
        products.map(function(product, index) {
          return (<ProductCard name={product.title} price={product.price} key={index} />)
        })
      }
    </div>
  )
}

export default Products;