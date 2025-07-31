import React from "react";
import CardProgress from "./CardProgress";
import CardTable from "./CardTable";
import CardCoupon from "./CardCoupon";
import CardTotals from "./CardTotals";
import Policy from "@/component/Policy/Policy";
import "./Card.css"

const Card = () => {
    return (
        <React.Fragment>
            <section id="card">
                <div className="container">
                    <div className="card-page-wrapper">
                        <div className="card-form">
                            <CardProgress />
                            <div className="shop-table-wrapper">
                                <CardTable />
                                <CardCoupon />
                            </div>
                        </div>
                        <div className="card-collaterals">
                            <CardTotals />
                        </div>
                    </div>
                </div>
            </section>
            <Policy />
        </React.Fragment>
    )
}

export default Card
