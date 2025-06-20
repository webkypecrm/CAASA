import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllotmentLetter = () => {
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
    size: '',

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

  const initialFormData3 = {

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
  const [formData3, setFormData3] = useState(initialFormData3);
  const [profilePic, setProfilePic] = useState(null);
  const [profilePic2, setProfilePic2] = useState(null);
  const [loadings, setLoadings] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [value, setValue] = useState('')
  const [values, setValues] = useState('')
  const [valuess, setValuess] = useState('')
  const [valueOne, setValueOne] = useState('')
  const [valueTwo, setValueTwo] = useState('')
  const [valueThree, setValueThree] = useState('')
  const [valueFour, setValueFour] = useState('')
  const [chequeDDAmount, setchequeDDAmount] = useState('')


  const formatDateee = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options).replace(/ /g, '-');
  };

  const [currentDate, setCurrentDate] = useState(formatDateee(new Date()));
  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem("Token");




  useEffect(() => {
    setFormData3(prevFormData3 => ({
      ...prevFormData3,
      applicantName: formData.fullName
    }));
  }, [formData.fullName]);


  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, applicantSdwOf: formData.applicantFatherName }));
  }, [formData.applicantFatherName]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, applicantPhoneNumber: formData.applicantMobile }));
  }, [formData.applicantMobile]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, applicantDob: formData.applicantDOB }));
  }, [formData.applicantDOB]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, applicantNationality: formData.applicantNationality }));
  }, [formData.applicantNationality]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, applicantPanNo: formData.applicantPAN }));
  }, [formData.applicantPAN]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, applicantProfession: formData.applicantProfession }));
  }, [formData.applicantProfession]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, applicantEmailId: formData.applicantEmail }));
  }, [formData.applicantEmail]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, applicantAadharNo: formData.applicantAadhaarNumber }));
  }, [formData.applicantAadhaarNumber]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, applicantAddress: formData.applicantAddress }));
  }, [formData.applicantAddress]);

  //co applicant 


  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, coApplicantName: formData.coFullName }));
  }, [formData.coFullName]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, coApplicantSdwOf: formData.coApplicantFatherName }));
  }, [formData.coApplicantFatherName]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, coApplicantPhone: formData.coApplicantMobile }));
  }, [formData.coApplicantMobile]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, coApplicantDob: formData.coApplicantDOB }));
  }, [formData.coApplicantDOB]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, coApplicantNationality: formData.coApplicantNationality }));
  }, [formData.coApplicantNationality]);



  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, coApplicantProfession: formData.coApplicantProfession }));
  }, [formData.coApplicantProfession]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, coApplicantEmailId: formData.coApplicantEmail }));
  }, [formData.coApplicantEmail]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, coApplicantAadharNumber: formData.coApplicantAadhaarNumber }));
  }, [formData.coApplicantAadhaarNumber]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, coApplicantAddress: formData.coApplicantAddress }));
  }, [formData.coApplicantAddress]);


  //BOOKING DETAILS

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, area: formData.size }));
  }, [formData.size]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, unitNo: formData.unitNo }));
  }, [formData.unitNo]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, plc: formData.PLCs }));
  }, [formData.PLCs]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, paymentPlan: formData.paymentPlan }));
  }, [formData.paymentPlan]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, plcAmount: formData.PLCsValue }));
  }, [formData.PLCsValue]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, registrationAmount: value }));
  }, [value]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, totalCost: formData.totalCost }));
  }, [formData.totalCost]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, modeOfPayment: values }));
  }, [values]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, transactionId: valuess }));
  }, [valuess]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, chequeDDno: valueOne }));
  }, [valueOne]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, chequeDDdate: valueTwo }));
  }, [valueTwo]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, bankName: valueThree }));
  }, [valueThree]);


  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, chequeDDAmount: chequeDDAmount }));
  }, [chequeDDAmount]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, applicantPhoto: profilePic }));
  }, [profilePic]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, coApplicantPhoto: profilePic2 }));
  }, [profilePic2]);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(formatDateee(new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoadings(true);
      const formDataToSend = new FormData();

      for (const key in formData3) {
        if (formData3[key] !== null) {
          formDataToSend.append(key, formData3[key]);
        }
      }
      const url = `${apiUrl}/letter/addAllotmentLetter?=&applicantId=${empid}`;
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

      setFormData3(initialFormData3);
      toast.success(response2.message);
      navigate(`/Inventory-details/${empid}`);
      // navigate("/company-list");
    } catch (error) {
      toast.error(error.message);


    }
    finally {
      setLoadings(false);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const Token = localStorage.getItem('Token');
      try {
        const url = `${apiUrl}/applicant/getApplicantById/${empid}`;
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





  useEffect(() => {
    const fetchUsers = async () => {
      const Token = localStorage.getItem('Token');
      try {
        const url = `${apiUrl}/applicant/getApplicantById/${empid}`;
        const result = await fetch(url, {
          headers: {
            Authorization: `Bearer ${Token}`,
            'Content-Type': 'application/json',
          },
        });

        const { data } = await result.json();

        setValue(data?.paymentLedger[0]?.amount);
        setValues(data?.paymentLedger[0]?.collectionMode);
        setValues(data?.paymentLedger[0]?.collectionMode);
        setValuess(data?.paymentLedger[0]?.transactionNo);
        setValueOne(data?.paymentLedger[0]?.chequeNo);
        setValueTwo(data?.paymentLedger[0]?.chequeDateOnly);
        setValueThree(data?.paymentLedger[0]?.deposteToAmrs);
        setchequeDDAmount(data?.paymentLedger[0]?.amount);
        // setValueFour(data?.paymentLedger[0]?.remark);





      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsers();
  }, [apiUrl, empid]);




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };





  return (
    <div className="page">

      <TopHeader />
      <Prince />
      <div style={{ background: "white", margin: 0, padding: "50px 0" }}>
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
                <h3 style={{ fontSize: '22px' }}>{formData?.project?.projectName}</h3>
                <hr style={{ border: '1px solid black' }}></hr>
                <h4 style={{ fontSize: '18px' }}>
                  Allotment Under {formData?.scheme?.schemeName}
                </h4>
                <hr style={{ border: '1px solid black' }}></hr>
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
                                  value={formData.fullName}
                                  name='fullName'

                                  onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^[a-zA-Z\s]*$/.test(value)) {
                                      handleChange(e);
                                    }
                                  }}
                                  style={{
                                    border: "1px solid #cdcdd7",

                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150

                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Relation To</span>
                                <br />
                                <input
                                  type="text"
                                  name="applicantFatherName"
                                  value={formData.applicantFatherName}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^[a-zA-Z\s]*$/.test(value)) {
                                      handleChange(e);
                                    }
                                  }}
                                  style={{
                                    border: formErrors.applicantFatherName ? "1px solid red" : "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150,
                                  }}
                                />


                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Photo :</span>
                                <br />

                                <img style={{ height: '40px', width: '40px' }} src={formData.applicantImage || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}></img>
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
                                  name="applicantMobile"
                                  value={formData.applicantMobile}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d{0,10}$/.test(value)) {
                                      handleChange(e);
                                    }
                                  }}

                                  style={{
                                    border: formErrors.applicantMobile ? "1px solid red" : "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150,
                                  }}
                                />


                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>
                                  Date of Birth :
                                </span>
                                <br />
                                <input
                                  type="date"
                                  name='applicantDOB'
                                  value={formData.applicantDOB}
                                  onChange={handleChange}
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
                                  name="applicantNationality"
                                  value={formData.applicantNationality}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^[a-zA-Z\s]*$/.test(value)) {
                                      handleChange(e);
                                    }
                                  }}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150,
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
                                  name="applicantPAN"
                                  value={formData.applicantPAN}
                                  onChange={(e) => {
                                    const value = e.target.value.toUpperCase(); // Automatically convert input to uppercase
                                    if (/^[A-Z]{0,5}\d{0,4}[A-Z]?$/.test(value)) {
                                      handleChange({ target: { name: e.target.name, value } }); // Update state only if valid
                                    }
                                  }}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150,
                                  }}

                                />

                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Profession :</span>
                                <br />
                                <input
                                  type="text"
                                  name='applicantProfession'
                                  value={formData.applicantProfession}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^[a-zA-Z\s]*$/.test(value)) {
                                      handleChange(e); // Allow only alphabetic characters and spaces
                                    }
                                  }}

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
                                  name="applicantAadhaarNumber"
                                  value={formData.applicantAadhaarNumber}
                                  onChange={(e) => {
                                    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                                    if (value.length > 12) value = value.slice(0, 12); // Limit to 12 digits

                                    // Format the value as xxxx-xxxx-xxxx
                                    const formattedValue = value.replace(/(\d{4})(\d{4})(\d{0,4})/, (_, p1, p2, p3) => {
                                      if (p3) return `${p1}-${p2}-${p3}`;
                                      if (p2) return `${p1}-${p2}`;
                                      return p1;
                                    });

                                    handleChange({ target: { name: "applicantAadhaarNumber", value: formattedValue } });
                                  }}
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
                                <span style={{ color: "#847f7f" }}>Email Id :</span>
                                <br />
                                <input
                                  type="text"
                                  name='applicantEmail'
                                  value={formData.applicantEmail}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    // Allow only letters, numbers, @, and .
                                    const validChars = /^[a-zA-Z0-9@.]*$/;
                                    if (validChars.test(value) || value === "") {
                                      handleChange(e); // Update state only if input is valid
                                    }
                                  }}

                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 200
                                  }}
                                />
                              </td>
                              <td colSpan={2}>
                                <span style={{ color: "#847f7f" }}>Address :</span>
                                <br />
                                <input
                                  type="text"
                                  name='applicantAddress'
                                  value={formData.applicantAddress}
                                  onChange={handleChange}

                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 300
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
                                  value={formData.coFullName}
                                  name='coFullName'

                                  onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^[a-zA-Z\s]*$/.test(value)) {
                                      handleChange(e); // Allow only alphabetic characters and spaces
                                    }
                                  }}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Relation To</span>
                                <br />
                                <input
                                  type="text"
                                  name='coApplicantFatherName'
                                  value={formData.coApplicantFatherName || ''}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^[a-zA-Z\s]*$/.test(value)) {
                                      handleChange(e); // Allow only alphabetic characters and spaces
                                    }
                                  }}

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
                                <img style={{ height: '40px', width: '40px' }} src={profilePic2 || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}></img>

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
                                  name='coApplicantMobile'
                                  value={formData.coApplicantMobile}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d{0,10}$/.test(value)) {
                                      handleChange(e); // Allow only numbers and limit to 10 digits
                                    }
                                  }}

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
                                  type="date"
                                  name='coApplicantDOB'
                                  value={formData.coApplicantDOB}
                                  onChange={handleChange}

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
                                  name='coApplicantNationality'
                                  value={formData.coApplicantNationality}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^[a-zA-Z\s]*$/.test(value)) {
                                      handleChange(e); // Allow only alphabetic characters and spaces
                                    }
                                  }}
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
                                  name='coApplicantProfession'
                                  value={formData.coApplicantProfession}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^[a-zA-Z\s]*$/.test(value)) {
                                      handleChange(e); // Allow only alphabetic characters and spaces
                                    }
                                  }}

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
                                  name="coApplicantEmail"
                                  value={formData.coApplicantEmail}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    // Allow only letters, numbers, @, and .
                                    const validChars = /^[a-zA-Z0-9@.]*$/;
                                    if (validChars.test(value) || value === "") {
                                      handleChange(e); // Update state only if input is valid
                                    }
                                  }}
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 200
                                  }}

                                />

                              </td>
                              <td>
                                <span style={{ color: "#847f7f" }}>Aadhaar No :</span>
                                <br />
                                <input
                                  type="text"
                                  name='coApplicantAadhaarNumber'
                                  value={formData.coApplicantAadhaarNumber}
                                  onChange={(e) => {
                                    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                                    if (value.length > 12) value = value.slice(0, 12); // Limit to 12 digits

                                    // Format the value as xxxx-xxxx-xxxx
                                    const formattedValue = value.replace(/(\d{4})(\d{4})(\d{0,4})/, (_, p1, p2, p3) => {
                                      if (p3) return `${p1}-${p2}-${p3}`;
                                      if (p2) return `${p1}-${p2}`;
                                      return p1;
                                    });

                                    handleChange({ target: { name: "coApplicantAadhaarNumber", value: formattedValue } });
                                  }}

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
                                  name='coApplicantAddress'
                                  value={formData.coApplicantAddress}
                                  onChange={handleChange}

                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 300
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
                                <span style={{ color: "#847f7f" }}>Area(
                                  {(formData.schemeType === 'Plot' || formData.schemeType === 'Farmhouse') &&
                                    'SQ YD'
                                  }
                                  {formData.schemeType === 'Shop' &&
                                    'SQ FT'
                                  }

                                  )</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.size}
                                  disabled
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
                                  disabled
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
                                  value={formData.PLCs}
                                  disabled
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
                                  Payment Plan :
                                </span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.paymentPlan}
                                  disabled
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
                                <span style={{ color: "#847f7f" }}>PLC Amount :</span>
                                <br />
                                <input
                                  type="text"
                                  value={formData.PLCsValue}
                                  disabled
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
                                  Registration Amount:
                                </span>
                                <br />
                                <input
                                  type="text"
                                  value={value}
                                  disabled
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
                                  disabled
                                  style={{
                                    border: "1px solid #cdcdd7",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: 150
                                  }}
                                />
                              </td>

                              <td>
                                <span style={{ color: "#847f7f" }}>Development Charges :</span>
                                <br />
                                <input
                                  type="text"
                                  value={
                                    Number.isFinite(formData.fixedCharges) && Number.isFinite(formData.area)
                                      ? Math.floor(formData.fixedCharges * formData.area).toString()
                                      : ''
                                  }
                                  disabled
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

                                  value={values}
                                  disabled
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

                              {values === 'Cash' && (
                                <td>
                                  <span style={{ color: "#847f7f" }}>
                                    Remark :
                                  </span>
                                  <br />
                                  <input
                                    type="text"
                                    // value={valueFour}
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: 150
                                    }}
                                  />
                                </td>
                              )}
                              {values === 'Online' && (
                                <td>
                                  <span style={{ color: "#847f7f" }}>
                                    Transaction ID :
                                  </span>
                                  <br />
                                  <input
                                    type="text"
                                    value={valuess}
                                    disabled
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: 150
                                    }}
                                  />
                                </td>

                              )}

                              {values === 'POS' && (
                                <td>
                                  <span style={{ color: "#847f7f" }}>
                                    Transaction ID :
                                  </span>
                                  <br />
                                  <input
                                    type="text"
                                    value={valuess}
                                    disabled
                                    style={{
                                      border: "1px solid #cdcdd7",
                                      padding: 7,
                                      borderRadius: 5,
                                      width: 150
                                    }}
                                  />
                                </td>

                              )}

                              {values === 'Cheque' && (
                                <>
                                  <td>
                                    <span style={{ color: "#847f7f" }}>
                                      Cheque No :
                                    </span>
                                    <br />
                                    <input
                                      type="text"
                                      value={valueOne}
                                      disabled
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
                                      value={valueTwo}
                                      disabled
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

                              {values === 'Cheque' && (
                                <>
                                  <td>
                                    <span style={{ color: "#847f7f" }}>
                                      Cheque Details: Bank :
                                    </span>
                                    <br />
                                    <input
                                      type="text"
                                      value={valueThree}
                                      disabled
                                      style={{
                                        border: "1px solid #cdcdd7",
                                        padding: 7,
                                        borderRadius: 5,
                                        width: 200

                                      }}
                                    />
                                  </td>
                                </>

                              )}

                              {values === 'Cheque' && (
                                <>
                                  <td>
                                    <span style={{ color: "#847f7f" }}>
                                      Cheque/DD Amount :
                                    </span>
                                    <br />
                                    <input
                                      type="text"
                                      value={chequeDDAmount}
                                      disabled
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
                  <li>The Intending Buyer has applied for the registration of Plot/Farmhouse/Shop with full knowledge and subject to all laws, notifications and rules applicable to this area, which have been explained by the company and understood by him/her.</li>
                  <li>The intending buyer has fully satisfied himself/herself about the interest and title of the company in the land, understands all limitations and obligations in respect of it and does not have any objection.</li>
                  <li>For preferential situated Plot/Farm House, extra charges as applicable will be payable by the intending buyer.</li>
                  <li>The cost of Development Charges for a Plot/Farmhouse/Shop whatever is applicable will be payable by the customer.</li>
                  <li>If any applicant wants to cancel his/her registration once they have applied for a Plot/Farmhouse/Shop under this scheme, then the company will refund his/her registration money after deducting 50% of the total cost of Unit/s.</li>
                  <li>The applicant has to pay the maintenance & Security charges as applicable.</li>
                  <li>In case if any client fails to pay the maintenance & security charges on time, then the company will not be responsible for the security of his/her property or not be responsible if anyone encroaches his/her property and the client cannot blame the company for any loss whatsoever. Moreover the company will not provide the maintenance services for common area to such clients.</li>
                  <li>The company reserves the right to cancel the registration/allotment of the Plot/Farmhouse/Shop in case if any cheque for the Registration Amount or the Balance Amount for that Plot/Farmhouse/Shop bounced/dishonored due to customer’s fault.</li>
                  <li>The applicant/allotee shall before taking possession of the residential Plot/Farmhouse/Shop, must clear all the dues towards the residential Plot/Farmhouse/Shop and have the Conveyance Deed for the said residential Plot/Farm House executed in his favour by the Company after paying stamp duty, registration fee and other charges/expenses.</li>
                  <li>The company can change its scheme at any time and the applicants are not supposed to show any objection on the same.</li>
                  <li>It is made clear that it is not possible to check the eligibility of applicant at the time of acceptance of the Registration form. Therefore, those who are not eligible would register their name at their own risk and wouldn’t be entitled for allotment of Plot/Farmhouse/Shop if at a later stage it is detected that they are not eligible under the scheme.</li>
                  <li>All allotments shall be made on free hold basis. However, the title shall be transferred only when Sale Deed/Registry is executed in favour of the allotee and is registered in the office of Sub-Registrar.</li>
                  <li>The Company reserves the right to alter/amend/modify any of the terms & conditions of application eligibility and allotment at its sole discretion or as desired/directed by the Govt. of the State/India. The consequences of such alteration/amendment/modification will be automatically binding on all applicants, without any further reference of them.</li>
                  <li>If any misrepresentation/concealment/suppression of material facts are found to be made by the applicant/allotee, then the allotment of the given Plot/Farmhouse/Shop will be cancelled at the immediate effect and the total amount of the Plot/Farm House will be refunded after deducting 50% of the total Cost.</li>
                  <li>Cheque/DD/Payorder to be in the name of {formData?.project?.company?.companyBank[0]?.bankAccount?.accountName || 'Webkype'}.</li>
                  <li>Cheque bouncing will be charged Rs.1500/- as penalty, and delay in payment at 18% interest.</li>
                  <li>All provisional allotments under India’s Smart City and Tourism Development Plan is around 30-35% less cost than Original Price. In Case of Payment Delay in any payment plan for more than 45 days, the allotment will be cancelled from under India’s Smart City and Tourism Development Plan and Original price of Plot/Farmhouse/Shop shall be paid by the applicant/allotee.</li>
                  <li>Possession will be given within 24 months after booking. In case possession is not given, 18% interest will be paid to the buyer on the booking amount.</li>
                  <li>All PDC Cheques, according to the Payment Plan selected by The Client till Registry, need to be deposited at the time of agreement and gift dispersal in Noida Office.</li>
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
                  <li>I/We declare that I/We have read & understood the above mentioned terms and conditions of the project and shall abide by them.</li>
                  <li>The Plot/Farmhouse/Shop allotted to me by the company under the rules shall be acceptable to me/us. I/We shall have no objection.</li>
                  <li>In case of cancellation of registration done by me/us, I/We shall accept the deduction made by the company as per rules.</li>
                  <li>I agree that the measurement/number and area of Plot/Farmhouse/Shop required by me/us can vary at the time of Registry as per the Govt. Rules/Approved Map and Availability.</li>
                  <li>I/We hereby declare that all information on the application form has been given by me/us are true to the best of knowledge and belief.</li>
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
                        <h4>{currentDate}</h4>
                      </td>
                      <td align="right">
                        <img style={{ height: '60px', width: '60px', marginRight: '20px' }} src='https://erp-api.amrealtysolutions.com/uploads/DhnaultyHeightSign.jpg'></img>
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
                <br />
                <button
                  className="btn ripple btn-primary"
                  type="button"
                  style={{
                    borderRadius: '5px',
                    padding: '8px 20px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: loadings ? 'not-allowed' : 'pointer',
                    opacity: loadings ? 0.7 : 1,

                    whiteSpace: 'nowrap'
                  }}
                  onClick={handleSubmit}
                  disabled={loadings}
                >
                  {loadings ? 'Loading...' : 'Send Allotment Letter'}
                </button>
              </td>
              <br />
              <br />
              <td colSpan={3} style={{ height: 20 }}></td>

            </tr>

          </tbody>



          <td colSpan={3} style={{ height: 26 }}></td>



        </table>

      </div>

    </div>
  )
}

export default AllotmentLetter