import React from 'react'
import MainPage from '../../Components/MainPage'
import Prince2 from '../../Components/Prince2'

const HrDashboard = () => {
  return (
    <>
   
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
      </div>
      {/* End Main Header*/}
      {/* Sidemenu */}
     <Prince2 />
      {/* End Sidemenu */}
      {/* Main Content*/}
      <div className="main-content  pt-0">
        <div className="main-container container-fluid">
          <div className="inner-body">
            {/* Page Header */}
            <div className="page-header">
              <div>
                <h2 className="main-content-title tx-24 mg-b-5">
                  Pwip HR Dashboard
                </h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0)">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    HR Dashboard
                  </li>
                </ol>
              </div>
              <div className="col-sm-6">
                <div className="justify-content-center">
                  <div className="row">
                    <div className="col-md-4">
                      <div className=" mg-b-30">
                        <div className="input-group">
                          <div className="input-group-text border-end-0">
                            <i className="fe fe-calendar lh--9 op-6" />
                          </div>
                          <input
                            className="form-control"
                            placeholder="Date Range"
                            type="text"
                            id="datepicker-date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mg-b-30">
                        <div className="input-group">
                          <div className="input-group-text border-end-0">
                            <i className="fe fe-calendar lh--9 op-6" />
                          </div>
                          <input
                            className="form-control"
                            placeholder="Month Range"
                            type="text"
                            id="datepicker-month"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className=" mg-b-30">
                        <div className="input-group">
                          <div className="input-group-text border-end-0">
                            <i className="fe fe-calendar lh--9 op-6" />
                          </div>
                          <input
                            className="form-control"
                            placeholder="Year Range"
                            type="text"
                            id="datepicker-year"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Page Header */}
            {/*Row*/}
            <div className="row row-sm">
              <div className="col-sm-12 col-lg-12 col-xl-8">
                {/*Row*/}
                <div className="row row-sm  mt-lg-4">
                  <div className="col-sm-12 col-lg-12 col-xl-12">
                    <div className="card bg-primary custom-card card-box">
                      <div className="card-body p-4">
                        <div className="row align-items-center">
                          <div className="offset-xl-3 offset-sm-6 col-xl-8 col-sm-6 col-12 ">
                            <h4 className="d-flex  mb-1">
                              <span className="font-weight-bold text-white ">
                                Hello Simran!
                              </span>
                            </h4>
                            <p className="tx-white-7 mb-1">
                              You are logged in as HR Manager.
                            </p>
                          </div>
                          <img
                            src="../assets/img/users/img-1.png"
                            alt="user-img"
                            style={{ width: 170, borderRadius: "100%", left: 26 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Row */}
                {/*Row*/}
                <div className="row ">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card custom-card">
                      <div className="card-body">
                        <div className="card-item">
                          <div className="card-item-icon card-icon">
                            <svg
                              className="text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              enableBackground="new 0 0 24 24"
                              height={24}
                              viewBox="0 0 24 24"
                              width={24}
                            >
                              <g>
                                <rect
                                  height={14}
                                  opacity=".3"
                                  width={14}
                                  x={5}
                                  y={5}
                                />
                                <g>
                                  <rect fill="none" height={24} width={24} />
                                  <g>
                                    <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                    <rect height={5} width={2} x={7} y={12} />
                                    <rect height={10} width={2} x={15} y={7} />
                                    <rect height={3} width={2} x={11} y={14} />
                                    <rect height={2} width={2} x={11} y={10} />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="card-item-title mb-2">
                            <label className="main-content-label tx-13 font-weight-bold mb-1">
                              Total Staff
                            </label>
                          </div>
                          <div className="card-item-body">
                            <div className="card-item-stat">
                              <h4 className="font-weight-light">90</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card custom-card">
                      <div className="card-body">
                        <div className="card-item">
                          <div className="card-item-icon card-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height={24}
                              viewBox="0 0 24 24"
                              width={24}
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                                opacity=".3"
                              />
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                            </svg>
                          </div>
                          <div className="card-item-title mb-2">
                            <label className="main-content-label tx-13 font-weight-bold mb-1">
                              Total Active Staff
                            </label>
                          </div>
                          <div className="card-item-body">
                            <div className="card-item-stat">
                              <h4 className="font-weight-light">78</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                    <div className="card custom-card">
                      <div className="card-body">
                        <div className="card-item">
                          <div className="card-item-icon card-icon">
                            <svg
                              className="text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              height={24}
                              viewBox="0 0 24 24"
                              width={24}
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                                opacity=".3"
                              />
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                            </svg>
                          </div>
                          <div className="card-item-title  mb-2">
                            <label className="main-content-label tx-13 font-weight-bold mb-1">
                              Staff On Notice
                            </label>
                          </div>
                          <div className="card-item-body">
                            <div className="card-item-stat">
                              <h4 className="font-weight-light">14</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End row*/}
                {/*row*/}
                <div className="row row-sm">
                  <div className="col-lg-12">
                    <div className="card custom-card mg-b-20">
                      <div className="card-body">
                        <div className="card-header border-bottom-0 pt-0 ps-0 pe-0 ">
                          <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                              <div className="card custom-card bg-light mb-0">
                                <div className="card-body">
                                  <div className="card-item">
                                    <div className="card-item-icon card-icon">
                                      <svg
                                        className="text-primary"
                                        xmlns="http://www.w3.org/2000/svg"
                                        enableBackground="new 0 0 24 24"
                                        height={24}
                                        viewBox="0 0 24 24"
                                        width={24}
                                      >
                                        <g>
                                          <rect
                                            height={14}
                                            opacity=".3"
                                            width={14}
                                            x={5}
                                            y={5}
                                          />
                                          <g>
                                            <rect
                                              fill="none"
                                              height={24}
                                              width={24}
                                            />
                                            <g>
                                              <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                              <rect
                                                height={5}
                                                width={2}
                                                x={7}
                                                y={12}
                                              />
                                              <rect
                                                height={10}
                                                width={2}
                                                x={15}
                                                y={7}
                                              />
                                              <rect
                                                height={3}
                                                width={2}
                                                x={11}
                                                y={14}
                                              />
                                              <rect
                                                height={2}
                                                width={2}
                                                x={11}
                                                y={10}
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="card-item-title mb-2">
                                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                                        Present Today{" "}
                                      </label>
                                    </div>
                                    <div className="card-item-body">
                                      <div className="card-item-stat">
                                        <h4 className="font-weight-light">78</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                              <div className="card custom-card  bg-light mb-0">
                                <div className="card-body">
                                  <div className="card-item">
                                    <div className="card-item-icon card-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height={24}
                                        viewBox="0 0 24 24"
                                        width={24}
                                      >
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path
                                          d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                                          opacity=".3"
                                        />
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                                      </svg>
                                    </div>
                                    <div className="card-item-title mb-2">
                                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                                        Absent Today
                                      </label>
                                    </div>
                                    <div className="card-item-body">
                                      <div className="card-item-stat">
                                        <h4 className="font-weight-light">10</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                              <div className="card custom-card  bg-light mb-0">
                                <div className="card-body">
                                  <div className="card-item">
                                    <div className="card-item-icon card-icon">
                                      <svg
                                        className="text-primary"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height={24}
                                        viewBox="0 0 24 24"
                                        width={24}
                                      >
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path
                                          d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                                          opacity=".3"
                                        />
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                      </svg>
                                    </div>
                                    <div className="card-item-title  mb-2">
                                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                                        On Leave
                                      </label>
                                    </div>
                                    <div className="card-item-body">
                                      <div className="card-item-stat">
                                        <h4 className="font-weight-light">2</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col end */}
                </div>
                {/* Row end */}
                {/*row*/}
                <div className="row row-sm">
                  <div className="col-lg-12">
                    <div className="card custom-card mg-b-20">
                      <div className="card-body">
                        <div className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
                          <div>
                            <label className="main-content-label mb-2">
                              Tasks
                            </label>{" "}
                            <span className="d-block tx-12 mb-3 text-muted">
                              A task is accomplished by a set deadline, and must
                              contribute toward work-related objectives.
                            </span>
                          </div>
                          <div className="ms-auto">
                            <a
                              href="javascript:void(0)"
                              className="option-dots"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Task
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Team
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Status
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                <i className="fa fa-cog me-2" />
                                Settings
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive tasks">
                          <table className="table card-table table-vcenter text-nowrap mb-0  border">
                            <thead>
                              <tr>
                                <th className="wd-lg-10p">Task</th>
                                <th className="wd-lg-20p">Team</th>
                                <th className="wd-lg-20p text-center">
                                  Open task
                                </th>
                                <th className="wd-lg-20p">Prority</th>
                                <th className="wd-lg-20p">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="font-weight-semibold d-flex">
                                  <label className="ckbox my-auto me-4 mt-1">
                                    <input defaultChecked="" type="checkbox" />
                                    <span />
                                  </label>
                                  <span className="mt-1">
                                    Get update from Webkype
                                  </span>
                                </td>
                                <td className="text-nowrap">
                                  <div className="demo-avatar-group my-auto float-end">
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/1.jpg"
                                      />
                                    </div>
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/2.jpg"
                                      />
                                    </div>
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/3.jpg"
                                      />
                                    </div>
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/4.jpg"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td className="text-center">
                                  37
                                  <i className="" />
                                </td>
                                <td className="text-primary">High</td>
                                <td>
                                  <span className="badge bg-pill bg-primary-light">
                                    Completed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="font-weight-semibold d-flex">
                                  <label className="ckbox my-auto me-4">
                                    <input defaultChecked="" type="checkbox" />
                                    <span />
                                  </label>
                                  <span className="mt-1">
                                    {" "}
                                    Sign Agreement with New Miller{" "}
                                  </span>
                                </td>
                                <td className="text-nowrap">
                                  <div className="demo-avatar-group my-auto float-end">
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/5.jpg"
                                      />
                                    </div>
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/6.jpg"
                                      />
                                    </div>
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/7.jpg"
                                      />
                                    </div>
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/8.jpg"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td className="text-center">
                                  37
                                  <i className="" />
                                </td>
                                <td className="text-secondary">Normal</td>
                                <td>
                                  <span className="badge bg-pill bg-warning-light">
                                    Pending
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="font-weight-semibold d-flex">
                                  <label className="ckbox my-auto me-4">
                                    <input type="checkbox" />
                                    <span />
                                  </label>
                                  <span className="mt-1">
                                    Sign Agreement with New Vendor
                                  </span>
                                </td>
                                <td className="text-nowrap">
                                  <div className="demo-avatar-group my-auto float-end">
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/11.jpg"
                                      />
                                    </div>
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/12.jpg"
                                      />
                                    </div>
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/9.jpg"
                                      />
                                    </div>
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/10.jpg"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td className="text-center">
                                  37
                                  <i className="" />
                                </td>
                                <td className="text-warning">Low</td>
                                <td>
                                  <span className="badge bg-pill bg-primary-light">
                                    Completed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="font-weight-semibold d-flex">
                                  <label className="ckbox my-auto me-4">
                                    <input type="checkbox" />
                                    <span />
                                  </label>
                                  <span className="mt-1">
                                    Sign Agreement with New Exporter
                                  </span>
                                </td>
                                <td className="text-nowrap">
                                  <div className="demo-avatar-group my-auto float-end">
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/7.jpg"
                                      />
                                    </div>
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/9.jpg"
                                      />
                                    </div>
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/11.jpg"
                                      />
                                    </div>
                                    <div className="main-img-user avatar-sm">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src="../assets/img/users/12.jpg"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td className="text-center">
                                  37
                                  <i className="" />
                                </td>
                                <td className="text-primary">High</td>
                                <td>
                                  <span className="badge bg-pill bg-danger-light">
                                    Rejected
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col end */}
                </div>
                {/* Row end */}
              </div>
              {/* col end */}
              <div className="col-sm-12 col-lg-12 col-xl-4 mt-xl-4">
                <div className="card custom-card card-dashboard-calendar pb-0">
                  <label className="main-content-label mb-2 pt-1">
                    PWIP Updates
                  </label>
                  <span className="d-block tx-12 mb-2 text-muted">
                    What's new today in PWIP
                  </span>
                  <table className="table table-hover m-b-0 transcations mt-2">
                    <tbody>
                      <tr>
                        <td className="wd-5p">
                          <div className="main-img-user avatar-md">
                            <img
                              alt="avatar"
                              className="rounded-circle me-3"
                              src="../assets/img/users/5.jpg"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-middle ms-3">
                            <div className="d-inline-block">
                              <h6 className="mb-1">Birthday</h6>
                              <p className="mb-0 tx-13 text-muted">
                                Wish your team happy birthday !!!
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <div className="d-inline-block">
                            <h6 className="mb-2 tx-15 font-weight-semibold">
                              40
                              <i className="fas fa-level-up-alt ms-2 text-success m-l-10" />
                            </h6>
                            <p className="mb-0 tx-11 text-muted">
                              Incidents Logged
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="wd-5p">
                          <div className="main-img-user avatar-md">
                            <img
                              alt="avatar"
                              className="rounded-circle me-3"
                              src="../assets/img/users/5.jpg"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-middle ms-3">
                            <div className="d-inline-block">
                              <h6 className="mb-1">Got PO ( Sales) </h6>
                              <p className="mb-0 tx-13 text-muted">
                                Celebrate new sales achievements !!!
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <div className="d-inline-block">
                            <h6 className="mb-2 tx-15 font-weight-semibold">
                              40
                              <i className="fas fa-level-up-alt ms-2 text-success m-l-10" />
                            </h6>
                            <p className="mb-0 tx-11 text-muted">
                              Incidents Logged
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="wd-5p">
                          <div className="main-img-user avatar-md">
                            <img
                              alt="avatar"
                              className="rounded-circle me-3"
                              src="../assets/img/users/5.jpg"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-middle ms-3">
                            <div className="d-inline-block">
                              <h6 className="mb-1">Order Closed</h6>
                              <p className="mb-0 tx-13 text-muted">
                                Announce Order Delivery !!!
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <div className="d-inline-block">
                            <h6 className="mb-2 tx-15 font-weight-semibold">
                              40
                              <i className="fas fa-level-up-alt ms-2 text-success m-l-10" />
                            </h6>
                            <p className="mb-0 tx-11 text-muted">
                              Incidents Logged
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="wd-5p">
                          <div className="main-img-user avatar-md">
                            <img
                              alt="avatar"
                              className="rounded-circle me-3"
                              src="../assets/img/users/5.jpg"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-middle ms-3">
                            <div className="d-inline-block">
                              <h6 className="mb-1">New Joinee</h6>
                              <p className="mb-0 tx-13 text-muted">
                                Welcome New Team Member
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <div className="d-inline-block">
                            <h6 className="mb-2 tx-15 font-weight-semibold">
                              40
                              <i className="fas fa-level-up-alt ms-2 text-success m-l-10" />
                            </h6>
                            <p className="mb-0 tx-11 text-muted">
                              Incidents Logged
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="wd-5p">
                          <div className="main-img-user avatar-md">
                            <img
                              alt="avatar"
                              className="rounded-circle me-3"
                              src="../assets/img/users/5.jpg"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-middle ms-3">
                            <div className="d-inline-block">
                              <h6 className="mb-1">Parties &amp; Celebrations</h6>
                              <p className="mb-0 tx-13 text-muted">
                                New Events &amp; Celebrations
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <div className="d-inline-block">
                            <h6 className="mb-2 tx-15 font-weight-semibold">
                              40
                              <i className="fas fa-level-up-alt ms-2 text-success m-l-10" />
                            </h6>
                            <p className="mb-0 tx-11 text-muted">
                              Incidents Logged
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card custom-card">
                  <div className="card-body">
                    <div className="row row-sm">
                      <div className="col-6">
                        <div className="card-item-title">
                          <label className="main-content-label tx-13 font-weight-bold mb-2">
                            PWIP ERP LAUNCH
                          </label>
                          <span className="d-block tx-12 mb-0 text-muted">
                            PWIP Sales App Launch{" "}
                          </span>
                        </div>
                        <p className="mb-0 tx-24 mt-2">
                          <b className="text-primary">60 Days </b>
                        </p>
                        <a href="javascript:void(0)" className="text-muted">
                          1 Aug 2023.{" "}
                        </a>
                      </div>
                      <div className="col-6">
                        <img
                          src="../assets/img/brand/logo.png"
                          alt="image"
                          style={{ height: "auto !important" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col end */}
            </div>
            {/* Row end */}
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
      {/* Sidebar */}
      <div className="sidebar sidebar-right sidebar-animate">
        <div className="sidebar-icon">
          <a
            href="javascript:void(0)"
            className="text-end float-end text-dark fs-20"
            data-bs-toggle="sidebar-right"
            data-bs-target=".sidebar-right"
          >
            <i className="fe fe-x" />
          </a>
        </div>
        <div className="sidebar-body">
          <h5>Todo</h5>
          <div className="d-flex p-3">
            <label className="ckbox">
              <input defaultChecked="" type="checkbox" />
              <span>Hangout With friends</span>
            </label>
            <span className="ms-auto">
              <i
                className="fe fe-edit-2 text-primary me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Edit"
              />
              <i
                className="fe fe-trash-2 text-danger me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Delete"
              />
            </span>
          </div>
          <div className="d-flex p-3 border-top">
            <label className="ckbox">
              <input type="checkbox" />
              <span>Prepare for presentation</span>
            </label>
            <span className="ms-auto">
              <i
                className="fe fe-edit-2 text-primary me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Edit"
              />
              <i
                className="fe fe-trash-2 text-danger me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Delete"
              />
            </span>
          </div>
          <div className="d-flex p-3 border-top">
            <label className="ckbox">
              <input type="checkbox" />
              <span>Prepare for presentation</span>
            </label>
            <span className="ms-auto">
              <i
                className="fe fe-edit-2 text-primary me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Edit"
              />
              <i
                className="fe fe-trash-2 text-danger me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Delete"
              />
            </span>
          </div>
          <div className="d-flex p-3 border-top">
            <label className="ckbox">
              <input defaultChecked="" type="checkbox" />
              <span>System Updated</span>
            </label>
            <span className="ms-auto">
              <i
                className="fe fe-edit-2 text-primary me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Edit"
              />
              <i
                className="fe fe-trash-2 text-danger me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Delete"
              />
            </span>
          </div>
          <div className="d-flex p-3 border-top">
            <label className="ckbox">
              <input type="checkbox" />
              <span>Do something more</span>
            </label>
            <span className="ms-auto">
              <i
                className="fe fe-edit-2 text-primary me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Edit"
              />
              <i
                className="fe fe-trash-2 text-danger me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Delete"
              />
            </span>
          </div>
          <div className="d-flex p-3 border-top">
            <label className="ckbox">
              <input type="checkbox" />
              <span>System Updated</span>
            </label>
            <span className="ms-auto">
              <i
                className="fe fe-edit-2 text-primary me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Edit"
              />
              <i
                className="fe fe-trash-2 text-danger me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Delete"
              />
            </span>
          </div>
          <div className="d-flex p-3 border-top">
            <label className="ckbox">
              <input type="checkbox" />
              <span>Find an Idea</span>
            </label>
            <span className="ms-auto">
              <i
                className="fe fe-edit-2 text-primary me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Edit"
              />
              <i
                className="fe fe-trash-2 text-danger me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Delete"
              />
            </span>
          </div>
          <div className="d-flex p-3 border-top mb-0">
            <label className="ckbox">
              <input type="checkbox" />
              <span>Project review</span>
            </label>
            <span className="ms-auto">
              <i
                className="fe fe-edit-2 text-primary me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Edit"
              />
              <i
                className="fe fe-trash-2 text-danger me-2"
                data-bs-toggle="tooltip"
                title=""
                data-bs-placement="top"
                data-bs-original-title="Delete"
              />
            </span>
          </div>
          <h5>Overview</h5>
          <div className="p-4">
            <div className="main-traffic-detail-item">
              <div>
                <span>Founder &amp; CEO</span> <span>24</span>
              </div>
              <div className="progress">
                <div
                  aria-valuemax={100}
                  aria-valuemin={0}
                  aria-valuenow={20}
                  className="progress-bar progress-bar-xs wd-20p"
                  role="progressbar"
                />
              </div>
              {/* progress */}
            </div>
            <div className="main-traffic-detail-item">
              <div>
                <span>UX Designer</span> <span>1</span>
              </div>
              <div className="progress">
                <div
                  aria-valuemax={100}
                  aria-valuemin={0}
                  aria-valuenow={15}
                  className="progress-bar progress-bar-xs bg-secondary wd-15p"
                  role="progressbar"
                />
              </div>
              {/* progress */}
            </div>
            <div className="main-traffic-detail-item">
              <div>
                <span>Recruitment</span> <span>87</span>
              </div>
              <div className="progress">
                <div
                  aria-valuemax={100}
                  aria-valuemin={0}
                  aria-valuenow={45}
                  className="progress-bar progress-bar-xs bg-success wd-45p"
                  role="progressbar"
                />
              </div>
              {/* progress */}
            </div>
            <div className="main-traffic-detail-item">
              <div>
                <span>Software Engineer</span> <span>32</span>
              </div>
              <div className="progress">
                <div
                  aria-valuemax={100}
                  aria-valuemin={0}
                  aria-valuenow={25}
                  className="progress-bar progress-bar-xs bg-info wd-25p"
                  role="progressbar"
                />
              </div>
              {/* progress */}
            </div>
            <div className="main-traffic-detail-item">
              <div>
                <span>Project Manager</span> <span>32</span>
              </div>
              <div className="progress">
                <div
                  aria-valuemax={100}
                  aria-valuemin={0}
                  aria-valuenow={25}
                  className="progress-bar progress-bar-xs bg-danger wd-25p"
                  role="progressbar"
                />
              </div>
              {/* progress */}
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar */}
    </div>
    {/* End Page */}
    {/* Back-to-top */}
    <a href="#top" id="back-to-top">
      <i className="fe fe-arrow-up" />
    </a>
    {/* Jquery js*/}
    {/* Bootstrap js*/}
    {/* Internal Jquery-Ui js*/}
    {/* Internal Jquery.maskedinput js*/}
    {/* Internal Specturm-colorpicker js*/}
    {/* Internal Ion-rangeslider js*/}
    {/* Select2 js*/}
    {/* Internal Form-elements js*/}
    {/* Internal Morris Chart js*/}
    {/* Perfect-scrollbar js */}
    {/* Sidemenu js */}
    {/*Bootstrap-datepicker js*/}
    {/* Internal jquery-simple-datetimepicker js */}
    {/* COLOR PICKER JS */}
    {/* Sidebar js */}
    {/* Color Theme js */}
    {/* Sticky js */}
    {/* Custom js */}
  </>
  
  )
}

export default HrDashboard