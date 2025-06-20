import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiCaretRight } from 'react-icons/bi';


const EditCustomer = () => {

    const { empid } = useParams();
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

    const initialFormData3 = {
        type: '',
    };


    const initialFormData4 = {
        advisor: '',
        bp: '',
        coAdvisor: '',
    };

    const [formData4, setFormData4] = useState(initialFormData4);
    const [formData3, setFormData3] = useState(initialFormData3);

    const initialFormData = {

        fullName: '',
        coFullName: '',
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
        isCoAdvisor: '',
        luckyDrawId: '',




    };

    const [formData, setFormData] = useState(initialFormData);
    const [from, setFrom] = useState('')
    const [facing, setFacing] = useState([])
    const [total4, setTotal4] = useState('')
    const [gift, setGift] = useState([])
    const [profilePic, setProfilePic] = useState(null);
    const [profilePic2, setProfilePic2] = useState(null);
    const [project, setProject] = useState([]);
    const [countryOptions, setCountryOptions] = useState([]);
    const [countryOptions8, setCountryOptions8] = useState([]);
    const [stateOptions, setStateOptions] = useState([]);
    const [stateOptions8, setStateOptions8] = useState([]);
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
    const [size, setSize] = useState([])
    const [total, setTotal] = useState('');
    const [selectedPlanId, setSelectedPlanId] = useState('');
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [disableInput2, setDisableInput2] = useState(true);
    const [profilePics, setProfilePics] = useState(null);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [activeField, setActiveField] = useState("");
    const [shouldShowBP, setShouldShowBP] = useState(true);
    const [lucky, setLucky] = useState([]);
    const [shouldShowAdvisor, setShouldShowAdvisor] = useState(true);
    const [shouldShowCoAdvisor, setShouldShowCoAdvisor] = useState(true);
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

    const handleInputChange2 = (e) => {
        if (!disableInput2) {
            setFormData2({ ...formData2, basicPriceFPP: e.target.value });
        }
    };




    const handleInputChangeData = (e) => {
        const { name, value } = e.target;

        // Set form data dynamically for formData and formData4
        if (name === "BP") {
            setFormData4((prev) => ({
                ...prev,
                BP: value,
            }));
        } else if (name === "advisor" || name === "coAdvisor") {
            setFormData4((prev) => ({
                ...prev,
                [name]: value,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

        // Reset active field if value is cleared
        if (value === "") {
            setActiveField("");
        }
    };

    // Conditional Rendering Logic
    const shouldShowBPField = !formData4.advisor && !formData4.coAdvisor && activeField !== "Advisor" && activeField !== "CoAdvisor";
    const shouldShowAdvisorField = !formData4.BP && activeField !== "BP";
    const shouldShowCoAdvisorField = !formData4.BP && activeField !== "BP";




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
                registrationAmount: from.from.onBookingPLP
            }));
        }
    }, [from]);


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


    const handlePlanSelect = (event) => {
        handleInputChange(event);
        const planId = event.target.value;
        setSelectedPlanId(planId);
        handleOpenModal4(planId);
    };

    // facing
    useEffect(() => {
        setFormData({ ...formData, bsp: from.basicPriceFPP });
    }, [from.basicPriceFPP]);

    useEffect(() => {
        setFormData({ ...formData, bsp: from.basicPricePLP });
    }, [from.basicPricePLP]);

    useEffect(() => {
        setFormData({ ...formData, bsp: from.basicPriceDLP });
    }, [from.basicPriceDLP]);


    useEffect(() => {
        setFormData({ ...formData, paymentPlan: formData3.type });
    }, [formData3.type]);



    useEffect(() => {
        const fetchUsers = async (selectedPlanId) => {
            try {
                const url = `${apiUrl}/plan/planById/${selectedPlanId || '0'}`;
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
            fetchUsers(selectedPlanId);
        }
    }, [selectedPlanId]);



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

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

    //size type
    useEffect(() => {

        const Token = localStorage.getItem('Token');
        const { schemeType } = formData;
        const url = `${apiUrl}/master/getAllMasterData/${0}?&type=${schemeType}`;
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
    }, [formData]);


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


    //project api 
    // useEffect(() => {
    //     fetch(`${apiUrl}/project/getAllProjectDropdown`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             if (data.data && Array.isArray(data.data)) {
    //                 setProject(data.data);
    //             } else {
    //                 console.error('API response is not in the expected format for countries.');
    //             }

    //         })
    //         .catch((error) => {
    //             console.error('Error fetching country data:', error);
    //         });
    // }, []);



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




    useEffect(() => {
        const url = `${apiUrl}/plan/getAllPlanDropdownForEdit?projectId=${formData.projectId}&schemeType=${formData.schemeType}`;
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



    const getCurrentDate = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();
        return `${year}-${month}-${day}`;
    };
    const getCurrentDate2 = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();
        return `${year}-${month}-${day}`;
    };

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
        fetch(`${apiUrl}/employee/allStates/${countryId || '0'}`)
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
        const url = stateId ? `${apiUrl}/employee/allcities/${stateId}` : `${apiUrl}/employee/allcities/${0}`;
        fetch(url)
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
        if (stateId !== 0) {
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
        setStateOptions([]); // Clear state options
        setCityOptions([]); // Clear city options
    };

    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setStateId(selectedState);
        setFormData({
            ...formData,
            applicantState: selectedState,
        });
        setCityOptions([]); // Clear city options
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



    const fetchStat = (countryIds) => {
        fetch(`${apiUrl}/employee/allStates/${countryIds || '0'}`)
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

    const fetchCitiess = (stateIds) => {
        const url = stateIds ? `${apiUrl}/employee/allcities/${stateIds}` : `${apiUrl}/employee/allcities/${0}`;
        fetch(url)
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
        if (stateIds !== 0) {
            fetchCitiess(stateIds);
        }
    }, [stateIds]);



    const handleCountryChang = (event) => {
        const selectedCountry = event.target.value;
        setCountryIds(selectedCountry);
        setFormData({
            ...formData,
            coApplicantCountry: selectedCountry,
        });
        setStateOptions8([]); // Clear state options
        setCityOptions8([]); // Clear city options
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




    // company data get
    let oldSelectedState = [];
    let oldSelectedCity = [];
    let oldSelectedState2 = [];
    let oldSelectedCity2 = [];
    useEffect(() => {
        const fetchUser = async () => {
            const Token = localStorage.getItem('Token');
            try {
                const url = `${apiUrl}/applicant/getApplicantById/${empid}`;
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;
                // console.log('Fetched Data:', data);

                const trimmedData = Object.keys(data).reduce((acc, key) => {
                    if (typeof data[key] === 'string') {
                        acc[key] = data[key].trim();
                    } else {
                        acc[key] = data[key];
                    }
                    return acc;
                }, {});
                // console.log('Fetched Data:', trimmedData);
                let stateParam = trimmedData.applicantCountry || 0;
                let stateParam2 = trimmedData.applicantState || 0;
                let stateParam3 = trimmedData.coApplicantCountry || 0;
                let stateParam4 = trimmedData.coApplicantState || 0;
                const oldSelectedStateResponse = await fetch(`${apiUrl}/employee/allStates/${stateParam || 0}`);
                oldSelectedState = await oldSelectedStateResponse.json();
                const oldSelectedCityResponse = await fetch(`${apiUrl}/employee/allcities/${stateParam2 || 0}`);
                oldSelectedCity = await oldSelectedCityResponse.json();
                // PERMANENT
                const oldSelectedStateResponse2 = await fetch(`${apiUrl}/employee/allStates/${stateParam3 || 0}`);
                oldSelectedState2 = await oldSelectedStateResponse2.json();
                const oldSelectedCityResponse2 = await fetch(`${apiUrl}/employee/allcities/${stateParam4 || 0}`);
                oldSelectedCity2 = await oldSelectedCityResponse2.json();



                setCityOptions(oldSelectedCity.data);
                setStateOptions(oldSelectedState.data);

                // PERMANENT
                setCityOptions8(oldSelectedCity2.data);
                setStateOptions8(oldSelectedState2.data);
                const photo = data.applicantImage;
                const photo2 = data.coApplicantImage;
                setProfilePic(photo)
                setProfilePic2(photo2)

                // console.log(photo)
                setFormData((prevFormData) => ({
                    ...prevFormData,

                    fullName: trimmedData.fullName,
                    coFullName: trimmedData.coFullName,

                    applicantFatherName: trimmedData.applicantFatherName,
                    applicantEmail: trimmedData.applicantEmail,
                    applicantMobile: trimmedData.applicantMobile,
                    applicantAlternateNumber: trimmedData.applicantAlternateNumber,
                    applicantCountry: trimmedData?.applicantCountry,
                    applicantState: trimmedData?.applicantState,
                    applicantCity: trimmedData?.applicantCity,
                    applicantAddress: trimmedData.applicantAddress,
                    applicantDOB: trimmedData.applicantDOB,
                    applicantAadhaarNumber: trimmedData.applicantAadhaarNumber,
                    applicantAadhaarImage: trimmedData.applicantAadhaarImage,
                    applicantPAN: trimmedData.applicantPAN,
                    applicantPanImage: trimmedData.applicantPanImage,
                    applicantNationality: trimmedData.applicantNationality,
                    applicantProfession: trimmedData.applicantProfession,

                    coApplicantFatherName: trimmedData.coApplicantFatherName,
                    coApplicantEmail: trimmedData.coApplicantEmail,
                    coApplicantMobile: trimmedData.coApplicantMobile,
                    coApplicantAlternateNumber: trimmedData.coApplicantAlternateNumber,
                    coApplicantCountry: trimmedData?.coApplicantCountry,
                    coApplicantState: trimmedData?.coApplicantState,
                    coApplicantCity: trimmedData?.coApplicantCity,
                    coApplicantAddress: trimmedData.coApplicantAddress,
                    coApplicantDOB: trimmedData.coApplicantDOB,
                    coApplicantAadhaarNumber: trimmedData.coApplicantAadhaarNumber,
                    coApplicantAadhaarImage: trimmedData.coApplicantAadhaarImage,
                    coApplicantPAN: trimmedData.coApplicantPAN,
                    coApplicantPanImage: trimmedData.coApplicantPanImage,
                    coApplicantNationality: trimmedData.coApplicantNationality,
                    coApplicantProfession: trimmedData.coApplicantProfession,
                    projectId: trimmedData.projectId,
                    schemeId: trimmedData.schemeId,
                    planId: trimmedData.planId,
                    drawSchemeAmount: trimmedData.drawSchemeAmount,

                    sizeType: trimmedData.sizeType,
                    others: trimmedData.others,
                    amountReceived: trimmedData.amountReceived,
                    paymentStatus: trimmedData.paymentStatus,
                    paymentMethod: trimmedData.paymentMethod,
                    transactionID: trimmedData.transactionID,
                    PLCs: trimmedData.PLCs,
                    applicantImage: trimmedData.applicantImage,
                    coApplicantImage: trimmedData.coApplicantImage,

                    applicantPincode: trimmedData.applicantPincode,
                    applicantLandMark: trimmedData.applicantLandMark,
                    coApplicantPincode: trimmedData.coApplicantPincode,
                    coApplicantLandMark: trimmedData.coApplicantLandMark,

                    shipPlotFarmNo: trimmedData.shipPlotFarmNo,
                    registrationAmount: trimmedData.registrationAmount,
                    area: trimmedData.area,

                    bsp: trimmedData.bsp,
                    fixedCharges: trimmedData.fixedCharges,
                    PLCs: trimmedData.PLCs,
                    totalCost: trimmedData.totalCost,

                    cashRemark: trimmedData.cashRemark,
                    chequeNo: trimmedData.chequeNo,
                    chequeDetails: trimmedData.chequeDetails,
                    chequeDate: trimmedData.chequeDate,
                    paymentPlan: trimmedData.paymentPlan,
                    unitNo: trimmedData.unitNo,
                    gift: trimmedData.gift,
                    schemeType: trimmedData.schemeType,
                    facing: trimmedData.facing,

                    applicantAnniversay: trimmedData.applicantAnniversay,
                    coApplicantAnniversay: trimmedData.coApplicantAnniversay,

                    applicantAccountName: trimmedData.applicantAccountName,
                    applicantAccountNumber: trimmedData.applicantAccountNumber,
                    applicantIfsc: trimmedData.applicantIfsc,
                    applicantUpiId: trimmedData.applicantUpiId,

                    advisorId: trimmedData.advisorId,
                    coAdvisorId: trimmedData.coAdvisorId,
                    isCoAdvisor: trimmedData.isCoAdvisor,
                    luckyDrawId: trimmedData.luckyDrawId


                }));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUser();
    }, []);

    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile); // Convert file to URL
                setProfilePic(imageUrl); // Set URL as profilePic
                setFormData((prevData) => ({
                    ...prevData,
                    applicantImage: profilePicFile,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChange2 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile); // Convert file to URL
                setProfilePic2(imageUrl); // Set URL as profilePic
                setFormData((prevData) => ({
                    ...prevData,
                    coApplicantImage: profilePicFile,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChange3 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {


                setFormData((prevData) => ({
                    ...prevData,
                    applicantAadhaarImage: profilePicFile,
                }));
            } else if (profilePicFile.type === 'application/pdf') {
                // Assuming other file inputs exist for these file types
                setFormData((prevData) => ({
                    ...prevData,
                    applicantAadhaarImage: profilePicFile,

                }));


            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChange4 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {


                setFormData((prevData) => ({
                    ...prevData,
                    applicantPanImage: profilePicFile,
                }));
            } else if (profilePicFile.type === 'application/pdf') {
                // Assuming other file inputs exist for these file types
                setFormData((prevData) => ({
                    ...prevData,
                    applicantPanImage: profilePicFile,

                }));


            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChange5 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {


                setFormData((prevData) => ({
                    ...prevData,
                    coApplicantAadhaarImage: profilePicFile,
                }));
            } else if (profilePicFile.type === 'application/pdf') {
                // Assuming other file inputs exist for these file types
                setFormData((prevData) => ({
                    ...prevData,
                    coApplicantAadhaarImage: profilePicFile,

                }));


            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };


    const handleFileChange6 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {


                setFormData((prevData) => ({
                    ...prevData,
                    coApplicantPanImage: profilePicFile,
                }));
            } else if (profilePicFile.type === 'application/pdf') {
                // Assuming other file inputs exist for these file types
                setFormData((prevData) => ({
                    ...prevData,
                    coApplicantPanImage: profilePicFile,

                }));


            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }


    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/applicant/updateApplicant/${empid}`, {
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


    const handleInputChange5 = (event) => {
        const { name, checked } = event.target;
        setFormData3(prevFormData => ({
            ...prevFormData,
            [name]: checked ? 'FPP' : ''
        }));
    };


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
                                    <h2 className="main-content-title tx-24 mg-b-5">Updated Applicant</h2>
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
                                                    <form
                                                        action="form-validation.html"
                                                        data-parsley-validate=""
                                                    >
                                                        <div className="">
                                                            <div className="row row-sm">

                                                                <div className="col-lg-4 form-group">
                                                                    <label className="form-label">
                                                                        Applicant Full Name:{" "}
                                                                        <span className="tx-danger">*</span>
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="fullName"
                                                                        value={formData.fullName}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter"
                                                                        required=""
                                                                        type="text"
                                                                    />
                                                                </div>


                                                                <div className="col-lg-4 form-group">
                                                                    <label className="form-label">
                                                                        Applicant Relation To{" "}
                                                                        <span className="tx-danger">*</span>
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="applicantFatherName"
                                                                        value={formData.applicantFatherName}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter"
                                                                        required=""
                                                                        type="text"
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
                                                                        onChange={handleChange}
                                                                        placeholder="Enter"
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
                                                                        name="applicantMobile"
                                                                        value={formData.applicantMobile}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter"
                                                                        required=""
                                                                        type="text"
                                                                    />
                                                                </div>
                                                                <div className="col-lg-4 form-group">
                                                                    <label className="form-label">
                                                                        Applicant Alternate Number

                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="applicantAlternateNumber"
                                                                        value={formData.applicantAlternateNumber}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter"
                                                                        required=""
                                                                        type="text"
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
                                                    <div className="row row-sm">
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">
                                                                {" "}
                                                                Applicant Country
                                                            </label>
                                                            <select className="form-control select select2"
                                                                name="applicantCountry"
                                                                onChange={(e) => handleCountryChange(e)}>
                                                                <option value=''>Select</option>
                                                                {countryOptions.map((country) => (
                                                                    <option selected={country.id === +formData.applicantCountry} key={country.id} value={(country?.id)}>
                                                                        {`${country.name}`}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label"> Applicant State</label>
                                                            <select className="form-control select select2"
                                                                name="applicantState"

                                                                onChange={(e) => handleStateChange(e)}>
                                                                <option value=''>Select</option>
                                                                {stateOptions.map((state) => (
                                                                    <option selected={state.id === +formData.applicantState} key={state.id} value={(state?.id)}>
                                                                        {`${state.name}`}
                                                                    </option>
                                                                ))}

                                                            </select>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Applicant City</label>
                                                            <select className="form-control select select2"
                                                                name="applicantCity"

                                                                onChange={handleChange}>
                                                                <option value=''>Select</option>
                                                                {cityOptions.map((city, index) => (
                                                                    <option selected={city.id === +formData.applicantCity} key={city.id} value={(city.id)}>
                                                                        {`${city.name}`}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">
                                                                    Applicant Address
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    required=""
                                                                    type="text"
                                                                    name="applicantAddress"
                                                                    value={formData.applicantAddress}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">
                                                                    Pin code
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    required=""
                                                                    type="text"
                                                                    name="applicantPincode"
                                                                    value={formData.applicantPincode}
                                                                    onChange={handleChange}
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
                                                                    required=""
                                                                    type="text"
                                                                    name="applicantLandMark"
                                                                    value={formData.applicantLandMark}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">Applicant DOB</label>
                                                                <input
                                                                    className="form-control fc-datepicker"
                                                                    placeholder="MM/DD/YYYY"
                                                                    max={getCurrentDate()}
                                                                    type="date"
                                                                    name="applicantDOB"
                                                                    value={formData.applicantDOB}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">Applicant Anniversary </label>
                                                                <input
                                                                    className="form-control fc-datepicker"
                                                                    placeholder="MM/DD/YYYY"
                                                                    type="date"
                                                                    name="applicantAnniversay"
                                                                    value={formData.applicantAnniversay}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">
                                                                    Applicant Aadhaar Number
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    required=""
                                                                    type="text"
                                                                    name="applicantAadhaarNumber"
                                                                    value={formData.applicantAadhaarNumber}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">
                                                                    Applicant Aadhaar Image
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    required=""
                                                                    type="file"
                                                                    name="applicantAadhaarImage"
                                                                    onChange={handleFileChange3}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">Applicant PAN</label>
                                                                <input
                                                                    className="form-control"
                                                                    required=""
                                                                    type="text"
                                                                    name="applicantPAN"
                                                                    value={formData.applicantPAN}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">
                                                                    Applicant Pan Image
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    required=""
                                                                    type="file"
                                                                    name="applicantPanImage"
                                                                    onChange={handleFileChange4}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">
                                                                    Applicant Nationality
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    required=""
                                                                    type="text"
                                                                    name="applicantNationality"
                                                                    value={formData.applicantNationality}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">
                                                                    Applicant Profession
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    required=""
                                                                    type="text"
                                                                    name="applicantProfession"
                                                                    value={formData.applicantProfession}
                                                                    onChange={handleChange}
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
                                                                onChange={handleChange}
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
                                                                onChange={handleChange}
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
                                                                onChange={handleChange}
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
                                                                    onChange={handleChange}
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
                                                    <form
                                                        action="form-validation.html"
                                                        data-parsley-validate=""
                                                    >
                                                        <div className="">
                                                            <div className="row row-sm">
                                                                <div className="col-lg-4 form-group">
                                                                    <label className="form-label">
                                                                        Co Applicant Full Name:{" "}
                                                                        <span className="tx-danger">*</span>
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="coFullName"
                                                                        value={formData.coFullName}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter"
                                                                        required=""
                                                                        type="text"
                                                                    />
                                                                </div>


                                                                <div className="col-lg-4 form-group">
                                                                    <label className="form-label">
                                                                        Co Applicant Relation To{" "}
                                                                        <span className="tx-danger">*</span>
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="coApplicantFatherName"
                                                                        value={formData.coApplicantFatherName}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter"
                                                                        required=""
                                                                        type="text"
                                                                    />
                                                                </div>
                                                                <div className="col-lg-4 form-group">
                                                                    <label className="form-label">
                                                                        Co Applicant Email:{" "}
                                                                        <span className="tx-danger">*</span>
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="coApplicantEmail"
                                                                        value={formData.coApplicantEmail}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter"
                                                                        required=""
                                                                        type="text"
                                                                    />
                                                                </div>
                                                                <div className="col-lg-4 form-group">
                                                                    <label className="form-label">
                                                                        Co Applicant Mobile

                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="coApplicantMobile"
                                                                        value={formData.coApplicantMobile}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter"
                                                                        required=""
                                                                        type="text"
                                                                    />
                                                                </div>
                                                                <div className="col-lg-4 form-group">
                                                                    <label className="form-label">
                                                                        Co Applicant Alternate Number:{" "}
                                                                        <span className="tx-danger">*</span>
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        name="coApplicantAlternateNumber"
                                                                        value={formData.coApplicantAlternateNumber}
                                                                        onChange={handleChange}
                                                                        placeholder="Enter"
                                                                        required=""
                                                                        type="text"
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
                                                            <label className="form-label">
                                                                Co Applicant Country
                                                            </label>
                                                            <select
                                                                className="form-control select select2"
                                                                name="coApplicantCountry"
                                                                value={formData.coApplicantCountry}
                                                                onChange={handleCountryChang}
                                                            >
                                                                <option value="">Select a country</option>
                                                                {countryOptions8.map((country) => (
                                                                    <option key={country.id} value={country?.id}>
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
                                                                    <option key={state.id} value={state?.id}>
                                                                        {` ${state.name}`}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">
                                                                Co Applicant City
                                                            </label>


                                                            <select
                                                                className="form-control select select2"
                                                                name="coApplicantCity"
                                                                value={formData.coApplicantCity}
                                                                onChange={handleChange}
                                                            >
                                                                <option value="">Select a city</option>
                                                                {cityOptions8.map((city, index) => (
                                                                    <option key={city.id} value={city?.id}>
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
                                                                    required=""
                                                                    type="text"
                                                                    name="coApplicantAddress"
                                                                    value={formData.coApplicantAddress}
                                                                    onChange={handleChange}
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
                                                                    required=""
                                                                    type="text"
                                                                    name="coApplicantPincode"
                                                                    value={formData.coApplicantPincode}
                                                                    onChange={handleChange}
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
                                                                    required=""
                                                                    type="text"
                                                                    name="coApplicantLandMark"
                                                                    value={formData.coApplicantLandMark}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">
                                                                    Co Applicant DOB
                                                                </label>
                                                                <input
                                                                    className="form-control fc-datepicker"
                                                                    placeholder="MM/DD/YYYY"
                                                                    max={getCurrentDate2()}
                                                                    type="date"
                                                                    name="coApplicantDOB"
                                                                    value={formData.coApplicantDOB}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">
                                                                    Co Applicant Anniversary
                                                                </label>
                                                                <input
                                                                    className="form-control fc-datepicker"
                                                                    placeholder="MM/DD/YYYY"

                                                                    type="date"
                                                                    name="coApplicantAnniversay"
                                                                    value={formData.coApplicantAnniversay}
                                                                    onChange={handleChange}
                                                                />
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
                                                                    onChange={handleChange}
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
                                                                    required=""
                                                                    type="file"
                                                                    name="coApplicantAadhaarImage"
                                                                    onChange={handleFileChange5}
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
                                                                    onChange={handleChange}
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
                                                                    required=""
                                                                    type="file"
                                                                    name="coApplicantPanImage"
                                                                    onChange={handleFileChange6}
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
                                                                    onChange={handleChange}
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
                                                                    onChange={handleChange}
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
                                                                <label className="form-label">Scheme</label>
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

                                                        <div className="col-sm-3 mg-t-10">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">
                                                                    Payment Plan
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    required=""
                                                                    type="text"
                                                                    // name="paymentPlan"
                                                                    value={formData.paymentPlan}
                                                                // onChange={handleInputChange}
                                                                />
                                                            </div>
                                                        </div>



                                                        {!formData.isCoAdvisor && shouldShowBPField && (
                                                            <div className="col-sm-3 mg-t-10">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">Advisor (VP)</label>
                                                                    <select
                                                                        className="form-control select select2"
                                                                        name="advisorId"
                                                                        value={formData.advisorId || formData4.advisor}
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

                                                        {formData.isCoAdvisor && (
                                                            <>
                                                                {/* Advisor Field */}
                                                                {shouldShowAdvisorField && (
                                                                    <div className="col-sm-3 mg-t-10">
                                                                        <label className="form-label">
                                                                            Advisor: <span className="tx-danger">*</span>
                                                                        </label>
                                                                        <select
                                                                            className="form-control select select2"
                                                                            name="advisorId"
                                                                            value={formData.advisorId || formData4.advisor}
                                                                            onFocus={() => setActiveField("Advisor")}
                                                                            onChange={handleInputChangeData}
                                                                        >
                                                                            <option value="">Select an Advisor</option>
                                                                            {advisor.map((option) => (
                                                                                <option key={option.id} value={option.id}>
                                                                                    {option.fullName}
                                                                                </option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                )}

                                                                {/* Co-Advisor Field */}
                                                                {shouldShowCoAdvisorField && (
                                                                    <div className="col-sm-3 mg-t-10">
                                                                        <label className="form-label">
                                                                            Co Advisor: <span className="tx-danger">*</span>
                                                                        </label>
                                                                        <select
                                                                            className="form-control select select2"
                                                                            name="coAdvisorId"
                                                                            value={formData.coAdvisorId || formData4.coAdvisor}
                                                                            onFocus={() => setActiveField("CoAdvisor")}
                                                                            onChange={handleInputChangeData}
                                                                        >
                                                                            <option value="">Select a Co Advisor</option>
                                                                            {advisor.map((option) => (
                                                                                <option key={option.id} value={option.id}>
                                                                                    {option.fullName}
                                                                                </option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                )}
                                                            </>
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
                                                                <label className="form-label">Unit Type</label>
                                                                <select
                                                                    className="form-control select select2"
                                                                    name="schemeType"
                                                                    value={formData.schemeType}
                                                                    onChange={handleInputChange}>
                                                                    <option value="">Select </option>
                                                                    {displayStatus.map((option, index) => (
                                                                        <option key={option.id} value={option.name}>
                                                                            {option.name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
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
                                                                <option value={'Cash'}>Cash</option>
                                                                <option value={'Online'}>Online</option>
                                                                <option value={'Cheque'}>Cheque</option>
                                                                <option value={'POS'}>POS</option>

                                                            </select>
                                                        </div>
                                                        {formData.paymentMethod === 'Cash' && (
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
                                                            Allotment
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
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                type="file"
                                                                className="dropify"
                                                                data-default-file="../assets/img/media/1.jpg"
                                                                data-height={200}
                                                                name="profilePhoto"
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
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                type="file"
                                                                className="dropify"
                                                                data-default-file="../assets/img/media/1.jpg"
                                                                data-height={200}
                                                                name="coApplicantImage"
                                                                onChange={handleFileChange2}
                                                            />
                                                            <div style={{ width: '350px', height: '220px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePic2 && (
                                                                    <img src={profilePic2} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePic2 && (
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
                                        href=""
                                        className="btn btn-primary"
                                        type="submit"
                                        onClick={handleUpdate}
                                    >
                                        Update
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
                                    Copyright © 2024 <a href="javascript:void(0)">Webkype</a>. Designed
                                    by <a href="http://webkype.com/">Webkype.com</a> All rights
                                    reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default EditCustomer