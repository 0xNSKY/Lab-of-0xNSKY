import { Link } from 'react-router-dom';
const SideMenuItem = function({ category }) {
    return (
        <Link to={`/${category}`}>
            <li className="side-menu-item">
                {category}
            </li>
        </Link>
    )
}

export default SideMenuItem;