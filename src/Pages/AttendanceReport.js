import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';


const AttendanceReport = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [formattedDate, setFormattedDate] = useState('');
    const [filterByObj, setFilterByObj] = useState({
        dates: '',
        gender: '',
        department: '',
        type: '',
    });
    const [selectedDate, setSelectedDate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [values, setValues] = useState("");
    const navigation = useNavigate()
    const navigate = useNavigate()
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;


    const loadcontent = (id) => {
        navigation(`/monts-list/${id}`);
    };
    const loadcontent2 = (id) => {
        navigation(`/year-list/${id}`);
    };

    const handleChange = (dates) => {
        const parsedDate = new Date(dates);
        const year = parsedDate.getFullYear();
        const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
        const day = String(parsedDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setSelectedDate(parsedDate);
        setFilterByObj(prevState => ({
            ...prevState,
            dates: formattedDate
        }));
    };

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


    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const { dates, gender, department, type } = filterByObj;
            const url = `${apiUrl}/employee/dailyAttendance?id=&mobileNumber=&emailId=&dates=${dates}&gender=${gender}&type=${type}&department=${department}`;

            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();
            setValues(data.count);

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    formattedDate: item.attendances[0]?.date ? formatDateTime(item.attendances[0]?.date) : null,
                    formattedDate2: item.attendances[0]?.date ? formatDateTime(item.attendances[0]?.date) : null,
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

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
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
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Attendance Report <small>({formattedDate}) ({values})</small>
                                    </h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <input
                                                        type="search"
                                                        className="form-control form-control"
                                                        placeholder="Search..."
                                                        aria-controls="example1"
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                </div>

                                                <div className="col-sm-4">
                                                    <select className="form-control select2"
                                                        name="type"
                                                        value={filterByObj.type}
                                                        onChange={handleInputChange2}>
                                                        <option value=''>Status</option>
                                                        <option>Present</option>
                                                        <option>Absent</option>
                                                        <option>Leave</option>
                                                    </select>
                                                </div>

                                                <div className="col-sm-4">
                                                    <div className="input-group">
                                                        <div className="input-group-text border-end-0">
                                                            <i className="fe fe-calendar lh--9 op-6" />
                                                        </div>
                                                        <div style={{ flex: '1' }}>
                                                            <DatePicker
                                                                selected={selectedDate}
                                                                onChange={handleChange}
                                                                className="form-control fc-datepicker"
                                                                placeholderText="MM/DD/YYYY"
                                                                dateFormat="MM/dd/yyyy"
                                                                style={{ height: '100%', width: '100%' }}
                                                                name="date"
                                                                value={selectedDate}

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
                                                                <th className='col-1'>Photo</th>
                                                                <th className='col-2'>Employee</th>
                                                                <th className='col-2'>Check-In</th>
                                                                <th className='col-2'>Check-out</th>
                                                                <th className='col-2'>Current Status</th>
                                                                <th className='col-3'>Actions</th>
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
                                                                            src={user.profilePhoto || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                            style={{ width: 60 }}
                                                                        />

                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            Name: {user.fullName}
                                                                            <br />
                                                                            Phone no: {user.phoneNumber}
                                                                            <br />
                                                                            Designation: {user.designation}
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            {user.attendances[0]?.type === "checkIn" ? (
                                                                                <>
                                                                                    {user.formattedDate} <br />
                                                                                    {user.attendances[0]?.locationName}
                                                                                </>
                                                                            ) : (
                                                                                "No checkIn"
                                                                            )}
                                                                        </p>


                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            {user.attendances[0]?.type === "checkOut" ? (
                                                                                <>
                                                                                    {user.formattedDate2} <br />
                                                                                    {user.attendances[0]?.locationName}
                                                                                </>
                                                                            ) : (
                                                                                "No checkOut"
                                                                            )}
                                                                        </p>

                                                                    </td>
                                                                    <td>
                                                                        {user.attendances[0]?.type === "checkIn" && (
                                                                            <>
                                                                                <span style={{ color: 'green' }}>Present</span>
                                                                            </>
                                                                        )}
                                                                        {user.attendances[0]?.type !== "checkIn" && user.attendances[0]?.type !== "checkOut" && user.attendances[0]?.type !== "leave" && (
                                                                            <>
                                                                                <span style={{ color: 'red' }}> Absent</span>

                                                                            </>
                                                                        )}

                                                                        {user.attendances[0]?.type === "leave" && (
                                                                            <>
                                                                                <span style={{ color: 'blue' }}>Leave</span>
                                                                            </>
                                                                        )}
                                                                    </td>
                                                                    <td>


                                                                        <a
                                                                            onClick={() => loadcontent(user.id)}
                                                                            className="btn ripple btn-xs btn-warning w-100 mb-1"
                                                                        >
                                                                            Month
                                                                        </a>
                                                                        <br />
                                                                        <a
                                                                            onClick={() => loadcontent2(user.id)}
                                                                            className="btn ripple btn-info btn-xs w-100"
                                                                        >
                                                                            Yearly
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

export default AttendanceReport

