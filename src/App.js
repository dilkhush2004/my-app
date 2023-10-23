// import { useState } from 'react';
import './App.css';
import Nevbar from './component/Nevbar';
import Textform from './component/Textform';
import React, {useState}from 'react';
import About1 from './component/About1';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Router>
    <Nevbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/About">
            <About1/>
          </Route>
          <Route exact path="/">
            <Textform heading="Enter your text to analyze" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
