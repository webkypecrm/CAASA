import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DocumentList = () => {
    const { empid } = useParams();

    const initialFormData2 = {
        documentName: '',
        sentFromEmail: '',
        sentToEmail: '',
        sentBy: '',
        sentDate: '',
        sentDateISO: '',
        sentStatus: '',
        formatSize: '',
        uploadDocument: '',
        remark: '',
    };

    const [formData2, setFormData2] = useState(initialFormData2);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [isModalOpen16, setIsModalOpen16] = useState(false);
    const [employee2, setEmployee2] = useState({})
    const [reportingBossA, setReportingBossA] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const handleOpenModal16 = () => {
        setIsModalOpen16(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal16 = () => {
        setIsModalOpen16(false);
        document.body.classList.remove('modal-open');
    };

    useEffect(() => {
        const Token = localStorage.getItem('Token');

        fetch(`${apiUrl}/employee/allEmpDesig`, {
            headers: {
                'Authorization': `Bearer ${Token}`

            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setReportingBossA(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);


    const handleSubmit2 = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData2) {
                if (formData2[key] !== null) {
                    formDataToSend.append(key, formData2[key]);
                }
            }

            const response = await fetch(`${apiUrl}/document/addDocument?applicantId=${empid}`, {
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
            fetchDataFromApi()
            handleCloseModal16()
            setFormData2(initialFormData2);
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);

        }
    };

    const handleInputChange2 = (event) => {
        const { name, value } = event.target;
        setFormData2({
            ...formData2,
            [name]: value,
        });
    }


    const handleFileChange20 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const applicantImageFile = files[0];

            if (applicantImageFile.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)

                setFormData2((prevData) => ({
                    ...prevData,
                    uploadDocument: applicantImageFile,
                }));
            } else if (applicantImageFile.type === 'application/pdf') {
                // Handle PDF files
                setFormData2((prevData) => ({
                    ...prevData,
                    uploadDocument: applicantImageFile,
                }));
            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };


    useEffect(() => {
        async function getEmpp() {

            const url = `${apiUrl}/applicant/getApplicantInfo/${empid}`;
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            })
            response = await response.json();

            if (response.status === "success") {
                setEmployee2(response.data);
            }
        }
        getEmpp();
    }, [])


    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    //list Scheme data
    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/document/getDocument?applicantId=${empid}`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {
                const cleanedData = data.data.map(item => ({
                    ...item,

                    sentDate: item.sentDate ? formatDateTime(item.sentDate) : null,
                }));
                setUsers(cleanedData);
            } else {
                console.error('API response was not successful or does not contain an array:', data.message || data);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };


    useEffect(() => {
        fetchDataFromApi();
    }, []);

    // Filtered users remain the same
    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user.documentName.toLowerCase();

        return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase);
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
                                    <h2 className="main-content-title tx-24 mg-b-5">Document List</h2>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <button
                                            onClick={handleOpenModal16}
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Document
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
                                                <div className="col-sm-12">
                                                    <input
                                                        type="search"
                                                        className="form-control form-control"
                                                        placeholder="Search..."
                                                        aria-controls="example1"
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                </div>

                                            </div>
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
                                                                    <table className="table table-striped table-bordered  mb-0">
                                                                        <thead >
                                                                            <tr>
                                                                                <th style={{ width: 20 }}>
                                                                                    <label className="ckbox">
                                                                                        <input type="checkbox" defaultValue={5} />
                                                                                        <span />
                                                                                    </label>
                                                                                </th>
                                                                                <th >ID</th>
                                                                                <th >Document Name</th>
                                                                                <th >Date</th>
                                                                                <th >Send Form (Email ID)</th>
                                                                                <th >Send To (Email ID)</th>
                                                                                <th >Format</th>
                                                                                <th >Send by</th>
                                                                                <th>Status</th>
                                                                                <th >Upload Document</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {filteredUsers.map((user) => {
                                                                                return (
                                                                                    <tr key={user.id}>
                                                                                        <td>
                                                                                            <label className="ckbox">
                                                                                                <input type="checkbox" defaultValue={5} />
                                                                                                <span />
                                                                                            </label>
                                                                                        </td>
                                                                                        <td>{user.id}</td>
                                                                                        <td>{user.documentName}</td>
                                                                                        <td>{user.sentDate}</td>
                                                                                        <td>{user.sentFromEmail}</td>
                                                                                        <td>{user.sentToEmail}</td>
                                                                                        <td>{user.fromatSize}</td>
                                                                                        <td>{user.sentBy}</td>
                                                                                        <td >
                                                                                            {user.sentStatus === 'Successfully' && (
                                                                                                <span style={{ color: 'green' }}>{user.sentStatus}</span>

                                                                                            )}
                                                                                            {user.sentStatus === 'Not Successfully' && (
                                                                                                <span style={{ color: 'red' }}>{user.sentStatus}</span>

                                                                                            )}
                                                                                        </td>
                                                                                        <td>
                                                                                            <Link to={user.uploadDocument} target='__blanck' title="Document">
                                                                                                <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                            </Link>

                                                                                        </td>
                                                                                    </tr>
                                                                                );
                                                                            })}

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
                        style={{ maxWidth: '150%', margin: 'auto' }}
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
                                <h5 className="modal-title">Add Document</h5>
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
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1px' }}>
                                                <label
                                                    className="form-label"
                                                    htmlFor="kyc"
                                                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                >
                                                    Customer ID: {employee2.id}
                                                </label>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1px' }}>
                                                <label
                                                    className="form-label"
                                                    htmlFor="payment"
                                                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                >
                                                    Customer Name: {employee2.applicantFirstName} {employee2.applicantLastName}
                                                </label>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1px' }}>
                                                <label
                                                    className="form-label"
                                                    htmlFor="penalty"
                                                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                >
                                                    Lucky Draw: {employee2 && employee2.luckyDraw && `${employee2.luckyDraw.luckyDrawName}`}
                                                </label>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1px' }}>
                                                <label
                                                    className="form-label"
                                                    htmlFor="issue"
                                                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                >
                                                    Scheme: {employee2.schemeId}
                                                </label>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1px' }}>
                                                <label
                                                    className="form-label"
                                                    htmlFor="issue"
                                                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                >
                                                    Project: {employee2 && employee2.project && `${employee2.project.projectName}`}
                                                </label>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1px' }}>
                                                <label
                                                    className="form-label"
                                                    htmlFor="issue"
                                                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                >
                                                    Unit Type: {employee2 && employee2.inventory && `${employee2.inventory.type}`}
                                                </label>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1px' }}>
                                                <label
                                                    className="form-label"
                                                    htmlFor="issue"
                                                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                >
                                                    Unit Number: {employee2 && employee2.inventory && `${employee2.inventory.unitNo}`}
                                                </label>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1px' }}>
                                                <label
                                                    className="form-label"
                                                    htmlFor="issue"
                                                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                >
                                                    Payment Plan: {employee2.paymentPlan}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-sm">
                                        <div className="col-sm-3 form-group">
                                            <label className="form-label">Document Name </label>
                                            <input type="text" className="form-control"
                                                name="documentName"
                                                value={formData2.documentName}
                                                onChange={handleInputChange2}
                                            />
                                        </div>
                                        <div className="col-sm-3 form-group">
                                            <label className="form-label">Send Form (Email) </label>
                                            <input type="text" className="form-control"
                                                name="sentFromEmail"
                                                value={formData2.sentFromEmail}
                                                onChange={handleInputChange2}

                                            />
                                        </div>
                                        <div className="col-sm-3 form-group">
                                            <label className="form-label">Send To (Email) </label>
                                            <input type="text" className="form-control"
                                                name="sentToEmail"
                                                value={formData2.sentToEmail}
                                                onChange={handleInputChange2}
                                            />
                                        </div>
                                        <div className="col-sm-3 form-group">
                                            <label className="form-label">Send by </label>
                                            <select className="form-control select2"
                                                name="sentBy"
                                                value={formData2.sentBy}
                                                onChange={handleInputChange2}
                                            >
                                                <option value=''>Select </option>
                                                {reportingBossA.map((option, index) => (
                                                    <option key={option.id} value={option.id}>
                                                        {option.fullName}
                                                    </option>
                                                ))}


                                            </select>

                                        </div>
                                        <div className="col-sm-3 form-group">
                                            <label className="form-label">Send Date </label>
                                            <input type="date" className="form-control"
                                                name="sentDate"
                                                value={formData2.sentDate}
                                                onChange={handleInputChange2}
                                            />
                                        </div>
                                        <div className="col-sm-3 form-group">
                                            <label className="form-label">Send Status </label>
                                            <select className="form-control select2"
                                                name="sentStatus"
                                                value={formData2.sentStatus}
                                                onChange={handleInputChange2}
                                            >
                                                <option value=''>Select </option>
                                                <option >Successfully</option>
                                                <option >Not Successfully</option>

                                            </select>

                                        </div>
                                        <div className="col-sm-3 form-group">
                                            <label className="form-label">Format/Size</label>
                                            <select className="form-control select2"
                                                name="formatSize"
                                                value={formData2.formatSize}
                                                onChange={handleInputChange2}
                                            >
                                                <option value=''>Select </option>
                                                <option >PDF</option>
                                                <option >DOCS</option>
                                                <option >Image</option>

                                            </select>

                                        </div>
                                        <div className="col-sm-3 form-group">
                                            <label className="form-label">Upload Document</label>
                                            <input type="file" className="form-control"
                                                onChange={handleFileChange20}

                                            />
                                        </div>
                                        <div className="col-sm-12 form-group">
                                            <label className="form-label">Remark</label>
                                            <input type="text" className="form-control"
                                                name="remark"
                                                value={formData2.remark}
                                                onChange={handleInputChange2}
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
                                    onClick={handleSubmit2}

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
                {/* End Main Content*/}
                {/* Main Footer*/}
                <div className="main-footer text-center">
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

export default DocumentList

