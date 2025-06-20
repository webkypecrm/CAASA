import React, { useState, useEffect } from 'react';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const UserApplicant = () => {

    const [users, setUsers] = useState([]);
    const [leadCount, setLeadCount] = useState(0);
    const [leadCounts, setLeadCounts] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(50);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filterByObj, setFilterByObj] = useState({
        search: '',
        from: '',
        to: '',
    });

    const navigate = useNavigate();
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const handleChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);

        // Format the start and end dates if they are not null
        const formatDate = (date) => {
            if (date) {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}/${month}/${day}`;
            }
            return '';
        };

        // Update the filterByObj state with the formatted date range
        const formattedStartDate = formatDate(start);
        const formattedEndDate = formatDate(end);


        setFilterByObj(prevState => ({
            ...prevState,
            from: `${formattedStartDate}`,
            to: `${formattedEndDate}`
        }));
    };


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
        const pageNumber = currentPage + 1;
        const { to, from, search } = filterByObj;
        const url = `${apiUrl}/user/newUserOtpList?page=${pageNumber}&limit=${itemsPerPage}&to=${to}&from=${from}&search=${search}&webUser=true`;

        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });

            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    createdAt: item.createdAt ? formatDateTime(item.createdAt) : '',
                }));
                setUsers(formattedData);
            } else {
                console.error('API response error:', data.message || 'Data is not an array');
            }
            const fetchedLeadCount = data.userCount;
            setLeadCount(fetchedLeadCount);
            setLeadCounts(data.user);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchDataFromApi();
    }, [currentPage, itemsPerPage, filterByObj]);


    const handleApproved = async (id) => {
        try {
            const url = `${apiUrl}/user/userVerifyFromAdmin?userId=${id}`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }

            // Open the modal and then close it

            fetchDataFromApi();
            toast.success(response2.message);


        } catch (error) {
            toast.error(error.message);
        }
    };


    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const currentPageData = users;

    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);


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
                                    <h2 className="main-content-title tx-24 mg-b-5">New Sign Up Otp List ({leadCount})</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="">All the New User Sign up Otp List </Link>
                                        </li>
                                    </ol>
                                </div>

                            </div>




                            {!leadCounts === true &&
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card custom-card">
                                            <div className="card-body py-3">
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="search"
                                                            className="form-control"
                                                            placeholder="Search..."
                                                            aria-controls="example1"
                                                            name="search"
                                                            value={filterByObj.search}
                                                            onChange={handleInputChange2}
                                                        />
                                                    </div>

                                                    <div className="col-sm-4">
                                                        <div className="input-group">
                                                            <div className="input-group-text border-end-0">
                                                                <i className="fe fe-calendar lh--9 op-6" />
                                                            </div>
                                                            <div style={{ flex: '1' }}>
                                                                <DatePicker
                                                                    selected={startDate}
                                                                    onChange={handleChange}
                                                                    startDate={startDate}
                                                                    endDate={endDate}
                                                                    selectsRange
                                                                    placeholderText="Select Date Range"
                                                                    dateFormat="dd/MM/yyyy"
                                                                    className="form-control fc-datepicker"
                                                                    style={{ height: '100%', width: '100%' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }

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
                                                                <th style={{ whiteSpace: 'nowrap' }}>MOBILE DETAILS</th>
                                                                <th style={{ whiteSpace: 'nowrap' }} >OTP DETAILS</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {currentPageData.map((user) => (
                                                                <tr >

                                                                    <td >
                                                                        ID: {user.id || 'N/A'}
                                                                        <br />
                                                                        {/* <span style={{ whiteSpace: 'nowrap' }}>Created At: {user.createdAt
                                                                            ? new Intl.DateTimeFormat('en-US', {
                                                                                day: '2-digit',
                                                                                month: 'long',
                                                                                year: 'numeric',
                                                                                hour: '2-digit',
                                                                                minute: '2-digit',
                                                                                hour12: true,
                                                                            }).format(new Date(user.createdAt))
                                                                            : 'N/A'}
                                                                        </span>
                                                                       */}
                                                                    </td>
                                                                    <td>
                                                                        Moile No: {user.mobileNumber || 'N/A'}

                                                                    </td>

                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        OTP:  {user.otp || 'N/A'}

                                                                        <br />
                                                                        <span style={{ whiteSpace: 'nowrap' }}>Expire At: {user.expiresAt
                                                                            ? new Intl.DateTimeFormat('en-US', {
                                                                                day: '2-digit',
                                                                                month: 'long',
                                                                                year: 'numeric',
                                                                                hour: '2-digit',
                                                                                minute: '2-digit',
                                                                                hour12: true,
                                                                            }).format(new Date(user.expiresAt))
                                                                            : 'N/A'}
                                                                        </span>
                                                                    </td>

                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                )}
                                                <br />


                                                {!leadCounts === true &&
                                                    <>
                                                        <div className="d-flex align-items-center ">
                                                            <div >

                                                                <select
                                                                    id="itemsPerPage"
                                                                    className="form-select"
                                                                    value={itemsPerPage}
                                                                    onChange={handleItemsPerPageChange}
                                                                >
                                                                    <option value={20}>20</option>
                                                                    <option value={50}>50</option>
                                                                    <option value={100}>100</option>
                                                                    <option value={200}>200</option>
                                                                    <option value={500}>500</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="pagination d-flex justify-content-center">
                                                            <ReactPaginate
                                                                previousLabel={'Previous'}
                                                                nextLabel={'Next'}
                                                                breakLabel={'...'}
                                                                breakClassName={'break-me'}
                                                                pageCount={Math.ceil(leadCount / itemsPerPage)}
                                                                marginPagesDisplayed={2}
                                                                pageRangeDisplayed={5}
                                                                onPageChange={handlePageClick}
                                                                containerClassName={'pagination'}
                                                                activeClassName={'active'}
                                                                previousLinkClassName={'page-link'}
                                                                nextLinkClassName={'page-link'}
                                                                disabledClassName={'disabled'}
                                                                pageClassName={'page-item'}
                                                                pageLinkClassName={'page-link'}
                                                            />
                                                        </div>
                                                    </>
                                                }

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
                                    Copyright © 2024 <a href="javascript:void(0)">Caasaa</a>. Designed
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

export default UserApplicant


