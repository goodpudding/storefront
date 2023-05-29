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

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    console.log(state);
    return state.cart?.items
  }) || [];
  
  const handleDeleteItem = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
    dispatch({ type: "INCREMENT_INVENTORY", payload: itemId });
    return {
      type: "REMOVE_FROM_CART",
      payload: itemId,
    };
  };

  return (
    <div className="cartList">
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {cartItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.image} />
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteItem(item.id)} // pass unique id
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
