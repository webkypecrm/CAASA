import React, { useState, useEffect, useContext } from 'react'
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';


const LeadReport = () => {
    const [users, setUsers] = useState([]);
    const [reportingBossA, setReportingBossA] = useState([])
    const [source, setSource] = useState([]);
    const [sources, setSources] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [project, setProject] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(50);

    const [filterByObj, setFilterByObj] = useState({
        to: '',
        from: '',
        status: '',
        employeeId: '',
        utmSource: '',
        isNotConnected: '',
        project: '',

    });

    const [loading, setLoading] = useState(true);
    const [leadCount, setLeadCount] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);

    const navigate = useNavigate()
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

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


    async function getEmp(event) {
        event.preventDefault();

        const { to, from, status, employeeId, utmSource, isNotConnected, project } = filterByObj;
        const url = `${apiUrl}/lead/leadReport?to=${to}&from=${from}&status=${status}&employeeId=${employeeId}&utmSource=${utmSource}&isNotConnected=${isNotConnected}&project=${project}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const data = await response.json();

            if (data.status === 'success') {
                toast.success(data.message);

                // Download the Excel file
                const link = document.createElement('a');
                link.href = data.downloadUrl;
                link.setAttribute('download', 'leads_export.xlsx');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                toast.error(data.message || 'An error occurred');
            }
        } catch (error) {
            toast.error('Failed to fetch data');
        }
    }



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
        const { to, from, status, employeeId, utmSource, isNotConnected, project } = filterByObj;
        const url = `${apiUrl}/lead/getAllLead?to=${to}&from=${from}&status=${status}&employeeId=${employeeId}&page=${pageNumber}&limit=${itemsPerPage}&utmSource=${utmSource}&isNotConnected=${isNotConnected}&project=${project}`;

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
                                    <h2 className="main-content-title tx-24 mg-b-5">Vendor Payout ({leadCount})</h2>
                                </div>

                                <div className="d-flex">
                                    <div className="justify-content-center me-2">

                                        <button
                                            onClick={(event) => getEmp(event)}
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text me-2"
                                        >
                                            <i className="fe fe-download me-2" /> Download Data
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



                                                <div className="col-sm-2 form-group">
                                                    <label className="form-label">Pay For</label>
                                                    <select
                                                        className="form-control select2"
                                                        name="isNotConnected"
                                                        value={filterByObj.isNotConnected}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="">Select</option>
                                                        <option >Connected</option>
                                                        <option >Not Connected</option>

                                                    </select>
                                                </div>

                                                <div className="col-sm-2 form-group">
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

                                                <div className="col-sm-2 form-group" style={{ marginTop: '3px' }}>
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
                                                                <th className='col-2'>Lead IP</th>
                                                                <th className='col-2'>Created At</th>
                                                                <th className='col-2'>Lead Status</th>
                                                                <th className='col-2'>Assigned Info</th>
                                                                <th className='col-2'>Lead Info</th>
                                                                <th className='col-2'>Project</th>
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
                                                                        <strong style={{ color: '#007bff' }}>UTM Source:</strong> {user.utmSource || 'N/A'}


                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>

                                                                        {user.createdAt}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        <strong style={{ color: '#007bff' }}>Status:</strong> {user.status || 'N/A'}


                                                                    </td>

                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        Assign to: {user.employeeId || 'N/A'}

                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        Name: {user.clientName || 'N/A'}
                                                                        <br />
                                                                        Email: {user.emailAddress || 'N/A'}
                                                                        <br />
                                                                        Number: {user.clientNumber || 'N/A'}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        Project: {user.project || 'N/A'}
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

export default LeadReport



