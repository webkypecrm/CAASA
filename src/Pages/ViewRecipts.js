import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Img from '../assets/approva-signature.jpg'

const ViewReceipts = () => {
  const { empid } = useParams();
  const [employee, setEmployee] = useState({})
  const [contentPrinted, setContentPrinted] = useState(false);

  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem("Token");

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  useEffect(() => {
    async function getEmp() {
      let response = await fetch(`${apiUrl}/payment/getPaymentRecipt?paymentId=${empid}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`
        },
      });
      response = await response.json();

      if (response.status === "success") {

        const formattedData = {
          ...response.data,
          formattedDate: response.data.createdAt ? formatDateTime(response.data.createdAt) : null,
          formattedDate2: response?.data?.paymentLedger?.collectionMode === 'Cheque' && response.data.paymentLedger.chequeDate
          ? formatDateTime(response.data.paymentLedger.chequeDate)
          : response?.data?.paymentLedger?.collectionMode === 'Online' && response.data.paymentLedger.paymentCredit
          ? formatDateTime(response.data.paymentLedger.paymentCredit)
          : null
        
        };
        console.log("formattedData", formattedData);
        setEmployee(formattedData);
      } else {
        // Handle error
        console.error("Error fetching payment receipt:", response.message);
      }
    }
    getEmp();
  }, []);

  const loadContent = () => {
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
    <div style={{ background: "#fff", margin: 0, padding: "50px 0" }}>
      <table
        align="center"
        width={740}
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
        {/* Move button outside tbody */}
        <thead>
          <tr>
            <td colSpan={3} style={{ height: 20 }} />
          </tr>
        </thead>

        <tfoot>
          <tr>
            <td colSpan={3} style={{ textAlign: 'center' }}>
              <button
                onClick={() => loadContent(empid)}
                title="Print"
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
            </td>
          </tr>
        </tfoot>

        <tbody>
          <tr>
            <td colSpan={3} style={{ height: 50 }} />
          </tr>
          <tr>
            <td align="center" colSpan={3}>
              <h3> RECEIPT</h3>
            </td>
          </tr>
          <tr>
            <td style={{ width: 30 }} />
            <td>
              <table align="center" width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody>
                  <tr>
                    <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{ marginLeft: '-10px' }}>
                        <strong>To</strong>
                        <br />
                        Mr/Mrs/Ms. {employee.name}
                        <br />
                        Mr/Mrs/Ms.((Co-Applicant)). {employee.paymentLedger?.eoiApplicant?.coApplicantFirstName} {employee.paymentLedger?.eoiApplicant?.coApplicantMiddleName} {employee.paymentLedger?.eoiApplicant?.coApplicantLastName}
                        <br />
                        Client Address: {employee.address || 'N/A'}
                        <br />
                        Tel: {employee.mobileNo || 'N/A'}
                        <br />
                        GSTIN: {employee.paymentLedger?.eoiApplicant?.applicantCompanyGst || 'N/A'}
                      </div>
                      <div style={{ marginRight: '100px', marginTop: '30px' }}>
                        {employee.UnitNo && <div>Unit No: {employee.UnitNo || 'N/A'}</div>}
                        {employee.UnitNo === null && <div>Ticket Id: {employee.paymentLedger?.eoiApplicant?.ticketId}</div>}
                        <br />
                        Project Name: {employee.project}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                align="left"
                width="98%"
                border={1}
                cellSpacing={0}
                cellPadding={8}
                style={{
                  marginTop: '20px',
                  marginLeft: '-25px',
                  borderCollapse: 'collapse',
                  boxShadow: 'none',
                }}
              >
                <thead>
                  <tr>
                    <td colSpan={4} style={{ padding: '8px', display: 'flex', justifyContent: 'space-between', width: '100%', whiteSpace: 'nowrap' }}>
                      <span>Receipt No:: {employee.receiptNo}</span>,{" "}
                      <span style={{ textAlign: 'left' }}>Receipt Date: {employee.formattedDate2}</span>
                    </td>
                  </tr>
                  <tr style={{ whiteSpace: 'nowrap' }}>
                    <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Instrument No</th>
                    <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Instrument Date</th>
                    <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Bank/Mode</th>
                    <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Amount (Rs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ whiteSpace: 'nowrap' }}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{employee.transactionId} {employee.chequeNo}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{employee.formattedDate2}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                      {employee.paymentLedger?.collectionMode === 'Online' && <>{employee.paymentLedger?.remark}</>}
                      {employee.paymentLedger?.collectionMode === 'Cheque' && <>{employee.paymentLedger?.deposteToAmrs}</>}
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{employee.Amount}</td>
                  </tr>
                  <tr>
                    <td colSpan={4} style={{ padding: '8px' }}>
                      Notation: <span>{employee.methodOfPayment}</span>
                      {employee.methodOfPayment === 'Online' && employee.transactionId && <b>_{employee.transactionId}</b>}
                      {employee.methodOfPayment === 'Cheque' && employee.chequeNo && <b>_{employee.chequeNo}</b>}
                      {employee.methodOfPayment === 'Cash' && employee.chequeNo && <b>_{employee.enterDiscount}</b>}
                      {employee.formattedDate2}_{employee.Amount}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ marginLeft: '-10px', marginTop: '20px' }}>
                <strong>Amount (in words):</strong> {employee.amountWord}
                <br />
                <br />
                <strong>{employee?.paymentLedger?.amrsAccount}</strong>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <br />

                <br />
                <strong>CRM Department</strong>
                <br />
                <br />
                <em>Note: Payment is subject to realization</em>
                <br />
                This is system generated receipt and hence does not require any signature.
                <br />
                <p style={{ margin: '5px 0' }}><strong>CIN:</strong> U24111UP1998PTCD24059</p>
                <p style={{ margin: '5px 0' }}><strong>PAN No:</strong>AAECM9103F</p>

              </div>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default ViewReceipts;
