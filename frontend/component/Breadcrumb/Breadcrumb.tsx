import "./Breadcrumb.css"

const Breadcrumb = () => {
    return (
        <div className="single-topbar">
            <nav className="breadcrumb">
                <ul>
                    <li>
                        <a href="#">Home &gt;</a>
                    </li>
                    <li>
                        <a href="#">Man &gt;</a>
                    </li>
                    <li>
                        <a href="#">Trousers &gt;</a>
                    </li>
                    <li>
                        Basic Colored Sweatpants With Elastic Hems
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Breadcrumb