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
import {config} from '../../config/constants'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var url = config.url.API_URL

const options = [
    { value: '1', label: '101' },
    { value: '2', label: '102' },
    { value: '3', label: '103' },
    { value: '4', label: '104' },
    { value: '5', label: '105' },
    { value: '6', label: '106' },
    { value: '7', label: '107' },
    { value: '8', label: '108' },
    { value: '9', label: '109' },
    { value: '10', label: '110' },
];


toast.configure()
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
            nameError: '',
            nidError:'',
            phoneError:'',
            rentError:'',
            hridError:'',
            redirect:false
        }
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

    validate = ()=>{
        let flag = true;
        let nameError = ""
        let hridError = ""

        if(!this.state.nameInput.includes(' ')){
            nameError = "Full name should contain a space"
            this.setState({nameError})
            flag = false
        }
        
        if(this.state.hridInput.value === undefined){
            hridError = "please select a house/room number"
            this.setState({hridError})
            flag = false
        }

        //datepicker validation is not done

        return flag
    }
    

    

    handleFormSubmit = (e)=>{
        e.preventDefault();
        let isValid = this.validate()
        //let isValid = true
        if(isValid){
            console.log("form valid")
            const tenant = {
                name: this.state.nameInput,
                nid:this.state.nidInput,
                phone:this.state.phoneInput,
                exp_rent: this.state.rentInput,
                reg_date:moment(this.state.startDate).format("YYYY-MM-DD"),
                house_id:this.state.hridInput.value
            }
            //console.log(tenant)
            axios.post(url+'api/tenants', tenant)
            .then(response => {
                // redirect to the homepage
                toast.success(response.data.message,{position:toast.POSITION.BOTTOM_RIGHT,autoClose:4000})
                this.setState({redirect:true})
 
            })
            .catch(error => {
                console.log(error.response.data.statustext)
                //toast.error(error,{position:toast.POSITION.BOTTOM_RIGHT,autoClose:3000})
            })
        }
    }

    render() {
        if(this.state.redirect){
            return<Redirect to="/tenant"/>
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
                                            <input type="text" className="form-control" id="nameInput" name="nameInput" value={this.state.nameInput} onChange = {this.handleFieldChange}  placeholder="Enter full name eg:Mahfuz Anam" required/>
                                            <div style={{fontSize:14, color:'red'}}>{this.state.nameError}</div>
                                        </div>
                                        <div className='form-group'>
                                            <label for="exampleInputEmail1">National ID</label>
                                            <input type="text" className="form-control" id="nidInput" name="nidInput" value={this.state.nidInput} onChange={this.handleFieldChange} placeholder="Enter national id" required/>
                                            
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
                                            <input type="text" className="form-control" id="phoneInput" name="phoneInput" value={this.state.phoneInput} onChange={this.handleFieldChange} placeholder="Enter land/cell number" pattern="(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$" required  />
                                            <div style={{fontSize:14, color:'red'}}>{this.state.phoneError}</div>
                                        </div>
                                        <div className='form-group'>
                                            <label for="exampleInputEmail1">Rent</label>
                                            <input type="number" className="form-control" id="rentInput" name="rentInput" value={this.state.rentInput} onChange={this.handleFieldChange} placeholder="Enter rent" 
                                             required/>
                                             
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
                                            <Select value={this.state.hridInput} options={options} onChange={this.handleDropDownMenu} required />                                           
                                            <div style={{fontSize:14, color:'red'}}>{this.state.hridError}</div>
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


