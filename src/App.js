// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import Home from './components/Home';
import TypewriterEffect from './components/Typewriter';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='home'>
          <div className='home-container'>
            <span className='home-intro'>
              <h1 id='Hi'>HI, I'M</h1>
              <h1 id='name'>< TypewriterEffect text={"ABHISHEK"} delay={100} /></h1>
              <h1>< TypewriterEffect text={"WEB3 ENTHUSIASM"}/></h1>
              <span>Deep Dive In WEB3 & DSA/CP Enthusiasm</span>
              <span className='home-btn'>
                  <h1 id='Projects'>Projects</h1>
                  <h1 id='Resume'>Resume</h1>
              </span>
            </span>
            <span className='home-pic'>
              <img className='profile-pic' src='https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'/>
              <span className='project-back'> 0+ Projects</span>
            </span>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
