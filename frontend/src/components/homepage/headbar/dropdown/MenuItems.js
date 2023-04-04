import React, { useState } from "react";
import Dropdown from './Dropdown';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../../index";

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <li className="headBar-item">
            {items.submenu ? (
                <>
                    <div type="button" aria-haspopup="menu"
                         aria-expanded={dropdown ? "true" : "false"}
                         onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{' '}
                    </div>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                <a href={items.url}>{items.title}</a>
            )}
        </li>
    );
};

export default MenuItems;
