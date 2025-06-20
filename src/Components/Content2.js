import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MainPage from "./MainPage";
import Prince from "./Prince";
import DropdownMenu from "./DropdownMenu";
import TopHeader from "./TopHeader";

const Content2 = () => {
  const { empid } = useParams();
  const navigate = useNavigate();
  const condition = true;
  const initialFormData = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    gender: "",
    dob: "",
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
    adharNumber: "",
    panImage: "",
    panNumber: "",
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
    profilePic: "",

    // Add other fields as needed
  };

  const [formData, setFormData] = useState(initialFormData);
  const [countryOptions, setCountryOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [stateOptions, setStateOptions] = useState([]);
  const [genderOption, setGenderOption] = useState([]);
  const [genderOptions2, setGenderOptions2] = useState([]);
  const [genderOptions3, setGenderOptions3] = useState([]);
  const [options, setOptions] = useState([]);
  const [optio, setOptio] = useState([]);
  const [genderOptions4, setGenderOptions4] = useState([]);
  const [genderOptions5, setGenderOptions5] = useState([]);
  const apiUrl = process.env.REACT_APP_URL;
  const [profilePicFile, setProfilePicFile] = useState(null);

  const Token = localStorage.getItem("Token");
  console.log("Token:", Token);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getCurrentDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };

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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const url = `${apiUrl}/employee/employee/${empid}`;
        let result = await fetch(url, {
          headers: {
            Authorization: `Bearer ${Token}`,
            "Content-Type": "application/json",
          },
        });

        result = await result.json();
        const { data } = result;

        // Update the state with fetched data
        setFormData({
          // id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          mobileNumber: data.mobileNumber,
          gender: data.gender,
          dob: data.dob,
          currentAddressCountry: data.currentAddressCountry,
          currentAddressState: data.currentAddressState,
          // currentAddressCity: data.currentAddressCity,
          currentAddressArea: data.currentAddressArea,
          currentAddressLane: data.currentAddressLane,
          currentAddressPinCode: data.currentAddressPinCode,
          // sameAsCurrentAddress: false,
          permanentAddressCountry: data.permanentAddressCountry,
          // permanentAddressState: data.permanentAddressState,
          // permanentAddressCity: data.permanentAddressCity,
          permanentAddressArea: data.permanentAddressArea,
          permanentAddressLane: data.permanentAddressLane,
          permanentAddressPinCode: data.permanentAddressPinCode,
          companyName: data.companyName,
          department: data.department,
          designation: data.designation,
          dateOfJoin: data.dateOfJoin,
          reportingBossA: data.reportingBossA,
          reportingBossB: data.reportingBossB,
          permissions: data.permissions,
          adharNumber: data.adharNumber,
          panNumber: data.panNumber,
          accountNumber: data.accountNumber,
          accountName: data.accountName,
          bankName: data.bankName,
          ifsc: data.ifsc,
          offeredPackage: data.offeredPackage,
          offeredCTC: data.offeredCTC,
          noticePeriod: data.noticePeriod,
          workingShift: data.workingShift,
          perHourCharges: data.perHourCharges,
          perCasesCharges: data.perCasesCharges,
          perMonthCharges: data.perMonthCharges,
          consultingFees: data.consultingFees,
          profilePic: data.profilePic,

          // Add other fields if necessary
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUser();
  }, [apiUrl, empid]);

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

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch(
        `${apiUrl}/employee/employeeUpdate/${empid}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      toast.success(response2.message);

      navigate("/MainPage2");
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error(error.message);
    }
  };
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
    // setStateOptions([]); // Clear state options
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
  const handleCityeChange = (event) => {
    const selectedState = event.target.value;
    setStateId(selectedState);
    setFormData({
      ...formData,
      currentAddressCity: selectedState,
    });
    setCityOptions([]); // Clear city options
  };

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
    fetch(`${apiUrl}/master/getAllMasterData/6`, {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    })
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

  //Boss a

  useEffect(() => {
    const Token = localStorage.getItem("Token");
    console.log("Token:", Token);
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/employee/allEmpDesig`, {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
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
        "Content-Type": "application/json",
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

  const getCurrentDate2 = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };
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

  return (
    <>
      {/* Main Header*/}
      <div className="page">
        <TopHeader />
        <Prince />
        {/* End Sidemenu */}
        {/* Main Content*/}
        <div className="main-content pt-0">
          <div className="main-container container-fluid">
            <div className="inner-body">
              {/* Page Header */}
              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">
                    Update Employee
                  </h2>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"></li>
                  </ol>
                </div>
                {/* <div className="d-flex">
                  <div className="justify-content-center">
                    <button type="button" className="btn btn-primary my-2 btn-icon-text">
                      <i className="fe fe-download-cloud me-2" /> Print
                    </button>
                  </div>
                </div> */}
              </div>
              {/* End Page Header */}
              {/* Row */}
              <div className="row row-sm">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-4">
                          PROFILE PHOTO
                        </h6>
                      </div>

                      <div className="">
                        <div className="row row-sm">
                          <div className="col-sm-12 col-md-12">
                            <input
                              type="file"
                              className="dropify"
                              data-height={200}
                              accept="image/jpg*"
                              name="profilePic"
                              onChange={handleFileChange}
                            />
                            {profilePicFile && (
                              <img
                                src={URL.createObjectURL(profilePicFile)}
                                alt="Selected File"
                                style={{ maxWidth: "350px" }}
                              />
                            )} {
                              profilePicFile === null && 
                            <img
                              src={formData.profilePic}
                              alt="Selected File"
                              style={{ maxWidth: "300px" }}
                            />
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-3">BASIC INFO</h6>
                      </div>
                      <form
                        action="form-validation.html"
                        data-parsley-validate=""
                      >
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-lg-6 form-group">
                              <label className="form-label">
                                First name: <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                value={formData.firstName}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    firstName: e.target.value,
                                  })
                                }
                                placeholder="Enter first name"
                                required=""
                                type="name"
                              />
                            </div>
                            <div className="col-lg-6 form-group">
                              <label className="form-label">
                                Last name: <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                value={formData.lastName}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    lastName: e.target.value,
                                  })
                                }
                                placeholder="Enter last name"
                                required=""
                                type="text"
                              />
                            </div>
                            <div className="col-lg-6 form-group">
                              <label className="form-label">
                                Email ID: <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                value={formData.email}
                                // onChange={(e) =>
                                //   setFormData({
                                //     ...formData,
                                //     email: e.target.value,
                                //   })
                                // }
                                placeholder="Enter email"
                                required=""
                                type="text"
                                readOnly={true}
                              />
                            </div>
                            <div className="col-lg-6 form-group">
                              <label className="form-label">
                                Mobile No: <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                placeholder="Enter mobile number"
                                required=""
                                type="text"
                                value={formData.mobileNumber}
                                readOnly={true}
                                // onChange={(e) =>
                                //   setFormData({
                                //     ...formData,
                                //     mobileNumber: e.target.value,
                                //   })
                                // }
                              />
                            </div>
                            <div className="col-lg-6">
                              <label className="form-label">
                                Gender: <span className="tx-danger">*</span>
                              </label>
                              <select
                                className="form-control select2"
                                value={formData.gender}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    gender: e.target.value,
                                  })
                                }
                              >
                                {genderOption.map((option, index) => (
                                  <option key={option.id} value={option.name}>
                                    {option.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            {/* col-4 */}
                            <div className="col-lg-6">
                              <label className="form-label">
                                Date of Birth:{" "}
                                <span className="tx-danger">*</span>
                              </label>
                              <div className="input-group">
                                <input
                                  type="date"
                                  className="form-control"
                                  value={formData.dob}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      dob: e.target.value,
                                    })
                                  }
                                  max={getCurrentDate()}
                                  // Restricts selection to current date or earlier
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
              <div className="row row-sm d-none">
                <div className="col-lg-6 col-md-6">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">
                          Current Address
                        </h6>
                      </div>
                      <div className="row row-sm">
                        <div className="col-sm-6 mg-t-10">
                          <label className="form-label">Country</label>
                          <select
                            className="form-control select select2"
                            name="currentAddressCountry"
                            value={formData.currentAddressCountry}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                currentAddressCountry: e.target.value,
                              });

                              handleCountryChange(e);
                            }}
                          >
                            {condition ? (
                              <>
                                <option value="">Select a country</option>
                                {countryOptions.map((country) => (
                                  <option key={country.id} value={country.id}>
                                    {country.name}
                                  </option>
                                ))}
                              </>
                            ) : (
                              <>
                                <option value="">Select a country</option>
                                {countryOptions.map((country) => (
                                  <option key={country.id} value={country.id}>
                                    {country.name}
                                  </option>
                                ))}
                              </>
                            )}
                          </select>
                        </div>
                        <div className="col-sm-6 mg-t-10">
                          <label className="form-label">State</label>
                          <select
                            className="form-control select select2"
                            name="currentAddressState"
                            value={formData.currentAddressState}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                currentAddressState: e.target.value,
                              });

                              handleStateChange(e);
                            }}
                          >
                            <option value="">Select a State</option>
                            {stateOptions.map((state) => (
                              <option key={state.id} value={state.id}>
                                {` ${state.name}`}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-sm-6 mg-t-10">
                          <label className="form-label">City</label>
                          <select
                            className="form-control select select2"
                            name="currentAddressCity"
                            value={formData.currentAddressCity}
                            onChange={handleCityeChange}
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
                              required=""
                              type="text"
                              value={formData.currentAddressArea}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  currentAddressArea: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-12 mg-t-10">
                          <div className="form-group mb-0">
                            <label className="form-label">Address lane</label>
                            <textarea
                              className="form-control"
                              required=""
                              type="text"
                              value={formData.currentAddressLane}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  currentAddressLane: e.target.value,
                                })
                              }
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
                              value={formData.currentAddressPinCode}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  currentAddressPinCode: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Permanent Address */}
                <div className="col-lg-6 col-md-6">
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
                                  formData.permanentAddressCountry ===
                                  country.id
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
                      <div className="row row-sm ">
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
                            value={formData.department}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                department: e.target.value,
                              })
                            }
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
                            value={formData.designation}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                designation: e.target.value,
                              })
                            }
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
                            Date of Joining:{" "}
                            <span className="tx-danger">*</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="date"
                              value={formData.dateOfJoin}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  dateOfJoin: e.target.value,
                                })
                              }
                              className="form-control"
                              max={getCurrentDate2()} // Restricts selection to current date or earlier
                            />
                          </div>
                        </div>
                        <div className="col-sm-4  form-group">
                          <label className="form-label">Reporting Boss-A</label>
                          <select
                            className="form-control select2"
                            value={formData.reportingBossA}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                reportingBossA: e.target.value,
                              })
                            }
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
                            value={formData.reportingBossB}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                reportingBossB: e.target.value,
                              })
                            }
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
              {/* End Row */}
              {/* Row */}
              <div className="row row-sm d-none">
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
                              required=""
                              type="file"
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
                              value={formData.adharNumber}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  adharNumber: e.target.value,
                                })
                              }
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
                              value={formData.panNumber}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  panNumber: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group mb-0">
                            <label className="form-label">
                              Driving Licence
                            </label>
                            <input
                              className="form-control"
                              required=""
                              type="file"
                            />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          {/* <div className="form-group mb-0">
                            <label className="form-label">Cheque</label>
                            <input className="form-control" required="" type="file" />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Row */}
              {/* Row */}
              <div className="row row-sm d-none">
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
                              value={formData.accountNumber}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  accountNumber: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  accountName: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  bankName: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  ifsc: e.target.value,
                                })
                              }
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
              <div className="row row-sm d-none">
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
                              <label className="form-label">
                                Offered Package
                              </label>
                              <input
                                className="form-control"
                                required=""
                                type="text"
                                value={formData.offeredPackage}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    offeredPackage: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="col-sm-6 form-group">
                              <label className="form-label">Offered CTC</label>
                              <input
                                className="form-control"
                                required=""
                                type="text"
                                value={formData.offeredCTC}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    offeredCTC: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="col-lg-6 form-group">
                              <p className="form-label">Notice Period</p>
                              <select
                                className="form-control select2"
                                name="noticePeriod"
                                value={formData.noticePeriod}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    noticePeriod: e.target.value,
                                  })
                                }
                              >
                                <option>Select</option>
                                {genderOptions4.map((option, index) => (
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
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    workingShift: e.target.value,
                                  })
                                }
                              >
                                <option>Select</option>
                                {genderOptions5.map((option, index) => (
                                  <option key={option.id} value={option.name}>
                                    {option.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            {/* col-4 */}
                            {/* <div className="col-sm-3 form-group">
                              <label className="form-label">Per Hour Charges</label>
                              <input className="form-control" value={perCasesCharges} onChange={(e) => setPerCasesCharges(e.target.value)} required="" type="text" />
                            </div> */}
                            {/* <div className="col-sm-3 form-group">
                              <label className="form-label">Per Cases Charges</label>
                              <input className="form-control" required="" type="text" 
                               value={perCasesCharges}
                               onChange={(e) => setPerCasesCharges(e.target.value)}/>
                            </div> */}
                            {/* <div className="col-sm-3 form-group">
                              <label className="form-label">Per Month Charges</label>
                              <input className="form-control" required="" type="text" />
                            </div> */}
                            {/* <div className="col-sm-3 form-group">
                              <label className="form-label">Consulting Fees </label>
                              <input className="form-control" required="" type="text" />
                            </div> */}
                          </div>
                        </div>
                        <div className="col-sm-4 form-group">
                          <label className="form-label">
                            Upload Offer Letter
                          </label>
                          <input
                            id="demo"
                            type="file"
                            name="files"
                            accept="image/jpeg, image/png, text/html, application/zip, text/css, text/js"
                            multiple=""
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
                  <button className="btn btn-primary" onClick={handleUpdate}>
                    Update
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
                  Copyright © 2023 <a href="javascript:void(0)">Fship</a>.
                  Designed by <a href="http://webkype.com/">Webkype.com</a> All
                  rights reserved.
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
  );
};

export default Content2;
