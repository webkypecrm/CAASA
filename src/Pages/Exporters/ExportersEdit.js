import axios from 'axios';

import React, { useState, useEffect } from 'react'
import MainPage from '../../Components/MainPage'
import Prince from '../../Components/Prince'
import DropdownMenu from '../../Components/DropdownMenu'

import { Link, useNavigate, useParams } from 'react-router-dom';


const ExportersEdit = () => {

    const { empid } = useParams();


    const initialFormData = {
        profilePhoto: '',
        fullName: '',
        email: '',
        companyName: '',
        companyEmail: '',
        companyPhone: '',
        companyWebsite: '',
        companyAddress: '',
        companyGstNo: '',
        billingAddressCountry: '',
        billingAddressState: '',
        billingAddressCity: '',
        billingAddressArea: '',
        billingAddressLane: '',
        billingPinCode: '',
        sameAsBillingAddress: true,
        shippingAddressCountry: '',
        shippingAddressState: '',
        shippingAddressCity: '',
        shippingAddressArea: '',
        shippingAddressLane: '',
        shippingPinCode: '',
        aadhaarNo: '',
        panNo: '',
        gstNo: '',
        drivingLicence: '',
        aadhaarUpload: '',
        panUpload: '',
        cheque: '',
        accountNo: '',
        accountName: '',
        bankName: '',
        ifsc: '',

        // Add other fields as needed
    };

    const [formData, setFormData] = useState(initialFormData);
    const [countryOptions, setCountryOptions] = useState([]);
    const [stateOptions, setStateOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);
    const [countryId, setCountryId] = useState('');
    const [stateId, setStateId] = useState('');
    const [disableUpdate, setDisableUpdate] = useState(false);
    const [disableUpdate2, setDisableUpdate2] = useState(false);
    const [disableInput, setDisableInput] = useState(true);
    const [disableInput2, setDisableInput2] = useState(true);
    const [profilePicFile, setProfilePicFile] = useState(null);


    const apiUrl = process.env.REACT_APP_URL;

    const disableField = disableInput ? { disabled: 'disabled' } : {};
    const disableField2 = disableInput2 ? { disabled: 'disabled' } : {};
    const handleInputChange = (e) => {
        if (!disableUpdate) {
            setFormData({ ...formData, email: e.target.value });
        }
    };


    const handleCheckClick = () => {
        // Toggling the disableUpdate state on check click
        setDisableUpdate((prevDisable) => !prevDisable);
    };

    const handleInputChange2 = (e) => {
        if (!disableUpdate2) {
            setFormData({ ...formData, mobileNumber: e.target.value });
        }
    };

    const handleCheckClick2 = () => {
        // Toggling the disableUpdate state on check click
        setDisableUpdate2((prevDisable) => !prevDisable);
    };


    useEffect(() => {
        const fetchUser = async () => {
            const Token = localStorage.getItem('Token');
            console.log('Token:', Token);

            try {
                const url = `${apiUrl}/exporter/exporter/${empid}`;
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;

                // Update the state with fetched data
                setFormData({

                    fullName: data.fullName,
                    email: data.email,
                    mobileNumber: data.mobileNumber,
                    companyName: data.companyName,
                    companyEmail: data.companyEmail,
                    companyPhone: data.companyPhone,
                    companyWebsite: data.companyWebsite,
                    companyAddress: data.companyAddress,
                    companyGstNo: data.companyGstNo,
                    billingAddressCountry: data.billingAddressCountry,
                    billingAddressState: data.billingAddressState,
                    billingAddressCity: data.billingAddressCity,
                    billingAddressArea: data.billingAddressArea,
                    billingAddressLane: data.billingAddressLane,
                    billingPinCode: data.billingPinCode,
                    shippingAddressArea: data.shippingAddressArea,
                    shippingAddressLane: data.shippingAddressLane,
                    shippingPinCode: data.shippingPinCode,
                    aadhaarNo: data.aadhaarNo,
                    panNo: data.panNo,
                    gstNo: data.gstNo,
                    accountNo: data.accountNo,
                    accountName: data.accountName,
                    bankName: data.bankName,
                    ifsc: data.ifsc,

                    // Add other fields if necessary 
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUser();
    }, [apiUrl, empid]);

    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                setProfilePicFile(profilePicFile);
                setFormData((prevData) => ({
                    ...prevData,
                    profilePhoto: profilePicFile,
                }));
            } else if (profilePicFile.type === 'application/pdf') {
                // Assuming other file inputs exist for these file types
                setFormData((prevData) => ({
                    ...prevData,
                    aadhaarUpload: profilePicFile,
                    panUpload: profilePicFile,
                    drivingLicence: profilePicFile,
                    
                    cheque: profilePicFile,
                }));
            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
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

            const Token = localStorage.getItem('Token');
            const apiUrl = process.env.REACT_APP_URL;

            const response = await fetch(`${apiUrl}/exporter/updateExporter/${empid}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${Token}`,
                },
                body: formDataToSend,
            });

            if (response.ok) {
                console.log('Form Update successfully!');
                setFormData(initialFormData); // Reset the form
                alert("Form Update successfully!");
            } else {
                console.error('Form submission failed.');

            }
        } catch (error) {
            console.error('Error occurred:', error);

        }
    };

    useEffect(() => {
        // Fetch countries and populate the countryOptions
        fetch(`${apiUrl}/employee/allCountries`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setCountryOptions(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);

    useEffect(() => {
        if (countryId) {
            // Fetch states based on the selected country
            fetchStates(countryId);
        }
    }, [countryId]);

    useEffect(() => {
        if (stateId) {
            // Fetch cities based on the selected state
            fetchCities(stateId);
        }
    }, [stateId]);

    const fetchStates = (countryId) => {
        fetch(`${apiUrl}/employee/allStates/${countryId}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setStateOptions(data.data);
                } else {
                    console.error('API response is not in the expected format for states.');
                }
            })
            .catch((error) => {
                console.error('Error fetching state data:', error);
            });
    };

    const fetchCities = (stateId) => {
        fetch(`${apiUrl}/employee/allcities/${stateId}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setCityOptions(data.data);
                } else {
                    console.error('API response is not in the expected format for cities.');
                }
            })
            .catch((error) => {
                console.error('Error fetching city data:', error);
            });
    };

    const handleCountryChange = (event) => {
        const selectedCountry = event.target.value;
        setCountryId(selectedCountry);
        setFormData({
            ...formData,
            billingAddressCountry: selectedCountry,
        });
        setStateOptions([]); // Clear state options
        setCityOptions([]); // Clear city options
    };

    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setStateId(selectedState);
        setFormData({
            ...formData,
            billingAddressState: selectedState,
        });
        setCityOptions([]); // Clear city options
    };



    return (
        <>

            {/* Main Header*/}
            <div className="page">
                <div className="main-container container-fluid">
                    <div className="main-header-left">
                        <a
                            className="main-header-menu-icon"
                            href="javascript:void(0)"
                            id="mainSidebarToggle"
                        >
                            <span />
                        </a>
                        <div className="hor-logo">
                            <a className="main-logo" href="index.html">
                                <img
                                    src="../assets/img/brand/logo.png"
                                    className="header-brand-img desktop-logo"
                                    alt="logo"
                                />
                                <img
                                    src="../assets/img/brand/logo-light.png"
                                    className="header-brand-img desktop-logo-dark"
                                    alt="logo"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="main-header-center">
                        <div className="responsive-logo">
                            <a href="index.html">
                                <img
                                    src="../assets/img/brand/logo.png"
                                    className="mobile-logo"
                                    alt="logo"
                                />
                            </a>
                            <a href="index.html">
                                <img
                                    src="../assets/img/brand/logo-light.png"
                                    className="mobile-logo-dark"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div className="input-group">
                            <div className="input-group-btn search-panel">
                                <DropdownMenu />
                            </div>
                            <input
                                type="search"
                                className="form-control rounded-0"
                                placeholder="Search for anything..."
                            />
                            <button className="btn search-btn">
                                <i className="fe fe-search" />
                            </button>
                        </div>
                    </div>
                    <div className="main-header-right">
                        <button
                            className="navbar-toggler navresponsive-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent-4"
                            aria-controls="navbarSupportedContent-4"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fe fe-more-vertical header-icons navbar-toggler-icon" />
                        </button>
                        {/* Navresponsive closed */}
                        <div className="navbar navbar-expand-lg  nav nav-item  navbar-nav-right responsive-navbar navbar-dark  ">
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent-4"
                            >
                                <div className="d-flex order-lg-2 ms-auto">
                                    {/* Search */}
                                    <div className="dropdown header-search">
                                        <a className="nav-link icon header-search">
                                            <i className="fe fe-search header-icons" />
                                        </a>
                                        <div className="dropdown-menu">
                                            <div className="main-form-search p-2">
                                                <div className="input-group">
                                                    <div className="input-group-btn search-panel">
                                                        <select className="form-control select2">
                                                            <option label="All categories"> </option>
                                                            <option>Staff/Agent</option>
                                                            <option>Sales Lead</option>
                                                            <option>Subscriber</option>
                                                            <option>Cases/Incident</option>
                                                            <option>Lawyer</option>
                                                        </select>
                                                    </div>
                                                    <input
                                                        type="search"
                                                        className="form-control"
                                                        placeholder="Search for anything..."
                                                    />
                                                    <button className="btn search-btn">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-search"
                                                        >
                                                            <circle cx={11} cy={11} r={8} />
                                                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Search */}
                                    {/* Theme-Layout */}
                                    <div className="dropdown d-flex main-header-theme">
                                        <a className="nav-link icon layout-setting">
                                            <span className="dark-layout">
                                                <i className="fe fe-sun header-icons" />
                                            </span>
                                            <span className="light-layout">
                                                <i className="fe fe-moon header-icons" />
                                            </span>
                                        </a>
                                    </div>
                                    {/* Theme-Layout */}
                                    {/* Full screen */}
                                    <div className="dropdown ">
                                        <a className="nav-link icon full-screen-link">
                                            <i className="fe fe-maximize fullscreen-button fullscreen header-icons" />
                                            <i className="fe fe-minimize fullscreen-button exit-fullscreen header-icons" />
                                        </a>
                                    </div>
                                    {/* Full screen */}
                                    {/* Notification */}
                                    <div className="dropdown main-header-notification">
                                        <a className="nav-link icon" href="">
                                            <i className="fe fe-bell header-icons" />
                                            <span className="badge bg-danger nav-link-badge">4</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <div className="header-navheading">
                                                <p className="main-notification-text">
                                                    You have 1 unread notification
                                                    <span className="badge bg-pill bg-primary ms-3">
                                                        View all
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="main-notification-list">
                                                <div className="media new">
                                                    <div className="main-img-user online">
                                                        <img alt="avatar" src="../assets/img/users/5.jpg" />
                                                    </div>
                                                    <div className="media-body">
                                                        <p>
                                                            Congratulate <strong>Olivia James</strong> for New
                                                            template start
                                                        </p>
                                                        <span>Oct 15 12:32pm</span>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="main-img-user">
                                                        <img alt="avatar" src="../assets/img/users/2.jpg" />
                                                    </div>
                                                    <div className="media-body">
                                                        <p>
                                                            <strong>Joshua Gray</strong> New Message Received
                                                        </p>
                                                        <span>Oct 13 02:56am</span>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="main-img-user online">
                                                        <img alt="avatar" src="../assets/img/users/3.jpg" />
                                                    </div>
                                                    <div className="media-body">
                                                        <p>
                                                            <strong>Elizabeth Lewis</strong> added new schedule
                                                            realease
                                                        </p>
                                                        <span>Oct 12 10:40pm</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-footer">
                                                <a href="javascript:void(0)">View All Notifications</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Notification */}
                                    {/* Messages */}
                                    <div className="main-header-notification">
                                        <a className="nav-link icon" href="chat.html">
                                            <i className="fe fe-message-square header-icons" />
                                            <span className="badge bg-success nav-link-badge">6</span>
                                        </a>
                                    </div>
                                    {/* Messages */}
                                    {/* Profile */}
                                    <MainPage />
                                    {/* Profile */}
                                    {/* Sidebar */}
                                    <div className="dropdown  header-settings">
                                        <a
                                            href="javascript:void(0)"
                                            className="nav-link icon"
                                            data-bs-toggle="sidebar-right"
                                            data-bs-target=".sidebar-right"
                                        >
                                            <i className="fe fe-align-right header-icons" />
                                        </a>
                                    </div>
                                    {/* Sidebar */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* End Main Header*/}
                {/* Sidemenu */}
                <Prince />
                {/* End Sidemenu */}
                {/* Main Content*/}

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Exporters Update</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Internal Staff </a>
                                        </li>
                                    </ol>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <button
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            <i className="fe fe-download-cloud me-2" /> Print
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}


                            <div className="row row-sm">
                                <div className="col-xl-3 col-lg-3 col-md-3">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-4">PROFILE PHOTO</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="profilePhoto"
                                                                onChange={handleFileChange}
                                                            />

                                                            {profilePicFile && (
                                                                <img src={URL.createObjectURL(profilePicFile)} alt="Selected File" style={{ maxWidth: '350px' }} />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-9">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-3">BASIC INFO</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Full Name: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"


                                                                placeholder="Enter firstname"
                                                                required=""
                                                                type="text"
                                                                value={formData.fullName}
                                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}

                                                            />
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Email ID: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                value={formData.email}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter email"
                                                                required
                                                                type="text"
                                                                disabled={disableInput} // Seedha input field ko disable kiya gaya hai
                                                            />                                                </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Mobile No: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"

                                                                placeholder="Enter mobile number"
                                                                required=""
                                                                type="text"
                                                                value={formData.mobileNumber}
                                                                onChange={handleInputChange2}
                                                                disabled={disableInput2}

                                                            />

                                                        </div>
                                                        <div className="col-sm-4 form-group ">
                                                            <label className="form-label">Company Name</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"
                                                                value={formData.companyName}
                                                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}

                                                            />
                                                        </div>
                                                        <div className="col-sm-4 form-group">
                                                            <label className="form-label">Company Email</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"
                                                                value={formData.companyEmail}
                                                                onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                                                            />
                                                        </div>
                                                        <div className="col-sm-4 form-group">
                                                            <label className="form-label">Company Phone</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"
                                                                value={formData.companyPhone}
                                                                onChange={(e) => setFormData({ ...formData, companyPhone: e.target.value })}

                                                            />
                                                        </div>
                                                        <div className="col-sm-4 ">
                                                            <label className="form-label">Company Website</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"
                                                                value={formData.companyWebsite}
                                                                onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}

                                                            />
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <label className="form-label">Company Address</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"
                                                                value={formData.companyAddress}
                                                                onChange={(e) => setFormData({ ...formData, companyAddress: e.target.value })}

                                                            />
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <label className="form-label">Company GST No</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"
                                                                value={formData.companyGstNo}
                                                                onChange={(e) => setFormData({ ...formData, companyGstNo: e.target.value })}


                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-6 col-md-6">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Current Address</h6>
                                            </div>

                                            <div className="row row-sm">
                                                <div className="col-sm-6 mg-t-10">
                                                    <label className="form-label">Country</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="billingAddressCountry"
                                                        value={formData.billingAddressCountry}
                                                        onChange={handleCountryChange}
                                                    >

                                                        <option value="">Select a country</option>
                                                        {countryOptions.map((country) => (
                                                            <option key={country.id} value={`${country.id} - ${country.name}`}>
                                                                {`  ${country.name}`}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-6 mg-t-10">
                                                    <label className="form-label">State</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="billingAddressState"
                                                        value={formData.billingAddressState}
                                                        onChange={handleStateChange}

                                                    >
                                                        <option value="">Select a State</option>
                                                        {stateOptions.map((state) => (
                                                            <option key={state.id} value={`${state.id} - ${state.name}`}>
                                                                {` ${state.name}`}
                                                            </option>
                                                        ))}

                                                    </select>
                                                </div>

                                                <div className="col-sm-6 mg-t-10">
                                                    <label className="form-label">City</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="billingAddressCity"
                                                        value={formData.billingAddressCity}



                                                    >
                                                        <option value="">Select a city</option>
                                                        {cityOptions.map((city, index) => (
                                                            <option key={index} value={`  ${city.name}`}>
                                                                {` ${city.name}`}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-sm-6 mg-t-10">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Area</label>
                                                        <input className="form-control" required="" type="text"
                                                            value={formData.billingAddressArea}
                                                            onChange={(e) => setFormData({ ...formData, billingAddressArea: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 mg-t-10">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Address lane</label>
                                                        <input className="form-control" required="" type="text"
                                                            value={formData.billingAddressLane}
                                                            onChange={(e) => setFormData({ ...formData, billingAddressLane: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 mg-t-10">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Pin Code</label>
                                                        <input className="form-control" required="" type="text"
                                                            value={formData.billingPinCode}
                                                            onChange={(e) => setFormData({ ...formData, billingPinCode: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">
                                                    Permanent Address{" "}
                                                    <label className="ckbox" style={{ float: "right" }}>
                                                        <input
                                                            name="sameAsBillingAddress"
                                                            type="checkbox"
                                                            checked={formData.sameAsBillingAddress}
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    setFormData({
                                                                        ...formData,
                                                                        sameAsBillingAddress: true,
                                                                        shippingAddressCountry: formData.billingAddressCountry,
                                                                        shippingAddressState: formData.billingAddressState,
                                                                        shippingAddressCity: formData.billingAddressCity,
                                                                        shippingAddressArea: formData.billingAddressArea,
                                                                        shippingAddressLane: formData.billingAddressLane,
                                                                        shippingPinCode: formData.billingPinCode,
                                                                    });
                                                                } else {
                                                                    setFormData({
                                                                        ...formData,
                                                                        sameAsBillingAddress: false,
                                                                    });
                                                                }
                                                            }}
                                                        />
                                                        <span className="tx-12">Same as Current Address</span>
                                                    </label>
                                                </h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-sm-6 mg-t-10">
                                                    <label className="form-label">Country</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="shippingAddressCountry"
                                                        value={formData.shippingAddressCountry}
                                                        onChange={(e) => setFormData({ ...formData, shippingAddressCountry: e.target.value })}
                                                        disabled={formData.sameAsBillingAddress}
                                                    >

                                                        <option value="">Select a country</option>
                                                        {countryOptions.map((country) => (
                                                            <option key={country.id} value={`${country.id} - ${country.name}`}>
                                                                {`  ${country.name}`}
                                                            </option>
                                                        ))}
                                                    </select>

                                                </div>
                                                <div className="col-sm-6 mg-t-10">
                                                    <label className="form-label">State</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="shippingAddressState"
                                                        value={formData.shippingAddressState}
                                                        onChange={(e) => setFormData({ ...formData, shippingAddressState: e.target.value })}
                                                        disabled={formData.sameAsBillingAddress}
                                                    >
                                                        <option value="">Select a state</option>
                                                        {stateOptions.map((state) => (
                                                            <option key={state.id} value={`${state.id} - ${state.name}`}>
                                                                {` ${state.name}`}
                                                            </option>
                                                        ))}
                                                    </select>

                                                </div>
                                                <div className="col-sm-6 mg-t-10">
                                                    <label className="form-label">City</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="shippingAddressCity"
                                                        value={formData.billingPinCode}
                                                        onChange={(e) => setFormData({ ...formData, billingPinCode: e.target.value })}
                                                        disabled={formData.sameAsBillingAddress}
                                                    >
                                                        <option value="">Select a city</option>
                                                        {cityOptions.map((city, index) => (
                                                            <option key={index} value={`  ${city.name}`}>
                                                                {` ${city.name}`}
                                                            </option>
                                                        ))}
                                                    </select>

                                                </div>
                                                <div className="col-sm-6 mg-t-10">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Area</label>
                                                        <input className="form-control" required=""
                                                            value={formData.shippingAddressArea}
                                                            onChange={(e) => setFormData({ ...formData, shippingAddressArea: e.target.value })}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 mg-t-10">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Address lane</label>
                                                        <input className="form-control" required="" type="text"
                                                            value={formData.shippingAddressLane}
                                                            onChange={(e) => setFormData({ ...formData, shippingAddressLane: e.target.value })}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 mg-t-10">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Pin Code</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            value={formData.shippingPinCode}
                                                            onChange={(e) => setFormData({ ...formData, shippingPinCode: e.target.value })}



                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Row */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label  mb-3">KYC</h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-sm-3 ">
                                                    <div className="form-group">
                                                        <label className="form-label">Aadhaar Upload</label>
                                                        <input
                                                            className="form-control"
                                                            type="file"
                                                            name="aadhaarUpload"

                                                            accept="/pdf"
                                                            onChange={handleFileChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label className="form-label">Aadhaar No</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            value={formData.aadhaarNo}
                                                            onChange={(e) => setFormData({ ...formData, aadhaarNo: e.target.value })}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label className="form-label">PAN Upload</label>
                                                        <input
                                                            className="form-control"
                                                            type="file"
                                                            name="panUpload"
                                                            onChange={handleFileChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label className="form-label">PAN No</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            value={formData.panNo}
                                                            onChange={(e) => setFormData({ ...formData, panNo: e.target.value })}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Driving Licence</label>
                                                        <input
                                                            type="file"
                                                            className="dropify"
                                                            name="drivingLicence"
                                                            onChange={handleFileChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Cheque</label>
                                                        <input
                                                            type="file"
                                                            className="dropify"
                                                            name="cheque"
                                                            onChange={handleFileChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">GST No</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            value={formData.gstNo}
                                                            onChange={(e) => setFormData({ ...formData, gstNo: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label  mb-3">
                                                    Account Details
                                                </h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-sm-3 ">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Account No.</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            value={formData.accountNo}
                                                            onChange={(e) => setFormData({ ...formData, accountNo: e.target.value })}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Account Name</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            value={formData.accountName}
                                                            onChange={(e) => setFormData({ ...formData, accountName: e.target.value })}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Bank Name</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            value={formData.bankName}
                                                            onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">IFSC</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            value={formData.ifsc}
                                                            onChange={(e) => setFormData({ ...formData, ifsc: e.target.value })}

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                            {/* Row */}

                            {/* End Row */}
                            <div className="row row-sm">
                                <div className="col-12 mb-3">
                                    <button className="btn btn-primary" onClick={handleUpdate} type="submit">
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
                                    Copyright © 2023 <a href="javascript:void(0)">PWIP</a>. Designed
                                    by <a href="http://webkype.com/">Webkype.com</a> All rights
                                    reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Footer*/}
                {/* Sidebar */}
                <div className="sidebar sidebar-right sidebar-animate">
                    <div className="sidebar-icon">
                        <a
                            href="#"
                            className="text-end float-end text-dark fs-20"
                            data-bs-toggle="sidebar-right"
                            data-bs-target=".sidebar-right"
                        >
                            <i className="fe fe-x" />
                        </a>
                    </div>
                    <div className="sidebar-body">
                        <h5>Todo</h5>
                        <div className="d-flex p-3">
                            <label className="ckbox">
                                <input defaultChecked="" type="checkbox" />
                                <span>Hangout With friends</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top">
                            <label className="ckbox">
                                <input type="checkbox" />
                                <span>Prepare for presentation</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top">
                            <label className="ckbox">
                                <input type="checkbox" />
                                <span>Prepare for presentation</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top">
                            <label className="ckbox">
                                <input defaultChecked="" type="checkbox" />
                                <span>System Updated</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top">
                            <label className="ckbox">
                                <input type="checkbox" />
                                <span>Do something more</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top">
                            <label className="ckbox">
                                <input type="checkbox" />
                                <span>System Updated</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top">
                            <label className="ckbox">
                                <input type="checkbox" />
                                <span>Find an Idea</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top mb-0">
                            <label className="ckbox">
                                <input type="checkbox" />
                                <span>Project review</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <h5>Overview</h5>
                        <div className="p-4">
                            <div className="main-traffic-detail-item">
                                <div>
                                    <span>Founder &amp; CEO</span> <span>24</span>
                                </div>
                                <div className="progress">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={20}
                                        className="progress-bar progress-bar-xs wd-20p"
                                        role="progressbar"
                                    />
                                </div>
                                {/* progress */}
                            </div>
                            <div className="main-traffic-detail-item">
                                <div>
                                    <span>UX Designer</span> <span>1</span>
                                </div>
                                <div className="progress">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={15}
                                        className="progress-bar progress-bar-xs bg-secondary wd-15p"
                                        role="progressbar"
                                    />
                                </div>
                                {/* progress */}
                            </div>
                            <div className="main-traffic-detail-item">
                                <div>
                                    <span>Recruitment</span> <span>87</span>
                                </div>
                                <div className="progress">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={45}
                                        className="progress-bar progress-bar-xs bg-success wd-45p"
                                        role="progressbar"
                                    />
                                </div>
                                {/* progress */}
                            </div>
                            <div className="main-traffic-detail-item">
                                <div>
                                    <span>Software Engineer</span> <span>32</span>
                                </div>
                                <div className="progress">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={25}
                                        className="progress-bar progress-bar-xs bg-info wd-25p"
                                        role="progressbar"
                                    />
                                </div>
                                {/* progress */}
                            </div>
                            <div className="main-traffic-detail-item">
                                <div>
                                    <span>Project Manager</span> <span>32</span>
                                </div>
                                <div className="progress">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={25}
                                        className="progress-bar progress-bar-xs bg-danger wd-25p"
                                        role="progressbar"
                                    />
                                </div>
                                {/* progress */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Sidebar */}
            </div>

        </>

    )
}

export default ExportersEdit