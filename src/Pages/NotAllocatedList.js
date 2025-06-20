import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';

const NotAllocatedList = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [from, setFrom] = useState('');
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        schemeType: '',
        projectId: '',
    });

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
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isModalOpen8, setIsModalOpen8] = useState(false);
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


    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
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



    const handleConfirm = () => {

        setIsModalOpen4(false);
        handleSubmit2();
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

    const handleSubmit2 = () => {
        const url = `${from}`;

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'applicants.xlsx');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

            })
            .catch((error) => {
                console.error('Error fetching or downloading file:', error);
            });
    };



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
        setLoading(true);
        const pageNumber = currentPage + 1;
        const { projectId, schemeId, schemeType, from, to, stage, search } = filterByObj;
        const url = `${apiUrl}/applicant/applicants?projectId=${projectId}&schemeId=${schemeId}&schemeType=${schemeType}&from=${from}&to=${to}&search=${search}&page=${pageNumber}&limit=${itemsPerPage}&stage=${stage}&isRefund=false`;

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
                handleSubmit7();
            } else {
                console.error('API response error:', data.message || 'Invalid data format');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    const handleSubmit7 = (event) => {
        event.preventDefault();

        const { projectId, schemeId, schemeType, from, to } = filterByObj;
        const url = `${apiUrl}/applicant/export-to-excel?id=&mobileNumber=&emailId=&projectId=${projectId}&schemeId=${schemeId}&schemeType=${schemeType}&from=${from}&to=${to}`;

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    // Response success alert
                    setFrom(data.data.fileURL);
                    handleOpenModal4()
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
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
                                        Not Allocate List ({leadCount})
                                    </h2>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <div
                                            className={`modal ${isModalOpen4 ? 'show' : ''}`}
                                            style={{ display: isModalOpen4 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                                            tabIndex="-1"
                                            role="dialog"
                                        >
                                            <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '500px', margin: 'auto' }}>
                                                <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                                    <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                                        <h5 className="modal-title">Download Applicant</h5>
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

                                                    <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                                        <form>
                                                            <div className="modal-body">
                                                                Please Download Applicant
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
                                                                <button type="button" className="btn btn-primary" onClick={handleConfirm}>
                                                                    Ok
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {" "}
                                        <button
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                            onClick={handleSubmit7}
                                        >
                                            {" "}
                                            Download Applicant
                                        </button>

                                        {" "}
                                        <Link
                                            to="/add-customer"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Applicant
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
                                                                                        <strong style={{ color: '#007bff' }}>N:</strong> {user.applicantFirstName || 'N/A'} {user.applicantMiddleName} {user.applicantLastName}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>E:</strong> {user.applicantEmail || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>M:</strong> +91 {user.applicantMobile || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Alt:</strong> +91 {user.applicantAlternateNumber || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Father's Name:</strong> {user.applicantFatherName || 'N/A'}
                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
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
                                                                                        <strong style={{ color: '#007bff' }}>Address:</strong> <div dangerouslySetInnerHTML={{ __html: breakContent(user.applicantAddress || 'N/A', 40) }} />

                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>DOB:</strong> {user.formattedDate || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Aadhaar Number:</strong> {user.applicantAadhaarNumber || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Aadhaar Image:</strong>
                                                                                        <Link to={user.applicantAadhaarImage} title="Aadhaar Image" target="_blank">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>PAN:</strong> {user.applicantPAN || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>PAN Image:</strong>
                                                                                        <Link to={user.applicantPanImage} title="Pan Image" target="_blank">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Nationality:</strong> {user.applicantNationality || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Profession:</strong> {user.applicantProfession || 'N/A'}
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
                                                                                        <strong style={{ color: '#007bff' }}>N:</strong> {user.coApplicantFirstName || 'N/A'} {user.coApplicantMiddleName} {user.coApplicantLastName}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>E:</strong> {user.coApplicantEmail || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>M:</strong> +91 {user.coApplicantMobile || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Alt:</strong> +91 {user.coApplicantAlternateNumber || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Father's Name:</strong> {user.coApplicantFatherName || 'N/A'}
                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Country:</strong> {user.coApplicantCountry || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>State:</strong> {user.coApplicantState || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>City:</strong> {user.coApplicantCity || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Pin code:</strong> {user.coApplicantPincode || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Landmark:</strong> {user.coApplicantLandMark || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Address:</strong> <div dangerouslySetInnerHTML={{ __html: breakContent(user.coApplicantAddress || 'N/A', 40) }} />

                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>DOB:</strong> {user.formattedDate2 || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Aadhaar Number:</strong> {user.coApplicantAadhaarNumber || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Aadhaar Image:</strong>
                                                                                        <Link to={user.coApplicantAadhaarImage} title="Aadhaar Image" target="_blank">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>PAN:</strong> {user.coApplicantPAN || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>PAN Image:</strong>
                                                                                        <Link to={user.coApplicantPanImage} title="Pan Image" target="_blank">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Nationality:</strong> {user.coApplicantNationality || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Profession:</strong> {user.coApplicantProfession || 'N/A'}
                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Scheme:</strong> <div dangerouslySetInnerHTML={{ __html: breakContent(user.schemeId || 'N/A', 20) }} />
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Advisor:</strong> {user.advisorId || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Lucky Draw:</strong> {user.luckyDrawId || 'N/A'}

                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Unit Type:</strong> {user.schemeType || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Size:</strong> {user.sizeType || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Facing:</strong> {user.facing || 'N/A'}
                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Amount Received:</strong> {user.amountReceived || 'N/A'}
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
                                                                                        Area: <font color="red">{user.area || 'N/A'}</font>
                                                                                        <br />
                                                                                        Gift: <font color="red">{user.gift || 'N/A'}</font>

                                                                                    </td>
                                                                                    <td style={{ padding: '15px', textAlign: 'center' }}>

                                                                                        <button className="btn btn-sm btn-info me-2" onClick={() => loadcontent(user.id)}>
                                                                                            <span className="fe fe-edit"></span>
                                                                                        </button>
                                                                                        <button className="btn btn-sm btn-danger" onClick={() => deletecontent(user.id)}>
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

export default NotAllocatedList

