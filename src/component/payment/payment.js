import React from 'react';
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../layout/footer'
import '../../App.css';
import axios from 'axios'
import {config} from '../../config/constants'
var url = config.url.API_URL


export default class Payment extends React.Component {

    constructor(){
        super();
        this.state = {
            payments : []
        }
    }

    componentDidMount(){
        const payload =  {
            pay_month : new Date().toLocaleString('default', { month: 'long' }),
            pay_year : new Date().getFullYear()
        }

        axios.post(url+"api/payments/load",payload).then(response => {
            console.log(response.data.Record)
            this.setState({
              payments: [...response.data.Record],
            })
            console.log(this.state.payments)

            // sessionStorage.setItem('curr_tenant',JSON.stringify(response.data.curr_tenants))
            // sessionStorage.setItem('prev_tenant',JSON.stringify(response.data.prev_tenants))
        })

    }

    render() {
        const {payments} = this.state
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
                                                    <th>Year</th>
                                                    <th>Month</th>
                                                    <th>Expected Rent</th>
                                                    <th>Paid Amount</th>
                                                    <th>Dues</th>
                                                    <th>Comment</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                                <tbody>
                                                    {payments.map(payment=>(
                                                        <tr key = {payment.id}>
                                                            <td>{payment.name}</td>
                                                            <td>{payment.pay_year}</td>
                                                            <td>{payment.pay_month}</td>
                                                            <td>{payment.exp_rent}</td>
                                                            <td>{payment.paid_rent}</td>
                                                            <td>{payment.dues}</td>
                                                            <td>{payment.comment}</td>
                                                            <td style={{width:'200px'}}>
                                                                <Link class='btn btn-info ml-2' >Show</Link>
                                                                <Link class='btn btn-primary ml-2' to='payment/makePayment' >Pay Rent</Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    
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


