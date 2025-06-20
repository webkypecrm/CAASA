import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListScheme = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [secheme, setSecheme] = useState('');
    const navigation = useNavigate()
    const navigate = useNavigate()
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const loadcontent = (id) => {
        navigation(`/edid-scheme/${id}`);
    };

    //delete 
    const deleteContent = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/scheme/deleteScheme/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${Token}`,
                },
            });

            if (response.ok) {
                fetchDataFromApi();
                toast.success("Scheme deleted successfully");
            } else {
                throw new Error('Failed to delete');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    //list Scheme data
    const fetchDataFromApi = async () => {
        setLoading(true);
        const stripHtmlTags = (str) => str?.toString().replace(/(<([^>]+)>)/ig, '') || '';

        try {
            const response = await fetch(`${apiUrl}/scheme/getAllSchema`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            const data = await response.json();
            setSecheme(data.schemeCount)

            if (data.status === 'success' && Array.isArray(data.data)) {
                const cleanedData = data.data.map(item => ({
                    ...item,
                    schemeName: stripHtmlTags(item.schemeName),
                    createdAt: item.createdAt ? formatDateTime(item.createdAt) : null,
                }));
                setUsers(cleanedData);
            } else {
                console.error('API response was not successful or does not contain an array:', data.message || data);
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

    // Filtered users remain the same
    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user.schemeName.toLowerCase();

        return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase);
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
                                    <h2 className="main-content-title tx-24 mg-b-5">Scheme List({secheme})</h2>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to="/add-scheme"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Scheme
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
                                                                                <th >Photo</th>
                                                                                <th >Scheme Name</th>
                                                                                <th > Mapped Project</th>

                                                                                <th >Actions</th>

                                                                            </tr>
                                                                        </thead  >
                                                                        <tbody >
                                                                            {filteredUsers.map((user) => {
                                                                                return (
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
                                                                                                // className="rounded-circle me-3"
                                                                                                src={user.image || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                                                style={{ width: 70 }}
                                                                                            />
                                                                                        </td>
                                                                                        <td>{user.schemeName}
                                                                                            <br />
                                                                                            Created Date: {user.createdAt}
                                                                                        </td>
                                                                                        <td style={{ whiteSpace: 'nowrap', padding: '15px', border: '1px solid #ddd', fontFamily: 'Roboto, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#333' }}>
                                                                                            {Array.isArray(user.schemeProject) && user.schemeProject.length > 0 ? (
                                                                                                user.schemeProject.map((subscription, subIndex) => (
                                                                                                    <div key={subIndex} style={{ marginBottom: '12px' }}>
                                                                                                        <strong>{subscription?.project?.projectName}</strong> (
                                                                                                        {subscription?.project?.noOfShop > 0 ? 'Shop' : 'N/A'}{" "}
                                                                                                        | {subscription?.project?.noOfPlot > 0 ? 'Plot' : 'N/A'}{" "}
                                                                                                        | {subscription?.project?.noOfFarmHouse > 0 ? 'FarmHouse' : 'N/A'}
                                                                                                        ) | {subscription?.project?.size || 'N/A'} Bheegha | Land Name:{" "}
                                                                                                        {subscription?.project?.location?.locationName || 'N/A'} | Total Unit:{" "}
                                                                                                        {parseInt(subscription?.project?.noOfShop) + parseInt(subscription?.project?.noOfPlot) + parseInt(subscription?.project?.noOfFarmHouse)}
                                                                                                    </div>
                                                                                                ))
                                                                                            ) : (
                                                                                                <div>No Mapped Project available</div>
                                                                                            )}
                                                                                        </td>



                                                                                        <td>
                                                                                            <span style={{ display: 'block', marginBottom: '10px' }}>
                                                                                                <a onClick={() => loadcontent(user.id)} className="btn ripple btn-dark btn-xs" style={{ marginRight: '10px' }}>
                                                                                                    <i className="fa fa-edit" title="Enable" />
                                                                                                </a>
                                                                                            </span>
                                                                                            <span style={{ display: 'block' }}>
                                                                                                <a className="btn ripple btn-danger btn-xs">
                                                                                                    <i
                                                                                                        className="fa fa-trash"
                                                                                                        title="Delete"
                                                                                                        onClick={() => deleteContent(user.id)}
                                                                                                    />
                                                                                                </a>
                                                                                            </span>
                                                                                        </td>

                                                                                    </tr>
                                                                                );
                                                                            })}

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
                                    Copyright © 2024 <a href="javascript:void(0)">Caasaa</a>. Designed
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

export default ListScheme