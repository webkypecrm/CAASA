import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployeeEdit = () => {

  const [showPassword, setShowPassword] = useState(false);
  const { empid } = useParams();

  const navigate = useNavigate();
  const initialFormData = {
    profilePhoto: null,
    select: '',
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
    teamManager: '',
    panNumber: '',
    panUpload: '',
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
    yearlyCL: '',
    extraIncentive: '',
    uploadedOfferLetter: '',
    reportBossA: '',
    reportBossB: '',
    monthlySalery: '',
    isEoi: 'true',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [company, setCompany] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const [fileName, setFileName] = useState('');
  const [workingShift, setWorkingShift] = useState([]);
  const [noticePeriod, setNoticePeriod] = useState([]);
  const [teamId, setTeamId] = useState('');
  const [emai, setEmai] = useState('');
  const [countryOptions, setCountryOptions] = useState([]);
  const [countryOption, setCountryOption] = useState([]);
  const [cityOption, setCityOption] = useState([]);
  const [stateOption, setStateOption] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [teamOptions, setTeamOptions] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [cityOptions, setCityOptions] = useState([]);
  const [countryId, setCountryId] = useState('');
  const [stateId, setStateId] = useState([]);
  const [countryIds, setCountryIds] = useState('');
  const [stateIds, setStateIds] = useState([]);
  const [shouldShowDropdown, setShouldShowDropdown] = useState(false);
  const [reportingBossA, setReportingBossA] = useState([])

  const Token = localStorage.getItem("Token");
  const apiUrl = process.env.REACT_APP_URL;


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };
  const getCurrentDate2 = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
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



  let oldSelectedDesi = [];
  let oldSelectedState = [];
  let oldSelectedCity = [];
  let oldSelectedState2 = [];
  let oldSelectedCity2 = [];

  useEffect(() => {
    const fetchUser = async () => {

      try {
        const url = `${apiUrl}/employee/employee/${empid}`;
        let result = await fetch(url, {
          headers: {
            Authorization: `Bearer ${Token}`,
            'Content-Type': 'application/json',
          },
        });

        result = await result.json();
        const { data } = result;

        let stateParam = data.currentAddressCountry || 0;
        let stateParam2 = data.currentAddressState || 0;
        let stateParam3 = data.permanentAddressCountry || 0;
        let stateParam4 = data.permanentAddressState || 0;
        // console.log('Fetched Data:', trimmedData);
        const oldSelectedStateResponse = await fetch(`${apiUrl}/employee/allStates/${stateParam}`);
        oldSelectedState = await oldSelectedStateResponse.json();
        const oldSelectedCityResponse = await fetch(`${apiUrl}/employee/allcities/${stateParam2}`);
        oldSelectedCity = await oldSelectedCityResponse.json();
        // PERMANENT
        const oldSelectedStateResponse2 = await fetch(`${apiUrl}/employee/allStates/${stateParam3}`);
        oldSelectedState2 = await oldSelectedStateResponse2.json();
        const oldSelectedCityResponse2 = await fetch(`${apiUrl}/employee/allcities/${stateParam4}`);
        oldSelectedCity2 = await oldSelectedCityResponse2.json();

        const oldSelectedDesiResponse = await fetch(`${apiUrl}/employee/allEmpDesig/${data.designation}`);
        oldSelectedDesi = await oldSelectedDesiResponse.json();


        setTeamOptions(oldSelectedDesi.data);
        setCityOptions(oldSelectedCity.data);
        setStateOptions(oldSelectedState.data);

        // PERMANENT
        setCityOption(oldSelectedCity2.data);
        setStateOption(oldSelectedState2.data);
        const photo = data.profilePhoto;
        setProfilePic(photo)


        setFormData((prevFormData) => ({
          ...prevFormData,

          emailId: data.emailId,
          password: data.password,


          profilePhoto: data.profilePhoto,
          select: data.select,
          fullName: data.fullName,

          phoneNumber: data.phoneNumber,
          gender: data.gender,
          dob: data.dob,
          company: data.company,
          department: data.department,
          designation: data.designation,
          dateOfJoining: data.dateOfJoining,
          aadharNumber: data.aadharNumber,
          panNumber: data.panNumber,
          teamManager: data.teamManager,
          accountNumber: data.accountNumber,
          accountName: data.accountName,
          bankName: data.bankName,
          yearlyCL: data.yearlyCL,
          ifsc: data.ifsc,
          offeredPackage: data.offeredPackage,
          offeredCTC: data.offeredCTC,
          noticePeriod: data.noticePeriod,
          workingShift: data.workingShift,
          currentAddressCountry: data?.currentAddressCountry,
          currentAddressState: data?.currentAddressState,
          currentAddressCity: data?.currentAddressCity,
          currentAddressArea: data?.currentAddressArea,
          currentAddressLane: data?.currentAddressLane,
          currentAddressPinCode: data?.currentAddressPinCode,
          // sameAsCurrentAddress: true,
          permanentAddressCountry: data?.permanentAddressCountry,
          permanentAddressState: data?.permanentAddressState,
          permanentAddressCity: data?.permanentAddressCity,
          permanentAddressArea: data?.permanentAddressArea,
          permanentAddressLane: data?.permanentAddressLane,
          permanentAddressPinCode: data?.permanentAddressPinCode,
          mobileBill: data.mobileBill,
          extraIncentive: data.extraIncentive,
          reportBossA: data.reportBossA,
          reportBossB: data.reportBossB,
          monthlySalery: data.monthlySalery,
          isEoi: data.isEoi,



        }));

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUser();
  }, []);






  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }

      const response = await fetch(`${apiUrl}/employee/employeeUpdate/${empid}`, {
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
      navigate("/staff-employee-list");
    } catch (error) {
      toast.error(error.message);

    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
    setStateOptions([]);
    setCityOptions([]);
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
      setCityOption([]);
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


  const handleFileChange = (e) => {
    const files = e.target.files;

    const name = files.name;
    setFileName(name);
    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(profilePicFile);
        setProfilePic(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          profilePhoto: profilePicFile,
        }));

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


        setFormData((prevData) => ({
          ...prevData,
          aadharUpload: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Assuming other file inputs exist for these file types
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

  const handleFileChange3 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {


        setFormData((prevData) => ({
          ...prevData,
          cheque: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Assuming other file inputs exist for these file types
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

  const handleFileChange4 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {


        setFormData((prevData) => ({
          ...prevData,
          panUpload: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Assuming other file inputs exist for these file types
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

  const handleFileChange5 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {


        setFormData((prevData) => ({
          ...prevData,
          drivingLicence: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Assuming other file inputs exist for these file types
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

  const handleFileChange6 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {


        setFormData((prevData) => ({
          ...prevData,
          uploadedOfferLetter: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Assuming other file inputs exist for these file types
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


  const handleDateChange3 = (event) => {
    const isChecked = event.target.checked;
    setFormData((prevState) => ({
      ...prevState,
      isEoi: isChecked, // Set to true or false based on checkbox state
    }));
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
        <div className="main-content pt-0" >
          <div className="main-container container-fluid">
            <div className="inner-body">
              {/* Page Header */}
              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">Update Staff</h2>
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
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <label htmlFor="profilePhoto" style={{ display: 'block' }}>Select Profile Photo:</label>
                              <input
                                type="file"
                                className="dropify"
                                data-height={200}
                                accept="image/jpeg, image/png, image/jpg"
                                value={fileName}
                                name="profilePhoto"
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
                              <select className="form-control" name="select"

                                onChange={handleInputChange}>

                                <option value={formData.select}>Staff</option>
                                <option value={formData.select} >Candidate</option>

                              </select>
                            </div>
                            {/* col-4 */}
                            <div className="col-lg-6 form-group">
                              <label className="form-label">
                                Full Name: <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"

                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter"
                                required=""
                                type="text"
                              />
                            </div>

                            <div className="col-lg-6 form-group">
                              <label className="form-label">
                                Email
                              </label>
                              <input
                                className="form-control"
                                name="emailId"
                                value={formData?.emailId}
                                onChange={handleInputChange}
                                placeholder="Enter "
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
                              <select className="form-control select2" name="gender"
                                value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
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
                                  className="form-control select2"
                                  type="date"
                                  value={formData.dob}
                                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                                  max={getCurrentDate()}

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
                              className="form-control select2"
                              type="date"
                              value={formData.dateOfJoining}
                              onChange={(e) => setFormData({ ...formData, dateOfJoining: e.target.value })}

                              max={getCurrentDate2()}
                            />
                          </div>
                        </div>
                        {shouldShowDropdown && (
                          <div className="col-sm-4  form-group">
                            <label className="form-label">Team manager</label>
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

                        <div className="col-sm-4  form-group">
                          <label className="form-label">Reporting Boss-A</label>
                          <select
                            className="form-control select2"
                            name="reportBossA"
                            value={formData.reportBossA}
                            onChange={handleInputChange}
                          >
                            <option>Select</option>
                            {reportingBossA.map((option, index) => (
                              <option key={option.id} value={option.id}>
                                {option.fullName}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-sm-4  form-group">
                          <label className="form-label">Reporting Boss-B</label>
                          <select
                            className="form-control select2"
                            name="reportBossB"
                            value={formData.reportBossB}
                            onChange={handleInputChange}
                          >
                            <option>Select</option>
                            {reportingBossA.map((option, index) => (
                              <option key={option.id} value={option.id}>
                                {option.fullName}
                              </option>
                            ))}
                          </select>
                        </div>


                        <div style={{ display: 'flex', alignItems: 'center' }}>


                          <label style={{ display: 'flex', alignItems: 'center', marginLeft: '12px' }}>
                            EOI
                            <input
                              type="checkbox"
                              checked={formData.isEoi} // Bind checkbox to formData
                              style={{ marginLeft: '8px' }}
                              name="isEoi"
                              onChange={handleDateChange3} // Toggle checkbox state
                            />
                            <span />
                          </label>

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
                        <h6 className="main-content-label  mb-3">KYC</h6>
                      </div>
                      <div className="row row-sm">
                        <div className="col-sm-3">
                          <div className="form-group mb-0">
                            <label className="form-label">Driving Licence</label>
                            <input
                              className="form-control"
                              required=""
                              type="file"
                              name="drivingLicence"
                              onChange={handleFileChange5}

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
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-3 ">
                          <div className="form-group">
                            <label className="form-label">Aadhaar Upload</label>
                            <input
                              className="form-control"
                              required=""
                              type="file"
                              name="aadharUpload"
                              onChange={handleFileChange2}
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
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group">
                            <label className="form-label">PAN Upload</label>
                            <input
                              className="form-control"
                              required=""
                              type="file"
                              name="panUpload"
                              onChange={handleFileChange4}

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
                              onChange={handleFileChange3}
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
                              <select className="form-control select2" name="noticePeriod"
                                value={formData.noticePeriod}
                                onChange={handleInputChange}>
                                <option>Select </option>
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
                              <select className="form-control select2" name="workingShift"
                                value={formData.workingShift}
                                onChange={handleInputChange}>
                                <option>Select </option>
                                {workingShift.map((option, index) => (
                                  <option key={option.id} value={option.name}>
                                    {option.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            {/* col-4 */}
                            l
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
                            <div className="col-lg-3 form-group">
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
                            <div className="col-lg-6 form-group">
                              <p className="form-label">Monthly Leave <span className="tx-danger">*</span> </p>
                              <select
                                className="form-control select2"
                                name="monthlySalery"
                                value={formData.monthlySalery}
                                onChange={handleInputChange}
                              >
                                <option>Select</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>



                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 form-group">
                          <label className="form-label">Upload Offer Letter</label>
                          <input
                            id="demo"
                            type="file"
                            accept="image/jpeg, image/png, text/html, application/zip, text/css, text/js"
                            multiple=""
                            name="uploadedOfferLetter"
                            onChange={handleFileChange6}

                          />
                        </div>
                      </div>
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

export default EmployeeEdit





