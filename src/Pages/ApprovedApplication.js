import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { X } from 'react-feather';
import '../assets/plugins/notify/css/notifIt.css'
import toast1, { Toaster } from 'react-hot-toast';
import ReactPaginate from 'react-paginate';
import { Oval } from 'react-loader-spinner';
import { ClipLoader } from 'react-spinners';
import Inventory from "./Inventory";
import { BiCaretRight } from 'react-icons/bi';



const ApprovedApplication = () => {

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

    const dropdownRef = useRef(null);
    const dropdownRefs = useRef(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [from, setFrom] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [leadCounts, setLeadCounts] = useState('');

    const [formData, setFormData] = useState({
        schemeType: '',
        projectId: '',
    })
    const [inventoryAllocation, setInventoryAllocation] = useState({
        giftId: '',
        inventoryId: '',
        projectId: '',
        bsp: ''
    })
    const [filterByObj, setFilterByObj] = useState({
        search: '',
        from: '',
        to: '',
        projectId: '',
        schemeId: '',
        schemeType: '',
        stage: 'Applied',
        luckyDrawId: '',
        orderBy: 'desc',
        employeeId: ''
    });
    const [users, setUsers] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [scame, setScame] = useState([]);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isModalOpen8, setIsModalOpen8] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [leadCount, setLeadCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState([]);
    const [lucky, setLucky] = useState([]);
    const [isModalOpen56, setIsModalOpen56] = useState(false);
    const [gift, setGift] = useState([])
    const [inventory, setInventory] = useState([])
    const [projectId, setProjectId] = useState('')
    const [userId, setUserId] = useState('')
    const navigation = useNavigate()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState("");
    const [isOpens, setIsOpens] = useState(false);
    const [selectedIdss, setSelectedIdss] = useState("");
    const [employee2, setEmployee2] = useState({})
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [size, setSize] = useState([]);
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
    const [schemeIds, setSchemeIds] = useState('');
    const [schemeNames, setSchemeNames] = useState('');
    const [schemeNamess, setSchemeNamess] = useState('');
    const [tikitIDS, setTikitIDS] = useState('');
    const [customerName, setCustomerrName] = useState('');
    const [luckyDrawNameShow, setLuckyDrawNameShow] = useState('');
    const [loadings, setLoadings] = useState(false);
    const [reportingBossA, setReportingBossA] = useState([])


    const handleOpenModal3 = () => {
        fetchUserdd();
        setIsModalOpen3(true);
        document.body.classList.add('modal-open');
    };
    const handleCloseModal3 = () => {
        setIsModalOpen3(false);
        document.body.classList.remove('modal-open');
    };



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




    //Update plan
    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!selectedOption) {
            toast.error("Please select at least one option before submitting.");
            return;
        }

        try {
            const formDataToSend = new FormData();
            for (const key in formData12) {
                if (formData12[key] !== null) {
                    formDataToSend.append(key, formData12[key]);
                }
            }

            const url = `${apiUrl}/plan/addMasterPlan?planId=${employee2.planId}&isDuplicate=true&applicantId=${userId}`;

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

            getEmpp();
            handleCloseModal3();
            setFormData12(initialFormData12);
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);
        }
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData12((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



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



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefs.current && !dropdownRefs.current.contains(event.target)) {
                setIsOpens(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
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
    const loadcontent = (id) => {
        navigation(`/edit-customer/${id}`);
    };

    const loadcontent2 = (id, fullName, middleName, lastName) => {
        navigation(`/inventory-check/${id}/${fullName}/${lastName}`);
    };

    const notify2 = () => {
        toast.error('Applicant deleted successfully', {
            style: {
                width: 'auto',
                padding: '16px',
                backgroundColor: '#FF5722',
                color: 'white',
                borderRadius: '8px',
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: '9999',
            },
        });
    };

    const handleCloseModal = () => {
        setShowModal2(false);
    };

    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal8 = () => {
        setIsModalOpen8(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal8 = () => {
        setIsModalOpen8(false);
        document.body.classList.remove('modal-open');
    };

    const handleOpenModal56 = async (id, ids, schemeIds, schemeId, ticketId, schemeType, fullName, luckyDrawName) => {
        setSchemeNamess(schemeType);
        setSchemeNames(schemeId);
        setProjectId(id);
        setUserId(ids);
        setSchemeIds(schemeIds)
        setTikitIDS(ticketId);
        setCustomerrName(fullName);
        setLuckyDrawNameShow(luckyDrawName);
        setIsModalOpen56(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal56 = () => {
        setIsModalOpen56(false);
        document.body.classList.remove('modal-open');
    };


    const loadData = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
    useEffect(() => {
        loadData();
    }, []);

    const handleConfirm = () => {

        setIsModalOpen4(false);
        handleSubmit2();
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





    const getEmpp = async () => {
        const Token = localStorage.getItem("Token");
        let response = await fetch(`${apiUrl}/applicant/getApplicantById/${userId}`, {
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
    }, [userId]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const Token = localStorage.getItem('Token');
                const headers = Token ? { Authorization: `Bearer ${Token}` } : {};

                // Fetch reporting boss data
                const response = await fetch(`${apiUrl}/employee/allEmpDesig`, { headers });
                const data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setReportingBossA(data.data);
                } else {
                    console.error('API response does not contain an array for reporting bosses:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    //INVENTORY api 
    useEffect(() => {
        // Fetch inventory data
        fetch(
            `${apiUrl}/inventory/inventoryDropdown?projectId=${projectId || inventoryAllocation.projectId}&schemeType=${schemeNamess}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${Token}`,
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    // Map through data to include color based on status
                    const updatedData = data.data.map((item) => {
                        let color = ""; // Default color
                        if (item.status === "Available") color = "green";
                        else if (item.status === "Allocated") color = "red";
                        else if (item.status === "Awarded") color = "gold";

                        return { ...item, color }; // Add color field
                    });

                    setInventory(updatedData); // Update state with processed data
                } else {
                    console.error("API response is not in the expected format for inventory.");
                }
            })
            .catch((error) => {
                console.error("Error fetching inventory data:", error);
            });
    }, [inventoryAllocation.projectId, Token, projectId, apiUrl, schemeNamess]);



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

    const handleChangeInvotory = (event) => {
        const { name, value } = event.target;

        // Update both states
        setProjectId(value); // Update projectId
        setInventoryAllocation((prevState) => ({
            ...prevState,
            [name]: value, // Update inventoryAllocation.projectId
        }));
    };

    const handleChangeInvotorys = (event) => {
        const { name, value } = event.target;



        setInventoryAllocation((prevState) => ({
            ...prevState,
            [name]: value, // Update inventoryAllocation.projectId
        }));
    };


    //lucky api 
    useEffect(() => {
        fetch(`${apiUrl}/luckyDraw/luckDrawDropDown`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setLucky(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }
            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);


    useEffect(() => {
        fetch(`${apiUrl}/project/applicantProjectDropdown?&schemeId=${schemeIds}`)
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
    }, [schemeIds]);

    const handleChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);

        // Format the start and end dates if they are not null
        const formatDate = (date) => {
            if (date) {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}/${month}/${day}`;
            }
            return '';
        };

        // Update the filterByObj state with the formatted date range
        const formattedStartDate = formatDate(start);
        const formattedEndDate = formatDate(end);


        setFilterByObj(prevState => ({
            ...prevState,
            from: `${formattedStartDate}`,
            to: `${formattedEndDate}`
        }));
    };

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

    const handleSubmit2 = () => {
        const url = `${from}`;

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'applicants.xlsx');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

            })
            .catch((error) => {
                console.error('Error fetching or downloading file:', error);
            });
    };



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



    //delete Applicant
    const deletecontent = (id) => {
        fetch(`${apiUrl}/applicant/deleteApplicant/` + id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${Token}`,
            }
        })
            .then((res) => {
                if (res.ok) {
                    fetchDataFromApi();
                    notify2()
                    // toast.success("Applicant deleted successfully");
                } else {
                    throw new Error('Failed to delete');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };


    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };




    const fetchDataFromApi = async () => {
        const pageNumber = currentPage + 1;
        const { projectId, schemeId, schemeType, from, to, stage, search, luckyDrawId, orderBy, employeeId } = filterByObj;
        const url = `${apiUrl}/applicant/applicants?projectId=${projectId}&schemeId=${schemeId}&schemeType=${schemeType}&from=${from}&to=${to}&stage=${stage}&page=${pageNumber}&limit=${itemsPerPage}&search=${search}&luckyDrawId=${luckyDrawId}&employeeId=${employeeId}&isUpdated=0&resultStatus=0&isVerified=true&orderBy=${orderBy}`;

        setLoading(true);

        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });
            const data = await response.json();
            const fetchedLeadCount = data.applicantCount;
            setLeadCount(fetchedLeadCount);
            setLeadCounts(data.user);

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    formattedDate: item.applicantDOB ? formatDateTime(item.applicantDOB) : '',
                    formattedDate2: item.coApplicantDOB ? formatDateTime(item.coApplicantDOB) : '',
                    formattedDate3: item.chequeDate ? formatDateTime(item.chequeDate) : '',
                }));
                setUsers(formattedData);
                handleSubmit7();
            } else {
                console.error('API response error:', data.message || 'Invalid data format');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };


    const handleSubmits = async (id) => {
        try {
            const url = `${apiUrl}/applicant/notAllocated?applicantId=${id}`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }

            fetchDataFromApi()
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);
        }
    };


    const handleSubmit7 = (event) => {
        event.preventDefault();

        const pageNumber = currentPage + 1;
        const { projectId, schemeId, schemeType, from, to, stage, search, luckyDrawId } = filterByObj;
        const url = `${apiUrl}/applicant/export-to-excel?projectId=${projectId}&schemeId=${schemeId}&schemeType=${schemeType}&from=${from}&to=${to}&stage=${stage}&page=${pageNumber}&limit=${itemsPerPage}&search=${search}&luckyDrawId=${luckyDrawId}&isUpdated=0&resultStatus=0`;

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    setFrom(data.data.fileURL);
                    handleOpenModal4()
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };


    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        fetchDataFromApi();
    }, [currentPage, itemsPerPage, filterByObj]);




    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const currentPageData = users;

    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);


    const handleDownloadClick = () => {
        setShowModal(true);
    };


    const handleOkClick = () => {
        setShowModal(false);
        handleSubmit2();
    };

    const breakContent = (content, length) => {
        const chunks = [];
        for (let i = 0; i < content.length; i += length) {
            chunks.push(content.substring(i, i + length));
        }
        return chunks.join('<br />');
    };

    useEffect(() => {
        if (employee2?.paymentPlan) {
            setInventoryAllocation((prev) => ({
                ...prev,
                bsp:
                    employee2.paymentPlan === 'FPP'
                        ? employee2?.plan?.basicPriceFPP || ''
                        : employee2.paymentPlan === 'PLP'
                            ? employee2?.plan?.basicPricePLP || ''
                            : employee2.paymentPlan === 'DLP'
                                ? employee2?.plan?.basicPriceDLP || ''
                                : ''
            }));
        }
    }, [employee2]);


    const handleApproved = async () => {
        try {
            setLoadings(true);
            const url = `${apiUrl}/applicant/bookTheInventory?applicantId=${userId}&inventoryId=${inventoryAllocation.inventoryId}&giftId=${inventoryAllocation.giftId}&projectId=${projectId}&bsp=${inventoryAllocation.bsp}&paymentPlan=${employee2?.paymentPlan}`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            if (!response.ok) {
                // Parse the response JSON and extract the error message
                const errorResponse = await response.json();
                throw new Error(errorResponse.message);
            }

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }

            // Fetch new data after success
            fetchDataFromApi();
            handleCloseModal56();
            toast.success(response2.message);

        } catch (error) {
            // Display only the exact error message from the API response
            console.error('Error:', error);
            toast.error(error.message);
        }
        finally {
            setLoadings(false);
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
                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">

                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Approved Applications List ({leadCount})
                                    </h2>
                                </div>

                                <div className="d-flex align-items-center gap-3">

                                    <label className="me-4 d-flex align-items-center " style={{ marginTop: '8px' }}>
                                        <input
                                            type="radio"
                                            name="orderBy"
                                            value="asc"
                                            checked={filterByObj.orderBy === 'asc'}
                                            onChange={handleInputChange2}
                                            className="form-radio"
                                            style={{ fontSize: '20px', width: '20px', height: '20px', marginRight: '10px' }}
                                        />
                                        <span>Sort by ID (Ascending)</span>
                                    </label>
                                    <label className="me-4 d-flex align-items-center " style={{ marginTop: '8px' }}>
                                        <input
                                            type="radio"
                                            name="orderBy"
                                            value="desc"
                                            checked={filterByObj.orderBy === 'desc'}
                                            onChange={handleInputChange2}
                                            className="form-radio"
                                            style={{ fontSize: '20px', width: '20px', height: '20px', marginRight: '10px' }}
                                        />
                                        <span>Sort by ID (Descending)</span>
                                    </label>



                                </div>

                            </div>
                            {/* End Page Header */}
                            {!leadCounts === true &&
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card custom-card">
                                            <div className="card-body py-3">
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <input
                                                            type="search"
                                                            className="form-control form-control"
                                                            placeholder="Search by Name, PL-ID, Mobile No"
                                                            aria-controls="example1"
                                                            name="search"
                                                            value={filterByObj.search}
                                                            onChange={handleInputChange2}
                                                        />
                                                    </div>




                                                    <div className="col-sm-4">
                                                        <div ref={dropdownRefs} style={{ position: "relative", width: "408px" }}>
                                                            {/* Dropdown Header */}
                                                            <div
                                                                className="form-control select2"
                                                                style={{
                                                                    height: "35px",
                                                                    border: "1px solid #ccc",
                                                                    padding: "10px",
                                                                    cursor: "pointer",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "space-between",
                                                                    overflow: "hidden",
                                                                    textOverflow: "ellipsis",
                                                                    whiteSpace: "nowrap",
                                                                    borderRadius: "5px",
                                                                    marginTop: '3px',
                                                                    marginRight: '20px',
                                                                    backgroundColor: '#032852'
                                                                }}
                                                                onClick={() => setIsOpens((prev) => !prev)}
                                                            >
                                                                <span style={{ fontSize: '16px', color: 'white' }}>
                                                                    {selectedIdss
                                                                        ? lucky.find((item) => item.id === selectedIdss)?.name || " Select Lucky Draw"
                                                                        : " Select Lucky Draw"}
                                                                </span>

                                                                {/* Right-side dropdown icon */}
                                                                <span style={{ fontSize: '18px', color: 'white', marginLeft: '10px' }}>
                                                                    ▼
                                                                </span>
                                                            </div>

                                                            {/* Dropdown Items */}
                                                            {isOpens && (
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "0",
                                                                        width: "100%",
                                                                        maxHeight: "200px",
                                                                        overflowY: "scroll",
                                                                        border: "1px solid #ccc",
                                                                        backgroundColor: "red",
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
                                                                            fontSize: '16px'
                                                                        }}
                                                                        onClick={() => {
                                                                            setSelectedIdss(null);
                                                                            setFilterByObj((prev) => ({ ...prev, luckyDrawId: "" }));
                                                                            setIsOpens(false); // Close dropdown after selection
                                                                        }}
                                                                    >
                                                                        Select Lucky Draw
                                                                    </div>

                                                                    {/* Loop through project options */}
                                                                    {lucky
                                                                        .filter((option) => option.name && option.name !== "N/A")
                                                                        .map((option) => (
                                                                            <div
                                                                                key={option.id}
                                                                                style={{
                                                                                    padding: "10px",
                                                                                    cursor: "pointer",
                                                                                    borderBottom: "1px solid #eee",
                                                                                    backgroundColor: selectedIdss === option.id ? "#f1f1f1" : "#fff",
                                                                                    transition: "background-color 0.2s ease-in-out",
                                                                                    fontSize: '16px'
                                                                                }}
                                                                                onClick={() => {
                                                                                    setSelectedIdss(option.id);
                                                                                    setFilterByObj((prev) => ({ ...prev, luckyDrawId: option.id }));
                                                                                    setIsOpens(false); // Close dropdown after selection
                                                                                }}
                                                                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
                                                                                onMouseLeave={(e) => (e.target.style.backgroundColor = selectedIdss === option.id ? "#f1f1f1" : "#fff")}
                                                                            >
                                                                                {option.name}
                                                                            </div>
                                                                        ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>




                                                    <div className="col-sm-4">
                                                        <select className="form-control select2"
                                                            name="schemeId"
                                                            value={filterByObj.schemeId}
                                                            onChange={handleInputChange2}
                                                        >
                                                            <option value=''>Select Scheme</option>
                                                            {scame.map((option, index) => (
                                                                <option key={option.id} value={option.id}>
                                                                    {option.schemeName}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="col-sm-4" style={{ marginTop: '10px' }}>
                                                        <select
                                                            className="form-control select2"
                                                            name="employeeId"
                                                            value={filterByObj.employeeId}
                                                            onChange={handleInputChange2}
                                                        >
                                                            <option value="">Select Advisor</option>
                                                            {reportingBossA.map((option) => (
                                                                <option key={option.id} value={option.id}>
                                                                    {option.fullName}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="col-sm-4" style={{ marginTop: '10px' }}>
                                                        <div ref={dropdownRef} style={{ position: "relative", width: "408px" }}>
                                                            {/* Dropdown Header */}
                                                            <div
                                                                className="form-control select2"
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
                                                                    marginTop: '3px',
                                                                    marginRight: '20px'
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



                                                    <div className="col-sm-4" style={{ marginTop: '10px' }}>
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

                                                    <div className="col-sm-4" style={{ marginTop: '10px' }}>
                                                        <div className="input-group">
                                                            <div className="input-group-text border-end-0">
                                                                <i className="fe fe-calendar lh--9 op-6" />
                                                            </div>
                                                            <div style={{ flex: '1' }}>
                                                                <DatePicker
                                                                    selected={startDate}
                                                                    onChange={handleChange}
                                                                    startDate={startDate}
                                                                    endDate={endDate}
                                                                    selectsRange
                                                                    placeholderText="Select Date Range"

                                                                    dateFormat="dd/MM/yyyy"

                                                                    className="form-control fc-datepicker"
                                                                    style={{ height: '100%', width: '100%' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{" "}
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                            }
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="text-wrap">
                                                <div className="panel panel-primary tabs-style-3 p-0 tabs-style-3-0">
                                                    <div className="tab-content ">
                                                        <div className="tab-pane active" id="tab11">
                                                            <div className="table-responsive">
                                                                {!leadCounts === true &&
                                                                    <div className="d-flex align-items-center" >
                                                                        <div>
                                                                            <select
                                                                                id="itemsPerPage"
                                                                                className="form-select"
                                                                                value={itemsPerPage}
                                                                                onChange={handleItemsPerPageChange}
                                                                            >
                                                                                <option value={20}>20</option>
                                                                                <option value={50}>50</option>
                                                                                <option value={100}>100</option>
                                                                                <option value={200}>200</option>
                                                                                <option value={500}>500</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                }
                                                                {loading ? (
                                                                    <div style={loaderStyles.overlay}>
                                                                        <div style={loaderStyles.loaderContainer}>
                                                                            <div style={loaderStyles.dot}></div>
                                                                            <div style={{ ...loaderStyles.dot, animationDelay: '0.2s' }}></div>
                                                                            <div style={{ ...loaderStyles.dot, animationDelay: '0.4s' }}></div>
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <table className="table table-striped table-bordered mb-0 text-nowrap">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>
                                                                                    <label className="ckbox">
                                                                                        <input type="checkbox" defaultValue={5} />
                                                                                        <span />
                                                                                    </label>
                                                                                </th>
                                                                                <th>ID</th>
                                                                                <th >Applicant Ticket ID</th>
                                                                                <th>LD PAYMENT  </th>
                                                                                <th>Applicant Name</th>
                                                                                <th>Applicant Address</th>
                                                                                <th>Applicant Details</th>
                                                                                <th width="10%">Co Applicant Image</th>
                                                                                <th>Co Applicant Name</th>
                                                                                <th>Co Applicant Address</th>
                                                                                <th>Co Applicant Details</th>
                                                                                <th>PROPERTY</th>
                                                                                <th>PREFERENCES</th>

                                                                                <th>LD Awarded Unit</th>
                                                                                <th>Actions</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>

                                                                            {currentPageData.map((user) => (

                                                                                <tr>
                                                                                    <td>
                                                                                        <label className="ckbox">
                                                                                            <input type="checkbox" defaultValue={5} />
                                                                                            <span />
                                                                                        </label>
                                                                                    </td>
                                                                                    <td >
                                                                                        <strong style={{ color: '#007bff' }}>UID:</strong> {user.id}
                                                                                        <br />

                                                                                        <strong style={{ color: '#007bff' }}>Registration Open Date:</strong>{" "}
                                                                                        {(() => {
                                                                                            const formatDateTime = (date, time) => {
                                                                                                if (!date || !time) return 'N/A';
                                                                                                try {
                                                                                                    const dateTime = new Date(`${date}T${time}`);
                                                                                                    const formattedDate = dateTime.toLocaleString('en-GB', {
                                                                                                        day: '2-digit',
                                                                                                        month: 'short',
                                                                                                        year: 'numeric',
                                                                                                    });
                                                                                                    const formattedTime = dateTime.toLocaleString('en-US', {
                                                                                                        hour: '2-digit',
                                                                                                        minute: '2-digit',
                                                                                                        hour12: true,
                                                                                                    });
                                                                                                    return `${formattedDate} | Time: ${formattedTime}`;
                                                                                                } catch {
                                                                                                    return 'Invalid Date/Time';
                                                                                                }
                                                                                            };
                                                                                            return formatDateTime(user.luckyDraw?.startDate, user.luckyDraw?.startTime);
                                                                                        })()}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Registration Close Date:</strong>{" "}
                                                                                        {(() => {
                                                                                            const formatDateTime = (date, time) => {
                                                                                                if (!date || !time) return 'N/A';
                                                                                                try {
                                                                                                    const dateTime = new Date(`${date}T${time}`);
                                                                                                    const formattedDate = dateTime.toLocaleString('en-GB', {
                                                                                                        day: '2-digit',
                                                                                                        month: 'short',
                                                                                                        year: 'numeric',
                                                                                                    });
                                                                                                    const formattedTime = dateTime.toLocaleString('en-US', {
                                                                                                        hour: '2-digit',
                                                                                                        minute: '2-digit',
                                                                                                        hour12: true,
                                                                                                    });
                                                                                                    return `${formattedDate} | Time: ${formattedTime}`;
                                                                                                } catch {
                                                                                                    return 'Invalid Date/Time';
                                                                                                }
                                                                                            };
                                                                                            return formatDateTime(user.luckyDraw?.endDate, user.luckyDraw?.endTime);
                                                                                        })()}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>IP Address:</strong> {user.userIpAddress[0]?.ipAddress}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Device Name:</strong> {user.userIpAddress[0]?.deviceName}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Date:</strong> {new Date(user.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })} &nbsp;
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Time:</strong> {new Date(user.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Lucky Draw:</strong> {user?.luckyDraw?.luckyDrawNameAdmin || user.luckyDrawId || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Lucky Draw Date: {" "}</strong>
                                                                                        {new Date(user?.luckyDraw?.announcementDateTime).toLocaleDateString('en-GB', {
                                                                                            day: '2-digit',
                                                                                            month: 'long',
                                                                                            year: 'numeric'
                                                                                        })}


                                                                                    </td>
                                                                                    <td style={{ padding: '15px', textAlign: 'center' }}>
                                                                                        <strong style={{ color: '#007bff' }}>TID:</strong> {user.ticketId}
                                                                                        <br />
                                                                                        <br />

                                                                                        <button

                                                                                            onClick={() => handleOpenModal56(user.projectId, user.id, user.schemeIds, user.schemeId, user.ticketId, user.schemeType, user.fullName, user?.luckyDraw?.luckyDrawNameAdmin)}

                                                                                            type="button"
                                                                                            className="btn ripple btn-info btn-xs w-100 mb-1"

                                                                                        >
                                                                                            Award Unit
                                                                                        </button>

                                                                                        <br />
                                                                                        Award Unit Before Lucky Draw Open.
                                                                                        <br />
                                                                                        This will be visible to customer post -

                                                                                        <br />
                                                                                        Lucky Draw Open only.
                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Amount Received:</strong> {user.amountReceived || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Payment Status:</strong> {user.paymentStatus || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Payment Method:</strong> {user.paymentMethod || 'N/A'}
                                                                                        <br />
                                                                                        {user.paymentMethod === 'Cheque' && (
                                                                                            <>
                                                                                                <strong style={{ color: '#007bff' }}>Cheque No:</strong> {user.chequeNo || 'N/A'}
                                                                                                <br />
                                                                                                <strong style={{ color: '#007bff' }}>Cheque Details:</strong> {user.chequeDetails || 'N/A'}
                                                                                                <br />
                                                                                                <strong style={{ color: '#007bff' }}>Cheque Date:</strong> {user.formattedDate3 || 'N/A'}
                                                                                            </>
                                                                                        )}
                                                                                        {user.paymentMethod === 'Cash' && (
                                                                                            <>
                                                                                                <strong style={{ color: '#007bff' }}>Cash Remark:</strong> {user.cashRemark || 'N/A'}
                                                                                            </>
                                                                                        )}
                                                                                        {user.paymentMethod === 'Online' && (
                                                                                            <>
                                                                                                <strong style={{ color: '#007bff' }}>Transaction ID:</strong> {user.transactionID || 'N/A'}
                                                                                            </>
                                                                                        )}
                                                                                        {user.paymentMethod === 'POS' && (
                                                                                            <>
                                                                                                <strong style={{ color: '#007bff' }}>Transaction ID:</strong> {user.transactionID || 'N/A'}
                                                                                            </>
                                                                                        )}
                                                                                        <br />
                                                                                        Payment Receipt:{" "} <Link to={user.schemePaymentReceipt} title="Payment" target="blanck">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        Payment Proof:{" "} <Link to={user.schemeUploadedRecipt} title="Payment" target="blanck">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                                        </Link>
                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <img
                                                                                            alt="No Photo"
                                                                                            className="rounded-circle me-3"
                                                                                            src={user.applicantImage || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                                            style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '50%' }}
                                                                                        />
                                                                                        <br />
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>N:</strong> {user.fullName} 
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>E:</strong> {user.applicantEmail || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>M:</strong> +91 {user.applicantMobile || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Alt:</strong> +91 {user.applicantAlternateNumber || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}></strong> {user.applicantFatherName || 'N/A'}
                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Country:</strong> {user.applicantCountry || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>State:</strong> {user.applicantState || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>City:</strong> {user.applicantCity || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Pin code:</strong> {user.applicantPincode || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Landmark:</strong> {user.applicantLandMark || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Address:</strong> <div dangerouslySetInnerHTML={{ __html: breakContent(user.applicantAddress || 'N/A', 40) }} />

                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>DOB:</strong> {user.formattedDate || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Aadhaar Number:</strong> {user.applicantAadhaarNumber || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Aadhaar Image:</strong> <Link to={user.applicantAadhaarImage} title="Aadhaar Image" target="_blank">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer', color: '#17a2b8' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>PAN:</strong> {user.applicantPAN || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>PAN Image:</strong> <Link to={user.applicantPanImage} title="Pan Image" target="_blank">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer', color: '#17a2b8' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Nationality:</strong> {user.applicantNationality || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Profession:</strong> {user.applicantProfession || 'N/A'}
                                                                                    </td>
                                                                                    <td>
                                                                                        <img
                                                                                            alt="No Photo"
                                                                                            className="rounded-circle me-3"
                                                                                            src={user.coApplicantImage || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                                            style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '50%' }}
                                                                                        />
                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>N:</strong> {user.coApplicantFirstName || 'N/A'} {user.coApplicantMiddleName} {user.coApplicantLastName}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>E:</strong> {user.coApplicantEmail || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>M:</strong> +91 {user.coApplicantMobile || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Alt:</strong> +91 {user.coApplicantAlternateNumber || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}></strong> {user.coApplicantFatherName || 'N/A'}
                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Country:</strong> {user.coApplicantCountry || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>State:</strong> {user.coApplicantState || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>City:</strong> {user.coApplicantCity || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Pin code:</strong> {user.coApplicantPincode || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Landmark:</strong> {user.coApplicantLandMark || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Address:</strong> <div dangerouslySetInnerHTML={{ __html: breakContent(user.coApplicantAddress || 'N/A', 40) }} />

                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>DOB:</strong> {user.formattedDate2 || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Aadhaar Number:</strong> {user.coApplicantAadhaarNumber || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Aadhaar Image:</strong> <Link to={user.coApplicantAadhaarImage} title="Aadhaar Image" target="_blank">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer', color: '#17a2b8' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>PAN:</strong> {user.coApplicantPAN || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>PAN Image:</strong> <Link to={user.coApplicantPanImage} title="Pan Image" target="_blank">
                                                                                            <i className="fe fe-eye me-3" style={{ cursor: 'pointer', color: '#17a2b8' }} />
                                                                                        </Link>
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Nationality:</strong> {user.coApplicantNationality || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Profession:</strong> {user.coApplicantProfession || 'N/A'}
                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <div>
                                                                                            <strong style={{ color: '#007bff' }}>Scheme:</strong>{' '}
                                                                                            <span dangerouslySetInnerHTML={{ __html: breakContent(user.schemeId, 40) }} />
                                                                                        </div>

                                                                                        <strong style={{ color: '#007bff' }}> Project:</strong> {user.projectName || 'N/A'}

                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}> Advisor:</strong>  {user.advisorName || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}> Advisor Mobile No:</strong>  {user.advisorMobileNo || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}> Co Advisor:</strong>  {user.coAdvisorName || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}> Co Advisor Mobile No:</strong>  {user.coAdvisorMobileNo || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>LD Status:</strong> {user.formFillStatus || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Registration Open Date:</strong>{" "}
                                                                                        {(() => {
                                                                                            const formatDateTime = (date, time) => {
                                                                                                if (!date || !time) return 'N/A';
                                                                                                try {
                                                                                                    const dateTime = new Date(`${date}T${time}`);
                                                                                                    const formattedDate = dateTime.toLocaleString('en-GB', {
                                                                                                        day: '2-digit',
                                                                                                        month: 'short',
                                                                                                        year: 'numeric',
                                                                                                    });
                                                                                                    const formattedTime = dateTime.toLocaleString('en-US', {
                                                                                                        hour: '2-digit',
                                                                                                        minute: '2-digit',
                                                                                                        hour12: true,
                                                                                                    });
                                                                                                    return `${formattedDate} | Time: ${formattedTime}`;
                                                                                                } catch {
                                                                                                    return 'Invalid Date/Time';
                                                                                                }
                                                                                            };
                                                                                            return formatDateTime(user.luckyDraw?.startDate, user.luckyDraw?.startTime);
                                                                                        })()}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Registration Close Date:</strong>{" "}
                                                                                        {(() => {
                                                                                            const formatDateTime = (date, time) => {
                                                                                                if (!date || !time) return 'N/A';
                                                                                                try {
                                                                                                    const dateTime = new Date(`${date}T${time}`);
                                                                                                    const formattedDate = dateTime.toLocaleString('en-GB', {
                                                                                                        day: '2-digit',
                                                                                                        month: 'short',
                                                                                                        year: 'numeric',
                                                                                                    });
                                                                                                    const formattedTime = dateTime.toLocaleString('en-US', {
                                                                                                        hour: '2-digit',
                                                                                                        minute: '2-digit',
                                                                                                        hour12: true,
                                                                                                    });
                                                                                                    return `${formattedDate} | Time: ${formattedTime}`;
                                                                                                } catch {
                                                                                                    return 'Invalid Date/Time';
                                                                                                }
                                                                                            };
                                                                                            return formatDateTime(user.luckyDraw?.endDate, user.luckyDraw?.endTime);
                                                                                        })()}



                                                                                    </td>
                                                                                    <td style={{ padding: '15px' }}>
                                                                                        <strong style={{ color: '#007bff' }}>Unit Type:</strong> {user.schemeType || 'N/A'}
                                                                                        {/* <br />
                                                                                        <strong style={{ color: '#007bff' }}>Size:</strong>{" "} <font >
                                                                                            {(user?.schemeType === 'Plot' || user?.schemeType === 'Farmhouse')
                                                                                                ? (user?.size ? `${user.size} SQ YD` : 'N/A')
                                                                                                : user?.schemeType === 'Shop'
                                                                                                    ? (user?.size ? `${user.size} SQ FT` : 'N/A')
                                                                                                    : 'N/A'}
                                                                                        </font> */}
                                                                                        {/* <br />
                                                                                        <strong style={{ color: '#007bff' }}>Facing:</strong>
                                                                                        {
                                                                                            user.facing
                                                                                                ? user.facing.split(',').map((item, index) => (
                                                                                                    <React.Fragment key={index}>
                                                                                                        {item.trim()}
                                                                                                        {index !== user.facing.split(',').length - 1 && <br />}
                                                                                                    </React.Fragment>
                                                                                                ))
                                                                                                : "N/A"
                                                                                        } */}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Size:</strong> {user.sizeType || 'N/A'}
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Facing:</strong>
                                                                                        {
                                                                                            user.facing
                                                                                                ? user.facing.split(',').map((item, index) => (
                                                                                                    <React.Fragment key={index}>
                                                                                                        {item.trim()}
                                                                                                        {index !== user.facing.split(',').length - 1 && <br />}
                                                                                                    </React.Fragment>
                                                                                                ))
                                                                                                : "N/A"}

                                                                                    </td>

                                                                                    <td>
                                                                                        Unit no: <font color="red">{user.unitNo || 'N/A'}</font>
                                                                                        <br />
                                                                                        Area: {" "}
                                                                                        <font color='red'>
                                                                                            {(user?.schemeType === 'Plot' || user?.schemeType === 'Farmhouse')
                                                                                                ? (user?.area ? `${user.area} SQ YD` : 'N/A')
                                                                                                : user?.schemeType === 'Shop'
                                                                                                    ? (user?.area ? `${user.area} SQ FT` : 'N/A')
                                                                                                    : 'N/A'}
                                                                                        </font>
                                                                                        <br />
                                                                                        Gift: <font color="red">{user.gift || 'N/A'}</font>
                                                                                        <br />
                                                                                        <strong style={{ color: '#007bff' }}>Remark:</strong> {user.remarks[0]?.verifyRemark || 'N/A'}




                                                                                    </td>
                                                                                    <td style={{ textAlign: "center" }}>


                                                                                        <a
                                                                                            onClick={leadCounts !== true ? () => loadcontent(user.id) : undefined}
                                                                                            className={`btn ripple btn-dark btn-xs ${leadCounts === true ? "disabled" : ""}`}
                                                                                            style={leadCounts === true ? { pointerEvents: "none", opacity: 0.5 } : {}}
                                                                                        >
                                                                                            <i className="fa fa-edit" title="Enable" />
                                                                                        </a>
                                                                                        {" "}
                                                                                        {/* <a
                                                                                            onClick={leadCounts !== true ? () => deletecontent(user.id) : undefined}
                                                                                            className={`btn ripple btn-danger btn-xs ${leadCounts === true ? "disabled" : ""}`}
                                                                                            style={leadCounts === true ? { pointerEvents: "none", opacity: 0.5 } : {}}
                                                                                        >
                                                                                            <i
                                                                                                className="fa fa-trash"
                                                                                                title="Delete"
                                                                                            />
                                                                                        </a> */}

                                                                                        <br />

                                                                                        <br />

                                                                                        <button

                                                                                            onClick={() => handleOpenModal56(user.projectId, user.id, user.schemeIds, user.schemeId, user.ticketId, user.schemeType, user.fullName, user?.luckyDraw?.luckyDrawNameAdmin)}
                                                                                            type="button"
                                                                                            className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                            disabled={leadCounts === true}

                                                                                        >
                                                                                            Award Unit
                                                                                        </button>
                                                                                        <br />
                                                                                        <button
                                                                                            onClick={() => handleSubmits(user.id)}
                                                                                            type="button"
                                                                                            className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                            disabled={leadCounts === true}

                                                                                        >
                                                                                            Not Allocate
                                                                                        </button>



                                                                                    </td>
                                                                                </tr>
                                                                            ))
                                                                            }
                                                                        </tbody>
                                                                    </table>
                                                                )}

                                                                {!leadCounts === true &&
                                                                    <>

                                                                        <div className="d-flex align-items-center ">
                                                                            <div >

                                                                                <select
                                                                                    id="itemsPerPage"
                                                                                    className="form-select"
                                                                                    value={itemsPerPage}
                                                                                    onChange={handleItemsPerPageChange}
                                                                                >
                                                                                    <option value={20}>20</option>
                                                                                    <option value={50}>50</option>
                                                                                    <option value={100}>100</option>
                                                                                    <option value={200}>200</option>
                                                                                    <option value={500}>500</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pagination d-flex justify-content-center">
                                                                            <ReactPaginate
                                                                                previousLabel={'Previous'}
                                                                                nextLabel={'Next'}
                                                                                breakLabel={'...'}
                                                                                breakClassName={'break-me'}
                                                                                pageCount={Math.ceil(leadCount / itemsPerPage)}
                                                                                marginPagesDisplayed={2}
                                                                                pageRangeDisplayed={5}
                                                                                onPageChange={handlePageClick}
                                                                                containerClassName={'pagination'}
                                                                                activeClassName={'active'}
                                                                                previousLinkClassName={'page-link'}
                                                                                nextLinkClassName={'page-link'}
                                                                                disabledClassName={'disabled'}
                                                                                pageClassName={'page-item'}
                                                                                pageLinkClassName={'page-link'}
                                                                            />
                                                                        </div>
                                                                    </>
                                                                }

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                    className={`modal ${isModalOpen8 ? 'show' : ''}`}
                    style={{ display: isModalOpen8 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '300px', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Refund Request By App</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCloseModal8}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '4px', textAlign: 'center' }}>
                                <form>
                                    <div className="modal-body">
                                        Amount: 5100
                                        <br />
                                        Pade Mode: Cash
                                        <br />
                                        IGST BSBA: 4322
                                        <br />
                                        IGST: 777
                                        <br />
                                        Status: Unit Not Allocate
                                    </div>
                                    <div className="modal-footer d-flex justify-content-center">

                                        <button type="button" className="btn btn-primary" >
                                            Refund Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>



                <div
                    className={`modal fade ${isModalOpen56 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{ display: isModalOpen56 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '40%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Award({schemeNames})-({tikitIDS})-({customerName})-({luckyDrawNameShow})</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal56}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body" style={{ padding: '20px' }}>
                                <form>
                                    <div className="row row-sm">


                                        <div className="col-sm-4 form-group">
                                            <label className="form-label">Project Maped </label>
                                            <select className="form-control select2"
                                                name="projectId"
                                                value={projectId || inventoryAllocation.projectId}

                                                onChange={handleChangeInvotory}
                                            >
                                                <option value=''>Select </option>
                                                {project.map((option, index) => (
                                                    <option key={option.id} value={option.id}>
                                                        {option.projectName}
                                                    </option>
                                                ))}


                                            </select>
                                        </div>

                                        <div className="col-sm-4 form-group">
                                            <label className="form-label">Inventory Mapped</label>
                                            <div style={{ position: "relative" }}>
                                                <select
                                                    className="form-control select2"
                                                    name="inventoryId"
                                                    value={inventoryAllocation.inventoryId}
                                                    onChange={handleChangeInvotorys}
                                                    style={{
                                                        maxHeight: "200px",
                                                        overflowY: "auto",
                                                        WebkitAppearance: "none",
                                                        MozAppearance: "none",
                                                    }}
                                                >
                                                    <option value="">Select</option>
                                                    {inventory.map((option) => {
                                                        let optionStyle = {};

                                                        // Inline styles based on status
                                                        if (option.status === "Available") {
                                                            optionStyle = { color: "white", fontWeight: "bold", backgroundColor: "green" };
                                                        } else if (option.status === "Allocated") {
                                                            optionStyle = { color: "white", fontWeight: "bold", backgroundColor: "red" };
                                                        } else if (option.status === "Awarded") {
                                                            optionStyle = { color: "black", fontWeight: "bold", backgroundColor: "gold" };
                                                        } else {
                                                            optionStyle = { color: "black" };
                                                        }

                                                        return (
                                                            <option key={option.id} value={option.id} style={optionStyle}>
                                                                {option.name} - ({option.size} {option.type === 'Shop' ? 'Sq. Ft' : 'Sq. Yd'})
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        </div>




                                        <div className="col-sm-4 form-group">
                                            <label className="form-label">Gift </label>
                                            <select className="form-control select2"
                                                name="giftId"
                                                value={inventoryAllocation.giftId}
                                                onChange={handleChangeInvotorys}

                                            >
                                                <option value=''>Select </option>
                                                {gift.map((option, index) => (
                                                    <option key={option.name} value={option.id}>
                                                        {option.giftName}
                                                    </option>
                                                ))}



                                            </select>
                                        </div>

                                        <div className="col-sm-4 form-group">
                                            <label className="form-label">Payment Plan</label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                value={employee2?.paymentPlan}
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-sm-4 form-group">
                                            <label className="form-label">BSP</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={
                                                    employee2.paymentPlan === 'FPP'
                                                        ? employee2?.plan?.basicPriceFPP || ''
                                                        : employee2.paymentPlan === 'PLP'
                                                            ? employee2?.plan?.basicPricePLP || ''
                                                            : employee2.paymentPlan === 'DLP'
                                                                ? employee2?.plan?.basicPriceDLP || ''
                                                                : ''
                                                }
                                                readOnly
                                            />
                                        </div>
                                        {/* <div className="col-sm-4 form-group">
                                            <label className="form-label">PLC</label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                value={employee2?.PLCs || 'N/A'}
                                                readOnly
                                            />
                                        </div> */}

                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
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
                                <button className="btn ripple btn-primary" type="button" style={{
                                    borderRadius: '5px', padding: '8px 20px',
                                    fontSize: '14px', fontWeight: 'bold',
                                    cursor: loadings ? 'not-allowed' : 'pointer',
                                    opacity: loadings ? 0.7 : 1,
                                }} onClick={handleApproved}

                                    disabled={loadings}

                                >
                                    {loadings ? 'Loading...' : 'Award'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div >




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


                <div className="main-footer text-center" >
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
            </div >



        </>
    )
}

export default ApprovedApplication

