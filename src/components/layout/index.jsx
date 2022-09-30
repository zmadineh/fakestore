import React from "react";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
