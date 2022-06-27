import React from "react";
import { NotificationManager } from "react-notifications";

const initialState = {
  cart: [],
};
const Cart = (state = initialState, action) => {
  let cart = state.cart;
  switch (action.type) {
    case "ADD_TO_CART": {
      const productId = action.payload.id;
      let item = cart.find((item) => item.id === productId);
      NotificationManager.success("Product added in your cart.", "", 2000);
      if (item) {
        let newCart = cart.filter((item) => item.id !== action.payload.id);
        //console.log(newCart);
        item.quantity++;
        newCart.push(item);
        return {
          ...state,
          cart: newCart,
        };
      } else {
        cart.push(action.payload);
        return {
          ...state,
          cart: cart,
        };
      }
    }
    case "DELETE_TO_CART": {
      //console.log("Hello Delete Cart", cart, action.payload);
      NotificationManager.info("Product deleted from your cart.");
      let newCart = cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newCart };
    }

    case "INCREASE_ITEM_IN_CART": {
      let newCartItems = cart.map((item, id) => {
        item.id === action.payload && ++item.quantity;

        return item;
      });

      return { ...state, cart: newCartItems };
    }

    case "DECREASE_ITEM_IN_CART": {
      let newCartItems = cart.map((item, id) => {
        item.id === action.payload && item.quantity >= 1 && --item.quantity;

        return item;
      });

      return { ...state, cart: newCartItems };
    }

    default: {
      return state;
    }
  }
};
export default Cart;
