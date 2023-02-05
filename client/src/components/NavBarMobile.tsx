import ThemeToggle from "./ThemeToggle";
import "../styles/navBarMobile.css"
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavBarMobile = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(false);
    const [clicked, setClicked] = useState(false);

    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
        setClicked(true);
    }

    return (
        <div className="navbarWrapper">
        <div className="mobileNavbar">
            <ThemeToggle />
            <div className={`hamburger ${activeMenu ? "is-active" : ""}`} id="hamburger-1" onClick={toggleMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
        <div className={`${activeMenu ? "navLinksMobileActive" : clicked ? "navLinksMobile" : "navLinksBefore"}`}>
            <Link onClick={toggleMenu} className={`navLinkItem ${String(location.pathname) === "/" ? "selectedNavLink" : "unSelectedNavLink"}`} to="/">HOME</Link>
            <Link onClick={toggleMenu} className={`navLinkItem ${String(location.pathname) === "/projects" ? "selectedNavLink" : "unSelectedNavLink"}`} to="/projects">PROJECTS</Link>
            <Link onClick={toggleMenu} className={`navLinkItem ${String(location.pathname) === "/contact" ? "selectedNavLink" : "unSelectedNavLink"}`} to="/contact">CONTACT</Link>
        </div>
        </div>
    )
}

export default NavBarMobile;