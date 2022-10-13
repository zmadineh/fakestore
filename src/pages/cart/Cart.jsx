import React, { useContext } from "react";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import IconButton from "../../components/icon_button/IconButton";
import { cartActions } from "../../context/cart/cart.reducer";
import { CartContext } from "../../context/cart/CartProvider";
import "./cart.style.scss";
const Cart = () => {
  const { cartItems, dispatch } = useContext(CartContext);
  const totalPrice = cartItems.reduce((prev, p) => prev + p.price * p.count, 0);
  return (
    <div className="CartPage">
      <Container>
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
        <div>
          <h2> قیمت کل {totalPrice} تومان</h2>
          <Button>ادامه خرید</Button>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
