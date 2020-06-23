import React from 'react';
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../layout/footer'
import '../../App.css';


export default class AddTenant extends React.Component {
    render() {
      return (
        <div>
            <Header />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid">
                            <h1 class="mt-4">Create Tenant</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
                                <li class="breadcrumb-item"><Link to='/tenant'>Tenant</Link></li>
                                <li class="breadcrumb-item active">Create Tenant</li>
                            </ol>
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h1>Add Tenant Here</h1>
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


