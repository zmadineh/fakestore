import React, { useState } from "react";
import Container from "../../container/Container";
import IconButton from "../../icon_button/IconButton";
import { ReactComponent as UserIcon } from "../../../assets/svg/user-icon.svg";
import { ReactComponent as SearchIcon } from "../../../assets/svg/search-icon.svg";
import { ReactComponent as CartIcon } from "../../../assets/svg/cart-icon.svg";
import { Link } from "react-router-dom";
import "./navbar.style.scss";
import Cart from "../../cart/Cart";
const menuItems = [
  {
    title: "فروشگاه",
    href: "/",
  },
  {
    title: "درباره ما",
    href: "/about-us",
  },
];

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <nav className="Navbar">
      <Container>
        <div className="Navbar__content">
          <ul>
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link to={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </li>
            <li>
              <IconButton>
                <UserIcon />
              </IconButton>
            </li>
            <li className="">
              <IconButton onClick={() => setShowCart(true)}>
                <CartIcon />
              </IconButton>
              <Cart open={showCart} handleClose={() => setShowCart(false)} />
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
