import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EdidScheme = () => {

    const { empid } = useParams();
    const navigate = useNavigate();
    const initialFormData = {
        projectId: '',
        schemeName: '',
        displayStatus: '',
        details: '',
        image: '',
        projectId: '',
        notes: '',
        plotRegistrationFee: '',
        shopRegistrationFee: '',
        farmhouseRegistrationFee: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const dropdownRef = useRef(null);
    const [isOpen2, setIsOpen2] = useState(false);
    const [profilePic, setProfilePic] = useState(null);
    const [project, setProject] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


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

    // scheme data get
    useEffect(() => {
        const fetchScheme = async () => {
            try {
                const url = `${apiUrl}/scheme/getSchemeById/${empid}`;
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;
                const photo = data.image;
                setProfilePic(photo)
                setFormData({
                    projectId: data.projectId,
                    schemeName: data.schemeName,
                    displayStatus: data.displayStatus,
                    details: data.details,
                    image: data.image,
                    notes: data.notes,
                    plotRegistrationFee: data.plotRegistrationFee,
                    shopRegistrationFee: data.shopRegistrationFee,
                    farmhouseRegistrationFee: data.farmhouseRegistrationFee,
                });

                const selectedIds = data.projectId.split(',').map(id => parseInt(id.trim(), 10));
                setSelectedUserIds(selectedIds);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchScheme();
    }, []);


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

    // scheme update
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/Scheme/updateSchema/${empid}`, {
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

    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile);
                setProfilePic(imageUrl);
                setFormData((prevData) => ({
                    ...prevData,
                    image: profilePicFile,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }


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
                                    <h2 className="main-content-title tx-24 mg-b-5">Update Scheme</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-8 col-md-8">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-2">Update Scheme</h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-lg-12 form-group">
                                                    <label className="form-label">
                                                        Scheme Name: <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="schemeName"
                                                        value={formData.schemeName}
                                                        onChange={handleChange}
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
                                                        style={{ position: 'relative', display: 'inline-block', width: '100%' }}
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
                                                            {selectedUserIds.length > 0 ? `Selected (${selectedUserIds.length})` : 'Select Project'}
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
                                                                    maxHeight: '200px', // Fix the height
                                                                    overflowY: 'auto', // Enable vertical scrolling
                                                                }}
                                                            >
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


                                                <div className="col-sm-12 mg-t-10" style={{ height: "250px" }}>
                                                    <label className="form-label">
                                                        Enter Details <span className="tx-danger">*</span>
                                                    </label>
                                                    <ReactQuill
                                                        theme="snow"
                                                        value={formData.details}
                                                        onChange={(value) =>
                                                            setFormData((prevState) => ({
                                                                ...prevState,
                                                                details: value,
                                                            }))
                                                        }
                                                        style={{ height: "160px" }}
                                                    />



                                                </div>
                                                <div className="col-sm-12 mg-t-10" style={{ height: "220px" }}>
                                                    <label className="form-label">
                                                        Notes
                                                    </label>

                                                    <ReactQuill
                                                        theme="snow"
                                                        value={formData.notes}
                                                        onChange={(value) =>
                                                            setFormData((prevState) => ({
                                                                ...prevState,
                                                                notes: value,
                                                            }))
                                                        }
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
                                                <h6 className="main-content-label mb-2">Upload Image:<span className="tx-danger">*</span></h6>
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
                                                                onChange={handleFileChange}
                                                            />
                                                            <div style={{ width: '350px', height: '220px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePic && (
                                                                    <img src={profilePic} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePic && (
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
                                        onClick={handleUpdate}
                                    >
                                        Update
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

export default EdidScheme