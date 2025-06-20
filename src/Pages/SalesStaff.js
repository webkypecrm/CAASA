import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SalesStaff = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [reportingBossA, setReportingBossA] = useState([])
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const [selectedUserIdss, setSelectedUserIdss] = useState([]);
    const [project, setProject] = useState([]);

    const navigate = useNavigate()
    const initialFormData = {
        status: '',
        inActiveReason: '',
        transferTo: '',
        statuses: '',
    };

    const initialFormData2 = {
        transferTo: '',
        statuses: '',
    };

    const initialFormData5 = {
        projectIds: '',
    };

    const [filterByObj, setFilterByObj] = useState({
        department: '',
        designation: '',
        search: '',
        active: '',
    });

    const [formData, setFormData] = useState(initialFormData);
    const [formData2, setFormData2] = useState(initialFormData2);
    const [formData5, setFormData5] = useState(initialFormData5);
    const [department, setDepartment] = useState([]);
    const [designation, setDesignation] = useState([]);
    const dropdownRef = useRef(null);
    const dropdownRefs = useRef(null);
    const dropdownRef5 = useRef(null);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [leads, setLeads] = useState([]);
    const [toggleStates, setToggleStates] = useState({});
    const [projectIds, setProjectIds] = useState('')
    const [toggleStatess, setToggleStatess] = useState({});
    const [isOpen5, setIsOpen5] = useState(false);
    const [selectedUserIds5, setSelectedUserIds5] = useState([]);
    const [loading, setLoading] = useState(true);

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


    useEffect(() => {
        const Token = localStorage.getItem('Token');
        console.log('Token:', Token);

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

    const handleOpenModal2 = (id) => {
        if (id) {
            setIsModalOpen2(id);
            document.body.classList.add('modal-open');
        }
    };

    const handleCloseModal2 = () => {
        setIsModalOpen2(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal3 = (id) => {
        if (id) {
            setIsModalOpen3(id);
            document.body.classList.add('modal-open');
        }
    };

    const handleCloseModal3 = () => {
        setIsModalOpen3(false);
        document.body.classList.remove('modal-open');
    };

    const handleOpenModal4 = (id, project) => {
        setProjectIds(project || '');
        if (id) {
            setIsModalOpen4(id);
        }
    };

    const handleCloseModal5 = () => {
        setIsModalOpen4(false);
        setProjectIds('');
        setSelectedUserIds5([]);
        document.body.classList.remove('modal-open');
    };
    // Project 
    const toggleDropdown15 = () => {
        setIsOpen5(!isOpen5);
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

    const handleCheckboxChange5 = (event) => {
        const { value, checked } = event.target;
        const id = parseInt(value, 10);
        if (checked) {
            setSelectedUserIds5([...selectedUserIds5, id]);
        } else {
            setSelectedUserIds5(selectedUserIds5.filter(userId => userId !== id));
        }
    };

    useEffect(() => {
        if (projectIds) {
            const arr = projectIds.split(',').map(Number);
            setSelectedUserIds5(arr);
        }
    }, [projectIds, isModalOpen4]);



    useEffect(() => {
        setFormData5({ ...formData5, projectIds: selectedUserIds5 });
    }, [selectedUserIds5]);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef5.current && !dropdownRef5.current.contains(event.target)) {
                setIsOpen5(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef5]);





    const toggleDropdown13 = () => {
        setIsOpen3(!isOpen3);
    };
    const toggleDropdown12 = () => {
        setIsOpen2(!isOpen2);
    };

    const handleCheckboxChange2 = (event) => {
        const { value, checked } = event.target;
        const status = value; // Use status as value
        if (checked) {
            setSelectedUserIds([...selectedUserIds, status]);
        } else {
            setSelectedUserIds(selectedUserIds.filter(userStatus => userStatus !== status));
        }
    };

    useEffect(() => {
        setFormData({ ...formData, statuses: selectedUserIds });
    }, [selectedUserIds]);

    //seond


    const handleCheckboxChange3 = (event) => {
        const { value, checked } = event.target;
        const status = value; // Use status as value
        if (checked) {
            setSelectedUserIdss([...selectedUserIdss, status]);
        } else {
            setSelectedUserIdss(selectedUserIdss.filter(userStatus => userStatus !== status));
        }
    };

    useEffect(() => {
        setFormData2({ ...formData2, statuses: selectedUserIdss });
    }, [selectedUserIdss]);



    useEffect(() => {
        fetch(`${apiUrl}/lead/empLeadStatus?empId=${isModalOpen2 || isModalOpen3}`)
            .then(response => response.json())
            .then(data => {
                if (data.data && Array.isArray(data.data)) {
                    const fetchedLeads = data.data;
                    setLeads(fetchedLeads);
                } else {
                    console.error('API response is not in the expected format.');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [apiUrl, isModalOpen2, isModalOpen3]);




    // Function to handle toggle action
    const handleToggle = async (userId) => {
        const newState = !toggleStates[userId];

        setToggleStates((prevStates) => {
            const newStates = { ...prevStates, [userId]: newState };
            localStorage.setItem('toggleStates', JSON.stringify(newStates));
            return newStates;
        });

        await updateStatus(userId, newState);
    };

    // Retrieve toggle states from local storage when the component mounts
    useEffect(() => {
        const savedToggleStates = localStorage.getItem('toggleStates');
        if (savedToggleStates) {
            setToggleStates(JSON.parse(savedToggleStates));
        }
    }, []);

    // Function to make the API call to update status
    const updateStatus = async (empId, status) => {
        const url = `${apiUrl}/lead/liveLead?empId=${empId}&status=${status}`;
        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            response = await response.json();

            if (response.status === 'success') {
                toast.success("Status updated successfully");
            } else {
                toast.error("Failed to update status");
            }
        } catch (error) {
            toast.error("An error occurred while updating status");
        }
    };


    // second 


    const handleToggles = async (userId) => {
        const newState = !toggleStatess[userId];

        setToggleStatess((prevStates) => {
            const newStates = { ...prevStates, [userId]: newState };
            localStorage.setItem('toggleStates', JSON.stringify(newStates));
            return newStates;
        });

        await updateStatuss(userId, newState);
    };


    useEffect(() => {
        const savedToggleStatess = localStorage.getItem('toggleStates');
        if (savedToggleStatess) {
            setToggleStates(JSON.parse(savedToggleStatess));
        }
    }, []);


    const updateStatuss = async (empId, status) => {
        const url = `${apiUrl}/employee/suffleStatus?empId=${empId}&status=${status}`;
        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            response = await response.json();

            if (response.status === 'success') {
                toast.success("Status updated successfully");
            } else {
                toast.error("Failed to update status");
            }
        } catch (error) {
            toast.error("An error occurred while updating status");
        }
    };



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen2(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    useEffect(() => {
        const handleClickOutsides = (event) => {
            if (dropdownRefs.current && !dropdownRefs.current.contains(event.target)) {
                setIsOpen3(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutsides);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsides);
        };
    }, [dropdownRefs]);

    const getEmpp = async () => {
        const url = `${apiUrl}/lead/assignProject?projectIds=${formData5.projectIds}&empId=${isModalOpen4}`;

        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        });

        response = await response.json();

        if (response.status === "success") {
            fetchDataFromApi()
            handleCloseModal5()
            setFormData5(initialFormData5);
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
    };

    const handleInputChange5 = (event) => {
        const { name, value } = event.target;
        setFormData5({
            ...formData5,
            [name]: value,
        });
    }


    const handleSubmit = async () => {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('status', formData.inActiveReason ? false : true);
            formDataToSend.append('inActiveReason', formData.inActiveReason);
            formDataToSend.append('transferTo', formData.transferTo);
            formDataToSend.append('statuses', formData.statuses);

            const response = await fetch(`${apiUrl}/employee/changeStaffStatus/${isModalOpen2}`, {
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
            handleCloseModal2();
            fetchDataFromApi()
            setFormData(initialFormData);
            toast.success(response2.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleSubmits = async () => {
        try {
            const formDataToSend = new FormData();

            formDataToSend.append('transferTo', formData2.transferTo);
            formDataToSend.append('statuses', formData2.statuses);

            const response = await fetch(`${apiUrl}/lead/empLeadsAssign?id=${isModalOpen3}`, {
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
            handleCloseModal3();
            fetchDataFromApi()
            setFormData2(initialFormData2);
            toast.success(response2.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleInputChanges = (event) => {
        const { name, value } = event.target;
        setFormData2({
            ...formData2,
            [name]: value,
        });
    }

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //departments
    useEffect(() => {

        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/1`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setDepartment(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    // Designation
    useEffect(() => {
        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/2`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setDesignation(data.data);

                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching designation options:', error);
            });
    }, []);


    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    const formatDateTimes = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };


    //list employee data
    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const { department, designation, search, active } = filterByObj;
            const url = `${apiUrl}/employee/employees?department=${department}&designation=${designation}&search=${search}&active=${active}`;

            const formDataToSend = new FormData();

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${Token}`,
                },
                body: formDataToSend
            });

            const data = await response.json();
            const row = data.allEmpCount;
            setSearch(row);

            if (data.status === 'success') {
                if (Array.isArray(data.data)) {
                    const formattedData = data.data.map(item => ({
                        ...item,
                        formattedDate: item.dateOfJoining ? formatDateTime(item.dateOfJoining) : null,
                        formattedDate2: item.dob ? formatDateTime(item.dob) : null,
                        inActiveDate: item.inActiveDate ? formatDateTimes(item.inActiveDate) : null,
                        // Initialize toggle state based on liveLead
                        liveLead: item.liveLead
                    }));
                    setUsers(formattedData);
                    // Set initial toggle states based on liveLead
                    const initialToggleStates = data.data.reduce((acc, item) => {
                        acc[item.id] = item.liveLead;
                        return acc;
                    }, {});
                    setToggleStates(initialToggleStates);
                } else {
                    console.error('API response does not contain employeeList array:', data);
                }
            } else {
                console.error('API request was not successful:', data.message);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };


    useEffect(() => {
        fetchDataFromApi();
    }, [filterByObj]);


    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            } 
            @keyframes slideIn {
                from { transform: translateY(-300px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes btnFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(styleSheet);
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

                <TopHeader />
                <Prince />

                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Sales Staff List ({search})</h2>
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
                                                        name='search'
                                                        value={filterByObj.search}
                                                        onChange={handleInputChange2}
                                                    />
                                                </div>

                                                <div className="col-sm-3 form-group">

                                                    <select className="form-control"
                                                        name='department'
                                                        value={filterByObj.department}
                                                        onChange={handleInputChange2}

                                                    >
                                                        <option value="" >Select Department</option>
                                                        {department.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>



                                                <div className="col-sm-3">
                                                    <select
                                                        className="form-control select2"
                                                        name="designation"
                                                        value={filterByObj.designation}
                                                        onChange={handleInputChange2}
                                                    >
                                                        <option value="">Select Designation</option>
                                                        {designation.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-sm-3">
                                                    <select
                                                        className="form-control select2"
                                                        name="active"
                                                        value={filterByObj.active}
                                                        onChange={handleInputChange2}
                                                    >
                                                        <option value="">Select Active</option>
                                                        <option>Active</option>
                                                        <option>Inactive</option>

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
                                                        <thead >
                                                            <tr>
                                                                <th className="text-center">
                                                                    <label className="ckbox">
                                                                        <input type="checkbox" defaultValue={5} />
                                                                        <span />
                                                                    </label>
                                                                </th>
                                                                <th>ID</th>
                                                                <th>Photo</th>
                                                                <th>Contact</th>
                                                                <th>Onboarding</th>
                                                                <th>Knowledge Transfer</th>
                                                                <th>KYC</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody >
                                                            {users.map((user) => (
                                                                <tr>
                                                                    <td>
                                                                        <label className="ckbox">
                                                                            <input type="checkbox" defaultValue={5} />
                                                                            <span />
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        ID-{user.amrsId}

                                                                    </td>
                                                                    <td>
                                                                        <img
                                                                            alt="avatar"
                                                                            className="rounded-circle me-3"
                                                                            src={user.profilePhoto || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                            style={{ width: 60 }}
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            {user.fullName || 'N/A'}
                                                                            <br />
                                                                            M: {user.phoneNumber || 'N/A'}
                                                                            <br />
                                                                            DOB: {user.formattedDate2 || 'N/A'}
                                                                            <br />
                                                                            Email: {user.emailId || 'N/A'}
                                                                            <br />
                                                                            Gender: {user.gender || 'N/A'}
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="mb-0">
                                                                            Company name:{user.company || 'N/A'}
                                                                            <br />
                                                                            Department:{user.department || 'N/A'}
                                                                            <br />
                                                                            Designation:{user.designation || 'N/A'}
                                                                            <br />
                                                                            DOJ: {user.formattedDate || 'N/A'}
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        In Active Date:{" "}
                                                                        {user.status === false && (
                                                                            <span>{user?.inActiveDate || 'N/A'}</span>
                                                                        )}
                                                                        {user.status === true && (
                                                                            <span>N/A</span>
                                                                        )}

                                                                        <br />
                                                                        Reason: {user?.inActiveReason || 'N/A'}
                                                                        <br />
                                                                        <strong style={{ color: '#007bff' }}> Total Leads: </strong> {user?.totalLead || 'N/A'}

                                                                        <br />
                                                                        Transfer To: {user?.leadTransferTo || 'N/A'}
                                                                    </td>

                                                                    <td>
                                                                        <p className="mb-0">
                                                                            Aadhaar:{" "}
                                                                            <Link
                                                                                to={user.aadharUpload}
                                                                                target='blanck'
                                                                                className="mb-1"
                                                                                title="View"

                                                                            >
                                                                                <i className="fe fe-eye" />
                                                                            </Link>
                                                                            <br />
                                                                            C.Cheque:{" "}
                                                                            <Link
                                                                                to={user.cheque}
                                                                                target='blanck'
                                                                                className=" mb-1"
                                                                                title="View"

                                                                            >
                                                                                <i className="fe fe-eye" />
                                                                            </Link>
                                                                            <br />
                                                                            Pan:{" "}
                                                                            <Link
                                                                                to={user.panUpload}
                                                                                target='blanck'
                                                                                className=" mb-1"
                                                                                title="View"

                                                                            >
                                                                                <i className="fe fe-eye" />
                                                                            </Link>
                                                                        </p>
                                                                    </td>

                                                                    <td>

                                                                        <div className="main-toggle-group-demo" style={{ display: 'flex', alignItems: 'center' }}>
                                                                            <div
                                                                                className="main-toggle"
                                                                                onClick={() => handleToggle(user.id)}
                                                                                style={{
                                                                                    cursor: 'pointer',
                                                                                    width: '60px',
                                                                                    height: '25px',
                                                                                    backgroundColor: toggleStates[user.id] ?? user.liveLead ? '#4caf50' : '#ccc',
                                                                                    borderRadius: '25px',
                                                                                    position: 'relative',
                                                                                    transition: 'background-color 0.3s',
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        display: 'block',
                                                                                        width: '23px',
                                                                                        height: '23px',
                                                                                        backgroundColor: 'white',
                                                                                        borderRadius: '50%',
                                                                                        position: 'absolute',
                                                                                        top: '50%',
                                                                                        transform: 'translateY(-50%)',
                                                                                        left: (toggleStates[user.id] ?? user.liveLead) ? '36px' : '1px',
                                                                                        transition: 'left 0.3s',
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <span style={{
                                                                                fontSize: '12px',
                                                                                fontFamily: 'Roboto, sans-serif',
                                                                                color: '#032852',
                                                                                display: 'inline-block',
                                                                                marginLeft: '8px'
                                                                            }}>
                                                                                Lead
                                                                            </span>
                                                                        </div>


                                                                        <br />



                                                                        <div className="main-toggle-group-demo" style={{ display: 'flex', alignItems: 'center' }}>
                                                                            <div
                                                                                className="main-toggle"
                                                                                onClick={() => handleToggles(user.id)}
                                                                                style={{
                                                                                    cursor: 'pointer',
                                                                                    width: '60px',
                                                                                    height: '25px',
                                                                                    backgroundColor: toggleStatess[user.id] ?? user.shuffleLead ? '#4caf50' : '#ccc',
                                                                                    borderRadius: '25px',
                                                                                    position: 'relative',
                                                                                    transition: 'background-color 0.3s',
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        display: 'block',
                                                                                        width: '23px',
                                                                                        height: '23px',
                                                                                        backgroundColor: 'white',
                                                                                        borderRadius: '50%',
                                                                                        position: 'absolute',
                                                                                        top: '50%',
                                                                                        transform: 'translateY(-50%)',
                                                                                        left: (toggleStatess[user.id] ?? user.shuffleLead) ? '36px' : '1px',
                                                                                        transition: 'left 0.3s',
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <span style={{
                                                                                fontSize: '12px',
                                                                                fontFamily: 'Roboto, sans-serif',
                                                                                color: '#032852',
                                                                                display: 'inline-block',
                                                                                marginLeft: '8px'
                                                                            }}>
                                                                                Suffle
                                                                            </span>
                                                                        </div>
                                                                        <br />
                                                                        <button
                                                                            onClick={() => handleOpenModal2(user.id)}
                                                                            style={{
                                                                                backgroundColor: user.status === false ? 'red' : '#007bff',
                                                                                border: 'none',
                                                                                color: 'white',
                                                                                textAlign: 'center',
                                                                                textDecoration: 'none',
                                                                                display: 'inline-block',
                                                                                fontSize: '12px',
                                                                                cursor: 'pointer',
                                                                                borderRadius: '4px',
                                                                                width: '100%',
                                                                                transition: 'background-color 0.3s, transform 0.3s',
                                                                                fontFamily: 'Arial, sans-serif',
                                                                                marginBottom: '10px'
                                                                            }}
                                                                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = user.status === false ? 'darkred' : '#0056b3'}
                                                                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = user.status === false ? 'red' : '#007bff'}
                                                                            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                                                                            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                                            className="ripple btn-xs"
                                                                        >
                                                                            {user.status === false ? 'Inactive' : 'Active'}
                                                                        </button>

                                                                        <br />
                                                                        <button
                                                                            onClick={() => handleOpenModal4(user.id, user.assignProjects)}
                                                                            style={{
                                                                                backgroundColor: '#007bff',
                                                                                border: 'none',
                                                                                color: 'white',
                                                                                textAlign: 'center',
                                                                                textDecoration: 'none',
                                                                                display: 'inline-block',
                                                                                fontSize: '12px',
                                                                                cursor: 'pointer',
                                                                                borderRadius: '4px',
                                                                                width: '100%',
                                                                                transition: 'background-color 0.3s, transform 0.3s',
                                                                                fontFamily: 'Arial, sans-serif',
                                                                                marginBottom: '10px'

                                                                            }}
                                                                            className="ripple btn-xs"
                                                                        >
                                                                            Project Assign
                                                                        </button>



                                                                        <br />


                                                                        {user.status === false && user.totalLead !== null && (
                                                                            <button
                                                                                onClick={() => handleOpenModal3(user.id)}
                                                                                style={{
                                                                                    backgroundColor: '#007bff',
                                                                                    border: 'none',
                                                                                    color: 'white',
                                                                                    textAlign: 'center',
                                                                                    textDecoration: 'none',
                                                                                    display: 'inline-block',
                                                                                    fontSize: '12px',
                                                                                    cursor: 'pointer',
                                                                                    borderRadius: '4px',
                                                                                    width: '100%',
                                                                                    transition: 'background-color 0.3s, transform 0.3s',
                                                                                    fontFamily: 'Arial, sans-serif',
                                                                                    marginBottom: '10px'
                                                                                }}
                                                                                className="ripple btn-xs"
                                                                            >
                                                                                Lead Transfer
                                                                            </button>
                                                                        )}





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

                <div
                    className={`modal fade ${isModalOpen2 ? 'show d-block' : ''}`}
                    tabIndex="-1"
                    style={{
                        display: isModalOpen2 ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        animation: 'fadeIn 0.5s',
                    }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '35%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', animation: 'slideIn 0.5s' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Inactive</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal2}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body">
                                <form>
                                    <div className="row row-sm">
                                        <div className="col-sm-12 form-group">
                                            <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <span style={{ marginRight: '5px' }}>⚠️</span> Do you really want to inactive this employee?
                                            </label>
                                        </div>

                                        <div className="col-sm-6 form-group">
                                            <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1em', color: '#007bff', marginLeft: '-1px' }}>
                                                Reason
                                            </label>

                                            <select className="form-control"
                                                onChange={handleInputChange}
                                                name="inActiveReason"
                                                value={formData.inActiveReason}
                                            >
                                                <option value=''>Select Reason</option>
                                                <option >Resigned</option>
                                                <option >Fired by Webkype</option>
                                                <option >Un-Informed Absence</option>
                                                <option >Legal Issues</option>

                                            </select>
                                        </div>


                                        <div className="col-sm-6 form-group">
                                            <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1em', color: '#007bff', marginLeft: '-1px' }}>
                                                Lead Transfer Data
                                            </label>

                                            <div className="custom-dropdown" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                                <button
                                                    className="dropdown-toggle form-control"
                                                    type="button"
                                                    onClick={toggleDropdown12}
                                                    style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'left' }}
                                                >
                                                    {selectedUserIds.length > 0 ? `Selected (${selectedUserIds.length})` : 'Select'}
                                                </button>
                                                {isOpen2 && (
                                                    <div className="dropdown-menu" style={{ display: 'block', position: 'absolute', backgroundColor: 'white', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', padding: '12px 16px', zIndex: 1, width: '100%' }}>
                                                        {leads.map((option) => (
                                                            <div key={option.id} className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0' }}>
                                                                <input
                                                                    type="checkbox"
                                                                    id={`user-${option.id}`}
                                                                    value={option.status} // Use status as value
                                                                    onChange={handleCheckboxChange2}
                                                                    checked={selectedUserIds.includes(option.status)}
                                                                />
                                                                <label htmlFor={`user-${option.id}`} style={{ marginLeft: '5px' }}>{option.name}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-sm-6 form-group">
                                            <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1em', color: '#007bff', marginLeft: '-1px' }}>
                                                Transfer Data To
                                            </label>

                                            <select className="form-control"
                                                onChange={handleInputChange}
                                                name="transferTo"
                                                value={formData.transferTo}
                                            >
                                                <option value=''>Select</option>
                                                {reportingBossA.map((option, index) => (
                                                    <option key={option.id} value={option.id}>
                                                        {option.fullName}
                                                    </option>
                                                ))}

                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                <button className="btn ripple btn-primary" type="submit" style={{
                                    borderRadius: '5px', padding: '8px 20px',
                                    fontSize: '14px', fontWeight: 'bold'
                                }} onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`modal fade ${isModalOpen4 ? 'show d-block' : ''}`}
                    tabIndex="-1"
                    style={{
                        display: isModalOpen4 ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        animation: 'fadeIn 0.5s',
                    }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '20%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', animation: 'slideIn 0.5s' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Multiple Project Assign</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal5}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body">
                                <form>
                                    <div className="row row-sm">

                                        <div className="col-sm-12 form-group">
                                            <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1em', color: '#007bff', marginLeft: '-1px' }}>
                                                Project Assign
                                            </label>
                                            <div className="custom-dropdown" ref={dropdownRef5} style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                                <button
                                                    className="dropdown-toggle form-control"
                                                    type="button"
                                                    onClick={toggleDropdown15}
                                                    style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'left' }}
                                                >
                                                    {selectedUserIds5.length > 0 ? `Selected (${selectedUserIds5.length})` : 'Select'}
                                                </button>
                                                {isOpen5 && (
                                                    <div
                                                        className="dropdown-menu"
                                                        style={{
                                                            display: 'block',
                                                            position: 'absolute',
                                                            backgroundColor: 'white',
                                                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                                            padding: '12px 16px',
                                                            zIndex: 1,
                                                            width: '100%',
                                                            maxHeight: '300px',
                                                            overflowY: 'auto'
                                                        }}
                                                    >
                                                        {project.map((option) => (
                                                            <div key={option.id} className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0', width: '100%' }}>
                                                                <input
                                                                    type="checkbox"
                                                                    id={`user-${option.id}`}
                                                                    value={option.id}
                                                                    onChange={handleCheckboxChange5}
                                                                    defaultChecked={projectIds && projectIds.includes(option.id.toString())}
                                                                />
                                                                <label
                                                                    htmlFor={`user-${option.id}`}
                                                                    style={{
                                                                        marginLeft: '5px',
                                                                        width: '100%',
                                                                        whiteSpace: 'normal',
                                                                        wordWrap: 'break-word',
                                                                        wordBreak: 'break-word'
                                                                    }}
                                                                >
                                                                    {option.projectName}
                                                                </label>

                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                        </div>


                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                <button className="btn ripple btn-primary" type="submit" style={{
                                    borderRadius: '5px', padding: '8px 20px',
                                    fontSize: '14px', fontWeight: 'bold'
                                }} onClick={getEmpp}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className={`modal fade ${isModalOpen3 ? 'show d-block' : ''}`}
                    tabIndex="-1"
                    style={{
                        display: isModalOpen3 ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        animation: 'fadeIn 0.5s',
                    }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '35%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', animation: 'slideIn 0.5s' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Data Transfer</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal3}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body">
                                <form>
                                    <div className="row row-sm">
                                        <div className="col-sm-12 form-group">
                                            <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <span style={{ marginRight: '5px' }}>⚠️</span> Do you really want to Lead Transfer this employee?
                                            </label>
                                        </div>


                                        <div className="col-sm-6 form-group">
                                            <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1em', color: '#007bff', marginLeft: '-1px' }}>
                                                Lead Transfer Data
                                            </label>

                                            <div className="custom-dropdown" ref={dropdownRefs} style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                                <button
                                                    className="dropdown-toggle form-control"
                                                    type="button"
                                                    onClick={toggleDropdown13}
                                                    style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'left' }}
                                                >
                                                    {selectedUserIdss.length > 0 ? `Selected (${selectedUserIdss.length})` : 'Select'}
                                                </button>
                                                {isOpen3 && (
                                                    <div className="dropdown-menu" style={{ display: 'block', position: 'absolute', backgroundColor: 'white', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', padding: '12px 16px', zIndex: 1, width: '100%' }}>
                                                        {leads.map((option) => (
                                                            <div key={option.id} className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0' }}>
                                                                <input
                                                                    type="checkbox"
                                                                    id={`user-${option.id}`}
                                                                    value={option.status} // Use status as value
                                                                    onChange={handleCheckboxChange3}
                                                                    checked={selectedUserIdss.includes(option.status)}
                                                                />
                                                                <label htmlFor={`user-${option.id}`} style={{ marginLeft: '5px' }}>{option.name}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-sm-6 form-group">
                                            <label className="form-label" style={{ fontWeight: 'bold', fontSize: '1em', color: '#007bff', marginLeft: '-1px' }}>
                                                Transfer Data To
                                            </label>

                                            <select className="form-control"
                                                onChange={handleInputChanges}
                                                name="transferTo"
                                                value={formData2.transferTo}
                                            >
                                                <option value=''>Select</option>
                                                {reportingBossA.map((option, index) => (
                                                    <option key={option.id} value={option.id}>
                                                        {option.fullName}
                                                    </option>
                                                ))}

                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                <button className="btn ripple btn-primary" type="submit" style={{
                                    borderRadius: '5px', padding: '8px 20px',
                                    fontSize: '14px', fontWeight: 'bold'
                                }} onClick={handleSubmits}>
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

export default SalesStaff

