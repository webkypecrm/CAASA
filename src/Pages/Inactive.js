import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inactive = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [userFullNames, setUserFullNames] = useState([]);
    const [userFullNames2, setUserFullNames2] = useState([]);
    const [showLoader, setShowLoader] = useState(true);

    const [filterByObj, setFilterByObj] = useState({
        department: '',
        designation: '',
    });

    const navigation = useNavigate()
    const navigate = useNavigate()
    const initialFormData = {
        status: '',
        inActiveReason: '',
    };
    const initialFormData2 = {
        status: '',

    };

    const [formData2, setFormData2] = useState(initialFormData2);

    const [formData, setFormData] = useState(initialFormData);
    const [department, setDepartment] = useState([]);
    const [designation, setDesignation] = useState([]);
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const loadcontent = (id) => {
        navigation(`/employee-edit/${id}`);
    };
    const loadcontent2 = (id) => {
        navigation(`/year-list/${id}`);
    };
    const handleSubmit = async () => {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('status', formData.inActiveReason ? true : false);
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

    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };
    const formatDateTime2 = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    const fetchDataFromApi = () => {
        const { department, designation } = filterByObj;
        const url = `${apiUrl}/employee/employees?id=&mobileNumber=&emailId=&department=${department}&designation=${designation}`;
        const formDataToSend = new FormData();
        formDataToSend.append('status', formData2.status ? false : false);

        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${Token}`,
            },
            body: formDataToSend
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched data:', data);
                if (data.status === 'success') {
                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            formattedDate: item.dateOfJoining ? formatDateTime(item.dateOfJoining) : null,
                            formattedDate2: item.dob ? formatDateTime2(item.dob) : null,

                        }));
                        setUsers(formattedData);

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
        fetchDataFromApi()
    }, [filterByObj]);

    // Filtered users remain the same
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



                {/* Main Content*/}
                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Inactive List</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">HRMS </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Employee List{" "}
                                        </li>
                                    </ol>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to="/add-employee"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Employee
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
                                                                    <p className="mb-0">
                                                                        Aadhaar:{" "}
                                                                        <a
                                                                            href={user.aadharUpload}
                                                                            target='blanck'
                                                                            className="mb-1"
                                                                            title="View"

                                                                        >
                                                                            <i className="fe fe-eye" />
                                                                        </a>
                                                                        <br />
                                                                        C.Cheque:{" "}
                                                                        <a
                                                                            href={user.cheque}
                                                                            target='blanck'
                                                                            className=" mb-1"
                                                                            title="View"

                                                                        >
                                                                            <i className="fe fe-eye" />
                                                                        </a>
                                                                        <br />
                                                                        Pan:{" "}
                                                                        <a
                                                                            href={user.panUpload}
                                                                            target='blanck'
                                                                            className=" mb-1"
                                                                            title="View"

                                                                        >
                                                                            <i className="fe fe-eye" />
                                                                        </a>
                                                                    </p>
                                                                </td>
                                                                <td>




                                                                    <button
                                                                        onClick={() => {
                                                                            // console.log("User ID:", user.id);
                                                                            handleOpenModal2(user.id);
                                                                        }}
                                                                        className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                    >
                                                                        Active
                                                                    </button>

                                                                    <div
                                                                        className={`modal fade ${isModalOpen2 ? 'show d-block' : ''}`}

                                                                        tabIndex="-1"
                                                                        style={{ display: isModalOpen2 ? 'block' : 'none', backdropFilter: isModalOpen2 ? 'blur(1px)' : 'none' }}
                                                                    >

                                                                        <div className="modal-dialog modal-md">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header">
                                                                                    <h5 className="modal-title">Active</h5>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn-close"
                                                                                        onClick={handleCloseModal2}
                                                                                        aria-label="Close"
                                                                                    ></button>
                                                                                </div>

                                                                                <div className="modal-body">
                                                                                    <form>
                                                                                        <div className="row row-sm">
                                                                                            <div className="col-sm-12 form-group">

                                                                                                <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                                                    <span style={{ marginRight: '5px' }}>⚠️</span> Do you really want to active this employee ?
                                                                                                </label>



                                                                                            </div>

                                                                                            <div className="col-sm-12 form-group">
                                                                                                <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#007bff', textDecoration: 'underline', marginLeft: '-30px' }}>
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
                                                                                <div className="modal-footer">
                                                                                    <button onClick={

                                                                                        handleSubmit
                                                                                    }>
                                                                                        Submit
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <br />
                                                                    <a
                                                                        onClick={() => loadcontent(user.id)}
                                                                        className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                    >
                                                                        Edit Profile
                                                                    </a>
                                                                    <br />
                                                                    {/* <a
                                                                        onClick={() => loadcontent2(user.id)}
                                                                        className="btn ripple btn-info btn-xs w-100"
                                                                    >
                                                                       Attendance List
                                                                    </a> */}

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


            <div className="modal" id="bulk-upload">
                <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content modal-content-demo">
                        <div className="modal-header">
                            <h6 className="modal-title">Import Leads</h6>
                            <button
                                aria-label="Close"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                type="button"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row row-sm">
                                <div className="col-lg-12 form-group">
                                    <label className="form-label">
                                        File Picker: <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control"
                                        name="lastname"
                                        placeholder="Enter"
                                        required=""
                                        type="file"
                                    />
                                </div>
                            </div>
                            <div className="row row-sm">
                                <div className="col-12 mb-3">
                                    <a href="#" className="btn btn-primary" type="submit">
                                        Upload
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Large Modal */}
                </div>
            </div>


            <a href="#top" id="back-to-top">
                <i className="fe fe-arrow-up" />
            </a>

        </>

    )
}

export default Inactive