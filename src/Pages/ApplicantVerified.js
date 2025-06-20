import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { X } from 'react-feather';
import '../assets/plugins/notify/css/notifIt.css'
import toast1, { Toaster } from 'react-hot-toast';

const ApplicantVerified = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null)
    const [filterByObj, setFilterByObj] = useState({
        from: '',
        to: '',
        projectId: '',


    });
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const loadcontent = (id) => {
        navigation(`/edit-customer/${id}`);
    };
    const loadcontent7 = (id) => {
        navigation(`/eoi-letter/${id}`);
    };


    const notify2 = () => {
        toast.error('Applicant deleted successfully', {
            style: {
                width: 'auto',
                padding: '16px',
                backgroundColor: '#FF5722',
                color: 'white',
                borderRadius: '8px',
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: '9999',
            },
        });
    };


    const handleChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);


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


    //delete Applicant
    const deletecontent = (id) => {
        fetch(`${apiUrl}/applicant/deleteApplicant/` + id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${Token}`,
            }
        })
            .then((res) => {
                if (res.ok) {
                    fetchDataFromApi();
                    notify2()
                    // toast.success("Applicant deleted successfully");
                } else {
                    throw new Error('Failed to delete');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };


    const fetchDataFromApiss = (id) => {
        const token = localStorage.getItem("Token");
        const apiUrl = process.env.REACT_APP_URL;

        fetch(`${apiUrl}/applicant/sendEoiEmail?applicantId=${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Fetched data:', data);
                if (data.status === 'success') {
                    toast.success(data.message);
                } else {
                    console.error('API request was not successful:', data.message);
                    toast.error(data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);

            });
    };


    useEffect(() => {
        fetchDataFromApiss();
    }, []);



    const fetchDataFromApi = async () => {
        setLoading(true);
        const { projectId, from, to } = filterByObj;
        const url = `${apiUrl}/applicant/getEoiApplicants?projectId=${projectId}&from=${from}&to=${to}`;

        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });
            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {
                setUsers(data.data);
            } else {
                console.error('API response error:', data.status === 'success' ? 'Data is not an array' : data.message);
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

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        fetchDataFromApi()
    }, [filterByObj]);


    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user.applicantFirstName.toLowerCase();

        return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase)
            || user.applicantEmail.includes(searchLowerCase) || user.applicantMobile.includes(searchLowerCase)
            || user.ticketId.includes(searchLowerCase);
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

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">

                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Applicant Verified List
                                    </h2>
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
                                                        placeholder="Search User..."
                                                        aria-controls="example1"
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-sm-3">
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
                                                                                <th >Applicant Priority ID</th>
                                                                                <th>Applicant Name</th>
                                                                                <th>Applicant Address</th>
                                                                                <th>Applicant Details</th>
                                                                                <th>Bank Details</th>
                                                                                <th>Privilege Premium</th>
                                                                                <th>Privilege Premium+</th>
                                                                                <th>Verification</th>
                                                                                <th>Payments status</th>
                                                                                <th>Unit Allocated</th>
                                                                                <th>Actions</th>
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
                                                                                        U ID: {user.id}
                                                                                    </td>
                                                                                    <td>
                                                                                        PID: {user.ticketId}

                                                                                    </td>

                                                                                    <td>

                                                                                        <strong style={{ color: '#007bff' }}>{user.applicantFirstName}  {user.applicantMiddleName}   {user.applicantLastName}</strong>

                                                                                        <br />
                                                                                        {user.applicantEmail}
                                                                                        <br />
                                                                                        +91 {user.applicantMobile}
                                                                                        <br />
                                                                                        Alternate Number: +91 {user.applicantAlternateNumber}
                                                                                        <br />
                                                                                        Father's Name: {user.applicantFatherName}
                                                                                    </td>

                                                                                    <td>
                                                                                        Country: {user.applicantCountry}
                                                                                        <br />
                                                                                        State: {user.applicantState}
                                                                                        <br />
                                                                                        City: {user.applicantCity}
                                                                                        <br />
                                                                                        Pin code: {user.applicantPincode}
                                                                                        <br />
                                                                                        Landmark: {user.applicantLandMark}
                                                                                        <br />
                                                                                        Address: {user.applicantAddress}
                                                                                    </td>
                                                                                    <td>

                                                                                        Aadhaar Number: {user.applicantAadhaarNumber}
                                                                                        <br />
                                                                                        Aadhaar Image: <Link to={user.applicantAadhaarImage} title="Aadhaar Image" target="blanck">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        PAN: {user.applicantPAN}
                                                                                        <br />
                                                                                        PAN Image: <Link to={user.applicantPanImage} title="Pan Image" target="blanck">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>

                                                                                    </td>
                                                                                    <td>
                                                                                        Applicant BankName: {user.applicantBankName}
                                                                                        <br />
                                                                                        Applicant Account Name: {user.applicantAccountName}
                                                                                        <br />
                                                                                        Applicant Account Number: {user.applicantAccountNumber}
                                                                                        <br />
                                                                                        Applicant IFSC:{user.applicantIfsc}
                                                                                        <br />
                                                                                        Applicant Upi Id: {user.applicantUpiId}
                                                                                    </td>
                                                                                    <td>

                                                                                        Project: {user && user.project && `${user.project.projectName}`}
                                                                                        <br />
                                                                                        Plan Name:  <strong style={{ color: '#007bff' }}>{user && user.projectsubscription && `${user.projectsubscription.eoiType}`}</strong>

                                                                                        <br />
                                                                                        Plan Code: {user && user.projectsubscription && `${user.projectsubscription.eoiCode}`}
                                                                                        <br />
                                                                                        Plan Price:  <strong style={{ color: '#007bff' }}>{user && user.projectsubscription && `${user.projectsubscription.eoiPrice}`}</strong>
                                                                                        <br />
                                                                                        Plan Terms: {user && user.projectsubscription && `${user.projectsubscription.eoiTerms}`}

                                                                                    </td>

                                                                                    <td>

                                                                                        Project: {user && user.project && `${user.project.projectName}`}
                                                                                        <br />
                                                                                        Plan Name:  <strong style={{ color: '#007bff' }}>{user && user.projectsubscription && `${user.projectsubscription.eoiType}`}</strong>

                                                                                        <br />
                                                                                        Plan Code: {user && user.projectsubscription && `${user.projectsubscription.eoiCode}`}
                                                                                        <br />
                                                                                        Plan Price:  <strong style={{ color: '#007bff' }}>{user && user.projectsubscription && `${user.projectsubscription.eoiPrice}`}</strong>
                                                                                        <br />
                                                                                        Plan Terms: {user && user.projectsubscription && `${user.projectsubscription.eoiTerms}`}

                                                                                    </td>
                                                                                    <td>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="btn ripple btn-xs mb-1"
                                                                                            style={{
                                                                                                backgroundColor: 'green',
                                                                                                color: 'white',
                                                                                                width: '100%', // Reduced width
                                                                                                transition: 'all 0.3s ease-in-out', // Smooth transition
                                                                                            }}
                                                                                            onMouseOver={(e) => {
                                                                                                e.target.style.transform = 'scale(1.05)';
                                                                                                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                                                                                            }}
                                                                                            onMouseOut={(e) => {
                                                                                                e.target.style.transform = 'scale(1)';
                                                                                                e.target.style.boxShadow = 'none';
                                                                                            }}
                                                                                        >
                                                                                            Approve
                                                                                        </button>
                                                                                        <br />
                                                                                        <button
                                                                                            type="button"
                                                                                            className="btn ripple btn-xs mb-1"
                                                                                            style={{
                                                                                                backgroundColor: 'red',
                                                                                                color: 'white',
                                                                                                width: '100%', // Reduced width
                                                                                                transition: 'all 0.3s ease-in-out', // Smooth transition
                                                                                            }}
                                                                                            onMouseOver={(e) => {
                                                                                                e.target.style.transform = 'scale(1.05)';
                                                                                                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                                                                                            }}
                                                                                            onMouseOut={(e) => {
                                                                                                e.target.style.transform = 'scale(1)';
                                                                                                e.target.style.boxShadow = 'none';
                                                                                            }}
                                                                                        >
                                                                                            Not Approve
                                                                                        </button>
                                                                                        <br />
                                                                                        <button
                                                                                            type="button"
                                                                                            className="btn ripple btn-xs mb-1"
                                                                                            style={{
                                                                                                backgroundColor: 'orange',
                                                                                                color: 'white',
                                                                                                width: '100%', // Reduced width
                                                                                                transition: 'all 0.3s ease-in-out', // Smooth transition
                                                                                            }}
                                                                                            onMouseOver={(e) => {
                                                                                                e.target.style.transform = 'scale(1.05)';
                                                                                                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                                                                                            }}
                                                                                            onMouseOut={(e) => {
                                                                                                e.target.style.transform = 'scale(1)';
                                                                                                e.target.style.boxShadow = 'none';
                                                                                            }}
                                                                                        >
                                                                                            Hold
                                                                                        </button>
                                                                                    </td>

                                                                                    <td>
                                                                                        Amount: 2,00,000
                                                                                        <br />
                                                                                        Mode: check
                                                                                        <br />
                                                                                        Date: 15 September 2024
                                                                                        <br />
                                                                                        Clear: 16 September 2024
                                                                                        <br />
                                                                                        Proof: <Link to='' title="Proof" target="blanck">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                    </td>
                                                                                    <td>
                                                                                        Not Allocated
                                                                                        <br />
                                                                                        <Link to='/eoi-inventory' title="Proof" target="_blank">
                                                                                            <div
                                                                                                style={{
                                                                                                    width: '30px',           // Diameter of the circle
                                                                                                    height: '30px',          // Diameter of the circle
                                                                                                    borderRadius: '50%',     // Makes the div a circle
                                                                                                    backgroundColor: '#007bff', // Background color (blue)
                                                                                                    display: 'inline-flex',  // Inline-flex to align with text
                                                                                                    alignItems: 'center',    // Center vertically
                                                                                                    justifyContent: 'center', // Center horizontally
                                                                                                    cursor: 'pointer',
                                                                                                    marginLeft: '25px',      // Moves the circle slightly to the right
                                                                                                    transition: 'all 0.3s ease-in-out', // Smooth hover transition
                                                                                                }}
                                                                                                onMouseOver={(e) => {
                                                                                                    e.currentTarget.style.transform = 'scale(1.1)'; // Slightly enlarge on hover
                                                                                                    e.currentTarget.style.backgroundColor = 'green'; // Change background color on hover
                                                                                                }}
                                                                                                onMouseOut={(e) => {
                                                                                                    e.currentTarget.style.transform = 'scale(1)'; // Return to original size
                                                                                                    e.currentTarget.style.backgroundColor = '#007bff'; // Revert background color
                                                                                                }}
                                                                                            >

                                                                                                <i
                                                                                                    className="fe fe-plus"
                                                                                                    style={{ color: 'white', fontSize: '18px' }} // White plus icon with size adjustment
                                                                                                />
                                                                                            </div>
                                                                                        </Link>
                                                                                    </td>



                                                                                    <td style={{ textAlign: "center" }}>
                                                                                        <a onClick={() => loadcontent(user.id)} >
                                                                                            <i className="fa fa-edit" title="Enable" />
                                                                                        </a>
                                                                                        {" "}
                                                                                        {" "}
                                                                                        {" "}

                                                                                        <a onClick={() => loadcontent7(user.id)} title="EOI View" target="__blanck" >
                                                                                            <i className="fe fe-eye " style={{ cursor: 'pointer' }} />
                                                                                        </a>
                                                                                        {" "}
                                                                                        {" "}
                                                                                        {" "}
                                                                                        <a

                                                                                            onClick={() => deletecontent(user.id)}
                                                                                        >
                                                                                            <i
                                                                                                className="fa fa-trash"
                                                                                                title="Delete"
                                                                                            />
                                                                                        </a>
                                                                                        <br />
                                                                                        <button
                                                                                            onClick={() => fetchDataFromApiss(user.id)}
                                                                                            type="button"
                                                                                            className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                        >
                                                                                            Send Mail
                                                                                        </button>

                                                                                    </td>

                                                                                </tr>
                                                                            ))

                                                                            }


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
                <div className="main-footer text-center" >
                    <div className="">
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

export default ApplicantVerified



