import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiCaretRight } from 'react-icons/bi';

const InventoryCheckData = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { firstName, lastName, projectId, isLuckyDraw,unitNo } = location.state || {};
    const { empid, empid2, empid3, empid4 } = useParams();
    const dropdownRef = useRef(null);

    const initialFormData9 = {
        unitNo: '',
        area: '',
        bsp: '',
        size: '',
        PLCs: '',
        PLCsValue: '',
        fixedCharges: '',
        totalCost: '',
        gift: '',

        bspAmount: '',
        fixedAmount: '',
        plcAmount: '',
        otherGift: '',
        unitPrice: '',
        registrationAmount: '',
    };
    const [formData9, setFormData9] = useState(initialFormData9);

    const initialFormData12 = {
        paymentPlan: '',
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

    };

    const [formData12, setFormData12] = useState(initialFormData12);
  
    const [users, setUsers] = useState([]);
    const [users2, setUsers2] = useState([]);
    const [users4, setUsers4] = useState([]);
    const [employee, setEmployee] = useState({})
    const [employee2, setEmployee2] = useState({})
    const [scame, setScame] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [isModalOpen16, setIsModalOpen16] = useState(false);
    const [gift, setGift] = useState([])
    const [total34, setTotal34] = useState('');
    const [totals35, setTotals35] = useState('');
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
    const [selectedOption, setSelectedOption] = useState('');
    const [convert, setConvert] = useState('');

    const [size, setSize] = useState([]);
    const initialFormData = {
        excelUpload: '',
    };

    const [formData3, setFormData3] = useState(initialFormData);

    const [filterByObj, setFilterByObj] = useState({

        projectId: '',
        schemeId: '',
        schemeType: '',
        unitNos: '',
        plc: '',
        size: '',
        allocatedTo: '',
        availability: '',
        registry: '',
        luckyDrawStatus: '',

    });


    // const [unitNo, setUnitNo] = useState(filterByObj.unitNo || "");

    const [formData, setFormData] = useState({
        schemeType: '',
        projectId: '',
    })
    const [inventoryId, setInventoryId] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [ids, setIds] = useState(null)
    const [role, setRole] = useState([]);
    const [total2, setTotal2] = useState('');
    const [total3, setTotal3] = useState('');
    const [total4, setTotal4] = useState('');
    const [total5, setTotal5] = useState('');
    const [total6, setTotal6] = useState('');
    const [plc, setPlc] = useState([]);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [loading, setLoading] = useState(true);
    const [inventoryCount, setInventoryCount] = useState('');
    const [hovered, setHovered] = useState(false);
    const [hovereds, setHovereds] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState('false');
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState(projectId);
    const [convertedSize, setConvertedSize] = useState(null);
    const [paymentValue, setPaymentValue] = useState('');




    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleOpenModal3 = () => {
        fetchUserdd();
        setIsModalOpen3(true);
        document.body.classList.add('modal-open');
    };
    const handleCloseModal3 = () => {
        setIsModalOpen3(false);
        document.body.classList.remove('modal-open');
    };
    const handleOpenModal16 = (id) => {

        if (id) {
            setSelectedId(id);
            setIsModalOpen16(true);
            document.body.classList.add('modal-open');
        }
    };

    const handleCloseModal16 = () => {
        setIsModalOpen16(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };

    const handleRadioChange = (event) => {
        setSelectedOptions(event.target.value);
    };



    //FPP Payment Plan
    useEffect(() => {
        const areaValue = parseFloat(formData12.areaFPP);
        const priceValue = parseFloat(formData12.basicPriceFPP);
        let percentage = parseFloat(formData12.onBookingPerFPP);

        if (!isNaN(percentage) && !isNaN(areaValue) && !isNaN(priceValue)) {
            if (percentage > 100) {
                alert('Percentage value cannot exceed greater than 100');
            } else {
                const totalValue = (areaValue * priceValue) * (percentage / 100);
                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }
                setTotal34(formattedTotalValue);
                console.log('Total (when percentage is included):', totalValue);
            }
        }
    }, [formData12.onBookingPerFPP, formData12.areaFPP, formData12.basicPriceFPP]);

    useEffect(() => {
        const areaValue = parseFloat(total34);
        const priceValue = parseFloat(totals35);

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
    }, [totals35, totals35]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaFPP);
        const priceValue = parseFloat(formData12.basicPriceFPP);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            const totalValue = areaValue * priceValue;

            let formattedTotalValue = totalValue.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            setTotals35(formattedTotalValue);
            console.log('Total:', totalValue);
        } else {
            setTotals35(null);
        }
    }, [formData12.areaFPP, formData12.basicPriceFPP]);

    //PLP Payment Plan

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaPLP);
        const priceValue = parseFloat(formData12.basicPricePLP);
        let percentage = parseFloat(formData12.onBookingPerPLP);

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
    }, [formData12.onBookingPerPLP, formData12.areaPLP, formData12.basicPricePLP]);


    useEffect(() => {
        const areaValue = parseFloat(formData12.areaPLP);
        const priceValue = parseFloat(formData12.basicPricePLP);
        let percentage = parseFloat(formData12.withIn60PerPLP);

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
    }, [formData12.withIn60PerPLP, formData12.areaPLP, formData12.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaPLP);
        const priceValue = parseFloat(formData12.basicPricePLP);
        let percentage = parseFloat(formData12.withIn90PerPLP);

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
    }, [formData12.withIn90PerPLP, formData12.areaPLP, formData12.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaPLP);
        const priceValue = parseFloat(formData12.basicPricePLP);
        let percentage = parseFloat(formData12.withIn120PerPLP);

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
    }, [formData12.withIn120PerPLP, formData12.areaPLP, formData12.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaPLP);
        const priceValue = parseFloat(formData12.basicPricePLP);
        let percentage = parseFloat(formData12.withIn150PerPLP);

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
    }, [formData12.withIn150PerPLP, formData12.areaPLP, formData12.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaPLP);
        const priceValue = parseFloat(formData12.basicPricePLP);
        let percentage = parseFloat(formData12.withIn180PerPLP);

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
    }, [formData12.withIn180PerPLP, formData12.areaPLP, formData12.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaPLP);
        const priceValue = parseFloat(formData12.basicPricePLP);
        let percentage = parseFloat(formData12.extraPerPLP1);

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
    }, [formData12.extraPerPLP1, formData12.areaPLP, formData12.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaPLP);
        const priceValue = parseFloat(formData12.basicPricePLP);
        let percentage = parseFloat(formData12.extraPerPLP2);

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
    }, [formData12.extraPerPLP2, formData12.areaPLP, formData12.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaPLP);
        const priceValue = parseFloat(formData12.basicPricePLP);
        let percentage = parseFloat(formData12.extraPerPLP3);

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
    }, [formData12.extraPerPLP3, formData12.areaPLP, formData12.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaPLP);
        const priceValue = parseFloat(formData12.basicPricePLP);
        let percentage = parseFloat(formData12.restOnRegistryPerPLP);

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
    }, [formData12.restOnRegistryPerPLP, formData12.areaPLP, formData12.basicPricePLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaPLP);
        const priceValue = parseFloat(formData12.basicPricePLP);

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
    }, [formData12.areaPLP, formData12.basicPricePLP]);

    //DLP Payment Plan

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaDLP);
        const priceValue = parseFloat(formData12.basicPriceDLP);
        let percentage = parseFloat(formData12.onBookingPerDLP);

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
    }, [formData12.onBookingPerDLP, formData12.areaDLP, formData12.basicPriceDLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaDLP);
        const priceValue = parseFloat(formData12.basicPriceDLP);
        let percentage = parseFloat(formData12.withIn30PerDLP);

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
    }, [formData12.withIn30PerDLP, formData12.areaDLP, formData12.basicPriceDLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaDLP);
        const priceValue = parseFloat(formData12.basicPriceDLP);
        let percentage = parseFloat(formData12.restOnRegistryPerDLP);

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
    }, [formData12.restOnRegistryPerDLP, formData12.areaDLP, formData12.basicPriceDLP]);

    useEffect(() => {
        const areaValue = parseFloat(formData12.areaDLP);
        const priceValue = parseFloat(formData12.basicPriceDLP);

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
    }, [formData12.areaDLP, formData12.basicPriceDLP]);



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
    const fetchUserdd = async () => {
        try {
            const Token = localStorage.getItem('Token');
            const url = `${apiUrl}/plan/rawPlan/${employee2.planId}`;
            const result = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                    'Content-Type': 'application/json',
                },
            });

            const response = await result.json();
            const data = response.data;
            setFormData12((prevFormData) => ({
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


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchUserdd();
    }, [apiUrl, empid]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData12((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleOptionChange = (event) => {
        const { value } = event.target;
        let schemeValue = '';

        if (selectedOption === value) {
            setSelectedOption('');
            setFormData12({ ...formData12, paymentPlan: '' });
        } else {
            if (value === 'option1') {
                schemeValue = 'FPP';
            } else if (value === 'option2') {
                schemeValue = 'PLP';
            } else if (value === 'option3') {
                schemeValue = 'DLP';
            }
            setSelectedOption(value);
            setFormData12({ ...formData12, paymentPlan: schemeValue });
        }
    };


    //Update plan
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData12) {
                if (formData12[key] !== null) {
                    formDataToSend.append(key, formData12[key]);
                }
            }
            const url = `${apiUrl}/plan/addMasterPlan?planId=${employee2.planId}&isDuplicate=true&applicantId=${empid}`;

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
            getEmpp()
            handleCloseModal3()
            setFormData12(initialFormData12);
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);

        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData9) {
                if (formData9[key] !== null) {
                    formDataToSend.append(key, formData9[key]);
                }
            }
            const url = `${apiUrl}/inventory/allocateProperty?id=&mobileNumber=&emailId=&inventoryId=${selectedId}&applicantId=${empid}`;
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
            handleCloseModal16()
            fetchDataFromApi()
            setFormData9(initialFormData9);
            toast.success(response2.message);
            navigate(`/allocated-list`)

        } catch (error) {
            toast.error(error.message);

        }
    };

    const handleInputChange9 = (event) => {
        const { name, value } = event.target;
        setFormData9({
            ...formData9,
            [name]: value,
        });
    }


    useEffect(() => {
        let areaValue = null;

        // Determine the area value based on the payment plan
        if (employee2 && employee2.plan) {
            if (employee2.paymentPlan === 'FPP') {
                areaValue = parseFloat(employee2.plan.basicPriceFPP);
            } else if (employee2.paymentPlan === 'PLP') {
                areaValue = parseFloat(employee2.plan.basicPricePLP);
            } else if (employee2.paymentPlan === 'DLP') {
                areaValue = parseFloat(employee2.plan.basicPriceDLP);
            }
        }

        // Parse the size value to a float
        let sizeValue = parseFloat(employee.size);

        // Convert size to square feet only if employee.type is 'Shop'
        if (employee.type === 'Shopkh' && !isNaN(sizeValue)) {
            sizeValue = sizeValue * 9; // Conversion factor from square yards to square feet
        }

        // Update the converted size state
        setConvertedSize(!isNaN(sizeValue) ? sizeValue : null);

        // Calculate the total if both areaValue and sizeValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(sizeValue)) {
            const totalValue = areaValue * sizeValue;

            // Format the total value to two decimal places
            let formattedTotalValue = totalValue.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Update the total1 state with the formatted total
            setTotal1(formattedTotalValue);
            console.log('Total:', totalValue);
        } else {
            // If any value is invalid, reset total1 to null
            setTotal1(null);
        }
    }, [employee2, employee.size, employee.type]);


    useEffect(() => {
        const areaValue = parseFloat(total1);
        const plcString = formData9.PLCs || '';

        if (!isNaN(areaValue) && plcString) {
            // Har tarah ke number format ko handle karne ke liye updated regex
            const numberMatch = plcString.match(/\d+/);

            if (numberMatch) {
                const percentage = parseFloat(numberMatch[0]); // Extracted number as float
                const percentageValue = (areaValue * percentage) / 100;
                setTotal2(percentageValue.toFixed(0));
            }
        }
    }, [total1, formData9.PLCs]);




    useEffect(() => {
        const priceValue = parseFloat(total1);
        const cornerPlcPercentage = parseFloat(employee2 && employee2.plan && `${employee2.plan.mainRoadPlc}`);

        if (!isNaN(cornerPlcPercentage) && !isNaN(priceValue)) {
            // Calculate the total value by taking the percentage of the total price
            const totalValue = (priceValue * cornerPlcPercentage) / 100;

            let formattedTotalValue = totalValue.toFixed(2);

            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated percentage to total2 state
            setTotal3(formattedTotalValue);
            console.log('Total:', totalValue);
        } else {
            // If any value is not a number, set total2 to null
            setTotal3(null);
        }
    }, [employee2 && employee2.plan && `${employee2.plan.mainRoadPlc}`, total1]);

    useEffect(() => {
        const priceValue = parseFloat(total1);
        const cornerPlcPercentage = parseFloat(employee2 && employee2.plan && `${employee2.plan.facultyParkPlc}`);

        if (!isNaN(cornerPlcPercentage) && !isNaN(priceValue)) {
            // Calculate the total value by taking the percentage of the total price
            const totalValue = (priceValue * cornerPlcPercentage) / 100;

            let formattedTotalValue = totalValue.toFixed(2);

            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated percentage to total2 state
            setTotal4(formattedTotalValue);
            console.log('Total:', totalValue);
        } else {
            // If any value is not a number, set total2 to null
            setTotal4(null);
        }
    }, [employee2 && employee2.plan && `${employee2.plan.facultyParkPlc}`, total1]);

    useEffect(() => {
        // Define the conversion factor for square yards to square feet
        const squareYardsToSquareFeetConversionFactor = 9;

        // Parse the size value to a float
        let sizeValue = parseFloat(employee.size);

        // Convert to square feet only if employee.type === 'Shop'
        if (employee.type === 'Shopgff' && !isNaN(sizeValue)) {
            sizeValue = sizeValue * squareYardsToSquareFeetConversionFactor;
        }

        // Update the converted size state
        setConvert(!isNaN(sizeValue) ? sizeValue : null);

        // Parse the fixedCharges percentage to a float
        const fixedChargesPercentage = parseFloat(employee2 && employee2.plan && employee2.plan.fixedCharges);

        // Check if both values are valid numbers
        if (!isNaN(fixedChargesPercentage) && !isNaN(sizeValue)) {
            // Calculate the total value by multiplying the size with the fixedCharges percentage
            const totalValue = sizeValue * fixedChargesPercentage;

            // Format the total value to two decimal places
            let formattedTotalValue = totalValue.toFixed(2);
            // Remove '.00' if it exists
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated total to total5 state
            setTotal5(formattedTotalValue);
        } else {
            // If any value is not a number, set total5 to null
            setTotal5(null);
        }
    }, [employee2 && employee2.plan && employee2.plan.fixedCharges, employee.size, employee.type]);



    useEffect(() => {
        const areaValue = parseFloat(total1) || 0;
        const priceValue = parseFloat(total5) || 0;
        const priceValues = parseFloat(total2) || 0;

        const totalValue = areaValue + priceValue + priceValues;

        let formattedTotalValue = totalValue.toFixed(2);
        if (formattedTotalValue.endsWith('.00')) {
            formattedTotalValue = formattedTotalValue.slice(0, -3);
        }

        // Set '00' if the total value is zero or null
        setTotal6(formattedTotalValue !== '0' ? formattedTotalValue : '00');
        console.log('Total:', formattedTotalValue);
    }, [total1, total5, total2]);


    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, unitNo: employee.unitNo }));
    }, [employee.unitNo]);
    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, size: employee.size }));
    }, [employee.size]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, bsp: paymentValue }));
    }, [paymentValue]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, fixedCharges: employee2 && employee2.plan && `${employee2.plan.fixedCharges}` }));
    }, [employee2 && employee2.plan && `${employee2.plan.fixedCharges}`]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, totalCost: total6 }));
    }, [total6]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, bspAmount: total1 }));
    }, [total1]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, fixedAmount: total5 }));
    }, [total5]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, plcAmount: total2 }));
    }, [total2]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, unitPrice: total1 }));
    }, [total1]);


    //plc  
    useEffect(() => {
        fetch(`${apiUrl}/applicant/getPlanDropdown?applicantId=${empid}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success' && Array.isArray(data.data)) {
                    setPlc(data.data);
                } else {
                    console.error('API response is not in the expected format.');
                }
            })
            .catch((error) => {
                console.error('Error fetching PLC data:', error);
            });
    }, [apiUrl, empid]);

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

    //schame
    useEffect(() => {
        const { schemeType, projectId } = formData;
        const url = `${apiUrl}/scheme/schemeDropdown?&schemeType=${schemeType}&projectId=${projectId}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setScame(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, [formData]);


    // scame type
    useEffect(() => {
        const Token = localStorage.getItem('Token');

        fetch(`${apiUrl}/master/getAllMasterData/18`, {
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

    useEffect(() => {
        async function getEmp() {
            const Token = localStorage.getItem("Token");
            let response = await fetch(`${apiUrl}/inventory/getInventoryById?inventoryId=${selectedId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            });
            response = await response.json();

            if (response.status === "success") {
                setEmployee(response.data);
                console.log('Fetched data:', response.data);
            }
        }

        if (selectedId) {
            getEmp();
        }
    }, [selectedId]);


    const getEmpp = async () => {
        const Token = localStorage.getItem("Token");
        let response = await fetch(`${apiUrl}/applicant/getApplicantById/${empid}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`
            },
        });
        response = await response.json();

        if (response.status === "success") {
            setEmployee2(response.data);
        }
    };

    useEffect(() => {
        getEmpp();
    }, [empid]);

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        if (isOpen2 && inventoryId) {
            fetchDataFromApis(inventoryId);

        }
    }, [isOpen2, inventoryId]);

    const formatDateTimes = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };


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

    const fetchDataFromApis = (id) => {
        setIds(id)
        fetch(`${apiUrl}/inventory/inventoryLDOwner?inventoryId=${id}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {

                if (data.status === 'success') {

                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            formattedDates: item.updatedAt ? formatDateTimes(item.updatedAt) : null,

                        }));
                        setUsers2(formattedData);
                    } else {
                        console.error('API response does not contain companyList array:', data);
                    }
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchDataFromApis()
    }, []);


    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    console.log(projectId)

    const fetchDataFromApi = async () => {
        const {
            projectId, schemeId, schemeType,  plc, size, unitNos,
            allocatedTo, availability, registry, luckyDrawStatus
        } = filterByObj;

        const url = `${apiUrl}/inventory/getInventory?schemeId=${schemeId}&type=${schemeType}&unitNo=${unitNos || unitNo}&plc=${plc}&size=${size}&allocatedTo=${allocatedTo}&availability=${availability}&projectId=${projectId || selectedIds}&registry=${registry}&isEoi=false&luckyDrawStatus=${luckyDrawStatus}&isApproved=${selectedOptions}`;
        setLoading(true);
        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });
            const data = await response.json();
            setInventoryCount(data.totalCount)

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    formattedDate: item.createdAt ? formatDateTime(item.createdAt) : null,
                }));
                setUsers(formattedData);
            } else {
                console.error('Unexpected API response:', data);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };


    useEffect(() => {
        fetchDataFromApi()
    }, [filterByObj, selectedOptions, selectedIds,unitNo]);


    const fetchDataFromApiii = (id) => {
        const url = `${apiUrl}/inventory/allocateProperty?id=&mobileNumber=&emailId=&inventoryId=${inventoryId}&applicantId=${id}`;

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    if (Array.isArray(data.data)) {
                        setUsers4(data.data);
                        fetchDataFromApi()
                        toast.success(data.message);

                    } else {
                        console.error('API response does not contain companyList array:', data);
                    }
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchDataFromApiii()
    }, []);






    // const updateDataLdars = async (id) => {
    //     const url = `${apiUrl}/luckDraw/luckDraw?luckyDrawId=${id}`;
    //     try {
    //         let response = await fetch(url, {
    //             method: 'GET',
    //             headers: {
    //                 Authorization: `Bearer ${Token}`,
    //             },
    //         });

    //         // Ensure you check for a successful response
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const data = await response.json();

    //         if (data.status === 'success') {
    //             toast.success(data.message);
    //         } else {
    //             toast.error("Failed to update status");
    //         }
    //     } catch (error) {
    //         toast.error(`An error occurred while updating status: ${error.message}`);
    //     }
    // };



    useEffect(() => {
        // Calculate the payment value based on paymentPlan and update the state
        const value =
            employee2.paymentPlan === 'FPP'
                ? employee2?.plan?.basicPriceFPP || 'N/A'
                : employee2.paymentPlan === 'PLP'
                    ? employee2?.plan?.basicPricePLP || 'N/A'
                    : employee2.paymentPlan === 'DLP'
                        ? employee2?.plan?.basicPriceDLP || 'N/A'
                        : 'N/A';

        setPaymentValue(value);
    }, [employee2]);



    // useEffect(() => {
    //     if (location.state?.unitNo) {
    //         setUnitNo(location.state.unitNo);
    //         handleInputChange2({ target: { name: "unitNo", value: location.state.unitNo } }); 
    //     }
    // }, [location.state?.unitNo]);



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
            background: 'rgba(255, 255, 255, 0.3)', // Slight transparency for background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        },
        loaderContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',  // Increased gap for better visibility
        },
        dot: {
            width: '20px',  // Increased size for better visibility
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#3498db',  // Bright blue for emphasis
            animation: 'bounce 1.2s infinite ease-in-out',
        },
    };

    // Inject keyframes into the document
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


    return (
        <>
            <div className="page">
                <TopHeader />
                <Prince />

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Inventory Check({inventoryCount})
                                    </h2>

                                </div>


                                <div className="d-flex align-items-center">
                                    <label
                                        className={`me-4 d-flex align-items-center ${selectedOptions === 'false' ? 'selected' : ''}`}
                                    >
                                        <input
                                            type="radio"
                                            value="false"
                                            name="options"
                                            style={{ width: '20px', height: '20px', marginRight: '10px' }}
                                            checked={selectedOptions === 'false'}
                                            onChange={handleRadioChange}
                                        />
                                        Provisional
                                    </label>
                                    <label
                                        className={`me-4 d-flex align-items-center ${selectedOptions === 'true' ? 'selected' : ''}`}
                                    >
                                        <input
                                            type="radio"
                                            value="true"
                                            name="options"
                                            style={{ width: '20px', height: '20px', marginRight: '10px' }}
                                            checked={selectedOptions === 'true'}
                                            onChange={handleRadioChange}
                                        />
                                        Approved
                                    </label>
                                    <Link
                                        to={`${apiUrl}/sample/sampleInventory.xlsx`}
                                        download
                                        type="button"
                                        className="btn btn-primary my-2 btn-icon-text me-2"
                                    >
                                        Download Inventory
                                    </Link>
                                    <button
                                        onClick={handleOpenModal4}
                                        type="button"
                                        className="btn btn-primary my-2 btn-icon-text me-2"
                                    >
                                        Upload Inventory
                                    </button>

                                </div>


                            </div>
                            {/* End Page Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="row">
                                                    <div className="col-sm-3">


                                                        <div ref={dropdownRef} style={{ position: "relative", width: "300px" }}>
                                                            {/* Dropdown Header */}
                                                            <div
                                                                style={{
                                                                    height: "35px",
                                                                    border: "1px solid #ccc",
                                                                    padding: "10px",
                                                                    cursor: "pointer",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "space-between",
                                                                    overflow: "hidden", // Prevent content overflow
                                                                    textOverflow: "ellipsis", // Show "..." if text is too long
                                                                    whiteSpace: "nowrap", // Keep the text on a single line
                                                                    borderRadius: "5px",
                                                                }}
                                                                onClick={() => setIsOpen((prev) => !prev)}
                                                            >
                                                                <span>
                                                                    {selectedIds
                                                                        ? project.find((item) => item.id === selectedIds)?.projectName || "Select project"
                                                                        : "Select project"}
                                                                </span>
                                                            </div>

                                                            {/* Dropdown Items */}
                                                            {isOpen && (
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "0",
                                                                        width: "100%",
                                                                        maxHeight: "200px",
                                                                        overflowY: "scroll",
                                                                        border: "1px solid #ccc",
                                                                        backgroundColor: "#fff",
                                                                        zIndex: 1000,
                                                                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                                                        borderRadius: "4px",
                                                                    }}
                                                                >
                                                                    {/* Default option */}
                                                                    <div
                                                                        style={{
                                                                            padding: "10px",
                                                                            cursor: "pointer",
                                                                            borderBottom: "1px solid #eee",
                                                                            backgroundColor: "#fff",
                                                                        }}
                                                                        onClick={() => {
                                                                            setSelectedIds(null);
                                                                            setFilterByObj((prev) => ({ ...prev, projectId: "" }));
                                                                            setIsOpen(false); // Close dropdown after selection
                                                                        }}
                                                                    >
                                                                        Select project
                                                                    </div>

                                                                    {/* Loop through project options */}
                                                                    {project
                                                                        .filter((option) => option.projectName && option.projectName !== "N/A")
                                                                        .map((option) => (
                                                                            <div
                                                                                key={option.id}
                                                                                style={{
                                                                                    padding: "10px",
                                                                                    cursor: "pointer",
                                                                                    borderBottom: "1px solid #eee",
                                                                                    backgroundColor: selectedIds === option.id ? "#f1f1f1" : "#fff",
                                                                                    transition: "background-color 0.2s ease-in-out",
                                                                                }}
                                                                                onClick={() => {
                                                                                    setSelectedIds(option.id);
                                                                                    setFilterByObj((prev) => ({ ...prev, projectId: option.id }));
                                                                                    setIsOpen(false); // Close dropdown after selection
                                                                                }}
                                                                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
                                                                                onMouseLeave={(e) => (e.target.style.backgroundColor = selectedIds === option.id ? "#f1f1f1" : "#fff")}
                                                                            >
                                                                                {option.projectName}
                                                                            </div>
                                                                        ))}
                                                                </div>
                                                            )}
                                                        </div>

                                                    </div>
                                                    <div className="col-sm-3">
                                                        <select className="form-control select2"
                                                            name="schemeType"
                                                            value={filterByObj.schemeType}
                                                            onChange={handleInputChange2}
                                                        >
                                                            <option value=''>Select Type</option>
                                                            {displayStatus.map((option, index) => (
                                                                <option key={option.id} value={option.name}>
                                                                    {option.name}
                                                                </option>
                                                            ))}

                                                        </select>
                                                    </div>

                                                    <div className="col-sm-3">
                                                        <input
                                                            type="search"
                                                            className="form-control"
                                                            placeholder="Search Unit No.."
                                                           

                                                            name="unitNos"
                                                            value={filterByObj.unitNos}
                                                            onChange={handleInputChange2}
                                                            
                                                        />
                                                    </div>
                                                    {/* <div className="col-sm-3" >
                                                        <input
                                                            type="search"
                                                            className="form-control form-control"
                                                            placeholder="Search Size Sqft.."
                                                            aria-controls="example1"
                                                            name="size"
                                                            value={filterByObj.size}
                                                            onChange={handleInputChange2}
                                                            style={{ marginTop: '10px' }}
                                                        />
                                                    </div> */}
                                                    {/* <div className="col-sm-3" >
                                                        <input
                                                            type="search"
                                                            className="form-control form-control"
                                                            placeholder="Search PLC..."
                                                            aria-controls="example1"
                                                            style={{ marginTop: '10px' }}
                                                            name="plc"
                                                            value={filterByObj.plc}
                                                            onChange={handleInputChange2}
                                                        />
                                                    </div> */}



                                                    <div className="col-sm-3">
                                                        <select className="form-control select2"
                                                            name="luckyDrawStatus"
                                                            value={filterByObj.luckyDrawStatus}
                                                            onChange={handleInputChange2}>
                                                            <option value=''>LDUS</option>
                                                            <option>Available</option>
                                                            <option>Blocked</option>
                                                            <option>Allocated</option>
                                                        </select>
                                                    </div>
                                                    {/* <div className="col-sm-3" style={{ marginTop: '10px' }}>
                                                        <select className="form-control select2"
                                                            name="registry"
                                                            value={filterByObj.registry}
                                                            onChange={handleInputChange2}>
                                                            <option value=''>Registry</option>
                                                            <option>Done</option>
                                                            <option>Not Done</option>
                                                        </select>
                                                    </div> */}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                {loading ? (
                                                    <div style={loaderStyles.overlay}>
                                                        <div style={loaderStyles.loaderContainer}>
                                                            <div style={loaderStyles.dot}></div>
                                                            <div style={{ ...loaderStyles.dot, animationDelay: '0.2s' }}></div>
                                                            <div style={{ ...loaderStyles.dot, animationDelay: '0.4s' }}></div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <table id="example-input" style={{ width: '100%', borderCollapse: 'collapse' }} className="table table-bordered text-nowrap">
                                                        <thead>
                                                            <tr>
                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                }}>Project</th>
                                                                {selectedOptions !== 'false' && (
                                                                    <th style={{
                                                                        padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                        fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                    }}>Actual Project Name</th>
                                                                )}

                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '5px'
                                                                }}>Type</th>

                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                }}>Unit No</th>
                                                                {selectedOptions !== 'false' && (
                                                                    <th style={{
                                                                        padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                        fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                    }}>Actual Unit No</th>
                                                                )}

                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                }}>Size</th>
                                                                {selectedOptions !== 'false' && (
                                                                    <th style={{
                                                                        padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                        fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                    }}>Actual Size </th>
                                                                )}


                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                }}>PLC</th>
                                                                {selectedOptions !== 'false' && (
                                                                    <th style={{
                                                                        padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                        fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                    }}>Actual PLC</th>
                                                                )}

                                                                {/* <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                 fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Super Ar</th>

                                                                <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', 
                                                                fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Carpet</th> */}

                                                                {/* <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', 
                                                                fontWeight: 'bold', textAlign: 'left', minWidth: '50px' }}>Status</th> */}

                                                                <th
                                                                    style={{
                                                                        padding: '8px',
                                                                        border: '1px solid #ddd',
                                                                        backgroundColor: '#f2f2f2',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'left',
                                                                        minWidth: '50px',
                                                                        cursor: 'pointer'
                                                                    }}
                                                                    title="Lucky draw updated status"
                                                                >
                                                                    LDUS
                                                                </th>



                                                                {/* <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', 
                                                                fontWeight: 'bold', textAlign: 'left', minWidth: '50px' }}>NOC</th> */}

                                                                {/* <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                 fontWeight: 'bold', textAlign: 'left', minWidth: '50px' }}>Registry</th> */}

                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '50px'
                                                                }}>Last Update</th>

                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                }}>Allocated To</th>

                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                }}>Actions</th>

                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '50px'
                                                                }}>Remark</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {users.map((user) => (
                                                                <tr>
                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                                        <select className="form-control" style={{ width: '100%' }}>
                                                                            <option>{user.projectName}</option>


                                                                        </select>
                                                                    </td>
                                                                    {selectedOptions !== 'false' && (
                                                                        <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                                            <select className="form-control" style={{ width: '100%' }}>
                                                                                <option>{user.ActualProjectName}</option>


                                                                            </select>
                                                                        </td>
                                                                    )}
                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '120px' }}>
                                                                        <select className="form-control select2" style={{ width: '100%' }}>
                                                                            <option >{user.type}</option>

                                                                        </select>
                                                                    </td>
                                                                    {/* <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px', textAlign: 'center' }}>
                                                                        <span style={{
                                                                            fontSize: '20px',
                                                                            fontWeight: 'bold',
                                                                            color: '#ff5733',
                                                                            
                                                                            padding: '5px 10px',
                                                                            borderRadius: '5px',
                                                                            display: 'inline-block'
                                                                        }}>
                                                                            {user.unitNo}
                                                                        </span>
                                                                    </td> */}


                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px', textAlign: 'center' }}>
                                                                        <span style={{
                                                                            fontSize: '30px',

                                                                            color: 'blue',
                                                                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',

                                                                            padding: '5px 15px',
                                                                            borderRadius: '10px',
                                                                            display: 'inline-block'
                                                                        }}>
                                                                            {user.unitNo}
                                                                        </span>
                                                                    </td>



                                                                    {selectedOptions !== 'false' && (
                                                                        <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={user.ActualUnitNo || 'N/A'} />
                                                                        </td>
                                                                    )}
                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>

                                                                        <input
                                                                            className="form-control input-sm"
                                                                            type="text"
                                                                            name="row-1-age"
                                                                            defaultValue={`${user.size} ${(user.type === 'Plot' || user.type === 'Farmhouse') ? 'SQ YD' :
                                                                                user.type === 'Shop' ? 'SQ FT' :
                                                                                    ''
                                                                                }`}
                                                                        />

                                                                    </td>
                                                                    {selectedOptions !== 'false' && (
                                                                        <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>

                                                                            <input
                                                                                className="form-control input-sm"
                                                                                type="text"
                                                                                name="row-1-age"
                                                                                defaultValue={
                                                                                    user.ActualSize
                                                                                        ? `${user.ActualSize} ${user.type === 'Plot' || user.type === 'Farmhouse'
                                                                                            ? 'SQ YD'
                                                                                            : user.type === 'Shop'
                                                                                                ? 'SQ FT'
                                                                                                : ''
                                                                                        }`
                                                                                        : 'N/A' // Show nothing if ActualSize is null or undefined
                                                                                }
                                                                            />


                                                                        </td>
                                                                    )}
                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                        <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={user.plc} />
                                                                    </td>
                                                                    {selectedOptions !== 'false' && (
                                                                        <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={user.ActualPlc || 'N/A'} />
                                                                        </td>
                                                                    )}
                                                                    {/* <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                        <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={user.superArea} />
                                                                    </td>
                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                        <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={user.carpetArea} />
                                                                    </td> */}
                                                                    {/* <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>

                                                                        {user.status === 'Available' && (
                                                                            <>
                                                                                <span style={{ color: 'green' }}> {user.status}</span>
                                                                            </>
                                                                        )}
                                                                        {user.status === 'Allocated' && (
                                                                            <>
                                                                                <span style={{ color: 'red' }}> {user.status}</span>
                                                                            </>
                                                                        )}

                                                                    </td> */}
                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>

                                                                        {user.luckyDrawStatus === 'Available' && (
                                                                            <>
                                                                                <span style={{ color: 'green' }}>{user.luckyDrawStatus || 'N/A'}</span>
                                                                            </>
                                                                        )}
                                                                        {user.luckyDrawStatus === 'Allocated' && (
                                                                            <>
                                                                                <span style={{ color: 'red' }}>{user.luckyDrawStatus || 'N/A'}</span>
                                                                            </>
                                                                        )}

                                                                        {user.luckyDrawStatus === 'Awarded' && (
                                                                            <>
                                                                                <span style={{ color: 'orange' }}>{user.luckyDrawStatus || 'N/A'}</span>
                                                                            </>
                                                                        )}

                                                                    </td>
                                                                    {/* <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '70px', textAlign: 'center' }}>
                                                                        {user.NOC}
                                                                    </td> */}


                                                                    {/* <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '70px', textAlign: 'center' }}>
                                                                        {user.registration}
                                                                    </td> */}


                                                                    <td
                                                                        style={{
                                                                            padding: '8px',
                                                                            border: '1px solid #ddd',
                                                                            minWidth: '40px',
                                                                            fontFamily: 'Arial, sans-serif'
                                                                        }}
                                                                    >
                                                                        {user.formattedDate}
                                                                    </td>


                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '120px' }}>



                                                                        <button
                                                                            type="button"
                                                                            className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                            style={{ backgroundColor: 'green', color: 'white', border: 'none' }}

                                                                        // onClick={() => updateDataLdars(user.luckyDrawId)}
                                                                        >
                                                                            {user.unitNo}
                                                                        </button>
                                                                        <br />


                                                                        <div style={{ position: 'relative' }}>
                                                                            <span
                                                                                style={{
                                                                                    display: 'none',
                                                                                    position: 'absolute',
                                                                                    top: '20px',
                                                                                    left: '50%',
                                                                                    transform: 'translateX(-50%)',
                                                                                    whiteSpace: 'nowrap',
                                                                                    zIndex: 1
                                                                                }}
                                                                            >
                                                                                {empid2}({unitNo})
                                                                            </span>
                                                                            {(user.luckyDrawStatus === 'Awarded' || user.luckyDrawStatus === 'Available') && (
                                                                                <>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                        style={{ backgroundColor: 'gray', color: 'white', border: 'none' }}
                                                                                        onMouseEnter={(e) => {
                                                                                            e.target.previousSibling.style.display = 'block';
                                                                                        }}
                                                                                        onMouseLeave={(e) => {
                                                                                            e.target.previousSibling.style.display = 'none';
                                                                                        }}
                                                                                        onClick={() => handleOpenModal16(user.id)}
                                                                                    >
                                                                                        Allocate
                                                                                    </button>
                                                                                </>
                                                                            )}


                                                                            {isLuckyDraw === false ? (
                                                                                <>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                        style={{ backgroundColor: 'gray', color: 'white', border: 'none' }}
                                                                                        onMouseEnter={(e) => {
                                                                                            e.target.previousSibling.style.display = 'block';
                                                                                        }}
                                                                                        onMouseLeave={(e) => {
                                                                                            e.target.previousSibling.style.display = 'none';
                                                                                        }}
                                                                                        onClick={() => handleOpenModal16(user.id)}
                                                                                    >
                                                                                        Allocate
                                                                                    </button>
                                                                                </>
                                                                            ) : (
                                                                                <span></span>
                                                                            )}





                                                                        </div>

                                                                    </td>

                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                        <input
                                                                            className="form-control input-sm"
                                                                            type="text"
                                                                            name="row-1-age"
                                                                            defaultValue={`${user.allocationCount} (Applicant)`}
                                                                            onClick={(e) => {
                                                                                if (user.id) {
                                                                                    setIsOpen2(user.id);
                                                                                    setInventoryId(user.id);
                                                                                }
                                                                            }}
                                                                        />


                                                                        {isOpen2 && (
                                                                            <div
                                                                                className="sidebar sidebar-right sidebar-animate sidebar-open"
                                                                                style={{
                                                                                    cursor: "pointer",
                                                                                    top: "140px",
                                                                                    bottom: "700px",
                                                                                    right: isOpen2 ? "0" : "-720px",
                                                                                    width: "700px",
                                                                                    backgroundColor: "#fff",
                                                                                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                                                                    transition: "right 0.3s ease-in-out",
                                                                                }}
                                                                            >
                                                                                <div style={{ display: "flex", flexDirection: "column", height: "calc(100% - 70px)" }}>
                                                                                    <div
                                                                                        className="sidebar-header"
                                                                                        style={{
                                                                                            backgroundColor: "#f8f9fa",
                                                                                            padding: "20px",
                                                                                            borderBottom: "1px solid #ddd",
                                                                                            position: "relative",
                                                                                        }}
                                                                                    >
                                                                                        <h5 style={{ margin: "0", color: "#333" }}>Allocation Status</h5>
                                                                                        <button
                                                                                            onClick={() => setIsOpen2(false)}
                                                                                            style={{
                                                                                                border: "none",
                                                                                                background: "none",
                                                                                                color: "#999",
                                                                                                fontSize: "24px",
                                                                                                cursor: "pointer",
                                                                                                position: "absolute",
                                                                                                top: "20px",
                                                                                                right: "20px",
                                                                                            }}
                                                                                        >
                                                                                            &times;
                                                                                        </button>
                                                                                    </div>

                                                                                    <div className="sidebar-body" style={{ flex: "1", padding: "20px" }}>
                                                                                        <div className="table-responsive">
                                                                                            <table className="table table-striped table-bordered text-nowrap mb-5">
                                                                                                <thead>
                                                                                                    <tr>
                                                                                                        <th>Unit</th>
                                                                                                        <th>Allocated To</th>
                                                                                                        <th>Payment</th>
                                                                                                        <th>Actions</th>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    {users2.map((user, index) => (
                                                                                                        <tr key={index}>
                                                                                                            <td>
                                                                                                                Unit No: {user?.unitNo}
                                                                                                                <br />
                                                                                                                Size: {user?.size}
                                                                                                                <br />
                                                                                                                PLC: {user?.PLCs}
                                                                                                            </td>
                                                                                                            <td>
                                                                                                                {user?.applicantFirstName} {user?.applicantMiddleName} {user?.applicantLastName}
                                                                                                                <br />
                                                                                                                CID: {user?.id}
                                                                                                                <br />
                                                                                                                Ticket Id: {user?.ticketId}
                                                                                                                <br />
                                                                                                                Date: {user?.formattedDates}
                                                                                                                <br />
                                                                                                                {user?.days}
                                                                                                                <br />
                                                                                                                Status: <span>{user?.stage}</span>
                                                                                                            </td>
                                                                                                            <td>
                                                                                                                Total: {user?.totalCost || 'N/A'}
                                                                                                                <br />
                                                                                                                Paid: {user?.registrationAmount}
                                                                                                                <br />
                                                                                                                Due: {user?.totalCost - user?.registrationAmount}
                                                                                                                <br />
                                                                                                                Payment Plan: {user?.paymentPlan}
                                                                                                            </td>
                                                                                                            <td style={{ textAlign: "center" }}>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                                                    style={{
                                                                                                                        backgroundColor: "green",
                                                                                                                        color: "white",
                                                                                                                        border: "none",
                                                                                                                    }}
                                                                                                                >
                                                                                                                    Allocated
                                                                                                                </button>
                                                                                                                <br />
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                                                    style={{
                                                                                                                        backgroundColor: "red",
                                                                                                                        color: "white",
                                                                                                                        border: "none",
                                                                                                                    }}
                                                                                                                >
                                                                                                                    Cancel
                                                                                                                </button>
                                                                                                                <br />
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                                                    onClick={() => {
                                                                                                                        if (user?.id) {
                                                                                                                            fetchDataFromApiii(user?.id);
                                                                                                                        }
                                                                                                                    }}
                                                                                                                >
                                                                                                                    Reallocated
                                                                                                                </button>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    ))}
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}


                                                                    </td>

                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '400px' }}>
                                                                        <textarea
                                                                            className="form-control"
                                                                            name="row-1-comments"
                                                                            rows={1}
                                                                            defaultValue={user.remark || 'N/A'}
                                                                        />
                                                                    </td>

                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                        </div>
                    </div>
                </div>


                <div
                    className={`modal fade ${isModalOpen16 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{ display: isModalOpen3 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        style={{
                            maxWidth: '49000px',
                        }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                                overflow: 'hidden',
                                backgroundColor: '#fff'
                            }}
                        >
                            <div
                                className="modal-header"
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    borderBottom: '1px solid #dee2e6',
                                    padding: '15px 20px'
                                }}
                            >
                                <h5 className="modal-title" style={{ margin: 0 }}>Allocation</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal16}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body" style={{ padding: '10px' }}>
                                <form>
                                    <div className="row row-sm">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="card custom-card main-content-body-profile">
                                                <div
                                                    style={{
                                                        overflowX: 'auto',
                                                        maxWidth: '800%',
                                                        display: 'block',
                                                        scrollbarWidth: 'thin',
                                                    }}
                                                >
                                                    <table
                                                        align="center"
                                                        width="100%"
                                                        style={{
                                                            borderCollapse: 'collapse',
                                                            border: '1px solid #fcfcfc',
                                                            marginBottom: '20px',
                                                        }}
                                                    >
                                                        <thead>
                                                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '120px',
                                                                        padding: '5px',
                                                                        whiteSpace: 'nowrap',
                                                                    }}
                                                                >
                                                                    Client
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '120px',
                                                                        padding: '5px',
                                                                        whiteSpace: 'nowrap',
                                                                    }}
                                                                >
                                                                    Unit
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '120px',
                                                                        whiteSpace: 'nowrap'
                                                                    }}
                                                                >
                                                                    Area
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '200px',
                                                                    }}
                                                                >
                                                                    Plan
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '150px',
                                                                    }}
                                                                >
                                                                    BSP
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '150px',
                                                                    }}
                                                                >
                                                                    EDC/IDC
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '200px',
                                                                    }}
                                                                >
                                                                    PLC
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '200px',
                                                                    }}
                                                                >
                                                                    Total
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '200px',
                                                                    }}
                                                                >
                                                                    Gift
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        whiteSpace: 'nowrap'
                                                                    }}
                                                                >
                                                                    {employee2.applicantFirstName || 'N/A'} {employee2.applicantLastName || 'N/A'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {employee.unitNo || 'N/A'}
                                                                    <br />
                                                                    {employee.type || 'N/A'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >

                                                                    {(employee.type === 'Plot' || employee.type === 'Farmhouse') && (
                                                                        <>
                                                                            {employee.size || "N/A"} SQ YD
                                                                        </>
                                                                    )}

                                                                    {employee.type === 'Shop' && (
                                                                        <>
                                                                            {employee.size || "N/A"} SQ FT
                                                                        </>
                                                                    )}

                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {employee2.paymentPlan || 'N/A'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >

                                                                    {paymentValue}

                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {employee2?.plan?.fixedCharges || 'N/A'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        whiteSpace: 'nowrap',
                                                                    }}
                                                                >
                                                                    <select
                                                                        className="form-control select select2"
                                                                        name="PLCs"
                                                                        value={formData9.PLCs}
                                                                        onChange={handleInputChange9}
                                                                        style={{
                                                                            marginLeft: '6px',
                                                                            width: '100%',
                                                                        }}
                                                                    >
                                                                        <option value="">Select</option>
                                                                        {plc.map((option) => (
                                                                            <option key={option.id} value={option.name}>
                                                                                {option.name}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {total1 || '0.00'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                        <select
                                                                            className="form-control select select2"
                                                                            name="gift"
                                                                            value={formData9.gift}
                                                                            onChange={handleInputChange9}
                                                                            style={{
                                                                                marginBottom: '5px',
                                                                                width: '100%',
                                                                            }}
                                                                        >
                                                                            <option value="">Select</option>
                                                                            {gift.map((option) => (
                                                                                <option key={option.id} value={option.id}>
                                                                                    {option.giftName}
                                                                                </option>
                                                                            ))}
                                                                            <option value="other">Other</option>
                                                                        </select>
                                                                        {formData9.gift === 'other' && (
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Enter other gift"
                                                                                name="otherGift"
                                                                                value={formData9.otherGift}
                                                                                onChange={handleInputChange9}
                                                                                style={{
                                                                                    width: '100%',
                                                                                }}
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <td
                                                                    colSpan={4}
                                                                    style={{
                                                                        padding: '10px',
                                                                        border: '1px solid #ccc',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    All Total
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '10px',
                                                                        border: '1px solid #ccc',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {total1 || '0.00'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '10px',
                                                                        border: '1px solid #ccc',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {total5 || '0.00'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '10px',
                                                                        border: '1px solid #ccc',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {total2 || '0.00'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '10px',
                                                                        border: '1px solid #ccc',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {total6 || '0.00'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '10px',
                                                                        border: '1px solid #ccc',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {/* Empty cell for balance */}
                                                                    &nbsp;
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div
                                className="modal-footer"
                                style={{
                                    borderTop: '1px solid #dee2e6',
                                    padding: '15px 20px',
                                    backgroundColor: '#f8f9fa'
                                }}
                            >
                                <Link
                                    className="btn ripple btn-primary"
                                    to={`/views-welcome-letters/${empid}`}
                                    target="__blanck"
                                    style={{
                                        borderRadius: '5px',
                                        padding: '8px 20px',
                                        fontSize: '14px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    View WelCome Letter
                                </Link>

                                <button
                                    className="btn ripple btn-primary"
                                    type="button"
                                    onClick={handleOpenModal3}

                                    style={{
                                        borderRadius: '5px',
                                        padding: '8px 20px',
                                        fontSize: '14px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Change Plan
                                </button>
                                <button
                                    className="btn ripple btn-primary"
                                    type="button"
                                    onClick={handleSubmit}
                                    style={{
                                        borderRadius: '5px',
                                        padding: '8px 20px',
                                        fontSize: '14px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Allocate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className={`modal fade ${isModalOpen3 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{ display: isModalOpen3 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '70%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Plan Update</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal3}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body" style={{ padding: '20px' }}>
                                <form>
                                    <div className="row row-sm mt-0 justify-content-around">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="card custom-card">
                                                <div className="card-body">
                                                    <div className="table-responsive">

                                                        <h4
                                                            className="mt-0 text-center mb-3"
                                                            style={{ color: "#2e3192" }}
                                                        >
                                                            FLEXI PAYMENT PLAN
                                                        </h4>
                                                        <table className="table table-bordered">
                                                            <thead>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <th className="tx-left" >
                                                                        <label className="ckbox">
                                                                            <input
                                                                                style={{ height: 25 }}
                                                                                type="checkbox"
                                                                                value="option1"
                                                                                checked={selectedOption === 'option1'}
                                                                                onChange={handleOptionChange}

                                                                            />
                                                                            <span />
                                                                        </label>
                                                                    </th>

                                                                    <th className="tx-left" style={{ width: 350 }}>
                                                                        Basic Price ₹{" "}
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 90, height: 25, display: "inline" }}

                                                                            name="basicPriceFPP"
                                                                            value={formData12.basicPriceFPP}
                                                                            onChange={handleInputChange}


                                                                        />
                                                                        {" "} per {" "}
                                                                        <select className="form-control"
                                                                            name="areaUnitFPP"
                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                            value={formData12.areaUnitPLP}
                                                                            onChange={handleInputChange}


                                                                        >
                                                                            <option >Select</option>
                                                                            {size.map((option, index) => (
                                                                                <option key={option.id} value={option.name}>
                                                                                    {option.name}
                                                                                </option>
                                                                            ))}

                                                                        </select>

                                                                    </th>
                                                                    <th className="tx-left" >
                                                                        <span style={{
                                                                            marginLeft: '30px'

                                                                        }}> ( % )</span>
                                                                    </th>
                                                                    <th className="tx-left">
                                                                        <span style={{
                                                                            marginRight: 10,
                                                                            fontSize: "9px",
                                                                            // whiteSpace: "nowrap" 
                                                                        }}>
                                                                            Installment Amount for
                                                                        </span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 90, height: 25, display: "inline", marginRight: 10 }}
                                                                            name="areaFPP"
                                                                            value={formData12.areaPLP}
                                                                            onChange={handleInputChange}

                                                                        />  <span style={{ fontSize: '9px' }}>{formData12.areaUnitPLP} </span>

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
                                                                            value={formData12.onBookingPerFPP}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="onBookingFPP"
                                                                            value={total34 || formData12.onBookingFPP}
                                                                            onChange={(e) => setFormData({ ...formData12, onBookingFPP: e.target.value })}
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
                                                                            value={ins || formData12.installMentFPP}
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
                                                                            value={totals35 || formData12.totalValueFPP}
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

                                                                    <th className="tx-left" >
                                                                        <label className="ckbox">
                                                                            <input
                                                                                style={{ height: 25 }}
                                                                                type="checkbox"
                                                                                value="option2"
                                                                                checked={selectedOption === 'option2'}
                                                                                onChange={handleOptionChange}


                                                                            />
                                                                            <span />
                                                                        </label>
                                                                    </th>
                                                                    <th className="tx-left" style={{ width: 350 }}>
                                                                        Basic Price ₹{" "}
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                            name="basicPricePLP"
                                                                            value={formData12.basicPricePLP}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                        {" "} per {" "}
                                                                        <select className="form-control"
                                                                            name="areaUnitPLP"
                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                            value={formData12.areaUnitPLP}
                                                                            onChange={handleInputChange}


                                                                        >
                                                                            <option >Select</option>
                                                                            {size.map((option, index) => (
                                                                                <option key={option.id} value={option.name}>
                                                                                    {option.name}
                                                                                </option>
                                                                            ))}

                                                                        </select>
                                                                    </th>
                                                                    <th className="tx-left" >
                                                                        <span style={{
                                                                            marginLeft: '30px'

                                                                        }}> ( % )</span>
                                                                    </th>
                                                                    <th className="tx-left">
                                                                        <span style={{
                                                                            marginRight: 10,
                                                                            fontSize: "9px",
                                                                            // whiteSpace: "nowrap" 
                                                                        }}>
                                                                            Installment Amount for
                                                                        </span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 80, height: 25, display: "inline" }}
                                                                            name="areaPLP"
                                                                            value={formData12.areaPLP}
                                                                            onChange={handleInputChange}

                                                                        />   <span style={{ fontSize: '9px' }}>{formData12.areaUnitPLP}</span>
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
                                                                            value={formData12.onBookingPerPLP}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="onBookingPLP"
                                                                            value={totalss || formData12.onBookingPLP}
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
                                                                            value={formData12.days1PLP}
                                                                            onChange={handleInputChange}

                                                                        /> {" "}
                                                                        Days-
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn60PerPLP"
                                                                            value={formData12.withIn60PerPLP}
                                                                            onChange={handleInputChange}

                                                                        // style={{ color: 'white', backgroundColor: 'gray' }}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn60PLP"
                                                                            value={totalss1 || formData12.withIn60PLP}
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
                                                                            value={formData12.days2PLP}
                                                                            onChange={handleInputChange}

                                                                        /> {" "}
                                                                        Days-
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn90PerPLP"
                                                                            value={formData12.withIn90PerPLP}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn90PLP"
                                                                            value={totalss2 || formData12.withIn90PLP}
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
                                                                            value={formData12.days3PLP}
                                                                            onChange={handleInputChange}

                                                                        /> {" "}
                                                                        Days-
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn120PerPLP"
                                                                            value={formData12.withIn120PerPLP}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn120PLP"
                                                                            value={totalss3 || formData12.withIn120PLP}
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
                                                                            value={formData12.days4PLP}
                                                                            onChange={handleInputChange}

                                                                        /> {" "}
                                                                        Days-
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn150PerPLP"
                                                                            value={formData12.withIn150PerPLP}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn150PLP"
                                                                            value={totalss4 || formData12.withIn150PLP}
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
                                                                            value={formData12.days5PLP}
                                                                            onChange={handleInputChange}

                                                                        /> {" "}
                                                                        Days-
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn180PerPLP"
                                                                            value={formData12.withIn180PerPLP}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn120PLP"
                                                                            value={totalss5 || formData12.withIn180PLP}
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
                                                                            value={formData12.days6PLP}
                                                                            onChange={handleInputChange}

                                                                        /> {" "}
                                                                        Days-
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraPerPLP1"
                                                                            value={formData12.extraPerPLP1}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraValuePLP1"
                                                                            value={totalss7 || formData12.extraValuePLP1}
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
                                                                            value={formData12.days7PLP}
                                                                            onChange={handleInputChange}

                                                                        /> {" "}
                                                                        Days-
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraPerPLP2"
                                                                            value={formData12.extraPerPLP2}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraValuePLP2"
                                                                            value={totalss8 || formData12.extraValuePLP2}

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
                                                                            value={formData12.days8PLP}
                                                                            onChange={handleInputChange}

                                                                        /> {" "}
                                                                        Days-
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraPerPLP3"
                                                                            value={formData12.extraPerPLP3}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraValuePLP3"
                                                                            value={totalss9 || formData12.extraValuePLP3}
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
                                                                            value={formData12.restOnRegistryPerPLP}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="restOnRegistryPLP"
                                                                            value={totalss6 || formData12.restOnRegistryPLP}
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
                                                                            value={totalss10 || formData12.totalValuePLP}
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
                                                                    <th className="tx-left" >
                                                                        <label className="ckbox">
                                                                            <input
                                                                                style={{ height: 25 }}
                                                                                type="checkbox"
                                                                                value="option3"
                                                                                checked={selectedOption === 'option3'}
                                                                                onChange={handleOptionChange}


                                                                            />
                                                                            <span />
                                                                        </label>
                                                                    </th>

                                                                    <th className="tx-left" style={{ width: 350 }}>
                                                                        Basic Price ₹{" "}
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                            name="basicPriceDLP"
                                                                            value={formData12.basicPriceDLP}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                        {" "} per {" "}
                                                                        <select className="form-control"
                                                                            name="areaUnitDLP"
                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                            value={formData12.areaUnitPLP}
                                                                            onChange={handleInputChange}


                                                                        >
                                                                            <option >Select</option>
                                                                            {size.map((option, index) => (
                                                                                <option key={option.id} value={option.name}>
                                                                                    {option.name}
                                                                                </option>
                                                                            ))}

                                                                        </select>

                                                                    </th>
                                                                    <th className="tx-left" >
                                                                        <span style={{
                                                                            marginLeft: '30px'

                                                                        }}> ( % )</span>
                                                                    </th>
                                                                    <th className="tx-left">
                                                                        <span style={{
                                                                            marginRight: 10,
                                                                            fontSize: "9px",
                                                                            // whiteSpace: "nowrap" 
                                                                        }}>
                                                                            Installment Amount for
                                                                        </span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 80, height: 25, display: "inline" }}
                                                                            name="areaDLP"
                                                                            value={formData12.areaPLP}
                                                                            onChange={handleInputChange}

                                                                        /> <span style={{ fontSize: '9px' }}>{formData12.areaUnitPLP}</span>


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
                                                                            value={formData12.onBookingPerDLP}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="onBookingDLP"
                                                                            value={totals || formData12.onBookingDLP}
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
                                                                            value={formData12.days1PLP}
                                                                            onChange={handleInputChange}

                                                                        /> {" "}
                                                                        Days-
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn30PerDLP"
                                                                            value={formData12.withIn30PerDLP}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn30DLP"
                                                                            value={totals1 || formData12.withIn30DLP}
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
                                                                            value={formData12.restOnRegistryPerDLP}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="restOnRegistryDLP"
                                                                            value={totals2 || formData12.restOnRegistryDLP}
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
                                                                            value={totals3 || formData12.totalValueDLP}
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
                                                                                    value={formData12.cornerPlc}
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
                                                                                    value={formData12.mainRoadPlc}
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
                                                                                    value={formData12.facultyParkPlc}
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
                                                                                    value={formData12.fixedCharges}
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

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                <button className="btn ripple btn-primary" type="button" onClick={handleUpdate} style={{
                                    borderRadius: '5px', padding: '8px 20px',
                                    fontSize: '14px', fontWeight: 'bold'

                                }} >
                                    Submit
                                </button>
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

export default InventoryCheckData

