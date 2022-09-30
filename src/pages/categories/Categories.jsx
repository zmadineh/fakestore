import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import image from "../../assets/images/controller.png";
import Card from "../../components/card/Card";
import Container from "../../components/container/Container";
import "./categories.style.scss";
const Categories = () => {
  const { categoryID } = useParams();
  const [categories, setCategories] = useState([
    { id: 1, title: "موبایل" },
    { id: 2, title: "لپ تاپ" },
    { id: 3, title: "تلویزیون" },
    { id: 4, title: "بازی" },
    { id: 5, title: "لوازم جانبی" },
  ]);
  const [productList, setProductList] = useState([
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
  ]);
  return (
    <div className="Categories">
      <Container>
        <div className="Categories__content">
          <ul className="categories__list">
            {categories.map((item) => (
              <li key={item.id}>
                <Link to={`/categories/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className="product">
            <h1>
              {
                categories.find((item) => item.id.toString() === categoryID)
                  .title
              }
            </h1>
            <div className="product__list">
              {productList.map((p, index) => (
                <Card id={index} {...p} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
