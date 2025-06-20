import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

const Monthss = () => {

    const [users, setUsers] = useState([]);
    const [userFullNames, setUserFullNames] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const [search, setSearch] = useState('');
    const navigation = useNavigate()
    const navigate = useNavigate()
    const { empid } = useParams();
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;


    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    //list location data
    const fetchDataFromApi = () => {
        fetch(`${apiUrl}/employee/yearlyEmpAttendance/${empid}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched data:', data);
                if (data.status === 'success') {
                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            date: formatDateTime(item.date),

                        }));
                        setUsers(formattedData);

                    } else {
                        console.error('API response does not contain employeeList array:', data);
                    }
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };



    useEffect(() => {
        fetchDataFromApi()
    }, []);

    // Filtered users remain the same
    const filteredUsers = users.filter((user) => {
        return (
            (user)
        );
    });


    const extractFullNames = () => {
        const fullNames = filteredUsers.map(user => user.employee.fullName);
        setUserFullNames(fullNames);
      };
    
      useEffect(() => {
        extractFullNames();
      }, [filteredUsers]);

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

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Attendance Yearly({userFullNames.length > 0 ? userFullNames[0] : 'No name available'})
                                        {/* <small>(Sushil Singh)</small> */}
                                    </h2>
                                    {/* <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">HRMS </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Month May{" "}
                                        </li>
                                    </ol> */}
                                </div>
                                
                               
                            </div>
                            {/* End Page Header */}
                           
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
                                                            <th>Day</th>
                                                            <th>Employee</th>
                                                            <th> Check-In</th>
                                                            <th>Check-out</th>
                                                            <th>CURRENT STATUS</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {filteredUsers.map((user) => (
                                                            <tr>
                                                                <td>
                                                                    <label className="ckbox">
                                                                        <input type="checkbox" defaultValue={5} />
                                                                        <span />
                                                                    </label>
                                                                </td>
                                                                <td>

                                                                    <br />
                                                                    {user.date}
                                                                </td>
                                                                <td>
                                                                    <p className="mb-0">
                                                                        Name: {user.employee?.fullName}
                                                                        <br />
                                                                        Mobile no: {user.employee?.phoneNumber}
                                                                        <br />
                                                                        Department: {user.employee?.department}
                                                                        <br />
                                                                        Designation: {user.employee?.designation}
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <p className="mb-0">
                                                                        Date: {user.checkIn?.date}
                                                                        <br />
                                                                        Time: {user.checkIn?.time}
                                                                        <br />
                                                                        Location: {user.checkIn?.locationName}


                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <p className="mb-0">
                                                                        Date: {user.checkOut?.date}
                                                                        <br />
                                                                        Time: {user.checkOut?.time}
                                                                        <br />
                                                                        Location: {user.checkOut?.locationName}

                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <span style={{ color: user.checkIn  ? 'green' : 'red' }}>
                                                                        {user.checkIn  ? 'Present' : 'Absent'}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link
                                                                        to="/profile-list"
                                                                        className="btn ripple  btn-primary btn-xs w-100 mb-1 mt-1"
                                                                    >
                                                                        Profile
                                                                    </Link>
                                                                    <br />

                                                                </td>
                                                            </tr>
                                                        ))}
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

export default Monthss