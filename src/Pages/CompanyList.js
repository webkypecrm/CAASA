import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CompanyList = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const loadcontent = (id) => {
        navigation(`/edit-company/${id}`);
    };



    //delete company 
    const deletecontent = (id) => {
        fetch(`${apiUrl}/company/deleteCompany/` + id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${Token}`,
            }
        })
            .then((res) => {
                if (res.ok) {
                    fetchDataFromApi();
                    toast.success("Company deleted successfully");
                } else {
                    throw new Error('Failed to delete');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    //list company data
    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/company/getAllCompany`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.companyList)) {
                setUsers(data.companyList);
            } else {
                console.error('API response error:', data.message || 'Invalid companyList');
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

    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user.contactName.toLowerCase();

        return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase) || user.companyName.includes(searchLowerCase) || user.contactEmail.includes(searchLowerCase);
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

                {/* Main Content*/}
                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Company List</h2>

                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to="/add-company"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Company
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
                                                                <th>
                                                                    <label className="ckbox">
                                                                        <input type="checkbox" defaultValue={5} />
                                                                        <span />
                                                                    </label>
                                                                </th>
                                                                <th>ID</th>
                                                                <th>Photo</th>
                                                                <th>Contact</th>
                                                                <th>Company</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody >
                                                            {filteredUsers.map((user) => (
                                                                <tr style={{ height: '30vh' }}>
                                                                    <td >
                                                                        <label className="ckbox">
                                                                            <input type="checkbox" defaultValue={9} />
                                                                            <span />
                                                                        </label>
                                                                    </td>
                                                                    <td>ID-{user.id}</td>
                                                                    <td>
                                                                        <img
                                                                            alt="avatar"
                                                                            className="rounded-circle me-3"
                                                                            src={user.profilePhoto || 'https://amrsapi.webkype.co/uploads/man404.jpg'}
                                                                            style={{ width: 60 }}
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            {user.contactName || 'N/A'}
                                                                            <br />
                                                                            M: {user.contactMobile || 'N/A'}
                                                                            <br />
                                                                            Email id: {user.contactEmail || 'N/A'}
                                                                            <br />
                                                                            Pan No: {user.panNo || 'N/A'}
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            Company Name: {user.companyName || 'N/A'}
                                                                            <br />
                                                                            Company Email: {user.companyEmail || 'N/A'}
                                                                            <br />
                                                                            Company Phone: {user.companyPhone || 'N/A'}
                                                                            <br />
                                                                            Company Website: {user.companyWebsite || 'N/A'}
                                                                            <br />
                                                                            GST: {user.GST || 'N/A'}
                                                                            <br />
                                                                            Country: {user.country || 'N/A'}
                                                                            <br />
                                                                            State: {user.state || 'N/A'}
                                                                            <br />
                                                                            City: {user.city || 'N/A'}
                                                                            <br />
                                                                            Pin Code: {user.pincode || 'N/A'}


                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <a onClick={() => loadcontent(user.id)} className="btn ripple btn-dark btn-xs">
                                                                            <i className="fa fa-edit" title="Enable" />
                                                                        </a>

                                                                        &nbsp;
                                                                        <a className="btn ripple btn-danger btn-xs"
                                                                            onClick={() => deletecontent(user.id)} >
                                                                            <i className="fa fa-trash" title="Delete" />
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

export default CompanyList