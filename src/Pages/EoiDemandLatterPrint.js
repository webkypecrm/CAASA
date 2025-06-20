import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../assets/approva-signature.jpg'



const EoiDemandLatterPrint = () => {

    const [contentPrinted, setContentPrinted] = useState(false);
    const { empid, empid1 } = useParams();
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [demandLetter, setDemandLetter] = useState({})
    const location = useLocation();
    const { dueDate, showExtendedDue, dueDates, amountInWords } = location.state || {};



    useEffect(() => {
        async function getDemand() {
            const url = `${apiUrl}/eoi/singleEoiPaymentSchedule?applicantId=${empid1}&scheduleId=${empid}`;
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            });
            response = await response.json();

            if (response.status === "success") {
                setDemandLetter(response.data);
            }
        }

        getDemand();
    }, []);


    const formattedDate = new Date(demandLetter?.eoiApplicant?.allocatedDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });


    const formattedDatess = currentDateTime.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    const loadContent = () => {
        window.print();
        setContentPrinted(true);
    };


    const formattedDateFormat = dueDate
        ? new Date(dueDate).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        })
        : "No due date provided";

    return (
        <>

            <div className="page">


                <div style={{ background: "#fff", margin: 0, padding: "200px 100px" }}>
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
                            borderRadius: 15,
                            padding: "20px",

                            position: "relative",
                        }}
                    >
                        {/* Button container with Flexbox */}
                        <div style={{ marginBottom: '15px', marginRight: '-140px' }}>
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
                                    marginTop: '5px',
                                }}
                            >
                                Print
                            </button>
                        </div>

                        {/* Print media query */}
                        <style>{`
            @media print {
                .hide-on-print {
                    display: none !important;
                }
            }
        `}</style>

                        <tbody>
                            <tr>
                                <td style={{ width: "5%" }} />
                                <td style={{ padding: "0 5%" }}>
                                    <h4 style={{ textAlign: "center", marginTop: "20px", marginBottom: "10px" }}>DEMAND LETTER – 1 </h4>
                                    <p>Date: <span style={{ color: "#007bff" }}>{formattedDatess}</span></p>
                                    <p>
                                        Mr/Mrs/Ms. {demandLetter?.eoiApplicant?.fullName || 'N/A'}<br />
                                        {demandLetter?.eoiApplicant?.applicantAddress || 'N/A'},<br />
                                        {demandLetter?.cityName}-{demandLetter?.eoiApplicant?.applicantPincode || 'N/A'}
                                        <br />
                                        {demandLetter?.stateName || 'N/A'}-{demandLetter?.countryName}
                                        <br />
                                        Contact No: {demandLetter?.eoiApplicant?.applicantMobile || 'N/A'}
                                    </p>
                                    <p style={{ marginTop: "15px" }}>
                                        Sub: Demand against your <b>Unit No. {demandLetter?.eoiApplicant?.unitNo || 'N/A'}</b> in <b>“{demandLetter?.projectName || 'N/A'}”</b> as per schedule.
                                    </p>
                                    <p>Dear Sir/ Ma’am,</p>
                                    <p style={{ marginTop: "0" }}>
                                        We refer to your application form/ allotment agreement executed between us dated <b>{formattedDate}</b> with specific reference
                                        to payment plan in respect to the said unit. As per the application form/ allotment agreement, you are hereby called upon to pay Rs.
                                        <b>{dueDates}</b>/- ({amountInWords} Rupees Only) by{" "}
                                        <b>{formattedDateFormat}</b> {showExtendedDue && <span>Extended due date</span>}
                                        .
                                    </p>
                                    <p>
                                        We urge you to clear the total payable amount mentioned above immediately to avoid accrual of interest/penal consequences as provided under the application form/allotment agreement.
                                    </p>
                                    <p>If you have made the above payment, kindly furnish us with the details to update our records.</p>
                                    <p>
                                        Please make the payment by Demand Draft/Cheque drawn in favor of “{demandLetter?.eoiApplicant?.project?.company?.companyName || 'Maheshwari Oxygen Private Limited'}” or transfer the payment online using the following bank details:
                                    </p>
                                    <p style={{ marginLeft: "15px" }}>
                                        <b>Account Name:</b> {demandLetter?.eoiApplicant?.project?.company?.companyBank[0]?.bankAccount?.accountName || 'Maheshwari Oxygen Private Limited'}<br />
                                        <b>Account Number:</b> {demandLetter?.eoiApplicant?.project?.company?.companyBank[0]?.bankAccount?.accountNumber || '9346345325'}<br />
                                        <b>Bank Name:</b> {demandLetter?.eoiApplicant?.project?.company?.companyBank[0]?.bankAccount?.bankName || 'Kotak Mahindra BANK'}<br />
                                        <b>Branch:</b> {demandLetter?.eoiApplicant?.project?.company?.companyBank[0]?.bankAccount?.branch || 'SECTOR-51, NOIDA'}<br />
                                        <b>IFSC:</b>  {demandLetter?.eoiApplicant?.project?.company?.companyBank[0]?.bankAccount?.ifsc || 'KKBK0000154'} 
                                    </p>
                                    <p>
                                        All Payments will be updated on Mobile APP/WEB. For assistance, contact us at {" "}
                                        <b>customersupport2@amrealtysolutions.in</b> / <b>info@amrealtysolutions.in</b> or call <b>0120-4547484</b>.
                                    </p>
                                    <p style={{ marginTop: "30px" }}>
                                        Thanking You,<br />
                                        Yours truly,<br />
                                        <b>For {demandLetter?.eoiApplicant?.project?.company?.companyName || 'Maheshwari Oxygen Private Limited'}</b>
                                    </p>
                                    <a href={img} target="_blank" rel="noopener noreferrer" style={{ marginTop: "20px" }}>
                                        <img src={img} alt="Authorized Signatory" width="150" style={{ display: "block", margin: "20px 0" }} />
                                    </a>
                                    <p>Authorized Signatory</p>
                                    <p>PAN No: AAECM9103F<br />CIN No: U24111UP1998PTC024059</p>
                                </td>
                                <td style={{ width: "5%" }} />
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </>

    )
}

export default EoiDemandLatterPrint





