import React, { useState } from 'react';

import Header from './components/header/header'
import Highlight from './components/highlight/highlight'
import Footer from './components/footer/footer'


import './App.css';
function App() {
  const [styleNotif, setStyleNotif] = useState('notif')
  // const [styleContent, setStyleContent] = useState('content')


  const clickNotif = () => {
    setStyleNotif('hiddenNotif')
  }
  return (
    <div className="App">
      <div className={styleNotif}>
        <div className="notif-ele">
          <p className="notif-text">By accessing and using this website, you acknowledge that you have read
            and understand our <a href="#" className="text-link">Cookie Policy</a>,
            <a className="text-link" href="#">Privacy Policy</a>,
            and our <a className="text-link" href="#"> Terms of Service</a>.</p>
          <button className="notif-btn" onClick={clickNotif}>Got It</button>
        </div>
      </div>
      <div className="content">
        <Header/>
        <Highlight/>
      </div>
      <Footer/>
    </div>

  );
}

export default App;
