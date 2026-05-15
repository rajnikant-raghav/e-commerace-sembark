import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../context/cartContext";
// import { Product } from "../types";
const CartPage = () => {
  const {
    cartItems,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Shopping Cart
      </Typography>

      {cartItems.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            p: 2,
            borderRadius: 3,
          }}
        >
          {/* Product Image */}
          <img
            src={item.images[0]}
            alt={item.title}
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          {/* Product Details */}
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              {item.title}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              ₹{item.price}
            </Typography>

            {/* Quantity Controls */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                gap: 1,
              }}
            >
              <IconButton
                color="primary"
                onClick={() => decreaseQuantity(item.id)}
              >
                <RemoveIcon />
              </IconButton>

              <Typography variant="h6">{item.quantity}</Typography>

              <IconButton
                color="primary"
                onClick={() => increaseQuantity(item.id)}
              >
                <AddIcon />
              </IconButton>
            </Box>
          </CardContent>

          {/* Remove Button */}
          <IconButton color="error" onClick={() => removeFromCart(item.id)}>
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}

      <Divider sx={{ my: 3 }} />

      {/* Total */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Total: ₹{totalPrice}
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#111827",
            "&:hover": {
              backgroundColor: "#000",
            },
          }}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
