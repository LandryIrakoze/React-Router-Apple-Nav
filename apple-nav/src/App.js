import React from 'react';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavWrapper from './Components/NavWrapper';
import Nav from './Components/Nav';
import SubNav from './Components/SubNav';
import Page from './Components/Page';

import { NavContainer } from './Styles/Styles';

function App() {

  return (
    <NavContainer>
      <Route path="/" render={(props) => 
        <NavWrapper 
          {...props}/>} 

        />
      <Switch>
        <Route path="/:category" render={(props) => 
          <SubNav 
            {...props}/>} 
            
        />
        {/* <Route path="/:category/:product" render={(props) => 
          <Page 
            {...props}/>} 
            
        /> */}
      </Switch>
      
    </NavContainer>
  );
}

export default App;
