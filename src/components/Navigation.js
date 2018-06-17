import React from 'react';
import {NavLink} from 'react-router-dom';

export default (props) => {
    return (
        <ul className="menu-list">
            {props.list.map((item) => (
                <li className="menu-list__item" key={item.label}>
                    <NavLink
                        exact
                        className="menu-list__link"
                        activeClassName="menu-list__link--active"
                        to={item.path}
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};
