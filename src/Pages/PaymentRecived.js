import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";

const PaymentRecived = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isModalOpen3, setIsModalOpen3] = useState(false);


    const [filterByObj, setFilterByObj] = useState({
        from: '',
        to: '',
        projectId: '',
        schemeId: '',
        schemeType: '',

    });
    const handleOpenModal3 = () => {
        setIsModalOpen3(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal3 = () => {
        setIsModalOpen3(false);
        document.body.classList.remove('modal-open');
    };
    const handleChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);

        // Format the start and end dates if they are not null
        const formatDate = (date) => {
            if (date) {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}/${month}/${day}`;
            }
            return '';
        };

        // Update the filterByObj state with the formatted date range
        const formattedStartDate = formatDate(start);
        const formattedEndDate = formatDate(end);


        setFilterByObj(prevState => ({
            ...prevState,
            from: `${formattedStartDate}`,
            to: `${formattedEndDate}`
        }));
    };



    return (
        <>

            <div className="page">

                <TopHeader />
                <Prince />

                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Payment Ledger List
                                    </h2>

                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to='/add-payments'
                                           
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Payment
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
                                                <div className="col-sm-4">
                                                    <input
                                                        type="search"
                                                        className="form-control form-control"
                                                        placeholder="Search ID,Phone,Unit No"
                                                        aria-controls="example1"
                                                    />
                                                </div>
                                                <div className="col-sm-4">
                                                    <select
                                                        className="form-control select2"

                                                    >
                                                        <option value="">Status</option>
                                                        <option >complete</option>
                                                        <option >Due</option>
                                                        <option >Next Payment</option>

                                                    </select>
                                                </div>
                                                <div className="col-sm-4">
                                                    <DatePicker
                                                        selected={startDate}
                                                        onChange={handleChange}
                                                        startDate={startDate}
                                                        endDate={endDate}
                                                        selectsRange
                                                        placeholderText="Select Date Range"

                                                        dateFormat="dd/MM/yyyy"

                                                        className="form-control fc-datepicker"
                                                        style={{ height: '100%', width: '200%' }}
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
                                                                                S.No
                                                                            </th>
                                                                            <th>Ticket ID</th>
                                                                            <th>Draw No</th>
                                                                            <th>Draw Date</th>
                                                                            <th>Project Name</th>
                                                                            <th>Unit No</th>
                                                                            <th>Applicant Name</th>
                                                                            <th>Payment Plan</th>
                                                                            <th>Total Cost</th>
                                                                            <th>Total Pad</th>
                                                                            <th>Total Due</th>
                                                                            <th>Initial Due</th>
                                                                            <th>Next Due</th>
                                                                            <th>Next Due Date</th>
                                                                            <th>Actions</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                1
                                                                            </td>
                                                                            <td>
                                                                                FH: 0001


                                                                            </td>
                                                                            <td>
                                                                                LUCKY DRAW SC-82
                                                                            </td>
                                                                            <td>
                                                                                30-01-2024
                                                                            </td>
                                                                            <td>
                                                                                Galaxy Blue Sapphire Mall
                                                                            </td>
                                                                            <td>
                                                                                F-82
                                                                            </td>
                                                                            <td>
                                                                                Ajay Gupta

                                                                            </td>
                                                                            <td>
                                                                                DLP
                                                                            </td>
                                                                            <td>
                                                                                4,511,857.37
                                                                            </td>
                                                                            <td>
                                                                                1,804,866.00
                                                                            </td>
                                                                            <td>
                                                                                2,706,981.37
                                                                            </td>
                                                                            <td>
                                                                                1,363,494.16
                                                                            </td>
                                                                            <td>
                                                                                1,363,497.21
                                                                            </td>
                                                                            <td>
                                                                                28-01-2025
                                                                            </td>
                                                                            <td>
                                                                                <a

                                                                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                >
                                                                                    Payment Schedule
                                                                                </a>

                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                2
                                                                            </td>
                                                                            <td>
                                                                                FH: 0002


                                                                            </td>
                                                                            <td>
                                                                                LUCKY DRAW SC-82
                                                                            </td>
                                                                            <td>
                                                                                30-01-2024
                                                                            </td>
                                                                            <td>
                                                                                Galaxy Blue Sapphire Mall
                                                                            </td>
                                                                            <td>
                                                                                F-82
                                                                            </td>
                                                                            <td>
                                                                                Ram Gupta

                                                                            </td>
                                                                            <td>
                                                                                DLP
                                                                            </td>
                                                                            <td>
                                                                                4,511,857.37
                                                                            </td>
                                                                            <td>
                                                                                1,804,866.00
                                                                            </td>
                                                                            <td>
                                                                                2,706,981.37
                                                                            </td>
                                                                            <td>
                                                                                1,363,494.16
                                                                            </td>
                                                                            <td>
                                                                                1,363,497.21
                                                                            </td>
                                                                            <td>
                                                                                28-01-2025
                                                                            </td>
                                                                            <td>
                                                                                <a

                                                                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                >
                                                                                    Payment Schedule
                                                                                </a>

                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                3
                                                                            </td>
                                                                            <td>
                                                                                FH: 0003


                                                                            </td>
                                                                            <td>
                                                                                LUCKY DRAW SC-82
                                                                            </td>
                                                                            <td>
                                                                                30-01-2024
                                                                            </td>
                                                                            <td>
                                                                                Galaxy Blue Sapphire Mall
                                                                            </td>
                                                                            <td>
                                                                                F-82
                                                                            </td>
                                                                            <td>
                                                                                Ajay Gupta

                                                                            </td>
                                                                            <td>
                                                                                DLP
                                                                            </td>
                                                                            <td>
                                                                                4,511,857.37
                                                                            </td>
                                                                            <td>
                                                                                1,804,866.00
                                                                            </td>
                                                                            <td>
                                                                                2,706,981.37
                                                                            </td>
                                                                            <td>
                                                                                1,363,494.16
                                                                            </td>
                                                                            <td>
                                                                                1,363,497.21
                                                                            </td>
                                                                            <td>
                                                                                28-01-2025
                                                                            </td>
                                                                            <td>
                                                                                <a

                                                                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                >
                                                                                    Payment Schedule
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
                                    Copyright © 2024 <a href="javascript:void(0)">AMRS</a>. Designed
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

export default PaymentRecived