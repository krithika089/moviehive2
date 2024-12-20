import React from "react";
import "./NavLinks.css";

const NavLink = ({title}) => {
    return(
        <div>
        <p className="navLink_section">{title}</p>
        </div>
    );
}
export default NavLink;