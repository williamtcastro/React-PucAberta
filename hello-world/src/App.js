import React from 'react';
// import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import Header from './Header';
import Hero from './Hero';
function App() {
  return (
    <div className="App">
    <Header></Header>
      <Hero></Hero>
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}