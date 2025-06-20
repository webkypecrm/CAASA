import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';

const AddSalesLead = () => {
    const navigate = useNavigate();  
    
    const initialFormData = {
        status: null,
        clientName: '',
        alternateNumber: '',
        vendor: '',
        emailAddress: '',
        address: '',
        city: '',
        clientNumber: '',
        state: '',
        country: 101,
        project: '',
       
        size: '',
        status: '',
        activenessMeter: '',
        source: '',
        employeeId: '',
        clientBudget: '',
        ourOffer: '',
        remark: '',

    };

    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState([]);
    const [source, setSource] = useState([]);
    const [project, setProject] = useState([]);
    const [projectPlan, setProjectPlan] = useState([]);
    const [city, setCity] = useState([]);
    const [activenessMeter, setActivenessMeter] = useState([]);
    const [countryOptions, setCountryOptions] = useState([]);
    const [stateOptions, setStateOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);
    const [stateId, setStateId] = useState([]);
    const [countryId, setCountryId] = useState(101);
    const [plotSize, setPlotSize] = useState([]);
    const [reportingBossA, setReportingBossA] = useState([])
    const [vendor, setVendor] = useState([]);
    const [vendors, setVendors] = useState([]);
    const[ven, setVen] = useState([]);
    const [showLoader, setShowLoader] = useState(true);



    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem('Token');


    useEffect(() => {
        fetch(`${apiUrl}/vendor/vendorDropdown`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setVen(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);
   

    //project api 
    useEffect(() => {
        fetch(`${apiUrl}/project/getAllProjectDropdown`)
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

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/lead/add-Lead`, {
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

            navigate("/sales-lead");
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

    //status master
    useEffect(() => {

        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/5`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setStatus(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    //Source master
    useEffect(() => {

        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/6`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setSource(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);


    // project plan master
    useEffect(() => {
        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/8`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setProjectPlan(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    // City master
    useEffect(() => {
        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/9`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setCity(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    // Activeness Meter
    useEffect(() => {
        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/10`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setActivenessMeter(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    //Plot Size

    useEffect(() => {
        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/14`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setPlotSize(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    //Boss a
    useEffect(() => {
        const Token = localStorage.getItem('Token');
        console.log('Token:', Token);

        fetch(`${apiUrl}/employee/allEmpDesig`, {
            headers: {
                'Authorization': `Bearer ${Token}` 
               
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

    useEffect(() => {
        const Token = localStorage.getItem('Token');
        console.log('Token:', Token);

        fetch(`${apiUrl}/vendor/vendorDropdown`, {
            headers: {
                'Authorization': `Bearer ${Token}`

            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setVendor(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

   


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
                                    <h2 className="main-content-title tx-24 mg-b-5">Add Lead</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-3">
                                                    Add Lead Details
                                                </h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">

                                                        {/* col-4 */}
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Source: <span className="tx-danger">*</span>
                                                            </label>
                                                            <select className="form-control" name="source"
                                                                value={formData.source}
                                                                onChange={handleInputChange}>
                                                                <option >Select</option>
                                                                {source.map((option, index) => (
                                                                    <option key={option.id} value={option.name}>
                                                                        {option.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        {/* col-4 */} 
                                                       
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Project: <span className="tx-danger">*</span>
                                                            </label>
                                                            <select className="form-control"
                                                                name="project"
                                                                value={formData.project}
                                                                onChange={handleInputChange}>
                                                                <option >Select</option>
                                                                {project.map((option, index) => (
                                                                    <option key={option.id} value={option.id}>
                                                                        {option.projectName}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        {/* col-4 */}
                                                        
                                                        {/* col-4 */}
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                 Size
                                                            </label>
                                                            
                                                            <input
                                                                className="form-control"
                                                                name="size"
                                                                value={formData.size}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Client Name
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="clientName"
                                                                value={formData.clientName}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Client Number: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="clientNumber"
                                                                value={formData.clientNumber}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Alternate Number

                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="alternateNumber"
                                                                value={formData.alternateNumber}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Email Id
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="emailAddress"
                                                                value={formData.emailAddress}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>



                                                        <div className="col-lg-4 form-group">
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

                                                        <div className="col-lg-4 form-group">
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

                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                City
                                                            </label>
                                                            <select
                                                                className="form-control select select2"
                                                                name="city"
                                                                // value={formData.currentAddressCity}
                                                                onChange={handleInputChange}


                                                            >
                                                                <option value="">Select a city</option>
                                                                {cityOptions.map((city, index) => (
                                                                    <option selected={city.id === +formData.city} key={city.id} value={(city.id)}>
                                                                        {`${city.name}`}
                                                                    </option>
                                                                ))}
                                                            </select>

                                                        </div>

                                                        
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Address
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="address"
                                                                value={formData.address}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        {/* col-4 */}
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Assigned: <span className="tx-danger">*</span>
                                                            </label>
                                                            <select
                                                                className="form-control select2"
                                                                name="employeeId"
                                                                value={formData.employeeId}
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
                                                        {/* col-4 */}
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Remark
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="remark"
                                                                value={formData.remark}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Client Budget
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="clientBudget"
                                                                value={formData.clientBudget}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Our Offer
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="ourOffer"
                                                                value={formData.ourOffer}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Activeness Meter

                                                            </label>
                                                            <select className="form-control select2"
                                                                name="activenessMeter"
                                                                value={formData.activenessMeter}
                                                                onChange={handleInputChange}>
                                                                <option>Select </option>
                                                                {activenessMeter.map((option, index) => (
                                                                    <option key={option.id} value={option.name}>
                                                                        {option.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        {/* col-4 */}
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
                                    Copyright © 2024 <a href="javascript:void(0)">AMRS</a>. Designed
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

export default AddSalesLead