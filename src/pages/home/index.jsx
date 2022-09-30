import React from "react";
import Card from "../../components/card/Card";
import image from "../../assets/images/controller.png";
import CardList from "../../components/card_list/CardList";
import Container from "../../components/container/Container";
import "./home.style.scss";
const products = [
  {
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 22_000_000,
    onClick: () => {},
  },
  {
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 22_000_000,
    onClick: () => {},
  },
  {
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 22_000_000,
    onClick: () => {},
  },
  {
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 22_000_000,
    onClick: () => {},
  },
  {
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 22_000_000,
    onClick: () => {},
  },
  {
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 22_000_000,
    onClick: () => {},
  },
  {
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 22_000_000,
    onClick: () => {},
  },
  {
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 22_000_000,
    onClick: () => {},
  },
  {
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 22_000_000,
    onClick: () => {},
  },
  {
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 22_000_000,
    onClick: () => {},
  },
  {
    image: image,
    name: "نام آیتم در دسته بندی",
    price: 22_000_000,
    onClick: () => {},
  },
];
const Home = () => {
  return (
    <div className="Home">
      <Container>
        <CardList className="mt-1" title={"دسته بندی اول"} href="/categories/1">
          {products.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </CardList>
        <CardList className="mt-1" title={"دسته بندی دوم"} href="/categories/2">
          {products.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </CardList>
        <CardList className="mt-1" title={"دسته بندی سوم"} href="/categories/3">
          {products.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </CardList>
      </Container>
    </div>
  );
};

export default Home;
