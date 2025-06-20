import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiCaretRight } from 'react-icons/bi';
import io from 'socket.io-client';
import { number } from "yup";
import { useLocation } from 'react-router-dom';

const EoiInventoryListss = () => {
    const location = useLocation();
    const { id, firstName, middleName, lastName, preferredInventoryId, eoiCode } = location.state || {};
    const navigate = useNavigate();
    const { empid } = useParams();

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
        type1: '',
        type3: ''
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
        remark: '',




    };

    const [filterByObj, setFilterByObj] = useState({
        status: '',
        membership: '',
        unitNo: '',
        type: '',
    });

    const [formData10, setFormData10] = useState(initialFormData10);
    const [reportingBossA, setReportingBossA] = useState([])
    const [formData2, setFormData2] = useState(initialFormData2);
    const [formData8, setFormData8] = useState(initialFormData8);
    const [formData4, setFormData4] = useState(initialFormData4);
    const [plan, setPlan] = useState([]);
    const [formData3, setFormData3] = useState(initialFormData);
    const [users, setUsers] = useState([]);
    const [inventoryHistorys, setInventoryHistorys] = useState([]);
    const [userss, setUserss] = useState({});
    const [inventorys, setInventorys] = useState({
        bspSP: '',
        bspPLP: '',
        bspDLP: '',
    });
    const [eoi, setEoi] = useState({});
    const [eois, setEois] = useState('');
    const [applicant, setApplicant] = useState({});
    const [inventory, setInventory] = useState('');
    const [unitNo, setUnitNo] = useState('');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [loadingsss, setLoadingsss] = useState(true);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [isModalOpen6, setIsModalOpen6] = useState('');
    const [isModalOpen7, setIsModalOpen7] = useState('');
    const [isModalOpen10, setIsModalOpen10] = useState(false);
    const [employee3, setEmployee3] = useState({})
    const [isModalOpen11, setIsModalOpen11] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState('');
    const [disableInput2, setDisableInput2] = useState(true);
    const [profilePic, setProfilePic] = useState(null);
    const [profilePics, setProfilePics] = useState(null);
    const [size, setSize] = useState([])
    const [timers, setTimers] = useState({});
    const [gift, setGift] = useState([])
    const [from, setFrom] = useState('')
    const [employee5, setEmployee5] = useState({})
    const [view, setView] = useState('')
    const [views, setViews] = useState({})
    const [project, setProject] = useState([]);
    const [count, setCount] = useState('');
    const [isModalOpen16, setIsModalOpen16] = useState(false);
    const [employee4, setEmployee4] = useState({})
    const [ids, setIds] = useState('')
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
    const [isDataVisible, setIsDataVisible] = useState(true);
    const [isModalOpen56, setIsModalOpen56] = useState(false);
    const [isModalOpen57, setIsModalOpen57] = useState('');

    const [checkedItems, setCheckedItems] = useState({});
    const [isModalOpen58, setIsModalOpen58] = useState(false);
    const [isModalOpen59, setIsModalOpen59] = useState('');

    const [plansType, setPlansType] = useState('');

    const [isModalOpen60, setIsModalOpen60] = useState('');
    const [users2, setUsers2] = useState([]);
    const [showButton, setShowButton] = useState(true);
    const [loadings, setLoadings] = useState(false);

    const initialFormData5 = {

        number: '',


    };
    const initialFormDatas = {
        bspSP: '',
        bspPLP: '',
        bspDLP: '',
        unitNo: '',
        for: '',
        size: '',
    };
    const [formDatas, setFormDatas] = useState(initialFormDatas);

    const [formData5, setFormData5] = useState(initialFormData5);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState('');

    const [isModalOpens4, setIsModalOpens4] = useState(false);
    const [isModalOpens5, setIsModalOpens5] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


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

    const handleOpenModal56 = (id) => {
        setIsModalOpen57(id);
        setIsModalOpen56(true);
        document.body.classList.remove('modal-open');
    };


    const handleCloseModal56 = () => {
        setIsModalOpen56(false);
        document.body.classList.remove('modal-open');
    };

    const discountValues = {
        option1: 300000, // Silver EOI Discount
        option2: 400000, // Gold EOI Discount
        option3: 500000, // Platinum EOI Discount
        option4: 200000, // Platinum Plus Discount
    };


    const handleInputChangesss = (event) => {
        const { name, value } = event.target;
        setFormData5({
            ...formData5,
            [name]: value,
        });
    }



    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheckedItems((prev) => ({
            ...prev,
            [name]: checked ? discountValues[name] : undefined, // Set value if checked, else remove
        }));
    };

    // Calculate total discount based on checked items
    const calculateTotal = () => {
        const totalDiscount = Object.values(checkedItems).reduce((acc, value) => acc + (value || 0), 0);
        return totalDiscount;
    };

    // Calculate the total discount based on checked items
    const totalDiscount = calculateTotal();
    let originalValue = 0;

    // Determine the original value based on formData8 type
    if (formData8?.type === 'SP') {
        originalValue = formData2 && employee3 && employee3.paymentLedger
            ? totalss7 - employee3.paymentLedger.amount
            : 0;
    } else if (formData8?.type === 'PLP') {
        originalValue = formData2 && employee3 && employee3.paymentLedger
            ? totalss - employee3.paymentLedger.amount
            : 0;
    } else if (formData8?.type === 'DLP') {
        originalValue = formData2 && employee3 && employee3.paymentLedger
            ? totalss3 - employee3.paymentLedger.amount
            : 0;
    }

    const manualDiscountValue = Number(formData5.number) || 0;
    // Calculate the final amount after deductions

    const finalValue = Math.abs(originalValue - totalDiscount - manualDiscountValue);

    const finalValuess = Math.abs(totalDiscount);
    console.log(finalValuess, typeof finalValuess, manualDiscountValue, typeof manualDiscountValue, formData5);

    const finalValues = Math.abs((finalValuess) + manualDiscountValue);

    const handleOpenModal58 = async (paymentPlan, id) => {
        // Set modal state and remove modal-open class
        setIsModalOpen59(paymentPlan);
        setIsModalOpen60(id);
        setIsModalOpen58(true);
        document.body.classList.remove('modal-open');

        // Fetch inventory data
        await getInventorys(id);
    };


    const handleCloseModal58 = () => {
        setIsModalOpen58(false);
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
    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal5 = (projectId, id) => {

        setIsModalOpen5(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal5 = () => {
        setIsModalOpen5(false);
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


    const handleOpenModal0 = () => {

        setIsModalOpen10(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal0 = () => {
        setIsModalOpen10(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal7 = (projectId, id, unit) => {
        setInventory(id);
        setIsModalOpen7(projectId);
        setUnitNo(unit)
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


    const handleInputInvetory = (e) => {
        const { name, value } = e.target;
        setInventorys((prevInventorys) => ({
            ...prevInventorys,
            [name]: value,
        }));
    };


    const handleInputChange5 = (event) => {
        const { checked } = event.target;

        // Update state based on checkbox status
        setFormData8((prevFormData) => ({
            ...prevFormData,
            type: checked ? 'SP' : '',
            type1: checked ? `${inventorys.bspSP}` : '',
            type3: checked ? `${totalss10}` : ''
        }));
    };


    const handleInputChange6 = (event) => {
        const { checked } = event.target;

        // Update state based on checkbox status
        setFormData8((prevFormData) => ({
            ...prevFormData,
            type: checked ? 'PLP' : '',
            type1: checked ? `${inventorys.bspPLP}` : '',
            type3: checked ? `${totalss2}` : ''
        }));
    };



    const handleInputChange7 = (event) => {
        const { checked } = event.target;

        // Update state based on checkbox status
        setFormData8((prevFormData) => ({
            ...prevFormData,
            type: checked ? 'DLP' : '',
            type1: checked ? `${inventorys.bspDLP}` : '',
            type3: checked ? `${totalss6}` : ''
        }));
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


    const toggleDataVisibility = () => {
        setIsDataVisible(prevState => !prevState);
    };

    // plp plan

    useEffect(() => {
        const areaValue = parseFloat(inventorys.size);
        const priceValue = parseFloat(inventorys.bspPLP);
        const priceValues = parseFloat(inventorys.edcIdcValue);
        const priceValuess = parseFloat(inventorys.plcValue);
        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate 10% of the total value

            const totalValue = (areaValue * priceValue + priceValues) + (areaValue * priceValue * priceValuess);
            const totalValues = (totalValue) * 0.10

            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss(formattedTotalValue);

            console.log('Total (10% of the calculated value):', totalValue);
        }
    }, [inventorys.size, inventorys.bspPLP, inventorys.edcIdcValue, inventorys.plcValue]);


    useEffect(() => {
        const areaValue = parseFloat(inventorys.size);
        const priceValue = parseFloat(inventorys.bspPLP);
        const priceValues = parseFloat(inventorys.edcIdcValue);
        const priceValuess = parseFloat(inventorys.plcValue);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate 5% of the total value

            const totalValue = (areaValue * priceValue + priceValues) + (areaValue * priceValue * priceValuess);
            const totalValues = (totalValue) * 0.05

            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss1(formattedTotalValue);

            console.log('Total (5% of the calculated value):', totalValue);
        }
    }, [inventorys.size, inventorys.bspPLP]);

    useEffect(() => {
        const areaValue = parseFloat(inventorys.size);
        const priceValue = parseFloat(inventorys.bspPLP);
        const priceValues = parseFloat(inventorys.edcIdcValue);
        const priceValuess = parseFloat(inventorys.plcValue);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate 100% of the total value
            const totalValue = (areaValue * priceValue + priceValues) + (areaValue * priceValue * priceValuess);

            setTotalss2(totalValue);


        }
    }, [inventorys.size, inventorys.bspPLP, inventorys.edcIdcValue, inventorys.plcValue]);


    // dlp

    useEffect(() => {
        const areaValue = parseFloat(inventorys.size);
        const priceValue = parseFloat(inventorys.bspDLP);
        const priceValues = parseFloat(inventorys.edcIdcValue);
        const priceValuess = parseFloat(inventorys.plcValue);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate 15% of the total value

            const totalValue = (areaValue * priceValue + priceValues) + (areaValue * priceValue * priceValuess);
            const totalValues = (totalValue) * 0.15


            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss3(formattedTotalValue);


        }
    }, [inventorys.size, inventorys.bspDLP, inventorys.edcIdcValue, inventorys.plcValue]);


    useEffect(() => {
        const areaValue = parseFloat(inventorys.size);
        const priceValue = parseFloat(inventorys.bspDLP);
        const priceValues = parseFloat(inventorys.edcIdcValue);
        const priceValuess = parseFloat(inventorys.plcValue);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate 15% of the total value

            const totalValue = (areaValue * priceValue + priceValues) + (areaValue * priceValue * priceValuess);
            const totalValues = (totalValue) * 0.10


            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss4(formattedTotalValue);


        }
    }, [inventorys.size, inventorys.bspDLP, inventorys.edcIdcValue, inventorys.plcValue]);


    useEffect(() => {
        const areaValue = parseFloat(inventorys.size);
        const priceValue = parseFloat(inventorys.bspDLP);
        const priceValues = parseFloat(inventorys.edcIdcValue);
        const priceValuess = parseFloat(inventorys.plcValue);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate 15% of the total value
            const totalValue = (areaValue * priceValue + priceValues) + (areaValue * priceValue * priceValuess);
            const totalValues = (totalValue) * 0.05


            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss5(formattedTotalValue);


        }
    }, [inventorys.size, inventorys.bspDLP, inventorys.edcIdcValue, inventorys.plcValue]);



    useEffect(() => {
        const areaValue = parseFloat(inventorys.size);
        const priceValue = parseFloat(inventorys.bspDLP);
        const priceValues = parseFloat(inventorys.edcIdcValue);
        const priceValuess = parseFloat(inventorys.plcValue);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate 100% of the total value

            const totalValue = (areaValue * priceValue + priceValues) + (areaValue * priceValue * priceValuess);


            setTotalss6(totalValue);


        }
    }, [inventorys.size, inventorys.bspDLP, inventorys.edcIdcValue, inventorys.plcValue]);

    // super plan


    useEffect(() => {
        const areaValue = parseFloat(inventorys.size);
        const priceValue = parseFloat(inventorys.bspSP);
        const priceValues = parseFloat(inventorys.edcIdcValue);
        const priceValuess = parseFloat(inventorys.plcValue);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(priceValue) && !isNaN(priceValues) && !isNaN(priceValuess)) {
            // Calculate 30% of the total value

            const totalValue = (areaValue * priceValue + priceValues) + (areaValue * priceValue * priceValuess);
            const totalValues = (totalValue) * 0.30

            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss7(formattedTotalValue);
        }
    }, [inventorys.size, inventorys.bspSP, inventorys.edcIdcValue, inventorys.plcValue]);


    useEffect(() => {
        const areaValue = parseFloat(inventorys.size);
        const priceValue = parseFloat(inventorys.bspSP);
        const priceValues = parseFloat(inventorys.edcIdcValue);
        const priceValuess = parseFloat(inventorys.plcValue);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(priceValue) && !isNaN(priceValues) && !isNaN(priceValuess)) {
            // Calculate 50% of the total value
            const totalValue = (areaValue * priceValue + priceValues) + (areaValue * priceValue * priceValuess);

            const totalValues = (totalValue) * 0.50
            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss8(formattedTotalValue);
        }
    }, [inventorys.size, inventorys.bspSP, inventorys.edcIdcValue, inventorys.plcValue]);


    useEffect(() => {
        const areaValue = parseFloat(inventorys.size);
        const priceValue = parseFloat(inventorys.bspSP);
        const priceValues = parseFloat(inventorys.edcIdcValue);
        const priceValuess = parseFloat(inventorys.plcValue);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate 20% of the total value
            const totalValue = (areaValue * priceValue + priceValues) + (areaValue * priceValue * priceValuess);
            const totalValues = (totalValue) * 0.20

            // Format the total value and remove decimal if it's ".00"
            let formattedTotalValue = totalValues.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated value to state
            setTotalss9(formattedTotalValue);
        }
    }, [inventorys.size, inventorys.bspSP, inventorys.edcIdcValue, inventorys.plcValue]);


    useEffect(() => {
        const areaValue = parseFloat(inventorys.size);
        const priceValue = parseFloat(inventorys.bspSP);
        const priceValues = parseFloat(inventorys.edcIdcValue);
        const priceValuess = parseFloat(inventorys.plcValue);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate 100% of the total value
            const totalValue = (areaValue * priceValue + priceValues) + (areaValue * priceValue * priceValuess);

            setTotalss10(totalValue);


        }
    }, [inventorys.size, inventorys.bspSP, inventorys.edcIdcValue, inventorys.plcValue]);




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




    const fetchDatale = async () => {

        const url = ` ${apiUrl}/eoi/inventoryHistory?inventoryId=${isModalOpen57}`;

        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });
            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {

                setUsers2(data.data);
            } else {
                console.error('Unexpected API response:', data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchDatale();
    }, [isModalOpen57]);


    // get inventory

    async function getInventorys() {
        const url = `${apiUrl}/inventory/getInventoryById?inventoryId=${inventory || isModalOpen60}`;
        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`
            },
        });
        response = await response.json();

        if (response.status === "success") {
            setInventorys(response.data);
        }
    }

    useEffect(() => {
        getInventorys();
    }, [inventory, isModalOpen60]);



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
        const fetchPlanData = async () => {
            if (isModalOpen6) {
                try {
                    const url = `${apiUrl}/plan/eoiPlanDropdown?projectId=${isModalOpen6}`;
                    const response = await fetch(url);
                    const data = await response.json();

                    if (Array.isArray(data?.data)) {
                        setPlan(data.data);
                    } else {
                        console.error('API response is not in the expected format for countries.');
                    }
                } catch (error) {
                    console.error('Error fetching country data:', error);
                }
            }
        };

        fetchPlanData();
    }, [isModalOpen6]);


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

    const handleSubmit2 = async () => {
        setLoadings(true); // Set loading to true when button is clicked
        try {
            const { type } = formData8; // Adjust as necessary for destructuring
            const url = `${apiUrl}/eoi/eoiInventoryAllocation?isAllocated=true&inventoryId=${inventory}&applicantId=${applicant}&planId=${selectedPlanId}&type=${type}&basicPriceSP=${inventorys.bspSP}&totalValueSP=${totalss10}&basicPricePLP=${inventorys.bspPLP}&totalValuePLP=${totalss2}&basicPriceDLP=${inventorys.bspDLP}&totalValueDLP=${totalss6}`;

            const formDataToSend = new FormData();

            // Append existing formData10 values
            for (const key in formData10) {
                if (formData10[key] !== null) {
                    formDataToSend.append(key, formData10[key]);
                }
            }

            // Calculate finalValues and append to formDataToSend
            const offeredDiscount = finalValues;
            formDataToSend.append('offeredDiscount', offeredDiscount);

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
                body: formDataToSend,
            });

            const data = await response.json();
            console.log('Response Data:', data); // Log response data

            if (data.status === 'success') {
                toast.success(data.message);
                setFrom(data.data);
                handleCloseModal7();
                handleCloseModal5();
                handleCloseModal0();
                fetchDataFromApi();
                getEmpp();

            } else {
                console.error('API request was not successful:', data.message);
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error(error.message);
        } finally {
            setLoadings(false); // Set loading back to false once API call is complete
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



    const SOCKET_URL = `${apiUrl}`;
    const socket = useRef(null);

    // Fetch data when the component mounts
    useEffect(() => {
        fetchDataFromApi();

        // Initialize the socket connection
        socket.current = io(SOCKET_URL);

        // Handle socket events
        socket.current.on('connect', () => {
            console.log('Connected to socket server with ID:', socket.current.id);
        });

        socket.current.on('inventory_update', handleInventoryUpdate);
        socket.current.on('timer_update', handleTimerUpdate);
        socket.current.on('disconnect', () => {
            console.log('Disconnected from socket server');
        });

        // Cleanup on unmount
        return () => {
            socket.current.disconnect();
            socket.current.off('inventory_update', handleInventoryUpdate);
            socket.current.off('timer_update', handleTimerUpdate);
        };
    }, []);

    // Handle inventory update event
    const handleInventoryUpdate = (data) => {
        console.log('Received inventory update:', data);
        if (data && data.inventory) {
            const { id } = data.inventory;
            const remainingTimeInMillis = data.remainingTime;
            const remainingTimeInSeconds = Math.floor(remainingTimeInMillis / 1000);

            setUsers(prevUsers => ({
                ...prevUsers,
                [id]: data.inventory,
            }));

            setTimers(prevTimers => ({
                ...prevTimers,
                [id]: remainingTimeInSeconds,
            }));
        }
    };

    // Handle timer updates
    const handleTimerUpdate = (timerData) => {
        console.log('Received timer update:', timerData);
        const { userId, remainingTime } = timerData;

        setTimers(prevTimers => ({
            ...prevTimers,
            [userId]: remainingTime,
        }));
    };

    // Handle Hold click (API Call)
    const handleHoldClick = async (userId, userIds) => {
        setPlansType(userIds)
        const url = `${apiUrl}/eoi/eoiInventoryAction?isHold=true&inventoryId=${userId}`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            const result = await response.json();

            if (result.status === 'success') {
                toast.success(result.message);
                fetchDataFromApi()
                // Do not disconnect the socket here
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error updating hold status:', error);
            toast.error('An error occurred while updating the hold status.');
        }
    };

    // Timer logic to check and decrement timers every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTimers(prevTimers => {
                const newTimers = { ...prevTimers };
                for (const userId in newTimers) {
                    if (newTimers[userId] <= 0) {
                        console.log(`Timer for user ${userId} has expired`);

                        delete newTimers[userId];
                    } else {
                        newTimers[userId] -= 1;
                    }
                }
                return newTimers;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Function to format time
    const formatTime = (totalSeconds) => {
        const formattedMinutes = Math.floor(totalSeconds / 60);
        const formattedSeconds = totalSeconds % 60;
        return `${formattedMinutes}:${String(formattedSeconds).padStart(2, '0')} sec`;
    };

    const fetchDataFromApi = async () => {
        setLoadingsss(true);
        try {
            const { status, unitNo, type } = filterByObj;
            const url = `${apiUrl}/inventory/getInventory?isEoi=true&unitNo=${unitNo}&status=${status}&type=${type}&projectId=${eoi.projectId}${isCheckboxChecked ? '' : `&id=${preferredInventoryId}`
                }`;

            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            const data = await response.json();
            setCount(data.totalCount);

            if (data.status === 'success' && Array.isArray(data.data)) {
                const usersObject = {};
                data.data.forEach(user => {
                    usersObject[user.id] = user;
                });
                setUsers(usersObject); // Directly set new data
            } else {
                console.error('API response error or invalid data:', data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoadingsss(false);
        }
    };


    useEffect(() => {
        fetchDataFromApi();
    }, [filterByObj, eoi.projectId, isCheckboxChecked]);

    const handleCheckboxChangeInventory = () => {
        setIsCheckboxChecked(prevState => !prevState);

    };


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


    async function getEmpp() {
        const url = `${apiUrl}/eoi/eoiApplicantInventory?applicantId=${applicant}`;

        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        });
        response = await response.json();

        if (response.status === "success") {
            setUserss(response.data);

        }
    }


    useEffect(() => {

        getEmpp();
    }, [search, applicant]);


    useEffect(() => {
        async function getEmp() {
            const url = `${apiUrl}/eoi/getEoiApplicant?ticketId=${empid}`;

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
                setApplicant(eoiData.id);

                // Check if paymentLedge exists and has a non-null amount
                if (firstPaymentLedge && firstPaymentLedge.amount !== null) {
                    setEois(firstPaymentLedge.amount); // Set the amount
                } else {
                    setEois("N/A"); // Handle null amount
                }
            }
        }

        getEmp();
    }, [search]);


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
            fetchDataFromApi();
        }
        else {
            toast.error(response.message);
        }
    }


    async function getRelease(id) {
        const url = `${apiUrl}/inventory/releaseInventory?inventoryId=${id}`;

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

    async function getEmpppp(id) {
        const url = `${apiUrl}/applicant/eoiInventoryAllocation?isAllocated=true&inventoryId=${id}&applicantId=${applicant}`;

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


    async function handleBookingAndOpenModal(projectId, inventoryId) {
        try {
            const url = `${apiUrl}/eoi/isBooking?isBooking=true&inventoryId=${inventoryId}`;

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
                return true;
            } else {
                toast.error(response.message);
                return false;
            }
        } catch (error) {
            toast.error("Error occurred during booking.");
            return false;
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


    async function getAppliedss() {

        const url = `${apiUrl}/eoi/ispltDiscountShow?applicantId=${applicant}&inventoryId=${inventory}`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();

                if (data.status === "success") {
                    setEmployee5(data.data);
                }
            } else {
                console.error('Error: ', response.status);
            }
        } catch (error) {
            console.error('Fetch error: ', error);
        }
    }

    useEffect(() => {
        if (applicant && inventory && Token) {
            getAppliedss();
        }
    }, [applicant, inventory, apiUrl, Token]);


    const handleFilter = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    // Function to get button background color based on remaining time
    const getButtonColor = (remainingTime) => {
        if (remainingTime > 60) {
            return 'green'; // More than 1 minute
        } else if (remainingTime > 30) {
            return '#f1c40f';
        } else if (remainingTime > 10) {
            return 'orange'; // Between 10 and 30 seconds
        } else {
            return 'red'; // Less than 10 seconds
        }
    };


    const getTextColor = (remainingTime) => {
        if (remainingTime > 30) {
            return '#fff';
        } else {
            return '#fff';
        }
    };


    const allocatedDate = new Date(views.allocatedDate);
    const formattedDate = allocatedDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });


    // Inject keyframes into the document
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


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


            <div className="page" >
                <TopHeader />
                <Prince />
                <div className="main-content  pt-0" >
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div className="d-flex align-items-center gap-2">
                                    <h2 className="main-content-title tx-24 mg-b-5 d-flex align-items-center mb-0">
                                        <span style={{ whiteSpace: 'nowrap' }}>EOI Inventory List ({count})</span>
                                        <input
                                            type="text"
                                            className="form-control mx-2"
                                            placeholder="Unit no..."
                                            name="unitNo"
                                            value={filterByObj.unitNo}
                                            onChange={handleFilter}
                                        />
                                        <select
                                            className="form-control mx-2"
                                            name="status"
                                            value={filterByObj.status}
                                            onChange={handleFilter}
                                        >
                                            <option value="">Select Status</option>
                                            <option>Available</option>
                                            <option>Hold</option>
                                            <option>Booked</option>
                                        </select>
                                    </h2>
                                    <span
                                        style={{
                                            whiteSpace: 'nowrap',
                                            fontSize: '16px',
                                            fontFamily: 'Roboto, Arial, sans-serif',
                                            letterSpacing: '0.3px',
                                            color: '#444',
                                            backgroundImage: 'linear-gradient(45deg, #333, #666)',
                                            WebkitBackgroundClip: 'text',
                                            color: 'transparent',
                                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        All Inventory
                                    </span>

                                    <label className="ckbox">
                                        <input
                                            type="checkbox"
                                            value={5}
                                            checked={isCheckboxChecked}
                                            onChange={handleCheckboxChangeInventory}
                                        />
                                        <span />
                                    </label>
                                </div>


                                <div className="d-flex">
                                    <div className="justify-content-center">

                                        <button
                                            onClick={handleOpenModal4}
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text  me-2"
                                        >
                                            Upload Inventory
                                        </button>

                                        <div
                                            className={`modal ${isModalOpen4 ? 'show' : ''}`}
                                            style={{ display: isModalOpen4 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                                            tabIndex="-1"
                                            role="dialog"
                                        >
                                            <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px' }}>
                                                <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                                    <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                                        <h5 className="modal-title">Inport Inventory</h5>
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
                                                        <button className="btn ripple btn-primary" type="button"
                                                            style={{ borderRadius: '5px', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold' }} onClick={handleSubmit7}
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
                                        <td style={{ padding: '12px' }}>{`${eoi?.applicantFirstName || ''} ${eoi?.applicantLastName || ''}`}</td>
                                        <td style={{ padding: '12px' }}>{eoi?.projectsubscription?.eoiType || 'N/A'}</td>
                                        <td style={{ padding: '12px' }}>{eois}</td>
                                        <td style={{ padding: '12px' }}>{eoi?.projectsubscription?.eoiCode || 'N/A'}</td>
                                    </tr>
                                </tbody>
                            </table>


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
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>UNIT</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Size ( Sq Yd)</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>BSP (Rs.)</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>PLC</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>EDC/IDC (Rs.)</th>
                                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Total cost (Rs.)</th>
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

                                                                                    {loadingsss ? (
                                                                                        <div style={loaderStyles.overlay}>
                                                                                            <div style={loaderStyles.loaderContainer}>
                                                                                                <div style={loaderStyles.dot}></div>
                                                                                                <div style={{ ...loaderStyles.dot, animationDelay: '0.2s' }}></div>
                                                                                                <div style={{ ...loaderStyles.dot, animationDelay: '0.4s' }}></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    ) : (
                                                                                        <table className="table table-striped table-bordered text-nowrap mb-0">
                                                                                            <thead>
                                                                                                <tr>

                                                                                                    <th>Details</th>
                                                                                                    <th>Other Changes</th>
                                                                                                    <th>Super Plan</th>
                                                                                                    <th>Down Plan</th>
                                                                                                    <th>Possession Plan</th>
                                                                                                    <th>Status {" "}  <a
                                                                                                        title={isDataVisible ? "Hide Data" : "Show Data"}
                                                                                                        style={{ cursor: 'pointer' }}
                                                                                                        onClick={toggleDataVisibility}
                                                                                                    >
                                                                                                        {/* Change icon depending on whether the data is visible */}
                                                                                                        <i
                                                                                                            className={`fe ${isDataVisible ? 'fe-eye' : 'fe-eye-off'} me-3`}
                                                                                                            style={{ color: '#0077b6', marginLeft: '12px', marginTop: '-50px' }}
                                                                                                        />
                                                                                                    </a></th>


                                                                                                </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                                {Object.values(users).slice(0, 5000).map((user, index) => (
                                                                                                    <tr>

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
                                                                                                            {isDataVisible && (
                                                                                                                <>
                                                                                                                    BSP(Rs): {user.bspSP}
                                                                                                                    <br />
                                                                                                                    Size(Sq.yd): {user.size || 'N/A'}
                                                                                                                    <br />
                                                                                                                    Total Cost(Rs): {Number(user.bspSP) * Number(user.size)}
                                                                                                                    <br />

                                                                                                                </>
                                                                                                            )}
                                                                                                            Unit Cost(Rs): <span style={{ color: '#007bff' }}>{user.superPlan || 'N/A'}</span>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            {isDataVisible && (
                                                                                                                <>
                                                                                                                    BSP(Rs): {user.bspDLP || 'N/A'}
                                                                                                                    <br />
                                                                                                                    Size(Sq.yd): {user.size || 'N/A'}
                                                                                                                    <br />
                                                                                                                    Total Cost(Rs): {Number(user.bspDLP) * Number(user.size)}
                                                                                                                    <br />

                                                                                                                </>
                                                                                                            )}

                                                                                                            Unit Cost(Rs): <span style={{ color: '#007bff' }}>{user.dlp || 'N/A'}</span>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            {isDataVisible && (
                                                                                                                <>
                                                                                                                    BSP(Rs): {user.bspPLP || 'N/A'}
                                                                                                                    <br />
                                                                                                                    Size(Sq.yd): {user.size || 'N/A'}
                                                                                                                    <br />
                                                                                                                    Total Cost(Rs): {Number(user.bspPLP) * Number(user.size)}
                                                                                                                    <br />

                                                                                                                </>
                                                                                                            )}
                                                                                                            Unit Cost(Rs): <span style={{ color: '#007bff' }}>{user.plp || 'N/A'}</span>
                                                                                                        </td>
                                                                                                        <td style={{ marginLeft: '70px' }}>
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


                                                                                                            {user.status === 'Booked' && (
                                                                                                                <>
                                                                                                                    <strong>Plan Change History:</strong>{" "}
                                                                                                                    <a
                                                                                                                        onClick={() => handleOpenModal56(user.id)}
                                                                                                                        target="_blank"
                                                                                                                        title="View"
                                                                                                                        style={{ cursor: 'pointer' }}
                                                                                                                    >
                                                                                                                        <i className="fe fe-eye me-3" style={{ color: '#0077b6' }} />
                                                                                                                    </a>
                                                                                                                </>
                                                                                                            )}

                                                                                                            {/* <br />
                                                                                                        {user.status === 'Booked' && (
                                                                                                            <>
                                                                                                                <strong>Plan View:</strong>{" "}
                                                                                                                <a
                                                                                                                    onClick={() => handleOpenModal58(user.eoiApplicant[0]?.paymentPlan,user.id)}
                                                                                                                    target="_blank"
                                                                                                                    title="View"
                                                                                                                    style={{ cursor: 'pointer' }}
                                                                                                                >
                                                                                                                    <i className="fe fe-eye me-3" style={{ color: '#0077b6' }} />
                                                                                                                </a>
                                                                                                            </>
                                                                                                        )} */}
                                                                                                            {user.isHold && (
                                                                                                                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#e63946', marginLeft: '-5px', marginBottom: '-15px' }}>
                                                                                                                    Time: {timers[user.id] !== undefined ? formatTime(timers[user.id]) : 'expired'}
                                                                                                                </div>
                                                                                                            )}


                                                                                                            {!user.isHold && user.status !== 'Booked' && (
                                                                                                                <button
                                                                                                                    onClick={() => handleHoldClick(user.id, user.for)}
                                                                                                                    style={{
                                                                                                                        padding: '6px 10px',
                                                                                                                        background: 'black',
                                                                                                                        color: '#fff',
                                                                                                                        border: 'none',
                                                                                                                        borderRadius: '4px',
                                                                                                                        fontSize: '12px',
                                                                                                                        cursor: 'pointer',
                                                                                                                        transition: 'background-color 0.3s ease',
                                                                                                                        marginLeft: '20px',
                                                                                                                        marginTop: '10px'
                                                                                                                    }}
                                                                                                                >
                                                                                                                    Hold
                                                                                                                </button>
                                                                                                            )}
                                                                                                            {user.isHold && (
                                                                                                                <br />

                                                                                                            )}

                                                                                                            {user.status === 'Reserved' && (
                                                                                                                <button
                                                                                                                    onClick={() => getRelease(user.id)}
                                                                                                                    style={{
                                                                                                                        padding: '6px 10px',
                                                                                                                        background: 'black',
                                                                                                                        color: '#fff',
                                                                                                                        border: 'none',
                                                                                                                        borderRadius: '4px',
                                                                                                                        fontSize: '12px',
                                                                                                                        cursor: 'pointer',
                                                                                                                        transition: 'background-color 0.3s ease',
                                                                                                                        marginLeft: '15px',
                                                                                                                        marginTop: '10px'
                                                                                                                    }}
                                                                                                                >
                                                                                                                    Release
                                                                                                                </button>
                                                                                                            )}
                                                                                                            {user.isHold && (
                                                                                                                <br />

                                                                                                            )}

                                                                                                            {user.status === 'Available' && (
                                                                                                                <a
                                                                                                                    onClick={() => handleOpenModal2(user.id)}
                                                                                                                    style={{ marginLeft: '10px', cursor: 'pointer', title: 'Edit' }}
                                                                                                                >
                                                                                                                    <i className="fa fa-edit me-3" />
                                                                                                                </a>
                                                                                                            )}
                                                                                                            {user.status === 'Available' && (
                                                                                                                <a
                                                                                                                    onClick={() => handleOpenModals4(user.id)}
                                                                                                                    style={{ marginLeft: '-6px', cursor: 'pointer', title: 'Edit' }}
                                                                                                                >
                                                                                                                    <i className="fa fa-eye me-3" />
                                                                                                                </a>
                                                                                                            )}


                                                                                                            {user.isHold && (
                                                                                                                <br />

                                                                                                            )}


                                                                                                            {user.isHold && (
                                                                                                                user.showBookingButton ? (
                                                                                                                    <button
                                                                                                                        onClick={() => handleHoldClick(user.id)}
                                                                                                                        style={{
                                                                                                                            padding: '6px 10px',
                                                                                                                            background: getButtonColor(timers[user.id]),
                                                                                                                            color: getTextColor(timers[user.id]),
                                                                                                                            border: 'none',
                                                                                                                            borderRadius: '4px',
                                                                                                                            fontSize: '12px',
                                                                                                                            cursor: 'pointer',
                                                                                                                            transition: 'background-color 0.3s ease',
                                                                                                                            marginLeft: '20px',
                                                                                                                            marginBottom: '10px'
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        Re Hold
                                                                                                                    </button>
                                                                                                                ) : (
                                                                                                                    <span style={{ marginLeft: '10px', marginTop: '2px', color: 'red' }}>No Action</span>
                                                                                                                )
                                                                                                            )}




                                                                                                            <br />
                                                                                                            {user.isHold && (
                                                                                                                user.showBookingButton ? (
                                                                                                                    <button
                                                                                                                        onClick={async () => {
                                                                                                                            const success = await handleBookingAndOpenModal(user.projectId, user.id);
                                                                                                                            if (success) {
                                                                                                                                // Open the modal only if the API call was successful
                                                                                                                                handleOpenModal7(user.projectId, user.id, user.unitNo);
                                                                                                                            }
                                                                                                                        }}
                                                                                                                        style={{
                                                                                                                            padding: '6px 10px',
                                                                                                                            background: 'black',
                                                                                                                            color: '#fff',
                                                                                                                            border: 'none',
                                                                                                                            borderRadius: '4px',
                                                                                                                            fontSize: '12px',
                                                                                                                            cursor: 'pointer',
                                                                                                                            transition: 'background-color 0.3s ease',
                                                                                                                            marginLeft: '15px',
                                                                                                                            marginBottom: '20px',
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        Book Now
                                                                                                                    </button>
                                                                                                                ) : (
                                                                                                                    <span></span>
                                                                                                                )
                                                                                                            )}



                                                                                                            {user.status === 'Booked' && (
                                                                                                                <>
                                                                                                                    <button
                                                                                                                        onClick={() => getCancel(user.id)}
                                                                                                                        disabled={user.showBookingButton === false}
                                                                                                                        style={{
                                                                                                                            padding: '6px 10px',
                                                                                                                            backgroundColor: '#F44336',
                                                                                                                            color: '#fff',
                                                                                                                            border: 'none',
                                                                                                                            borderRadius: '4px',
                                                                                                                            fontSize: '12px',
                                                                                                                            cursor: user.showBookingButton === false ? 'not-allowed' : 'pointer',
                                                                                                                            transition: 'background-color 0.3s ease',
                                                                                                                            marginLeft: '15px',
                                                                                                                            marginBottom: '10px',
                                                                                                                            opacity: user.showBookingButton === false ? 0.6 : 1, // To visually indicate it's disabled
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        Cancel
                                                                                                                    </button>
                                                                                                                </>
                                                                                                            )}
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
                                                                                                                            marginLeft: '10px',
                                                                                                                            marginBottom: '10px',
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
                                                                                                                            marginLeft: '10px',
                                                                                                                            marginBottom: '20px',
                                                                                                                            opacity: user.showBookingButton === false ? 0.6 : 1, // To visually indicate it's disabled
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
                                                                                    )}
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
                    className={`modal ${isModalOpen58 ? 'show' : ''}`}
                    style={{
                        display: isModalOpen58 ? 'block' : 'none',
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
                                    onClick={handleCloseModal58}
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
                                                                        {isModalOpen59 === 'SP' && (
                                                                            <>
                                                                                <h4
                                                                                    className="mt-5 text-center mb-3"
                                                                                    style={{ color: "#2e3192" }}
                                                                                >
                                                                                    SUPER PAYMENT PLAN
                                                                                </h4>
                                                                                <table className="table table-bordered">
                                                                                    <thead>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>


                                                                                            <th className="tx-left" style={{ width: 300 }}>
                                                                                                Basic Price ₹{" "}
                                                                                                <input

                                                                                                    type="text"
                                                                                                    className="form-control"
                                                                                                    style={{ width: 90, height: 25, display: "inline" }}
                                                                                                    name="bspSP"
                                                                                                    value={inventorys.bspSP}
                                                                                                    onChange={handleInputInvetory}
                                                                                                    disabled


                                                                                                />
                                                                                                {" "} per {" "} SQ YD

                                                                                            </th>

                                                                                            <th className="tx-left" />
                                                                                            <th className="tx-left">
                                                                                                Installment Amount for
                                                                                                <input
                                                                                                    type="text"
                                                                                                    className="form-control"
                                                                                                    style={{ width: 80, height: 25, display: "inline" }}
                                                                                                    value={inventorys.size}
                                                                                                    disabled={disableInput2}

                                                                                                /> <span style={{ fontSize: '9px' }}>SQ YD</span>

                                                                                            </th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">1</td>
                                                                                            <td className="tx-left">On Booking</td>
                                                                                            <td className="tx-left">
                                                                                                30%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss7}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">2</td>
                                                                                            <td className="tx-left">
                                                                                                Within 60 Days-
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                50%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss8}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>


                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">3</td>
                                                                                            <td className="tx-left">
                                                                                                on Registry
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                20%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss9}
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
                                                                                                    value={totalss10}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </>
                                                                        )}

                                                                        {isModalOpen59 === 'PLP' && (
                                                                            <>
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

                                                                                            </th>
                                                                                            <th className="tx-left" style={{ width: 330 }}>
                                                                                                Basic Price ₹{" "}
                                                                                                <input
                                                                                                    type="text"
                                                                                                    className="form-control"
                                                                                                    style={{ width: 90, height: 25, display: "inline" }}
                                                                                                    name="bspPLP"

                                                                                                    value={inventorys.bspPLP}
                                                                                                    onChange={handleInputInvetory}
                                                                                                    disabled

                                                                                                />
                                                                                                {" "} per {" "} SQ YD

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
                                                                                                    value={inventorys.size}
                                                                                                    disabled={disableInput2}
                                                                                                />  <span style={{ fontSize: '9px' }}>SQ YD</span>

                                                                                            </th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">1</td>
                                                                                            <td className="tx-left">On Booking</td>
                                                                                            <td className="tx-left">
                                                                                                10%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">2</td>
                                                                                            <td className="tx-left"> Within 15 Days-</td>
                                                                                            <td className="tx-left">
                                                                                                10%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">3</td>
                                                                                            <td className="tx-left"> Within 45 Days</td>
                                                                                            <td className="tx-left">
                                                                                                10%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">4</td>
                                                                                            <td className="tx-left"> Within 90 Days</td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">5</td>
                                                                                            <td className="tx-left"> Within 135 Days</td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">6</td>
                                                                                            <td className="tx-left"> Within 180 Days</td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">7</td>
                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                Within 225 Days
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">8</td>
                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                Within 270 Days
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">9</td>
                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                Within 315 Days
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>


                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">10</td>
                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                Within 360 Days
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">11</td>
                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                Within 405 Days
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>


                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">12</td>
                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                Within 450 Days
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>



                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">13</td>
                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                Within 495 Days
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>


                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">14</td>
                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                Within 540 Days
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>


                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">15</td>
                                                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                                Within 585 Days
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss1}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">16</td>
                                                                                            <td className="tx-left">On Registry</td>
                                                                                            <td className="tx-left">
                                                                                                10%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss}
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
                                                                                                    value={totalss2}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </>
                                                                        )}
                                                                        {isModalOpen59 === 'DLP' && (
                                                                            <>
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
                                                                                                        checked={formData8.type === 'DLP'}

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
                                                                                                    name="bspDLP"
                                                                                                    value={inventorys.bspDLP}
                                                                                                    onChange={handleInputInvetory}

                                                                                                />
                                                                                                {" "} per {" "} SQ YD


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
                                                                                                    value={inventorys.size}
                                                                                                    disabled={disableInput2}
                                                                                                /> <span style={{ fontSize: '9px' }}>SQ YD</span>

                                                                                            </th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">1</td>
                                                                                            <td className="tx-left">On Booking</td>
                                                                                            <td className="tx-left">
                                                                                                15%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    name="onBookingDLP"
                                                                                                    value={totalss3}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">2</td>
                                                                                            <td className="tx-left">Within 15 Days-</td>
                                                                                            <td className="tx-left">
                                                                                                10%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss4}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>



                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">3</td>
                                                                                            <td className="tx-left">Within 45 Days-</td>
                                                                                            <td className="tx-left">
                                                                                                10%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss4}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">4</td>
                                                                                            <td className="tx-left">Within 90 Days-</td>
                                                                                            <td className="tx-left">
                                                                                                10%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss4}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>


                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">5</td>
                                                                                            <td className="tx-left">Within 135 Days-</td>
                                                                                            <td className="tx-left">
                                                                                                10%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss4}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>


                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">6</td>
                                                                                            <td className="tx-left">Within 180 Days-</td>
                                                                                            <td className="tx-left">
                                                                                                10%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss4}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">7</td>
                                                                                            <td className="tx-left">Within 225 Days-</td>
                                                                                            <td className="tx-left">
                                                                                                10%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss4}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>


                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">8</td>
                                                                                            <td className="tx-left">Within 270 Days-</td>
                                                                                            <td className="tx-left">
                                                                                                10%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss4}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">9</td>
                                                                                            <td className="tx-left">Within 315 Days-</td>
                                                                                            <td className="tx-left">
                                                                                                10%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss4}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                                                            <td className="tx-left">10</td>
                                                                                            <td className="tx-left">On Registry</td>
                                                                                            <td className="tx-left">
                                                                                                5%
                                                                                            </td>
                                                                                            <td className="tx-left">
                                                                                                <input type="text" className="form-control"
                                                                                                    style={{ height: 25 }}
                                                                                                    value={totalss5}
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
                                                                                                    value={totalss6}
                                                                                                    disabled={disableInput2} />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>

                                                                            </>
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
                                        {/* End Main Content*/}
                                    </div>
                                </form>
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
                        style={{ maxWidth: '25%', margin: 'auto' }}
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

                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Allocated Date: {formattedDate}
                                                    </label>
                                                </div>

                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Allocated By Name: {views.allocatedByName}
                                                    </label>
                                                </div>

                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Payement Plan: {views.paymentPlan}
                                                    </label>
                                                </div>

                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Total Cost: {views.totalCost}
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
                    className={`modal fade ${isModalOpen56 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{
                        display: isModalOpen56 ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflow: 'hidden',
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered modal-xl"
                        style={{ maxWidth: '40%', margin: 'auto' }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <div
                                className="modal-header"
                                style={{
                                    backgroundColor: '#f1f1f1',
                                    borderBottom: '1px solid #dee2e6',
                                    borderRadius: '10px 10px 0 0',
                                    padding: '15px 20px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontFamily: "'Rabbit', sans-serif"
                                }}
                            >
                                <h5 className="modal-title" style={{ margin: 0 }}>
                                    Plan Change History
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal56}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div
                                className="modal-body"
                                style={{ padding: '20px', maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}
                            >
                                <div
                                    style={{
                                        maxHeight: '400px',
                                        overflowY: 'scroll',
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: '#888 #f1f1f1'
                                    }}
                                >
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th style={{ whiteSpace: 'nowrap' }}>Plan Type</th>
                                                <th style={{ whiteSpace: 'nowrap' }}>BSP</th>
                                                <th style={{ whiteSpace: 'nowrap' }}>Changed By Name</th>
                                                <th style={{ whiteSpace: 'nowrap' }}>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users2.map((user) => {
                                                const formattedDate = new Date(user.createdAt).toLocaleDateString('en-GB', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric'
                                                });

                                                return (
                                                    <tr key={user.id}>
                                                        <td>{user.column}</td>
                                                        <td>{user.changeValue}</td>
                                                        <td>{user.changedByName}</td>
                                                        <td>{formattedDate}</td>
                                                    </tr>
                                                );
                                            })}

                                        </tbody>
                                    </table>
                                </div>
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
                                <h5 className="modal-title">Payment plan Unit of ({unitNo})</h5>
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
                                                    <strong> Recived: </strong> {employee3 && employee3.paymentLedger && `${employee3.paymentLedger.amount}`}
                                                    <br />
                                                    <strong> Membership: </strong> {employee3 && employee3.projectsubscription && `${employee3.projectsubscription.eoiCode}`} - {employee3 && employee3.project && `${employee3.project.projectName}`}



                                                    <div className="row row-sm mt-5 justify-content-around">
                                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                                            <div className="card custom-card">

                                                                <div className="card-body">
                                                                    <div className="table-responsive">



                                                                        <table className="table table-invoice table-borderless">
                                                                            <tbody>
                                                                                <tr>

                                                                                    <td width="45%" style={{ textAlign: 'center' }}>
                                                                                        <h4 style={{
                                                                                            whiteSpace: "nowrap",
                                                                                            margin: '0 auto' // Center the heading within the td
                                                                                        }}>
                                                                                            PREMIUM SHOW VILLAS
                                                                                        </h4>
                                                                                    </td>



                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <h4
                                                                            className="mt-5 text-center mb-3"
                                                                            style={{ color: "#2e3192" }}
                                                                        >
                                                                            SUPER PAYMENT PLAN
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
                                                                                                checked={formData8.type === 'SP'}

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
                                                                                            name="bspSP"
                                                                                            value={inventorys.bspSP}
                                                                                            onChange={handleInputInvetory}


                                                                                        />
                                                                                        {" "} per {" "} SQ YD

                                                                                    </th>

                                                                                    <th className="tx-left" />
                                                                                    <th className="tx-left">
                                                                                        Installment Amount for
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            style={{ width: 80, height: 25, display: "inline" }}
                                                                                            value={inventorys.size}
                                                                                            disabled={disableInput2}

                                                                                        /> <span style={{ fontSize: '9px' }}>SQ YD</span>

                                                                                    </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">1</td>
                                                                                    <td className="tx-left">On Booking</td>
                                                                                    <td className="tx-left">
                                                                                        30%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss7}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">2</td>
                                                                                    <td className="tx-left">
                                                                                        Within 60 Days-
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        50%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss8}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>


                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">3</td>
                                                                                    <td className="tx-left">
                                                                                        on Registry
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        20%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss9}
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
                                                                                            value={totalss10}
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
                                                                                            name="bspPLP"

                                                                                            value={inventorys.bspPLP}
                                                                                            onChange={handleInputInvetory}

                                                                                        />
                                                                                        {" "} per {" "} SQ YD

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
                                                                                            value={inventorys.size}
                                                                                            disabled={disableInput2}
                                                                                        />  <span style={{ fontSize: '9px' }}>SQ YD</span>

                                                                                    </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">1</td>
                                                                                    <td className="tx-left">On Booking</td>
                                                                                    <td className="tx-left">
                                                                                        10%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">2</td>
                                                                                    <td className="tx-left"> Within 15 Days-</td>
                                                                                    <td className="tx-left">
                                                                                        10%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">3</td>
                                                                                    <td className="tx-left"> Within 45 Days</td>
                                                                                    <td className="tx-left">
                                                                                        10%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">4</td>
                                                                                    <td className="tx-left"> Within 90 Days</td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">5</td>
                                                                                    <td className="tx-left"> Within 135 Days</td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">6</td>
                                                                                    <td className="tx-left"> Within 180 Days</td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">7</td>
                                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                        Within 225 Days
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">8</td>
                                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                        Within 270 Days
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">9</td>
                                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                        Within 315 Days
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>


                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">10</td>
                                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                        Within 360 Days
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">11</td>
                                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                        Within 405 Days
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>


                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">12</td>
                                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                        Within 450 Days
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>



                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">13</td>
                                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                        Within 495 Days
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>


                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">14</td>
                                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                        Within 540 Days
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>


                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">15</td>
                                                                                    <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                                        Within 585 Days
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss1}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">16</td>
                                                                                    <td className="tx-left">On Registry</td>
                                                                                    <td className="tx-left">
                                                                                        10%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss}
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
                                                                                            value={totalss2}
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
                                                                                                checked={formData8.type === 'DLP'}

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
                                                                                            name="bspDLP"
                                                                                            value={inventorys.bspDLP}
                                                                                            onChange={handleInputInvetory}

                                                                                        />
                                                                                        {" "} per {" "} SQ YD


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
                                                                                            value={inventorys.size}
                                                                                            disabled={disableInput2}
                                                                                        /> <span style={{ fontSize: '9px' }}>SQ YD</span>

                                                                                    </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">1</td>
                                                                                    <td className="tx-left">On Booking</td>
                                                                                    <td className="tx-left">
                                                                                        15%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            name="onBookingDLP"
                                                                                            value={totalss3}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">2</td>
                                                                                    <td className="tx-left">Within 15 Days-</td>
                                                                                    <td className="tx-left">
                                                                                        10%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss4}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>



                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">3</td>
                                                                                    <td className="tx-left">Within 45 Days-</td>
                                                                                    <td className="tx-left">
                                                                                        10%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss4}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">4</td>
                                                                                    <td className="tx-left">Within 90 Days-</td>
                                                                                    <td className="tx-left">
                                                                                        10%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss4}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>


                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">5</td>
                                                                                    <td className="tx-left">Within 135 Days-</td>
                                                                                    <td className="tx-left">
                                                                                        10%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss4}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>


                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">6</td>
                                                                                    <td className="tx-left">Within 180 Days-</td>
                                                                                    <td className="tx-left">
                                                                                        10%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss4}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">7</td>
                                                                                    <td className="tx-left">Within 225 Days-</td>
                                                                                    <td className="tx-left">
                                                                                        10%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss4}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>


                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">8</td>
                                                                                    <td className="tx-left">Within 270 Days-</td>
                                                                                    <td className="tx-left">
                                                                                        10%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss4}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">9</td>
                                                                                    <td className="tx-left">Within 315 Days-</td>
                                                                                    <td className="tx-left">
                                                                                        10%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss4}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                                    <td className="tx-left">10</td>
                                                                                    <td className="tx-left">On Registry</td>
                                                                                    <td className="tx-left">
                                                                                        5%
                                                                                    </td>
                                                                                    <td className="tx-left">
                                                                                        <input type="text" className="form-control"
                                                                                            style={{ height: 25 }}
                                                                                            value={totalss5}
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
                                                                                            value={totalss6}
                                                                                            disabled={disableInput2} />
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>

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
                    className={`modal fade ${isModalOpen10 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{ display: isModalOpen10 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '60%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">
                                    {/* UNIT: ({unitNo}) ::: ({empid4}) ::: Selected {plansType} Unit */}
                                    UNIT: ({unitNo}) ::: ({firstName} {middleName} {lastName})

                                </h5>

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


                                    <div className="row row-sm" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        {/* Left Section */}
                                        <div className="col-sm-6">
                                            Recived: {employee3 && employee3.paymentLedger && `${employee3.paymentLedger.amount}`}
                                            <br />
                                            Membership: {employee3 && employee3.projectsubscription && `${employee3.projectsubscription.eoiCode}`} - {employee3 && employee3.project && `${employee3.project.projectName}`}

                                            <br />
                                            Discount: {finalValues}
                                            <br />
                                            Total Pay:{" "}
                                            {originalValue > 0 && (
                                                <span>
                                                    {originalValue.toLocaleString()} <br />
                                                    After Discount: Rs. <span style={{ color: 'green' }}>{finalValue.toLocaleString()}</span>
                                                </span>
                                            )}
                                        </div>

                                        {/* Right Section */}
                                        <div className="col-sm-6" style={{ fontSize: '14px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
                                                <label style={{ marginRight: '5px' }}>
                                                    <input
                                                        type="checkbox"
                                                        name="option5"
                                                        onChange={handleCheckboxChange}
                                                    /> Other Discount
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="number"
                                                    value={manualDiscountValue}
                                                    onChange={handleInputChangesss}
                                                    style={{
                                                        width: '150px',
                                                        fontSize: '12px',
                                                        padding: '1px 2px',
                                                        lineHeight: '1',
                                                        borderRadius: '4px',
                                                        height: '20px',
                                                        marginTop: '-4px'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <br />
                                    {/* Section moved below */}
                                    <div className="row row-sm">
                                        <div className="col-sm-6 form-group">
                                            <label className="form-label">Amount: <span className="tx-danger">*</span></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="amount"
                                                value={formData10.amount}
                                                onChange={handleInputChange10}
                                            />
                                        </div>

                                        <div className="col-sm-6">
                                            <label className="form-label">Collection Mode: <span className="tx-danger">*</span></label>
                                            <select className="form-control select2"
                                                name="collectionMode"
                                                value={formData10.collectionMode}
                                                onChange={handleInputChange10}>
                                                <option value=''>Select</option>
                                                <option value="Discount">Discount</option>
                                                <option value="Online">Online</option>
                                                <option value="Cheque">Cheque</option>
                                            </select>
                                        </div>

                                        {formData10.collectionMode === 'Cheque' && (
                                            <>
                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">Cheque Date</label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        name="chequeDate"
                                                        value={formData10.chequeDate}
                                                        onChange={handleInputChange10}
                                                    />
                                                </div>
                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">Cheque No</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
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
                                                        <option value=''>Select</option>
                                                        {project.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Bank Cheque</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="deposteToAmrs"
                                                        value={formData10.deposteToAmrs}
                                                        onChange={handleInputChange10}
                                                    />
                                                </div>
                                            </>
                                        )}


                                        {formData10.collectionMode === 'Online' && (
                                            <>

                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">AMRS Account</label>
                                                    <select className="form-control select2"
                                                        name="amrsAccount"
                                                        value={formData10.amrsAccount}
                                                        onChange={handleInputChange10}
                                                    >
                                                        <option value=''>Select</option>
                                                        {project.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Transaction No</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="transactionNo"
                                                        value={formData10.transactionNo}
                                                        onChange={handleInputChange10}
                                                    />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Payment Method</label>

                                                    <select className="form-control select2"
                                                        name="remark"
                                                        value={formData10.remark}
                                                        onChange={handleInputChange10}
                                                    >
                                                        <option value=''>Select</option>
                                                        <option>IMPS</option>
                                                        <option>NEFT</option>
                                                        <option>RTGS</option>
                                                    </select>

                                                </div>
                                            </>
                                        )}

                                        <div className="col-sm-6 form-group">
                                            <label className="form-label">Payment Credit Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="paymentCredit"
                                                value={formData10.paymentCredit}
                                                onChange={handleInputChange10}
                                            />
                                        </div>





                                        <div className="col-sm-6">
                                            <label className="form-label">Upload Receipt</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                name="uploadRecipt"
                                                accept="/pdf"
                                                onChange={handleFileChange15}
                                            />
                                        </div>
                                    </div>



                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>

                                <button
                                    className="btn ripple btn-primary"
                                    type="button"
                                    style={{
                                        borderRadius: '5px',
                                        padding: '8px 20px',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        cursor: loadings ? 'not-allowed' : 'pointer', // Disable cursor if loading
                                        opacity: loadings ? 0.7 : 1 // Change opacity if loading
                                    }}
                                    onClick={handleSubmit2}
                                    disabled={loadings} // Disable button if loading
                                >
                                    {loadings ? 'Loading...' : 'Submit'} {/* Change button text based on loading state */}
                                </button>

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
                                        {/* <div className="col-sm-3 form-group">
                                            <label className="form-label">Unit No</label>
                                            <input type="text" className="form-control"
                                                name="unitNo"
                                                value={formDatas.unitNo}
                                                onChange={handleInputChanges}

                                            />
                                        </div> */}
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
                                    maxHeight: '400px',  // Set height limit for modal body
                                    overflowY: 'auto',   // Enable vertical scrollbar when content overflows
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

export default EoiInventoryListss







