import React, { useState } from "react";
import Admin from "./components/Admin";
import "./Style.css";
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Home from "./components/Home";


function App() {

    return (
        <>
        <Router>
        <Routes>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
        <Home/>
        </Router>
        </>
    );
}

export default App;