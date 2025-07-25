import BrandItem from "../BrandItem"
import "./Brands.css"

const Brands = () => {
    return (
        <section id="brands">
            <div className="container">
                <ul className="brand-list">
                    <BrandItem />
                    <BrandItem />
                    <BrandItem />
                    <BrandItem />
                    <BrandItem />
                    <BrandItem />
                </ul>
            </div>
        </section>
    )
}

export default Brands