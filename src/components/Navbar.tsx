import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  return (
    <AppBar position="static" sx={{ backgroundColor: "#111827" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* <ShoppingCartIcon />   */}
          E-Commerce
        </Typography>

        {/* Cart Icon */}
        <IconButton color="inherit" onClick={() => navigate("/shoppingcart")}>
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
