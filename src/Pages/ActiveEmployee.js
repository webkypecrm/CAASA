import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActiveEmployee = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [userFullNames, setUserFullNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [values, setValues] = useState("");
    const navigation = useNavigate()
    const navigate = useNavigate()
    const initialFormData = {
        status: '',
        inActiveReason: '',
    };
    const initialFormData2 = {
        status: true,

    };
    const [filterByObj, setFilterByObj] = useState({
        department: '',
        designation: '',

    });

    const [formData2, setFormData2] = useState(initialFormData2);
    const [formData, setFormData] = useState(initialFormData);
    const [department, setDepartment] = useState([]);
    const [designation, setDesignation] = useState([]);
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const loadcontent = (id) => {
        navigation(`/staff-edit/${id}`);
    };
    const loadcontent2 = (id) => {
        navigation(`/target-list/${id}`);
    };
    const loadcontent4 = (id, name) => {
        navigation(`/add-permissions/${id}/${name}`);
    };


    const handleSubmit = async () => {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('status', formData.inActiveReason ? false : true);
            formDataToSend.append('inActiveReason', formData.inActiveReason);

            const response = await fetch(`${apiUrl}/employee/changeStaffStatus/${userFullNames}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
                body: formDataToSend,
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }
            handleCloseModal2();
            fetchDataFromApi()
            setFormData(initialFormData);
            toast.success(response2.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
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


    const handleOpenModal2 = (id) => {
        if (id) {
            setIsModalOpen2(id);
            document.body.classList.add('modal-open');
        }
    };

    const handleCloseModal2 = () => {
        setIsModalOpen2(false);
        document.body.classList.remove('modal-open');
    };

    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };




    //list employee data
    const fetchDataFromApi = async () => {
        setLoading(true);
        const { department, designation } = filterByObj;
        const url = `${apiUrl}/employee/employees?id=&mobileNumber=&emailId=&department=${department}&designation=${designation}`;

        const formDataToSend = new FormData();
        formDataToSend.append('status', formData2.status ? true : '');

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${Token}`,
                },
                body: formDataToSend
            });

            const data = await response.json();
            const values = data.activeEmpCount
            setValues(values);

            if (data.status === 'success') {
                if (Array.isArray(data.data)) {
                    const formattedData = data.data.map(item => ({
                        ...item,
                        formattedDate: item.dateOfJoining ? formatDateTime(item.dateOfJoining) : null,
                        formattedDate2: item.dob ? formatDateTime(item.dob) : null,
                        inActiveDate: item.inActiveDate ? formatDateTime(item.inActiveDate) : null,
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
        fetchDataFromApi();
    }, [filterByObj]);


    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user.fullName.toLowerCase();

        return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase) || user.phoneNumber.includes(searchLowerCase);
    });


    const extractFullNames = () => {
        const fullNames = filteredUsers.map(user => user.id);
        setUserFullNames(fullNames);
    };

    useEffect(() => {
        extractFullNames();
    }, [filteredUsers]);


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
                                    <h2 className="main-content-title tx-24 mg-b-5">Active Employee ({values})</h2>
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

                                                <div className="col-sm-3 form-group">

                                                    <select className="form-control"
                                                        name='department'
                                                        value={filterByObj.department}
                                                        onChange={handleInputChange2}

                                                    >
                                                        <option value="" >Select Department</option>
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
                                                        <option value="">Select Designation</option>
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
                                                        <thead >
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
                                                                <th>Knowledge Transfer</th>
                                                                <th>KYC</th>
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
                                                                    <td>

                                                                        ID-{user.amrsId}
                                                                    </td>
                                                                    <td>
                                                                        <img
                                                                            alt="avatar"
                                                                            className="rounded-circle me-3"
                                                                            src={user.profilePhoto || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
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
                                                                            Company name:{user.company}

                                                                            <br />
                                                                            Department:{user.department}
                                                                            <br />
                                                                            Designation:{user.designation}
                                                                            <br />
                                                                            DOJ: {user.formattedDate}
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        In Active Date: {user.inActiveDate || 'N/A'}
                                                                        <br />
                                                                        Reason: {user.inActiveReason || 'N/A'}
                                                                        <br />
                                                                        Total Leads: {user.totalLead || 'N/A'}
                                                                        <br />
                                                                        Transfer To: {user.leadTransferTo || 'N/A'}
                                                                    </td>

                                                                    <td>
                                                                        <p className="mb-0">
                                                                            Aadhaar:{" "}
                                                                            <Link
                                                                                to={user.aadharUpload}
                                                                                target='blanck'
                                                                                className="mb-1"
                                                                                title="View"

                                                                            >
                                                                                <i className="fe fe-eye" />
                                                                            </Link>
                                                                            <br />
                                                                            C.Cheque:{" "}
                                                                            <Link
                                                                                to={user.cheque}
                                                                                target='blanck'
                                                                                className=" mb-1"
                                                                                title="View"

                                                                            >
                                                                                <i className="fe fe-eye" />
                                                                            </Link>
                                                                            <br />
                                                                            Pan:{" "}
                                                                            <Link
                                                                                to={user.panUpload}
                                                                                target='blanck'
                                                                                className=" mb-1"
                                                                                title="View"

                                                                            >
                                                                                <i className="fe fe-eye" />
                                                                            </Link>
                                                                        </p>
                                                                    </td>
                                                                    <td>

                                                                        <button
                                                                            onClick={() => loadcontent(user.id)}
                                                                            style={{
                                                                                backgroundColor: '#007bff',
                                                                                border: 'none',
                                                                                color: 'white',
                                                                                textAlign: 'center',
                                                                                textDecoration: 'none',
                                                                                display: 'inline-block',
                                                                                fontSize: '12px',
                                                                                cursor: 'pointer',
                                                                                borderRadius: '4px',
                                                                                width: '100%',
                                                                                transition: 'background-color 0.3s, transform 0.3s',
                                                                                fontFamily: 'Arial, sans-serif',
                                                                                marginBottom: '10px'
                                                                            }}
                                                                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                                                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                                                                            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                                                                            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                                            className="ripple btn-xs"
                                                                        >
                                                                            Edit Profile
                                                                        </button>
                                                                        <br />
                                                                        <button
                                                                            onClick={() => loadcontent2(user.id)}
                                                                            style={{
                                                                                backgroundColor: '#007bff',
                                                                                border: 'none',
                                                                                color: 'white',
                                                                                textAlign: 'center',
                                                                                textDecoration: 'none',
                                                                                display: 'inline-block',
                                                                                fontSize: '12px',
                                                                                cursor: 'pointer',
                                                                                borderRadius: '4px',
                                                                                width: '100%',
                                                                                transition: 'background-color 0.3s, transform 0.3s',
                                                                                fontFamily: 'Arial, sans-serif',
                                                                                marginBottom: '10px'
                                                                            }}
                                                                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                                                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                                                                            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                                                                            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                                            className="ripple btn-xs"
                                                                        >
                                                                            Target
                                                                        </button>
                                                                        <br />
                                                                        <button
                                                                            type='button'
                                                                            onClick={() => loadcontent4(user.id, user.fullName)}
                                                                            style={{
                                                                                backgroundColor: '#007bff',
                                                                                border: 'none',
                                                                                color: 'white',
                                                                                textAlign: 'center',
                                                                                textDecoration: 'none',
                                                                                display: 'inline-block',
                                                                                fontSize: '12px',
                                                                                cursor: 'pointer',
                                                                                borderRadius: '4px',
                                                                                width: '100%',
                                                                                transition: 'background-color 0.3s, transform 0.3s',
                                                                                fontFamily: 'Arial, sans-serif',
                                                                                marginTop: '-20px',
                                                                                marginBottom: '10px'
                                                                            }}
                                                                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                                                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                                                                            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                                                                            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                                            className="ripple btn-xs"
                                                                        >
                                                                            Permissions
                                                                        </button>
                                                                        <br />

                                                                        <Link
                                                                            to='/attendance-list'
                                                                            style={{
                                                                                backgroundColor: '#007bff',
                                                                                border: 'none',
                                                                                color: 'white',
                                                                                textAlign: 'center',
                                                                                textDecoration: 'none',
                                                                                display: 'inline-block',
                                                                                fontSize: '12px',
                                                                                cursor: 'pointer',
                                                                                borderRadius: '4px',
                                                                                width: '100%',
                                                                                transition: 'background-color 0.3s, transform 0.3s',
                                                                                fontFamily: 'Arial, sans-serif',
                                                                                marginBottom: '10px'
                                                                            }}
                                                                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                                                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                                                                            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                                                                            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                                            className="ripple btn-xs"
                                                                        >
                                                                            Attendance
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

                <div
                    className={`modal fade ${isModalOpen2 ? 'show d-block' : ''}`}
                    tabIndex="-1"
                    style={{
                        display: isModalOpen2 ? 'flex' : 'none',
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
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '35%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', animation: 'slideIn 0.5s' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Inactive</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal2}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body">
                                <form>
                                    <div className="row row-sm">
                                        <div className="col-sm-12 form-group">
                                            <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <span style={{ marginRight: '5px' }}>⚠️</span> Do you really want to inactive this employee?
                                            </label>
                                        </div>

                                        <div className="col-sm-12 form-group">
                                            <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#007bff', textDecoration: 'underline', marginLeft: '-1px' }}>
                                                Reason
                                            </label>
                                            <textarea
                                                className="form-control"
                                                style={{ height: 60 }}
                                                defaultValue={""}
                                                onChange={handleInputChange}
                                                name="inActiveReason"
                                                value={formData.inActiveReason}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                <button className="btn ripple btn-primary" type="submit" style={{
                                    borderRadius: '5px', padding: '8px 20px',
                                    fontSize: '14px', fontWeight: 'bold'
                                }} onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>
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

export default ActiveEmployee

