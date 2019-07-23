import React from 'react';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavWrapper from './Components/NavWrapper';
import Nav from './Components/Nav';
import SubNav from './Components/SubNav';
import Page from './Components/Page';

function App() {

  return (
    <>
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
      
    </>
  );
}

export default App;
