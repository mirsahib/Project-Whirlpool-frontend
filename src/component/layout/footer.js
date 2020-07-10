import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default class Footer extends React.Component {
    render() {
      return (<footer class="py-4 bg-light mt-auto">
                <div class="container-fluid">
                  <div class="d-flex align-items-center justify-content-between small">
                      <div class="text-muted">Copyright &copy; Your Website 2020</div>
                      <div>
                        <Link to='/'>Privacy Policy</Link>
                          &middot;
                        <Link to='/'>Terms &amp; Conditions</Link>
                      </div>
                  </div>
                </div>
              </footer>
  );
    }
}


