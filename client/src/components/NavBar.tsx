import ThemeToggle from "./ThemeToggle";
import "../styles/navBar.css"
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    return (
        <div className="desktopNavbar">
            <div className="navLinks">
                    <Link className={`navLinkItem ${String(location.pathname) === "/" ? "selectedNavLink" : "unSelectedNavLink"}`} to="/">HOME</Link>
                    <Link className={`navLinkItem ${String(location.pathname) === "/projects" ? "selectedNavLink" : "unSelectedNavLink"}`} to="/projects">PROJECTS</Link>
                    <Link className={`navLinkItem ${String(location.pathname) === "/contact" ? "selectedNavLink" : "unSelectedNavLink"}`} to="/contact">CONTACT</Link>
            </div>
            <ThemeToggle />
        </div>
    )
}

export default NavBar;