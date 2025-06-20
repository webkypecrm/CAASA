import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewAlltmentLatter = () => {
  const { empid } = useParams();
  const navigate = useNavigate();
  const initialFormData = {
    applicantName: '',
    applicantSdwOf: '',
    applicantPhoto: '',
    applicantPhoneNumber: '',
    applicantDob: '',
    applicantNationality: '',
    applicantPanNo: '',
    applicantProfession: '',
    applicantEmailId: '',
    applicantAadharNo: '',
    applicantAddress: '',
    coApplicantName: '',
    coApplicantSdwOf: '',
    coApplicantPhoto: '',
    coApplicantPhone: '',
    coApplicantDob: '',
    coApplicantNationality: '',
    coApplicantProfession: '',
    coApplicantEmailId: '',
    coApplicantAadharNumber: '',
    coApplicantAddress: '',
    developmentCharges: '',
    area: '',
    unitNo: '',
    plc: '',
    paymentPlan: '',
    plcAmount: '',
    registrationAmount: '',
    totalCost: '',
    modeOfPayment: '',
    chequeDDno: '',
    bankName: '',
    chequeDDAmount: '',
    chequeDDdate: '',
    transactionId: '',

  };


  const [formData, setFormData] = useState(initialFormData);
  const [profilePic, setProfilePic] = useState(null);
  const [profilePic2, setProfilePic2] = useState(null);

  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem("Token");


  useEffect(() => {
    const fetchUser = async () => {

      try {
        const url = `${apiUrl}/letter/getAllotmentLetter/${empid}`;
        let result = await fetch(url, {
          headers: {
            Authorization: `Bearer ${Token}`,
            'Content-Type': 'application/json',
          },
        });

        result = await result.json();
        const { data } = result;
        // console.log('Fetched Data:', data);

        const trimmedData = Object.keys(data).reduce((acc, key) => {
          if (typeof data[key] === 'string') {
            acc[key] = data[key].trim();
          } else {
            acc[key] = data[key];
          }
          return acc;
        }, {});
        // console.log('Fetched Data:', trimmedData);



        const photo = data.applicantImage;
        const photo2 = data.coApplicantImage;
        setProfilePic(photo)
        setProfilePic2(photo2)

        // console.log(photo)
        setFormData((prevFormData) => ({
          ...prevFormData,

          applicantName: trimmedData.applicantName,
          applicantSdwOf: trimmedData.applicantSdwOf,
          applicantPhoto: trimmedData.applicantPhoto,
          applicantPhoneNumber: trimmedData.applicantPhoneNumber,
          applicantDob: trimmedData.applicantDob,
          applicantNationality: trimmedData.applicantNationality,
          applicantPanNo: trimmedData.applicantPanNo,
          applicantProfession: trimmedData.applicantProfession,
          applicantEmailId: trimmedData.applicantEmailId,
          applicantAadharNo: trimmedData.applicantAadharNo,
          applicantAddress: trimmedData.applicantAddress,
          coApplicantName: trimmedData.coApplicantName,
          coApplicantSdwOf: trimmedData.coApplicantSdwOf,
          coApplicantPhoto: trimmedData.coApplicantPhoto,
          coApplicantPhone: trimmedData.coApplicantPhone,
          coApplicantDob: trimmedData.coApplicantDob,
          coApplicantNationality: trimmedData.coApplicantNationality,
          coApplicantProfession: trimmedData.coApplicantProfession,
          coApplicantEmailId: trimmedData.coApplicantEmailId,
          coApplicantAadharNumber: trimmedData.coApplicantAadharNumber,
          coApplicantAddress: trimmedData.coApplicantAddress,
          developmentCharges: trimmedData.developmentCharges,
          area: trimmedData.area,
          unitNo: trimmedData.unitNo,
          plc: trimmedData.plc,
          paymentPlan: trimmedData.paymentPlan,
          plcAmount: trimmedData.plcAmount,
          registrationAmount: trimmedData.registrationAmount,
          totalCost: trimmedData.totalCost,
          modeOfPayment: trimmedData.modeOfPayment,
          chequeDDno: trimmedData.chequeDDno,
          bankName: trimmedData.bankName,
          chequeDDAmount: trimmedData.chequeDDAmount,
          chequeDDdate: trimmedData.chequeDDdate,
          transactionId: trimmedData.transactionId,


        }));

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUser();
  }, []);



  return (
    <div>
      <div style={{ background: "#fff", margin: 0, padding: "50px 0" }}>
        <table
          align="center"
          width={800}
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
              <td colSpan={3} style={{ height: 20 }}>
                &nbsp;
              </td>
            </tr>
            <tr>
              <td style={{ width: 50 }}>&nbsp;</td>
              <td style={{ textAlign: "center" }}>
                <a href="">
                  <img border={0} width={150} src="assets/images/amrealty_logo.png" alt='' />
                </a>
                <br />
                <h2>
                  AM Heritage City-3 Phase-2
                </h2>

                <h3>
                  Allotment Under INDIA’S SMART CITY &amp; TOURISM DEVELOPMENT PLAN,
                  (ISCTDP)
                  <br /> PHULERA/SAMBHAR/SHAHPURA (भारतीय स्मार्ट शहर व पर्यटनविकास
                  योजना (आई.एस.सी.टी.डी.पी.) फुलेरा /
                </h3>

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
              <td style={{ textAlign: "center" }}>
                <p style={{ marginTop: 0 }}>
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
                                <input
                                  type="text"
                                  value={formData.applicantName}
                                  style={{
                                    border: "1px solid #cdcdd7",

                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150

                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>S/W/DO. :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.applicantSdwOf}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Photo :</span>
                                <br />
                                <input
                                  type="file"
                                  src={profilePic}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 4,
                                    borderRadius: 5,
                                    background: "#fff",
                                    width: 150
                                  }}
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
                                <input
                                  type="text"
                                  value={formData.applicantPhoneNumber}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>
                                  Date of Birth :
                                </span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.applicantDob}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>
                                  Nationality :
                                </span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.applicantNationality}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ height: 20 }} colSpan={3} />
                            </tr>
                            <tr>
                              <td>
                                <span style={{ color: "#847f7f" }}>Pan No. :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.applicantPanNo}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Profession :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.applicantProfession}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Email Id :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.applicantEmailId}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ height: 20 }} colSpan={3} />
                            </tr>
                            <tr>
                              <td>
                                <span style={{ color: "#847f7f" }}>Aadhaar No :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.applicantAadharNo}
                                  style={{
                                    border: "1px solid #cdcdd7",

                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td colSpan={2}>
                                <span style={{ color: "#847f7f" }}>Address :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.applicantAddress}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
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
                                <input
                                  type="text"
                                  value={formData.coApplicantName}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>S/W/DO. :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.coApplicantSdwOf}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Photo :</span>
                                <br />
                                <input
                                  type="file"
                                  src={profilePic2}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 4,
                                    borderRadius: 5,
                                    background: "#fff",
                                    width: 150
                                  }}
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
                                <input
                                  type="text"
                                  value={formData.coApplicantPhone}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>
                                  Date of Birth :
                                </span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.coApplicantDob}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>
                                  Nationality :
                                </span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.coApplicantNationality}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ height: 20 }} colSpan={3} />
                            </tr>
                            <tr>
                              <td>
                                <span style={{ color: "#847f7f" }}>Profession :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.coApplicantProfession}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Email Id :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.coApplicantEmailId}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Aadhaar No :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.coApplicantAadharNumber}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ height: 20 }} colSpan={3} />
                            </tr>
                            <tr>
                              <td colSpan={3}>
                                <span style={{ color: "#847f7f" }}>Address :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.coApplicantAddress}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
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
                                <span style={{ color: "#847f7f" }}>
                                  Development Charge :
                                </span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.developmentCharges}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Area :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.area}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Unit No :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.unitNo}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>PLC :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.plc}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ height: 20 }} colSpan={3} />
                            </tr>
                            <tr>
                              <td>
                                <span style={{ color: "#847f7f" }}>
                                  Payment Plan :
                                </span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.paymentPlan}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>PLC Amount :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.plcAmount}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>
                                  Registration Amount :
                                </span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.registrationAmount}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Total Cost :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.totalCost}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ height: 20 }} colSpan={3} />
                            </tr>
                            <tr>
                              <td>
                                <span style={{ color: "#847f7f" }}>
                                  Mode Of Payment :
                                </span>
                                <br />
                                <select
                                  className="form-control select select2"

                                  value={formData.modeOfPayment}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                >
                                  <option value=''>Select</option>
                                  <option value={'Cash'}>Cash</option>
                                  <option value={'Online'}>Online</option>
                                  <option value={'Cheque'}>Cheque</option>
                                  <option value={'POS'}>POS</option>

                                </select>
                              </td>
                              {formData.modeOfPayment === 'Cash' && (
                                <td>
                                  <span style={{ color: "#847f7f" }}>
                                    Remark :
                                  </span>
                                  <br />
                                  <input
                                    type="text"

                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: 150
                                    }}
                                  />
                                </td>
                              )}
                              {formData.modeOfPayment === 'Online' && (
                                <td>
                                  <span style={{ color: "#847f7f" }}>
                                    Transaction ID :
                                  </span>
                                  <br />
                                  <input
                                    type="text"
                                    value={formData.transactionId}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: 150
                                    }}
                                  />
                                </td>

                              )}

                              {formData.modeOfPayment === 'POS' && (
                                <td>
                                  <span style={{ color: "#847f7f" }}>
                                    Transaction ID :
                                  </span>
                                  <br />
                                  <input
                                    type="text"
                                    value={formData.transactionId}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: 150
                                    }}
                                  />
                                </td>

                              )}

                              {formData.modeOfPayment === 'Cheque' && (
                                <>
                                  <td>
                                    <span style={{ color: "#847f7f" }}>
                                      Cheque No :
                                    </span>
                                    <br />
                                    <input
                                      type="text"
                                      value={formData.chequeDDno}
                                      style={{
                                        border: "1px solid #cdcdd7",
                                        padding: 7,
                                        borderRadius: 5,
                                        width: 150
                                      }}
                                    />
                                  </td>

                                  <td>
                                    <span style={{ color: "#847f7f" }}>
                                      Cheque Date :
                                    </span>
                                    <br />
                                    <input
                                      type="date"
                                      value={formData.chequeDDdate}

                                      style={{
                                        border: "1px solid #cdcdd7",
                                        padding: 7,
                                        borderRadius: 5,
                                        width: 150
                                      }}
                                    />
                                  </td>

                                </>
                              )}

                            </tr>
                            <tr>
                              <td style={{ height: 20 }} colSpan={3} />
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
                    The Intending Buyer has applied for the registration of Plot/Farm
                    House with full knowledge and subject to all laws, notifications
                    and rules applicable to this area, which have been explained by
                    the company and understood by him/her.
                  </li>
                  <li>
                    The intending buyer has fully satisfied himself/herself about the
                    interest and title of the company in the land, understands all
                    limitations and obligations in respect of it and does not have any
                    objection.
                  </li>
                  <li>
                    For preferential situated Plot/Farm House, extra charges as
                    applicable will be payable by the intending buyer.
                  </li>
                  <li>
                    The cost of Development Charges for a Plot/Farm House whatever is
                    applicable will be payable by the customer.
                  </li>
                  <li>
                    If any applicant wants to cancel his/her registration once they
                    have applied for a Plot/Farm House under this scheme, then the
                    company will refund his/her registration money after deducting 50%
                    of the total cost of Unit/s.
                  </li>
                  <li>
                    The applicant has to pay the maintenance &amp; Security charges as
                    applicable.
                  </li>
                  <li>
                    In case if any client fails to pay the maintenance &amp; security
                    charges on time, then the company will not be responsible for the
                    security of his/her property or not be responsible if anyone
                    encroaches his/her property and the client cannot blame the
                    company for any loss what so ever. Moreover the company will not
                    provide the maintenance services for common area to such clients.
                  </li>
                  <li>
                    The company reserves the right to cancel the
                    registration/allotment of the Plot/Farm House in case if any
                    cheque for the Registration Amount or the Balance Amount for that
                    Plot/Farm House bounced/dishonored due to customer’s fault.
                  </li>
                  <li>
                    The applicant/allotee shall before taking possession of the
                    residential Plot/Farm House, must clear all the dues towards the
                    residential Plot/Farm House and have the Conveyance Deed for the
                    said residential Plot/Farm House executed in his favour by the
                    Company after paying stamp duty, registration fee and other
                    charges/expenses.
                  </li>
                  <li>
                    The company will start giving facilities like concrete road, water
                    supply &amp; Electricity only when at least 10% of allotees will
                    make their houses in the township.
                  </li>
                  <li>
                    The company can change its scheme at any time and the applicants
                    are not supposed to show any objection on the same.
                  </li>
                  <li>
                    It is made clear that it is not possible to check the eligibility
                    of applicant at the time of acceptance of the Registration form.
                    Therefore, those who are not eligible would register their name at
                    their own risk and wouldn’t be entitled for allotment of Plot/Farm
                    Houses if at a later stage it is detected that they are not
                    eligible under the scheme.
                  </li>
                  <li>
                    All allotments shall be made on free hold basis. However, the
                    title shall be transferred only when Sale Deed/Registry is
                    executed in favour of the allotee and is registered in the office
                    of Sub-Registrar.
                  </li>
                  <li>
                    The Company reserves the right to alter/amend/modify any of the
                    terms &amp; conditions of application eligibility and allotment at
                    its sole discretion or as desired/directed by the Govt. of the
                    State/India. The consequences of such alteration/amendment/
                    modification will be automatically binding on all applicants,
                    without any further reference of them.
                  </li>
                  <li>
                    If any misrepresentation/concealment/suppression of material facts
                    are found to be made by the applicant/allotee, then the allotment
                    of the given Plot/Farm House will be cancelled at the immediate
                    effect and the total amount of the Plot/Farm House will be
                    refunded after deducting 50% of the total Cost..
                  </li>
                  <li>
                    Cheque/DD/Payorder to be in the name of Webkype.
                  </li>
                  <li>
                    Cheque bouncing will be charged Rs.1000/- as penalty, and delay in
                    payment at 18% interest.
                  </li>
                  <li>
                    All provisional allotments under Tourism City Development Plan is
                    around 30-35% less cost than Original Price. In Case of Payment
                    Delay in any payment plan for more than 45 days, the allotment
                    will be cancelled from Tourism City Development plan and Original
                    price of Plot/Farm House shall be paid by the applicant/allotee.
                  </li>
                  <li>
                    Possession will be given within 24 months after booking. In case
                    possession is not given, 18% interest will be paid to the buyer on
                    the booking amount.
                  </li>
                  <li>
                    All PDC Cheques, according to the Payment Plan selected by The
                    Client till Registry, need to be deposited at the time of
                    agreement and gift dispersal in Noida Office
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
                    I/WE declare that I/We have read &amp; understood the above
                    mentioned terms and conditions of the project and shall abide by
                    them.
                  </li>
                  <li>
                    The Plot/Farm Houses allotted to me by the company under the rules
                    shall be acceptable to me/us. I/We shall have no objection.
                  </li>
                  <li>
                    In case of cancellation of registration done by me/us. I/We shall
                    accept the deduction made by the company as per rules.
                  </li>
                  <li>
                    I agree that the measurement/number and area of Plot/Farm House
                    required by me/us can vary at the time of Registry as per the
                    Govt. Rules/Approved Map and Availability.
                  </li>
                  <li>
                    I/We hereby declare that all information on the application form
                    has been given by me/us are true to the best of knowledge and
                    belief.{" "}
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
                        <h4>05-Mar-2024</h4>
                      </td>
                      <td align="right">
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
                  Your receipt and acknowledgment will be delivered to you within 15
                  days from the date of allotement.in case of delay, contact Amrealty
                  office
                </p>
              </td>
              <td style={{ width: 50 }}>&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={3} style={{ height: 20 }}>
                &nbsp;
              </td>
            </tr>
          </tbody>




        </table>

      </div>

    </div>
  )
}

export default ViewAlltmentLatter