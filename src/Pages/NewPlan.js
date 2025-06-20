import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';


const NewPlan = () => {
    const [users, setUsers] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const navigate = useNavigate()
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;



    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    //list Scheme data
    const fetchDataFromApi = async () => {

        try {
            const response = await fetch(`${apiUrl}/scheme/getAllSchema`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            const data = await response.json();
            console.log('Fetched data:', data);

            if (data.status === 'success' && Array.isArray(data.data)) {
                const cleanedData = data.data.map(item => ({
                    ...item,

                    createdAt: item.createdAt ? formatDateTime(item.createdAt) : null,
                }));
                setUsers(cleanedData);
            } else {
                console.error('API response was not successful or does not contain an array:', data.message || data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataFromApi();
    }, []);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLoader(false);
        }, 800);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('Token');

        if (!token) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>

            {/* Page */}
            <div className="page">
                {showLoader && (
                    <div id="global-loader">
                        <div className="spinner-border text-info loader-img" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
                <TopHeader />
                <Prince />

                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">New Plan</h2>
                                </div>
                            </div>
                            {/* End Page Header */}

                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12">


                                    <div style={{ marginTop: '2px', width: '100%', backgroundColor: 'var(--primary-bg-color)', padding: '5px 20px' }}>
                                        <h5 style={{ textAlign: 'left', color: '#ffffff', fontSize: '-10rem', margin: '0' }}>Payment Schedule</h5>
                                    </div>

                                    <div className="row row-sm mt-0 justify-content-around" style={{ width: '101.5%', marginTop: '0x' }}>
                                        <div className="col-xl-12 col-xl-12 ">
                                            <div className="card custom-card">
                                                <div className="card-body">
                                                    <div className="table-responsive" >

                                                        <h4
                                                            className="mt-0 text-center mb-3"
                                                            style={{ color: "#2e3192" }}
                                                        >
                                                            FLEXI PAYMENT PLAN
                                                        </h4>
                                                        <table className="table table-bordered" style={{ width: '100%' }}>
                                                            <thead>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <th className="tx-left" />
                                                                    <th className="tx-left" style={{ width: 350 }}>
                                                                        Basic Price ₹{" "}
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 90, height: 25, display: "inline" }}




                                                                        />
                                                                        {" "} per {" "}


                                                                    </th>
                                                                    <th className="tx-left" />
                                                                    <th className="tx-left">
                                                                        <span style={{ marginRight: 10, fontSize: "11px" }}>
                                                                            Installment Amount for
                                                                            <span style={{ fontSize: '9px' }}>

                                                                            </span>
                                                                        </span>


                                                                    </th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">1</td>
                                                                    <td className="tx-left">On Booking</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}


                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}

                                                                        />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">2</td>
                                                                    <td className="tx-left">
                                                                        Within 24 Months. Monthly installment Each of:-
                                                                    </td>
                                                                    <td className="tx-left" />
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}

                                                                        />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left" />
                                                                    <td className="tx-left">Total value</td>
                                                                    <td className="tx-left">

                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}

                                                                        />
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

export default NewPlan



