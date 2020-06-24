import React from 'react';
import Footer from '../layout/footer'
import { FiBell,FiX } from "react-icons/fi";

import '../../App.css';


export default class Content extends React.Component {
    render() {
      return (<div id="layoutSidenav_content">
      <main>
          <div class="container-fluid">
              <h1 class="mt-4">Dashboard</h1>
              <ol class="breadcrumb mb-4">
                  <li class="breadcrumb-item active">Dashboard</li>
              </ol>

              <div class="row">
                  <div class="col-xl-3 col-md-6">
                      <div class="card bg-primary text-white mb-4">
                          <div class="card-body">Room
                          <h1>10</h1>
                          </div>
                          
                          <div class="card-footer d-flex align-items-center justify-content-between">
                              <a class="small text-white stretched-link" href="#">View Details</a>
                              <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                      <div class="card bg-warning text-white mb-4">
                          <div class="card-body">Tenant
                          <h1>8</h1>
                          </div>
                          <div class="card-footer d-flex align-items-center justify-content-between">
                              <a class="small text-white stretched-link" href="#">View Details</a>
                              <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                      <div class="card bg-success text-white mb-4">
                          <div class="card-body">Paid
                          <h1>6</h1>
                          </div>
                          
                          <div class="card-footer d-flex align-items-center justify-content-between">
                              <a class="small text-white stretched-link" href="#">View Details</a>
                              <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                      <div class="card bg-danger text-white mb-4">
                          <div class="card-body">Dues
                          <h1>4</h1>
                          </div>
                          <div class="card-footer d-flex align-items-center justify-content-between">
                              <a class="small text-white stretched-link" href="#">View Details</a>
                              <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div class="row">
                  <div class="col-xl-3 col-md-6">
                      <div class="card bg-primary text-white mb-4">
                          <div class="card-body">Rent Collected
                          <h1>20000</h1>
                          </div>
                          
                          <div class="card-footer d-flex align-items-center justify-content-between">
                              <a class="small text-white stretched-link" href="#">View Details</a>
                              <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                      <div class="card bg-warning text-white mb-4">
                          <div class="card-body">Current Balance
                          <h1>210000</h1>
                          </div>
                          <div class="card-footer d-flex align-items-center justify-content-between">
                              <a class="small text-white stretched-link" href="#">View Details</a>
                              <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                      <div class="card bg-success text-white mb-4">
                          <div class="card-body">Utility bills
                          <h1>15000</h1>
                          </div>
                          
                          <div class="card-footer d-flex align-items-center justify-content-between">
                              <a class="small text-white stretched-link" href="#">View Details</a>
                              <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                      <div class="card bg-danger text-white mb-4">
                          <div class="card-body">Dues
                          <h1>4</h1>
                          </div>
                          <div class="card-footer d-flex align-items-center justify-content-between">
                              <a class="small text-white stretched-link" href="#">View Details</a>
                              <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div class="row">
                  <div class="col-xl-6">
                      <div class="card mb-4">
                          <div class="card-header" style={{fontWeight:'bold'}}>
                              <FiBell class='mr-1'/>
                              Recent Payment
                          </div>
                          <div class="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                      </div>
                  </div>
                  <div class="col-xl-6">
                      <div class="card mb-4">
                          <div class="card-header text-danger" style={{backgroundColor:'#efd5da',fontWeight:'bold'}}>
                              <FiX class="mr-1"/>
                              Payment Not Done
                          </div>
                          <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                      </div>
                  </div>
              </div>

          </div>
      </main>
      <Footer />
  </div>
          );
    }
}


