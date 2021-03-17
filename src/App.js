import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blank from './components/Blank';
import Edit from './components/Edit';
import List from './components/List';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Write from './components/Write';




const AppRouter = () => (
  <BrowserRouter>
    <div >
    
  
      <Switch>
      
        <Route component={SignUp} exact path="/SignUp"  />
        <Route component={SignIn} exact path="/" />
        <Route component={Blank} exact path="/Blank" />
        <Route component={List} exact path="/List" />
        <Route component={Write} exact path="/Write" />
        <Route component={Edit} exact path="/Edit/:id"/>
        
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
