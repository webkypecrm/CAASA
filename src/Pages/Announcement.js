import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Announcement = () => {

    const initialFormData = {
        title: '',
        category: '',
        banner: '',
        link: '',
        announcementTime: '',
        employee: '',
        department: '',
        description: '',
        noticeDate: '',
        noticeTime: '',
        address: '',

    };

    const [formData, setFormData] = useState(initialFormData);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const [isOpen2, setIsOpen2] = useState(false);
    const [department, setDepartment] = useState([]);
    const [reportingBossA, setReportingBossA] = useState([])
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    useEffect(() => {
        const updateDateTime = () => {
            setCurrentDateTime(new Date());
        };

        // Set an interval to update the date and time every minute
        const intervalId = setInterval(updateDateTime, 60 * 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Format the date and time
    const formattedDate = currentDateTime.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
    const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

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

    //Boss a

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

    const toggleDropdown12 = () => {
        setIsOpen2(!isOpen2);
    };


    const handleCheckboxChange2 = (event) => {
        const { value, checked } = event.target;
        const id = parseInt(value, 10); // Ensure value is an integer
        if (checked) {
            setSelectedUserIds([...selectedUserIds, id]);
        } else {
            setSelectedUserIds(selectedUserIds.filter(userId => userId !== id));
        }
    };


    useEffect(() => {
        if (formData.category === 'User') {
            setFormData({ ...formData, employee: selectedUserIds });
        }
    }, [formData.category, selectedUserIds]);


    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen2(false);
            }
        };

        // Add event listener for clicks
        document.addEventListener('click', handleOutsideClick);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);


    const handleInputChange8 = (event) => {
        const { name, value } = event.target;
        if (name === 'category' && value !== 'User') {

            setSelectedUserIds([]);
        }
        setFormData({
            ...formData,
            [name]: value,
            employee: value === 'Department' ? [] : selectedUserIds,
            employee: value === 'General' ? [] : selectedUserIds,
        });
    };


    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith("image/")) {
                setProfilePicFile(profilePicFile);
                setFormData((prevData) => ({
                    ...prevData,
                    banner: profilePicFile,
                }));

            }
        } else {
            console.log("No file selected");
        }
    };


    // from submit scheme

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/announcement/addAnnouncement`, {
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

            setFormData(initialFormData);
            toast.success(response2.message);
            navigate("/announcement-list");
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


    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            announcementTime: `${formattedDate} ${formattedTime}`
        }));
    }, [formattedDate, formattedTime]);



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
                                    <h2 className="main-content-title tx-24 mg-b-5">Add Announcement</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-8 col-md-8">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-2">Date: {formattedDate} {formattedTime} </h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Title: <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="title"
                                                        value={formData.title}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Category <span className="tx-danger">*</span>
                                                    </label>

                                                    <select className="form-control"
                                                        name="category"
                                                        value={formData.category}
                                                        onChange={handleInputChange8}
                                                    >
                                                        <option value=''>Select</option>
                                                        <option value='General' >General</option>
                                                        <option value='Department'>Department</option>
                                                        <option value='User'>User</option>
                                                        <option value='EOI' >EOI</option>

                                                    </select>
                                                </div>

                                                {formData.category === 'Department' && (
                                                    <div className="col-lg-4 form-group">
                                                        <label className="form-label">
                                                            Select Department <span className="tx-danger">*</span>
                                                        </label>
                                                        <select
                                                            className="form-control select select2"
                                                            name="department"
                                                            value={formData.department}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value="">Select a Department</option>
                                                            {department.map((option, index) => (
                                                                <option key={option.id} value={option.id}>
                                                                    {option.name}
                                                                </option>
                                                            ))}

                                                        </select>
                                                    </div>
                                                )}
                                                {formData.category === 'EOI' && (
                                                    <div className="col-lg-4 form-group">
                                                        <label className="form-label">
                                                            Venue <span className="tx-danger">*</span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            name="address"
                                                            value={formData.address}
                                                            onChange={handleInputChange}
                                                            placeholder="Enter"
                                                            required=""
                                                            type="text"
                                                        />
                                                    </div>
                                                )}
                                                {formData.category === 'User' && (
                                                    <div className="col-lg-4 form-group">
                                                        <label className="form-label">
                                                            Select User: <span className="tx-danger">*</span>
                                                        </label>
                                                        <div className="custom-dropdown" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                                            <button
                                                                className="dropdown-toggle form-control"
                                                                type="button"
                                                                onClick={toggleDropdown12}
                                                                style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'left' }}
                                                            >
                                                                {selectedUserIds.length > 0 ? `Selected (${selectedUserIds.length})` : 'Select User'}
                                                            </button>
                                                            {isOpen2 && (
                                                                <div className="dropdown-menu" style={{ display: 'block', position: 'absolute', backgroundColor: '#f9f9f9', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', padding: '12px 16px', zIndex: 1, width: '100%' }}>
                                                                    {reportingBossA.map((option) => (
                                                                        <div key={option.id} className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0' }}>
                                                                            <input
                                                                                type="checkbox"
                                                                                id={`user-${option.id}`}
                                                                                value={option.id} // Use user ID as value
                                                                                onChange={handleCheckboxChange2}
                                                                                checked={selectedUserIds.includes(option.id)}
                                                                            />
                                                                            <label htmlFor={`user-${option.id}`} style={{ marginLeft: '5px' }}>{option.fullName}</label>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                )}


                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Date: <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="noticeDate"
                                                        value={formData.noticeDate}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="date"
                                                    />
                                                </div>

                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Time: <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="noticeTime"
                                                        value={formData.noticeTime}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="time"
                                                    />
                                                </div>
                                                <div className="col-sm-12 mg-t-10">
                                                    <label className="form-label">
                                                        Announcement Text <span className="tx-danger">*</span>
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: 200 }}
                                                        defaultValue={""}
                                                        name="description"
                                                        value={formData.description}
                                                        onChange={handleInputChange}


                                                    />
                                                </div>
                                                <div className="col-sm-12 mg-t-10">
                                                    <label className="form-label">
                                                        Link <span className="tx-danger">*</span>
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: 40 }}
                                                        defaultValue={""}
                                                        name="link"
                                                        value={formData.link}
                                                        onChange={handleInputChange}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-2">Banner: <span className="tx-danger">*</span></h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                type="file"
                                                                className="dropify"
                                                                data-default-file="../assets/img/media/1.jpg"
                                                                data-height={200}
                                                                name="banner"
                                                                onChange={handleFileChange}
                                                            />
                                                            <div style={{ width: '350px', height: '220px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePicFile && (
                                                                    <img
                                                                        src={URL.createObjectURL(profilePicFile)}
                                                                        alt="Selected File"
                                                                        style={{ width: "100%", height: "100%" }}
                                                                    />
                                                                )}
                                                                {!profilePicFile && (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                            <div className="row row-sm">
                                <div className="col-12 mb-3">
                                    <button
                                        type='button'
                                        className="btn btn-primary"

                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
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
                                    Copyright © 2024 <a href="javascript:void(0)">AMRS</a>. Designed
                                    by <a href="http://webkype.com/">Webkype.com</a> All rights
                                    reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}

export default Announcement

