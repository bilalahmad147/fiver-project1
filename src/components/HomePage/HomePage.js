import React from "react";
import Details from "./Details/Details";
import Footer1 from "./Footer1/Footer1";
import Footer3 from "./Footer2/Footer2";
import Header1 from './Header1/Header1';
import Header2 from './Header2/Header2';
import Slider from "./Slider/Slider";


function HomePage() {

    return (
        <div>
            <Header2 />
            <Header1 />
            <Slider />
            <Details />
            <Footer1 />
            <Footer3 />
        </div>
    );
}

export default HomePage;

