import React, { useContext } from "react";
import Card from "../../components/card/Card";
import CardList from "../../components/card_list/CardList";
import Container from "../../components/container/Container";
import "./home.style.scss";
import { cartActions } from "../../context/cart/cart.reducer";
import { products } from "../../db";
import { CartContext } from "../../context/cart/CartProvider";
const Home = () => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="Home">
      <Container>
        <CardList className="mt-1" title={"دسته بندی اول"} href="/categories/1">
          {products.map((item, index) => (
            <Card
              key={index}
              {...item}
              onClick={() => dispatch({ type: cartActions.add, payload: item })}
            />
          ))}
        </CardList>
        <CardList className="mt-1" title={"دسته بندی دوم"} href="/categories/2">
          {products.map((item, index) => (
            <Card
              key={index}
              {...item}
              onClick={() => dispatch({ type: cartActions.add, payload: item })}
            />
          ))}
        </CardList>
        <CardList className="mt-1" title={"دسته بندی سوم"} href="/categories/3">
          {products.map((item, index) => (
            <Card
              key={index}
              {...item}
              onClick={() => dispatch({ type: cartActions.add, payload: item })}
            />
          ))}
        </CardList>
      </Container>
    </div>
  );
};

export default Home;
