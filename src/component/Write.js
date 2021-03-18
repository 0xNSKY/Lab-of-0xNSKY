import { useState } from 'react';
import { Link } from 'react-router-dom';

const Write = function({ data, handleData, handleIsSide }) {
    const [type, handleType] =useState("");
    const [title, handleTitle] = useState("");
    const [text, handleText] = useState("");
    return (
        <>
        <div className="write-con">
            <div className="write-box">
                <input className="write-title" placeholder="제목을 입력해주세요" onChange={(e) => { handleTitle(e.target.value) }}></input>
                <div className="write-category">
                    <input type="radio" name="type" value="JavaScript" className="category-check" onChange={(e) => { handleType(e.target.value) }}/><p className="category-check-text">JavaScript</p>
                    <input type="radio" name="type" value="Python" className="category-check" onChange={(e) => { handleType(e.target.value) }}/><p className="category-check-text">Python</p>
                    <input type="radio" name="type" value="C++" className="category-check" onChange={(e) => { handleType(e.target.value) }}/><p className="category-check-text">C++</p>
                </div>
                <textarea className="write-body" placeholder="본문을 입력해주세요" onChange={(e) => { handleText(e.target.value) }}></textarea>
                <Link to={`/${type}`}>
                    <button className="submit-post" onClick={() => { handleIsSide(true); handleData(data.concat({id: data.length + 1, type: type, img: "", title: title, text: text}))}}>만들기</button>
                </Link>
            </div>
            <div className="prewrite-box"></div>
        </div>
        </>
    )
}
export default Write;