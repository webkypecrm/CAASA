import React from 'react'
import '../assets/plugins/pickr-master/themes/classic.min.css'
import '../assets/css/style.css'

const MainPage = () => {
  return (
    <>
   
  <meta charSet="utf-8" />
  <meta
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
    name="viewport"
  />
  <meta name="description" content="PWIP Beta ERP Design" />
  <meta name="author" content="PWIP Beta ERP Design" />
  <meta name="keywords" content="PWIP Beta ERP Design" />
  {/* Favicon */}
  <link rel="icon" href="../assets/img/brand/favicon.ico" type="image/x-icon" />
  {/* Title */}
  <title>PWIP Beta ERP Design</title>
  {/* Bootstrap css*/}
  <link
    id="style"
    href="../assets/plugins/bootstrap/css/bootstrap.min.css"
    rel="stylesheet"
  />
  {/* Icons css*/}
  <link href="../assets/plugins/web-fonts/icons.css" rel="stylesheet" />
  <link
    href="../assets/plugins/web-fonts/font-awesome/font-awesome.min.css"
    rel="stylesheet"
  />
  <link href="../assets/plugins/web-fonts/plugin.css" rel="stylesheet" />
  {/* Style css*/}
  <link href="../assets/css/style.css" rel="stylesheet" />
  {/* INTERNAL COLOR PICKER css*/}
  <link
    href="../assets/plugins/pickr-master/themes/classic.min.css"
    rel="stylesheet"
  />
  <link
    href="../assets/plugins/pickr-master/themes/monolith.min.css"
    rel="stylesheet"
  />
  <link
    href="../assets/plugins/pickr-master/themes/nano.min.css"
    rel="stylesheet"
  />
  {/* Select2 css */}
  <link href="../assets/plugins/select2/css/select2.min.css" rel="stylesheet" />
  {/*Bootstrap-datepicker css*/}
  <link
    rel="stylesheet"
    href="../assets/plugins/bootstrap-datepicker/bootstrap-datepicker.css"
  />
  {/* Internal Datetimepicker-slider css */}
  <link
    href="../assets/plugins/amazeui-datetimepicker/css/amazeui.datetimepicker.css"
    rel="stylesheet"
  />
  {/* Internal Specturm-color picker css*/}
  <link
    href="../assets/plugins/spectrum-colorpicker/spectrum.css"
    rel="stylesheet"
  />
  {/* Internal Ion.rangeslider css*/}
  <link
    href="../assets/plugins/ion-rangeslider/css/ion.rangeSlider.css"
    rel="stylesheet"
  />
  <link
    href="../assets/plugins/ion-rangeslider/css/ion.rangeSlider.skinFlat.css"
    rel="stylesheet"
  />
  {/* Loader */}
  
  {/* End Loader */}
  {/* Page */}
  <div className="page">
    {/* Main Header*/}
    <div className="page">
      <div className="main-container container-fluid">
        <div className="main-header-left">
          <a
            className="main-header-menu-icon"
            href="javascript:void(0)"
            id="mainSidebarToggle"
          >
            <span />
          </a>
          <div className="hor-logo">
            <a className="main-logo" href="index.html">
              <img
                src="../assets/img/brand/logo.png"
                className="header-brand-img desktop-logo"
                alt="logo"
              />
              <img
                src="../assets/img/brand/logo-light.png"
                className="header-brand-img desktop-logo-dark"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="main-header-center">
          <div className="responsive-logo">
            <a href="index.html">
              <img
                src="../assets/img/brand/logo.png"
                className="mobile-logo"
                alt="logo"
              />
            </a>
            <a href="index.html">
              <img
                src="../assets/img/brand/logo-light.png"
                className="mobile-logo-dark"
                alt="logo"
              />
            </a>
          </div>
          <div className="input-group">
            <div className="input-group-btn search-panel">
              <select className="form-control select2">
                <option label="All categories"></option>
                <option>Staff/Agent</option>
                <option>Sales Lead</option>
                <option>Subscriber</option>
                <option>Cases/Incident</option>
                <option>Lawyer</option>
              </select>
            </div>
            <input
              type="search"
              className="form-control rounded-0"
              placeholder="Search for anything..."
            />
            <button className="btn search-btn">
              <i className="fe fe-search" />
            </button>
          </div>
        </div>
        <div className="main-header-right">
          <button
            className="navbar-toggler navresponsive-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fe fe-more-vertical header-icons navbar-toggler-icon" />
          </button>
          {/* Navresponsive closed */}
          <div className="navbar navbar-expand-lg  nav nav-item  navbar-nav-right responsive-navbar navbar-dark  ">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent-4"
            >
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
                            <option label="All categories"> </option>
                            <option>Staff/Agent</option>
                            <option>Sales Lead</option>
                            <option>Subscriber</option>
                            <option>Cases/Incident</option>
                            <option>Lawyer</option>
                          </select>
                        </div>
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search for anything..."
                        />
                        <button className="btn search-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-search"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                          </svg>
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
                  <a className="nav-link icon" href="">
                    <i className="fe fe-bell header-icons" />
                    <span className="badge bg-danger nav-link-badge">4</span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="header-navheading">
                      <p className="main-notification-text">
                        You have 1 unread notification
                        <span className="badge bg-pill bg-primary ms-3">
                          View all
                        </span>
                      </p>
                    </div>
                    <div className="main-notification-list">
                      <div className="media new">
                        <div className="main-img-user online">
                          <img alt="avatar" src="../assets/img/users/5.jpg" />
                        </div>
                        <div className="media-body">
                          <p>
                            Congratulate <strong>Olivia James</strong> for New
                            template start
                          </p>
                          <span>Oct 15 12:32pm</span>
                        </div>
                      </div>
                      <div className="media">
                        <div className="main-img-user">
                          <img alt="avatar" src="../assets/img/users/2.jpg" />
                        </div>
                        <div className="media-body">
                          <p>
                            <strong>Joshua Gray</strong> New Message Received
                          </p>
                          <span>Oct 13 02:56am</span>
                        </div>
                      </div>
                      <div className="media">
                        <div className="main-img-user online">
                          <img alt="avatar" src="../assets/img/users/3.jpg" />
                        </div>
                        <div className="media-body">
                          <p>
                            <strong>Elizabeth Lewis</strong> added new schedule
                            realease
                          </p>
                          <span>Oct 12 10:40pm</span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-footer">
                      <a href="javascript:void(0)">View All Notifications</a>
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
                    <span className="main-img-user">
                      <img alt="avatar" src="../assets/img/users/img-1.png" />
                    </span>
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
                      <i className="fe fe-edit" /> Edit Profile
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
                  <a
                    href="javascript:void(0)"
                    className="nav-link icon"
                    data-bs-toggle="sidebar-right"
                    data-bs-target=".sidebar-right"
                  >
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
   
    {/* End Sidemenu */}
    {/* Main Content*/}
  
      <div className="main-container container-fluid">
        <div className="inner-body">
          {/* Page Header */}
          <div className="page-header">
            <div>
              <h2 className="main-content-title tx-24 mg-b-5">Employee List</h2>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">HRMS </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Employee List{" "}
                </li>
              </ol>
            </div>
            <div className="d-flex">
              <div className="justify-content-center">
                <button
                  type="button"
                  className="btn btn-white btn-icon-text my-2 me-2"
                >
                  <i className="fe fe-download me-2" /> Import
                </button>
                <button
                  type="button"
                  className="btn btn-primary my-2 btn-icon-text  me-2"
                >
                  <i className="fe fe-download-cloud me-2" /> Download Report
                </button>
                <a
                  href="add-employee.html"
                  type="button"
                  className="btn btn-primary my-2 btn-icon-text"
                >
                  {" "}
                  <i className="fe fe-plus me-2" /> Add Employee
                </a>
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
                      <input
                        type="search"
                        className="form-control form-control"
                        placeholder="Search..."
                        aria-controls="example1"
                      />
                    </div>
                    <div className="col-sm-2">
                      <select className="form-control select2">
                        <option label="Choose one">Gender</option>
                        <option value="Firefox">Male</option>
                        <option value="Chrome">Female</option>
                      </select>
                    </div>
                    <div className="col-sm-2">
                      <select className="form-control select2">
                        <option label="Choose one">Status</option>
                        <option value="Firefox">Active</option>
                      </select>
                    </div>
                    <div className="col-sm-2">
                      <select className="form-control select2">
                        <option label="Choose one">Department</option>
                        <option value="Firefox" />
                      </select>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>{" "}
          </div>
          {/* Row */}
          <div className="row row-sm">
            <div className="col-lg-12">
              <div className="card custom-card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered text-nowrap mb-0">
                      <thead>
                        <tr>
                          <th>
                            <label className="ckbox">
                              <input type="checkbox" defaultValue={5} />
                              <span />
                            </label>
                          </th>
                          <th>ID</th>
                          <th>Photo</th>
                          <th>Contact</th>
                          <th>Onboarding</th>
                          <th>Department</th>
                          <th>KYC</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label className="ckbox">
                              <input type="checkbox" defaultValue={5} />
                              <span />
                            </label>
                          </td>
                          <td>
                            Source : Naukri
                            <br />
                            EMP-0001
                            {/*span class="plus_btn_" data-bs-target="#modaldemo-employee-form" data-bs-toggle="modal"></span*/}
                          </td>
                          <td>
                            <img
                              alt="avatar"
                              className="rounded-circle me-3"
                              src="../assets/img/users/5.jpg"
                              style={{ width: 60 }}
                            />
                          </td>
                          <td>
                            <p className="mb-0">
                              Sushil Singh Sharma
                              <br />
                              M: 8786467890
                              <br />
                              DOB: 12 May 2000
                              <br />
                              Male
                            </p>
                          </td>
                          <td>
                            <p className="mb-0">
                              Pwip Business
                              <br />
                              E: Asif@lawyerd.in
                              <br />
                              M: 8378278299
                            </p>
                          </td>
                          <td>
                            <p>
                              {" "}
                              Business Development
                              <br />
                              Sales Manager
                              <br />
                              DOJ : 12 May 2021
                            </p>
                          </td>
                          <td>
                            <p className="mb-0">
                              Aadhaar:{" "}
                              <a
                                href=""
                                className="mb-1"
                                title="View"
                                data-bs-target="#modaldemo-id"
                                data-bs-toggle="modal"
                              >
                                <i className="fe fe-eye" />
                              </a>
                              <br />
                              C.Cheque:{" "}
                              <a
                                href=""
                                className=" mb-1"
                                title="View"
                                data-bs-target="#modaldemo-cheque"
                                data-bs-toggle="modal"
                              >
                                <i className="fe fe-eye" />
                              </a>
                              <br />
                              Add Proof:{" "}
                              <a
                                href=""
                                className=" mb-1"
                                title="View"
                                data-bs-target="#modaldemo-address"
                                data-bs-toggle="modal"
                              >
                                <i className="fe fe-eye" />
                              </a>
                            </p>
                          </td>
                          <td>
                            <div className="main-toggle-group-demo">
                              <div className="main-toggle main-toggle-success on">
                                <span />
                              </div>
                            </div>
                            <a
                              href="employee-profile.html"
                              className="btn ripple  btn-primary btn-xs w-100 mb-1 mt-1"
                            >
                              View
                            </a>
                            <br />
                            <a
                              href=""
                              className="btn ripple btn-warning btn-xs w-100 mb-1"
                            >
                              {" "}
                              Attendance
                            </a>
                            <br />
                            <a
                              href=""
                              className="btn ripple btn-info btn-xs w-100"
                            >
                              Edit Profile
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="ckbox">
                              <input type="checkbox" defaultValue={5} />
                              <span />
                            </label>
                          </td>
                          <td>
                            Source : Naukri
                            <br />
                            EMP-0001
                            {/*span class="plus_btn_" data-bs-target="#modaldemo-employee-form" data-bs-toggle="modal"></span*/}
                          </td>
                          <td>
                            <img
                              alt="avatar"
                              className="rounded-circle me-3"
                              src="../assets/img/users/5.jpg"
                              style={{ width: 60 }}
                            />
                          </td>
                          <td>
                            <p className="mb-0">
                              Rajesh Sharma
                              <br />
                              M: 8786467890
                              <br />
                              DOB: 12 May 2000
                              <br />
                              Male
                            </p>
                          </td>
                          <td>
                            <p className="mb-0">
                              Pwip Business
                              <br />
                              E: Asif@lawyerd.in
                              <br />
                              M: 8378278299
                            </p>
                          </td>
                          <td>
                            <p>
                              Business Development
                              <br />
                              Sales Manager
                              <br />
                              DOJ : 12 May 2021
                            </p>
                          </td>
                          <td>
                            <p className="mb-0">
                              Aadhaar:{" "}
                              <a
                                href=""
                                className="mb-1"
                                title="View"
                                data-bs-target="#modaldemo-id"
                                data-bs-toggle="modal"
                              >
                                <i className="fe fe-eye" />
                              </a>
                              <br />
                              C.Cheque:{" "}
                              <a
                                href=""
                                className=" mb-1"
                                title="View"
                                data-bs-target="#modaldemo-cheque"
                                data-bs-toggle="modal"
                              >
                                <i className="fe fe-eye" />
                              </a>
                              <br />
                              Add Proof:{" "}
                              <a
                                href=""
                                className=" mb-1"
                                title="View"
                                data-bs-target="#modaldemo-address"
                                data-bs-toggle="modal"
                              >
                                <i className="fe fe-eye" />
                              </a>
                            </p>
                          </td>
                          <td>
                            <div className="main-toggle-group-demo">
                              <div className="main-toggle main-toggle-success ">
                                <span />
                              </div>
                            </div>
                            <a
                              href="employee-profile.html"
                              className="btn ripple  btn-primary btn-xs w-100 mb-1 mt-1"
                            >
                              View
                            </a>
                            <br />
                            <a
                              href=""
                              className="btn ripple btn-warning btn-xs w-100 mb-1"
                            >
                              {" "}
                              Attendance
                            </a>
                            <br />
                            <a
                              href=""
                              className="btn ripple btn-info btn-xs w-100"
                            >
                              Edit Profile
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
            <span>
              Copyright © 2023 <a href="javascript:void(0)">PWIP</a>. Designed
              by <a href="http://webkype.com/">Webkype.com</a> All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
    {/*End Footer*/}
  
  {/* End Page */}
  {/* Large Modal */}
  <div className="modal" id="modaldemo-id">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content modal-content-demo">
        <div className="modal-header">
          <h6 className="modal-title">Aadhaar</h6>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-sm-8">
              <img
                src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-sm-4">
              <h6>Aadhaar : 234567837480</h6>
              <div className="form-group">
                <select className="form-control select2">
                  <option>Status</option>
                  <option>Approved</option>
                  <option>Disapproved</option>
                </select>
              </div>
              <div className="form-group">
                <button className="btn ripple btn-primary w-100" type="button">
                  Save changes
                </button>
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
          <h6 className="modal-title">PAN</h6>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-sm-8">
              <img
                src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                style={{ width: "100%" }}
              />
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
                <button className="btn ripple btn-primary w-100" type="button">
                  Save changes
                </button>
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
          <h6 className="modal-title">Cheque</h6>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-sm-8">
              <img
                src="https://newadmin.webkype.com/assets/img/pngs/cheque-img.jpg"
                style={{ width: "100%" }}
              />
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
                <button className="btn ripple btn-primary w-100" type="button">
                  Save changes
                </button>
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
          <h6 className="modal-title">Address</h6>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-sm-8">
              <p>
                3-15/10/403 Newark, Street no 5, Next To Pizza Hut, Bangalore,
                Karnataka, 560003, India.
              </p>
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
                <button className="btn ripple btn-primary w-100" type="button">
                  Save changes
                </button>
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
          <h6 className="modal-title">Employee Form</h6>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div className="modal-body">
          <form>
            <div className="row row-sm">
              <div className="col-sm-4 form-group">
                <label className="form-label">Company</label>
                <select className="form-control select select2">
                  <option>Select</option>
                </select>
              </div>
              <div className="col-sm-4  form-group">
                <label className="form-label">Department</label>
                <select className="form-control select select2">
                  <option>Select</option>
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Accounts</option>
                  <option>Procurements</option>
                  <option>Contracting</option>
                  <option>Transport</option>
                  <option>Legal</option>
                </select>
              </div>
              <div className="col-sm-4  form-group">
                <label className="form-label">Designation</label>
                <select className="form-control select select2">
                  <option>Select</option>
                  <option>Executive</option>
                  <option>Manager</option>
                  <option>Intern</option>
                </select>
              </div>
              <div className="col-lg-4 form-group">
                <label className="form-label">
                  Date of Joining: <span className="tx-danger">*</span>
                </label>
                <div className="input-group">
                  <div className="input-group-text border-end-0">
                    <i className="fe fe-calendar lh--9 op-6" />
                  </div>
                  <input
                    className="form-control fc-datepicker"
                    placeholder="MM/DD/YYYY"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-sm-4  form-group">
                <label className="form-label">Reporting Boss-A</label>
                <select className="form-control select select2">
                  <option>Select</option>
                </select>
              </div>
              <div className="col-sm-4  form-group">
                <label className="form-label">Reporting Boss-B</label>
                <select className="form-control select select2">
                  <option>Select</option>
                </select>
              </div>
              <div className="col-sm-12 form-group mb-0">
                <div className="row">
                  <div className="col-sm-12">
                    {" "}
                    <label className="form-label">Assign Permission</label>
                  </div>
                  <div className="col-sm-12">
                    <div className="parsley-checkbox row" id="cbWrapper">
                      <div className="col-xl-3">
                        <label className="ckbox mg-b-5">
                          <input
                            data-parsley-class-handler="#cbWrapper"
                            data-parsley-errors-container="#cbErrorContainer"
                            data-parsley-mincheck={2}
                            name="browser[]"
                            required=""
                            type="checkbox"
                            defaultValue={1}
                          />
                          <span>Sales</span>
                        </label>
                      </div>
                      <div className="col-xl-3">
                        <label className="ckbox mg-b-5">
                          <input
                            name="browser[]"
                            type="checkbox"
                            defaultValue={2}
                          />
                          <span>Marketing</span>
                        </label>
                      </div>
                      <div className="col-xl-3">
                        <label className="ckbox mg-b-5">
                          <input
                            name="browser[]"
                            type="checkbox"
                            defaultValue={3}
                          />
                          <span>Accounts</span>
                        </label>
                      </div>
                      <div className="col-xl-3">
                        <label className="ckbox">
                          <input
                            name="browser[]"
                            type="checkbox"
                            defaultValue={4}
                          />
                          <span>Procurements</span>
                        </label>
                      </div>
                      <div className="col-xl-3">
                        <label className="ckbox">
                          <input
                            name="browser[]"
                            type="checkbox"
                            defaultValue={4}
                          />
                          <span>Contracting</span>
                        </label>
                      </div>
                      <div className="col-xl-3">
                        <label className="ckbox">
                          <input
                            name="browser[]"
                            type="checkbox"
                            defaultValue={4}
                          />
                          <span>Transport</span>
                        </label>
                      </div>
                      <div className="col-xl-3">
                        <label className="ckbox">
                          <input
                            name="browser[]"
                            type="checkbox"
                            defaultValue={4}
                          />
                          <span>Legal</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn ripple btn-primary" type="button">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  {/*End Large Modal */}
  {/* Back-to-top */}
  <a href="#top" id="back-to-top">
    <i className="fe fe-arrow-up" />
  </a>
  
  
</>

    
  )
}

export default MainPage