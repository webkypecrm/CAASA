import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlanChange = () => {
    const { empid } = useParams();
    const [employee, setEmployee] = useState({})
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");
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

    useEffect(() => {
        async function getEmp() {
            try {
                let response = await fetch(`${apiUrl}/applicant/getReminderLetter?applicantId=${empid}`, {
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
                        formattedDatess: data.data.inventoryFollowUp.reminderDate ? formatDateTimes(data.data.inventoryFollowUp.reminderDate) : null,

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
        <div>
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
                                <h5>REMINDER LETTER 2</h5>
                                <h6 style={{ textDecoration: 'underline', color: 'blue', fontWeight: 'bold' }}>
                                    Plan Change
                                </h6>
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
                                        <div style={containerStyle}>

                                            <div style={rightSideStyle}>
                                                <p>Date : {employee.formattedDates} </p>
                                            </div>
                                        </div>
                                        <tr>
                                            <p>
                                                Dear Ms. <b>{employee.name}</b>,
                                            </p>
                                            <br />

                                            <div style={{ fontFamily: 'Arial, sans-serif' }}>
                                                <p>
                                                    Greetings from Webkype!!!
                                                </p>
                                                <p>
                                                    This is to inform you that after multiple follow-ups we have still not received your payment against your <strong>
                                                        {employee.schemeType} No. B-{employee.unitNo} in {employee && employee.scheme && `${employee.scheme.schemeName}`}.
                                                    </strong>
                                                </p>
                                                <p>
                                                    Inform to you that we have changed your payment plan from under India's Smart City & Tourism Development Plan to Market Payment Plan, which is reflected in your app as well.
                                                </p>
                                                <p>
                                                    As per Market payment plan your plot value is<b> Rs. {employee.amount}/-</b> for each Plot.
                                                </p>
                                                <p>
                                                    Kindly make the payment till <b>{employee.formattedDatess}</b>, otherwise your plot will be cancelled and the paid amount will be forfeited too as per allotment terms & conditions.
                                                </p>
                                                <br />
                                                <br />
                                                <br />
                                                <p>
                                                    Thanks & Regards
                                                    <br />
                                                    CRM Department.
                                                </p>
                                            </div>
                                        </tr>

                                    </tbody>
                                </table>
                            </td>
                            <td style={{ width: 50 }} />
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default PlanChange