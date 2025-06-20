import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiCaretRight } from 'react-icons/bi';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddClient = () => {

    const initialFormData = {
        isScheme: '',
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



        totalPerPLP: '',
        totalValuePLP: '',
        note: '',

        cornerPlc: '',
        mainRoadPlc: '',
        facultyParkPlc: '',
        fixedCharges: '',

        extraPLP1: '',
        extraPerPLP1: '',
        extraValuePLP1: '',

        extraPLP2: '',
        extraPerPLP2: '',
        extraValuePLP2: '',

        extraPLP3: '',
        extraPerPLP3: '',
        extraValuePLP3: '',

        days1PLP: '',
        days2PLP: '',
        days3PLP: '',
        days4PLP: '',
        days5PLP: '',
        days6PLP: '',
        days7PLP: '',
        days8PLP: '',
        daysDLP: '',
        planName: '',
        // bank: '',

        installmentMonthFPP: "24",

    };

    const [formData, setFormData] = useState(initialFormData);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [profilePicFiles, setProfilePicFiles] = useState(null);
    const [project, setProject] = useState([]);
    const [company, setCompany] = useState([]);
    const [bankName, setBankName] = useState([]);
    const [scame, setScame] = useState([]);
    const [total, setTotal] = useState('');
    const [total1, setTotal1] = useState('');
    const [totals, setTotals] = useState('');
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
    const [ter, setTer] = useState([])
    const [ter1, setTer1] = useState([])
    const [ins, setIns] = useState('')
    const [size, setSize] = useState([])
    const [showLoader, setShowLoader] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');
    const [value9, setValue9] = useState('');
    const navigate = useNavigate();
    const [totalPercentage, setTotalPercentage] = useState(0);
    const [disabledFields, setDisabledFields] = useState(false);
    const [fileSizeError, setFileSizeError] = useState('');
    const [fileSizeErrors, setFileSizeErrors] = useState('');
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


    const handleChange31 = (event) => {
        const inputValue2 = event.target.value;
        const numericValue2 = inputValue2.replace(/\D/g, '');
        setValue9(numericValue2);
        // Update form data
        setFormData({
            ...formData,
            daysDLP: numericValue2,
        });
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

    const handleInputChange13 = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });


        fetch(`${apiUrl}/company/getCompanyById/${value}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Token}`,
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                setTer1(data.data.profilePhoto)
                console.log("API response ID:", data.id);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                console.log('Response:', error.response);
            });
    };

    const handleInputChange12 = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });


        fetch(`${apiUrl}/project/getProject/${value}`)
            .then(response => response.json())
            .then(data => {
                setTer(data.data.projectName)
                console.log("API response ID:", data.id);

            })
            .catch(error => {
                console.error('Error fetching data:', error);

                console.log('Response:', error.response);
            });
    };

    const isValidPercentage = (value) => {
        const match = value.match(/^(\d+(\.\d+)?)%$/);
        return match && parseFloat(match[1]) <= 100;
    };


    // FLEXI PAYMENT PLAN
    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPriceFPP);

        if (percentageRegex.test(formData.onBookingPerFPP) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.onBookingPerFPP.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
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
                } else {
                    console.error('Invalid percentage:', formData.onBookingPerFPP);
                }
            } else {
                console.error('Invalid percentage format:', formData.onBookingPerFPP);
            }
        }
    }, [formData.onBookingPerFPP, formData.areaPLP, formData.basicPriceFPP]);

    useEffect(() => {
        setFormData({ ...formData, onBookingFPP: total })
    }, [total])


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


    useEffect(() => {
        setFormData({ ...formData, totalValueFPP: total1 })
    }, [total1])

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
        setFormData({ ...formData, installMentFPP: ins });
    }, [ins]);

    // Link plan

    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPriceDLP);

        if (percentageRegex.test(formData.onBookingPerDLP) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.onBookingPerDLP.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
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
                } else {
                    console.error('Invalid percentage:', formData.onBookingPerDLP);
                }
            } else {
                console.error('Invalid percentage format:', formData.onBookingPerDLP);
            }
        }
    }, [formData.onBookingPerDLP, formData.areaPLP, formData.basicPriceDLP]);


    useEffect(() => {
        setFormData({ ...formData, onBookingDLP: totals })
    }, [totals])


    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPriceDLP);

        if (percentageRegex.test(formData.withIn30PerDLP) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.withIn30PerDLP.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
                    if (percentage > 100) {
                        alert('Percentage value cannot exceed greater than 100');
                    } else {
                        const totalValue = (areaValue * priceValue) * (percentage / 100);
                        let formattedTotalValue = totalValue.toFixed(2);
                        if (formattedTotalValue.endsWith('.00')) {
                            formattedTotalValue = formattedTotalValue.slice(0, -3); // Remove the decimal part
                        }
                        setTotals1(formattedTotalValue);
                        console.log('Total (when percentage is included):', totalValue);
                    }
                } else {
                    console.error('Invalid percentage:', formData.withIn30PerDLP);
                }
            } else {
                console.error('Invalid percentage format:', formData.withIn30PerDLP);
            }
        }
    }, [formData.withIn30PerDLP, formData.areaPLP, formData.basicPriceDLP]);


    useEffect(() => {
        setFormData({ ...formData, withIn30DLP: totals1 })
    }, [totals1])



    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPriceDLP);

        if (percentageRegex.test(formData.restOnRegistryPerDLP) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.restOnRegistryPerDLP.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
                    if (percentage > 100) {
                        alert('Percentage value cannot exceed greater than 100');
                    } else {
                        const totalValue = (areaValue * priceValue) * (percentage / 100);
                        let formattedTotalValue = totalValue.toFixed(2);
                        if (formattedTotalValue.endsWith('.00')) {
                            formattedTotalValue = formattedTotalValue.slice(0, -3); // Remove the decimal part
                        }
                        setTotals2(formattedTotalValue);
                        console.log('Total (when percentage is included):', totalValue);
                    }
                } else {
                    console.error('Invalid percentage:', formData.restOnRegistryPerDLP);
                }
            } else {
                console.error('Invalid percentage format:', formData.restOnRegistryPerDLP);
            }
        }
    }, [formData.restOnRegistryPerDLP, formData.areaPLP, formData.basicPriceDLP]);



    useEffect(() => {
        setFormData({ ...formData, restOnRegistryDLP: totals2 })
    }, [totals2])


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


    useEffect(() => {
        setFormData({ ...formData, totalValueDLP: totals3 })
    }, [totals3])

    //POSSESSION LINK PLAN 


    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);

        if (percentageRegex.test(formData.onBookingPerPLP) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.onBookingPerPLP.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
                    if (percentage > 100) {
                        alert('Percentage value cannot exceed greater than 100');
                    } else {
                        const totalValue = (areaValue * priceValue) * (percentage / 100);
                        let formattedTotalValue = totalValue.toFixed(2);
                        if (formattedTotalValue.endsWith('.00')) {
                            formattedTotalValue = formattedTotalValue.slice(0, -3); // Remove the decimal part
                        }
                        setTotalss(formattedTotalValue);
                        console.log('Total (when percentage is included):', totalValue);
                    }
                } else {
                    console.error('Invalid percentage:', formData.onBookingPerPLP);
                }
            } else {
                console.error('Invalid percentage format:', formData.onBookingPerPLP);
            }
        }
    }, [formData.onBookingPerPLP, formData.areaPLP, formData.basicPricePLP]);


    useEffect(() => {
        setFormData({ ...formData, onBookingPLP: totalss })
    }, [totalss])



    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);

        if (percentageRegex.test(formData.withIn60PerPLP) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.withIn60PerPLP.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
                    if (percentage > 100) {
                        alert('Percentage value cannot exceed greater than 100');
                    } else {
                        const totalValue = (areaValue * priceValue) * (percentage / 100);
                        let formattedTotalValue = totalValue.toFixed(2);
                        if (formattedTotalValue.endsWith('.00')) {
                            formattedTotalValue = formattedTotalValue.slice(0, -3); // Remove the decimal part
                        }
                        setTotalss1(formattedTotalValue);
                        console.log('Total (when percentage is included):', totalValue);
                    }
                } else {
                    console.error('Invalid percentage:', formData.withIn60PerPLP);
                }
            } else {
                console.error('Invalid percentage format:', formData.withIn60PerPLP);
            }
        }
    }, [formData.withIn60PerPLP, formData.areaPLP, formData.basicPricePLP]);



    useEffect(() => {
        setFormData({ ...formData, withIn60PLP: totalss1 })
    }, [totalss1])



    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);

        if (percentageRegex.test(formData.withIn90PerPLP) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.withIn90PerPLP.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
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
                } else {
                    console.error('Invalid percentage:', formData.withIn90PerPLP);
                }
            } else {
                console.error('Invalid percentage format:', formData.withIn90PerPLP);
            }
        }
    }, [formData.withIn90PerPLP, formData.areaPLP, formData.basicPricePLP]);



    useEffect(() => {
        setFormData({ ...formData, withIn90PLP: totalss2 })
    }, [totalss2])



    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);

        if (percentageRegex.test(formData.withIn120PerPLP) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.withIn120PerPLP.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
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
                } else {
                    console.error('Invalid percentage:', formData.withIn120PerPLP);
                }
            } else {
                console.error('Invalid percentage format:', formData.withIn120PerPLP);
            }
        }
    }, [formData.withIn120PerPLP, formData.areaPLP, formData.basicPricePLP]);



    useEffect(() => {
        setFormData({ ...formData, withIn120PLP: totalss3 })
    }, [totalss3])


    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);

        if (percentageRegex.test(formData.withIn150PerPLP) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.withIn150PerPLP.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
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
                } else {
                    console.error('Invalid percentage:', formData.withIn150PerPLP);
                }
            } else {
                console.error('Invalid percentage format:', formData.withIn150PerPLP);
            }
        }
    }, [formData.withIn150PerPLP, formData.areaPLP, formData.basicPricePLP]);


    useEffect(() => {
        setFormData({ ...formData, withIn150PLP: totalss4 })
    }, [totalss4])


    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);

        if (percentageRegex.test(formData.withIn180PerPLP) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.withIn180PerPLP.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
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
                } else {
                    console.error('Invalid percentage:', formData.withIn180PerPLP);
                }
            } else {
                console.error('Invalid percentage format:', formData.withIn180PerPLP);
            }
        }
    }, [formData.withIn180PerPLP, formData.areaPLP, formData.basicPricePLP]);



    useEffect(() => {
        setFormData({ ...formData, withIn180PLP: totalss5 })
    }, [totalss5])

    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);

        if (percentageRegex.test(formData.restOnRegistryPerPLP) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.restOnRegistryPerPLP.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
                    if (percentage > 100) {
                        alert('Percentage value cannot exceed greater than 100');
                    } else {
                        const totalValue = (areaValue * priceValue) * (percentage / 100);
                        let formattedTotalValue = totalValue.toFixed(2);
                        if (formattedTotalValue.endsWith('.00')) {
                            formattedTotalValue = formattedTotalValue.slice(0, -3); // Remove the decimal part
                        }
                        setTotalss6(formattedTotalValue);
                        console.log('Total (when percentage is included):', totalValue);
                    }
                } else {
                    console.error('Invalid percentage:', formData.restOnRegistryPerPLP);
                }
            } else {
                console.error('Invalid percentage format:', formData.restOnRegistryPerPLP);
            }
        }
    }, [formData.restOnRegistryPerPLP, formData.areaPLP, formData.basicPricePLP]);


    useEffect(() => {
        setFormData({ ...formData, restOnRegistryPLP: totalss6 })
    }, [totalss6])


    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);

        if (percentageRegex.test(formData.extraPerPLP1) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.extraPerPLP1.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
                    if (percentage > 100) {
                        alert('Percentage value cannot exceed greater than 100');
                    } else {
                        const totalValue = (areaValue * priceValue) * (percentage / 100);
                        let formattedTotalValue = totalValue.toFixed(2);
                        if (formattedTotalValue.endsWith('.00')) {
                            formattedTotalValue = formattedTotalValue.slice(0, -3); // Remove the decimal part
                        }
                        setTotalss7(formattedTotalValue);
                        console.log('Total (when percentage is included):', totalValue);
                    }
                } else {
                    console.error('Invalid percentage:', formData.extraPerPLP1);
                }
            } else {
                console.error('Invalid percentage format:', formData.extraPerPLP1);
            }
        }
    }, [formData.extraPerPLP1, formData.areaPLP, formData.basicPricePLP]);


    useEffect(() => {
        setFormData({ ...formData, extraValuePLP1: totalss7 })
    }, [totalss7])


    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);

        if (percentageRegex.test(formData.extraPerPLP2) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.extraPerPLP2.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
                    if (percentage > 100) {
                        alert('Percentage value cannot exceed greater than 100');
                    } else {
                        const totalValue = (areaValue * priceValue) * (percentage / 100);
                        let formattedTotalValue = totalValue.toFixed(2);
                        if (formattedTotalValue.endsWith('.00')) {
                            formattedTotalValue = formattedTotalValue.slice(0, -3); // Remove the decimal part
                        }
                        setTotalss8(formattedTotalValue);
                        console.log('Total (when percentage is included):', totalValue);
                    }
                } else {
                    console.error('Invalid percentage:', formData.extraPerPLP2);
                }
            } else {
                console.error('Invalid percentage format:', formData.extraPerPLP2);
            }
        }
    }, [formData.extraPerPLP2, formData.areaPLP, formData.basicPricePLP]);



    useEffect(() => {
        setFormData({ ...formData, extraValuePLP2: totalss8 })
    }, [totalss8])


    useEffect(() => {
        const percentageRegex = /^(\d+(\.\d+)?)%$/;
        const areaValue = parseFloat(formData.areaPLP);
        const priceValue = parseFloat(formData.basicPricePLP);

        if (percentageRegex.test(formData.extraPerPLP3) && !isNaN(areaValue) && !isNaN(priceValue)) {
            const match = formData.extraPerPLP3.match(/^(\d+(\.\d+)?)%/);
            if (match) {
                const percentage = parseFloat(match[1]);
                if (!isNaN(percentage)) {
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
                } else {
                    console.error('Invalid percentage:', formData.extraPerPLP3);
                }
            } else {
                console.error('Invalid percentage format:', formData.extraPerPLP3);
            }
        }
    }, [formData.extraPerPLP3, formData.areaPLP, formData.basicPricePLP]);


    useEffect(() => {
        setFormData({ ...formData, extraValuePLP3: totalss9 })
    }, [totalss9])


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



    useEffect(() => {
        setFormData({ ...formData, totalValuePLP: totalss10 })
    }, [totalss10])

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


    //company
    useEffect(() => {
        fetch(`${apiUrl}/bank/accountDropdown?companyId=${formData.companyId || '0'} `)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    // console.log(data.data[0])
                    setBankName(data.data[0]);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, [formData.companyId]);




    //company
    useEffect(() => {
        const Token = localStorage.getItem('Token');

        fetch(`${apiUrl}/company/companyDropdown`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
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
                console.error('Error fetching gender options:', error);
            });
    }, []);

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

    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith("image/")) {
                if (profilePicFile.size > 1024 * 1024) {
                    setFileSizeErrors('File size exceeds 1MB');
                    setProfilePicFile(null);
                    setFormData((prevData) => ({
                        ...prevData,
                        brocehureImage: null,
                    }));
                } else {
                    setFileSizeErrors('');
                    setProfilePicFile(profilePicFile);
                    setFormData((prevData) => ({
                        ...prevData,
                        brocehureImage: profilePicFile,
                    }));
                }
            } else {
                setFileSizeErrors('File sixe maxsimam 1 mb');
                setProfilePicFile(null);
                setFormData((prevData) => ({
                    ...prevData,
                    brocehureImage: null,
                }));
            }
        } else {
            console.log("No file selected");
        }
    };



    const handleFileChanges = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFiles = files[0];

            if (profilePicFiles.type.startsWith("image/")) {
                if (profilePicFiles.size > 1024 * 1024) {
                    setFileSizeError('File size exceeds 1MB');
                    setProfilePicFiles(null);
                    setFormData((prevData) => ({
                        ...prevData,
                        paymentPlanImage: null,
                    }));
                } else {
                    setFileSizeError('');
                    setProfilePicFiles(profilePicFiles);
                    setFormData((prevData) => ({
                        ...prevData,
                        paymentPlanImage: profilePicFiles,
                    }));
                }
            } else {
                setFileSizeError('File sixe maxsimam 1 mb');
                setProfilePicFiles(null);
                setFormData((prevData) => ({
                    ...prevData,
                    paymentPlanImage: null,
                }));
            }
        } else {
            console.log("No file selected");
        }
    };




    const handleOptionChange = (event) => {
        const { value } = event.target;
        setSelectedOption(value);
        setFormData({
            ...formData,
            isScheme: value === 'option1' ? 'true' : 'false',
        });
    }

    // from submit planS
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/plan/addPlan`, {
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
            setSelectedOption('');
            toast.success(response2.message);
            navigate("/list-plan");
        } catch (error) {
            toast.error(error.message);
        }
    };


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

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleInputChangeNumber = (event) => {
        const { name, value } = event.target;

        // Regular expression to allow only numeric input
        const numericValue = value.replace(/[^0-9]/g, '');

        if (value !== numericValue) {
            alert('Please enter only numbers!');
        }

        // Update the form data with the numeric value only
        setFormData((prevData) => ({
            ...prevData,
            [name]: numericValue,
        }));
    };


    const handleInputChangeTextAreas = (value) => {
        setFormData({ ...formData, note: value });
    };

    const handleInputChangeTextAreass = (value) => {
        setFormData({ ...formData, planDescription: value });
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
                                <div className="col-xl-12 col-lg-12 col-md-12">
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
                                                                onChange={handleInputChange13}
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
                                                            <select className="form-control"
                                                                style={{ height: 25 }}
                                                                name="projectId"
                                                                value={formData.projectId}
                                                                onChange={handleInputChange12}>
                                                                <option value=''>Select</option>
                                                                {project.map((option, index) => (
                                                                    <option key={option.id} value={option.id}>
                                                                        {option.projectName}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>

                                                        <div className="col-lg-4 form-group" style={{ marginTop: '10px' }}>
                                                            <label className="form-label">
                                                                Plan Name <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                style={{ height: 25 }}
                                                                name="planName"
                                                                value={formData.planName}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
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
                                                                Select({formData.areaUnitPLP || 'N/A'}) <span className="tx-danger">*</span>
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
                                                            <div className="col-lg-12 form-group" style={{ marginTop: '10px' }}>
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
                                                                placeholder="Description..."
                                                                name="planDescription"
                                                                value={formData.planDescription}
                                                                style={{ height: "200px" }}
                                                                onChange={handleInputChangeTextAreass}
                                                            />
                                                           
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Brochure Image <span className="tx-danger">*</span>
                                                            </label>
                                                            <div className="row row-sm">
                                                                <div className="col-sm-12 col-md-12">
                                                                    <input
                                                                        type="file"
                                                                        className="dropify"
                                                                        data-default-file="../assets/img/media/1.jpg"
                                                                        data-height={200}
                                                                        name="brochureImage"
                                                                        onChange={handleFileChange}
                                                                    />
                                                                    <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '10px', backgroundColor: '#f9f9f9', height: '200px' }}>
                                                                        {profilePicFile ? (
                                                                            <img
                                                                                src={URL.createObjectURL(profilePicFile)}
                                                                                alt="Selected File"
                                                                                style={{ maxWidth: '100%', maxHeight: '170px', borderRadius: '8px' }}
                                                                            />
                                                                        ) : (
                                                                            <div style={{ textAlign: 'center' }}>
                                                                                <i className="fas fa-image" style={{ fontSize: '50px', color: '#ccc' }}></i>
                                                                                <p style={{ margin: '5px 0', color: '#777' }}>No photo selected</p>
                                                                            </div>
                                                                        )}

                                                                    </div>
                                                                    {fileSizeErrors && (
                                                                        <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
                                                                            {fileSizeErrors}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Payment Plan Image{" "}
                                                                <span className="tx-danger">*</span>
                                                            </label>
                                                            <div className="row row-sm">
                                                                <div className="col-sm-12 col-md-12">
                                                                    <input
                                                                        type="file"
                                                                        className="dropify"
                                                                        data-default-file="../assets/img/media/1.jpg"
                                                                        data-height={200}
                                                                        name="paymentPlanImage"
                                                                        onChange={handleFileChanges}
                                                                    />
                                                                    <div
                                                                        style={{
                                                                            marginTop: '8px',
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            border: '1px solid #ccc',
                                                                            borderRadius: '8px',
                                                                            padding: '10px',
                                                                            backgroundColor: '#f9f9f9',
                                                                            height: '200px',
                                                                        }}
                                                                    >
                                                                        {profilePicFiles ? (
                                                                            <img
                                                                                src={URL.createObjectURL(profilePicFiles)}
                                                                                alt="Selected File"
                                                                                style={{ maxWidth: '100%', maxHeight: '170px', borderRadius: '8px' }}
                                                                            />
                                                                        ) : (
                                                                            <div style={{ textAlign: 'center' }}>
                                                                                <i className="fas fa-image" style={{ fontSize: '50px', color: '#ccc' }}></i>
                                                                                <p style={{ margin: '5px 0', color: '#777' }}>No photo selected</p>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    {fileSizeError && (
                                                                        <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
                                                                            {fileSizeError}
                                                                        </div>
                                                                    )}
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
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-invoice table-borderless">

                                                    <tbody>
                                                        <tr>
                                                            <td width="30%">
                                                                <img
                                                                    src={ter1}
                                                                    style={{ width: 100 }}
                                                                />
                                                            </td>
                                                            <td width="45%">
                                                                <h4>
                                                                    {ter}
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

                                                                {" "} per {" "} <span>{formData.areaUnitPLP}</span>


                                                            </th>
                                                            <th className="tx-left" />
                                                            <th className="tx-left">
                                                                <span style={{
                                                                    marginRight: 10,
                                                                    fontSize: "11px", // Font size set to 10 pixels
                                                                    // whiteSpace: "nowrap" // Prevents text from wrapping
                                                                }}>
                                                                    Installment Amount for
                                                                </span>
                                                                <span>{formData.areaPLP}</span> {" "}
                                                                <span style={{ fontSize: '11px' }}>{formData.areaUnitPLP}</span>

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
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    value={total || ""}
                                                                />
                                                            </td>
                                                        </tr>

                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">2</td>
                                                            <td className="tx-left" style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
                                                                Within
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25, width: '150px', marginLeft: '5px' }}
                                                                    placeholder='24'

                                                                    name="installmentMonthFPP"
                                                                    value={formData.installmentMonthFPP}
                                                                    onChange={handleInputChange}
                                                                />. Months installment Each of:
                                                            </td>

                                                            <td className="tx-left" />
                                                            <td className="tx-left">

                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="installMentFPP"
                                                                    value={formData.installMentFPP}
                                                                    onChange={handleInputChange}
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
                                                                    value={total1 || ""}
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
                                                                    disabled={disabledFields}
                                                                />
                                                                {" "} per {" "} <span>{formData.areaUnitPLP}</span>

                                                            </th>
                                                            <th className="tx-left" />
                                                            <th className="tx-left">
                                                                <span style={{ marginRight: 10, fontSize: "11px" }}>
                                                                    Installment Amount for
                                                                </span>
                                                                <span>{formData.areaPLP}</span>{" "}
                                                                <span style={{ fontSize: '11px' }}>{formData.areaUnitPLP}</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {[
                                                            { id: 1, label: "On Booking", name: "onBookingPerPLP", days: "" },
                                                            { id: 2, label: "Within", name: "withIn60PerPLP", days: "days1PLP" },
                                                            { id: 3, label: "Within", name: "withIn90PerPLP", days: "days2PLP" },
                                                            { id: 4, label: "Within", name: "withIn120PerPLP", days: "days3PLP" },
                                                            { id: 5, label: "Within", name: "withIn150PerPLP", days: "days4PLP" },
                                                            { id: 6, label: "Within", name: "withIn180PerPLP", days: "days5PLP" },
                                                            { id: 7, label: "Within", name: "extraPerPLP1", days: "days6PLP" },
                                                            { id: 8, label: "Within", name: "extraPerPLP2", days: "days7PLP" },
                                                            { id: 9, label: "Within", name: "extraPerPLP3", days: "days8PLP" },
                                                            { id: 10, label: <span>Rest on Registry <span style={{ color: 'red' }}>*</span></span>, name: "restOnRegistryPerPLP", days: "" }


                                                        ].map((item) => (
                                                            <tr key={item.id} style={{ background: "#d6f6ff26" }}>
                                                                <td className="tx-left">{item.id}</td>
                                                                <td className="tx-left">
                                                                    {item.label}{" "}
                                                                    {item.days && (
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: '140px', height: 25, display: "inline", marginLeft: 5, marginRight: 5 }}
                                                                            name={item.days}
                                                                            value={formData[item.days]}
                                                                            onChange={handleInputChange}
                                                                            disabled={disabledFields && !formData[item.name]}
                                                                        />
                                                                    )}
                                                                    {item.days && "Days"}
                                                                </td>
                                                                <td className="tx-left">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        style={{ height: 25 }}
                                                                        name={item.name}
                                                                        value={formData[item.name]}
                                                                        onChange={handleInputChange}
                                                                        disabled={disabledFields && !formData[item.name]}
                                                                    />
                                                                </td>
                                                                <td className="tx-left">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        style={{ height: 25 }}
                                                                        value={isValidPercentage(formData[item.name]) ? ((parseFloat(formData[item.name]) || 0) * (parseFloat(formData.basicPricePLP * formData.areaPLP) || 0) / 100) : ''}
                                                                        readOnly
                                                                    />
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left" />
                                                            <td className="tx-left">Total value</td>
                                                            <td className="tx-left">


                                                            </td>

                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    value={totalss10 || ""}
                                                                    readOnly
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
                                                                {" "} per {" "} <span>{formData.areaUnitPLP}</span>


                                                            </th>
                                                            <th className="tx-left" />
                                                            <th className="tx-left">
                                                                <span style={{
                                                                    marginRight: 10,
                                                                    fontSize: "11px", // Font size set to 10 pixels
                                                                    // whiteSpace: "nowrap" // Prevents text from wrapping
                                                                }}>
                                                                    Installment Amount for
                                                                </span>
                                                                <span>{formData.areaPLP}</span>{" "}
                                                                <span style={{ fontSize: '11px' }}>{formData.areaUnitPLP}</span>

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
                                                                    onChange={handleInputChange} />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    value={totals || ""} />
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
                                                                    name='daysDLP'
                                                                    value={value9}
                                                                    onChange={handleChange31}
                                                                /> {" "}
                                                                Days-
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    name="withIn30PerDLP"
                                                                    value={formData.withIn30PerDLP}
                                                                    onChange={handleInputChange} />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    value={totals1 || ""}
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
                                                                    onChange={handleInputChange} />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    value={totals2 || ""} />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left" />

                                                            <td className="tx-left">Total Value</td>
                                                            <td className="tx-left">
                                                                {/* <input type="text" className="form-control"
                                                                    name="totalValuePerDLP"
                                                                    value={formData.totalValuePerDLP}
                                                                    onChange={handleInputChange} /> */}
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control"
                                                                    style={{ height: 25 }}
                                                                    value={totals3 || ""} />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <h4 className="mt-5 text-center mb-3" style={{ color: "#2e3192" }}>
                                                    Applicable PLC
                                                </h4>

                                                <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', maxWidth: '1300px', margin: '0 auto', backgroundColor: '#f9f9f9' }}>
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
                                                                            onChange={handleInputChangeNumber} />
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
                                                                            onChange={handleInputChangeNumber} />
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
                                                                            onChange={handleInputChangeNumber} />
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
                                                                            onChange={handleInputChangeNumber} />
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
                                                            placeholder="Description..."
                                                            name="note"
                                                            value={formData.note}
                                                            style={{ height: "200px" }}
                                                            onChange={handleInputChangeTextAreas}
                                                        />

                                                    </div>
                                                </p>

                                            </div>
                                        </div>
                                        <div className="card-footer text-end">
                                            <a href="" className="btn btn-primary mb-1" onClick={handleSubmit}>
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

export default AddClient