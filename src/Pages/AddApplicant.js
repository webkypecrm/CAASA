import React, { useState, useEffect } from 'react'
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import ApplicantLists from './ApplicantLists';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { BiCaretRight } from 'react-icons/bi';


const AddApplicant = () => {
    const navigate = useNavigate();
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

    const [formData2, setFormData2] = useState(initialFormData2);

    const initialFormData = {
        fullName: '',
        coFullName: '',
        // applicantFirstName: '',
        // applicantMiddleName: '',
        // applicantLastName: '',
        coAdvisorId: '',
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
        // coApplicantFirstName: "",
        // coApplicantMiddleName: "",
        // coApplicantLastName: "",
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
        applicantAnniversay: '',
        coApplicantAnniversay: '',

        applicantAccountName: '',
        applicantAccountNumber: '',
        applicantIfsc: '',
        applicantUpiId: '',
        luckyDrawId: '',
       
    };

    const initialFormData4 = {

      
        advisor: '',
       
        bp: '',
        coAdvisor: '',
    };

    const initialFormData3 = {
        type: '',
    };


    const [formData, setFormData] = useState(initialFormData);
    const [formData4, setFormData4] = useState(initialFormData4);
    const [formData3, setFormData3] = useState(initialFormData3);

    const [profilePicFile, setProfilePicFile] = useState(null);
    const [profilePicFile1, setProfilePicFile1] = useState(null);
    const [countryOptions, setCountryOptions] = useState([]);
    const [countryOption1, setCountryOption1] = useState([]);
    const [countryOptions8, setCountryOptions8] = useState([]);
    const [stateOptions, setStateOptions] = useState([]);
    // const [teamOptions, setTeamOptions] = useState([]);
    const [stateOptions8, setStateOptions8] = useState([]);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [cityOptions, setCityOptions] = useState([]);
    const [cityOptions8, setCityOptions8] = useState([]);
    const [stateId, setStateId] = useState([]);
    const [scame, setScame] = useState([]);
    const [plan, setPlan] = useState([]);
    const [advisor, setAdvisor] = useState([]);
    const [advisors, setAdvisors] = useState([]);
    const [countryId, setCountryId] = useState('');
    const [stateIds, setStateIds] = useState([]);
    const [countryIds, setCountryIds] = useState('');
    const [schemeId, setschemeId] = useState('');
    const [project, setProject] = useState([]);
    const [size, setSize] = useState([])
    const [total, setTotal] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [selectedPlanId, setSelectedPlanId] = useState('');
    const [ids, setIds] = useState('')
    const [profilePic, setProfilePic] = useState(null);
    const [profilePics, setProfilePics] = useState(null);
    const [scame2, setScame2] = useState([]);
    const [disableInput2, setDisableInput2] = useState(true);
    const [contentPrinted, setContentPrinted] = useState(false);
    const [size2, setSize2] = useState([])
    const [from, setFrom] = useState('')
    const [facing, setFacing] = useState([])
    const [total4, setTotal4] = useState('')
    const [gift, setGift] = useState([])
    const [showLoader, setShowLoader] = useState(true);
    const [gat, setGat] = useState(from.type);
    const [lucky, setLucky] = useState([]);
    const [activeField, setActiveField] = useState("");
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem('Token');


    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };
    const handleInputChange2 = (e) => {
        if (!disableInput2) {
            setFormData2({ ...formData2, basicPriceFPP: e.target.value });
        }
    };

    const handlePlanSelect = (event) => {
        handleInputChange(event);
        const planId = event.target.value;
        setSelectedPlanId(planId);
        handleOpenModal4(planId);
    };



    // facing
    useEffect(() => {
        setFormData({ ...formData, bsp: from.totalValueFPP });
    }, [from.totalValueFPP]);
    useEffect(() => {
        setFormData({ ...formData, bsp: from.totalValuePLP });
    }, [from.totalValuePLP]);
    useEffect(() => {
        setFormData({ ...formData, bsp: from.totalValueDLP });
    }, [from.totalValueDLP]);


    //registration Amount
    useEffect(() => {
        if (from && from.type === 'FPP') {
            setFormData(prevFormData => ({
                ...prevFormData,
                registrationAmount: from.onBookingFPP
            }));
        } else if (from && from.type === 'DLP') {
            setFormData(prevFormData => ({
                ...prevFormData,
                registrationAmount: from.onBookingDLP
            }));
        } else if (from) {
            setFormData(prevFormData => ({
                ...prevFormData,
                registrationAmount: from.onBookingPLP
            }));
        }
    }, [from]);




    useEffect(() => {
        setFormData({ ...formData, paymentPlan: formData3.type });
    }, [formData3.type]);




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
                    setSize2(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);


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
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const priceValue = parseFloat(formData.bsp);
        // const area = parseFloat(formData.area);

        if (percentageRegex.test(formData.PLCs) && !isNaN(priceValue)) {
            const match = formData.PLCs.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
                    if (percentage > 100) {
                        alert('Percentage value cannot exceed greater than 100');
                    } else {
                        const totalValue = (priceValue) * (percentage / 100);
                        let formattedTotalValue = totalValue.toFixed(2);
                        if (formattedTotalValue.endsWith('.00')) {
                            formattedTotalValue = formattedTotalValue.slice(0, -3);
                        }
                        setTotal(formattedTotalValue);

                    }
                } else {
                    console.error('Invalid percentage:', formData.PLCs);
                }
            } else {
                console.error('Invalid percentage format:', formData.PLCs);
            }
        }
    }, [formData.PLCs, formData.bsp]);


    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, PLCsValue: total }));

    }, [total]);

    useEffect(() => {
        const priceValue = parseFloat(formData.bsp);
        const fixedCharges = parseFloat(formData.fixedCharges);
        const plcValue = parseFloat(total);

        if (!isNaN(fixedCharges) && !isNaN(priceValue) && !isNaN(plcValue)) {
            const totalValue = priceValue + fixedCharges + plcValue;
            let formattedTotalValue = totalValue.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }
            setTotal4(formattedTotalValue);
            console.log('Total (divided by 24 months):', formattedTotalValue);
        } else {
            setTotal4(null);
        }
    }, [formData.bsp, formData.fixedCharges, total]);



    useEffect(() => {
        setFormData({ ...formData, totalCost: total4 });
    }, [total4]);

    // useEffect(() => {
    //     setFormData({ ...formData, registrationAmount: total4 });
    // }, [total4]);







    useEffect(() => {
        const calculatedPLCs = formData.facing &&
            facing.find(option => option.name === formData.facing)?.name.match(/\d+(?=%)/)?.[0] + '%' || '';

        setFormData(prevFormData => ({
            ...prevFormData,
            PLCs: calculatedPLCs
        }));
    }, [formData.facing, facing]);

    //facimg
    useEffect(() => {

        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/23`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setFacing(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);


    //size type
    useEffect(() => {

        const Token = localStorage.getItem('Token');

        const url = `${apiUrl}/master/getAllMasterData/${0}?&type=${formData.schemeType}`;
        fetch(url, {
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
    }, [formData.schemeType]);


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
        if (formData.luckyDrawId) {
            const url = `${apiUrl}/scheme/schemeDropdownApplication?&luckyDrawId=${formData.luckyDrawId}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data.data && Array.isArray(data.data)) {
                        setScame(data.data);
                    } else {
                        console.error('API response is not in the expected format for schemes.');
                    }
                })
                .catch((error) => {
                    console.error('Error fetching scheme data:', error);
                });
        }
    }, [formData.luckyDrawId, apiUrl]);

    //project api 

    useEffect(() => {
        if (formData.schemeId) {
            const url = `${apiUrl}/project/LuckyDrawProject?&schemeId=${formData.schemeId}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data.data && Array.isArray(data.data)) {
                        setProject(data.data);
                    } else {
                        console.error('API response is not in the expected format for schemes.');
                    }
                })
                .catch((error) => {
                    console.error('Error fetching scheme data:', error);
                });
        }
    }, [formData.schemeId]);


    useEffect(() => {
        if (formData.luckyDrawId) {
            const url = `${apiUrl}/scheme/schemeDropdownApplication?&luckyDrawId=${formData.luckyDrawId}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data.data && Array.isArray(data.data)) {
                        setScame(data.data);
                    } else {
                        console.error('API response is not in the expected format for schemes.');
                    }
                })
                .catch((error) => {
                    console.error('Error fetching scheme data:', error);
                });
        }
    }, [formData.luckyDrawId, apiUrl]);

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
        const url = `${apiUrl}/plan/planDropdownForApplicant?projectId=${formData.projectId}&schemeType=${formData.schemeType}`;
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
    }, [formData.schemeType, formData.projectId]);



    useEffect(() => {
        fetch(`${apiUrl}/employee/allEmpDesig?designation=167`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setAdvisor(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);


    useEffect(() => {
        fetch(`${apiUrl}/employee/allEmpDesig?designation=173`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setAdvisors(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);




    const handleFileChange8 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile(profilePicFile);
                setFormData((prevData) => ({
                    ...prevData,
                    applicantImage: profilePicFile,
                }));
            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChange9 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile1(profilePicFile);
                setFormData((prevData) => ({
                    ...prevData,
                    coApplicantImage: profilePicFile,
                }));
            }
        } else {
            console.log('No file selected');
        }
    };


    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const applicantImageFile = files[0];

            if (applicantImageFile.type.startsWith('image/')) {


                setFormData((prevData) => ({
                    ...prevData,
                    applicantAadhaarImage: applicantImageFile,
                }));
            } else if (applicantImageFile.type === 'application/pdf') {
                // Handle PDF files
                setFormData((prevData) => ({
                    ...prevData,
                    applicantAadhaarImage: applicantImageFile,

                }));
            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };


    const handleFileChange15 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const applicantImageFile = files[0];

            if (applicantImageFile.type.startsWith('image/')) {


                setFormData((prevData) => ({
                    ...prevData,
                    coApplicantAadhaarImage: applicantImageFile,
                }));
            } else if (applicantImageFile.type === 'application/pdf') {
                // Handle PDF files
                setFormData((prevData) => ({
                    ...prevData,
                    coApplicantAadhaarImage: applicantImageFile,

                }));
            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChange2 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const applicantImageFile = files[0];

            if (applicantImageFile.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)

                setFormData((prevData) => ({
                    ...prevData,
                    applicantPanImage: applicantImageFile,
                }));
            } else if (applicantImageFile.type === 'application/pdf') {
                // Handle PDF files
                setFormData((prevData) => ({
                    ...prevData,

                    applicantPanImage: applicantImageFile,


                }));
            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChange20 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const applicantImageFile = files[0];

            if (applicantImageFile.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)

                setFormData((prevData) => ({
                    ...prevData,
                    coApplicantPanImage: applicantImageFile,
                }));
            } else if (applicantImageFile.type === 'application/pdf') {
                // Handle PDF files
                setFormData((prevData) => ({
                    ...prevData,

                    coApplicantPanImage: applicantImageFile,


                }));
            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };


    const getCurrentDate = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();
        return `${year}-${month}-${day}`;
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleInputChangeData = (e) => {
        const { name, value } = e.target;
        setFormData4((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Reset activeField if field value is cleared
        if (value === "") {
            setActiveField(""); // Show all fields again
        }
    };

    const shouldShowBP = !formData4.advisor && !formData4.coAdvisor && activeField !== "Advisor" && activeField !== "CoAdvisor";
    const shouldShowAdvisor = !formData4.BP && activeField !== "BP";
    const shouldShowCoAdvisor = !formData4.BP && activeField !== "BP";

    const handleInputChange5 = (event) => {
        const { name, checked } = event.target;
        setFormData3(prevFormData => ({
            ...prevFormData,
            [name]: checked ? 'FPP' : ''
        }));
    };



       useEffect(() => {
            setFormData(prevFormData => ({ ...prevFormData, advisorId: formData4.BP || formData4.advisor }));
        }, [formData4.BP || formData4.advisor]);

        useEffect(() => {
            setFormData(prevFormData => ({ ...prevFormData, coAdvisorId: formData4.coAdvisor }));
        }, [formData4.coAdvisor]);


    const handleInputChange6 = (event) => {
        const { name, checked } = event.target;
        setFormData3(prevFormData => ({
            ...prevFormData,
            [name]: checked ? 'PLP' : ''
        }));
    };

    const handleInputChange7 = (event) => {
        const { name, checked } = event.target;
        setFormData3(prevFormData => ({
            ...prevFormData,
            [name]: checked ? 'DLP' : ''
        }));
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

            const response = await fetch(`${apiUrl}/applicant/addApplicant`, {

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
            navigate("/applicant-list");
        } catch (error) {
            toast.error(error.message);

        }
    };

    const handleSubmit2 = () => {
        const { type } = formData3;
        const url = `${apiUrl}/applicant/getPaymentPlan/${selectedPlanId}?&type=${type}`;

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {

                    setFrom(data.data);
                    handleCloseModal4();


                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };


    useEffect(() => {
        handleSubmit2()

    }, []);


    //country api 
    useEffect(() => {
        fetch(`${apiUrl}/employee/allCountries`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setCountryOptions(data.data);
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
            applicantCountry: selectedCountry,
        });
        setStateOptions([]);
        setCityOptions([]);
    };

    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setStateId(selectedState);
        setFormData({
            ...formData,
            applicantState: selectedState,
        });
        setCityOptions([]);
    };

    useEffect(() => {
        fetch(`${apiUrl}/employee/allCountries`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setCountryOptions8(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);



    const fetchStat = (countrIds) => {
        fetch(`${apiUrl}/employee/allStates/${countrIds}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setStateOptions8(data.data);
                } else {
                    console.error('API response is not in the expected format for states.');
                }
            })
            .catch((error) => {
                console.error('Error fetching state data:', error);
            });
    };

    const fetchCiti = (statIds) => {
        fetch(`${apiUrl}/employee/allcities/${statIds}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setCityOptions8(data.data);
                } else {
                    console.error('API response is not in the expected format for cities.');
                }
            })
            .catch((error) => {
                console.error('Error fetching city data:', error);
            });
    };

    useEffect(() => {
        if (countryIds) {

            fetchStat(countryIds);
        }
    }, [countryIds]);

    useEffect(() => {
        if (stateIds) {

            fetchCiti(stateIds);
        }
    }, [stateIds]);

    const handleCountryChang = (event) => {
        const selectedCountry = event.target.value;
        setCountryIds(selectedCountry);
        setFormData({
            ...formData,
            coApplicantCountry: selectedCountry,
        });
        setStateOptions8([]);
        setCityOptions8([]);
    };

    const handleStateChang = (event) => {
        const selectedState = event.target.value;
        setStateIds(selectedState);
        setFormData({
            ...formData,
            coApplicantState: selectedState,
        });
        setCityOptions8([]);
    };


    useEffect(() => {
        const token = localStorage.getItem('Token');

        if (!token) {
            navigate('/');
        }
    }, [navigate]);


    return (
        <div>
            <div>

                <div className="page">

                    <TopHeader />
                    <Prince />

                    <div className="main-content  pt-0">
                        <div className="main-container container-fluid">
                            <div className="inner-body">
                                {/* Page Header */}
                                <div className="page-header">
                                    <div>
                                        <h2 className="main-content-title tx-24 mg-b-5">Add Applicant</h2>
                                    </div>
                                </div>
                                {/* End Page Header */}
                                {/* Row */}
                                <div className="row row-sm">
                                    <div className="col-xl-8 col-lg-8 col-md-8">
                                        <div className="row row-sm">
                                            <div className="col-sm-12">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div>
                                                            <h6 className="main-content-label mb-3">
                                                                Applicant INFO
                                                            </h6>
                                                        </div>
                                                        <form action="form-validation.html" data-parsley-validate>
                                                            <div className>
                                                                <div className="row row-sm">

                                                                    <div className="col-lg-4 form-group">
                                                                        <label className="form-label">
                                                                            Applicant Full Name:{" "}
                                                                            <span className="tx-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            className="form-control"
                                                                            placeholder="Enter first name"
                                                                            required
                                                                            type="text"
                                                                            name="fullName"
                                                                            value={formData.fullName}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </div>
                                                                   
                                                                    <div className="col-lg-4 form-group">
                                                                        <label className="form-label">
                                                                            Applicant Father's Name:{" "}
                                                                            <span className="tx-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            className="form-control"
                                                                            placeholder="Enter Father name"
                                                                            required
                                                                            type="text"
                                                                            name="applicantFatherName"
                                                                            value={formData.applicantFatherName}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </div>
                                                                    <div className="col-lg-4 form-group">
                                                                        <label className="form-label">
                                                                            Applicant Email:{" "}
                                                                            <span className="tx-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            className="form-control"
                                                                            name="applicantEmail"
                                                                            value={formData.applicantEmail}
                                                                            onChange={handleInputChange}
                                                                            placeholder="Enter "
                                                                            required=""
                                                                            type="text"
                                                                        />
                                                                    </div>
                                                                    <div className="col-lg-4 form-group">
                                                                        <label className="form-label">
                                                                            Applicant Mobile:{" "}
                                                                            <span className="tx-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            className="form-control"
                                                                            placeholder="Enter Mobile Number"
                                                                            required
                                                                            type="text"
                                                                            name="applicantMobile"
                                                                            value={formData.applicantMobile}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </div>
                                                                    <div className="col-lg-4 form-group">
                                                                        <label className="form-label">
                                                                            Applicant Alternate Number

                                                                        </label>
                                                                        <input
                                                                            className="form-control"
                                                                            placeholder="Enter Alternate Mobile Number"
                                                                            required
                                                                            type="text"
                                                                            name="applicantAlternateNumber"
                                                                            value={formData.applicantAlternateNumber}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Row */}
                                        <div className="row row-sm">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div>
                                                            <h6 className="main-content-label mb-1">
                                                                Applicant Address
                                                            </h6>
                                                        </div>
                                                        {/* Applicant Address */}
                                                        <div className="row row-sm">
                                                            <div className="col-sm-3 mg-t-10">
                                                                <label className="form-label">Applicant Country
                                                                </label>
                                                                <select
                                                                    className="form-control select select2"
                                                                    name="applicantCountry"
                                                                    value={formData.applicantCountry}
                                                                    onChange={handleCountryChange}
                                                                >
                                                                    <option value="">Select a country</option>
                                                                    {countryOptions.map((country) => (
                                                                        <option key={country.id} value={country.id}>
                                                                            {`  ${country.name}`}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>


                                                            <div className="col-sm-3 mg-t-10">
                                                                <label className="form-label">
                                                                    Applicant State
                                                                </label>
                                                                <select
                                                                    className="form-control select select2"
                                                                    name="applicantState"
                                                                    value={formData.applicantState}
                                                                    onChange={handleStateChange}
                                                                >
                                                                    <option value="">Select a State</option>
                                                                    {stateOptions.map((state) => (
                                                                        <option key={state.id} value={state.id}>
                                                                            {` ${state.name}`}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>


                                                            <div className="col-sm-3 mg-t-10">
                                                                <label className="form-label">Applicant City </label>
                                                                <select
                                                                    className="form-control select select2"
                                                                    name="applicantCity"
                                                                    value={formData.applicantCity}
                                                                    onChange={handleInputChange}
                                                                >
                                                                    <option value="">Select a city</option>
                                                                    {cityOptions.map((city, index) => (
                                                                        <option key={index} value={city.id}>
                                                                            {` ${city.name}`}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>

                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Pin code
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="applicantPincode"
                                                                        value={formData.applicantPincode}
                                                                        placeholder="Enter Pin code"
                                                                        type="text"
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Landmark
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="applicantLandMark"
                                                                        value={formData.applicantLandMark}
                                                                        placeholder="Enter Landmark"
                                                                        type="text"
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Applicant Address
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="applicantAddress"
                                                                        value={formData.applicantAddress}
                                                                        placeholder="Enter area"
                                                                        type="text"
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Applicant DOB
                                                                    </label>
                                                                    <div className="input-group">
                                                                        <input
                                                                            className="form-control fc-datepicker"
                                                                            placeholder="MM/DD/YYYY"
                                                                            max={getCurrentDate()}
                                                                            type="date"
                                                                            name="applicantDOB"
                                                                            value={formData.applicantDOB}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Applicant Anniversary
                                                                    </label>
                                                                    <div className="input-group">
                                                                        <input
                                                                            className="form-control fc-datepicker"
                                                                            placeholder="MM/DD/YYYY"

                                                                            type="date"
                                                                            name="applicantAnniversay"
                                                                            value={formData.applicantAnniversay}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">Applicant Aadhaar No
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="applicantAadhaarNumber"
                                                                        value={formData.applicantAadhaarNumber}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10 ">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label"> Applicant Aadhaar Upload</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="file"
                                                                        name="applicantAadhaarImage"
                                                                        accept="/pdf"
                                                                        onChange={handleFileChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group">
                                                                    <label className="form-label">Applicant PAN No</label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="applicantPAN"
                                                                        value={formData.applicantPAN}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group">
                                                                    <label className="form-label">Applicant PAN Upload</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="file"
                                                                        name="applicantPanImage"
                                                                        onChange={handleFileChange2}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group">
                                                                    <label className="form-label">Applicant Nationality</label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="applicantNationality"
                                                                        value={formData.applicantNationality}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group">
                                                                    <label className="form-label">Applicant Profession</label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="applicantProfession"
                                                                        value={formData.applicantProfession}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-sm">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div>
                                                            <h6 className="main-content-label mb-1">
                                                                Applicant Bank Details
                                                            </h6>
                                                        </div>
                                                        {/* Applicant Address */}
                                                        <div className="row row-sm">
                                                            <div className="col-sm-3 mg-t-10">
                                                                <label className="form-label">Applicant Account Name
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    name="applicantAccountName"
                                                                    value={formData.applicantAccountName}
                                                                    placeholder="Enter Account Name"
                                                                    type="text"
                                                                    onChange={handleInputChange}
                                                                />
                                                            </div>


                                                            <div className="col-sm-3 mg-t-10">
                                                                <label className="form-label">
                                                                    Applicant Account Number
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    name="applicantAccountNumber"
                                                                    value={formData.applicantAccountNumber}
                                                                    placeholder="Enter Account Number"
                                                                    type="text"
                                                                    onChange={handleInputChange}
                                                                />
                                                            </div>


                                                            <div className="col-sm-3 mg-t-10">
                                                                <label className="form-label">Applicant Ifsc Code </label>
                                                                <input
                                                                    className="form-control"
                                                                    name="applicantIfsc"
                                                                    value={formData.applicantIfsc}
                                                                    placeholder="Enter Ifsc Code"
                                                                    type="text"
                                                                    onChange={handleInputChange}
                                                                />
                                                            </div>

                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Applicant Upi Id
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="applicantUpiId"
                                                                        value={formData.applicantUpiId}
                                                                        placeholder="Enter UpiId"
                                                                        type="text"
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Row */}
                                        <div className="row row-sm">
                                            <div className="col-sm-12">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div>
                                                            <h6 className="main-content-label mb-3">
                                                                Co Applicant Detail
                                                            </h6>
                                                        </div>
                                                        <form action="form-validation.html" data-parsley-validate>
                                                            <div className>
                                                                <div className="row row-sm">
                                                                    <div className="col-lg-4 form-group">
                                                                        <label className="form-label">
                                                                            Co Full Name:{" "}
                                                                            <span className="tx-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            className="form-control"
                                                                            placeholder="Enter first name"
                                                                            required
                                                                            type="text"
                                                                            name="coFullName"
                                                                            value={formData.coFullName}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </div>
                                                                  
                                                                    <div className="col-lg-4 form-group">
                                                                        <label className="form-label">
                                                                            Co Applicant Father's Name:{" "}
                                                                            <span className="tx-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            className="form-control"
                                                                            placeholder="Enter Father name"
                                                                            required
                                                                            type="text"
                                                                            name="coApplicantFatherName"
                                                                            value={formData.coApplicantFatherName}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                    </div>
                                                                    <div className="col-lg-4 form-group">
                                                                        <label className="form-label">
                                                                            Co Applicant Email:{" "}
                                                                            <span className="tx-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            className="form-control"
                                                                            placeholder="Enter Email Id"
                                                                            required
                                                                            type="text"
                                                                            name="coApplicantEmail"
                                                                            value={formData.coApplicantEmail}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </div>
                                                                    <div className="col-lg-4 form-group">
                                                                        <label className="form-label">
                                                                            Co Applicant Mobile:{" "}
                                                                            <span className="tx-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            className="form-control"
                                                                            placeholder="Enter Mobile Number"
                                                                            required
                                                                            type="text"
                                                                            name="coApplicantMobile"
                                                                            value={formData.coApplicantMobile}
                                                                            onChange={handleInputChange}

                                                                        />
                                                                    </div>
                                                                    <div className="col-lg-4 form-group">
                                                                        <label className="form-label">
                                                                            Co Applicant Alternate Number

                                                                        </label>
                                                                        <input
                                                                            className="form-control"
                                                                            placeholder="Enter first name"
                                                                            required
                                                                            type="text"
                                                                            name="coApplicantAlternateNumber"
                                                                            value={formData.coApplicantAlternateNumber}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Row */}
                                        <div className="row row-sm">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div>
                                                            <h6 className="main-content-label mb-1">
                                                                Co Applicant Address
                                                            </h6>
                                                        </div>
                                                        <div className="row row-sm">
                                                            <div className="col-sm-3 mg-t-10">
                                                                <label className="form-label">Co Applicant Country</label>
                                                                <select
                                                                    className="form-control select select2"
                                                                    name="coApplicantCountry"
                                                                    value={formData.coApplicantCountry}
                                                                    onChange={handleCountryChang}
                                                                >
                                                                    <option value="">Select a country</option>
                                                                    {countryOptions8.map((country) => (
                                                                        <option key={country.id} value={country.id}>
                                                                            {`  ${country.name}`}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <label className="form-label">
                                                                    Co Applicant State
                                                                </label>
                                                                <select
                                                                    className="form-control select select2"
                                                                    name="coApplicantState"
                                                                    value={formData.coApplicantState}
                                                                    onChange={handleStateChang}
                                                                >
                                                                    <option value="">Select a State</option>
                                                                    {stateOptions8.map((state) => (
                                                                        <option key={state.id} value={state.id}>
                                                                            {` ${state.name}`}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <label className="form-label"> Co Applicant City </label>
                                                                <select
                                                                    className="form-control select select2"
                                                                    name="coApplicantCity"
                                                                    value={formData.coApplicantCity}
                                                                    onChange={handleInputChange}
                                                                >
                                                                    <option value="">Select a city</option>
                                                                    {cityOptions8.map((city, index) => (
                                                                        <option key={index} value={city.id}>
                                                                            {` ${city.name}`}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Co Applicant Address
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="coApplicantAddress"
                                                                        value={formData.coApplicantAddress}
                                                                        placeholder="Enter area"
                                                                        type="text"
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>


                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Co Pin code
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="coApplicantPincode"
                                                                        value={formData.coApplicantPincode}
                                                                        placeholder="Enter Pin code"
                                                                        type="text"
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Co Landmark
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="coApplicantLandMark"
                                                                        value={formData.coApplicantLandMark}
                                                                        placeholder="Enter Landmark"
                                                                        type="text"
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Co Applicant DOB
                                                                    </label>
                                                                    <div className="input-group">
                                                                        <input
                                                                            className="form-control fc-datepicker"
                                                                            placeholder="MM/DD/YYYY"
                                                                            max={getCurrentDate()}
                                                                            type="date"
                                                                            name="coApplicantDOB"
                                                                            value={formData.coApplicantDOB}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Co Applicant Anniversary
                                                                    </label>
                                                                    <div className="input-group">
                                                                        <input
                                                                            className="form-control fc-datepicker"
                                                                            placeholder="MM/DD/YYYY"
                                                                            type="date"
                                                                            name="coApplicantAnniversay"
                                                                            value={formData.coApplicantAnniversay}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Co Applicant Aadhaar Number
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="coApplicantAadhaarNumber"
                                                                        value={formData.coApplicantAadhaarNumber}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Co Applicant Aadhaar Image
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="file"
                                                                        name="coApplicantAadharImage"
                                                                        accept="/pdf"
                                                                        onChange={handleFileChange15}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Co Applicant PAN
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="coApplicantPAN"
                                                                        value={formData.coApplicantPAN}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Co Applicant Pan Image
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="file"
                                                                        name="coApplicantPANImage"
                                                                        onChange={handleFileChange20}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Co Applicant Nationality
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="coApplicantNationality"
                                                                        value={formData.coApplicantNationality}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Co Applicant Profession
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="coApplicantProfession"
                                                                        value={formData.coApplicantProfession}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Row */}
                                        {/* Row */}
                                        <div className="row row-sm">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div>
                                                            <h6 className="main-content-label mb-1">
                                                                property
                                                            </h6>
                                                        </div>
                                                        <div className="row row-sm">
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">Select Lucky Draw </label>
                                                                    <select
                                                                        className="form-control select select2"
                                                                        name="luckyDrawId"
                                                                        value={formData.luckyDrawId}
                                                                        onChange={handleInputChange}
                                                                    >
                                                                        <option value="">Select </option>
                                                                        {lucky.map((option, index) => (
                                                                            <option key={option.id} value={option.id}>
                                                                                {option.name}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">Scheme: <span className="tx-danger">*</span></label>
                                                                    <select
                                                                        className="form-control select select2"
                                                                        name="schemeId"
                                                                        value={formData.schemeId}
                                                                        onChange={handleInputChange}>
                                                                        <option value="">Select </option>
                                                                        {scame.map((option, index) => (
                                                                            <option key={option.id} value={option.id}>
                                                                                {option.schemeName}
                                                                            </option>
                                                                        ))}


                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">Project: </label>
                                                                    <select
                                                                        className="form-control select select2"
                                                                        name="projectId"
                                                                        value={formData.projectId}
                                                                        onChange={handleInputChange}>
                                                                        <option value="">Select </option>
                                                                        {project.map((option, index) => (
                                                                            <option key={option.id} value={option.id}>
                                                                                {option.projectName}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">Type:</label>
                                                                    <select
                                                                        className="form-control select select2"
                                                                        name="schemeType"
                                                                        value={formData.schemeType}
                                                                        onChange={handleInputChange}>
                                                                        <option value="">Select </option>
                                                                        {displayStatus.map((option, index) => (
                                                                            <option key={option.name} value={option.name}>
                                                                                {option.name}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">Plan </label>
                                                                    <select
                                                                        className="form-control select select2"
                                                                        name="planId"
                                                                        value={formData.planId}
                                                                        onChange={handlePlanSelect}
                                                                    >
                                                                        <option value=''>Select a Plan</option>
                                                                        {plan.map((option) => (
                                                                            <option key={option.id} value={option.id}>
                                                                                {option.name}
                                                                            </option>
                                                                        ))}
                                                                    </select>

                                                                </div>
                                                            </div>

                                                            <div
                                                                className={`modal ${isModalOpen4 ? 'show' : ''}`}
                                                                style={{
                                                                    display: isModalOpen4 ? 'block' : 'none',
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
                                                                                onClick={handleCloseModal4}
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
                                                                                                                                            checked={formData3.type === 'FPP'}
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
                                                                                                                                        value={formData2.areaUnitPLP}
                                                                                                                                        disabled={disableInput2}

                                                                                                                                    >
                                                                                                                                        <option >Select</option>
                                                                                                                                        {size2.map((option, index) => (
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
                                                                                                                                        value={formData2.areaPLP}
                                                                                                                                        disabled={disableInput2}

                                                                                                                                    /> <span style={{ fontSize: '9px' }}>{formData2.areaUnitPLP}</span>

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
                                                                                                                                            checked={formData3.type === 'PLP'}
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
                                                                                                                                        {size2.map((option, index) => (
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
                                                                                                                                        value={formData2.areaUnitPLP}
                                                                                                                                        disabled={disableInput2}

                                                                                                                                    >
                                                                                                                                        <option >Select</option>
                                                                                                                                        {size2.map((option, index) => (
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
                                                                                                                                        value={formData2.areaPLP}
                                                                                                                                        disabled={disableInput2}
                                                                                                                                    /> <span style={{ fontSize: '9px' }}>{formData2.areaUnitPLP}</span>

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
                                                                                                                                onClick={handleSubmit2}
                                                                                                                            >
                                                                                                                                Select
                                                                                                                            </button>
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
                                                                                                                                        value={formData2.companyId}
                                                                                                                                        disabled={disableInput2}
                                                                                                                                    >
                                                                                                                                        <option >Select Company</option>

                                                                                                                                    </select>
                                                                                                                                </div>
                                                                                                                                <div className="col-lg-4 form-group">
                                                                                                                                    <label className="form-label">
                                                                                                                                        {/* Select Project <span className="tx-danger">*</span> */}
                                                                                                                                    </label>
                                                                                                                                    <select className="form-control"
                                                                                                                                        style={{ height: 25 }}
                                                                                                                                        name="projectId"
                                                                                                                                        value={formData2.projectId}
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
                                                                                                                                        value={formData2.schemeId}
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
                                                                                                                                <div className="col-lg-12 form-group">
                                                                                                                                    <label className="form-label">
                                                                                                                                        {/* Plan Description{" "} */}
                                                                                                                                        {/* <span className="tx-danger">*</span> */}
                                                                                                                                    </label>
                                                                                                                                    <textarea
                                                                                                                                        className="form-control"

                                                                                                                                        placeholder="Description"
                                                                                                                                        required=""
                                                                                                                                        style={{ height: "400px " }}
                                                                                                                                        defaultValue={""}
                                                                                                                                        name="planDescription"
                                                                                                                                        value={formData2.planDescription}
                                                                                                                                        disabled={disableInput2}

                                                                                                                                    />
                                                                                                                                </div>
                                                                                                                                <div className="col-lg-6 form-group">
                                                                                                                                    <label className="form-label">
                                                                                                                                        {/* Brocehure Image <span className="tx-danger">*</span> */}
                                                                                                                                    </label>
                                                                                                                                    <div className="row row-sm">
                                                                                                                                        <div className="col-sm-12 col-md-12">

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
                                                                                                                        <div className="col-lg-12 form-group">
                                                                                                                            <label className="form-label">
                                                                                                                                Note
                                                                                                                            </label>
                                                                                                                            <textarea
                                                                                                                                className="form-control"

                                                                                                                                placeholder="Description"
                                                                                                                                required=""
                                                                                                                                style={{ height: "150px " }}
                                                                                                                                defaultValue={""}
                                                                                                                                name="note"
                                                                                                                                value={formData2.note}
                                                                                                                                disabled={disableInput2}


                                                                                                                            />
                                                                                                                        </div>
                                                                                                                    </p>
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

                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Payment Plan
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        value={formData3.type}
                                                                    />
                                                                </div>
                                                            </div>


                                                            {shouldShowBP && (
                                                                <div className="col-sm-3 mg-t-10">
                                                                    <div className="form-group mb-0">
                                                                        <label className="form-label">Advisor(VP)</label>

                                                                        <select  
                                                                        className="form-control select select2"
                                                                        type="text"
                                                                        name="BP"
                                                                        value={formData4.BP}
                                                                        onFocus={() => setActiveField("BP")}
                                                                        onChange={handleInputChangeData}
                                                                        >
                                                                        <option value="">Select VP</option>
                                                                        {advisors.map((option) => (
                                                                            <option key={option.id} value={option.id}>
                                                                                {option.fullName}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                       
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {/* Advisor Field */}
                                                            {shouldShowAdvisor && (
                                                                <div className="col-sm-3 mg-t-10">
                                                                    <label className="form-label">
                                                                        Advisor: <span className="tx-danger">*</span>
                                                                    </label>
                                                                    <select
                                                                        className="form-control select select2"
                                                                        name="advisor"
                                                                        value={formData4.advisor}
                                                                        onFocus={() => setActiveField("Advisor")}
                                                                        onChange={handleInputChangeData}>
                                                                        <option value="">Select an Advisor</option>
                                                                        {advisor.map((option) => (
                                                                            <option key={option.id} value={option.id}>
                                                                                {option.fullName}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            )}

                                                            {/* Co Advisor Field */}
                                                            {shouldShowCoAdvisor && (
                                                                <div className="col-sm-3 mg-t-10">
                                                                    <label className="form-label">
                                                                        Co Advisor: <span className="tx-danger">*</span>
                                                                    </label>
                                                                    <select
                                                                        className="form-control select select2"
                                                                        name="coAdvisor"
                                                                        value={formData4.coAdvisor}
                                                                        onFocus={() => setActiveField("CoAdvisor")}
                                                                        onChange={handleInputChangeData}>
                                                                        <option value="">Select a Co Advisor</option>
                                                                        {advisor.map((option) => (
                                                                            <option key={option.id} value={option.id}>
                                                                                {option.fullName}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            )}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-sm">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div>
                                                            <h6 className="main-content-label mb-1">
                                                                Preferences
                                                            </h6>
                                                        </div>
                                                        <div className="row row-sm">
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">Size Type</label>
                                                                    <select className="form-control select select2"
                                                                        name="sizeType"
                                                                        value={formData.sizeType}
                                                                        onChange={handleInputChange}
                                                                    >
                                                                        <option>Select</option>
                                                                        {size.map((option, index) => (
                                                                            <option key={option.id} value={option.id}>
                                                                                {option.name}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">


                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">Facing</label>
                                                                    <select className="form-control select select2"
                                                                        name="facing"
                                                                        value={formData.facing}
                                                                        onChange={handleInputChange}
                                                                    >
                                                                        <option>Select</option>
                                                                        {facing.map((option, index) => (
                                                                            <option key={option.name} value={option.name}>
                                                                                {option.name}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-sm">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div>
                                                            <h6 className="main-content-label mb-1">
                                                                Payment
                                                            </h6>
                                                        </div>
                                                        <div className="row row-sm">
                                                            <div className="col-sm-3 mg-t-10">
                                                                <label className="form-label">Payment Method</label>
                                                                <select
                                                                    className="form-control select select2"
                                                                    name="paymentMethod"
                                                                    value={formData.paymentMethod}
                                                                    onChange={handleInputChange}>
                                                                    <option value=''>Select</option>
                                                                    <option value={'Discount'}>Discount</option>
                                                                    <option value={'Online'}>Online</option>
                                                                    <option value={'Cheque'}>Cheque</option>
                                                                    <option value={'POS'}>POS</option>

                                                                </select>
                                                            </div>
                                                            {formData.paymentMethod === 'Discount' && (
                                                                <div className="col-sm-3 mg-t-10">
                                                                    <label className="form-label">Remark</label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="cashRemark"
                                                                        value={formData.cashRemark}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            )}
                                                            {formData.paymentMethod === 'Online' && (
                                                                <div className="col-sm-3 mg-t-10">
                                                                    <label className="form-label">Transaction ID</label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="transactionID"
                                                                        value={formData.transactionID}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            )}
                                                            {formData.paymentMethod === 'POS' && (
                                                                <div className="col-sm-3 mg-t-10">
                                                                    <label className="form-label">Transaction ID</label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="transactionID"
                                                                        value={formData.transactionID}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            )}

                                                            {formData.paymentMethod === 'Cheque' && (
                                                                <>
                                                                    <div className="col-sm-3 mg-t-10">
                                                                        <label className="form-label">Cheque No</label>
                                                                        <input
                                                                            className="form-control"
                                                                            required=""
                                                                            type="text"
                                                                            name="chequeNo"
                                                                            value={formData.chequeNo}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                    </div>
                                                                    <div className="col-sm-3 mg-t-10">
                                                                        <label className="form-label">Cheque Details: Bank</label>
                                                                        <input
                                                                            className="form-control"
                                                                            required=""
                                                                            type="text"
                                                                            name="chequeDetails"
                                                                            value={formData.chequeDetails}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                    </div>
                                                                    <div className="col-sm-3 mg-t-10">
                                                                        <label className="form-label">Cheque Date</label>
                                                                        <input
                                                                            className="form-control"
                                                                            required=""
                                                                            type="date"
                                                                            name="chequeDate"
                                                                            value={formData.chequeDate}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                    </div>

                                                                </>
                                                            )}
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">
                                                                        Amount Received
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="amountReceived"
                                                                        value={formData.amountReceived}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <label className="form-label">Payment Status</label>
                                                                <select
                                                                    className="form-control select select2"
                                                                    name="paymentStatus"
                                                                    value={formData.paymentStatus}
                                                                    onChange={handleInputChange}>
                                                                    <option>Select</option>
                                                                    <option>Successfull</option>
                                                                    <option>UnSuccessfull</option>

                                                                </select>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-sm">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div>
                                                            <h6 className="main-content-label mb-1">
                                                                Allotment (This will be field by Admin)
                                                            </h6>
                                                        </div>
                                                        <div className="row row-sm">
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">Unit no</label>
                                                                    <input
                                                                        className="form-control"
                                                                        required=""
                                                                        type="text"
                                                                        name="unitNo"
                                                                        value={formData.unitNo}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">Area</label>
                                                                    <input
                                                                        className="form-control"
                                                                        required
                                                                        type="text"
                                                                        name='area'
                                                                        value={formData.area}
                                                                        onChange={handleInputChange}

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">Gift</label>
                                                                    <select
                                                                        className="form-control select select2"
                                                                        name="gift"
                                                                        value={formData.gift}
                                                                        onChange={handleInputChange}
                                                                    >
                                                                        <option value="">Select a Gift</option>
                                                                        {gift.map((option, index) => (
                                                                            <option key={option.id} value={option.id}>
                                                                                {option.giftName}
                                                                            </option>
                                                                        ))}


                                                                    </select>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* End Row */}
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                        <div className="card custom-card">
                                            <div className="card-body">
                                                <div>
                                                    <h6 className="main-content-label mb-4">Applicant Image</h6>
                                                </div>
                                                <form action="form-validation.html" data-parsley-validate>
                                                    <div className>
                                                        <div className="row row-sm">
                                                            <div className="col-sm-12 col-md-12">
                                                                <label htmlFor="applicantpic" style={{ display: 'block' }}></label>
                                                                <input
                                                                    className="form-control"
                                                                    type="file"
                                                                    name="applicantImage"
                                                                    onChange={handleFileChange8}
                                                                />
                                                                <div style={{ width: '350px', height: '220px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                    {profilePicFile && (
                                                                        <img
                                                                            src={URL.createObjectURL(profilePicFile)}
                                                                            alt="Selected File"
                                                                            style={{ width: "100%", height: "100%" }}
                                                                        />
                                                                    )}
                                                                    {!profilePicFile && (
                                                                        <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                    )}
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card custom-card">
                                            <div className="card-body">
                                                <div>
                                                    <h6 className="main-content-label mb-4">
                                                        Co Applicant Image
                                                    </h6>
                                                </div>
                                                <form action="form-validation.html" data-parsley-validate>
                                                    <div className>
                                                        <div className="row row-sm">
                                                            <div className="col-sm-12 col-md-12">
                                                                <label htmlFor="co-applicantpic" style={{ display: 'block' }}></label>
                                                                <input
                                                                    className="form-control"
                                                                    type="file"
                                                                    name="coApplicantImage"
                                                                    onChange={handleFileChange9}
                                                                />
                                                                <div style={{ width: '350px', height: '220px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                    {profilePicFile1 && (
                                                                        <img
                                                                            src={URL.createObjectURL(profilePicFile1)}
                                                                            alt="Selected File"
                                                                            style={{ width: "100%", height: "100%" }}
                                                                        />
                                                                    )}
                                                                    {!profilePicFile1 && (
                                                                        <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                    )}
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

                </div>
            </div>




        </div>
    )
}

export default AddApplicant