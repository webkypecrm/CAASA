import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FinalDemandNotice = () => {
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
                        fat: data.data.applicant.demandLetter && data.data.applicant.demandLetter.length > 0 ? formatDateTimess(data.data.applicant.demandLetter[0].dates) : null,
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
                            <h5>FINAL DEMAND NOTICE</h5>
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
                                                Ref: 01/2023/
                                                <br />
                                                Customer Code: <span  style={{ color: 'blue' }}> {employee && employee.applicant && `${employee.applicant.ticketId}`}</span>

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
                                                Sub: Registry pending and payment request for Rs.  <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.totalCost}`}</span>  along with Interest Charges Rs. 00 in respect of your booking of Plot No. <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.unitNo}`}</span> area tentatively admeasuring <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.size}`} </span>
                                                sq.yds in our Project “<span style={{ color: 'blue' }}>{employee && employee.project && `${employee.project.projectName}`}</span>” situated in <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.applicantAddress}`}</span>.
                                            </p>
                                            <p>
                                                Ref: Builder Buyer Agreement (“Agreement”) dated <span style={{ color: 'blue' }}>{employee.bbaDate}</span> entered into between yourself and AM Realty Solutions (hereinafter “Partnership Firm”)
                                            </p>
                                            <p>
                                                Dear Sir,
                                            </p>
                                            <div style={{ fontFamily: 'Arial, sans-serif' }}>
                                                <p>
                                                    This refers to your booking of the above-mentioned plot in our project “<span style={{ color: 'blue' }}>{employee && employee.project && `${employee.project.projectName}`} </span>” in <span style={{ color: 'blue' }}>
                                                    {employee && employee.applicant && `${employee.applicant.applicantAddress}`}
                                                </span>. Our team had intimated you on <span style={{ color: 'blue' }}>{employee.fa}</span> through Registered Post and email regarding the opening of Registry and had requested you to complete your registration process as per the payment plan.
                                                </p>
                                                <p>
                                                    Basis the Agreement, a total sum of Rs. <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.totalCost}`}</span>/- along with Interest of Rs. 00/- was due and payable on account of Plot No.: <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.unitNo}`}</span>. We have still not received the pending payment till date and neither have you initiated the registration process of your plot.
                                                </p>
                                                <p>
                                                    We, again, request you to deposit the due amount before <span style={{ color: 'blue' }}>{employee.reminderDate}</span>, failing which the Firm will have no other option but to cancel your Allotment and forfeit the amount as per the Builder Buyer Agreement.
                                                </p>
                                                <p>
                                                    We request you again to kindly pay the due amount and initiate your Registration process of the Plot in order to enjoy investment benefits.
                                                </p>
                                                <p>
                                                    The payment is to be made in the below-mentioned bank account of the Firm either by cheque/Demand Draft in favour of <span style={{ color: 'blue' }}>{employee && employee.project && `${employee.project.projectName}`}</span>, payable at Noida towards the above-said by <span style={{ color: 'blue' }}>{employee.reminderDate}</span>.
                                                </p>
                                                <p>
                                                    Account Name: AM Realty Solutions<br />
                                                    Bank Name: AM Realty Solutions<br />
                                                    Branch Name: Gurgaon<br />
                                                    Account No.: 201002718904<br />
                                                    IFSC Code: INDB0000619
                                                </p>
                                                <p>
                                                    Therefore, we once again call upon you to pay a sum of Rs. 00/- (Zero) towards current dues on or before <span style={{ color: 'blue' }}>{employee.reminderDate}</span>.
                                                </p>
                                                <p>
                                                    Thanking you,<br />
                                                    For AM Realty Solutions<br />
                                                    (Authorised Signatory)
                                                </p>
                                                <p>
                                                    Note:
                                                </p>
                                                <ol>
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

export default FinalDemandNotice;
