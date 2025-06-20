import React, { useState, useEffect } from 'react'
import MainPage from '../../Components/MainPage'
import Prince from '../../Components/Prince'
import DropdownMenu from '../../Components/DropdownMenu'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
const AddExpor2 = () => {

  const initialFormData = {
    profilePhoto: '',
    email: '',
    fullName: '',
    mobileNumber: '',
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
    sameAsBillingAddress: false,
    shippingAddressCountry: '',
    shippingAddressState: '',
    shippingAddressCity: '',
    shippingAddressArea: '',
    shippingAddressLane: '',
    shippingPinCode: '',
    aadhaarUpload: '',
    aadhaarNo: '',
    panUpload: '',
    panNo: '',
    drivingLicence: '',
    cheque: '',
    gstNo: '',
    accountNo: '',
    accountName: '',
    bankName: '',
    ifsc: '',

  }
  const [formData, setFormData] = useState(initialFormData);
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [countryId, setCountryId] = useState('');

  const [cityOptions, setCityOptions] = useState([]);
  const [stateId, setStateId] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_URL;
  console.log(apiUrl);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith('image/')) {
        // Set profilePicFile for image files
        setProfilePicFile(file);
        setFormData((prevData) => ({
          ...prevData,
          profilePhoto: file,


        }));
      } else if (file.type === 'application/pdf') {
        // Set aadhaarUpload for PDF files
        setFormData((prevData) => ({
          ...prevData,
          aadhaarUpload: file,
          panUpload: file,
          drivingLicence: file,
          cheque: file,
        }));
      } else {
        console.log('Unsupported file type');
      }
    } else {
      console.log('No file selected');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const Token = localStorage.getItem('Token');
    console.log('Token:', Token);

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }

      const response = await fetch(`${apiUrl}/miller/add-miller`, {

        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Token}`,
        },
        body: formDataToSend,
      });
      console.log(response)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        
      }

      const data = await response.json();
      console.log('Form submitted successfully!', data);
    
        toast.success('Form submitted successfully');
        navigate('/ManageMillers');

      setFormData(initialFormData);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Please check your API!');
      // Handle specific errors or display appropriate messages
    }
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    const newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = `${name.toLowerCase()} is required`;
    } else if (
      name === 'fullName' && !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value)
    ) {
      newErrors[name] = `Please enter a valid ${name} with only alphabetical characters`;
    } else if (
      name === 'companyName' && !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value)
    ) {
      newErrors[name] = `Please enter a valid ${name} with only alphabetical characters`;
    } else if (
      name === 'email' && (!value.trim() || !emailRegex.test(value))
    ) {
      newErrors[name] = 'Please enter a valid email address';
    }
      else if (
        name === 'companyEmail' && (!value.trim() || !emailRegex.test(value))
      ) {
        newErrors[name] = 'Please enter a valid Company Email address';
    } else if (
      name === 'mobileNumber' && (!value.trim() || !/^\d{10}$/.test(value))
    ) {
      newErrors[name] = 'Please enter a valid 10-digit mobile number';
    }
      else if (
        name === 'companyPhone' && (!value.trim() || !/^\d{10}$/.test(value))
      ) {
        newErrors[name] = 'Please enter a valid 10-digit mobile number';
    } else if (
      name === 'aadhaarNo' && (!value.trim() || !/^\d{12}$/.test(value))
    ) {
      newErrors[name] = 'Please enter a valid 12-digit Aadhaar number';
    } else if (
      name === 'panNo' && (!value.trim() || !/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(value))
    ) {
      newErrors[name] = 'Please enter a valid PAN number in the format ABCDE1234F';
    } else if (
      name === 'accountNo' && (!value.trim() || !/^\d{16}$/.test(value))
    ) {
      newErrors[name] = 'Please enter a valid 16-digit account number';
    } else if (
      name === 'accountName' && !/^[A-Za-z\s]+$/.test(value)
    ) {
      newErrors[name] = 'Please enter a valid account name with only alphabetical characters';
    } else if (
      name === 'bankName' && !/^[A-Za-z\s]+$/.test(value)
    ) {
      newErrors[name] = 'Please enter a valid bank name with only alphabetical characters';
    } else if (
      name === 'ifsc' && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)
    ) {
      newErrors[name] = 'Please enter a valid IFSC code in the format ABCD0123456';
    }
    else if (
      name === 'billingPinCode' && !/^\d{6}$/.test(value)
    ) {
      newErrors[name] = 'Please enter a valid 6-digit pin code';
    }
      else if (
        name === 'offeredPackage' && !/^\d{8}$/.test(value)
      ) {
        newErrors[name] = 'Please enter a valid 8-digit offeredPackage';
      }
        else if (
          name === 'offeredCTC' && !/^\d{8}$/.test(value)
        ) {
          newErrors[name] = 'Please enter a valid 8-digit offeredCTC';
         } 
         else if (
            name === 'perHourCharges' && !/^\d{8}$/.test(value)
          ) {
            newErrors[name] = 'Please enter a valid 8-digit perHourCharges';
    } else {
      delete newErrors[name]; // Remove error if field is valid
    }

    setErrors(newErrors);
  };

  const handleInputBlur = (event) => {
    const { name, value } = event.target;
    const newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = ``;
    } else if (
      name === 'firstName' && !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value)
    ) {
      newErrors[name] = `Please enter a valid ${name} with only alphabetical characters`;
    } else if (
      name === 'companyName' && !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value)
    ) {
      newErrors[name] = `Please enter a valid ${name} with only alphabetical characters`;
    } else if (
      name === 'email' && (!value.trim() || !emailRegex.test(value))
    ) {
      newErrors[name] = 'Please enter a valid email address';
    }
      else if (
        name === 'companyEmail' && (!value.trim() || !emailRegex.test(value))
      ) {
        newErrors[name] = 'Please enter a valid Company Email address';
    } else if (
      name === 'mobileNumber' && (!value.trim() || !/^\d{10}$/.test(value))
    ) {
      newErrors[name] = 'Please enter a valid 10-digit mobile number';
    }
      else if (
        name === 'companyPhone' && (!value.trim() || !/^\d{10}$/.test(value))
      ) {
        newErrors[name] = 'Please enter a valid 10-digit mobile number';
    } else if (
      name === 'adharNumber' && (!value.trim() || !/^\d{12}$/.test(value))
    ) {
      newErrors[name] = 'Please enter a valid 16-digit Aadhaar number';
    } else if (
      name === 'panNo' && (!value.trim() || !/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(value))
    ) {
      newErrors[name] = 'Please enter a valid PAN number in the format ABCDE1234F';
    } else if (
      name === 'accountNo' && (!value.trim() || !/^\d{16}$/.test(value))
    ) {
      newErrors[name] = 'Please enter a valid 16-digit account number';
    } else if (
      name === 'accountName' && !/^[A-Za-z\s]+$/.test(value)
    ) {
      newErrors[name] = 'Please enter a valid account name with only alphabetical characters';
    } else if (
      name === 'bankName' && !/^[A-Za-z\s]+$/.test(value)
    ) {
      newErrors[name] = 'Please enter a valid bank name with only alphabetical characters';
    } else if (
      name === 'ifsc' && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)
    ) {
      newErrors[name] = 'Please enter a valid IFSC code in the format ABCD0123456';
    }
    else if (
      name === 'billingPinCode' && !/^\d{6}$/.test(value)
    ) {
      newErrors[name] = 'Please enter a valid 6-digit pin code';
    }
      else if (
        name === 'offeredPackage' && !/^\d{8}$/.test(value)
      ) {
        newErrors[name] = 'Please enter a valid 8-digit offeredPackage';
       } else if (
          name === 'offeredCTC' && !/^\d{8}$/.test(value)
        ) {
          newErrors[name] = 'Please enter a valid 8-digit offeredCTC';
         } else if (
            name === 'perHourCharges' && !/^\d{8}$/.test(value)
          ) {
            newErrors[name] = 'Please enter a valid 8-digit perHourCharges';
  
    } else {
      delete newErrors[name]; // Remove error if field is valid
    }

    setErrors(newErrors);
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
                  <h2 className="main-content-title tx-24 mg-b-5">Add Millers</h2>
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
                                <img src={URL.createObjectURL(profilePicFile)} alt="Selected File" style={{ maxWidth: '300px' }} />
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
                                name="fullName"
                                value={formData.fullName}
                                placeholder="Enter firstname"
                                required=""
                                type="text"
                                onChange={handleChange}
                                onBlur={handleInputBlur}
                                />
                                {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}
                            </div>
                            <div className="col-lg-4 form-group">
                              <label className="form-label">
                                Email ID: <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                name="email"
                                placeholder="Enter "
                                value={formData.email}

                                onChange={handleChange}
                                required=""
                                type="text"
                                onBlur={handleInputBlur}
                                />
                                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                            </div>
                            <div className="col-lg-4 form-group">
                              <label className="form-label">
                                Mobile No: <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                placeholder="Enter "
                                required=""
                                type="text"
                                onChange={handleChange}
                                onBlur={handleInputBlur}
                                />
                                {errors.mobileNumber && <p style={{ color: 'red' }}>{errors.mobileNumber}</p>}
                            </div>
                            <div className="col-sm-4 form-group ">
                              <label className="form-label">Company Name</label>
                              <input
                                className="form-control"
                                name="companyName"
                                required=""
                                type="text"
                                value={formData.companyName}
                                onChange={handleChange}

                                onBlur={handleInputBlur}
                                />
                                {errors.companyName && <p style={{ color: 'red' }}>{errors.companyName}</p>}
                            </div>

                            <div className="col-sm-4 form-group">
                              <label className="form-label">Company Email</label>
                              <input
                                className="form-control"
                                name="companyEmail"
                                required=""

                                type="text"
                                value={formData.companyEmail}
                                onChange={handleChange}


                                onBlur={handleInputBlur}
                                />
                                {errors.companyEmail && <p style={{ color: 'red' }}>{errors.companyEmail}</p>}
                            </div>
                            <div className="col-sm-4 form-group">
                              <label className="form-label">Company Phone</label>
                              <input
                                className="form-control"
                                name="companyPhone"
                                required=""

                                type="text"
                                value={formData.companyPhone}
                                onChange={handleChange}


                                onBlur={handleInputBlur}
                                />
                                {errors.companyPhone && <p style={{ color: 'red' }}>{errors.companyPhone}</p>}
                            </div>
                            <div className="col-sm-4 ">
                              <label className="form-label">Company Website</label>
                              <input
                                className="form-control"
                                name="companyWebsite"
                                required=""

                                type="text"
                                value={formData.companyWebsite}
                                onChange={handleChange}


                              />
                            </div>
                            <div className="col-sm-4">
                              <label className="form-label">Company Address</label>
                              <input
                                className="form-control"
                                name="companyAddress"
                                required=""

                                type="text"
                                value={formData.companyAddress}
                                onChange={handleChange}


                              />
                            </div>
                            <div className="col-sm-4">
                              <label className="form-label">Company Tax No</label>
                              <input
                                className="form-control"
                                name="companyGstNo"
                                required=""

                                type="text"
                                value={formData.companyGstNo}
                                onChange={handleChange}

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
                        <h6 className="main-content-label mb-1">Billing Address</h6>
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
                            onChange={handleChange}


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
                            <input
                              className="form-control"
                              name="billingAddressArea"
                              required=""
                              type="text"
                              value={formData.billingAddressArea}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 mg-t-10">
                          <div className="form-group mb-0">
                            <label className="form-label">Address lane</label>
                            <input
                              className="form-control"
                              name="billingAddressLane"
                              required=""
                              type="text"
                              value={formData.billingAddressLane}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 mg-t-10">
                          <div className="form-group mb-0">
                            <label className="form-label">Pin Code</label>
                            <input
                              className="form-control"
                              name="billingPinCode"
                              required=""
                              type="text"
                              value={formData.billingPinCode}
                              onChange={handleChange}
                           
                              onBlur={handleInputBlur}
                              />
                              {errors.billingPinCode && <p style={{ color: 'red' }}>{errors.billingPinCode}</p>}
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
                          Shipping Address{" "}
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
                            <span className="tx-12">Same as Billing Address</span>
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
                            onChange={handleCountryChange}
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
                          <select className="form-control select select2"

                            name="shippingAddressState"
                            value={formData.shippingAddressState}
                            onChange={handleStateChange}
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
                          <select className="form-control select select2"
                            name="shippingAddressCity"
                            value={formData.shippingAddressCity}
                            onChange={handleChange}
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
                            <input
                              className="form-control"
                              name="shippingAddressArea"
                              value={formData.shippingAddressArea}
                              placeholder="Enter area"
                              type="text"
                              onChange={handleChange}
                              disabled={formData.sameAsBillingAddress}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 mg-t-10">
                          <div className="form-group mb-0">
                            <label className="form-label">Address lane</label>
                            <textarea
                              className="form-control"
                              name="shippingAddressLane"
                              value={formData.shippingAddressLane}
                              placeholder="Enter address lane"
                              onChange={handleChange}
                              disabled={formData.sameAsBillingAddress}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 mg-t-10">
                          <div className="form-group mb-0">
                            <label className="form-label">Pin Code</label>
                            <input
                              className="form-control"
                              name="shippingPinCode"
                              value={formData.shippingPinCode}
                              placeholder="Enter pin code"
                              type="text"
                              onChange={handleChange}
                              disabled={formData.sameAsBillingAddress}
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
                            <label className="form-label">Aadhaar Upload(Only PDF)</label>

                            <input
                              className="form-control"
                              type="file"
                              name="adharImage"
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
                              name="aadhaarNo"
                              value={formData.aadhaarNo}

                              onChange={handleChange}

                              onBlur={handleInputBlur}
                              />
                              {errors.aadhaarNo && <p style={{ color: 'red' }}>{errors.aadhaarNo}</p>}
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label className="form-label">PAN Upload(Only PDF)</label>
                            <input
                              className="form-control"
                              required=""
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
                              name="panNo"
                              value={formData.panNo}

                              onChange={handleChange}


                              onBlur={handleInputBlur}
                              />
                              {errors.panNo && <p style={{ color: 'red' }}>{errors.panNo}</p>}
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group mb-0">
                            <label className="form-label">Driving Licence(Only PDF)</label>
                            <input
                              className="form-control"
                              required=""
                              type="file"
                              name="drivingLicence"
                              onChange={handleFileChange}


                            />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group mb-0">
                            <label className="form-label">Cheque(Only PDF)</label>
                            <input
                              className="form-control"
                              required=""
                              type="file"
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
                              name="gstNo"
                              value={formData.gstNo}

                              onChange={handleChange}



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
                              name="accountNo"
                              value={formData.accountNo}

                              onChange={handleChange}


                              onBlur={handleInputBlur}
                              />
                              {errors.accountNo && <p style={{ color: 'red' }}>{errors.accountNo}</p>}
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group mb-0">
                            <label className="form-label">Account Name</label>
                            <input
                              className="form-control"
                              required=""
                              type="text"
                              name="accountName"
                              value={formData.accountName}

                              onChange={handleChange}


                              onBlur={handleInputBlur}
                              />
                              {errors.accountName && <p style={{ color: 'red' }}>{errors.accountName}</p>}
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group mb-0">
                            <label className="form-label">Bank Name</label>
                            <input
                              className="form-control"
                              required=""
                              type="text"
                              name="bankName"
                              value={formData.bankName}

                              onChange={handleChange}


                              onBlur={handleInputBlur}
                              />
                              {errors.bankName && <p style={{ color: 'red' }}>{errors.bankName}</p>}
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group mb-0">
                            <label className="form-label">IFSC</label>
                            <input
                              className="form-control"
                              required=""
                              type="text"
                              name="ifsc"
                              value={formData.ifsc}

                              onChange={handleChange}



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
                        <h6 className="main-content-label mb-3">ONBOARDING</h6>
                      </div>
                      <div className="row row-sm">
                        <div className="col-sm-4 form-group">
                          <label className="form-label"> Category</label>
                          <select className="form-control select select2">
                            <option>Select</option>
                          </select>
                        </div>
                        <div className="col-sm-4 form-group">
                          <label className="form-label">Sub Category</label>
                          <select className="form-control select select2">
                            <option>Select</option>
                          </select>
                        </div>
                        <div className="col-sm-4  form-group">
                          <label className="form-label">Company Age</label>
                          <input className="form-control" required="" type="text" />
                        </div>
                        <div className="col-sm-4 ">
                          <div className="form-group mb-0">
                            <label className="form-label">Preffered Langauge</label>
                            <input
                              className="form-control"
                              required=""
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-sm-4 ">
                          <div className="form-group mb-0">
                            <label className="form-label">
                              Preffered Locations
                            </label>
                            <input
                              className="form-control"
                              required=""
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-sm-4 ">
                          <div className="form-group mb-0">
                            <label className="form-label">
                              Bonus Wallet (Rs) - Credit
                            </label>
                            <input
                              className="form-control"
                              required=""
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Row */}
              <div className="row row-sm">
                <div className="col-12 mb-3">
                  <button className="btn btn-primary" onClick={handleSubmit} type="submit">
                    Submit
                  </button>
                  <ToastContainer />
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

export default AddExpor2