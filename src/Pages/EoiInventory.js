import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiCaretRight } from 'react-icons/bi';
import io from 'socket.io-client';
import View from "./From/View";
import { AiOutlineUser } from 'react-icons/ai';

const EoiInventory = () => {
    const navigate = useNavigate();

    const initialFormData = {
        excelUpload: '',
    };

    const initialFormData4 = {
        planId: '',
    };

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

        days1PLP: '',
        days2PLP: '',
        days3PLP: '',
        days4PLP: '',
        days5PLP: '',
        days6PLP: '',
        days7PLP: '',

        cornerPlc: '',
        mainRoadPlc: '',
        facultyParkPlc: '',
        fixedCharges: '',

    };

    const initialFormData8 = {
        type: '',
    };

    const initialFormData10 = {
        amount: '',
        collectionMode: '',
        collectionMode: '',
        enterDiscount: '',
        paymentCredit: '',
        handOverBy: '',
        collectedBy: '',
        uploadRecipt: '',
        select: '',
        amrsAccount: '',
        transactionNo: '',
        chequeDate: '',
        chequeNo: '',
        bankCheque: '',
        deposteToAmrs: '',



    };
    const [formData10, setFormData10] = useState(initialFormData10);
    const [reportingBossA, setReportingBossA] = useState([])
    const [formData2, setFormData2] = useState(initialFormData2);
    const [formData8, setFormData8] = useState(initialFormData8);
    const [formData4, setFormData4] = useState(initialFormData4);
    const [plan, setPlan] = useState([]);
    const [formData3, setFormData3] = useState(initialFormData);
    const [users, setUsers] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [userss, setUserss] = useState({});
    const [eoi, setEoi] = useState({});
    const [applicant, setApplicant] = useState({});
    const [inventory, setInventory] = useState('');
    const [search, setSearch] = useState('');
    const [searchss, setSearchss] = useState('');
    const [searchs, setSearchs] = useState('');
    const [loading, setLoading] = useState(true);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [isModalOpen6, setIsModalOpen6] = useState('');
    const [isModalOpen7, setIsModalOpen7] = useState('');
    const [isModalOpen10, setIsModalOpen10] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState('');
    const [disableInput2, setDisableInput2] = useState(true);
    const [profilePic, setProfilePic] = useState(null);
    const [profilePics, setProfilePics] = useState(null);
    const [size, setSize] = useState([])
    const [connected, setConnected] = useState(false);
    const [employee3, setEmployee3] = useState({})
    const [gift, setGift] = useState([])
    const [gifts, setGifts] = useState([])
    const [from, setFrom] = useState('')
    const [eois, setEois] = useState('');
    const [project, setProject] = useState([]);
    const [projects, setProjects] = useState([]);
    const [isModalOpen11, setIsModalOpen11] = useState(false);
    const [views, setViews] = useState({})
    const [view, setView] = useState('')
    const [ids, setIds] = useState('')

    const [isModalOpen16, setIsModalOpen16] = useState(false);
    const [employee4, setEmployee4] = useState({})
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState('');

    const [isModalOpens4, setIsModalOpens4] = useState(false);
    const [isModalOpens5, setIsModalOpens5] = useState('');
    const initialFormDatas = {
        bspSP: '',
        bspPLP: '',
        bspDLP: '',
        unitNo: '',
        for: '',
        size: '',
    };
    const [formDatas, setFormDatas] = useState(initialFormDatas);
    const [inventoryHistorys, setInventoryHistorys] = useState([]);
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const [timers, setTimers] = useState({});
    const [filterByObj, setFilterByObj] = useState({
        projectId: '',
        status: '',


    });


    const handleOpenModal2 = (id) => {
        setIsModalOpen3(id);
        setIsModalOpen2(true);
        document.body.classList.add('modal-open');
    };
    const handleCloseModal2 = () => {
        setIsModalOpen2(false);

        document.body.classList.remove('modal-open');
    };


    const handleOpenModals4 = (id) => {
        setIsModalOpens5(id);
        setIsModalOpens4(true);
        document.body.classList.add('modal-open');
    };
    const handleCloseModals4 = () => {
        setIsModalOpens4(false);

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


    const handleOpenModal16 = (id) => {
        setIds(id);
        setIsModalOpen16(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal16 = () => {
        setIsModalOpen16(false);
        document.body.classList.remove('modal-open');
    };

    const handleOpenModal5 = (project, id) => {
        setInventory(id);
        setIsModalOpen6(project);
        setIsModalOpen5(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal5 = () => {
        setIsModalOpen5(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal0 = () => {

        setIsModalOpen10(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal0 = () => {
        setIsModalOpen10(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal11 = (id) => {
        setView(id);

        setIsModalOpen11(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal11 = () => {
        setIsModalOpen11(false);
        document.body.classList.remove('modal-open');
    };

    const fetchInventorys = async () => {

        try {
            const url = `${apiUrl}/inventory/getInventoryById?inventoryId=${isModalOpen3}`;
            let result = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                    'Content-Type': 'application/json',
                },
            });

            result = await result.json();
            const { data } = result;

            setFormDatas((prevFormData) => ({
                ...prevFormData,

                bspSP: data?.bspSP,
                bspDLP: data?.bspDLP,
                bspPLP: data?.bspPLP,
                unitNo: data?.unitNo,
                for: data?.for,
                size: data?.size

            }));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {

        fetchInventorys();
    }, [isModalOpen3]);



    const handleInvetoryUpdates = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formDatas) {
                if (formDatas[key] !== null) {
                    formDataToSend.append(key, formDatas[key]);
                }
            }

            const response = await fetch(`${apiUrl}/inventory/updateInventory?inventoryId=${isModalOpen3}`, {
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
            handleCloseModal2();
            fetchDataFromApi();
            fetchInventorys();
            setFormDatas(initialFormDatas);
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);

        }
    };

    const handleInputChanges = (event) => {
        const { name, value } = event.target;
        setFormDatas({
            ...formDatas,
            [name]: value,
        });
    }


    const fetchHistoryInventoryData = async () => {

        try {
            const response = await fetch(`${apiUrl}/inventory/getInventoryHistory?inventoryId=${isModalOpens5}`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {
                setInventoryHistorys(data.data);
            } else {
                console.error('API response error:', data.message || 'Invalid companyList');
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    useEffect(() => {
        fetchHistoryInventoryData()
    }, [isModalOpens5]);

    async function getEmppps(id) {
        const url = `${apiUrl}/inventory/getInventoryById?inventoryId=${ids}`;
        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`
            },
        });
        response = await response.json();

        if (response.status === "success") {
            setEmployee4(response.data);
        }
    }

    useEffect(() => {
        getEmppps();
    }, [ids]);



    useEffect(() => {
        const url = `${apiUrl}/plan/eoiPlanDropdown?projectId=${isModalOpen6}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setPlan(data.data);
                    // setIds(data.data.id)
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, [isModalOpen6]);



    const handleOpenModal7 = (projects) => {

        setIsModalOpen7(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal7 = () => {
        setIsModalOpen7(false);
        document.body.classList.remove('modal-open');
    };

    const handlePlanSelect = (event) => {
        handleInputChange(event);
        const planId = event.target.value;
        setSelectedPlanId(planId);
        handleOpenModal7(planId);
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData4({
            ...formData4,
            [name]: value,
        });
    }


    const handleInputChange10 = (event) => {
        const { name, value } = event.target;
        setFormData10({
            ...formData10,
            [name]: value,
        });
    }

    const handleInputChange5 = (event) => {
        const { name, checked } = event.target;
        setFormData8(prevFormData => ({
            ...prevFormData,
            [name]: checked ? 'FPP' : ''
        }));
    };

    const handleInputChange6 = (event) => {
        const { name, checked } = event.target;
        setFormData8(prevFormData => ({
            ...prevFormData,
            [name]: checked ? 'PLP' : ''
        }));
    };

    const handleInputChange7 = (event) => {
        const { name, checked } = event.target;
        setFormData8(prevFormData => ({
            ...prevFormData,
            [name]: checked ? 'DLP' : ''
        }));
    };

    const handleFileChange15 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const applicantImageFile = files[0];

            if (applicantImageFile.type.startsWith('image/')) {


                setFormData10((prevData) => ({
                    ...prevData,
                    uploadRecipt: applicantImageFile,
                }));
            } else if (applicantImageFile.type === 'application/pdf') {
                // Handle PDF files
                setFormData10((prevData) => ({
                    ...prevData,
                    uploadRecipt: applicantImageFile,

                }));
            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };


    const fetchGifts = (search) => {
        fetch(`${apiUrl}/eoi/eoiApplicantFilter?search=${search}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setGifts(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }
            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    };

    useEffect(() => {
        fetchGifts(search);
    }, [search]);


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


    const handleSubmit10 = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData10) {
                if (formData10[key] !== null) {
                    formDataToSend.append(key, formData10[key]);
                }
            }

            const response = await fetch(`${apiUrl}/payment/addPayment?applicantId=${applicant}`, {
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
            handleCloseModal0()
            fetchDataFromApi()

            setFormData10(initialFormData10);
            toast.success(response2.message);


        } catch (error) {
            toast.error(error.message);

        }
    };


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


    //project api 
    useEffect(() => {
        fetch(`${apiUrl}/project/eoiProjectDropdown`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setProjects(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);


    useEffect(() => {
        async function getView() {
            const url = `${apiUrl}/eoi/getApplicantOfInventory?inventoryId=${view}`;

            let response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            response = await response.json();

            if (response.status === "success") {
                setViews(response.data);

            }
        }

        getView();
    }, [view]);



    const formatDateTimeApplied = (dateTimeString) => {
        const dateOptions = {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        };
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        const date = new Date(dateTimeString);
        const formattedDate = date.toLocaleDateString('en-IN', dateOptions);
        const formattedTime = date.toLocaleTimeString('en-IN', timeOptions);
        return { date: formattedDate, time: formattedTime };
    };

    async function getApplied() {
        const url = `${apiUrl}/eoi/applyDetailEoiFollowUp?applicantId=${applicant}`;
        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`
            },
        });
        response = await response.json();

        if (response.status === "success") {
            const paymentCreditDateTime = response.data.paymentLedger.paymentCredit;
            const createdAtDateTime = response.data.paymentLedger.createdAt;

            const formattedPaymentCredit = formatDateTimeApplied(paymentCreditDateTime);
            const formattedCreatedAt = formatDateTimeApplied(createdAtDateTime);

            setEmployee3({
                ...response.data,
                formattedPaymentCreditDate: formattedPaymentCredit.date,
                formattedPaymentCreditTime: formattedPaymentCredit.time,
                formattedCreatedAtDate: formattedCreatedAt.date,
                formattedCreatedAtTime: formattedCreatedAt.time
            });
        }
    }


    useEffect(() => {

        getApplied();
    }, [applicant, apiUrl, Token]);

    useEffect(() => {
        const Token = localStorage.getItem('Token');


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

    const handleSubmit2 = async () => {
        try {
            const { type } = formData8;
            const url = `${apiUrl}/eoi/eoiInventoryAllocation?isAllocated=true&inventoryId=${inventory}&applicantId=${applicant}&planId=${selectedPlanId}&type=${type}`;

            const formDataToSend = new FormData();

            for (const key in formData10) {
                if (formData10[key] !== null) {
                    formDataToSend.append(key, formData10[key]);
                }
            }

            const response = await fetch(url, {
                method: "POST", // Specifying POST method
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
                body: formDataToSend, // Assigning the form data
            });

            const data = await response.json();

            if (data.status === 'success') {
                toast.success(data.message);
                setFrom(data.data);
                handleCloseModal7();
                handleCloseModal5();
                handleCloseModal0()
                fetchDataFromApi();
            } else {
                console.error('API request was not successful:', data.message);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error(error.message);
        }
    };


    useEffect(() => {
        const fetchUser = async (selectedPlanId) => {
            try {
                const url = `${apiUrl}/plan/planById/${selectedPlanId}`;
                console.log(url);
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;
                const photo = data.brocehureImage;
                const photos = data.paymentPlanImage;
                setProfilePic(photo)
                setProfilePics(photos)
                // Update form data with fetched user data
                setFormData2((prevFormData) => ({
                    ...prevFormData,
                    brocehureImage: data.brocehureImage,
                    paymentPlanImage: data.paymentPlanImage,
                    schemeId: data.schemeId,
                    projectId: data.projectId,
                    companyId: data.companyId,
                    planDescription: data.planDescription,
                    basicPriceFPP: data.basicPriceFPP,
                    onBookingPerFPP: data.onBookingPerFPP,
                    onBookingFPP: data.onBookingFPP,
                    installMentFPP: data.installMentFPP,
                    totalValuePerFPP: data.totalValuePerFPP,
                    totalValueFPP: data.totalValueFPP,
                    createdAt: data.createdAt,
                    basicPricePLP: data.basicPricePLP,
                    onBookingPerPLP: data.onBookingPerPLP,
                    onBookingPLP: data.onBookingPLP,
                    withIn60PerPLP: data.withIn60PerPLP,
                    withIn60PLP: data.withIn60PLP,
                    withIn90PerPLP: data.withIn90PerPLP,
                    withIn90PLP: data.withIn90PLP,
                    withIn120PerPLP: data.withIn120PerPLP,
                    withIn120PLP: data.withIn120PLP,
                    withIn150PerPLP: data.withIn150PerPLP,
                    withIn150PLP: data.withIn150PLP,
                    withIn180PerPLP: data.withIn180PerPLP,
                    withIn180PLP: data.withIn180PLP,
                    restOnRegistryPerPLP: data.restOnRegistryPerPLP,
                    restOnRegistryPLP: data.restOnRegistryPLP,
                    basicPriceDLP: data.basicPriceDLP,
                    onBookingPerDLP: data.onBookingPerDLP,
                    onBookingDLP: data.onBookingDLP,
                    withIn30PerDLP: data.withIn30PerDLP,
                    withIn30DLP: data.withIn30DLP,
                    restOnRegistryPerDLP: data.restOnRegistryPerDLP,
                    restOnRegistryDLP: data.restOnRegistryDLP,
                    totalValuePerDLP: data.totalValuePerDLP,
                    totalValueDLP: data.totalValueDLP,

                    extraPLP1: data.extraPLP1,
                    extraPerPLP1: data.extraPerPLP1,
                    extraValuePLP1: data.extraValuePLP1,
                    companyPhoto: data.companyPhoto,
                    extraPLP2: data.extraPLP2,
                    extraPerPLP2: data.extraPerPLP2,
                    extraValuePLP2: data.extraValuePLP2,

                    extraPLP3: data.extraPLP3,
                    extraPerPLP3: data.extraPerPLP3,
                    extraValuePLP3: data.extraValuePLP3,

                    totalPerPLP: data.totalPerPLP,
                    totalValuePLP: data.totalValuePLP,
                    note: data.note,

                    areaFPP: data.areaFPP,
                    areaUnitFPP: data.areaUnitFPP,

                    areaPLP: data.areaPLP,
                    areaUnitPLP: data.areaUnitPLP,

                    areaDLP: data.areaDLP,
                    areaUnitDLP: data.areaUnitDLP,
                    days1PLP: data.days1PLP,
                    days2PLP: data.days2PLP,
                    days3PLP: data.days3PLP,
                    days4PLP: data.days4PLP,
                    days5PLP: data.days5PLP,
                    days6PLP: data.days6PLP,
                    days7PLP: data.days7PLP,

                    cornerPlc: data.cornerPlc,
                    mainRoadPlc: data.mainRoadPlc,
                    facultyParkPlc: data.facultyParkPlc,
                    fixedCharges: data.fixedCharges,

                }));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call fetchUser with selectedPlanId
        if (selectedPlanId) {
            fetchUser(selectedPlanId);
        }
    }, [selectedPlanId]);


    // Fetch data from API
    const fetchDataFromApi = async () => {
        const { projectId, status } = filterByObj;
        try {
            const response = await fetch(`${apiUrl}/inventory/getInventory?isEoi=true&search=${searchs}&projectId=${projectId}&status=${status}`, {
                headers: { Authorization: `Bearer ${Token}` },
            });
            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {
                setUsers(data.data);
                setTotalCount(data.totalCount);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error('Failed to fetch data from API.');
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchDataFromApi();
    }, [searchs, filterByObj]);


    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    async function getEmpp() {
        const url = `${apiUrl}/eoi/eoiApplicantInventory?applicantId=${applicant || ''}`;

        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        });
        response = await response.json();

        if (response.status === "success") {
            setUserss(response.data);
            fetchDataFromApi()


        }
    }


    useEffect(() => {


        getEmpp();
    }, [search, applicant, eoi]);




    async function getEmp() {
        const url = `${apiUrl}/eoi/getEoiApplicant?ticketId=${searchss || ''}`;

        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        });
        response = await response.json();

        if (response.status === "success") {
            const eoiData = response.data;
            const firstPaymentLedge = eoiData.paymentLedger?.[0];

            setEoi(eoiData);
            setApplicant(eoiData.id || '');
            fetchGifts()


            // Check if paymentLedge exists and has a non-null amount
            if (firstPaymentLedge && firstPaymentLedge.amount !== null) {
                setEois(firstPaymentLedge.amount); // Set the amount
            } else {
                setEois("N/A"); // Handle null amount
            }
        } else {
            // If the response is not successful or data is not present, reset searchss
            setSearch(''); // Resetting the search state
        }
    }


    useEffect(() => {


        getEmp();
    }, [searchss, applicant]);



    async function getEmpppp(id) {
        const url = `${apiUrl}/eoi/eoiInventoryAllocation?isAllocated=true&inventoryId=${id}&applicantId=${applicant}`;

        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        });
        response = await response.json();

        if (response.status === "success") {
            toast.success(response.message);
            fetchDataFromApi();
        }
        else {
            toast.error(response.message);
        }
    }

    const handleSubmit7 = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            // Append the file to formDataToSend
            formDataToSend.append('excelUpload', formData3.excelUpload);

            const response = await fetch(`${apiUrl}/inventory/createEoiInventory`, {
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

            handleCloseModal4()
            fetchDataFromApi()

            setFormData3(initialFormData);
            toast.success(response2.message);


        } catch (error) {
            toast.error(error.message);


        }
    };

    async function getCancel(id) {
        const url = `${apiUrl}/eoi/cancleEoiAllocation?inventoryId=${id}`;

        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        });
        response = await response.json();

        if (response.status === "success") {
            toast.success(response.message);
            getEmpp();
        }
        else {
            toast.error(response.message);
        }
    }


    async function getCancels(id) {
        const url = `${apiUrl}/eoi/cancleEoiAllocation?inventoryId=${id}`;

        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        });
        response = await response.json();

        if (response.status === "success") {
            toast.success(response.message);
            fetchDataFromApi();
            getEmpp();
        }
        else {
            toast.error(response.message);
        }
    }


    const handleCancelClick = () => {
        if (!search) {
            alert('Please search the applicant first..');
        } else {
            // Call the cancel function if search is not empty
            getCancel(userss.inventory.id);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Check if file is selected
        if (file) {
            // Check if file type is correct
            if (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                setFormData3({ ...formData3, excelUpload: file });
            } else {
                alert('Please upload a valid Excel file.');
            }
        }
    };

    const handleDownload = async () => {
        try {
            const response = await fetch(`${apiUrl}/uploads/sampleEoiInventory.xlsx`, {
                method: 'GET',
            });

            // Check if the response status is OK (200-299)
            if (!response.ok) {
                const errorData = await response.json(); // Read the response body as JSON
                const errorMessage = errorData.message || 'Error occurred while fetching the file.';
                throw new Error(errorMessage);
            }

            // If response is OK, proceed with file download
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'sampleEoiInventory.xlsx');
            document.body.appendChild(link);
            link.click();
            link.remove();

            // If needed, get success message from the API response
            // Since we're downloading a file, typically success messages aren't returned with file responses
            toast.success('File downloaded successfully!');
        } catch (error) {
            // Show error message
            console.error('Error downloading the file:', error);
            toast.error(`Error: ${error.message}`);
        }
    };


    const initialAmountValue = formData8.type === 'FPP'
        ? formData2.onBookingFPP
        : formData8.type === 'PLP'
            ? formData2.onBookingPLP
            : formData8.type === 'DLP'
                ? formData2.onBookingDLP
                : formData10.amount;


    useEffect(() => {
        const token = localStorage.getItem('Token');

        if (!token) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>
            {/* style={{ backgroundColor: 'white' }} */}
            <div className="page"  >
                <TopHeader />
                <Prince />
                <div className="main-content  pt-0" >
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}


                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5 d-flex align-items-center">
                                        <span style={{ whiteSpace: 'nowrap', marginRight: '10px' }}>EOI Inventory View {`(${totalCount})` || '(0)'}</span>

                                        <input
                                            type="text"
                                            className="form-control mx-2"
                                            style={{ width: '150px' }}
                                            placeholder="Unit no..."
                                            value={searchs}
                                            onChange={(e) => setSearchs(e.target.value)}
                                            disabled={!!search}
                                        />

                                        <input
                                            type="text"
                                            className="form-control mx-2"
                                            style={{ width: '200px' }}
                                            placeholder="UId, Name, Mobile No..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            disabled={!!searchs}
                                        />

                                        <select className="form-control select2 mx-2" style={{ width: '180px' }}
                                            name="projectId"
                                            value={filterByObj.projectId}
                                            onChange={handleInputChange2}>
                                            <option value=''>Select project</option>
                                            {projects.map((option, index) => (
                                                <option key={option.id} value={option.id}>
                                                    {option.projectName}
                                                </option>
                                            ))}
                                        </select>

                                        <select className="form-control select2 mx-2" style={{ width: '180px' }}
                                            name="status"
                                            value={filterByObj.status}
                                            onChange={handleInputChange2}>
                                            <option value=''>Status</option>
                                            <option>Available</option>
                                            <option>Hold</option>
                                            <option>Booked</option>
                                        </select>
                                    </h2>


                                    {/* Dropdown appears immediately below this input when `search` has a value */}
                                    {search && (
                                        <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', zIndex: 10 }}>
                                            <div className="box-container"
                                                style={{
                                                    border: '1px solid #ddd',
                                                    padding: '10px',
                                                    borderRadius: '8px',
                                                    backgroundColor: '#fff',
                                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                                    maxHeight: '200px',
                                                    overflowY: 'auto',
                                                    width: '100%' // Ensures the dropdown width matches the input field
                                                }}
                                            >
                                                {gifts.map((option, index) => (
                                                    <div
                                                        key={option.id}
                                                        style={{
                                                            marginBottom: '5px',
                                                            padding: '8px',
                                                            backgroundColor: searchss === option.id ? '#f5f5f5' : 'transparent',
                                                            cursor: 'pointer',
                                                            borderRadius: '6px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            transition: 'background-color 0.2s ease-in-out',
                                                        }}
                                                        onClick={() => setSearchss(option.id || '')}
                                                    >
                                                        <AiOutlineUser style={{ marginRight: '8px', color: '#007bff', fontSize: '20px' }} />
                                                        {option.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}


                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center" style={{ marginTop: '-5px' }}>
                                        <button
                                            onClick={handleOpenModal4}
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text me-2"
                                        >
                                            Upload Inventory
                                        </button>

                                        {/* Modal for Upload Inventory */}
                                        <div
                                            className={`modal ${isModalOpen4 ? 'show' : ''}`}
                                            style={{ display: isModalOpen4 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                                            tabIndex="-1"
                                            role="dialog"
                                        >
                                            <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px' }}>
                                                <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                                    <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                                        <h5 className="modal-title">Import Inventory</h5>
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
                                                    <div className="modal-body" style={{ padding: '20px' }}>
                                                        <form>
                                                            <div className="row row-sm">
                                                                <div className="col-sm-12 form-group">
                                                                    <label className="form-label">File Picker</label>
                                                                    <input
                                                                        type="file"
                                                                        accept=".xls, .xlsx"
                                                                        onChange={handleFileChange}
                                                                        className="form-control"
                                                                        style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '8px' }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                                        <button
                                                            className="btn ripple btn-primary"
                                                            type="button"
                                                            style={{ borderRadius: '5px', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold' }}
                                                            onClick={handleSubmit7}
                                                        >
                                                            Upload
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleDownload}
                                            download
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text me-2"
                                        >
                                            Download Inventory
                                        </button>
                                    </div>
                                </div>
                            </div>




                            <table
                                style={{
                                    width: 'calc(100% - 20px)',
                                    margin: '20px auto',
                                    borderCollapse: 'separate',
                                    borderSpacing: '0',
                                    fontFamily: 'Roboto, Arial, sans-serif',
                                    fontSize: '14px',
                                    color: '#333',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    marginTop: '5px',
                                }}
                            >
                                <thead>
                                    <tr style={{
                                        backgroundColor: '#f9f9f9',
                                        color: '#2C3E50',
                                        textAlign: 'left',
                                        height: '50px',
                                        fontWeight: 'bold',
                                        borderBottom: '2px solid #ddd',
                                    }}>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Project</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Customer ID</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Applicant ID</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>PID</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Name</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Subscription</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Paid Amount</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Membership</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{
                                        backgroundColor: '#fff', // White background for rows
                                        borderBottom: '1px solid #ddd', // Subtle row separator
                                    }}>
                                        <td style={{ padding: '12px' }}>{eoi?.project?.projectName || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{eoi?.ticketId || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{eoi?.id || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{eoi?.userId || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{`${eoi?.applicantFirstName || 'N/A'} ${eoi?.applicantLastName || ''}`}</td>
                                        <td style={{ padding: '12px' }}>{eoi?.projectsubscription?.eoiType || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{eois || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{eoi?.projectsubscription?.eoiCode || 'N/A'}</td>
                                    </tr>
                                </tbody>
                            </table>


                            <table
                                style={{
                                    width: 'calc(100% - 20px)', // Reduce width by 10px (5px on left and 5px on right)
                                    margin: '20px auto', // Keep it centered
                                    borderCollapse: 'separate', // Ensure border radius works with table
                                    borderSpacing: '0', // Remove extra spacing between borders
                                    fontFamily: 'Roboto, Arial, sans-serif',
                                    fontSize: '14px',
                                    color: '#333', // Neutral text color for a professional look
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
                                    borderRadius: '8px', // Rounded corners for the table
                                    overflow: 'hidden', // Ensure content doesn't overflow rounded corners
                                    marginTop: '5px',
                                }}
                            >
                                <thead>
                                    <tr style={{
                                        backgroundColor: '#f9f9f9', // Light background for the header
                                        color: '#2C3E50', // Dark gray text for professional contrast
                                        textAlign: 'left',
                                        height: '50px',
                                        fontWeight: 'bold',
                                        borderBottom: '2px solid #ddd', // Soft bottom border for separation
                                    }}>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>UNIT</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Size ( Sq Yd)</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>BSP (Rs.)</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>PLC</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>EDC/IDC (Rs.)</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Total Cost (Rs.)</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>PAYMENT PLAN</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>RECEIVED</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>STATUS</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>ON DATE</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{
                                        backgroundColor: '#fff', // White background for rows
                                        borderBottom: '1px solid #ddd', // Subtle row separator
                                    }}>
                                        <td style={{ padding: '12px' }}>{userss.inventory?.unitNo || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{userss.inventory?.size || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>
                                            {userss.paymentPlan === 'SP' && (userss.inventory?.bspSP || 'N/A')}
                                            {userss.paymentPlan === 'PLP' && (userss.inventory?.bspPLP || 'N/A')}
                                            {userss.paymentPlan === 'DLP' && (userss.inventory?.bspDLP || 'N/A')}
                                            {!['SP', 'PLP', 'DLP'].includes(userss.paymentPlan) && (
                                                userss.inventory?.bspDefault || 'N/A'
                                            )}
                                        </td>

                                        <td style={{ padding: '12px' }}>{userss.inventory?.plc || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{userss.inventory?.edcIdcValue || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{userss?.totalCost || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{userss?.paymentPlan || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{userss?.totolReceived || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{userss?.stage || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>N/A</td>
                                        <td style={{ padding: '12px' }}>
                                            <button
                                                onClick={() => getCancels(userss.inventory?.id)}
                                                style={{
                                                    padding: '4px 8px',
                                                    backgroundColor: '#f44336', // Red color for Cancel button
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    fontSize: '12px',
                                                    cursor: 'pointer',
                                                    transition: 'background-color 0.3s ease, transform 0.2s ease', // Smooth transition
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#d32f2f'; // Darker red on hover
                                                    e.target.style.transform = 'scale(1.05)'; // Slight scale up on hover
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = '#f44336'; // Original color on mouse leave
                                                    e.target.style.transform = 'scale(1)'; // Reset scale on mouse leave
                                                }}
                                            >
                                                Cancel
                                            </button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>



                            <div className="row row-sm" style={{ width: '103%' }}>
                                <div className="col-lg-12">
                                    <div className="">
                                        <div className="card-body">
                                            <div className="table-container" style={{ display: 'flex', gap: '40px' }}>


                                                <div className="row row-sm" style={{ width: '100%', marginTop: '-8px' }}>
                                                    <div className="col-lg-12">
                                                        <div className="card custom-card">
                                                            <div className="card-body">
                                                                <div className="text-wrap">
                                                                    <div className="panel panel-primary tabs-style-3 p-0 tabs-style-3-0">
                                                                        <div className="tab-content ">
                                                                            <div className="tab-pane active" id="tab11">
                                                                                <div className="table-responsive">

                                                                                    <table className="table table-striped table-bordered text-nowrap mb-0">
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th>Details</th>
                                                                                                <th>Other Changes</th>
                                                                                                <th>Super Plan</th>
                                                                                                <th>Down Plan</th>
                                                                                                <th>Possession Plan</th>
                                                                                                <th>Status</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            {Object.values(users).slice(0, 5000).map((user, index) => (
                                                                                                <tr>

                                                                                                    <td>
                                                                                                        <div style={{
                                                                                                            backgroundColor: user.status === 'Hold' ? '#e63946' : user.status === 'Booked' ? '#2a9d8f' : '#457b9d',
                                                                                                            color: '#fff',
                                                                                                            width: '60px',
                                                                                                            height: '60px',
                                                                                                            borderRadius: '50%',
                                                                                                            fontSize: '16px',
                                                                                                            fontWeight: 'bold',
                                                                                                            textAlign: 'center',
                                                                                                            lineHeight: '60px',
                                                                                                            marginBottom: '10px',
                                                                                                            marginLeft: '5px'
                                                                                                        }}>
                                                                                                            {user.unitNo || 'N/A'}
                                                                                                        </div>

                                                                                                        Type: {user.type || 'N/A'}
                                                                                                        <br />
                                                                                                        For: {user.for || 'N/A'}
                                                                                                        <br />
                                                                                                        Remark: {user.remark || 'N/A'}
                                                                                                    </td>

                                                                                                    <td>
                                                                                                        PLC: {user.plc || 'N/A'}
                                                                                                        <br />
                                                                                                        PLC Value: {user.plcValue || 'N/A'}
                                                                                                        <br />
                                                                                                        EDC/IDC Rate: {user.edcIdc || 'N/A'}
                                                                                                        <br />
                                                                                                        EDC/IDC Value(Rs): {user.edcIdcValue || 'N/A'}
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        BSP(Rs): {user.bspSP || 'N/A'}
                                                                                                        <br />
                                                                                                        Size(Sq.yd): {user.size || 'N/A'}
                                                                                                        <br />
                                                                                                        Total Cost(Rs):{Number(user.bspSP) * Number(user.size)}
                                                                                                        <br />
                                                                                                        Unit Cost(Rs): <span style={{ color: '#007bff' }}>{user.superPlan || 'N/A'}</span>
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        BSP(Rs): {user.bspDLP || 'N/A'}
                                                                                                        <br />
                                                                                                        Size(Sq.yd): {user.size || 'N/A'}
                                                                                                        <br />
                                                                                                        Total Cost(Rs): {Number(user.bspDLP) * Number(user.size)}
                                                                                                        <br />
                                                                                                        Unit Cost(Rs): <span style={{ color: '#007bff' }}>{user.dlp || 'N/A'}</span>



                                                                                                    </td>
                                                                                                    <td>
                                                                                                        BSP(Rs): {user.bspPLP || 'N/A'}
                                                                                                        <br />
                                                                                                        Size(Sq.yd): {user.size || 'N/A'}
                                                                                                        <br />
                                                                                                        Total Cost(Rs): {Number(user.bspPLP) * Number(user.size)}
                                                                                                        <br />
                                                                                                        Unit Cost(Rs): <span style={{ color: '#007bff' }}>{user.plp || 'N/A'}</span>
                                                                                                    </td>
                                                                                                    <td style={{ marginLeft: '70px' }}>

                                                                                                        Status:  <span style={{
                                                                                                            color:
                                                                                                                user.status === 'Booked'
                                                                                                                    ? 'green'
                                                                                                                    : user.status === 'Hold'
                                                                                                                        ? 'red'
                                                                                                                        : user.status === 'Available'
                                                                                                                            ? 'blue'
                                                                                                                            : 'black',
                                                                                                        }}>
                                                                                                            {user.status || 'N/A'}
                                                                                                        </span>
                                                                                                        <br />
                                                                                                        <span >
                                                                                                            {user.status === 'Available' && (
                                                                                                                <a
                                                                                                                    onClick={() => handleOpenModal2(user.id)}
                                                                                                                    style={{ marginLeft: '30px', cursor: 'pointer', title: 'Edit', marginTop: '5px' }}
                                                                                                                >
                                                                                                                    <i className="fa fa-edit me-3" />
                                                                                                                </a>
                                                                                                            )}
                                                                                                            {user.status === 'Available' && (
                                                                                                                <a
                                                                                                                    onClick={() => handleOpenModals4(user.id)}
                                                                                                                    style={{ marginLeft: '-6px', cursor: 'pointer', title: 'View', marginTop: '5px' }}
                                                                                                                >
                                                                                                                    <i className="fa fa-eye me-3" />
                                                                                                                </a>
                                                                                                            )}
                                                                                                        </span>



                                                                                                        {user.status === 'Booked' && (
                                                                                                            <>
                                                                                                                <strong>Allocated To:</strong>{" "}
                                                                                                                <a
                                                                                                                    onClick={() => handleOpenModal11(user.id)}
                                                                                                                    target="_blank"
                                                                                                                    title="View"
                                                                                                                    style={{ cursor: 'pointer' }}
                                                                                                                >
                                                                                                                    <i className="fe fe-eye me-3" style={{ color: '#0077b6' }} />
                                                                                                                </a>
                                                                                                            </>
                                                                                                        )}

                                                                                                        <br />
                                                                                                        <br />
                                                                                                        {user.status === 'Booked' && user.eoiApplicant[0]?.isWelcomeLetter === false && (
                                                                                                            <>
                                                                                                                <Link
                                                                                                                    to={`/eoi-welcome-letter/${user.eoiApplicant[0].id}`}
                                                                                                                    style={{
                                                                                                                        padding: '6px 10px',
                                                                                                                        backgroundColor: 'black',
                                                                                                                        color: '#fff',
                                                                                                                        border: 'none',
                                                                                                                        borderRadius: '4px',
                                                                                                                        fontSize: '12px',
                                                                                                                        cursor: user.showBookingButton === false ? 'not-allowed' : 'pointer',
                                                                                                                        transition: 'background-color 0.3s ease',
                                                                                                                        marginLeft: '-3px',
                                                                                                                        marginTop: '15px',
                                                                                                                        opacity: user.showBookingButton === false ? 0.6 : 1, // To visually indicate it's disabled
                                                                                                                    }}
                                                                                                                >
                                                                                                                    Welcome Letter
                                                                                                                </Link>
                                                                                                            </>
                                                                                                        )}

                                                                                                        <br />
                                                                                                        <br />
                                                                                                        {user.status === 'Booked' && user.eoiApplicant[0]?.isAllotmentLetter === false && (
                                                                                                            <>
                                                                                                                <Link
                                                                                                                    to={`/eoi-allotment-letter/${user.eoiApplicant[0].id}`}
                                                                                                                    style={{
                                                                                                                        padding: '6px 10px',
                                                                                                                        backgroundColor: 'black',
                                                                                                                        color: '#fff',
                                                                                                                        border: 'none',
                                                                                                                        borderRadius: '4px',
                                                                                                                        fontSize: '12px',
                                                                                                                        cursor: user.showBookingButton === false ? 'not-allowed' : 'pointer',
                                                                                                                        transition: 'background-color 0.3s ease',
                                                                                                                        marginLeft: '-3px',
                                                                                                                        marginBottom: '20px',
                                                                                                                        opacity: user.showBookingButton === false ? 0.6 : 1,
                                                                                                                    }}
                                                                                                                >
                                                                                                                    Allotment Letter
                                                                                                                </Link>
                                                                                                            </>
                                                                                                        )}


                                                                                                    </td>



                                                                                                </tr>
                                                                                            ))}

                                                                                        </tbody>
                                                                                    </table>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >




                <div
                    className={`modal fade ${isModalOpen16 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{
                        display: isModalOpen16 ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflow: isModalOpen16 ? 'hidden' : 'auto'
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered modal-xl"
                        style={{ maxWidth: '20%', margin: 'auto' }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <div
                                className="modal-header"
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    borderBottom: '1px solid #dee2e6',
                                    borderRadius: '10px 10px 0 0'
                                }}
                            >
                                <h5 className="modal-title">View </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal16}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body" style={{ padding: '20px' }}>
                                <form>
                                    <div className="row row-sm">
                                        <div className="col-sm-12 form-group">
                                            <div style={{ marginBottom: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc1"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        PLC: {employee4.plc}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        EDC/IDC: {employee4.edcIdc}
                                                    </label>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`modal ${isModalOpen5 ? 'show' : ''}`}
                    style={{ display: isModalOpen5 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Select Plan</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCloseModal5}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body" style={{ padding: '20px' }}>
                                <form>
                                    <div className="row row-sm">
                                        <div className="col-sm-12 form-group">
                                            <label className="form-label">Select Plan</label>
                                            <select
                                                className="form-control select select2"
                                                name="planId"
                                                value={formData4.planId}
                                                onChange={handlePlanSelect}
                                            >
                                                <option value=''>Select a Plan</option>
                                                {plan.map((option) => (
                                                    <option key={option.id} value={option.id}>
                                                        {option.planName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                <button className="btn ripple btn-primary" type="button"
                                    style={{ borderRadius: '5px', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold' }} onClick={() => getEmpppp()}
                                >
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className={`modal ${isModalOpen7 ? 'show' : ''}`}
                    style={{
                        display: isModalOpen7 ? 'block' : 'none',
                        position: 'fixed',
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
                    <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '90%', width: '90%' }} role="document">
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Payment plan</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                    onClick={handleCloseModal7}
                                >
                                    <span aria-hidden="true">&times;</span>

                                </button>

                            </div>

                            <div className="modal-body">
                                <form>

                                    <div className="page">
                                        {/* Main Content*/}
                                        <div className="main-content pt-0">
                                            <div className="main-container container-fluid">
                                                <div className="inner-body">
                                                    Amount: {employee3 && employee3.paymentLedger && `${employee3.paymentLedger.amount}`}
                                                    <br />
                                                    Mode: {employee3 && employee3.paymentLedger && `${employee3.paymentLedger.collectionMode}`}
                                                    <br />
                                                    {employee3 && employee3.paymentLedger && employee3.paymentLedger.collectionMode === 'Online' ? (
                                                        <>

                                                            Transaction ID: {employee3.paymentLedger.transactionNo}
                                                        </>

                                                    ) : null}



                                                    {employee3 && employee3.paymentLedger && employee3.paymentLedger.collectionMode === 'Cheque' ? (
                                                        <>

                                                            Cheque No: {employee3.paymentLedger.chequeNo}
                                                        </>

                                                    ) : null}
                                                    <br />
                                                    Payment Status: {employee3.paymentStatus}
                                                    <br />
                                                    Payment Date:  {employee3.formattedPaymentCreditDate}
                                                    <br />
                                                    Payment Time: {employee3.formattedPaymentCreditTime}
                                                    <br />

                                                    <div className="row row-sm mt-5 justify-content-around">
                                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                                            <div className="card custom-card">
                                                                <div className="card-body">
                                                                    <div className="table-responsive">

                                                                        <table className="table table-invoice table-borderless">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="30%">
                                                                                        <img

                                                                                            src={formData2.companyPhoto}
                                                                                            style={{ width: 150 }}
                                                                                        />
                                                                                    </td>
                                                                                    <td width="45%">

                                                                                        <h4 style={{

                                                                                            whiteSpace: "nowrap"
                                                                                        }}>{formData2.projectId}</h4>
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
                                                                                        <h6 style={{ textAlign: 'center', fontSize: '14px' }}>Date: {formData2.createdAt}</h6>
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
                                                                                    <th className="tx-left" >
                                                                                        <label className="ckbox">
                                                                                            <input
                                                                                                style={{ height: 25 }}
                                                                                                type="checkbox"
                                                                                                name="type"
                                                                                                checked={formData8.type === 'FPP'}
                                                                                                onChange={handleInputChange5}
                                                                                            />
                                                                                            <span />
                                                                                        </label>
                                                                                    </th>

                                                                                    <th className="tx-left" style={{ width: 300 }}>
                                                                                        Basic Price ₹{" "}
                                                                                        <input

                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                                            name="basicPriceFPP"
                                                                                            value={formData2.basicPriceFPP}
                                                                                            disabled={disableInput2}

                                                                                        />
                                                                                        {" "} per {" "}
                                                                                        <select className="form-control"
                                                                                            name="areaUnitFPP"
                                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                                            value={formData2.areaUnitFPP}
                                                                                            disabled={disableInput2}

                                                                                        >
                                                                                            <option >Select</option>
                                                                                            {size.map((option, index) => (
                                                                                                <option key={option.id} value={option.name}>
                                                                                                    {option.name}
                                                                                                </option>
                                                                                            ))}

                                                                                        </select>

                                                                                    </th>

                                                                                    <th className="tx-left" />
                                                                                    <th className="tx-left">
                                                                                        Installment Amount for
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            style={{ width: 80, height: 25, display: "inline" }}
                                                                                            name="areaFPP"
                                                                                            value={formData2.areaFPP}
                                                                                            disabled={disableInput2}

                                                                                        /> <span style={{ fontSize: '9px' }}>{formData2.areaUnitFPP}</span>

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
                                                                                            value={`${formData2.onBookingPerFPP}%`}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="onBookingFPP"
                                                                                            value={formData2.onBookingFPP}
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
                                                                                            value={formData2.installMentFPP}
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
                                                                                            value={formData2.totalValueFPP}
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
                                                                                    <th className="tx-left" >
                                                                                        <label className="ckbox">
                                                                                            <input type="checkbox"
                                                                                                style={{ height: 25 }}
                                                                                                name="type"
                                                                                                checked={formData8.type === 'PLP'}
                                                                                                onChange={handleInputChange6} />
                                                                                            <span />
                                                                                        </label>
                                                                                    </th>
                                                                                    <th className="tx-left" style={{ width: 330 }}>
                                                                                        Basic Price ₹{" "}
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                                            name="basicPricePLP"
                                                                                            value={formData2.basicPricePLP}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                        {" "} per {" "}
                                                                                        <select className="form-control"
                                                                                            name="areaUnitPLP"
                                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                                            value={formData2.areaUnitPLP}
                                                                                            disabled={disableInput2}

                                                                                        >
                                                                                            <option >Select</option>
                                                                                            {size.map((option, index) => (
                                                                                                <option key={option.id} value={option.name}>
                                                                                                    {option.name}
                                                                                                </option>
                                                                                            ))}

                                                                                        </select>
                                                                                    </th>
                                                                                    <th className="tx-left" />
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
                                                                                            value={formData2.areaPLP}
                                                                                            disabled={disableInput2}
                                                                                        />  <span style={{ fontSize: '9px' }}>{formData2.areaUnitPLP}</span>

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
                                                                                            value={`${formData2.onBookingPerPLP}%`}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="onBookingPLP"
                                                                                            value={formData2.onBookingPLP}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">2</td>
                                                                                    <td className="tx-left"> Within {formData2.days1PLP} Days-</td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="withIn60PerPLP"
                                                                                            value={`${formData2.withIn60PerPLP}%`}
                                                                                            disabled={disableInput2}
                                                                                        // style={{ color: 'white', backgroundColor: 'gray' }}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="withIn60PLP"
                                                                                            value={formData2.withIn60PLP}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">3</td>
                                                                                    <td className="tx-left"> Within {formData2.days2PLP} Days</td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="withIn90PerPLP"
                                                                                            value={`${formData2.withIn90PerPLP}%`}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="withIn90PLP"
                                                                                            value={formData2.withIn90PLP}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">4</td>
                                                                                    <td className="tx-left"> Within {formData2.days3PLP} Days</td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="withIn120PerPLP"
                                                                                            value={`${formData2.withIn120PerPLP}%`}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="withIn120PLP"
                                                                                            value={formData2.withIn120PLP}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">5</td>
                                                                                    <td className="tx-left"> Within {formData2.days4PLP} Days</td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="withIn150PerPLP"
                                                                                            value={`${formData2.withIn150PerPLP}%`}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="withIn150PLP"
                                                                                            value={formData2.withIn150PLP}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">6</td>
                                                                                    <td className="tx-left"> Within {formData2.days5PLP} Days</td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="withIn180PerPLP"
                                                                                            value={`${formData2.withIn180PerPLP}%`}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="withIn120PLP"
                                                                                            value={formData2.withIn180PLP}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">7</td>
                                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                        Within {formData2.days6PLP} Days
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="extraPerPLP1"
                                                                                            value={formData2.extraPerPLP1 ? `${formData2.extraPerPLP1}%` : ''}
                                                                                            disabled={disableInput2}

                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="extraValuePLP1"
                                                                                            value={formData2.extraValuePLP1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">8</td>
                                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                        Within {formData2.days7PLP} Days
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="extraPerPLP2"
                                                                                            value={formData2.extraPerPLP2 ? `${formData2.extraPerPLP2}%` : ''}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="extraValuePLP2"
                                                                                            value={formData2.extraValuePLP2}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">9</td>
                                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                        Within {formData2.days8PLP} Days
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="extraPerPLP3"
                                                                                            value={formData2.extraPerPLP3 ? `${formData2.extraPerPLP3}%` : ''}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="extraValuePLP3"
                                                                                            value={formData2.extraValuePLP3}
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
                                                                                            value={`${formData2.restOnRegistryPerPLP}%`}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="restOnRegistryPLP"
                                                                                            value={formData2.restOnRegistryPLP}
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
                                                                                            value={formData2.totalValuePLP}
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
                                                                                    <th className="tx-left" >
                                                                                        <label className="ckbox">
                                                                                            <input type="checkbox"
                                                                                                style={{ height: 25 }}
                                                                                                name="type"
                                                                                                checked={formData3.type === 'DLP'}
                                                                                                onChange={handleInputChange7} />
                                                                                            <span />
                                                                                        </label>
                                                                                    </th>

                                                                                    <th className="tx-left" style={{ width: 330 }}>
                                                                                        Basic Price ₹{" "}
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            style={{ width: 90, display: "inline" }}
                                                                                            name="basicPriceDLP"
                                                                                            value={formData2.basicPriceDLP}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                        {" "} per {" "}
                                                                                        <select className="form-control"
                                                                                            name="areaUnitDLP"
                                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                                            value={formData2.areaUnitDLP}
                                                                                            disabled={disableInput2}

                                                                                        >
                                                                                            <option >Select</option>
                                                                                            {size.map((option, index) => (
                                                                                                <option key={option.id} value={option.name}>
                                                                                                    {option.name}
                                                                                                </option>
                                                                                            ))}

                                                                                        </select>

                                                                                    </th>
                                                                                    <th className="tx-left" />
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
                                                                                            value={formData2.areaDLP}
                                                                                            disabled={disableInput2}
                                                                                        /> <span style={{ fontSize: '9px' }}>{formData2.areaUnitDLP}</span>

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
                                                                                            value={`${formData2.onBookingPerDLP}%`}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="onBookingDLP"
                                                                                            value={formData2.onBookingDLP}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">2</td>
                                                                                    <td className="tx-left">Within 30 Days-</td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="withIn30PerDLP"
                                                                                            value={`${formData2.withIn30PerDLP}%`}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="withIn30DLP"
                                                                                            value={formData2.withIn30DLP}
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
                                                                                            value={`${formData2.restOnRegistryPerDLP}%`}
                                                                                            disabled={disableInput2}
                                                                                        />
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="restOnRegistryDLP"
                                                                                            value={formData2.restOnRegistryDLP}
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
                                                                                            value={formData2.totalValueDLP}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <h4 className="mt-5 text-center mb-3" style={{ color: "#2e3192" }}>
                                                                            Payment plan (PLC Corner)
                                                                            {/* <span>-&gt; PLC/OTNER</span> */}
                                                                        </h4>

                                                                        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#f9f9f9' }}>
                                                                            <div style={{ overflowX: 'auto' }}>
                                                                                <table style={{ width: '100%' }}>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style={{ verticalAlign: 'middle', padding: '8px' }}>
                                                                                                <BiCaretRight style={{ marginRight: '5px' }} />
                                                                                                CORNER PLC:
                                                                                            </td>
                                                                                            <td style={{ textAlign: 'center', verticalAlign: 'middle', padding: '8px' }}>
                                                                                                <input type="text" className="form-control" style={{ padding: '8px', border: '1px solid #ccc', height: 25, borderRadius: '5px', width: 'calc(100% - 20px)', display: 'inline-block' }}
                                                                                                    value={formData2.cornerPlc} disabled={disableInput2} />
                                                                                                <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px' }}>%</span>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td style={{ verticalAlign: 'middle', padding: '8px' }}>
                                                                                                <BiCaretRight style={{ marginRight: '5px' }} />
                                                                                                Main Road PLC:
                                                                                            </td>

                                                                                            <td style={{ textAlign: 'center', verticalAlign: 'middle', padding: '8px' }}>
                                                                                                <input type="text" className="form-control" style={{ padding: '8px', border: '1px solid #ccc', height: 25, borderRadius: '5px', width: 'calc(100% - 20px)', display: 'inline-block' }}
                                                                                                    value={formData2.mainRoadPlc} disabled={disableInput2} />
                                                                                                <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px' }}>%</span>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td style={{ verticalAlign: 'middle', padding: '8px' }}>
                                                                                                <BiCaretRight style={{ marginRight: '5px' }} />
                                                                                                Facility or Park PLC:
                                                                                            </td>

                                                                                            <td style={{ textAlign: 'center', verticalAlign: 'middle', padding: '8px' }}>
                                                                                                <input type="text" className="form-control" style={{ padding: '8px', border: '1px solid #ccc', height: 25, borderRadius: '5px', width: 'calc(100% - 20px)', display: 'inline-block' }}
                                                                                                    value={formData2.facultyParkPlc} disabled={disableInput2} />
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
                                                                                                    value={formData2.fixedCharges} disabled={disableInput2} />
                                                                                                <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px' }}>%</span>
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
                                                                        <div className="row row-sm" style={{ marginTop: '20px' }}>
                                                                            <div className="col-12 mb-5">
                                                                                <button

                                                                                    className="btn btn-primary"
                                                                                    type="button"
                                                                                    style={{ borderRadius: '10px' }}
                                                                                    onClick={handleOpenModal0}

                                                                                >
                                                                                    Select
                                                                                </button>
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
                                        {/* End Main Content*/}
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>


                <div
                    className={`modal fade ${isModalOpen10 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{ display: isModalOpen10 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '40%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Add Payment</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal0}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body" style={{ padding: '20px' }}>
                                <form>
                                    <div className="row row-sm">

                                        <div className="col-sm-6 form-group">
                                            <label className="form-label">Amount: <span className="tx-danger">*</span></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="amount"
                                                value={formData10.amount || initialAmountValue} // This allows for user changes
                                                onChange={handleInputChange10}
                                            />

                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label"> Collection Mode: <span className="tx-danger">*</span></label>
                                            <select className="form-control select2"

                                                name="collectionMode"
                                                value={formData10.collectionMode}
                                                onChange={handleInputChange10}>
                                                <option value=''>Select </option>
                                                <option value={'Cash Deposit'}>Cash</option>
                                                <option value={'Online'}>Online</option>
                                                <option value={'Cheque'}>Cheque</option>

                                            </select>
                                        </div>
                                        {formData10.collectionMode === 'Cheque' && (
                                            <>
                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">Cheque Date</label>
                                                    <input type="date" className="form-control"
                                                        name="chequeDate"
                                                        value={formData10.chequeDate}
                                                        onChange={handleInputChange10} />
                                                </div>
                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">Cheque No</label>
                                                    <input type="text" className="form-control"
                                                        name="chequeNo"
                                                        value={formData10.chequeNo}
                                                        onChange={handleInputChange10}
                                                    />
                                                </div>
                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">Deposit to AMRS</label>
                                                    <select className="form-control select2"
                                                        name="amrsAccount"
                                                        value={formData10.amrsAccount}
                                                        onChange={handleInputChange10}

                                                    >
                                                        <option value=''>Select </option>
                                                        {project.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.name}
                                                            </option>
                                                        ))}

                                                    </select>
                                                </div>
                                                <div className="col-sm-6 form-group" >
                                                    <label className="form-label">Bank Cheque</label>
                                                    <input type="text" className="form-control"
                                                        name="deposteToAmrs"
                                                        value={formData10.deposteToAmrs}
                                                        onChange={handleInputChange10} />
                                                </div>

                                            </>
                                        )}
                                        {formData10.collectionMode === 'Cash Deposit' && (
                                            <>

                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">Enter Discount</label>
                                                    <input type="text" className="form-control"
                                                        name="enterDiscount"
                                                        value={formData10.enterDiscount}
                                                        onChange={handleInputChange10} />
                                                </div>

                                            </>
                                        )}
                                        {formData10.collectionMode === 'Online' && (
                                            <>
                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">Select</label>
                                                    <select className="form-control select2"
                                                        name="select"
                                                        value={formData10.select}
                                                        onChange={handleInputChange10}

                                                    >
                                                        <option value=''>Select </option>
                                                        <option >IMPS</option>
                                                        <option >NEFT</option>
                                                        <option >RTGS</option>

                                                    </select>
                                                </div>
                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">AMRS Account</label>
                                                    <select className="form-control select2"
                                                        name="amrsAccount"
                                                        value={formData10.amrsAccount}
                                                        onChange={handleInputChange10}

                                                    >
                                                        <option value=''>Select </option>
                                                        {project.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.name}
                                                            </option>
                                                        ))}

                                                    </select>
                                                </div>
                                                <div className="col-sm-6 form-group" >
                                                    <label className="form-label">Transaction No</label>
                                                    <input type="text" className="form-control"
                                                        name="transactionNo"
                                                        value={formData10.transactionNo}
                                                        onChange={handleInputChange10} />
                                                </div>

                                            </>
                                        )}

                                        <div className="col-sm-6 form-group">
                                            <label className="form-label">Payment Credit Date </label>
                                            <input type="date" className="form-control"
                                                name="paymentCredit"
                                                value={formData10.paymentCredit}
                                                onChange={handleInputChange10}
                                            />
                                        </div>
                                        <div className="col-sm-6 form-group">
                                            <label className="form-label">Handover By</label>
                                            <input type="text" className="form-control"
                                                name="handOverBy"
                                                value={formData10.handOverBy}
                                                onChange={handleInputChange10} />
                                        </div>


                                        <div className="col-sm-6">
                                            <label className="form-label"> Collect By <span className="tx-danger">*</span></label>
                                            <select
                                                className="form-control select2"
                                                name="collectedBy"
                                                value={formData10.collectedBy}
                                                onChange={handleInputChange10}
                                            >
                                                <option value="">Select</option>
                                                {reportingBossA.map((option, index) => (
                                                    <option key={option.id} value={option.id}>
                                                        {option.fullName}
                                                    </option>
                                                ))}
                                            </select>

                                        </div>

                                        <div className="col-sm-6">
                                            <label className="form-label"> Upload Receipt</label>
                                            <input type="file" className="form-control"
                                                name="uploadRecipt"
                                                accept="/pdf"
                                                onChange={handleFileChange15} />
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                <button className="btn ripple btn-primary" type="button" style={{
                                    borderRadius: '5px',
                                    padding: '8px 20px', fontSize: '14px', fontWeight: 'bold'
                                }} onClick={handleSubmit2}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className={`modal fade ${isModalOpen11 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{
                        display: isModalOpen11 ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflow: isModalOpen11 ? 'hidden' : 'auto'
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered modal-xl"
                        style={{ maxWidth: '20%', margin: 'auto' }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <div
                                className="modal-header"
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    borderBottom: '1px solid #dee2e6',
                                    borderRadius: '10px 10px 0 0'
                                }}
                            >
                                <h5 className="modal-title">Owners Details </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal11}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body" style={{ padding: '20px' }}>
                                <form>
                                    <div className="row row-sm">
                                        <div className="col-sm-12 form-group">
                                            <div style={{ marginBottom: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc1"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        UID: {views.id}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Ticket Id: {views.ticketId}
                                                    </label>
                                                </div>

                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Name: {views.applicantFirstName} {views.applicantLastName}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Email: {views.applicantEmail}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Mobile No: {views.applicantMobile}
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className={`modal fade ${isModalOpen2 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{ display: isModalOpen2 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '40%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">UNIT: ({formDatas.unitNo}) ::: SIZE(Sq.yd): ({formDatas.size}) ::: FOR: ({formDatas.for}) </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal2}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body" style={{ padding: '20px' }}>
                                <form>
                                    <div className="row row-sm">

                                        <div className="col-sm-4 form-group">
                                            <label className="form-label">Super Plan BSP</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="bspSP"
                                                value={formDatas.bspSP}
                                                onChange={handleInputChanges}

                                            />
                                        </div>
                                        <div className="col-sm-4 form-group">
                                            <label className="form-label">Down Plan BSP</label>
                                            <input type="text" className="form-control"
                                                name="bspDLP"
                                                value={formDatas.bspDLP}
                                                onChange={handleInputChanges}

                                            />
                                        </div>

                                        <div className="col-sm-4 form-group">
                                            <label className="form-label">Possession Plan BSP</label>
                                            <input type="text" className="form-control"
                                                name="bspPLP"
                                                value={formDatas.bspPLP}
                                                onChange={handleInputChanges}

                                            />
                                        </div>




                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                <button className="btn ripple btn-primary" type="button" style={{
                                    borderRadius: '5px', padding: '8px 20px',
                                    fontSize: '14px', fontWeight: 'bold'
                                }} onClick={handleInvetoryUpdates}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                <div
                    className={`modal fade ${isModalOpens4 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{
                        display: isModalOpens4 ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                >
                    <div style={{ maxWidth: '100%', margin: 'auto', marginTop: '90px', padding: '30px 30px' }}>
                        <div
                            className="modal-content"
                            style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}
                        >
                            <div
                                className="modal-header"
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    borderBottom: '1px solid #dee2e6',
                                    borderRadius: '10px 10px 0 0',
                                }}
                            >
                                <h5 className="modal-title">Unit Price Change History</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModals4}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            {/* Modal body with scrollable content */}
                            <div
                                className="modal-body"
                                style={{
                                    padding: '20px',
                                    maxHeight: '400px',
                                    overflowY: 'auto',
                                }}
                            >
                                <form>
                                    <table className="table table-striped table-bordered text-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th>Details</th>
                                                <th>Other Changes</th>
                                                <th>Super Plan</th>
                                                <th>Down Plan</th>
                                                <th>Possession Plan</th>
                                                <th>Created Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {inventoryHistorys.map((user) => (
                                                <tr
                                                    style={{
                                                        backgroundColor: user.color === 'green' ? 'lightGreen' : '',
                                                        color: '#fff',
                                                    }}>

                                                    <td>


                                                        <div style={{
                                                            backgroundColor: user.status === 'Hold' ? '#e63946' : user.status === 'Booked' ? '#2a9d8f' : '#457b9d', // Professional color palette
                                                            color: '#fff',
                                                            width: '60px',
                                                            height: '60px',
                                                            borderRadius: '50%',
                                                            fontSize: '16px',
                                                            fontWeight: 'bold',
                                                            textAlign: 'center',
                                                            lineHeight: '60px',
                                                            marginBottom: '10px',
                                                            marginLeft: '5px'
                                                        }}>
                                                            {user.unitNo || 'N/A'}
                                                        </div>

                                                        Type: {user.type || 'N/A'}
                                                        <br />
                                                        For: {user.for || 'N/A'}
                                                        <br />
                                                        Remark: {user.remark || 'N/A'}
                                                    </td>

                                                    <td>
                                                        PLC: {user.plc || 'N/A'}
                                                        <br />
                                                        PLC Value: {user.plcValue || 'N/A'}
                                                        <br />
                                                        EDC/IDC Rate: {user.edcIdc || 'N/A'}
                                                        <br />
                                                        EDC/IDC Value(Rs): {user.edcIdcValue || 'N/A'}
                                                    </td>
                                                    <td>

                                                        BSP(Rs): {user.bspSP}
                                                        <br />
                                                        Size(Sq.yd): {user.size || 'N/A'}
                                                        <br />
                                                        Total Cost(Rs): {Number(user.bspSP) * Number(user.size)}
                                                        <br />
                                                        Unit Cost(Rs): <span style={{ color: '#007bff' }}>{user.superPlan || 'N/A'}</span>
                                                    </td>
                                                    <td>


                                                        BSP(Rs): {user.bspDLP || 'N/A'}
                                                        <br />
                                                        Size(Sq.yd): {user.size || 'N/A'}
                                                        <br />
                                                        Total Cost(Rs): {Number(user.bspDLP) * Number(user.size)}
                                                        <br />
                                                        Unit Cost(Rs): <span style={{ color: '#007bff' }}>{user.dlp || 'N/A'}</span>
                                                    </td>
                                                    <td>

                                                        BSP(Rs): {user.bspPLP || 'N/A'}
                                                        <br />
                                                        Size(Sq.yd): {user.size || 'N/A'}
                                                        <br />
                                                        Total Cost(Rs): {Number(user.bspPLP) * Number(user.size)}
                                                        <br />
                                                        Unit Cost(Rs): <span style={{ color: '#007bff' }}>{user.plp || 'N/A'}</span>
                                                    </td>

                                                    <td>
                                                        {new Date(user.createdAt).toLocaleDateString('en-GB', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric'
                                                        })}
                                                        <br />
                                                        {new Date(user.createdAt).toLocaleTimeString('en-US', {
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            hour12: true
                                                        })}

                                                    </td>




                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </form>
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

            </div >

        </>

    )
}

export default EoiInventory



