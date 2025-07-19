const ReviewItem = () => {
    return (
        <li className="comment-list-item">
            <div className="comment-avatar">
                <img src="/img/avatars/avatar2.jpg" alt="" />
            </div>
            <div className="comment-text">
                <ul className="comment-star">
                    <li>
                        <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i className="bi bi-star-half"></i>
                    </li>
                </ul>
                <div className="comment-meta">
                    <strong>admin</strong>
                    -
                    <time>April 23,2023</time>
                </div>
                <div className="comment-desc">
                    <p>
                        Sed perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium
                        doloremque laudantium.
                    </p>
                </div>
            </div>
        </li>
    )
}

export default ReviewItem