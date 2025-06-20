import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { BiCaretRight } from 'react-icons/bi';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const EditPlals = () => {
    const [total, setTotal] = useState('');
    const [total13, setTotal13] = useState('');
    const [total1, setTotal1] = useState('');
    const [totals1, setTotals1] = useState('');
    const [totals2, setTotals2] = useState('');
    const [totals3, setTotals3] = useState('');
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
    const [ins, setIns] = useState('');
    const [totals, setTotals] = useState('');
    const [project, setProject] = useState([]);
    const [company, setCompany] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const [totalPercentage, setTotalPercentage] = useState(0);
    const [disabledFields, setDisabledFields] = useState(false);

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

        areaFPP: '',
        areaUnitFPP: '',

        areaPLP: '',
        areaUnitPLP: '',

        areaDLP: '',
        areaUnitDLP: '',


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
        isScheme: true,

    };

    const [formData, setFormData] = useState(initialFormData);
    const [selectedOption, setSelectedOption] = useState(formData.isScheme ? 'option1' : 'option2');
    const [profilePic, setProfilePic] = useState(null);
    const [profilePics, setProfilePics] = useState(null);
    const [scame, setScame] = useState([]);
    const [size, setSize] = useState([])
    const [ter1, setTer1] = useState([])
    const [ter2, setTer2] = useState([])
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    //FPP Payment Plan
    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPriceFPP);
        let percentage = parseFloat(formData.onBookingPerFPP);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotal(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.onBookingPerFPP, formData.areaPLP, formData.basicPriceFPP]);

    useEffect(() => {
        const areaValue = parseFloat(total);
        const priceValue = parseFloat(total1);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            const totalValue = (priceValue - areaValue) / 24;
            let formattedTotalValue = totalValue.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }
            setIns(formattedTotalValue);
            console.log('Total (divided by 24 months):', formattedTotalValue);
        } else {
            setIns(null);
        }
    }, [total, total1]);

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPriceFPP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            const totalValue = areaValue * priceValue;

            let formattedTotalValue = totalValue.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            setTotal1(formattedTotalValue);
            console.log('Total:', totalValue);
        } else {
            setTotal1(null);
        }
    }, [formData.areaPLP, formData.basicPriceFPP]);

    //DLP Payment Plan

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPriceDLP);
        let percentage = parseFloat(formData.onBookingPerDLP);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotals(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.onBookingPerDLP, formData.areaPLP, formData.basicPriceDLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPriceDLP);
        let percentage = parseFloat(formData.withIn30PerDLP);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotals1(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.withIn30PerDLP, formData.areaPLP, formData.basicPriceDLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPriceDLP);
        let percentage = parseFloat(formData.restOnRegistryPerDLP);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotals2(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.restOnRegistryPerDLP, formData.areaPLP, formData.basicPriceDLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPriceDLP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            const totalValue = areaValue * priceValue;
            let formattedTotalValue = totalValue.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }
            setTotals3(formattedTotalValue);

        } else {
            setTotals3(null);
        }
    }, [formData.areaPLP, formData.basicPriceDLP]);

    //PLP Payment Plan

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);
        let percentage = parseFloat(formData.onBookingPerPLP);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotalss(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.onBookingPerPLP, formData.areaPLP, formData.basicPricePLP]);


    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);
        let percentage = parseFloat(formData.withIn60PerPLP);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotalss1(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.withIn60PerPLP, formData.areaPLP, formData.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);
        let percentage = parseFloat(formData.withIn90PerPLP);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotalss2(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.withIn90PerPLP, formData.areaPLP, formData.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);
        let percentage = parseFloat(formData.withIn120PerPLP);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotalss3(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.withIn120PerPLP, formData.areaPLP, formData.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);
        let percentage = parseFloat(formData.withIn150PerPLP);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotalss4(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.withIn150PerPLP, formData.areaPLP, formData.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);
        let percentage = parseFloat(formData.withIn180PerPLP);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotalss5(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.withIn180PerPLP, formData.areaPLP, formData.basicPricePLP]);
    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);
        let percentage = parseFloat(formData.extraPerPLP1);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotalss7(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.extraPerPLP1, formData.areaPLP, formData.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);
        let percentage = parseFloat(formData.extraPerPLP2);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotalss8(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.extraPerPLP2, formData.areaPLP, formData.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);
        let percentage = parseFloat(formData.extraPerPLP3);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotalss9(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.extraPerPLP3, formData.areaPLP, formData.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);
        let percentage = parseFloat(formData.restOnRegistryPerPLP);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotalss6(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData.restOnRegistryPerPLP, formData.areaPLP, formData.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            const totalValue = areaValue * priceValue;
            let formattedTotalValue = totalValue.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }
            setTotalss10(formattedTotalValue);

        } else {
            setTotalss10(null);
        }
    }, [formData.areaPLP, formData.basicPricePLP]);


    //Update plan

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/plan/addMasterPlan?planId=${empid}`, {
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
            navigate("/list-plan");
        } catch (error) {
            toast.error(error.message);

        }
    };


    useEffect(() => {
        if (formData.companyId) {
            fetch(`${apiUrl}/company/getCompanyById/${formData.companyId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${Token}`,
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .then(data => {

                    if (data.data) {
                        if (data.data.profilePhoto) {
                            setTer1(data.data.profilePhoto);

                        } else {

                            setTer1(null);
                        }
                    } else {

                        setTer1(null);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);

                    setTer1(null);
                });
        } else {
            setTer1(null);
        }
    }, [formData.companyId]);



    useEffect(() => {
        if (formData.projectId) {
            fetch(`${apiUrl}/project/getProject/${formData.projectId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${Token}`,
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .then(data => {

                    if (data.data) {
                        if (data.data.projectName) {
                            setTer2(data.data.projectName);

                        } else {

                            setTer2(null);
                        }
                    } else {

                        setTer2(null);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);

                    setTer2(null);
                });
        } else {
            setTer2(null);
        }
    }, [formData.projectId]);


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


    // Fetch user plan data
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const Token = localStorage.getItem('Token');
                const url = `${apiUrl}/plan/rawPlan/${empid}`;
                const result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                const response = await result.json();
                const data = response.data;

                setProfilePic(data.brocehureImage);
                setProfilePics(data.paymentPlanImage);
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    brocehureImage: data.brocehureImage || '',
                    paymentPlanImage: data.paymentPlanImage || '',
                    basicPriceFPP: data.basicPriceFPP || '',
                    onBookingPerFPP: data.onBookingPerFPP || '',
                    onBookingFPP: data.onBookingFPP || '',
                    installMentFPP: data.installMentFPP || '',
                    totalValuePerFPP: data.totalValuePerFPP || '',
                    totalValueFPP: data.totalValueFPP || '',
                    basicPricePLP: data.basicPricePLP || '',
                    onBookingPerPLP: data.onBookingPerPLP || '',
                    onBookingPLP: data.onBookingPLP || '',
                    withIn60PerPLP: data.withIn60PerPLP || '',
                    withIn60PLP: data.withIn60PLP || '',
                    withIn90PerPLP: data.withIn90PerPLP || '',
                    withIn90PLP: data.withIn90PLP || '',
                    withIn120PerPLP: data.withIn120PerPLP || '',
                    withIn120PLP: data.withIn120PLP || '',
                    withIn150PerPLP: data.withIn150PerPLP || '',
                    withIn150PLP: data.withIn150PLP || '',
                    withIn180PerPLP: data.withIn180PerPLP || '',
                    withIn180PLP: data.withIn180PLP || '',
                    restOnRegistryPerPLP: data.restOnRegistryPerPLP || '',
                    restOnRegistryPLP: data.restOnRegistryPLP || '',
                    basicPriceDLP: data.basicPriceDLP || '',
                    onBookingPerDLP: data.onBookingPerDLP || '',
                    onBookingDLP: data.onBookingDLP || '',
                    withIn30PerDLP: data.withIn30PerDLP || '',
                    withIn30DLP: data.withIn30DLP || '',
                    restOnRegistryPerDLP: data.restOnRegistryPerDLP || '',
                    restOnRegistryDLP: data.restOnRegistryDLP || '',
                    totalValuePerDLP: data.totalValuePerDLP || '',
                    totalValueDLP: data.totalValueDLP || '',
                    schemeId: data.schemeId || '',
                    projectId: data.projectId || '',
                    companyId: data.companyId || '',
                    planDescription: data.planDescription || '',
                    extraPLP1: data.extraPLP1 || '',
                    extraPerPLP1: data.extraPerPLP1 || '',
                    extraValuePLP1: data.extraValuePLP1 || '',
                    extraPLP2: data.extraPLP2 || '',
                    extraPerPLP2: data.extraPerPLP2 || '',
                    extraValuePLP2: data.extraValuePLP2 || '',
                    extraPLP3: data.extraPLP3 || '',
                    extraPerPLP3: data.extraPerPLP3 || '',
                    extraValuePLP3: data.extraValuePLP3 || '',
                    totalPerPLP: data.totalPerPLP || '',
                    totalValuePLP: data.totalValuePLP || '',
                    note: data.note || '',

                    areaFPP: data.areaFPP || '',
                    areaUnitFPP: data.areaUnitFPP || '',
                    areaPLP: data.areaPLP || '',
                    areaUnitPLP: data.areaUnitPLP || '',
                    areaDLP: data.areaDLP || '',
                    areaUnitDLP: data.areaUnitDLP || '',

                    cornerPlc: data.cornerPlc || '',
                    mainRoadPlc: data.mainRoadPlc || '',
                    facultyParkPlc: data.facultyParkPlc || '',
                    fixedCharges: data.fixedCharges || '',
                    days1PLP: data.days1PLP || '',
                    days2PLP: data.days2PLP || '',
                    days3PLP: data.days3PLP || '',
                    days4PLP: data.days4PLP || '',
                    days5PLP: data.days5PLP || '',
                    days6PLP: data.days6PLP || '',
                    days7PLP: data.days7PLP || '',
                    days8PLP: data.days8PLP || '',
                    daysDLP: data.daysDLP || '',
                    isScheme: data.isScheme || true,
                }));

                // Set selectedOption based on fetched isScheme value
                setSelectedOption(data.isScheme ? 'option1' : 'option2');

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUser();
    }, [apiUrl, empid]);


    //company
    useEffect(() => {
        const Token = localStorage.getItem('Token');

        fetch(`${apiUrl}/company/companyDropdown`, {
            headers: {
                Authorization: `Bearer ${Token}`,
                'Content-Type': 'application/json',
            },
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
                console.error('Error fetching company options:', error);
            });
    }, [apiUrl]);

    //project api 
    useEffect(() => {
        fetch(`${apiUrl}/project/applicantProjectDropdown`)
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



    // FPP Payment Plan
    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, onBookingFPP: total }));
    }, [total]);

    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, installMentFPP: ins }));
    }, [ins]);

    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, totalValueFPP: total1 }));
    }, [total1]);

    //DLP Payment Plan

    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, onBookingDLP: totals }));
    }, [totals]);
    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, withIn30DLP: totals1 }));
    }, [totals1]);
    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, restOnRegistryDLP: totals2 }));
    }, [totals2]);

    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, totalValueDLP: totals3 }));
    }, [totals3]);

    // PLP Payment Plan

    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, onBookingPLP: totalss }));
    }, [totalss]);
    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, withIn60PLP: totalss1 }));
    }, [totalss1]);
    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, withIn90PLP: totalss2 }));
    }, [totalss2]);
    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, withIn120PLP: totalss3 }));
    }, [totalss3]);

    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, withIn150PLP: totalss4 }));
    }, [totalss4]);
    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, withIn180PLP: totalss5 }));
    }, [totalss5]);
    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, restOnRegistryPLP: totalss6 }));
    }, [totalss6]);
    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, extraValuePLP1: totalss7 }));
    }, [totalss7]);
    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, extraValuePLP2: totalss8 }));
    }, [totalss8]);

    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, extraValuePLP3: totalss9 }));
    }, [totalss9]);

    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, totalValuePLP: totalss10 }));
    }, [totalss10]);


    useEffect(() => {
        const total = [
            formData.onBookingPerPLP,
            formData.withIn60PerPLP,
            formData.withIn90PerPLP,
            formData.withIn120PerPLP,
            formData.withIn150PerPLP,
            formData.withIn180PerPLP,
            formData.extraPerPLP1,
            formData.extraPerPLP2,
            formData.extraPerPLP3,
            formData.restOnRegistryPerPLP,
        ].reduce((acc, value) => acc + (parseFloat(value) || 0), 0);

        setTotalPercentage(total);

        if (total > 100) {
            alert("Error: Total percentage cannot exceed 100%. Please enter valid values.");
            setDisabledFields(true);
        } else {
            setDisabledFields(total >= 100);
        }
    }, [formData, disabledFields]);


    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile); // Convert file to URL
                setProfilePic(imageUrl); // Set URL as profilePic
                setFormData((prevData) => ({
                    ...prevData,
                    brocehureImage: profilePicFile,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChanges = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile); // Convert file to URL
                setProfilePics(imageUrl); // Set URL as profilePic
                setFormData((prevData) => ({
                    ...prevData,
                    paymentPlanImage: profilePicFile,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };



    const handleOptionChange = (event) => {
        const { value } = event.target;
        setSelectedOption(value);
        setFormData({
            ...formData,
            isScheme: value === 'option1',
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
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
                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Row */}
                            <div className="row row-sm mt-5  justify-content-around">
                                <div className="col-xl-7 col-lg-7 col-md-7">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <h6 style={{ marginRight: '40px', whiteSpace: 'nowrap' }}>Payment Plan</h6>
                                                <div style={{ display: 'flex', flexDirection: 'row', marginRight: '10px' }}>
                                                    <label style={{ marginRight: '30px' }}>
                                                        <input
                                                            type="radio"
                                                            value="option1"
                                                            checked={selectedOption === 'option1'}
                                                            onChange={handleOptionChange}
                                                        />{" "}
                                                        With Scheme
                                                    </label>
                                                    <label style={{ marginRight: '70px' }}>
                                                        <input
                                                            type="radio"
                                                            value="option2"
                                                            checked={selectedOption === 'option2'}
                                                            onChange={handleOptionChange}
                                                        />{" "}
                                                        Without Scheme
                                                    </label>


                                                </div>
                                            </div>

                                            <form action="#" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">

                                                        <div className="col-lg-4 form-group" style={{ marginTop: '10px' }}>
                                                            <label className="form-label">
                                                                Select Company{" "}
                                                                <span className="tx-danger">*</span>
                                                            </label>
                                                            <select className="form-control"
                                                                style={{ height: 25 }}
                                                                name="companyId"
                                                                value={formData.companyId}
                                                                onChange={handleInputChange}
                                                            >
                                                                <option value="">Select Company</option>
                                                                {company.map((option, index) => (
                                                                    <option key={option.id} value={option.id}>
                                                                        {option.companyName}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-4 form-group" style={{ marginTop: '10px' }}>
                                                            <label className="form-label">
                                                                Select Project <span className="tx-danger">*</span>
                                                            </label>

                                                            <select className="form-control select2"
                                                                style={{ height: 25 }}
                                                                name="projectId"
                                                                value={formData.projectId}
                                                                onChange={handleInputChange}>
                                                                <option>Select </option>
                                                                {project.map((option, index) => (
                                                                    <option key={option.id} value={option.id}>
                                                                        {option.projectName}
                                                                    </option>
                                                                ))}
                                                            </select>

                                                        </div>

                                                        <div className="col-lg-4 form-group" style={{ marginTop: '10px' }}>
                                                            <label className="form-label">
                                                                Size <span className="tx-danger">*</span>
                                                            </label>

                                                            <input
                                                                className="form-control"
                                                                style={{ height: 25 }}
                                                                name="areaPLP"
                                                                value={formData.areaPLP}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />

                                                        </div>

                                                        <div className="col-lg-4 form-group" style={{ marginTop: '10px' }}>
                                                            <label className="form-label">
                                                                Select({formData.areaUnitPLP}) <span className="tx-danger">*</span>
                                                            </label>

                                                            <select
                                                                className="form-control"
                                                                name="areaUnitPLP"
                                                                style={{ height: 25 }}
                                                                value={formData.areaUnitPLP}
                                                                onChange={handleInputChange}

                                                            >
                                                                <option value=''>Select</option>
                                                                {size.map((option) => (
                                                                    <option key={option.id} value={option.name}>
                                                                        {option.name}
                                                                    </option>
                                                                ))}
                                                            </select>

                                                        </div>


                                                        {selectedOption === 'option1' && (
                                                            <div className="col-lg-4 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">
                                                                    Select Scheme <span className="tx-danger">*</span>
                                                                </label>
                                                                <select className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="schemeId"
                                                                    value={formData.schemeId}
                                                                    onChange={handleInputChange}>
                                                                    <option >Select</option>
                                                                    {scame.map((option, index) => (
                                                                        <option key={option.id} value={option.id}>
                                                                            {option.schemeName}
                                                                        </option>
                                                                    ))}

                                                                </select>
                                                            </div>
                                                        )}

                                                        <div className="col-lg-12 form-group" style={{ height: "300px" }}>
                                                            <label className="form-label">
                                                                Plan Description{" "}
                                                                <span className="tx-danger">*</span>
                                                            </label>



                                                            <ReactQuill
                                                            theme="snow"

                                                            name=" planDescription"
                                                            value={formData.planDescription}
                                                            style={{ height: "200px" }}

                                                            onChange={(value) =>
                                                                setFormData((prevState) => ({
                                                                    ...prevState,
                                                                    planDescription: value,
                                                                }))
                                                            }

                                                        />
                                                           
                                                        </div>

                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Brochure Image <span className="tx-danger">*</span>
                                                            </label>
                                                            <div className="row row-sm">
                                                                <div className="col-sm-12 col-md-12">
                                                                    <input
                                                                        className="form-control"
                                                                        type="file"
                                                                        // name="profilePhoto"
                                                                        // value={formData.profilePhoto}
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



                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Payment Plan Image <span className="tx-danger">*</span>
                                                            </label>
                                                            <div className="row row-sm">
                                                                <div className="col-sm-12 col-md-12">
                                                                    <input
                                                                        className="form-control"
                                                                        type="file"
                                                                        // name="profilePhoto"
                                                                        // value={formData.profilePhoto}
                                                                        onChange={handleFileChanges}
                                                                    />
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                            {/* Row */}
                            <div className="row row-sm mt-5 justify-content-around">
                                <div className="col-xl-7 col-lg-7 col-md-7">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-invoice table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td width="30%">

                                                                <img
                                                                    src={ter1}
                                                                    style={{ width: 100, marginTop: 10 }}

                                                                />

                                                            </td>
                                                            <td width="45%">
                                                                <h4>
                                                                    {ter2}-({formData.schemeType})
                                                                </h4>
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
                                                                    onChange={handleInputChange}


                                                                />
                                                                {" "} per {" "} {formData.areaUnitPLP}


                                                            </th>
                                                            <th className="tx-left" >
                                                                <span style={{
                                                                    marginLeft: '30px'

                                                                }}> ( % )</span>
                                                            </th>
                                                            <th className="tx-left">
                                                                <span style={{
                                                                    marginRight: 6,
                                                                    fontSize: "9px",
                                                                    // whiteSpace: "nowrap" 
                                                                }}>
                                                                    Installment Amount for
                                                                </span>
                                                                <span>{formData.areaPLP}</span>{" "}
                                                                <span style={{ fontSize: '9px' }}>{formData.areaUnitPLP} </span>

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
                                                                    value={formData.onBookingPerFPP}
                                                                    onChange={handleInputChange}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="onBookingFPP"
                                                                    value={total || formData.onBookingFPP}
                                                                    onChange={(e) => setFormData({ ...formData, onBookingFPP: e.target.value })}
                                                                />

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
                                                                    value={ins || formData.installMentFPP}
                                                                />
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
                                                                    value={total1 || formData.totalValueFPP}
                                                                />
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
                                                                    onChange={handleInputChange}

                                                                />
                                                                {" "} per {" "} {formData.areaUnitPLP}

                                                            </th>
                                                            <th className="tx-left" >
                                                                <span style={{
                                                                    marginLeft: '30px'

                                                                }}> ( % )</span>
                                                            </th>
                                                            <th className="tx-left">
                                                                <span style={{
                                                                    marginRight: 6,
                                                                    fontSize: "9px",
                                                                    // whiteSpace: "nowrap" 
                                                                }}>
                                                                    Installment Amount for
                                                                </span>
                                                                <span>{formData.areaPLP}</span>{" "}
                                                                <span style={{ fontSize: '9px' }}>{formData.areaUnitPLP}</span>


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
                                                                    value={formData.onBookingPerPLP}
                                                                    onChange={handleInputChange}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="onBookingPLP"
                                                                    value={totalss || formData.onBookingPLP}
                                                                />
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
                                                                    name='days1PLP'
                                                                    value={formData.days1PLP}
                                                                    onChange={handleInputChange}

                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn60PerPLP"
                                                                    value={formData.withIn60PerPLP}
                                                                    onChange={handleInputChange}

                                                                // style={{ color: 'white', backgroundColor: 'gray' }}
                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn60PLP"
                                                                    value={totalss1 || formData.withIn60PLP}
                                                                />
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
                                                                    name='days2PLP'
                                                                    value={formData.days2PLP}
                                                                    onChange={handleInputChange}

                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn90PerPLP"
                                                                    value={formData.withIn90PerPLP}
                                                                    onChange={handleInputChange}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn90PLP"
                                                                    value={totalss2 || formData.withIn90PLP}
                                                                />
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
                                                                    name='days3PLP'
                                                                    value={formData.days3PLP}
                                                                    onChange={handleInputChange}

                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn120PerPLP"
                                                                    value={formData.withIn120PerPLP}
                                                                    onChange={handleInputChange}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn120PLP"
                                                                    value={totalss3 || formData.withIn120PLP}
                                                                />
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
                                                                    name='days4PLP'
                                                                    value={formData.days4PLP}
                                                                    onChange={handleInputChange}

                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn150PerPLP"
                                                                    value={formData.withIn150PerPLP}
                                                                    onChange={handleInputChange}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn150PLP"
                                                                    value={totalss4 || formData.withIn150PLP}
                                                                />
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
                                                                    name='days5PLP'
                                                                    value={formData.days5PLP}
                                                                    onChange={handleInputChange}

                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn180PerPLP"
                                                                    value={formData.withIn180PerPLP}
                                                                    onChange={handleInputChange}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn120PLP"
                                                                    value={totalss5 || formData.withIn180PLP}
                                                                />
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
                                                                    name='days6PLP'
                                                                    value={formData.days6PLP}
                                                                    onChange={handleInputChange}

                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="extraPerPLP1"
                                                                    value={formData.extraPerPLP1}
                                                                    onChange={handleInputChange}


                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="extraValuePLP1"
                                                                    value={totalss7 || formData.extraValuePLP1}
                                                                    onChange={handleInputChange}
                                                                />
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
                                                                    name='days7PLP'
                                                                    value={formData.days7PLP}
                                                                    onChange={handleInputChange}

                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="extraPerPLP2"
                                                                    value={formData.extraPerPLP2}
                                                                    onChange={handleInputChange}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="extraValuePLP2"
                                                                    value={totalss8 || formData.extraValuePLP2}

                                                                />
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
                                                                    name='days8PLP'
                                                                    value={formData.days8PLP}
                                                                    onChange={handleInputChange}

                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="extraPerPLP3"
                                                                    value={formData.extraPerPLP3}
                                                                    onChange={handleInputChange}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="extraValuePLP3"
                                                                    value={totalss9 || formData.extraValuePLP3}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">10</td>
                                                            <td className="tx-left">Rest on Registry</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="restOnRegistryPerPLP"
                                                                    value={formData.restOnRegistryPerPLP}
                                                                    onChange={handleInputChange}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="restOnRegistryPLP"
                                                                    value={totalss6 || formData.restOnRegistryPLP}
                                                                />
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
                                                                    value={totalss10 || formData.totalValuePLP}
                                                                />
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
                                                                    onChange={handleInputChange}

                                                                />
                                                                {" "} per {" "} {formData.areaUnitPLP}


                                                            </th>
                                                            <th className="tx-left" >
                                                                <span style={{
                                                                    marginLeft: '30px'

                                                                }}> ( % )</span>
                                                            </th>
                                                            <th className="tx-left">
                                                                <span style={{
                                                                    marginRight: 6,
                                                                    fontSize: "9px",
                                                                    // whiteSpace: "nowrap" 
                                                                }}>
                                                                    Installment Amount for
                                                                </span>
                                                                <span>{formData.areaPLP}</span>{" "}
                                                                <span style={{ fontSize: '9px' }}>{formData.areaUnitPLP}</span>


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
                                                                    value={formData.onBookingPerDLP}
                                                                    onChange={handleInputChange}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="onBookingDLP"
                                                                    value={totals || formData.onBookingDLP}
                                                                />
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
                                                                    name="days1PLP"
                                                                    value={formData.days1PLP}
                                                                    onChange={handleInputChange}

                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn30PerDLP"
                                                                    value={formData.withIn30PerDLP}
                                                                    onChange={handleInputChange}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn30DLP"
                                                                    value={totals1 || formData.withIn30DLP}
                                                                />
                                                            </td>
                                                        </tr>

                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">3</td>
                                                            <td className="tx-left">Rest on Registry</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="restOnRegistryPerDLP"
                                                                    value={formData.restOnRegistryPerDLP}
                                                                    onChange={handleInputChange}

                                                                />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="restOnRegistryDLP"
                                                                    value={totals2 || formData.restOnRegistryDLP}
                                                                />
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
                                                                    value={totals3 || formData.totalValueDLP}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <h4 className="mt-5 text-center mb-3" style={{ color: "#2e3192" }}>
                                                    Applicable PLC

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
                                                                            onChange={handleInputChange}
                                                                        />
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
                                                                            onChange={handleInputChange}
                                                                        />
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
                                                                            onChange={handleInputChange}
                                                                        />
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
                                                                            onChange={handleInputChange}
                                                                        />
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


                                                

                                                <p className="mt-5">
                                                    <div className="col-lg-12 form-group">
                                                        <label className="form-label">
                                                            Note:
                                                        </label>

                                                        <ReactQuill
                                                            theme="snow"

                                                            name="note"
                                                            value={formData.note}
                                                            style={{ height: "200px" }}

                                                            onChange={(value) =>
                                                                setFormData((prevState) => ({
                                                                    ...prevState,
                                                                    note: value,
                                                                }))
                                                            }

                                                        />

                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer text-end">
                                            <a href="" className="btn btn-primary mb-1"
                                                onClick={handleUpdate} >
                                                Submit
                                            </a>
                                        </div>
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

export default EditPlals

