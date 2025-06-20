
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const DemandLatterView = () => {
    const { empid } = useParams();

    const [formData, setFormData] = useState({});
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [contentPrinted, setContentPrinted] = useState(false);
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    async function getEmppps() {
        const url = `${apiUrl}/letter/getDemandLetter/${empid}`;
        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`
            },
        });
        response = await response.json();

        if (response.status === "success") {
            setFormData(response.data);
        }
    }


    useEffect(() => {
        getEmppps();
    }, [empid]);

    useEffect(() => {
        const updateDateTime = () => {
            setCurrentDateTime(new Date());
        };

        // Set an interval to update the date and time every minute
        const intervalId = setInterval(updateDateTime, 60 * 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = currentDateTime.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    const loadContent = () => {

        window.print();
        setContentPrinted(true);
    };



    return (
        <div>
            <div style={{ background: "#fff", margin: 0, padding: "50px 0" }}>
                <table
                    align="center"
                    width={900}
                    border={0}
                    cellSpacing={0}
                    cellPadding={0}
                    style={{
                        background: "#fff",
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: 13,
                        borderRadius: 15
                    }}
                >
                    <tbody>
                        <button
                            onClick={() => loadContent()}
                            title="Print"
                            className="hide-on-print"
                            style={{
                                cursor: 'pointer',
                                border: 'none',
                                backgroundColor: 'transparent',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                color: '#333',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginLeft: '10px',
                                marginTop: '5px'
                            }}
                        >
                            Print
                        </button>


                        <style>{`
                @media print {
                    .hide-on-print {
                        display: none !important;
                        marginTop: '-60px'
                    }
                }
            `}</style>
                        <tr>
                            <td colSpan={3} style={{ height: 160 }} />
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
                                                <p >
                                                    Subject:{" "}
                                                    <strong >{formData.subject}</strong>
                                                </p>

                                                <span>Date: <strong>{formattedDate}</strong></span>
                                                <p >
                                                    Dear Mr/Ms/Mrs:{" "}
                                                    <strong>{formData.name}</strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ height: 20 }} />
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Greetings from Webkype!!!!!</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                    This is to notify you that the following payment is due as
                                                    per the allotment of Plot/Farm House under {" "}<strong>{formData.schemeName}</strong>  {" "}

                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '10px', paddingLeft: '0px' }}>
                                                <table
                                                    align="center"
                                                    width="100%"
                                                    style={{ borderCollapse: 'collapse', borderRadius: '5px', backgroundColor: '#fff' }}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ padding: '10px', border: '1px solid black' }}>Project Name:</td>
                                                            <td style={{ padding: '10px', border: '1px solid black' }}> <strong>{formData.projectName}</strong></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ height: 30 }} />
                                        </tr>
                                        {/* <tr>
                                            <td>
                                                <h4 style={{ marginTop: 0, marginBottom: 10 }}>
                                                    Brief details about the total cost of the unit and payment
                                                    plan are as follows:
                                                </h4>
                                            </td>
                                        </tr> */}
                                        <tr>
                                            <td>
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
                                                            <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Client Name</th>
                                                            <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Allotted Unit</th>
                                                            <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Area({formData.applicant?.schemeType})</th>
                                                            <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Payment Plan</th>
                                                            <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Basic Sales Price (Per {formData.applicant?.schemeType === 'Plot' || formData.applicant?.schemeType === 'Farmhouse'
                                                                ? 'SQYD'
                                                                : formData.applicant?.schemeType === 'Shop'
                                                                    ? 'SQ FT'
                                                                    : ''})</th>
                                                            <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>EDC/IDC (Per {formData.applicant?.schemeType === 'Plot' || formData.applicant?.schemeType === 'Farmhouse'
                                                                ? 'SQYD'
                                                                : formData.applicant?.schemeType === 'Shop'
                                                                    ? 'SQ FT'
                                                                    : ''})</th>
                                                            <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>PLC (in %)</th>
                                                            <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Total Cost</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                <strong>{formData.clientName}</strong>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                <strong>{formData.allotmentUnit}</strong>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                <strong>{formData.applicant?.area} {" "}
                                                                    {formData.applicant?.schemeType === 'Plot' || formData.applicant?.schemeType === 'Farmhouse'
                                                                        ? 'SQYD'
                                                                        : formData.applicant?.schemeType === 'Shop'
                                                                            ? 'SQ FT'
                                                                            : ''}
                                                                </strong>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                <strong>{formData.paymnetPlan}</strong>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                <strong >{formData.basicSalesPrice}</strong>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                <strong>{formData.fixedCharges}</strong>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                <strong>{formData.plc}</strong>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}> </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }} colSpan={4}></td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                <strong>{formData.basicSalesPriceAmount}</strong>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                <strong>{formData.fixedChargesAmount}</strong>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                <strong>{formData.plcAmount}</strong>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                                <strong>{formData.totalCost}</strong>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ height: 30 }} />
                                        </tr>
                                        <tr>
                                            <td>
                                                <h4 style={{ marginTop: 0, marginBottom: 10 }}>
                                                    PAYMENT DEMAND
                                                </h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table
                                                    align="center"
                                                    width="100%"
                                                    border={1}
                                                    cellSpacing={0}
                                                    cellPadding={0}
                                                    style={{ borderCollapse: "collapse", border: "1px solid black" }}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                style={{
                                                                    padding: "5px 10px",
                                                                    width: "60%",
                                                                    border: "1px solid black",
                                                                }}
                                                            >
                                                                Amount Paid (Rs.):
                                                            </td>
                                                            <td
                                                                style={{
                                                                    padding: "5px 10px",
                                                                    border: "1px solid black",
                                                                }}
                                                            >
                                                                <strong>{formData.amountPaid} {formData.totolReceived}</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style={{
                                                                    padding: "5px 10px",
                                                                    border: "1px solid black",
                                                                }}
                                                            >
                                                                Payment Due (Demand) as per Payment Plan:
                                                            </td>
                                                            <td
                                                                style={{
                                                                    padding: "5px 10px",
                                                                    border: "1px solid black",
                                                                }}
                                                            >
                                                                <strong>{formData.paymentDue}</strong>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td style={{ height: 20 }} />
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                    In accordance with the terms of the allotment, due payment
                                                    need to be paid before{" "}
                                                    <strong>
                                                        {new Date(formData.duePaymentDate).toLocaleDateString("en-GB", {
                                                            day: "2-digit",
                                                            month: "long",
                                                            year: "numeric",
                                                        })}
                                                    </strong>


                                                </p>
                                                <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                    {" "}
                                                    You are requested to make the due payment by

                                                    Demand Draft/
                                                    Cheque drawn in favour of “<strong>{formData.applicant?.project?.bankAccount?.accountName}</strong>” at the
                                                    earliest.
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ height: 20 }} />
                                        </tr>
                                        <tr>
                                            <td>
                                                <h4 style={{ marginTop: 0, marginBottom: 10 }}>
                                                    You can also transfer payment online using Bank details as
                                                    follows:
                                                </h4>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <p>
                                                    <b>Bank Details</b>
                                                    <br />
                                                    <strong>Title:</strong> {formData.applicant?.project?.bankAccount?.title}
                                                    <br />
                                                    <strong>Account Name:</strong> {formData.applicant?.project?.bankAccount?.accountName}
                                                    <br />
                                                    <strong> Account Number:</strong> {formData.applicant?.project?.bankAccount?.accountNumber}
                                                    <br />
                                                    <strong>Bank Name:</strong> {formData.applicant?.project?.bankAccount?.bankName}
                                                    <br />
                                                    <strong>Branch:</strong> {formData.applicant?.project?.bankAccount?.branch}
                                                    <br />
                                                    <strong>IFSC:</strong> {formData.applicant?.project?.bankAccount?.ifsc}

                                                </p>
                                                <br />
                                                <td>
                                                    <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                        {" "}
                                                        Note: With effect from{" "}
                                                        <strong>
                                                            {new Date(formData.noteDate).toLocaleDateString("en-GB", {
                                                                day: "2-digit",
                                                                month: "long",
                                                                year: "numeric",
                                                            })}
                                                        </strong>
                                                        {" "}
                                                        , an interest of @{" "}
                                                        <strong>{formData.interest}</strong>{" "}
                                                        % p.a compounded quarterly shall be payable on all delayed
                                                        payments.
                                                    </p>
                                                    <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                        All Payments will be updated on Mobile APP/WEB.
                                                    </p>
                                                    <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                        Thanking you &amp; assuring you of our best services always.
                                                    </p>
                                                </td>
                                                <br />
                                                <p>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <b>With Best Regards</b>
                                                    <br />
                                                    Apoorva Srivastava
                                                    <br />
                                                    Accounts Manager
                                                    <br />
                                                    Landline: 0120-4547484
                                                </p>
                                                <br />
                                                <br />
                                                <br />
                                                <br />





                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style={{ width: 30 }} />
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default DemandLatterView
