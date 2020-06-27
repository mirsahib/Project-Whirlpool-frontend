import React from 'react';
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../layout/footer'
import '../../App.css';


export default class Payment extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid">
                            <h1 class="mt-4">Payment</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
                                <li class="breadcrumb-item active">Payment</li>
                            </ol>
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Tenant Name</th>
                                                    <th>House/Room No</th>
                                                    <th>Year</th>
                                                    <th>Month</th>
                                                    <th>Expected Rent</th>
                                                    <th>Paid Amount</th>
                                                    <th>Dues</th>
                                                    <th>Payment Date</th>
                                                    <th>Comment</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Tiger Nixon</td>
                                                        <td>System Architect</td>
                                                        <td>Edinburgh</td>
                                                        <td>61</td>
                                                        <td>2011/04/25</td>
                                                        <td>$320,800</td>
                                                        <td>Tiger Nixon</td>
                                                        <td>Tiger Nixon</td>
                                                        <td>Tiger Nixon</td>
                                                        <td>
                                                            <Link class='btn btn-info ml-2' >Show</Link>
                                                            <Link class='btn btn-primary ml-2' to='payment/makePayment' >Pay Rent</Link>
                                                        
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


