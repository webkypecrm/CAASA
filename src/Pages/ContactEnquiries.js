import React, { useState, useEffect } from 'react';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ContactEnquiries = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    const navigate = useNavigate();
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

    const fetchDataFromApi = async () => {
        setLoading(true);

        const url = `${apiUrl}/enquiry/getEnquiryList`;

        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });

            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {

                setUsers(data.data);
            } else {
                console.error('API response error:', data.message || 'Data is not an array');
            }

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
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
                                    <h2 className="main-content-title tx-24 mg-b-5">Contact Enquiries</h2>

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
                                                    // name="search"
                                                    // value={filterByObj.search}
                                                    // onChange={handleInputChange2}
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
                                                                <th>Name</th>
                                                                <th >Email</th>
                                                                <th >Phone Number</th>
                                                                <th>Country</th>
                                                                <th>State</th>
                                                                <th>City</th>
                                                                <th>Pin Code</th>
                                                                <th>Remark</th>


                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {users.map((user) => (
                                                                <tr >

                                                                    <td >
                                                                        ID: {user.id || 'N/A'}
                                                                        <br />

                                                                        Date: {new Date(user.createdAt || 'N/A').toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }) + ' at ' + new Date(user.createdAt || 'N/A').toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}


                                                                    </td>
                                                                    <td>{user.name || 'N/A'}</td>

                                                                    <td >{user.email || 'N/A'}</td>
                                                                    <td>{user.phoneNumber || 'N/A'}</td>

                                                                    <td >{user.country || 'N/A'}</td>

                                                                    <td >{user.state || 'N/A'}</td>

                                                                    <td>{user.city || 'N/A'}</td>
                                                                    <td>{user.pincode || 'N/A'}</td>
                                                                    <td>{user.remark || 'N/A'}</td>
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
                                    Copyright © 2024 <a href="javascript:void(0)">Webkype</a>. Designed
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

export default ContactEnquiries




