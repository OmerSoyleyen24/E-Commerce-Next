import BlogItem from "./BlogItem";
import "./Blog.css"

const Blog = () => {
    return (
        <section id="blogs">
            <div className="container">
                <div className="section-title">
                    <h2>From Our Blog</h2>
                    <p>Summer Collection New Modern Design</p>
                </div>
                <ul className="blog-list">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </ul>
            </div>
        </section>
    )
}

export default Blog