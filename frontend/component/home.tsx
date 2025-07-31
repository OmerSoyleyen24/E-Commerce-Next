import React from "react";
import Slider from "./Slider/Slider"
import Categories from './Categories/Categories';
import Products from './Products/Products';
import Campaigns from "./Campaigns/Campaigns";
import Blog from "./Blog/Blog";
import Brands from "./Brands/Brands";
import CampaignSingle from "./CampaignSingle/CampaignSingle";
import Policy from "./Policy/Policy";

const Home = () => {
    return (
        <React.Fragment>
            <Slider />
            <div className="container">
                <Categories />
                <Products />
                <Campaigns />
                <Blog />
                <Brands />
                <CampaignSingle />
                <Policy />
            </div>
        </React.Fragment>
    )
}

export default Home