 {employee && employee.assignPermission && employee.assignPermission.includes('Setup') && (

              <div
                style={{ ...navBarStyle4, paddingTop: "8px" }}
              >
                {/* Your content here */}
                <>


                  <div
                    className="nav-item dropdown"
                    style={{
                      marginLeft: "3px",
                      ...responsiveNavItem,
                      ...responsiveDropdown,
                    }}
                  >
                    <a
                      className={`nav-link dropdown-toggle ${isDropdownOpen ? "show" : ""}`}
                      id="navbarDropdown"
                      role="button"
                      onClick={toggleDropdown}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen}
                      style={linkStyle}
                    >
                      <i class="fa-sharp fa-solid fa-gears me-2"></i>
                      SETUP

                    </a>
                    <div
                      className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                      aria-labelledby="navbarDropdown"
                      style={isDropdownOpen ? { borderRadius: "10px" } : {}}
                    >
                      <Link
                        to="/master-list"
                        className="dropdown-item"
                        href="#"
                        style={{
                          ... (isDropdownOpen ? openDropdownItemStyle : linkHoverStyle),
                          marginBottom: '-10px', // Adjust this value as needed
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Master
                      </Link>
                      <Link
                        to="/master-value-list"
                        className="dropdown-item"
                        href="#"
                        style={{
                          ... (isDropdownOpen ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}
                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Master Value
                      </Link>

                      <Link
                        to="/lead-download-list"
                        className="dropdown-item"
                        href="#"
                        style={{
                          ... (isDropdownOpen ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}
                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Lead Download List
                      </Link>



                    </div>

                  </div>

                </>

              </div>
            )}

            {employee && employee.assignPermission && employee.assignPermission.includes('Website') && (
              <div
                style={{ ...navBarStyle, paddingTop: "8px" }}
              >
                {/* Your content here */}
                <>


                  <div
                    className="nav-item dropdown"
                    style={{
                      marginLeft: "-3px",
                      ...responsiveNavItem,
                      ...responsiveDropdown,
                    }}
                  >
                    <a
                      className={`nav-link dropdown-toggle ${isDropdownOpen12 ? "show" : ""
                        }`}
                      id="navbarDropdown12"
                      role="button"
                      onClick={toggleDropdown12}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen12}
                      style={linkStyle}

                    >
                      <i class="fa-solid fa-users  me-2"></i>
                      WEBSITE
                    </a>
                    <div
                      className={`dropdown-menu ${isDropdownOpen12 ? "show" : ""}`}
                      aria-labelledby="navbarDropdown1"
                      style={isDropdownOpen12 ? { borderRadius: "10px" } : {}}
                    >

                      <Link
                        to=""
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),

                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Web Pages <span className="tx-danger">*</span>
                      </Link>
                      <Link
                        to=""
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Web Menu <span className="tx-danger">*</span>
                      </Link>
                      <Link
                        to=""
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}
                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Web Sub-Menu <span className="tx-danger">*</span>
                      </Link>
                      <Link
                        to=""
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Media Images <span className="tx-danger">*</span>
                      </Link>
                      <Link
                        to=""
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Media Videos <span className="tx-danger">*</span>
                      </Link>
                      <Link
                        to=""
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Web Banners <span className="tx-danger">*</span>
                      </Link>
                      <Link
                        to=""
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Contact/Enquiries <span className="tx-danger">*</span>
                      </Link>
                      <Link
                        to=""
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}
                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Messages <span className="tx-danger">*</span>
                      </Link>

                    </div>
                  </div>

                </>

              </div>
            )}

            {employee && employee.assignPermission && employee.assignPermission.includes('HRMS') && (

              <div
                style={{ ...navBarStyles1, paddingTop: "8px" }}
              >
                {/* Your content here */}
                <>

                  <div
                    className="nav-item dropdown"
                    style={{
                      marginLeft: "7px",
                      ...responsiveNavItem,
                      ...responsiveDropdown,
                    }}
                  >
                    <a
                      className={`nav-link dropdown-toggle ${isDropdownOpen1 ? "show" : ""
                        }`}
                      id="navbarDropdown1"
                      role="button"
                      onClick={toggleDropdown1}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen1}
                      style={linkStyle}

                    >
                      <i class="fa-solid fa-users  me-2"></i>
                      HRMS
                    </a>
                    <div
                      className={`dropdown-menu ${isDropdownOpen1 ? "show" : ""}`}
                      aria-labelledby="navbarDropdown1"
                      style={isDropdownOpen1 ? { borderRadius: "10px" } : {}}
                    >



                      <Link
                        to="/advisors-list"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen1 ? openDropdownItemStyle : linkHoverStyle),

                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Advisors
                      </Link>
                      <Link
                        to="/admin-list"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen1 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Admin Users
                      </Link>


                      <Link
                        to="/announcement-list"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen1 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}
                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Announcement
                      </Link>

                      <Link
                        to="/staff-point-sheet"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen1 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Staff Point Sheet
                      </Link>

                      <Link
                        to="/incentive-plan-list"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen1 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Incentive Plan
                      </Link>

                      <Link
                        to="/incentive-pay-out"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen1 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Incentive Payout
                      </Link>




                    </div>
                  </div>

                  <div className="nav-item dropdown" style={{
                    marginLeft: "-10px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/staff-employee-list"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      ALL STAFF

                    </Link>

                  </div>

                  <div className="nav-item dropdown" style={{
                    marginLeft: "-10px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/active-employee-list"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      ACTIVE EMPLOYEE

                    </Link>

                  </div>


                  <div className="nav-item dropdown" style={{
                    marginLeft: "-10px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/inactive-employee-list"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      IN ACTIVE EMPLOYEE

                    </Link>

                  </div>


                  <div className="nav-item dropdown" style={{
                    marginLeft: "-10px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/candidate-employee-list"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      CANDIDATE LIST

                    </Link>

                  </div>

                  <div className="nav-item dropdown" style={{
                    marginLeft: "-10px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/staff-leave-attendance"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      STAFF LEAVE ATTENDANCE

                    </Link>

                  </div>

                  <div className="nav-item dropdown" style={{
                    marginLeft: "-10px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/attendance-list"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      STAFF ATTENDANCE

                    </Link>

                  </div>

                  <div className="nav-item dropdown" style={{
                    marginLeft: "-10px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/salary-sheet-list"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      SALARY SHEET

                    </Link>

                  </div>




                  <div className="nav-item dropdown" style={{
                    marginLeft: "-10px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/team-manager"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      TEAM MANAGER

                    </Link>

                  </div>


                </>



              </div>
            )}

            {employee && employee.assignPermission && employee.assignPermission.includes('Inventory') && (

              <div
                style={{ ...navBarStyles2, paddingTop: "8px" }}
              >
                {/* Your content here */}
                <>

                  <div
                    className="nav-item dropdown"
                    style={{
                      marginLeft: "-3px",
                      ...responsiveNavItem,
                      ...responsiveDropdown,
                    }}
                  >
                    <a
                      className={`nav-link dropdown-toggle ${isDropdownOpen2 ? "show" : ""
                        }`}
                      id="navbarDropdown2"
                      role="button"
                      onClick={toggleDropdown2}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen2}
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      INVENTORY


                    </a>
                    <div
                      className={`dropdown-menu ${isDropdownOpen2 ? "show" : ""}`}
                      aria-labelledby="navbarDropdown2"
                      style={isDropdownOpen2 ? { borderRadius: "10px" } : {}}
                      onClick={() => {
                        setIsDropdownOpen2(!isDropdownOpen2);
                      }}
                    >


                      <Link
                        to="/list-location"
                        className="dropdown-item"


                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Manage Lands
                      </Link>

                      <Link
                        to="/list-projects"
                        className="dropdown-item"

                        style={{
                          ... (isDropdownOpen2 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}
                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Manage Projects
                      </Link>
                      <Link
                        to="/list-scheme"
                        className="dropdown-item"

                        style={{
                          ... (isDropdownOpen2 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}
                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Manage Schemes
                      </Link>
                      <Link
                        to="/list-plan"
                        className="dropdown-item"

                        style={{
                          ... (isDropdownOpen2 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}
                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Manage Plans
                      </Link>
                      <Link
                        to="/inventory-checks"
                        className="dropdown-item"

                        style={{
                          ... (isDropdownOpen2 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}
                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Inventory
                      </Link>
                      <Link
                        to="/lucky-draw-list"
                        className="dropdown-item"

                        style={{
                          ... (isDropdownOpen2 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}
                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Lucky Draw
                      </Link>

                    </div>
                  </div>

                </>
              </div>
            )}

            {employee && employee.assignPermission && employee.assignPermission.includes('Sales CRM') && (

              <div
                style={{ ...navBarStyles2, paddingTop: "8px" }}
              >
                {/* Your content here */}
                <>
                  <div className="nav-item dropdown" style={{
                    marginLeft: "7x",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/lead-dashboard"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      CRM DASHBORD

                    </Link>

                  </div>

                  <div className="nav-item dropdown" style={{

                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/crm-project-list"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      CRM PROJECT

                    </Link>

                  </div>

                  <div className="nav-item dropdown" style={{

                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/lead-generation"
                      role="button"
                      aria-haspopup="true"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      LEAD GENERATION

                    </Link>

                  </div>

                  <div className="nav-item dropdown" style={{

                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/lead-allocation"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      LEAD ALLOCATION

                    </Link>

                  </div>

                  <div className="nav-item dropdown" style={{

                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/lead-data-bank-list"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      LEAD DATA BANK

                    </Link>

                  </div>



                  <div className="nav-item dropdown" style={{

                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/sales-staff"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      SALES STAFF

                    </Link>

                  </div>

                  <div className="nav-item dropdown" style={{

                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <a
                      className={`nav-link dropdown-toggle ${isDropdownOpen6 ? 'show' : ''}`}

                      id="navbarDropdown6"
                      role="button"
                      onClick={toggleDropdown6}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen6}
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      SALES CRM

                    </a>
                    <div className={`dropdown-menu ${isDropdownOpen6 ? 'show' : ''}`} aria-labelledby="navbarDropdown6" style={isDropdownOpen6 ? { backgroundColor: 'white', borderRadius: '10px' } : {}}>
                      <Link to="/sales-lead" className="dropdown-item"
                        href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),

                        }}
                      ><i class="angle fe fe-chevron-right"></i>

                        All Sales Lead ({employee.leadCount})
                      </Link>


                      <Link
                        to=""
                        onClick={() => handleStatusChange('New Lead')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        New Lead ({employee.newLeadCount})
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleStatusChange('Not enquired')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Not Enquired ({employee.notEnquiredLeadCount})
                      </Link>
                      <Link to=""
                        onClick={() => handleStatusChange('Not Interested')} className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Not Interested ({employee.notInterestedLeadCount})
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleStatusChange('Not Connected')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Not Connected ({employee.notConnectedLeadCount})
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleStatusChange('Hot Lead')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Hot Lead ({employee.hotleadLeadCount})
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleStatusChange('Meeting Done')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Meeting Done ({employee.meetingDoneLeadCount})
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleStatusChange('Form Done')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Form Done ({employee.formDoneLeadCount})
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleStatusChange('Follow up')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Follow Up ({employee.followUpLeadCount})
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleStatusChange('Sales Projection')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Sales Projection ({employee.salesProjectionLeadCount})
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleStatusChange('Outstation')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Outstation ({employee.outstationLeadCount})
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleStatusChange('Search')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Search ({employee.searchLeadCount})
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleStatusChange('Dead Other Issue')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Dead Other Issue ({employee.deadOtherIssueLeadCount})
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleStatusChange('Payment Received (10%)')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Payment Received(10%)
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleStatusChange('Payment Received (30%)')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Payment Received(30%)
                      </Link>
                      <Link
                        to="/"
                        onClick={() => handleStatusChange('Dead Budget Issue')}
                        className="dropdown-item" href="#" style={{
                          ... (isDropdownOpen6 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-16px',
                        }}><i class="angle fe fe-chevron-right"></i>

                        Dead Budget Issue
                      </Link>

                    </div>
                  </div>

                </>
              </div>
            )}

            {employee && employee.assignPermission && employee.assignPermission.includes('Applicants') && (

              <div
                style={{ ...navBarStyles2, paddingTop: "8px" }}
              >
                {/* Your content here */}
                <>


                  <div
                    className="nav-item dropdown"
                    style={{
                      marginLeft: "-8px",
                      ...responsiveNavItem,
                      ...responsiveDropdown,
                    }}
                  >
                    <a
                      className={`nav-link dropdown-toggle ${isDropdownOpen52 ? "show" : ""}`}
                      id="navbarDropdown52"
                      role="button"
                      onClick={toggleDropdown52}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen52}
                      style={linkStyle}
                    >
                      <i class="fa-sharp fa-solid fa-gears me-2"></i>
                      Applicants

                    </a>
                    <div
                      className={`dropdown-menu ${isDropdownOpen52 ? "show" : ""}`}
                      aria-labelledby="navbarDropdown"
                      style={isDropdownOpen52 ? { borderRadius: "10px" } : {}}
                    >

                      <div className={`dropdown-menu ${isDropdownOpen11 ? 'show' : ''}`} aria-labelledby="navbarDropdown9" style={isDropdownOpen11 ? { backgroundColor: 'white', borderRadius: '10px' } : {}}>
                        <Link to="/user-list" className="dropdown-item" href="#"

                        ><i class="angle fe fe-chevron-right"></i>

                          Applicants({applicantCount.userCount})
                        </Link>

                      </div>

                    </div>
                  </div>

                </>
              </div>
            )}

            {employee && employee.assignPermission && employee.assignPermission.includes('Applications') && (
              <div
                style={{ ...navBarStyles2, paddingTop: "8px" }}
              >
                {/* Your content here */}
                <>

                  <div
                    className="nav-item dropdown"
                    style={{
                      marginLeft: "-8px",
                      ...responsiveNavItem,
                      ...responsiveDropdown,
                    }}
                  >
                    <a
                      className={`nav-link dropdown-toggle ${isDropdownOpen13 ? "show" : ""
                        }`}
                      id="navbarDropdown13"
                      role="button"
                      onClick={toggleDropdown13}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen13}
                      style={linkStyle}

                    >
                      <i class="fa-solid fa-users  me-2"></i>
                      APPLICATIONS

                    </a>
                    <div
                      className={`dropdown-menu ${isDropdownOpen13 ? "show" : ""}`}
                      aria-labelledby="navbarDropdown1"
                      style={isDropdownOpen13 ? { borderRadius: "10px" } : {}}
                    >
                      <Link
                        to="/applicant-list"
                        className="dropdown-item"
                        style={isDropdownOpen13 ? openDropdownItemStyle : linkHoverStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <i class="angle fe fe-chevron-right"></i>
                        All Applications
                      </Link>

                      <Link
                        to="/allocated-list"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen13 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Allocated
                      </Link>
                      <Link
                        to="/not-allocated-list"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen13 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Not Allocated
                      </Link>
                      <Link
                        to="/upload-updated-result"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen13 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Applications Results Sheet <span className="tx-danger">*</span>
                      </Link>

                    </div>
                  </div>
                </>
              </div>
            )}

            {employee && employee.assignPermission && employee.assignPermission.includes('Operations') && (
              <div
                style={{ ...navBarStyles2, paddingTop: "8px" }}
              >
                {/* Your content here */}
                <>

                  <div className="nav-item dropdown" style={{
                    marginLeft: "-8px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <a
                      className={`nav-link dropdown-toggle ${isDropdownOpen11 ? 'show' : ''}`}

                      id="navbarDropdown9"
                      role="button"
                      onClick={toggleDropdown11}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen11}
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>

                      OPERATIONS

                    </a>
                    <div className={`dropdown-menu ${isDropdownOpen11 ? 'show' : ''}`} aria-labelledby="navbarDropdown9" style={isDropdownOpen11 ? { backgroundColor: 'white', borderRadius: '10px' } : {}}>
                      <Link to="/customer" className="dropdown-item" href="#"

                      ><i class="angle fe fe-chevron-right"></i>

                        All Customer
                      </Link>
                      <Link to="/change-kyc-request" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        Change KYC Request
                      </Link>
                      <Link to="/change-unit-request" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        Change Unit Request
                      </Link>
                      <Link to="/customer-welcome-letter" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        Welcome Letters
                      </Link>
                      <Link to="/customer-allotment-letters" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        Allotment Letters
                      </Link>
                      <Link to="/customer-demand-letter" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        Demand Letters
                      </Link>
                      <Link to="/customer-cancel-allotments" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        Cancel Allotments
                      </Link>
                      <Link to="/manage-gift-allocations" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        Gift Allocations
                      </Link>
                      <Link to="/unit-allocation" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        Unit Allocations
                      </Link>

                      <Link to="/due-payments" className="dropdown-item" href="#"
                        style={{
                          ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}
                      ><i class="angle fe fe-chevron-right"></i>

                        Due Payments
                      </Link>
                      <Link to="/owners-listing" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        Owners Listing
                      </Link>
                      <Link to="/noc-list" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        NOC Listing
                      </Link>
                      <Link to="/all-payment-remainder" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        All Payment Remainder
                      </Link>
                      <Link to="/all-notice-list" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen11 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        All Notice
                      </Link>

                    </div>

                  </div>
                </>
              </div>
            )}

            {employee && employee.assignPermission && employee.assignPermission.includes('Accounts') && (
              <div
                style={{ ...navBarStyles2, paddingTop: "8px" }}
              >
                {/* Your content here */}
                <>


                  <div className="nav-item dropdown" style={{
                    marginLeft: "-3px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <a
                      className={`nav-link dropdown-toggle ${isDropdownOpen15 ? 'show' : ''}`}

                      id="navbarDropdown15"
                      role="button"
                      onClick={toggleDropdown15}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen15}
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      ACCOUNTS


                    </a>
                    <div className={`dropdown-menu ${isDropdownOpen15 ? 'show' : ''}`} aria-labelledby="navbarDropdown9" style={isDropdownOpen15 ? { backgroundColor: 'white', borderRadius: '10px' } : {}}>
                      <Link to="/all-payment-ledger" className="dropdown-item" href="#" style={isDropdownOpen15 ? openDropdownItemStyle : linkStyle}><i class="angle fe fe-chevron-right"></i>

                        Payment Ledger (All)
                      </Link>

                      <Link to="/bank-account-list" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen15 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        Bank Accounts
                      </Link>

                      <Link to="/registry" className="dropdown-item" href="#" style={{
                        ... (isDropdownOpen15 ? openDropdownItemStyle : linkHoverStyle),
                        marginTop: '-10px',
                      }}><i class="angle fe fe-chevron-right"></i>

                        Registry Listing <span className="tx-danger">*</span>
                      </Link>



                      <Link
                        to="/company-list"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen15 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Company
                      </Link>


                    </div>

                  </div>


                </>
              </div>
            )}

            {employee && employee.assignPermission && employee.assignPermission.includes('Refund') && (
              <div
                style={{ ...navBarStyles2, paddingTop: "8px" }}
              >
                {/* Your content here */}
                <>

                  <div
                    className="nav-item dropdown"
                    style={{
                      marginLeft: "-8px",
                      ...responsiveNavItem,
                      ...responsiveDropdown,
                    }}
                  >
                    <a
                      className={`nav-link dropdown-toggle ${isDropdownOpen51 ? "show" : ""}`}
                      id="navbarDropdown"
                      role="button"
                      onClick={toggleDropdown51}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen51}
                      style={linkStyle}
                    >
                      <i class="fa-sharp fa-solid fa-gears me-2"></i>
                      REFUND

                    </a>
                    <div
                      className={`dropdown-menu ${isDropdownOpen51 ? "show" : ""}`}
                      aria-labelledby="navbarDropdown"
                      style={isDropdownOpen51 ? { borderRadius: "10px" } : {}}
                    >


                      <Link
                        to="/refund-booking-amt"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen51 ? openDropdownItemStyle : linkHoverStyle),

                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Refund Request
                      </Link>

                      <Link
                        to="/refund-request-pending"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen51 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Refund Request Pending
                      </Link>

                      <Link
                        to="/refund-booking-amount-success"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen51 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Refund Success
                      </Link>
                      <Link
                        to="/refund-booking-amount-ff"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen51 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Refund FF
                      </Link>

                    </div>

                  </div>

                </>
              </div>
            )}

            {employee && employee.assignPermission && employee.assignPermission.includes('Eoi') && (

              <div
                style={{ ...navBarStyles, paddingTop: "8px" }}
              >
                {/* Your content here */}
                <>

                  {/* <div className="nav-item dropdown" style={{
                  marginLeft: "3px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}>
                  <Link
                    className='nav-link dropdown-toggle'
                   to="/manage-eoi"
                    role="button"
                    style={linkStyle}
                  >
                    <i class="fa-solid fa-money-check-dollar me-2"></i>
                    PROJECT EOI
                  </Link>

                </div> */}

                  <div className="nav-item dropdown" style={{
                    marginLeft: "-3px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/eoi-list"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      NEW APPLICATIONS

                    </Link>

                  </div>

                  {/* <div className="nav-item dropdown" style={{
                  marginLeft: "-10px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}>
                  <Link
                    className='nav-link dropdown-toggle'
                    to="/eoi-plan-list"
                    role="button"
                    style={linkStyle}
                  >
                    <i class="fa-solid fa-money-check-dollar me-2"></i>
                    EOI PLAN

                  </Link>

                </div> */}

                  <div className="nav-item dropdown" style={{
                    marginLeft: "-10px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/approved-applicant"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      APPROVE APPLICANT

                    </Link>

                  </div>


                  <div className="nav-item dropdown" style={{
                    marginLeft: "-10px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/refund-request-list"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      Refund Request

                    </Link>

                  </div>

                  {/* <div className="nav-item dropdown" style={{
                  marginLeft: "-10px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}>
                  <Link
                    className='nav-link dropdown-toggle'
                     to="/unit-allocation"
                    role="button"
                    style={linkStyle}
                  >
                    <i class="fa-solid fa-money-check-dollar me-2"></i>
                  UNIT ALLOCATION  

                  </Link>

                </div> */}

                  <div className="nav-item dropdown" style={{
                    marginLeft: "-10px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <Link
                      className='nav-link dropdown-toggle'
                      to="/inventory-view"
                      role="button"
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      EOI INVENTORY

                    </Link>

                  </div>

                </>

              </div>
            )}

            {employee && employee.assignPermission && employee.assignPermission.includes('Report') && (
              <div
                style={{ ...navBarStyles2, paddingTop: "8px" }}
              >
                {/* Your content here */}
                <>


                  <div className="nav-item dropdown" style={{
                    marginLeft: "-8px",
                    ...responsiveNavItem,
                    ...responsiveDropdown,
                  }}>
                    <a
                      className={`nav-link dropdown-toggle ${isDropdownOpen16 ? 'show' : ''}`}

                      id="navbarDropdown16"
                      role="button"
                      onClick={toggleDropdown16}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen16}
                      style={linkStyle}
                    >
                      <i class="fa-solid fa-money-check-dollar me-2"></i>
                      REPORTS


                    </a>
                    <div className={`dropdown-menu ${isDropdownOpen16 ? 'show' : ''}`} aria-labelledby="navbarDropdown16" style={isDropdownOpen16 ? { backgroundColor: 'white', borderRadius: '10px' } : {}}>
                      <Link to="/sales-leads-report" className="dropdown-item" style={isDropdownOpen16 ? openDropdownItemStyle : linkStyle}><i class="angle fe fe-chevron-right"></i>

                        Sales Leads Report
                      </Link>

                      <Link
                        to="/attendance-report"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen16 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Attendance Report
                      </Link>

                      <Link
                        to="/staff-reports"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen16 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Staff Report
                      </Link>


                      <Link
                        to="/customer-report"
                        className="dropdown-item"
                        style={{
                          ... (isDropdownOpen16 ? openDropdownItemStyle : linkHoverStyle),
                          marginTop: '-10px',
                        }}

                      >
                        <i class="angle fe fe-chevron-right"></i>
                        Customer Report
                      </Link>



                    </div>

                  </div>
                </>
              </div>
            )}