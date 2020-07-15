import React from 'react';
import axios from 'axios'
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../layout/footer'
import '../../App.css';
import {config} from '../../config/constants'
import DatePicker from 'react-datepicker';
import moment from 'moment'
import Select from 'react-select'


var url = config.url.API_URL
//var url_users = config.url.API_URL_USERS

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

export default class EditTenant extends React.Component {
    constructor(){
        super();
        this.state = {
            startDate: moment(),
            nameInput: '',
            nidInput:'',
            nid_img:'',
            phoneInput:'',
            rentInput:'',
            hridInput:{},
        }
    }

    componentDidMount(){
        axios.get(url+"api/tenants/"+this.props.match.params.id+"/edit").then(response => {
            let tenant = response.data.tenant;
            this.setState({
                nameInput:tenant.name,
                nidInput:tenant.nid,
                phoneInput:tenant.phone,
                rentInput:tenant.exp_rent,
                nid_img:tenant.nid_img,
                hridInput:{label:tenant.house_id+100,value:tenant.house_id}, //this code is bad 
            })
          })
       //console.log(this.props.match.params.id)
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
    handleDateChange = (date)=>{
        this.setState({
            startDate: date
          })
        
    }

    validate = ()=>{
        let flag = true;
        let nameError = ""

        if(!this.state.nameInput.includes(' ')){
            nameError = "Full name should contain a space"
            this.setState({nameError})
            flag = false
        }

        //datepicker validation is not done

        return flag

    }


    handleFormSubmit = (e)=>{
        e.preventDefault();
        
        let isValid = this.validate()

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
            // axios.post(url+'api/tenants', tenant)
            // .then(response => {
            //     // redirect to the homepage
            //     this.setState({redirect:true,msg:'success'})
            //     console.log(response);
                
            // })
            // .catch(error => {
            //     this.setState({
            //     errors: error.response.data.errors,msg:'failed'
            //     })
            // })
            this.setState({redirect:true,msg:'success'})
            this.setState({nameError:'',hridError:''})
        }
    }


    render() {
        
        
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
                                <li className="breadcrumb-item active">{this.state.nameInput}</li>
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
                                            <label for="exampleInputEmail1">National ID Image :</label>
                                            <img style={{width:"100px",marginBottom:"10px",marginLeft:"10px"}} src={this.state.nid_img}/>

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
                                        <button className='btn btn-success'>Update</button>
                                        <Link className='btn btn-primary ml-2' to="/tenant">Back</Link>
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


