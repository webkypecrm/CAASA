import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LetterApplicants = () => {
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
    const [mobileNo, setMobileNo] = useState('');
    const [mobileNos, setMobileNos] = useState('');
    const [plc1, setPlc1] = useState('');
    const [plc2, setPlc2] = useState('');
    const [plc3, setPlc3] = useState('');
    const [plc4, setPlc4] = useState('');
    const [plc5, setPlc5] = useState('');
    const [hovered, setHovered] = useState(false);
    const [loadings, setLoadings] = useState(false);

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
        // Parse the area and basic salary values to floats
        const area = parseFloat(formData.area);
        const basicSalary = parseFloat(formData3.basicSalery);

        // Check if both values are valid numbers
        if (!isNaN(area) && !isNaN(basicSalary)) {
            // Calculate the total value by multiplying area with basic salary
            const totalValue = area * basicSalary;

            // Format the total value to two decimal places
            let formattedTotalValue = totalValue.toFixed(0);
            // Remove '.00' if it exists
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }
            // Set the calculated total to plc1 state
            setPlc1(formattedTotalValue);
        } else {
            // If any value is not a number, set plc1 to null
            setPlc1(null);
        }
    }, [formData3.basicSalery, formData.area]);




    useEffect(() => {
        // Parse the area and fixed charges values to floats
        const area = parseFloat(formData.area);
        const fixedCharges = parseFloat(formData3.fixedCharges);

        // Check if both values are valid numbers
        if (!isNaN(area) && !isNaN(fixedCharges)) {
            // Calculate the total value by multiplying area with fixed charges
            const totalValue = area * fixedCharges;

            // Format the total value to two decimal places
            let formattedTotalValue = totalValue.toFixed(0);
            // Remove '.00' if it exists
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }
            // Set the calculated total to plc2 state
            setPlc2(formattedTotalValue);
        } else {
            // If any value is not a number, set plc2 to null
            setPlc2(null);
        }
    }, [formData3.fixedCharges, formData.area]);




    useEffect(() => {
        // Parse plc1 to a float
        const areaValue = parseFloat(plc1);

        // Extract the value from formData.plcdd
        const plcString = formData.plcdd;

        // Check if areaValue is a valid number and plcString is defined
        if (!isNaN(areaValue) && plcString) {
            // Extract the numerical value from the PLC string (e.g., "cornerPlc(7)" -> 7)
            const numberMatch = plcString.match(/\((\d+)\)/);

            if (numberMatch && numberMatch[1]) {
                const percentage = parseFloat(numberMatch[1]); // Extracted number as a float

                // Calculate the percentage of areaValue
                const percentageValue = (areaValue * percentage) / 100;

                // Format the percentage value to remove trailing decimals
                const formattedPercentageValue = percentageValue.toFixed(0);

                // Set the calculated value to the state
                setPlc3(formattedPercentageValue);
            }
        }
    }, [plc1, formData.plcdd]);






    useEffect(() => {
        const areaValue = parseFloat(plc1) || 0;
        const areaValues = parseFloat(plc2) || 0;
        const areaValuess = parseFloat(plc3) || 0;

        // Calculate the total by summing up the parsed values
        const totalValue = areaValue + areaValues + areaValuess;

        // Format the total value as an integer (without decimals)
        const formattedTotalValue = Math.round(totalValue).toString();

        // Update state only if the formatted total is non-zero
        setPlc4(formattedTotalValue !== '0' ? formattedTotalValue : '00');

        console.log('Total:', formattedTotalValue);
    }, [plc1, plc2, plc3]);




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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoadings(true);
            const formDataToSend = new FormData();

            for (const key in formData3) {
                if (formData3[key] !== null) {
                    formDataToSend.append(key, formData3[key]);
                }
            }
            const url = `${apiUrl}/letter/addWelcomeLetter?=&applicantId=${empid}`;
            const response = await fetch(url, {
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

            setFormData3(initialFormData3);
            toast.success(response2.message);
            navigate(`/Inventory-details/${empid}`);

        } catch (error) {
            toast.error(error.message);

        }
        finally {
            setLoadings(false);
          }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleChange2 = (event) => {
        const { name, value } = event.target;
        setFormData3((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    // get aplicant
    useEffect(() => {
        const fetchUser = async () => {
            const Token = localStorage.getItem('Token');
            try {
                const url = `${apiUrl}/applicant/getApplicantInfo/${empid}`;
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


    // fpp plan
    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.onBookingPerFPP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal1(formattedPercentageValue);


        } else {

            setTotal1(null);
        }
    }, [plc4, formData2.onBookingPerFPP]);

    //DLP plan

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.onBookingPerDLP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal2(formattedPercentageValue);


        } else {

            setTotal2(null);
        }
    }, [plc4, formData2.onBookingPerDLP]);

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.withIn30PerDLP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal3(formattedPercentageValue);


        } else {

            setTotal3(null);
        }
    }, [plc4, formData2.withIn30PerDLP]);

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.restOnRegistryPerDLP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal4(formattedPercentageValue);


        } else {

            setTotal4(null);
        }
    }, [plc4, formData2.restOnRegistryPerDLP]);

    //PLP Plan

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.onBookingPerPLP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal5(formattedPercentageValue);


        } else {

            setTotal5(null);
        }
    }, [plc4, formData2.onBookingPerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.withIn60PerPLP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal6(formattedPercentageValue);


        } else {

            setTotal6(null);
        }
    }, [plc4, formData2.withIn60PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.withIn90PerPLP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal7(formattedPercentageValue);


        } else {

            setTotal7(null);
        }
    }, [plc4, formData2.withIn90PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.withIn120PerPLP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal8(formattedPercentageValue);


        } else {

            setTotal8(null);
        }
    }, [plc4, formData2.withIn120PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.withIn150PerPLP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal9(formattedPercentageValue);


        } else {

            setTotal9(null);
        }
    }, [plc4, formData2.withIn150PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.withIn180PerPLP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal10(formattedPercentageValue);


        } else {

            setTotal10(null);
        }
    }, [plc4, formData2.withIn180PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.extraPerPLP1);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal11(formattedPercentageValue);


        } else {

            setTotal11(null);
        }
    }, [plc4, formData2.extraPerPLP1]);

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.extraPerPLP2);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal12(formattedPercentageValue);


        } else {

            setTotal12(null);
        }
    }, [plc4, formData2.extraPerPLP2]);

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.extraPerPLP3);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal13(formattedPercentageValue);


        } else {

            setTotal13(null);
        }
    }, [plc4, formData2.extraPerPLP3]);

    useEffect(() => {

        const areaValue = parseFloat(plc4);
        const priceValue = parseFloat(formData2.restOnRegistryPerPLP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate the percentage
            const percentageValue = areaValue * (priceValue / 100);

            // Format the percentage value
            let formattedPercentageValue = percentageValue.toFixed(2);
            if (formattedPercentageValue.endsWith('.00')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -3);
            } else if (formattedPercentageValue.endsWith('0')) {
                formattedPercentageValue = formattedPercentageValue.slice(0, -1);
            }

            setTotal14(formattedPercentageValue);


        } else {

            setTotal14(null);
        }
    }, [plc4, formData2.restOnRegistryPerPLP]);



    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, name: `${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}` }));
    }, [formData.applicantFirstName, formData.applicantMiddleName, formData.applicantLastName]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, company: formData.schemeId }));
    }, [formData.schemeId]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, project: formData.projectId }));
    }, [formData.projectId]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, ticketId: formData.ticketId }));
    }, [formData.ticketId]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, projectName: formData.projectId }));
    }, [formData.projectId]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, unitNumber: formData.unitNo }));
    }, [formData.unitNo]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, freeGift: formData.gift }));
    }, [formData.gift]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, clientName: `${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}` }));
    }, [formData.applicantFirstName, formData.applicantMiddleName, formData.applicantLastName]);


    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, allotmentUnit: formData.unitNo }));
    }, [formData.unitNo]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, area: formData.area }));
    }, [formData.area]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, paymentPlan: formData.paymentPlan }));
    }, [formData.paymentPlan]);

    // Sync formData.bsp to formData3.basicSalery
    useEffect(() => {
        if (formData.paymentPlan === 'PLP') {
            setFormData3((prevFormData3) => ({
                ...prevFormData3,
                basicSalery: formData.plan.basicPricePLP,
            }));
        }
    }, [formData.plan.basicPricePLP, formData.paymentPlan]);

    // useEffect to sync formData.plan.basicPriceFPP to formData3.basicSalery
    useEffect(() => {
        if (formData.paymentPlan === 'FPP') {
            setFormData3((prevFormData3) => ({
                ...prevFormData3,
                basicSalery: formData.plan.basicPriceFPP,
            }));
        }
    }, [formData.plan.basicPriceFPP, formData.paymentPlan]);

    // useEffect to sync formData.plan.basicPriceDLP to formData3.basicSalery
    useEffect(() => {
        if (formData.paymentPlan === 'DLP') {
            setFormData3((prevFormData3) => ({
                ...prevFormData3,
                basicSalery: formData.plan.basicPriceDLP,
            }));
        }
    }, [formData.plan.basicPriceDLP, formData.paymentPlan]);

    // Handle the change for the input field
    const handleChangePlan = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => {
            const updatedPlan = { ...prevState.plan };

            // Update the correct price based on the selected payment plan
            if (prevState.paymentPlan === 'PLP') {
                updatedPlan.basicPricePLP = value;
            } else if (prevState.paymentPlan === 'FPP') {
                updatedPlan.basicPriceFPP = value;
            } else if (prevState.paymentPlan === 'DLP') {
                updatedPlan.basicPriceDLP = value;
            }

            return {
                ...prevState,
                bsp: value, // Sync bsp with the current input value
                plan: updatedPlan,
            };
        });
    };


    // Handle change in input field for fixedCharges
    const handleChangeFixed = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            plan: {
                ...prevState.plan,
                [name]: value,  // Update only fixedCharges inside plan
            },
        }));
    };

    // Sync formData.fixedCharges with formData3
    useEffect(() => {
        // Only update formData3 if the value of fixedCharges has changed
        if (formData.plan.fixedCharges !== formData3.fixedCharges) {
            setFormData3((prevFormData3) => ({
                ...prevFormData3,
                fixedCharges: formData.plan.fixedCharges,
            }));
        }
    }, [formData.plan.fixedCharges, formData3.fixedCharges]);


    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, plc: formData.plcdd }));
    }, [formData.plcdd]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, onBooking: formData2.onBookingPerFPP }));
    }, [formData2.onBookingPerFPP]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, onBookingAmount: total1 }));
    }, [total1]);

    //plp 
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, onBooking: formData2.onBookingPerPLP }));
    }, [formData2.onBookingPerPLP]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, onBookingAmount: total5 }));
    }, [total5]);






    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn30Days: formData2.withIn60PerPLP ? `${formData2.withIn60PerPLP}` : '' }));
    }, [formData2.withIn60PerPLP ? `${formData2.withIn60PerPLP}` : '']);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn60Days: formData2.withIn60PerPLP }));
    }, [formData2.withIn60PerPLP]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn60DayAmount: total6 }));
    }, [total6]);




    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, basicSalesAmount: plc1 }));
    }, [plc1]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, fixedChargesAmount: plc2 }));
    }, [plc2]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, plcAmount: plc3 }));
    }, [plc3]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, totalCost: plc4 }));
    }, [plc4]);


    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn90Days: formData2.withIn90PerPLP }));
    }, [formData2.withIn90PerPLP]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn90DayAmount: total7 }));
    }, [total7]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn120Days: formData2.withIn120PerPLP }));
    }, [formData2.withIn120PerPLP]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn120DayAmount: total8 }));
    }, [total8]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn150Days: formData2.withIn150PerPLP }));
    }, [formData2.withIn150PerPLP]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn150DayAmount: total9 }));
    }, [total9]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn180Days: formData2.withIn180PerPLP }));
    }, [formData2.withIn180PerPLP]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn180DayAmount: total10 }));
    }, [total10]);



    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, extraPerPLP1: formData2.extraPerPLP1 }));
    }, [formData2.extraPerPLP1]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, extraValuePLP1: total11 }));
    }, [total11]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, extraPerPLP2: formData2.extraPerPLP2 }));
    }, [formData2.extraPerPLP2]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, extraValuePLP2: total12 }));
    }, [total12]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, extraPerPLP3: formData2.extraPerPLP3 }));
    }, [formData2.extraPerPLP3]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, extraValuePLP3: total13 }));
    }, [total13]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, onRegistry: formData2.restOnRegistryPerPLP }));
    }, [formData2.restOnRegistryPerPLP]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, onRegistryAmount: total14 }));
    }, [total14]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, days1PLP: formData2.days1PLP }));
    }, [formData2.days1PLP]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, days2PLP: formData2.days2PLP }));
    }, [formData2.days2PLP]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, days3PLP: formData2.days3PLP }));
    }, [formData2.days3PLP]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, days4PLP: formData2.days4PLP }));
    }, [formData2.days4PLP]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, days5PLP: formData2.days5PLP }));
    }, [formData2.days5PLP]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, days6PLP: formData2.days6PLP }));
    }, [formData2.days6PLP]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, days7PLP: formData2.days7PLP }));
    }, [formData2.days7PLP]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, days8PLP: formData2.days8PLP }));
    }, [formData2.days8PLP]);

    //DLP

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, onBooking: formData2.onBookingPerDLP }));
    }, [formData2.onBookingPerDLP]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, daysDLP: formData2.daysDLP}));
    }, [formData2.daysDLP]); 
    useEffect(() => { 
        setFormData3(prevFormData3 => ({ ...prevFormData3, onBookingAmount: total2 }));
    }, [total2]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn30Days: formData2.withIn30PerDLP }));
    }, [formData2.withIn30PerDLP]);
    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, withIn30DayAmount: total3 }));
    }, [total3]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, onRegistry: formData2.restOnRegistryPerDLP }));
    }, [formData2.restOnRegistryPerDLP]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, onRegistryAmount: total4 }));
    }, [total4]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, date: formattedDate }));
    }, [formattedDate]);

    useEffect(() => {
        setFormData3(prevFormData3 => ({ ...prevFormData3, size: formData.area }));
    }, [formData.area]);






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
                        width={1000}
                        border={0}
                        cellSpacing={0}
                        cellPadding={0}
                        style={{
                            background: "#f7f7f7",
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

                                    <a>
                                        <img border={0} width={150} src="https://amrealty.webkype.com/assets/img/brand/logo.png" />
                                    </a>
                                    <br />
                                    <h3>Welcome Letter</h3>
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
                                                    Dear Mr/Mrs/Ms.{" "}
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={`${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}`}
                                                        disabled

                                                        style={{
                                                            border: "1px solid #cdcdd7",
                                                            padding: 7,
                                                            borderRadius: 5
                                                        }}
                                                    />
                                                    {" "}
                                                    ,<br />
                                                    Congratulations from AM Realty Solutions on your new
                                                    investment in{" "}
                                                    <input
                                                        type="text"
                                                        name="schemeId"
                                                        value={formData.projectId}
                                                        disabled
                                                        style={{
                                                            border: "1px solid #cdcdd7",
                                                            padding: 7,
                                                            borderRadius: 5,
                                                            width: 250
                                                        }}
                                                    />{" "}
                                                    that too under{" "} <span style={{color: 'blue'}}>{formData.schemeId}</span>
                                                    {" "}
                                                    It is a perfect choice and you are one of the few lucky ones
                                                    to get unit at such reasonable rates along with a free Gift.
                                                    We at AM Realty Solutions feel privileged to be part of your
                                                    great investment. We thank you for giving us an opportunity
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
                                                                        value={formData.ticketId}
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
                                                                        value={formData.projectId}
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
                                                                        value={formData.unitNo}
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
                                                                        value={formData.gift}
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
                                                            <th style={{ padding: "5px 40px", border: "1px solid #ccc", textAlign: "center",whiteSpace: 'nowrap' }}>Client Name</th>
                                                                <th style={{ padding: "5px 20px", border: "1px solid #ccc", textAlign: "center",whiteSpace: 'nowrap' }}>Allotted Unit</th>
                                                                <th style={{ padding: "5px 20px", border: "1px solid #ccc", textAlign: "center", whiteSpace: 'nowrap' }}>Area ({formData.schemeType})</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Payment Plan</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Basic Sales Price (Per Sq. Ft)</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>EDC/IDC (Per Sq. Ft)</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>PLC (in %)</th>
                                                                <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Total Cost</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ padding: "5px 20px", border: "1px solid #ccc" }}>
                                                                    <input
                                                                        type="text"
                                                                        value={`${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}`}
                                                                        disabled
                                                                        style={{
                                                                            border: "1px solid #ccc",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "100%"
                                                                        }}
                                                                    />
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    <input
                                                                        type="text"
                                                                        value={formData.unitNo}
                                                                        disabled
                                                                        style={{
                                                                            border: "1px solid #ccc",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "100%"
                                                                        }}
                                                                    />
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                                        <input
                                                                            type="text"
                                                                            name='area'
                                                                            value={formData.area}
                                                                            onChange={handleChange}
                                                                            disabled
                                                                            style={{
                                                                                border: "1px solid #ccc",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "80%"
                                                                            }}
                                                                        />
                                                                        <span style={{ marginLeft: 8, whiteSpace: 'nowrap' }}>
                                                                            {formData.schemeType === 'Plot' || formData.schemeType === 'Farmhouse'
                                                                                ? 'SQYD'
                                                                                : formData.schemeType === 'Shop'
                                                                                    ? 'SQ FT'
                                                                                    : ''}
                                                                        </span>
                                                                    </div>

                                                                    {" "}



                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    <select
                                                                        className="form-control"
                                                                        name="paymentPlan"
                                                                        value={formData.paymentPlan}
                                                                        onChange={handleChange}

                                                                        style={{
                                                                            border: "1px solid #ccc",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "80%"
                                                                        }}
                                                                    >
                                                                        <option value="">Select</option>
                                                                        <option>FPP</option>
                                                                        <option>PLP</option>
                                                                        <option>DLP</option>
                                                                    </select>
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>


                                                                    <input
                                                                        type="text"
                                                                        name="bsp"
                                                                        onChange={handleChangePlan}
                                                                        disabled
                                                                        value={
                                                                            formData.paymentPlan === 'PLP'
                                                                                ? formData.plan.basicPricePLP
                                                                                : formData.paymentPlan === 'FPP'
                                                                                    ? formData.plan.basicPriceFPP
                                                                                    : formData.paymentPlan === 'DLP'
                                                                                        ? formData.plan.basicPriceDLP
                                                                                        : ''
                                                                        }
                                                                        style={{
                                                                            border: '1px solid #ccc',
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: '80%',
                                                                        }}
                                                                    />


                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    <input
                                                                        type="text"
                                                                        value={formData.plan.fixedCharges}
                                                                        name="fixedCharges"
                                                                        onChange={handleChangeFixed}

                                                                        style={{
                                                                            border: "1px solid #ccc",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "80%",
                                                                        }}
                                                                    />
                                                                </td>
                                                                <td style={{ padding: "1px 30px", border: "1px solid #ccc" }}>

                                                                    <select
                                                                        name="plcdd"
                                                                        value={formData.plcdd || ''}
                                                                        onChange={handleChange}

                                                                        style={{
                                                                            border: "1px solid #ccc",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "135%"
                                                                        }}
                                                                    >
                                                                        <option value="0%">Select PLC</option>
                                                                        <option value={`cornerPlc(${formData.plan.cornerPlc})`}>
                                                                            cornerPlc({formData.plan.cornerPlc})
                                                                        </option>
                                                                        <option value={`mainRoadPlc(${formData.plan.mainRoadPlc})`}>
                                                                            mainRoadPlc({formData.plan.mainRoadPlc})
                                                                        </option>
                                                                        <option value={`facultyParkPlc(${formData.plan.facultyParkPlc})`}>
                                                                            facultyParkPlc({formData.plan.facultyParkPlc})
                                                                        </option>
                                                                    </select>


                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}> </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }} colSpan={4}></td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    <input
                                                                        type="text"
                                                                        value={plc1}
                                                                        name="bspAmount"
                                                                        // onChange={handleChange}
                                                                        style={{
                                                                            border: "1px solid #ccc",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "80%"
                                                                        }}
                                                                        disabled
                                                                    />
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    <input
                                                                        type="text"
                                                                        value={plc2}
                                                                        name="fixedAmount"
                                                                        // onChange={handleChange}
                                                                        style={{
                                                                            border: "1px solid #ccc",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "80%"
                                                                        }}
                                                                        disabled
                                                                    />
                                                                </td>
                                                                <td style={{ padding: "5px 30px", border: "1px solid #ccc" }}>
                                                                    <input
                                                                        type="text"
                                                                        value={plc3 || "00"}
                                                                        name="plcAmount"
                                                                        onChange={handleChange}
                                                                        style={{
                                                                            border: "1px solid #ccc",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "135%"
                                                                        }}
                                                                        disabled
                                                                    />
                                                                </td>
                                                                <td style={{ padding: "5px 2px", border: "1px solid #ccc" }}>
                                                                    <input
                                                                        type="text"
                                                                        value={plc4 || '00'}

                                                                        // onChange={handleChange}
                                                                        style={{
                                                                            border: "1px solid #ccc",
                                                                            padding: 7,
                                                                            borderRadius: 5,
                                                                            width: "100%"
                                                                        }}
                                                                        disabled
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
                                                                        <input
                                                                            type="text"
                                                                            value={formData2.onBookingPerFPP ? `${formData2.onBookingPerFPP}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={total1}
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
                                                        )}
                                                        {formData.paymentPlan === 'PLP' && (
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                        On Booking
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"

                                                                            value={formData2.onBookingPerPLP ? `${formData2.onBookingPerPLP}%` : ''}


                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"

                                                                            value={total5}
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
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData2.days1PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={formData2.withIn60PerPLP ? `${formData2.withIn60PerPLP}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={total6}
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
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData2.days2PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={formData2.withIn90PerPLP ? `${formData2.withIn90PerPLP}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={total7}
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
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData2.days3PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={formData2.withIn120PerPLP ? `${formData2.withIn120PerPLP}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={total8}
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
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData2.days4PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={formData2.withIn150PerPLP ? `${formData2.withIn150PerPLP}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={total9}
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
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData2.days5PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={formData2.withIn180PerPLP ? `${formData2.withIn180PerPLP}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={total10}
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
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData2.days6PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={formData2.extraPerPLP1 ? `${formData2.extraPerPLP1}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={total11}
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
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData2.days7PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={formData2.extraPerPLP2 ? `${formData2.extraPerPLP2}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={total12}
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
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData2.days8PLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={formData2.extraPerPLP3 ? `${formData2.extraPerPLP3}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={total13}
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
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={formData2.restOnRegistryPerPLP ? `${formData2.restOnRegistryPerPLP}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={total14}
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
                                                        )}
                                                        {formData.paymentPlan === 'DLP' && (
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                        On Booking
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"

                                                                            value={formData2.onBookingPerDLP ? `${formData2.onBookingPerDLP}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"

                                                                            value={total2}
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
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        Within {formData2.daysDLP} Days
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={formData2.withIn30PerDLP ? `${formData2.withIn30PerDLP}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={total3}
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
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={formData2.restOnRegistryPerDLP ? `${formData2.restOnRegistryPerDLP}%` : ''}
                                                                            style={{
                                                                                border: "1px solid #cdcdd7",
                                                                                padding: 7,
                                                                                borderRadius: 5,
                                                                                width: "90%"
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                        <input
                                                                            type="text"
                                                                            value={total4}
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
                                                        Request you to transfer the initial amount of {formData.paymentPlan === 'FPP' && (
                                                            <>
                                                                {formData2.onBookingPerFPP ? `${formData2.onBookingPerFPP}%` : ''}
                                                            </>

                                                        )}
                                                        {formData.paymentPlan === 'PLP' && (
                                                            <>
                                                                {formData2.onBookingPerPLP ? `${formData2.onBookingPerPLP}%` : ''}
                                                            </>

                                                        )}
                                                        {formData.paymentPlan === 'DLP' && (
                                                            <>
                                                                {formData2.onBookingPerDLP ? `${formData2.onBookingPerDLP}%` : ''}
                                                            </>

                                                        )} by{" "}
                                                        <input
                                                            type="date"
                                                            name="InitialPaymentDate"
                                                            value={formData3.InitialPaymentDate}
                                                            onChange={handleChange2}
                                                            style={{
                                                                border: "1px solid #cdcdd7",
                                                                padding: 7,
                                                                borderRadius: 5
                                                            }}
                                                            min={new Date().toISOString().split("T")[0]}
                                                        />
                                                        in order to confirm allotment under <span style={{ color: 'blue' }}>{formData.projectId}</span>.
                                                    </p>
                                                    <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                        {" "}
                                                        Remaining initial amount need to be paid by{" "}
                                                        <input
                                                            type="date"
                                                            name="remainingInitialAmountDate"
                                                            value={formData3.remainingInitialAmountDate}
                                                            onChange={handleChange2}
                                                            style={{
                                                                border: "1px solid #cdcdd7",
                                                                padding: 7,
                                                                borderRadius: 5
                                                            }}
                                                            min={new Date().toISOString().split("T")[0]}
                                                        />
                                                        .
                                                    </p>
                                                    <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                        {" "}
                                                        Note: Allotment under <span style={{ color: 'blue' }}>{formData.projectId}</span> will only be
                                                        confirmed in case of 10% payment received by{" "}
                                                        <input
                                                            type="date"
                                                            name="noteDate"
                                                            value={formData3.noteDate}
                                                            onChange={handleChange2}
                                                            style={{
                                                                border: "1px solid #cdcdd7",
                                                                padding: 7,
                                                                borderRadius: 5
                                                            }}
                                                            min={new Date().toISOString().split("T")[0]}
                                                        />
                                                        .
                                                    </p>
                                                    <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                        {" "}
                                                        We would also send an invitation letter to you in the
                                                        month of{" "}
                                                        <input
                                                            type="text"
                                                            name="invitationLetterDate"
                                                            value={formData3.invitationLetterDate}
                                                            onChange={handleChange2}

                                                            placeholder="Enter Month & Year (November-2018)"
                                                            style={{
                                                                border: "1px solid #cdcdd7",
                                                                padding: 7,
                                                                borderRadius: 5,
                                                                width: 250
                                                            }}
                                                        />{" "}
                                                        as an honor and to present the gift to you at our Noida
                                                        office. Your presence in our office will be an honor for
                                                        us.
                                                    </p>
                                                    <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                        {" "}
                                                        Our team will also call you to invite you at our office
                                                        for Gift handover{" "}<strong>{formData.gift}</strong>

                                                        {" "}

                                                        .
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
                                                <td>
                                                    <select
                                                        name="bank"
                                                        value={formData3.bank}
                                                        onChange={handleChange2}
                                                        style={{
                                                            border: "1px solid #cdcdd7",
                                                            padding: 7,
                                                            borderRadius: 5
                                                        }}
                                                    >
                                                        <option value="">Select Bank Account</option>
                                                        {project.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ height: 20 }} />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                        {" "}
                                                        Your account manager is{" "}
                                                        <select
                                                            name="accountManager"
                                                            value={formData3.accountManager}
                                                            onChange={handleChange2}
                                                            style={{
                                                                border: "1px solid #cdcdd7",
                                                                padding: 7,
                                                                borderRadius: 5
                                                            }}
                                                        >
                                                            <option value=''>Select</option>
                                                            {reportingBossA.map((option, index) => (
                                                                <option key={option.id} value={option.id}>
                                                                    {option.fullName}
                                                                </option>
                                                            ))}
                                                        </select>{" "}

                                                        and will be reachable on{" "}
                                                        <input
                                                            type="text"
                                                            value={mobileNo}
                                                            style={{
                                                                border: "1px solid #cdcdd7",
                                                                padding: 7,
                                                                borderRadius: 5
                                                            }}
                                                        />{" "}
                                                        for any queries.{" "}  {accountManagerName}
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
                                                        Title: {employee.title}
                                                        <br />
                                                        Account Name: {employee.accountName}
                                                        <br />
                                                        Account Number: {employee.accountNumber}
                                                        <br />
                                                        Bank Name: {employee.bankName}
                                                        <br />
                                                        Branch: {employee.branch}
                                                        <br />
                                                        IFSC: {employee.ifsc}

                                                    </p>
                                                    <br />

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
                                                        AM Realty Solutions
                                                        <br />
                                                        Web: www.amrealtysolutions.com
                                                        <br />
                                                        <b>Corporate Office:</b>
                                                        <br />
                                                        8th Floor, Magnus Tower,
                                                        <br />
                                                        Sector-73, Noida- 201307 Up
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
                                                    <button
                                                        className="btn ripple btn-info btn-rounded  btn-rounded-sm mb-3 btn-fullWidth"
                                                        onClick={handleOpenModal4}

                                                    >
                                                        View
                                                    </button>

                                                    <div
                                                        className={`modal ${isModalOpen4 ? 'show' : ''}`}
                                                        style={{
                                                            display: isModalOpen4 ? 'block' : 'none',

                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                            zIndex: 9999,
                                                            overflow: 'auto',
                                                        }}
                                                        tabIndex="-1"
                                                        role="dialog"
                                                    >
                                                        <div className="modal-dialog modal-dialog-centered modal-lg-500" style={{ maxWidth: '2000%' }}>
                                                            <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                                                <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                                                    <h5 className="modal-title">View Welcome Latter</h5>
                                                                    <button
                                                                        type="button"
                                                                        className="close"
                                                                        data-dismiss="modal"
                                                                        aria-label="Close"
                                                                        onClick={handleCloseModal4}
                                                                        style={{ outline: 'none', cursor: 'pointer' }}
                                                                    >
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px' }}>
                                                                    <form style={{ width: '100%' }}>
                                                                        <div >
                                                                            <table
                                                                                align="center"
                                                                                width={800}
                                                                                border={0}
                                                                                cellSpacing={0}
                                                                                cellPadding={0}

                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td colSpan={3} style={{ height: 20 }} />
                                                                                    </tr>
                                                                                    <td align="center" colSpan={3}><strong>{formattedDate}</strong></td>


                                                                                    <tr>
                                                                                        <td align="center" colSpan={3}>

                                                                                            <a href="">
                                                                                                <img border={0} width={150} src="https://amrealty.webkype.com/assets/img/brand/logo.png" />
                                                                                            </a>
                                                                                            <br />
                                                                                            <h3>Generate Welcome Letter</h3>
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
                                                                                                            Dear Mr/Mrs/Ms.{" "}
                                                                                                            <span style={{ color: 'blue' }}>{`${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}`}</span>
                                                                                                            {" "}
                                                                                                            ,<br />
                                                                                                            Congratulations from AM Realty Solutions on your new
                                                                                                            investment in{" "}
                                                                                                            <span style={{ color: 'blue' }}> {formData.schemeId}{" "} </span>
                                                                                                            that too under{" "}
                                                                                                            <span style={{ color: 'blue' }}> {formData.projectId}</span> {" "}
                                                                                                            It is a perfect choice and you are one of the few lucky ones
                                                                                                            to get unit at such reasonable rates along with a free Gift.
                                                                                                            We at AM Realty Solutions feel privileged to be part of your
                                                                                                            great investment. We thank you for giving us an opportunity
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
                                                                                                                            <span style={{ color: 'blue' }}>{formData.ticketId}</span>
                                                                                                                        </td>
                                                                                                                        <td style={{ padding: "5px 10px" }}>Project Name</td>
                                                                                                                        <td style={{ padding: "5px 10px" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{formData.projectId}</span>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td style={{ padding: "5px 10px" }}>Unit Number</td>
                                                                                                                        <td style={{ padding: "5px 10px" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{formData.unitNo}</span>
                                                                                                                        </td>
                                                                                                                        <td style={{ padding: "5px 10px" }}>Free Gift</td>
                                                                                                                        <td style={{ padding: "5px 10px" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{formData.gift}</span>
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
                                                                                                                        <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Client Name</th>
                                                                                                                        <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Allotted Unit</th>
                                                                                                                        <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Area({formData.schemeType})</th>
                                                                                                                        <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Payment Plan</th>
                                                                                                                        <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>BSP</th>
                                                                                                                        <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>EDC/IDC (Per Sq. Ft)</th>
                                                                                                                        <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>PLC (in %)</th>
                                                                                                                        <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Total Cost</th>
                                                                                                                    </tr>
                                                                                                                </thead>
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                            <span style={{ color: 'blue', whiteSpace: "nowrap" }}>{`${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}`}</span>
                                                                                                                        </td>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{formData.unitNo}</span>
                                                                                                                        </td>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{formData.area}
                                                                                                                                <span style={{ marginLeft: 8 }}>
                                                                                                                                    {formData.schemeType === 'Plot' || formData.schemeType === 'Farmhouse'
                                                                                                                                        ? 'SQYD'
                                                                                                                                        : formData.schemeType === 'Shop'
                                                                                                                                            ? 'SQ FT'
                                                                                                                                            : ''}
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </td>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{formData.paymentPlan}</span>
                                                                                                                        </td>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{formData.bsp}</span>
                                                                                                                        </td>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{formData.plan.fixedCharges}</span>
                                                                                                                        </td>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{formData.plcdd || ''}</span>
                                                                                                                        </td>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}> </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }} colSpan={4}></td>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{plc1}</span>
                                                                                                                        </td>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{plc2}</span>
                                                                                                                        </td>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{plc3}</span>
                                                                                                                        </td>
                                                                                                                        <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                            <span style={{ color: 'blue' }}>{plc4}</span>
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
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={formData2.onBookingPerFPP ? `${formData2.onBookingPerFPP}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={total1}
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
                                                                                                                )}
                                                                                                                {formData.paymentPlan === 'PLP' && (
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                                                                                On Booking
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"

                                                                                                                                    value={formData2.onBookingPerPLP ? `${formData2.onBookingPerPLP}%` : ''}


                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"

                                                                                                                                    value={total5}
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
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                Within {formData2.days1PLP} Days
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={formData2.withIn60PerPLP ? `${formData2.withIn60PerPLP}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={total6}
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
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                Within {formData2.days2PLP} Days
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={formData2.withIn90PerPLP ? `${formData2.withIn90PerPLP}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={total7}
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
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                Within {formData2.days3PLP} Days
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={formData2.withIn120PerPLP ? `${formData2.withIn120PerPLP}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={total8}
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
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                Within {formData2.days4PLP} Days
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={formData2.withIn150PerPLP ? `${formData2.withIn150PerPLP}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={total9}
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
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                Within {formData2.days5PLP} Days
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={formData2.withIn180PerPLP ? `${formData2.withIn180PerPLP}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={total10}
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
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                Within {formData2.days6PLP} Days
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={formData2.extraPerPLP1 ? `${formData2.extraPerPLP1}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={total11}
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
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                Within {formData2.days7PLP} Days
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={formData2.extraPerPLP2 ? `${formData2.extraPerPLP2}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={total12}
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
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                Within {formData2.days8PLP} Days
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={formData2.extraPerPLP3 ? `${formData2.extraPerPLP3}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={total13}
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
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={formData2.restOnRegistryPerPLP ? `${formData2.restOnRegistryPerPLP}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={total14}
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
                                                                                                                )}
                                                                                                                {formData.paymentPlan === 'DLP' && (
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                                                                                On Booking
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"

                                                                                                                                    value={formData2.onBookingPerDLP ? `${formData2.onBookingPerDLP}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"

                                                                                                                                    value={total2}
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
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                Within {formData2.daysDLP} Days
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={formData2.withIn30PerDLP ? `${formData2.withIn30PerDLP}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={total3}
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
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={formData2.restOnRegistryPerDLP ? `${formData2.restOnRegistryPerDLP}%` : ''}
                                                                                                                                    style={{
                                                                                                                                        border: "1px solid #cdcdd7",
                                                                                                                                        padding: 7,
                                                                                                                                        borderRadius: 5,
                                                                                                                                        width: "90%"
                                                                                                                                    }}
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    value={total4}
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
                                                                                                                Request you to transfer the initial amount of 10% by{" "}
                                                                                                                <span style={{ color: 'blue' }}>{formData3.InitialPaymentDate}</span>{" "}
                                                                                                                in order to confirm allotment under <span style={{ color: 'blue' }}>{formData.projectId}</span>.
                                                                                                            </p>
                                                                                                            <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                                                                                {" "}
                                                                                                                Remaining initial amount need to be paid by{" "}
                                                                                                                <span style={{ color: 'blue' }}>{formData3.remainingInitialAmountDate}</span>
                                                                                                                .
                                                                                                            </p>
                                                                                                            <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                                                                                {" "}
                                                                                                                Note: Allotment under <span style={{ color: 'blue' }}>{formData.projectId}</span>{" "} will only be
                                                                                                                confirmed in case of 10% payment received by{" "}
                                                                                                                <span style={{ color: 'blue' }}>{formData3.noteDate}</span>
                                                                                                                .
                                                                                                            </p>
                                                                                                            <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                                                                                {" "}
                                                                                                                We would also send an invitation letter to you in the
                                                                                                                month of{" "}
                                                                                                                <span style={{ color: 'blue' }}>{formData3.invitationLetterDate}</span>
                                                                                                                {" "}
                                                                                                                as an honor and to present the gift to you at our Noida
                                                                                                                office. Your presence in our office will be an honor for
                                                                                                                us.
                                                                                                            </p>
                                                                                                            <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                                                                                {" "}
                                                                                                                Our team will also call you to invite you at our office
                                                                                                                for Gift handover{" "}

                                                                                                                <span style={{ color: 'blue' }}>{formData.gift}</span>{" "}

                                                                                                                .
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
                                                                                                    {/* <tr>
                                                    <td>
                                                      <span style={{ color: 'blue' }}>{formData3.bank}</span>
                                                    </td>
                                                  </tr> */}
                                                                                                    <tr>
                                                                                                        <td style={{ height: 20 }} />
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                                                                                {" "}
                                                                                                                Your account manager is{" "}
                                                                                                                <span style={{ color: 'blue' }}>{mobileNos}</span>{" "}
                                                                                                                and will be reachable on{" "} {mobileNo}{" "}
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
                                                                                                                Title: <span style={{ color: 'blue' }}>{employee.title}</span>
                                                                                                                <br />
                                                                                                                Account Name: <span style={{ color: 'blue' }}>{employee.accountName}</span>
                                                                                                                <br />
                                                                                                                Account Number: <span style={{ color: 'blue' }}>{employee.accountNumber}</span>
                                                                                                                <br />
                                                                                                                Bank Name: <span style={{ color: 'blue' }}>{employee.bankName}</span>
                                                                                                                <br />
                                                                                                                Branch: <span style={{ color: 'blue' }}>{employee.branch}</span>
                                                                                                                <br />
                                                                                                                IFSC: <span style={{ color: 'blue' }}>{employee.ifsc}</span>

                                                                                                            </p>
                                                                                                            <br />

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
                                                                                                                AM Realty Solutions
                                                                                                                <br />
                                                                                                                Web: www.amrealtysolutions.com
                                                                                                                <br />
                                                                                                                <b>Corporate Office:</b>
                                                                                                                <br />
                                                                                                                8th Floor, Magnus Tower,
                                                                                                                <br />
                                                                                                                Sector-73, Noida- 201307 Up
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
                                                                    </form>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <p>
                                                        <button
                                                            type='submit'

                                                            style={{
                                                                backgroundColor: '#01b8ff',
                                                                padding: '10px',
                                                                color: '#fff',
                                                                textDecoration: 'none',
                                                                fontSize: '13px',
                                                                borderRadius: '5px',
                                                                border: 'none',
                                                                cursor: 'pointer',
                                                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                                                                cursor: loadings ? 'not-allowed' : 'pointer',
                                                                opacity: loadings ? 0.7 : 1,
                                                            }}
                                                            onClick={handleSubmit}
                                                            disabled={loadings}

                                                        >
                                                            {loadings ? 'Loading...' : 'Send Welcome Letter'}

                                                        </button>


                                                    </p>
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

export default LetterApplicants

