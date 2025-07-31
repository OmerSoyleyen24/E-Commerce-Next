import React from "react";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import CampaignSingle from "./CampaignSingle/CampaignSingle";
import Policy from "./Policy/Policy";

const Shop = () => {
    return (
        <React.Fragment>           
            <Categories />
            <Products />
            <CampaignSingle />
            <Policy />
        </React.Fragment>
    )
}

export default Shop