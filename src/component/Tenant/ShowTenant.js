import React from 'react';
import axios from 'axios'
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../layout/footer'
import '../../App.css';
import {config} from '../../config/constants'

var url = config.url.API_URL
//var url_users = config.url.API_URL_USERS


export default class ShowTenant extends React.Component {
    constructor(){
        super();
        this.state = {
            tenant:{},
        }
    }

    componentDidMount(){
        const cacheTenant = JSON.parse( sessionStorage.getItem('tenantList'))
        let tenantId =this.props.match.params.id
        if(cacheTenant){
            cacheTenant.forEach(tenant => {
                if(tenant.id==tenantId){
                    //console.log(tenant)
                    this.setState({tenant})
                }
            });
        }else{
            axios.get(url+"api/tenants/"+tenantId).then(response => {
                this.setState({
                  tenant: response.data.tenant[0]
                })
            })
        }

        
        //console.log(this.props.match.params.id)
    }

    render() {
        const {tenant} = this.state
        
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
                                <li className="breadcrumb-item active"><Link to='/tenant'>Tenant</Link></li>
                                <li className="breadcrumb-item active">{tenant.name}</li>
                            </ol>
                            
                            <div className="card">
                                <div className= "card-body">
                                    <div className="row">
                                        <div className="col-8">
                                            <div >
                                                <label style = {{display:"inline"}}>Full Name:  </label>
                                                <h3 style = {{display:"inline"}}>{tenant.name}</h3>
                                            </div>
                                            <div >
                                                <label style = {{display:"inline"}}>National ID:  </label>
                                                <h3 style = {{display:"inline"}}>{tenant.nid}</h3>
                                            </div>
                                            <div >
                                                <label style = {{display:"inline"}}>Phone Number:  </label>
                                                <h3 style = {{display:"inline"}}>{tenant.phone}</h3>
                                            </div>
                                            <div >
                                                <label style = {{display:"inline"}}>Expected Rent:  </label>
                                                <h3 style = {{display:"inline"}}>{tenant.exp_rent}</h3>
                                            </div>
                                            <div >
                                                <label style = {{display:"inline"}}>Registration Date:  </label>
                                                <h3 style = {{display:"inline"}}>{tenant.reg_date}</h3>
                                            </div>
                                            <div >
                                                <label style = {{display:"inline"}}>House/Room Number:  </label>
                                                <h3 style = {{display:"inline"}}>{tenant.hrid}</h3>
                                            </div>

                                        </div>
                                        <div className="col-4">
                                            <img style={{width:'200px'}} src={tenant.nid_img}/>
                                        </div>
                                    </div>
                                    <Link className="btn btn-primary mt-5" to='/tenant'>Back</Link>
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


