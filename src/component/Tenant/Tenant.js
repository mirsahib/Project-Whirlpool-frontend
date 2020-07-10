import React from 'react';
import axios from 'axios'
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../layout/footer'
import '../../App.css';




export default class Tenant extends React.Component {
    constructor(){
        super();
        this.state = {
            tenantList:[],
        }
    }

    componentDidMount(){
        
        axios.get("http://127.0.0.1:8000/api/tenants").then(response => {
            this.setState({
              tenantList: [...response.data.tenants]
            })
            //console.log(response)
          })
        //   if(this.props.location.state!== undefined){
        //       console.log('alert',this.props.location.state.msg)
        //       const {location,history} = this.props;
        //       history.replace() 
        //   }
    }

    render() {
        const {tenantList} = this.state

        // show alert on conditon
        var alert = ''
        if(this.props.location.state!==undefined){
            alert = <div className="alert alert-success" role="alert">
                        Success       
                    </div>
            const {location,history} = this.props;
            history.replace()
        }
        
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
                                                            <Link className='btn btn-info ml-2' >Show</Link>
                                                            <Link className='btn btn-primary ml-2' >Edit</Link>
                                                            <Link className='btn btn-danger ml-2' >Delete</Link>
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


