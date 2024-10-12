import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Accordion from './components/Accordion';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#111313';
      showAlert("Dark mode has been enbaled.","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enbaled.","success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title= "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<Accordion mode = {mode}/>} />
            <Route exact path="/" element={<TextForm heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;