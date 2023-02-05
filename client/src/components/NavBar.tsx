import ThemeToggle from "./ThemeToggle";
import "../styles/navBar.css"
import { LinkHTMLAttributes, useState } from "react";

const NavBar = () => {

    const [selectedLink, setSelectedLink] = useState('HOME');

    const handleLinkChange = (event: LinkHTMLAttributes<HTMLLinkElement>) => {
    }

    return (
        <div className="desktopNavbar">
            <div className="navLinks">
                <div className="navLinkItem selectedNavLink">
                    <a onClick={handleLinkChange}>HOME</a>
                </div>
                <div className="navLinkItem unSelectedNavLink">
                    <a>PROJECTS</a>
                </div>
                <div className="navLinkItem unSelectedNavLink">
                    <a>CONTACT</a>
                </div>
            </div>
            <ThemeToggle />
        </div>
    )
}

export default NavBar;