import React, { useEffect, useReducer } from "react";
import "./cart.style.scss";
import image from "../../assets/images/controller.png";
import Button from "../button/Button";
import IconButton from "../icon_button/IconButton";
import { cartActions, cartReducer } from "./cart.reducer";
import clsx from "clsx";
const Cart = ({ open, handleClose }) => {
  const [products, dispatch] = useReducer(cartReducer, [
    {
      id: 1,
      image: image,
      name: "کالای ۱",
      price: 22_000_000,
      count: 1,
    },
    {
      id: 2,
      image: image,
      name: "کالای ۲",
      price: 2_000_000,
      count: 5,
    },
  ]);
  const totalCount = products.reduce((prev, p) => prev + p.count, 0);
  const totalPrice = products.reduce((prev, p) => prev + p.price * p.count, 0);
  useEffect(() => {
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [handleClose]);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={clsx("Cart", !open && "Cart--hidden")}
    >
      <header>
        <p>{`${totalCount} کالا`}</p>
        <a href="/cart">مشاهده سبد خرید</a>
      </header>
      <div>
        {products.length ? (
          <ul>
            {products.map((p) => (
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

        <footer>
          <div>
            <p>{"مبلغ قابل پرداخت"}</p>
            <p>
              {totalPrice} {"تومان"}
            </p>
          </div>
          <div>
            <Button>{"ثبت سفارش"}</Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Cart;
