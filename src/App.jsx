import React, { useState } from 'react';
import Switch from 'react-switch';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Additional logic to toggle dark mode
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="sidebar">
        <div className="canvas-heading">
          <img src="/bsg.png" alt="Logo" className="logo" />
          <h1>Canvas</h1>
        </div>
        <button className="notes-button">List of Notes</button>
      </div>
      <div className="main-content">
        <div className="navbar">
          <div className="navbar-dropdown">
          <button className="navbar-button settings-button" onClick={toggleOptions}>
              <img src={darkMode ? "Screenshot 2024-05-17 152125.png" : "aaj5.jpg"} style={{width: "30px", height: "auto"}} alt="Settings" className="icon" />
            </button>
            {showOptions && (
              <div className="dropdown-content">
                <a href="#">Profile</a>
                <a href="#">History</a>
                <a href="#">Feedback</a>
              </div>
            )}
          </div>
          <Switch
            className="dark-mode-switch"
            onChange={toggleDarkMode}
            checked={darkMode}
            uncheckedIcon={false}
            checkedIcon={false}
            height={24}
            width={48}
            handleDiameter={20}
            onColor="#B039F6"
            offColor="#070715"
          />
          <button className="navbar-button">Logout</button>
        </div>

        <div className='subdu'>
        <div className="cards-section">
          <div className="card">
          <div className="card-section">
          <div className="card-info">
              <img src="Screenshot_2024-05-17_092614-removebg-preview.png"alt="Logo" className="card-logo" />

              <div className='res'>
                    <div className='sub'>
                    <h2> Lɘaf Technologies</h2>
                    <h5> Webpage :  LɘafTechnologies.com </h5>
                    </div>
                
                <p className="time">Time: 10:00 AM</p>
              </div>
              </div>
             
            </div>
            <div className="card-section">
            <div className='tagline'>
    <p>Tags: </p>
    <div className="button-group">
    <button className="tag-button">Track</button>
      <button className="tag-button">Structure</button>
      <button className="tag-button">Collaborate</button>
    </div>
    </div>
            </div>
            <div className="card-section">
            <p>Highlights: <span class="small-text">Lɘaf is a transformative ecosystem offering innovative tools for academic & study communities, content creators, and corporate offices.</span></p>
            </div>
            <div className="card-section">
              <p>Notes : <span class="small-text">My first note for research on a topic associated with water for my project</span> </p>
            </div>
          </div>

          <div className="card">
  <div className="card-section">
    <div className="card-info">
      <img src="aaj2 - Copy.png" alt="Logo" className="card-logo" />

      <div className='res'>

      <div className='sub'>
        <h2>Flipkart</h2>
        <h4><h5> Webpage :  Flipkart.com </h5></h4>
      </div>

      <p className="time">Time: 10:00 AM</p>
    </div>
      </div>
      
  </div>
  <div className="card-section">
    <div className='tagline'>
    <p>Tags: </p>
    <div className="button-group">
    <button className="tag-button">Track</button>
      <button className="tag-button">Structure</button>
      <button className="tag-button">Collaborate</button>
    </div>
    </div>
    
  </div>
  <div className="card-section">
  <p>Highlights: <span class="small-text">Flipkart is a transformative ecosystem offering innovative tools for academic & study communities, content creators, and corporate offices.</span></p>
  </div>
  <div className="card-section">
  <p>Notes : <span class="small-text">My first note for research on a topic associated with water for my project</span> </p>
  </div>
</div>



          <div className="card">
          <div className="card-section">
          <div className="card-info">
          <img src="aaj4.png" style={{ width: '60px', height: 'auto' }} alt="Logo" className="card-logo" />

          <div className='res'>

          <div className='sub'>
              <h2>Instagram</h2>
              <h5><h5> Webpage : Instagram.com </h5></h5>
              </div>
              <p className="time">Time: 10:00 AM</p>
              </div>
          </div>
            </div>
            <div className="card-section">
            <div className='tagline'>
    <p>Tags: </p>
    <div className="button-group">
    <button className="tag-button">Track</button>
      <button className="tag-button">Structure</button>
      <button className="tag-button">Collaborate</button>
    </div>
    </div>
            </div>
            <div className="card-section">
            <p>Highlights: <span class="small-text">Instagram is a transformative ecosystem offering innovative tools for academic & study communities, content creators, and corporate offices.</span></p>
            </div>
            <div className="card-section">
            <p>Notes : <span class="small-text">My first note for research on a topic associated with water for my project</span> </p>
            </div>
          </div>

          <div className="card">
          <div className="card-section">
          <div className="card-info">
              <img src="aaj3.png" alt="Logo" className="card-logo" />

              <div className='res'>
              <div className='sub'>
                <h2>Amazon</h2>
  <h5>
    Webpage: <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">Amazon.com</a>
  </h5>
                </div>
                
                <div className="time">Time: 10:00 AM</div>
              </div>
            </div>
              </div>
                
            <div className="card-section">
            <div className='tagline'>
    <p>Tags: </p>
    <div className="button-group">
      <button className="tag-button">Track</button>
      <button className="tag-button">Structure</button>
      <button className="tag-button">Collaborate</button>
    </div>
    </div>
            </div>
            <div className="card-section">
            <p>Highlights: <span class="small-text">Amazon is a transformative ecosystem offering innovative tools for academic & study communities, content creators, and corporate offices.</span></p>
            </div>
            <div className="card-section">
            <p>Notes : <span class="small-text">My first note for research on a topic associated with water for my project</span> </p>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
