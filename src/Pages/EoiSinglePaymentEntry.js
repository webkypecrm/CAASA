import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const EoiSinglePaymentEntry = () => {

    const { empid } = useParams();
    const navigate = useNavigate();

    const initialFormData = {
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


    const initialFormData10 = {
        amount: '',
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

    const initialFormData11 = {
        reason: '',

    };


    const [formData, setFormData] = useState(initialFormData);
    const [formData11, setFormData11] = useState(initialFormData11);
    const [formData10, setFormData10] = useState(initialFormData10);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [isModalOpen10, setIsModalOpen10] = useState(false);
    const [isModalOpen11, setIsModalOpen11] = useState(false);
    const [project, setProject] = useState([]);
    const [users, setUsers] = useState([]);
    const [userss, setUserss] = useState([]);
    const [employee, setEmployee] = useState({})
    const [employee3, setEmployee3] = useState({})
    const [employee4, setEmployee4] = useState({})

    const [pdfView, setPdfView] = useState([])
    const [pdfViews, setPdfViews] = useState({})
    const [disableInput2, setDisableInput2] = useState(true);
    const [holdStatus, setHoldStatus] = useState({});
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [holdActionId, setHoldActionId] = useState(null);
    const [holdActionIds, setHoldActionIds] = useState('');
    const [paidAmount, setPaidAmount] = useState(0);
    const [employee2, setEmployee2] = useState({})
    const [users2, setUsers2] = useState([]);
    const [users3, setUsers3] = useState([]);
    const [users4, setUsers4] = useState([]);
    const [reportingBossA, setReportingBossA] = useState([])
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
    const [ins, setIns] = useState('');
    const [isModalOpen16, setIsModalOpen16] = useState(false);
    const [gift, setGift] = useState([])
    const [isModalOpen56, setIsModalOpen56] = useState(false);

    const [isModalOpen57, setIsModalOpen57] = useState('');

    const [isModalOpen58, setIsModalOpen58] = useState(false);

    const [isModalOpen59, setIsModalOpen59] = useState('');

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
    const [loadings, setLoadings] = useState(false);
    const [loadingss, setLoadingss] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [idsss, setIdsss] = useState('');
    const [idssss, setIdssss] = useState('');
    const [isModalOpens4, setIsModalOpens4] = useState(false);
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const handleOpenModal56 = async (id) => {
        setIsModalOpen57(id);
        setIsModalOpen56(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal56 = () => {
        setIsModalOpen56(false);
        document.body.classList.remove('modal-open');
    };


    useEffect(() => {
        if (isModalOpen56) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen56]);









    const handleOpenModal58 = async (id) => {
        setIsModalOpen59(id);
        setIsModalOpen58(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal58 = () => {
        setIsModalOpen58(false);
        document.body.classList.remove('modal-open');
    };


    useEffect(() => {
        if (isModalOpen58) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen58]);



    // dlp

    useEffect(() => {
        const areaValue = parseFloat(employee4.inventory?.size);
        const priceValue = parseFloat(employee4.inventory?.bspDLP);
        const priceValues = parseFloat(employee4.inventory?.edcIdcValue);
        const priceValuess = parseFloat(employee4.inventory?.plcValue);

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
    }, [employee4.inventory?.size, employee4.inventory?.bspDLP, employee4.inventory?.plcValue, employee4.inventory?.edcIdcValue]);


    useEffect(() => {
        const areaValue = parseFloat(employee4.inventory?.size);
        const priceValue = parseFloat(employee4.inventory?.bspDLP);
        const priceValues = parseFloat(employee4.inventory?.edcIdcValue);
        const priceValuess = parseFloat(employee4.inventory?.plcValue);

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
    }, [employee4.inventory?.size, employee4.inventory?.bspDLP, employee4.inventory?.plcValue, employee4.inventory?.edcIdcValue]);


    useEffect(() => {
        const areaValue = parseFloat(employee4.inventory?.size);
        const priceValue = parseFloat(employee4.inventory?.bspDLP);
        const priceValues = parseFloat(employee4.inventory?.edcIdcValue);
        const priceValuess = parseFloat(employee4.inventory?.plcValue);

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
    }, [employee4.inventory?.size, employee4.inventory?.bspDLP, employee4.inventory?.plcValue, employee4.inventory?.edcIdcValue]);



    useEffect(() => {
        const areaValue = parseFloat(employee4.inventory?.size);
        const priceValue = parseFloat(employee4.inventory?.bspDLP);
        const priceValues = parseFloat(employee4.inventory?.edcIdcValue);
        const priceValuess = parseFloat(employee4.inventory?.plcValue);

        // Check if both areaValue and priceValue are valid numbers
        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            // Calculate 100% of the total value

            const totalValue = (areaValue * priceValue + priceValues) + (areaValue * priceValue * priceValuess);


            setTotalss6(totalValue);


        }
    }, [employee4.inventory?.size, employee4.inventory?.bspDLP, employee4.inventory?.plcValue, employee4.inventory?.edcIdcValue]);



    // fpp plan
    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.onBookingPerFPP);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.onBookingPerFPP]);

    useEffect(() => {
        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(total1);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            const totalValue = (areaValue - priceValue) / 24;
            let formattedTotalValue = totalValue.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }
            setIns(formattedTotalValue);
            console.log('Total (divided by 24 months):', formattedTotalValue);
        } else {
            setIns(null);
        }
    }, [employee4.totalCost, total1]);

    //DLP plan

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.onBookingPerDLP);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.onBookingPerDLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.withIn30PerDLP);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.withIn30PerDLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.restOnRegistryPerDLP);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.restOnRegistryPerDLP]);

    //PLP Plan

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.onBookingPerPLP);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.onBookingPerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.withIn60PerPLP);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.withIn60PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.withIn90PerPLP);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.withIn90PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.withIn120PerPLP);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.withIn120PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.withIn150PerPLP);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.withIn150PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.withIn180PerPLP);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.withIn180PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.extraPerPLP1);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.extraPerPLP1]);

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.extraPerPLP2);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.extraPerPLP2]);

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.extraPerPLP3);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.extraPerPLP3]);

    useEffect(() => {

        const areaValue = parseFloat(employee4.totalCost);
        const priceValue = parseFloat(employee4 && employee4.plan && employee4.plan.restOnRegistryPerPLP);

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
    }, [employee4.totalCost, employee4 && employee4.plan && employee4.plan.restOnRegistryPerPLP]);


    const handleOpenModal16 = () => {
        setIsModalOpen16(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal16 = () => {
        setIsModalOpen16(false);
        document.body.classList.remove('modal-open');
    };

    useEffect(() => {
        if (isModalOpen16) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen16]);

    const handleOpenModal3 = () => {
        setIsModalOpen3(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal3 = () => {
        setIsModalOpen3(false);

        setLoadings(false);
        setFormData(initialFormData);
    };


    const handleOpenModal10 = (id) => {
        setIdsss(id);
        setIsModalOpen10(true);
        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
    };

    const handleCloseModal10 = () => {
        setIsModalOpen10(false);
        document.body.style.overflow = '';
        setLoadingss(false);
        setFormData(initialFormData);
    };


    const handleOpenModal11 = (id) => {
        setIdssss(id);
        setIsModalOpen11(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal11 = () => {
        setIsModalOpen11(false);
    };


    useEffect(() => {
        if (isModalOpen11) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen11]);



    const handleOpenModal4 = (id) => {
        setHoldActionId(id);
        setIsModalOpen4(true);
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        setHoldActionId(null);
    };


    const handleOpenModals4 = (id) => {
        setHoldActionIds(id);
        setIsModalOpens4(true);
    };

    const handleCloseModals4 = () => {
        setIsModalOpens4(false);
        setHoldActionIds(null);
    };

    const handleInputChange10 = (event) => {
        const { name, value } = event.target;
        setFormData10({
            ...formData10,
            [name]: value,
        });
    }


    const handleInputChange11 = (event) => {
        const { name, value } = event.target;
        setFormData11({
            ...formData11,
            [name]: value,
        });
    }


    const handleFileChange10 = (e) => {
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


    const fetchUser = async () => {

        try {
            const url = `${apiUrl}/payment/getSinglePayment?paymentId=${idsss}`;
            let result = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                    'Content-Type': 'application/json',
                },
            });

            result = await result.json();
            const { data } = result;

            setFormData10((prevFormData) => ({
                ...prevFormData,

                amount: data?.amount,
                collectionMode: data?.collectionMode,
                enterDiscount: data?.enterDiscount,
                paymentCredit: data?.paymentCredit,
                handOverBy: data?.handOverBy,
                collectedBy: data?.collectedBy,
                uploadRecipt: data?.uploadRecipt,
                select: data?.select,
                amrsAccount: data?.amrsAccount,
                transactionNo: data?.transactionNo,
                chequeDate: data?.chequeDate,
                chequeNo: data?.chequeNo,
                bankCheque: data?.bankCheque,
                deposteToAmrs: data?.deposteToAmrs,
                remark: data?.remark,

            }));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {


        fetchUser();
    }, [idsss]);


    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoadingss(true);

        try {
            const formDataToSend = new FormData();

            // Append non-null form data fields
            for (const key in formData10) {
                if (formData10[key] !== null) {
                    formDataToSend.append(key, formData10[key]);
                }
            }

            const response = await fetch(`${apiUrl}/payment/updatePayment?paymentId=${idsss}`, {
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

            toast.success(response2.message);
            handleCloseModal10();
            fetchDataFromApi();
            setFormData10(initialFormData10);
            fetchPaymentHistory();
            fetchUser();
            navigate(`/eoi-single-payment-entry/${empid}`);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoadingss(false);
        }
    };



    async function getEmppps() {
        const url = `${apiUrl}/eoi/getApplicantInfo/${empid}`;
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



    const getPdfView = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/eoi/demandLetters?applicantId=${empid}&scheduleId=${isModalOpen57}`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {
                setPdfView(data.data);
            } else {
                console.error('API response error:', data.message || 'Invalid companyList');
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {

        getPdfView();
    }, [isModalOpen57, empid]);




    const getPdfViews = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/payment/getSinglePayment?paymentId=${isModalOpen59}`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();

            if (data.status === 'success') {
                setPdfViews(data.data);
            } else {
                console.error('API response error:', data.message || 'Invalid companyList');
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {

        getPdfViews();
    }, [isModalOpen59]);



    useEffect(() => {
        getEmppps();
    }, []);


    useEffect(() => {
        async function getEmpppss() {

            const url = `${apiUrl}/eoi/getApplicantInfo/${empid}`;
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            })
            response = await response.json();

            if (response.status === "success") {
                setEmployee2(response.data?.plan?.id);
            }
        }
        getEmpppss();
    }, [])

    // bank api  
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
        async function getEmp() {

            const Token = localStorage.getItem("Token");
            let response = await fetch(`${apiUrl}/employee/employee`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            })
            response = await response.json();

            if (response.status === "success") {
                setEmployee(response.data);
            }
        }
        getEmp();
    }, [])

    const handleInputChange2 = (e) => {
        if (!disableInput2) {
            setFormData({ ...formData, basicPriceFPP: e.target.value });
        }
    };


    const handleFileChange15 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const applicantImageFile = files[0];

            if (applicantImageFile.type.startsWith('image/')) {


                setFormData((prevData) => ({
                    ...prevData,
                    uploadRecipt: applicantImageFile,
                }));
            } else if (applicantImageFile.type === 'application/pdf') {
                // Handle PDF files
                setFormData((prevData) => ({
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


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoadings(true);
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/payment/addPaymentEoi?applicantId=${empid}`, {
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

            // Successful submission
            handleCloseModal3(); // Close the modal
            fetchDataFromApi(); // Fetch updated data
            getEmppps(); // Get additional data

            setFormData(initialFormData); // Reset form data
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoadings(false);
        }
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

    //hold or unhold status
    useEffect(() => {
        const holdStatusFromStorage = localStorage.getItem('holdStatus');
        if (holdStatusFromStorage) {
            const holdStatus = JSON.parse(holdStatusFromStorage);
            setHoldStatus(holdStatus);
        }
    }, []);

    const toggleHoldStatus = (id) => {
        const newHoldStatus = { ...holdStatus };
        newHoldStatus[id] = !newHoldStatus[id];
        setHoldStatus(newHoldStatus);
        localStorage.setItem('holdStatus', JSON.stringify(newHoldStatus));
    };

    useEffect(() => {
        // Prevent scrolling when modal is open
        if (isModalOpen3) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen3]);


    useEffect(() => {
        // Prevent scrolling when modal is open
        if (isModalOpen4) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen4]);

    const fetchDataFromApis = (id) => {
        const isUnhold = !holdStatus[id];
        const url = `${apiUrl}/payment/modifyPaymentLedger?paymentId=${id}&isUnhold=${isUnhold}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Token}`,
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setEmployee3(data.data);
                    toggleHoldStatus(id);
                    const button = document.getElementById(`unholdButton_${id}`);
                    if (button) {
                        button.textContent = isUnhold ? 'Hold' : 'Unhold';
                        button.classList.toggle('btn-primary', !isUnhold);
                        button.classList.toggle('btn-success', isUnhold);
                    }
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const formatTime2 = (timeString) => {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);

        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        return date.toLocaleTimeString('en-IN', options);
    };

    const fetchDataFromApisss = () => {
        fetch(`${apiUrl}/eoi/getUpcomingPayment?applicantId=${empid}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    setPaidAmount(data.paidAmount);
                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            date: item.date ? formatDateTime(item.date) : null,
                            time: item.time ? formatTime2(item.time) : null,
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
        fetchDataFromApisss()
    }, []);


    const handleOkButtonClick = () => {
        if (holdActionId !== null) {
            fetchDataFromApis(holdActionId);
            handleCloseModal4();
        }
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const formatDateTimes = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };
    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    const formatDateTime2 = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    // liST Payment
    const fetchDataFromApi = () => {
        fetch(`${apiUrl}/payment/getPaymentEoi?applicantId=${empid}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    setPaidAmount(data.paidAmount);
                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            formattedDate: item.chequeDate ? formatDateTime(item.chequeDate) : null,
                            formattedDates: item.createdAt ? formatDateTimes(item.createdAt) : null,
                            formattedDate2: item.paymentCredit ? formatDateTime2(item.paymentCredit) : null,
                            bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
                            accountNumber: item.amrsAccount ? item.amrsAccount.accountNumber : null,
                            bankName: item.amrsAccount ? item.amrsAccount.bankName : null,

                        }));

                        setUsers(formattedData);
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
        fetchDataFromApi()
    }, []);



    //  Payment History
    const fetchPaymentHistory = () => {
        fetch(`${apiUrl}/payment/getPaymentUpdateHistory?paymentId=${idssss}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    setPaidAmount(data.paidAmount);
                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            formattedDate: item.chequeDate ? formatDateTime(item.chequeDate) : null,
                            formattedDates: item.createdAt ? formatDateTimes(item.createdAt) : null,
                            formattedDate2: item.paymentCredit ? formatDateTime2(item.paymentCredit) : null,
                            bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
                            accountNumber: item.amrsAccount ? item.amrsAccount.accountNumber : null,
                            bankName: item.amrsAccount ? item.amrsAccount.bankName : null,

                        }));

                        setUserss(formattedData);
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
        fetchPaymentHistory()
    }, [idssss]);




    async function deleteLead() {
        const url = `${apiUrl}/eoi/deletePaymentLedger?paymentId=${holdActionIds}&reason=${formData11.reason}`;

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
            getEmppps();
            handleCloseModals4();
        }
        else {
            toast.error(response.message);
        }
    }

    // liST SchemePyament
    const fetchSchemePyament = () => {
        fetch(`${apiUrl}/eoi/getSchemePayment?applicantId=${empid}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    setPaidAmount(data.paidAmount);
                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            formattedDate: item.chequeDate ? formatDateTime(item.chequeDate) : null,
                            formattedDates: item.createdAt ? formatDateTimes(item.createdAt) : null,
                            formattedDate2: item.paymentCredit ? formatDateTime2(item.paymentCredit) : null,
                            bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
                            accountNumber: item.amrsAccount ? item.amrsAccount.accountNumber : null,
                        }));

                        setUsers3(formattedData);
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
        fetchSchemePyament()
    }, []);


    const fetchSchemePyaments = () => {
        fetch(`${apiUrl}/eoi/eoiPaymentSchedule?applicantId=${empid}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    setPaidAmount(data.paidAmount);
                    if (Array.isArray(data.data)) {


                        setUsers4(data.data);
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
        fetchSchemePyaments()
    }, []);


    return (
        <>
            <div className="page">
                <TopHeader />
                <Prince />

                <div className="main-content  pt-0" >
                    <div className="main-container container-fluid">
                        <div className="page-header">
                            {/* Page Header */}
                            <div className="page-header" style={{ marginTop: '-2px' }}>
                                <div className="row row-sm" style={{ marginLeft: '-15px' }}>
                                    <div className="col-sm-12 col-md-3" >
                                        <div className="card custom-card">
                                            <div className="card-body" style={{ width: '1320px' }} >
                                                <div>
                                                    <h6>CID:{employee4.ticketId}</h6>
                                                    <h6 style={{ whiteSpace: 'nowrap' }}>
                                                        <span className="fs-20 me-12" style={{ marginBottom: '8px' }}>{employee4.applicantFirstName} {employee4.applicantLastName}</span>{" "}
                                                        <span className="badge bg-success">Customer</span>
                                                    </h6>

                                                    <span className="text-muted" style={{ display: 'inline-block' }}>
                                                        Phone: {employee4.applicantMobile}
                                                    </span>
                                                    <span style={{ color: 'blue', display: 'inline-block', marginLeft: '90px', fontFamily: 'Roboto, sans-serif', cursor: 'pointer' }}>
                                                        Total Unit: {employee4.unitCount}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-3 ">
                                        <div className="card custom-card" >
                                            <div className="card-body" style={{ width: '600px' }}>
                                                <div>
                                                    <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Project: {employee4.projectId}</span>
                                                    <h6>
                                                        <span className="fs-20 me-1">Unit:{employee4.unitNo}</span>
                                                        <span className="badge bg-danger">Unit</span>
                                                    </h6>
                                                    <span className="text-muted">Type:{employee4.schemeType}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="page-header" style={{ marginTop: '-30px' }}>
                                <div className="row row-sm" style={{ marginLeft: '-15px' }}>

                                    <div className="col-sm-12 col-md-2 mb-3">
                                        <div className="card custom-card" >
                                            <div className="card-body">
                                                <div>
                                                    <h6>Display Price </h6>
                                                    <h6>
                                                        <span className="fs-20 me-1" style={{ color: 'orange' }}>{employee4?.initialCost || '0'}</span>

                                                    </h6>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-2 mb-3">
                                        <div className="card custom-card" >
                                            <div className="card-body" >
                                                <div>
                                                    <h6>Booking Discount</h6>
                                                    <h6>
                                                        <span className="fs-20 me-1" style={{ color: 'red' }}>{employee4?.bookingDiscount || '0'}</span>

                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-sm-12 col-md-2 mb-3">
                                        <div className="card custom-card" >
                                            <div className="card-body" style={{ width: '300px' }}>
                                                <div>


                                                    <h6>Total Amount({employee4?.paymentPlan})</h6>
                                                    <h6>
                                                        <span className="fs-20 me-1" style={{ color: 'blue' }}>{employee4?.totalCost || '0'}</span>

                                                    </h6>



                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="col-sm-12 col-md-2 mb-3">
                                        <div className="card custom-card" >
                                            <div className="card-body" style={{ width: '300px' }}>
                                                <div>

                                                    <h6>Total Received</h6>
                                                    <h6>
                                                        <span className="fs-20 me-1" style={{ color: 'green' }}>{employee4?.totolReceived || '0'}</span>

                                                    </h6>




                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-2 mb-3">
                                        <div className="card custom-card" >
                                            <div className="card-body" style={{ width: '200px' }}>
                                                <div>



                                                    <h6>Other Discount</h6>
                                                    <h6>
                                                        <span className="fs-20 me-1" style={{ color: 'green' }}>{employee4?.discountAmount || '0'}</span>

                                                    </h6>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-sm-12 col-md-2 mb-3">
                                        <div className="card custom-card" >
                                            <div className="card-body" style={{ width: '200px' }}>
                                                <div>
                                                    <h6>Total Due</h6>
                                                    <h6>
                                                        <span className="fs-20 me-1" style={{ color: 'red' }}>{employee4?.dueAmount || '0'}</span>

                                                    </h6>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>



                            <div style={{ width: '100%', backgroundColor: 'var(--primary-bg-color)', padding: '5px 20px', marginTop: '-25px' }}>
                                <h5 style={{ textAlign: 'left', color: '#ffffff', fontSize: '-10rem', margin: '0' }}>Payment History</h5>
                            </div>

                            <div className="row row-sm" style={{ width: '101.5%' }}>
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card main-content-body-profile"
                                        style={{
                                            width: "100%",
                                            margin: "0 auto",
                                            padding: "20px",
                                        }}>
                                        <div
                                            className="scroll-container"
                                            style={{
                                                overflowX: "auto",
                                                maxWidth: "100%",
                                            }}
                                        >
                                            <style>
                                                {`
    .scroll-container::-webkit-scrollbar {
        height: 6px; /* Customize the scrollbar height */
    }
    .scroll-container::-webkit-scrollbar-thumb {
        background-color: #888; /* Customize scrollbar color */
        border-radius: 10px;
    }
    table {
        width: 100%;
        border-collapse: collapse; /* Ensure borders are not double */
        table-layout: auto; /* Let the table adapt */
        border: 1px solid #ddd; /* Add border to the table */
    }
    th, td {
        padding: 6px 8px;
        font-size: 14px;
        text-align: center;
        white-space: nowrap; /* Prevent text wrapping */
        border: 1px solid #ddd; /* Add border to the table cells */
    }
    th {
        background-color: #f2f2f2;
        font-weight: bold;
        font-size: 14px;
    }
    .left-aligned {
        text-align: left;
        padding-left: 8px;
    }
    th:nth-child(10), td:nth-child(10) {
        min-width: 200px;  /* Ensure Actions Performed By has enough space */
    }
    @media (max-width: 1200px) {
        /* Responsive adjustments for smaller screens */
        table {
            width: 100%;
        }
        th, td {
            font-size: 12px;
            padding: 4px 6px;
        }
    }
`}
                                            </style>

                                            <table >
                                                <thead>
                                                    <tr>
                                                        <th>Amount Entry</th>
                                                        <th>Payment Mode</th>
                                                        <th>Bank/Mode</th>
                                                        <th>AMRS Account</th>
                                                        <th>CHQ/TRN No</th>
                                                        <th>Cheque Date</th>
                                                        <th>Payment Date</th>
                                                        <th>Actions</th>
                                                        <th>Actions Performed By</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.length > 0 ? (
                                                        users.map((user) => (
                                                            <tr
                                                                key={user.id}
                                                                style={
                                                                    user.isDeleted
                                                                        ? {
                                                                            textDecoration: "line-through",
                                                                            textDecorationColor: "red",
                                                                            textDecorationStyle: "solid",
                                                                        }
                                                                        : {}
                                                                }
                                                            >
                                                                <td>
                                                                    {user.amount}
                                                                    <br />
                                                                    {user.offeredDiscount ? <p>BD: {user.offeredDiscount}</p> : null}
                                                                </td>
                                                                <td>{user?.collectionMode}</td>
                                                                <td>
                                                                    {user?.collectionMode === 'Online' ? (
                                                                        <>{user?.remark || 'N/A'}</>
                                                                    ) : user?.collectionMode === 'Cheque' ? (
                                                                        <>{user?.deposteToAmrs || 'N/A'}</>
                                                                    ) : (
                                                                        <>N/A</>
                                                                    )}
                                                                </td>
                                                                <td>{user.accountNumber || 'N/A'}</td>
                                                                <td>
                                                                    {user?.collectionMode === 'Cheque' ? (
                                                                        <>{user?.chequeNo ? user.chequeNo : 'N/A'}</>
                                                                    ) : user?.collectionMode === 'Online' ? (
                                                                        <>{user?.transactionNo ? user.transactionNo : 'N/A'}</>
                                                                    ) : (
                                                                        <>N/A</>
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    {user?.collectionMode === 'Cheque' ? (
                                                                        <>{user?.formattedDate ? user.formattedDate : 'N/A'}</>
                                                                    ) : (
                                                                        <>N/A</>
                                                                    )}
                                                                </td>
                                                                <td>{user.formattedDate2 || 'N/A'}</td>
                                                                <td>


                                                                    {user.isDeleted === true && (
                                                                        <>

                                                                            <button
                                                                                className="btn ripple btn-primary btn-xs"
                                                                                style={{ marginRight: "6px", fontSize: "12px" }}
                                                                                onClick={() => handleOpenModal58(user.id)}
                                                                            >
                                                                                View Reason
                                                                            </button>


                                                                        </>

                                                                    )}

                                                                    {!user.isDeleted === true && (
                                                                        <>
                                                                            {user.collectionMode !== 'Discount' ? (
                                                                                <Link
                                                                                    to={`/view-receipt-eoi/${user.id}`}
                                                                                    target="_blank"
                                                                                    className="btn ripple btn-primary btn-xs"
                                                                                    style={{ marginRight: "6px", fontSize: "12px" }}
                                                                                >
                                                                                    Receipt
                                                                                </Link>
                                                                            ) : null}

                                                                            <button
                                                                                type="button"
                                                                                className={`btn ripple btn-${holdStatus[user.id] ? 'success' : 'primary'} btn-xs`}
                                                                                style={{ marginRight: "6px", fontSize: "12px" }}
                                                                                onClick={() => handleOpenModal4(user.id)}
                                                                            >
                                                                                {holdStatus[user.id] ? 'Hold' : 'Unhold'}
                                                                            </button>
                                                                            <button
                                                                                className="btn ripple btn-primary btn-xs"
                                                                                style={{ marginRight: "6px", fontSize: "12px" }}
                                                                                onClick={() => handleOpenModals4(user.id)}
                                                                            >
                                                                                Delete
                                                                            </button>
                                                                            <i
                                                                                className="fa fa-edit"
                                                                                style={{ cursor: "pointer", fontSize: "14px" }}
                                                                                onClick={() => handleOpenModal10(user.id)}
                                                                            />
                                                                            <i
                                                                                className="fa fa-eye"
                                                                                style={{
                                                                                    cursor: "pointer",
                                                                                    fontSize: "14px",
                                                                                    marginLeft: "7px",
                                                                                }}
                                                                                onClick={() => handleOpenModal11(user.id)}
                                                                            />
                                                                        </>

                                                                    )}


                                                                </td>
                                                                <td>
                                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                                        <div
                                                                            style={{
                                                                                width: "20px",
                                                                                height: "30px",
                                                                                borderRadius: "50%",
                                                                                overflow: "hidden",
                                                                                marginRight: "5px",
                                                                            }}
                                                                        >
                                                                            <img
                                                                                src={
                                                                                    user?.employee?.profilePhoto ||
                                                                                    "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                                                                }
                                                                                alt="Profile"
                                                                                style={{
                                                                                    width: "100%",
                                                                                    height: "100%",
                                                                                    objectFit: "cover",
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            {user?.employee?.fullName}
                                                                            <br />
                                                                            {user.formattedDates}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="10">No data available</td>
                                                        </tr>
                                                    )}

                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td className="left-aligned" colSpan={8}>
                                                            <strong>Total Payment: {employee4.totalCost}</strong>
                                                        </td>
                                                        <td className="left-aligned" colSpan={2}>
                                                            <strong> Paid Payment: {employee4.amountPayed}</strong>
                                                            <button className="btn ripple btn-primary btn-xs" style={{ marginLeft: "40px", fontSize: "12px" }} onClick={handleOpenModal3}>
                                                                Add Payment
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div
                                className={`modal ${isModalOpen4 ? 'show' : ''}`}
                                style={{ display: isModalOpen4 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                                tabIndex="-1"
                                role="dialog"
                            >
                                <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '300px', margin: 'auto' }}>
                                    <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                            <h5 className="modal-title">Permissions</h5>
                                            <button
                                                type="button"
                                                className="close"
                                                aria-label="Close"
                                                onClick={handleCloseModal4}
                                                style={{ outline: 'none', cursor: 'pointer' }}
                                            >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>

                                        <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                            <form>
                                                <div className="modal-body">
                                                    Please confirm if you want to {holdStatus[holdActionId] ? 'unhold' : 'hold'} now.
                                                </div>
                                                <div className="modal-footer d-flex justify-content-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        onClick={handleCloseModal4}
                                                        style={{ marginRight: '10px' }}
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={handleOkButtonClick}
                                                    >
                                                        Ok
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* <div style={{ marginTop: '15px', width: '100%', backgroundColor: 'var(--primary-bg-color)', padding: '5px 20px' }}>
                                <h5 style={{ textAlign: 'left', color: '#ffffff', fontSize: '-10rem', margin: '0' }}>Upcoming Payment</h5>

                            </div>

                            <div className="row row-sm" style={{ width: '101.5%' }}>
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card main-content-body-profile"
                                        style={{
                                            width: "100%",  // Full width for the card
                                            margin: "0 auto",  // Center it on the screen
                                            padding: "20px",
                                        }}>
                                        <div
                                            className="scroll-container"
                                            style={{
                                                overflowX: "auto", // Enable horizontal scroll if necessary
                                                maxWidth: "100%",
                                            }}
                                        >
                                        
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
                                                        <th style={{ border: "1px solid #ccc", width: "150px" }}>Action</th>
                                                        <th style={{ border: "1px solid #ccc", width: "150px" }}>From</th>
                                                        <th style={{ border: "1px solid #ccc", width: "150px" }}>Date</th>
                                                        <th style={{ border: "1px solid #ccc", width: "150px" }}>Time</th>
                                                        <th style={{ border: "1px solid #ccc", width: "200px" }}>Venue</th>
                                                        <th style={{ border: "1px solid #ccc", width: "200px" }}>Status</th>
                                                        <th style={{ border: "1px solid #ccc", width: "150px" }}>Amount</th>
                                                        <th style={{ border: "1px solid #ccc", width: "250px" }}>Payment Mode</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users2.length > 0 ? (
                                                        users2.map((user, index) => (
                                                            <tr key={index}>
                                                                <td style={{ border: "1px solid #ccc", width: "150px" }}>{user.action}</td>
                                                                <td style={{ border: "1px solid #ccc", width: "150px" }}>{user.from}</td>
                                                                <td style={{ border: "1px solid #ccc", width: "150px" }}>{user.date}</td>
                                                                <td style={{ border: "1px solid #ccc", width: "150px" }}>{user.time}</td>
                                                                <td style={{ border: "1px solid #ccc", width: "200px" }}>{user.venue}</td>
                                                                <td style={{ border: "1px solid #ccc", width: "200px" }}>{user.status}</td>
                                                                <td style={{ border: "1px solid #ccc", width: "150px" }}>{user.amount}</td>
                                                                <td style={{ border: "1px solid #ccc", width: "250px" }}>
                                                                    Mode: {user.mode}
                                                                    <br />
                                                                    {user.mode === 'Cash' && <span> Remark: {user.remark}</span>}
                                                                    {user.mode === 'Online' && <span> Transaction id: {user.transaction}</span>}
                                                                    {user.mode === 'Cheque' && (
                                                                        <>
                                                                            <span> Cheque No: {user.chequeNo}</span>
                                                                            <br />
                                                                            <span> Cheque Date: {user.chequeDate}</span>
                                                                            <br />
                                                                            <span> Cheque Details Bank: {user.chequeDetails}</span>
                                                                        </>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="8" style={{ textAlign: "center" }}>No data available</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div> */}



                            <div style={{ marginTop: '25px', width: '100%', backgroundColor: 'var(--primary-bg-color)', padding: '5px 20px' }}>
                                <h5 style={{ textAlign: 'left', color: '#ffffff', fontSize: '-10rem', margin: '0' }}>Payment Schedule</h5>
                            </div>



                            {employee4.paymentPlan === 'SP' && (
                                <div className="row row-xl mt-4 justify-content-around" style={{ width: '400%' }}>
                                    <div className="col-xl-12 col-lg-12 col-md-12" style={{ marginTop: '-22px' }}>
                                        <div className="card custom-card main-content-body-profile">
                                            <div className="card-body" style={{
                                                overflowX: "auto",
                                                maxWidth: "100%",
                                                display: "block",
                                            }}>
                                                <div className="table-responsive" style={{ width: '100%' }}>

                                                    {employee4.paymentPlan === 'SP' && (
                                                        <>
                                                            <h4
                                                                className="mt-0 text-center mb-3"
                                                                style={{ color: "#2e3192" }}
                                                            >
                                                                SUPER PLAN
                                                            </h4>
                                                            <table className="table table-bordered">
                                                                <thead>
                                                                    <tr style={{ background: "#d6f6ff26" }}>
                                                                        <th className="tx-left" >P.NO</th>
                                                                        <th className="tx-left" >Total Balance</th>
                                                                        <th className="tx-left"> Due Payment</th>
                                                                        <th className="tx-left" >(%)</th>
                                                                        <th className="tx-left"> Due Date</th>
                                                                        <th className="tx-left" > Actual Due</th>
                                                                        <th className="tx-left" >Received</th>
                                                                        <th className="tx-left" > Due Amount</th>
                                                                        <th className="tx-left">Status</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {users4.length > 0 ? (
                                                                        users4.map((user) => (
                                                                            <tr style={{ background: "#d6f6ff26" }}>
                                                                                <td className="tx-left">{user.id}</td>

                                                                                <td className="tx-left">{user.totalBalance}</td>
                                                                                <td className="tx-left">{user.duePayment}{" "}
                                                                                    <span style={{ display: 'inline-block', textAlign: 'right', color: '#4CAF50', fontWeight: 'bold', marginRight: '40px' }}>
                                                                                        {user.paymentInfo}
                                                                                    </span>
                                                                                </td>
                                                                                <td className="tx-left">{user.percentage}</td>
                                                                                <td className="tx-left">{user.dueDate}</td>
                                                                                <td className="tx-left">{user.actualDue}</td>
                                                                                <td className="tx-left">{user.received}</td>
                                                                                <td className="tx-left">
                                                                                    {user.dueAmount && (
                                                                                        <>
                                                                                            <span style={{ color: user.colour }}>{user.dueAmount}
                                                                                            </span>
                                                                                            {user.showButton === true && (
                                                                                                <Link
                                                                                                    to={`/eoi-demand-letter/${user.id}/${empid}`}

                                                                                                >
                                                                                                    <div
                                                                                                        style={{
                                                                                                            width: '30px',
                                                                                                            height: '30px',
                                                                                                            borderRadius: '50%',
                                                                                                            backgroundColor: '#007bff',
                                                                                                            display: 'inline-flex',
                                                                                                            alignItems: 'center',
                                                                                                            justifyContent: 'center',
                                                                                                            cursor: 'pointer',
                                                                                                            marginLeft: '25px',
                                                                                                            transition: 'all 0.3s ease-in-out',
                                                                                                        }}
                                                                                                        onMouseOver={(e) => {
                                                                                                            e.currentTarget.style.transform = 'scale(1.1)';
                                                                                                            e.currentTarget.style.backgroundColor = 'green';
                                                                                                        }}
                                                                                                        onMouseOut={(e) => {
                                                                                                            e.currentTarget.style.transform = 'scale(1)';
                                                                                                            e.currentTarget.style.backgroundColor = '#007bff';
                                                                                                        }}
                                                                                                    >
                                                                                                        <i
                                                                                                            className="fe fe-plus"
                                                                                                            style={{ color: 'white', fontSize: '18px' }}
                                                                                                        />
                                                                                                    </div>
                                                                                                </Link>
                                                                                            )}

                                                                                            {user.showEye === true && (
                                                                                                <a
                                                                                                    onClick={() => handleOpenModal56(user.id)}
                                                                                                    style={{ marginLeft: '15px', cursor: 'pointer', title: 'View', marginTop: '5px' }}
                                                                                                >
                                                                                                    <i className="fa fa-eye me-3" />
                                                                                                </a>
                                                                                            )}



                                                                                        </>
                                                                                    )}
                                                                                </td>


                                                                                <td className="tx-left">{user.status}</td>
                                                                            </tr>
                                                                        ))
                                                                    ) : (
                                                                        <tr className="no-data">
                                                                            <td className="fixed-width" colSpan="10">No data available</td>
                                                                        </tr>
                                                                    )}


                                                                    {/* <tr style={{ background: "#d6f6ff26" }}>
                                                                        <td className="tx-left" colSpan="5">Total value</td>
                                                                        <td className="tx-left"> 10,00000</td>
                                                                    </tr> */}

                                                                </tbody>
                                                            </table>
                                                        </>
                                                    )}


                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}

                            {employee4.paymentPlan === 'PLP' && (
                                <div className="row row-xl mt-4 justify-content-around" style={{ width: '400%' }}>
                                    <div className="col-xl-12 col-lg-12 col-md-12" style={{ marginTop: '-22px' }}>
                                        <div className="card custom-card main-content-body-profile">
                                            <div className="card-body" style={{
                                                overflowX: "auto",
                                                maxWidth: "100%",
                                                display: "block",
                                            }}>
                                                <div className="table-responsive" style={{ width: '100%' }}>

                                                    {employee4.paymentPlan === 'PLP' && (
                                                        <>
                                                            <h4
                                                                className="mt-0 text-center mb-3"
                                                                style={{ color: "#2e3192" }}
                                                            >
                                                                POSSESSION LINK PLAN
                                                            </h4>
                                                            <table className="table table-bordered">
                                                                <thead>
                                                                    <tr style={{ background: "#d6f6ff26" }}>
                                                                        <th className="tx-left" >P.NO</th>
                                                                        <th className="tx-left" >Total Balance</th>
                                                                        <th className="tx-left"> Due Payment</th>
                                                                        <th className="tx-left" >(%)</th>
                                                                        <th className="tx-left"> Due Date</th>
                                                                        <th className="tx-left" > Actual Due</th>
                                                                        <th className="tx-left" >Recived</th>
                                                                        <th className="tx-left" > Due Amount</th>
                                                                        <th className="tx-left">Status</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {users4.length > 0 ? (
                                                                        users4.map((user) => (
                                                                            <tr style={{ background: "#d6f6ff26" }}>
                                                                                <td className="tx-left">{user.id}</td>

                                                                                <td className="tx-left">{user.totalBalance}</td>
                                                                                <td className="tx-left">{user.duePayment}{" "}
                                                                                    <span style={{ display: 'inline-block', textAlign: 'right', color: '#4CAF50', fontWeight: 'bold', marginRight: '40px' }}>
                                                                                        {user.paymentInfo}
                                                                                    </span>
                                                                                </td>
                                                                                <td className="tx-left">{user.percentage}</td>
                                                                                <td className="tx-left">{user.dueDate}</td>
                                                                                <td className="tx-left">{user.actualDue}</td>
                                                                                <td className="tx-left">{user.received}</td>
                                                                                <td className="tx-left">
                                                                                    {user.dueAmount && (
                                                                                        <>
                                                                                            <span style={{ color: user.colour }}>{user.dueAmount}</span>
                                                                                            {user.showButton === true && (
                                                                                                <Link
                                                                                                    to={`/eoi-demand-letter/${user.id}/${empid}`}

                                                                                                >
                                                                                                    <div
                                                                                                        style={{
                                                                                                            width: '30px',
                                                                                                            height: '30px',
                                                                                                            borderRadius: '50%',
                                                                                                            backgroundColor: '#007bff',
                                                                                                            display: 'inline-flex',
                                                                                                            alignItems: 'center',
                                                                                                            justifyContent: 'center',
                                                                                                            cursor: 'pointer',
                                                                                                            marginLeft: '25px',
                                                                                                            transition: 'all 0.3s ease-in-out',
                                                                                                        }}
                                                                                                        onMouseOver={(e) => {
                                                                                                            e.currentTarget.style.transform = 'scale(1.1)';
                                                                                                            e.currentTarget.style.backgroundColor = 'green';
                                                                                                        }}
                                                                                                        onMouseOut={(e) => {
                                                                                                            e.currentTarget.style.transform = 'scale(1)';
                                                                                                            e.currentTarget.style.backgroundColor = '#007bff';
                                                                                                        }}
                                                                                                    >
                                                                                                        <i
                                                                                                            className="fe fe-plus"
                                                                                                            style={{ color: 'white', fontSize: '18px' }}
                                                                                                        />
                                                                                                    </div>
                                                                                                </Link>
                                                                                            )}
                                                                                            {user.showEye === true && (
                                                                                                <a
                                                                                                    onClick={() => handleOpenModal56(user.id)}
                                                                                                    style={{ marginLeft: '15px', cursor: 'pointer', title: 'View', marginTop: '5px' }}
                                                                                                >
                                                                                                    <i className="fa fa-eye me-3" />
                                                                                                </a>
                                                                                            )}

                                                                                        </>
                                                                                    )}
                                                                                </td>


                                                                                <td className="tx-left">{user.status}</td>
                                                                            </tr>
                                                                        ))
                                                                    ) : (
                                                                        <tr className="no-data">
                                                                            <td className="fixed-width" colSpan="10">No data available</td>
                                                                        </tr>
                                                                    )}


                                                                    {/* <tr style={{ background: "#d6f6ff26" }}>
                                                                        <td className="tx-left" colSpan="5">Total value</td>
                                                                        <td className="tx-left"> 10,00000</td>
                                                                    </tr> */}

                                                                </tbody>
                                                            </table>
                                                        </>
                                                    )}


                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}

                            {employee4.paymentPlan === 'DLP' && (
                                <div className="row row-xl mt-4 justify-content-around" style={{ width: '400%' }}>
                                    <div className="col-xl-12 col-lg-12 col-md-12" style={{ marginTop: '-22px' }} >
                                        <div className="card custom-card main-content-body-profile">
                                            <div className="card-body" style={{
                                                overflowX: "auto",
                                                maxWidth: "100%",
                                                display: "block",
                                            }}>
                                                <div className="table-responsive" style={{ width: '100%' }}>

                                                    {employee4.paymentPlan === 'DLP' && (
                                                        <>
                                                            <h4
                                                                className="mt-0 text-center mb-3"
                                                                style={{ color: "#2e3192" }}
                                                            >
                                                                DOWN PAYMENT PLAN
                                                            </h4>
                                                            <table className="table table-bordered">
                                                                <thead>
                                                                    <tr style={{ background: "#d6f6ff26" }}>
                                                                        <th className="tx-left" >P.NO</th>
                                                                        <th className="tx-left" >Total Balance</th>
                                                                        <th className="tx-left"> Due Payment</th>
                                                                        <th className="tx-left" >(%)</th>
                                                                        <th className="tx-left"> Due Date</th>
                                                                        <th className="tx-left" > Actual Due</th>
                                                                        <th className="tx-left" >Recived</th>
                                                                        <th className="tx-left" > Due Amount</th>
                                                                        <th className="tx-left">Status</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {users4.length > 0 ? (
                                                                        users4.map((user) => (
                                                                            <tr style={{ background: "#d6f6ff26" }}>
                                                                                <td className="tx-left">{user.id}</td>

                                                                                <td className="tx-left">{user.totalBalance}</td>
                                                                                <td className="tx-left">{user.duePayment}{" "}
                                                                                    <span style={{ display: 'inline-block', textAlign: 'right', color: '#4CAF50', fontWeight: 'bold', marginRight: '40px' }}>
                                                                                        {user.paymentInfo}
                                                                                    </span>
                                                                                </td>
                                                                                <td className="tx-left">{user.percentage}</td>
                                                                                <td className="tx-left">{user.dueDate}</td>
                                                                                <td className="tx-left">{user.actualDue}</td>
                                                                                <td className="tx-left">{user.received}</td>
                                                                                <td className="tx-left">
                                                                                    {user.dueAmount && (
                                                                                        <>
                                                                                            <span style={{ color: user.colour }}>{user.dueAmount}</span>
                                                                                            {user.showButton === true && (
                                                                                                <Link
                                                                                                    to={`/eoi-demand-letter/${user.id}/${empid}`}

                                                                                                >
                                                                                                    <div
                                                                                                        style={{
                                                                                                            width: '30px',
                                                                                                            height: '30px',
                                                                                                            borderRadius: '50%',
                                                                                                            backgroundColor: '#007bff',
                                                                                                            display: 'inline-flex',
                                                                                                            alignItems: 'center',
                                                                                                            justifyContent: 'center',
                                                                                                            cursor: 'pointer',
                                                                                                            marginLeft: '25px',
                                                                                                            transition: 'all 0.3s ease-in-out',
                                                                                                        }}
                                                                                                        onMouseOver={(e) => {
                                                                                                            e.currentTarget.style.transform = 'scale(1.1)';
                                                                                                            e.currentTarget.style.backgroundColor = 'green';
                                                                                                        }}
                                                                                                        onMouseOut={(e) => {
                                                                                                            e.currentTarget.style.transform = 'scale(1)';
                                                                                                            e.currentTarget.style.backgroundColor = '#007bff';
                                                                                                        }}
                                                                                                    >
                                                                                                        <i
                                                                                                            className="fe fe-plus"
                                                                                                            style={{ color: 'white', fontSize: '18px' }}
                                                                                                        />
                                                                                                    </div>
                                                                                                </Link>
                                                                                            )}

                                                                                            {user.showEye === true && (
                                                                                                <a
                                                                                                    onClick={() => handleOpenModal56(user.id)}
                                                                                                    style={{ marginLeft: '15px', cursor: 'pointer', title: 'View', marginTop: '5px' }}
                                                                                                >
                                                                                                    <i className="fa fa-eye me-3" />
                                                                                                </a>
                                                                                            )}

                                                                                        </>
                                                                                    )}

                                                                                </td>


                                                                                <td className="tx-left">{user.status}</td>
                                                                            </tr>
                                                                        ))
                                                                    ) : (
                                                                        <tr className="no-data">
                                                                            <td className="fixed-width" colSpan="10">No data available</td>
                                                                        </tr>
                                                                    )}



                                                                </tbody>
                                                            </table>
                                                        </>
                                                    )}


                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}



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
                        style={{ maxWidth: '30%', margin: 'auto' }}
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
                                <h5 className="modal-title">View Payment</h5>
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
                                                        Project: {employee4.projectId}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Unit no: {employee4.unitNo}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        {employee4?.inventory?.type === 'Plot' && (
                                                            <>
                                                                Size: {employee4?.inventory?.size} SQ YD
                                                            </>
                                                        )}
                                                        {employee4?.inventory?.type === 'Farmhouse' && (
                                                            <>
                                                                Size: {employee4?.inventory?.size} SQ YD
                                                            </>
                                                        )}
                                                        {employee4?.inventory?.type === 'Shop' && (
                                                            <>
                                                                Size: {employee4?.inventory?.size} SQ FT
                                                            </>
                                                        )}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        BSP: Rs. {employee4.bsp}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        UNIT Price: Rs. {employee4.unitPrice}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Fixed Charges(EDS/IDS): Rs. {employee4.fixedCharges}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        EDS/IDS Amount: Rs. {employee4.fixedAmount}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        PLCs: {employee4.PLCs}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        PLCs Value: Rs. {employee4.plcAmount}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Total cost: Rs. {employee4.totalCost}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Payment Plan: {employee4.paymentPlan}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Gift: {employee4.gift}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer', color: 'red' }}
                                                    >
                                                        Registration Amount: {employee4.registrationAmount}
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
                    className={`modal fade ${isModalOpen3 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{ display: isModalOpen3 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '40%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Add Payment</h5>
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
                                    <div className="row row-sm">

                                        <div className="col-sm-6 form-group">
                                            <label className="form-label">Amount: <span className="tx-danger">*</span></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="amount"
                                                value={formData.amount}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label"> Collection Mode: <span className="tx-danger">*</span></label>
                                            <select className="form-control select2"

                                                name="collectionMode"
                                                value={formData.collectionMode}
                                                onChange={handleInputChange}>
                                                <option value=''>Select </option>
                                                <option value={'Discount'}>Discount</option>
                                                <option value={'Online'}>Online</option>
                                                <option value={'Cheque'}>Cheque</option>

                                            </select>
                                        </div>
                                        {formData.collectionMode === 'Cheque' && (
                                            <>
                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">Cheque Date</label>
                                                    <input type="date" className="form-control"
                                                        name="chequeDate"
                                                        value={formData.chequeDate}
                                                        onChange={handleInputChange} />
                                                </div>
                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">Cheque No</label>
                                                    <input type="text" className="form-control"
                                                        name="chequeNo"
                                                        value={formData.chequeNo}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">Deposit to AMRS</label>
                                                    <select className="form-control select2"
                                                        name="amrsAccount"
                                                        value={formData.amrsAccount}
                                                        onChange={handleInputChange}

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
                                                        value={formData.deposteToAmrs}
                                                        onChange={handleInputChange} />
                                                </div>

                                            </>
                                        )}

                                        {formData.collectionMode === 'Online' && (
                                            <>

                                                <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                    <label className="form-label">AMRS Account</label>
                                                    <select className="form-control select2"
                                                        name="amrsAccount"
                                                        value={formData.amrsAccount}
                                                        onChange={handleInputChange}

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
                                                        value={formData.transactionNo}
                                                        onChange={handleInputChange} />
                                                </div>
                                                <div className="col-sm-6 form-group" >
                                                    <label className="form-label">Payment Method</label>
                                                    <select className="form-control select2"
                                                        name="remark"
                                                        value={formData.remark}
                                                        onChange={handleInputChange}
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
                                            <label className="form-label">Payment Credit Date </label>
                                            <input type="date" className="form-control"
                                                name="paymentCredit"
                                                value={formData.paymentCredit}
                                                onChange={handleInputChange}
                                            />
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

                                <button
                                    className="btn ripple btn-primary"
                                    type="button"
                                    style={{
                                        borderRadius: '5px',
                                        padding: '8px 20px',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        cursor: loadings ? 'not-allowed' : 'pointer',
                                        opacity: loadings ? 0.7 : 1
                                    }}
                                    onClick={handleSubmit}
                                    disabled={loadings}
                                >
                                    {loadings ? 'Loading...' : 'Submit'}
                                </button>

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
                                <h5 className="modal-title">Update Payment({idsss})</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal10}
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
                                                value={formData10.amount}
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
                                                <option value={'Discount'}>Discount</option>
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

                                        {formData10.collectionMode === 'Online' && (
                                            <>

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
                                                <div className="col-sm-6 form-group" >
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
                                            <label className="form-label">Payment Credit Date </label>
                                            <input type="date" className="form-control"
                                                name="paymentCredit"
                                                value={formData10.paymentCredit}
                                                onChange={handleInputChange10}
                                            />
                                        </div>



                                        <div className="col-sm-6">
                                            <label className="form-label"> Upload Receipt</label>
                                            <input type="file" className="form-control"
                                                name="uploadRecipt"
                                                accept="/pdf"
                                                onChange={handleFileChange10} />
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>

                                <button
                                    onClick={handleUpdate}
                                    className="btn ripple btn-primary"
                                    type="button"
                                    style={{
                                        borderRadius: '5px',
                                        padding: '8px 20px',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        cursor: loadingss ? 'not-allowed' : 'pointer',
                                        opacity: loadingss ? 0.7 : 1
                                    }}
                                    // onClick={handleSubmit}
                                    disabled={loadingss}
                                >
                                    {loadingss ? 'Loading...' : 'Update'}
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
                                <h5 className="modal-title">Payment History</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal11}
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
                                    <table align="center" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Amount Entry</th>
                                                <th>Payment Mode</th>
                                                <th>Bank/Mode</th>
                                                <th>AMRS Account</th>
                                                <th>CHQ/TRN No</th>
                                                <th>Cheque Date</th>
                                                <th>Payment Date</th>
                                                <th>Actions Performed By</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userss.length > 0 ? (
                                                userss.map((user) => (
                                                    <tr key={user.id}>
                                                        <td>
                                                            {user.amount}
                                                            <br />
                                                            {user.offeredDiscount ? <p>BD: {user.offeredDiscount}</p> : null}
                                                        </td>
                                                        <td>{user?.collectionMode}</td>
                                                        <td>
                                                            {user?.collectionMode === 'Online' ? (
                                                                <>{user?.remark || 'N/A'}</>
                                                            ) : user?.collectionMode === 'Cheque' ? (
                                                                <>{user?.deposteToAmrs || 'N/A'}</>
                                                            ) : (
                                                                <>N/A</>
                                                            )}
                                                        </td>
                                                        <td>{user.accountNumber || 'N/A'}</td>
                                                        <td>
                                                            {user?.collectionMode === 'Cheque' ? (
                                                                <>
                                                                    {user?.chequeNo ? user.chequeNo : 'N/A'}
                                                                </>
                                                            ) : user?.collectionMode === 'Online' ? (
                                                                <>
                                                                    {user?.transactionNo ? user.transactionNo : 'N/A'}
                                                                </>
                                                            ) : (
                                                                <>N/A</>
                                                            )}
                                                        </td>
                                                        <td>
                                                            {user?.collectionMode === 'Cheque' ? (
                                                                <>
                                                                    {user?.formattedDate ? user.formattedDate : 'N/A'}
                                                                </>
                                                            ) : (
                                                                <>N/A</>
                                                            )}
                                                        </td>
                                                        <td>{user.formattedDate2 || 'N/A'}</td>
                                                        <td>
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                <div
                                                                    style={{
                                                                        width: '20px',
                                                                        height: '30px',
                                                                        borderRadius: '50%',
                                                                        overflow: 'hidden',
                                                                        marginRight: '5px',
                                                                    }}
                                                                >
                                                                    <img
                                                                        src={
                                                                            employee.profilePhoto ||
                                                                            'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'
                                                                        }
                                                                        alt="Profile"
                                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    {employee.fullName}
                                                                    <br />
                                                                    {user.formattedDates}
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="9">No data available</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
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
                        transition: 'opacity 0.3s ease-in-out',
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered modal-xl"
                        style={{ maxWidth: '60%', margin: 'auto' }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
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
                                    fontFamily: "'Rabbit', sans-serif",
                                }}
                            >
                                <h5 className="modal-title" style={{ margin: 0 }}>
                                    View
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal56}
                                    aria-label="Close"
                                    style={{
                                        outline: 'none',
                                        cursor: 'pointer',
                                    }}
                                ></button>
                            </div>

                            <div
                                className="modal-body"
                                style={{
                                    padding: '20px',
                                    maxHeight: 'calc(100vh - 200px)',
                                    overflowY: 'auto',
                                }}
                            >
                                <div
                                    style={{
                                        maxHeight: '400px',
                                        overflowY: 'scroll',
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: '#888 #f1f1f1',
                                    }}
                                >
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th style={{ whiteSpace: 'nowrap' }}>ID</th>
                                                <th style={{ whiteSpace: 'nowrap' }}>view</th>
                                                <th style={{ whiteSpace: 'nowrap' }}>Create Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pdfView.map((user) => (
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>
                                                        <a
                                                            href={user.demandLetterPDF}
                                                            target="_blank"
                                                            style={{
                                                                marginLeft: '5px',
                                                                cursor: 'pointer',
                                                                marginTop: '5px',
                                                            }}
                                                            title="View"
                                                        >
                                                            <i className="fa fa-eye me-3" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        {new Date(user.createdAt).toLocaleDateString('en-GB', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric',
                                                        })}
                                                        <br />
                                                        {new Date(user.createdAt).toLocaleTimeString('en-US', {
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            hour12: true,
                                                        })}
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



                <div
                    className={`modal fade ${isModalOpen58 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{
                        display: isModalOpen58 ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflow: 'hidden',
                        transition: 'opacity 0.3s ease-in-out',
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
                                boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
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
                                    fontFamily: "'Rabbit', sans-serif",
                                }}
                            >
                                <h5 className="modal-title" style={{ margin: 0 }}>
                                    View
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal58}
                                    aria-label="Close"
                                    style={{
                                        outline: 'none',
                                        cursor: 'pointer',
                                    }}
                                ></button>
                            </div>

                            <div
                                className="modal-body"
                                style={{
                                    padding: '20px',
                                    maxHeight: 'calc(100vh - 200px)',
                                    overflowY: 'auto',
                                }}
                            >
                                <div
                                    style={{
                                        maxHeight: '400px',
                                        overflowY: 'scroll',
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: '#888 #f1f1f1',
                                    }}
                                >
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th style={{ whiteSpace: 'nowrap' }}>Reason</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr >
                                                <td>{pdfViews?.deleteReason}</td>


                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div
                    className={`modal ${isModalOpens4 ? 'show' : ''}`}
                    style={{ display: isModalOpens4 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Permissions</h5>
                                <button
                                    type="button"
                                    className="close"
                                    aria-label="Close"
                                    onClick={handleCloseModals4}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                <form>
                                    <div className="modal-body">
                                        <p>Are you sure you want to delete this payment?</p>
                                        <textarea
                                            className="form-control"
                                            placeholder="Enter Reason..."
                                            rows="3"
                                            name="reason"
                                            value={formData11.reason}
                                            onChange={handleInputChange11}
                                        />
                                    </div>

                                    <div className="modal-footer d-flex justify-content-center">

                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={deleteLead}

                                        >
                                            Delete
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="main-footer text-center">
                    <div className="">
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

export default EoiSinglePaymentEntry






