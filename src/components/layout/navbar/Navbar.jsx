import React from "react";
import Container from "../../container/Container";
import IconButton from "../../icon_button/IconButton";
import { ReactComponent as UserIcon } from "../../../assets/svg/user-icon.svg";
import { ReactComponent as SearchIcon } from "../../../assets/svg/search-icon.svg";
import { ReactComponent as CartIcon } from "../../../assets/svg/cart-icon.svg";
import "./navbar.style.scss";
const menuItems = [
  {
    title: "فروشگاه",
    href: "/",
  },
  {
    title: "تماس با ما",
    href: "/contact-us",
  },
];

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Container>
        <div className="Navbar__content">
          <ul>
            {menuItems.map((item) => (
              <li key={item.title}>
                <a href={item.href}>{item.title}</a>
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
            <li>
              <IconButton>
                <CartIcon />
              </IconButton>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
