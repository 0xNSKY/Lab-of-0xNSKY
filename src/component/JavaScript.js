import MostViewPost from './MostViewPost'
import Post from './Post';

import { useState } from 'react';

const JavaScript = function({ data }) {
    const [mostPostData, handleMostPostData] = useState([{img: "https://media.vlpt.us/images/xlsoh/post/d73f298d-9776-4351-9817-dc2c59d2d0c7/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.png", title: "Deep of JS", text: "오늘은 자바스크립트의 깊은 곳까지 살펴보도록 하겠습니다."}, {img: "https://media.vlpt.us/images/xlsoh/post/d73f298d-9776-4351-9817-dc2c59d2d0c7/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.png", title: "Future of JS", text: "자바스크립트의 미래에 대해서 포스팅 해보겠습니다."}, {img: "https://media.vlpt.us/images/xlsoh/post/d73f298d-9776-4351-9817-dc2c59d2d0c7/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.png", title: "Error of JS", text: "오늘은 자바스크립트 사용중 흔히 겪는 에러에 대한 내용을 다뤄보겠습니다."}]);
    const [isMore, handleisMore] = useState(false);
    return (
        <>
        <div className="top">
            <p className="intro-top-text">JavaScript</p>
        </div>
        <div className="body">
            <p className="intro-body-text">BEST POST</p>
            <selection className="intro-body-dev">
                <MostViewPost mostPostData={mostPostData[0]}/>
                <MostViewPost mostPostData={mostPostData[1]}/>
                <MostViewPost mostPostData={mostPostData[2]}/>
            </selection>
            <button className="dev-more-btn" onClick={() => handleisMore(!isMore)}>더 보기</button>
        </div>
        {
        isMore === true ? 
        <ul className="more-post">
            {/* filter로 수정해야됨 */}
            {data.map(el => <Post postData={el}/>)}
        </ul>
        :
        null
        }
        </>
    )
}

export default JavaScript;