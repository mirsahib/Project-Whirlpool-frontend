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


export default class NewPayment extends React.Component {
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
                            <h1 class="mt-4">Payment Details</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
                                <li class="breadcrumb-item"><Link to='/payment'>Payment</Link></li>
                                <li class="breadcrumb-item active">Payment Details</li>
                            </ol>
                            <div class="card mb-4">
                                <div class="card-body">
                                    <form>
                                        <div class='form-group'>
                                            <label for="exampleInputEmail1">Full Name : Mahfuz Anam</label>
                                        </div>
                                        <div class='form-group'>
                                            
                                            <DropdownButton id="dropdown-item-button" title="House/Room No">
                                                <Dropdown.Item as="button">A1</Dropdown.Item>
                                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                        
                                        <div class='form-group'>
                                            <DropdownButton id="dropdown-item-button" title="Month">
                                                <Dropdown.Item as="button">January</Dropdown.Item>
                                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                        <div class='form-group'>
                                            
                                            <DropdownButton id="dropdown-item-button" title="Year">
                                                <Dropdown.Item as="button">2020</Dropdown.Item>
                                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                        <div class='form-group'>
                                            <label for="exampleInputEmail1">Expected Amount : 2500</label>
                                        </div>
                                        <div class='form-group'>
                                            <label for="exampleInputEmail1">Paid Amount</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Paid Amount"/>
                                        </div>

                                        <div class='form-group '>
                                            <label for="exampleInputEmail1" style={{marginRight:'5px'}}>Payment Date</label>
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
                                            <label for="exampleInputEmail1">Comments</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
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


