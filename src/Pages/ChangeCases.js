import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ChangeCases = () => {

    const dropdownRef = useRef(null);
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
        luckyDrawId: '',
        resultStatus: '',
        search: '',


    });
    const [users, setUsers] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);

    const [project, setProject] = useState([]);
    const [scame, setScame] = useState([]);
    const [loading, setLoading] = useState(true);

    const initialFormData = {
        excelFile: '',
    };


    const [formData3, setFormData3] = useState(initialFormData);
    const [refresh, setRefresh] = useState(false);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [lucky, setLucky] = useState([]);
    const [luckyDraw, setLuckyDraw] = useState({});
    const [luckyDraws, setLuckyDraws] = useState('');
    const [luckyDrawss, setLuckyDrawss] = useState('');
    const [luckyDrawsss, setLuckyDrawsss] = useState('');
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState("");
    const [from, setFrom] = useState('')
    const [leadCounts, setLeadCounts] = useState('');
    const [isModalOpens4, setIsModalOpens4] = useState(false);
    const [holdActionIds, setHoldActionIds] = useState('');
    const [unitNos, setUnitNos] = useState('');
    const [sehemes, setSehemes] = useState('');
    const navigation = useNavigate()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


    const loadcontent2 = (id, fullName, middleName, lastName, user) => {
        navigation(
            `/inventory-check-list/${id}/${fullName}`,
            {
                state: {
                    projectId: user.projectId,
                    unitNo: user.unitNo,
                    // isLuckyDraw: user.isLuckyDraw,
                }
            }
        );
    };


    const loadcontent3 = (id) => {
        navigation(`/Inventory-details/${id}`);
    };


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



    const handleOpenModals4 = (id, unitNo, schemeId) => {
        setHoldActionIds(id);
        setUnitNos(unitNo);
        setSehemes(schemeId);
        setIsModalOpens4(true);
    };

    const handleCloseModals4 = () => {
        setIsModalOpens4(false);

    };


    const handleOpenModal5 = () => {
        setIsModalOpen5(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal5 = () => {
        setIsModalOpen5(false);
        document.body.classList.remove('modal-open');
    };
    const loadcontent = (id) => {
        navigation(`/edit-customer/${id}`);
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



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            // Append the file to formDataToSend
            formDataToSend.append('excelFile', formData3.excelFile);

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
            setFormData3(initialFormData);
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
                setFormData3({ ...formData3, excelFile: file });
            } else {
                alert('Please upload a valid Excel file.');
            }
        }
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
                    toast.success("Applicant deleted successfully");
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



    // Fetch lucky draw options on component mount
    useEffect(() => {
        fetch(`${apiUrl}/luckyDraw/luckDrawDropDown`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    const sortedData = [...data.data].sort((a, b) => b.id - a.id);
                    setLucky(sortedData);
                    // Set the most recent luckyDrawId as default if the array is not empty
                    if (sortedData.length > 0) {
                        setFilterByObj((prevState) => ({
                            ...prevState,
                            luckyDrawId: sortedData[0].id,
                        }));
                    }
                } else {
                    console.error('API response is not in the expected format.');
                }
            })
            .catch((error) => {
                console.error('Error fetching lucky draw data:', error);
            });
    }, []);

    // Fetch data based on filter settings
    const fetchDataFromApi = async ({
        luckyDrawId = '',
        projectId = '',
        schemeId = '',
        schemeType = '',
        from = '',
        to = '',
        resultStatus = '',
        search = '',
    }) => {
        setLoading(true);
        const url = `${apiUrl}/applicant/applicants?projectId=${projectId}&schemeId=${schemeId}&schemeType=${schemeType}&from=${from}&to=${to}&luckyDrawId=${luckyDrawId}&search=${search}&isCaseChange=true`;

        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` },
            });
            const data = await response.json();
            setLeadCounts(data.user);

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map((item) => ({
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
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit7 = (event) => {
        event.preventDefault();


        const { projectId, schemeId, schemeType, from, to, stage, search, luckyDrawId } = filterByObj;
        const url = `${apiUrl}/applicant/export-to-excel?projectId=${projectId}&schemeId=${schemeId}&schemeType=${schemeType}&from=${from}&to=${to}&luckyDrawId=${luckyDrawId}&isUpdated=1&resultStatus=1&search=${search}&awarded=true&stage=Applied&isCaseChange=true`;

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    const fileUrl = data.data.fileURL;

                    if (fileUrl) {
                        // Create an anchor element to trigger the download
                        const a = document.createElement('a');
                        a.href = fileUrl;
                        a.download = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
                        a.click();
                        setFrom(fileUrl);
                        handleCloseModal4();
                    }
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };





    // Handle input change for the filter form
    const handleInputChange2 = (event) => {
        const { name, value } = event.target;

        // Update filter state based on input change
        setFilterByObj((prevState) => ({
            ...prevState,
            [name]: value || '',
        }));
    };

    // UseEffect for fetching data based on filterByObj
    useEffect(() => {

        if (filterByObj.luckyDrawId) {
            fetchDataFromApi(filterByObj);
        }
    }, [filterByObj]);



    useEffect(() => {
        async function getEmpLucky() {
            try {

                const url = `${apiUrl}/luckyDraw/luckDraw?luckyDrawId=${filterByObj.luckyDrawId}`;

                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${Token}`,
                    },
                });

                const data = await response.json();

                if (response.ok && data.status === "success") {
                    // Set notAllocatedCount
                    setLuckyDraws(data.appliedCount);
                    setLuckyDrawss(data.allocatedCount);
                    setLuckyDrawsss(data.notAllocatedCount);
                    // Set the entire lucky draw data
                    setLuckyDraw(data.data);
                } else {
                    console.error("Failed to fetch lucky draw:", data.message || "Unknown error");
                }
            } catch (error) {
                console.error("Error fetching lucky draw:", error);
            }
        }

        getEmpLucky();
    }, [filterByObj.luckyDrawId, apiUrl, Token]);



    const handleApproved = async () => {
        try {
            const url = `${apiUrl}/applicant/changeUnit?applicantId=${holdActionIds}`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }


            toast.success(response2.message);
            handleCloseModals4();

            // Yahan fetchDataFromApi ko sahi parameters ke saath call karo
            fetchDataFromApi({
                luckyDrawId: '',
                projectId: '',
                schemeId: '',
                schemeType: '',
                from: '',
                to: '',
                resultStatus: '',
                search: '',
            });
            navigate("/approved-application");

        } catch (error) {
            toast.error(error.message);
        }
    };

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
                                    <h2
                                        className="main-content-title tx-24 mg-b-5"
                                        style={{
                                            fontFamily: "'Rabbit', sans-serif",
                                            fontSize: "18px",
                                            fontWeight: "600",
                                            lineHeight: "1.5",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            color: "#333333",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <span style={{ fontSize: "16px", marginRight: '10px' }}>
                                            {/* Display the luckyDrawName in a green color */}
                                            Change Cases List ({luckyDraw.luckyDrawName})
                                        </span>{" "}
                                        <span style={{ fontSize: "14px", color: "green", marginRight: '10px' }}>
                                            {/* Display the counts with a subtle gray color */}
                                            Total Applied: <strong>{luckyDraws}</strong>
                                        </span>
                                        <span style={{ fontSize: "14px", color: "blue", marginRight: '10px' }}>
                                            {/* Display the counts with a subtle gray color */}
                                            | Total Allocated: <strong>{luckyDrawss}</strong>
                                        </span>
                                        <span style={{ fontSize: "14px", color: "red", textAlign: "right" }}>
                                            {/* Display the counts with a subtle gray color */}
                                            | Not Allocated: <strong>{luckyDrawsss}</strong>
                                        </span>
                                    </h2>


                                    <h6
                                        style={{
                                            fontFamily: "'Rabbit', sans-serif",
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            color: "#555555",
                                            lineHeight: "1.4",
                                            marginTop: "5px",
                                        }}
                                    >
                                        From Date: {luckyDraw.startDate}
                                    </h6>

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
                                                        placeholder="Search by Name, PL-ID, Mobile No"
                                                        aria-controls="example1"
                                                        name="search"
                                                        value={filterByObj.search}
                                                        onChange={handleInputChange2}
                                                    />
                                                </div>

                                                <div className="col-sm-4" >
                                                    <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
                                                        <select
                                                            className="form-control select2"
                                                            name="luckyDrawId"
                                                            value={filterByObj.luckyDrawId}
                                                            onChange={handleInputChange2}
                                                            style={{
                                                                backgroundColor: "#032852",
                                                                color: "white",
                                                                width: "100%",
                                                                appearance: "none", // Hide default arrow
                                                                paddingRight: "40px", // Space for the icon
                                                                height: "40px",
                                                                borderRadius: "5px",
                                                                border: "1px solid white",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            <option value="">Select Lucky Draw</option>
                                                            {lucky.map((option) => (
                                                                <option
                                                                    key={option.id}
                                                                    value={option.id}
                                                                    style={{ backgroundColor: "white", color: "black" }}
                                                                >
                                                                    {option.name}
                                                                </option>
                                                            ))}
                                                        </select>

                                                        {/* Custom Arrow Icon */}
                                                        <span
                                                            style={{
                                                                fontSize: "18px",
                                                                color: "white",
                                                                position: "absolute",
                                                                right: "10px",
                                                                top: "50%",
                                                                transform: "translateY(-50%)",
                                                                pointerEvents: "none", // Ensures dropdown is still clickable
                                                            }}
                                                        >
                                                            ▼
                                                        </span>
                                                    </div>


                                                </div>



                                                <div className="col-sm-4">
                                                    <select
                                                        className="form-control select2 dropdown-scrollable"
                                                        name="schemeId"
                                                        value={filterByObj.schemeId}
                                                        onChange={handleInputChange2}
                                                    >
                                                        <option value="">Select Scheme</option>
                                                        {scame.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.schemeName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-sm-4" style={{ marginTop: '10px' }}>
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
                                                                overflow: "hidden", // Prevent content overflow
                                                                textOverflow: "ellipsis", // Show "..." if text is too long
                                                                whiteSpace: "nowrap", // Keep the text on a single line
                                                                borderRadius: "5px",
                                                                marginTop: '3px',
                                                                marginRight: '20px'
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

                                                <div className="col-sm-4" style={{ marginTop: '10px' }}>
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




                                                {/* <div className="col-sm-3" style={{ marginTop: '10px' }}>
                                                    <select className="form-control select2"
                                                        name="resultStatus"
                                                        value={filterByObj.resultStatus}
                                                        onChange={handleInputChange2}
                                                    >
                                                        <option value=''>Select Status</option>
                                                        <option value='1'>Allocated</option>
                                                        <option value='0'>Not Allocated</option>


                                                    </select>
                                                </div> */}



                                                <div className="col-sm-4" style={{ marginTop: '10px' }}>
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
                                                                                <th>PROPERTY</th>
                                                                                <th>PREFERENCES</th>
                                                                                <th>PRICING</th>
                                                                                <th>PAYMENT DETAILS</th>
                                                                                {/* <th> Lucky Draw ALLOTMENT</th> */}
                                                                                <th>Actions</th>
                                                                            </tr>
                                                                        </thead>

                                                                        <tbody>

                                                                            {users.length > 0 ? (
                                                                                <>
                                                                                    {users.map((user) => (
                                                                                        <tr>
                                                                                            <td>
                                                                                                <label className="ckbox">
                                                                                                    <input type="checkbox" defaultValue={5} />
                                                                                                    <span />
                                                                                                </label>
                                                                                            </td>
                                                                                            <td>
                                                                                                UID: {user.id}
                                                                                                <br />
                                                                                                <strong style={{ color: '#007bff' }}>IP Address:</strong> {user.userIpAddress[0]?.ipAddress}
                                                                                                <br />
                                                                                                <strong style={{ color: '#007bff' }}>Device Name:</strong> {user.userIpAddress[0]?.deviceName}
                                                                                                <br />

                                                                                                <strong  >Registration Open LD Date/Time:</strong>{" "}
                                                                                                {(() => {
                                                                                                    const formatDateTime = (date, time) => {
                                                                                                        if (!date) return 'N/A';
                                                                                                        try {
                                                                                                            const dateTime = new Date(`${date}`);
                                                                                                            const formattedDate = dateTime.toLocaleString('en-GB', {
                                                                                                                day: '2-digit',
                                                                                                                month: 'short',
                                                                                                                year: 'numeric',
                                                                                                                hour: '2-digit',
                                                                                                                minute: '2-digit',
                                                                                                                hour12: true,
                                                                                                            });

                                                                                                            return `${formattedDate} `;
                                                                                                        } catch {
                                                                                                            return 'Invalid Date/Time';
                                                                                                        }
                                                                                                    };
                                                                                                    return formatDateTime(user.luckyDraw?.announcementDateTime);
                                                                                                })()}


                                                                                                <br />
                                                                                                Registration Amount: <span style={{ color: 'green' }}>{user.registrationAmount || 'N/A'}</span> <Link to={`/views-welcome-letters/${user.id}`} title="Payment" target="blanck">
                                                                                                    <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                                </Link>
                                                                                                <br />
                                                                                                <strong style={{ color: '#007bff' }}>Date:</strong> {new Date(user.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })} &nbsp;
                                                                                                <br />
                                                                                                <strong style={{ color: '#007bff' }}>Time:</strong> {new Date(user.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                                                                                                <br />

                                                                                                <strong style={{ color: '#007bff' }}>Lucky Draw:</strong> {user?.luckyDraw?.luckyDrawNameAdmin || user?.luckyDrawId || 'N/A'}
                                                                                                <br />
                                                                                                <strong style={{ color: '#007bff' }}>Lucky Draw Date: {" "}</strong>
                                                                                                {new Date(user?.luckyDraw?.announcementDateTime).toLocaleDateString('en-GB', {
                                                                                                    day: '2-digit',
                                                                                                    month: 'long',
                                                                                                    year: 'numeric'
                                                                                                })}



                                                                                            </td>
                                                                                            <td>
                                                                                                TID: {user.ticketId}
                                                                                                <br />
                                                                                                Unit no: <font color="red">{user.unitNo}</font>
                                                                                                <br />
                                                                                                Area:{" "}
                                                                                                <font color='red'>
                                                                                                    {(user?.schemeType === 'Plot' || user?.schemeType === 'Farmhouse')
                                                                                                        ? (user?.area ? `${user.area} SQ YD` : 'N/A')
                                                                                                        : user?.schemeType === 'Shop'
                                                                                                            ? (user?.area ? `${user.area} SQ FT` : 'N/A')
                                                                                                            : 'N/A'}
                                                                                                </font>



                                                                                                <br />
                                                                                                Gift: <font color="red">{user.gift}</font>
                                                                                                <br />

                                                                                                <button
                                                                                                    onClick={() => handleOpenModals4(user.id, user.unitNo, user.schemeId)}
                                                                                                    type="button"
                                                                                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                                    style={{ marginTop: '5px', backgroundColor: '#ff4d4d', borderColor: '#ff4d4d' }}
                                                                                                >
                                                                                                    Send To Approved
                                                                                                </button>


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
                                                                                                Email: {user.applicantEmail || 'N/A'}
                                                                                                <br />
                                                                                                Mobile: +91 {user.applicantMobile || 'N/A'}
                                                                                                <br />
                                                                                                Alternate Number: +91 {user.applicantAlternateNumber || 'N/A'}
                                                                                                <br />
                                                                                                {user.applicantFatherName || 'N/A'}
                                                                                            </td>
                                                                                            <td>
                                                                                                Country: {user.applicantCountry || 'N/A'}
                                                                                                <br />
                                                                                                State: {user.applicantState || 'N/A'}
                                                                                                <br />
                                                                                                City: {user.applicantCity || 'N/A'}
                                                                                                <br />
                                                                                                Pin code: {user.applicantPincode || 'N/A'}
                                                                                                <br />
                                                                                                Landmark: {user.applicantLandMark || 'N/A'}
                                                                                                <br />
                                                                                                Address: <div dangerouslySetInnerHTML={{ __html: breakContent(user.applicantAddress || 'N/A', 40) }} />
                                                                                            </td>
                                                                                            <td>
                                                                                                Applicant DOB: {user.formattedDate}
                                                                                                <br />
                                                                                                Aadhaar Number: {user.applicantAadhaarNumber || 'N/A'}
                                                                                                <br />
                                                                                                Aadhaar Image: <Link to={user.applicantAadhaarImage} title="Aadhaar Image" target="blanck">
                                                                                                    <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                                </Link>
                                                                                                <br />
                                                                                                PAN: {user.applicantPAN || 'N/A'}
                                                                                                <br />
                                                                                                PAN Image: <Link to={user.applicantPanImage} title="Pan Image" target="blanck">
                                                                                                    <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                                </Link>
                                                                                                <br />
                                                                                                Nationality: {user.applicantNationality || 'N/A'}
                                                                                                <br />
                                                                                                Profession: {user.applicantProfession || 'N/A'}
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
                                                                                                Email: {user.coApplicantEmail || 'N/A'}
                                                                                                <br />
                                                                                                Mobile: +91 {user.coApplicantMobile}
                                                                                                <br />
                                                                                                Alternate Number: +91 {user.coApplicantAlternateNumber || 'N/A'}
                                                                                                <br />
                                                                                                {user.coApplicantFatherName || 'N/A'}
                                                                                            </td>
                                                                                            <td>
                                                                                                Country: {user.coApplicantCountry || 'N/A'}
                                                                                                <br />
                                                                                                State: {user.coApplicantState || 'N/A'}
                                                                                                <br />
                                                                                                City: {user.coApplicantCity || 'N/A'}
                                                                                                <br />

                                                                                                Pin code: {user.coApplicantPincode || 'N/A'}
                                                                                                <br />
                                                                                                Landmark: {user.coApplicantLandMark || 'N/A'}
                                                                                                <br />
                                                                                                Address: <div dangerouslySetInnerHTML={{ __html: breakContent(user.coApplicantAddress || 'N/A', 40) }} />
                                                                                            </td>
                                                                                            <td>
                                                                                                Co Applicant DOB: {user.formattedDate2}
                                                                                                <br />
                                                                                                Aadhaar Number: {user.coApplicantAadhaarNumber || 'N/A'}
                                                                                                <br />
                                                                                                Aadhaar Image:  <Link to={user.coApplicantAadhaarImage} title="Aadhaar Image" target="blanck">
                                                                                                    <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                                </Link>
                                                                                                <br />
                                                                                                PAN: {user.coApplicantPAN || 'N/A'}
                                                                                                <br />
                                                                                                PAN Image: <Link to={user.coApplicantPanImage} title="Pan Image" target="blanck">
                                                                                                    <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                                </Link>
                                                                                                <br />
                                                                                                Nationality: {user.coApplicantNationality || 'N/A'}
                                                                                                <br />
                                                                                                Profession: {user.coApplicantProfession || 'N/A'}
                                                                                                <br />
                                                                                                Under Taking: <Link to={`/under-taking/${user.id}`} title="UnderTaking" target="blanck">
                                                                                                    <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                                </Link>
                                                                                            </td>
                                                                                            <td>
                                                                                                <strong >Project:</strong> {user.projectName || 'N/A'}
                                                                                                <br />
                                                                                                <strong >Type:</strong> {user.schemeType || 'N/A'}
                                                                                                <br />
                                                                                                <div>
                                                                                                    <strong style={{ color: '#007bff' }}>Scheme:</strong>{' '}
                                                                                                    <span dangerouslySetInnerHTML={{ __html: breakContent(user.schemeId, 40) }} />
                                                                                                </div>
                                                                                                <strong >Lucky Draw:</strong> {user?.luckyDraw?.luckyDrawNameAdmin || user.luckyDrawId}
                                                                                                <br />
                                                                                                <strong >Payment Plan:</strong>  {user.paymentPlan || 'N/A'}
                                                                                                {/* <br />
                                                                                                Advisor: {user.advisorId || 'N/A'}   */}
                                                                                                <br />
                                                                                                <strong >LD Status:</strong> {user.formFillStatus || 'N/A'}

                                                                                                <br />

                                                                                                <strong > Advisor:</strong>  {user.advisorName || 'N/A'}
                                                                                                <br />
                                                                                                <strong > Advisor Mobile No:</strong>  {user.advisorMobileNo || 'N/A'}
                                                                                                <br />
                                                                                                <strong > Co Advisor:</strong>  {user.coAdvisorName || 'N/A'}
                                                                                                <br />
                                                                                                <strong > Co Advisor Mobile No:</strong>  {user.coAdvisorMobileNo || 'N/A'}




                                                                                            </td>
                                                                                            <td>
                                                                                                <strong style={{ color: '#007bff' }}>Unit Type:</strong> {user.schemeType || 'N/A'}
                                                                                                {/* <br />
                                                                                                Size:{" "}  <font >
                                                                                                    {(user?.schemeType === 'Plot' || user?.schemeType === 'Farmhouse')
                                                                                                        ? (user?.size ? `${user.size} SQ YD` : 'N/A')
                                                                                                        : user?.schemeType === 'Shop'
                                                                                                            ? (user?.size ? `${user.size} SQ FT` : 'N/A')
                                                                                                            : 'N/A'}
                                                                                                </font> */}
                                                                                                {/* <br />
                                                                                                Facing: {user.facing || 'N/A'} */}
                                                                                                <br />
                                                                                                <strong style={{ color: '#007bff' }}>Size:</strong> {user.sizeType || 'N/A'}
                                                                                                <br />
                                                                                                <strong style={{ color: '#007bff' }}>Facing:</strong>
                                                                                                {
                                                                                                    user.facing
                                                                                                        ? user.facing.split(',').map((item, index) => (
                                                                                                            <React.Fragment key={index}>
                                                                                                                {item.trim()}
                                                                                                                {index !== user.facing.split(',').length - 1 && <br />}
                                                                                                            </React.Fragment>
                                                                                                        ))
                                                                                                        : "N/A"}


                                                                                            </td>
                                                                                            <td>
                                                                                                BSP: {user.bsp || 'N/A'}
                                                                                                <br />
                                                                                                Fixed Charges(EDC/IDC): {user.fixedCharges || 'N/A'}
                                                                                                <br />
                                                                                                PLCs: {user.PLCs || 'N/A'}
                                                                                                <br />
                                                                                                PLC(Value): {user.PLCsValue || 'N/A'}
                                                                                                <br />
                                                                                                Total cost: {user.totalCost || 'N/A'}
                                                                                                <br />
                                                                                                Draw Scheme Amount: {user.amountReceived || 'N/A'}

                                                                                                <br />
                                                                                                Registration Amount: {user.registrationAmount || 'N/A'}
                                                                                            </td>
                                                                                            <td>


                                                                                                Amount Received: {user.amountReceived || 'N/A'}
                                                                                                <br />
                                                                                                Paymnet Status: {user.paymentStatus || 'N/A'}
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

                                                                                                <a
                                                                                                    onClick={leadCounts !== true ? () => loadcontent(user.id) : undefined}
                                                                                                    className={`btn ripple btn-dark btn-xs ${leadCounts === true ? "disabled" : ""}`}
                                                                                                    style={leadCounts === true ? { pointerEvents: "none", opacity: 0.5 } : {}}
                                                                                                >
                                                                                                    <i className="fa fa-edit" title="Enable" />
                                                                                                </a>
                                                                                                {" "}
                                                                                                {/* <a

                                                                                                    onClick={leadCounts !== true ? () => deletecontent(user.id) : undefined}
                                                                                                    className={`btn ripple btn-danger btn-xs ${leadCounts === true ? "disabled" : ""}`}
                                                                                                    style={leadCounts === true ? { pointerEvents: "none", opacity: 0.5 } : {}}
                                                                                                >
                                                                                                    <i
                                                                                                        className="fa fa-trash"
                                                                                                        title="Delete"
                                                                                                    />
                                                                                                </a> */}



                                                                                            </td>
                                                                                        </tr>


                                                                                    ))}
                                                                                </>
                                                                            ) : (
                                                                                ""
                                                                            )}


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
                    className={`modal ${isModalOpens4 ? 'show' : ''}`}
                    style={{ display: isModalOpens4 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '500px', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Send To Approved (Re- Award)</h5>
                                <button
                                    type="button"
                                    className="close"
                                    aria-label="Close"
                                    onClick={handleCloseModals4}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                <form>
                                    <div className="modal-body">
                                        <p>Are you sure you want to release Unit No- ( {unitNos} | Scheme: '{sehemes}')  and move this application to the approved tab to Re-Award the unit?</p>


                                    </div>

                                    <div className="modal-footer d-flex justify-content-center">

                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleApproved}

                                        >
                                            Ok Continue
                                        </button>
                                    </div>
                                </form>
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

export default ChangeCases

