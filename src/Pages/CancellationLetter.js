import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CancellationLetter = () => {
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
                        formattedDatess: data.data.lastDate ? formatDateTimes(data.data.lastDate) : null,
                        bbaDate: data.data.applicant.bba && data.data.applicant.bba.length > 0 ? formatDateTimes(data.data.applicant.bba[0].bbaDate) : null,
                        dates: data.data.applicant.demandLetter && data.data.applicant.demandLetter.length > 0 ? formatDateTimes(data.data.applicant.demandLetter[0].dates) : null,
                        reminderDate: data.data.inventoryFollowUp.reminderDate ? formatDateTimes(data.data.inventoryFollowUp.reminderDate) : null,
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
                            <h5>CANCELLATION LETTER</h5>
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
                                                Sub: Notice for Cancellation of Allotment for Unit No. <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.unitNo}`}</span> Royal Paradise
                                            </p>
                                            <p>
                                                Ref: (1) Builder Buyer Agreement (“Agreement”) <span style={{ color: 'blue' }}>{employee.bbaDate}</span> entered
                                                into between yourself and Webkype (hereinafter “Partnership Firm”)
                                            </p>
                                            <p>(2) Our Demand letter dated <span style={{ color: 'blue' }}>{employee.dates}</span> (mention the 2nd letter of demand)</p>
                                            <p>
                                                Dear Mr.  <span style={{ color: 'blue' }}>{employee.name}</span>,
                                            </p>
                                            <div style={{ fontFamily: 'Arial, sans-serif' }}>
                                                <p>
                                                    We write to you with reference to the demand letter mentioned hereinabove vide which the
                                                    Firm had requested you to make the payment of Rs. <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.totalCost}`}</span>/-  towards Plot No. <span style={{ color: 'blue' }}>{employee && employee.applicant && `${employee.applicant.unitNo}`}</span>  in Project <span style={{ color: 'blue' }}>{employee && employee.project && `${employee.project.projectName}`}</span>. In spite of the
                                                    repeated requests, reminders and regular follow-ups demanding the payment that was due from
                                                    your end, you have chosen to wilfully and/or deliberately fail, neglect and refuse to make the
                                                    payment of the outstanding dues arising from the Agreement despite knowing fully well that
                                                    failure to make timely payments will tantamount to gross breach/default in due performance
                                                    and observance of the terms and conditions of the Agreement.
                                                </p>
                                                <p>
                                                    Kindly take note that you were bound, liable and obliged to forthwith make payment of the
                                                    amount demanded by the Firm. Your non-adherence to the terms and conditions of the Agreement
                                                    has authorized the Firm to cancel the allotment of your booking. Furthermore, as per Clause 27
                                                    of the Agreement such an act is deemed to be an event of default liable for consequences stipulated
                                                    in the Agreement and upon the occurrence of event(s) of default under the Agreement, the Partnership
                                                    Firm, at its sole discretion, reserves the right to cancel this Agreement by giving you this notice
                                                    of thirty (15) days from the date of issue of this notice to rectify the default. In default of the
                                                    above, this Agreement shall stand cancelled without any further notice or intimation. The Firm has
                                                    the right to retain the Earnest Money along with the interest on delayed payments, any interest paid,
                                                    due or payable, and any other amount of a non-refundable nature.
                                                </p>
                                                <p>
                                                    On cancellation of this Agreement, you shall have no right or interest on the Said Plot/farmhouse/shop and the Firm shall be discharged of all liabilities and obligations under this Agreement and the Firm shall have the right to sell or deal with the Said Plot in the manner in which it may deem fit as if the Agreement had never been executed. The refund, if any, shall be refunded by
                                                    the Firm by registered post only after realizing the amount on further sale/resale to any other party and without any interest or compensation whatsoever to you.
                                                </p>
                                                <p>
                                                    Also note that this will be without prejudice to any other remedies and rights of the Partnership Firm to claim other liquidated damages which the Firm might have suffered due to such breach committed by you.
                                                </p>
                                                <p>
                                                    Looking forward to your response of rectifying the default within the stipulated time that is <span style={{ color: 'blue' }}>{employee.reminderDate}</span>, post which no further correspondence in this respect will be given by the Firm.
                                                </p>
                                                <p>
                                                    Thanking you,<br />
                                                    For Webkype<br />
                                                    (Authorised Signatory)
                                                </p>
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

export default CancellationLetter;
