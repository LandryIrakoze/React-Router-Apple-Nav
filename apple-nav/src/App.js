import React from 'react';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import NavWrapper from './Components/NavWrapper';
import Nav from './Components/Nav';
import SubNav from './Components/SubNav';
import Page from './Components/Page';

function App() {
  return (
    <>
      <NavWrapper />
      <Route path="/" render={(props) => 
        <NavWrapper 
          {...props}/>} 

        />
      <Route path="/:category" render={(props) => 
        <Nav 
          {...props}/>} 
          
        />
      <Route path="/:category/:product" render={(props) => 
        <NavWrapper 
          {...props}/>} 
          
        />
    </>
  );
}

export default App;
