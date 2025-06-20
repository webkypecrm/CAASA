
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../assets/approva-signature.jpg'


const WelcomesPrint = () => {

    const [contentPrinted, setContentPrinted] = useState(false);

    const { empid } = useParams();
    const navigate = useNavigate();

    const initialFormData = {
        ticketId: '',
        applicantFirstName: '',
        applicantMiddleName: '',
        applicantLastName: '',
        applicantFatherName: '',
        applicantEmail: '',
        applicantMobile: '',
        applicantAlternateNumber: '',
        applicantCountry: '',
        applicantState: '',
        applicantCity: "",
        applicantAddress: '',
        applicantDOB: '',
        applicantAadhaarNumber: "",
        applicantAadhaarImage: "",
        applicantPAN: "",
        applicantPanImage: "",
        applicantNationality: "",
        applicantProfession: "",
        coApplicantFirstName: "",
        coApplicantMiddleName: "",
        coApplicantLastName: "",
        coApplicantFatherName: " ",
        coApplicantEmail: "",
        coApplicantMobile: "",
        coApplicantAlternateNumber: "",
        coApplicantCountry: "",
        coApplicantState: "",
        coApplicantCity: "",
        coApplicantAddress: "",
        coApplicantDOB: "",
        coApplicantAadhaarNumber: "",
        coApplicantAadhaarImage: "",
        coApplicantPAN: "",
        coApplicantPanImage: "",
        coApplicantNationality: "",
        coApplicantProfession: "",
        projectId: '',
        schemeId: '',
        planId: '',
        drawSchemeAmount: '',
        advisorId: '',
        sizeType: "",
        others: "",
        amountReceived: "",
        paymentStatus: "",
        paymentMethod: "",
        transactionID: "",
        applicantImage: "",
        coApplicantImage: "",

        applicantPincode: '',
        applicantLandMark: '',
        coApplicantPincode: '',
        coApplicantLandMark: '',

        shipPlotFarmNo: '',
        registrationAmount: '',
        area: '',

        bsp: '',
        fixedCharges: '',
        PLCs: '',
        totalCost: '',

        cashRemark: '',
        chequeNo: '',
        chequeDetails: '',
        chequeDate: '',

        schemeType: '',
        unitNo: '',
        gift: '',
        paymentPlan: '',
        PLCsValue: '',

        plan: {
            basicPricePLP: '',
            basicPriceFPP: '',
            basicPriceDLP: '',
        },
        plan: {
            fixedCharges: '',
        },

        plcdd: '',

    };
    const [formData, setFormData] = useState(initialFormData);


    const initialFormData2 = {
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

    };

    const [formData2, setFormData2] = useState(initialFormData2);

    const initialFormData3 = {
        name: '',
        project: '',
        company: '',
        ticketId: '',
        projectName: '',
        unitNumber: '',
        freeGift: '',
        clientName: '',
        allotmentUnit: '',
        area: '',
        paymentPlan: '',
        basicSalery: '',
        fixedCharges: '',
        plc: '',
        totalCost: '',
        basicSalesAmount: '',
        fixedChargesAmount: '',
        plcAmount: '',
        onBooking: '',
        withIn60Days: '',
        withIn90Days: '',
        withIn120Days: '',
        withIn150Days: '',
        withIn180Days: '',
        onRegistry: '',
        InitialPaymentDate: '',
        remainingInitialAmountDate: '',
        noteDate: '',
        giftHangover: '',
        bank: '',
        accountManager: '',
        accountManagerPhone: '',
        withIn30Days: '',
        invitationLetterDate: '',

        onBookingAmount: '',
        withIn30DayAmount: '',
        withIn60DayAmount: '',
        withIn90DayAmount: '',
        withIn150DayAmount: '',
        withIn120DayAmount: '',
        withIn180DayAmount: '',
        onRegistryAmount: '',

        days1PLP: '',
        days2PLP: '',
        days3PLP: '',
        days4PLP: '',
        days5PLP: '',
        days6PLP: '',
        days7PLP: '',
        daysDLP: '',

        extraPerPLP1: '',
        extraValuePLP1: '',

        extraPerPLP2: '',
        extraValuePLP2: '',

        extraPerPLP3: '',
        extraValuePLP3: '',
        date: '',
        size: '',
    };

    const [formData3, setFormData3] = useState(initialFormData3);
    const [accountManagerName, setAccountManagerName] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [profilePic2, setProfilePic2] = useState(null);
    const [profilePics, setProfilePics] = useState(null);
    const [gift, setGift] = useState([])
    const [reportingBossA, setReportingBossA] = useState([])
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [project, setProject] = useState([]);
    const [employee, setEmployee] = useState({})
    const [mobileNo, setMobileNo] = useState('');
    const [mobileNos, setMobileNos] = useState('');


    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");





    useEffect(() => {
        const updateDateTime = () => {
            setCurrentDateTime(new Date());
        };

        // Set an interval to update the date and time every minute
        const intervalId = setInterval(updateDateTime, 60 * 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Format the date and time
    const formattedDate = currentDateTime.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    useEffect(() => {
        async function getEmp() {
            const Token = localStorage.getItem("Token");

            let response = await fetch(`${apiUrl}/bank/getBankDetailsById/${formData3.bank}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            });
            response = await response.json();

            if (response.status === "success") {
                setEmployee(response.data);
            }
        }
        getEmp();
    }, [formData3.bank]);


    useEffect(() => {
        async function getMobile() {
            try {
                const Token = localStorage.getItem("Token");

                if (!Token) {
                    console.error("No authentication token found.");
                    return;
                }



                const response = await fetch(`${apiUrl}/employee/employeePhoneNumber?empId=${formData3.accountManager}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${Token}`
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log("API response:", data);

                if (data.status === "success") {
                    setMobileNo(data.data.phoneNumber);

                } else {
                    console.error("Failed to fetch phone number:", data.message);
                }
            } catch (error) {
                console.error("Error fetching mobile number:", error);
            }
        }

        if (formData3.accountManager) {
            getMobile();
        }
    }, [formData3.accountManager]);


    useEffect(() => {
        async function getMobiles() {
            try {
                const Token = localStorage.getItem("Token");

                if (!Token) {
                    console.error("No authentication token found.");
                    return;
                }

                const response = await fetch(`${apiUrl}/employee/employeePhoneNumber?empId=${formData3.accountManager}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${Token}`
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log("API response:", data);

                if (data.status === "success") {
                    setMobileNos(data.data.fullName);

                } else {
                    console.error("Failed to fetch phone number:", data.message);
                }
            } catch (error) {
                console.error("Error fetching mobile number:", error);
            }
        }

        if (formData3.accountManager) {
            getMobiles();
        }
    }, [formData3.accountManager]);



    //gift api 
    useEffect(() => {
        fetch(`${apiUrl}/gift/giftDropdown`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setGift(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
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



    // get aplicant
    useEffect(() => {
        const fetchUser = async () => {
            const Token = localStorage.getItem('Token');
            try {
                const url = `${apiUrl}/letter/getWelcomeLetterByApplicant?applicantId=${empid}`;
                const result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                const { data } = await result.json();
                setProfilePic(data.applicantImage);
                setProfilePic2(data.coApplicantImage);

                setFormData(prevFormData => ({
                    ...prevFormData,
                    ...data,
                }));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUser();
    }, [apiUrl, empid]);



    useEffect(() => {
        const fetchUser = async () => {
            try {
                const url = `${apiUrl}/applicant/getPaymentPlan/${formData.planId}?&type=${formData.paymentPlan}`;
                console.log(url);

                const result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                const { data } = await result.json();

                setProfilePic(data.brocehureImage);
                setProfilePics(data.paymentPlanImage);

                setFormData2((prevFormData) => ({
                    ...prevFormData,
                    ...data,
                }));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (formData.planId) {
            fetchUser();
        }
    }, [formData.planId, formData.paymentPlan]);



    const loadContent = () => {

        window.print();
        setContentPrinted(true);
    };




    return (
        <>

            <div className="page" >


                <div style={{ background: "#fff", margin: 0, padding: "50px 0" }}>


                    <table
                        align="center"

                        width={800}
                        border={0}
                        cellSpacing={0}
                        cellPadding={0}
                        style={{
                            background: "#fff",
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: 13,
                            borderRadius: 15
                        }}
                    >
                        <tbody>
                            <button
                                onClick={() => loadContent()}
                                title="Print"
                                className="hide-on-print"
                                style={{
                                    cursor: 'pointer',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                    color: '#333',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginLeft: '10px',
                                    marginTop: '5px'
                                }}
                            >
                                Print
                            </button>


                            <style>{`
                @media print {
                    .hide-on-print {
                        display: none !important;
                        marginTop: '-60px'
                    }
                }
            `}</style>



                            <tr>

                                <td>


                                    <br />
                                    <br />

                                    <br />
                                    <br />
                                    <br />
                                    <br />

                                    <br />
                                    <br />
                                    <br />
                                    <br />

                                    <br />

                                    <table
                                        align="center"
                                        width="100%"
                                        border={0}
                                        cellSpacing={0}
                                        cellPadding={0}
                                    >
                                        <tbody>


                                            <td colSpan={3}><strong>{formattedDate}</strong></td>


                                            <tr>
                                                <td style={{ lineHeight: 2 }}>
                                                    Dear Mr/Mrs/Ms.{" "} <span  ><strong style={{ fontSize: '16px' }}>{formData.name}</strong></span>

                                                    {" "}
                                                    ,<br />
                                                    <span style={{ fontSize: '16px' }}> Congratulations from Webkype on your new
                                                        investment in</span>{" "} <span ><strong>{formData.project}</strong></span>
                                                    {" "}
                                                    that too under{" "} <span><strong>{formData.company}</strong></span>
                                                    {" "}

                                                    <br />
                                                    <br />

                                                    <span style={{ fontSize: '16px' }}> It is a perfect choice and you are one of the few lucky ones
                                                        to get unit at such reasonable rates along with a free Gift.</span>
                                                    <br />
                                                    <br />
                                                    <span style={{ fontSize: '16px' }}> We at Webkype feel privileged to be part of your
                                                        great investment.</span>
                                                    <br />
                                                    <br />
                                                    <span style={{ fontSize: '16px' }}>We thank you for giving us an opportunity
                                                        to assist you in making this very investment. We sincerely
                                                        hope that you are satisfied with our services and will refer
                                                        us in your circle.</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ height: 30 }} />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4 style={{ marginTop: 0, marginBottom: 10 }}>
                                                        Your Lucky Draw Allotment is as Follows:
                                                    </h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table
                                                        align="center"
                                                        width="100%"
                                                        border={1}
                                                        cellSpacing={0}
                                                        cellPadding={0}
                                                        style={{ borderColor: "#fcfcfc" }}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px" }}>Ticket Id</td>
                                                                <td style={{ padding: "5px 10px" }}>
                                                                    <input
                                                                        type="text"
                                                                        name="ticketId"
                                                                        value={formData.ticketId || 'N/A'}
                                                                        disabled
                                                                        style={{
                                                                            border: "1px solid #cdcdd7",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "90%"
                                                                        }}
                                                                    />
                                                                </td>
                                                                <td style={{ padding: "5px 10px" }}>Project Name</td>
                                                                <td style={{ padding: "5px 10px" }}>
                                                                    <input
                                                                        type="text"
                                                                        name="projectId"
                                                                        value={formData.project || 'N/A'}
                                                                        disabled
                                                                        style={{
                                                                            border: "1px solid #cdcdd7",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "90%"

                                                                        }}
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px" }}>Unit Number</td>
                                                                <td style={{ padding: "5px 10px" }}>
                                                                    <input
                                                                        type="text"
                                                                        name="unitNo"
                                                                        value={formData.allotmentUnit || 'N/A'}
                                                                        disabled
                                                                        style={{
                                                                            border: "1px solid #cdcdd7",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "90%"
                                                                        }}
                                                                    />
                                                                </td>
                                                                <td style={{ padding: "5px 10px" }}>Free Gift</td>
                                                                <td style={{ padding: "5px 10px" }}>
                                                                    <input
                                                                        type="text"
                                                                        name="gift"
                                                                        value={formData.freeGift || 'N/A'}
                                                                        disabled
                                                                        style={{
                                                                            border: "1px solid #cdcdd7",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "90%"
                                                                        }}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ height: 30 }} />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4 style={{ marginTop: 0, marginBottom: 10 }}>
                                                        Brief details about the total cost of the unit and payment
                                                        plan are as follows:
                                                    </h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table
                                                        align="center"
                                                        width="100%"
                                                        style={{
                                                            borderCollapse: "collapse",
                                                            border: "1px solid #fcfcfc",
                                                        }}
                                                    >
                                                        <thead>
                                                            <tr style={{ backgroundColor: "#f2f2f2" }}>
                                                                <th style={{ padding: "5px 40px", border: "1px solid #ccc", textAlign: "center", whiteSpace: 'nowrap' }}>Client Name</th>
                                                                <th style={{ padding: "5px 20px", border: "1px solid #ccc", textAlign: "center", whiteSpace: 'nowrap' }}>Allotted Unit</th>
                                                                <th style={{ padding: "5px 20px", border: "1px solid #ccc", textAlign: "center", whiteSpace: 'nowrap' }}>Area ({formData.applicant?.schemeType})</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Payment Plan</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center", whiteSpace: 'nowrap' }}>BSP(Per <span style={{ marginLeft: 8, whiteSpace: 'nowrap' }}>
                                                                    {formData.applicant?.schemeType === 'Plot' || formData.applicant?.schemeType === 'Farmhouse'
                                                                        ? 'SQYD'
                                                                        : formData.applicant?.schemeType === 'Shop'
                                                                            ? 'SQ FT'
                                                                            : ''}
                                                                </span>)</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center", whiteSpace: 'nowrap' }}>EDC/IDC (Per <span style={{ marginLeft: 8, whiteSpace: 'nowrap' }}>
                                                                    {formData.applicant?.schemeType === 'Plot' || formData.applicant?.schemeType === 'Farmhouse'
                                                                        ? 'SQYD'
                                                                        : formData.applicant?.schemeType === 'Shop'
                                                                            ? 'SQ FT'
                                                                            : ''}
                                                                </span>)</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>PLC (in %)</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center", whiteSpace: 'nowrap' }}>Total Cost</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr>
                                                                <td style={{ padding: "5px 20px", border: "1px solid #ccc" }}>
                                                                    {formData.name || 'N/A'}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {formData.allotmentUnit || 'N/A'}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                                        {formData.area || 'N/A'}
                                                                        <span style={{ marginLeft: 8, whiteSpace: 'nowrap' }}>
                                                                            {formData.applicant?.schemeType === 'Plot' || formData.applicant?.schemeType === 'Farmhouse'
                                                                                ? 'SQYD'
                                                                                : formData.applicant?.schemeType === 'Shop'
                                                                                    ? 'SQ FT'
                                                                                    : ''}
                                                                        </span>
                                                                    </div>

                                                                    {" "}



                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {formData.paymentPlan}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>


                                                                    {formData.basicSalery || 'N/A'}


                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {formData.fixedCharges}
                                                                </td>
                                                                <td style={{ padding: "1px 30px", border: "1px solid #ccc" }}>

                                                                    {formData.plc || 'N/A'}


                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}> </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }} colSpan={4}></td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {formData.basicSalesAmount || "N/A"}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {formData.fixedChargesAmount || "N/A"}
                                                                </td>
                                                                <td style={{ padding: "5px 30px", border: "1px solid #ccc" }}>
                                                                    {formData.plcAmount || "N/A"}
                                                                </td>
                                                                <td style={{ padding: "5px 2px", border: "1px solid #ccc" }}>
                                                                    {formData.totalCost || 'N/A'}
                                                                </td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ height: 30 }} />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4 style={{ marginTop: 0, marginBottom: 10 }}>
                                                        PAYMENT SCHEDULE
                                                    </h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table
                                                        align="center"
                                                        width="100%"
                                                        border={1}
                                                        cellSpacing={0}
                                                        cellPadding={0}
                                                        style={{ borderColor: "#fcfcfc" }}
                                                    >
                                                        {formData.paymentPlan === 'FPP' && (
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                        On Booking
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.onBooking ? `${formData.onBooking}%` : ''}
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.onBookingAmount}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                        Pay Rs. {formData.emi24MonthAmount} in Easy 24 Month EMI ( Rs.{formData.perMonthEMI}/-)
                                                                    </td>


                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.perMonthEmiPer}%
                                                                    </td>

                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        )}
                                                        {formData.paymentPlan === 'PLP' && (
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                        On Booking
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.onBooking ? `${formData.onBooking}%` : ''}

                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.onBookingAmount}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData.days1PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.withIn60Days ? `${formData.withIn60Days}%` : ''}

                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.withIn60DayAmount}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData.days2PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.withIn90Days ? `${formData.withIn90Days}%` : ''}

                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.withIn90DayAmount}
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData.days3PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.withIn120Days ? `${formData.withIn120Days}%` : ''}

                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.withIn120DayAmount}
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData.days4PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.withIn150Days ? `${formData.withIn150Days}%` : ''}

                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.withIn150DayAmount}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData.days5PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.withIn180Days ? `${formData.withIn180Days}%` : ''}

                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.withIn180DayAmount}
                                                                    </td>
                                                                </tr>


                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData.days6PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.extraPerPLP1 ? `${formData.extraPerPLP1}%` : ''}

                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.extraValuePLP1}
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData.days7PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.extraPerPLP2 ? `${formData.extraPerPLP2}%` : ''}

                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.extraValuePLP2}
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData.days8PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.extraPerPLP3 ? `${formData.extraPerPLP3}%` : ''}

                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.extraValuePLP3}
                                                                    </td>
                                                                </tr>


                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.onRegistry ? `${formData.onRegistry}%` : ''}

                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.onRegistryAmount}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        )}
                                                        {formData.paymentPlan === 'DLP' && (
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                        On Booking
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>

                                                                        {formData.onBooking ? `${formData.onBooking}%` : ''}
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.onBookingAmount}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData.daysDLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px" }}>

                                                                        {formData.withIn30Days ? `${formData.withIn30Days}%` : ''}

                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.withIn30DayAmount}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.onRegistry ? `${formData.onRegistry}%` : ''}

                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        {formData.onRegistryAmount}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        )}
                                                    </table>

                                                </td>
                                            </tr>
                                            <br />
                                            <br />
                                            <br />




                                            <tr>
                                                <td>
                                                    <p style={{ marginTop: 0, marginBottom: 0 }}>
                                                        Request you to transfer the initial amount of <strong>10% ({formData.amount10Percentage})</strong> by{" "}<strong >{formData.InitialPaymentDate
                                                            ? new Date(formData.InitialPaymentDate)
                                                                .toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
                                                            : ''}
                                                        </strong>{" "}

                                                        in order to confirm allotment under <strong>{formData.company}</strong>.
                                                    </p>
                                                    <p style={{ marginTop: 0, marginBottom: 0 }}>
                                                        {" "}
                                                        Remaining initial amount need to be paid by{" "} <strong >{formData.remainingInitialAmountDate
                                                            ? new Date(formData.remainingInitialAmountDate)
                                                                .toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
                                                            : ''}
                                                        </strong>.


                                                    </p>
                                                    <p style={{ marginTop: 0, marginBottom: 0 }}>
                                                        {" "}
                                                        Note: Allotment under <strong >{formData.company}</strong> will only be
                                                        confirmed in case of <strong>10% ({formData.amount10Percentage})</strong>  payment received by  {" "} <strong>{formData.noteDate
                                                            ? new Date(formData.noteDate)
                                                                .toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
                                                            : ''}
                                                        </strong>.


                                                    </p>



                                                    <br />
                                                    <p style={{ marginTop: 0, marginBottom: 0 }}>
                                                        {" "}
                                                        We would also send an invitation letter to you in the
                                                        month of{" "} <strong >{formData.invitationLetterDate}</strong>
                                                        {" "}
                                                        as an honor and to present the gift to you at our Noida
                                                        office. Your presence in our office will be an honor for
                                                        us.
                                                    </p>
                                                    <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                        {" "}
                                                        Our team will also call you to invite you at our office
                                                        for Gift handover{" "} <strong>{formData.freeGift || 'N/A'}</strong>

                                                        {" "}

                                                        .
                                                    </p>
                                                </td>
                                            </tr>
                                            <br />

                                            <tr>
                                                <td>
                                                    <h4 style={{ marginTop: 0, marginBottom: 10 }}>
                                                        Payment can be transferred online using the following
                                                        details:
                                                    </h4>
                                                </td>
                                            </tr>



                                            <tr>
                                                <td>
                                                    <p>
                                                        <br />

                                                        <b>Bank Details</b>

                                                        <br />
                                                        <b>Account Name:</b> {formData.bankDetails?.accountName || 'N/A'}
                                                        <br />
                                                        <b>Account Number:</b> {formData.bankDetails?.accountNumber || 'N/A'}
                                                        <br />
                                                        <b>Bank Name:</b> {formData.bankDetails?.bankName || 'N/A'}
                                                        <br />
                                                        <b> Branch:</b> {formData.bankDetails?.branch || 'N/A'}
                                                        <br />
                                                        <b>IFSC:</b> {formData.bankDetails?.ifsc || 'N/A'}

                                                    </p>
                                                    <br />


                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p style={{ marginTop: 0, marginBottom: 120 }}>
                                                        {" "}
                                                        Your account manager is{" "} <strong >{formData.accountManager}</strong>

                                                        {" "}
                                                        and will be reachable on{" "}
                                                        <strong >{formData.accountManagerPhone}</strong>{" "}


                                                        for any queries.{" "}  {accountManagerName}
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p>
                                                        <b>With Best Regards</b>
                                                        <br />
                                                        Apoorva Srivastava
                                                        <br />
                                                        Accounts Manager
                                                        <br />
                                                        Off: 0120-4547484
                                                        <br />
                                                        Webkype
                                                        <br />
                                                        Web: www.amrealtysolutions.com
                                                        <br />
                                                        <b>Corporate Office:</b>
                                                        <br />
                                                        8th Floor, Magnus Tower,
                                                        <br />
                                                        Sector-73, Noida .Uttar pradesh- 201307
                                                        <br />
                                                        <b>Branch office:</b>
                                                        <br />
                                                        Flat No. G1, Plot No. 56A, Metro Prime,
                                                        <br />
                                                        Hanuman Vatika First, Ajmer Road, (Opp. GDC Club) Jaipur,
                                                        <br />
                                                        Rajasthan-302021
                                                        <br />
                                                        Contact No: 0120-4547484
                                                    </p>





                                                </td>
                                            </tr>
                                            <br />
                                            <br />

                                            <br />
                                            <br />
                                            <br />
                                            <br />

                                            <br />
                                            <br />
                                        </tbody>
                                    </table>
                                </td>
                                <td style={{ width: 30 }} />
                            </tr>
                            <tr>
                                <td colSpan={3} style={{ height: 60 }} />
                            </tr>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default WelcomesPrint




