// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";
import BreweryPage from "./pages/BreweryPage/BreweryPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";



function App() {

  const [currentUser, setCurrentUser] = useState('')
  console.log(currentUser)


  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
            <SearchPage setCurrentUser = {setCurrentUser}/>
            <BreweryPage setCurrentUser = {setCurrentUser}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/brewery/:breweryId"
          element={
            // <PrivateRoute>
            <BreweryPage setCurrentUser = {setCurrentUser}/>
            // </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/favourite" element={<FavoritePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
