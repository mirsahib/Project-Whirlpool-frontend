import React from 'react';
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import Content from './content'
import '../../App.css';


export default class Dashboard extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <div id="layoutSidenav">
            <Sidebar />
            <Content />
          </div>
        </div>
      );
    }
}


