import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

const ApplicantList = () => {
    return (
        <>

            <div className="page">

                <TopHeader />
                <Prince />

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Applicant List
                                    </h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Applicant </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Applicant List{" "}
                                        </li>
                                    </ol>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <a
                                            href="add-applicant.html"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Applicant
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
                                                <div className="col-sm-2">
                                                    <input
                                                        type="search"
                                                        className="form-control form-control"
                                                        placeholder="Search User..."
                                                        aria-controls="example1"
                                                    />
                                                </div>
                                                <div className="col-sm-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Start Date"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-sm-2">
                                                    <input
                                                        type="text"
                                                        placeholder="End Date"
                                                        className="form-control"
                                                    />
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
                                                    <div className="tab-content ">
                                                        <div className="tab-pane active" id="tab11">
                                                            <div className="table-responsive">
                                                                <table className="table table-striped table-bordered mb-0 text-nowrap">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>
                                                                                <label className="ckbox">
                                                                                    <input type="checkbox" defaultValue={5} />
                                                                                    <span />
                                                                                </label>
                                                                            </th>
                                                                            <th width="10%">Applicant ID</th>
                                                                            <th>Applicant Name</th>
                                                                            <th>Applicant Address</th>
                                                                            <th>Applicant Details</th>
                                                                            <th width="10%">Co Applicant Image</th>
                                                                            <th>Co Applicant Name</th>
                                                                            <th>Co Applicant Address</th>
                                                                            <th>Co Applicant Details</th>
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
                                                                                Ticket ID: 0001
                                                                                <br />
                                                                                <img
                                                                                    alt="avatar"
                                                                                    className="rounded-circle me-3"
                                                                                    src="../assets/img/users/4.jpg"
                                                                                    style={{ width: 60 }}
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                Name: Sunil Kumar
                                                                                <br />
                                                                                Email: sunil@gmail.com
                                                                                <br />
                                                                                Mobile: +91 9999999999
                                                                                <br />
                                                                                Alternate Number: +91 9898989898
                                                                                <br />
                                                                                Father's Name: Raj Kumar
                                                                            </td>
                                                                            <td>
                                                                                Plot No- C, Galaxy Blue Sapphire Plaza,{" "}
                                                                                <br />
                                                                                Hope Tower, Greater Noida W Rd,
                                                                                <br /> Sector 4, Uttar Pradesh 201309
                                                                            </td>
                                                                            <td>
                                                                                Applicant DOB
                                                                                <br />
                                                                                Aadhaar Number
                                                                                <br />
                                                                                Aadhaar Image
                                                                                <br />
                                                                                PAN
                                                                                <br />
                                                                                PAN Image
                                                                                <br />
                                                                                Nationality
                                                                                <br />
                                                                                Profession
                                                                                <br />
                                                                            </td>
                                                                            <td>
                                                                                <img
                                                                                    alt="avatar"
                                                                                    className="rounded-circle me-3"
                                                                                    src="../assets/img/users/8.jpg"
                                                                                    style={{ width: 60 }}
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                Name: Ajay Gupta
                                                                                <br />
                                                                                Email: ajay@gmail.com
                                                                                <br />
                                                                                Mobile: +91 9999999999
                                                                                <br />
                                                                                Alternate Number: +91 9898989898
                                                                                <br />
                                                                                Father's Name: Ashish Gupta
                                                                            </td>
                                                                            <td>
                                                                                411, 4th Floor, Bestech Cyber Park,
                                                                                <br /> Narsinghpur, NH-8, <br />
                                                                                Gurugram, Haryana 122004
                                                                            </td>
                                                                            <td>
                                                                                Co Applicant DOB
                                                                                <br />
                                                                                Aadhaar Number
                                                                                <br />
                                                                                Aadhaar Image
                                                                                <br />
                                                                                PAN
                                                                                <br />
                                                                                PAN Image
                                                                                <br />
                                                                                Nationality
                                                                                <br />
                                                                                Profession
                                                                                <br />
                                                                            </td>
                                                                            <td>
                                                                                <a
                                                                                    href=""
                                                                                    className="btn ripple btn-dark btn-xs"
                                                                                >
                                                                                    <i
                                                                                        className="fa fa-check"
                                                                                        title="Enable"
                                                                                    />
                                                                                </a>
                                                                                <a
                                                                                    href=""
                                                                                    className="btn ripple btn-danger btn-xs"
                                                                                >
                                                                                    <i
                                                                                        className="fa fa-trash"
                                                                                        title="Delete"
                                                                                    />
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
                    </div>
                </div>
                {/* End Main Content*/}
                {/* Main Footer*/}
                <div className="main-footer text-center">
                    <div className="container">
                        <div className="row row-sm">
                            <div className="col-md-12">
                                <span>
                                    Copyright © 2023 <a href="javascript:void(0)">AMRS</a>. Designed
                                    by <a href="http://webkype.com/">Webkype.com</a> All rights
                                    reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Footer*/}
            </div>
         
           
        </>

    )
}

export default ApplicantList