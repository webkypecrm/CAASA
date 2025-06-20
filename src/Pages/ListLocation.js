import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ListLocation = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [locationCount, setLocationCount] = useState('');
    const navigation = useNavigate()
    const navigate = useNavigate()
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const loadcontent = (id) => {
        navigation(`/location-edit/${id}`);
    };

    //delete location
    const deletecontent = (id) => {
        fetch(`${apiUrl}/location/deleteLocation/` + id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${Token}`,
            }
        })
            .then((res) => {
                if (res.ok) {
                    fetchDataFromApi();
                    toast.success("Location deleted successfully");
                } else {
                    throw new Error('Failed to delete');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    //list location data

    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/location/getAllLocation`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            const data = await response.json();
            setLocationCount(data.landCount)
            if (data.status === 'success') {
                if (Array.isArray(data.data)) {
                    const formattedData = data.data.map(item => ({
                        ...item,
                        createdAt: item.createdAt ? formatDateTime(item.createdAt) : null,
                        registryDate: item.registryDate ? formatDateTime(item.registryDate) : null,
                    }));
                    setUsers(formattedData);
                } else {
                    console.error('API response does not contain employeeList array:', data);
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


    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user.locationName.toLowerCase();

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
                                    <h2 className="main-content-title tx-24 mg-b-5">Land List({locationCount})</h2>

                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to="/add-location"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Land
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
                                                                    <table className="table table-striped table-bordered text-nowrap mb-0">
                                                                        <thead >

                                                                            <tr>
                                                                                <th style={{ width: 20 }}>
                                                                                    <label className="ckbox">
                                                                                        <input type="checkbox" defaultValue={5} />
                                                                                        <span />
                                                                                    </label>
                                                                                </th>
                                                                                <th>ID</th>
                                                                                <th>Title</th>
                                                                                <th>Circle Area Name</th>
                                                                                <th>Cost</th>
                                                                                <th>Allocation</th>
                                                                                <th>Land Manager</th>
                                                                                <th>Actions</th>
                                                                            </tr>
                                                                        </thead>

                                                                        <tbody >
                                                                            {filteredUsers.map((user) => (
                                                                                <tr>
                                                                                    <td>
                                                                                        <label className="ckbox">
                                                                                            <input type="checkbox" defaultValue={5} />
                                                                                            <span />
                                                                                        </label>
                                                                                    </td>
                                                                                    <td> {user.id}</td>
                                                                                    <td>
                                                                                        Title (Alias) {user.title}
                                                                                        <br />
                                                                                        Location Address: {user.locationName}
                                                                                        <br />
                                                                                        State: {user.locationState}
                                                                                        <br />
                                                                                        City: {user.locationCity}
                                                                                        <br />
                                                                                        Khasra No: {user.KhasraNo}
                                                                                        <br />
                                                                                        Khatoni No: {user.KhatoniNo}
                                                                                        <br />
                                                                                        Bhumankan No: {user.BhumankanNo}
                                                                                        <br />
                                                                                        Create Date: {user.createdAt}

                                                                                    </td>
                                                                                    <td>
                                                                                        {/* Meters Square: {user.circleRate}
                                                                                        <br /> */}
                                                                                        Area : {user.size}
                                                                                        <br />
                                                                                        1 Beegha In sq.yd: {user.beeghaPerSqft}
                                                                                        <br />
                                                                                        Total Area (sq.yd): {user.sizeInSqft}

                                                                                    </td>
                                                                                    <td>
                                                                                        Land Acquisition Cost: {user.landAcquisitonCost}
                                                                                        <br />
                                                                                        Stamp Duty: {user.stampDuty}
                                                                                        <br />
                                                                                        Registry Cost: {user.registryCost}
                                                                                        <br />
                                                                                        Registry Date: {user.registryDate}
                                                                                        <br />
                                                                                        Registry Tehsil: {user.registryTehsil}
                                                                                        <br />
                                                                                        Registered Name: {user.registryName}
                                                                                        <br />
                                                                                        Registry No: {user.RegistryNo}
                                                                                        <br />
                                                                                        Legal Manager: {user.LegalManager}

                                                                                    </td>
                                                                                    <td>
                                                                                        Area Available For Project: {user.areaAvailableForProject}
                                                                                        <br />
                                                                                        Area Allocate for Project: {user.areaAllocateToProject}
                                                                                        <br />
                                                                                        Salable Area(%) : {user.scalableArea || 'N/A'}
                                                                                    </td>
                                                                                    <td>
                                                                                        Name: {user.landManagerName}
                                                                                        <br />
                                                                                        Email Id: {user.landManagerEmail}
                                                                                        <br />
                                                                                        Phone No: {user.landManagerPhone}
                                                                                        <br />
                                                                                        Role: {user.landManagerRole}
                                                                                        <br />
                                                                                        Dispute (Any): {user.dispute}
                                                                                        <br />
                                                                                    </td>
                                                                                    <td>

                                                                                        <a
                                                                                            onClick={() => deletecontent(user.id)}
                                                                                            className="btn ripple btn-danger btn-xs"
                                                                                        >
                                                                                            <i
                                                                                                className="fa fa-trash"
                                                                                                title="Delete"

                                                                                            />
                                                                                        </a>
                                                                                        &nbsp;
                                                                                        <a onClick={() => loadcontent(user.id)} className="btn ripple btn-dark btn-xs">
                                                                                            <i className="fa fa-edit" title="Enable" />
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

export default ListLocation