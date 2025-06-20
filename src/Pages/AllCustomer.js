import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const AllCustomer = () => {
    const dropdownRef = useRef(null);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [scame, setScame] = useState([]);
    const [project, setProject] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [startDates, setStartDates] = useState(null);
    const [endDates, setEndDates] = useState(null);
    const [planCount, setPlanCount] = useState('');
    const [filterByObj, setFilterByObj] = useState({
        search: '',
        projectId: '',
        schemeId: '',
        schemeType: '',
        to: '',
        from: '',



    });
    const navigation = useNavigate()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const loadcontent = (id) => {
        navigation(`/plan-views/${id}`);
    };

    const loadcontent2 = (id) => {
        navigation(`/duplicate-plan/${id}`);
    };


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

    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };


    const handleChanges = (dates) => {
        const [start, end] = dates;
        setStartDates(start);
        setEndDates(end);

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



    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //list plan data
    const fetchDataFromApi = async () => {
        setLoading(true);
        const { search, schemeId, projectId, schemeType, from, to } = filterByObj;
        try {
            const response = await fetch(`${apiUrl}/plan/plans?isEoi=false&schemeId=${schemeId}&projectId=${projectId}&schemeType=${schemeType}&search=${search}&from=${from}&to=${to}`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();
            setPlanCount(data.planCounts);

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    formattedDate: item.createdAt ? formatDateTime(item.createdAt) : null,
                    formattedDate2: item.updatedAt ? formatDateTime(item.updatedAt) : null,
                }));
                setUsers(formattedData);
            } else {
                console.error('API response error:', data.message || 'Data array not found');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchDataFromApi()
    }, [filterByObj]);


    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user?.projectId.toLowerCase();

        return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase) || user.schemeId.includes(searchLowerCase) || user.schemeType.includes(searchLowerCase);
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
                                        Plan List({planCount})
                                    </h2>

                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">

                                        <Link
                                            to="/add-plan"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Plan
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
                                                        placeholder="Search..."
                                                        aria-controls="example1"
                                                        name="search"
                                                        value={filterByObj.search}
                                                        onChange={handleInputChange2}
                                                    />
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


                                                <div className="col-sm-2" >
                                                    <div ref={dropdownRef} style={{ position: "relative", width: "200px" }}>
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
                                                                marginTop: '1px',
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

                                                <div className="col-sm-3">

                                                    <div className="input-group">
                                                        <div className="input-group-text border-end-0">
                                                            <i className="fe fe-calendar lh--9 op-6" />
                                                        </div>
                                                        <div style={{ flex: '1' }}>
                                                            <DatePicker
                                                                selected={startDates}
                                                                onChange={handleChanges}
                                                                startDate={startDates}
                                                                endDate={endDates}
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
                                                    <table className="table table-striped table-bordered text-nowrap mb-0">
                                                        <thead>
                                                            <tr>

                                                                <th>ID</th>
                                                                <th>Plan Type</th>
                                                                <th>Plan Name</th>

                                                                <th >Project</th>
                                                                <th >Scheme Type</th>
                                                                <th >Scheme</th>

                                                                <th >Created date</th>
                                                                <th >Updated Date</th>
                                                                <th >Customer Count</th>
                                                                <th >Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {filteredUsers.map((user) => (
                                                                <tr key={user.id} style={{ backgroundColor: user.isModernPlan ? '#D3F9D8' : 'inherit' }}>
                                                                    <td>P ID-{user.id}</td>
                                                                    <td>
                                                                        {user.isModernPlan ? 'Market Plan' : 'General Plan'}
                                                                    </td>
                                                                    <td>{user?.planName}</td>
                                                                    <td>
                                                                        <p className="mb-0">{user?.projectId}</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">{user?.schemeType}</p>
                                                                    </td>
                                                                    <td>
                                                                        {/* Render user.schemeId with line breaks every 20 characters */}
                                                                        <div dangerouslySetInnerHTML={{ __html: breakContent(user?.schemeId, 20) }} />
                                                                    </td>
                                                                    <td>{user.formattedDate}</td>
                                                                    <td>{user.formattedDate2}</td>
                                                                    <td>{user.customerCount}</td>
                                                                    <td  >
                                                                        <>
                                                                            <Link to=''>
                                                                                <i className="fa fa-edit me-2" style={{ cursor: 'pointer' }} />
                                                                            </Link>
                                                                            <Link to=''>
                                                                                <i className="fa fa-trash me-2" style={{ cursor: 'pointer' }} />
                                                                            </Link>
                                                                            <a onClick={() => loadcontent(user.id)} title="View Plan">
                                                                                <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                            </a>
                                                                            <br />
                                                                            <Link to={user.brochureImage} target='_blank' title="Brochure Image">
                                                                                <img
                                                                                    src="https://cdn-icons-png.freepik.com/512/6679/6679083.png"
                                                                                    alt="Brochure Icon"
                                                                                    style={{ cursor: 'pointer', marginRight: '0.25rem', width: '24px', height: '24px' }}
                                                                                />
                                                                            </Link>
                                                                            {!user.isModernPlan && (
                                                                                <>
                                                                                    <a onClick={() => loadcontent2(user.id)} title="Duplicate Plan">
                                                                                        <img
                                                                                            src="https://static.vecteezy.com/system/resources/previews/000/495/223/non_2x/vector-duplicate-content-line-black-icon.jpg"
                                                                                            alt="Duplicate Icon"
                                                                                            style={{ cursor: 'pointer', marginRight: '0.25rem', width: '24px', height: '24px' }}
                                                                                        />
                                                                                    </a>
                                                                                </>
                                                                            )}
                                                                        </>
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

export default AllCustomer