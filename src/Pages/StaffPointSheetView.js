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

const StaffPointSheetView = () => {
    const [showLoader, setShowLoader] = useState(true);
    const [loading, setLoading] = useState(true);

    const loadData = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
    useEffect(() => {
        loadData();
    }, []);
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
                                    <h2 className="main-content-title tx-24 mg-b-5">Staff Point Sheet View</h2>

                                </div>
                                {/* <div className="d-flex">
                                    <div className="justify-content-center">
                                        <a
                                            href="add-employee.html"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Employee
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                            {/* End Page Header */}

                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '100%', fontFamily: 'Arial, sans-serif', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                                                    <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
                                                        <tr>
                                                            <th style={{ padding: '15px', textAlign: 'center', borderRight: '1px solid #ddd' }}>Team Manage</th>
                                                            <th style={{ padding: '15px', textAlign: 'center', borderRight: '1px solid #ddd' }}>Target</th>
                                                            <th style={{ padding: '15px', textAlign: 'center', borderRight: '1px solid #ddd' }}>Active</th>
                                                            <th style={{ padding: '15px', textAlign: 'center' }}>Rank</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                                                            <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                                Amit<br />
                                                                Rakash<br />
                                                                Rohan<br />
                                                                Rajiv<br />
                                                                John<br />
                                                                Smith
                                                            </td>
                                                            <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                                100<br />
                                                                12<br />
                                                                15<br />
                                                                18<br />
                                                                80<br />
                                                                45
                                                            </td>
                                                            <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                                7<br />
                                                                1.5<br />
                                                                2.6<br />
                                                                3.1<br />
                                                                5.3<br />
                                                                9.2
                                                            </td>
                                                            <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>
                                                                1<br />
                                                                3<br />
                                                                4<br />
                                                                5<br />
                                                                2<br />
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                                James<br />
                                                                Michael<br />
                                                                William<br />
                                                                Charles<br />
                                                                Robert<br />
                                                                David
                                                            </td>
                                                            <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                                110<br />
                                                                14<br />
                                                                17<br />
                                                                20<br />
                                                                85<br />
                                                                50
                                                            </td>
                                                            <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                                6<br />
                                                                2.5<br />
                                                                3.8<br />
                                                                4.2<br />
                                                                6.7<br />
                                                                8.9
                                                            </td>
                                                            <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>
                                                                2<br />
                                                                4<br />
                                                                6<br />
                                                                7<br />
                                                                3<br />
                                                                8
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

export default StaffPointSheetView





