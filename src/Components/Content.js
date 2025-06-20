import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

function YourFormComponent() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [userTypeOption, setUserTypeOption] = useState([]);

  const [genderOptions2, setGenderOptions2] = useState([]);
  const [genderOptions3, setGenderOptions3] = useState([]);
  const [genderOptions4, setGenderOptions4] = useState([]);
  const [genderOptions5, setGenderOptions5] = useState([]);
  const navigate = useNavigate();
  const initialFormData = {
    profilePic: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    gender: "Male",
    dob: "",
    userType: "",
    currentAddressCountry: "",
    currentAddressState: "",
    currentAddressCity: "",
    currentAddressArea: "",
    currentAddressLane: "",
    currentAddressPinCode: "",
    sameAsCurrentAddress: false,
    permanentAddressCountry: "",
    permanentAddressState: "",
    permanentAddressCity: "",
    permanentAddressArea: "",
    permanentAddressLane: "",
    permanentAddressPinCode: "",
    companyName: "",
    department: "",
    designation: "",
    dateOfJoin: "",
    reportingBossA: "",
    reportingBossB: "",
    permissions: "",
    adharImage: null,
    adharNumber: "",
    panImage: "",
    panNumber: "",
    drivingLicenseImage: null,
    chequeImage: null,
    accountNumber: "",
    accountName: "",
    bankName: "",
    ifsc: "",
    offeredPackage: "",
    offeredCTC: "",
    noticePeriod: "",
    workingShift: "",
    perHourCharges: "",
    perCasesCharges: "",
    perMonthCharges: "",
    consultingFees: "",
    offerLetterUpload: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [employeeList, setEmployeeList] = useState([]);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  // Initialize the state to store the date input value
  const [dateOfJoining, setDateOfJoining] = useState();
  const [dob, setDob] = useState();
  const [fileName, setFileName] = useState([]);
  const [filesNa, setFileNa] = useState([]);
  const [sendDocs, setsendDocs] = useState([]);
  const [file, setFile] = useState(null); // Initialize file state to null
  const [firstName, setfirstName] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [email, setemail] = useState("");
  const [lastName, setlastName] = useState("");
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [profilePicFile2, setProfilePicFile2] = useState(null);
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [countryIdLookup, setCountryIdLookup] = useState({});
  const [cityOptions, setCityOptions] = useState([]);
  const [stateId, setStateId] = useState([]);
  const [designationId, setDesignationId] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [countryId, setCountryId] = useState("");
  const [departmentId, setDepartmentI] = useState("");
  const [genderOption, setGenderOption] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const [optio, setOptio] = useState([]);
  const [selectDepartment, setSelectDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [noticePeriod, setNoticePeriod] = useState([]);
  const [working, setWorking] = useState([]);
  const [reportingBossA, setReportingBossA] = useState([]);
  const [reportingBossB, setReportingBossB] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDesignation, setSelectedDesignation] = useState("");
  const [errors, setErrors] = useState({});

  const apiUrl = process.env.REACT_APP_URL;
  console.log(apiUrl);

  const Token = localStorage.getItem("Token");
  console.log("Token:", Token);

  //Gender
  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/master/getAllMasterData/9`, {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setGenderOption(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  //Gender
  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/master/getAllMasterData/10`, {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setUserTypeOption(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  //departments
  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/master/getAllMasterData/7`)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setGenderOptions2(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  // Designation
  useEffect(() => {
    fetch(`${apiUrl}/master/getAllMasterData/6`)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setGenderOptions3(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  // notice
  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/master/getAllMasterData/12`)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setGenderOptions4(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  //working shift
  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/master/getAllMasterData/13`)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setGenderOptions5(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const maxDate = new Date(); // Get the current date
  maxDate.setHours(0, 0, 0, 0); // Set the time to the beginning of the day

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

  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      dob: inputDate,
    }));
  };
  const handleDateChange2 = (event) => {
    const inputDate = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      dateOfJoin: inputDate,
    }));
  };

  const handleUserTypeChange = (event) => {
    const userType = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      userType: userType, 
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith("image/")) {
        setProfilePicFile(profilePicFile);
        setFormData((prevData) => ({
          ...prevData,
          profilePic: profilePicFile,
        }));
      } else if (profilePicFile.type === "application/pdf") {
        // Assuming other file inputs exist for these file types
        setFormData((prevData) => ({
          ...prevData,
          adharImage: profilePicFile,
          panImage: profilePicFile,
          drivingLicenseImage: profilePicFile,
          offerLetterUpload: profilePicFile,
          chequeImage: profilePicFile,
        }));
      } else {
        console.log("Unsupported file type");
      }
    } else {
      console.log("No file selected");
    }
  };

  const validateForm = () => {};
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = `${name.toUpperCase()} is required`;
    } else if (
      name === "firstName" &&
      !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value)
    ) {
      newErrors[
        name
      ] = `Please enter a valid ${name} with only alphabetical characters`;
    } else if (
      name === "lastName" &&
      !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value)
    ) {
      newErrors[
        name
      ] = `Please enter a valid ${name} with only alphabetical characters`;
    } else if (name === "email" && (!value.trim() || !emailRegex.test(value))) {
      newErrors[name] = "Please enter a valid email address";
    } else if (
      name === "mobileNumber" &&
      (!value.trim() || !/^\d{10}$/.test(value))
    ) {
      newErrors[name] = "Please enter a valid 10-digit mobile number";
    } else if (
      name === "adharNumber" &&
      (!value.trim() || !/^\d{12}$/.test(value))
    ) {
      newErrors[name] = "Please enter a valid 12-digit Aadhaar number";
    } else if (
      name === "panNumber" &&
      (!value.trim() || !/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(value))
    ) {
      newErrors[name] =
        "Please enter a valid PAN number in the format ABCDE1234F";
    } else if (
      name === "accountNumber" &&
      (value.length < 0 ||
        value.length > 16 ||
        !/^[A-Z0-9]{0,16}$/i.test(value))
    ) {
      newErrors[name] =
        "Please enter a valid account number with 0 to 16 characters, including numbers and capital letters";
    } else if (name === "accountName" && !/^[A-Za-z\s]+$/.test(value)) {
      newErrors[name] =
        "Please enter a valid account name with only alphabetical characters";
    } else if (name === "bankName" && !/^[A-Za-z\s]+$/.test(value)) {
      newErrors[name] =
        "Please enter a valid bank name with only alphabetical characters";
    } else if (
      name === "ifsc" &&
      (value.length < 0 || value.length > 11 || !/^[A-Z0-9]{0,11}$/.test(value))
    ) {
      newErrors[name] =
        "Please enter a valid IFSC code with 0 to 11 characters, including numbers and capital letters";
    } else if (name === "currentAddressPinCode" && !/^\d{6}$/.test(value)) {
      newErrors[name] = "Please enter a valid 6-digit pin code";
    } else if (
      name === "offeredPackage" &&
      (value.length === 1 || value.length > 8 || !/^\d{1,8}$/.test(value))
    ) {
      newErrors[name] =
        "Please enter a valid offeredPackage between 1 to 8 digits";
    } else if (
      name === "offeredCTC" &&
      (value.length === 1 || value.length > 8 || !/^\d{1,8}$/.test(value))
    ) {
      newErrors[name] =
        "Please enter a valid offeredPackage between 1 to 8 digits";
    } else if (
      name === "perMonthCharges" &&
      (value.length === 1 || value.length > 8 || !/^\d{1,8}$/.test(value))
    ) {
      newErrors[name] =
        "Please enter a valid offeredPackage between 1 to 8 digits";
    } else {
      delete newErrors[name]; // Remove error if field is valid
    }

    setErrors(newErrors);
  };

  const handleInputBlur = (event) => {};

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      permissions: checked
        ? [...formData.permissions, name]
        : formData.permissions.filter((item) => item !== name),
    });
  };

  const clearError = () => {
    setError("");
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
      navigate("/MainPage2");
    } catch (error) {
      toast.error(error.message);
      // Handle other potential errors, like network issues
    }
  };

  //Reporting A api
  //Boss a

  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/employee/allEmpDesig`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setOptions(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);
  //Boss b
  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/employee/allEmpDesig`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setOptio(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  // Working Shift
  useEffect(() => {
    fetch(`${apiUrl}/employee/workingShift`)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setWorking(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  //noticePeriod api
  useEffect(() => {
    fetch(`${apiUrl}/employee/noticePeriod`)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setNoticePeriod(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/employee/gender`)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setGenderOptions(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  // Define a function to make the API call
  // Depatment api

  useEffect(() => {
    // Fetch countries and populate the countryOptions
    fetch(`${apiUrl}/employee/allEmpDesig`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setOptions(data.data);
        } else {
          console.error(
            "API response is not in the expected format for countries."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch department options on initial load
    fetch(`${apiUrl}/employee/departments`)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setDepartments(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching department options:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      // Fetch designations based on the selected department
      fetchDesignations(selectedDepartment);
    }
  }, [selectedDepartment]);

  const fetchDesignations = (departmentId) => {
    fetch(`${apiUrl}/employee/designations/${departmentId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setDesignations(data.data);
        } else {
          console.error(
            "API response is not in the expected format for designations."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching designation data:", error);
      });
  };

  const handleDepartmentChange = (event) => {
    const selectedDept = event.target.value;
    setSelectedDepartment(selectedDept);
    setFormData({
      ...formData,
      department: selectedDept,
      designation: "", // Reset designation when department changes
    });
  };

  const handleDesignationChange = (event) => {
    const selectedDesig = event.target.value;
    setFormData({
      ...formData,
      designation: selectedDesig,
    });
  };

  //noticePeriod api
  useEffect(() => {
    // Fetch countries and populate the countryOptions
    fetch(`${apiUrl}/employee/allCountries`, {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setCountryOptions(data.data);
        } else {
          console.error(
            "API response is not in the expected format for countries."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
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
    fetch(`${apiUrl}/employee/allStates/${countryId}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setStateOptions(data.data);
        } else {
          console.error(
            "API response is not in the expected format for states."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching state data:", error);
      });
  };

  const fetchCities = (stateId) => {
    fetch(`${apiUrl}/employee/allcities/${stateId}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setCityOptions(data.data);
        } else {
          console.error(
            "API response is not in the expected format for cities."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching city data:", error);
      });
  };

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

  const filteredUsers = users.filter((user) => {
    return (
      (user.id.toString().includes(search) ||
        user.firstName.includes(search)) &&
      (statusFilter === "" || user.status.toString() === statusFilter) &&
      (genderFilter === "" ||
        user.gender === genderFilter ||
        (genderFilter === "male" && user.gender === "Male") ||
        (genderFilter === "female" && user.gender === "Female"))
    );
  });

  return (
    <div className="page mt-0">
      <div className="main-container  container-fluid">
        <div className="inner-body">
          <div className="page-header">
            <div>
              <h2 className="main-content-title tx-24 mg-b-5">Add Employee</h2>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Internal Staff</a>
                </li>
              </ol>
            </div>
            {/* <div className="d-flex">
              <div className="justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary my-2 btn-icon-text"
                >
                  <i className="fe fe-download-cloud me-2"></i> Print
                </button>
              </div>
            </div> */}
          </div>
          <div className="row row-lg">
            <div className="col-xl-4 col-lg-8 col-md-17">
              <div className="card custom-card row-sm-20">
                <div className="card-body">
                  <div>
                    <h6 className="main-content-label mb-4">PROFILE PHOTO</h6>
                  </div>
                  <div className>
                    <div className="row row-lg">
                      <div className="col-sm-12 col-md-12">
                        <input
                          className="form-control"
                          type="file"
                          name="profilePic"
                          onChange={handleFileChange}
                        />

                        {profilePicFile && (
                          <img
                            src={URL.createObjectURL(profilePicFile)}
                            alt="Selected File"
                            style={{ maxWidth: "350px" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="card custom-card">
                <div className="card-body">
                  <div>
                    <h6 className="main-content-label mb-3">BASIC INFO</h6>
                  </div>
                  <div className>
                    <div className="row row-sm">
                      {/* Firstname */}
                      <div className="col-lg-6 form-group">
                        <label className="form-label">
                          First name: <span className="tx-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          name="firstName"
                          value={formData.firstName}
                          placeholder="Enter first name"
                          required
                          type="text"
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                        />
                      </div>
                      {/* Lastname */}
                      <div className="col-lg-6 form-group">
                        <label className="form-label">
                          Last name: <span className="tx-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          name="lastName"
                          value={formData.lastName}
                          placeholder="Enter last name"
                          required
                          type="text"
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                        />
                      </div>
                      {/* Email ID */}
                      <div className="col-lg-6 form-group">
                        <label className="form-label">
                          Email ID: <span className="tx-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          name="email"
                          value={formData.email}
                          placeholder="Enter email"
                          required
                          type="email"
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label className="form-label">
                          Password <span className="tx-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          name="password"
                          value={formData.password}
                          placeholder="Enter password"
                          required
                          type={showPassword ? "text" : "password"}
                          onChange={handleInputChange}
                        />

                        <span
                          onClick={togglePasswordVisibility}
                          className="fa fa-fw fa-eye field-icon toggle-password"
                        ></span>
                      </div>
                      {/* Mobile No */}
                      <div className="col-lg-6 form-group">
                        <label className="form-label">
                          Mobile No: <span className="tx-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          placeholder="Enter mobile number"
                          required
                          type="tel"
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                        />
                      </div>
                      {/* Gender */}
                      <div className="col-lg-6">
                        <label className="form-label">
                          Gender: <span className="tx-danger">*</span>
                        </label>
                        <select
                          className="form-control select2"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                        >
                          {genderOption.map((option, index) => (
                            <option key={option.id} value={option.name}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* Date of Birth */}
                      <div className="col-lg-6">
                        <label className="form-label">
                          Date of Birth:: <span className="tx-danger">*</span>
                        </label>
                        <div className="input-group">
                          <input
                            type="date"
                            name="dob"
                            className="form-control"
                            value={formData.dob}
                            onChange={handleDateChange}
                            max={getCurrentDate()}
                            // Restricts selection to current date or earlier
                          />
                        </div>
                      </div>
                      {/* Type of User */}
                      <div className="col-lg-6">
                        <label className="form-label">
                          User Type:: <span className="tx-danger">*</span>
                        </label>
                        <div className="input-group">
                          <select
                            name="userType"
                            className="form-control form-select select2"
                            value={formData.userType}
                            onChange={handleUserTypeChange}
                          >
                            <option value="">Select</option>
                            {userTypeOption.map((data) => {
                              return (
                                <option value={data.name}>{data.name}</option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Address */}
            <div className="col-lg-6 col-md-6 d-none">
              <div className="card custom-card">
                <div className="card-body">
                  <div>
                    <h6 className="main-content-label mb-1">Current Address</h6>
                  </div>
                  <div className="row row-sm">
                    {/* Country */}
                    <div className="col-sm-6 mg-t-10">
                      <label className="form-label">Country</label>
                      <select
                        className="form-control select select2"
                        name="currentAddressCountry"
                        value={formData.currentAddressCountry}
                        onChange={handleCountryChange}
                      >
                        <option value="">Select a country</option>
                        {countryOptions.map((country) => (
                          <option key={country.id} value={country.id}>
                            {`  ${country.name}`}
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
                        value={formData.currentAddressState}
                        onChange={handleStateChange}
                      >
                        <option value="">Select a State</option>
                        {stateOptions.map((state) => (
                          <option key={state.id} value={state.id}>
                            {` ${state.name}`}
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
                          <option key={index} value={city.id}>
                            {` ${city.name}`}
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
                    <div className="col-sm-12 mg-t-10">
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
                        onBlur={handleInputBlur}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Permanent Address */}
            <div className="col-lg-6 col-md-6 d-none">
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
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({
                                ...formData,
                                sameAsCurrentAddress: true,
                                permanentAddressCountry:
                                  formData.currentAddressCountry,
                                permanentAddressState:
                                  formData.currentAddressState,
                                permanentAddressCity:
                                  formData.currentAddressCity,
                                permanentAddressArea:
                                  formData.currentAddressArea,
                                permanentAddressLane:
                                  formData.currentAddressLane,
                                permanentAddressPinCode:
                                  formData.currentAddressPinCode,
                              });
                            } else {
                              setFormData({
                                ...formData,
                                sameAsCurrentAddress: false,
                              });
                            }
                          }}
                        />
                        <span>Same as Current Address</span>
                      </label>
                    </div>
                    {/* Country */}
                    <div className="col-sm-6 mg-t-10">
                      <label className="form-label">Country</label>
                      <select
                        className="form-control select select2"
                        name="permanentAddressCountry"
                        value={formData.permanentAddressCountry}
                        onChange={handleInputChange}
                        disabled={formData.sameAsCurrentAddress}
                      >
                        <option value="">Select a country</option>
                        {countryOptions.map((country) => (
                          <option
                            key={country.id}
                            value={country.id}
                            selected={
                              formData.permanentAddressCountry === country.id
                            }
                          >
                            {country.name}
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
                        value={formData.permanentAddressState}
                        onChange={handleInputChange}
                        disabled={formData.sameAsCurrentAddress}
                      >
                        <option value="">Select a state</option>
                        {stateOptions.map((state) => (
                          <option
                            key={state.id}
                            value={state.id}
                            selected={
                              formData.permanentAddressState === state.id
                            }
                          >
                            {state.name}
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
                        value={formData.permanentAddressCity}
                        onChange={handleInputChange}
                        disabled={formData.sameAsCurrentAddress}
                      >
                        <option value="">Select a city</option>
                        {cityOptions.map((city, index) => (
                          <option key={index} value={city.name}>
                            {` ${city.name}`}
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
                    <div className="col-sm-12 mg-t-10">
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
                        placeholder="Enter pin code"
                        type="text"
                        onChange={handleInputChange}
                        disabled={formData.sameAsCurrentAddress}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}

            {/* Permissions */}
            <div className="row row-sm">
              <div className="col-lg-12 col-md-12">
                <div className="card custom-card">
                  <div className="card-body">
                    <div>
                      <h6 className="main-content-label mb-3">ONBOARDING</h6>
                    </div>
                    <div className="row row-sm">
                      {/* <div className="col-sm-4 form-group">
                          <label className="form-label">Company</label>
                          <select className="form-control select select2">
                            <option>Select</option>
                          </select>
                        </div> */}
                      <div className="col-sm-4  form-group">
                        <label className="form-label">Department</label>

                        <select
                          className="form-control select2"
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                        >
                          <option>Select</option>
                          {genderOptions2.map((option, index) => (
                            <option key={option.id} value={option.name}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-sm-4  form-group">
                        <label className="form-label">Designation</label>
                        <select
                          className="form-control select2"
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                        >
                          <option>Select</option>
                          {genderOptions3.map((option, index) => (
                            <option key={option.id} value={option.name}>
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
                            type="date"
                            name="dateOfJoin"
                            value={formData.dateOfJoin}
                            onChange={handleDateChange2}
                            className="form-control"
                            max={getCurrentDate2()} // Restricts selection to current date or earlier
                          />
                        </div>
                      </div>
                      <div className="col-sm-4  form-group">
                        <label className="form-label">Reporting Boss-A</label>
                        <select
                          className="form-control select2"
                          name="reportingBossA"
                          value={formData.reportingBossA}
                          onChange={handleInputChange}
                        >
                          <option>Select</option>
                          {options.map((option, index) => (
                            <option key={option.id} value={option.name}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-sm-4  form-group">
                        <label className="form-label">Reporting Boss-B</label>
                        <select
                          className="form-control select2"
                          name="reportingBossB"
                          value={formData.reportingBossB}
                          onChange={handleInputChange}
                        >
                          <option>Select</option>
                          {optio.map((option, index) => (
                            <option key={option.id} value={option.name}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* <div className="col-sm-12 form-group mb-0">
                        <div className="row">
                          <div className="col-sm-2">
                            {" "}
                            <label className="form-label">
                              Assign Permission
                            </label>
                          </div>
                          <div className="col-sm-10">
                            <div
                              className="parsley-checkbox row"
                              id="cbWrapper"
                            >
                              <div className="col-xl-2">
                                <label className="ckbox mg-b-5">
                                  <input
                                    data-parsley-class-handler="#cbWrapper"
                                    data-parsley-errors-container="#cbErrorContainer"
                                    data-parsley-mincheck={2}
                                    name="browser[]"
                                    required=""
                                    type="checkbox"
                                    defaultValue={1}
                                  />
                                  <span>Dashboard</span>
                                </label>
                              </div>
                              <div className="col-xl-2">
                                <label className="ckbox mg-b-5">
                                  <input
                                    name="browser[]"
                                    type="checkbox"
                                    defaultValue={2}
                                  />
                                  <span>HRMS</span>
                                </label>
                              </div>
                              <div className="col-xl-2">
                                <label className="ckbox mg-b-5">
                                  <input
                                    name="browser[]"
                                    type="checkbox"
                                    defaultValue={3}
                                  />
                                  <span>Sales CRM</span>
                                </label>
                              </div>
                              <div className="col-xl-2">
                                <label className="ckbox mg-b-5">
                                  <input
                                    name="browser[]"
                                    type="checkbox"
                                    defaultValue={4}
                                  />
                                  <span>Orders</span>
                                </label>
                              </div>
                              <div className="col-xl-2">
                                <label className="ckbox mg-b-5">
                                  <input
                                    name="browser[]"
                                    type="checkbox"
                                    defaultValue={5}
                                  />
                                  <span>Buyers</span>
                                </label>
                              </div>
                              <div className="col-xl-2">
                                <label className="ckbox mg-b-5">
                                  <input
                                    name="browser[]"
                                    type="checkbox"
                                    defaultValue={6}
                                  />
                                  <span>Millers</span>
                                </label>
                              </div>
                              <div className="col-xl-2">
                                <label className="ckbox mg-b-5">
                                  <input
                                    name="browser[]"
                                    type="checkbox"
                                    defaultValue={7}
                                  />
                                  <span>Exporters</span>
                                </label>
                              </div>
                              <div className="col-xl-2">
                                <label className="ckbox mg-b-5">
                                  <input
                                    name="browser[]"
                                    type="checkbox"
                                    defaultValue={8}
                                  />
                                  <span>Vendors</span>
                                </label>
                              </div>
                              <div className="col-xl-2">
                                <label className="ckbox mg-b-5">
                                  <input
                                    name="browser[]"
                                    type="checkbox"
                                    defaultValue={9}
                                  />
                                  <span>Accounts</span>
                                </label>
                              </div>
                              <div className="col-xl-2">
                                <label className="ckbox mg-b-5">
                                  <input
                                    name="browser[]"
                                    type="checkbox"
                                    defaultValue={10}
                                  />
                                  <span>More Actions</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="col-lg-12 d-none">
              <div className="card custom-card">
                <div className="card-body">
                  <div>
                    <h6 className="main-content-label mb-3">DOCUMENTS</h6>
                  </div>

                  <div className="row row-sm">
                    {/* Aadhaar Card */}
                    <div className="col-lg-4 form-group">
                      <label className="form-label">
                        Aadhaar Card (Upload pdf)
                      </label>
                      <input
                        className="form-control"
                        name="adharNumber"
                        value={formData.adharNumber}
                        placeholder="Enter Aadhaar number"
                        type="text"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {errors.adharNumber && (
                        <p style={{ color: "red" }}>{errors.adharNumber}</p>
                      )}
                      <input
                        className="form-control"
                        type="file"
                        name="adharImage"
                        accept="/pdf"
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="col-lg-4 form-group">
                      <label className="form-label">
                        PAN Card (Upload pdf)
                      </label>
                      <input
                        className="form-control"
                        name="panNumber"
                        value={formData.panNumber}
                        placeholder="Enter PAN number"
                        type="text"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />

                      <input
                        className="form-control"
                        type="file"
                        name="panImage"
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="col-lg-4 form-group">
                      <label className="form-label">
                        Driving Licence (Upload pdf)
                      </label>
                      <input
                        type="file"
                        className="dropify"
                        name="drivingLicenseImage"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Info */}
            <div className="col-lg-12 d-none">
              <div className="card custom-card">
                <div className="card-body">
                  <div>
                    <h6 className="main-content-label mb-3">BANK INFO</h6>
                  </div>
                  <div className="row row-sm">
                    {/* Account No */}
                    <div className="col-lg-4 form-group">
                      <label className="form-label">Account No</label>
                      <input
                        className="form-control"
                        name="accountNumber"
                        value={formData.accountNumber}
                        placeholder="Enter account number"
                        type="text"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    {/* Account Name */}
                    <div className="col-lg-4 form-group">
                      <label className="form-label">Account Name</label>
                      <input
                        className="form-control"
                        name="accountName"
                        value={formData.accountName}
                        placeholder="Enter account name"
                        type="text"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    {/* Bank Name */}
                    <div className="col-lg-4 form-group">
                      <label className="form-label">Bank Name</label>
                      <input
                        className="form-control"
                        name="bankName"
                        value={formData.bankName}
                        placeholder="Enter bank name"
                        type="text"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    {/* IFSC */}
                    <div className="col-lg-4 form-group">
                      <label className="form-label">IFSC</label>
                      <input
                        className="form-control"
                        name="ifsc"
                        value={formData.ifsc}
                        placeholder="Enter IFSC"
                        type="text"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Offer Details */}
            <div className="col-lg-12 d-none">
              <div className="card custom-card">
                <div className="card-body">
                  <div>
                    <h6 className="main-content-label mb-3">OFFER DETAILS</h6>
                  </div>
                  <div className="row row-sm">
                    {/* Offered Package */}
                    <div className="col-lg-4 form-group">
                      <label className="form-label">
                        Offered Package(Yearly){" "}
                      </label>
                      <input
                        className="form-control"
                        name="offeredPackage"
                        value={formData.offeredPackage}
                        placeholder="Enter offered package"
                        type="text"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    {/* Offered CTC */}
                    <div className="col-lg-4 form-group">
                      <label className="form-label">
                        Offered CTC Salary(Yearly)
                      </label>
                      <input
                        className="form-control"
                        name="offeredCTC"
                        value={formData.offeredCTC}
                        placeholder="Enter offered CTC"
                        type="text"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    {/* Notice Period */}
                    <div className="col-lg-4 form-group">
                      <label className="form-label">Notice Period</label>
                      <select
                        className="form-control select2"
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        onChange={handleInputChange}
                      >
                        <option>Select</option>
                        {genderOptions4.map((option, index) => (
                          <option key={option.id} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* Working Shift */}
                    <div className="col-lg-4 form-group">
                      <label className="form-label">Working Shift</label>
                      <select
                        className="form-control select2"
                        name="workingShift"
                        value={formData.workingShift}
                        onChange={handleInputChange}
                      >
                        <option>Select</option>
                        {genderOptions5.map((option, index) => (
                          <option key={option.id} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* Per Hour Charges */}

                    {/* Per Cases Charges */}

                    {/* Per Month Charges */}
                    <div className="col-lg-4 form-group">
                      <label className="form-label">Per Month Salary </label>
                      <input
                        className="form-control"
                        name="perMonthCharges"
                        value={formData.perMonthCharges}
                        placeholder="Enter per month charges"
                        type="text"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    {/* Consulting Fees */}

                    {/* Offer Letter */}
                    <div className="col-lg-4 form-group">
                      <label className="form-label">
                        Offer Letter (Upload pdf)
                      </label>
                      <input
                        type="file"
                        className="dropify"
                        name="offerLetterUpload"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                </div>
              </div>
            </div>
            <div className="col-lg-12 mg-t-10">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourFormComponent;
