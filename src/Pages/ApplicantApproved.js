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

const ApplicantApproved = () => {

    const initialFormData2 = {
        reason: '',
        amount: '',
    };
    const [formData2, setFormData2] = useState(initialFormData2);
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
    const [count, setCount] = useState('');
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [refund, setRefund] = useState('');
    const navigation = useNavigate()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const loadcontent9 = (id, eoiCode, user) => {
        navigation(`/eoi-inventory-list/${id}/${eoiCode}`, {
            state: {

                firstName: user.applicantFirstName,
                middleName: user.applicantMiddleName,
                lastName: user.applicantLastName,
                eoiCode: eoiCode,
                // add more properties here if needed
            },
        });
    };


    const handleOpenModal2 = (id) => {
        setRefund(id)
        setIsModalOpen2(true);
        document.body.classList.add('modal-open');
    };
    const handleCloseModal2 = () => {
        setIsModalOpen2(false);

        document.body.classList.remove('modal-open');
    };

    const loadcontent2 = (id) => {
        ;
        navigation(`/eoi-details/${id}`);
    };
    const loadcontent = (id) => {
        navigation(`/edit-customer/${id}`);
    };
    const loadcontent7 = (id) => {
        navigation(`/eoi-letter/${id}`);
    };



    const updateData = async (id) => {
        const url = `${apiUrl}/eoi/cancelMembership?applicantId=${id}&membership=true`;
        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            // Ensure you check for a successful response
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.status === 'success') {
                toast.success(data.message);
            } else {
                toast.error("Failed to update status");
            }
        } catch (error) {
            toast.error(`An error occurred while updating status: ${error.message}`);
        }
    };




    const handleSubmit2 = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData2) {
                if (formData2[key] !== null) {
                    formDataToSend.append(key, formData2[key]);
                }
            }

            const response = await fetch(`${apiUrl}/eoi/refundRequest?applicantId=${refund}`, {
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

            handleCloseModal2()
            setFormData2(initialFormData2);
            toast.success(response2.message);
            // navigate("/company-list");
        } catch (error) {
            toast.error(error.message);

        }
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData2({
            ...formData2,
            [name]: value,
        });
    }

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
        fetch(`${apiUrl}/project/eoiProjectDropdown`)
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

    const formatDateTime = (dateTimeString) => {
        const dateOptions = {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        };
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        const date = new Date(dateTimeString);
        const formattedDate = date.toLocaleDateString('en-IN', dateOptions);
        const formattedTime = date.toLocaleTimeString('en-IN', timeOptions);
        return { date: formattedDate, time: formattedTime };
    };


    const fetchDataFromApi = async () => {
        setLoading(true);
        const { projectId, from, to } = filterByObj;
        const url = `${apiUrl}/eoi/getEoiApplicants?projectId=${projectId}&from=${from}&to=${to}&isApproved=true&isRefund=false&hasSubscription=true&stage=Applied`;

        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });
            const data = await response.json();
            setCount(data.totalCount)

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => {
                    const { date, time } = formatDateTime(item.createdAt);
                    return {
                        ...item,
                        createdAtDate: date,
                        createdAtTime: time,
                    };
                });
                setUsers(formattedData);
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


    const breakContent2 = (content, length) => {
        const chunks = [];
        for (let i = 0; i < content.length; i += length) {
            chunks.push(content.substring(i, i + length));
        }
        return chunks.join('<br />');
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
                                        Approved Eoi Applicant List({count})
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

                                                                                <th>Privilege Premium</th>
                                                                                <th>Privilege Premium+</th>

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
                                                                                        <br />

                                                                                        <strong style={{ color: '#007bff' }}>{user.createdAtDate}</strong>
                                                                                        <br />
                                                                                        <span style={{ color: '#007bff' }}>{user.createdAtTime}</span>

                                                                                    </td>

                                                                                    <td>

                                                                                        <strong style={{ color: '#007bff' }}>{user.applicantFirstName}  {user.applicantMiddleName}   {user.applicantLastName}</strong>

                                                                                        {/* <br />
                                                                                        {user.applicantEmail}
                                                                                        <br />
                                                                                        +91 {user.applicantMobile}
                                                                                        <br />
                                                                                        Alternate Number: +91 {user.applicantAlternateNumber} */}
                                                                                        <br />
                                                                                        Father's Name: {user.applicantFatherName}
                                                                                    </td>

                                                                                    <td style={{ maxWidth: '200px', whiteSpace: 'normal', wordWrap: 'break-word' }}>
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

                                                                                        Aadhaar: {user.applicantAadhaarNumber}
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
                                                                                        {user?.projectsubscription && user.projectsubscription.isPremimum === false ? (
                                                                                            <>
                                                                                                Project: {user?.project?.projectName || 'N/A'}
                                                                                                <br />
                                                                                                Plan Name: <strong style={{ color: '#007bff' }}>{user.projectsubscription.eoiType || 'N/A'}</strong>
                                                                                                <br />
                                                                                                Plan Code: {user.projectsubscription.eoiCode || 'N/A'}
                                                                                                <br />
                                                                                                Plan Price: <strong style={{ color: '#007bff' }}>{user.projectsubscription.eoiPrice || 'N/A'}</strong>
                                                                                                <br />
                                                                                                Plan Terms:  <div dangerouslySetInnerHTML={{ __html: breakContent2(user.projectsubscription.eoiTerms || 'N/A', 40) }} />
                                                                                            </>
                                                                                        ) : (
                                                                                            <span style={{ color: 'red' }}>N/A</span>
                                                                                        )}
                                                                                    </td>


                                                                                    <td>
                                                                                        {user?.projectsubscription && user.projectsubscription.isPremimum === true ? (
                                                                                            <>
                                                                                                Project: {user?.project?.projectName || 'N/A'}
                                                                                                <br />
                                                                                                Plan Name: <strong style={{ color: '#007bff' }}>{user.projectsubscription.eoiType || 'N/A'}</strong>
                                                                                                <br />
                                                                                                Plan Code: {user.projectsubscription.eoiCode || 'N/A'}
                                                                                                <br />
                                                                                                Plan Price: <strong style={{ color: '#007bff' }}>{user.projectsubscription.eoiPrice || 'N/A'}</strong>
                                                                                                <br />
                                                                                                Plan Terms:  <div dangerouslySetInnerHTML={{ __html: breakContent2(user.projectsubscription.eoiTerms || 'N/A', 40) }} />
                                                                                            </>
                                                                                        ) : (
                                                                                            <span style={{ color: 'red', }}>N/A</span>
                                                                                        )}
                                                                                    </td>

                                                                                    <td>
                                                                                        Amount: {user.amountReceived || 'N/A'}
                                                                                        <br />
                                                                                        Mode: {user.paymentMethod || 'N/A'}
                                                                                        <br />
                                                                                        Payment Status: {user.paymentStatus || 'N/A'}
                                                                                        <br />
                                                                                        {user.paymentMethod === 'Online' && (
                                                                                            <>
                                                                                                Transaction ID: {user.transactionID || 'N/A'}
                                                                                            </>
                                                                                        )}

                                                                                        {user.paymentMethod === 'Cheque' && (
                                                                                            <>
                                                                                                Cheque No: {user.chequeNo || 'N/A'}
                                                                                                <br />
                                                                                                Cheque Date: {user.chequeDate
                                                                                                    ? new Date(user.chequeDate).toLocaleDateString('en-GB', {
                                                                                                        day: 'numeric',
                                                                                                        month: 'long',
                                                                                                        year: 'numeric',
                                                                                                    })
                                                                                                    : 'N/A'}

                                                                                            </>
                                                                                        )}
                                                                                        {user.paymentMethod === 'Cash' && (
                                                                                            <>
                                                                                                Cash Remark: {user.cashRemark || 'N/A'}


                                                                                            </>
                                                                                        )}

                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>{user.createdAtDate}</strong>
                                                                                        <br />
                                                                                        <span style={{ color: '#007bff' }}>{user.createdAtTime}</span>
                                                                                        <br />
                                                                                        Advisor Name: {user.advisorName}
                                                                                        <br />
                                                                                        Payment Proof: <Link to={user?.uploadRecipt} title="Proof" target="_blank">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        Domicile Proof: <Link to={user?.domicile} title="Proof" target="_blank">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                    </td>
                                                                                    <td>
                                                                                        {user.stage && user.stage !== 'Applied' ? (
                                                                                            <span style={{ color: 'green' }}>{user.stage}</span>
                                                                                        ) : (
                                                                                            <spam style={{ color: 'red' }}>Not Allocated</spam>
                                                                                        )}

                                                                                        <br />
                                                                                        {user?.stage === 'Applied' && (
                                                                                            <a
                                                                                                onClick={() => loadcontent9(user.id, user.projectsubscription?.eoiCode, user)}
                                                                                            >
                                                                                                <div
                                                                                                    style={{
                                                                                                        width: '30px',
                                                                                                        height: '30px',
                                                                                                        borderRadius: '50%',
                                                                                                        backgroundColor: '#007bff',
                                                                                                        display: 'inline-flex',
                                                                                                        alignItems: 'center',
                                                                                                        justifyContent: 'center',
                                                                                                        cursor: 'pointer',
                                                                                                        marginLeft: '25px',
                                                                                                        transition: 'all 0.3s ease-in-out',
                                                                                                    }}
                                                                                                    onMouseOver={(e) => {
                                                                                                        e.currentTarget.style.transform = 'scale(1.1)';
                                                                                                        e.currentTarget.style.backgroundColor = 'green';
                                                                                                    }}
                                                                                                    onMouseOut={(e) => {
                                                                                                        e.currentTarget.style.transform = 'scale(1)';
                                                                                                        e.currentTarget.style.backgroundColor = '#007bff';
                                                                                                    }}
                                                                                                >
                                                                                                    <i
                                                                                                        className="fe fe-plus"
                                                                                                        style={{ color: 'white', fontSize: '18px' }}
                                                                                                    />
                                                                                                </div>
                                                                                            </a>
                                                                                        )}

                                                                                    </td>



                                                                                    <td style={{ textAlign: "center" }}>
                                                                                        {/* <a onClick={() => loadcontent(user.id)} >
                                                                                            <i className="fa fa-edit" title="Enable" />
                                                                                        </a> */}
                                                                                        {" "}
                                                                                        {" "}
                                                                                        {" "}

                                                                                        {/* <a onClick={() => loadcontent7(user.id)} title="EOI View" target="__blanck" >
                                                                                            <i className="fe fe-eye " style={{ cursor: 'pointer' }} />
                                                                                        </a> */}
                                                                                        {" "}
                                                                                        {" "}
                                                                                        {" "}
                                                                                        {/* <a

                                                                                            onClick={() => deletecontent(user.id)}
                                                                                        >
                                                                                            <i
                                                                                                className="fa fa-trash"
                                                                                                title="Delete"
                                                                                            />
                                                                                        </a> */}
                                                                                        {/* <br />
                                                                                        <button
                                                                                            onClick={() => fetchDataFromApiss(user.id)}
                                                                                            type="button"
                                                                                            className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                        >
                                                                                            Send Mail
                                                                                        </button> */}
                                                                                        <br />
                                                                                        <a
                                                                                            onClick={() => loadcontent2(user.id)}
                                                                                            className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                            style={{
                                                                                                backgroundColor: '#17a2b8',
                                                                                                borderColor: '#17a2b8',
                                                                                                color: '#fff',
                                                                                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                                                                                                display: 'inline-block',
                                                                                                textAlign: 'center',
                                                                                            }}
                                                                                            onMouseEnter={(e) => {
                                                                                                e.target.style.backgroundColor = '#138496';
                                                                                                e.target.style.transform = 'scale(1.05)';
                                                                                            }}
                                                                                            onMouseLeave={(e) => {
                                                                                                e.target.style.backgroundColor = '#17a2b8';
                                                                                                e.target.style.transform = 'scale(1)';
                                                                                            }}
                                                                                        >
                                                                                            Manage
                                                                                        </a>
                                                                                        <br />

                                                                                        <a
                                                                                            onClick={() => handleOpenModal2(user.id)}
                                                                                            className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                            style={{
                                                                                                backgroundColor: '#17a2b8',
                                                                                                borderColor: '#17a2b8',
                                                                                                color: '#fff',
                                                                                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                                                                                                display: 'inline-block',
                                                                                                textAlign: 'center',
                                                                                            }}
                                                                                            onMouseEnter={(e) => {
                                                                                                e.target.style.backgroundColor = '#138496';
                                                                                                e.target.style.transform = 'scale(1.05)';
                                                                                            }}
                                                                                            onMouseLeave={(e) => {
                                                                                                e.target.style.backgroundColor = '#17a2b8';
                                                                                                e.target.style.transform = 'scale(1)';
                                                                                            }}
                                                                                        >
                                                                                            Refund Request
                                                                                        </a>


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


                <div
                    className={`modal fade ${isModalOpen2 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{ display: isModalOpen2 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '20%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Refund Request</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal2}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body" style={{ padding: '20px' }}>
                                <form>
                                    <div className="row row-sm">

                                        <div className="col-sm-12 form-group">
                                            <label className="form-label">Amount <span className="tx-danger">*</span></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="amount"
                                                value={formData2.amount}
                                                onChange={handleInputChange}

                                            />
                                        </div>

                                        <div className="col-sm-12 form-group">
                                            <label className="form-label">Reason</label>
                                            <textarea
                                                className="form-control"
                                                style={{ height: '40px', borderRadius: '5px', border: '1px solid #ced4da' }}
                                                defaultValue={""}
                                                name="reason"
                                                value={formData2.reason}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                <button className="btn ripple btn-primary" type="button" style={{
                                    borderRadius: '5px', padding: '8px 20px',
                                    fontSize: '14px', fontWeight: 'bold'
                                }} onClick={handleSubmit2}>
                                    Submit
                                </button>
                            </div>
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

export default ApplicantApproved





