import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DemandLetter = () => {
  const { empid } = useParams();
  const navigate = useNavigate();
  const initialFormData = {
    ticketId: '',
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
  const initialFormData2 = {
    brocehureImage: '',
    paymentPlanImage: '',
    basicPriceFPP: '',
    onBookingPerFPP: '',
    onBookingFPP: '',
    installMentFPP: '',
    totalValuePerFPP: '',
    totalValueFPP: '',
    basicPricePLP: '',
    onBookingPerPLP: '',
    onBookingPLP: '',
    withIn60PerPLP: '',
    withIn60PLP: '',
    withIn90PerPLP: '',
    withIn90PLP: '',
    withIn120PerPLP: '',
    withIn120PLP: '',
    withIn150PerPLP: '',
    withIn150PLP: '',
    withIn180PerPLP: '',
    withIn180PLP: '',
    restOnRegistryPerPLP: '',
    restOnRegistryPLP: '',
    basicPriceDLP: '',
    onBookingPerDLP: '',
    onBookingDLP: '',
    withIn30PerDLP: '',
    withIn30DLP: '',
    restOnRegistryPerDLP: '',
    restOnRegistryDLP: '',
    totalValuePerDLP: '',
    totalValueDLP: '',
    schemeId: '',
    projectId: '',
    companyId: '',
    planDescription: '',

    extraPLP1: '',
    extraPerPLP1: '',
    extraValuePLP1: '',

    extraPLP2: '',
    extraPerPLP2: '',
    extraValuePLP2: '',

    extraPLP3: '',
    extraPerPLP3: '',
    extraValuePLP3: '',

    totalPerPLP: '',
    totalValuePLP: '',
    note: '',
    createdAt: '',
    areaFPP: '',
    areaUnitFPP: '',

    areaPLP: '',
    areaUnitPLP: '',

    areaDLP: '',
    areaUnitDLP: '',
    companyPhoto: '',

  };

  const [formData2, setFormData2] = useState(initialFormData2);
  const initialFormData3 = {
    subject: '',
    name: '',
    projectName: '',
    clientName: '',
    ticketId: '',
    allotmentUnit: '',
    area: '',
    paymentPlan: '',
    basicSalesPrice: '',
    fixedCharges: '',
    plc: '',
    totalCost: '',
    amountPaid: '',
    paymentDue: '',
    duePaymentDate: '',
    bank: '',
    noteDate: '',
    interest: '',
    basicSalesPriceAmount: '',
    fixedChargesAmount: '',
    plcAmount: '',
    schemeName: '',
    date: '',
    size: '',
    duePaymentDate2: '',
  };
  const [formData3, setFormData3] = useState(initialFormData3);
  const [project, setProject] = useState([]);
  const [employee, setEmployee] = useState({})
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [plc1, setPlc1] = useState('');
  const [plc2, setPlc2] = useState('');
  const [plc3, setPlc3] = useState('');
  const [plc4, setPlc4] = useState('');

  const [plc5, setPlc5] = useState('');
  const [hovered, setHovered] = useState(false);
  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem("Token");

  const handleOpenModal4 = () => {
    setIsModalOpen4(true);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal4 = () => {
    setIsModalOpen4(false);
    document.body.classList.remove('modal-open');
  };

  useEffect(() => {
    const updateDateTime = () => {
      setCurrentDateTime(new Date());
    };

    // Set an interval to update the date and time every minute
    const intervalId = setInterval(updateDateTime, 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the date and time
  const formattedDate = currentDateTime.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });


  useEffect(() => {
    async function getEmp() {
      const Token = localStorage.getItem("Token");

      let response = await fetch(`${apiUrl}/bank/getBankDetailsById/${formData3.bank}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`
        },
      });
      response = await response.json();

      console.log("API response:", response); // Log API response

      if (response.status === "success") {
        setEmployee(response.data);
      }
    }
    getEmp();
  }, [formData3.bank]);



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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData3) {
        if (formData3[key] !== null) {
          formDataToSend.append(key, formData3[key]);
        }
      }
      const url = `${apiUrl}/letter/addDemandLetter?=&applicantId=${empid}`;
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

    } catch (error) {
      toast.error(error.message);

    }
  };


  useEffect(() => {
    const fetchUser = async () => {
      const Token = localStorage.getItem('Token');
      try {
        const url = `${apiUrl}/applicant/getApplicantInfo/${empid}`;
        const result = await fetch(url, {
          headers: {
            Authorization: `Bearer ${Token}`,
            'Content-Type': 'application/json',
          },
        });

        const { data } = await result.json();



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

    const sizeValue = parseFloat(formData.area);
    const fixedChargesPercentage = parseFloat(formData.bsp);

    if (!isNaN(fixedChargesPercentage) && !isNaN(sizeValue)) {

      const totalValue = sizeValue * fixedChargesPercentage;

      let formattedTotalValue = totalValue.toFixed(0);

      if (formattedTotalValue.endsWith('.00')) {
        formattedTotalValue = formattedTotalValue.slice(0, -3);
      }

      setPlc1(formattedTotalValue);
    } else {

      setPlc1(null);
    }
  }, [formData.bsp, formData.size]);




  useEffect(() => {

    const sizeValue = parseFloat(formData.area);

    const fixedChargesPercentage = parseFloat(formData.fixedCharges);

    if (!isNaN(fixedChargesPercentage) && !isNaN(sizeValue)) {
      const totalValue = sizeValue * fixedChargesPercentage;

      let formattedTotalValue = totalValue.toFixed(0);

      if (formattedTotalValue.endsWith('.00')) {
        formattedTotalValue = formattedTotalValue.slice(0, -3);
      }

      setPlc2(formattedTotalValue);
    } else {
      setPlc2(null);
    }
  }, [formData.fixedCharges, formData.size]);



  // useEffect(() => {

  //   const parsedPlc1 = parseFloat(plc1); 
  //   const plcString = formData.PLCs;

  //   if (!isNaN(parsedPlc1) && plcString) {
  //     // Extract the percentage value from the PLCs string, e.g., "cornerPlc(7)"
  //     const percentageString = plcString.split('(')[1]?.split(')')[0]; // Extract "7" from "cornerPlc(7)"

  //     if (percentageString) {
  //       const percentage = parseFloat(percentageString); // Extracted percentage as a number

  //       // Calculate the percentage value
  //       const percentageValue = (parsedPlc1 * percentage) / 100;

  //       // Format the percentage value and remove decimal if it's ".00"
  //       let formattedPercentageValue = percentageValue.toFixed(0);
  //       if (formattedPercentageValue.endsWith('.00')) {
  //         formattedPercentageValue = formattedPercentageValue.slice(0, -3);
  //       }

  //       // Set the calculated value to state
  //       setPlc3(formattedPercentageValue);
  //     }
  //   }
  // }, [plc1, formData.PLCs]);



  useEffect(() => {
    const parsedPlc1 = parseFloat(plc1);
    const percentage = parseFloat(formData.PLCs);

    if (!isNaN(parsedPlc1) && !isNaN(percentage)) {
      // Calculate the percentage value
      const percentageValue = (parsedPlc1 * percentage) / 100;

      // Set the calculated value to state without formatting
      setPlc3(percentageValue);
    }
  }, [plc1, formData.PLCs]);


  useEffect(() => {

    const areaValue = parseFloat(plc1);
    const areaValues = parseFloat(plc2);
    const areaValuess = parseFloat(plc3);

    if (!isNaN(areaValue) && !isNaN(areaValues) && !isNaN(areaValuess)) {

      const partialTotal = areaValue + areaValues;


      const totalValue = partialTotal + areaValuess;


      let formattedTotalValue = totalValue.toFixed(0);
      if (formattedTotalValue.endsWith('.00')) {
        formattedTotalValue = formattedTotalValue.slice(0, -3);
      }

      setPlc4(formattedTotalValue);
    }
  }, [plc1, plc2, plc3]);







  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, name: `${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}` }));
  }, [formData.applicantFirstName, formData.applicantMiddleName, formData.applicantLastName]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, projectName: formData.projectId }));
  }, [formData.projectId]);


  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, ticketId: formData.ticketId }));
  }, [formData.ticketId]);


  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, clientName: `${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}` }));
  }, [formData.applicantFirstName, formData.applicantMiddleName, formData.applicantLastName]);


  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, allotmentUnit: formData.unitNo }));
  }, [formData.unitNo]);


  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, area: formData.area }));
  }, [formData.area]);


  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, basicSalesPrice: formData.bsp }));
  }, [formData.bsp]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, fixedCharges: formData.fixedCharges }));
  }, [formData.fixedCharges]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, plc: formData.PLCs }));
  }, [formData.PLCs]);

  // useEffect(() => {
  //   setFormData3(prevFormData3 => ({ ...prevFormData3, totalCost: formData.totalCost }));
  // }, [formData.totalCost]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, paymentPlan: formData.paymentPlan }));
  }, [formData.paymentPlan]);







  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, basicSalesAmount: plc1 }));
  }, [plc1]);


  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, basicSalesPriceAmount: plc1 }));
  }, [plc1]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, fixedChargesAmount: plc2 }));
  }, [plc2]);

  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, plcAmount: plc3 }));
  }, [plc3]);
  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, totalCost: plc4 }));
  }, [plc4]);







  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, schemeName: formData.schemeId }));
  }, [formData.schemeId]);


  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, date: formattedDate }));
  }, [formattedDate]);
  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, size: formData.size }));
  }, [formData.size]);


  useEffect(() => {
    setFormData3(prevFormData3 => ({ ...prevFormData3, amountPaid: formData3.amountPaid || formData.totolReceived }));
  }, [formData3.amountPaid || formData.totolReceived]);




  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setFormData3((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (


    <div className="page">
      <TopHeader />
      <Prince />
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
            {/* <td align="center" colSpan={3}><strong>{formattedDate}</strong></td> */}
            <tr>
              <td align="center" colSpan={3}>
                <a href="">
                  <img border={0} width={150} src={formData?.project?.company?.profilePhoto || 'https://amrealty.webkype.com/assets/img/brand/logo.png'} />

                  {/* <img border={0} width={150} src="https://amrealty.webkype.com/assets/img/brand/logo.png" alt='' /> */}
                </a>
                <br />
                <h3>Demand Letter</h3>
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
                      <td>
                        <p>
                          Subject:{" "}
                          <input
                            type="text"
                            name="subject"
                            value={formData3.subject}
                            onChange={handleChange2}
                            style={{
                              border: "1px solid #cdcdd7",
                              padding: 7,
                              borderRadius: 5
                            }}
                          />
                        </p>
                        Date: {formattedDate}
                        <br />
                        <br />
                        <p>
                          Dear Mr/Ms/Mrs:{" "}
                          <input
                            type="text"
                            name="name"
                            value={`${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}`}
                            style={{
                              border: "1px solid #cdcdd7",
                              padding: 7,
                              borderRadius: 5
                            }}
                          />
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ height: 30 }} />
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
                          per the allotment of Plot/Farm House under {" "}
                          <b>
                            {formData.schemeId} {" "}  (भारतीय स्मार्ट शहर व
                            पर्यटनविकास योजना (आई.एस.सी.टी.डी.पी.) फुलेरा / सांभर /
                            शाहपुरा )
                          </b>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px' }}>
                        <table
                          align="center"
                          width="100%"
                          style={{ borderCollapse: 'collapse', borderRadius: '5px', backgroundColor: '#fff' }}
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: '10px' }}>Project Name</td>
                              <td style={{ padding: '10px' }}>
                                <input
                                  type="text"
                                  value={formData.projectId}
                                  style={{
                                    padding: '5px',
                                    borderRadius: '3px',
                                    border: '1px solid #ccc',
                                    width: 'calc(100% - 12px)',
                                    boxSizing: 'border-box'
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
                              <th style={{ padding: "5px 20px", border: "1px solid #ccc", textAlign: "center", whiteSpace: 'nowrap' }}>Area({formData.schemeType}) </th>
                              <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Payment Plan</th>
                              <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Basic Sales Price (Per {formData.schemeType === 'Plot' || formData.schemeType === 'Farmhouse'
                                ? 'SQYD'
                                : formData.schemeType === 'Shop'
                                  ? 'SQ FT'
                                  : ''})</th>
                              <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>EDC/IDC (Per {formData.schemeType === 'Plot' || formData.schemeType === 'Farmhouse'
                                ? 'SQYD'
                                : formData.schemeType === 'Shop'
                                  ? 'SQ FT'
                                  : ''})</th>
                              <th style={{ padding: "5px 15px", border: "1px solid #ccc", textAlign: "center" }}>PLC (in %)</th>
                              <th style={{ padding: "5px 10px", border: "1px solid #ccc", textAlign: "center" }}>Total Cost</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={`${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}`}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "100%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={formData.unitNo}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "80%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 20px", border: "1px solid #ccc" }}>

                                <input
                                  type="text"
                                  value={`${formData.area} ${formData.schemeType === 'Plot' || formData.schemeType === 'Farmhouse'
                                    ? 'SQYD'
                                    : formData.schemeType === 'Shop'
                                      ? 'SQ FT'
                                      : ''
                                    }`}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "120%"
                                  }}
                                  readOnly
                                />
                                {" "}


                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <select
                                  className="form-control"
                                  name="paymentPlan"
                                  value={formData.paymentPlan}
                                  onChange={handleChange}
                                  disabled
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
                                  value={formData.bsp}
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
                              <td style={{ padding: "10px 30px", border: "1px solid #ccc" }}>
                                <select
                                  className="form-control"
                                  // name="PLCs"
                                  // value={formData.PLCs}
                                  // onChange={handleChange}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "130%"
                                  }}
                                >
                                  <option>{formData.PLCs}</option>

                                </select>
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}> </td>
                            </tr>
                            <tr>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }} colSpan={4}></td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={plc1}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "100%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={plc2}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "100%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 30px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={plc3}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "145%"
                                  }}
                                />
                              </td>
                              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                <input
                                  type="text"
                                  value={plc4}
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: 7,
                                    borderRadius: 5,
                                    width: "100%"
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
                          style={{ borderColor: "#fcfcfc" }}
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: "5px 10px", width: "60%" }}>
                                Amount Paid(Rs.)
                              </td>
                              <td style={{ padding: "5px 10px" }}>
                                <input
                                  type="text"
                                  name="amountPaid"
                                  placeholder={formData.totolReceived}
                                  value={formData3.amountPaid}
                                  onChange={handleChange2}
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
                              <td style={{ padding: "5px 10px" }}>
                                Payment Due (Demand) as per payment Plan.
                              </td>
                              <td style={{ padding: "5px 10px" }}>
                                <input
                                  type="text"
                                  name="paymentDue"
                                  value={formData3.paymentDue}
                                  onChange={handleChange2}
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
                      <td style={{ height: 20 }} />
                    </tr>
                    <tr>
                      <td>
                        <p style={{ marginTop: 0, marginBottom: 10 }}>
                          In accordance with the terms of the allotment, due payment
                          need to be paid before{" "}
                          <input
                            type="date"
                            name="duePaymentDate"
                            value={formData3.duePaymentDate}
                            onChange={handleChange2}
                            style={{
                              border: "1px solid #cdcdd7",
                              padding: 7,
                              borderRadius: 5
                            }}
                          />
                        </p>
                        <p style={{ marginTop: 0, marginBottom: 10 }}>
                          {" "}
                          You are requested to make the due payment by Demand Draft/Cheque
                          in favour of “{formData.project?.bankAccount?.accountName}” at the
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
                          Title: {formData.project?.bankAccount?.title}
                          <br />
                          Account Name: {formData.project?.bankAccount?.accountName}
                          <br />
                          Account Number: {formData.project?.bankAccount?.accountNumber}
                          <br />
                          Bank Name: {formData.project?.bankAccount?.bankName}
                          <br />
                          Branch: {formData.project?.bankAccount?.branch}
                          <br />
                          IFSC: {formData.project?.bankAccount?.ifsc}

                        </p>


                        <br />
                        <tr>
                          <td>
                            <p style={{ marginTop: 0, marginBottom: 10 }}>
                              {" "}
                              Note: With effect from{" "}
                              <input
                                type="date"
                                name="noteDate"
                                value={formData3.noteDate}
                                onChange={handleChange2}
                                style={{
                                  border: "1px solid #cdcdd7",
                                  padding: 7,
                                  borderRadius: 5
                                }}
                              />{" "}
                              , an interest of @{" "}
                              <input
                                type="text"
                                name="interest"
                                value={formData3.interest}
                                onChange={handleChange2}
                                style={{
                                  border: "1px solid #cdcdd7",
                                  padding: 7,
                                  borderRadius: 5,
                                  width: 100
                                }}
                              />{" "}
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



                        </tr>
                        <br />
                        <p>
                          <b>With Best Regards</b>
                          <br />
                          Apoorva Srivastava
                          <br />
                          Accounts Manager
                          <br />
                          Landline: 0120-4547484
                        </p>
                        <br />
                        <p>
                          <button
                            className="btn ripple btn-info btn-rounded  btn-rounded-sm mb-3 btn-fullWidth"
                            onClick={handleOpenModal4}

                          >
                            View
                          </button>

                          <div
                            className={`modal ${isModalOpen4 ? 'show' : ''}`}
                            style={{
                              display: isModalOpen4 ? 'block' : 'none',

                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              zIndex: 9999,
                              overflow: 'auto',
                            }}
                            tabIndex="-1"
                            role="dialog"
                          >
                            <div className="modal-dialog modal-dialog-centered modal-lg-500" style={{ maxWidth: '2000%' }}>
                              <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                  <h5 className="modal-title">View Demand Latter</h5>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCloseModal4}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px' }}>
                                  <form style={{ width: '100%' }}>
                                    <div >
                                      <table
                                        align="center"
                                        width={800}
                                        border={0}
                                        cellSpacing={0}
                                        cellPadding={0}

                                      >
                                        <tbody>
                                          <tr>
                                            <td colSpan={3} style={{ height: 20 }} />
                                          </tr>
                                          {/* <td align="center" colSpan={3}><strong>{formattedDate}</strong></td> */}
                                          <tr>
                                            <td align="center" colSpan={3}>
                                              <a href="">
                                                <img border={0} width={150} src="https://amrealty.webkype.com/assets/img/brand/logo.png" alt='' />
                                              </a>
                                              <br />
                                              <h3>Demand Letter</h3>
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
                                                    <td>
                                                      <p>
                                                        Subject:{" "}
                                                        <span style={{ color: 'blue' }}>{formData3.subject}</span>
                                                      </p>
                                                      Date: {formattedDate}
                                                      <br />
                                                      <p>
                                                        Dear Mr/Ms/Mrs:{" "}
                                                        <span style={{ color: 'blue' }}>{`${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}`}</span>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td style={{ height: 30 }} />
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
                                                        per the allotment of Plot/Farm House under {" "} <span style={{ color: 'blue' }}>{formData.schemeId}</span>{" "}
                                                        <b>
                                                          (भारतीय स्मार्ट शहर व
                                                          पर्यटनविकास योजना (आई.एस.सी.टी.डी.पी.) फुलेरा / सांभर /
                                                          शाहपुरा )
                                                        </b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td style={{ padding: '10px' }}>
                                                      <table
                                                        align="center"
                                                        width="100%"
                                                        style={{ borderCollapse: 'collapse', borderRadius: '5px', backgroundColor: '#fff' }}
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td style={{ padding: '10px' }}>Project Name: <span style={{ color: 'blue' }}>{formData.projectId}</span></td>

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
                                                              <span style={{ color: 'blue' }}>{`${formData.applicantFirstName} ${formData.applicantMiddleName} ${formData.applicantLastName}`}</span>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                              <span style={{ color: 'blue' }}>{formData.unitNo}</span>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                              <span style={{ color: 'blue' }}>{formData.size}</span>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                              <span style={{ color: 'blue' }}>{formData.paymentPlan}</span>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                              <span style={{ color: 'blue' }}>{formData.bsp}</span>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                              <span style={{ color: 'blue' }}>{formData.fixedCharges}</span>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                              <span style={{ color: 'blue' }}>{formData.PLCs}</span>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}> </td>
                                                          </tr>
                                                          <tr>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }} colSpan={4}></td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                              <span style={{ color: 'blue' }}>{plc1}</span>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                              <span style={{ color: 'blue' }}>{plc2}</span>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                              <span style={{ color: 'blue' }}>{plc3}</span>
                                                            </td>
                                                            <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>
                                                              <span style={{ color: 'blue' }}>{plc4}</span>
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
                                                        style={{ borderColor: "#fcfcfc" }}
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td style={{ padding: "5px 10px", width: "60%" }}>
                                                              Amount Paid: <span style={{ color: 'blue' }}>{formData3.amountPaid} {formData.totolReceived}</span>
                                                            </td>

                                                          </tr>
                                                          <tr>
                                                            <td style={{ padding: "5px 10px" }}>
                                                              Payment Due (Demand) as per payment Plan:  <span style={{ color: 'blue' }}>{formData3.paymentDue}</span>
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
                                                        <span style={{ color: 'blue' }}>{formData3.duePaymentDate}</span>
                                                      </p>
                                                      <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                        {" "}
                                                        You are requested to make the due payment by {formData3.duePaymentDate2} Demand Draft/
                                                        Cheque drawn in favour of “<span style={{ color: 'blue' }}>{formData.project?.bankAccount?.accountName}</span>” at the
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
                                                  {/* <tr>
                                                    <td>
                                                      <span style={{ color: 'blue' }}>{formData3.bank}</span>
                                                    </td>
                                                  </tr> */}
                                                  <tr>
                                                    <td style={{ height: 20 }} />
                                                  </tr>

                                                  <tr>
                                                    <td style={{ height: 20 }} />
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <p>
                                                        <b>Bank Details</b>
                                                        <br />
                                                        Title: {formData.project?.bankAccount?.title}
                                                        <br />
                                                        Account Name: {formData.project?.bankAccount?.accountName}
                                                        <br />
                                                        Account Number: {formData.project?.bankAccount?.accountNumber}
                                                        <br />
                                                        Bank Name: {formData.project?.bankAccount?.bankName}
                                                        <br />
                                                        Branch: {formData.project?.bankAccount?.branch}
                                                        <br />
                                                        IFSC: {formData.project?.bankAccount?.ifsc}

                                                      </p>

                                                      <br />
                                                      <tr>
                                                        <td>
                                                          <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                            {" "}
                                                            Note: With effect from{" "}
                                                            <span style={{ color: 'blue' }}>{formData3.noteDate}</span>{" "}
                                                            , an interest of @{" "}
                                                            <span style={{ color: 'blue' }}>{formData3.interest}</span>{" "}
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
                                                      </tr>
                                                      <br />
                                                      <p>
                                                        <b>With Best Regards</b>
                                                        <br />
                                                        Apoorva Srivastava
                                                        <br />
                                                        Accounts Manager
                                                        <br />
                                                        Landline: 0120-4547484
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
                                  </form>
                                </div>

                              </div>
                            </div>
                          </div>
                          <br />
                          <button
                            type='submit'
                            onClick={handleSubmit}
                            style={{
                              backgroundColor: '#01b8ff',
                              padding: '10px',
                              color: '#fff',
                              textDecoration: 'none',
                              fontSize: '13px',
                              borderRadius: '5px',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'background-color 0.3s ease, transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#019fcc';
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#01b8ff';
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          >
                            Send Demand Letter
                          </button>

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

    </div>
  )
}

export default DemandLetter