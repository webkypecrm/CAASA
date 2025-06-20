import React, { useState, useEffect, useRef } from 'react'
import Prince from '../Components/Prince';
import TopHeader from '../Components/TopHeader';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function TeamManager() {

    const initialFormData = {
        teamName: '',
        teamManagerA: '',
        teamManagerB: '',
        teamMamberIds: '',
        teamBanner: '',
        vicePresident: '',
        teamCordinator: '',

    };

    const [formData, setFormData] = useState(initialFormData);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [users, setUsers] = useState([]);
    const [userss, setUserss] = useState([]);
    const [usersss, setUsersss] = useState([]);
    const [search, setSearch] = useState('');
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [error, setError] = useState(null);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [fileSizeErrors, setFileSizeErrors] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const [selectedUserIds1, setSelectedUserIds1] = useState([]);
    const [selectedUserIds9, setSelectedUserIds9] = useState([]);
    const [selectedUserIds10, setSelectedUserIds10] = useState([]);
    const dropdownRef = useRef(null);
    const dropdownRef9 = useRef(null);
    const dropdownRef10 = useRef(null);

    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen9, setIsOpen9] = useState(false);
    const [isOpen10, setIsOpen10] = useState(false);
    const [selectedUserIdd, setSelectedUserIdd] = useState(null);
    const [selectedUserIddd, setSelectedUserIddd] = useState(null);
    const [count, setCount] = useState('');
    const [count1, setCount1] = useState('');
    const [counts, setCounts] = useState(0);
    const [countss, setCountss] = useState(0);
    const [vps, setVps] = useState([]);
    const [vps1, setVps1] = useState([]);
    const [vps2, setVps2] = useState([]);
    const [vpss, setVpss] = useState([]);
    const dropdownRefs = useRef(null);
    const dropdownRefs1 = useRef(null);
    const [isOpen3, setIsOpen3] = useState(false);
    const [loading, setLoading] = useState(true);


    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const handleOpenModal2 = () => {
        setIsModalOpen2(true);
        setFormData(initialFormData); // Reset form data when modal is opened
    };

    const handleCloseModal2 = () => {
        setIsModalOpen2(false);
    }

    const handleOpenModal3 = async (userId) => {
        setSelectedUserId(userId);
        setIsModalOpen3(true);

        if (selectedUserId) {
            fetchDataFromApi();
        }

    };

    const handleCloseModal3 = () => {
        setIsModalOpen3(false);

    };

    const handleOpenModal4 = (id) => {
        setSelectedUserIdd(id);
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };

    const handleOpenModal5 = (id) => {
        setSelectedUserIddd(id);
        setIsModalOpen5(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal5 = () => {
        setIsModalOpen5(false);
        document.body.classList.remove('modal-open');
    };






    useEffect(() => {
        setFormData({ ...formData, teamCordinator: selectedUserIds10 });
    }, [selectedUserIds10]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef10.current && !dropdownRef10.current.contains(event.target)) {
                setIsOpen10(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef10]);


    const toggleDropdown9 = () => {
        setIsOpen9(!isOpen9);
    };

    const handleCheckboxChange9 = (event) => {
        const { value, checked } = event.target;
        const id = parseInt(value, 10);
        if (checked) {
            setSelectedUserIds9([...selectedUserIds9, id]);
        } else {
            setSelectedUserIds9(selectedUserIds9.filter(userId => userId !== id));
        }
    };

    useEffect(() => {
        setFormData({ ...formData, teamMamberIds: selectedUserIds9 });
    }, [selectedUserIds9]);





    useEffect(() => {
        setFormData({ ...formData, teamMamberIds: selectedUserIds });
    }, [selectedUserIds]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef9.current && !dropdownRef9.current.contains(event.target)) {
                setIsOpen9(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef9]);


    const toggleDropdown13 = () => {
        setIsOpen4(!isOpen4);
    };

    const handleCheckboxChange3 = (event) => {
        const { value, checked } = event.target;
        const id = parseInt(value, 10);
        if (checked) {
            setSelectedUserIds1([...selectedUserIds1, id]);
        } else {
            setSelectedUserIds1(selectedUserIds1.filter(userId => userId !== id));
        }
    };

    useEffect(() => {
        setFormData({ ...formData, teamCordinator: selectedUserIds1 });
    }, [selectedUserIds1]);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefs1.current && !dropdownRefs1.current.contains(event.target)) {
                setIsOpen4(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRefs1]);


    useEffect(() => {
        async function getEmp() {
            const url = `${apiUrl}/team/employeeCount`;

            let response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            response = await response.json();

            if (response.status === "success") {
                setCount(response.data.managerCount);
                setCount1(response.data.teleCallerCount);
            }
        }

        getEmp();
    }, []);


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
        const handleClickOutside = (event) => {
            if (dropdownRefs.current && !dropdownRefs.current.contains(event.target)) {
                setIsOpen3(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRefs]);



    // Fetching data for dropdowns
    const fetchData = async () => {
        try {
            const headers = Token ? { Authorization: `Bearer ${Token}` } : {};

            let response = await fetch(`${apiUrl}/team/teamDropdown?designation=172`, { headers });
            let data = await response.json();
            if (data && Array.isArray(data.data)) {
                setVps(data.data);
            } else {
                console.error('API response does not contain an array for reporting bosses:', data);
            }

            response = await fetch(`${apiUrl}/team/teamDropdown?designation=170`, { headers });
            data = await response.json();
            if (data && Array.isArray(data.data)) {
                setVps1(data.data);
            } else {
                console.error('API response does not contain an array for reporting bosses:', data);
            }

            response = await fetch(`${apiUrl}/team/teamDropdown?designation=167`, { headers });
            data = await response.json();
            if (data && Array.isArray(data.data)) {
                setVps2(data.data);
            } else {
                console.error('API response does not contain an array for reporting bosses:', data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Fetch data on component mount


    useEffect(() => {
        const fetchData = async () => {
            try {
                const Token = localStorage.getItem('Token');
                const headers = Token ? { Authorization: `Bearer ${Token}` } : {};

                // Fetch reporting boss data
                let response = await fetch(`${apiUrl}/team/teamDropdown?teamId=${selectedUserId}`, { headers });
                let data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setVpss(data.data);
                } else {
                    console.error('API response does not contain an array for reporting bosses:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedUserId]);



    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith("image/")) {
                if (profilePicFile.size > 1024 * 1024) {
                    setFileSizeErrors('File size exceeds 1MB');
                    setProfilePicFile(null);
                    setFormData((prevData) => ({
                        ...prevData,
                        teamBanner: null,
                    }));
                } else {
                    setFileSizeErrors('');
                    setProfilePicFile(profilePicFile);
                    setFormData((prevData) => ({
                        ...prevData,
                        teamBanner: profilePicFile,
                    }));
                }
            } else {
                setFileSizeErrors('File sixe maxsimam 1 mb');
                setProfilePicFile(null);
                setFormData((prevData) => ({
                    ...prevData,
                    teamBanner: null,
                }));
            }
        } else {
            console.log("No file selected");
        }
    };




    // Function to fetch data from the API
    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/team/getTeamList`, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });
            const data = await response.json();
            if (data.status === 'success') {
                setUsers(data.data);
            } else {
                setError(data.message);
            }
            setLoading(false);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };


    useEffect(() => {
        fetchDataFromApi();
    }, []);


    const fetchDataFromApiii = async () => {
        const url = `${apiUrl}/team/getTeamMember?designation=167&id=${selectedUserIdd}`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: { 'Authorization': `Bearer ${Token}` }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status === 'success' && Array.isArray(data.data)) {
                    setUserss(data.data);
                } else {
                    console.error('API response error:', data.message || data);
                }
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataFromApiii();
    }, [selectedUserIdd]);



    const fetchDataFromApiiis = async () => {
        const url = `${apiUrl}/team/getTeamMember?designation=172&id=${selectedUserIddd}`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: { 'Authorization': `Bearer ${Token}` }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status === 'success' && Array.isArray(data.data)) {
                    setUsersss(data.data);
                } else {
                    console.error('API response error:', data.message || data);
                }
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataFromApiiis();
    }, [selectedUserIddd]);


    // Fetch team memaber data

    useEffect(() => {
        if (selectedUserId) {
            const fetchUser = async () => {
                try {
                    const Token = localStorage.getItem('Token');
                    const url = `${apiUrl}/team/getTeam?id=${selectedUserId}`;

                    const result = await fetch(url, {
                        headers: {
                            Authorization: `Bearer ${Token}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    const response = await result.json();

                    if (response && response.count) {
                        // Update counts based on the response
                        setCounts(response.count.managerCount || 0);  // Handle undefined
                        setCountss(response.count.teleCallerCount || 0);  // Handle undefined
                    }

                    const data = response.data;
                    if (data) {
                        setProfilePic(data.teamBanner || '');

                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            teamManagerA: data.teamManagerA || '',
                            teamManagerB: data.teamManagerB || '',
                            teamName: data.teamName || '',
                            vicePresident: data.vicePresident || '',
                            teamCordinator: data.teamCordinator || '',
                        }));

                        // Safely parse the teamMamberIds and teamCordinator
                        const selectedIds = data.teamMamberIds ? data.teamMamberIds.split(',').map(id => parseInt(id.trim(), 10)) : [];
                        setSelectedUserIds(selectedIds);

                        const selectedCordinatorIds = data.teamCordinator ? data.teamCordinator.split(',').map(id => parseInt(id.trim(), 10)) : [];
                        setSelectedUserIds10(selectedCordinatorIds);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchUser();
        }
    }, [selectedUserId]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach((key) => {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            });

            const response = await fetch(`${apiUrl}/team/addTeam`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
                body: formDataToSend,
            });

            const responseData = await response.json();
            if (responseData.status === "error") {
                throw new Error(responseData.message);
            }

            toast.success(responseData.message);
            fetchData();  // Refresh dropdown data
            fetchDataFromApi();
            handleCloseModal2();  // Close the modal
            setFormData(initialFormData);  // Reset form data
        } catch (error) {
            toast.error(error.message);  // Handle error
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/team/editTeam?id=${selectedUserId}`, {
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
            handleCloseModal3()
            toast.success(response2.message);
            setFormData(initialFormData);


        } catch (error) {
            toast.error(error.message);

        }
    };


    const filteredUsers = users.filter((user) => {
        return (
            (user.teamName.toString().includes(search))
        );
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
                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Team Manager List</h2>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">

                                        <button onClick={handleOpenModal2} className="btn btn-primary my-2 btn-icon-text" type="button">
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Create Team Manager
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`modal fade ${isModalOpen2 ? 'show d-block' : ''}`}
                                id="modaldemo-callback-form"
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
                                <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '40%', margin: 'auto' }}>
                                    <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', animation: 'slideIn 0.5s' }}>
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                            <h5 className="modal-title">Add Team Manager</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={handleCloseModal2}
                                                aria-label="Close"
                                                style={{ outline: 'none', cursor: 'pointer' }}
                                            ></button>
                                        </div>

                                        <div className="modal-body" style={{ padding: '20px' }}>
                                            <form>
                                                <div className="row row-sm">
                                                    <div className="col-sm-6 form-group">
                                                        <label className="form-label">Team Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="teamName"
                                                            value={formData.teamName}
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className="col-sm-6 form-group">
                                                        <label className="form-label">Select VP</label>
                                                        <select
                                                            className="form-control select2"
                                                            name="vicePresident"
                                                            value={formData.vicePresident}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">Select</option>
                                                            {vps1.map((option) => (
                                                                <option key={option.id} value={option.id}>
                                                                    {option.fullName}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="col-sm-6 form-group">
                                                        <label className="form-label">Team Manager A</label>
                                                        <select
                                                            className="form-control select2"
                                                            name="teamManagerA"
                                                            value={formData.teamManagerA}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">Select</option>
                                                            {vps2.map((option) => (
                                                                <option key={option.id} value={option.id}>
                                                                    {option.fullName}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="col-sm-6 form-group">
                                                        <label className="form-label">Team Manager B</label>
                                                        <select
                                                            className="form-control select2"
                                                            name="teamManagerB"
                                                            value={formData.teamManagerB}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">Select</option>
                                                            {vps2.map((option) => (
                                                                <option key={option.id} value={option.id}>
                                                                    {option.fullName}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="col-sm-6 form-group">
                                                        <label className="form-label">Team Manager({count})</label>

                                                        <div className="custom-dropdown" ref={dropdownRef9} style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                                            <button
                                                                className="dropdown-toggle form-control"
                                                                type="button"
                                                                onClick={toggleDropdown9}
                                                                style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'left' }}
                                                            >
                                                                {selectedUserIds9.length > 0 ? `Selected (${selectedUserIds9.length})` : 'Select'}
                                                            </button>
                                                            {isOpen9 && (
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
                                                                        maxHeight: '200px',
                                                                        overflowY: 'auto'
                                                                    }}
                                                                >
                                                                    {vps2.map((option) => (
                                                                        <div key={option.id} className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0' }}>
                                                                            <input
                                                                                type="checkbox"
                                                                                id={`user-${option.id}`}
                                                                                value={option.id}
                                                                                onChange={handleCheckboxChange9}
                                                                                checked={selectedUserIds9.includes(option.id)}
                                                                            />
                                                                            <label htmlFor={`user-${option.id}`} style={{ marginLeft: '5px' }}>{option.fullName}</label>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>



                                                    </div>

                                                    <div className="col-sm-6 form-group">
                                                        <label className="form-label">Team Cordinator({count1})</label>
                                                        <div className="custom-dropdown" ref={dropdownRefs1} style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                                            <button
                                                                className="dropdown-toggle form-control"
                                                                type="button"
                                                                onClick={toggleDropdown13}
                                                                style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'left' }}
                                                            >
                                                                {selectedUserIds1.length > 0 ? `Selected (${selectedUserIds1.length})` : 'Select'}
                                                            </button>
                                                            {isOpen4 && (
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
                                                                        maxHeight: '200px',
                                                                        overflowY: 'auto'
                                                                    }}
                                                                >
                                                                    {vps.map((option) => (
                                                                        <div key={option.id} className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0' }}>
                                                                            <input
                                                                                type="checkbox"
                                                                                id={`user-${option.id}`}
                                                                                value={option.id}
                                                                                onChange={handleCheckboxChange3}
                                                                                checked={selectedUserIds1.includes(option.id)}
                                                                            />
                                                                            <label htmlFor={`user-${option.id}`} style={{ marginLeft: '5px' }}>{option.fullName}</label>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>



                                                    </div>

                                                    <div className="col-lg-12 form-group">
                                                        <label className="form-label">
                                                            Photo Upload
                                                        </label>
                                                        <div className="row row-sm">
                                                            <div className="col-sm-12 col-md-12">
                                                                <input
                                                                    type="file"
                                                                    className="dropify"
                                                                    data-default-file="../assets/img/media/1.jpg"
                                                                    data-height={200}
                                                                    name="teamBanner"
                                                                    onChange={handleFileChange}
                                                                />
                                                                <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '10px', backgroundColor: '#f9f9f9', height: '200px' }}>
                                                                    {profilePicFile ? (
                                                                        <img
                                                                            src={URL.createObjectURL(profilePicFile)}
                                                                            alt="Selected File"
                                                                            style={{ maxWidth: '100%', maxHeight: '170px', borderRadius: '8px' }}
                                                                        />
                                                                    ) : (
                                                                        <div style={{ textAlign: 'center' }}>
                                                                            <i className="fas fa-image" style={{ fontSize: '50px', color: '#ccc' }}></i>
                                                                            <p style={{ margin: '5px 0', color: '#777' }}>No photo selected</p>
                                                                        </div>
                                                                    )}

                                                                </div>
                                                                {fileSizeErrors && (
                                                                    <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
                                                                        {fileSizeErrors}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </form>
                                        </div>
                                        <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                            <button className="btn ripple btn-primary" type="submit" style={{
                                                borderRadius: '5px', padding: '8px 20px',
                                                fontSize: '14px', fontWeight: 'bold',
                                                animation: 'btnFadeIn 0.5s'
                                            }} onClick={handleSubmit}>
                                                Submit
                                            </button>
                                        </div>
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
                                                    <table className="table table-striped table-bordered text-nowrap mb-0 ">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Photo</th>
                                                                <th>Team Name</th>
                                                                <th>VP</th>
                                                                <th>Team Manager A</th>
                                                                <th>Team Manager B</th>
                                                                <th>Team Managers</th>
                                                                <th>Team Cordinator</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {filteredUsers.map((user) => (
                                                                <tr key={user.id}>
                                                                    <td>{user.id}</td>
                                                                    <td>
                                                                        <img
                                                                            alt="No Photo"
                                                                            className="rounded-circle me-3"
                                                                            src={user.teamBanner || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                            style={{ width: 60 }}
                                                                        />
                                                                    </td>
                                                                    <td>{user.teamName || 'N/A'}</td>
                                                                    <td>{user.vicePresident || 'N/A'}</td>
                                                                    <td>{user.teamManagerA || 'N/A'}</td>
                                                                    <td>{user.teamManagerB || 'N/A'} </td>
                                                                    <td>
                                                                        <button onClick={() => handleOpenModal4(user.id)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>{user.teamMemberCount || '0'}</button>
                                                                    </td>
                                                                    <td>

                                                                        <button onClick={() => handleOpenModal5(user.id)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>{user.teamCordinatorCount || '0'}</button>

                                                                    </td>

                                                                    <td>
                                                                        <Link to={`/edit-team-manager/${user.id}`} className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                            Edit Team Manager
                                                                        </Link>
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
                    className={`modal fade ${isModalOpen4 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{
                        display: isModalOpen4 ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflow: 'hidden',
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered modal-xl"
                        style={{ maxWidth: '20%', margin: 'auto' }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <div
                                className="modal-header"
                                style={{
                                    backgroundColor: '#f1f1f1',
                                    borderBottom: '1px solid #dee2e6',
                                    borderRadius: '10px 10px 0 0',
                                    padding: '15px 20px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontFamily: "'Rabbit', sans-serif"
                                }}
                            >
                                <h5 className="modal-title" style={{ margin: 0 }}>
                                    Team Managers
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal4}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div
                                className="modal-body"
                                style={{ padding: '20px', maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}
                            >
                                <div
                                    style={{
                                        maxHeight: '400px',
                                        overflowY: 'scroll',
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: '#888 #f1f1f1'
                                    }}
                                >
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>

                                                <th style={{ whiteSpace: 'nowrap' }}>Team Managers Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userss.map((user) => (
                                                <tr key={user.id}>
                                                    <td>{user.name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div
                    className={`modal fade ${isModalOpen5 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{
                        display: isModalOpen5 ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflow: 'hidden',
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered modal-xl"
                        style={{ maxWidth: '20%', margin: 'auto' }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <div
                                className="modal-header"
                                style={{
                                    backgroundColor: '#f1f1f1',
                                    borderBottom: '1px solid #dee2e6',
                                    borderRadius: '10px 10px 0 0',
                                    padding: '15px 20px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontFamily: "'Rabbit', sans-serif"
                                }}
                            >
                                <h5 className="modal-title" style={{ margin: 0 }}>
                                    Team Cordinator
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal5}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div
                                className="modal-body"
                                style={{ padding: '20px', maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}
                            >
                                <div
                                    style={{
                                        maxHeight: '400px',
                                        overflowY: 'scroll',
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: '#888 #f1f1f1'
                                    }}
                                >
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>

                                                <th style={{ whiteSpace: 'nowrap' }}>Team Cordinator Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {usersss.map((user) => (
                                                <tr key={user.id}>
                                                    <td>{user.name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
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


export default TeamManager

