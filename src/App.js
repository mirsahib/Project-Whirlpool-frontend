import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from 'component/dashboard/dashboard'
import Login from 'component/login/login'
import Tenant from 'component/Tenant/Tenant'
import AddTenant from 'component/Tenant/AddTenant'

export default class App extends React.Component {
    render() {
      return(
        <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/tenant' exact component={Tenant} />
            <Route path='/tenant/create' component={AddTenant} />
          </Switch>
        </div>
      </Router>
      )
    }
}


