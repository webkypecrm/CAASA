import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../assets/approva-signature.jpg'
import numToWords from 'num-to-words';


const EoiDemandLatter = () => {
    const { empid, empid1 } = useParams();
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [demandLetter, setDemandLetter] = useState({})
    const [dueDate, setDueDate] = useState('');
    const [dueDates, setDueDates] = useState('');
    const [amountInWords, setAmountInWords] = useState('');

    const initialFormData = {
        showExtendedDue: '',

    };

    const [formData, setFormData] = useState(initialFormData);




    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }


    const handleDateChange = (e) => {
        setDueDate(e.target.value);
    };


    const numberToWordsIndian = (num) => {
        const units = [
            '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'
        ];
        const teens = [
            'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
        ];
        const tens = [
            '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
        ];
        const thousands = ['', 'Thousand', 'Lakh', 'Crore'];

        if (num === 0) return 'Zero';

        let word = '';
        const crore = Math.floor(num / 10000000);
        num %= 10000000;
        const lakh = Math.floor(num / 100000);
        num %= 100000;
        const thousand = Math.floor(num / 1000);
        num %= 1000;
        const hundred = Math.floor(num / 100);
        num %= 100;

        if (crore > 0) {
            word += numberToWordsIndian(crore) + ' Crore ';
        }
        if (lakh > 0) {
            word += numberToWordsIndian(lakh) + ' Lakh ';
        }
        if (thousand > 0) {
            word += numberToWordsIndian(thousand) + ' Thousand ';
        }
        if (hundred > 0) {
            word += numberToWordsIndian(hundred) + ' Hundred ';
        }
        if (num > 0) {
            if (num < 10) word += units[num];
            else if (num < 20) word += teens[num - 10];
            else {
                word += tens[Math.floor(num / 10)] + ' ';
                if (num % 10 !== 0) word += units[num % 10];
            }
        }

        return word.trim();
    };

    useEffect(() => {
        async function getDemand() {
            const url = `${apiUrl}/eoi/singleEoiPaymentSchedule?applicantId=${empid1}&scheduleId=${empid}`;
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            response = await response.json();

            if (response.status === "success") {
                setDemandLetter(response.data);
                console.log(response.data, "linen diufiduf")

                // Convert "DD-MM-YYYY" to "YYYY-MM-DD"
                const [day, month, year] = response.data.singleSchedule.dueDate.split("-");
                const formattedDate = `${year}-${month}-${day}`;
                setDueDate(formattedDate);

                // Set due amount and convert to formatted words
                const dueAmount = response.data.singleSchedule?.dueAmount;
                setDueDates(dueAmount);

                // Convert the initial dueAmount to words and format
                if (dueAmount && !isNaN(dueAmount)) {
                    setAmountInWords(numberToWordsIndian(dueAmount));
                }
            }
        }

        getDemand();
    }, [apiUrl, empid1, empid, Token]);

    const handleDateChanges = (e) => {
        const value = e.target.value;
        setDueDates(value);

        // Convert the input value to formatted words if it's a valid number
        if (!isNaN(value) && value !== '') {
            setAmountInWords(numberToWordsIndian(parseInt(value, 10)));
        } else {
            setAmountInWords('');
        }
    };


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

    const getDemandLatterSend = async () => {
        const url = `${apiUrl}/eoi/eoiDemandLetter?applicantId=${empid1}&scheduleId=${empid}&extendedDueDate=${dueDate}&payment=${dueDates}&showExtendedDue=${formData.showExtendedDue}`;

        try {
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            });
            response = await response.json();

            if (response.status === "success") {
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error("An error occurred while sending the demand letter.");
            console.error("Error:", error);
        }
    };


    return (
        <>

            <div className="page">

                <TopHeader />
                <Prince />
                <div style={{ background: "#fff", margin: 0, padding: "50px 0" }}>
                    <table
                        align="center"
                        width={920}
                        border={0}
                        cellSpacing={0}
                        cellPadding={0}
                        style={{
                            background: "#fff",
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: 13,
                            borderRadius: 15,
                            padding: "20px",
                            lineHeight: "1.8",
                        }}
                    >
                        <tbody>

                            <tr>
                                <td align="center" colSpan={3} style={{ paddingBottom: "10px" }}>
                                    <h4 style={{ margin: 0 }}>DEMAND LETTER – 1 </h4>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: "5%" }} />
                                <td style={{ padding: "0 5%" }}>
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
                                    <p>
                                        Dear Sir/ Ma’am,
                                    </p>
                                    <p>
                                        We refer to your application form/ allotment agreement executed between us dated <b>{formattedDate}</b> with specific reference
                                        to payment plan in respect to the said unit. As per the application form/ allotment agreement, you are hereby called upon to pay Rs.
                                        <b>
                                            <input
                                                type="text"
                                                value={dueDates}
                                                onChange={handleDateChanges}
                                                placeholder="Enter amount"
                                                style={{
                                                    height: '20px',
                                                    width: '90px',
                                                }}
                                            />


                                        </b>/- ({amountInWords} Rupees Only) by{" "}
                                        <b>
                                            <input
                                                type="date"
                                                value={dueDate}
                                                onChange={handleDateChange}
                                                style={{
                                                    height: '20px',
                                                    width: '90px',
                                                }}
                                            />
                                        </b>{" "}
                                        <select

                                            name="showExtendedDue"
                                            value={formData.showExtendedDue}
                                            onChange={handleInputChange}
                                        >

                                            <option value="false">Select</option>
                                            <option value="true">Extended due date</option>
                                        </select>.
                                    </p>
                                    <p>
                                        We urge you to clear the total payable amount mentioned above immediately, to avoid accrual of interest/ penal
                                        consequences as provided under the application form/ allotment agreement.
                                    </p>
                                    <p>
                                        In case you have made the above payment, kindly furnish us details of the same to update our records.
                                    </p>

                                    <p>
                                        You are requested to make the due payment by Demand Draft/ Cheque drawn in favor of
                                        “{demandLetter?.eoiApplicant?.project?.company?.companyName || 'Maheshwari Oxygen Private Limited'}” at the earliest.
                                    </p>
                                    <p>
                                        You can also transfer payment online using bank details as follows:
                                    </p>
                                    <p style={{ marginLeft: "15px" }}>
                                        <b>Account Name:</b> {demandLetter?.eoiApplicant?.project?.company?.companyBank[0]?.bankAccount?.accountName || 'Maheshwari Oxygen Private Limited'}<br />
                                        <b>Account Number:</b>  {demandLetter?.eoiApplicant?.project?.company?.companyBank[0]?.bankAccount?.accountNumber || '9346345325'} <br />
                                        <b>Bank Name:</b>  {demandLetter?.eoiApplicant?.project?.company?.companyBank[0]?.bankAccount?.bankName || 'Kotak Mahindra BANK'} <br />
                                        <b>Branch:</b>  {demandLetter?.eoiApplicant?.project?.company?.companyBank[0]?.bankAccount?.branch || 'SECTOR-51, NOIDA'} <br />
                                        <b>IFSC:</b>  {demandLetter?.eoiApplicant?.project?.company?.companyBank[0]?.bankAccount?.ifsc || 'KKBK0000154'}
                                    </p>
                                    <p>
                                        All Payments will be updated on Mobile APP/ WEB.<br />
                                        You may contact us at the following help desk mail ids/ contact numbers for any assistance required in the matter. Should you require any other support, please get in touch with us at {" "}
                                        <b>customersupport2@amrealtysolutions.in / info@amrealtysolutions.in or call us at 0120-4547484.</b>
                                    </p>
                                    <p style={{ marginTop: "30px" }}>
                                        Thanking You,<br />
                                        Yours truly,<br />
                                        <b>For {demandLetter?.eoiApplicant?.project?.company?.companyName || 'Maheshwari Oxygen Private Limited'}</b>
                                    </p>
                                    <a href={img} target="_blank" rel="noopener noreferrer" style={{ marginTop: "20px" }}>
                                        <img src={img} alt="description" width="150" style={{ display: "block", margin: "20px 0" }} />
                                    </a>
                                    <p>Authorized Signatory</p>
                                    <p>PAN No: AAECM9103F<br />CIN No: U24111UP1998PTC024059</p>
                                </td>
                                <td style={{ width: "5%" }} />
                            </tr>
                            <tr>
                                <td colSpan={3} style={{ padding: "20px 0" }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                        <Link
                                            to={`/eoi-demand-letter-print/${empid}/${empid1}`}
                                            state={{ dueDate, dueDates, amountInWords, showExtendedDue: formData.showExtendedDue }}
                                            className="btn ripple btn-info btn-rounded btn-rounded-sm mb-3"
                                        >
                                            Print On Letter Head
                                        </Link>

                                        <button className="btn ripple btn-info btn-rounded btn-rounded-sm mb-3"
                                            onClick={getDemandLatterSend}>
                                            Send To Customer Email
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>

    )
}

export default EoiDemandLatter



