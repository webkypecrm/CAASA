import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../../../Components/TopHeader';
import Prince from '../../../Components/Prince';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditCompany = () => {

    const { empid } = useParams();
    const navigate = useNavigate();
    const initialFormData = {
        profilePhoto: '',
        companyName: '',
        companyEmail: '',
        companyPhone: '',
        companyWebsite: '',
        contactName: '',
        contactEmail: '',
        contactMobile: '',
        GST: '',
        alternateMobileNo: '',

        country: 101,
        state: '',
        city: '',


        pincode: '',
        panNo: '',
        cinNumber: ''

    };

    const [formData, setFormData] = useState(initialFormData);
    const [profilePic, setProfilePic] = useState(null);
    const [project, setProject] = useState([]);
    const [countryOptions, setCountryOptions] = useState([]);
    const [stateOptions, setStateOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);
    const [stateId, setStateId] = useState([]);
    const [countryId, setCountryId] = useState(101);
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


    useEffect(() => {
        fetch(`${apiUrl}/bank/accountDropdown`)
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

    let oldSelectedState = [];
    let oldSelectedCity = [];
    // company data get
    useEffect(() => {
        const fetchUser = async () => {

            try {
                const url = `${apiUrl}/company/getCompanyById/${empid}`;
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;

                const oldSelectedStateResponse = await fetch(`${apiUrl}/employee/allStates/${data.country || 0}`);
                oldSelectedState = await oldSelectedStateResponse.json();
                let stateParam = data.state || 0;
                const oldSelectedCityResponse = await fetch(`${apiUrl}/employee/allcities/${stateParam}`);

                oldSelectedCity = await oldSelectedCityResponse.json();

                setCityOptions(oldSelectedCity.data);
                setStateOptions(oldSelectedState.data);
                // console.log('Fetched Data:', data);
                const photo = data.profilePhoto;
                setProfilePic(photo)
                setFormData((prevFormData) => ({
                    ...prevFormData,

                    profilePhoto: data.profilePhoto,
                    companyName: data.companyName,
                    companyEmail: data.companyEmail,
                    companyPhone: data.companyPhone,
                    companyWebsite: data.companyWebsite,
                    contactName: data.contactName,
                    contactEmail: data.contactEmail,
                    contactMobile: data.contactMobile,
                    GST: data.GST,
                    alternateMobileNo: data.alternateMobileNo,
                    state: data.state,
                    city: data.city,
                    pincode: data.pincode,
                    panNo: data.panNo,
                    cinNumber: data.cinNumber



                }));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUser();
    }, []);

    const handleFileChange = (e) => {
        const files = e.target.files;

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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }


    //country api 
    useEffect(() => {
        fetch(`${apiUrl}/employee/allCountries`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    // Filtering data for id 101
                    const filteredData = data.data.filter(item => item.id === 101);
                    if (filteredData.length > 0) {
                        setCountryOptions(filteredData);
                    } else {
                        console.error('Data with ID 101 not found in the API response.');
                    }
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
            country: selectedCountry,
        });
        setStateOptions([]);

    };

    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setStateId(selectedState);
        setFormData({
            ...formData,
            state: selectedState,
        });
        setCityOptions([]);
    };



    // company update
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/company/updateCompany/${empid}`, {
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
            navigate("/company-list");
        } catch (error) {
            toast.error(error.message);

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
                                    <h2 className="main-content-title tx-24 mg-b-5">Update Company</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-4">COMPANY LOGO</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
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
                                                                Company Name: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"

                                                                placeholder="Enter"
                                                                required=""
                                                                name="companyName"
                                                                value={formData.companyName}
                                                                onChange={handleChange}
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Company Email: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="companyEmail"
                                                                value={formData.companyEmail}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Company Phone: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="companyPhone"
                                                                value={formData.companyPhone}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Company Website:{" "}
                                                                <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="companyWebsite"
                                                                value={formData.companyWebsite}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Contact Name: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="contactName"
                                                                value={formData.contactName}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Contact Email: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="contactEmail"
                                                                value={formData.contactEmail}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Contact Mobile: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="contactMobile"
                                                                value={formData.contactMobile}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Alternate Contact Mobile
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="alternateMobileNo"
                                                                value={formData.alternateMobileNo}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                GST
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="GST"
                                                                value={formData.GST}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>

                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Company PAN
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="panNo"
                                                                value={formData.panNo}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>



                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Country
                                                            </label>
                                                            <select
                                                                className="form-control select select2"
                                                                name="country"
                                                                defaultValue={101}
                                                                value={formData.country}
                                                                onChange={handleCountryChange}
                                                            >
                                                                <option value="">Select a Country</option>
                                                                {countryOptions.map((country) => (
                                                                    <option key={country.id} value={country.id}>
                                                                        {country.name}
                                                                    </option>
                                                                ))}
                                                            </select>


                                                        </div>

                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                State
                                                            </label>
                                                            <select
                                                                className="form-control select select2"
                                                                name="state"
                                                                onChange={handleStateChange}

                                                            >
                                                                <option >Select a State</option>
                                                                {stateOptions.map((state) => (
                                                                    <option selected={state.id === +formData.state} key={state.id} value={(state.id)}>
                                                                        {`${state.name}`}
                                                                    </option>
                                                                ))}

                                                            </select>
                                                        </div>

                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                City
                                                            </label>
                                                            <select
                                                                className="form-control select select2"
                                                                name="city"
                                                                // value={formData.currentAddressCity}
                                                                onChange={handleChange}


                                                            >
                                                                <option value="">Select a city</option>
                                                                {cityOptions.map((city, index) => (
                                                                    <option selected={city.id === +formData.city} key={city.id} value={(city.id)}>
                                                                        {`${city.name}`}
                                                                    </option>
                                                                ))}
                                                            </select>

                                                        </div>


                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Company Pin Code
                                                            </label>
                                                            <input
                                                                className="form-control"

                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                                name="pincode"
                                                                value={formData.pincode}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Company CIN Number
                                                            </label>
                                                            <input
                                                                className="form-control"

                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                                name="cinNumber"
                                                                value={formData.cinNumber}
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
                                    Copyright © 2024 <a href="javascript:void(0)">Webkype</a>. Designed
                                    by <a href="http://webkype.com/">Webkype.com</a> All rights
                                    reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Footer*/}
                {/* End Sidebar */}
            </div>

        </>
    )
}

export default EditCompany