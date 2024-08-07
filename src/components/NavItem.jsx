import { useState } from "react";

const NavItem = ({ item }) => {
    return (
        <li className="nav-item">
            <a
                href={item.route}
                className="nav-link text-uppercase color-black me-5"
            >
                {item.value}
            </a>
        </li>
    );
};

export default NavItem;
