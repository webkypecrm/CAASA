import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConditateEmployee = () => {

    const [filterByObj, setFilterByObj] = useState({
        department: '',
        designation: '',
    });
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [department, setDepartment] = useState([]);
    const [designation, setDesignation] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const loadcontent = (id) => {
        navigate(`/candidate-edit/${id}`);
    };
    const loadcontent2 = (id) => {
        navigate(`/add-staff/${id}`);
    };



    //departments
    useEffect(() => {

        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/1`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setDepartment(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    // Designation
    useEffect(() => {
        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/2`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setDesignation(data.data);

                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching designation options:', error);
            });
    }, []);

    const formatDateTime2 = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };


    //list employee data

    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const { to, from, search, clientName, clientNumber, department, designation } = filterByObj;
            const url = `${apiUrl}/employee/getAllCandidate?id=&mobileNumber=&emailId=&to=${to}&from=${from}&search=${search}&clientName=${clientName}&clientNumber=${clientNumber}&department=${department}&designation=${designation}`;

            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    formattedDate2: item.dob ? formatDateTime2(item.dob) : null,
                }));
                setUsers(formattedData);
            } else {
                console.error('API response error:', data.message || 'Invalid data format');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };


    useEffect(() => {
        fetchDataFromApi()
    }, [filterByObj]);


    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user.fullName.toLowerCase();

        return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase) || user.phoneNumber.includes(searchLowerCase);
    });


    const handleInputChange2 = (event) => {
        const { name, value } = event.target;
        if (name === "search") {

            if (/^\d+$/.test(value)) {
                setFilterByObj(prevState => ({
                    ...prevState,
                    search: value,
                    clientName: '',
                    clientNumber: value
                }));
            } else {
                setFilterByObj(prevState => ({
                    ...prevState,
                    search: value,
                    clientName: value,
                    clientNumber: ''
                }));
            }
        } else {
            setFilterByObj(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
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
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Candidate List</h2>

                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to="/add-candidate"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Candidate
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
                                                <div className="col-sm-6">
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
                                                    <select
                                                        className="form-control select2"
                                                        name="department"
                                                        value={filterByObj.department}
                                                        onChange={handleInputChange2}

                                                    >
                                                        <option value=''>Select Department</option>
                                                        {department.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
                                                    <select
                                                        className="form-control select2"
                                                        name="designation"
                                                        value={filterByObj.designation}
                                                        onChange={handleInputChange2}

                                                    >
                                                        <option value='' >Select Designation</option>
                                                        {designation.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.name}
                                                            </option>
                                                        ))}
                                                    </select>
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
                                                        <thead className="text-center">
                                                            <tr>
                                                                <th className="text-center">
                                                                    <label className="ckbox">
                                                                        <input type="checkbox" defaultValue={5} />
                                                                        <span />
                                                                    </label>
                                                                </th>
                                                                <th>ID</th>
                                                                <th>Photo</th>
                                                                <th>Contact</th>
                                                                <th>Onboarding</th>
                                                                <th>KYC</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-center">
                                                            {filteredUsers.map((user) => (
                                                                <tr>
                                                                    <td>
                                                                        <label className="ckbox">
                                                                            <input type="checkbox" defaultValue={5} />
                                                                            <span />
                                                                        </label>
                                                                    </td>
                                                                    <td>

                                                                        <br />
                                                                        ID-{user.id}

                                                                    </td>
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
                                                                            {user.fullName}
                                                                            <br />
                                                                            M: {user.phoneNumber}
                                                                            <br />
                                                                            DOB: {user.formattedDate2}
                                                                            <br />
                                                                            Email: {user.emailId}
                                                                            <br />
                                                                            Gender: {user.gender}
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            Company name: {user.company}

                                                                            <br />
                                                                            Department:{user.department}
                                                                            <br />
                                                                            Designation:{user.designation}

                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            Resume:{" "}
                                                                            <Link
                                                                                to={user.resume}
                                                                                target='blanck'
                                                                                className="mb-1"
                                                                                title="Resume"

                                                                            >
                                                                                <i className="fe fe-eye" />
                                                                            </Link>

                                                                        </p>
                                                                    </td>
                                                                    <td>

                                                                        <a
                                                                            onClick={() => loadcontent2(user.id)}
                                                                            className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                        >
                                                                            Convert To Staff
                                                                        </a>
                                                                        <br />
                                                                        <a
                                                                            onClick={() => loadcontent(user.id)}
                                                                            className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                        >
                                                                            Edit Profile
                                                                        </a>
                                                                        <br />
                                                                        {/* <a
                                                                        onClick={() => deletecontent(user.id)}
                                                                        className="btn ripple btn-warning btn-xs w-100 "
                                                                    >
                                                                        Delete
                                                                    </a> */}
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

export default ConditateEmployee