import React from 'react';
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../layout/footer'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import '../../App.css';


export default class ElectricMeterReading extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          date: null,
          focused: null,
          exitdate: null,
          exitfocused: null
        }
      }
    handleDateChange = ()=>{
        console.log('hello')
    }
    handleexitDateChange = ()=>{
        console.log('hello')
    }

    render() {
      return (
        <div>
            <Header />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid">
                            <h1 class="mt-4">Electric Meter Reading</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
                                <li class="breadcrumb-item active">Electric Meter Reading</li>
                            </ol>

                            <div class="card mb-4">
                                <div class='card-header'>
                                    Meter Data
                                </div>
                                <div class="card-body">
                                    <Link class='btn btn-success mb-2'>Create Meter</Link>
                                    

                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Meter Number</th>
                                                    <th>Assign House/Room</th>
                                                    <th>Current Reading</th>
                                                    <th>Type</th>   
                                                </tr>
                                            </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>123456</td>
                                                        <td>A1</td>
                                                        <td>2335656</td>
                                                        <td>Mother Meter</td> 
                                                    </tr>
                                                    <tr>
                                                        <td>123456</td>
                                                        <td>A4</td>
                                                        <td>2335656</td>
                                                        <td>Sub Meter</td> 
                                                    </tr>
                                                </tbody>
                                        </table>
                                    </div>
                                

                                </div>
                            </div>
                            

                            <div class="card mb-4">
                                <div class='card-header'>
                                    Mother Meter
                                </div>
                                <div class="card-body">
                                    <div class="btn-group mb-2">
                                        <Link class='btn btn-success mr-2'>Load Meter</Link>
                                        <button type="button" class="btn btn-primary dropdown-toggle mr-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Month
                                        </button>
                                        
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Separated link</a>
                                        </div>
                                        <button type="button" class="btn btn-primary dropdown-toggle mr-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Year
                                        </button>
                                        <div class="dropdown-menu mr-2">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    

                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Meter Number</th>
                                                    <th>Assign House/Room</th>
                                                    <th>Consume Unit</th>
                                                    <th>Meter Bill</th>
                                                    <th>Year</th>
                                                    <th>Month</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>123456</td>
                                                        <td>A1</td>
                                                        <td>233</td>
                                                        <td>3436</td>
                                                        <td>2020</td>
                                                        <td>April</td>
                                                        <td>Paid</td>
                                                        <td>
                                                            <Link class='btn btn-info ml-2' >Update</Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                        </table>
                                    </div>
                                

                                </div>
                            </div>
                            
                            <div class="card mb-4">
                                <div class='card-header'>
                                    Sub Meter
                                </div>
                                <div class="card-body">
                                <div class="btn-group mb-2">
                                        <Link class='btn btn-success mr-2'>Create Sub Meter</Link>
                                        <Link class='btn btn-warning mr-2'>Load Meter</Link>
                                        <button type="button" class="btn btn-secondary dropdown-toggle mr-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Month
                                        </button>
                                        
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Separated link</a>
                                        </div>
                                        <button type="button" class="btn btn-info dropdown-toggle mr-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Year
                                        </button>
                                        <div class="dropdown-menu mr-2">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                          
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Mother Meter No</th>
                                                    <th>Assign House/Room</th>
                                                    <th>Current Reading</th>
                                                    <th>Prev. Reading</th>
                                                    <th>Consume Unit</th>
                                                    <th>Bill</th>
                                                    <th>Year</th>
                                                    <th>Month</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>123456</td>
                                                        <td>A1</td>
                                                        <td>12343</td>
                                                        <td>12344</td>
                                                        <td>245</td>
                                                        <td>2123</td>
                                                        <td>2020</td>
                                                        <td>Apr</td>
                                                        <td>Paid</td>
                                                        <td>
                                                            <Link class='btn btn-info ml-2' >Update</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>123456</td>
                                                        <td>B1</td>
                                                        <td>12343</td>
                                                        <td>12344</td>
                                                        <td>245</td>
                                                        <td>2123</td>
                                                        <td>2020</td>
                                                        <td>Apr</td>
                                                        <td>Paid</td>
                                                        <td>
                                                            <Link class='btn btn-info ml-2' >Update</Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                        </table>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            
            </div>
        </div>
      );
    }
}


