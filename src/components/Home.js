import React from "react";
import Header from "./Header";
import Navbarr from "./Navbarr";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";

function Home(){
    return(
        <>
        <Navbarr/>
        <Header/>
        <Section_1/>
        <Section_2/>
        <Section_3/>
        </>
    )
}

export default Home;