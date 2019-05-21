import React from 'react';
import './assets/css/hero.css';

export default class Header extends React.Component{
    render() {
        return(
            <div className="hero-img">
            <h2>My Awesome Website</h2>
            <p>Algum texto aleatorio aqui</p>
            <button>Click Me</button>
            </div> 
        );
    }
}