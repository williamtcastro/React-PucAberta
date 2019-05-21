import React from 'react';
import './assets/css/header.css';

export default class Header extends React.Component{
    render() {
        return(
            <div>
            <ul className="header">
                <li className="menu-item">Menu</li>
                <li className="menu-item">Login</li>
                <li className="menu-item">Sair</li>
            </ul>
            </div>
        );
    }
}