import React, { useState, useEffect } from 'react'
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ViewNotifaction = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState({});
    const navigate = useNavigate()
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;


    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        if (isNaN(date)) return "Invalid Date"; 
        return date.toLocaleString('en-IN', options);
    };


    const formatTime = (timeString) => {
        const [hours, minutes] = timeString.split(':');
        const date = new Date(0, 0, 0, parseInt(hours), parseInt(minutes));
        return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    };

    useEffect(() => {
        async function getEmps() {

            const Token = localStorage.getItem("Token");
            let response = await fetch(`${apiUrl}/employee/employee`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            })
            response = await response.json();

            if (response.status === "success") {
                setEmployees(response.data);
            }
        }
        getEmps();
    }, [])

    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/employee/employeeLeadCount`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();
            console.log('Fetched data:', data);

            if (data.status === 'success' && data.data.dashboardReminders.todaySchedule.length > 0) {
                const formattedData = data.data.dashboardReminders.todaySchedule.map(item => ({
                    ...item,
                    formattedCallBackDate: item.callBackDate ? formatDateTime(item.callBackDate) : null,
                    formattedCallBackTime: item.callBackTime ? formatTime(item.callBackTime) : null,
                    formattedCallBackDates: item.meetingDate ? formatDateTime(item.meetingDate) : null,
                    formattedCallBackTimes: item.meetingTime ? formatTime(item.meetingTime) : null
                }));
                setUsers(formattedData);
            } else {
                console.error('No schedule found in API response:', data);
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

                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">All Notifications</h2>
                                </div>
                            </div>

                            <div className="row row-sm">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="text-wrap">
                                                <div className="panel panel-primary tabs-style-3 p-0 tabs-style-3-0">
                                                    <div className="tab-content ">
                                                        <div className="tab-pane active" id="tab11">
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
                                                                                <th className="col-2" >Photo</th>
                                                                                <th className="col-2" >Lead ID</th>

                                                                                <th className="col-3" >Action</th>
                                                                                <th className="col-3"  >Action Date</th>
                                                                                <th className="col-2" >Comment</th>


                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {users.map((user) => (
                                                                                <tr key={user.id}>
                                                                                    {user.type === 'callUpdate' && (
                                                                                        <>
                                                                                            <td>
                                                                                                <img
                                                                                                    alt="avatar"
                                                                                                    className="rounded-circle me-3"
                                                                                                    src={employees.profilePhoto || 'https://amrsapi.webkype.co/uploads/man404.jpg'}
                                                                                                    style={{ width: 60 }}
                                                                                                />
                                                                                            </td>
                                                                                            <td>{user.Lead.employeeId}</td>

                                                                                            <td>Call Schedule</td>
                                                                                            <td>{user.formattedCallBackDate} {user.formattedCallBackTime}</td>
                                                                                            <td>{user.lastCallSummary}</td>


                                                                                        </>
                                                                                    )}
                                                                                    {user.type === 'meetingUpdate' && (
                                                                                        <>
                                                                                            <td>
                                                                                                <img
                                                                                                    alt="avatar"
                                                                                                    className="rounded-circle me-3"
                                                                                                    src={employees.profilePhoto || 'https://amrsapi.webkype.co/uploads/man404.jpg'}
                                                                                                    style={{ width: 60 }}
                                                                                                />
                                                                                            </td>

                                                                                            <td>{user.Lead.employeeId}</td>
                                                                                            <td>Meeting Schedule</td>
                                                                                            <td>{user.formattedCallBackDates} {user.formattedCallBackTimes}</td>
                                                                                            <td>{user.lastCallSummary}</td>


                                                                                        </>
                                                                                    )}
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

export default ViewNotifaction