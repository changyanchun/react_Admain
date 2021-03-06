import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'

export default class App extends React.Component{

  render(){
    return (
     
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/admin" component={Admin}></Route>
            </Switch>
          </BrowserRouter>
    )
  }
}
