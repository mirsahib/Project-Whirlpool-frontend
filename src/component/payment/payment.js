import React from "react";
import Header from "../layout/header";
import Sidebar from "../layout/sidebar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../layout/footer";
import "../../App.css";
import axios from "axios";
import { config } from "../../config/constants";
import Table from "../payment/table";
import Select from "react-select";

var url = config.url.API_URL;

const options = [
  { value: "1", label: "101" },
  { value: "2", label: "102" },
  { value: "3", label: "103" },
  { value: "4", label: "104" },
  { value: "5", label: "105" },
  { value: "6", label: "106" },
  { value: "7", label: "107" },
  { value: "8", label: "108" },
  { value: "9", label: "109" },
  { value: "10", label: "110" },
];

export default class Payment extends React.Component {
  constructor() {
    super();
    this.state = {
      paid: [],
      unpaid: [],
    };
  }

  componentDidMount() {
    const payload = {
      pay_month: new Date().toLocaleString("default", { month: "long" }),
      pay_year: new Date().getFullYear(),
    };

    axios.post(url + "api/payments/load", payload).then((response) => {
      //console.log(response.data)
      this.setState({
        paid: [...response.data.paid],
        unpaid: [...response.data.unpaid],
      });
    });
  }

  render() {
    const { paid, unpaid } = this.state;

    return (
      <div>
        <Header />
        <div id="layoutSidenav">
          <Sidebar />
          <div id="layoutSidenav_content">
            <main>
              <div class="container-fluid">
                <h1 class="mt-4">Payment</h1>
                <ol class="breadcrumb mb-4">
                  <li class="breadcrumb-item">
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li class="breadcrumb-item active">Payment</li>
                </ol>
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="input-group mb-2">
                      <div style={{ width: "300px" }} className="mr-2">
                        <Select
                          menuPlacement="auto"
                          menuPosition="fixed"
                          options={options}
                        />
                      </div>
                      <div style={{ width: "300px" }}>
                        <Select
                          menuPlacement="auto"
                          menuPosition="fixed"
                          options={options}
                        />
                      </div>
                      <span class="input-group-btn ml-2">
                        <button
                          class="btn btn-success"
                          type="button"
                          tabindex="-1"
                        >
                          Create Invoices
                        </button>
                      </span>
                    </div>
                    <nav>
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          class="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Paid
                        </a>
                        <a
                          class="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Unpaid
                        </a>
                      </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <div class="table-responsive">
                          <table
                            class="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellspacing="0"
                          >
                            <thead>
                              <tr>
                                <th>Tenant Name</th>
                                <th>Year</th>
                                <th>Month</th>
                                <th>Expected Rent</th>
                                <th>Paid Amount</th>
                                <th>Dues</th>
                                <th>Comment</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <Table data={[...paid]} />
                          </table>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        <div class="table-responsive">
                          <table
                            class="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellspacing="0"
                          >
                            <thead>
                              <tr>
                                <th>Tenant Name</th>
                                <th>Year</th>
                                <th>Month</th>
                                <th>Expected Rent</th>
                                <th>Paid Amount</th>
                                <th>Dues</th>
                                <th>Comment</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <Table data={[...unpaid]} />
                          </table>
                        </div>
                      </div>
                    </div>
                    {/** 
                                    
      */}
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
