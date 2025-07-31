import "./CategoryItem.css"

const CategoryItem = () => {
    return (
        <li className="category-list-item">
            <a href="#">
                <img src="/img/categories/categories1.png" className="category-image img-fluid" alt="categories1" />
                <span className="category-title">Smartphone</span>
            </a>
        </li>
    )
}

export default CategoryItem