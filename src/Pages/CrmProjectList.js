import React, { useState, useEffect } from 'react';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const CrmProjectList = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const loadContent = (id) => {
        navigate(`/project-edit/${id}`);
    };

    const deleteContent = (id) => {
        fetch(`${apiUrl}/project/deleteProject/` + id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${Token}`,
            }
        })
            .then((res) => {
                if (res.ok) {
                    fetchDataFromApi();
                    toast.success("Project deleted successfully");
                } else {
                    throw new Error('Failed to delete');
                }
            })
            .catch((err) => {
                console.error(err);
            });
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
            background: 'rgba(255, 255, 255, 0.3)', // Slight transparency for background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        },
        loaderContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',  // Increased gap for better visibility
        },
        dot: {
            width: '20px',  // Increased size for better visibility
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#3498db',  // Bright blue for emphasis
            animation: 'bounce 1.2s infinite ease-in-out',
        },
    };

    // Inject keyframes into the document
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


    const formatDateTimes = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    const fetchDataFromApi = () => {
        setLoading(true);
        const url = `${apiUrl}/crmProject/getAllProject`;
        fetch(url, {
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
                            createdAt: item.createdAt ? formatDateTimes(item.createdAt) : '',
                        }));
                        setUsers(formattedData);
                    } else {
                        console.error('API response does not contain data array:', data);
                    }
                } else {
                    console.error('API request was not successful:', data.message);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        setLoading(false);
    };

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user.projectName.toLowerCase();
        return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase);
    });


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
                                    <h2 className="main-content-title tx-24 mg-b-5">CRM Project List</h2>

                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to='/add-crm-project'
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            <i className="fe fe-plus me-2" /> Add CRM Project
                                        </Link>
                                    </div>
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
                                                                <th style={{ whiteSpace: 'nowrap' }}>Project Image</th>
                                                                <th>EOI Plan</th>
                                                                <th>Project Information</th>
                                                                <th>Inventory</th>
                                                                <th>Date</th>
                                                                <th style={{ whiteSpace: 'nowrap' }}>Provisional Inventory</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {filteredUsers.map((user) => (
                                                                <tr key={user.id}>
                                                                    <td>{user.id}</td>
                                                                    <td>
                                                                        <img
                                                                            alt="avatar"
                                                                            src={user.banner || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                            style={{ width: 60 }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        {Array.isArray(user.projectsubscription) && user.projectsubscription.length > 0 ? (
                                                                            user.projectsubscription.map((subscription, subIndex) => (
                                                                                <div key={subIndex}>
                                                                                    <strong>EOI Type:</strong> {subscription.eoiType}<br />
                                                                                    <strong>EOI Code:</strong> {subscription.eoiCode}<br />
                                                                                    <strong>EOI Price:</strong> {subscription.eoiPrice}<br />
                                                                                    <strong>EOI Terms:</strong> {subscription.eoiTerms}<br />
                                                                                    <br />
                                                                                </div>
                                                                            ))
                                                                        ) : (
                                                                            <div>No EOI details available</div>
                                                                        )}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        <p className="mb-0">
                                                                            Land Name: {user.locationId}
                                                                            <br />
                                                                            Project Name: {user.projectName}
                                                                            <br />
                                                                            Allocated Area: {user.areaAllocateToProject ? `${user.areaAllocateToProject} Beegha` : ''}
                                                                        </p>
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        No Of Plot: {user.noOfPlot}<br />
                                                                        No Of Shop: {user.noOfShop}<br />
                                                                        No Of Farm House: {user.noOfFarmHouse}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        Created Date: {user.createdAt}<br />
                                                                        Created By: {user.creatorId}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        N/A
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        <button className="btn btn-sm btn-info me-2" onClick={() => loadContent(user.id)}>
                                                                            <span className="fe fe-edit"></span>
                                                                        </button>
                                                                        <button className="btn btn-sm btn-danger" onClick={() => deleteContent(user.id)}>
                                                                            <span className="fe fe-trash-2"></span>
                                                                        </button>
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

export default CrmProjectList


