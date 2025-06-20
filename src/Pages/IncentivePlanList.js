import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { X } from 'react-feather';
import '../assets/plugins/notify/css/notifIt.css'
import toast1, { Toaster } from 'react-hot-toast';

const IncentivePlanList = () => {
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
                                    <h2 className="main-content-title tx-24 mg-b-5">Incentive Plan List</h2>

                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to='/add-incentive-plan'
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Incentive Plan
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Page Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <input
                                                        type="search"
                                                        className="form-control form-control"
                                                        placeholder="Search..."
                                                        aria-controls="example1"
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
                                                                <table className="table table-striped table-bordered text-nowrap mb-0">
                                                                    <thead>
                                                                        <tr>

                                                                            <th>S.No</th>
                                                                            <th>Created Date</th>
                                                                            <th>Plan Name</th>
                                                                            <th>Type</th>
                                                                            <th>Created By</th>

                                                                            <th>Actions</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>

                                                                            <td>
                                                                                1
                                                                            </td>
                                                                            <td>
                                                                                14-03-2024
                                                                            </td>
                                                                            <td>
                                                                                DLP
                                                                            </td>
                                                                            <td>
                                                                                Plot
                                                                            </td>
                                                                            <td>
                                                                                Amit
                                                                            </td>

                                                                            <td>


                                                                                <a >
                                                                                    <i className="fa fa-edit me-3" style={{ cursor: 'pointer' }} />
                                                                                </a>
                                                                                <a >
                                                                                    <i className="fa fa-trash" style={{ cursor: 'pointer' }} />
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>

                                                                            <td>
                                                                                1
                                                                            </td>
                                                                            <td>
                                                                                14-03-2024
                                                                            </td>
                                                                            <td>
                                                                                DLP
                                                                            </td>
                                                                            <td>
                                                                                Shop
                                                                            </td>
                                                                            <td>
                                                                                Amit
                                                                            </td>

                                                                            <td>


                                                                                <a >
                                                                                    <i className="fa fa-edit me-3" style={{ cursor: 'pointer' }} />
                                                                                </a>
                                                                                <a >
                                                                                    <i className="fa fa-trash" style={{ cursor: 'pointer' }} />
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>

                                                                            <td>
                                                                                1
                                                                            </td>
                                                                            <td>
                                                                                14-03-2024
                                                                            </td>
                                                                            <td>
                                                                                DLP
                                                                            </td>
                                                                            <td>
                                                                                Farmhouse
                                                                            </td>
                                                                            <td>
                                                                                Amit
                                                                            </td>

                                                                            <td>


                                                                                <a >
                                                                                    <i className="fa fa-edit me-3" style={{ cursor: 'pointer' }} />
                                                                                </a>
                                                                                <a >
                                                                                    <i className="fa fa-trash" style={{ cursor: 'pointer' }} />
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
                                    Copyright © 2024 <a href="javascript:void(0)">Caasaa</a>. Designed
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

export default IncentivePlanList