import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <p to="/" style={{ textDecoration: "none", color: "red" }}>
            <b>"One Sip Everybody Knows the Rules"</b>
          </p>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
            <button onClick={() => navigate('/favourite')}>Favorite Breweries</button>
            <button onClick={() => navigate('')}>Search</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
