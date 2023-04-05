import React, {useState} from 'react';
import LoginPage from './auth/LoginPage';
import LogoutPage from './auth/LogoutPage';
import HomePage from '../index';
import { useAuth0 } from "@auth0/auth0-react";
import { menuItems } from "./menuItems";
import MenuItems from './dropdown/MenuItems';

function HeadBar() {
    // const handleOnClick = () => {
    //     if(!isAuthenticated) {
    //         return loginWithRedirect({ target: 'http://localhost:3000'})
    //     }
    //     return <MenuItems items='Services' />
    // }
    const {isAuthenticated } = useAuth0();
  return (
    <div className="headBar-container">
        <div className='headBar-item'>
            Home
        </div>

        {menuItems.map((menu, index) => {
            // if (menu.title === "Medical Dashboard" && !isAuthenticated) {
            //     return (
            //         <div className="headBar-item">
            //             <a onClick={handleOnClick} className={menu.cName} href={menu.url}>{menu.title}</a>
            //         </div>
            //     )
            // }
            if (isAuthenticated) {
                return (
                    <div className={menu.cName} key={index}>
                        {menu.title}
                        {/*<MenuItems items={menu} key={index} />*/}
                    </div>
                );
            }
            return;
        })}

        <div className='headBar-item'>
            <LoginPage/>
            <LogoutPage/>
            {/* <Profile/> */}
        </div>

    </div>
  );
}

export default HeadBar;
