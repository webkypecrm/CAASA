import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import FavIcon from '../../src/assets/favicon.png'
import Img from '../../src/assets/360_F_980520058_9pdmqU57EEjW5NzafZtzcpXeyfPYCd4D.jpg'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const LuckyDraw = () => {
    const navigate = useNavigate();

    const initialFormData = {
        luckyDrawName: '',
        startDate: '',
        startTime: '',

        endDate: '',
        endTime: '',

        announcementDate: '',
        announcementTime: '',

        closeDate: '',
        closeTime: '',

        displayStatus: '',
        enableOnMobile: '',
        showAlert: '',
        description: '',
        banner: '',
        icon: '',
        schemeId: '',
        luckyDrawNameAdmin: '',

    };

    const [formData, setFormData] = useState(initialFormData);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [users2, setUsers2] = useState([]);
    const [scame, setScame] = useState([]);
    const [selectedIds, setSelectedIds] = useState(users2.map(user => user.id));

    const [favicon, setFavicon] = useState(Img);
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const dropdownRef = useRef(null);
    const [isOpen2, setIsOpen2] = useState(false);
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem('Token');




    const toggleDropdown12 = () => {
        setIsOpen2(!isOpen2);
    };


    const handleCheckboxChange2 = (event) => {
        const { value, checked } = event.target;
        const id = parseInt(value, 10);
        if (checked) {
            setSelectedUserIds([...selectedUserIds, id]);
        } else {
            setSelectedUserIds(selectedUserIds.filter(userId => userId !== id));
        }
    };


    useEffect(() => {
        setFormData({ ...formData, schemeId: selectedUserIds });
    }, [selectedUserIds]);


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


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/luckyDraw/addLucyDraw`, {
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
            navigate("/lucky-draw-list");
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

    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile(profilePicFile);
                setFormData((prevData) => ({
                    ...prevData,
                    banner: profilePicFile,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };



    useEffect(() => {
        const convertFavIconToBinary = async () => {
            try {
                const response = await fetch(Img);
                const blob = await response.blob();
                const defaultFile = new File([blob], 'favicon.png', { type: blob.type });
                setFormData((prevData) => ({
                    ...prevData,
                    icon: defaultFile,
                }));
            } catch (error) {
                console.error('Error converting FavIcon to binary:', error);
            }
        };

        convertFavIconToBinary();
    }, []);

    const handleFileChanges = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const applicantImageFile = files[0];

            if (applicantImageFile.type.startsWith('image/')) {
                // Update the favicon preview and formData
                const fileURL = URL.createObjectURL(applicantImageFile);
                setFavicon(fileURL);

                setFormData((prevData) => ({
                    ...prevData,
                    icon: applicantImageFile,
                }));
            } else if (applicantImageFile.type === 'application/pdf') {
                // Update formData for PDFs (no preview)
                setFavicon(FavIcon); // Revert to default preview if file is not an image
                setFormData((prevData) => ({
                    ...prevData,
                    icon: applicantImageFile,
                }));
            } else {
                console.log('Unsupported file type');
                alert('Only images and PDFs are supported.');
            }
        } else {
            console.log('No file selected');
        }
    };

    const fetchDataFromApii = async () => {

        try {
            const response = await fetch(`${apiUrl}/scheme/schemeProject?SchemeId=${formData.schemeId}`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.status === 'success') {
                if (Array.isArray(data.data)) {
                    setUsers2(data.data); // Populate users2 with API data
                    setSelectedIds(data.data.map((user) => user.id));
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
        if (formData.schemeId) {
            fetchDataFromApii();
        }
    }, [formData.schemeId]);

    // Handle checkbox selection
    const handleCheckboxChange = (id) => {
        setSelectedIds((prevSelectedIds) => {
            if (prevSelectedIds.includes(id)) {
                return prevSelectedIds.filter((selectedId) => selectedId !== id); // Uncheck
            } else {
                return [...prevSelectedIds, id]; // Check
            }
        });
    };

    // Update formData when selectedIds changes
    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            displayStatus: selectedIds,
        }));
    }, [selectedIds]);

    const handleInputChangeTextAreas = (value) => {
        setFormData({ ...formData, description: value });
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

                <div className="main-content pt-0" >
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Add Lucky Draw</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <h6 className="main-content-label mb-3" style={{ marginRight: '40px', whiteSpace: 'nowrap' }}>BASIC INFO</h6>
                                                </div>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Lucky Draw Name:<span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                                name="luckyDrawName"
                                                                value={formData.luckyDrawName}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                            Lucky Draw Name For Admin
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                                name="luckyDrawNameAdmin"
                                                                value={formData.luckyDrawNameAdmin}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">Fill Form (Start Date)</label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter"
                                                                required=""
                                                                type="date"
                                                                name="startDate"
                                                                value={formData.startDate}
                                                                onChange={(e) => {
                                                                    handleInputChange(e);
                                                                    // Ensure endDate is always after startDate
                                                                    if (new Date(formData.endDate) < new Date(e.target.value)) {
                                                                        setFormData({ ...formData, endDate: e.target.value });
                                                                    }
                                                                }}
                                                            />
                                                        </div>



                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Fill Form ( Start Time)
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="time"
                                                                name="startTime"
                                                                value={formData.startTime}
                                                                onChange={handleInputChange}

                                                                
                                                            />
                                                        </div>

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">Fill Form (End Date)</label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter"
                                                                required=""
                                                                type="date"
                                                                name="endDate"
                                                                value={formData.endDate}
                                                                min={formData.startDate} 
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>


                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Fill Form ( End Time)
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="time"
                                                                name="endTime"
                                                                value={formData.endTime}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Lucky Draw Open Date
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="date"
                                                                name="announcementDate"
                                                                value={formData.announcementDate}
                                                                onChange={(e) => {
                                                                    handleInputChange(e);
                                                                    const selectedDate = new Date(e.target.value);
                                                                    const nextDay = new Date(selectedDate);
                                                                    nextDay.setDate(selectedDate.getDate() + 0);
                                                                    setFormData((prevFormData) => ({
                                                                        ...prevFormData,
                                                                        closeDate: nextDay.toISOString().split("T")[0],
                                                                    }));
                                                                }}
                                                            />
                                                        </div>

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Lucky Draw Open Time
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="time"
                                                                name="announcementTime"
                                                                value={formData.announcementTime}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Lucky Draw Close Date
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="date"
                                                                name="closeDate"
                                                                value={formData.closeDate}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Lucky Draw Close Time
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="time"
                                                                name="closeTime"
                                                                value={formData.closeTime}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Enable on App:
                                                            </label>
                                                            <select className="form-control select2"
                                                                name="enableOnMobile"
                                                                value={formData.enableOnMobile}
                                                                onChange={handleInputChange}>
                                                                <option value="">Select </option>
                                                                <option >Enable</option>
                                                                <option >Disable</option>

                                                            </select>
                                                        </div>
                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Upload Icon: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="file"
                                                                name="icon"
                                                                onChange={handleFileChanges}
                                                            />
                                                        </div>



                                                        <div className="col-lg-2 form-group">
                                                            <img
                                                                src={favicon}
                                                                alt="Preview"
                                                                style={{ width: '70px', height: '70px', borderRadius: '10px', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row row-sm">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">

                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-lg-12 form-group">
                                                            <label className="form-label">
                                                                Select Scheme <span className="tx-danger">*</span>
                                                            </label>

                                                            {/* <select className="form-control select2"
                                                                name="schemeId"
                                                                value={formData.schemeId}
                                                                onChange={handleInputChange}
                                                            >
                                                                <option value="">Select </option>
                                                                {scame.map((option, index) => (
                                                                    <option key={option.id} value={option.id}>
                                                                        {option.schemeName}
                                                                    </option>
                                                                ))}

                                                            </select> */}



                                                            <div
                                                                className="custom-dropdown"
                                                                ref={dropdownRef}
                                                                style={{
                                                                    position: 'relative',
                                                                    display: 'inline-block',
                                                                    width: '100%'
                                                                }}
                                                            >
                                                                <button
                                                                    className="dropdown-toggle form-control"
                                                                    type="button"
                                                                    onClick={toggleDropdown12}
                                                                    style={{
                                                                        display: 'block',
                                                                        width: '100%',
                                                                        padding: '8px',
                                                                        border: '1px solid #ccc',
                                                                        cursor: 'pointer',
                                                                        textAlign: 'left',
                                                                    }}
                                                                >
                                                                    {selectedUserIds.length > 0
                                                                        ? `Selected (${selectedUserIds.length})`
                                                                        : 'Select Scheme'}
                                                                </button>
                                                                {isOpen2 && (
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
                                                                            overflowY: 'auto',
                                                                            border: '1px solid #ccc',
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                scrollbarWidth: 'medium',
                                                                                msOverflowStyle: 'none',
                                                                            }}
                                                                        >
                                                                            {/* WebKit scrollbar styles */}
                                                                            <style>
                                                                                {`
            .custom-dropdown .dropdown-menu::-webkit-scrollbar {
              width: 12px; /* Increase the width */
            }

            .custom-dropdown .dropdown-menu::-webkit-scrollbar-track {
              background: #f1f1f1;
            }

            .custom-dropdown .dropdown-menu::-webkit-scrollbar-thumb {
              background: #888;
              border-radius: 6px;
            }

            .custom-dropdown .dropdown-menu::-webkit-scrollbar-thumb:hover {
              background: #555;
            }
          `}
                                                                            </style>

                                                                            {scame.map((option) => (
                                                                                <div
                                                                                    key={option.id}
                                                                                    className="dropdown-item"
                                                                                    style={{
                                                                                        display: 'flex',
                                                                                        alignItems: 'center',
                                                                                        gap: '8px',
                                                                                        padding: '5px 0',
                                                                                    }}
                                                                                >
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        id={`user-${option.id}`}
                                                                                        value={option.id}
                                                                                        onChange={handleCheckboxChange2}
                                                                                        checked={selectedUserIds.includes(option.id)}
                                                                                    />
                                                                                    <label
                                                                                        htmlFor={`user-${option.id}`}
                                                                                        style={{ marginLeft: '5px' }}
                                                                                    >
                                                                                        {option.schemeName}
                                                                                    </label>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>







                                                        {users2.map((user) => (
                                                            <th className="text-center" key={user.id}>
                                                                <div className="d-flex align-items-center">
                                                                    <label className="ckbox mb-0" style={{ marginRight: '10px' }}>
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={selectedIds.includes(user.id)}
                                                                            onChange={() => handleCheckboxChange(user.id)}
                                                                        />
                                                                        <span />
                                                                    </label>
                                                                    <span style={{ fontWeight: 'normal' }}>{user.projectName}</span>
                                                                </div>
                                                            </th>
                                                        ))}

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-8 col-md-8">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Enter Lucky Draw Description<span className="tx-danger">*</span></h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-sm-12 mg-t-10" style={{ height: "300px" }}>

                                                    <ReactQuill
                                                        theme="snow"

                                                        name="description"
                                                        value={formData.description}
                                                        style={{ height: "200px" }}
                                                        onChange={handleInputChangeTextAreas}
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
                                                <h6 className="main-content-label mb-1">Upload Banner:<span className="tx-danger">*</span></h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="banner"
                                                                onChange={handleFileChange}
                                                            />
                                                            <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
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
                                    <a
                                        href=""
                                        className="btn btn-primary"
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </a>
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

export default LuckyDraw

