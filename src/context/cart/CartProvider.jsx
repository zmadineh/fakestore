import React from "react";
import { cartReducer } from "./cart.reducer";

export const CartContext = React.createContext({
  cartItems: [],
  dispatch: () => {},
});

const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = React.useReducer(cartReducer, []);

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        dispatch: dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
