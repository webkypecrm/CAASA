import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';

const NotAllocated = () => {
    const { empid } = useParams();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [from, setFrom] = useState('')

    const [formData, setFormData] = useState({
        schemeType: '',
        projectId: '',
    })
    const [filterByObj, setFilterByObj] = useState({
        search: '',
        from: '',
        to: '',
        projectId: '',
        schemeId: '',
        schemeType: '',
        stage: 'Not-Allocated',

    });
    const initialFormData3 = {
        amount: '',
        paymentMode: '',
        igstBSBA: '',
        igst: '',
        status: '',

    };
    const [formData3, setFormData3] = useState(initialFormData3);
    const [users, setUsers] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [scame, setScame] = useState([]);
    const [isModalOpen8, setIsModalOpen8] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
    const [applicant, setApplicant] = useState({})
    const [leadCount, setLeadCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(20);

    const navigation = useNavigate()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const loadcontent = (id) => {
        navigation(`/edit-customer/${id}`);
    };

    const loadcontent2 = (id, fullName, middleName, lastName) => {
        navigation(`/inventory-check/${id}/${fullName}/${middleName}/${lastName}`);
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


 


    const handleOpenModal8 = (id) => {
        if (id) {
            setIsModalOpen8(id);
            document.body.classList.add('modal-open');
        }
    };

    const handleCloseModal8 = () => {
        setIsModalOpen8(false);
        document.body.classList.remove('modal-open');
    };

   

    useEffect(() => {
        async function getApplicant() {

            const url = `${apiUrl}/applicant/getApplicantInfo/${isModalOpen8}`;
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            })
            response = await response.json();

            if (response.status === "success") {
                setApplicant(response.data);
            }
        }
        getApplicant();
    }, [isModalOpen8])

    const handleSubmit3 = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData3) {
                if (formData3[key] !== null) {
                    formDataToSend.append(key, formData3[key]);
                }
            }

            const response = await fetch(`${apiUrl}/applicant/refundRequest?applicantId=${isModalOpen8}`, {
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
            // fetchLeadData()
            handleCloseModal8()
            fetchDataFromApi()
            setFormData3(initialFormData3);
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);

        }
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


    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };



    const fetchDataFromApi = async () => {
        const pageNumber = currentPage + 1;
        const { projectId, schemeId, schemeType, from, to, stage, search } = filterByObj;
        const url = `${apiUrl}/applicant/applicants?projectId=${projectId}&schemeId=${schemeId}&schemeType=${schemeType}&from=${from}&to=${to}&search=${search}&userId=${empid}&page=${pageNumber}&limit=${itemsPerPage}&stage=${stage}&isRefund=false`;

        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });
            const data = await response.json();
            const fetchedLeadCount = data.notAllocated;
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
                console.error('API response error:', data.message || 'Invalid data format');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

 

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
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




    const breakContent = (content, length) => {
        const chunks = [];
        for (let i = 0; i < content.length; i += length) {
            chunks.push(content.substring(i, i + length));
        }
        return chunks.join('<br />');
    };

   


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
                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Not Allocate List ({leadCount})
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

                                                <div className="col-sm-3">
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
                                                <div className="col-sm-3">
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
                                                                            <th >PROPERTY</th>
                                                                            <th>PREFERENCES</th>
                                                                            {/* <th>PRICING</th> */}
                                                                            <th> Lucky Draw PAYMENT DETAILS </th>
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
                                                                                <td style={{ padding: '15px' }}>
                                                                                    <strong style={{ color: '#007bff' }}>UID:</strong> {user.id}
                                                                                   
                                                                                    <br />
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                        style={{
                                                                                            marginTop: '5px',
                                                                                            backgroundColor: '#17a2b8',
                                                                                            borderColor: '#17a2b8',
                                                                                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                                                                                            display: 'inline-block',
                                                                                        }}
                                                                                        onClick={() => loadcontent2(user.id, user.applicantFirstName, user.applicantMiddleName, user.applicantLastName)}
                                                                                        onMouseEnter={(e) => {
                                                                                            e.target.style.backgroundColor = '#138496';
                                                                                            e.target.style.transform = 'scale(1.05)';
                                                                                        }}
                                                                                        onMouseLeave={(e) => {
                                                                                            e.target.style.backgroundColor = '#17a2b8';
                                                                                            e.target.style.transform = 'scale(1)';
                                                                                        }}
                                                                                    >
                                                                                        Allocate
                                                                                    </button>
                                                                                </td>
                                                                                <td style={{ padding: '15px' }}>
                                                                                    <strong style={{ color: '#007bff' }}>TID:</strong> {user.ticketId}
                                                                                </td>
                                                                                <td>
                                                                                    <img
                                                                                        alt="No Photo"
                                                                                        className="rounded-circle me-3"
                                                                                        src={user.applicantImage || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                                        style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '50%' }}
                                                                                    />
                                                                                </td>
                                                                                <td style={{ padding: '15px' }}>
                                                                                    <strong style={{ color: '#007bff' }}>N:</strong> {user.applicantFirstName} {user.applicantMiddleName} {user.applicantLastName}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>E:</strong> {user.applicantEmail}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>M:</strong> +91 {user.applicantMobile}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Alt:</strong> +91 {user.applicantAlternateNumber}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Father's Name:</strong> {user.applicantFatherName}
                                                                                </td>
                                                                                <td style={{ padding: '15px' }}>
                                                                                    <strong style={{ color: '#007bff' }}>Country:</strong> {user.applicantCountry}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>State:</strong> {user.applicantState}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>City:</strong> {user.applicantCity}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Pin code:</strong> {user.applicantPincode}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Landmark:</strong> {user.applicantLandMark}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Address:</strong> <div dangerouslySetInnerHTML={{ __html: breakContent(user.applicantAddress, 40) }} />
                                                                                </td>
                                                                                <td style={{ padding: '15px' }}>
                                                                                    <strong style={{ color: '#007bff' }}>DOB:</strong> {user.formattedDate}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Aadhaar Number:</strong> {user.applicantAadhaarNumber}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Aadhaar Image:</strong>
                                                                                    <Link to={user.applicantAadhaarImage} title="Aadhaar Image" target="_blank">
                                                                                        <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                    </Link>
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>PAN:</strong> {user.applicantPAN}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>PAN Image:</strong>
                                                                                    <Link to={user.applicantPanImage} title="Pan Image" target="_blank">
                                                                                        <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                    </Link>
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Nationality:</strong> {user.applicantNationality}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Profession:</strong> {user.applicantProfession}
                                                                                </td>
                                                                                <td>
                                                                                    <img
                                                                                        alt="No Photo"
                                                                                        className="rounded-circle me-3"
                                                                                        src={user.coApplicantImage || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                                        style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '50%' }}
                                                                                    />
                                                                                </td>
                                                                                <td style={{ padding: '15px' }}>
                                                                                    <strong style={{ color: '#007bff' }}>N:</strong> {user.coApplicantFirstName} {user.coApplicantMiddleName} {user.coApplicantLastName}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>E:</strong> {user.coApplicantEmail}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>M:</strong> +91 {user.coApplicantMobile}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Alt:</strong> +91 {user.coApplicantAlternateNumber}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Father's Name:</strong> {user.coApplicantFatherName}
                                                                                </td>
                                                                                <td style={{ padding: '15px' }}>
                                                                                    <strong style={{ color: '#007bff' }}>Country:</strong> {user.coApplicantCountry}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>State:</strong> {user.coApplicantState}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>City:</strong> {user.coApplicantCity}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Pin code:</strong> {user.coApplicantPincode}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Landmark:</strong> {user.coApplicantLandMark}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Address:</strong> {user.coApplicantAddress}
                                                                                </td>
                                                                                <td style={{ padding: '15px' }}>
                                                                                    <strong style={{ color: '#007bff' }}>DOB:</strong> {user.formattedDate2}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Aadhaar Number:</strong> {user.coApplicantAadhaarNumber}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Aadhaar Image:</strong>
                                                                                    <Link to={user.coApplicantAadhaarImage} title="Aadhaar Image" target="_blank">
                                                                                        <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                    </Link>
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>PAN:</strong> {user.coApplicantPAN}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>PAN Image:</strong>
                                                                                    <Link to={user.coApplicantPanImage} title="Pan Image" target="_blank">
                                                                                        <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                    </Link>
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Nationality:</strong> {user.coApplicantNationality}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Profession:</strong> {user.coApplicantProfession}
                                                                                </td>
                                                                                <td style={{ padding: '15px' }}>
                                                                                    <strong style={{ color: '#007bff' }}>Scheme:</strong> <div dangerouslySetInnerHTML={{ __html: breakContent(user.schemeId, 20) }} />
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Advisor:</strong> {user.advisorId}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Lucky Draw:</strong> {user.luckyDrawId}

                                                                                </td>
                                                                                <td style={{ padding: '15px' }}>
                                                                                    <strong style={{ color: '#007bff' }}>Unit Type:</strong> {user.schemeType}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Size:</strong> {user.sizeType}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Facing:</strong> {user.facing}
                                                                                </td>
                                                                                <td style={{ padding: '15px' }}>
                                                                                    <strong style={{ color: '#007bff' }}>Amount Received:</strong> {user.amountReceived}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Payment Status:</strong> {user.paymentStatus}
                                                                                    <br />
                                                                                    <strong style={{ color: '#007bff' }}>Payment Method:</strong> {user.paymentMethod}
                                                                                    <br />
                                                                                    {user.paymentMethod === 'Cheque' && (
                                                                                        <>
                                                                                            <strong style={{ color: '#007bff' }}>Cheque No:</strong> {user.chequeNo}
                                                                                            <br />
                                                                                            <strong style={{ color: '#007bff' }}>Cheque Details:</strong> {user.chequeDetails}
                                                                                            <br />
                                                                                            <strong style={{ color: '#007bff' }}>Cheque Date:</strong> {user.formattedDate3}
                                                                                        </>
                                                                                    )}
                                                                                    {user.paymentMethod === 'Cash' && (
                                                                                        <>
                                                                                            <strong style={{ color: '#007bff' }}>Cash Remark:</strong> {user.cashRemark}
                                                                                        </>
                                                                                    )}
                                                                                    {user.paymentMethod === 'Online' && (
                                                                                        <>
                                                                                            <strong style={{ color: '#007bff' }}>Transaction ID:</strong> {user.transactionID}
                                                                                        </>
                                                                                    )}
                                                                                    {user.paymentMethod === 'POS' && (
                                                                                        <>
                                                                                            <strong style={{ color: '#007bff' }}>Transaction ID:</strong> {user.transactionID}
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
                                                                                <td style={{ padding: '15px', textAlign: 'center' }}>

                                                                                    <button className="btn btn-sm btn-info me-2"  onClick={() => loadcontent(user.id)}>
                                                                                        <span className="fe fe-edit"></span>
                                                                                    </button>
                                                                                    <button className="btn btn-sm btn-danger"  onClick={() => deletecontent(user.id)}>
                                                                                        <span className="fe fe-trash-2"></span>
                                                                                    </button>
                                                                                  
                                                                                    <br />
                                                                                    <br />
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                        style={{
                                                                                            marginTop: '5px',
                                                                                            backgroundColor: '#17a2b8',
                                                                                            borderColor: '#17a2b8',
                                                                                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                                                                                            display: 'inline-block',
                                                                                        }}
                                                                                        onClick={() => loadcontent2(user.id, user.applicantFirstName, user.applicantMiddleName, user.applicantLastName)}
                                                                                        onMouseEnter={(e) => {
                                                                                            e.target.style.backgroundColor = '#138496';
                                                                                            e.target.style.transform = 'scale(1.05)';
                                                                                        }}
                                                                                        onMouseLeave={(e) => {
                                                                                            e.target.style.backgroundColor = '#17a2b8';
                                                                                            e.target.style.transform = 'scale(1)';
                                                                                        }}
                                                                                    >
                                                                                        Allocate
                                                                                    </button>
                                                                                    <br />
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                        style={{
                                                                                            marginTop: '5px',
                                                                                            backgroundColor: '#17a2b8',
                                                                                            borderColor: '#17a2b8',
                                                                                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                                                                                            display: 'inline-block',
                                                                                        }}
                                                                                        onClick={() => handleOpenModal8(user.id)}
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
                                                                                    </button>
                                                                                </td>
                                                                            </tr>
                                                                        ))}

                                                                    </tbody>
                                                                </table>
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

                <div
                    className={`modal ${isModalOpen8 ? 'show' : ''}`}
                    style={{ display: isModalOpen8 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '300px', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Refund Request By App</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCloseModal8}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '4px', textAlign: 'center' }}>
                                <form>
                                    <div className="modal-body">
                                        Amount: {applicant.amountReceived}
                                        <br />
                                        Pade Mode: {applicant.paymentMethod}
                                        <br />
                                        IGST BSBA: {(applicant.amountReceived / 1.18).toFixed(2)}
                                        <br />
                                        IGST: {(applicant.amountReceived - applicant.amountReceived / 1.18).toFixed(2)}
                                        <br />
                                        Status: Unit Not Allocate
                                    </div>
                                    <div className="modal-footer d-flex justify-content-center">

                                        <button type="button" className="btn btn-primary" onClick={handleSubmit3} >
                                            Refund Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-footer text-center" >
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

export default NotAllocated



