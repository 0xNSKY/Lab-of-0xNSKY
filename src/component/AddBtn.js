import { Link } from 'react-router-dom'


const AddBtn = function({ handleIsSide, isSide }) {
    const handleAddBtn = function() {
        // + 버튼이 한번 눌리면 - 버튼으로 변경
    }
    return (
        <>
        <Link to={`/write`}>
            {isSide === true ?
                <button className="add-post-btn" onClick={() => {handleIsSide(false)}}>+</button>
            :
                null
            }
        </Link>
        </>
    )
}

export default AddBtn;