
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



const DrawRefundReports = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [from, setFrom] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [isButtonVisible, setButtonVisible] = useState(false);

    const initialFormData = {
        excelFile: '',
    };



    const [formData2, setFormData2] = useState(initialFormData);
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
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [isModalOpen6, setIsModalOpen6] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
    const [showModal2, setShowModal2] = useState(false);
    const [showPopover, setShowPopover] = useState(false);
    const [isModalOpen8, setIsModalOpen8] = useState(false);
    const [isModalOpen9, setIsModalOpen9] = useState(false);
    const navigation = useNavigate()
    const navigate = useNavigate()
    const buttonRef = useRef(null);
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const loadcontent = (id) => {
        navigation(`/edit-customer/${id}`);
    };
    const loadcontent2 = (id) => {
        navigation(`/allotment-letter/${id}`);
    };
    const loadcontent3 = (id) => {
        navigation(`/welcome-letter/${id}`);
    };
    const handleMouseEnter = () => {
        setButtonVisible(true);
    }

    const handleOpenModal9 = () => {
        setIsModalOpen9(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal9 = () => {
        setIsModalOpen9(false);
        document.body.classList.remove('modal-open');
    };

    const notify = () => {
        toast1(
            <div>
                <h4 style={{ marginBottom: '8px', textAlign: 'center' }}>Notice</h4>
                <p style={{ marginBottom: '8px', textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                </p>
            </div>,
            {
                style: {
                    borderRadius: '8px',
                    background: '#007bff',
                    color: '#fff',
                    padding: '16px',
                    width: '300px',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: '9999'
                },
                duration: 5000,
                icon: 'ℹ️'
            }
        );
    };

    // useEffect(() => {
    //     // Call the notify function every 10 seconds
    //     const interval = setInterval(() => {
    //         notify();
    //     }, 10000); // 10000 milliseconds = 10 seconds

    //     // Clear the interval to prevent memory leaks when the component unmounts
    //     return () => clearInterval(interval);
    // }, []);

    const handleMouseLeave = () => {
        setButtonVisible(false);
    }

    const handleButtonClick = () => {
        setShowPopover(!showPopover);
    };


    const notify2 = () => {
        toast.error('Applicant deleted successfully', {
            style: {
                width: 'auto',
                padding: '16px',
                backgroundColor: '#FF5722', // Set a different color for delete action
                color: 'white',
                borderRadius: '8px',
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: '9999', // Ensure the toast is above other elements
            },
        });
    };

    const handleCloseModal = () => {
        setShowModal2(false);
    };

    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal5 = () => {
        setIsModalOpen5(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal5 = () => {
        setIsModalOpen5(false);
        document.body.classList.remove('modal-open');
    };
    const handleOpenModal6 = () => {
        setIsModalOpen6(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal6 = () => {
        setIsModalOpen6(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal8 = () => {
        setIsModalOpen8(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal8 = () => {
        setIsModalOpen8(false);
        document.body.classList.remove('modal-open');
    };


    const loadData = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
    useEffect(() => {
        loadData();
    }, []);

    const handleConfirm = () => {

        setIsModalOpen4(false);
        handleSubmit2();
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
    const formatDateTime2 = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };
    const formatDateTime3 = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };


    const fetchDataFromApi = () => {



        const { projectId, schemeId, schemeType, from, to } = filterByObj;
        const url = `${apiUrl}/applicant/applicants?id=&mobileNumber=&emailId=&projectId=${projectId}&schemeId=${schemeId}&schemeType=${schemeType}&from=${from}&to=${to}`;
        fetch(url, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            formattedDate: item.applicantDOB ? formatDateTime(item.applicantDOB) : '',
                            formattedDate2: item.coApplicantDOB ? formatDateTime2(item.coApplicantDOB) : '',
                            formattedDate3: item.chequeDate ? formatDateTime2(item.chequeDate) : '',
                        }));
                        setLoading(true);
                        setUsers(formattedData);
                    } else {
                        console.error('API response does not contain companyList array:', data);
                    }
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setLoading(false); // Set loading state to false after data fetching completes
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            // Append the file to formDataToSend
            formDataToSend.append('excelFile', formData2.excelFile);

            const response = await fetch(`${apiUrl}/applicant/updateApplicantExcel`, {
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
            handleCloseModal5()
            setRefresh(!refresh);
            setFormData2(initialFormData); // Reset the form
            alert(response2.message);

        } catch (error) {
            alert(error.message);

        }
    };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Check if file is selected
        if (file) {
            // Check if file type is correct
            if (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                setFormData2({ ...formData2, excelFile: file });
            } else {
                alert('Please upload a valid Excel file.');
            }
        }
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

                    // alert('Response is successful!');
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
        fetchDataFromApi()
    }, [filterByObj]);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }


    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user.applicantFirstName.toLowerCase();

        return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase)
            || user.applicantEmail.includes(searchLowerCase) || user.applicantMobile.includes(searchLowerCase)
            || user.ticketId.includes(searchLowerCase);
    });

    const handleDownloadClick = () => {
        setShowModal(true);
    };

    const handleOkClick = () => {
        setShowModal(false);
        handleSubmit2();
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
                                        Draw Refund Reports
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





                                    </div>
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
                                                                                    <img
                                                                                        alt="avatar"
                                                                                        className="rounded-circle me-3"
                                                                                        src={user.coApplicantImage}
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
                                                                                <td>Cash</td>
                                                                                <td style={{ color: 'purple', fontWeight: 'bold' }}>5100</td>



                                                                                <td>4322.00</td>
                                                                                <td>777.96</td>
                                                                                <td>0</td>

                                                                                <td>0</td>
                                                                                <td>0</td>
                                                                                <td>Not Allocated</td>
                                                                                <td>Requested</td>

                                                                                <td>

                                                                                    <span style={{ color: 'red' }}>Cancelled</span>
                                                                                </td>

                                                                                <td>Aproov Kumar</td>
                                                                                <td>Not Done</td>
                                                                                <td style={{ textAlign: 'center' }}>
                                                                                    <button className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                                        Cancel
                                                                                    </button>
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
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div
                                className={`modal fade ${isModalOpen8 ? 'show d-block' : ''}`}
                                id="modaldemo-callback-form"
                                tabIndex="-1"
                                style={{
                                    display: isModalOpen8 ? 'flex' : 'none',
                                    top: '20px',
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
                                <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px' }}>
                                    <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                            <h5 className="modal-title">Send For Approval</h5>
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

                                        <div className="modal-body" style={{ padding: '10px', textAlign: 'center' }}>
                                            <form>
                                                <div className="row row-sm">
                                                    <div className="col-sm-12 form-group" style={{ marginBottom: '15px' }}>
                                                        <label className="form-label" style={{ textAlign: 'left', fontSize: '12px' }}>Send For Approval</label>
                                                        <select className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '8px', width: '100%', fontSize: '14px', color: '#495057' }}>
                                                            <option value="" style={{ color: '#6c757d' }}>Select</option>
                                                            <option style={{ color: '#495057' }}>Khushal Chopra</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>

                                        <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
                                            <button className="btn ripple btn-primary" type="button" style={{ borderRadius: '5px', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold' }}>
                                                Approve Request
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`modal ${isModalOpen9 ? 'show' : ''}`}
                                style={{
                                    display: isModalOpen9 ? 'block' : 'none',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: 9999,
                                    overflow: 'auto'
                                }}
                                tabIndex="-1"
                                role="dialog"
                            >
                                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '200px', margin: 'auto' }}>
                                    <div className="modal-content" style={{ borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', backgroundColor: '#f8f9fa' }}>
                                        {/* Modal Header */}
                                        <div className="modal-header" style={{ borderBottom: '1px solid #dee2e6', borderRadius: '12px 12px 0 0', padding: '15px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                            <h5 className="modal-title" style={{ margin: 0, fontSize: '18px', color: '#343a40' }}>Complete</h5>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                                onClick={handleCloseModal9}
                                                style={{ outline: 'none', cursor: 'pointer', position: 'absolute', top: '10px', right: '15px', fontSize: '24px', color: '#495057', background: 'none', border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                            >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>

                                        {/* Modal Body */}
                                        <div className="modal-body" style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                            <div style={{ marginBottom: '15px' }}>
                                                {/* <h4 style={{ marginBottom: '15px', fontSize: '16px', color: '#343a40', fontWeight: 'bold' }}>IDs:</h4> */}
                                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                                    {/* List of IDs */}
                                                    <li style={{ marginBottom: '10px', fontSize: '14px', color: '#495057' }}>AMT</li>
                                                    <li style={{ marginBottom: '10px', fontSize: '14px', color: '#495057' }}>SIW</li>
                                                    <li style={{ marginBottom: '10px', fontSize: '14px', color: '#495057' }}>DONE</li>
                                                </ul>
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
                <div className="main-footer text-center" >
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

export default DrawRefundReports








