import React from 'react';
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../layout/footer'
import {DropdownButton,Dropdown} from 'react-bootstrap'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';

import '../../App.css';


export default class AddTenant extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          date: null,
          focused: null,
          exitdate: null,
          exitfocused: null
        }
      }
    handleDateChange = ()=>{
        console.log('hello')
    }
    handleexitDateChange = ()=>{
        console.log('hello')
    }

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
                                    <form>
                                        <div class='form-group'>
                                            <label for="exampleInputEmail1">Full Name</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name eg:Mahfuz Anam"/>
                                        </div>
                                        <div class='form-group'>
                                            <label for="exampleInputEmail1">National ID</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter national id"/>
                                        </div>
                                        <div class='form-group'>
                                            <label for="exampleInputEmail1">National ID Image</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                                </div>
                                                <div class="custom-file">
                                                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                                                    aria-describedby="inputGroupFileAddon01" />
                                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class='form-group'>
                                            <label for="exampleInputEmail1">Phone Number</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter land/cell number"/>
                                        </div>
                                        <div class='form-group'>
                                            <label for="exampleInputEmail1">Rent</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter rent"/>
                                        </div>
                                        <div class='form-group '>
                                            <label for="exampleInputEmail1" style={{marginRight:'5px'}}>Registration Date</label>
                                            <SingleDatePicker
                                                // showClearDate={true}
                                                
                                                inputIconPosition="after"
                                                small={true}
                                                block={false}
                                                numberOfMonths={1}
                                                date={this.state.date}
                                                onDateChange={date => this.handleDateChange(date)}
                                                focused={this.state.focused}
                                                onFocusChange={({ focused }) =>
                                                this.setState({ focused })
                                                }
                                                openDirection="up"
                                                hideKeyboardShortcutsPanel={true}
                                            />
                                            
                                        </div>
                                        <div class='form-group'>
                                            <label for="exampleInputEmail1">House/Room No</label>
                                            <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                        <div class='form-group'>
                                            <label for="exampleInputEmail1">Status</label>
                                            <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                        <div class='form-group'>
                                        <label for="exampleInputEmail1" style={{marginRight:'5px'}}>Exit Date</label>
                                            <SingleDatePicker
                                                // showClearDate={true}
                                                
                                                inputIconPosition="after"
                                                small={true}
                                                block={false}
                                                numberOfMonths={1}
                                                date={this.state.date}
                                                onDateChange={date => this.handleExitDateChange(date)}
                                                focused={this.state.exitfocused}
                                                onFocusChange={({ exitfocused }) =>
                                                this.setState({ exitfocused })
                                                }
                                                openDirection="up"
                                                hideKeyboardShortcutsPanel={true}
                                            />
                                        </div>
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


