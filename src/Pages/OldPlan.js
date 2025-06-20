import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';


const OldPlan = () => {
    const { empid } = useParams();
    const [disableInput2, setDisableInput2] = useState(true);
    const [users, setUsers] = useState([]);
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;


    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };


    const fetchDataFromApi = async () => {
        setLoading(true);

        const url = `${apiUrl}/applicant/applicantPlans?applicantId=${empid}`;
        try {

            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });
            const data = await response.json();
            setPlans(data.data);

            if (data.status === 'success' && data.data.applicantPlans) {
                const formattedData = data.data.applicantPlans.map(item => ({
                    ...item,
                    createdAt: item.createdAt ? formatDateTime(item.createdAt) : null,
                }));
                setUsers(formattedData);
            } else {
                console.error('API response error:', data.message || 'Invalid data format');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };


    useEffect(() => {
        fetchDataFromApi()
    }, []);


    const keyframes = `
    @keyframes bounce {
      0%, 100% {
        transform: scale(0.9);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.5);
        opacity: 1;
      }
    }
    `;

    const loaderStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        },
        loaderContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
        },
        dot: {
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#3498db',
            animation: 'bounce 1.2s infinite ease-in-out',
        },
    };

    // Inject keyframes into the document
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


    useEffect(() => {
        const token = localStorage.getItem('Token');

        if (!token) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>
            {/* Page */}
            <div className="page">

                <TopHeader />
                <Prince />

                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Default/Revised Plan List</h2>
                                </div>
                            </div>

                            {/* Row */}
                            {loading ? (
                                <div style={loaderStyles.overlay}>
                                    <div style={loaderStyles.loaderContainer}>
                                        <div style={loaderStyles.dot}></div>
                                        <div style={{ ...loaderStyles.dot, animationDelay: '0.2s' }}></div>
                                        <div style={{ ...loaderStyles.dot, animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            ) : (
                                <div className="row row-sm">
                                    <div className="col-lg-12">
                                        {users.map((user) => (
                                            <>
                                                {
                                                    user.paymentPlan === 'FPP' && (
                                                        <>
                                                            <div style={{
                                                                marginTop: '10px',
                                                                width: '100%',
                                                                backgroundColor: 'var(--primary-bg-color)',
                                                                padding: '10px 20px',
                                                                borderRadius: '8px',
                                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                                                fontFamily: "'Montserrat', sans-serif"
                                                            }}>
                                                                <h6 style={{
                                                                    textAlign: 'left',
                                                                    color: '#ffffff',
                                                                    fontSize: '0.9rem',
                                                                    margin: '0',
                                                                    fontWeight: '500',
                                                                    letterSpacing: '0.5px'
                                                                }}>

                                                                    {user.currentPlan && (
                                                                        <>
                                                                            Default Plan : {user?.paymentPlan} (Lucky Draw: {plans?.luckyDraw?.luckyDrawName} | Project: {plans?.project?.projectName} | Type: {plans?.schemeType}) : {user?.createdAt}
                                                                        </>
                                                                    )}
                                                                    {!user.currentPlan && (
                                                                        <>
                                                                            Revised Plan: {user?.paymentPlan} (Lucky Draw: {plans?.luckyDraw?.luckyDrawName} | Project: {plans?.project?.projectName} | Type: {plans?.schemeType}) : {user?.createdAt}
                                                                        </>
                                                                    )}


                                                                </h6>
                                                            </div>



                                                            <div className="row row-sm mt-0 justify-content-around" style={{ width: '101.5%', marginTop: '0x' }}>
                                                                <div className="col-xl-12 col-xl-12 ">
                                                                    <div className="card custom-card">
                                                                        <div className="card-body">
                                                                            <div className="table-responsive" >

                                                                                <h6
                                                                                    className="mt-0 text-center mb-3"
                                                                                    style={{ color: "#2e3192" }}
                                                                                >
                                                                                    Scheme: {plans?.scheme?.schemeName}
                                                                                </h6>
                                                                                <table className="table table-bordered" style={{ width: '100%' }}>
                                                                                    <thead>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <th className="tx-left" />
                                                                                            <th className="tx-left" style={{ width: 350 }}>
                                                                                                Basic Price ₹{" "}
                                                                                                <input
                                                                                                    type="text"
                                                                                                    className="form-control"
                                                                                                    style={{ width: 90, height: 25, display: "inline" }}
                                                                                                    value={user.plan.basicPriceFPP}
                                                                                                    disabled={disableInput2}

                                                                                                />
                                                                                                {" "} per {" "}
                                                                                                {user.plan.areaUnitFPP}

                                                                                            </th>
                                                                                            <th className="tx-left" />
                                                                                            <th className="tx-left">
                                                                                                <span style={{ marginRight: 10, fontSize: "11px" }}>
                                                                                                    Installment Amount for {user.plan.size}
                                                                                                    <span style={{ fontSize: '9px' }}>
                                                                                                        {user.plan.areaUnitFPP}
                                                                                                    </span>
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

                                                                                                    value={user.plan.onBookingPerFPP}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}

                                                                                                    value={user.plan.onBookingFPP}
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

                                                                                                    value={user.plan.installMentFPP}
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

                                                                                                    value={user.plan.totalValueFPP}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                }


                                                {
                                                    user.paymentPlan === 'PLP' && (
                                                        <>
                                                            <div style={{
                                                                marginTop: '10px',
                                                                width: '100%',
                                                                backgroundColor: 'var(--primary-bg-color)',
                                                                padding: '10px 20px',
                                                                borderRadius: '8px',
                                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                                                fontFamily: "'Montserrat', sans-serif"
                                                            }}>
                                                                <h6 style={{
                                                                    textAlign: 'left',
                                                                    color: '#ffffff',
                                                                    fontSize: '0.9rem',
                                                                    margin: '0',
                                                                    fontWeight: '500',
                                                                    letterSpacing: '0.5px'
                                                                }}>
                                                                    {user.currentPlan && (
                                                                        <>
                                                                            Default Plan : {user?.paymentPlan} | Project: {plans?.project?.projectName} | Type: {plans?.schemeType}) : {user?.createdAt}
                                                                        </>
                                                                    )}
                                                                    {!user.currentPlan && (
                                                                        <>
                                                                            Revised Plan: {user?.paymentPlan} | Project: {plans?.project?.projectName} | Type: {plans?.schemeType}) : {user?.createdAt}
                                                                        </>
                                                                    )}
                                                                </h6>
                                                            </div>


                                                            <div className="row row-sm mt-0 justify-content-around" style={{ width: '101.5%', marginTop: '0x' }}>
                                                                <div className="col-xl-12 col-xl-12 ">
                                                                    <div className="card custom-card">
                                                                        <div className="card-body">
                                                                            <div className="table-responsive" >

                                                                                <h6
                                                                                    className="mt-0 text-center mb-3"
                                                                                    style={{ color: "#2e3192" }}
                                                                                >
                                                                                    Scheme: {plans?.scheme?.schemeName}
                                                                                </h6>
                                                                                <table className="table table-bordered" style={{ width: 1280 }}>
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
                                                                                                    value={user.plan.basicPricePLP}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                                {" "} per {" "}
                                                                                                {user.plan.areaUnitPLP}
                                                                                            </th>
                                                                                            <th className="tx-left" />
                                                                                            <th className="tx-left">
                                                                                                <span style={{ marginRight: 10, fontSize: "11px" }}>
                                                                                                    Installment Amount for {user.plan.size}{" "}
                                                                                                    <span style={{ fontSize: '9px' }}>
                                                                                                        {user.plan.areaUnitPLP}
                                                                                                    </span>
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
                                                                                                    value={user.plan.onBookingPerPLP}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="onBookingPLP"
                                                                                                    value={user.plan.onBookingPLP}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">2</td>
                                                                                            <td className="tx-left">Within  {user.plan.days1PLP} Days-</td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="withIn60PerPLP"
                                                                                                    value={user.plan.withIn60PerPLP}
                                                                                                    disabled={disableInput2}
                                                                                                // style={{ color: 'white', backgroundColor: 'gray' }}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="withIn60PLP"
                                                                                                    value={user.plan.withIn60PLP}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">3</td>
                                                                                            <td className="tx-left">Within  {user.plan.days2PLP} Days</td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="withIn90PerPLP"
                                                                                                    value={user.plan.withIn90PerPLP}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="withIn90PLP"
                                                                                                    value={user.plan.withIn90PLP}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">4</td>
                                                                                            <td className="tx-left">Within  {user.plan.days3PLP} Days</td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="withIn120PerPLP"
                                                                                                    value={user.plan.withIn120PerPLP}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="withIn120PLP"
                                                                                                    value={user.plan.withIn120PLP}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">5</td>
                                                                                            <td className="tx-left">Within {" "} {user.plan.days4PLP}{" "} Days</td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="withIn150PerPLP"
                                                                                                    value={user.plan.withIn150PerPLP}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="withIn150PLP"
                                                                                                    value={user.plan.withIn150PLP}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">6</td>
                                                                                            <td className="tx-left">Within{" "}
                                                                                                {user.plan.days5PLP}{" "}
                                                                                                Days</td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="withIn180PerPLP"
                                                                                                    value={user.plan.withIn180PerPLP}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="withIn120PLP"
                                                                                                    value={user.plan.withIn180PLP}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">7</td>
                                                                                            <td className="tx-left">Within{" "}
                                                                                                {user.plan.days6PLP}{" "}
                                                                                                Days</td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="extraPerPLP1"
                                                                                                    value={user.plan.extraPerPLP1}
                                                                                                    disabled={disableInput2}

                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="extraValuePLP1"
                                                                                                    value={user.plan.extraValuePLP1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">8</td>
                                                                                            <td className="tx-left">Within{" "}
                                                                                                {user.plan.days7PLP}{" "}
                                                                                                Days</td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="extraPerPLP2"
                                                                                                    value={user.plan.extraPerPLP2}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="extraValuePLP2"
                                                                                                    value={user.plan.extraValuePLP2}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">9</td>
                                                                                            <td className="tx-left">Within {" "}
                                                                                                {user.plan.days8PLP}{" "}
                                                                                                Days</td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="extraPerPLP3"
                                                                                                    value={user.plan.extraPerPLP3}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="extraValuePLP3"
                                                                                                    value={user.plan.extraValuePLP3}
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
                                                                                                    value={user.plan.restOnRegistryPerPLP}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="restOnRegistryPLP"
                                                                                                    value={user.plan.restOnRegistryPLP}
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
                                                                                                    value={user.plan.totalValuePLP}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                }

                                                {
                                                    user.paymentPlan === 'DLP' && (
                                                        <>
                                                            <div style={{
                                                                marginTop: '10px',
                                                                width: '100%',
                                                                backgroundColor: 'var(--primary-bg-color)',
                                                                padding: '10px 20px',
                                                                borderRadius: '8px',
                                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                                                fontFamily: "'Montserrat', sans-serif"
                                                            }}>
                                                                <h6 style={{
                                                                    textAlign: 'left',
                                                                    color: '#ffffff',
                                                                    fontSize: '0.9rem',
                                                                    margin: '0',
                                                                    fontWeight: '500',
                                                                    letterSpacing: '0.5px'
                                                                }}>
                                                                    {user.currentPlan && (
                                                                        <>
                                                                            Default Plan : {user.paymentPlan} (Lucky Draw: {plans?.luckyDraw?.luckyDrawName} | Project: {plans?.project?.projectName} | Type: {plans?.schemeType}) : {user.createdAt}
                                                                        </>
                                                                    )}
                                                                    {!user.currentPlan && (
                                                                        <>
                                                                            Revised Plan: {user.paymentPlan} (Lucky Draw: {plans?.luckyDraw?.luckyDrawName} | Project: {plans?.project?.projectName} | Type: {plans?.schemeType}) : {user.createdAt}
                                                                        </>
                                                                    )}
                                                                </h6>
                                                            </div>

                                                            <div className="row row-sm mt-0 justify-content-around" style={{ width: '101.5%', marginTop: '0x' }}>
                                                                <div className="col-xl-12 col-xl-12 ">
                                                                    <div className="card custom-card">
                                                                        <div className="card-body">
                                                                            <div className="table-responsive" >
                                                                                <h6
                                                                                    className="mt-0 text-center mb-3"
                                                                                    style={{ color: "#2e3192" }}
                                                                                >
                                                                                    Scheme: {plans?.scheme?.schemeName}
                                                                                </h6>
                                                                                <table className="table table-bordered" style={{ width: 1280 }}>
                                                                                    <thead>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <th className="tx-left" />

                                                                                            <th className="tx-left" style={{ width: 350 }}>
                                                                                                Basic Price ₹{" "}
                                                                                                <input
                                                                                                    type="text"
                                                                                                    className="form-control"
                                                                                                    style={{ width: 90, height: 25, display: "inline" }}
                                                                                                    value={user.plan.basicPriceDLP}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                                {" "} per {" "}
                                                                                                {user.plan.areaUnitDLP}

                                                                                            </th>
                                                                                            <th className="tx-left" />
                                                                                            <th className="tx-left">
                                                                                                <span style={{ marginRight: 10, fontSize: "11px" }}>
                                                                                                    Installment Amount for {user.plan.size}{" "}
                                                                                                    <span style={{ fontSize: '9px' }}>
                                                                                                        {user.plan.areaUnitDLP}
                                                                                                    </span>
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
                                                                                                    value={user.plan.onBookingPerDLP}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="onBookingDLP"
                                                                                                    value={user.plan.onBookingDLP}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">2</td>
                                                                                            <td className="tx-left">Within {user.plan.daysDLP} Days-</td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="withIn30PerDLP"
                                                                                                    value={user.plan.withIn30PerDLP}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="withIn30DLP"
                                                                                                    value={user.plan.withIn30DLP}
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
                                                                                                    value={user.plan.restOnRegistryPerDLP}
                                                                                                    disabled={disableInput2}
                                                                                                />
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="restOnRegistryDLP"
                                                                                                    value={user.plan.restOnRegistryDLP}
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
                                                                                                    value={user.plan.totalValueDLP}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {/* End Row */}
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

export default OldPlan

