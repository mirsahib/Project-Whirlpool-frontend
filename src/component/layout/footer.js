import React from 'react';
import '../../App.css';


export default class Footer extends React.Component {
    render() {
      return (<footer class="py-4 bg-light mt-auto">
                <div class="container-fluid">
                  <div class="d-flex align-items-center justify-content-between small">
                      <div class="text-muted">Copyright &copy; Your Website 2020</div>
                      <div>
                          <a href="#">Privacy Policy</a>
                          &middot;
                          <a href="#">Terms &amp; Conditions</a>
                      </div>
                  </div>
                </div>
              </footer>
  );
    }
}


