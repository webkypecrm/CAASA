import React, { useState } from 'react'
import MainPage from '../../Components/MainPage'
import Prince from '../../Components/Prince'
import DropdownMenu from '../../Components/DropdownMenu'

const AllOrders = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    mobile: '',
    companyName: '',
    companyEmail: '',
    companyPhone: '',
    companyWebsite: '',
    quality: '',
    quantity: '',
    deliveryDate: '',
    shipFrom: '',
    shipTo: '',
    rate: '',
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [orderName, setOrderName] = useState('');
  const [orderQuantity, setOrderQuantity] = useState('');

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    // Handle form submission here
  };
  return (
    <>
      {/* Page */}

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
                <DropdownMenu />
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
                  <MainPage />
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

        {/* End Main Header*/}
        {/* Sidemenu */}
        <Prince />
        {/* End Sidemenu */}
        {/* Main Content*/}
        <div className="main-content  pt-0">
          <div className="main-container container-fluid">
            <div className="inner-body">
              {/* Page Header */}
              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">All Orders</h2>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Orders </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      New Orders{" "}
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
                      href="#"
                      className="btn btn-primary my-2 btn-icon-text"
                      onClick={handleOpenModal}
                    >
                      <i className="fe fe-plus me-2" /> Add New Orders
                    </a>
                    <div
                      className={`modal ${isModalOpen ? 'show' : ''}`}
                      tabIndex="-1"
                      role="dialog"
                      style={{ display: isModalOpen ? 'block' : 'none' }}
                    >
                      <div className="modal-dialog" style={{ width: '400%' }} role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Add New Order</h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={handleCloseModal}
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>

                          <div className="modal-body" style={{ width: '100%' }} >
                            <div className="row row-sm-1">
                              <div className="col-lg-4">
                                <label className="form-label">
                                  Full Name: <span className="tx-danger">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  name="firstname"
                                  placeholder="Enter firstname"
                                  required=""
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 form-group">
                                <label className="form-label">
                                  Email ID: <span className="tx-danger">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  name="email"
                                  placeholder="Enter email"
                                  required=""
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 form-group">
                                <label className="form-label">
                                  Mobile No: <span className="tx-danger">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  name="mobile"
                                  placeholder="Enter mobile number"
                                  required=""
                                  type="text"
                                />
                              </div>
                              <div className="col-sm-4 form-group">
                                <label className="form-label">Company Name</label>
                                <input
                                  className="form-control"
                                  name="companyName"
                                  required=""
                                  type="text"
                                />
                              </div>
                              <div className="col-sm-4 form-group">
                                <label className="form-label">Company Email</label>
                                <input
                                  className="form-control"
                                  name="companyEmail"
                                  required=""
                                  type="text"
                                />
                              </div>
                              <div className="col-sm-4 form-group">
                                <label className="form-label">Company Phone</label>
                                <input
                                  className="form-control"
                                  name="companyPhone"
                                  required=""
                                  type="text"
                                />
                              </div>
                              <div className="col-sm-4 form-group">
                                <label className="form-label">Company Website</label>
                                <input
                                  className="form-control"
                                  name="companyWebsite"
                                  required=""
                                  type="text"
                                />
                              </div>
                              <div className="col-sm-4 form-group">
                                <label className="form-label">Category</label>
                                <select className="form-control select select2">
                                  <option>Select</option>
                                </select>
                              </div>
                              <div className="col-lg-12">
                                <hr className="my-2" />
                              </div>
                            </div>
                            <div className="row row-sm">
                              <div className="col-lg-12">
                                <h6 className="main-content-label mb-3 mt-2">Requirement</h6>
                              </div>
                              <div className="col-sm-4 form-group">
                                <label className="form-label">Quality</label>
                                <select className="form-control select select2">
                                  <option>Select</option>
                                  <option>White Rice</option>
                                </select>
                              </div>
                              <div className="col-sm-4">
                                <div className="form-group">
                                  <label className="form-label">Quantity</label>
                                  <input
                                    className="form-control"
                                    name="quantity"
                                    required=""
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div className="form-group">
                                  <label className="form-label">Date of delivery</label>
                                  <input
                                    className="form-control"
                                    name="deliveryDate"
                                    required=""
                                    type="date"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <label className="form-label">Ship From</label>
                                <div className="input-group mb-3">
                                  <span className="input-group-text border-end-0" id="basic-addon1">
                                    <i className="fa fa-map-marker-alt" />
                                  </span>
                                  <input
                                    aria-describedby="basic-addon1"
                                    aria-label="Ship From"
                                    className="form-control"
                                    name="shipFrom"
                                    placeholder="Enter location"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <label className="form-label">Ship To</label>
                                <div className="input-group mb-3">
                                  <span className="input-group-text border-end-0" id="basic-addon2">
                                    <i className="fa fa-map-marker-alt" />
                                  </span>
                                  <input
                                    aria-describedby="basic-addon2"
                                    aria-label="Ship To"
                                    className="form-control"
                                    name="shipTo"
                                    placeholder="Enter location"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div className="form-group">
                                  <label className="form-label">Rate</label>
                                  <input
                                    className="form-control"
                                    name="rate"
                                    required=""
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <button className="btn ripple btn-primary" type="button">
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                          Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => { handleSubmit(); handleCloseModal(); }}>
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                <div className="text-wrap">
                  <div className="panel panel-primary tabs-style-3 p-0 tabs-style-3-0">
                    <div className="tab-menu-heading">
                      <div className="tabs-menu ">{/* Tabs */}</div>
                    </div>
                    <div className="tab-content mt-4">
                      <div className="tab-pane active" id="tab18">
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
                                <th>Company</th>
                                <th>Assigned</th>
                                <th>Followup</th>
                                <th>Quotation</th>
                                <th>Projection</th>
                                <th>Make Sales Order</th>
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
                                  <p className="mb-0">
                                    Source : IVR Call
                                    <br />
                                    LLD-00000001
                                  </p>
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
                                    Faizal Mohd Khan
                                    <br />
                                    Email: faisal@coprocure.com
                                    <br />
                                    Phone: +918130352808
                                  </p>
                                </td>
                                <td>
                                  <p className="mb-0">
                                    CoProcure Trader LLC
                                    <br />
                                    Hope Tower, TS-1015-1016, <br />
                                    Galaxy Blue Sapphire, Singapore. <br />
                                    Email: info@coprocure
                                    <br />
                                    Phone: +918130352808
                                  </p>
                                </td>
                                <td>
                                  <p>
                                    <span
                                      className="plus_btn_"
                                      data-bs-target="#modaldemo-employee-form"
                                      data-bs-toggle="modal"
                                      style={{ float: "left" }}
                                    />
                                    <span
                                      className="ms-2 mt-2"
                                      style={{ float: "left" }}
                                    >
                                      Re-Assign
                                    </span>
                                  </p>
                                  <br />
                                  <p className="mb-0">
                                    Rajiv Kumar
                                    <br />
                                    Sales Manager
                                    <br />
                                    E: rajiv@pwip.co <br />
                                    M: +91878675789
                                    <br />
                                    D: 22 May 2023
                                  </p>
                                </td>
                                <td>
                                  <p className="mb-0">
                                    10 Comment
                                    <br />
                                    02 Meeting
                                    <br />
                                    01 Proposal{" "}
                                  </p>
                                  <p>
                                    <span
                                      className="plus_btn_"
                                      data-bs-target="#modaldemo-followup-form"
                                      data-bs-toggle="modal"
                                    />
                                  </p>
                                </td>
                                <td>
                                  <p className="mb-0">
                                    Exporter : Adiruchi International Expe
                                    <br />
                                    Type of Rice : Parboiled Rice Short Grain
                                    <br />
                                    Brand Name : Plain Bags (White)
                                    <br />
                                    Total tons : 135
                                    <br />
                                    No of tons FCL : 27
                                    <br />
                                    Price per ton : 430
                                    <br />
                                    Total bags : 5400
                                    <br />
                                    Packing size : 25 KG
                                    <br />
                                    Port of Loading : Chennai
                                    <br />
                                    Port of Destination : Singapore
                                    <br />
                                    ETA : 12 day{" "}
                                  </p>
                                </td>
                                <td>
                                  <p className="mb-0">
                                    Expected Sale: 5 Sep 2023
                                    <br />
                                    Sale Value : 40000 USD$
                                    <br />
                                    Sale ( Tons) : 135
                                    <br />
                                  </p>
                                </td>
                                <td>
                                  <p className="mb-0">Sales Order No. </p>
                                </td>
                                <td>
                                  <a
                                    href="order-detail.html"
                                    className="btn ripple btn-warning btn-xs w-100 mb-1 mt-1"
                                  >
                                    Details
                                  </a>
                                  <br />
                                  <a
                                    href=""
                                    className="btn ripple btn-success btn-xs w-100 mb-1"
                                  >
                                    Edit Lead
                                  </a>
                                  <br />
                                  <a
                                    href=""
                                    className="btn ripple btn-primary btn-xs w-100 "
                                    data-bs-target="#modaldemo-salesorder"
                                    data-bs-toggle="modal"
                                  >
                                    View SO
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
              </div>
            </div>
          </div>
        </div>
        {/* End Row */}
      </div>

      {/* End Main Content*/}
      {/* Main Footer*/}
     
      {/*End Footer*/}

      {/* End Page */}
      {/* Large Modal */}
      
        {/*End Large Modal */}
      
      {/* End Page */}
      {/* Large Modal */}
      <div className="modal" id="modaldemo-id">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content modal-content-demo">
            <div className="modal-header">
              <h6 className="modal-title">ID</h6>
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
                  <h6>ID : Law001</h6>
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
              <h6 className="modal-title">Assign</h6>
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
              <button className="btn ripple btn-primary" type="button">
                Save changes
              </button>
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
              <h6 className="modal-title">Followup</h6>
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
                  <div className="col-sm-12 form-group">
                    <div className="row">
                      <div className="col-lg-2">
                        <label className="rdiobox update_box">
                          <input defaultChecked="" name="rdio" type="radio" />{" "}
                          <span>Update</span>
                        </label>
                      </div>
                      <div className="col-lg-2">
                        <label className="rdiobox meeting_box">
                          <input name="rdio" type="radio" /> <span>Meeting</span>
                        </label>
                      </div>
                      <div className="col-lg-2">
                        <label className="rdiobox quotation_box">
                          <input name="rdio" type="radio" /> <span>Quotation</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-sm update_wrap">
                  <div className="col-sm-12 form-group">
                    <label className="form-label">Comment</label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                      defaultValue={""}
                    />
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
                <div className="col-sm-12 mt-2 mb-2">
                  <hr />
                </div>
                <div className="row row-sm meeting_wrap">
                  <div className="col-sm-4 form-group">
                    <label className="form-label">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-4 form-group">
                    <label className="form-label">Time</label>
                    <input
                      type="time"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-4 form-group">
                    <label className="form-label">Mode</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-4 form-group">
                    <label className="form-label">Venue</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-8 form-group">
                    <label className="form-label">Comment</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
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
                <div className="col-sm-12 mt-2 mb-2">
                  <hr />
                </div>
                <div className="row row-sm quotation_wrap">
                  <div className="col-sm-4 form-group">
                    <label className="form-label">Total No of Truck</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-4 form-group">
                    <label className="form-label">Subscription</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-4 form-group">
                    <label className="form-label">Rate Per Truck</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-4 form-group">
                    <label className="form-label">Total Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
                  </div>
                  <div className="col-sm-4 form-group">
                    <label className="form-label">Discount (%)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter"
                    />
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
              <button className="btn ripple btn-primary" type="button">
                Save changes
              </button>
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
              <h6 className="modal-title">Subscription</h6>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="modal"
                type="button"
              />
            </div>
            <div className="modal-body">
              <div className="media mt-0">
                <div className="media-body ms-2 d-flex">
                  <div className="me-3 pt-4">
                    <img src="../assets/img/lots-logo.png" style={{ width: 200 }} />
                  </div>
                  <div>
                    <p className="mb-0 tx-13 text-dark">
                      <i className="fe fe-chevrons-right me-1" />
                      Total No of Truck : 100
                    </p>
                    <p className="mb-0 tx-13 text-dark">
                      <i className="fe fe-chevrons-right me-1" />
                      Subscription : LOTS Premium
                    </p>
                    <p className="mb-0 tx-13 text-dark">
                      <i className="fe fe-chevrons-right me-1" />
                      Rate Per Truck : 100
                    </p>
                    <p className="mb-0 tx-13 text-dark">
                      <i className="fe fe-chevrons-right me-1" />
                      Total Amount : 10000{" "}
                    </p>
                    <p className="mb-0 tx-13 text-dark">
                      <i className="fe fe-chevrons-right me-1" />
                      Discount (%) : 5{" "}
                    </p>
                    <p className="mb-0 tx-13 text-dark">
                      {" "}
                      <i className="fe fe-chevrons-right me-1" />
                      Start Date : 01/05/2023
                    </p>
                    <p className="mb-0 tx-13 text-dark">
                      <i className="fe fe-chevrons-right me-1" />
                      End Date : 01/05/2024
                    </p>
                    <p className="mb-0 tx-13 text-dark">
                      <i className="fe fe-chevrons-right me-1" />
                      Grace Period : 1 Year{" "}
                    </p>
                    <a
                      href=""
                      className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light"
                    >
                      Accepted
                    </a>
                    <a
                      href=""
                      className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light"
                    >
                      Cancel
                    </a>
                    <a
                      href=""
                      className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light"
                    >
                      Revise
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Large Modal */}
      {/*End Large Modal */}
      <div className="modal" id="modaldemo-salesorder">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content modal-content-demo">
            <div className="modal-header">
              <h6 className="modal-title">Create Sales Order</h6>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="modal"
                type="button"
              />
            </div>
            <div className="modal-body">
              <div className="row row-sm">
                <div className="col-lg-4 form-group">
                  <label className="form-label">
                    Exporter Name <span className="tx-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    name="firstname"
                    placeholder="Enter "
                    required=""
                    type="text"
                  />
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">Type of Rice</label>
                  <select className="form-control select select2">
                    <option>Select</option>
                    <option>Parboiled Rice Short Grain</option>
                  </select>
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">Brand Name</label>
                  <select className="form-control select select2">
                    <option>Select</option>
                    <option>Plain Bags (White)</option>
                  </select>
                </div>
                <div className="col-lg-3 form-group">
                  <label className="form-label">
                    Total tons <span className="tx-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    name="firstname"
                    placeholder="Enter "
                    required=""
                    type="text"
                  />
                </div>
                <div className="col-lg-3 form-group">
                  <label className="form-label">
                    No of tons FCL <span className="tx-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    name="firstname"
                    placeholder="Enter "
                    required=""
                    type="text"
                  />
                </div>
                <div className="col-lg-3 form-group">
                  <label className="form-label">
                    Price per ton <span className="tx-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    name="firstname"
                    placeholder="Enter "
                    required=""
                    type="text"
                  />
                </div>
                <div className="col-lg-3 form-group">
                  <label className="form-label">
                    Total bags <span className="tx-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    name="firstname"
                    placeholder="Enter "
                    required=""
                    type="text"
                  />
                </div>
                <div className="col-lg-3 form-group">
                  <label className="form-label">
                    Packing size <span className="tx-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    name="firstname"
                    placeholder="Enter "
                    required=""
                    type="text"
                  />
                </div>
                <div className="col-lg-3 form-group">
                  <label className="form-label">
                    Payment terms <span className="tx-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    name="firstname"
                    placeholder="Enter "
                    required=""
                    type="text"
                  />
                </div>
                <div className="col-sm-3 form-group">
                  <label className="form-label">Port of Loading</label>
                  <select className="form-control select select2">
                    <option>Select</option>
                    <option>Chennai</option>
                  </select>
                </div>
                <div className="col-lg-3 form-group">
                  <label className="form-label">
                    ETA <span className="tx-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    name="firstname"
                    placeholder="Enter "
                    required=""
                    type="text"
                  />
                </div>
                <div className="col-sm-3 form-group">
                  <label className="form-label">Port of Destination</label>
                  <select className="form-control select select2">
                    <option>Select</option>
                    <option>Singapore</option>
                  </select>
                </div>
                <div className="col-sm-3 form-group">
                  <label className="form-label">Consignee</label>
                  <select className="form-control select select2">
                    <option>Select</option>
                    <option>Virago</option>
                  </select>
                </div>
                <div className="col-sm-3 form-group">
                  <label className="form-label">Notify - 1 </label>
                  <select className="form-control select select2">
                    <option>Select</option>
                    <option>Virago</option>
                  </select>
                </div>
                <div className="col-sm-3 form-group">
                  <label className="form-label">Notify - 2 </label>
                  <select className="form-control select select2">
                    <option>Select</option>
                    <option>PWIP</option>
                  </select>
                </div>
              </div>
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

export default AllOrders