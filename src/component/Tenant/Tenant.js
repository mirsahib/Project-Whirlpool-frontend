import React from 'react';
import axios from 'axios'
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../layout/footer'
import '../../App.css';
import {config} from '../../config/constants'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from '../Tenant/Table'

var url = config.url.API_URL
//var url_users = config.url.API_URL_USERS

toast.configure()
export default class Tenant extends React.Component {
    constructor(){
        super();
        this.state = {
            curr_tenant_list : [],
            prev_tenant_list :[],
        }
    }

    componentDidMount(){

        const curr_cache_tenant = JSON.parse( sessionStorage.getItem('curr_tenant'))
        const prev_cache_tenant = JSON.parse( sessionStorage.getItem('prev_tenant'))
        if(curr_cache_tenant){
            this.setState({
                curr_tenant_list: [...curr_cache_tenant],
                prev_tenant_list: [...prev_cache_tenant]
               })
        }else{
            axios.get(url+"api/tenants").then(response => {
                //console.log(response.data.curr_tenants)
                this.setState({
                  curr_tenant_list: [...response.data.curr_tenants],
                  prev_tenant_list: [...response.data.prev_tenants]
                })
                sessionStorage.setItem('curr_tenant',JSON.stringify(response.data.curr_tenants))
                sessionStorage.setItem('prev_tenant',JSON.stringify(response.data.prev_tenants))
            })
        }
       
    }
    
    handleDelete = (e)=>{
        const tenantId = e.target.value
        let tenants = Array.from(this.state.tenantList)
        console.log('before',tenants)
        for (let index = 0; index < tenants.length; index++) {
            if(tenants[index].id==tenantId){
                tenants.splice(index,1)
            }
        }
        axios.delete(url+"api/tenants/"+tenantId).then(response => {
            toast.success(response.data.message,{position:toast.POSITION.BOTTOM_RIGHT,autoClose:4000})
            console.log(response.data.message)
        }).catch(error=>{
            console.log(error.response.data.statustext)
            toast.error(error,{position:toast.POSITION.BOTTOM_RIGHT,autoClose:3000})
        })
        this.setState({tenantList:tenants})
        sessionStorage.setItem('tenantList',JSON.stringify(tenants))
    }

    render() {
        const {curr_tenant_list,prev_tenant_list} = this.state   
      return (
        <div>
          <Header />
          <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Tenant</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
                                <li className="breadcrumb-item active">Tenant</li>
                            </ol>
                            {alert}

                            <div className="card mb-4">
                                <div className="card-body">
                                    <Link className='btn btn-success mb-3' to='/tenant/create' >Create Tenant</Link>
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Current Tenant</a>
                                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Ex-Tenant</a>
                                        </div>
                                    </nav>
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                
                                                <div className="table-responsive">
                                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Tenant id</th>
                                                                    <th>Name</th>
                                                                    <th>National ID</th>
                                                                    <th>Phone Number</th>
                                                                    <th>Registration Date</th>
                                                                    <th>Expected Rent</th>
                                                                    <th>House/Room No</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                                <Table data={[...curr_tenant_list]} />
                                                        </table>
                                                </div>
                                            
                                            </div>
                                        
                                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">                                                    
                                                <div className="table-responsive">
                                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Tenant id</th>
                                                                    <th>Name</th>
                                                                    <th>National ID</th>
                                                                    <th>Phone Number</th>
                                                                    <th>Registration Date</th>
                                                                    <th>Expected Rent</th>
                                                                    <th>House/Room No</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <Table data={[...prev_tenant_list]} />
                                                        </table>
                                                </div>
                                            </div>
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


