import React from "react";
import Breadcrumb from "@/component/Breadcrumb/Breadcrumb";
import ProductGallery from "@/component/Products/ProductGallery/ProductGallery";
import ProductInfo from "@/component/Products/ProductInfo/ProductInfo";
import ProductTabs from "@/component/Products/ProductTabs/ProductTabs";
import Policy from "@/component/Policy/Policy";
import "@/component/Products/ProductDetails.css";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const awaitedParams = await params;
  const productId = awaitedParams.id;

  return (
    <>
      <section id="single-product">
        <div className="container">
          <div className="single-product-wrapper">
            <Breadcrumb />
            <div className="single-content">
              <main className="site-main">
                <ProductGallery productId={productId} />
                <ProductInfo productId={productId} />
              </main>
            </div>
            <ProductTabs />
          </div>
        </div>
      </section>
      <Policy />
    </>
  );
}