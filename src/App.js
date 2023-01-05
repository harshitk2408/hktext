import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Aboutus from './components/Aboutus';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const changealert = (msg, type) => {
    setalert({
      msg: msg,
      type: type
    })
    setTimeout(() => { setalert(null) }, 500);
  }
  const [m, changemode] = useState('light')
  const toggle = () => {
    if (m == 'light') {
      changemode('dark');
      document.body.style.backgroundColor = 'black';
      changealert("Dark Mode is enabled", "danger")
      document.title = "Textify | Dark Mode"
      setTimeout(() => { document.title = "Textify" }, 500)

    }
    else {
      changemode('light');
      document.body.style.backgroundColor = 'white'
      document.title = "Textify | Light Mode"
      setTimeout(() => { document.title = "Textify" }, 500)
    }
  }

  return (
    <>
      <Navbar mode={m} toggle={toggle} title="Textify" />
      <div className="container">
        <Alert alert={alert} />
        <Router>
          <Routes>
            <Route exact path='/' element={<Textform heading="Enter" mode={m} changealert={changealert} />} />
            <Route exact path='/about' element={<Aboutus />} />
          </Routes></Router>

      </div>


    </>

  );
}

export default App;
