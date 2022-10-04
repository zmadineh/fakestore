import React from "react";
import Navbar2 from "./navbar/Navbar2";
import Header2 from "./header/Header2";
import Footer2 from "./footer/Footer2";
import { Outlet } from "react-router-dom";

const Layout2 = () => {
    return (
        <React.Fragment>
            <Navbar2 />
            <Header2 />
            <main>
                <Outlet />
            </main>
            <Footer2 />
        </React.Fragment>
    );
};

export default Layout2;
