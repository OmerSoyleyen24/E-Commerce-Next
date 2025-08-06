import React from "react";
import Categories from "@/component/Categories/Categories";
import Products from "@/component/Products/Products";
import CampaignSingle from "@/component/CampaignSingle/CampaignSingle";
import Policy from "@/component/Policy/Policy";

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
