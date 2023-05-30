import React from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart } from '../../store/cart'; // add the correct path to your actions file
import { fetchProducts, incrementInventory } from "../../store/products";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems =
    useSelector((state) => {
      console.log('STATE IN CART', state);
      return state.cart?.items;
    }) || [];

  const handleDeleteItem = (uniqueCartId, productId) => {
    dispatch(removeFromCart(uniqueCartId));
    dispatch(incrementInventory(productId));
    dispatch(fetchProducts());
  };

  return (
    <div id="cartList" style={{ display: "grid", placeItems: "end", gap: "8px" }}>
      <List className="simpleCartList" dense sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
        {cartItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.image} />
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteItem(item.uniqueCartId, item._id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Cart;
