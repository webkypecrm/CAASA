import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';


const ProjectReports = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [leadCount, setLeadCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [loading, setLoading] = useState(true);


    const [formData, setFormData] = useState({
        schemeType: '',
        projectId: '',
    })

    const [filterByObj, setFilterByObj] = useState({
        search: '',
        stage: 'Allocated',
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


    const loadcontent2 = (id) => {
        navigation(`/Inventory-details/${id}`);
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
            background: 'rgba(255, 255, 255, 0.3)', // Slight transparency for background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        },
        loaderContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',  // Increased gap for better visibility
        },
        dot: {
            width: '20px',  // Increased size for better visibility
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#3498db',  // Bright blue for emphasis
            animation: 'bounce 1.2s infinite ease-in-out',
        },
    };

    // Inject keyframes into the document
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

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


    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    const fetchDataFromApi = async () => {
        setLoading(true);
        const pageNumber = currentPage + 1;
        const { projectId, schemeId, schemeType, from, to, stage, search } = filterByObj;

        const url = `${apiUrl}/applicant/applicants?projectId=${projectId}&schemeId=${schemeId}&schemeType=${schemeType}&from=${from}&to=${to}&stage=${stage}&page=${pageNumber}&limit=${itemsPerPage}&search=${search}`;

        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });
            const data = await response.json();
            const fetchedLeadCount = data.customerCount;
            setLeadCount(fetchedLeadCount);

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    formattedDate: item.applicantDOB ? formatDateTime(item.applicantDOB) : '',
                    formattedDate2: item.coApplicantDOB ? formatDateTime(item.coApplicantDOB) : '',
                    formattedDate3: item.chequeDate ? formatDateTime(item.chequeDate) : '',
                }));
                setUsers(formattedData);
            } else {
                console.error('Unexpected API response:', data);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };



    useEffect(() => {
        fetchDataFromApi();
    }, [currentPage, itemsPerPage, filterByObj]);



    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const currentPageData = users;

    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);



    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const breakContent = (content) => {
        if (!content.includes(',')) {
            return content.trim();
        }
        const chunks = content.split(',').map(chunk => chunk.trim() + ',');
        chunks[chunks.length - 1] = chunks[chunks.length - 1].slice(0, -1);
        return chunks.join('<br />');
    };

    const breakContent2 = (content, length) => {
        const chunks = [];
        for (let i = 0; i < content.length; i += length) {
            chunks.push(content.substring(i, i + length));
        }
        return chunks.join('<br />');
    };



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
                                        Customer Report ({leadCount})
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
                                                        name="search"
                                                        value={filterByObj.search}
                                                        onChange={handleInputChange2}
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
                                                                                <th >Applicant Ticket ID</th>
                                                                                <th>APPLICANT IMAGE</th>
                                                                                <th>Applicant Name</th>
                                                                                <th className="col-1">Applicant Address</th>
                                                                                <th className="col-1" >Applicant Details</th>
                                                                                <th>PROPERTY</th>
                                                                                <th >PREFERENCES</th>
                                                                                <th>PRICING</th>
                                                                                <th>PAYMENT DETAILS</th>
                                                                                <th>ALLOTMENT</th>
                                                                                <th>Actions</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {currentPageData.map((user) => (
                                                                                <tr>
                                                                                    <td>
                                                                                        <label className="ckbox">
                                                                                            <input type="checkbox" defaultValue={5} />
                                                                                            <span />
                                                                                        </label>
                                                                                    </td>
                                                                                    <td style={{ padding: '10px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>UID:</strong> {user.userId}
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
                                                                                    </td>
                                                                                    <td style={{ padding: '10px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>TID:</strong> {user.ticketId}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Lucky Draw:</strong> {user.luckyDrawId}
                                                                                    </td>
                                                                                    <td>
                                                                                        <img
                                                                                            alt="No Photo"
                                                                                            className="rounded-circle me-3"
                                                                                            src={user.applicantImage || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                                            style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '50%' }}
                                                                                        />
                                                                                    </td>
                                                                                    <td style={{ padding: '10px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>N:</strong> {user.applicantFirstName} {user.applicantMiddleName} {user.applicantLastName}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>E:</strong> {user.applicantEmail || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>M:</strong> +91 {user.applicantMobile || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>ALT:</strong> +91 {user.applicantAlternateNumber || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Father's Name:</strong> {user.applicantFatherName || 'N/A'}
                                                                                    </td>
                                                                                    <td style={{ padding: '10px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Country:</strong> {user.applicantCountry || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>State:</strong> {user.applicantState || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>City:</strong> {user.applicantCity || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Pin code:</strong> {user.applicantPincode || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Landmark:</strong> {user.applicantLandMark || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Address:</strong> <div dangerouslySetInnerHTML={{ __html: breakContent2(user.applicantAddress, 40) }} />

                                                                                    </td>
                                                                                    <td style={{ padding: '10px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>DOB:</strong> {user.formattedDate || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Number:</strong> {user.applicantAadhaarNumber || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Aadhaar Image:</strong>
                                                                                        <Link to={user.applicantAadhaarImage} title="Aadhaar Image" target="_blank">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer', color: '#007bff' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>PAN:</strong> {user.applicantPAN || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>PAN Image:</strong>
                                                                                        <Link to={user.applicantPanImage} title="Pan Image" target="_blank">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer', color: '#007bff' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Nationality:</strong> {user.applicantNationality || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Profession:</strong> {user.applicantProfession || 'N/A'}
                                                                                    </td>
                                                                                    <td style={{ padding: '10px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Project:</strong> {user.projectId || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Type:</strong> {user.schemeType || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Scheme:</strong> <div dangerouslySetInnerHTML={{ __html: breakContent2(user.schemeId, 31) }} />
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Payment Plan:</strong> {user.paymentPlan || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Advisor:</strong> {user.advisorId || 'N/A'}
                                                                                    </td>
                                                                                    <td style={{ width: "2px", padding: '10px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Size:</strong> {user.sizeType || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Facing:</strong> <span dangerouslySetInnerHTML={{ __html: breakContent(user.facing) }} />
                                                                                    </td>
                                                                                    <td style={{ padding: '10px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Project:</strong> {user.projectId || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>BSP:</strong> Rs. {user.bsp || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Size:</strong> {user.size || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Plan:</strong> {user.paymentPlan || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Total:</strong> Rs. {user.bspAmount || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>PLC:</strong> {user.PLCs || 'N/A'} - {user.plcAmount}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Fixed Charges (EDS/IDS):</strong> {user.fixedCharges || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>EDC/IDC Amount:</strong> Rs. {user.fixedAmount || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Total Cost:</strong> Rs. {user.totalCost || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Registration Amount:</strong> Rs. <span>{user && user.planId && `${user.planId.onBookingPLP}`}</span>
                                                                                    </td>

                                                                                    <td style={{ padding: '10px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Amount Received:</strong> Rs. {user.amountReceived || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Payment Status:</strong> {user.paymentStatus || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Payment Method:</strong> {user.paymentMethod || 'N/A'}
                                                                                        <br />
                                                                                        {user.paymentMethod === 'Cheque' && (
                                                                                            <>
                                                                                                <strong style={{ color: '#007bff' }}>Cheque No:</strong> {user.chequeNo || 'N/A'}
                                                                                                <br />
                                                                                                <strong style={{ color: '#007bff' }}>Cheque Details:</strong> {user.chequeDetails || 'N/A'}
                                                                                                <br />
                                                                                                <strong style={{ color: '#007bff' }}>Cheque Date:</strong> {user.formattedDate3 || 'N/A'}
                                                                                            </>
                                                                                        )}
                                                                                        {user.paymentMethod === 'Cash' && (
                                                                                            <>
                                                                                                <strong style={{ color: '#007bff' }}>Cash Remark:</strong> {user.cashRemark || 'N/A'}
                                                                                            </>
                                                                                        )}
                                                                                        {user.paymentMethod === 'Online' && (
                                                                                            <>
                                                                                                <strong style={{ color: '#007bff' }}>Transaction ID:</strong> {user.transactionID || 'N/A'}
                                                                                            </>
                                                                                        )}
                                                                                        {user.paymentMethod === 'POS' && (
                                                                                            <>
                                                                                                <strong style={{ color: '#007bff' }}>Transaction ID:</strong> {user.transactionID || 'N/A'}
                                                                                            </>
                                                                                        )}
                                                                                    </td>

                                                                                    <td>
                                                                                        Unit no: <font color="red">{user.unitNo || 'N/A'}</font>
                                                                                        <br />
                                                                                        Area: <font color="red">{user.sizeType || 'N/A'}</font>
                                                                                        <br />
                                                                                        Gift: <font color="red">{user.gift || 'N/A'}</font>

                                                                                    </td>
                                                                                    <td style={{ padding: '10px', textAlign: 'center' }}>
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
                                                                                    </td>

                                                                                </tr>

                                                                            ))}

                                                                        </tbody>
                                                                    </table>
                                                                )}
                                                                <div className="d-flex align-items-center ">
                                                                    <div >

                                                                        <select
                                                                            id="itemsPerPage"
                                                                            className="form-select"
                                                                            value={itemsPerPage}
                                                                            onChange={handleItemsPerPageChange}
                                                                        >
                                                                            <option value={20}>20</option>
                                                                            <option value={50}>50</option>
                                                                            <option value={100}>100</option>
                                                                            <option value={200}>200</option>
                                                                            <option value={500}>500</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="pagination d-flex justify-content-center">
                                                                    <ReactPaginate
                                                                        previousLabel={'Previous'}
                                                                        nextLabel={'Next'}
                                                                        breakLabel={'...'}
                                                                        breakClassName={'break-me'}
                                                                        pageCount={Math.ceil(leadCount / itemsPerPage)}
                                                                        marginPagesDisplayed={2}
                                                                        pageRangeDisplayed={5}
                                                                        onPageChange={handlePageClick}
                                                                        containerClassName={'pagination'}
                                                                        activeClassName={'active'}
                                                                        previousLinkClassName={'page-link'}
                                                                        nextLinkClassName={'page-link'}
                                                                        disabledClassName={'disabled'}
                                                                        pageClassName={'page-item'}
                                                                        pageLinkClassName={'page-link'}
                                                                    />
                                                                </div>
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

export default ProjectReports

