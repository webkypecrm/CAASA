import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllotmentLetterPrint = () => {
    const { empid } = useParams();
    const navigate = useNavigate();
    const initialFormData = {

        applicantFirstName: '',
        applicantMiddleName: '',
        applicantLastName: '',
        applicantFatherName: '',
        applicantEmail: '',
        applicantMobile: '',
        applicantAlternateNumber: '',
        applicantCountry: '',
        applicantState: '',
        applicantCity: "",
        applicantAddress: '',
        applicantDOB: '',
        applicantAadhaarNumber: "",
        applicantAadhaarImage: "",
        applicantPAN: "",
        applicantPanImage: "",
        applicantNationality: "",
        applicantProfession: "",
        coApplicantFirstName: "",
        coApplicantMiddleName: "",
        coApplicantLastName: "",
        coApplicantFatherName: " ",
        coApplicantEmail: "",
        coApplicantMobile: "",
        coApplicantAlternateNumber: "",
        coApplicantCountry: "",
        coApplicantState: "",
        coApplicantCity: "",
        coApplicantAddress: "",
        coApplicantDOB: "",
        coApplicantAadhaarNumber: "",
        coApplicantAadhaarImage: "",
        coApplicantPAN: "",
        coApplicantPanImage: "",
        coApplicantNationality: "",
        coApplicantProfession: "",
        projectId: '',
        schemeId: '',
        planId: '',
        drawSchemeAmount: '',
        advisorId: '',
        sizeType: "",
        others: "",
        amountReceived: "",
        paymentStatus: "",
        paymentMethod: "",
        transactionID: "",
        applicantImage: "",
        coApplicantImage: "",

        applicantPincode: '',
        applicantLandMark: '',
        coApplicantPincode: '',
        coApplicantLandMark: '',

        shipPlotFarmNo: '',
        registrationAmount: '',
        area: '',

        bsp: '',
        fixedCharges: '',
        PLCs: '',
        totalCost: '',

        cashRemark: '',
        chequeNo: '',
        chequeDetails: '',
        chequeDate: '',

        schemeType: '',
        unitNo: '',
        gift: '',
        paymentPlan: '',
        PLCsValue: '',

    };


    const [formData, setFormData] = useState(initialFormData);
    const [profilePic, setProfilePic] = useState(null);
    const [profilePic2, setProfilePic2] = useState(null);
    const [contentPrinted, setContentPrinted] = useState(false);

    const formatDateee = (date) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options).replace(/ /g, '-');
    };

    const [currentDate, setCurrentDate] = useState(formatDateee(new Date()));
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '14px',
        margin: '4px',
        cursor: 'pointer',
        borderRadius: '8px',
        position: 'relative',
        left: '10px',
        transition: 'background-color 0.3s ease, transform 0.3s ease'
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(formatDateee(new Date()));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    async function handleSubmit() {
        const url = `${apiUrl}/eoi/addAllotmentLetter?applicantId=${empid}`;

        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        });
        response = await response.json();

        if (response.status === "success") {
            toast.success(response.message);

        }
        else {
            toast.error(response.message);
        }
    }


    const allocatedDate = new Date(formData.allocatedDate);
    const formattedDate = allocatedDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });


    useEffect(() => {
        const fetchUser = async () => {
            const Token = localStorage.getItem('Token');
            try {
                const url = `${apiUrl}/eoi/getApplicantInfo/${empid}`;
                const result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                const { data } = await result.json();

                setProfilePic(data.applicantImage);
                setProfilePic2(data.coApplicantImage);

                setFormData((prevFormData) => ({
                    ...prevFormData,
                    ...data,
                }));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUser();
    }, [apiUrl, empid]);

    const loadContent = (empid) => {
        // Hide the button when printing
        const button = document.querySelector('button[title="Print"]');
        if (button) {
            button.classList.add('hide-on-print');
        }

        // Call window.print() to print the content
        window.print();
        setContentPrinted(true);
    };




    return (
        <div className="page">


            <div style={{ background: "white", margin: 0, padding: "50px 0" }}>
                <table
                    align="center"
                    width={800}
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

                        <button onClick={() => loadContent(empid)} title="Print" style={{
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
                        }}>
                            Print
                        </button>
                        {/* CSS class to hide the button when printing */}
                        <style>{`
                @media print {
                    .hide-on-print {
                        display: none !important;
                    }
                }
            `}</style>
                        <tr>
                            <td colSpan={3} style={{ height: 20 }}>
                                &nbsp;
                            </td>
                        </tr>
                        <br />
                        <br />
                        <br />
                        <br />


                        <tr>

                        </tr>


                        <tr>
                            <td style={{ width: 50 }}>&nbsp;</td>

                            <td style={{ textAlign: "center" }}>
                                <p style={{ marginTop: 0 }}>
                                    <h3>ALLOTMENT LETTER</h3>
                                    <h4>{formData?.project?.projectName || 'DHANAULTI HEIGHTS'}</h4>

                                    <br />
                                    8th Floor, Magnus Tower, Sector-73, Noida- 201307 Up
                                    <br />
                                    Website:- www.amrealtysolutions.com, Email:-
                                    info@amrealtysolutions.com
                                </p>
                                <h3 style={{ margin: 0 }}>Personal and Booking Details</h3>
                            </td>
                            <td style={{ width: 50 }}>&nbsp;</td>
                        </tr>
                        <tr>
                            <td style={{ width: 50 }}>&nbsp;</td>
                            <td style={{ height: 20 }}>
                                <hr />
                            </td>
                            <td style={{ width: 50 }}>&nbsp;</td>
                        </tr>

                        <tr>

                            <td style={{ width: 50 }}>&nbsp;</td>
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
                                            <td style={{ height: 30 }}>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                <span
                                                    style={{
                                                        background: "#0158a9",
                                                        color: "#fff",
                                                        padding: "7px 15px",
                                                        borderRadius: 5
                                                    }}
                                                >
                                                    APPLICANT
                                                </span>{" "}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ height: 30 }} />
                                        </tr>
                                        <tr>
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
                                                                <span style={{ color: "#847f7f" }}>Name :</span>
                                                                <br />
                                                                {`${formData.applicantFirstName || 'N/A'} ${formData.applicantMiddleName} ${formData.applicantLastName}`}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>S/W/DO. :</span>
                                                                <br />
                                                                {formData.applicantFatherName || 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>Photo :</span>
                                                                <br />
                                                                <img
                                                                    alt="No Photo"
                                                                    className="rounded-circle me-3"
                                                                    src={profilePic || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                    style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '50%' }}
                                                                />
                                                                {" "}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ height: 20 }} colSpan={3} />
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>
                                                                    Phone/Mobile :
                                                                </span>
                                                                <br />
                                                                {formData.applicantMobile || 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>
                                                                    Date of Birth :
                                                                </span>
                                                                <br />
                                                                {formData.applicantDOB || 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>
                                                                    Nationality :
                                                                </span>
                                                                <br />
                                                                {formData.applicantNationality || 'N/A'}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ height: 20 }} colSpan={3} />
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>Pan No. :</span>
                                                                <br />
                                                                {formData.applicantPAN || 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>Profession :</span>
                                                                <br />
                                                                {formData.applicantProfession || 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>Email Id :</span>
                                                                <br />
                                                                {formData.applicantEmail || 'N/A'}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ height: 20 }} colSpan={3} />
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>Aadhaar No :</span>
                                                                <br />
                                                                {formData.applicantAadhaarNumber || 'N/A'}
                                                            </td>
                                                            <td colSpan={2}>
                                                                <span style={{ color: "#847f7f" }}>Address :</span>
                                                                <br />
                                                                {formData.applicantAddress || 'N/A'}
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
                                            <td colSpan={3}>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ height: 30 }} />
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                <span
                                                    style={{
                                                        background: "#0158a9",
                                                        color: "#fff",
                                                        padding: "7px 15px",
                                                        borderRadius: 5
                                                    }}
                                                >
                                                    CO-APPLICANT
                                                </span>{" "}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ height: 30 }} />
                                        </tr>
                                        <tr>
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
                                                                <span style={{ color: "#847f7f" }}>Name :</span>
                                                                <br />
                                                                {formData.coApplicantFirstName}  {formData.coApplicantMiddleName}  {formData.coApplicantLastName}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>S/W/DO. :</span>
                                                                <br />
                                                                {formData.coApplicantFatherName || 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>Photo :</span>
                                                                <br />
                                                                <img
                                                                    alt="No Photo"
                                                                    className="rounded-circle me-3"
                                                                    src={profilePic2 || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                    style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '50%' }}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ height: 20 }} colSpan={3} />
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>
                                                                    Phone/Mobile :
                                                                </span>
                                                                <br />
                                                                {formData.coApplicantMobile || 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>
                                                                    Date of Birth :
                                                                </span>
                                                                <br />
                                                                {formData.coApplicantDOB || 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>
                                                                    Nationality :
                                                                </span>
                                                                <br />
                                                                {formData.coApplicantNationality || 'N/A'}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ height: 20 }} colSpan={3} />
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>Profession :</span>
                                                                <br />
                                                                {formData.coApplicantProfession || 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>Email Id :</span>
                                                                <br />
                                                                {formData.coApplicantEmail || 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>Aadhaar No :</span>
                                                                <br />
                                                                {formData.coApplicantAadhaarNumber || 'N/A'}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ height: 20 }} colSpan={3} />
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>PAN No :</span>
                                                                <br />
                                                                {formData.coApplicantPAN || 'N/A'}
                                                            </td>
                                                            <td colSpan={3}>
                                                                <span style={{ color: "#847f7f" }}>Address :</span>
                                                                <br />
                                                                {formData.coApplicantAddress || 'N/A'}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ height: 50 }} />
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                <span
                                                    style={{
                                                        background: "#0158a9",
                                                        color: "#fff",
                                                        padding: "7px 15px",
                                                        borderRadius: 5
                                                    }}
                                                >
                                                    BOOKING DETAILS
                                                </span>{" "}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ height: 30 }} />
                                        </tr>
                                        <tr>
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
                                                                <span style={{ color: "#847f7f" }}>Area(Sq.yd)</span>
                                                                <br />
                                                                {formData.inventory?.size || 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>Unit No :</span>
                                                                <br />
                                                                {formData.inventory?.unitNo || 'N/A'}
                                                            </td>


                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>Payment Plan :</span>
                                                                <br />
                                                                <span >
                                                                    {formData.paymentPlan === 'SP' ? 'SUPER PLAN' : ''}
                                                                </span>
                                                                <span >
                                                                    {formData.paymentPlan === 'PLP' ? 'POSSESSION LINK PLAN' : ''}
                                                                </span>
                                                                <span >
                                                                    {formData.paymentPlan === 'DLP' ? 'DOWN PAYMENT PLAN' : ''}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>
                                                                    Received Amount :
                                                                </span>
                                                                <br />
                                                                {formData.totolReceived || 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span style={{ color: "#847f7f" }}>Total Due</span>
                                                                <br />
                                                                {formData.dueAmount}
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td style={{ height: 20 }} colSpan={3} />
                                                        </tr>
                                                        <tr>




                                                            <td style={{ height: 20 }} colSpan={3} />
                                                        </tr>


                                                        <tr>


                                                            <td />
                                                            <td />
                                                        </tr>
                                                        <tr>


                                                            <td />
                                                            <td />
                                                        </tr>
                                                        <tr>


                                                            <td />
                                                            <td />
                                                        </tr>
                                                        <tr>


                                                            <td />
                                                            <td />
                                                        </tr>


                                                    </tbody>
                                                </table>
                                            </td>

                                        </tr>




                                    </tbody>
                                </table>


                            </td>



                            <td style={{ width: 50 }}>&nbsp;</td>
                        </tr>

                        <tr>
                            <td colSpan={3} style={{ height: 20 }} />
                        </tr>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />



                        <tr>
                            <td style={{ width: 50 }}>&nbsp;</td>
                            <td style={{ fontSize: 12 }}>
                                <ul style={{ margin: 0 }}>
                                    <table
                                        style={{
                                            width: '100%',
                                            margin: '20px auto',
                                            textAlign: 'center',
                                            borderCollapse: 'collapse',
                                            fontFamily: 'Roboto, Arial, sans-serif', // Professional font
                                            fontSize: '14px', // Font size for readability
                                            color: '#333', // Darker text color for professional appearance
                                            marginTop: '50px'
                                        }}
                                    >
                                        <thead>
                                            <tr style={{ backgroundColor: '#f2f2f2', color: '#333', fontWeight: 'bold' }}>
                                                <th style={{ border: '1px solid #ddd', padding: '12px' }}>Amount</th>
                                                <th style={{ border: '1px solid #ddd', padding: '12px' }}>Payment Mode</th>
                                                <th style={{ border: '1px solid #ddd', padding: '12px' }}>Bank/Mode</th>
                                                <th style={{ border: '1px solid #ddd', padding: '12px' }}>CHQ/TRN No.</th>
                                                <th style={{ border: '1px solid #ddd', padding: '12px' }}>Cheque Date</th>
                                                <th style={{ border: '1px solid #ddd', padding: '12px' }}>Payment Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {formData.paymentLedger?.map((ledger, index) => {
                                                // Skip rendering the row if collectionMode is 'Cash Deposit' or 'Discount'
                                                if (ledger.collectionMode === 'Cash Deposit' || ledger.collectionMode === 'Discount') {
                                                    return null;
                                                }

                                                return (
                                                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fafafa' : '#fff' }}>
                                                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>{ledger.amount}</td>
                                                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>{ledger.collectionMode}</td>
                                                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                                                            {ledger.collectionMode === 'Cheque' ? (ledger.deposteToAmrs || 'N/A') : null}
                                                            {ledger.collectionMode === 'Online' ? (ledger.remark || 'N/A') : null}


                                                        </td>
                                                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>

                                                            {ledger.collectionMode === 'Cheque' ? (ledger.chequeNo || 'N/A') : null}
                                                            {ledger.collectionMode === 'Online' ? (ledger.transactionNo || 'N/A') : null}

                                                        </td>
                                                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>

                                                            {ledger.collectionMode === 'Cheque' ? (
                                                                ledger.chequeDate ? (
                                                                    new Date(ledger.chequeDate).toLocaleDateString('en-GB', {
                                                                        day: '2-digit',
                                                                        month: 'short',
                                                                        year: 'numeric',
                                                                    })
                                                                ) : (
                                                                    'N/A'
                                                                )
                                                            ) : (
                                                                'N/A'
                                                            )}

                                                        </td>
                                                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                                                            {new Date(ledger.paymentCredit).toLocaleDateString('en-GB', {
                                                                day: '2-digit',
                                                                month: 'short',
                                                                year: 'numeric',
                                                            })}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>


                                    </table>
                                </ul>
                            </td>
                            <td style={{ width: 50 }}>&nbsp;</td>
                        </tr>


                        <tr>
                            <td colSpan={3} align="center">
                                <h3>Term &amp; Condition</h3>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 50 }}>&nbsp;</td>
                            <td align="left" style={{ fontSize: 12 }}>
                                <ul style={{ margin: 0 }}>
                                    <li>
                                        The intending buyer has applied for the registration of plot with full knowledge and subject to all laws, notifications and
                                        rules applicable to this area, which have been explained by the company and understood by him/her.
                                    </li>
                                    <li>
                                        The intending buyer has fully satisfied himself/herself about the interest and title of the company in the land, understands all
                                        limitations and obligations in respect of it and does not have any objection.

                                    </li>
                                    <li>
                                        For preferential situated plot, extra charges as applicable will be payable by the intending buyer. The cost of
                                        development charges for a plot whatever is applicable will be payable by the customer.

                                    </li>
                                    <li>
                                        If any applicant wants to cancel his/her registration once they have applied for a plot, then company will refund his/her registration money after deducting 50% of the paid amount.
                                    </li>


                                    <li>
                                        The applicant has to pay the maintenance/ registration/ stamp duty/ taxes as applicable
                                    </li>


                                    <li>
                                        In case if any client fails to pay the maintenance & security charges on time, then the company will not be responsible for
                                        the security of his/her property or not be responsible if anyone encroaches his/her property and the client cannot blame the
                                        company for any loss whatsoever. Moreover, the company will not provide the maintenance services for common area to
                                        such clients
                                    </li>


                                    <li>
                                        The company reserves the right to cancel the registration/allotment of the plot in case if any cheque for the registration
                                        amount or the balance amount for that plot bounced/dishonored due to customer’s fault.
                                    </li>


                                    <li>
                                        The applicant/ allotee shall before taking possession of the residential Plot, must clear all the dues towards the residential
                                        plot and have the conveyance deed for the said residential plot executed in his favor by the company after paying stamp
                                        duty, registration fee, advance maintenance for 2 years and other charges/expenses.

                                    </li>


                                    <li>
                                        It is made clear that it is not possible to check the eligibility of applicant at the time of acceptance of the registration form.
                                        Therefore, those who are not eligible would register their name at their own risk and wouldn’t be entitled for allotment of Plot
                                        if at a later stage it is detected that they are not eligible under the scheme.
                                    </li>


                                    <li>
                                        All allotments shall be made on free hold basis. However, the title shall be transferred only when sale deed/registry is
                                        executed in favour of the allotee and is registered in the office of sub-registrar.
                                    </li>



                                    <li>
                                        The company reserves the right to alter/amend/modify any of the terms & conditions of application eligibility and allotment at
                                        its sole discretion or as desired/directed by the govt. of the state/India. The consequences of such alteration/amendment/
                                        modification will be automatically binding on all applicants, without any further reference of them.

                                    </li>



                                    <li>
                                        If any misrepresentation/concealment/suppression of material facts are found to be made by the applicant/allotee, then the allotment of the given Plot/Farm House will be cancelled at the immediate effect and the total amount of the Plot/Farm House will be refunded after deducting 50% of the paid amount.

                                    </li>



                                    <li>
                                        Cheque/ DD/ Pay order to be in the name of {formData?.project?.company?.companyName || 'Maheshwari Oxygen Private Limited'}.
                                    </li>


                                    <li>
                                        Cheque bouncing will be charged Rs.1500/- as penalty, and delay in payment at 18% interest per annum
                                    </li>


                                    <li>
                                        Possession will be given within 30 months after booking with a grace period of 9 months. In case possession is not given, 18%
                                        interest will be paid to the buyer on the paid amount.
                                    </li>




                                </ul>
                            </td>
                            <td style={{ width: 50 }}>&nbsp;</td>
                        </tr>


                        <tr>
                            <td colSpan={3} style={{ height: 20 }}>
                                &nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} align="center">
                                <h3>Declaration</h3>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 50 }}>&nbsp;</td>
                            <td>
                                <ul style={{ margin: 0 }}>
                                    <li>
                                        I/WE declare that I/We have read & understood the above mentioned terms and conditions of the project and shall abide by
                                        them.
                                    </li>
                                    <li>
                                        The Plot allotted to me by the company under the rules shall be acceptable to me/us. I/We shall have no objection.
                                    </li>
                                    <li>
                                        In case of cancellation of registration done by me/us. I/We shall accept the deduction made by the company as per rules.

                                    </li>
                                    <li>
                                        I agree that the measurement/number and area of Plot required by me/us can vary at the time of Registry as per the Govt. Rules and Availability
                                    </li>
                                    <li>
                                        I/We hereby declare that all information on the application form has been given by me/us are true to the best of knowledge
                                        and belief.
                                    </li>
                                </ul>
                            </td>
                            <td style={{ width: 50 }}>&nbsp;</td>
                        </tr>
                        <tr>
                            <td colSpan={3} style={{ height: 70 }}>
                                &nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 50 }}>&nbsp;</td>
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
                                                <h4>{formattedDate}</h4>
                                            </td>
                                            <td align="right">
                                                {formData.membershipCancleReason ? (
                                                    <img
                                                        alt="Photo"
                                                        src={formData.membershipCancleReason}
                                                        style={{ width: 70, height: 70, marginRight: '10px' }}
                                                    />
                                                ) : null}
                                                <h4>Signature</h4>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style={{ width: 50 }}>&nbsp;</td>
                        </tr>
                        <tr>
                            <td colSpan={3} style={{ height: 20 }}>
                                &nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 50 }}>&nbsp;</td>
                            <td align="center">
                                <p>
                                    Your receipt and acknowledgment will be delivered to you within 15 days from the date of allotment. In case of any delay, please contact the {formData?.project?.company?.companyName || 'Maheshwari Oxygen Private Limited'} office.
                                </p>
                            </td>
                            <td style={{ width: 50 }}>&nbsp;</td>
                        </tr>
                        <tr>
                            <td colSpan={3} style={{ height: 20 }}>
                                &nbsp;
                            </td>
                        </tr>

                        <br />
                        <br />
                        <br />

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default AllotmentLetterPrint



