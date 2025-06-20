import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

const YearList = () => {

    const [users, setUsers] = useState([]);
    const [userFullNames, setUserFullNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate()
    const navigate = useNavigate()
    const { empid } = useParams();
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;


    const loadcontent = (id, month, year) => {
        navigation(`/attendance-list/${id}/${month}/${year}`);
    };

    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/employee/yearlyAttendanceCount/${empid}`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();
            console.log('Fetched data:', data);

            if (data.status === 'success' && Array.isArray(data.data)) {
                setUsers(data.data);
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
        const fullNames = users.map(user => user.employee.fullName);
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
                                        Attendance List <small>({userFullNames.length > 0 ? userFullNames[0] : 'No name available'})</small>
                                    </h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
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
                                                                <th>ID</th>
                                                                <th>Photo</th>
                                                                <th>Employee</th>
                                                                <th>Month</th>
                                                                <th>Attendance</th>
                                                                <th>Actions</th>
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
                                                                        ID-{user.employee.id}
                                                                    </td>
                                                                    <td>
                                                                        <img
                                                                            alt="avatar"
                                                                            className="rounded-circle me-3"
                                                                            src={user.employee.profilePhoto || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                            style={{ width: 60 }}
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            Name: {user.employee.fullName}
                                                                            <br />
                                                                            Phone no : {user.employee.phoneNumber}
                                                                            <br />
                                                                            Department: {user.employee.department}
                                                                            <br />
                                                                            Designation: {user.employee.designation}
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0 badge bg-pill bg-primary-light text-center">
                                                                            {" "}
                                                                            {user.monthName} {user.year}
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            Present :<span className="text-success"> {user.present}</span>
                                                                            <br />
                                                                            Absent :
                                                                            <span className="text-secondary"> {user.absent}</span>
                                                                            <br />
                                                                            Leave :<span className="text-info"> {user.leave}</span>
                                                                            {/* <br />
                                                                        Un-Informed : 00 */}
                                                                        </p>
                                                                    </td>
                                                                    <td>


                                                                        <a
                                                                            onClick={() => loadcontent(user.employee.id, user.month, user.year)}
                                                                            className="btn ripple btn-xs btn-warning w-100 mb-1"
                                                                        >
                                                                            View Log
                                                                        </a>
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

export default YearList