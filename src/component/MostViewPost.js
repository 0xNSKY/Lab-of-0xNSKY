const MostViewPost = function({ mostPostData }) {
    return (
        <div className="most-view-post-con">
            <div className="most-view-post-img">
                <img src={mostPostData.img} className="most-view-post-img-img"/>
            </div>
            <div className="most-view-post-title">
                {mostPostData.title}
            </div>
            <div className="most-view-post-text">
                {mostPostData.text}
            </div>
        </div>
    )
}

export default MostViewPost;