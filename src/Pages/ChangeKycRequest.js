import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ChangeKycRequest = () => {

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
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const loadcontent2 = (id) => {
        navigation(`/Inventory-details/${id}`);
    };


    const handleOpenModal2 = () => {
        setIsModalOpen2(true);
        document.body.classList.add('modal-open');
    };
    const handleCloseModal2 = () => {
        setIsModalOpen2(false);

        document.body.classList.remove('modal-open');
    };

    const handleOpenModal3 = () => {
        setIsModalOpen3(true);
        document.body.classList.add('modal-open');
    };
    const handleCloseModal3 = () => {
        setIsModalOpen3(false);

        document.body.classList.remove('modal-open');
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
        fetch(`${apiUrl}/project/applicantProjectDropdown`)
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


    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };



    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const { result } = formData2;
            const { projectId, schemeId, schemeType, from, to } = filterByObj;

            const url = `${apiUrl}/applicant/applicants?id=&mobileNumber=&emailId=&projectId=${projectId}&schemeId=${schemeId}&schemeType=${schemeType}&from=${from}&to=${to}&result=${result}`;

            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    formattedDate: item.applicantDOB ? formatDateTime(item.applicantDOB) : '',
                    formattedDate2: item.coApplicantDOB ? formatDateTime(item.coApplicantDOB) : '',
                    formattedDate3: item.chequeDate ? formatDateTime(item.chequeDate) : '',
                }));
                setUsers(formattedData);
            } else {
                console.error('API response error:', data.message || 'Invalid data array');
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
                                        Change KYC Request
                                    </h2>
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
                                                                                <th >Applicant Ticket ID</th>
                                                                                <th>APPLICANT IMAGE</th>
                                                                                <th>Applicant Name</th>
                                                                                <th>Applicant Address</th>
                                                                                <th>Applicant Details</th>

                                                                                <th>PROPERTY</th>
                                                                                <th>PREFERENCES</th>
                                                                                <th>PRICING</th>
                                                                                <th>PAYMENT DETAILS</th>
                                                                                <th>ALLOTMENT</th>
                                                                                <th>Request Data</th>
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
                                                                                        <br />
                                                                                        <a
                                                                                            onClick={() => loadcontent2(user.id)}
                                                                                            className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                        >
                                                                                            Manage
                                                                                        </a>
                                                                                    </td>
                                                                                    <td>
                                                                                        T ID: {user.ticketId}


                                                                                    </td>
                                                                                    <td>
                                                                                        <img
                                                                                            alt="avatar"
                                                                                            className="rounded-circle me-3"
                                                                                            src={user.applicantImage}
                                                                                            style={{ width: 60 }}
                                                                                        />
                                                                                    </td>
                                                                                    <td>
                                                                                        Name: {user.applicantFirstName}  {user.applicantMiddleName}   {user.applicantLastName}
                                                                                        <br />
                                                                                        Email: {user.applicantEmail}
                                                                                        <br />
                                                                                        Mobile: +91 {user.applicantMobile}
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
                                                                                        Applicant DOB: {user.formattedDate}
                                                                                        <br />
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
                                                                                        <br />
                                                                                        Nationality: {user.applicantNationality}
                                                                                        <br />
                                                                                        Profession: {user.applicantProfession}
                                                                                        <br />
                                                                                    </td>

                                                                                    <td>
                                                                                        Project: {user.projectId}
                                                                                        <br />
                                                                                        Type: {user.schemeType}
                                                                                        <br />
                                                                                        Scheme: {user.schemeId}

                                                                                        <br />
                                                                                        Payment Plan: {user.paymentPlan}
                                                                                        <br />
                                                                                        Advisor: {user.advisorId}
                                                                                    </td>
                                                                                    <td>
                                                                                        Size: {user.sizeType}
                                                                                        <br />
                                                                                        Facing: {user.facing}


                                                                                    </td>
                                                                                    <td>
                                                                                        BSP: {user.bsp}
                                                                                        <br />
                                                                                        Fixed Charges(EDS/IDS): {user.fixedCharges}
                                                                                        <br />
                                                                                        PLCs: {user.PLCs}
                                                                                        <br />
                                                                                        PLC(Value): {user.PLCsValue}
                                                                                        <br />
                                                                                        Total cost: {user.totalCost}
                                                                                        <br />
                                                                                        Draw Scheme Amount: {user.drawSchemeAmount}
                                                                                        <br />
                                                                                        Others: {user.others}
                                                                                        <br />
                                                                                        Registration Amount: {user.registrationAmount}
                                                                                    </td>
                                                                                    <td>


                                                                                        Amount Received: {user.amountReceived}
                                                                                        <br />
                                                                                        Paymnet Status: {user.paymentStatus}
                                                                                        <br />
                                                                                        Payment Method: {user.paymentMethod}
                                                                                        <br />
                                                                                        {user.paymentMethod === 'Cheque' && (
                                                                                            <>
                                                                                                ChequeNo: {user.chequeNo}
                                                                                                <br />
                                                                                                Cheque Details: {user.chequeDetails}
                                                                                                <br />
                                                                                                Cheque Date: {user.formattedDate3}
                                                                                            </>
                                                                                        )}
                                                                                        {user.paymentMethod === 'Cash' && (
                                                                                            <>
                                                                                                Cash Remark: {user.cashRemark}
                                                                                            </>
                                                                                        )}
                                                                                        {user.paymentMethod === 'Online' && (
                                                                                            <>
                                                                                                Transaction ID: {user.transactionID}
                                                                                            </>
                                                                                        )}
                                                                                        {user.paymentMethod === 'POS' && (
                                                                                            <>
                                                                                                Transaction ID: {user.transactionID}
                                                                                            </>
                                                                                        )}


                                                                                    </td>
                                                                                    <td>
                                                                                        Unit no: <font color="red">{user.unitNo}</font>
                                                                                        <br />
                                                                                        Area: <font color="red">{user.area}</font>
                                                                                        <br />
                                                                                        Gift: <font color="red">{user.gift}</font>

                                                                                    </td>
                                                                                    <td>
                                                                                        Type: Change KYC
                                                                                        <br />
                                                                                        Request By: Amit Kumar
                                                                                        <br />
                                                                                        Date: 29 April 2024
                                                                                        <br />
                                                                                        Time: 11:30 AM
                                                                                        <br />
                                                                                        Via: App
                                                                                        <br />
                                                                                        Status: Eligible / Not Eligible
                                                                                        <br />
                                                                                        Allotment: Done / Not Done
                                                                                        <br />
                                                                                        <button style={{ backgroundColor: 'blue', color: 'white', borderRadius: '5px', padding: '3px 8px', border: 'none', fontSize: '12px' }}>
                                                                                            Change KYC
                                                                                        </button>
                                                                                        <br />
                                                                                        View Change:   <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} onClick={handleOpenModal3} />


                                                                                    </td>

                                                                                    <td style={{ textAlign: "center" }}>



                                                                                        <button
                                                                                            className="btn ripple btn-xs w-100 mb-1"
                                                                                            onClick={handleOpenModal2}
                                                                                            style={{
                                                                                                backgroundColor: 'black',
                                                                                                color: 'white',
                                                                                                border: 'none'
                                                                                            }}
                                                                                        >
                                                                                            Get Approval
                                                                                        </button>


                                                                                        <br />
                                                                                        <a

                                                                                            className="btn ripple btn-xs w-100 mb-1"
                                                                                            style={{
                                                                                                backgroundColor: 'black',
                                                                                                color: 'white',
                                                                                                border: 'none'
                                                                                            }}
                                                                                        >
                                                                                            Pending Approval
                                                                                        </a>
                                                                                        <br />
                                                                                        <a

                                                                                            className="btn ripple btn-xs w-100 mb-1"
                                                                                            style={{
                                                                                                backgroundColor: 'green',
                                                                                                color: 'white',
                                                                                                border: 'none'
                                                                                            }}
                                                                                        >
                                                                                            Approved
                                                                                        </a>

                                                                                        <br />
                                                                                        <a

                                                                                            className="btn ripple btn-xs w-100 mb-1"
                                                                                            style={{
                                                                                                backgroundColor: 'green',
                                                                                                color: 'white',
                                                                                                border: 'none'
                                                                                            }}
                                                                                        >
                                                                                            Change Done
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
                            <div style={{ display: `${isModalOpen2 ? 'flex' : 'none'}`, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }} className={`modal fade ${isModalOpen2 ? 'show d-block' : ''}`} id="modaldemo-callback-form" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '20%', margin: 'auto' }}>
                                    <div style={{ borderRadius: '10px', boxShadow: '0 0 6px rgba(0, 0, 0, 0.3)' }} className="modal-content">
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                            <h5 className="modal-title">Get Approval</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={handleCloseModal2}
                                                aria-label="Close"
                                                style={{ outline: 'none', cursor: 'pointer' }}
                                            ></button>
                                        </div>

                                        <div style={{ padding: '10px' }} className="modal-body">
                                            <form>
                                                <div className="row row-sm">
                                                    <div className="col-sm-12 form-group mb-0">
                                                        <label className="form-label">Unit No: 9832</label>
                                                    </div>
                                                    <div className="col-sm-12 form-group mb-12">
                                                        <label className="form-label">Unit Name: Noida</label>
                                                    </div>
                                                    <div className="col-sm-12 form-group ">
                                                        <h6 className="form-label">Get Approval By</h6>
                                                        <select style={{ height: '35px' }} className="form-control select2" name="status">
                                                            <option value=''>Select </option>
                                                            <option >Khushal Chopra</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div style={{ backgroundColor: '#f8f9fa', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', height: '70px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '20px' }} className="modal-footer">
                                            <button className="btn ripple btn-primary" type="button" style={{ borderRadius: '5px', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold' }}>
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: `${isModalOpen3 ? 'flex' : 'none'}`, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }} className={`modal fade ${isModalOpen3 ? 'show d-block' : ''}`} id="modaldemo-callback-form" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '20%', margin: 'auto' }}>
                                    <div style={{ borderRadius: '10px', boxShadow: '0 0 6px rgba(0, 0, 0, 0.3)' }} className="modal-content">
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                            <h5 className="modal-title">Change By Approved</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={handleCloseModal3}
                                                aria-label="Close"
                                                style={{ outline: 'none', cursor: 'pointer' }}
                                            ></button>
                                        </div>

                                        <div style={{ padding: '10px' }} className="modal-body">
                                            <form>
                                                <div className="row row-sm">
                                                    <div className="col-sm-12 form-group mb-0" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <label className="form-label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                            <label className="ckbox" style={{ marginRight: '10px' }}>
                                                                <input type="checkbox" />
                                                                <span />
                                                            </label>
                                                            APPLICANT NAME
                                                        </label>
                                                    </div>
                                                    <div className="col-sm-12 form-group mb-0" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <label className="form-label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                            <label className="ckbox" style={{ marginRight: '10px' }}>
                                                                <input type="checkbox" />
                                                                <span />
                                                            </label>
                                                            APPLICANT ADDRESS
                                                        </label>
                                                    </div>
                                                    <div className="col-sm-12 form-group mb-0" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <label className="form-label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                            <label className="ckbox" style={{ marginRight: '10px' }}>
                                                                <input type="checkbox" />
                                                                <span />
                                                            </label>
                                                            APPLICANT DETAILS
                                                        </label>
                                                    </div>
                                                    <div className="col-sm-12 form-group mb-0" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <label className="form-label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                            <label className="ckbox" style={{ marginRight: '10px' }}>
                                                                <input type="checkbox" />
                                                                <span />
                                                            </label>
                                                            APPLICANT DETAILS
                                                        </label>
                                                    </div>
                                                    <div className="col-sm-12 form-group mb-0" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <label className="form-label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                            <label className="ckbox" style={{ marginRight: '10px' }}>
                                                                <input type="checkbox" />
                                                                <span />
                                                            </label>
                                                            PROPERTY
                                                        </label>
                                                    </div>
                                                    <div className="col-sm-12 form-group mb-0" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <label className="form-label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                            <label className="ckbox" style={{ marginRight: '10px' }}>
                                                                <input type="checkbox" />
                                                                <span />
                                                            </label>
                                                            PREFERENCES
                                                        </label>
                                                    </div>
                                                    <div className="col-sm-12 form-group mb-0" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <label className="form-label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                            <label className="ckbox" style={{ marginRight: '10px' }}>
                                                                <input type="checkbox" />
                                                                <span />
                                                            </label>
                                                            PRICING
                                                        </label>
                                                    </div>
                                                    <div className="col-sm-12 form-group mb-0" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <label className="form-label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                            <label className="ckbox" style={{ marginRight: '10px' }}>
                                                                <input type="checkbox" />
                                                                <span />
                                                            </label>
                                                            PAYMENT DETAILS
                                                        </label>
                                                    </div>
                                                    <div className="col-sm-12 form-group mb-0" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <label className="form-label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                            <label className="ckbox" style={{ marginRight: '10px' }}>
                                                                <input type="checkbox" />
                                                                <span />
                                                            </label>
                                                            ALLOTMENT
                                                        </label>
                                                    </div>
                                                    <div className="col-sm-12 form-group mb-0" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <label className="form-label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                            <label className="ckbox" style={{ marginRight: '10px' }}>
                                                                <input type="checkbox" />
                                                                <span />
                                                            </label>
                                                            REQUEST DATA
                                                        </label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div style={{ backgroundColor: '#f8f9fa', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', height: '70px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '20px' }} className="modal-footer">
                                            <button className="btn ripple btn-primary" type="button" style={{ borderRadius: '5px', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold' }}>
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
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

export default ChangeKycRequest



