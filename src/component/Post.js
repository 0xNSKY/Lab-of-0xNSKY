import { Link } from 'react-router-dom';

const Post = function({ postData }) {
    return (
        <Link to={`/${postData.type}/${postData.id}`}>
        <li className="post-con">
            <div className="most-view-post-img">
                {/* <img src={postData.img} className="most-view-post-img-img"/> */}
            </div>
            <div className="most-view-post-title">
                {postData.title}
            </div>
            <div className="most-view-post-text">
                {postData.text}
            </div>
        </li>
        </Link>
    )
}

export default Post;