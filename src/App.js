import React, { useState } from "react";
import Header from "./components/Header";
import Navbarr from "./components/Navbarr";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import "./Style.css";

function App() {

    return (
        <>
        <Navbarr/>
        <Header/>
        <Section_1/>
        <Section_2/>
        <Section_3/>
        </>
    );
}

export default App;