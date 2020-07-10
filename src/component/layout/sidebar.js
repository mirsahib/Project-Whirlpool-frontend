import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default class Footer extends React.Component {
    render() {
      return (<div id="layoutSidenav_nav">
      <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div className="sb-sidenav-menu">
              <div className="nav">
                    <Link className='nav-link active' to='/dashboard'><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                      Dashboard
                    </Link>
                    <Link className='nav-link ' to='/dashboard'><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                      House
                    </Link>
                    <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                          Tenant
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                          <Link className='nav-link' to='/tenant'>
                            Tenant
                          </Link>
                          <Link className='nav-link' to='/tenant/create'>
                            Create Tenant
                          </Link>
                            
                        </nav>
                    </div>
                    <Link className='nav-link' to='/payment'><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                      Payment
                    </Link>
                    <Link className="nav-link collapsed" data-toggle="collapse" data-target="#utilityLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                          Utility Bills
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="utilityLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                          <Link className='nav-link' to='/electric'>
                            Electric Meter Reading
                          </Link>   
                        </nav>
                    </div>
              </div>
          </div>
          <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Start Bootstrap
          </div>
      </nav>
  </div>
          );
    }
}


