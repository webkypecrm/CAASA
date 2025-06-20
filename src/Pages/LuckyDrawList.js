import React, { useState, useEffect, useRef } from 'react'
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Inventory from './Inventory';
import ReactPaginate from 'react-paginate';


const LuckyDrawList = () => {
    const dropdownRef = useRef(null);
    const [users, setUsers] = useState([]);

    const initialFormData = {
        announcementTime: '',
        closeTime: '',
    };
    const [formData, setFormData] = useState(initialFormData);

    const [filterByObj, setFilterByObj] = useState({
        search: '',
        projectId: '',
        schemeId: '',
        schemeType: '',
        unitNo: '',
        plc: '',
        size: '',
        allocatedTo: '',
        availability: '',
        registry: '',
        status: '',
        currentLuckyDraw: ''

    });

    const [idData, setIdData] = useState('');
    const [idDatas, setIdDatas] = useState('');
    const [scame, setScame] = useState([]);
    const [project, setProject] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [luckeyDraw, setLuckeyDraw] = useState('');
    const [timeLeft, setTimeLeft] = useState(120);
    const [showTimer, setShowTimer] = useState(true);
    const [isCurrent, setIsCurrent] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [leadCount, setLeadCount] = useState(0);


    // Handle change event for radio buttons
    const handleOptionChange = (event) => {
        // Update state based on selected value
        setIsCurrent(event.target.value === 'current');
    };

    const navigate = useNavigate()
    const navigation = useNavigate()
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState("");



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const loadcontent = (id, name, plan, lucky) => {
        navigation(`/create-plan/${id}/${name}/${plan}/${lucky}`);
    };

    const loadcontent2 = (id) => {
        navigation(`/plan-views/${id}`);
    };

    const loadcontent3 = (id) => {
        navigation(`/edit-lucky-draw/${id}`);
    };

    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    const formatTime2 = (timeString) => {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);

        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        return date.toLocaleTimeString('en-IN', options);
    };


    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        if (timeLeft <= 0) {
            setShowTimer(false);
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);


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

    //schame
    useEffect(() => {

        const url = `${apiUrl}/scheme/schemeDropdown`;
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
    }, []);


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


    // Handle input change for the specific user
    const handleInputChange = (e, id) => {
        const { name, value } = e.target;

        if (!isValidTime(value)) {
            toast.error("Please enter a valid time in 24-hour format (HH:mm).");
            return;
        }

        setFormData((prevData) => ({
            ...prevData,
            [id]: {
                ...prevData[id],
                [name]: value,
            },
        }));
    };


    const handleInputChangess = (e, id) => {
        const { name, value } = e.target;

        if (!isValidTime(value)) {
            toast.error("Please enter a valid time in 24-hour format (HH:mm).");
            return;
        }

        setFormData((prevData) => ({
            ...prevData,
            [id]: {
                ...prevData[id],
                [name]: value,
            },
        }));
    };


    const isValidTime = (time) => {
        const regex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
        return regex.test(time);
    };


    const handleInputClick = (id) => {
        setIdData(id);
    };


    const handleInputClicks = (id) => {
        setIdData(id);
    };


    useEffect(() => {
        if (!idData || !formData[idData]?.announcementTime)

            if (!idData || !formData[idData]?.closeTime) return;

        const getEmpTime = async () => {
            const url = `${apiUrl}/luckyDraw/updateLuckyDrawTime?luckyDrawId=${idData}&announcementTime=${formData[idData].announcementTime || ''}&announcementCloseTime=${formData[idData].closeTime}`;

            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        "Content-Type": "application/json",
                    },
                });

                const result = await response.json();

                if (response.ok && result.status === "success") {
                    fetchDataFromApi()
                    // setFormData(initialFormData)
                    toast.success(result.message);
                } else {
                    toast.error(result.message || "Failed to update time.");
                }
            } catch (error) {
                toast.error("Failed to update lucky draw time. Please try again.");
                console.error("Error:", error);
            }
        };

        getEmpTime();
    }, [idData, formData, apiUrl, Token]);



    //list lucky draw 
    const fetchDataFromApi = async () => {

        const pageNumber = currentPage + 1;
        const { search, schemeId, projectId, schemeType, status, currentLuckyDraw } = filterByObj;

        try {
            const response = await fetch(`${apiUrl}/luckyDraw/luckDrawList?search=${search}&schemeId=${schemeId}&projectId=${projectId}&schemeType=${schemeType}&status=${status}&currentLuckyDraw=${isCurrent}&page=${pageNumber}&limit=${itemsPerPage}`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            const fetchedLeadCount = data.totalLuckyDrawCount;
            setLeadCount(fetchedLeadCount);

            setLuckeyDraw(data.luckDrawCount)
            if (data.status === 'success') {
                if (Array.isArray(data.data)) {
                    const formattedData = data.data.map(item => ({
                        ...item,
                        startDate: item.startDate ? formatDateTime(item.startDate) : null,
                        startTime: item.startTime ? formatTime2(item.startTime) : null,

                        endDate: item.endDate ? formatDateTime(item.endDate) : null,
                        endTime: item.endTime ? formatTime2(item.endTime) : null,

                        announcementDate: item.announcementDate ? formatDateTime(item.announcementDate) : null,
                        announcementTime: item.announcementTime ? formatTime2(item.announcementTime) : null,

                        closeDate: item.closeDate ? formatDateTime(item.closeDate) : null,
                        closeTime: item.closeTime ? formatTime2(item.closeTime) : null,
                        announcementCloseTime: item.announcementCloseTime ? formatTime2(item.announcementCloseTime) : null,

                    }));
                    setUsers(formattedData);
                } else {
                    console.error('API response does not contain an array:', data);
                }

            } else {
                console.error('API request was not successful:', data.message);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };


    useEffect(() => {
        fetchDataFromApi()
    }, [filterByObj, isCurrent, itemsPerPage, currentPage]);




    const currentPageData = users;


    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };


    const breakContent = (content, length) => {
        const chunks = [];
        for (let i = 0; i < content.length; i += length) {
            chunks.push(content.substring(i, i + length));
        }
        return chunks.join('<br />');
    };


    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);



    useEffect(() => {
        const token = localStorage.getItem('Token');

        if (!token) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>
            {/* Page */}
            <div className="page">

                <TopHeader />
                <Prince />

                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header d-flex align-items-center justify-content-between">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Lucky Draw List  ({leadCount})-({luckeyDraw})
                                    </h2>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label className="me-4 d-flex align-items-center">
                                        <input
                                            type="radio"
                                            value="all"
                                            name="options"
                                            style={{ width: '20px', height: '20px', marginRight: '10px' }}
                                            checked={!isCurrent}
                                            onChange={handleOptionChange}
                                        />
                                        Show All
                                    </label>
                                    <label className="me-4 d-flex align-items-center">
                                        <input
                                            type="radio"
                                            value="current"
                                            name="options"
                                            checked={isCurrent}
                                            onChange={handleOptionChange}
                                            style={{ width: '20px', height: '20px', marginRight: '10px' }}
                                        />
                                        Show Current
                                    </label>
                                    <Link
                                        to='/add-lucky-draw'
                                        type="button"
                                        className="btn btn-primary btn-icon-text"
                                        style={{ marginLeft: '20px', padding: '8px 16px', fontSize: '16px' }}

                                        onChange={handleOptionChange}
                                    >
                                        <i className="fe fe-plus me-2" /> Add Lucky Draw
                                    </Link>
                                </div>
                            </div>



                            {/* End Page Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <input
                                                        type="search"
                                                        className="form-control form-control"
                                                        placeholder="Search by Luck Draw No, Name..."
                                                        aria-controls="example1"
                                                        name="search"
                                                        value={filterByObj.search}
                                                        onChange={handleInputChange2}
                                                    />
                                                </div>

                                                <div className="col-sm-4">
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


                                                <div className="col-sm-4" >
                                                    <div ref={dropdownRef} style={{ position: "relative", width: "408px" }}>
                                                        {/* Dropdown Header */}
                                                        <div
                                                            className="form-control select2"
                                                            style={{
                                                                height: "35px",
                                                                border: "1px solid #ccc",
                                                                padding: "10px",
                                                                cursor: "pointer",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "space-between",
                                                                overflow: "hidden",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                borderRadius: "5px",
                                                                marginTop: '1px',
                                                                marginRight: '90px'
                                                            }}
                                                            onClick={() => setIsOpen((prev) => !prev)}
                                                        >
                                                            <span>
                                                                {selectedIds
                                                                    ? project.find((item) => item.id === selectedIds)?.projectName || "Select project"
                                                                    : "Select project"}
                                                            </span>
                                                        </div>

                                                        {/* Dropdown Items */}
                                                        {isOpen && (
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    top: "35px",
                                                                    left: "0",
                                                                    width: "100%",
                                                                    maxHeight: "200px",
                                                                    overflowY: "scroll",
                                                                    border: "1px solid #ccc",
                                                                    backgroundColor: "#fff",
                                                                    zIndex: 1000,
                                                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                                                    borderRadius: "4px",
                                                                }}
                                                            >
                                                                {/* Default option */}
                                                                <div
                                                                    style={{
                                                                        padding: "10px",
                                                                        cursor: "pointer",
                                                                        borderBottom: "1px solid #eee",
                                                                        backgroundColor: "#fff",
                                                                    }}
                                                                    onClick={() => {
                                                                        setSelectedIds(null);
                                                                        setFilterByObj((prev) => ({ ...prev, projectId: "" }));
                                                                        setIsOpen(false); // Close dropdown after selection
                                                                    }}
                                                                >
                                                                    Select project
                                                                </div>

                                                                {/* Loop through project options */}
                                                                {project
                                                                    .filter((option) => option.projectName && option.projectName !== "N/A")
                                                                    .map((option) => (
                                                                        <div
                                                                            key={option.id}
                                                                            style={{
                                                                                padding: "10px",
                                                                                cursor: "pointer",
                                                                                borderBottom: "1px solid #eee",
                                                                                backgroundColor: selectedIds === option.id ? "#f1f1f1" : "#fff",
                                                                                transition: "background-color 0.2s ease-in-out",
                                                                            }}
                                                                            onClick={() => {
                                                                                setSelectedIds(option.id);
                                                                                setFilterByObj((prev) => ({ ...prev, projectId: option.id }));
                                                                                setIsOpen(false); // Close dropdown after selection
                                                                            }}
                                                                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
                                                                            onMouseLeave={(e) => (e.target.style.backgroundColor = selectedIds === option.id ? "#f1f1f1" : "#fff")}
                                                                        >
                                                                            {option.projectName}
                                                                        </div>
                                                                    ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="col-sm-4">
                                                    <select className="form-control select2"
                                                        name="schemeType"
                                                        value={filterByObj.schemeType}
                                                        onChange={handleInputChange2}
                                                        style={{ marginTop: '10px' }}
                                                    >
                                                        <option value=''>Select Type</option>
                                                        {displayStatus.map((option, index) => (
                                                            <option key={option.id} value={option.name}>
                                                                {option.name}
                                                            </option>
                                                        ))}

                                                    </select>
                                                </div>


                                                <div className="col-sm-4">
                                                    <select className="form-control select2"
                                                        name="status"
                                                        value={filterByObj.status}
                                                        onChange={handleInputChange2}
                                                        style={{ marginTop: '10px' }}
                                                    >
                                                        <option value=''>Registration Status</option>
                                                        <option>Not Open</option>
                                                        <option>Open</option>
                                                        <option>Closed</option>


                                                    </select>
                                                </div>

                                                {/* <div className="col-sm-4">
                                                    <select className="form-control select2"
                                                        name="currentLuckyDraw"
                                                        value={filterByObj.currentLuckyDraw}
                                                        onChange={handleInputChange2}
                                                        style={{ marginTop: '10px' }}
                                                    >
                                                        <option value=''>Status</option>
                                                        <option value='false'>Show All</option>
                                                        <option value='true'>Show Current</option>



                                                    </select> 
                                                </div> */}





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

                                                                <table className="table table-striped table-bordered  mb-0">
                                                                    <thead >
                                                                        <tr>
                                                                            <th style={{ width: 20 }}>
                                                                                <label className="ckbox">
                                                                                    <input type="checkbox" defaultValue={5} />
                                                                                    <span />
                                                                                </label>
                                                                            </th>
                                                                            <th>ID </th>
                                                                            <th style={{ whiteSpace: 'nowrap' }}>Lucky Draw Name For (Admin)</th>
                                                                            <th style={{ whiteSpace: 'nowrap' }}>Lucky Draw Name</th>

                                                                            <th style={{ whiteSpace: 'nowrap', height: '-60px', width: '30px' }}>
                                                                                Mapped Projects Details
                                                                            </th>
                                                                            <th style={{ whiteSpace: 'nowrap' }}>Fill Form Start Date/Time </th>
                                                                            <th style={{ whiteSpace: 'nowrap' }}>Fill Form End Date/Time</th>
                                                                            <th style={{ whiteSpace: 'nowrap' }}>Lucky Draw Open Date</th>
                                                                            <th style={{ whiteSpace: 'nowrap' }}>Lucky Draw Open Time</th>
                                                                            <th style={{ whiteSpace: 'nowrap' }}>Lucky Draw Close Time</th>
                                                                            <th style={{ whiteSpace: 'nowrap' }}>Enable On App</th>
                                                                            <th>Actions</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody >
                                                                        {currentPageData.map((user) => (
                                                                            <tr>
                                                                                <td>
                                                                                    <label className="ckbox">
                                                                                        <input type="checkbox" defaultValue={5} />
                                                                                        <span />
                                                                                    </label>
                                                                                </td>
                                                                                <td>{user.luckyDraw?.id}</td>
                                                                                <td>
                                                                                    {user.luckyDraw?.luckyDrawNameAdmin}

                                                                                </td>
                                                                                <td>
                                                                                    {user.luckyDraw?.luckyDrawName}

                                                                                </td>


                                                                                <td style={{ marginRight: '-90px', paddingLeft: '20px' }}>

                                                                                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                                                                        <thead style={{ color: 'green' }}>
                                                                                            <tr>
                                                                                                <th style={{ padding: '10px 70px', border: 'none', width: '30px', whiteSpace: 'nowrap' }}>Scheme</th>
                                                                                                <th style={{ padding: '10px 6px', border: 'none', width: '30px', whiteSpace: 'nowrap' }}>Mapped Projects</th>
                                                                                                <th style={{ padding: '10px 40px', textAlign: 'left', border: '0px solid #ddd', width: '30px' }}>Plot</th>
                                                                                                <th style={{ padding: '10px 50px', textAlign: 'left', border: 'none', width: '30px' }}>Shop</th>
                                                                                                <th style={{ padding: '10px 60px', textAlign: 'left', border: 'none', width: '30px' }}>Farmhouse</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            {user.luckyDrawSchemeProject.length > 0 ? (
                                                                                                user.luckyDrawSchemeProject.map((scheme) => (
                                                                                                    <tr key={scheme.schemeId} style={{ transition: 'background-color 0.3s ease' }}>
                                                                                                        {/* Scheme Column */}
                                                                                                        <td
                                                                                                            style={{
                                                                                                                padding: '10px',
                                                                                                                borderBottom: '1px solid #ddd',
                                                                                                                verticalAlign: 'top',
                                                                                                                fontWeight: 'bold',
                                                                                                                fontSize: '14px',
                                                                                                                backgroundColor: '#f9f9f9',
                                                                                                                whiteSpace: 'nowrap',
                                                                                                            }}
                                                                                                        >
                                                                                                            <div>

                                                                                                                <span dangerouslySetInnerHTML={{ __html: breakContent(scheme.schemeName, 40) }} />
                                                                                                            </div>

                                                                                                        </td>

                                                                                                        {/* Mapped Projects Column */}


                                                                                                        <td
                                                                                                            style={{
                                                                                                                padding: '10px',
                                                                                                                verticalAlign: 'top',
                                                                                                                backgroundColor: '#f9f9f9',
                                                                                                            }}
                                                                                                        >
                                                                                                            {scheme.projects.map((project) => (
                                                                                                                <div key={project.projectId}>
                                                                                                                    <div
                                                                                                                        style={{
                                                                                                                            marginBottom: '8px',
                                                                                                                            fontSize: '12px',
                                                                                                                            backgroundColor: '#fff',
                                                                                                                            padding: '6px 12px',
                                                                                                                            borderRadius: '4px',
                                                                                                                            fontWeight: 'normal',
                                                                                                                            whiteSpace: 'nowrap',
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        {project.projectName}
                                                                                                                    </div>
                                                                                                                    <hr style={{ border: '2px solid black', margin: '5px 0' }} />
                                                                                                                </div>
                                                                                                            ))}
                                                                                                        </td>

                                                                                                        {/* Action Columns (Plot, Shop, FarmHouse) */}
                                                                                                        {['Plot', 'Shop', 'FarmHouse'].map((type) => (
                                                                                                            <td
                                                                                                                key={type}
                                                                                                                style={{
                                                                                                                    padding: '10px',
                                                                                                                    verticalAlign: 'top',
                                                                                                                    backgroundColor: '#f9f9f9',
                                                                                                                    minHeight: '80px',
                                                                                                                }}
                                                                                                            >
                                                                                                                {scheme.projects.map((project) => {
                                                                                                                    const typeCount = project.projectDetails[`noOf${type}`];
                                                                                                                    const showButton = parseInt(typeCount) > 0;
                                                                                                                    const isPlanFalse = !project.projectDetails[`${type.toLowerCase()}Plan`];
                                                                                                                    const noInventory = typeCount === '0';

                                                                                                                    const getPlanId = (type) => {
                                                                                                                        switch (type) {
                                                                                                                            case 'Plot':
                                                                                                                                return project.projectDetails.plotPlanId;
                                                                                                                            case 'Shop':
                                                                                                                                return project.projectDetails.shopPlanId;
                                                                                                                            case 'FarmHouse':
                                                                                                                                return project.projectDetails.farmhousePlanId;
                                                                                                                            default:
                                                                                                                                return null;
                                                                                                                        }
                                                                                                                    };

                                                                                                                    const planId = getPlanId(type);

                                                                                                                    return (
                                                                                                                        <div key={project.projectId} style={{ minHeight: '40px', display: 'flex', flexDirection: 'column' }}>
                                                                                                                            {noInventory ? (
                                                                                                                                <span
                                                                                                                                    style={{ 
                                                                                                                                        fontSize: '16px',
                                                                                                                                        color: 'red',
                                                                                                                                        whiteSpace: 'nowrap',
                                                                                                                                        minHeight: '32px',
                                                                                                                                        display: 'flex',
                                                                                                                                        alignItems: 'center',
                                                                                                                                        justifyContent: 'center',
                                                                                                                                        width: '100%',
                                                                                                                                    }}
                                                                                                                                >
                                                                                                                                    No Inventory
                                                                                                                                </span>
                                                                                                                            ) : isPlanFalse && showButton ? (
                                                                                                                                <button
                                                                                                                                    style={{
                                                                                                                                        textAlign: 'center',
                                                                                                                                        whiteSpace: 'nowrap',
                                                                                                                                        fontSize: '13px',
                                                                                                                                        marginTop: '10px',
                                                                                                                                    }}
                                                                                                                                    className="btn ripple btn-primary btn-xs w-70 equal-buttons"
                                                                                                                                    onClick={() =>
                                                                                                                                        loadcontent(
                                                                                                                                            user.luckyDrawSchemeProject[0]?.schemeId,
                                                                                                                                            project.projectId,
                                                                                                                                            type,
                                                                                                                                            user.luckyDraw?.id,
                                                                                                                                            planId
                                                                                                                                        )
                                                                                                                                    }
                                                                                                                                >
                                                                                                                                    <i className="fas fa-plus"></i> Plan
                                                                                                                                </button>
                                                                                                                            ) : project.projectDetails[`${type.toLowerCase()}Plan`] ? (
                                                                                                                                <div style={{ display: 'flex', gap: '10px' }}>
                                                                                                                                    <button
                                                                                                                                        style={{
                                                                                                                                            textAlign: 'center',
                                                                                                                                            whiteSpace: 'nowrap',
                                                                                                                                            marginTop: '6px',
                                                                                                                                            fontSize: '13px',
                                                                                                                                        }}
                                                                                                                                        className="btn ripple btn-primary btn-xs w-70 equal-buttons"
                                                                                                                                        onClick={() => loadcontent2(planId, project.projectId)}
                                                                                                                                    >
                                                                                                                                        <i className="fas fa-eye"></i> Plan
                                                                                                                                    </button>
                                                                                                                                    <button
                                                                                                                                        style={{
                                                                                                                                            textAlign: 'center',
                                                                                                                                            whiteSpace: 'nowrap',
                                                                                                                                            marginTop: '6px',
                                                                                                                                            fontSize: '13px',
                                                                                                                                        }}
                                                                                                                                        className="btn ripple btn-primary btn-xs w-70 equal-buttons"
                                                                                                                                        onClick={() =>
                                                                                                                                            loadcontent(
                                                                                                                                                user.luckyDrawSchemeProject[0]?.schemeId,
                                                                                                                                                project.projectId,
                                                                                                                                                type,
                                                                                                                                                user.luckyDraw?.id,
                                                                                                                                                planId
                                                                                                                                            )
                                                                                                                                        }
                                                                                                                                    >
                                                                                                                                        <i className="fas fa-edit"></i> Plan
                                                                                                                                    </button>
                                                                                                                                </div>
                                                                                                                            ) : (
                                                                                                                                <div style={{ minHeight: '30px' }}></div> 
                                                                                                                            )}

                                                                                                                            {/* हर row के नीचे line */}
                                                                                                                            <hr style={{ border: '2px solid black', margin: '5px 0' }} />
                                                                                                                        </div>
                                                                                                                    );
                                                                                                                })}
                                                                                                            </td>
                                                                                                        ))}



                                                                                                    </tr>
                                                                                                ))
                                                                                            ) : (
                                                                                                <tr>
                                                                                                    <td colSpan="5" style={{ fontSize: '16px', color: '#666', textAlign: 'center' }}>
                                                                                                        N/A
                                                                                                    </td>
                                                                                                </tr>
                                                                                            )}
                                                                                        </tbody>
                                                                                    </table>

                                                                                </td>



                                                                                <td>
                                                                                    {user.startDate || 'N/A'}
                                                                                    <br />
                                                                                    {user.startTime}
                                                                                    <br />
                                                                                    {user.formFillStatus === 'Registration Not Open' && (
                                                                                        <span style={{ color: 'blue', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>{user.formFillStatus}</span>
                                                                                    )}
                                                                                    {user.formFillStatus === 'Registration Open' && (
                                                                                        <span style={{ color: 'green', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
                                                                                            {user.formFillStatus}
                                                                                        </span>
                                                                                    )}


                                                                                </td>

                                                                                <td>
                                                                                    {user.endDate || 'N/A'}
                                                                                    <br />
                                                                                    {user.endTime}
                                                                                    <br />
                                                                                    {user.formFillStatus === 'Registration Closed' && (
                                                                                        <span style={{ color: 'red', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>{user.formFillStatus}</span>
                                                                                    )}

                                                                                </td>

                                                                                <td> {user.announcementDate || 'N/A'} </td>

                                                                                <td>
                                                                                    {user.announcementTime || 'N/A'}
                                                                                    <br />

                                                                                    {user.announcementTime && (
                                                                                        <input
                                                                                            type="time"
                                                                                            className="form-control"
                                                                                            placeholder="Select Announcement Time"
                                                                                            style={{ width: "200px" }}
                                                                                            name="announcementTime"
                                                                                            value={formData[user.luckyDraw?.id]?.announcementTime || ""}
                                                                                            onChange={(e) => handleInputChange(e, user.luckyDraw?.id)}
                                                                                            onClick={() => handleInputClick(user.luckyDraw?.id)}
                                                                                        />
                                                                                    )}
                                                                                    <br />

                                                                                    {user.lukyDrawStage === 1 &&
                                                                                        <span style={{ color: 'blue' }}>Lucky Draw Not Started</span>
                                                                                    }
                                                                                    {user.lukyDrawStage === 2 &&
                                                                                        <span style={{ color: 'orange' }}> Lucky Draw Not Started</span>
                                                                                    }
                                                                                    {user.lukyDrawStage === 3 &&
                                                                                        <span style={{ color: 'green' }}>Lucky Draw Open</span>
                                                                                    }
                                                                                    {user.lukyDrawStage === 4 &&
                                                                                        <span style={{ color: 'red' }}>Lucky Draw Closed</span>
                                                                                    }


                                                                                </td>

                                                                                <td>
                                                                                    {user.closeTime || 'N/A'}
                                                                                    <br />

                                                                                    {user.closeTime && (
                                                                                        <input
                                                                                            type="time"
                                                                                            className="form-control"
                                                                                            placeholder="Select Announcement Time"
                                                                                            style={{ width: "200px" }}
                                                                                            name="closeTime"
                                                                                            value={formData[user.luckyDraw?.id]?.closeTime || ""}
                                                                                            onChange={(e) => handleInputChangess(e, user.luckyDraw?.id)}
                                                                                            onClick={() => handleInputClicks(user.luckyDraw?.id)}
                                                                                        />
                                                                                    )}


                                                                                </td>

                                                                                <td>
                                                                                    {user.enableOnMobile === true && (
                                                                                        <>

                                                                                            <td style={{ color: 'green' }}>Enable</td>
                                                                                        </>
                                                                                    )}

                                                                                    {user.enableOnMobile === false && (
                                                                                        <>

                                                                                            <td style={{ color: 'red' }}>Disable</td>
                                                                                        </>
                                                                                    )}
                                                                                    <br />
                                                                                    <span style={{ whiteSpace: 'nowrap' }}>Applicant Count: {user.applicantCount}</span>
                                                                                </td>

                                                                                <td>
                                                                                    {/* {showTimer && (
                                                                                        <span style={{ fontSize: '15px', whiteSpace: 'nowrap', color: 'red' }}>
                                                                                            {Math.floor(timeLeft / 60)}:
                                                                                            {String(timeLeft % 60).padStart(2, '0')} Sec
                                                                                        </span>
                                                                                    )}
                                                                                    <br /> */}

                                                                                    <a onClick={() => loadcontent3(user.luckyDraw?.id)} >
                                                                                        <i className="fa fa-edit me-3" style={{ cursor: 'pointer' }} />
                                                                                    </a>
                                                                                    &nbsp;
                                                                                    <a >
                                                                                        <i className="fa fa-trash" style={{ cursor: 'pointer' }} />
                                                                                    </a>
                                                                                </td>




                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>

                                                                {!isCurrent === true &&
                                                                    <>
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
                                                                    </>
                                                                }


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

export default LuckyDrawList


