
import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AllCustomer from "./AllCustomer";

const RegistryReports = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [formData2, setFormData2] = useState({
        result: 1,
    })
    const [formData, setFormData] = useState({
        schemeType: '',
        projectId: '',
    })

    const [filterByObj, setFilterByObj] = useState({
        from: '',
        to: '',
        projectId: '',
        schemeId: '',
        schemeType: '',

    });
    const [users, setUsers] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [search, setSearch] = useState('');
    const [project, setProject] = useState([]);
    const [scame, setScame] = useState([]);
    const [showLoader, setShowLoader] = useState(true);

    const navigation = useNavigate()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const loadcontent = (id) => {
        navigation(`/edit-customer/${id}`);
    };

    const loadcontent2 = (id) => {
        navigation(`/Inventory-details/${id}`);
    };
    const loadcontent3 = (id) => {
        navigation(`/welcome-letter/${id}`);
    };
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
        const { schemeType, projectId } = formData;
        const url = `${apiUrl}/scheme/schemeDropdown?&schemeType=${schemeType}&projectId=${projectId}`;
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
    }, [formData]);



    const formatDateTimes = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    const fetchDataFromApi = async () => {
        try {
            const url = `${apiUrl}/applicant/registryListing`;
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });
    
            const data = await response.json();
    
            if (data.status === 'success') {
                if (Array.isArray(data.data)) {
                    const formattedData = data.data.map(item => ({
                        ...item,
                        createdAt: item.createdAt ? formatDateTimes(item.createdAt) : '',
                        ticketId: item.applicant && item.applicant.length > 0 ? item.applicant[0].ticketId : null,
                        applicantFirstName: item.applicant && item.applicant.length > 0 ? item.applicant[0].applicantFirstName : null,
                        applicantLastName: item.applicant && item.applicant.length > 0 ? item.applicant[0].applicantLastName : null,
                        applicantEmail: item.applicant && item.applicant.length > 0 ? item.applicant[0].applicantEmail : null,
                        applicantMobile: item.applicant && item.applicant.length > 0 ? item.applicant[0].applicantMobile : null,
                        gift: item.applicant && item.applicant.length > 0 ? item.applicant[0].gift : null,
                        otherGift: item.applicant && item.applicant.length > 0 ? item.applicant[0].otherGift : null,
                    }));
                    setUsers(formattedData);
                } else {
                    console.error('API response does not contain companyList array:', data);
                }
            } else {
                console.error('API request was not successful:', data.message);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataFromApi()
    }, []);


    

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    // const filteredUsers = users.filter((user) => {
    //     const searchLowerCase = search.toLowerCase();
    //     const fullNameLowerCase = user.applicantFirstName.toLowerCase();

    //     return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase)
    //         || user.applicantEmail.includes(searchLowerCase) || user.applicantMobile.includes(searchLowerCase)
    //         || user.ticketId.includes(searchLowerCase);
    // });


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

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Registry
                                    </h2>


                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        {/* <button
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                            onClick={handleSubmit2}
                                        >
                                            {" "}
                                            Download Applicant
                                        </button>
                                        {" "} */}
                                        {/* <Link
                                            to="/add-customer"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Applicant
                                        </Link> */}


                                    </div>
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
                                                        placeholder="Search User..."
                                                        aria-controls="example1"
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-sm-2">
                                                    <select className="form-control select2"
                                                        name="projectId"
                                                        value={filterByObj.projectId}
                                                        onChange={handleInputChange2}
                                                    >
                                                        <option value=''>Select project</option>
                                                        {project.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.projectName}
                                                            </option>
                                                        ))}

                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <select className="form-control select2"
                                                        name="schemeType"
                                                        value={filterByObj.schemeType}
                                                        onChange={handleInputChange2}
                                                    >
                                                        <option value=''>Select Type</option>
                                                        {displayStatus.map((option, index) => (
                                                            <option key={option.id} value={option.name}>
                                                                {option.name}
                                                            </option>
                                                        ))}

                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <select className="form-control select2"
                                                        name="schemeId"
                                                        value={filterByObj.schemeId}
                                                        onChange={handleInputChange2}
                                                    >
                                                        <option value=''>Select Scheme</option>
                                                        {scame.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.schemeName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
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
                                                                dateFormat="dd/MM/yyyy" // Change the date format to dd/MM/yyyy
                                                                className="form-control fc-datepicker"
                                                                style={{ height: '100%', width: '100%' }}
                                                            />
                                                        </div>
                                                    </div>
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
                                                                            <th >Customer Ticket ID</th>
                                                                            <th>Customer Details</th>
                                                                            <th>ALLOTMENT</th>
                                                                            <th>LATTER</th>
                                                                            <th>Actions</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {users.map((user) => (
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
                                                                                    Name: {user.applicantFirstName} {user.applicantLastName}
                                                                                    <br />
                                                                                    Email: {user.applicantEmail}
                                                                                    <br />
                                                                                    Mobile no: {user.applicantMobile}
                                                                                </td>
                                                                                <td>
                                                                                    Unit no: <font color="red">{user.unitNo}</font>
                                                                                    <br />
                                                                                    Area: <font color="red">{user.size}</font>
                                                                                    <br />
                                                                                    Gift: <font color="red"> {user.gift}  {user.otherGift}</font>

                                                                                </td>
                                                                                <td>
                                                                                    Registry view:   <Link to='' target="__blanck" title="Welcome Letter">
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

export default RegistryReports



