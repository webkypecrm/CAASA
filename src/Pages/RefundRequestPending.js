
import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
;



const RefundRequestPending = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

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
        status: 'Pending'

    });
    const [users, setUsers] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [search, setSearch] = useState('');
    const [project, setProject] = useState([]);
    const [scame, setScame] = useState([]);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [loading, setLoading] = useState(true);

    const [isModalOpen9, setIsModalOpen9] = useState(false);
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


    const handleOpenModal9 = () => {
        setIsModalOpen9(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal9 = () => {
        setIsModalOpen9(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
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

    const handleSubmits = async (id) => {
        try {
            const url = `${apiUrl}/applicant/refundStatus?applicantId=${id}&status=Success`;

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }

            fetchDataFromApi()
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);
        }
    };

    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    const fetchDataFromApi = async () => {
        setLoading(true);
        const { projectId, schemeId, schemeType, from, to, status } = filterByObj;
        const url = `${apiUrl}/applicant/refundList?projectId=${projectId}&schemeId=${schemeId}&schemeType=${schemeType}&from=${from}&to=${to}&status=${status}&isRefund=true`;

        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
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
                console.error('API response error:', data.message || 'Invalid data format');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };



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

    const breakContent = (content, length) => {
        const chunks = [];
        for (let i = 0; i < content.length; i += length) {
            chunks.push(content.substring(i, i + length));
        }
        return chunks.join('<br />');
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

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Refund Request Pending List
                                    </h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="col-sm-2">
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
                                                    <input
                                                        type="search"
                                                        className="form-control form-control"
                                                        placeholder="Search Amount..."
                                                        aria-controls="example1"
                                                    // value={search}
                                                    // onChange={(e) => setSearch(e.target.value)}
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
                                                <div className="col-sm-2">
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

                                                <div className="col-sm-2" style={{ marginTop: '20px' }}>
                                                    <select className="form-control select2"


                                                    >
                                                        <option value='' >Select Allocation</option>
                                                        <option >Not Allocated</option>
                                                        <option >Allocated</option>

                                                    </select>
                                                </div>

                                                <div className="col-sm-2" style={{ marginTop: '20px' }}>
                                                    <select className="form-control select2"


                                                    >
                                                        <option value='' >Select Refund Req</option>
                                                        <option >Requested</option>


                                                    </select>
                                                </div>
                                                <div className="col-sm-2" style={{ marginTop: '20px' }}>
                                                    <select className="form-control select2"


                                                    >
                                                        <option value='' >Select Req Status</option>
                                                        <option >New Request</option>
                                                        <option >Completed</option>
                                                        <option >Cancelled</option>

                                                    </select>
                                                </div>
                                                <div className="col-sm-2" style={{ marginTop: '20px' }}>
                                                    <select className="form-control select2"


                                                    >
                                                        <option value='' >Select Check By</option>
                                                        <option >Aproov Kumar</option>


                                                    </select>
                                                </div>
                                                <div className="col-sm-2" style={{ marginTop: '20px' }}>
                                                    <select className="form-control select2"


                                                    >
                                                        <option value='' >Select Approved By</option>
                                                        <option >Khushal Chopra</option>


                                                    </select>
                                                </div>
                                                <div className="col-sm-2" style={{ marginTop: '20px' }}>
                                                    <select className="form-control select2"


                                                    >
                                                        <option value='' >Payment Refund </option>
                                                        <option >Done</option>


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
                                                                                <th width="10%">Co Applicant Image</th>
                                                                                <th>Co Applicant Name</th>
                                                                                <th>Co Applicant Address</th>
                                                                                <th>Co Applicant Details</th>
                                                                                <th>PROPERTY</th>
                                                                                <th>PREFERENCES</th>
                                                                                <th>PRICING</th>
                                                                                <th>PAYMENT DETAILS</th>
                                                                                <th>ALLOTMENT</th>
                                                                                <th>Pay Mode</th>
                                                                                <th>Booking Amt</th>
                                                                                <th>IGST BSBA</th>
                                                                                <th>IGST</th>
                                                                                <th>SGST BSBA</th>
                                                                                <th>CGST</th>
                                                                                <th>SGST</th>
                                                                                <th>Allocation</th>
                                                                                <th>Refund Req</th>

                                                                                <th>Req Status</th>
                                                                                <th>Check by</th>
                                                                                <th>Approved By</th>
                                                                                <th>Payment Refund</th>
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
                                                                                        T ID: {user.ticketId}
                                                                                    </td>
                                                                                    <td>
                                                                                        <img
                                                                                            alt="avatar"
                                                                                            className="rounded-circle me-3"
                                                                                            src={user.applicantImage || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
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
                                                                                        <img
                                                                                            alt="avatar"
                                                                                            className="rounded-circle me-3"
                                                                                            src={user.coApplicantImage || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                                            style={{ width: 60 }}
                                                                                        />
                                                                                    </td>
                                                                                    <td>
                                                                                        Name: {user.coApplicantFirstName} {user.coApplicantMiddleName} {user.coApplicantLastName}
                                                                                        <br />
                                                                                        Email: {user.coApplicantEmail}
                                                                                        <br />
                                                                                        Mobile: +91 {user.coApplicantMobile}
                                                                                        <br />
                                                                                        Alternate Number: +91 {user.coApplicantAlternateNumber}
                                                                                        <br />
                                                                                        Father's Name: {user.coApplicantFatherName}
                                                                                    </td>
                                                                                    <td>
                                                                                        Country: {user.coApplicantCountry}
                                                                                        <br />
                                                                                        State: {user.coApplicantState}
                                                                                        <br />
                                                                                        City: {user.coApplicantCity}
                                                                                        <br />

                                                                                        Pin code: {user.coApplicantPincode}
                                                                                        <br />
                                                                                        Landmark: {user.coApplicantLandMark}
                                                                                        <br />
                                                                                        Address: {user.coApplicantAddress}
                                                                                    </td>
                                                                                    <td>
                                                                                        Co Applicant DOB: {user.formattedDate2}
                                                                                        <br />
                                                                                        Aadhaar Number: {user.coApplicantAadhaarNumber}
                                                                                        <br />
                                                                                        Aadhaar Image:  <Link to={user.coApplicantAadhaarImage} title="Aadhaar Image" target="blanck">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        PAN: {user.coApplicantPAN}
                                                                                        <br />
                                                                                        PAN Image: <Link to={user.coApplicantPanImage} title="Pan Image" target="blanck">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        Nationality: {user.coApplicantNationality}
                                                                                        <br />
                                                                                        Profession: {user.coApplicantProfession}
                                                                                        <br />
                                                                                    </td>
                                                                                    <td>
                                                                                        Project: {user.projectId}<br />
                                                                                        Type: {user.schemeType}<br />
                                                                                        Scheme:  <div dangerouslySetInnerHTML={{ __html: breakContent(user.schemeId, 31) }} />
                                                                                        Payment Plan: {user.paymentPlan}<br />
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

                                                                                    <td>{user.paymentMethod}</td>
                                                                                    <td style={{ color: 'purple', fontWeight: 'bold' }}>{user.amountReceived}</td>
                                                                                    <td>{(user.amountReceived / 1.18).toFixed(2)}</td>
                                                                                    <td>{(user.amountReceived - user.amountReceived / 1.18).toFixed(2)}</td>
                                                                                    <td>0</td>

                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                    <td>Not Allocated</td>
                                                                                    <td>Requested</td>

                                                                                    <td>

                                                                                        <span style={{ color: 'blue' }}>Pending</span>

                                                                                    </td>

                                                                                    <td>Aproov Kumar</td>
                                                                                    <td>Khushal Chopra</td>
                                                                                    <td style={{ textAlign: 'center' }}>
                                                                                        <button className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                                            Pending
                                                                                        </button>
                                                                                    </td>



                                                                                    <td style={{ textAlign: "center" }}>


                                                                                        <a
                                                                                            onClick={() => handleSubmits(user.id)}
                                                                                            className="btn ripple btn-xs w-100 mb-1"
                                                                                            style={{ backgroundColor: 'lightgreen', color: 'black' }}
                                                                                        >
                                                                                            Approved
                                                                                        </a>



                                                                                        <br />
                                                                                        <a
                                                                                            onClick={handleOpenModal9}
                                                                                            className="btn ripple btn-xs w-100 mb-1"
                                                                                            style={{ backgroundColor: 'green', color: 'white' }}
                                                                                        >
                                                                                            Mark complete
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


                            <div
                                className={`modal ${isModalOpen9 ? 'show' : ''}`}
                                style={{ display: isModalOpen9 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                                tabIndex="-1"
                                role="dialog"
                            >
                                <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '300px', margin: 'auto' }}>
                                    <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                            <h5 className="modal-title">Complete</h5>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                                onClick={handleCloseModal9}
                                                style={{ outline: 'none', cursor: 'pointer' }}
                                            >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>

                                        <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                            <form>
                                                <div className="modal-body">
                                                    Refunded Amuount: 5100
                                                    <br />
                                                    Paid: 17 April 2024
                                                    <br />
                                                    Checked by : Aproov
                                                    <br />
                                                    Approved by : Khushal Chopra
                                                    <br />
                                                    Paid by : Aproov
                                                </div>
                                                <div className="modal-footer d-flex justify-content-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-dismiss="modal"
                                                        onClick={handleCloseModal4}
                                                        style={{ marginRight: '10px' }}
                                                    >
                                                        Close
                                                    </button>
                                                    <button type="button" className="btn btn-primary" >
                                                        Done
                                                    </button>
                                                </div>
                                            </form>
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
                <div className="main-footer text-center" >
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

export default RefundRequestPending




