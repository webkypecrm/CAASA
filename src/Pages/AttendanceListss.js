import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
const AttendanceListss = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [formattedDate, setFormattedDate] = useState('');
    const [isModalOpen16, setIsModalOpen16] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [filterByObj, setFilterByObj] = useState({
        to: '',
        from: '',
        empId: '',
    });

    const initialFormData = {
        isPayed: '',
        remark: '',
    };

    const initialFormData2 = {
        disApproveReason: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [formData2, setFormData2] = useState(initialFormData2);
    const [selectedOption, setSelectedOption] = useState('option1');
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedUserIds, setSelectedUserIds] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [reportingBossA, setReportingBossA] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const handleOpenModal16 = (userId) => {
        setSelectedUserId(userId);
        setIsModalOpen16(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal16 = () => {
        setIsModalOpen16(false);
        document.body.classList.remove('modal-open');
    };

    const handleOpenModal4 = (userId) => {
        setSelectedUserIds(userId);
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };
    const handleCloseModal4 = () => {

        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };

    const checkboxStyle2 = {
        accentColor: 'green',
        marginLeft: '10px'
    };

    const handleOptionChange = (event) => {
        const { value } = event.target;
        setSelectedOption(value);
        setFormData({
            ...formData,
            isPayed: value === 'option1' ? 'true' : 'false',
        });
    }

    const handleInputChange3 = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData2({
            ...formData2,
            [name]: value,
        });
    }


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

    const handleInputChangee = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const Token = localStorage.getItem('Token');
                const headers = Token ? { Authorization: `Bearer ${Token}` } : {};

                // Fetch reporting boss data
                let response = await fetch(`${apiUrl}/employee/allEmpDesig`, { headers });
                let data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setReportingBossA(data.data);
                } else {
                    console.error('API response does not contain an array for reporting bosses:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        // Current date
        const currentDate = new Date();

        const formattedDate = currentDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        setFormattedDate(formattedDate);
    }, []);


    const getEmp = async () => {
        const url = `${apiUrl}/employee/leaveApprovel?id=${selectedUserId}&isApprove=true&isPayed=${formData.isPayed}&remark=${formData.remark}`;

        try {
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            response = await response.json();

            if (response.status === "success") {
                fetchDataFromApi();
                handleCloseModal16();
                setFormData(initialFormData);
                setSelectedOption('');
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };



    const getEmpp = async () => {
        const url = `${apiUrl}/employee/leaveApprovel?id=${selectedUserIds}&isApprove=false&disApproveReason=${formData2.disApproveReason}`;

        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        });

        response = await response.json();

        if (response.status === "success") {
            fetchDataFromApi()
            handleCloseModal4()
            setFormData2(initialFormData2);
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
    };

    const formatDateTime = (dateTimeString) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit',

        };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const { to, from, empId } = filterByObj;
            const url = `${apiUrl}/employee/leaveList?from=${from}&to=${to}&empId=${empId}`;

            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            const data = await response.json();

            if (data.status === 'success') {
                const formattedData = data.data.map((item) => {
                    const obj = {
                        ...item,
                        date: item.date ? formatDateTime(item.date) : null,

                    }

                    return obj
                });
                setUsers(formattedData);

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
        const fullNameLowerCase = user.employee.fullName.toLowerCase();

        return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase) ||
            user.employee.phoneNumber.includes(searchLowerCase);
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

                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Leave Attendance List <small>({formattedDate}) </small>
                                    </h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Employee</label>
                                                    <select
                                                        className="form-control select2"
                                                        name="empId"
                                                        value={filterByObj.empId}
                                                        onChange={handleInputChangee}
                                                    >
                                                        <option value="">Select</option>
                                                        {reportingBossA.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.fullName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>


                                                <div className="col-sm-6">
                                                    <label className="form-label">Select Date Form/To</label>
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
                                                                dateFormat="dd/MM/yyyy"
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
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <label className="ckbox">
                                                                        <input type="checkbox" defaultValue={5} />
                                                                        <span />
                                                                    </label>
                                                                </th>
                                                                <th >ID</th>
                                                                <th >Photo</th>
                                                                <th >Employee</th>
                                                                <th >Current Status</th>
                                                                <th >Action</th>

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
                                                                        ID-{user.id}
                                                                    </td>
                                                                    <td>
                                                                        <img
                                                                            alt="avatar"
                                                                            className="rounded-circle me-3"
                                                                            src={user.employee?.profilePhoto || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                            style={{ width: 60 }}
                                                                        />
                                                                    </td>

                                                                    <td>
                                                                        <p className="mb-0">
                                                                            Name: {user.employee.fullName}
                                                                            <br />
                                                                            Phone no: {user.employee.phoneNumber}
                                                                            <br />
                                                                            Designation: {user.employee.designation}
                                                                        </p>
                                                                    </td>

                                                                    <td>
                                                                        {user.type === "leave" && (
                                                                            <>
                                                                                <span style={{ color: 'blue' }}>Leave</span>
                                                                            </>
                                                                        )}
                                                                    </td>

                                                                    <td style={{ width: 30 }}>
                                                                        {user.date}
                                                                        <br />

                                                                        {user.type === "leave" && (
                                                                            <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                                                                                {user.isLeaveApproved === false ? (
                                                                                    <a
                                                                                        className="btn ripple btn-xs"

                                                                                        onClick={() => handleOpenModal16(user.id)}
                                                                                        style={{
                                                                                            flex: 1.4,
                                                                                            color: '#fff',
                                                                                            textAlign: 'center',
                                                                                            transition: 'all 0.3s ease',
                                                                                            transform: 'scale(1)',
                                                                                            backgroundColor: '#28a745',
                                                                                            borderRadius: '5px',
                                                                                        }}
                                                                                        onMouseEnter={(e) => {
                                                                                            e.currentTarget.style.transform = 'scale(1.05)';
                                                                                            e.currentTarget.style.backgroundColor = '#218838';
                                                                                        }}
                                                                                        onMouseLeave={(e) => {
                                                                                            e.currentTarget.style.transform = 'scale(1)';
                                                                                            e.currentTarget.style.backgroundColor = '#28a745';
                                                                                        }}
                                                                                    >
                                                                                        Approve
                                                                                    </a>
                                                                                ) : (
                                                                                    <span style={{ color: 'green', fontWeight: 'bold', marginRight: '10px' }}>Approved</span>
                                                                                )}
                                                                                <br />
                                                                                <a
                                                                                    className="btn ripple btn-xs"
                                                                                    onClick={() => handleOpenModal4(user.id)}

                                                                                    style={{
                                                                                        flex: 1.8,
                                                                                        color: '#fff',
                                                                                        textAlign: 'center',
                                                                                        transition: 'all 0.3s ease',
                                                                                        transform: 'scale(1)',
                                                                                        backgroundColor: '#dc3545',
                                                                                        borderRadius: '5px',
                                                                                    }}
                                                                                    onMouseEnter={(e) => {
                                                                                        e.currentTarget.style.transform = 'scale(1.05)';
                                                                                        e.currentTarget.style.backgroundColor = '#c82333';
                                                                                    }}
                                                                                    onMouseLeave={(e) => {
                                                                                        e.currentTarget.style.transform = 'scale(1)';
                                                                                        e.currentTarget.style.backgroundColor = '#dc3545';
                                                                                    }}
                                                                                >
                                                                                    Not Approve
                                                                                </a>
                                                                            </div>
                                                                        )}

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
                    className={`modal fade ${isModalOpen16 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{
                        display: isModalOpen16 ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered modal-xl"
                        style={{ maxWidth: '30%', margin: 'auto' }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <div
                                className="modal-header"
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    borderBottom: '1px solid #dee2e6',
                                    borderRadius: '10px 10px 0 0'
                                }}
                            >
                                <h5 className="modal-title">Leave</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal16}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body" style={{ padding: '20px' }}>
                                <form>
                                    <div className="row row-sm">
                                        <div className="col-sm-12 form-group">
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <input
                                                    type="checkbox"
                                                    value="option1"
                                                    checked={selectedOption === 'option1' || ''}
                                                    onChange={handleOptionChange}
                                                    style={checkboxStyle2}
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="isPayed"
                                                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                >
                                                    Paid: Salary Will be Deducted
                                                </label>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                <input
                                                    type="checkbox"
                                                    value="option2"
                                                    checked={selectedOption === 'option2' || ''}
                                                    onChange={handleOptionChange}
                                                    style={checkboxStyle2}
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="isUnPayed"
                                                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                >
                                                    Un Paid: Salary Will be Not Deducted
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 form-group">
                                            <label className="form-label">Remark </label>
                                            <textarea
                                                className="form-control"
                                                style={{ height: '70px', borderRadius: '10px', border: '1px solid #ced4da', padding: '10px', resize: 'none' }}
                                                defaultValue={""}
                                                name="remark"
                                                value={formData.remark}
                                                onChange={handleInputChange3}
                                            />
                                        </div>
                                    </div>

                                </form>
                            </div>

                            <div
                                className="modal-footer"
                                style={{
                                    borderTop: '1px solid #dee2e6',
                                    borderRadius: '0 0 10px 10px',
                                    backgroundColor: '#f8f9fa'
                                }}
                            >
                                <button
                                    className="btn ripple btn-primary"
                                    type="button"
                                    onClick={getEmp}
                                    style={{
                                        borderRadius: '5px',
                                        padding: '8px 20px',
                                        fontSize: '14px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className={`modal ${isModalOpen4 ? 'show' : ''}`}
                    style={{
                        display: isModalOpen4 ? 'block' : 'none',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 9999,
                        overflow: 'auto',
                    }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '30%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Reason</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCloseModal4}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px' }}>
                                <form style={{ width: '100%' }}>
                                    <div className="row row-sm">
                                        <div className="col-sm-12 form-group">
                                            <label className="form-label">Reason: <span className="tx-danger">*</span></label>
                                            <select className="form-control select2"
                                                name="disApproveReason"
                                                value={formData2.disApproveReason}
                                                onChange={handleInputChange}
                                            >
                                                <option >Select </option>
                                                <option >Taken too many leaves </option>
                                                <option >Performance Issue </option>
                                                <option >Work load in company</option>
                                                <option >Other</option>

                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                <button className="btn ripple btn-primary" fetchLeadData type="button" style={{
                                    borderRadius: '5px', padding: '8px 20px',
                                    fontSize: '14px', fontWeight: 'bold'
                                }} onClick={getEmpp}>
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

export default AttendanceListss

