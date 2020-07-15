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

var url = config.url.API_URL
//var url_users = config.url.API_URL_USERS

toast.configure()
export default class Tenant extends React.Component {
    constructor(){
        super();
        this.state = {
            tenantList:[],
        }
    }

    componentDidMount(){

        const cacheTenant = JSON.parse( sessionStorage.getItem('tenantList'))
        if(cacheTenant){
            this.setState({
                tenantList: [...cacheTenant]
               })
        }else{
            axios.get(url+"api/tenants").then(response => {
                this.setState({
                  tenantList: [...response.data.tenants]
                })
                sessionStorage.setItem('tenantList',JSON.stringify(response.data.tenants))
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
        const {tenantList} = this.state   
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
                                    
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>National ID</th>
                                                    <th>Phone Number</th>
                                                    <th>Registration Date</th>
                                                    <th>Expected Rent</th>
                                                    <th>House/Room No</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                                <tbody>
                                                    {tenantList.map(tenant=>(
                                                        <tr key = {tenant.id}>
                                                            <td>{tenant.name}</td>
                                                            <td>{tenant.nid}</td>
                                                            <td>{tenant.phone}</td>
                                                            <td>{tenant.reg_date}</td>
                                                            <td>{tenant.exp_rent}</td>
                                                            <td>{tenant.hrid}</td>
                                                            <td>
                                                            <Link className='btn btn-info ml-2' to={"/tenant/show/"+tenant.id} >Show</Link>
                                                            <Link className='btn btn-primary ml-2' to={"/tenant/edit/"+tenant.id} >Edit</Link>
                                                            <button value = {tenant.id} className="btn btn-danger ml-2" onClick={this.handleDelete} >Delete</button>
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


