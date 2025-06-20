import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { BiCaretRight } from 'react-icons/bi';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PlanView = () => {
    const [project, setProject] = useState([]);
    const [company, setCompany] = useState([]);

    const { empid } = useParams();
    const navigate = useNavigate();
    const initialFormData = {
        brocehureImage: '',
        paymentPlanImage: '',
        basicPriceFPP: '',
        onBookingPerFPP: '',
        onBookingFPP: '',
        installMentFPP: '',
        totalValuePerFPP: '',
        totalValueFPP: '',
        basicPricePLP: '',
        onBookingPerPLP: '',
        onBookingPLP: '',
        withIn60PerPLP: '',
        withIn60PLP: '',
        withIn90PerPLP: '',
        withIn90PLP: '',
        withIn120PerPLP: '',
        withIn120PLP: '',
        withIn150PerPLP: '',
        withIn150PLP: '',
        withIn180PerPLP: '',
        withIn180PLP: '',
        restOnRegistryPerPLP: '',
        restOnRegistryPLP: '',
        basicPriceDLP: '',
        onBookingPerDLP: '',
        onBookingDLP: '',
        withIn30PerDLP: '',
        withIn30DLP: '',
        restOnRegistryPerDLP: '',
        restOnRegistryDLP: '',
        totalValuePerDLP: '',
        totalValueDLP: '',
        schemeId: '',
        projectId: '',
        companyId: '',
        planDescription: '',

        extraPLP1: '',
        extraPerPLP1: '',
        extraValuePLP1: '',

        extraPLP2: '',
        extraPerPLP2: '',
        extraValuePLP2: '',

        extraPLP3: '',
        extraPerPLP3: '',
        extraValuePLP3: '',

        totalPerPLP: '',
        totalValuePLP: '',
        note: '',
        createdAt: '',
        areaFPP: '',
        areaUnitFPP: '',

        areaPLP: '',
        areaUnitPLP: '',

        areaDLP: '',
        areaUnitDLP: '',
        companyPhoto: '',

        cornerPlc: '',
        mainRoadPlc: '',
        facultyParkPlc: '',
        fixedCharges: '',

        days1PLP: '',
        days2PLP: '',
        days3PLP: '',
        days4PLP: '',
        days5PLP: '',
        days6PLP: '',
        days7PLP: '',
        days8PLP: '',
        daysDLP: '',

    };

    const [formData, setFormData] = useState(initialFormData);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [profilePic, setProfilePic] = useState(null);
    const [profilePics, setProfilePics] = useState(null);
    const [scame, setScame] = useState([]);
    const [disableInput2, setDisableInput2] = useState(true);
    const [contentPrinted, setContentPrinted] = useState(false);
    const [size, setSize] = useState([])
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


    //size type
    useEffect(() => {

        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/24`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setSize(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    const handleInputChange2 = (e) => {
        if (!disableInput2) {
            setFormData({ ...formData, basicPriceFPP: e.target.value });
        }
    };

    const loadContent = (empid) => {
        // Hide the button when printing
        const button = document.querySelector('button[title="Print"]');
        if (button) {
            button.classList.add('hide-on-print');
        }

        // Call window.print() to print the content
        window.print();
        setContentPrinted(true);
    };
    // plan data get
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const url = `${apiUrl}/plan/planByLuckyDrawId?planId=${empid}`;
                const result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                const { data } = await result.json();

                setProfilePic(data.brocehureImage);
                setProfilePics(data.paymentPlanImage);

                setFormData((prevFormData) => ({
                    ...prevFormData,
                    ...data,
                }));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUser();
    }, [apiUrl, empid, Token]);


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

    // SCAME
    useEffect(() => {
        const Token = localStorage.getItem('Token');

        fetch(`${apiUrl}/scheme/schemeDropdown`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setScame(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    return (
        <>

            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n.responsive-logo img{display:none !important;}\n    .table-invoice tbody>tr>th:first-child, .table-invoice tbody>tr>td:first-child{color:#1d212f !important}\n    .table thead th, .table thead td, .table tbody td{font-size:13px !important;}\n    .table-light {  background-color: #f5f5f5 !important}\n    .table-light th, .table-light td, .table-light thead th, .table-light tbody+tbody { border-color: #e8e8f7 !important;}\n    .mg-b-100{margin-bottom:100px;}\n"
                }}
            />

            <div className="page">
                {/* Main Content*/}
                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">

                            <div className="row row-sm mt-5 justify-content-around">
                                <div className="col-xl-7 col-lg-7 col-md-7">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <button onClick={() => loadContent(empid)} title="Print" style={{
                                                    cursor: 'pointer',
                                                    border: 'none',
                                                    backgroundColor: 'transparent',
                                                    padding: '5px 10px',
                                                    borderRadius: '5px',
                                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                                    color: '#333',
                                                    fontWeight: 'bold',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}>
                                                    Print
                                                </button>
                                                {/* CSS class to hide the button when printing */}
                                                <style>{`
                @media print {
                    .hide-on-print {
                        display: none !important;
                    }
                }
            `}</style>

                                                <table className="table table-invoice table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td width="30%">
                                                                <img

                                                                    src={formData.companyPhoto}
                                                                    style={{ width: 150 }}
                                                                />
                                                            </td>
                                                            <td width="45%">

                                                                <h4 style={{

                                                                    whiteSpace: "nowrap"
                                                                }}>{formData.projectId}-({formData.schemeType})</h4>
                                                            </td>
                                                            <td width="33%">
                                                                <h4 style={{
                                                                    textAlign: "center",
                                                                    background: "#6c8cc8",
                                                                    color: "#fff",
                                                                    fontWeight: "normal",
                                                                    padding: 10,
                                                                    borderRadius: 10,
                                                                    whiteSpace: "nowrap"
                                                                }}>
                                                                    Payment Plan
                                                                </h4>
                                                                <h6 style={{ textAlign: 'center', fontSize: '14px' }}>Date: {formData.createdAt}</h6>
                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <h4
                                                    className="mt-5 text-center mb-3"
                                                    style={{ color: "#2e3192" }}
                                                >
                                                    FLEXI PAYMENT PLAN
                                                </h4>
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <th className="tx-left" />
                                                            <th className="tx-left" style={{ width: 350 }}>
                                                                Basic Price ₹{" "}
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ width: 90, height: 25, display: "inline" }}
                                                                    name="basicPriceFPP"
                                                                    value={formData.basicPriceFPP}
                                                                    disabled={disableInput2}

                                                                />
                                                                {" "} per {" "} {formData.areaUnitPLP}


                                                            </th>
                                                            <th className="tx-left" />
                                                            <th className="tx-left">
                                                                <span style={{
                                                                    marginRight: 10,
                                                                    fontSize: "11px",
                                                                    // whiteSpace: "nowrap" 
                                                                }}>
                                                                    Installment Amount for {formData.areaPLP}  {formData.areaUnitPLP}
                                                                </span>

                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">1</td>
                                                            <td className="tx-left">On Booking</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="onBookingPerFPP"
                                                                    value={`${formData.onBookingPerFPP}%`}
                                                                    disabled={disableInput2}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="onBookingFPP"
                                                                    value={formData.onBookingFPP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">2</td>
                                                            <td className="tx-left">
                                                                Within 24 Months. Monthly installment Each of:-
                                                            </td>
                                                            <td className="tx-left" />
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="installMentFPP"
                                                                    value={formData.installMentFPP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left" />
                                                            <td className="tx-left">Total value</td>
                                                            <td className="tx-left">

                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="totalValueFPP"
                                                                    value={formData.totalValueFPP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <h4
                                                    className="mt-5 text-center mb-3"
                                                    style={{ color: "#2e3192" }}
                                                >
                                                    POSSESSION LINK PLAN
                                                </h4>


                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <th className="tx-left" />
                                                            <th className="tx-left" style={{ width: 350 }}>
                                                                Basic Price ₹{" "}
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ width: 90, height: 25, display: "inline" }}
                                                                    name="basicPricePLP"
                                                                    value={formData.basicPricePLP}
                                                                    disabled={disableInput2}
                                                                />
                                                                {" "} per {" "} {formData.areaUnitPLP}

                                                            </th>
                                                            <th className="tx-left" />
                                                            <th className="tx-left">
                                                                <span style={{
                                                                    marginRight: 10,
                                                                    fontSize: "11px",
                                                                    // whiteSpace: "nowrap" 
                                                                }}>
                                                                    Installment Amount for {formData.areaPLP}  {formData.areaUnitPLP}
                                                                </span>



                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>




                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">1</td>
                                                            <td className="tx-left">On Booking</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="onBookingPerPLP"
                                                                    value={`${formData.onBookingPerPLP}%`}
                                                                    disabled={disableInput2}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="onBookingPLP"
                                                                    value={formData.onBookingPLP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">2</td>
                                                            <td className="tx-left" style={{ whiteSpace: 'nowrap' }}>
                                                                Within {" "}
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ height: '25px', width: '140px', display: 'inline-block' }}
                                                                    value={formData.days1PLP}
                                                                    disabled={disableInput2}
                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn60PerPLP"
                                                                    value={`${formData.withIn60PerPLP}%`}
                                                                    disabled={disableInput2}
                                                                // style={{ color: 'white', backgroundColor: 'gray' }}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn60PLP"
                                                                    value={formData.withIn60PLP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>

                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">3</td>
                                                            <td className="tx-left" style={{ whiteSpace: 'nowrap' }}>
                                                                Within {" "}
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ height: '25px', width: '140px', display: 'inline-block' }}
                                                                    value={formData.days2PLP}
                                                                    disabled={disableInput2}
                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn90PerPLP"
                                                                    value={`${formData.withIn90PerPLP}%`}
                                                                    disabled={disableInput2}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn90PLP"
                                                                    value={formData.withIn90PLP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">4</td>
                                                            <td className="tx-left" style={{ whiteSpace: 'nowrap' }}>
                                                                Within {" "}
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ height: '25px', width: '140px', display: 'inline-block' }}
                                                                    value={formData.days3PLP}
                                                                    disabled={disableInput2}
                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn120PerPLP"
                                                                    value={`${formData.withIn120PerPLP}%`}
                                                                    disabled={disableInput2}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn120PLP"
                                                                    value={formData.withIn120PLP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>

                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">5</td>
                                                            <td className="tx-left" style={{ whiteSpace: 'nowrap' }}>
                                                                Within {" "}
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ height: '25px', width: '140px', display: 'inline-block' }}
                                                                    value={formData.days4PLP}
                                                                    disabled={disableInput2}
                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn150PerPLP"
                                                                    value={`${formData.withIn150PerPLP}%`}
                                                                    disabled={disableInput2}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn150PLP"
                                                                    value={formData.withIn150PLP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">6</td>
                                                            <td className="tx-left" style={{ whiteSpace: 'nowrap' }}>
                                                                Within {" "}
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ height: '25px', width: '140px', display: 'inline-block' }}
                                                                    value={formData.days5PLP}
                                                                    disabled={disableInput2}
                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn180PerPLP"
                                                                    value={`${formData.withIn180PerPLP}%`}
                                                                    disabled={disableInput2}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn120PLP"
                                                                    value={formData.withIn180PLP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>



                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">7</td>
                                                            <td className="tx-left" style={{ whiteSpace: 'nowrap' }}>
                                                                Within {" "}
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ height: '25px', width: '140px', display: 'inline-block' }}
                                                                    value={formData.days6PLP}
                                                                    disabled={disableInput2}
                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="extraPerPLP1"
                                                                    value={formData.extraPerPLP1 ? `${formData.extraPerPLP1}%` : ''}
                                                                    disabled={disableInput2}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="extraValuePLP1"
                                                                    value={formData.extraValuePLP1}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>



                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">8</td>
                                                            <td className="tx-left" style={{ whiteSpace: 'nowrap' }}>
                                                                Within {" "}
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ height: '25px', width: '140px', display: 'inline-block' }}
                                                                    value={formData.days7PLP}
                                                                    disabled={disableInput2}
                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="extraPerPLP2"
                                                                    value={formData.extraPerPLP2 ? `${formData.extraPerPLP2}%` : ''}
                                                                    disabled={disableInput2}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="extraValuePLP2"
                                                                    value={formData.extraValuePLP2}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>

                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">9</td>
                                                            <td className="tx-left" style={{ whiteSpace: 'nowrap' }}>
                                                                Within {" "}
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ height: '25px', width: '140px', display: 'inline-block' }}
                                                                    value={formData.days8PLP}
                                                                    disabled={disableInput2}
                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="extraPerPLP3"
                                                                    value={formData.extraPerPLP3 ? `${formData.extraPerPLP3}%` : ''}
                                                                    disabled={disableInput2}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="extraValuePLP3"
                                                                    value={formData.extraValuePLP3}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">10</td>
                                                            <td className="tx-left">Rest on Registry</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="restOnRegistryPerPLP"
                                                                    value={`${formData.restOnRegistryPerPLP}%`}
                                                                    disabled={disableInput2}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="restOnRegistryPLP"
                                                                    value={formData.restOnRegistryPLP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>

                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left" />

                                                            <td className="tx-left">
                                                                Total Value
                                                            </td>
                                                            <td className="tx-left">

                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="totalValuePLP"
                                                                    value={formData.totalValuePLP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <h4
                                                    className="mt-5 text-center mb-3"
                                                    style={{ color: "#2e3192" }}
                                                >
                                                    DOWN LINK PLAN
                                                </h4>
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <th className="tx-left" />

                                                            <th className="tx-left" style={{ width: 350 }}>
                                                                Basic Price ₹{" "}
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ width: 90, height: 25, display: "inline" }}
                                                                    name="basicPriceDLP"
                                                                    value={formData.basicPriceDLP}
                                                                    disabled={disableInput2}
                                                                />
                                                                {" "} per {" "} {formData.areaUnitPLP}


                                                            </th>
                                                            <th className="tx-left" />
                                                            <th className="tx-left">
                                                                <span style={{
                                                                    marginRight: 10,
                                                                    fontSize: "11px",
                                                                    // whiteSpace: "nowrap" 
                                                                }}>
                                                                    Installment Amount for {formData.areaPLP}  {formData.areaUnitPLP}
                                                                </span>


                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">1</td>
                                                            <td className="tx-left">On Booking</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="onBookingPerDLP"
                                                                    value={`${formData.onBookingPerDLP}%`}
                                                                    disabled={disableInput2}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="onBookingDLP"
                                                                    value={formData.onBookingDLP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">2</td>
                                                            <td className="tx-left" style={{ whiteSpace: 'nowrap' }}>
                                                                Within {" "}
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ height: '25px', width: '140px', display: 'inline-block' }}
                                                                    value={formData.days1PLP}
                                                                    disabled={disableInput2}
                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn30PerDLP"
                                                                    value={`${formData.withIn30PerDLP}%`}
                                                                    disabled={disableInput2}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn30DLP"
                                                                    value={formData.withIn30DLP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>

                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">3</td>
                                                            <td className="tx-left">Rest on Registry</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="restOnRegistryPerDLP"
                                                                    value={`${formData.restOnRegistryPerDLP}%`}
                                                                    disabled={disableInput2}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="restOnRegistryDLP"
                                                                    value={formData.restOnRegistryDLP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left" />
                                                            <td className="tx-left">Total Value</td>
                                                            <td className="tx-left">

                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="totalValueDLP"
                                                                    value={formData.totalValueDLP}
                                                                    disabled={disableInput2} />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <h4 className="mt-5 text-center mb-3" style={{ color: "#2e3192" }}>
                                                    Applicable PLC
                                                    {/* <span>-&gt; PLC/OTNER</span> */}
                                                </h4>

                                                <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#f9f9f9' }}>
                                                    <div style={{ overflowX: 'auto' }}>
                                                        <table style={{ width: '100%' }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ verticalAlign: 'middle', padding: '8px' }}>
                                                                        <BiCaretRight style={{ marginRight: '5px' }} />
                                                                        1 PLC:
                                                                    </td>
                                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle', padding: '8px' }}>
                                                                        <input type="text" className="form-control" style={{ padding: '8px', border: '1px solid #ccc', height: 25, borderRadius: '5px', width: 'calc(100% - 20px)', display: 'inline-block' }}
                                                                            name="cornerPlc"
                                                                            value={formData.cornerPlc}
                                                                            disabled={disableInput2} />
                                                                        <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px' }}>%</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ verticalAlign: 'middle', padding: '8px' }}>
                                                                        <BiCaretRight style={{ marginRight: '5px' }} />
                                                                        2 PLC:
                                                                    </td>

                                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle', padding: '8px' }}>
                                                                        <input type="text" className="form-control" style={{ padding: '8px', border: '1px solid #ccc', height: 25, borderRadius: '5px', width: 'calc(100% - 20px)', display: 'inline-block' }}
                                                                            name="mainRoadPlc"
                                                                            value={formData.mainRoadPlc}
                                                                            disabled={disableInput2} />
                                                                        <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px' }}>%</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ verticalAlign: 'middle', padding: '8px' }}>
                                                                        <BiCaretRight style={{ marginRight: '5px' }} />
                                                                        3 PLC:
                                                                    </td>

                                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle', padding: '8px' }}>
                                                                        <input type="text" className="form-control" style={{ padding: '8px', border: '1px solid #ccc', height: 25, borderRadius: '5px', width: 'calc(100% - 20px)', display: 'inline-block' }}
                                                                            name="facultyParkPlc"
                                                                            value={formData.facultyParkPlc}
                                                                            disabled={disableInput2} />
                                                                        <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px' }}>%</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ verticalAlign: 'middle', padding: '8px' }}>
                                                                        <BiCaretRight style={{ marginRight: '5px' }} />
                                                                        IDC/EDC:
                                                                    </td>

                                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle', padding: '8px' }}>
                                                                        <input type="text" className="form-control" style={{ padding: '8px', border: '1px solid #ccc', height: 25, borderRadius: '5px', width: 'calc(100% - 20px)', display: 'inline-block' }}
                                                                            name="fixedCharges"
                                                                            value={formData.fixedCharges}
                                                                            disabled={disableInput2} />
                                                                        <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '11px' }}></span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan="2" style={{ padding: '8px' }}>
                                                                        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: '#f0f0f0' }}>
                                                                            <h3 style={{ textAlign: 'center', marginBottom: '10px', color: '#333' }}>Terms & Conditions</h3>
                                                                            <ul style={{ padding: '15px', margin: 0 }}>
                                                                                <li style={{ marginBottom: '10px', fontSize: '14px' }}>Any one PLC – What would be charged</li>
                                                                                <li style={{ marginBottom: '10px', fontSize: '14px' }}>Any two PLC – What would be charged</li>
                                                                                <li style={{ marginBottom: '10px', fontSize: '14px' }}>Any three PLC – What would be charged</li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <h4
                                                    className="mt-3 text-center "
                                                    style={{ color: "#2e3192" }}
                                                >
                                                    PLAN DETAILS
                                                </h4>
                                                <form className="mt-5" action="#" data-parsley-validate="">
                                                    <div className="">
                                                        <div className="row row-sm">
                                                            <div className="col-lg-4 form-group">
                                                                <label className="form-label">
                                                                    {/* Select Company{" "} */}
                                                                    {/* <span className="tx-danger">*</span> */}
                                                                </label>
                                                                <select className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="companyId"
                                                                    value={formData.companyId}
                                                                    disabled={disableInput2}
                                                                >
                                                                    <option >Select Company</option>
                                                                    {company.map((option, index) => (
                                                                        <option key={option.id} value={option.name}>
                                                                            {option.companyName}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-4 form-group">
                                                                <label className="form-label">
                                                                    {/* Select Project <span className="tx-danger">*</span> */}
                                                                </label>
                                                                <select className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="projectId"
                                                                    value={formData.projectId}
                                                                    disabled={disableInput2}
                                                                >
                                                                    <option >Select</option>
                                                                    {project.map((option, index) => (
                                                                        <option key={option.id} value={option.name}>
                                                                            {option.projectName}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-4 form-group">
                                                                <label className="form-label">
                                                                    {/* Select Scheme <span className="tx-danger">*</span> */}
                                                                </label>
                                                                <select className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="schemeId"
                                                                    value={formData.schemeId}
                                                                    disabled={disableInput2}
                                                                >
                                                                    <option >Select</option>
                                                                    {scame.map((option, index) => (
                                                                        <option key={option.id} value={option.name}>
                                                                            {option.schemeName}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-12 form-group" style={{ height: "300px" }}>
                                                                <label className="form-label">
                                                                    {/* Plan Description{" "} */}
                                                                    {/* <span className="tx-danger">*</span> */}
                                                                </label>

                                                                <ReactQuill
                                                                    theme="snow"
                                                                    placeholder="Description..."
                                                                    name="planDescription"
                                                                    value={formData.planDescription}
                                                                    style={{ height: "200px" }}
                                                                    readOnly={true}
                                                                />


                                                            </div>

                                                            <div className="col-lg-6 form-group">
                                                                <label className="form-label">
                                                                    {/* Brocehure Image <span className="tx-danger">*</span> */}
                                                                </label>
                                                                <div className="row row-sm">
                                                                    <div className="col-sm-12 col-md-12">
                                                                        {/* <input
                                                                        type="file"
                                                                        className="dropify"
                                                                        data-default-file="../assets/img/media/1.jpg"
                                                                        data-height={200}
                                                                    /> */}
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
                                                            <div className="col-lg-6 form-group">
                                                                <label className="form-label">
                                                                    {/* Payment Plan Image{" "} */}
                                                                    {/* <span className="tx-danger">*</span> */}
                                                                </label>
                                                                <div className="row row-sm">
                                                                    <div className="col-sm-12 col-md-12">
                                                                        {/* <input
                                                                        type="file"
                                                                        className="dropify"
                                                                        data-default-file="../assets/img/media/1.jpg"
                                                                        data-height={200}
                                                                    /> */}
                                                                        <div style={{ width: '350px', height: '220px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                            {profilePics && (
                                                                                <img src={profilePics} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                            )}
                                                                            {!profilePics && (
                                                                                <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                            )}


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>
                                                <p className="mt-5">
                                                    <div className="col-lg-12 form-group" style={{ height: "300px" }}>
                                                        <label className="form-label">
                                                            Note

                                                        </label>


                                                        <ReactQuill
                                                            theme="snow"
                                                            placeholder="Description..."
                                                            name="note"
                                                            value={formData.note}
                                                            style={{ height: "200px" }}
                                                            readOnly={true}
                                                        />

                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        {/* <div className="card-footer text-end">
                                            <a href="po-rice.html" className="btn btn-primary mb-1">
                                                Submit
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                        </div>
                    </div>
                </div>
                {/* End Main Content*/}
            </div>



        </>

    )
}

export default PlanView

