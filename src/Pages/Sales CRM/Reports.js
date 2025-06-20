import React, {useState} from 'react'
import MainPage from '../../Components/MainPage'
import Prince from '../../Components/Prince'
import DropdownMenu from '../../Components/DropdownMenu'

const Reports = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };
  return (
    <>
    
        {/* Page */}
        <div className="page">
          {/* Main Header*/}
          <div className="page">
            <div className="main-container container-fluid">
              <div className="main-header-left">
                <a className="main-header-menu-icon" href="javascript:void(0)" id="mainSidebarToggle"><span /></a>
                <div className="hor-logo">
                  <a className="main-logo" href="index.html">
                    <img src="../assets/img/brand/logo.png" className="header-brand-img desktop-logo" alt="logo" />
                    <img src="../assets/img/brand/logo-light.png" className="header-brand-img desktop-logo-dark" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="main-header-center">
                <div className="responsive-logo">
                  <a href="index.html"><img src="../assets/img/brand/logo.png" className="mobile-logo" alt="logo" /></a>
                  <a href="index.html"><img src="../assets/img/brand/logo-light.png" className="mobile-logo-dark" alt="logo" /></a>
                </div>
                <div className="input-group">
                  <div className="input-group-btn search-panel">
                    <select className="form-control select2">
                      <option label="All categories">
                      </option>
                      <option value="IT Projects">
                        IT Projects
                      </option>
                      <option value="Business Case">
                        Business Case
                      </option>
                      <option value="Microsoft Project">
                        Microsoft Project
                      </option>
                      <option value="Risk Management">
                        Risk Management
                      </option>
                      <option value="Team Building">
                        Team Building
                      </option>
                    </select>
                  </div>
                  <input type="search" className="form-control rounded-0" placeholder="Search for anything..." />
                  <button className="btn search-btn"><i className="fe fe-search" /></button>
                </div>
              </div>
              <div className="main-header-right">
                <button className="navbar-toggler navresponsive-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fe fe-more-vertical header-icons navbar-toggler-icon" />
                </button>{/* Navresponsive closed */}
                <div className="navbar navbar-expand-lg  nav nav-item  navbar-nav-right responsive-navbar navbar-dark  ">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <div className="d-flex order-lg-2 ms-auto">
                      {/* Search */}
                      <div className="dropdown header-search">
                        <a className="nav-link icon header-search">
                          <i className="fe fe-search header-icons" />
                        </a>
                        <div className="dropdown-menu">
                          <div className="main-form-search p-2">
                            <div className="input-group">
                              <div className="input-group-btn search-panel">
                                <select className="form-control select2">
                                  <option label="All categories">
                                  </option>
                                  <option value="IT Projects">
                                    IT Projects
                                  </option>
                                  <option value="Business Case">
                                    Business Case
                                  </option>
                                  <option value="Microsoft Project">
                                    Microsoft Project
                                  </option>
                                  <option value="Risk Management">
                                    Risk Management
                                  </option>
                                  <option value="Team Building">
                                    Team Building
                                  </option>
                                </select>
                              </div>
                              <input type="search" className="form-control" placeholder="Search for anything..." />
                              <button className="btn search-btn"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}></svg> <i className="fe fe-eye">Box="0 0 24 24" fill="none"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" class="feather feather-search"&gt;
                                 
                                  <circle cx={11} cy={11} r={8} />
                                  <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                  </i>
                               
                                </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Search */}
                      {/* Theme-Layout */}
                      <div className="dropdown d-flex main-header-theme">
                        <a className="nav-link icon layout-setting">
                          <span className="dark-layout">
                            <i className="fe fe-sun header-icons" />
                          </span>
                          <span className="light-layout">
                            <i className="fe fe-moon header-icons" />
                          </span>
                        </a>
                      </div>
                      {/* Theme-Layout */}
                      {/* Full screen */}
                      <div className="dropdown ">
                        <a className="nav-link icon full-screen-link">
                          <i className="fe fe-maximize fullscreen-button fullscreen header-icons" />
                          <i className="fe fe-minimize fullscreen-button exit-fullscreen header-icons" />
                        </a>
                      </div>
                      {/* Full screen */}
                      {/* Notification */}
                      <div className="dropdown main-header-notification">
                        <a className="nav-link icon" href>
                          <i className="fe fe-bell header-icons" />
                          <span className="badge bg-danger nav-link-badge">4</span>
                        </a>
                        <div className="dropdown-menu">
                          <div className="header-navheading">
                            <p className="main-notification-text">You have 1 unread notification<span className="badge bg-pill bg-primary ms-3"><i className="fe fe-eye" /> all</span></p>
                          </div>
                          <div className="main-notification-list">
                            <div className="media new">
                              <div className="main-img-user online"><img alt="avatar" src="../assets/img/users/5.jpg" /></div>
                              <div className="media-body">
                                <p>Congratulate <strong>Olivia James</strong> for New template
                                  start</p>
                                <span>Oct 15 12:32pm</span>
                              </div>
                            </div>
                            <div className="media">
                              <div className="main-img-user"><img alt="avatar" src="../assets/img/users/2.jpg" />
                              </div>
                              <div className="media-body">
                                <p><strong>Joshua Gray</strong> New Message Received</p>
                                <span>Oct 13
                                  02:56am</span>
                              </div>
                            </div>
                            <div className="media">
                              <div className="main-img-user online"><img alt="avatar" src="../assets/img/users/3.jpg" /></div>
                              <div className="media-body">
                                <p><strong>Elizabeth Lewis</strong> <i className="fe fe-plus" />ed new schedule realease
                                </p><span>Oct
                                  12 10:40pm</span>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-footer">
                            <a href="javascript:void(0)"><i className="fe fe-eye" /> All Notifications</a>
                          </div>
                        </div>
                      </div>
                      {/* Notification */}
                      {/* Messages */}
                      <div className="main-header-notification">
                        <a className="nav-link icon" href="chat.html">
                          <i className="fe fe-message-square header-icons" />
                          <span className="badge bg-success nav-link-badge">6</span>
                        </a>
                      </div>
                      {/* Messages */}
                      {/* Profile */}
                      <div className="dropdown main-profile-menu">
                        <a className="d-flex" href="javascript:void(0)">
                          <span className="main-img-user"><img alt="avatar" src="../assets/img/users/1.jpg" /></span>
                        </a>
                        <div className="dropdown-menu">
                          <div className="header-navheading">
                            <h6 className="main-notification-title">Sonia Taylor</h6>
                            <p className="main-notification-text">Web Designer</p>
                          </div>
                          <a className="dropdown-item border-top" href="profile.html">
                            <i className="fe fe-user" /> My Profile
                          </a>
                          <a className="dropdown-item" href="profile.html">
                            <i className="fe fe-<i class=" fe fe-edit />"&gt; <i className="fe fe-edit" /> Profile
                          </a>
                          <a className="dropdown-item" href="profile.html">
                            <i className="fe fe-settings" /> Account Settings
                          </a>
                          <a className="dropdown-item" href="profile.html">
                            <i className="fe fe-settings" /> Support
                          </a>
                          <a className="dropdown-item" href="profile.html">
                            <i className="fe fe-compass" /> Activity
                          </a>
                          <a className="dropdown-item" href="signin.html">
                            <i className="fe fe-power" /> Sign Out
                          </a>
                        </div>
                      </div>
                      {/* Profile */}
                      {/* Sidebar */}
                      <div className="dropdown  header-settings">
                        <a href="javascript:void(0)" className="nav-link icon" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
                          <i className="fe fe-align-right header-icons" />
                        </a>
                      </div>
                      {/* Sidebar */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Main Header*/}
          {/* Sidemenu */}
          {/* Sidemenu */}
          <div className="sidebar">
      <div className="sidebar-header">
        <a className="logo" href="index.html">
          <img src="../assets/img/brand/logo-light.png" className="logo-img" alt="Logo" />
        </a>
      </div>
      <ul className="menu">
        <li className="menu-header">Dashboard</li>
        <li className="menu-item">
          <a href="business-dashboard.html">
            <i className="ti-home"></i>
            Business Dashboard
          </a>
        </li>
        <li className={`menu-item with-sub ${subMenuVisible ? 'open' : ''}`} onClick={toggleSubMenu}>
          <a href="javascript:void(0)">
            <i className="ti-wallet"></i>
            HRMS
            <i className={`angle fe fe-chevron-right ${subMenuVisible ? 'open' : ''}`}></i>
          </a>
          <ul className={`sub-menu ${subMenuVisible ? 'show' : ''}`}>
            <li className="sub-menu-label">HRMS</li>
            <li className="sub-menu-item">
              <a href="list-employee.html">Manage Employee</a>
            </li>
            <li className="sub-menu-item">
              <a href="employee-attendance.html">Attendance Logs</a>
            </li>
            <li className="sub-menu-item">
              <a href="employee-reports.html">Employee Report</a>
            </li>
          </ul>
        </li>
        {/* Add more menu items and sub-menus as needed */}
      </ul>
    </div>
          {/* End Sidemenu */}
          {/* End Sidemenu */}
          {/* Main Content*/}
          <div className="main-content side-content pt-0">
            <div className="main-container container-fluid">
              <div className="inner-body">
                {/* Page Header */}
                <div className="page-header">
                  <div>
                    <h2 className="main-content-title tx-24 mg-b-5">Lead Reports</h2>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">CRM </a></li>
                      <li className="breadcrumb-item active" aria-current="page">Lead Reports</li>
                    </ol>
                  </div>
                  <div className="d-flex">
                    <div className="justify-content-center">
                      <button type="button" className="btn btn-white btn-icon-text my-2 me-2">
                        <i className="fe fe-download me-2" /> Import
                      </button>
                      <button type="button" className="btn btn-primary my-2 btn-icon-text  me-2">
                        <i className="fe fe-download-cloud me-2" /> Download Report
                      </button>
                      <a href="#" type="button" className="btn btn-primary my-2 btn-icon-text" data-bs-target="#add-lead" data-bs-toggle="modal"> <i className="fe fe-plus me-2" /> Add New Lead</a>
                    </div>
                  </div>
                </div>
                {/* End Page Header */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card custom-card">
                      <div className="card-body py-3">
                        <div className="row">
                          <div className="col-sm-6">
                            <input type="search" className="form-control form-control" placeholder="Search..." aria-controls="example1" />
                          </div>
                          <div className="col-sm-2">
                            <select className="form-control select2">
                              <option label="Choose one">Source</option>
                            </select>
                          </div>
                          <div className="col-sm-2">
                            <select className="form-control select2">
                              <option label="Choose one">Assign To</option>
                              <option value="Firefox">Active</option>
                            </select>
                          </div>
                          <div className="col-sm-2">
                            <select className="form-control select2">
                              <option label="Choose one">Status</option>
                              <option value="Firefox" />
                            </select>
                          </div>
                        </div>	</div></div>
                  </div>	</div>
                {/* Row */}
                <div className="row row-sm">
                  <div className="col-lg-12">
                    <div className="card custom-card">
                      <div className="card-body">
                        <div className="text-wrap">
                          <div className="panel panel-primary tabs-style-3 p-0 tabs-style-3-0">
                            <div className="tab-content ">
                              <div className="tab-pane active" id="tab18">
                                <div className="table-responsive">
                                  <table className="table table-striped table-bordered text-nowrap mb-0">
                                    <thead>
                                      <tr>
                                        <th><label className="ckbox"><input type="checkbox" defaultValue={5} /><span /></label></th>
                                        <th>ID</th>
                                        <th>Photo</th>
                                        <th>Contact</th>
                                        <th>Company</th>
                                        <th>Assigned</th>
                                        <th>Followup</th>
                                        <th>Quotation</th>
                                        <th>Invoice</th>
                                        <th>Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td><label className="ckbox"><input type="checkbox" defaultValue={5} /><span /></label></td>
                                        <td><p className="mb-0">Source : IVR Call<br />
                                            LLD-00000001
                                          </p></td>
                                        <td><img alt="avatar" className="rounded-circle me-3" src="../assets/img/users/5.jpg" style={{width: '60px'}} /></td>
                                        <td>
                                          <p className="mb-0">Sushil Singh Sharma<br />
                                            M: 8786467890<br />
                                            E: NA<br />
                                            Truck Owner
                                          </p>
                                        </td>
                                        <td>
                                          <p className="mb-0">
                                            Solanki Transport<br />
                                            manager.solanki@gmail.com<br />
                                            Ph: 0120 889989<br />
                                            M: 8378278299<br />
                                            GST : 07AAGFF21O6N1Z1<br />
                                            H 140, Suit B04, BSI Business Park,<br />
                                            Sector 63, Noida, Uttar Pradesh 201301
                                          </p>
                                        </td>
                                        <td>
                                          <p><span className="plus_btn_" data-bs-target="#modaldemo-employee-form" data-bs-toggle="modal" style={{float: 'left'}} /><span className="ms-2 mt-2" style={{float: 'left'}}>Re-Assign</span></p><br />
                                          <p className="mb-0">
                                            Rajiv Kumar<br />
                                            Sales Manager<br />
                                            E: rajiv@lawyered.in <br />
                                            M: +91878675789<br />
                                            D: 22 May 2023
                                          </p>
                                        </td>
                                        <td>
                                          <p className="mb-0">10 Comment<br />
                                            02 Meeting<br />
                                            01 Proposal </p>
                                          <p><span className="plus_btn_" data-bs-target="#modaldemo-followup-form" data-bs-toggle="modal" /></p>
                                        </td>
                                        <td>
                                          <p className="mb-0">
                                            Total No of Truck : 100<br />
                                            Subscription : LOTS Premium<br />
                                            Rate Per Truck : 100<br />
                                            Total Amount : 10000<br />
                                            Discount (%) : 5<br />
                                            Start Date : 01/05/2023<br />
                                            End Date : 01/05/2024<br />
                                            Grace Period : 1 Year 
                                          </p>
                                        </td>
                                        <td>
                                          <p className="mb-0">
                                            Invoice No : LWLT0001 <br />
                                            Amount : 99000<br />
                                            GST : 10000<br />
                                            Total : 118000<br />
                                            Date : 27 May 2023<br />
                                            <span className="badge bg-pill bg-success-light">Payment Received : 29 May 2023</span>
                                          </p>
                                        </td>
                                        <td>
                                          <a href="lead-detail.html" className="btn ripple btn-warning btn-xs w-100 mb-1 mt-1">Details</a><br />
                                          <a href className="btn ripple btn-success btn-xs w-100 mb-1">Edit Lead</a><br />
                                          <a href="invoice.html" className="btn ripple btn-dark btn-xs w-100 mb-1">Invoice</a>	<br />
                                          <a href className="btn ripple btn-primary btn-xs w-100 " data-bs-target="#modaldemo-subscription" data-bs-toggle="modal">Subscription</a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Row */}
              </div>
            </div>
          </div>
          {/* End Main Content*/}
          {/* Main Footer*/}
          <div className="main-footer text-center">
            <div className="container">
              <div className="row row-sm">
                <div className="col-md-12">
                  <span>Copyright © 2022 <a href="#">Lawyered</a>. Designed by <a href="https://www.spruko.com/">Spruko</a> All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>
          {/*End Footer*/}
        </div>
        {/* End Page */}
        {/* Large Modal */}
        <div className="modal" id="add-lead">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content modal-content-demo">
              <div className="modal-header">
                <h6 className="modal-title">Add Lead</h6><button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <p className="mg-b-5">Source: </p>
                      <select className="form-control select2">
                        <option>Select</option>
                        <option>Facebook</option>
                        <option>Instagram</option>
                        <option>News &amp; Press</option>
                        <option>Website</option>
                        <option>Apps</option>
                        <option>Calling</option>
                        <option>Other </option>
                      </select>	</div>
                  </div>{/* col-4 */}
                  <div className="col-lg-4">
                    <div className="form-group">
                      <p className="mg-b-5">Type: </p>
                      <select className="form-control select2">
                        <option>Select</option>
                        <option>Business Lead 	</option>
                        <option>LOTS Lead</option>
                      </select></div>
                  </div>{/* col-4 */}
                  <div className="col-lg-4">
                    <div className="form-group">
                      <p className="mg-b-5">Sub Type: </p>
                      <select className="form-control select2">
                        <option>Select</option>
                        <option>Partnership </option>
                        <option>API &amp; Contracting</option>
                        <option>Others</option>
                      </select>	</div>
                  </div>{/* col-4 */}
                  <div className="col-lg-4">
                    <div className="form-group">
                      <p className="mg-b-5">+ LOTS FOR: </p>
                      <select className="form-control select2">
                        <option>Select</option>
                        <option>TRUCK</option>
                        <option>CAR</option>
                        <option>CAB</option>
                      </select>	</div>
                  </div>{/* col-4 */}
                  <div className="col-lg-4">
                    <div className="form-group">
                      <p className="mg-b-5">No of Trucks: </p>
                      <select className="form-control select2">
                        <option>Select</option>
                        <option>1</option>
                        <option>	1-5</option>
                        <option>5-10</option>
                        <option>10-20</option>
                        <option>20-30</option>
                        <option>30-50</option>
                        <option>50+ </option>
                      </select>	</div>
                  </div>{/* col-4 */}
                  <div className="col-lg-4">
                    <div className="form-group">
                      <p className="mg-b-5">Company Alias</p>
                      <input type="text" className="form-control" name="example-text-input" placeholder="Enter" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <p className="mg-b-5">Name</p>
                      <input type="text" className="form-control" name="example-text-input" placeholder="Enter" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <p className="mg-b-5">Email Id</p>
                      <input type="text" className="form-control" name="example-text-input" placeholder="Enter" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <p className="mg-b-5">Phone No.</p>
                      <input type="text" className="form-control" name="example-text-input" placeholder="Enter" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <p className="mg-b-5">	Contact Person: </p>
                      <select className="form-control select2">
                        <option>Select</option>
                        <option>Driver</option>
                        <option>Owner</option>
                        <option>Owner+Driver</option>
                        <option>Fleet Manager</option>
                      </select>	</div>
                  </div>{/* col-4 */}
                  <div className="col-lg-12"><button className="btn ripple btn-primary" type="button">Save</button></div>	
                </div>
              </div>
            </div>
          </div>
          {/*End Large Modal */}
        </div>
        {/* End Page */}
        {/* Large Modal */}
        <div className="modal" id="modaldemo-id">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content modal-content-demo">
              <div className="modal-header">
                <h6 className="modal-title">ID</h6><button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-8">
                    <img src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif" style={{width: '100%'}} />
                  </div>
                  <div className="col-sm-4">
                    <h6>ID : Law001</h6>
                    <div className="form-group">
                      <select className="form-control select2">
                        <option>Status</option>
                        <option>Approved</option>
                        <option>Disapproved</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <button className="btn ripple btn-primary w-100" type="button">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Large Modal */}
        <div className="modal" id="modaldemo-pan">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content modal-content-demo">
              <div className="modal-header">
                <h6 className="modal-title">PAN</h6><button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-8">
                    <img src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif" style={{width: '100%'}} />
                  </div>
                  <div className="col-sm-4">
                    <h6>Pan No. : CLDPK8793</h6>
                    <div className="form-group">
                      <select className="form-control select2">
                        <option>Status</option>
                        <option>Approved</option>
                        <option>Disapproved</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <button className="btn ripple btn-primary w-100" type="button">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Large Modal */}
        {/*End Large Modal */}
        <div className="modal" id="modaldemo-cheque">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content modal-content-demo">
              <div className="modal-header">
                <h6 className="modal-title">Cheque</h6><button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-8">
                    <img src="https://newadmin.webkype.com/assets/img/pngs/cheque-img.jpg" style={{width: '100%'}} />
                  </div>
                  <div className="col-sm-4">
                    <h6>Cheque No. : 0123456789</h6>
                    <div className="form-group">
                      <select className="form-control select2">
                        <option>Status</option>
                        <option>Approved</option>
                        <option>Disapproved</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <button className="btn ripple btn-primary w-100" type="button">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Large Modal */}
        {/*End Large Modal */}
        <div className="modal" id="modaldemo-address">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content modal-content-demo">
              <div className="modal-header">
                <h6 className="modal-title">Address</h6><button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-8">
                    <p>3-15/10/403 Newark, Street no 5, Next To Pizza Hut,  Bangalore,  Karnataka, 560003, India.</p>
                    <p className="mb-0">soniataylor344@example.com</p>
                    <p>+91 08023310451</p>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <select className="form-control select2">
                        <option>Status</option>
                        <option>Approved</option>
                        <option>Disapproved</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <button className="btn ripple btn-primary w-100" type="button">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Large Modal */}
        {/*End Large Modal */}
        <div className="modal" id="modaldemo-employee-form">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content modal-content-demo">
              <div className="modal-header">
                <h6 className="modal-title">Assign</h6><button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
              </div>
              <div className="modal-body">
                <form>
                  <div className="row row-sm">
                    <div className="col-sm-4  form-group">
                      <label className="form-label">Select Department</label>
                      <select className="form-control select select2">
                        <option>Select</option>
                      </select>
                    </div>
                    <div className="col-sm-4  form-group">
                      <label className="form-label">Select Designation</label>
                      <select className="form-control select select2">
                        <option>Select</option>
                      </select>
                    </div>
                    <div className="col-sm-4  form-group">
                      <label className="form-label">Select Employee </label>
                      <select className="form-control select select2">
                        <option>Select</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn ripple btn-primary" type="button">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/*End Large Modal */}
        {/*End Large Modal */}
        <div className="modal" id="modaldemo-followup-form">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content modal-content-demo">
              <div className="modal-header">
                <h6 className="modal-title">Followup</h6><button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
              </div>
              <div className="modal-body">
                <form>
                  <div className="row row-sm">
                    <div className="col-sm-12 form-group">
                      <div className="row">
                        <div className="col-lg-2">
                          <label className="rdiobox update_box"><input defaultChecked name="rdio" type="radio" /> <span>Update</span></label>
                        </div>
                        <div className="col-lg-2">
                          <label className="rdiobox meeting_box"><input name="rdio" type="radio" /> <span>Meeting</span></label>
                        </div>
                        <div className="col-lg-2">
                          <label className="rdiobox quotation_box"><input name="rdio" type="radio" /> <span>Quotation</span></label>
                        </div>
                      </div>
                    </div></div>
                  <div className="row row-sm update_wrap">
                    <div className="col-sm-12 form-group">
                      <label className="form-label">Comment</label>
                      <textarea type="text" className="form-control" placeholder="Enter" defaultValue={""} />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Attachment</label>
                      <input type="file" className="form-control" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Status</label>
                      <select className="form-control select select2">
                        <option>Select</option>
                        <option>Followup</option>
                        <option>Quotation</option> 
                        <option>Projection</option>
                        <option>Invoiced</option> 
                        <option>Sale</option>
                      </select>
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Priority</label>
                      <select className="form-control select select2">
                        <option>Select</option>
                        <option>High</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 mt-2 mb-2"><hr /></div>
                  <div className="row row-sm meeting_wrap">
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Date</label>
                      <input type="date" className="form-control" placeholder="Enter" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Time</label>
                      <input type="time" className="form-control" placeholder="Enter" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Mode</label>
                      <input type="text" className="form-control" placeholder="Enter" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Venue</label>
                      <input type="text" className="form-control" placeholder="Enter" />
                    </div>
                    <div className="col-sm-8 form-group">
                      <label className="form-label">Comment</label>
                      <input type="text" className="form-control" placeholder="Enter" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Attachment</label>
                      <input type="file" className="form-control" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Status</label>
                      <select className="form-control select select2">
                        <option>Select</option>
                        <option>Followup</option>
                        <option>Quotation</option> 
                        <option>Projection</option>
                        <option>Invoiced</option> 
                        <option>Sale</option>
                      </select>
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Priority</label>
                      <select className="form-control select select2">
                        <option>Select</option>
                        <option>High</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 mt-2 mb-2"><hr /></div>
                  <div className="row row-sm quotation_wrap">
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Total No of Truck</label>
                      <input type="text" className="form-control" placeholder="Enter" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Subscription</label>
                      <input type="text" className="form-control" placeholder="Enter" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Rate Per Truck</label>
                      <input type="text" className="form-control" placeholder="Enter" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Total Amount</label>
                      <input type="text" className="form-control" placeholder="Enter" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Discount (%)</label>
                      <input type="text" className="form-control" placeholder="Enter" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Start Date</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">End Date </label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Grace Period </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>			
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn ripple btn-primary" type="button">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/*End Large Modal */}
        {/*End Large Modal */}
        <div className="modal" id="modaldemo-subscription">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content modal-content-demo">
              <div className="modal-header">
                <h6 className="modal-title">Subscription</h6><button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
              </div>
              <div className="modal-body">
                <div className="media mt-0">
                  <div className="media-body ms-2 d-flex">
                    <div className="me-3 pt-4"><img src="../assets/img/lots-logo.png" style={{width: '200px'}} /></div>
                    <div>
                      <p className="mb-0 tx-13 text-dark"><i className="fe fe-chevrons-right me-1" />Total No of Truck : 100</p>
                      <p className="mb-0 tx-13 text-dark"><i className="fe fe-chevrons-right me-1" />Subscription  : LOTS Premium</p>
                      <p className="mb-0 tx-13 text-dark"><i className="fe fe-chevrons-right me-1" />Rate Per Truck : 100</p>
                      <p className="mb-0 tx-13 text-dark"><i className="fe fe-chevrons-right me-1" />Total Amount : 10000 </p>
                      <p className="mb-0 tx-13 text-dark"><i className="fe fe-chevrons-right me-1" />Discount (%) : 5 </p>
                      <p className="mb-0 tx-13 text-dark"> <i className="fe fe-chevrons-right me-1" />Start Date : 01/05/2023</p>
                      <p className="mb-0 tx-13 text-dark"><i className="fe fe-chevrons-right me-1" />End Date : 01/05/2024</p>
                      <p className="mb-0 tx-13 text-dark"><i className="fe fe-chevrons-right me-1" />Grace Period : 1 Year </p>
                      <a href className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">Accepted</a>
                      <a href className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">Cancel</a>
                      <a href className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">Revise</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Large Modal */}
        {/* Back-to-top */}
        <a href="#top" id="back-to-top"><i className="fe fe-arrow-up" /></a>
        {/* Jquery js*/}
        {/* Bootstrap js*/}
        {/* Perfect-scrollbar js */}
        {/* Sidemenu js */}
        {/* Sidebar js */}
        {/* Select2 js*/}
        {/* Internal Datepicker js */}
        {/* Color Theme js */}
        {/* Sticky js */}
        {/* Modal js*/}
        {/* Custom js */}
    </>
  )
}

export default Reports