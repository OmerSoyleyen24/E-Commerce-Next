import React from "react";
import Breadcrumb from "./Breadcrumb/Breadcrumb"
import ProductGallery from "./ProductGallery/ProductGallery"
import ProductInfo from "./ProductInfo/ProductInfo"
import ProductTabs from "./ProductTabs/ProductTabs"
import Policy from "@/component/Policy/Policy";
import "./ProductDetails.css"

const ProductDetails = () => {
    return (
        <React.Fragment>
            <section id="single-product">
                <div className="container">
                    <div className="single-product-wrapper">
                        <Breadcrumb />
                        <div className="single-content">
                            <main className="site-main">
                                <ProductGallery />
                                <ProductInfo />
                            </main>
                        </div>
                        <ProductTabs />
                    </div>
                </div>
            </section>
            <Policy />
        </React.Fragment>
    )
}

export default ProductDetails