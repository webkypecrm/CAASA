import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DemandNotice = () => {
    const { empid } = useParams();
    const [employee, setEmployee] = useState({})
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
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


    // fpp plan
    useEffect(() => {
        // Ensure the values are parsed correctly
        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.onBookingPerFPP);

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
    }, [
        employee && employee.applicant && employee.applicant.totalCost,
        employee && employee.plan && employee.plan.onBookingPerFPP
    ]);


    useEffect(() => {
        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
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
    }, [employee && employee.applicant && employee.applicant.totalCost, total1]);


    //DLP plan

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.onBookingPerDLP);

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
    }, [employee && employee.applicant && employee.applicant.totalCost,
    employee && employee.plan && employee.plan.onBookingPerDLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.withIn30PerDLP);

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
    }, [employee && employee.applicant && employee.applicant.totalCost, employee && employee.plan && employee.plan.withIn30PerDLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.restOnRegistryPerDLP);

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
    }, [employee && employee.applicant && employee.applicant.totalCost, employee && employee.plan && employee.plan.restOnRegistryPerDLP]);

    //PLP Plan

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.onBookingPerPLP);

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
    }, [employee && employee.applicant && employee.applicant.totalCost, employee && employee.plan && employee.plan.onBookingPerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.withIn60PerPLP);

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
    }, [employee && employee.applicant && employee.applicant.totalCost, employee && employee.plan && employee.plan.withIn60PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.withIn90PerPLP);

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
    }, [employee && employee.applicant && employee.applicant.totalCost, employee && employee.plan && employee.plan.withIn90PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.withIn120PerPLP);

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
    }, [employee && employee.applicant && employee.applicant.totalCost, employee && employee.plan && employee.plan.withIn120PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.withIn150PerPLP);

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
    }, [employee && employee.applicant && employee.applicant.totalCost, employee && employee.plan && employee.plan.withIn150PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.withIn180PerPLP);

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
    }, [employee && employee.applicant && employee.applicant.totalCost, employee && employee.plan && employee.plan.withIn180PerPLP]);

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.extraPerPLP1);

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
    }, [employee && employee.applicant && employee.applicant.totalCost, employee && employee.plan && employee.plan.extraPerPLP1]);

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.extraPerPLP2);

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
    }, [employee && employee.applicant && employee.applicant.totalCost, employee && employee.plan && employee.plan.extraPerPLP2]);

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.extraPerPLP3);

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
    }, [employee && employee.applicant && employee.applicant.totalCost, employee && employee.plan && employee.plan.extraPerPLP3]);

    useEffect(() => {

        const areaValue = parseFloat(employee && employee.applicant && employee.applicant.totalCost);
        const priceValue = parseFloat(employee && employee.plan && employee.plan.restOnRegistryPerPLP);

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
    }, [employee && employee.applicant && employee.applicant.totalCost, employee && employee.plan && employee.plan.restOnRegistryPerPLP]);




    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    };

    const rightSideStyle = {
        flex: 1,
        textAlign: 'right'
    };

    const formatDateTimes = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };
    const formatDateTimess = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${month} ${year}`;
    };



    useEffect(() => {
        async function getEmp() {
            try {
                let response = await fetch(`${apiUrl}/applicant/getNoticeLetter?applicantId=${empid}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${Token}`
                    },
                });
                let data = await response.json();

                if (data.status === "success") {
                    const formattedData = {
                        ...data.data,
                        formattedDates: data.data.date ? formatDateTimes(data.data.createdAt) : null,
                        reminderDate: data.data.inventoryFollowUp.reminderDate ? formatDateTimes(data.data.inventoryFollowUp.reminderDate) : null,
                        formattedDatess: data.data.lastDate ? formatDateTimes(data.data.lastDate) : null,
                        bbaDate: data.data.applicant.bba && data.data.applicant.bba.length > 0 ? formatDateTimes(data.data.applicant.bba[0].bbaDate) : null,
                        registryDate: data.data.applicant.bba && data.data.applicant.bba.length > 0 ? formatDateTimess(data.data.applicant.bba[0].registryDate) : null,

                    };
                    setEmployee(formattedData);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        getEmp();
    }, []);


    return (
        <div style={{ background: "#f7f7f7", margin: 0, padding: "50px 0" }}>
            <table
                align="center"
                width={700}
                border={0}
                cellSpacing={0}
                cellPadding={0}
                style={{
                    background: "white",
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: 13,
                    borderRadius: 15
                }}
            >
                <tbody>
                    <tr>
                        <td colSpan={3} style={{ height: 20 }} />
                    </tr>
                    <tr>
                        <td align="center" colSpan={3}>
                            <a href="">
                                <img border={0} width={150} src="https://amrealty.webkype.com/assets/img/brand/logo.png" alt='' />
                            </a>
                            <br />
                            <h5>DEMAND NOTICE</h5>
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
                                        <td>
                                            <div style={containerStyle}>

                                                <div style={rightSideStyle}>
                                                    <p>Date :<span style={{ color: 'blue' }}> {employee.formattedDates} </span></p>
                                                </div>
                                            </div>
                                            <p>
                                                Ref: 03/2023/
                                                <br />
                                                Customer Code: <span style={{ color: 'blue' }}> {employee && employee.applicant && `${employee.applicant.ticketId}`}</span>
                                            </p>
                                            <p>
                                                Mr. <span style={{ color: 'blue' }}>{employee.name}</span>,<br />
                                                Address: <span style={{ color: 'blue' }}>
                                                    {employee && employee.applicant && `${employee.applicant.applicantAddress}`}
                                                </span>
                                                <br />
                                                Mobile no.: <span style={{ color: 'blue' }}>{employee.mobileNo}</span>
                                            </p>
                                            <p>
                                                Sub: Registry pending and payment request for Rs. <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.totalCost}`}</span> along with Interest Charges Rs. 00 in respect of your booking of Plot No. <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.unitNo}`}</span> area tentatively admeasuring <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.size}`} </span>
                                                sq.yds in our Project “<span style={{ color: 'blue' }}>{employee && employee.project && `${employee.project.projectName}`}</span>” situated in <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.applicantAddress}`}</span>.
                                            </p>
                                            <p>
                                                Ref: Builder Buyer Agreement (“Agreement”) dated <span style={{ color: 'blue' }}>{employee.bbaDate}</span> entered into between yourself and Webkype (hereinafter “Partnership Firm”)
                                            </p>
                                            <p>
                                                Dear Sir,
                                            </p>
                                            <div style={{ fontFamily: 'Arial, sans-serif' }}>
                                                <p>
                                                    This refers to your booking of the above-mentioned plot in our project “<span style={{ color: 'blue' }}>{employee && employee.project && `${employee.project.projectName}`}</span>” in <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.applicantAddress}`}</span>. Please note, the Registry was open in this
                                                    project since <span style={{ color: 'blue' }}>{employee.registryDate}</span>. Our team had intimated you regarding the opening of the Registry and had requested you to complete your registration process as per the payment plan. Ever since then, your Registration process/Pending amount is still pending. Your attention is drawn to Annexure-A of the said Agreement
                                                    vide which you are required to pay the amount as per the payment plan reproduced below that was agreed and accepted by you.
                                                </p>
                                                <p>
                                                    <strong style={{ color: 'blue' }}>{employee.paymentPlan} Payment Plan</strong>
                                                </p>

                                                <table
                                                    align="center"
                                                    width="90%"
                                                    border={1}
                                                    cellSpacing={0}
                                                    cellPadding={0}
                                                    style={{ borderColor: "#fcfcfc" }}
                                                >
                                                    {employee.paymentPlan === 'FPP' && (
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", width: "45%", border: "1px solid #ccc" }}>
                                                                    Basic price Rs.{employee && employee.plan && `${employee.plan.basicPriceFPP}`}/- per{" "}  {employee && employee.applicant && `${employee.applicant.size}`}{" "} {employee && employee.plan && `${employee.plan.areaUnitFPP}`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>

                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    Amount
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", width: "40%", border: "1px solid #ccc" }}>
                                                                    On Booking
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.onBookingPerFPP}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total1}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", width: "40%", border: "1px solid #ccc" }}>
                                                                    Within 24 Months. Monthly installment Each of
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>

                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {ins}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", width: "40%", border: "1px solid #ccc" }}>
                                                                    Total Value
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>

                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.applicant && `${employee.applicant.totalCost}`}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    )}

                                                    {employee.paymentPlan === 'PLP' && (
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                    Basic price Rs.{employee && employee.plan && `${employee.plan.basicPricePLP}`}/- per {employee && employee.plan && `${employee.plan.areaUnitPLP}`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>

                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    Amount
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                    On Booking
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.onBookingPerPLP}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total5}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    Within {employee && employee.plan && `${employee.plan.days1PLP}`} Days
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.withIn60PerPLP}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total6}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    Within {employee && employee.plan && `${employee.plan.days2PLP}`} Days
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.withIn90PerPLP}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total7}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    Within {employee && employee.plan && `${employee.plan.days3PLP}`} Days
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.withIn120PerPLP}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total8}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    Within {employee && employee.plan && `${employee.plan.days4PLP}`} Days
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.withIn150PerPLP}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total9}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    Within {employee && employee.plan && `${employee.plan.days5PLP}`} Days
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.withIn180PerPLP}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total10}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    Within {employee && employee.plan && `${employee.plan.days6PLP}`} Days
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.extraPerPLP1}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total11}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    Within {employee && employee.plan && `${employee.plan.days7PLP}`} Days
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.extraPerPLP2}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total12}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    Within {employee && employee.plan && `${employee.plan.days8PLP}`} Days
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.extraPerPLP3}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total13}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.restOnRegistryPerPLP}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total14}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    )}
                                                    {employee.paymentPlan === 'DLP' && (
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                    Basic price Rs.{employee && employee.plan && `${employee.plan.basicPriceDLP}`}/- per {employee && employee.plan && `${employee.plan.areaUnitDLP}`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>

                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    Amount
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                                                    On Booking
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.onBookingPerDLP}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total2}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    Within {employee && employee.plan && `${employee.plan.daysDLP}`} Days
                                                                </td>
                                                                <td style={{ padding: "5px 10px" }}>
                                                                    {employee && employee.plan && `${employee.plan.withIn30PerDLP}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total3}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {employee && employee.plan && `${employee.plan.restOnRegistryPerDLP}%`}
                                                                </td>
                                                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                    {total4}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    )}

                                                </table>
                                                <br />
                                                <p>
                                                    Basis the Agreement, a total sum of Rs.<span style={{ color: 'blue' }}> {employee && employee.applicant && `${employee.applicant.totalCost}`}</span>/- along with Interest of Rs. 00 is due and payable on account of Plot No. <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.unitNo}`}</span>. We request
                                                    you to deposit the above-stated sum in the below-mentioned bank account of the Firm or pay by cheque/Demand Draft in favour
                                                    of <span style={{ color: 'blue' }}>{employee && employee.project && `${employee.project.projectName}`}</span>,
                                                    payable at Noida towards the above-said by <span style={{ color: 'blue' }}>{employee.reminderDate}</span>.
                                                </p>
                                                <p>
                                                    <strong>Account Details:</strong><br />
                                                    Account Name: Webkype<br />
                                                    Bank Name: Webkype<br />
                                                    Branch Name: Gurgaon<br />
                                                    Account No.: 201002718904<br />
                                                    IFSC Code: INDB0000619
                                                </p>
                                                <p>
                                                    Therefore, we once again call upon you to pay a sum of Rs. 00/- (Zero) towards current dues on or before <span style={{ color: 'blue' }}>{employee.reminderDate}</span>.
                                                </p>
                                                <p>
                                                    Thanking you,<br />
                                                    For Webkype<br />
                                                    (Authorised Signatory)
                                                </p>
                                                <p>
                                                    <strong>Note:</strong>
                                                </p>
                                                <ol>
                                                    <li>
                                                        In case you fail to pay the above amount within the period mentioned above, it will tantamount to breach of the terms of the Agreement.
                                                    </li>
                                                    <li>
                                                        Kindly ensure to indicate your name, customer code <span style={{ color: 'blue' }}>({employee && employee.applicant && `${employee.applicant.ticketId}`})</span> and mobile number <span style={{ color: 'blue' }}>{employee.mobileNo} </span>on the reverse of the cheque/draft.
                                                    </li>
                                                    <li>
                                                        Kindly inform us regarding your address, telephone no., e-mail ID, if any.
                                                    </li>
                                                </ol>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td style={{ width: 50 }} />
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DemandNotice;
