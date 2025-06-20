import React from 'react'

const Header = () => {
  return (
    <>
    <div className="page">
            <div className="main-container container-fluid">
        
          <div className="main-header  " style={{ backgroundColor: 'blue', color: 'white' }}>
            
            <div className="main-sidebar-body main-body-1">
              <div className=" " id="slide-left"><i className="fe fe-chevron-left" /></div>
              <ul className="menu-nav nav">
                <li className="nav-header"><span className="nav-label">Dashboard</span></li>
                <li className="nav-item">
                  <a className="nav-link" href="business-dashboard.html">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-home sidemenu-icon menu-icon " />
                    <span className="sidemenu-label"> Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-wallet sidemenu-icon menu-icon " />
                    <span className="sidemenu-label">HRMS</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1"><a href="javascript:void(0)">HRMS</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="list-employee.html">Manage
                        Employee</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="employee-attendance.html">Attendance Logs </a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="employee-reports.html">Employee Report</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-wallet sidemenu-icon menu-icon " />
                    <span className="sidemenu-label">Sales CRM</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Sales CRM</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="sales-lead.html">New Leads
                      </a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="crm-reports.html">Reports
                      </a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-wallet sidemenu-icon menu-icon " />
                    <span className="sidemenu-label">Orders</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Orders</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="order-list.html">All Orders
                      </a></li>
                  </ul>
                </li>
                <li className="nav-header"><span className="nav-label">2nd Phase</span></li>
                <li className="nav-item">
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-wallet sidemenu-icon menu-icon " />
                    <span className="sidemenu-label">Buyers</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Buyers</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="list-buyer.html">Manage
                        Buyers</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-wallet sidemenu-icon menu-icon " />
                    <span className="sidemenu-label">Millers</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Millers</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="list-millers.html">Manage
                        Millers</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-wallet sidemenu-icon menu-icon " />
                    <span className="sidemenu-label">Exporters</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Exporters</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="list-exporters.html">Manage
                        Exporters</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-wallet sidemenu-icon menu-icon " />
                    <span className="sidemenu-label">Vendors</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Vendors</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="list-vendors.html">Manage
                        Vendors</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-wallet sidemenu-icon menu-icon " />
                    <span className="sidemenu-label">Accounts</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1"><a href="javascript:void(0)">Accounts</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#"> Invoices ( All) </a>
                    </li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Purchase Orders ( All)
                      </a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Payment Reports</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Payment Ledger</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-wallet sidemenu-icon menu-icon " />
                    <span className="sidemenu-label">More Actions</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1"><a href="javascript:void(0)">More Actions</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#"> Events</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Expenses</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Pwip News</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Pages</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Menu</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Sample PO ( Bags) </a>
                    </li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Sample PO ( Rice) </a>
                    </li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Sample Packaging </a>
                    </li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Sample GRN</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Sample LR.</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Sample Invoice</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Sample PI </a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Sample Pre Shipment
                        Inspection (PSI)</a></li>
                    <li className="nav-sub-item"> <a className="nav-sub-link" href="#">Sample CFS Inspection</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="slide-right" id="slide-right"><i className="fe fe-chevron-right" /></div>
            </div>
          </div>
        </div>
        </div>
      
      {/* End Sidemenu */}
    </>
  )
}

export default Header