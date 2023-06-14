import React from 'react';
import './App.css';
import Header from './header';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import personalinfo from './personalinfo';
import mysocialmedia from './Mysocialmedia';
import Converter from './converter';
import dicegame from './dicegame';
function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
      <Route exact path="/personalinfo" Component={personalinfo}></Route>
      <Route exact path="/mysocialmedia" Component={mysocialmedia}></Route>
      <Route exact path="/converter" Component={Converter}></Route>
      <Route exact path="/dicegame" Component={dicegame}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
