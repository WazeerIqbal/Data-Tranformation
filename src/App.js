// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert'
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link


} from "react-router-dom";






function App() {

  const [mode, setDarkMode] = useState('light'); //Wheather dark mode is enabled or not
  const [enableDarkText, setEnableDarkMode] = useState('Enable Dark Mode')
  const [alretMessage, setAlertMessage] = useState(null)



  ///This methode will help to show the alert
  const showAlert = (message, type) => {
    setAlertMessage({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlertMessage(null)
    }, 2000);
  }

  const modeFunction = () => {
    if (mode === 'light') {
      setDarkMode('dark')
      document.body.style.backgroundColor = 'grey'
      setEnableDarkMode('Enable Light Mode')

      showAlert("Dark Mode Enabled", "success")


    }
    else {
      setDarkMode('light')
      document.body.style.backgroundColor = 'white'
      setEnableDarkMode('Enable Dark Mode')

      showAlert("Light Mode Enabled", "success")
    }
  }

  return (
    <>
      <Router>

        <Navbar title="React App" about="About Us" search="Search Here" mode={mode} modeFunction={modeFunction} text={enableDarkText} /> {/*We pass the props  */}
        <Alert alretMessage={alretMessage} />



        <div className='container my-3'>

          <Routes>
            <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter The Text" />}>
            </Route>
            <Route exact path="/about" element={<About />}>

            </Route>

            <Route exact path="contact" element={<Contact />}>

            </Route>

          </Routes>

        </div>

      </Router >

    </>
  );
}

export default App;
