import logo from './logo.png';
import './App.css';
import React from 'react';
import ImagePanel from './components/ImagePanel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <img src={logo} className='logo'/>
          <p className='header-text'>Check Today's Photos From Curiosity!</p>
        </h1>
        <p>Courtesy of NASA's Open API</p>
      </header>
      <ImagePanel></ImagePanel>
      <Footer></Footer>
    </div>
  );
}

export default App;
