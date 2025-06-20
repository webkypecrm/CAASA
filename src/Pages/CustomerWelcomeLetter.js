import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';

const CustomerWelcomeLetter = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


    const loadcontent2 = (id) => {
        navigation(`/Inventory-details/${id}`);
    };

    const formatDateTimes = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };


    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const url = `${apiUrl}/letter/welcomeLetterList`;
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });

            const data = await response.json();

            if (data.status === 'success') {
                if (Array.isArray(data.data)) {
                    const formattedData = data.data.map(item => ({
                        ...item,
                        createdAt: item.createdAt ? formatDateTimes(item.createdAt) : '',
                    }));
                    setUsers(formattedData);
                } else {
                    console.error('API response does not contain companyList array:', data);
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
        fetchDataFromApi()
    }, []);


    const filteredUsers = users.filter(user => {
        if (!user || !user.applicant) return false;

        const searchLowerCase = search.toLowerCase();
        const { ticketId, applicantEmail, applicantMobile, name } = user.applicant;

        return user.id.toString().toLowerCase().includes(searchLowerCase)
            || (name && name.toString().toLowerCase().includes(searchLowerCase))
            || (ticketId && ticketId.toString().toLowerCase().includes(searchLowerCase))
            || (applicantEmail && applicantEmail.toLowerCase().includes(searchLowerCase))
            || (applicantMobile && applicantMobile.toLowerCase().includes(searchLowerCase))
            || (user.name && user.name.toLowerCase().includes(searchLowerCase));
    });

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
                                        All Customer Welcome Letters
                                    </h2>
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
                                                        placeholder="Search User..."
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
                                                                    <table className="table table-striped table-bordered mb-0 text-nowrap">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>
                                                                                    <label className="ckbox">
                                                                                        <input type="checkbox" defaultValue={5} />
                                                                                        <span />
                                                                                    </label>
                                                                                </th>
                                                                                <th>ID</th>
                                                                                <th>Customer Ticket ID</th>
                                                                                <th>Customer Details</th>
                                                                                <th>ALLOTMENT</th>
                                                                                <th>LATTER</th>
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
                                                                                        UID: {user.id}
                                                                                    </td>
                                                                                    <td>
                                                                                        TID: {user.ticketId}
                                                                                    </td>

                                                                                    <td>
                                                                                        Name: {user.name}
                                                                                        <br />
                                                                                        Email: {user && user.applicant && `${user.applicant.applicantEmail}`}
                                                                                        <br />
                                                                                        Mobile no: {user && user.applicant && `${user.applicant.applicantMobile}`}
                                                                                    </td>
                                                                                    <td>
                                                                                        Unit no: <font color="red">{user.unitNumber}</font>
                                                                                        <br />
                                                                                        Area: <font color="red">{user.size}</font>
                                                                                        <br />
                                                                                        Gift: <font color="red">{user.freeGift}</font>

                                                                                    </td>
                                                                                    <td>
                                                                                        Welcome Letter View:   <Link to={`/welCome-latter-views/${user.inventoryFollowUpId}`} target="__blanck" title="Welcome Letter">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        Created By: {user.creatorId}
                                                                                        <br />
                                                                                        Date: {user.createdAt}
                                                                                    </td>
                                                                                    <td style={{ textAlign: "center" }}>
                                                                                        <a className="btn ripple btn-dark btn-xs">
                                                                                            <i className="fa fa-edit" title="Enable" />
                                                                                        </a>
                                                                                        {" "}
                                                                                        {" "}
                                                                                        <a
                                                                                            className="btn ripple btn-danger btn-xs"

                                                                                        >
                                                                                            <i
                                                                                                className="fa fa-trash"
                                                                                                title="Delete"
                                                                                            />
                                                                                        </a>
                                                                                        <br />
                                                                                        <br />

                                                                                        <a
                                                                                            onClick={() => loadcontent2(user && user.applicant && `${user.applicant.id}`)}
                                                                                            className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                        >
                                                                                            Manage
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

export default CustomerWelcomeLetter