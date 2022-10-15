import React, { useState } from "react";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Navbarr from "./components/Navbarr";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import "./Style.css";
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"


function App() {

    return (
        <>
        <Router>
        <Routes>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
        <Navbarr/>
        <Header/>
        <Section_1/>
        <Section_2/>
        <Section_3/>
        </Router>
        </>
    );
}

export default App;