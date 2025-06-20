import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SchemeReports = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [showLoader, setShowLoader] = useState(true);
    const [project, setProject] = useState([]);
    const [scame, setScame] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);
    const navigation = useNavigate()
    const navigate = useNavigate()
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const loadcontent = (id) => {
        console.log(id); // Check the value of id
        navigation(`/edid-scheme/${id}`);
    };
    //delete 
    const deletecontent = (id) => {
        fetch(`${apiUrl}/scheme/deleteScheme/` + id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${Token}`,
            }
        })
            .then((res) => {
                if (res.ok) {
                    fetchDataFromApi();
                    toast.success("Scheme deleted successfully");
                } else {
                    throw new Error('Failed to delete');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };


    
 // scame type
 useEffect(() => {
    const Token = localStorage.getItem('Token');

    fetch(`${apiUrl}/master/getAllMasterData/18`, {
        headers: {
            Authorization: `Bearer ${Token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data && Array.isArray(data.data)) {
                setDisplayStatus(data.data);
            } else {
                console.error('API response does not contain an array:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching gender options:', error);
        });
}, []);

    //project api 
    useEffect(() => {
        fetch(`${apiUrl}/project/getAllProjectDropdown`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setProject(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);

    useEffect(() => {
       
        const url = `${apiUrl}/scheme/schemeDropdown`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setScame(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);



    //list location data
    const fetchDataFromApi = () => {
        const Token = localStorage.getItem("Token");
        const apiUrl = process.env.REACT_APP_URL;

        fetch(`${apiUrl}/scheme/getAllSchema`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched data:', data);
                if (data.status === 'success') {
                    if (Array.isArray(data.data)) {
                        setUsers(data.data);
                    } else {
                        console.error('API response does not contain employeeList array:', data);
                    }
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
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

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLoader(false);
        }, 800);

        return () => clearTimeout(timeout);
    }, []);

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
                {showLoader && (
                    <div id="global-loader">
                        <div className="spinner-border text-info loader-img" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
                <TopHeader />
                <Prince />


                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Scheme Reports</h2>

                                </div>

                            </div>
                            {/* End Page Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <input
                                                        type="search"
                                                        className="form-control form-control"
                                                        placeholder="Search..."
                                                        aria-controls="example1"
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-sm-3">
                                                    <select className="form-control select2"

                                                    >
                                                        <option value=''>Select project</option>
                                                        {project.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.projectName}
                                                            </option>
                                                        ))}

                                                    </select>
                                                </div>

                                                <div className="col-sm-3">
                                                    <select className="form-control select2"

                                                    >
                                                        <option value=''>Select Type</option>
                                                        {displayStatus.map((option, index) => (
                                                            <option key={option.id} value={option.name}>
                                                                {option.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-sm-3">
                                                    <select className="form-control select2"

                                                    >
                                                        <option value=''>Select Scheme</option>
                                                        {scame.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.schemeName}
                                                            </option>
                                                        ))}
                                                    </select>
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
                                                                <table className="table table-striped table-bordered  mb-0">
                                                                    <thead className="text-center">
                                                                        <tr>
                                                                            <th style={{ width: 20 }}>
                                                                                <label className="ckbox">
                                                                                    <input type="checkbox" defaultValue={5} />
                                                                                    <span />
                                                                                </label>
                                                                            </th>
                                                                            <th>ID</th>
                                                                            <th >Photo</th>
                                                                            <th>Project</th>
                                                                            <th >Scheme Name </th>
                                                                            <th>Scheme Type</th>
                                                                            <th>Actions</th>
                                                                        </tr>
                                                                    </thead  >
                                                                    <tbody className="text-center">
                                                                        {filteredUsers.map((user) => (
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
                                                                                        src={user.image || 'https://amrsapi.webkype.co/uploads/man404.jpg'}
                                                                                        style={{ width: 60 }}
                                                                                    />
                                                                                </td>
                                                                                <td>

                                                                                    <p className="mb-0">
                                                                                        {user.projectId.projectName}
                                                                                        <br />
                                                                                        Plot: {user.projectId.noOfPlot}
                                                                                        <br />
                                                                                        Shop: {user.projectId.noOfShop}
                                                                                        <br />
                                                                                        House: {user.projectId.noOfFarmHouse}
                                                                                    </p>
                                                                                </td>
                                                                                <td>{user.schemeName}</td>
                                                                                <td>{user.displayStatus}</td>
                                                                                <td>
                                                                                    {/* <a
                                                                                        href=""
                                                                                        className="btn ripple btn-dark btn-xs"
                                                                                    >
                                                                                        <i
                                                                                            className="fa fa-check"
                                                                                            title="Enable"
                                                                                        />
                                                                                    </a>
                                                                                    &nbsp;
                                                                                    <a
                                                                                        href=""
                                                                                        className="btn ripple btn-dark btn-xs "
                                                                                    >
                                                                                        <i className="fa fa-eye" title="View" />
                                                                                    </a>
                                                                                    &nbsp; */}
                                                                                    <a onClick={() => loadcontent(user.id)} className="btn ripple btn-dark btn-xs">
                                                                                        <i className="fa fa-edit" title="Enable" />
                                                                                    </a>
                                                                                    &nbsp;
                                                                                    <a

                                                                                        className="btn ripple btn-danger btn-xs"
                                                                                    >
                                                                                        <i
                                                                                            className="fa fa-trash"
                                                                                            title="Delete"
                                                                                            onClick={() => deletecontent(user.id)}
                                                                                        />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>



                                                                        ))}
                                                                    </tbody>
                                                                </table>
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
                                    Copyright © 2024 <a href="javascript:void(0)">AMRS</a>. Designed
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

export default SchemeReports

