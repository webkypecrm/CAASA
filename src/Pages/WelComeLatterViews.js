import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WelComeLatterViews = () => {
  const { empid } = useParams();

  const initialFormData = {
    name: '',
    project: '',
    company: '',
    ticketId: '',
    projectName: '',
    unitNumber: '',
    freeGift: '',
    clientName: '',
    allotmentUnit: '',
    area: '',
    paymentPlan: '',
    basicSalery: '',
    fixedCharges: '',
    plc: '',
    totalCost: '',
    basicSalesAmount: '',
    fixedChargesAmount: '',
    plcAmount: '',
    onBooking: '',
    withIn60Days: '',
    withIn90Days: '',
    withIn120Days: '',
    withIn150Days: '',
    withIn180Days: '',
    onRegistry: '',
    InitialPaymentDate: '',
    remainingInitialAmountDate: '',
    noteDate: '',
    giftHangover: '',
    bank: '',
    accountManager: '',
    accountManagerPhone: '',
    withIn30Days: '',
    invitationLetterDate: '',

    onBookingAmount: '',
    withIn30DayAmount: '',
    withIn60DayAmount: '',
    withIn90DayAmount: '',
    withIn150DayAmount: '',
    withIn120DayAmount: '',
    withIn180DayAmount: '',
    onRegistryAmount: '',

    days1PLP: '',
    days2PLP: '',
    days3PLP: '',
    days4PLP: '',
    days5PLP: '',
    days6PLP: '',
    days7PLP: '',
    daysDLP: '',
    date: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [profilePic, setProfilePic] = useState(null);
  const [profilePic2, setProfilePic2] = useState(null);
  const [project, setProject] = useState([]);
  const [employee, setEmployee] = useState({})
  const [gift, setGift] = useState([])
  const [reportingBossA, setReportingBossA] = useState([])

  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem("Token");



  useEffect(() => {
    async function getEmp() {
      const Token = localStorage.getItem("Token");

      let response = await fetch(`${apiUrl}/bank/getBankDetailsById/${formData.bank}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`
        },
      });
      response = await response.json();

      console.log("API response:", response);

      if (response.status === "success") {
        setEmployee(response.data);
      }
    }
    getEmp();
  }, [formData.bank]);

  //gift api 
  useEffect(() => {
    fetch(`${apiUrl}/gift/giftDropdown`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setGift(data.data);
        } else {
          console.error('API response is not in the expected format for countries.');
        }

      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }, []);

  //Boss a
  useEffect(() => {
    const Token = localStorage.getItem('Token');
    console.log('Token:', Token);

    fetch(`${apiUrl}/employee/allEmpDesig`, {
      headers: {
        'Authorization': `Bearer ${Token}`

      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.data)) {
          setReportingBossA(data.data);
        } else {
          console.error('API response does not contain an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching gender options:', error);
      });
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/bank/accountDropdown`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setProject(data.data);
        } else {
          console.error('API response is not in the expected format for countries.');
        }

      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const Token = localStorage.getItem('Token');
      try {
        const url = `${apiUrl}/letter/getWelcomeLetter/${empid}`;

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


  return (
    <>

      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <div style={{ background: "#fff", margin: 0, padding: "50px 0" }}>
        <table
          align="center"
          width={900}
          border={0}
          cellSpacing={0}
          cellPadding={0}
          style={{
            background: "#f7f7f7",
            fontFamily: '"Poppins", sans-serif',
            fontSize: 13,
            borderRadius: 15
          }}
        >
          <tbody>
            <tr>
              <td colSpan={3} style={{ height: 20 }} />
            </tr>
            <td align="center" colSpan={3}><strong>{formData.dates}</strong></td>
            <tr>

              <td align="center" colSpan={3}>
                <a href="">
                  <img border={0} width={150} src="https://amrealty.webkype.com/assets/img/brand/logo.png" />
                </a>
                <br />
                <h3>Generate Welcome Letter</h3>
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
                      <td style={{ lineHeight: 2 }}>
                        Dear Mr/Mrs/Ms.{" "}
                        <span style={{ color: 'blue' }}>{formData.name}</span>
                        {" "}
                        ,<br />
                        Congratulations from Webkype on your new
                        investment in{" "}
                        <span style={{ color: 'blue' }}>{formData.clientName}</span>{" "}
                        that too under{" "}
                        <span style={{ color: 'blue' }}>{formData.project}</span>{" "}
                        It is a perfect choice and you are one of the few lucky ones
                        to get unit at such reasonable rates along with a free Gift.
                        We at Webkype feel privileged to be part of your
                        great investment. We thank you for giving us an opportunity
                        to assist you in making this very investment. We sincerely
                        hope that you are satisfied with our services and will refer
                        us in your circle.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ height: 30 }} />
                    </tr>
                    <tr>
                      <td>
                        <h4 style={{ marginTop: 0, marginBottom: 10 }}>
                          Your Lucky Draw Allotment is as Follows:
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
                          style={{ borderColor: "#fcfcfc" }}
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: "5px 10px" }}>Ticket Id</td>
                              <td style={{ padding: "5px 10px" }}>
                                <span style={{ color: 'blue' }}>{formData.ticketId}</span>
                              </td>
                              <td style={{ padding: "5px 10px" }}>Project Name</td>
                              <td style={{ padding: "5px 10px" }}>
                                <span style={{ color: 'blue' }}>{formData.projectName}</span>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: "5px 10px" }}>Unit Number</td>
                              <td style={{ padding: "5px 10px" }}>
                                <span style={{ color: 'blue' }}>{formData.unitNumber}</span>
                              </td>
                              <td style={{ padding: "5px 10px" }}>Free Gift</td>
                              <td style={{ padding: "5px 10px" }}>
                                <span style={{ color: 'blue' }}>{formData.freeGift}</span>
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
                          Brief details about the total cost of the unit and payment
                          plan are as follows:
                        </h4>
                      </td>
                    </tr>
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
                              <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Area (SQ YD)</th>
                              <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Payment Plan</th>
                              <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Basic Sales Price (Per Sq. Ft)</th>
                              <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>EDC/IDC (Per Sq. Ft)</th>
                              <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>PLC (in %)</th>
                              <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Total Cost</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <span style={{ color: 'blue' }}>{formData.clientName}</span>
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <span style={{ color: 'blue' }}>{formData.allotmentUnit}</span>
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <span style={{ color: 'blue' }}>{formData.size}</span>
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <span style={{ color: 'blue' }}>{formData.paymentPlan}</span>
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <span style={{ color: 'blue' }}>{formData.basicSalery}</span>
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <span style={{ color: 'blue' }}>{formData.fixedCharges}</span>
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <span style={{ color: 'blue' }}>{formData.plc}</span>
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}> </td>
                            </tr>
                            <tr>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }} colSpan={4}></td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <span style={{ color: 'blue' }}>{formData.basicSalesAmount}</span>
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <span style={{ color: 'blue' }}>{formData.fixedChargesAmount}</span>
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <span style={{ color: 'blue' }}>{formData.plcAmount}</span>
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <span style={{ color: 'blue' }}>{formData.totalCost}</span>
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
                          PAYMENT SCHEDULE
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
                          style={{ borderColor: "#fcfcfc" }}
                        >
                          {formData.paymentPlan === 'FPP' && (
                            <tbody>
                              <tr>
                                <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                  On Booking
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.onBooking ? `${formData.onBooking}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.onBookingAmount}</span>
                                </td>
                              </tr>
                            </tbody>
                          )}
                          {formData.paymentPlan === 'PLP' && (
                            <tbody>
                              <tr>
                                <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                  On Booking
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.onBooking ? `${formData.onBooking}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.onBookingAmount}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days1PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.withIn60Days ? `${formData.withIn60Days}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.withIn60DayAmount}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days2PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.withIn90Days ? `${formData.withIn90Days}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.withIn60DayAmount}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days3PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.withIn120Days ? `${formData.withIn120Days}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.withIn120DayAmount}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days4PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.withIn150Days ? `${formData.withIn150Days}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.withIn150DayAmount}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days5PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.withIn180Days ? `${formData.withIn180Days}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.withIn180DayAmount}</span>
                                </td>
                              </tr>

                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days6PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.extraPerPLP1 ? `${formData.extraPerPLP1}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.extraValuePLP1}</span>
                                </td>
                              </tr>

                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days7PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.extraPerPLP2 ? `${formData.extraPerPLP2}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.extraValuePLP2}</span>
                                </td>
                              </tr>

                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days8PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.extraPerPLP3 ? `${formData.extraPerPLP3}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.extraValuePLP3}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.onRegistry ? `${formData.onRegistry}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.onRegistryAmount}</span>
                                </td>
                              </tr>
                            </tbody>
                          )}
                          {formData.paymentPlan === 'DLP' && (
                            <tbody>
                              <tr>
                                <td style={{ padding: "5px 10px", width: "60%", border: "1px solid #ccc" }}>
                                  On Booking
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.onBooking ? `${formData.onBooking}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.onBookingAmount}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.daysDLP} Days
                                </td>
                                <td style={{ padding: "5px 10px" }}>
                                  <span>{formData.withIn30Days ? `${formData.withIn30Days}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.withIn30DayAmount}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.onRegistry ? `${formData.onRegistry}%` : ''}</span>
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <span>{formData.onRegistryAmount}</span>
                                </td>
                              </tr>
                            </tbody>
                          )}


                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ height: 20 }} />
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginTop: 0, marginBottom: 10 }}>
                          Request you to transfer the initial amount of 10% by{" "}
                          <span style={{ color: 'blue' }}>{formData.InitialPaymentDate}</span> {" "}
                          in order to confirm allotment under <span style={{ color: 'blue' }}>{formData.project}</span>.
                        </p>
                        <p style={{ marginTop: 0, marginBottom: 10 }}>
                          {" "}
                          Remaining initial amount need to be paid by{" "}
                          <span style={{ color: 'blue' }}>{formData.remainingInitialAmountDate}</span>
                          .
                        </p>
                        <p style={{ marginTop: 0, marginBottom: 10 }}>
                          {" "}
                          Note: Allotment under <span style={{ color: 'blue' }}>{formData.project}</span> will only be
                          confirmed in case of 10% payment received by{" "}
                          <span style={{ color: 'blue' }}>{formData.noteDate}</span>
                          .
                        </p>
                        <p style={{ marginTop: 0, marginBottom: 10 }}>
                          {" "}
                          We would also send an invitation letter to you in the
                          month of{" "}
                          <span style={{ color: 'blue' }}>{formData.invitationLetterDate}</span>{" "}
                          as an honor and to present the gift to you at our Noida
                          office. Your presence in our office will be an honor for
                          us.
                        </p>
                        <p style={{ marginTop: 0, marginBottom: 10 }}>
                          {" "}
                          Our team will also call you to invite you at our office
                          for Gift handover{" "}
                          <span style={{ color: 'blue' }}>{formData.giftHangover}</span>{" "}
                          .
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ height: 20 }} />
                    </tr>
                    <tr>
                      <td>
                        <h4 style={{ marginTop: 0, marginBottom: 10 }}>
                          Payment can be transferred online using the following
                          details:
                        </h4>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ height: 20 }} />
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginTop: 0, marginBottom: 10 }}>
                          {" "}
                          Your account manager is{" "}
                          <span style={{ color: 'blue' }}>{formData.accountManager}</span>{" "}
                          and will be reachable on{" "}
                          <span style={{ color: 'blue' }}>{formData.accountManagerPhone}</span>{" "}
                          for any queries.{" "}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ height: 20 }} />
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <b>Bank Details</b>
                          <br />
                          Title: <span style={{ color: 'blue' }}>{employee.title}</span>
                          <br />
                          Account Name: <span style={{ color: 'blue' }}>{employee.accountName}</span>
                          <br />
                          Account Number: <span style={{ color: 'blue' }}>{employee.accountNumber}</span>
                          <br />
                          Bank Name: <span style={{ color: 'blue' }}>{employee.bankName}</span>
                          <br />
                          Branch: <span style={{ color: 'blue' }}>{employee.branch}</span>
                          <br />
                          IFSC: <span style={{ color: 'blue' }}>{employee.ifsc}</span>

                        </p>
                        <br />

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <b>With Best Regards</b>
                          <br />
                          Apoorva Srivastava
                          <br />
                          Accounts Manager
                          <br />
                          Off: 0120-4547484
                          <br />
                          Webkype
                          <br />
                          Web: www.amrealtysolutions.com
                          <br />
                          <b>Corporate Office:</b>
                          <br />
                          8th Floor, Magnus Tower,
                          <br />
                          Sector-73, Noida- 201307 Up
                          <br />
                          <b>Branch office:</b>
                          <br />
                          Flat No. G1, Plot No. 56A, Metro Prime,
                          <br />
                          Hanuman Vatika First, Ajmer Road, (Opp. GDC Club) Jaipur,
                          <br />
                          Rajasthan-302021
                          <br />
                          Contact No: 9582212245
                        </p>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ width: 30 }} />
            </tr>
            <tr>
              <td colSpan={3} style={{ height: 20 }} />
            </tr>
          </tbody>
        </table>
      </div>
    </>

  )
}

export default WelComeLatterViews

