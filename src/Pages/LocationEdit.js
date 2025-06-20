import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const LocationEdit = () => {


    const { empid } = useParams();
    const navigate = useNavigate();
    const initialFormData = {
        title: '',
        locationName: '',
        locationLatitude: '',
        locationLongitude: '',
        googleMap: '',
        nearbyAmanities: '',
        landAcquisitonCost: '',
        registryCost: '',
        registryDate: '',
        registryName: '',
        description: '',
        profilePhoto: '',
        landManagerName: '',
        landManagerEmail: '',
        landManagerPhone: '',
        landManagerRole: '',
        dispute: '',
        displayStatus: '',


        locationState: '',
        locationCity: '',
        circleRate: '',
        size: '',
        unit: '',
        landAcquisitionCost: '',
        stampDuty: '',
        registryTehsil: '',
        KhasraNo: '',
        KhatoniNo: '',
        RegistryNo: '',
        BhumankanNo: '',
        LegalManager: '',

        beeghaPerSqft: '',
        sizeInSqft: '',

        areaAllocateToProject: '',
        areaAvailableForProject: '',
        scalableArea: '',
        scalableAreaPer: '',



    };

    const [formData, setFormData] = useState(initialFormData);
    const [profilePic, setProfilePic] = useState(null);
    const [role, setRole] = useState([]);
    const [dispute, setDispute] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [stateOptions, setStateOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);
    const [stateId, setStateId] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;



    // Role
    useEffect(() => {
        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/11`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setRole(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    //Dispute
    useEffect(() => {
        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/12`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setDispute(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);
    //Display Status
    useEffect(() => {
        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/13`, {
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


    let oldSelectedState = [];
    let oldSelectedCity = [];

    useEffect(() => {
        const fetchUser = async () => {
            const Token = localStorage.getItem('Token');
            try {
                const url = `${apiUrl}/location/getLocation/${empid}`;
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;
                // console.log('Fetched Data:', data);
                const trimmedData = Object.keys(data).reduce((acc, key) => {
                    if (typeof data[key] === 'string') {
                        acc[key] = data[key].trim();
                    } else {
                        acc[key] = data[key];
                    }
                    return acc;
                }, {});

                // console.log('Fetched Data:', trimmedData);
                let stateParam = trimmedData.country || 0;
                let stateParam2 = trimmedData.locationState || 0;

                const oldSelectedStateResponse = await fetch(`${apiUrl}/employee/allStates/101`);
                oldSelectedState = await oldSelectedStateResponse.json();
                const oldSelectedCityResponse = await fetch(`${apiUrl}/employee/allcities/${stateParam2}`);
                oldSelectedCity = await oldSelectedCityResponse.json();



                setCityOptions(oldSelectedCity.data);
                setStateOptions(oldSelectedState.data);

                const photo = trimmedData.profilePhoto;
                setProfilePic(photo)

                setFormData((prevFormData) => ({
                    ...prevFormData,
                    title: trimmedData.title,
                    locationName: trimmedData.locationName,
                    locationLatitude: trimmedData.locationLatitude,
                    locationLongitude: trimmedData.locationLongitude,
                    googleMap: trimmedData.googleMap,
                    nearbyAmanities: trimmedData.nearbyAmanities,
                    landAcquisitonCost: trimmedData.landAcquisitonCost,
                    registryCost: trimmedData.registryCost,
                    registryDate: trimmedData.registryDate,
                    registryName: trimmedData.registryName,
                    description: trimmedData.description,
                    profilePhoto: trimmedData.profilePhoto,
                    landManagerName: trimmedData.landManagerName,
                    landManagerEmail: trimmedData.landManagerEmail,
                    landManagerPhone: trimmedData.landManagerPhone,
                    landManagerRole: trimmedData.landManagerRole,
                    dispute: trimmedData.dispute,
                    displayStatus: trimmedData.displayStatus,


                    locationState: trimmedData.locationState,
                    locationCity: trimmedData.locationCity,
                    circleRate: trimmedData.circleRate,
                    size: trimmedData.size,
                    unit: trimmedData.unit,
                    landAcquisitionCost: trimmedData.landAcquisitionCost,
                    stampDuty: trimmedData.stampDuty,
                    registryTehsil: trimmedData.registryTehsil,
                    KhasraNo: trimmedData.KhasraNo,
                    KhatoniNo: trimmedData.KhatoniNo,
                    RegistryNo: trimmedData.RegistryNo,
                    BhumankanNo: trimmedData.BhumankanNo,
                    LegalManager: trimmedData.LegalManager,

                    beeghaPerSqft: trimmedData.beeghaPerSqft,
                    sizeInSqft: trimmedData.sizeInSqft,

                    areaAllocateToProject: trimmedData.areaAllocateToProject,
                    areaAvailableForProject: trimmedData.areaAvailableForProject,
                    scalableArea: trimmedData.scalableArea,
                    scalableAreaPer: trimmedData.scalableAreaPer,

                }));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUser();
    }, []);



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    // location update

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/location/updateLocation/${empid}`, {
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
            navigate("/list-location");
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
                    profilePhoto: profilePicFile,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };

    const fetchStates = () => {
        fetch(`${apiUrl}/employee/allStates/101`)
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
        if (101) {

            fetchStates(101);
        }
    }, [101]);

    useEffect(() => {
        if (stateId) {

            fetchCities(stateId);
        }
    }, [stateId]);

    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setStateId(selectedState);
        setFormData({
            ...formData,
            locationState: selectedState,
        });
        setCityOptions([]);
    };



    const calculatePercentageValue = (percentage, totalValue) => {
        return (percentage / 100) * totalValue;
    };

    const totalValue = formData.size; // Total value
    const percentage = formData.scalableArea; // Percentage to calculate

    const result = calculatePercentageValue(percentage, totalValue);

    console.log(`50 ka 10%: ${result}`); // Output: 5

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
                <div className="main-content  pt-0" >
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Update Land</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-3">BASIC INFO</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Land State: <span className="tx-danger">*</span>
                                                            </label>
                                                            <select
                                                                className="form-control select select2"
                                                                name="locationState"
                                                                value={formData.locationState}
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
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Land City: <span className="tx-danger">*</span>
                                                            </label>
                                                            <select
                                                                className="form-control select select2"
                                                                name="locationCity"
                                                                value={formData.locationCity}
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

                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Title (Alias)
                                                                <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="title"
                                                                value={formData.title}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>


                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Land Latitude:
                                                                <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="locationLatitude"
                                                                value={formData.locationLatitude}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Land Longitude:
                                                                <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="locationLongitude"
                                                                value={formData.locationLongitude}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Google Map
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="googleMap"
                                                                value={formData.googleMap}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Nearby Amenities ( Future Plans)

                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="nearbyAmanities"
                                                                value={formData.nearbyAmanities}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-3">COST INFO</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        {/* <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Meters Square
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="circleRate"
                                                                value={formData.circleRate}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div> */}
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Area (In Beegha)
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="size"
                                                                value={formData.size}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                1 Beegha In sq.yd
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="beeghaPerSqft"
                                                                value={formData.beeghaPerSqft}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Total Area (sq.ft)
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="sizeInSqft"
                                                                value={formData.size * formData.beeghaPerSqft}

                                                                placeholder="Enter"
                                                                required
                                                                type="text"
                                                            />

                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Land Acquisition Cost
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="landAcquisitonCost"
                                                                value={formData.landAcquisitonCost}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>

                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Stamp Duty
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="stampDuty"
                                                                value={formData.stampDuty}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>

                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Registry Cost
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="registryCost"
                                                                value={formData.registryCost}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Registry Date
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="registryDate"
                                                                value={formData.registryDate}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="DATE"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Registry Tehsil
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="registryTehsil"
                                                                value={formData.registryTehsil}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Registered Name
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="registryName"
                                                                value={formData.registryName}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Khasra No
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="KhasraNo"
                                                                value={formData.KhasraNo}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Khatoni No
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="KhatoniNo"
                                                                value={formData.KhatoniNo}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Registry No
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="RegistryNo"
                                                                value={formData.RegistryNo}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Bhumankan No
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="BhumankanNo"
                                                                value={formData.BhumankanNo}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Legal Manager
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="LegalManager"
                                                                value={formData.LegalManager}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Area Allocate for Project
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="areaAllocateToProject"
                                                                value={formData.areaAllocateToProject}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>

                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label"> Salable Area in %</label>
                                                            <input
                                                                className="form-control"
                                                                name="scalableArea"
                                                                value={formData.scalableArea}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required
                                                                type="text"
                                                            />
                                                        </div>


                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">Calculated Salable Area </label>
                                                            <div className="form-control bg-light">
                                                                {formData.scalableAreaPer || result}
                                                            </div>
                                                        </div>
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
                                                <h6 className="main-content-label mb-1">Description</h6>
                                            </div>
                                            <div className="row row-sm" style={{ height: "300px" }}>
                                                <div className="col-sm-12 mg-t-10">
                                                    <label className="form-label">
                                                        Description ( Land Details)
                                                    </label>

                                                    <ReactQuill
                                                        theme="snow"
                                                        value={formData.description}
                                                        onChange={(value) =>
                                                            setFormData((prevState) => ({
                                                                ...prevState,
                                                                description: value,
                                                            }))
                                                        }
                                                        style={{ height: "200px" }}
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
                                                <h6 className="main-content-label mb-4">Location PHOTO</h6>
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
                                                                name="profilePhoto"
                                                                onChange={handleFileChange}
                                                            />
                                                            <div style={{ width: '350px', height: '180px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
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
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label  mb-3">Land Manager</h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-sm-3">
                                                    <div className="form-group ">
                                                        <label className="form-label">Name: <span className="tx-danger">*</span></label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            name="landManagerName"
                                                            value={formData.landManagerName}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group ">
                                                        <label className="form-label">Email Id</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            name="landManagerEmail"
                                                            value={formData.landManagerEmail}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group ">
                                                        <label className="form-label">Phone No: <span className="tx-danger">*</span> </label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            name="landManagerPhone"
                                                            value={formData.landManagerPhone}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group ">
                                                        <label className="form-label">
                                                            Role
                                                        </label>
                                                        <select className="form-control select2"
                                                            name="landManagerRole"
                                                            value={formData.landManagerRole}
                                                            onChange={handleChange}>
                                                            <option>Select </option>
                                                            {role.map((option, index) => (
                                                                <option key={option.id} value={option.name}>
                                                                    {option.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group ">
                                                        <label className="form-label">
                                                            Dispute (Any)
                                                        </label>
                                                        <select className="form-control select2"
                                                            name="dispute"
                                                            value={formData.dispute}
                                                            onChange={handleChange}>
                                                            <option>Select </option>
                                                            {dispute.map((option, index) => (
                                                                <option key={option.id} value={option.name}>
                                                                    {option.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group ">
                                                        <label className="form-label">
                                                            Display Status
                                                        </label>
                                                        <select className="form-control select2"
                                                            name="displayStatus"
                                                            value={formData.displayStatus}
                                                            onChange={handleChange}>
                                                            <option>Select </option>
                                                            {displayStatus.map((option, index) => (
                                                                <option key={option.id} value={option.name}>
                                                                    {option.name}
                                                                </option>
                                                            ))}
                                                        </select>
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

export default LocationEdit