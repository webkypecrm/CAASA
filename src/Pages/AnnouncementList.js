import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AnnouncementList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
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
    const formatTime = (timeString) => {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);

        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        return date.toLocaleTimeString('en-IN', options);
    };

    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/announcement/getAnnouncement`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    noticeDate: item.noticeDate ? formatDateTime(item.noticeDate) : null,
                    noticeTime: item.noticeTime ? formatTime(item.noticeTime) : null,
                }));
                setUsers(formattedData);
            } else {
                console.error('API response error:', data.message || 'Invalid data array');
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

    const linkStyle = {
        color: 'blue',
        textDecoration: 'none',
    };

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

            {/* Page */}
            <div className="page">

                <TopHeader />
                <Prince />


                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Announcement List</h2>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to="/announcement"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Announcement
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

                                            </div>
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
                                                                {loading ? (
                                                                    <div style={loaderStyles.overlay}>
                                                                        <div style={loaderStyles.loaderContainer}>
                                                                            <div style={loaderStyles.dot}></div>
                                                                            <div style={{ ...loaderStyles.dot, animationDelay: '0.2s' }}></div>
                                                                            <div style={{ ...loaderStyles.dot, animationDelay: '0.4s' }}></div>
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <table className="table table-striped table-bordered  mb-0">
                                                                        <thead >
                                                                            <tr>
                                                                                <th style={{ width: 20 }}>
                                                                                    <label className="ckbox">
                                                                                        <input type="checkbox" defaultValue={5} />
                                                                                        <span />
                                                                                    </label>
                                                                                </th>
                                                                                <th >ID</th>
                                                                                <th >BANNER</th>
                                                                                <th >Title</th>
                                                                                <th>Category</th>

                                                                                <th style={{ whiteSpace: 'nowrap' }}>Announcement Time/Date</th>
                                                                                <th >Link</th>

                                                                                <th class="col-1">Actions</th>

                                                                            </tr>
                                                                        </thead  >
                                                                        <tbody >
                                                                            {users.map((user) => (
                                                                                <tr>
                                                                                    <td>
                                                                                        <label className="ckbox">
                                                                                            <input type="checkbox" defaultValue={5} />
                                                                                            <span />
                                                                                        </label>
                                                                                    </td>
                                                                                    <td>{user.id}</td>
                                                                                    <td>
                                                                                        <img
                                                                                            alt="avatar"
                                                                                            className="rounded-circle me-3"
                                                                                            src={user.banner || 'https://amrsapi.webkype.co/uploads/man404.jpg'}
                                                                                            style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '50%' }}
                                                                                        />
                                                                                    </td>
                                                                                    <td>
                                                                                        {user.title}

                                                                                    </td>
                                                                                    <td>{user.category}</td>

                                                                                    <td style={{ whiteSpace: 'nowrap' }}>{user.noticeDate} {user.noticeTime}</td>
                                                                                    <td>

                                                                                        <a href={user.link} style={linkStyle} target="_blank">{user.link}</a>
                                                                                    </td>
                                                                                    <td>

                                                                                        <a className="btn ripple btn-dark btn-xs">
                                                                                            <i className="fa fa-edit" title="Enable" />
                                                                                        </a>
                                                                                        &nbsp;
                                                                                        <a

                                                                                            className="btn ripple btn-danger btn-xs"
                                                                                        >
                                                                                            <i
                                                                                                className="fa fa-trash"
                                                                                                title="Delete"
                                                                                            // onClick={() => deletecontent(user.id)}
                                                                                            />
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

export default AnnouncementList

