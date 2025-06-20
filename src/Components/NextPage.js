import React from 'react';
import { Link } from 'react-router-dom';
import Employee from '../Employee';
import Firstpage from '../Pages/Dashboard';
import '../assets/css/style.css';
import '../assets/plugins/web-fonts/plugin.css';
import logo from '../assets/img/logo.png';
import Im from '../assets/img/pngs/icon-01.png';
import Img from '../assets/img/pngs/icon-06.png';
import Img2 from '../assets/img/pngs/icon-02.png';
import Img3 from '../assets/img/pngs/icon-03.png';
import Img4 from '../assets/img/pngs/icon-05.png';
import Img5 from '../assets/img/pngs/icon-04.png';


const NextPage = () => {
  return (
    <>

      <div className="page main-signin-wrapper">
        <div className="container">
          <div className="row row-sm">
            <div className="col-sm-12 text-center mb-5">
              <img
                src={logo}
                className=" mb-0"
                alt="user"
                style={{ width: 100 }}
              />
              <h5 className="mt-4 txt-blue">PWIP Departments</h5>
              <span className="txt-blue tx-13 mb-5 mt-xl-0">
                Login In To Your Department With valid Ids.
              </span>
            </div>
          </div>
          {/* Row */}
          <div className="row row-sm">
            <div className="col-sm-6 col-md-6 col-xl-4">
              <div className="card custom-card">
                <Link to="/Dashboard" className="card-body user-card text-center">
                  <div className="main-img-user avatar-xl online text-center">
                    <img
                      alt=""
                      src={Im}
                      style={{ borderRadius: "0 !important" }}
                    />
                  </div>
                  <div className="mt-2">
                    <h5 className="mb-1">Executive View</h5>
                    <p className="mb-1 tx-inverse">
                      Login as CEO, CXO To Get Complete View of Business
                    </p>
                    <span className="text-muted">
                      <i className="far fa-check-circle text-success me-1" />
                      Login
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4">
              <div className="card custom-card">
                <Link to="/HrDashboard" className="card-body user-card text-center">
                
                  <div className="main-img-user avatar-xl online text-center">
                    <img
                      alt=""
                      src={Img2}
                      style={{ borderRadius: "0 !important" }}
                    />
                  </div>
                  <div className="mt-2">
                    <h5 className="mb-1">HR View</h5>
                    <p className="mb-1 tx-inverse">
                      Login as HR Manager To Manage Employees &amp; Team
                    </p>
                    <span className="text-muted">
                      <i className="far fa-check-circle text-success me-1" />
                      Login
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4">
              <div className="card custom-card">
                <Link 
                  href="/Dashboard"
                  className="card-body user-card text-center"
                >
                  <div className="main-img-user avatar-xl online text-center">
                    <img
                      alt=""
                      src={Img3}
                      style={{ borderRadius: "0 !important" }}
                    />
                  </div>
                  <div className="mt-2">
                    <h5 className="mb-1">Sales CRM View</h5>
                    <p className="mb-1 tx-inverse">
                      Login As Sales Team Member To Work on Sales CRM
                    </p>
                    <span className="text-muted">
                      <i className="far fa-check-circle text-success me-1" />
                      Login
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4">
              <div className="card custom-card">
                <a
                  href="order-dashboard.html"
                  className="card-body user-card text-center"
                >
                  <div className="main-img-user avatar-xl online text-center">
                    <img
                      alt=""
                      src={Img4}
                      style={{ borderRadius: "0 !important" }}
                    />
                  </div>
                  <div className="mt-2">
                    <h5 className="mb-1">Order Manager View</h5>
                    <p className="mb-1 tx-inverse">
                      Login as Order Management team To Manage Orders.
                    </p>
                    <span className="text-muted">
                      <i className="far fa-check-circle text-success me-1" />
                      Login
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4">
              <div className="card custom-card">
                <a
                  href="account-dashboard.html"
                  className="card-body user-card text-center"
                >
                  <div className="main-img-user avatar-xl online text-center">
                    <img
                      alt=""
                      src={Img}
                      style={{ borderRadius: "0 !important" }}
                    />
                  </div>
                  <div className="mt-2">
                    <h5 className="mb-1">Accounts View</h5>
                    <p className="mb-1 tx-inverse">
                      Login as CFO, Billing Manager or Accountant To Manage Finance
                    </p>
                    <span className="text-muted">
                      <i className="far fa-check-circle text-success me-1" />
                      Login
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-4">
              <div className="card custom-card">
                <a
                  href="/nextPage"
                  className="card-body user-card text-center"
                >
                  <div className="main-img-user avatar-xl online text-center">
                    <img
                      alt=""
                      src={Img5}
                      style={{ borderRadius: "0 !important" }}
                    />
                  </div>
                  <div className="mt-2">
                    <h5 className="mb-1">Custom House Agent View ( CHA)</h5>
                    <p className="mb-1 tx-inverse">
                      Login as CHA to Manage Order Delivery processes Port &amp;
                      Containers.
                    </p>
                    <span className="text-muted">
                      <i className="far fa-check-circle text-success me-1" />
                      Login
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/*End Row */}
        </div>
      </div>

    </>

  )
}

export default NextPage