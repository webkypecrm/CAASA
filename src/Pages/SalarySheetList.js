import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';



const SalarySheetList = () => {

    const [users, setUsers] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [search, setSearch] = useState('');
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");



    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };


    const onChange2 = (date) => {
        setSelectedDate(date);
        setShowError(false);
    };

    const disableFutureDates = (current) => {
        return current && current > moment().endOf('month');
    };

    const handleSubmit = (e) => {
        if (!selectedDate) {
            e.preventDefault();
            setShowError(true);
        }
    };

    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideIn {
                from { transform: translateY(-300px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes btnFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(styleSheet);
    }, []);

    const formattedDate = selectedDate ? selectedDate.format('MM-YYYY') : '';

    //list company data

    const fetchDataFromApi = () => {
        setLoading(true);
        fetch(`${apiUrl}/salery/salerySheetList`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    if (Array.isArray(data.data)) {
                        setUsers(data.data);
                    } else {
                        console.error('API response does not contain companyList array:', data);
                    }
                } else {
                    console.error('API request was not successful:', data.message);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
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


                {/* Main Content*/}
                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Salary Sheet List</h2>
                                </div>
                                <div className="d-flex">
                                    {/* to="/add-salary-sheet" */}
                                    <div className="justify-content-center">
                                        <button
                                            onClick={handleOpenModal4}
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Breakup Salary Sheet
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div
                                className={`modal fade ${isModalOpen4 ? 'show d-block' : ''}`}
                                tabIndex="-1"
                                style={{
                                    display: isModalOpen4 ? 'flex' : 'none',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    animation: 'fadeIn 0.5s',
                                }}
                            >
                                <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '20%', margin: 'auto' }}>
                                    <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', animation: 'slideIn 0.5s' }}>
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                            <h5 className="modal-title">Generate Salary Sheet </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={handleCloseModal4}
                                                aria-label="Close"
                                                style={{ outline: 'none', cursor: 'pointer' }}
                                            ></button>
                                        </div>

                                        <div className="modal-body">
                                            <form>
                                                <div className="row row-sm">
                                                    <div className="col-sm-12 form-group">
                                                        <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1em', color: '#007bff', marginLeft: '-1px' }}>
                                                            Select Month
                                                        </label>

                                                        <div className="input-group">
                                                            <Space direction="vertical" size={12}>
                                                                <DatePicker
                                                                    onChange={onChange2}
                                                                    picker="month"
                                                                    disabledDate={disableFutureDates}
                                                                    style={{ height: "40px", width: "240px", marginLeft: "auto", color: 'green' }}
                                                                />
                                                            </Space>
                                                        </div>
                                                        {showError && (
                                                            <div style={{ color: 'red', marginTop: '10px', whiteSpace: 'nowrap' }}>
                                                                Please select a month before submitting.
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                            <Link
                                                to={selectedDate ? `/add-salary-sheet/${formattedDate}` : '#'}
                                                className="btn ripple btn-primary"
                                                type="submit"
                                                onClick={handleSubmit}
                                                style={{
                                                    borderRadius: '5px', padding: '8px 20px',
                                                    fontSize: '14px', fontWeight: 'bold',
                                                }}
                                            >
                                                Submit
                                            </Link>{" "}

                                        </div>
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
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                </div>
                                            </div>{" "}
                                        </div>
                                    </div>
                                </div>{" "}
                            </div>
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
                                                        <thead >
                                                            <tr>

                                                                <th>ID</th>
                                                                <th>YEAR</th>
                                                                <th>MONTH</th>
                                                                <th>TOTAL STAFF</th>
                                                                <th>Monthly Salary</th>
                                                                <th>Deduction</th>
                                                                <th>Loan</th>
                                                                <th>Incentive</th>
                                                                <th>Payable salary</th>
                                                                <th>BY</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {users.map((user) => (
                                                                <tr>
                                                                    <td>{user.id}</td>
                                                                    <td>{user?.year || 0}</td>
                                                                    <td>{user?.month || 0}</td>
                                                                    <td>{user?.employeeCount || 0}</td>
                                                                    <td>{user?.totalSalery || 0}</td>
                                                                    <td>{user?.totalDeduction || 0}</td>
                                                                    <td>{user?.totalLoan || 0}</td>
                                                                    <td>{user?.totalIncentive || 0}</td>
                                                                    <td>{user?.totalPaid || 0}</td>
                                                                    <td>{user?.creatorName || 0}</td>

                                                                    <td>
                                                                        <a title="Salary Slip">
                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                        </a>
                                                                        <Link to={`/add-salary-sheet/${String(user.monthId).padStart(2, '0')}-${user.yearId}`}>
                                                                            <i className="fa fa-edit me-3" style={{ cursor: 'pointer' }} />
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

export default SalarySheetList


