import React, { useState, useEffect } from 'react';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';


const LeadDownloadList = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;


    const formatDateTime = (dateTimeString) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit',

        };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    const formatDateTimes = (dateTimeString) => {
        const options = {

            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    const fetchDataFromApi = async () => {
        setLoading(true);
        const url = `${apiUrl}/lead/leadDownLoadLog`;

        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            const data = await response.json();

            if (data.status === 'success') {
                if (Array.isArray(data.data)) {
                    const formattedData = data.data.map(item => ({
                        ...item,
                        downloadTime: item.downloadTime ? formatDateTime(item.downloadTime) : '',
                        downloadTimes: item.downloadTime ? formatDateTimes(item.downloadTime) : '',
                    }));
                    setUsers(formattedData);
                } else {
                    console.error('API response does not contain data array:', data);
                }
            } else {
                console.error('API request was not successful:', data.message);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };


    useEffect(() => {
        fetchDataFromApi();
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
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Lead Download List</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <input
                                                        type="search"
                                                        className="form-control"
                                                        placeholder="Search..."
                                                        aria-controls="example1"
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                    <table className="table table-striped table-bordered mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th style={{ whiteSpace: 'nowrap' }}>Download By</th>
                                                                <th>Date</th>
                                                                <th>Time</th>
                                                                <th>Data</th>
                                                                <th>OTP</th>
                                                                <th style={{ whiteSpace: 'nowrap' }}>Send To (Khushal Chopra)</th>
                                                                <th style={{ whiteSpace: 'nowrap' }}>Verified</th>
                                                                <th style={{ whiteSpace: 'nowrap' }}>View Excel File</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {users.map((user) => (
                                                                <tr >
                                                                    <td>
                                                                        {user.id}
                                                                    </td>
                                                                    <td>
                                                                        {user.employeeId}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        {user.downloadTime}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        {user.downloadTimes}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        {user.leadCount}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        {user.otp}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        {user.otpReceiver}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        {user.status}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        <Link to={user.downloadUrl} title="View Excel File" target='__blanck'>
                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                        </Link>
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
                        </div>
                    </div>
                </div>
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
            </div>

        </>
    );
};

export default LeadDownloadList


