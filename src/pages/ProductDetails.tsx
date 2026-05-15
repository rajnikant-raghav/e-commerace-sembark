import { Link, useParams } from "react-router-dom";
import { getProductById } from "../actions";

import { useCart } from "../context/cartContext";
import { useEffect, useState } from "react";
import type { Product } from "../types";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  const { addToCart } = useCart();

  //   const location = useLocation();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">Back To Home</Link>
      <div style={{ padding: "20px" }}>
        <img
          src={product.images[0]}
          alt={product.title}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
          }}
        />

        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          Add To My Cart
        </button>

        <br />
      </div>
    </div>
  );
};

export default ProductDetail;
