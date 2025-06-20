import React, { useState, useEffect, useContext } from 'react'
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';
import { EmployeeContext } from "../Components/EmployeeContext";
//  let num =0 ;
const SalesLeadsReport = () => {
    // console.log('aaa',num++);
    const [users, setUsers] = useState([]);
    const [reportingBossA, setReportingBossA] = useState([])
    const [status, setStatus] = useState([]);

    const [source, setSource] = useState([]);
    const [sources, setSources] = useState([]);
    const [vendor, setVendor] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isModalOpen6, setIsModalOpen6] = useState(false);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [endDate, setEndDate] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [project, setProject] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(50);
    const employee = useContext(EmployeeContext);

    const [filterByObj, setFilterByObj] = useState({
        to: '',
        from: '',
        clientName: '',
        clientNumber: '',
        status: '',
        employeeId: '',
        project: '',
        source: '',
        size: '',
        search: '',
        utmSource: '',
        vendor: '',
    });

    const initialFormData = {
        excelFile: '',
    };
    const initialFormData3 = {
        empId: '',
    };


    const initialFormData2 = {
        otp: '',
    };
    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(true);
    const [formData2, setFormData2] = useState(initialFormData2);
    const [formData3, setFormData3] = useState(initialFormData3);
    const [leadCount, setLeadCount] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);
    const [downloadUrl, setDownloadUrl] = useState('');
    const navigation = useNavigate()
    const navigate = useNavigate()
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

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

    const loadcontent = (id) => {
        navigation(`/edit-lead/${id}`);
    };

    const loadcontent2 = (id) => {
        navigation(`/DatelsLeads/${id}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            // Append the file to formDataToSend
            formDataToSend.append('excelFile', formData.excelFile);

            const response = await fetch(`${apiUrl}/lead/uploadExcel`, {
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
            handleCloseModal4()
            setRefresh(!refresh);
            setFormData(initialFormData);
            alert(response2.message);

        } catch (error) {
            alert(error.message);

        }
    };

    const leadsAssign = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            // Append the file to formDataToSend
            formDataToSend.append('empId', formData3.empId);

            const response = await fetch(`${apiUrl}/lead/assignLead?leadsId=${selectedItems}`, {
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
            handleCloseModal6()
            setFormData3(initialFormData3);
            fetchDataFromApi()
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);

        }
    };

    const handleInputChangess = (event) => {
        const { name, value } = event.target;
        setFormData3({
            ...formData3,
            [name]: value,
        });
    }


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

    useEffect(() => {
        console.log("Selected Items:", selectedItems);
    }, [selectedItems]);

    // Function to toggle all checkboxes
    const toggleSelectAll = () => {
        if (selectedItems.length === currentPageData.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(currentPageData.map(user => user.id));
        }
    };

    // Function to toggle individual checkbox
    const toggleCheckbox = (userId) => {
        if (selectedItems.includes(userId)) {
            setSelectedItems(selectedItems.filter(id => id !== userId));
        } else {
            setSelectedItems([...selectedItems, userId]);
        }
    };

    useEffect(() => {
        if (downloadUrl) {
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = 'leads_export.xlsx';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setDownloadUrl('');
        }
    }, [downloadUrl]);


    const handleSubmits = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData2) {
                if (formData2[key] !== null) {
                    formDataToSend.append(key, formData2[key]);
                }
            }
            const pageNumber = currentPage + 1;
            const { to, from, clientName, clientNumber, status, employeeId, project, source, size, search, utmSource, vendor } = filterByObj;
            const url = `${apiUrl}/lead/leadExcel?to=${to}&from=${from}&search=${search}&clientName=${clientName}&clientNumber=${clientNumber}&status=${status}&employeeId=${employeeId}&project=${project}&source=${source}&size=${size}&page=${pageNumber}&limit=${itemsPerPage}&leadIds=${selectedItems}&search=${search}&utmSource=${utmSource}&vendor=${vendor}`;
            const response = await fetch(url, {
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

            handleCloseModal5();
            setFormData2(initialFormData2);
            toast.success(response2.message);

            if (response2.status === "success" && response2.downloadUrl) {
                setDownloadUrl(response2.downloadUrl);
            }

        } catch (error) {
            toast.error(error.message);
        }
    };


    const handleInputChanges = (event) => {
        const { name, value } = event.target;
        setFormData2({
            ...formData2,
            [name]: value,
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const Token = localStorage.getItem('Token');
                const headers = Token ? { Authorization: `Bearer ${Token}` } : {};

                // Fetch project data
                let response = await fetch(`${apiUrl}/project/getAllProjectDropdown`);
                let data = await response.json();
                if (data.data && Array.isArray(data.data)) {
                    setProject(data.data);
                } else {
                    console.error('API response is not in the expected format for projects.');
                }

                // Fetch source master data
                response = await fetch(`${apiUrl}/master/getAllMasterData/25`, { headers });
                data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setSources(data.data);
                } else {
                    console.error('API response does not contain an array for sources:', data);
                }

                // Fetch vendor data
                response = await fetch(`${apiUrl}/master/getAllMasterData/26`, { headers });
                data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setVendor(data.data);
                } else {
                    console.error('API response does not contain an array for vendors:', data);
                }

                // Fetch status data
                response = await fetch(`${apiUrl}/master/getAllMasterData/5`, { headers });
                data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setStatus(data.data);
                } else {
                    console.error('API response does not contain an array for status:', data);
                }

                // Fetch source data
                response = await fetch(`${apiUrl}/master/getAllMasterData/6`, { headers });
                data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setSource(data.data);
                } else {
                    console.error('API response does not contain an array for sources:', data);
                }

                // Fetch reporting boss data
                response = await fetch(`${apiUrl}/employee/allEmpDesig`, { headers });
                data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setReportingBossA(data.data);
                } else {
                    console.error('API response does not contain an array for reporting bosses:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Check if file is selected
        if (file) {
            // Check if file type is correct
            if (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                setFormData({ ...formData, excelFile: file });
            } else {
                alert('Please upload a valid Excel file.');
            }
        }
    };

    useEffect(() => {
        if (isModalOpen5) {
            async function getEmp() {
                const url = `${apiUrl}/lead/sendOTP`;

                let response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${Token}`,
                    },
                });
                response = await response.json();

                if (response.status === 'success') {
                    toast.success("Otp send successfully");
                }
            }

            getEmp();
        }
    }, [isModalOpen5]);




    const formatDateTime = (dateTimeString) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };


    useEffect(() => {
        fetchDataFromApi();
    }, [currentPage, filterByObj, itemsPerPage]);


    const fetchDataFromApi = async () => {
        setLoading(true);
        const pageNumber = currentPage + 1;
        const { to, from, clientName, clientNumber, status, employeeId, project, source, size, search, utmSource, vendor } = filterByObj;
        const url = `${apiUrl}/lead/getAllLead?to=${to}&from=${from}&clientName=${clientName}&clientNumber=${clientNumber}&status=${status}&employeeId=${employeeId}&project=${project}&source=${source}&size=${size}&page=${pageNumber}&limit=${itemsPerPage}&search=${search}&utmSource=${utmSource}&vendor=${vendor}`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.status === 'success') {
                if (Array.isArray(data.data)) {
                    const formattedData = data.data.map(item => ({
                        ...item,
                        createdAt: formatDateTime(item.createdAt),
                        updatedAt: formatDateTime(item.updatedAt)
                    }));
                    setUsers(formattedData);
                } else {
                    console.error('API response does not contain employeeList array:', data);
                }

                // Extract leadCount from data and update state
                const fetchedLeadCount = data.leadCount;
                setLeadCount(fetchedLeadCount);
            } else {
                console.error('API request was not successful:', data.message);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };


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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
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
                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">All Sales Lead Report({leadCount})</h2>
                                </div>

                                <div className="d-flex">
                                    <div className="justify-content-center me-2">
                                        <Link
                                            to=""
                                            onClick={handleOpenModal4}

                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text me-2"

                                        >
                                            <i className="fe fe-upload me-2" /> Bulk Upload
                                        </Link>

                                        <div
                                            className={`modal ${isModalOpen4 ? 'show' : ''}`}

                                            tabIndex="-1"
                                            role="dialog"
                                            style={{ display: isModalOpen4 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                                        >
                                            <div className="modal-dialog modal-dialog-centered modal-sl" role="document">
                                                <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                                    <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                                        <h5 className="modal-title">Import Leads</h5>
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

                                                    <div className="modal-body">
                                                        <form>
                                                            <div className="row row-sm">
                                                                <div className="col-sm-12 form-group">
                                                                    <label className="form-label">File Picker</label>
                                                                    <input
                                                                        type="file"
                                                                        accept=".xls, .xlsx"
                                                                        onChange={handleFileChange}
                                                                    />
                                                                </div>

                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <Link
                                                            to="https://amrsapi.webkype.co/uploads/leadAmrs%20(sample).xlsx"
                                                            className="btn ripple btn-primary"
                                                            download

                                                        >
                                                            Download
                                                        </Link>
                                                        <button className="btn ripple btn-primary" fetchLeadData type="button"
                                                            onClick={handleSubmit}>
                                                            Upload
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <button
                                            onClick={handleOpenModal5}
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text me-2"

                                        >
                                            <i className="fe fe-download me-2" /> Download Data
                                        </button>

                                        <div className={`modal ${isModalOpen5 ? 'show' : ''}`} style={{ display: isModalOpen5 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }} tabIndex="-1" role="dialog">
                                            <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '500px' }}>
                                                <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', backgroundColor: '#ffffff' }}>
                                                    <div className="modal-header" style={{ backgroundColor: '#007bff', color: '#ffffff', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', padding: '10px 20px', textAlign: 'center' }}>
                                                        <h5 className="modal-title" style={{ color: 'white' }}>Download</h5>
                                                        <button
                                                            type="button"
                                                            className="close"
                                                            data-dismiss="modal"
                                                            aria-label="Close"
                                                            onClick={handleCloseModal5}
                                                            style={{ position: 'absolute', top: '10px', right: '10px', color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer' }}
                                                        >
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>

                                                    <div className="modal-body" style={{ padding: '20px', textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
                                                        <p style={{ marginBottom: '10px', fontSize: '1.1rem' }}>Download Request By: <strong>{employee.fullName}</strong></p>
                                                        <p style={{ marginBottom: '20px' }}>OTP Sent To: <strong>{employee.phoneNumber}(Khushal Chopra)</strong></p>
                                                        <form>
                                                            <div className="form-group">
                                                                <label htmlFor="otpInput" className="form-label">Enter OTP</label>
                                                                <input
                                                                    type="text"
                                                                    id="otpInput"
                                                                    className="form-control"
                                                                    placeholder="Enter OTP"
                                                                    name="otp"
                                                                    value={formData2.otp}
                                                                    onChange={handleInputChanges}
                                                                    maxLength={6}
                                                                    style={{ textAlign: 'center', fontSize: '1.2rem', padding: '8px', borderRadius: '5px', border: '1px solid #ced4da', fontFamily: 'Roboto, sans-serif' }}
                                                                />
                                                            </div>
                                                        </form>
                                                    </div>


                                                    <div className="modal-footer" style={{ backgroundColor: '#f8f9fa', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', padding: '10px 20px', textAlign: 'center' }}>
                                                        <button
                                                            onClick={handleSubmits}
                                                            className="btn btn-primary"
                                                            type='button'
                                                            style={{ textDecoration: 'none', color: '#ffffff', backgroundColor: '#007bff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
                                                        >
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <Link
                                            to="/add-sales-lead"
                                            type="button"
                                            className="btn btn-primary my-1 btn-icon-text me-1 "

                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add New Lead
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
                                                <div className="col-sm-3 form-group">
                                                    <label className="form-label">Search</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="search"
                                                        value={filterByObj.search}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label className="form-label">Status:</label>
                                                    <select
                                                        className="form-control"
                                                        name="status"
                                                        value={filterByObj.status}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="">Select</option>
                                                        {status.map((option) => (
                                                            <option key={option.id} value={option.name}>
                                                                {option.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label className="form-label">Assigned:</label>
                                                    <select
                                                        className="form-control select2"
                                                        name="employeeId"
                                                        value={filterByObj.employeeId}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="">Select</option>
                                                        {reportingBossA.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.fullName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="form-label">Select Date Form/To</label>
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
                                                <div className="col-sm-3 form-group" style={{ marginTop: '3px' }}>
                                                    <label className="form-label">UTM Source</label>
                                                    <select
                                                        className="form-control"
                                                        name="utmSource"
                                                        value={filterByObj.utmSource}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="">Select</option>
                                                        {source.map((option) => (
                                                            <option key={option.id} value={option.name}>
                                                                {option.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-3 form-group" style={{ marginTop: '3px' }}>
                                                    <label className="form-label">Project</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="project"
                                                        value={filterByObj.project}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="">Select</option>
                                                        {project.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.projectName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-3 form-group" style={{ marginTop: '3px' }}>
                                                    <label className="form-label">Source</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="source"
                                                        value={filterByObj.source}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="">Select</option>
                                                        {sources.map((option) => (
                                                            <option key={option.id} value={option.name}>
                                                                {option.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-3 form-group" style={{ marginTop: '3px' }}>
                                                    <label className="form-label">Vendor</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="vendor"
                                                        value={filterByObj.vendor}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="">Select</option>
                                                        {vendor.map((option) => (
                                                            <option key={option.id} value={option.name}>
                                                                {option.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-sm-3 form-group" style={{ marginTop: '3px' }}>
                                                    <label className="form-label">Size</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="size"
                                                        value={filterByObj.size}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>

                                                <div className="col-sm-0 d-flex justify-content-end" style={{ marginTop: '-50px' }}>
                                                    {selectedItems.length > 0 && (
                                                        <button
                                                            onClick={handleOpenModal6}
                                                            type="button"
                                                            className="btn btn-primary my-2 btn-icon-text me-0"
                                                            style={{
                                                                height: '20px',
                                                                backgroundColor: '#007bff',
                                                                borderColor: '#007bff'
                                                            }}
                                                        >
                                                            Bulk Assign
                                                        </button>
                                                    )}
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Row */}
                            <div className="row-sm">
                                <div className="col-lg-12">

                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="table-responsive">

                                                <div className="d-flex align-items-center" >
                                                    <div>
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
                                                {loading ? (
                                                    <div style={loaderStyles.overlay}>
                                                        <div style={loaderStyles.loaderContainer}>
                                                            <div style={loaderStyles.dot}></div>
                                                            <div style={{ ...loaderStyles.dot, animationDelay: '0.2s' }}></div>
                                                            <div style={{ ...loaderStyles.dot, animationDelay: '0.4s' }}></div>
                                                        </div>
                                                    </div>
                                                ) : (

                                                    <table className="table table-striped table-bordered" style={{ marginTop: '7px' }}>
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <label className="ckbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={selectedItems.length === currentPageData.length}
                                                                            onChange={toggleSelectAll}
                                                                        />
                                                                        <span />
                                                                    </label>
                                                                </th>
                                                                <th className='col-3'>Lead IP</th>
                                                                <th className='col-3'>Assigned Info</th>
                                                                <th className='col-3'>Lead Info</th>
                                                                <th className='col-3'>Assign to</th>
                                                                <th className='col-1' style={{ whiteSpace: 'nowrap' }}>Last Status</th>
                                                                <th className='col-2'>Actions</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {currentPageData.map((user) => (

                                                                <tr key={user.id}>
                                                                    <td>
                                                                        <label className="ckbox">
                                                                            <input
                                                                                type="checkbox"
                                                                                checked={selectedItems.includes(user.id)}
                                                                                onChange={() => toggleCheckbox(user.id)}
                                                                            />
                                                                            <span />
                                                                        </label>
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        ID: {user.id}
                                                                        <br />
                                                                        Created At: {user.createdAt}
                                                                        <br />
                                                                        UTM Source: {user.utmSource || 'N/A'}
                                                                        <br />
                                                                        Flag: {user.previousInfo || 'N/A'}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        Project: {user.project || 'N/A'}
                                                                        <br />
                                                                        Unit Size: {user.size || 'N/A'}
                                                                        <br />
                                                                        Client Budget: {user.clientBudget || 'N/A'}
                                                                        <br />
                                                                        Source: {user.source || 'N/A'}
                                                                        <br />
                                                                        Vendor : {user.vendor || 'N/A'}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        Name: {user.clientName || 'N/A'}
                                                                        <br />
                                                                        Email: {user.emailAddress || 'N/A'}
                                                                        <br />
                                                                        Number: {user.clientNumber || 'N/A'}
                                                                        <br />
                                                                        Address: {user.address || 'N/A'}
                                                                        <br />
                                                                        Pin Code: {user.pincode || 'N/A'}

                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        Assign to: {user.employeeId || 'N/A'}
                                                                        <br />
                                                                        Email: {user.emp?.emailId || 'N/A'}
                                                                        <br />
                                                                        Phone no: {user.emp?.phoneNumber || 'N/A'}
                                                                        <br />
                                                                        Designation: {user.emp?.designation || 'N/A'}
                                                                        <br />
                                                                        Assign Date: N/A
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        Update Date: {user.updatedAt || 'N/A'}
                                                                        <br />
                                                                        Activeness Meter: {user.activenessMeter || 'N/A'}
                                                                        <br />
                                                                        Status: {user.status || 'N/A'}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        <a onClick={() => loadcontent2(user.id)} title="View">
                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                        </a>
                                                                        <a onClick={() => loadcontent(user.id)}>
                                                                            <i className="fa fa-edit me-3" style={{ cursor: 'pointer' }} />
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

                            {/* End Row */}
                        </div>
                    </div>
                </div>


                <div
                    className={`modal ${isModalOpen6 ? 'show' : ''}`}

                    tabIndex="-1"
                    role="dialog"
                    style={{ display: isModalOpen6 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document">
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Bulk Assign</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCloseModal6}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>

                                </button>

                            </div>

                            <div className="modal-body">
                                <form>
                                    <div className="row row-sm">
                                        <div className="col-sm-12 form-group">
                                            <label className="form-label">Lead Assign</label>
                                            <select
                                                className="form-control select2"
                                                name="empId"
                                                value={formData3.empId}
                                                onChange={handleInputChangess}
                                            >
                                                <option value="">Select</option>
                                                {reportingBossA.map((option) => (
                                                    <option key={option.id} value={option.id}>
                                                        {option.fullName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn ripple btn-primary" fetchLeadData type="button"
                                    onClick={leadsAssign}>
                                    Submit
                                </button>

                            </div>
                        </div>
                    </div>
                </div>


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

export default SalesLeadsReport

