import React from "react";
import './App.css';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Cart } from "./components/Cart";
import Orders from "./components/Orders";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element= {<Home/>} />
          <Route eaxct path="/register" element={<Register/>}/>
          <Route eaxct path="/login" element={<Login/>}/>
          <Route eaxct path="/cart" element={<Cart/>}/>
          <Route eaxct path ="/orders" element={<Orders/>}/>
      </Routes>
    </Router>  
    </>
  );
}

export default App;
