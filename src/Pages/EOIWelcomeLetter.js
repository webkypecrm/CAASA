import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../assets/approva-signature.jpg'


const EOIWelcomeLetter = () => {
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
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [total1, setTotal1] = useState('');
    const [total2, setTotal2] = useState('');
    const [total3, setTotal3] = useState('');
    const [total4, setTotal4] = useState('');

    const [total5, setTotal5] = useState('');
    const [total6, setTotal6] = useState('');
    const [total7, setTotal7] = useState('');
    const [total8, setTotal8] = useState('');
    const [total9, setTotal9] = useState('');
    const [total10, setTotal10] = useState('');
    const [total11, setTotal11] = useState('');
    const [total12, setTotal12] = useState('');
    const [total13, setTotal13] = useState('');
    const [total14, setTotal14] = useState('');
    const [mobileNo, setMobileNo] = useState('')
    const [mobileNos, setMobileNos] = useState('')


    const [totalss, setTotalss] = useState('');
    const [totalss1, setTotalss1] = useState('');
    const [totalss2, setTotalss2] = useState('');
    const [totalss3, setTotalss3] = useState('');
    const [totalss4, setTotalss4] = useState('');
    const [totalss5, setTotalss5] = useState('');
    const [totalss6, setTotalss6] = useState('');
    const [totalss7, setTotalss7] = useState('');
    const [totalss8, setTotalss8] = useState('');
    const [totalss9, setTotalss9] = useState('');
    const [totalss10, setTotalss10] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [cinNumber, setCinNumber] = useState('');

    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };

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



    // super plan


    useEffect(() => {
        const areaValue = parseFloat(formData.totalCost);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue)) {
            // Calculate 30% of the total value

            const totalValues = (areaValue) * 0.30

            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss7(formattedTotalValue);
        }
    }, [formData.totalCost]);


    useEffect(() => {
        const areaValue = parseFloat(formData.totalCost);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue)) {
            // Calculate 50% of the total value


            const totalValues = (areaValue) * 0.50

            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss8(formattedTotalValue);
        }
    }, [formData.totalCost]);


    useEffect(() => {
        const areaValue = parseFloat(formData.totalCost);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue)) {
            // Calculate 20% of the total value
            const totalValues = (areaValue) * 0.20

            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss9(formattedTotalValue);
        }
    }, [formData.totalCost]);






    // dlp

    useEffect(() => {
        const areaValue = parseFloat(formData.totalCost);


        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue)) {
            // Calculate 15% of the total value


            const totalValues = (areaValue) * 0.15

            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss3(formattedTotalValue);


        }
    }, [formData.totalCost]);


    useEffect(() => {
        const areaValue = parseFloat(formData.totalCost);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue)) {
            // Calculate 15% of the total value


            const totalValues = (areaValue) * 0.10


            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss4(formattedTotalValue);


        }
    }, [formData.totalCost]);


    useEffect(() => {
        const areaValue = parseFloat(formData.totalCost);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue)) {
            // Calculate 15% of the total value


            const totalValues = (areaValue) * 0.05

            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss5(formattedTotalValue);


        }
    }, [formData.totalCost]);



    // plp plan

    useEffect(() => {
        const areaValue = parseFloat(formData.totalCost);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue)) {
            // Calculate 10% of the total value



            const totalValues = (areaValue) * 0.10


            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss(formattedTotalValue);
        }
    }, [formData.totalCost]);


    useEffect(() => {
        const areaValue = parseFloat(formData.totalCost);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue)) {
            // Calculate 5% of the total value


            const totalValues = (areaValue) * 0.05

            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss1(formattedTotalValue);

        }
    }, [formData.totalCost]);






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



    async function handleSubmit() {
        const url = `${apiUrl}/eoi/eoiWelcomeLetter?applicantId=${empid}`;

        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        });
        response = await response.json();

        if (response.status === "success") {
            toast.success(response.message);

        }
        else {
            toast.error(response.message);
        }
    }


    // get aplicant
    useEffect(() => {
        const fetchUser = async () => {
            const Token = localStorage.getItem('Token');
            try {
                const url = `${apiUrl}/eoi/getApplicantInfo/${empid}`;
                const result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                const { data } = await result.json();
                setProfilePic(data.applicantImage);
                setProfilePic2(data.coApplicantImage);
                setCompanyName(data?.project?.company?.companyName || "AM REALTY SOLUTIONS PVT.LTD")
                setCinNumber(data?.project?.company?.cinNumber || "xxxxx")

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

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '14px',
        margin: '4px',
        cursor: 'pointer',
        borderRadius: '8px',
        position: 'relative',
        left: '10px',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        whiteSpace: 'nowrap',
        marginTop: '-15px'
    };






    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
            <div className="page">

                <TopHeader />
                <Prince />
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
                            <tr>
                                <td colSpan={3} style={{ height: 20 }} />
                            </tr>
                            <td align="center" colSpan={3}><strong>{formattedDate}</strong></td>


                            <tr>
                                <td align="center" colSpan={3}>

                                    <h3 style={{ color: 'blue' }}>{companyName}</h3>
                                    <h4>CIN: {cinNumber}</h4>
                                    <hr style={{ borderTop: '2px solid black', width: '100%' }} />


                                    <h3>Welcome Letter</h3>
                                    <br />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: 30 }} />
                                <td>
                                    <table
                                        align="center"
                                        width="100%"
                                        border={0}
                                        cellSpacing={0}
                                        cellPadding={0}
                                    >
                                        <tbody>
                                            <tr>
                                                <td style={{ lineHeight: 2 }}>
                                                    Dear Mr/Mrs/Ms.{" "} <span style={{ color: '#007bff' }}>{`${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}`}</span>

                                                    {" "}
                                                    ,<br />
                                                    Congratulations from {companyName}



                                                    <br />
                                                    It is a perfect choice and you are one of the few lucky ones
                                                    to get unit at such reasonable rates.

                                                    <br />

                                                    We at Webkype feel privileged to be part of your
                                                    great investment.

                                                    <br />
                                                    We thank you for giving us an opportunity
                                                    to assist you in making this very investment. We sincerely
                                                    hope that you are satisfied with our services and will refer
                                                    us in your circle.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ height: 30 }} />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4 style={{ marginTop: 0, marginBottom: 10 }}>
                                                        Your Allotment is as Follows:
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
                                                                <td style={{ padding: "5px 10px" }}>Project Name: <span style={{ color: '#007bff' }}>{formData.projectId}</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px" }}>Unit Number: <span style={{ color: '#007bff' }}>{formData.inventory?.unitNo}</span></td>
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
                                                    <h5 style={{ marginTop: 0, marginBottom: 10 }}>
                                                        Brief details about the total cost of the unit and payment
                                                        plan are as follows:
                                                    </h5>
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
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Client Name</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Allotted Unit</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Area (SQ YD)</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Payment Plan</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    <span style={{ color: '#007bff' }}>{`${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}`}</span>
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    <span style={{ color: '#007bff' }}>{formData.inventory?.unitNo}</span>
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    <span style={{ color: '#007bff' }}> {formData.inventory?.size}</span>
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    <span style={{ color: '#007bff' }}>
                                                                        {formData.paymentPlan === 'SP' ? 'SUPER PLAN' : ''}
                                                                    </span>
                                                                    <span style={{ color: '#007bff' }}>
                                                                        {formData.paymentPlan === 'PLP' ? 'POSSESSION LINK PLAN' : ''}
                                                                    </span>
                                                                    <span style={{ color: '#007bff' }}>
                                                                        {formData.paymentPlan === 'DLP' ? 'DOWN PAYMENT PLAN' : ''}
                                                                    </span>

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
                                                        PAYMENT SCHEDULE (
                                                        <span style={{ color: '#007bff' }}>
                                                            {formData.paymentPlan === 'SP' ? 'SUPER PLAN' : ''}
                                                        </span>
                                                        <span style={{ color: '#007bff' }}>
                                                            {formData.paymentPlan === 'PLP' ? 'POSSESSION LINK PLAN' : ''}
                                                        </span>
                                                        <span style={{ color: '#007bff' }}>
                                                            {formData.paymentPlan === 'DLP' ? 'DOWN PAYMENT PLAN' : ''}
                                                        </span>
                                                        )
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
                                                        {formData.paymentPlan === 'SP' && (
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                        On Booking
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        30%
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                        Within 60 Days-
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        50%
                                                                    </td>



                                                                    <tr>

                                                                    </tr>
                                                                </tr>


                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                        on Registry
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        20%
                                                                    </td>



                                                                    <tr>

                                                                    </tr>
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
                                                                        10%
                                                                    </td>

                                                                </tr>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 15 Days-
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        10%
                                                                    </td>

                                                                </tr>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 45 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        10%
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 90 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 135 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>

                                                                </tr>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 180 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>

                                                                </tr>


                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 225 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 270 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 315 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>


                                                                </tr>



                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 360 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>


                                                                </tr>


                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 405 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>

                                                                </tr>


                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 450 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>


                                                                </tr>


                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 495 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 540 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 585 Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>

                                                                </tr>





                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        10%
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
                                                                        15%
                                                                    </td>

                                                                </tr>


                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 15 Days-
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        10%
                                                                    </td>

                                                                </tr>


                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 45 Days-
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        10%
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 90 Days-
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        10%
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 135 Days-
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        10%
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 180 Days-
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        10%
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 225 Days-
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        10%
                                                                    </td>

                                                                </tr>


                                                                <tr>

                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 270 Days-
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        10%
                                                                    </td>

                                                                </tr>


                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within 315 Days-
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        10%
                                                                    </td>

                                                                </tr>


                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        5%
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        )}
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ height: 20 }} />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                        Request you to transfer the initial amount of as per payment plan (
                                                        {formData.paymentPlan === 'SP' && (
                                                            <>
                                                                30%
                                                            </>

                                                        )}
                                                        {formData.paymentPlan === 'PLP' && (
                                                            <>
                                                                10%
                                                            </>

                                                        )}
                                                        {formData.paymentPlan === 'DLP' && (
                                                            <>
                                                                15%
                                                            </>

                                                        )}
                                                        ) immediately in order to confirm allotment. Remaining
                                                        amount need to be paid as per the payement schedule.
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ height: 20 }} />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4 style={{ marginTop: 0, marginBottom: 10 }}>
                                                        Payment can be transferred online using the following
                                                        details:
                                                    </h4>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{ height: 20 }} />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                        {" "}
                                                        Your account manager is{" "} <strong>{formData.employee?.fullName}</strong>
                                                        {" "}

                                                        and will be reachable on{" "}  <strong>{formData.employee?.phoneNumber}</strong> {" "}

                                                        for any queries.{" "}
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ height: 20 }} />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>
                                                        <b>Bank Details</b>
                                                        <br />
                                                        Account Name: {formData?.project?.company?.companyBank[0]?.bankAccount?.accountName || 'Maheshwari Oxygen Private Limited'}
                                                        <br />
                                                        Account Number: {formData?.project?.company?.companyBank[0]?.bankAccount?.accountNumber || '9346345325'}
                                                        <br />
                                                        Bank Name: {formData?.project?.company?.companyBank[0]?.bankAccount?.bankName || 'Kotak Mahindra BANK'}
                                                        <br />
                                                        Branch: {formData?.project?.company?.companyBank[0]?.bankAccount?.branch || 'SECTOR-51, NOIDA'}
                                                        <br />
                                                        IFSC: {formData?.project?.company?.companyBank[0]?.bankAccount?.ifsc || 'KKBK0000154'}
                                                    </p>
                                                    <br />

                                                </td>
                                            </tr>
                                            <a href={img} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '-30px', marginTop: '-40px' }}>
                                                <img src={img} alt="description" width="150" />
                                            </a>



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
                                                        {companyName}
                                                        <br />
                                                        Web: www.amrealtysolutions.com
                                                        <br />
                                                        <b>Corporate Office:</b>
                                                        <br />
                                                        8th Floor, Magnus Tower, Plot No. 6
                                                        <br />
                                                        Sector 73, Noida, Gautam Buddh Nagar,
                                                        <br />
                                                        Uttar Pradesh, 201307
                                                        <br />
                                                        <b>Branch office:</b>
                                                        <br />
                                                        Flat No. G1, Plot No. 56A, Metro Prime,
                                                        <br />
                                                        Hanuman Vatika First, Ajmer Road, (Opp. GDC Club) Jaipur,
                                                        <br />
                                                        Rajasthan-302021
                                                        <br />
                                                        Contact No: 9582212245
                                                    </p>
                                                    <br />
                                                    <br />

                                                    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                                                        <Link
                                                            className="btn ripple btn-info btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                                            to={`/welcome-letter-print/${empid}`}
                                                            style={{ marginLeft: '15px', marginRight: '10px' }}
                                                        >
                                                            Print On Letter Head
                                                        </Link>

                                                        <button
                                                            className="btn ripple btn-info btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                                            onClick={handleSubmit}
                                                            style={{ marginLeft: '15px', marginRight: '10px' }}
                                                        >
                                                            Send To Customer Email
                                                        </button>


                                                    </div>




                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td style={{ width: 30 }} />
                            </tr>
                            <tr>
                                <td colSpan={3} style={{ height: 20 }} />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default EOIWelcomeLetter

