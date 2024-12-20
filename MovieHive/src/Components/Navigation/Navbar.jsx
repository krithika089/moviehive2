import React from "react";
import "./Navbar.css";
import NavLinks from "./NavLinks";
import img from "../../assets/movie_Logo.webp";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
    <div className="nav_Sec">
            <img className="nav_img" src={img} alt="A website logo for Movie Hive website"></img>
            <h2>MovieHive</h2>
            <div className="navBar_console">
                <NavLink to="/"><NavLinks title= "Home"/></NavLink>
                <NavLink to="/top_rated"><NavLinks title= "Popular"/></NavLink>
                <NavLink  to="/upcoming"><NavLinks title= "Latest"/></NavLink>
                <NavLink  to="/subscription"><NavLinks title= "Subscribe Here!"/></NavLink>
            </div>

    </div>
    );
}
export default Navbar;