import React from 'react';
import './App.css';
import About from './components/about.jsx';

function App() {
  return (
    <span>
      <h1 style={{display: 'none'}}>Brandon Wagner</h1>
      <div className='ole'>
        <section id='jSplash'>
          <div id='circle'></div>
        </section>
      </div>
      <div id='home-slider'>
        <div className='overlay'></div>
        <div className='slider-text'>
          <div id='slidecaption'></div>
        </div>
      </div>
      <header>
          <div className='sticky-nav'>
              <a id='mobile-nav' className='menu-nav' href='#menu-nav'></a>
              <div id='logo'>
                  <a id='goUp' href='#home-slider' title='Brandon Wagner'>
                      Brandon Wagner
                  </a>
              </div>
              <nav id='menu'>
                  <ul id='menu-nav'>
                      <li className='current'>
                          <a href='#home-slider'>
                              
                          </a>
                      </li><li>
                          <a href='#about'>
                              About Me
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
      </header> 
      <About />

      <footer>
            <p class='credits'>
                &copy; {new Date().getYear() + 1900} Brandon Wagner
            </p>
        </footer><a id='back-to-top' href='#'>
            <i class='font-icon-arrow-simple-up'></i>
        </a>
    </span>
  );
}

export default App;
