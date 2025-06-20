import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

const AllAtan = () => {
    const { empid1, empid2, empid3 } = useParams();
    const [users, setUsers] = useState([]);
    const [userFullNames, setUserFullNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/employee/yearlyEmpAttendance/${empid1}/${empid2}/${empid3}`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    formattedDate: item.logs[0]?.date ? formatDateTime(item.logs[0]?.date) : null,
                    formattedDate2: item.logs[0]?.date ? formatDateTime(item.logs[0]?.date) : null,
                }));
                setUsers(formattedData);
            } else {
                console.error('API response error:', data.message || 'Invalid data format');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };


    useEffect(() => {
        fetchDataFromApi()
    }, []);

    const extractFullNames = () => {
        const fullNames = users.map(user => user.employeeDetails?.fullName);
        setUserFullNames(fullNames);
    };

    useEffect(() => {
        extractFullNames();
    }, [users]);


    const keyframes = `
    @keyframes bounce {
      0%, 100% {
        transform: scale(0.9);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.5);
        opacity: 1;
      }
    }
    `;

    const loaderStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        },
        loaderContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
        },
        dot: {
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#3498db',
            animation: 'bounce 1.2s infinite ease-in-out',
        },
    };

    // Inject keyframes into the document
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);



    useEffect(() => {
        const token = localStorage.getItem('Token');

        if (!token) {
            navigate('/');
        }
    }, [navigate]);

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
                                        Attendance <small>({userFullNames.length > 0 ? userFullNames[0] : 'No name available'})</small>
                                    </h2>
                                </div>
                            </div>

                            <div className="row row-sm">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                {loading ? (
                                                    <div style={loaderStyles.overlay}>
                                                        <div style={loaderStyles.loaderContainer}>
                                                            <div style={loaderStyles.dot}></div>
                                                            <div style={{ ...loaderStyles.dot, animationDelay: '0.2s' }}></div>
                                                            <div style={{ ...loaderStyles.dot, animationDelay: '0.4s' }}></div>
                                                        </div>
                                                    </div>
                                                ) : (
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
                                                                <th>Photo</th>
                                                                <th>Employee</th>
                                                                <th> Check-In</th>
                                                                <th>Check-out</th>
                                                                <th>Current Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {users.map((user) => (
                                                                <tr>
                                                                    <td>
                                                                        <label className="ckbox">
                                                                            <input type="checkbox" defaultValue={5} />
                                                                            <span />
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">


                                                                            {user.date}

                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <img
                                                                            alt="avatar"
                                                                            className="rounded-circle me-3"
                                                                            src={user.employeeDetails.profilePhoto}
                                                                            style={{ width: 60 }}
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            Name: {user.employeeDetails.fullName}
                                                                            <br />
                                                                            Phone no:  {user.employeeDetails.phoneNumber}
                                                                            <br />
                                                                            Department: {user.employeeDetails.department}
                                                                            <br />
                                                                            Designation: {user.employeeDetails.designation}
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            {user.logs[0]?.type === "checkIn" ? (
                                                                                <>
                                                                                    {user.formattedDate}
                                                                                    <br />
                                                                                    {user.logs[0]?.locationName}
                                                                                </>
                                                                            ) : (
                                                                                "No checkIn"
                                                                            )}
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            {user.logs[0]?.type === "checkOut" ? (
                                                                                <>
                                                                                    {user.formattedDate2}
                                                                                    <br />
                                                                                    {user.logs[0]?.locationName}
                                                                                </>
                                                                            ) : (
                                                                                "No checkOut"
                                                                            )}
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        {user.logs[0]?.type === "checkIn" && (
                                                                            <>
                                                                                <span style={{ color: 'green' }}>Present</span>
                                                                            </>
                                                                        )}
                                                                        {user.logs[0]?.type !== "checkIn" && user.logs[0]?.type !== "checkOut" && user.logs[0]?.type !== "leave" && (
                                                                            <>
                                                                                <span style={{ color: 'red' }}> Absent</span>

                                                                            </>
                                                                        )}

                                                                        {user.logs[0]?.type === "leave" && (
                                                                            <>
                                                                                <span style={{ color: 'blue' }}>Leave</span>
                                                                            </>
                                                                        )}

                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                )}
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
                                    Copyright © 2024 <a href="javascript:void(0)">Webkype</a>. Designed
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

export default AllAtan