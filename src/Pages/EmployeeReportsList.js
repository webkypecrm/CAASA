import React from 'react'
import MainPage from '../Components/MainPage'
import Prince from '../Components/Prince'
import DropdownMenu from '../Components/DropdownMenu'
import TopHeader from '../Components/TopHeader'


const EmployeeReportsList = () => {
  return (
    <>
    {/* Page */}
    
      {/* Main Header*/}
      <div className="page">
        
        <TopHeader />
        <Prince />
      
      {/* End Main Header*/}
      {/* Sidemenu */}
      
      {/* End Sidemenu */}
      {/* Main Content*/}
      <div className="main-content  pt-0">
        <div className="main-container container-fluid">
          <div className="inner-body">
            {/* Page Header */}
            <div className="page-header">
              <div>
                <h2 className="main-content-title tx-24 mg-b-5">
                  Employee Reports List
                </h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">HRMS </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Employee Reports List{" "}
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
                </div>
              </div>
            </div>
            {/* End Page Header */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card custom-card">
                  <div className="card-body py-3">
                    <div className="row">
                      <div className="col-sm-4">
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
                      <div className="col-sm-2">
                        <select className="form-control select2">
                          <option label="Choose one">Designation</option>
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
    </div>
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

export default EmployeeReportsList