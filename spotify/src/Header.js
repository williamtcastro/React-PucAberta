import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/custom.css';

export default class Header extends React.Component{
    render(){
        return(
            <div>
                    <nav className="header-box">
                    <div class="container">
                        <ul className="header">
                        <li className="menu-item img-logo"></li>
                        <li className="menu-item pull-left">Entrar</li>
                        <li className="menu-item pull-left">Increver-se</li>
                        <li className="menu-item pull-left">|</li>
                        <li className="menu-item pull-left">Baixar</li>
                        <li className="menu-item pull-left">Ajuda</li>
                        <li className="menu-item pull-left">Premium</li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}