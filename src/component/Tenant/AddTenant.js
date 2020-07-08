import React from 'react';
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../layout/footer'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DatePicker from 'react-datepicker';
import axios from 'axios'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select'
import { Redirect } from 'react-router'



import '../../App.css';

const options = [
    { value: '101', label: '101' },
    { value: '102', label: '102' },
    { value: '103', label: '103' },
    { value: '104', label: '104' },
    { value: '105', label: '105' },
    { value: '106', label: '106' },
    { value: '107', label: '107' },
    { value: '108', label: '108' },
    { value: '109', label: '109' },
    { value: '110', label: '110' },
];

export default class AddTenant extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            startDate: moment(),
            nameInput: '',
            nidInput:'',
            nid_img:'',
            phoneInput:'',
            rentInput:'',
            hridInput:'',
            error :[],
            redirect:false
            
        }
      }
    hasError = key=>{
        console.log(this.state.error)

        return this.state.error.indexOf(key) !==-1;
    }
    handleDateChange = (date)=>{
        this.setState({
            startDate: date
          })
        
    }
    handleFieldChange = (e)=>{ 
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }
    handleDropDownMenu = (hridInput)=>{
        this.setState({ hridInput });
        console.log(`Option selected:`, hridInput);
    }

    

    handleFormSubmit = (e)=>{
        e.preventDefault();
        let errors = [];
 
        //firstname
        if (this.state.nameInput === "") {
            errors.push("nameInput");
        }
        this.setState({
            error: errors
        });
        if (errors.length > 0) {
            return false;
        } else {
            alert("everything good. submit form!");
        }

        // const tenant = {
        //     name: this.state.nameInput,
        //     nid:this.state.nidInput,
        //     phone:this.state.phoneInput,
        //     exp_rent: this.state.rentInput,
        //     reg_date:moment(this.state.startDate).format("YYYY-MM-DD"),
        //     hrid:this.state.hridInput.value
        // }
        // console.log(tenant)
        // axios.post('http://127.0.0.1:8000/api/tenants', tenant)
        //   .then(response => {
        //     // redirect to the homepage
        //     this.setState({redirect:true})
        //     console.log(response);
            
        //   })
        //   .catch(error => {
        //     this.setState({
        //       errors: error.response.data.errors
        //     })
        //   })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to="/tenant"/>
        }
      return (
        <div>
            <Header />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Create Tenant</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to='/tenant'>Tenant</Link></li>
                                <li className="breadcrumb-item active">Create Tenant</li>
                            </ol>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <form onSubmit={this.handleFormSubmit} novalidate>
                                        <div className='form-group'>
                                            <label for="exampleInputEmail1">Full Name</label>
                                            <input type="text" className="form-control" id="nameInput" name="nameInput" value={this.state.name} onChange = {this.handleFieldChange}  placeholder="Enter full name eg:Mahfuz Anam" />
                                            <div className={()=>this.hasError("nameInput") ? "inline-errormsg" : "d-none"}>Please enter a value</div>
                                        </div>
                                        <div className='form-group'>
                                            <label for="exampleInputEmail1">National ID</label>
                                            <input type="text" className="form-control" id="nidInput" name="nidInput" value={this.state.nid} onChange={this.handleFieldChange} placeholder="Enter national id" />
                                        </div>
                                        <div className='form-group'>
                                            <label for="exampleInputEmail1">National ID Image</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                                </div>
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="inputGroupFile01"
                                                    aria-describedby="inputGroupFileAddon01" />
                                                    <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <label for="exampleInputEmail1">Phone Number</label>
                                            <input type="text" className="form-control" id="phoneInput" name="phoneInput" value={this.state.phone} onChange={this.handleFieldChange} placeholder="Enter land/cell number" />
                                        </div>
                                        <div className='form-group'>
                                            <label for="exampleInputEmail1">Rent</label>
                                            <input type="text" className="form-control" id="rentInput" name="rentInput" value={this.state.rent} onChange={this.handleFieldChange} placeholder="Enter rent" 
                                            />
                                        </div>
                                        <div className='form-group '>
                                            <label for="exampleInputEmail1" style={{marginRight:'5px'}}>Registration Date</label>
                                            <DatePicker
                                                selected={ moment(this.state.startDate).toDate() }
                                                onChange={ this.handleDateChange }
                                                name="startDate"
                                                dateFormat="yyyy/MM/dd"
                                            />
                                            
                                        </div>
                                        <div className='form-group'>
                                            <label>House/Room No</label>
                                            <Select value={this.state.hridInput} options={options} onChange={this.handleDropDownMenu} />                                           
                                        </div>
                                        <button className='btn btn-success'>Create</button>
                                    </form>
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


