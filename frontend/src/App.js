// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from './pages/SearchPage/SearchPage'

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {

  const [currentBrewery, setCurrentBrewery] = useState('dog');
  console.log(currentBrewery)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            // <PrivateRoute>
            <HomePage currentBrewery = {currentBrewery} />
            // <SearchPage setCurrentBrewery = {setCurrentBrewery}/>
            // </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
