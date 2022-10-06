import React, { useContext } from "react";
import IconButton from "../../components/icon_button/IconButton";
import { cartActions } from "../../context/cart/cart.reducer";
import { CartContext } from "../../context/cart/CartProvider";

const Cart = () => {
  const { cartItems, dispatch } = useContext(CartContext);
  return (
    <div>
      {cartItems.length ? (
        <ul>
          {cartItems.map((p) => (
            <li key={p.id}>
              <img src={p.image} alt="" />
              <div>{p.name}</div>
              <div className="Cart__controller">
                <IconButton
                  onClick={() =>
                    dispatch({
                      type: cartActions.add,
                      payload: p,
                    })
                  }
                >
                  {"+"}
                </IconButton>
                {p.count}
                <IconButton
                  onClick={() =>
                    dispatch({
                      type: cartActions.decrease,
                      payload: p,
                    })
                  }
                >
                  {"-"}
                </IconButton>
              </div>
              <div>{p.price * p.count} تومان</div>
            </li>
          ))}
        </ul>
      ) : (
        <h2>{"سبد خرید شما خالی است"}</h2>
      )}
    </div>
  );
};

export default Cart;
