import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Welcome = () => {
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


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }
      const url = `${apiUrl}/letter/addWelcomeLetter?=&applicantId=${empid}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
        body: formDataToSend,
      });

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }

      setFormData(initialFormData);
      toast.success(response2.message);
    //   navigate(`/Inventory-details/${empid}`);

    } catch (error) {
      toast.error(error.message);

    }
  };
  

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
            <tr>
          {/* <td align="center" colSpan={3}><strong>{formData.createdAt}</strong></td> */}
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
                        <input
                          type="text"
                          value={formData.name}

                          style={{
                            border: "1px solid #cdcdd7",
                            padding: 7,
                            borderRadius: 5
                          }}
                        />
                        {" "}
                        ,<br />
                        Congratulations from AM Realty Solutions on your new
                        investment in{" "}
                        <input
                          type="text"
                          name="schemeId"
                          value={formData.clientName}
                          style={{
                            border: "1px solid #cdcdd7",
                            padding: 7,
                            borderRadius: 5,
                            width: 250
                          }}
                        />{" "}
                        that too under{" "}
                        <input
                          type="text"
                          value={formData.project}
                          style={{
                            border: "1px solid #cdcdd7",
                            padding: 7,
                            borderRadius: 5,
                            width: 150
                          }}
                        />
                        It is a perfect choice and you are one of the few lucky ones
                        to get unit at such reasonable rates along with a free Gift.
                        We at AM Realty Solutions feel privileged to be part of your
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
                                <input
                                  type="text"
                                  name="ticketId"
                                  value={formData.ticketId}

                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "90%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px" }}>Project Name</td>
                              <td style={{ padding: "5px 10px" }}>
                                <input
                                  type="text"
                                  name="projectId"
                                  value={formData.projectName}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "90%"

                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: "5px 10px" }}>Unit Number</td>
                              <td style={{ padding: "5px 10px" }}>
                                <input
                                  type="text"
                                  name="unitNo"
                                  value={formData.unitNumber}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "90%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px" }}>Free Gift</td>
                              <td style={{ padding: "5px 10px" }}>
                                <input
                                  type="text"
                                  name="gift"
                                  value={formData.freeGift}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "90%"
                                  }}
                                />
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
                              <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Area (Sq. Ft.)</th>
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
                                <input
                                  type="text"
                                  value={formData.clientName}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "80%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={formData.allotmentUnit}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "80%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={formData.area}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "80%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <select
                                  className="form-control"
                                  name="paymentPlan"
                                  value={formData.paymentPlan}

                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "80%"
                                  }}
                                >
                                  <option value="">Select</option>
                                  <option>FPP</option>
                                  <option>PLP</option>
                                  <option>DLP</option>
                                </select>
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={formData.basicSalery}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "80%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={formData.fixedCharges}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "80%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={formData.plc}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "80%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}> </td>
                            </tr>
                            <tr>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }} colSpan={4}></td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={formData.basicSalesAmount}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "80%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={formData.fixedChargesAmount}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "80%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={formData.plcAmount}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "80%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={formData.totalCost}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "80%"
                                  }}
                                />
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
                                  <input
                                    type="text"
                                    value={formData.onBooking ? `${formData.onBooking}%` : ''}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.onBookingAmount}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
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
                                  <input
                                    type="text"
                                    value={formData.onBooking ? `${formData.onBooking}%` : ''}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.onBookingAmount}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days1PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.withIn60Days ? `${formData.withIn60Days}%` : ''}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.withIn60DayAmount}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days2PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.withIn90Days ? `${formData.withIn90Days}%` : ''}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.withIn60DayAmount}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days3PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.withIn120Days ? `${formData.withIn120Days}%` : ''}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.withIn120DayAmount}


                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days4PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.withIn150Days ? `${formData.withIn150Days}%` : ''}


                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.withIn150DayAmount}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days5PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.withIn180Days ? `${formData.withIn180Days}%` : ''}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"

                                    value={formData.withIn180DayAmount}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days6PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.extraPerPLP1 ? `${formData.extraPerPLP1}%` : ''}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.extraValuePLP1}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days7PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.extraPerPLP2 ? `${formData.extraPerPLP2}%` : ''}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.extraValuePLP2}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.days8PLP} Days
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.extraPerPLP3 ? `${formData.extraPerPLP3}%` : ''}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.extraValuePLP3}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.onRegistry ? `${formData.onRegistry}%` : ''}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.onRegistryAmount}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
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
                                  <input
                                    type="text"
                                    value={formData.onBooking ? `${formData.onBooking}%` : ''}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.onBookingAmount}


                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  Within {formData.daysDLP} Days
                                </td>
                                <td style={{ padding: "5px 10px" }}>
                                  <input
                                    type="text"
                                    value={formData.withIn30Days ? `${formData.withIn30Days}%` : ''}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.withIn30DayAmount}


                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>On Registry</td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.onRegistry ? `${formData.onRegistry}%` : ''}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                  <input
                                    type="text"
                                    value={formData.onRegistryAmount}

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: "90%"
                                    }}
                                  />
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
                          <input
                            type="date"
                            value={formData.InitialPaymentDate}
                            style={{
                              border: "1px solid #cdcdd7",
                              padding: 7,
                              borderRadius: 5
                            }}
                          />
                          in order to confirm allotment under {formData.project}.
                        </p>
                        <p style={{ marginTop: 0, marginBottom: 10 }}>
                          {" "}
                          Remaining initial amount need to be paid by{" "}
                          <input
                            type="date"
                            value={formData.remainingInitialAmountDate}
                            style={{
                              border: "1px solid #cdcdd7",
                              padding: 7,
                              borderRadius: 5
                            }}
                          />
                          .
                        </p>
                        <p style={{ marginTop: 0, marginBottom: 10 }}>
                          {" "}
                          Note: Allotment under {formData.project} will only be
                          confirmed in case of 10% payment received by{" "}
                          <input
                            type="date"
                            value={formData.noteDate}
                            style={{
                              border: "1px solid #cdcdd7",
                              padding: 7,
                              borderRadius: 5
                            }}
                          />
                          .
                        </p>
                        <p style={{ marginTop: 0, marginBottom: 10 }}>
                          {" "}
                          We would also send an invitation letter to you in the
                          month of{" "}
                          <input
                            type="text"

                            value={formData.invitationLetterDate}
                            placeholder="Enter Month & Year (November-2018)"
                            style={{
                              border: "1px solid #cdcdd7",
                              padding: 7,
                              borderRadius: 5,
                              width: 250
                            }}
                          />{" "}
                          as an honor and to present the gift to you at our Noida
                          office. Your presence in our office will be an honor for
                          us.
                        </p>
                        <p style={{ marginTop: 0, marginBottom: 10 }}>
                          {" "}
                          Our team will also call you to invite you at our office
                          for Gift handover{" "}
                         {formData.giftHangover}{" "}
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
                      <td>
                      {formData.bank}
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
                          {formData.accountManager}{" "}
                          and will be reachable on{" "}
                          <input
                            type="text"
                            value={formData.accountManagerPhone}
                            style={{
                              border: "1px solid #cdcdd7",
                              padding: 7,
                              borderRadius: 5
                            }}
                          />{" "}
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
                          Title: {employee.title}
                          <br />
                          Account Name: {employee.accountName}
                          <br />
                          Account Number: {employee.accountNumber}
                          <br />
                          Bank Name: {employee.bankName}
                          <br />
                          Branch: {employee.branch}
                          <br />
                          IFSC: {employee.ifsc}

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
                          AM Realty Solutions
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

export default Welcome



