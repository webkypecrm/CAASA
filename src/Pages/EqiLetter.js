import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EqiLetter = () => {
    const { empid } = useParams();
    const [isHovered, setIsHovered] = useState(false);
    const [employee, setEmployee] = useState({})
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const buttonStyle = {
        backgroundColor: isHovered ? '#555' : '#008CBA', // Change color on hover
        color: 'white',
        padding: '11px 30px', // Padding for the button
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '12px', // Font size
        margin: '5px', // Margin for spacing
        cursor: 'pointer',
        border: 'none',
        borderRadius: '8px', // Rounded corners
        boxShadow: '0 3px 7px 0 rgba(0, 0, 0, 0.2)', // Shadow effect
        transition: '0.3s',
        outline: 'none',
    };

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
                let response = await fetch(`${apiUrl}/applicant/getApplicantInfo/${empid}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${Token}`
                    },
                });
                let data = await response.json();

                if (data.status === "success") {
                    const formattedData = {
                        ...data.data,
                        formattedDates: data.data.createdAt ? formatDateTimes(data.data.createdAt) : null,

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
        <>
            <table
                width="800px"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                align="center"
                style={{ background: "#fff", fontFamily: "arial" }}
            >
                <tbody>
                    <Link
                        to="/eoi-list"
                        style={buttonStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Back
                    </Link>
                    <tr>
                        <td style={{ height: 30 }} />
                    </tr>

                    <tr>
                        <td align="center" colSpan={3}>
                            <a href="">
                                <img border={0} width={150} src="https://amrealty.webkype.com/assets/img/brand/logo.png" alt='' />
                            </a>


                        </td>
                    </tr>
                    <tr>
                        {" "}
                        <td>
                            <h3 style={{ textAlign: "center" }}>EARLY BIRD LETTER OF INTENT</h3>
                            <p style={{ textAlign: "center" }}>{employee && employee.project && `${employee.project.projectLocation}`}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ height: 10 }} />
                    </tr>
                    <tr>
                        <td>
                            <table
                                width="700px"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                align="center"
                                style={{
                                    background: "#fff",
                                    fontFamily: "arial",
                                    fontSize: 14,
                                    // lineHeight: 21
                                }}
                            >
                                <tbody>
                                    <div style={containerStyle}>

                                        <div style={rightSideStyle}>
                                            <p>Date :<span style={{ color: 'blue' }}> {employee.formattedDates} </span></p>
                                        </div>
                                    </div>
                                    <tr>

                                        <td rowSpan={2} style={{ padding: 10, width: "70%" }}>
                                            <h5 style={{ marginTop: 0, marginBottom: 2 }}>
                                                Dear Sir/Madam,
                                            </h5>
                                            <br />
                                            <p>
                                                I (<span style={{ color: 'blue' }}>{employee.applicantFirstName} {employee.applicantMiddleName} {employee.applicantLastName}</span>)  am interested in purchasing a unit(s) in your project <span style={{ color: 'blue' }}>{employee && employee.project && `${employee.project.projectName}`}</span> situated at <span style={{ color: 'blue' }}> {employee && employee.project && `${employee.project.projectLocation}`}
                                                </span>{" "}and being developed by AM Realty Group..
                                            </p>
                                            <p>
                                                I/We understand that the terms and conditions applicable in
                                                respect of the application/ allotment of the unit(s) in the
                                                Project at the time of release.
                                            </p>
                                            <p>
                                                I/We further understand and acknowledge that it is
                                                imperative to sign the application form containing the terms
                                                and conditions in relation to the booking/allotment of the
                                                unit(s) in order for our application to be eligible for
                                                allotment. I/We hereby confirm that I/We will sign and
                                                submit the application form as and when called upon by the
                                                Company to do so.
                                            </p>
                                            <p>
                                                I/We herewith deposit an amount of INR {" "}
                                                <span style={{ color: 'blue' }}>{employee && employee.projectsubscription && `${employee.projectsubscription.eoiPrice}`} </span>/- (Deposit) as a token of our interest
                                                in applying for allotment of a unit type in the Project by
                                                way of/vide: (Please tick the applicable option below)
                                            </p>
                                            <ul>
                                                {employee.paymentMethod === 'Online' && (
                                                    <>
                                                    <li>Payment Method Cash: Remark (<span style={{ color: 'blue' }}>{employee.cashRemark ? employee.cashRemark : 'N/A'}</span> )</li>
                                                    <li>
                                                    Payment Status:  (
                                                     <span style={{ color: 'blue' }}>
                                                         {employee.paymentStatus ? employee.paymentStatus : 'N/A'}
                                                     </span>
                                                     )
                                                 </li>
                                                 </>
                                                )}
                                                {employee.paymentMethod === 'Cash' && (
                                                    <>
                                                    <li>
                                                        Payment Method Online: Transaction id (
                                                        <span style={{ color: 'blue' }}>
                                                            {employee.transactionID ? employee.transactionID : 'N/A'}
                                                        </span>
                                                        )
                                                    </li>
                                                    <li>
                                                    Payment Status:  (
                                                     <span style={{ color: 'blue' }}>
                                                         {employee.paymentStatus ? employee.paymentStatus : 'N/A'}
                                                     </span>
                                                     )
                                                 </li>
                                                </>
                                                )}

                                                {employee.paymentMethod === 'Cheque' && (
                                                    <>
                                                    <li>Payment Method Cheque: Cheque No (<span style={{ color: 'blue' }}>{employee.chequeNo ? employee.chequeNo : 'N/A'}</span>){" "}
                                                        Cheque Date (<span style={{ color: 'blue' }}>{employee.chequeDate ? employee.chequeDate : 'N/A'}</span> ){" "} Cheque Details: Bank (<span style={{ color: 'blue' }}>{employee.chequeDetails ? employee.chequeDetails : 'N/A'}</span> )</li>
                                                         <li>
                                                         Payment Status:  (
                                                          <span style={{ color: 'blue' }}>
                                                              {employee.paymentStatus ? employee.paymentStatus : 'N/A'}
                                                          </span>
                                                          )
                                                      </li>
                                                      </>
                                                )}

                                            </ul>
                                            <h4 style={{ marginBottom: 10, marginTop: 40 }}>
                                                Priority Preferred.
                                            </h4>
                                            <ul>
                                                {employee && employee.projectsubscription && employee.projectsubscription.eoiType === 'SILVER' && (
                                                    <li>
                                                        <span style={{ color: 'blue' }}>
                                                            Silver- ({employee && employee.projectsubscription && `${employee.projectsubscription.eoiCode}`})  {employee && employee.projectsubscription && `${employee.projectsubscription.eoiTerms}`} ({employee && employee.projectsubscription && `${employee.projectsubscription.eoiPrice}`} Lac)
                                                        </span>
                                                    </li>
                                                )}

                                                {employee && employee.projectsubscription && employee.projectsubscription.eoiType === 'GOLD' && (
                                                    <li><span style={{ color: 'blue' }}>GOLD- ({employee && employee.projectsubscription && `${employee.projectsubscription.eoiCode}`})  {employee && employee.projectsubscription && `${employee.projectsubscription.eoiTerms}`} ({employee && employee.projectsubscription && `${employee.projectsubscription.eoiPrice}`}{" "}LAC)</span></li>
                                                )}

                                                {employee && employee.projectsubscription && employee.projectsubscription.eoiType === 'PLATINUM' && (
                                                    <li><span style={{ color: 'blue' }}>
                                                        PLATINUM- ({employee && employee.projectsubscription && `${employee.projectsubscription.eoiCode}`})  {employee && employee.projectsubscription && `${employee.projectsubscription.eoiTerms}`}
                                                        {" "}   ({employee && employee.projectsubscription && `${employee.projectsubscription.eoiPrice}`}{" "} LAC)
                                                    </span>
                                                    </li>
                                                )}
                                            </ul>
                                            <p>
                                                I/We hereby request you that at the time of allotment of the
                                                unit(s), the unit(s) is offered to us at the rates
                                                prevailing at that time.
                                            </p>
                                            <p>
                                                I/We further understand that in case, I/We are not willing
                                                to go ahead with the aforesaid proposal of buying the
                                                unit(s) at the Project prior to the signing of the
                                                application form, I/We will be eligible for a refund of the
                                                entire Deposits within 3 working days after forwarding
                                                Refund Request
                                            </p>
                                            <br />
                                            <br />
                                            <p>
                                                Yours Sincerely,
                                                <br />
                                                Applicant
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ height: 30 }} />
                    </tr>
                </tbody>
            </table>
        </>

    )
}

export default EqiLetter