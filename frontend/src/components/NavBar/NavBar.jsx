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
    // <div className="navBar">
    //   <ul>
    //     <li className="brand">
    //       <p to="/" style={{ textDecoration: "none", color: "red" }}>
    //         <b>OneSip</b>
    //       </p>
    //     </li>
    //     <li>
    //       {user ? (
    //         <button onClick={logoutUser}>Logout</button>
    //       ) : (
    //         <button onClick={() => navigate("/login")}>Login</button>
    //       )}
    //         <button onClick={() => navigate('/favourite')}>Favorite Breweries</button>
    //         <button onClick={() => navigate('')}>Search</button>
    //     </li>
    //   </ul>
    // </div>
    <div className="navContainer">
      <div className="navBar">
        <h2 to="/" style={{ textDecoration: "none", color: "red" }}>
          {" "}
          OneSip{" "}
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
