import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default class Footer extends React.Component {
    render() {
      return (<div id="layoutSidenav_nav">
      <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
              <div class="nav">
                    <Link class='nav-link active' to='/dashboard'><div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                      Dashboard
                    </Link>
                    <Link class='nav-link ' to='/dashboard'><div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                      House
                    </Link>
                    <Link class="nav-link collapsed" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                          Tenant
                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                    </Link>
                    <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                        <nav class="sb-sidenav-menu-nested nav">
                          <Link class='nav-link' to='/tenant'>
                            Tenant
                          </Link>
                          <Link class='nav-link' to='/tenant/create'>
                            Create Tenant
                          </Link>
                            
                        </nav>
                    </div>
                    <Link class='nav-link' to='/payment'><div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                      Payment
                    </Link>
                    <Link class="nav-link collapsed" data-toggle="collapse" data-target="#utilityLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                          Utility Bills
                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                    </Link>
                    <div class="collapse" id="utilityLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                        <nav class="sb-sidenav-menu-nested nav">
                          <Link class='nav-link' to='/electric'>
                            Electric Meter Reading
                          </Link>   
                        </nav>
                    </div>
              </div>
          </div>
          <div class="sb-sidenav-footer">
              <div class="small">Logged in as:</div>
              Start Bootstrap
          </div>
      </nav>
  </div>
          );
    }
}


