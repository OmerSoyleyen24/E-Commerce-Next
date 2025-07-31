import BlogItem from "./BlogItem";
import "./Blogs.css"

const Blogs = () => {
    return (
        <section id="blogs">
            <div className="container">
                <ul className="blog-list">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </ul>
            </div>
        </section>
    )
}

export default Blogs