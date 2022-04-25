import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import { TiBeer } from "@react-icons/all-files/ti/TiBeer";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navContainer">
      <div className="navBar">
        <h2 to="/" style={{ textDecoration: "none", color: "beige" }}>
          {" "}
           OneSip{" "} <TiBeer/>
        </h2>

        <ul>
          <li>
            {user ? (
              <p onClick={logoutUser} className='nav-link'>Logout</p>
            ) : (
              <p onClick={() => navigate("/login")} className='nav-link'>Login</p>
            )}
          </li>
          <li>
            <p onClick={() => navigate("/favourite")} className='nav-link'>Favorite Breweries</p>
          </li>
          <li>
            <p onClick={() => navigate("")} className='nav-link'>Search</p>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
