import { useState } from 'react';
import SideMenuItem from './SideMenuItem'

const SideMenu = function({ categoryDev, categoryDaily, handleCategoryDev, handleCategoryDaily }) {
    const [menuStyle, handleMenuStyle] = useState('dev');
    const [isExit, handleIsExit] = useState(false);
    const handleSide = function() {
        // 사이드 메뉴를 오른쪽으로 밀어줍니다.
        const sideMenu = document.querySelector('.side-menu');
        sideMenu.classList.remove('side-menu-off');
        sideMenu.classList.add('side-menu-on');
    }
    const handleSideOff = function() {
        // 사이드 메뉴를 원상복귀 시켜줍니다.
        const sideMenu = document.querySelector('.side-menu');
        sideMenu.classList.remove('side-menu-on');
        sideMenu.classList.add('side-menu-off');
    }
    return (
        <>
        <div className="side-menu">
            <button className="side-menu-btn-dev" onClick={() => { handleSide(); handleIsExit(true); handleMenuStyle('dev')}}>dev</button>
            <button className="side-menu-btn-daily" onClick={() => { handleSide(); handleIsExit(true); handleMenuStyle('daily') }}>daily</button>
            { isExit === true 
            ?
            <button className="side-menu-btn-exit" onClick={() => { handleSideOff(); handleIsExit(false) }}>X</button>
            :
            null
            }
            <ul className = "side-menu-items">
                {menuStyle === 'dev' ? categoryDev.map(el => <SideMenuItem category={el}/>) : categoryDaily.map(el => <SideMenuItem category={el}/>)}
            </ul>
        </div>
        </>
    )
}

export default SideMenu;