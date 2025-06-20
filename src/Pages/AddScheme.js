import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddScheme = () => {

    const initialFormData = {
        projectId: '',
        schemeName: '',
        displayStatus: '',
        details: '',
        image: '',
        notes: '',
        plotRegistrationFee: '',
        shopRegistrationFee: '',
        farmhouseRegistrationFee: '',

    };

    const [formData, setFormData] = useState(initialFormData);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [project, setProject] = useState([]);
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const dropdownRef = useRef(null);
    const [isOpen2, setIsOpen2] = useState(false);

    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith("image/")) {
                setProfilePicFile(profilePicFile);
                setFormData((prevData) => ({
                    ...prevData,
                    image: profilePicFile,
                }));

            }
        } else {
            console.log("No file selected");
        }
    };
    const toggleDropdown12 = () => {
        setIsOpen2(!isOpen2);
    };


    const handleInputChangeNumber = (event) => {
        const { name, value } = event.target;

        // Regular expression to allow only numeric input
        const numericValue = value.replace(/[^0-9]/g, '');

        if (value !== numericValue) {
            alert('Please enter only numbers!');
        }

        // Update the form data with the numeric value only  
        setFormData((prevData) => ({
            ...prevData,
            [name]: numericValue,
        }));
    };


    const handleInputChangeTextArea = (value) => {
        setFormData({ ...formData, details: value });
    };



    const handleInputChangeTextAreas = (value) => {
        setFormData({ ...formData, notes: value });
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
        setFormData({ ...formData, projectId: selectedUserIds });
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

            const response = await fetch(`${apiUrl}/Scheme/addScheme`, {
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
            navigate("/list-scheme");
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


    const handleInputChange2 = (content, delta, source, editor) => {
        setFormData({ details: content });
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
                                    <h2 className="main-content-title tx-24 mg-b-5">Add Scheme</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-8 col-md-8">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-2">Add Scheme</h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-lg-12 form-group">
                                                    <label className="form-label">
                                                        Scheme Name <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="schemeName"
                                                        value={formData.schemeName}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-lg-12 form-group">
                                                    <label className="form-label">
                                                        Project: <span className="tx-danger">*</span>
                                                    </label>

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
                                                                : 'Select Project'}
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

                                                                    {project.map((option) => (
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
                                                                                {option.projectName}
                                                                            </label>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>

                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Farm house Registration Fee <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="farmhouseRegistrationFee"
                                                        value={formData.farmhouseRegistrationFee}
                                                        onChange={handleInputChangeNumber}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Plot Registration Fee <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="plotRegistrationFee"
                                                        value={formData.plotRegistrationFee}
                                                        onChange={handleInputChangeNumber}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>

                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Shop Registration Fee <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="shopRegistrationFee"
                                                        value={formData.shopRegistrationFee}
                                                        onChange={handleInputChangeNumber}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>



                                                <div className="col-sm-12 mg-t-10" style={{ height: "280px" }}>
                                                    <label className="form-label">
                                                        Enter Details <span className="tx-danger">*</span>
                                                    </label>
                                                    <ReactQuill
                                                        theme="snow"

                                                        value={formData.details}
                                                        onChange={handleInputChangeTextArea}
                                                        style={{ height: "200px" }}
                                                    />
                                                </div>

                                                <div className="col-sm-12 mg-t-10" style={{ height: "180px" }}>
                                                    <label className="form-label">
                                                        Notes
                                                    </label>

                                                    <ReactQuill
                                                        theme="snow"

                                                        value={formData.notes}
                                                        onChange={handleInputChangeTextAreas}
                                                        style={{ height: "100px" }}
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
                                                <h6 className="main-content-label mb-2">Upload Image: <span className="tx-danger">*</span></h6>
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
                                                                name="image"
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
                                    <a
                                        href="employee-profile.html"
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
                                    Copyright © 2024 <a href="javascript:void(0)">Webkype</a>. Designed
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

export default AddScheme