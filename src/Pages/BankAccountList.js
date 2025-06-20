import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BankAccountList = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;



    const deletecontent = (id) => {
        fetch(`${apiUrl}/bank/getAllBankDetails/` + id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${Token}`,
            }
        })
            .then((res) => {
                if (res.ok) {
                    fetchBankDetails();
                    toast.success("Project deleted successfully");
                } else {
                    throw new Error('Failed to delete');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const fetchBankDetails = async () => {
        setLoading(true);
        try {
            const Token = localStorage.getItem("Token");
            const apiUrl = process.env.REACT_APP_URL;

            const response = await fetch(`${apiUrl}/bank/getAllBankDetails`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.bankDetailsList)) {
                setUsers(data.bankDetailsList);
            } else {
                console.error('API response error:', data.message || 'Invalid bankDetailsList');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchBankDetails();
    }, []);

    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();

        // Convert all relevant user properties to lowercase
        const idLowerCase = user.id.toString().toLowerCase();
        const fullNameLowerCase = user.accountName.toLowerCase();
        const accountNumberLowerCase = user.accountNumber.toLowerCase();
        const titleLowerCase = user.title.toLowerCase();
        const bankNameLowerCase = user.bankName.toLowerCase();

        // Perform the comparison
        return idLowerCase.includes(searchLowerCase)
            || fullNameLowerCase.includes(searchLowerCase)
            || accountNumberLowerCase.includes(searchLowerCase)
            || titleLowerCase.includes(searchLowerCase)
            || bankNameLowerCase.includes(searchLowerCase);
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
                {/* Main Header*/}
                <TopHeader />
                <Prince />

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Bank Account List </h2>

                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to='/add-bank-accounts'

                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Bank Account
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
                                                                    <table className="table table-striped table-bordered  mb-0">
                                                                        <thead>
                                                                            <tr>
                                                                                <th style={{ width: 20 }}>
                                                                                    <label className="ckbox">
                                                                                        <input type="checkbox" defaultValue={5} />
                                                                                        <span />
                                                                                    </label>
                                                                                </th>
                                                                                <th style={{ whiteSpace: 'nowrap' }}>ID </th>
                                                                                <th style={{ whiteSpace: 'nowrap' }}>Company Name </th>
                                                                                <th style={{ whiteSpace: 'nowrap' }}>Title</th>
                                                                                <th style={{ whiteSpace: 'nowrap' }}>Account Name</th>
                                                                                <th style={{ whiteSpace: 'nowrap' }}> Account Number</th>
                                                                                <th style={{ whiteSpace: 'nowrap' }}>Bank Name</th>
                                                                                <th style={{ whiteSpace: 'nowrap' }}>Branch</th>
                                                                                <th style={{ whiteSpace: 'nowrap' }}>IFSC Code</th>
                                                                                <th style={{ whiteSpace: 'nowrap' }}>QR Code</th>
                                                                                <th style={{ whiteSpace: 'nowrap' }}>Actions</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {filteredUsers.map((user) => (
                                                                                <tr key={user.id}>
                                                                                    <td>
                                                                                        <label className="ckbox">
                                                                                            <input type="checkbox" defaultValue={5} />
                                                                                            <span />
                                                                                        </label>
                                                                                    </td>
                                                                                    <td>
                                                                                        {user.id}
                                                                                    </td>
                                                                                    <td>
                                                                                        {user.companyName}
                                                                                    </td>
                                                                                    <td>
                                                                                        {user.title}
                                                                                    </td>
                                                                                    <td>
                                                                                        <p className="mb-0">
                                                                                            {user.accountName}
                                                                                        </p>
                                                                                    </td>
                                                                                    <td>
                                                                                        <p className="mb-0">
                                                                                            {user.accountNumber}
                                                                                        </p>
                                                                                    </td>
                                                                                    <td>
                                                                                        <p className="mb-0">
                                                                                            {user.bankName}

                                                                                        </p>
                                                                                    </td>
                                                                                    <td>
                                                                                        <p className="mb-0">
                                                                                            {user.branch}
                                                                                        </p>
                                                                                    </td>
                                                                                    <td>
                                                                                        <p className="mb-0">
                                                                                            {user.ifsc}
                                                                                        </p>
                                                                                    </td>
                                                                                    <td>
                                                                                        <Link to={user.uploadQRCode} title="QR Code" target="blanck">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>

                                                                                    </td>
                                                                                    <td>


                                                                                        <a href="" className="btn ripple btn-info btn-xs w-100 my-1" onClick={() => deletecontent(user.id)} >
                                                                                            Delete
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

export default BankAccountList