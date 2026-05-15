import { Link } from "react-router-dom";
import type { Product } from "../types";
import { Button } from "@mui/material";
const Card = ({ product }: { product: Product }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <img
        src={product.images[0]}
        alt={product.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <Button variant="contained" color="primary" size="small">
        <Link
          to={`/product/${product.id}`}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          View Details
        </Link>
      </Button>
      {/* <Link to={`/product/${product.id}`}>View Details</Link> */}
    </div>
  );
};

export default Card;
