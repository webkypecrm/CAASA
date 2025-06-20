import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
const AddCondidates = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [teamManager, setTeamManager] = useState([]);

  const [workingShift, setWorkingShift] = useState([]);
  const navigate = useNavigate();
  const initialFormData = {
    profilePhoto: null,
    select: 'Candidate',
    fullName: '',
    emailId: '',
    password: '',
    phoneNumber: '',
    gender: '',
    dob: '',
    currentAddressCountry: '',
    currentAddressState: '',
    currentAddressCity: '',
    currentAddressArea: '',
    currentAddressLane: '',
    currentAddressPinCode: '',
    sameAsCurrentAddress: false,
    permanentAddressCountry: '',
    permanentAddressState: '',
    permanentAddressCity: '',
    permanentAddressArea: '',
    permanentAddressLane: '',
    permanentAddressPinCode: '',
    company: '',
    department: '',
    designation: '',
    dateOfJoining: '',
    drivingLicence: '',
    aadharNumber: '',
    aadharUpload: '',
    panNumber: '',
    panUpload: '',
    teamManager: '',
    cheque: '',
    accountNumber: '',
    accountName: '',
    bankName: '',
    ifsc: '',
    offeredPackage: '',
    offeredCTC: '',
    noticePeriod: '',
    workingShift: '',
    mobileBill: '',
    extraIncentive: '',
    yearlyCL: '',
    uploadedOfferLetter: '',
    resume: '',
  };



  const [formData, setFormData] = useState(initialFormData);

  const [profilePicFile, setProfilePicFile] = useState(null);
  const [countryOptions, setCountryOptions] = useState([]);
  const [countryOption, setCountryOption] = useState([]);
  const [cityOption, setCityOption] = useState([]);
  const [stateOption, setStateOption] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [teamOptions, setTeamOptions] = useState([]);

  const [cityOptions, setCityOptions] = useState([]);
  const [countryId, setCountryId] = useState('');
  const [stateId, setStateId] = useState([]);
  const [countryIds, setCountryIds] = useState('');
  const [stateIds, setStateIds] = useState([]);
  const [reportingBossA, setReportingBossA] = useState([])


  const [teamId, setTeamId] = useState('');


  const [company, setCompany] = useState([]);


  const [reportingBossB, setReportingBossB] = useState([]);

  const [noticePeriod, setNoticePeriod] = useState([]);
  const [shouldShowDropdown, setShouldShowDropdown] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showLoader, setShowLoader] = useState(true);

  const apiUrl = process.env.REACT_APP_URL;
  console.log(apiUrl);

  const Token = localStorage.getItem('Token');
  console.log('Token:', Token);

  //company
  useEffect(() => {
    const Token = localStorage.getItem('Token');

    fetch(`${apiUrl}/company/companyDropdown`, {
      headers: {
        Authorization: `Bearer ${Token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.data)) {
          setCompany(data.data);
        } else {
          console.error('API response does not contain an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching gender options:', error);
      });
  }, []);

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

  const fetchTeam = (teamId) => {
    fetch(`${apiUrl}/employee/allEmpDesig/${teamId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {

          setTeamOptions(data.data);
        } else {
          console.error('API response is not in the expected format for team managers.');
        }
      })
      .catch((error) => {
        console.error('Error fetching team manager data:', error);
      });
  };

  useEffect(() => {
    if (teamId) {
      fetchTeam(teamId);

    }
  }, [teamId]);

  useEffect(() => {

    if (
      [66, 67, 68, 69, 70, 71, 72].includes(parseInt(formData.designation))
    ) {
      setShouldShowDropdown(true);
    } else {
      setShouldShowDropdown(false);
    }
  }, [formData.designation]);



  const handleDesiChange = (event) => {
    const selectedDesignationId = event.target.value;
    setFormData({
      ...formData,
      designation: selectedDesignationId,
    });

    fetchTeam(selectedDesignationId);
    setTeamOptions([]);
  };


  // notice 
  useEffect(() => {
    const Token = localStorage.getItem('Token');
    fetch(`${apiUrl}/master/getAllMasterData/3`, {
      headers: {
        Authorization: `Bearer ${Token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.data)) {
          setNoticePeriod(data.data);
        } else {
          console.error('API response does not contain an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching gender options:', error);
      });
  }, []);

  //working shift
  useEffect(() => {
    const Token = localStorage.getItem('Token');
    fetch(`${apiUrl}/master/getAllMasterData/4`, {
      headers: {
        Authorization: `Bearer ${Token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.data)) {
          setWorkingShift(data.data);
        } else {
          console.error('API response does not contain an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching gender options:', error);
      });
  }, []);



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const maxDate = new Date();
  maxDate.setHours(0, 0, 0, 0);


  const getCurrentDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };
  const getCurrentDate2 = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };





  useEffect(() => {
    const Token = localStorage.getItem("Token");
    console.log("Token " + Token);

    fetch(`${apiUrl}/employee/add-employee`, {
      headers: {
        'Authorization': `Bearer ${Token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          if (Array.isArray(data.data)) {
            setUsers(data.data);
          } else {
            console.error('API response does not contain users array:', data);
          }
        } else {
          console.error('API request was not successful:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const filteredUsers = users.filter((user) => {
    return (
      (user.id.toString().includes(search) || user.firstName.includes(search)) &&
      (statusFilter === '' || user.status.toString() === statusFilter) &&
      (genderFilter === '' || user.gender === genderFilter || (genderFilter === 'male' && user.gender === 'Male') || (genderFilter === 'female' && user.gender === 'Female'))
    );
  });

  //image,pan call 
  const handleFileChange8 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)
        setProfilePicFile(profilePicFile);
        setFormData((prevData) => ({
          ...prevData,
          profilePhoto: profilePicFile,
        }));
      }
    } else {
      console.log('No file selected');
    }
  };
  const handleFileChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {


        setFormData((prevData) => ({
          ...prevData,
          aadharUpload: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Handle PDF files
        setFormData((prevData) => ({
          ...prevData,
          aadharUpload: profilePicFile,

        }));
      } else {
        console.log('Unsupported file type');
      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChange2 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)

        setFormData((prevData) => ({
          ...prevData,
          panUpload: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Handle PDF files
        setFormData((prevData) => ({
          ...prevData,

          panUpload: profilePicFile,


        }));
      } else {
        console.log('Unsupported file type');
      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChange3 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)

        setFormData((prevData) => ({
          ...prevData,
          drivingLicence: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Handle PDF files
        setFormData((prevData) => ({
          ...prevData,


          drivingLicence: profilePicFile,

        }));
      } else {
        console.log('Unsupported file type');
      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChange4 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)

        setFormData((prevData) => ({
          ...prevData,
          uploadedOfferLetter: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Handle PDF files
        setFormData((prevData) => ({
          ...prevData,


          uploadedOfferLetter: profilePicFile,

        }));
      } else {
        console.log('Unsupported file type');
      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChange6 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)

        setFormData((prevData) => ({
          ...prevData,
          cheque: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Handle PDF files
        setFormData((prevData) => ({
          ...prevData,
          cheque: profilePicFile,

        }));
      } else {
        console.log('Unsupported file type');
      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChange7 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)

        setFormData((prevData) => ({
          ...prevData,
          resume: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Handle PDF files
        setFormData((prevData) => ({
          ...prevData,
          resume: profilePicFile,

        }));
      } else {
        console.log('Unsupported file type');
      }
    } else {
      console.log('No file selected');
    }
  };



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const handleInputChange14 = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }


  const handleInputChange10 = (event) => {
    let inputValue = event.target.value;

    // Remove any non-numeric characters
    inputValue = inputValue.replace(/\D/g, '');

    // Limit the input to 12 characters
    inputValue = inputValue.slice(0, 12);

    // Update the state with the sanitized value
    setFormData({
      ...formData,
      aadharNumber: inputValue
    });
  };
  const handleInputChange11 = (event) => {
    let inputValue = event.target.value;

    // Remove any non-alphanumeric characters except the letters 'A' to 'Z' and digits '0' to '9'
    inputValue = inputValue.replace(/[^A-Za-z0-9]/g, '');

    // Limit the input to 12 characters
    inputValue = inputValue.slice(0, 10);

    // Update the state with the sanitized value
    setFormData({
      ...formData,
      panNumber: inputValue
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }

      const response = await fetch(`${apiUrl}/employee/add-employee`, {
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

      setFormData(initialFormData); // Reset the form
      toast.success(response2.message);
      navigate("/candidate-employee-list");
    } catch (error) {
      toast.error(error.message);

    }
  };

  //Boss a

  useEffect(() => {
    const Token = localStorage.getItem('Token');
    console.log('Token:', Token);

    fetch(`${apiUrl}/employee/allEmpDesig`, {
      headers: {
        'Authorization': `Bearer ${Token}` // Assuming it's a Bearer token
        // Add other headers if needed
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

  //Boss b
  useEffect(() => {
    const Token = localStorage.getItem('Token');
    console.log('Token:', Token);

    fetch(`${apiUrl}/employee/allEmpDesig`, {
      headers: {
        'Authorization': `Bearer ${Token}` // Assuming it's a Bearer token
        // Add other headers if needed
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.data)) {
          setReportingBossB(data.data);
        } else {
          console.error('API response does not contain an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching gender options:', error);
      });
  }, []);
  const handleDateChange2 = (event) => {
    const inputDate = event.target.value;
    setFormData(prevState => ({
      ...prevState,
      dateOfJoining: inputDate,
    }));
  };


  //country api 
  useEffect(() => {
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

  useEffect(() => {
    if (countryId) {

      fetchStates(countryId);
    }
  }, [countryId]);

  useEffect(() => {
    if (stateId) {

      fetchCities(stateId);
    }
  }, [stateId]);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountryId(selectedCountry);
    setFormData({
      ...formData,
      currentAddressCountry: selectedCountry,
    });
    setStateOptions([]); // Clear state options
    setCityOptions([]); // Clear city options
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setStateId(selectedState);
    setFormData({
      ...formData,
      currentAddressState: selectedState,
    });
    setCityOptions([]); // Clear city options
  };

  // pre 

  useEffect(() => {
    fetch(`${apiUrl}/employee/allCountries`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setCountryOption(data.data);
        } else {
          console.error('API response is not in the expected format for countries.');
        }

      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }, []);



  const fetchState = (countryIds) => {
    fetch(`${apiUrl}/employee/allStates/${countryIds}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setStateOption(data.data);
        } else {
          console.error('API response is not in the expected format for states.');
        }
      })
      .catch((error) => {
        console.error('Error fetching state data:', error);
      });
  };

  const fetchCitie = (stateIds) => {
    fetch(`${apiUrl}/employee/allcities/${stateIds}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setCityOption(data.data);
        } else {
          console.error('API response is not in the expected format for cities.');
        }
      })
      .catch((error) => {
        console.error('Error fetching city data:', error);
      });
  };

  useEffect(() => {
    if (countryIds) {

      fetchState(countryIds);
    }
  }, [countryIds]);

  useEffect(() => {
    if (stateIds) {

      fetchCitie(stateIds);
    }
  }, [stateIds]);

  const handleCountryChang = (event) => {
    const selectedCountry = event.target.value;
    setCountryIds(selectedCountry);
    if (!formData.sameAsCurrentAddress) {
      setFormData({
        ...formData,
        permanentAddressCountry: selectedCountry,
      });
      setStateOption([]); // Clear state options
      setCityOption([]); // Clear city options
    }
  };

  const handleStateChang = (event) => {
    const selectedState = event.target.value;
    setStateIds(selectedState);
    if (!formData.sameAsCurrentAddress) {
      setFormData({
        ...formData,
        permanentAddressState: selectedState,
      });
      setCityOption([]); // Clear city options
    }
  };





  const handleSameAddressChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        sameAsCurrentAddress: true,
        permanentAddressCountry: formData.currentAddressCountry,
        permanentAddressState: formData.currentAddressState,
        permanentAddressCity: formData.currentAddressCity,
        permanentAddressArea: formData.currentAddressArea,
        permanentAddressLane: formData.currentAddressLane,
        permanentAddressPinCode: formData.currentAddressPinCode,
      });
    } else {
      setFormData({
        ...formData,
        sameAsCurrentAddress: false,
      });
    }
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
        {/* Main Content*/}
        <div className="main-content pt-0">
          <div className="main-container container-fluid">
            <div className="inner-body">
              {/* Page Header */}
              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">Add Candidate</h2>
                </div>
              </div>
              {/* End Page Header */}
              {/* Row */}
              <div className="row row-sm">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-4">PROFILE PHOTO</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm"  >
                            <div className="col-sm-12 col-md-12">
                              <label htmlFor="profilePhoto" style={{ display: 'block' }}>Select Profile Photo:</label>
                              <input
                                id="profilePhoto"
                                className="form-control"
                                type="file"
                                name="profilePhoto"
                                onChange={handleFileChange8}
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
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-3">BASIC INFO</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-lg-6 form-group">
                              <label className="form-label">
                                Profile Type: <span className="tx-danger">*</span>
                              </label>
                              <select className="form-control"
                                name="select"
                                defaultValue={'Candidate'}
                                value={formData.select}
                                onChange={handleInputChange}>
                                <option value=''>Select</option>

                                <option value={'Candidate'} >Candidate</option>

                              </select>
                            </div>
                            {/* col-4 */}
                            <div className="col-lg-6 form-group">
                              <label className="form-label">
                                Full Name: <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"

                                placeholder="Enter first name"
                                required
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}

                              />
                            </div>
                            <div className="col-lg-6 form-group">
                              <label className="form-label">
                                Email ID: <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                name="emailId"
                                value={formData.emailId}
                                onChange={handleInputChange}
                                placeholder="Enter "
                                required=""
                                type="text"
                              />
                            </div>
                            <div className="col-lg-6 form-group">
                              <label className="form-label">
                                Password: <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter "
                                required=""

                                type={showPassword ? "text" : "password"}
                              />
                              <span
                                onClick={togglePasswordVisibility}
                                className="fa fa-fw fa-eye field-icon toggle-password"
                              ></span>
                            </div>
                            <div className="col-lg-6 form-group">
                              <label className="form-label">
                                Mobile no: <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="Enter "
                                required=""
                                type="text"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label className="form-label">
                                Gender: <span className="tx-danger">*</span>
                              </label>
                              <select className="form-control select2"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}>
                                <option>Select</option>
                                <option >Male</option>
                                <option >Female</option>
                              </select>
                            </div>
                            {/* col-4 */}
                            <div className="col-lg-6">
                              <label className="form-label">
                                Date of Birth: <span className="tx-danger">*</span>
                              </label>
                              <div className="input-group">

                                <input
                                  className="form-control fc-datepicker"
                                  placeholder="MM/DD/YYYY"
                                  max={getCurrentDate()}
                                  type="date"
                                  name="dob"
                                  value={formData.dob}
                                  onChange={handleInputChange}
                                />
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
              {/* Row */}
              <div className="row row-sm">
                <div className="col-lg-6 col-md-6">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Current Address</h6>
                      </div>
                      <div className="row row-sm">
                        {/* Country */}
                        <div className="col-sm-6 mg-t-10">
                          <label className="form-label">Country </label>
                          <select
                            className="form-control select select2"
                            name="currentAddressCountry"
                            // value={formData.currentAddressCountry}
                            onChange={handleCountryChange}
                          >
                            <option value="">Select a country</option>

                            {countryOptions.map((country) => (
                              <option selected={country.id === +formData.currentAddressCountry} key={country.id} value={(country?.id)}>
                                {`${country.name}`}
                              </option>
                            ))}

                          </select>
                        </div>
                        {/* State */}
                        <div className="col-sm-6 mg-t-10">
                          <label className="form-label">State</label>
                          <select
                            className="form-control select select2"
                            name="currentAddressState"
                            // value={formData.currentAddressState}
                            onChange={handleStateChange}
                          >
                            <option value="">Select a State</option>
                            {stateOptions.map((state) => (
                              <option selected={state.id === +formData.currentAddressState} key={state.id} value={(state?.id)}>
                                {`${state.name}`}
                              </option>
                            ))}


                          </select>
                        </div>
                        {/* City */}
                        <div className="col-sm-6 mg-t-10">
                          <label className="form-label">City</label>
                          <select
                            className="form-control select select2"
                            name="currentAddressCity"
                            value={formData.currentAddressCity}
                            onChange={handleInputChange}
                          >
                            <option value="">Select a city</option>

                            {cityOptions.map((city, index) => (
                              <option selected={city.id === +formData.currentAddressCity} key={city.id} value={(city.id)}>
                                {`${city.name}`}
                              </option>
                            ))}

                          </select>
                        </div>
                        {/* Area */}
                        <div className="col-sm-6 mg-t-10">
                          <label className="form-label">Area</label>
                          <input
                            className="form-control"
                            name="currentAddressArea"
                            value={formData.currentAddressArea}
                            placeholder="Enter area"
                            type="text"
                            onChange={handleInputChange}
                          />
                        </div>
                        {/* Address Lane */}
                        <div className="col-sm-6 mg-t-10">
                          <label className="form-label">Address Lane</label>
                          <textarea
                            className="form-control"
                            name="currentAddressLane"
                            value={formData.currentAddressLane}
                            placeholder="Enter address lane"
                            onChange={handleInputChange}
                          />
                        </div>
                        {/* Pin Code */}
                        <div className="col-sm-6 mg-t-10">
                          <label className="form-label">Pin Code</label>
                          <input
                            className="form-control"
                            name="currentAddressPinCode"
                            value={formData.currentAddressPinCode}
                            placeholder="Enter pin code"
                            type="text"
                            onChange={handleInputChange}

                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">
                          Permanent Address
                        </h6>
                      </div>
                      <div className="row row-sm">
                        {/* Same as Current Address */}
                        <div className="col-sm-12">
                          <label className="ckbox">
                            <input
                              name="sameAsCurrentAddress"
                              type="checkbox"
                              checked={formData.sameAsCurrentAddress}
                              onChange={handleSameAddressChange}
                            />
                            <span>Same as Current Address</span>
                          </label>
                        </div>
                        {!formData.sameAsCurrentAddress && (
                          <>

                            <div className="col-sm-6 mg-t-10">
                              <label className="form-label">Country</label>
                              <select
                                className="form-control select select2"
                                name="permanentAddressCountry"
                                // value={formData.permanentAddressCountry
                                onChange={handleCountryChang}
                                disabled={formData.sameAsCurrentAddress}
                              >
                                <option value=''>Select a country</option>
                                {countryOption.map((country) => (
                                  <option selected={country.id === +formData.permanentAddressCountry} key={country.id} value={(country?.id)}>
                                    {`${country.name}`}
                                  </option>
                                ))}


                              </select>
                            </div>
                            {/* State */}
                            <div className="col-sm-6 mg-t-10">
                              <label className="form-label">State</label>
                              <select
                                className="form-control select select2"
                                name="permanentAddressState"

                                onChange={handleStateChang}
                                disabled={formData.sameAsCurrentAddress}
                              >
                                <option value=''>Select a state</option>
                                {stateOption.map((state) => (
                                  <option selected={state.id === +formData.permanentAddressState} key={state.id} value={(state?.id)}>
                                    {`${state.name}`}
                                  </option>
                                ))}


                              </select>
                            </div>
                            {/* City */}
                            <div className="col-sm-6 mg-t-10">
                              <label className="form-label">City</label>
                              <select
                                className="form-control select select2"
                                name="permanentAddressCity"

                                onChange={handleInputChange}
                                disabled={formData.sameAsCurrentAddress}
                              >
                                <option value="">Select a city</option>

                                {cityOption.map((city, index) => (
                                  <option selected={city.id === +formData.currentAddressCity} key={city.id} value={(city.id)}>
                                    {`${city.name}`}
                                  </option>
                                ))}

                              </select>
                            </div>
                            {/* Area */}
                            <div className="col-sm-6 mg-t-10">
                              <label className="form-label">Area</label>
                              <input
                                className="form-control"
                                name="permanentAddressArea"
                                value={formData.permanentAddressArea}
                                placeholder="Enter area"
                                type="text"
                                onChange={handleInputChange}
                                disabled={formData.sameAsCurrentAddress}
                              />
                            </div>
                            {/* Address Lane */}
                            <div className="col-sm-6 mg-t-10">
                              <label className="form-label">Address Lane</label>
                              <textarea
                                className="form-control"
                                name="permanentAddressLane"
                                value={formData.permanentAddressLane}
                                placeholder="Enter address lane"
                                onChange={handleInputChange}
                                disabled={formData.sameAsCurrentAddress}
                              />
                            </div>
                            {/* Pin Code */}
                            <div className="col-sm-6 mg-t-10">
                              <label className="form-label">Pin Code</label>
                              <input
                                className="form-control"
                                name="permanentAddressPinCode"
                                value={formData.permanentAddressPinCode}
                                onChange={handleInputChange}
                                placeholder="Enter pin code"
                                type="text"

                                disabled={formData.sameAsCurrentAddress}
                              />
                            </div>
                          </>
                        )}
                        {formData.sameAsCurrentAddress && (
                          <>
                            <div className="col-sm-6 mg-t-10">
                              <label className="form-label">Country</label>
                              <select
                                className="form-control select select2"
                                name="permanentAddressCountry"
                                // value={formData.permanentAddressCountry
                                onChange={handleCountryChang}
                                disabled={formData.sameAsCurrentAddress}
                              >
                                <option value=''>Select a country</option>
                                {countryOption.map((country) => (
                                  <option selected={country.id === +formData.permanentAddressCountry} key={country.id} value={(country?.id)}>
                                    {`${country.name}`}
                                  </option>
                                ))}


                              </select>
                            </div>
                            {/* State */}
                            <div className="col-sm-6 mg-t-10">
                              <label className="form-label">State</label>
                              <select
                                className="form-control select select2"
                                name="permanentAddressState"

                                onChange={handleStateChang}
                                disabled={formData.sameAsCurrentAddress}
                              >
                                <option value=''>Select a state</option>
                                {stateOptions.map((state) => (
                                  <option selected={state.id === +formData.permanentAddressState} key={state.id} value={(state?.id)}>
                                    {`${state.name}`}
                                  </option>
                                ))}


                              </select>
                            </div>
                            {/* City */}
                            <div className="col-sm-6 mg-t-10">
                              <label className="form-label">City</label>
                              <select
                                className="form-control select select2"
                                name="permanentAddressCity"

                                onChange={handleInputChange}
                                disabled={formData.sameAsCurrentAddress}
                              >
                                <option value="">Select a city</option>

                                {cityOptions.map((city, index) => (
                                  <option selected={city.id === +formData.permanentAddressCity} key={city.id} value={(city.id)}>
                                    {`${city.name}`}
                                  </option>
                                ))}

                              </select>
                            </div>
                            {/* Area */}
                            <div className="col-sm-6 mg-t-10">
                              <label className="form-label">Area</label>
                              <input
                                className="form-control"
                                name="permanentAddressArea"
                                value={formData.permanentAddressArea}
                                placeholder="Enter area"
                                type="text"
                                onChange={handleInputChange}
                                disabled={formData.sameAsCurrentAddress}
                              />
                            </div>
                            {/* Address Lane */}
                            <div className="col-sm-6 mg-t-10">
                              <label className="form-label">Address Lane</label>
                              <textarea
                                className="form-control"
                                name="permanentAddressLane"
                                value={formData.permanentAddressLane}
                                placeholder="Enter address lane"
                                onChange={handleInputChange}
                                disabled={formData.sameAsCurrentAddress}
                              />
                            </div>
                            {/* Pin Code */}
                            <div className="col-sm-6 mg-t-10">
                              <label className="form-label">Pin Code</label>
                              <input
                                className="form-control"
                                name="permanentAddressPinCode"
                                value={formData.permanentAddressPinCode}
                                onChange={handleInputChange}
                                placeholder="Enter pin code"
                                type="text"

                                disabled={formData.sameAsCurrentAddress}
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Row */}
              {/* Row */}
              {formData.select === 'Staff' && (
                <>

                  <div className="row row-sm">
                    <div className="col-lg-12 col-md-12">
                      <div className="card custom-card">
                        <div className="card-body">
                          <div>
                            <h6 className="main-content-label mb-3">ONBOARDING</h6>
                          </div>
                          <div className="row row-sm">
                            <div className="col-sm-4 form-group">
                              <label className="form-label">Company: <span className="tx-danger">*</span></label>
                              <select
                                className="form-control select2"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                              >
                                <option>Select</option>
                                {company.map((option, index) => (
                                  <option key={option.id} value={option.id}>
                                    {option.companyName}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-4  form-group">
                              <label className="form-label">Department: <span className="tx-danger">*</span></label>
                              <select
                                className="form-control select2"
                                name="department"
                                value={formData.department}
                                onChange={handleInputChange}
                              >
                                <option>Select</option>
                                {department.map((option, index) => (
                                  <option key={option.id} value={option.id}>
                                    {option.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-4  form-group">
                              <label className="form-label">Designation: <span className="tx-danger">*</span></label>
                              <select
                                className="form-control select2"
                                name="designation"
                                value={formData.designation}
                                onChange={handleDesiChange}
                              >
                                <option>Select</option>
                                {designation.map((option) => (
                                  <option key={option.id} value={option.id}>
                                    {option.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-lg-4 form-group">
                              <label className="form-label">
                                Date of Joining: <span className="tx-danger">*</span>
                              </label>
                              <div className="input-group">

                                <input
                                  className="form-control fc-datepicker"
                                  placeholder="MM/DD/YYYY"
                                  name="dateOfJoining"
                                  value={formData.dateOfJoining}
                                  onChange={handleDateChange2}
                                  max={getCurrentDate2()}

                                  type="date"

                                />
                              </div>
                            </div>
                            {shouldShowDropdown && (
                              <div className="col-sm-4  form-group">
                                <label className="form-label">Team Manager</label>

                                <select
                                  className="form-control select2"
                                  name="teamManager"
                                  value={formData.teamManager}
                                  onChange={handleInputChange}
                                >
                                  <option>Select</option>
                                  {teamOptions.map((option) => (
                                    <option key={option.id} value={option.id}>
                                      {option.name}
                                    </option>
                                  ))}
                                </select>

                              </div>
                            )}


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </>
              )}
              {formData.select === 'Candidate' && (
                <>

                  <div className="row row-sm">
                    <div className="col-lg-12 col-md-12">
                      <div className="card custom-card">
                        <div className="card-body">
                          <div>
                            <h6 className="main-content-label mb-3">ONBOARDING</h6>
                          </div>
                          <div className="row row-sm">
                            <div className="col-sm-4 form-group">
                              <label className="form-label">Company</label>
                              <select
                                className="form-control select2"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                              >
                                <option>Select</option>
                                {company.map((option, index) => (
                                  <option key={option.id} value={option.id}>
                                    {option.companyName}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-4  form-group">
                              <label className="form-label">Department</label>
                              <select
                                className="form-control select2"
                                name="department"
                                value={formData.department}
                                onChange={handleInputChange}
                              >
                                <option>Select</option>
                                {department.map((option, index) => (
                                  <option key={option.id} value={option.id}>
                                    {option.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-4 form-group">
                              <label className="form-label">Designation</label>
                              <select
                                className="form-control select2"
                                name="designation"
                                value={formData.designation}
                                onChange={handleInputChange}
                              >
                                <option>Select</option>
                                {designation

                                  .sort((a, b) => a.name.localeCompare(b.name))
                                  .map((option, index) => (
                                    <option key={option.id} value={option.id}>
                                      {option.name}
                                    </option>
                                  ))}
                              </select>
                            </div>



                            <div className="col-sm-3">
                              <div className="form-group mb-0">
                                <label className="form-label">Resume Upload</label>
                                <input
                                  type="file"
                                  className="dropify"
                                  name="resume"
                                  onChange={handleFileChange7}
                                />
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div></>
              )}
              {/* End Row */}
              {/* Row */}
              {formData.select === 'Staff' && (

                <>
                  <div className="row row-sm">
                    <div className="col-lg-12 col-md-12">
                      <div className="card custom-card">
                        <div className="card-body">
                          <div>
                            <h6 className="main-content-label  mb-3">KYC</h6>
                          </div>
                          <div className="row row-sm">
                            <div className="col-sm-3">
                              <div className="form-group mb-0">
                                <label className="form-label">Driving Licence</label>
                                <input
                                  type="file"
                                  className="dropify"
                                  name="drivingLicence"
                                  onChange={handleFileChange3}
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
                                  name="aadharNumber"
                                  value={formData.aadharNumber}
                                  onChange={handleInputChange10}
                                />
                              </div>
                            </div>
                            <div className="col-sm-3 ">
                              <div className="form-group">
                                <label className="form-label">Aadhaar Upload</label>
                                <input
                                  className="form-control"
                                  type="file"
                                  name="aadharUpload"

                                  accept="/pdf"
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
                                  name="panNumber"
                                  value={formData.panNumber}
                                  onChange={handleInputChange11}
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
                                  onChange={handleFileChange2}
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
                                  name="accountNumber"
                                  value={formData.accountNumber}
                                  onChange={handleInputChange}
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
                                  name="accountName"
                                  value={formData.accountName}
                                  onChange={handleInputChange}
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
                                  name="bankName"
                                  value={formData.bankName}
                                  onChange={handleInputChange}
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
                                  name="ifsc"
                                  value={formData.ifsc}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group mb-0">
                                <label className="form-label">Cheque</label>
                                <input
                                  className="form-control"
                                  required=""
                                  type="file"
                                  name="cheque"
                                  onChange={handleFileChange6}
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
                            <h6 className="main-content-label mb-3">OFFER</h6>
                          </div>
                          <div className="row row-sm ">
                            <div className="col-sm-8">
                              <div className="row">
                                <div className="col-sm-6 form-group ">
                                  <label className="form-label">Offered Package(Yearly): <span className="tx-danger">*</span></label>
                                  <input
                                    className="form-control"
                                    required=""
                                    type="text"
                                    name="offeredPackage"
                                    value={formData.offeredPackage}
                                    onChange={handleInputChange}
                                  />
                                </div>
                                <div className="col-sm-6 form-group">
                                  <label className="form-label">Offered CTC(Monthly): <span className="tx-danger">*</span></label>
                                  <input
                                    className="form-control"
                                    required=""
                                    type="text"
                                    name="offeredCTC"
                                    value={formData.offeredCTC}
                                    onChange={handleInputChange}
                                  />
                                </div>
                                <div className="col-lg-6 form-group">
                                  <p className="form-label">Notice Period: <span className="tx-danger">*</span></p>
                                  <select
                                    className="form-control select2"
                                    name="noticePeriod"
                                    value={formData.noticePeriod}
                                    onChange={handleInputChange}
                                  >
                                    <option>Select</option>
                                    {noticePeriod.map((option, index) => (
                                      <option key={option.id} value={option.name}>
                                        {option.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                {/* col-4 */}
                                <div className="col-lg-6 form-group">
                                  <p className="form-label">Working Shift </p>
                                  <select
                                    className="form-control select2"
                                    name="workingShift"
                                    value={formData.workingShift}
                                    onChange={handleInputChange}
                                  >
                                    <option>Select</option>
                                    {workingShift.map((option, index) => (
                                      <option key={option.id} value={option.name}>
                                        {option.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                {/* col-4 */}

                                <div className="col-sm-3 form-group">
                                  <label className="form-label">
                                    Mobile Bill
                                  </label>
                                  <input
                                    className="form-control"
                                    required=""
                                    type="text"
                                    name="mobileBill"
                                    value={formData.mobileBill}
                                    onChange={handleInputChange}
                                  />
                                </div>
                                <div className="col-sm-3 form-group">
                                  <label className="form-label">
                                    Extra Incentive
                                  </label>
                                  <input
                                    className="form-control"
                                    required=""
                                    type="text"
                                    name="extraIncentive"
                                    value={formData.extraIncentive}
                                    onChange={handleInputChange}
                                  />
                                </div>
                                <div className="col-lg-6 form-group">
                                  <p className="form-label">Yearly CL: <span className="tx-danger">*</span> </p>
                                  <select
                                    className="form-control select2"
                                    name="yearlyCL"
                                    value={formData.yearlyCL}
                                    onChange={handleInputChange}
                                  >
                                    <option>Select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>


                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4 form-group">
                              <label className="form-label">Upload Offer Letter</label>
                              <input
                                type="file"
                                className="dropify"
                                name="uploadedOfferLetter"
                                onChange={handleFileChange4}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </>



              )}
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
        {/*End Footer*/}

      </div>

    </>


  )
}

export default AddCondidates






