import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import TopHeader from "../Components/TopHeader";
import Prince from "../Components/Prince";
import Img5 from "../assets/plot.png";
import Img4 from "../assets/img/svgs/4029413.png";
import Img7 from "../assets/WhatsApp Image 2025-01-22 at 10.51.04 AM (1).jpeg";
import Imgs from "../assets/eee.jpg";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPlay,
  faUpload,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InvertyDetaese = () => {
  const { empid } = useParams();
  const navigate = useNavigate();
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen19, setIsModalOpen19] = useState(false);
  const [isModalOpen20, setIsModalOpen20] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);
  const [isModalOpen7, setIsModalOpen7] = useState(false);
  const [isModalOpen8, setIsModalOpen8] = useState(false);
  const [isModalOpen10, setIsModalOpen10] = useState(false);
  const [isModalOpen15, setIsModalOpen15] = useState(false);
  const [isModalOpen16, setIsModalOpen16] = useState(false);
  const [isModalOpen17, setIsModalOpen17] = useState(false);
  const [isMobileModalOpen17, setIsMobileModalOpen17] = useState(false);
  const [isModalOpen21, setIsModalOpen21] = useState(false);
  const [isModalOpen22, setIsModalOpen22] = useState(false);
  const [isModalOpen23, setIsModalOpen23] = useState(false);
  const [isModalOpen101, setIsModalOpen101] = useState(false);
  const [isWaver, setIsWaver] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [waverOtp, setWaverOtp] = useState("");
  const [waverOtpVerified, setWaverOtpVerified] = useState(false);
  const [rating, setRating] = useState(0);
  const [employee, setEmployee] = useState({});
  const [employee2, setEmployee2] = useState({});
  const [employee3, setEmployee3] = useState({});
  const [applicantView, setApplicantView] = useState({});
  const [loadings, setLoadings] = useState(false);
  const [loadingss, setLoadingss] = useState(false);
  const [loadingsss, setLoadingsss] = useState(false);
  const [notesModelOpen, setNotesModelOpen] = useState(false);
  const [notesCount, setNotesCount] = useState(0);
  const [applicantRefference, setApplicantReference] = useState({});
  const [applicantRefferenceCount, setApplicantReferenceCount] = useState(0);

  const [error, setError] = useState("");
  const [leadDetailsfollowups, setLeadDetailsfollowups] = useState([]);
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);
  const [notes, setNotes] = useState([]);

  const [filterByObj, setFilterByObj] = useState({
    stage: "Allocated",
  });

  const initialFormData = {
    comment: "",
  };

  const initialFormData2 = {
    callBackDate: "",
    callBackTime: "",
    lastCallSummary: "",
    remindeMe: "",
    status: "",
    remindeMe: "true",
  };

  const initialFormData3 = {
    meetingDate: "",
    meetingTime: "",
    meetingType: "",
    lastCallSummary: "",
    status: "",
    meetingVenue: "",
    remindeMe: "true",
  };

  const initialFormData4 = {
    reminderType: "",
    reminderDate: "",
    reminderMessage: "",
  };

  const initialFormData5 = {
    reminderType: "",
    reminderDate: "",
    reminderMessage: "",
  };

  const initialFormData6 = {
    kyc: false,
    payment: false,
    penalty: false,
    issue: false,
    nocIssued: "",
    status: "",
    nocUpload: "",
  };

  const lawyerFee =
    employee2.totalCost - employee2.discountAmount >= 1000000 ? 15000 : 10000;

  const initialFormData17 = {
    received: employee2.totolReceived,
    nameOnRegistry: employee2.fullName,
    applicantId: empid,
    discountCam: 0,

    camStartDate: "",
    camEndDate: "",
    totalMonth: 0,

    camRate: "",
    payableCam: 0,
    unitSize: 0,
    refrenceGiven: 0,
    waveOffMonth: "",
    totalCam: 0,

    facebookPost: "",
    instagramPost: "",
    monthsWaiver: "",
    // amountWaveOff: 0,
    finalNocAmount: 0,
    stampDuty: 0,
    intrestAmount: 0,
    lawyerFees: lawyerFee - (applicantRefferenceCount >= 10 ? 3000 : 0),
    // lawyerFees: applicantRefferenceCount >= 10 ? lawyerFee - 3000 : lawyerFee,
    nameChangeCharges: 0,
    chequeBounce: 0,
    chequePenalty: 0,
    chequeBounceCharges: 0,
    stampDutyPer: 0,

    waiverCharges: 0,
    remark: "",

    gst: "18%",

    aadharImage: null,
    panImage: null,
  };

  const initialFormData7 = {
    noc: false,
    registrationDate: "",
    registrationAddress: "",
    registrationStatus: "",
  };

  const initialFormData8 = {
    video: "",
  };

  const initialFormData9 = {
    unitAllocation: "",
    approvedBy: "",
    confirmedBy: "",
    cancelledBy: "",
    remark: "",
  };

  const initialFormData10 = {
    action: "",
    from: "",
    date: "",
    time: "",
    status: "",
    amount: "",
    venue: "",
    mode: "",
    transaction: "",
    remark: "",
    chequeNo: "",
    chequeDetails: "",
    chequeDate: "",
  };

  const initialFormData11 = {
    bbaDate: "",
    bbaFile: "",
    registryDate: "",
    status: "",
  };

  const initialFormData12 = {
    gift: "",
  };

  console.log("leadDetailsfollowups...,", leadDetailsfollowups);

  const [formData, setFormData] = useState(initialFormData);
  const [formData2, setFormData2] = useState(initialFormData2);
  const [formData3, setFormData3] = useState(initialFormData3);
  const [formData4, setFormData4] = useState(initialFormData4);
  const [formData5, setFormData5] = useState(initialFormData5);
  const [formData6, setFormData6] = useState(initialFormData6);
  const [formData17, setFormData17] = useState(initialFormData17);
  const [formData17Loading, setFormData17Loading] = useState(false);
  const [formData7, setFormData7] = useState(initialFormData7);
  const [formData8, setFormData8] = useState(initialFormData8);
  const [formData9, setFormData9] = useState(initialFormData9);
  const [formData10, setFormData10] = useState(initialFormData10);
  const [formData11, setFormData11] = useState(initialFormData11);
  const [formData12, setFormData12] = useState(initialFormData12);
  const [status, setStatus] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [reportingBossA, setReportingBossA] = useState([]);
  const [isModalOpen31, setIsModalOpen31] = useState(false);
  const [isModalOpen56, setIsModalOpen56] = useState(false);
  const [bank, setBank] = useState([]);

  const [showLoader, setShowLoader] = useState(true);
  const [gift, setGift] = useState([]);

  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem("Token");

  const numberSpaceStyle = {
    marginRight: "64px",
  };

  const handleRatingClick = (index) => {
    setRating(rating === index + 1 ? index : index + 1);
  };

  const handleOpenModal21 = () => {
    setIsModalOpen21(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal21 = () => {
    setIsModalOpen21(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenModal7 = () => {
    setIsModalOpen7(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal7 = () => {
    setIsModalOpen7(false);
    document.body.classList.remove("modal-open");
  };
  const handleOpenModal4 = () => {
    setIsModalOpen4(true);
    document.body.classList.add("modal-open");
  };

  const handleOpenModal31 = () => {
    setIsModalOpen31(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal31 = () => {
    setIsModalOpen31(false);
    document.body.classList.remove("modal-open");
  };

  const handleCloseModal4 = () => {
    setIsModalOpen4(false);
    document.body.classList.remove("modal-open");
  };
  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
    document.body.classList.add("modal-open");
  };
  const handleCloseModal2 = () => {
    setIsModalOpen2(false);

    document.body.classList.remove("modal-open");
  };

  const handleOpenModal19 = () => {
    setIsModalOpen19(true);
    document.body.classList.add("modal-open");
  };
  const handleCloseModal19 = () => {
    setIsModalOpen19(false);

    document.body.classList.remove("modal-open");
  };

  const handleOpenModal3 = () => {
    setIsModalOpen3(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal3 = () => {
    setIsModalOpen3(false);
    document.body.classList.remove("modal-open");
  };
  const handleOpenModal5 = () => {
    setIsModalOpen5(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal5 = () => {
    setIsModalOpen5(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenModal6 = () => {
    setIsModalOpen6(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal6 = () => {
    setIsModalOpen6(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenModal8 = () => {
    setIsModalOpen8(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal8 = () => {
    setIsModalOpen8(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenModal20 = () => {
    setIsModalOpen20(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal20 = () => {
    setIsModalOpen20(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenModal10 = () => {
    setIsModalOpen10(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal10 = () => {
    setIsModalOpen10(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenModal15 = () => {
    setIsModalOpen15(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal15 = () => {
    setIsModalOpen15(false);
    document.body.classList.remove("modal-open");
  };
  const handleOpenModal16 = () => {
    setIsModalOpen16(true);
    document.body.classList.add("modal-open");
  };
  const handleOpenModal17 = () => {
    setIsModalOpen17(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal17 = () => {
    setIsModalOpen17(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenMobileModal17 = () => {
    setIsMobileModalOpen17(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseMobileModal17 = () => {
    setIsMobileModalOpen17(false);
    document.body.classList.remove("modal-open");
  };
  const handleCloseModal16 = () => {
    setIsModalOpen16(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenModal56 = async () => {
    setIsModalOpen56(true);
    document.body.classList.add("modal-open");
    await fetchDataFromApii();
  };

  const handleCloseModal56 = () => {
    setIsModalOpen56(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenModal22 = async () => {
    setIsModalOpen22(true);
    document.body.classList.add("modal-open");
    await fetchDataFroms();
  };

  const handleCloseModal22 = () => {
    setIsModalOpen22(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenModal23 = async () => {
    setIsModalOpen23(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal101 = () => {
    setIsModalOpen101(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenModal101 = async () => {
    setIsModalOpen101(true);
    document.body.classList.add("modal-open");
  };

  const handleNotesModel = async () => {
    setNotesModelOpen(true);
    document.body.classList.add("modal-open");
    fetchNotes();
  };

  const handleCloseNotesModel = async () => {
    setNotesModelOpen(false);
    document.body.classList.remove("modal-open");
  };

  const handleCloseModal23 = () => {
    setIsModalOpen23(false);
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  useEffect(() => {
    if (
      employee2 &&
      employee2.inventory &&
      `${employee2.inventory.NOC}` === "true"
    ) {
      setFormData7((prevFormData7) => ({
        ...prevFormData7,
        noc: true,
      }));
    } else {
      setFormData7((prevFormData7) => ({
        ...prevFormData7,
        noc: false,
      }));
    }
  }, [employee2]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData7((prevFormData7) => ({
      ...prevFormData7,
      [name]: checked,
    }));
  };

  const handleCheckboxChange2 = (event, reminderType) => {
    if (reminderType === "Demand Notice") {
      setFormData6({ ...formData6, kyc: event.target.checked });
    }
  };

  const handleCheckboxChange3 = (event) => {
    const { name, checked } = event.target;
    setFormData6({
      ...formData6,
      [name]: checked,
    });
  };

  const handleCheckboxChange4 = (event) => {
    const { name, checked } = event.target;
    setFormData6({
      ...formData6,
      [name]: checked,
    });
  };

  const handleCheckboxChange5 = (event) => {
    const { name, checked } = event.target;
    setFormData6({
      ...formData6,
      [name]: checked,
    });
  };

  const formGroupStyle = {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  };

  const labelStyle = {
    marginRight: "10px",
    whiteSpace: "nowrap",
  };

  const checkboxStyle = {
    marginRight: "7px",
    accentColor: isChecked ? "green" : "",
  };

  const checkboxStyle2 = {
    accentColor: "green",
    marginLeft: "10px",
  };

  async function getEmpps(id) {
    const url = `${apiUrl}/applicant/releaseGift?applicantId=${empid}&gift=${id}`;

    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      let data = await response.json();

      if (data.status === "success") {
        toast.success(data.message);
        handleCloseModal22();
        fetchDataFroms();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  }

  async function getEmp() {
    const url = `${apiUrl}/applicant/giftAllocation?applicantId=${empid}&gift=${formData12.gift}`;

    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      let data = await response.json();

      if (data.status === "success") {
        toast.success(data.message);
        handleCloseModal23();
        fetchDataFroms();
        setFormData12(initialFormData12);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  }

  const handleInputChan = (event) => {
    const { name, value } = event.target;
    setFormData12({
      ...formData12,
      [name]: value,
    });
  };

  // bank api
  useEffect(() => {
    fetch(`${apiUrl}/bank/accountDropdown`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setBank(data.data);
        } else {
          console.error(
            "API response is not in the expected format for countries."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  useEffect(() => {
    async function getApplicantRefference() {
      const url = `${apiUrl}/reference/listReferences?applicantId=${empid}`;
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        setApplicantReferenceCount(response.referenceCount);
        setApplicantReference(response.data.data);
      }
    }
    getApplicantRefference();
  }, []);

  useEffect(() => {
    async function getEmpp() {
      const url = `${apiUrl}/applicant/getApplicantInfo/${empid}`;
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        setEmployee2(response.data);
      }
    }
    getEmpp();
  }, []);

  console.log("employee2..", employee2);

  useEffect(() => {
    async function getApplicantView() {
      const url = `${apiUrl}/applicant/getApplicantInfo/${empid}`;
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        setApplicantView(response.data);
      }
    }
    getApplicantView();
  }, []);

  const formatDateTimeApplied = (dateTimeString) => {
    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString("en-IN", dateOptions);
    const formattedTime = date.toLocaleTimeString("en-IN", timeOptions);
    return { date: formattedDate, time: formattedTime };
  };

  async function getApplied() {
    const url = `${apiUrl}/applicant/applyDetailEoiFollowUp?applicantId=${empid}`;
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    response = await response.json();

    if (response.status === "success") {
      const paymentCreditDateTime = response.data.paymentLedger.paymentCredit;
      const createdAtDateTime = response.data.paymentLedger.createdAt;

      const formattedPaymentCredit = formatDateTimeApplied(
        paymentCreditDateTime
      );
      const formattedCreatedAt = formatDateTimeApplied(createdAtDateTime);

      setEmployee3({
        ...response.data,
        formattedPaymentCreditDate: formattedPaymentCredit.date,
        formattedPaymentCreditTime: formattedPaymentCredit.time,
        formattedCreatedAtDate: formattedCreatedAt.date,
        formattedCreatedAtTime: formattedCreatedAt.time,
      });
    }
  }

  useEffect(() => {
    getApplied();
  }, [empid, apiUrl, Token]);

  const fetchEmployeeData = async () => {
    try {
      const url = `${apiUrl}/applicant/approve?applicantId=${empid}&isApproved=true`;

      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        toast.success(response.message);
        getApplied();
      }
    } catch (err) {
      console.log("An error occurred");
    }
  };

  const fetchEmployeeDatas = async () => {
    try {
      const url = `${apiUrl}/applicant/approve?applicantId=${empid}&isApproved=false`;

      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        toast.success(response.message);
        getApplied();
      }
    } catch (err) {
      console.log("An error occurred");
    }
  };

  const fetchEmployeeDatass = async () => {
    try {
      const url = `${apiUrl}/applicant/approve?applicantId=${empid}&isApproved=Hold`;

      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        toast.success(response.message);
        getApplied();
      }
    } catch (err) {
      console.log("An error occurred");
    }
  };

  //Boss a

  useEffect(() => {
    const Token = localStorage.getItem("Token");
    console.log("Token:", Token);

    fetch(`${apiUrl}/employee/allEmpDesig`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setReportingBossA(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/applicant/addNotes?applicantId=${empid}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      fetchLeadData();
      handleCloseModal4();

      setFormData(initialFormData);
      toast.success(response2.message);
      // navigate("/company-list");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchDataFromApii = async () => {
    const { stage } = filterByObj;
    const url = ` ${apiUrl}/applicant/applicants?userId=${employee2.userId}&stage=${stage}&isWLD=all`;

    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      const data = await response.json();

      if (data.status === "success" && Array.isArray(data.data)) {
        const formattedData = data.data.map((item) => ({
          ...item,
          formattedDate: item.applicantDOB
            ? formatDateTime(item.applicantDOB)
            : "",
        }));
        setUsers2(formattedData);
      } else {
        console.error("Unexpected API response:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromApii();
  }, [filterByObj]);

  const fetchDataFroms = async () => {
    const url = `${apiUrl}/applicant/allocatedGift?applicantId=${empid}`;

    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      const data = await response.json();

      if (data.status === "success" && Array.isArray(data.data)) {
        const formattedData = data.data.map((item) => ({
          ...item,
          giftAllocationDate: item.giftAllocationDate
            ? formatDateTime(item.giftAllocationDate)
            : null,
        }));

        setUsers3(formattedData);
      } else {
        console.error("Unexpected API response:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFroms();
  }, []);

  const fetchNotes = async () => {
    const url = `${apiUrl}/applicant/applicantComments?applicantId=${empid}`;

    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      const data = await response.json();

      if (data.status === "success" && Array.isArray(data.data)) {
        const formattedData = data.data.map((item) => ({
          ...item,
          createdAt: item.createdAt ? formatDateTime(item.createdAt) : null,
        }));

        console.log("formattedData => ", formattedData);
        if (data?.notesCount) {
          setNotesCount(data?.notesCount);
        }

        setNotes(formattedData);
      } else {
        console.error("Unexpected API response:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData2) {
        if (formData2[key] !== null) {
          formDataToSend.append(key, formData2[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/applicant/addCall?applicantId=${empid}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      fetchLeadData();
      handleCloseModal2();
      setFormData2(initialFormData2);
      toast.success(response2.message);
      // navigate("/company-list");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setFormData2({
      ...formData2,
      [name]: value,
    });
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData3) {
        if (formData3[key] !== null) {
          formDataToSend.append(key, formData3[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/applicant/addMeeting?applicantId=${empid}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      fetchLeadData();
      handleCloseModal3();
      setFormData3(initialFormData3);
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleInputChange3 = (event) => {
    const { name, value } = event.target;
    setFormData3({
      ...formData3,
      [name]: value,
    });
  };

  const handleSubmit4 = async (e) => {
    e.preventDefault();

    try {
      setLoadingss(true);
      const formDataToSend = new FormData();

      for (const key in formData4) {
        if (formData4[key] !== null) {
          formDataToSend.append(key, formData4[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/applicant/addReminder?applicantId=${empid}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      fetchLeadData();
      handleCloseModal5();
      setFormData4(initialFormData4);
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoadingss(false);
    }
  };

  const handleInputChange4 = (event) => {
    const { name, value } = event.target;
    setFormData4({
      ...formData4,
      [name]: value,
    });
  };

  const handleSubmit5 = async (e) => {
    e.preventDefault();

    try {
      setLoadings(true);
      const formDataToSend = new FormData();

      for (const key in formData5) {
        if (formData5[key] !== null) {
          formDataToSend.append(key, formData5[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/applicant/addNotice?applicantId=${empid}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      fetchLeadData();
      handleCloseModal8();
      fetchDataFromApi();
      setFormData5(initialFormData5);
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoadings(false);
    }
  };

  const handleInputChange5 = (event) => {
    const { name, value } = event.target;
    setFormData5({
      ...formData5,
      [name]: value,
    });
  };

  const handleSubmit6 = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData6) {
        if (formData6[key] !== null) {
          formDataToSend.append(key, formData6[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/applicant/postNoc?applicantId=${empid}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      fetchLeadData();

      setFormData6(initialFormData6);
      handleCloseModal16();
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit17 = async (e) => {
    e.preventDefault();

    try {
      setFormData17Loading(true);

      const keysToExclude = ["received"];

      // Remove unwanted keys regardless of their value
      const filteredData = Object.fromEntries(
        Object.entries(formData17).filter(
          ([key]) => !keysToExclude.includes(key)
        )
      );

      console.log("Sending data:", filteredData); // Debug log

      // Create a FormData object for file and other fields
      const formData = new FormData();

      // Append all the filtered data (non-file fields) to FormData
      Object.entries(filteredData).forEach(([key, value]) => {
        if (value instanceof File) {
          // Don't serialize File objects in JSON, handle them in FormData
          formData.append(key, value);
        } else {
          formData.append(key, value);
        }
      });

      // Send the data to the server using fetch
      const response = await fetch(
        `${apiUrl}/registry/createRegistryFollowUp`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`, // Only include Authorization in headers
          },
          body: formData, // Send the FormData object in the body
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }

      fetchLeadData();
      setFormData17(initialFormData17);
      handleCloseModal17();
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setFormData17Loading(false);
    }
  };

  const handleInputChange6 = (event) => {
    const { name, value } = event.target;
    setFormData6({
      ...formData6,
      [name]: value,
    });
  };
  const handleInputChange17 = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData17,
      [name]: value,
    };

    // First, handle special field logic
    if (name === "nameOnRegistry") {
      updatedFormData.nameChangeCharges = value.trim() !== "" ? 5000 : 0;
    }

    if (name === "chequeBounce") {
      updatedFormData.chequePenalty = 1500;
      updatedFormData.chequeBounceCharges = value * 1500;
    }

    if (
      name === "instagramPost" ||
      name === "facebookPost" ||
      name === "refrenceGiven"
    ) {
      const referenceCount = parseFloat(applicantRefferenceCount || 0);
      const refrenceMonth = referenceCount >= 10 ? 12 : 0;
      const facebookMonth = updatedFormData.facebookPost === "Yes" ? 3 : 0;
      const instagramMonth = updatedFormData.instagramPost === "Yes" ? 1 : 0;
      updatedFormData.waveOffMonth =
        refrenceMonth + facebookMonth + instagramMonth;
    }

    if (name === "stampDutyPer") {
      const stampPer = parseFloat(value) / 100 || 0;
      const unitCost = parseFloat(
        employee2?.totalCost - employee2?.discountAmount || 0
      );
      updatedFormData.stampDuty = Math.floor(unitCost * stampPer);
    }

    // Parse values AFTER special logic
    const unitSize = parseFloat(updatedFormData.unitSize || 0);
    const camRate = parseFloat(updatedFormData.camRate || 0);
    const waveOffMonth = parseFloat(updatedFormData.waveOffMonth || 0);
    const start = new Date(updatedFormData.camStartDate);
    const end = new Date(updatedFormData.camEndDate);

    const stampDuty = parseFloat(updatedFormData.stampDuty || 0);
    const intrestAmount = parseFloat(updatedFormData.intrestAmount || 0);
    const lawyerFees = parseFloat(updatedFormData.lawyerFees || 0);
    const nameChangeCharges = parseFloat(
      updatedFormData.nameChangeCharges || 0
    ); // ✅ Re-parse after setting

    const chequeBounce = parseFloat(updatedFormData.chequeBounce || 0);
    const waiver = parseFloat(updatedFormData.waiverCharges || 0);

    // Recalculate totalMonth if start or end date changes
    if (name === "camStartDate" || name === "camEndDate") {
      if (!isNaN(start) && !isNaN(end) && end >= start) {
        const months =
          (end.getFullYear() - start.getFullYear()) * 12 +
          (end.getMonth() - start.getMonth());
        updatedFormData.totalMonth = months;
      } else {
        updatedFormData.totalMonth = 0;
      }
    }

    if (name === "totalMonth") {
      const monthsToAdd = parseInt(value);
      if (!isNaN(monthsToAdd) && !isNaN(start)) {
        const newEndDate = new Date(start);
        newEndDate.setMonth(start.getMonth() + monthsToAdd);
        updatedFormData.camEndDate = newEndDate.toISOString().split("T")[0];
      }
    }

    if (name === "waiverCharges") {
      const waiverAmount = parseFloat(value || 0);
      if (waiverAmount > 0) {
        setIsWaver(true);
        setOtpSent(false);
        setWaverOtpVerified(false);
        setWaverOtp("");
      } else {
        setIsWaver(false);
        setOtpSent(false);
        setWaverOtpVerified(true);
      }
    }

    const totalMonth = parseFloat(updatedFormData.totalMonth || 0);
    // const amountWaveOff = unitSize * camRate * waveOffMonth;
    const discountCam = camRate * waveOffMonth * employee2?.size;
    // const payableCam = (((camRate * totalMonth * employee2?.size - discountCam) *18%) + camRate * totalMonth * employee2?.size - discountCam);
    const baseAmount = camRate * totalMonth * employee2?.size - discountCam;

    const payableCam = Math.abs(Math.floor(baseAmount * 1.18));
    const totalChequeBounceFee = chequeBounce * 1500;

    const finalLawerFee =
      lawyerFee - (applicantRefferenceCount >= 10 ? 3000 : 0);
    updatedFormData.lawyerFees = finalLawerFee;

    const finalNocAmount =
      baseAmount +
      stampDuty +
      intrestAmount +
      finalLawerFee +
      nameChangeCharges +
      totalChequeBounceFee -
      waiver;

    // Update fields
    updatedFormData.payableCam = Math.floor(payableCam);
    // updatedFormData.amountWaveOff = amountWaveOff;
    updatedFormData.finalNocAmount = Math.floor(finalNocAmount);
    updatedFormData.discountCam = Math.floor(discountCam);
    updatedFormData.totalCam = Math.floor(baseAmount);

    setFormData17(updatedFormData);
  };

  const handleAdharPanFileChange = (event, fieldName) => {
    const file = event.target.files[0];
    if (file) {
      setFormData17((prevData) => ({
        ...prevData,
        [fieldName]: file,
      }));
      console.log(`${fieldName} added`, file);
    }
  };

  const handleSendOtp = () => {
    axios
      .get(`${apiUrl}/registry/sendWaverOtp`, {
        params: {
          applicantId: empid,
          amount: formData17?.waiverCharges,
          remark: formData17.remark,
        },
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(() => {
        setOtpSent(true);
        toast.success("OTP sent successfully.");
      })
      .catch((err) => {
        console.error("Send OTP Error:", err);
        toast.error("Failed to send OTP.");
      });
  };

  const handleSendNocEmail = (followUpId) => {
    axios
      .get(`${apiUrl}/registry/sendNocEmail`, {
        params: {
          inventoryFollowUpId: followUpId,
        },
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(() => {
        setOtpSent(true);
        toast.success("Noc Email sent successfully.");
      })
      .catch((err) => {
        console.error("Send Noc Email Error:", err);
        toast.error("Failed to send Noc Email.");
      });
  };

  const handleVerifyOtp = () => {
    axios
      .get(`${apiUrl}/registry/verifyWaverOtp`, {
        params: {
          applicantId: empid,
          otp: waverOtp,
          amount: formData17?.waiverCharges,
        },
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        if (res.data?.status === "success") {
          setWaverOtpVerified(true);
          toast.success("OTP verified successfully.");
        } else {
          toast.error("Incorrect OTP.");
        }
      })
      .catch((err) => {
        console.error("OTP verification error:", err);
        toast.error("OTP verification failed.");
      });
  };

  useEffect(() => {
    if (employee2 && employee2.size) {
      setFormData17((prev) => ({
        ...prev,
        unitSize: employee2.size,
      }));
    }
  }, [employee2]);

  console.log("formData17...,", formData17);

  const handleFileChange20 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const applicantImageFile = files[0];

      if (applicantImageFile.type.startsWith("image/")) {
        // Handle image files (jpeg, png, etc.)

        setFormData6((prevData) => ({
          ...prevData,
          nocUpload: applicantImageFile,
        }));
      } else if (applicantImageFile.type === "application/pdf") {
        // Handle PDF files
        setFormData6((prevData) => ({
          ...prevData,

          nocUpload: applicantImageFile,
        }));
      } else {
        console.log("Unsupported file type");
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleSubmit7 = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData7) {
        if (formData7[key] !== null) {
          formDataToSend.append(key, formData7[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/applicant/postRegistry?applicantId=${empid}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      fetchLeadData();
      handleCloseModal6();
      setFormData7(initialFormData7);
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleInputChange7 = (event) => {
    const { name, value } = event.target;
    setFormData7({
      ...formData7,
      [name]: value,
    });
  };

  const handleSubmit8 = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData8) {
        if (formData8[key] !== null) {
          formDataToSend.append(key, formData8[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/customerReview?applicantId=${empid}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      fetchLeadData();
      handleCloseModal6();
      setFormData8(initialFormData8);
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleInputChange8 = (event) => {
    const { name, value } = event.target;
    setFormData8({
      ...formData8,
      [name]: value,
    });
  };

  const handleFileChange21 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const applicantVideoFile = files[0];

      if (applicantVideoFile.type.startsWith("video/")) {
        const videoURL = URL.createObjectURL(applicantVideoFile);
        setFormData8((prevData) => ({
          ...prevData,
          video: applicantVideoFile,
        }));
        setVideoURL(videoURL);
        setError("");
        setShowVideo(false);
      } else {
        // Handle unsupported file types
        setError("Unsupported file type. Please upload a video file.");
        setFormData8((prevData) => ({
          ...prevData,
          video: null,
        }));
        setVideoURL("");
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleSubmit9 = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData9) {
        if (formData9[key] !== null) {
          formDataToSend.append(key, formData9[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/applicant/cancelAllocation?applicantId=${empid}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      fetchLeadData();
      handleCloseModal10();
      setFormData9(initialFormData9);
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleInputChange9 = (event) => {
    const { name, value } = event.target;
    setFormData9({
      ...formData9,
      [name]: value,
    });
  };

  const handleSubmit10 = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData10) {
        if (formData10[key] !== null) {
          formDataToSend.append(key, formData10[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/applicant/addUpcomingPayment?applicantId=${empid}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      fetchLeadData();
      handleCloseModal7();
      setFormData10(initialFormData10);
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleInputChange10 = (event) => {
    const { name, value } = event.target;
    setFormData10({
      ...formData10,
      [name]: value,
    });
  };

  const handleSubmit11 = async (e) => {
    e.preventDefault();

    try {
      setLoadingsss(true);
      const formDataToSend = new FormData();

      for (const key in formData11) {
        if (formData11[key] !== null) {
          formDataToSend.append(key, formData11[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/applicant/addBBA?applicantId=${empid}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      fetchLeadData();
      handleCloseModal21();
      setFormData11(initialFormData11);
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoadingsss(false);
    }
  };

  const handleInputChange11 = (event) => {
    const { name, value } = event.target;
    setFormData11({
      ...formData11,
      [name]: value,
    });
  };

  const handleFileChange201 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const applicantImageFile = files[0];

      if (applicantImageFile.type.startsWith("image/")) {
        // Handle image files (jpeg, png, etc.)

        setFormData11((prevData) => ({
          ...prevData,
          bbaFile: applicantImageFile,
        }));
      } else if (applicantImageFile.type === "application/pdf") {
        // Handle PDF files
        setFormData11((prevData) => ({
          ...prevData,

          bbaFile: applicantImageFile,
        }));
      } else {
        console.log("Unsupported file type");
      }
    } else {
      console.log("No file selected");
    }
  };

  //status master
  useEffect(() => {
    const Token = localStorage.getItem("Token");
    fetch(`${apiUrl}/master/getAllMasterData/5`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setStatus(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  //gift api
  useEffect(() => {
    fetch(`${apiUrl}/gift/giftDropdown`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setGift(data.data);
        } else {
          console.error(
            "API response is not in the expected format for countries."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  // Date format change
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const day = date.getDate().toString().padStart(2, "0");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    return date.toLocaleTimeString("en-IN", options);
  };

  const fetchLeadData = async () => {
    try {
      const url = `${apiUrl}/applicant/getInventoryFollowUp?applicantId=${empid}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch lead data");
      }

      const responseData = await response.json();

      if (
        responseData.status === "success" &&
        Array.isArray(responseData.data)
      ) {
        const formattedData = responseData.data.map((item) => ({
          ...item,
          formattedDate: item.callBackDate
            ? formatDateTime(item.callBackDate)
            : null,
          formattedDates: item.reminderDate
            ? formatDateTime(item.reminderDate)
            : null,
          formattedDate2: item.callBackTime
            ? formatTime(item.callBackTime)
            : null,
          formattedDate3: item.meetingTime
            ? formatTime(item.meetingTime)
            : null,
          formattedDate4: item.meetingDate
            ? formatDateTime(item.meetingDate)
            : null,
          kyc: item.noc && item.noc.length > 0 ? item.noc[0].kyc : null,
          payment: item.noc && item.noc.length > 0 ? item.noc[0].payment : null,
          penalty: item.noc && item.noc.length > 0 ? item.noc[0].penalty : null,
          issue: item.noc && item.noc.length > 0 ? item.noc[0].issue : null,
          gat: item.noc && item.noc.length > 0 ? item.noc[0].status : null,
          nocUpload:
            item.noc && item.noc.length > 0 ? item.noc[0].nocUpload : null,
          noc:
            item.registry && item.registry.length > 0
              ? item.registry[0].noc
              : null,
          registrationDate:
            item.registry && item.registry.length > 0
              ? formatDateTime(item.registry[0].registrationDate)
              : null,
          registrationStatus:
            item.registry && item.registry.length > 0
              ? item.registry[0].registrationStatus
              : null,
          registrationAddress:
            item.registry && item.registry.length > 0
              ? item.registry[0].registrationAddress
              : null,
          cancelAllocation:
            item.cancelAllocation && item.cancelAllocation.length > 0
              ? item.cancelAllocation[0].unitAllocation
              : null,
          approvedBy:
            item.cancelAllocation && item.cancelAllocation.length > 0
              ? item.cancelAllocation[0].approvedBy
              : null,
          confirmedBy:
            item.cancelAllocation && item.cancelAllocation.length > 0
              ? item.cancelAllocation[0].confirmedBy
              : null,
          cancelledBy:
            item.cancelAllocation && item.cancelAllocation.length > 0
              ? item.cancelAllocation[0].cancelledBy
              : null,
          remark:
            item.cancelAllocation && item.cancelAllocation.length > 0
              ? item.cancelAllocation[0].remark
              : null,
          action:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? item.upcomingPayment[0].action
              : null,
          from:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? item.upcomingPayment[0].from
              : null,
          date:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? formatDateTime(item.upcomingPayment[0].date)
              : null,
          time:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? formatTime(item.upcomingPayment[0].time)
              : null,
          venue:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? item.upcomingPayment[0].venue
              : null,
          amount:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? item.upcomingPayment[0].amount
              : null,
          payment:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? item.upcomingPayment[0].status
              : null,
          mode:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? item.upcomingPayment[0].mode
              : null,
          transaction:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? item.upcomingPayment[0].transaction
              : null,
          remark:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? item.upcomingPayment[0].remark
              : null,
          chequeNo:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? item.upcomingPayment[0].chequeNo
              : null,
          chequeDetails:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? item.upcomingPayment[0].chequeDetails
              : null,
          chequeDate:
            item.upcomingPayment && item.upcomingPayment.length > 0
              ? formatDateTime(item.upcomingPayment[0].chequeDate)
              : null,
          chn:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].amount
              : null,
          handOverBy:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].handOverBy
              : null,
          collectedBy:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].collectedBy
              : null,
          uploadRecipt:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].uploadRecipt
              : null,
          collectionMode:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].collectionMode
              : null,
          paymentCredit:
            item.paymentLedger && item.paymentLedger.length > 0
              ? formatDateTime(item.paymentLedger[0].paymentCredit)
              : null,
          enterDiscount:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].enterDiscount
              : null,
          amrsAccount:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].amrsAccount
              : null,
          bbaDate:
            item.bba && item.bba.length > 0
              ? formatDateTime(item.bba[0].bbaDate)
              : null,
          bss:
            item.bba && item.bba.length > 0
              ? formatDateTime(item.bba[0].registryDate)
              : null,
          abs: item.bba && item.bba.length > 0 ? item.bba[0].status : null,
          bbaFile: item.bba && item.bba.length > 0 ? item.bba[0].bbaFile : null,
          bel:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].transactionNo
              : null,
          chey:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].chequeNo
              : null,
          cheys:
            item.paymentLedger && item.paymentLedger.length > 0
              ? formatDateTime(item.paymentLedger[0].chequeDate)
              : null,
          cheyss:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].amrsAccount
              : null,
          cheysss:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].deposteToAmrs
              : null,
          moss:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].select
              : null,

          amount1:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].amount
              : null,
          amount6:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].collectionMode
              : null,
          amount2:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].transactionNo
              : null,
          amount3:
            item.paymentLedger && item.paymentLedger.length > 0
              ? formatDateTime(item.paymentLedger[0].paymentCredit)
              : null,

          amount4:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].amrsAccount
              : null,

          amount7:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].uploadRecipt
              : null,

          amount8:
            item.paymentLedger && item.paymentLedger.length > 0
              ? item.paymentLedger[0].Status
              : null,

          Announcemen:
            item.Announcement && item.Announcement.length > 0
              ? formatDateTime(item.Announcement[0].noticeDate)
              : null,

          amount10: item.amount,

          amount11: item.comment,
          amount12: item.remark,
        }));

        setLeadDetailsfollowups(formattedData);
      } else {
        console.error("Lead data not found or invalid in the API response");
      }
    } catch (error) {
      console.error("Error fetching lead data:", error);
    }
  };

  useEffect(() => {
    fetchLeadData();
  }, []);

  useEffect(() => {
    const demandNoticeChecked = users.some(
      (user) => user.reminderType === "Demand Notice"
    );
    const finalDemandLetterChecked = users.some(
      (user) => user.reminderType === "Final Demand Letter"
    );
    const cancellationNoticeChecked = users.some(
      (user) => user.reminderType === "Cancellation Notice"
    );

    setAllChecked(
      demandNoticeChecked &&
        finalDemandLetterChecked &&
        cancellationNoticeChecked
    );
  }, [users]);

  const fetchDataFromApi = () => {
    fetch(`${apiUrl}/applicant/getApplicantNotice?applicantId=${empid}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          if (Array.isArray(data.data)) {
            const formattedData = data.data.map((item) => ({
              ...item,
              formattedDateeee: item.createdAt
                ? formatDateTime(item.createdAt)
                : null,
            }));
            setUsers(formattedData);
          } else {
            console.error(
              "API response does not contain companyList array:",
              data
            );
          }
        } else {
          console.error("API request was not successful:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const buttonStyles = {
    base: {
      padding: "5px 10px", // Reduced padding for smaller buttons
      border: "none",
      borderRadius: "3px", // Smaller border-radius for a more compact look
      fontSize: "12px", // Smaller font size
      color: "white",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      margin: "0 4px", // Reduced space between buttons
    },
    approve: {
      backgroundColor: "#4CAF50", // Green
    },
    disapprove: {
      backgroundColor: "#f44336", // Red
    },
    hold: {
      backgroundColor: "#ff9800", // Orange
    },
    hover: {
      transform: "scale(1.05)", // Slightly enlarge button on hover
    },
    active: {
      transform: "scale(0.95)", // Slightly shrink button on click
    },
    shadow: {
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)", // Smaller shadow for compact look
    },
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = buttonStyles.hover.transform;
    e.target.style.boxShadow = buttonStyles.shadow.boxShadow;
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "none";
    e.target.style.boxShadow = "none";
  };

  const handleMouseDown = (e) => {
    e.target.style.transform = buttonStyles.active.transform;
  };

  const handleMouseUp = (e) => {
    e.target.style.transform = buttonStyles.hover.transform;
  };

  useEffect(() => {
    // Dynamically inject the @keyframes into a <style> tag
    const styleSheet = document.styleSheets[0];
    const keyframes = `
          @keyframes growShrink {
            20%, 400% {
              transform: scale(1);
            }
            50% { 
              transform: scale(1.1);
            }
          }
        `;

    if (styleSheet) {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n   .btn-fullWidth {\n    width: 100%;\n    min-height: inherit;\n    padding: 6px;\n}\n",
        }}
      />

      <div className="page">
        <TopHeader />
        <Prince />
        <div className="main-content  pt-0">
          <div className="main-container container-fluid">
            <div className="page-header">
              {/* Page Header */}
              <div className="page-header" style={{ marginTop: "-2px" }}>
                <div className="row row-sm" style={{ marginLeft: "-15px" }}>
                  <div className="col-sm-12 col-md-3">
                    <div className="card custom-card">
                      <div className="card-body" style={{ width: "1320px" }}>
                        <div>
                          <h6>CID:{employee2.ticketId}</h6>
                          <h6 style={{ whiteSpace: "nowrap" }}>
                            <span
                              className="fs-20 me-12"
                              style={{ marginBottom: "8px" }}
                            >
                              {employee2.applicantFirstName}{" "}
                              {employee2.applicantLastName}
                            </span>{" "}
                            <span className="badge bg-success">Customer</span>
                          </h6>
                          Phone:{" "}
                          <span
                            className="text-muted"
                            style={{
                              filter: "blur(3px)", // Apply the blur effect
                              display: "inline-block",
                              minWidth: "120px",
                              textOverflow: "ellipsis", // Hide excess text
                              whiteSpace: "nowrap",
                              userSelect: "none",
                            }}
                          >
                            {employee2.applicantMobile
                              ? employee2.applicantMobile.slice(0, -4) + "****"
                              : "N/A"}
                          </span>
                          <span
                            onClick={handleOpenModal56}
                            style={{
                              color: "blue",
                              display: "inline-block",
                              marginLeft: "90px",
                              fontFamily: "Roboto, sans-serif",
                              cursor: "pointer",
                            }}
                          >
                            Total Unit: {employee2.unitCount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-3 ">
                    <div className="card custom-card">
                      <div className="card-body" style={{ width: "600px" }}>
                        <div>
                          <span
                            style={{ fontSize: "11px", fontWeight: "bold" }}
                          >
                            Project: {employee2.projectId}
                          </span>
                          <h6>
                            <span className="fs-20 me-1">
                              Unit:{employee2.unitNo}
                            </span>
                            <span className="badge bg-danger">Unit</span>
                          </h6>
                          <span className="text-muted">
                            Type:{employee2.schemeType}--(
                            {(() => {
                              const type = employee2?.inventory?.type;
                              const size = employee2?.inventory?.size;
                              const isDataAvailable = type && size;

                              if (isDataAvailable) {
                                return (
                                  <>
                                    {type === "Plot" || type === "Farmhouse"
                                      ? `${size} SQ YD`
                                      : ""}
                                    {type === "Shop" ? `${size} SQ FT` : ""}
                                  </>
                                );
                              } else {
                                return (
                                  <span style={{ color: "red" }}>N/A</span>
                                );
                              }
                            })()}
                            )
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {employee2.isAllotmentLetter === false && (
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="card custom-card"
                        style={{
                          height: "auto",
                          backgroundColor: "#f8d7da",
                          animation: "growShrink 1.5s infinite ease-in-out",
                        }}
                      >
                        <div className="card-body" style={{ padding: "20px" }}>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              rowGap: "10px",
                              columnGap: "20px",
                            }}
                          >
                            {/* Unit Awarded */}
                            {employee2.resultStatus !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  1. Unit Awarded:
                                </span>
                                <span
                                  style={{
                                    color:
                                      employee2.resultStatus === 1
                                        ? "green"
                                        : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${
                                      employee2.resultStatus === 1
                                        ? "fa-check-circle"
                                        : "fa-times-circle"
                                    }`}
                                  ></i>
                                </span>
                              </div>
                            )}

                            {/* First Payment Received */}
                            {employee2.isFirstPaymet !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  3. 1st Payment Received:
                                </span>
                                <span
                                  style={{
                                    color: employee2.isFirstPaymet
                                      ? "green"
                                      : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${
                                      employee2.isFirstPaymet
                                        ? "fa-check-circle"
                                        : "fa-times-circle"
                                    }`}
                                  ></i>
                                </span>
                                <span>
                                  {employee2?.isFirstPaymetcollectionMode ===
                                    "Cheque" &&
                                  employee2?.isFirstPaymetcollectionChequeStatus ===
                                    true
                                    ? " (PDC)"
                                    : ""}
                                </span>
                              </div>
                            )}

                            {/* Welcome Letter */}
                            {employee2.isWelcomeLetter !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  2. Welcome Letter Sent:
                                </span>
                                <span
                                  style={{
                                    color: employee2.isWelcomeLetter
                                      ? "green"
                                      : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${
                                      employee2.isWelcomeLetter
                                        ? "fa-check-circle"
                                        : "fa-times-circle"
                                    }`}
                                  ></i>
                                </span>
                              </div>
                            )}

                            {/* Allotment Letter */}
                            {employee2.isAllotmentLetter !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <Link to={`/allotment-letter/${empid}`}>
                                  <span className="fs-14 me-12">
                                    4. Allotment Letter Sent:
                                  </span>
                                </Link>
                                <span
                                  style={{
                                    color: employee2.isAllotmentLetter
                                      ? "green"
                                      : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${
                                      employee2.isAllotmentLetter
                                        ? "fa-check-circle"
                                        : "fa-times-circle"
                                    }`}
                                  ></i>
                                </span>
                                <span>
                                  {employee2.applicantSignature
                                    ? " (Signed)"
                                    : " (Not Signed)"}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {employee2.isAllotmentLetter === true && (
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="card custom-card"
                        style={{ height: "105px" }}
                      >
                        <div className="card-body" style={{ padding: "20px" }}>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              rowGap: "5px",
                              columnGap: "10px",
                            }}
                          >
                            {employee2.resultStatus !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  1. Unit Awarded:
                                </span>
                                <span
                                  style={{
                                    color:
                                      employee2.resultStatus === 1
                                        ? "green"
                                        : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${
                                      employee2.resultStatus === 1
                                        ? "fa-check-circle"
                                        : "fa-times-circle"
                                    }`}
                                  ></i>
                                </span>
                              </div>
                            )}

                            {/* First Payment Received */}
                            {employee2.isFirstPaymet !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  3. 1st Payment Received:
                                </span>
                                <span
                                  style={{
                                    color: employee2.isFirstPaymet
                                      ? "green"
                                      : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${
                                      employee2.isFirstPaymet
                                        ? "fa-check-circle"
                                        : "fa-times-circle"
                                    }`}
                                  ></i>
                                </span>
                                <span>
                                  {employee2?.isFirstPaymetcollectionMode ===
                                    "Cheque" &&
                                  employee2?.isFirstPaymetcollectionChequeStatus ===
                                    true
                                    ? " (PDC)"
                                    : ""}
                                </span>
                              </div>
                            )}

                            {/* Welcome Letter */}
                            {employee2.isWelcomeLetter !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  2. Welcome Letter Sent:
                                </span>
                                <span
                                  style={{
                                    color: employee2.isWelcomeLetter
                                      ? "green"
                                      : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${
                                      employee2.isWelcomeLetter
                                        ? "fa-check-circle"
                                        : "fa-times-circle"
                                    }`}
                                  ></i>
                                </span>
                              </div>
                            )}

                            {/* Allotment Letter */}
                            {employee2.isAllotmentLetter !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  4. Allotment Letter Sent:
                                </span>
                                <span
                                  style={{
                                    color: employee2.isAllotmentLetter
                                      ? "green"
                                      : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${
                                      employee2.isAllotmentLetter
                                        ? "fa-check-circle"
                                        : "fa-times-circle"
                                    }`}
                                  ></i>
                                </span>
                                <span>
                                  {employee2.applicantSignature
                                    ? " (Signed)"
                                    : " (Not Signed)"}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="page-header" style={{ marginTop: "-30px" }}>
                <div className="row row-sm" style={{ marginLeft: "-15px" }}>
                  <div className="col-sm-12 col-md-2 mb-3">
                    <div className="card custom-card">
                      <div className="card-body">
                        <div>
                          <h6>Display Price </h6>
                          <h6>
                            <span
                              className="fs-20 me-1"
                              style={{ color: "orange" }}
                            >
                              {employee2?.initialCost || "0"}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-2 mb-3">
                    <div className="card custom-card">
                      <div className="card-body">
                        <div>
                          <h6>Booking Discount</h6>
                          <h6>
                            <span
                              className="fs-20 me-1"
                              style={{ color: "red" }}
                            >
                              {employee2?.bookingDiscount || "0"}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-2 mb-3">
                    <div className="card custom-card">
                      <div className="card-body" style={{ width: "300px" }}>
                        <div>
                          <h6>Total Amount({employee2?.paymentPlan})</h6>
                          <h6>
                            <span
                              className="fs-20 me-1"
                              style={{ color: "blue" }}
                            >
                              {employee2?.totalCost || "0"}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-2 mb-3">
                    <div className="card custom-card">
                      <div className="card-body" style={{ width: "300px" }}>
                        <div>
                          <h6>Total Received</h6>
                          <h6>
                            <span
                              className="fs-20 me-1"
                              style={{ color: "green" }}
                            >
                              {employee2?.totolReceived || "0"}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-2 mb-3">
                    <div className="card custom-card">
                      <div className="card-body" style={{ width: "200px" }}>
                        <div>
                          <h6>Other Discount</h6>
                          <h6>
                            <span
                              className="fs-20 me-1"
                              style={{ color: "green" }}
                            >
                              {employee2?.discountAmount || "0"}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-2 mb-3">
                    <div className="card custom-card">
                      <div className="card-body" style={{ width: "200px" }}>
                        <div>
                          <h6>Total Due</h6>
                          <h6>
                            <span
                              className="fs-20 me-1"
                              style={{ color: "red" }}
                            >
                              {employee2?.dueAmount || "0"}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Page Header */}
              {/* Row */}
              <div className="row row-sm" style={{ marginTop: "-25px" }}>
                <div className="col-lg-12 col-md-12">
                  <div className="card custom-card main-content-body-profile">
                    <div className="tab-content">
                      <div
                        className="main-content-body tab-pane border-top-0 p-3 active"
                        id="accounting-tb"
                      >
                        <div className="row row-sm">
                          <div className="col-xl-12">
                            <div className="card custom-card border mb-3">
                              <div
                                className="card-header pb-2"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <h6
                                  className="mb-0"
                                  style={{
                                    marginTop: "-13px",
                                    fontFamily: "Roboto, sans-serif",
                                  }}
                                >
                                  Customer Journey
                                </h6>

                                <div style={{ display: "flex", gap: "10px" }}>
                                  <button
                                    className="btn btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                    style={{
                                      color: "white",
                                      backgroundColor: "#0dcaf0",
                                      width: "160px",
                                    }}
                                    onClick={handleOpenModal4}
                                  >
                                    Add Note
                                  </button>

                                  <div
                                    className={`modal ${
                                      isModalOpen4 ? "show" : ""
                                    }`}
                                    style={{
                                      display: isModalOpen4 ? "block" : "none",
                                      position: "fixed",
                                      top: 0,
                                      left: 0,
                                      right: 0,
                                      bottom: 0,
                                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                                      zIndex: 9999,
                                      overflow: "auto",
                                    }}
                                    tabIndex="-1"
                                    role="dialog"
                                  >
                                    <div
                                      className="modal-dialog modal-dialog-centered modal-xl"
                                      style={{
                                        maxWidth: "40%",
                                        margin: "auto",
                                      }}
                                    >
                                      <div
                                        className="modal-content"
                                        style={{
                                          borderRadius: "10px",
                                          boxShadow:
                                            "0 0 10px rgba(0, 0, 0, 0.3)",
                                        }}
                                      >
                                        <div
                                          className="modal-header"
                                          style={{
                                            backgroundColor: "#f8f9fa",
                                            borderBottom: "1px solid #dee2e6",
                                            borderRadius: "10px 10px 0 0",
                                          }}
                                        >
                                          <h5 className="modal-title">Notes</h5>
                                          <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                            onClick={handleCloseModal4}
                                            style={{
                                              outline: "none",
                                              cursor: "pointer",
                                            }}
                                          >
                                            <span aria-hidden="true">
                                              &times;
                                            </span>
                                          </button>
                                        </div>
                                        <div
                                          className="modal-body d-flex justify-content-center align-items-center"
                                          style={{ padding: "20px" }}
                                        >
                                          <form style={{ width: "100%" }}>
                                            <div className="row row-sm">
                                              <div className="col-sm-12 form-group">
                                                <label className="form-label">
                                                  Notes:{" "}
                                                  <span className="tx-danger">
                                                    *
                                                  </span>
                                                </label>
                                                <textarea
                                                  className="form-control"
                                                  style={{
                                                    height: "200px",
                                                    borderRadius: "10px",
                                                    border: "1px solid #ced4da",
                                                    padding: "10px",
                                                    resize: "none",
                                                  }}
                                                  defaultValue={""}
                                                  name="comment"
                                                  value={formData.comment}
                                                  onChange={handleInputChange}
                                                />
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                        <div
                                          className="modal-footer"
                                          style={{
                                            borderTop: "1px solid #dee2e6",
                                            borderRadius: "0 0 10px 10px",
                                            backgroundColor: "#f8f9fa",
                                          }}
                                        >
                                          <button
                                            className="btn ripple btn-primary"
                                            fetchLeadData
                                            type="button"
                                            style={{
                                              borderRadius: "5px",
                                              padding: "8px 20px",
                                              fontSize: "14px",
                                              fontWeight: "bold",
                                            }}
                                            onClick={handleSubmit}
                                          >
                                            Add Notes
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <button
                                    className="btn btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                    style={{
                                      color: "white",
                                      backgroundColor: "#0dcaf0",
                                      width: "160px",
                                    }}
                                    onClick={handleOpenModal2}
                                  >
                                    Update Call
                                  </button>

                                  <div
                                    className={`modal fade ${
                                      isModalOpen2 ? "show d-block" : ""
                                    }`}
                                    id="modaldemo-callback-form"
                                    tabIndex="-1"
                                    style={{
                                      display: isModalOpen2 ? "flex" : "none",
                                      top: "20px",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                                      position: "fixed",
                                      top: 0,
                                      left: 0,
                                      right: 0,
                                      bottom: 0,
                                    }}
                                  >
                                    <div
                                      className="modal-dialog modal-dialog-centered modal-xl"
                                      style={{
                                        maxWidth: "40%",
                                        margin: "auto",
                                      }}
                                    >
                                      <div
                                        className="modal-content"
                                        style={{
                                          borderRadius: "10px",
                                          boxShadow:
                                            "0 0 10px rgba(0, 0, 0, 0.3)",
                                        }}
                                      >
                                        <div
                                          className="modal-header"
                                          style={{
                                            backgroundColor: "#f8f9fa",
                                            borderBottom: "1px solid #dee2e6",
                                            borderRadius: "10px 10px 0 0",
                                          }}
                                        >
                                          <h5 className="modal-title">
                                            Call Update
                                          </h5>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            onClick={handleCloseModal2}
                                            aria-label="Close"
                                            style={{
                                              outline: "none",
                                              cursor: "pointer",
                                            }}
                                          ></button>
                                        </div>

                                        <div
                                          className="modal-body"
                                          style={{ padding: "20px" }}
                                        >
                                          <form>
                                            <div className="row row-sm">
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">
                                                  Callback Date:{" "}
                                                  <span className="tx-danger">
                                                    *
                                                  </span>
                                                </label>
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  name="callBackDate"
                                                  value={formData2.callBackDate}
                                                  onChange={handleInputChange2}
                                                />
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">
                                                  Callback Time:{" "}
                                                  <span className="tx-danger">
                                                    *
                                                  </span>
                                                </label>
                                                <input
                                                  type="time"
                                                  className="form-control"
                                                  name="callBackTime"
                                                  value={formData2.callBackTime}
                                                  onChange={handleInputChange2}
                                                />
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">
                                                  Last Call Summary
                                                </label>
                                                <textarea
                                                  className="form-control"
                                                  style={{
                                                    height: "40px",
                                                    borderRadius: "5px",
                                                    border: "1px solid #ced4da",
                                                  }}
                                                  defaultValue={""}
                                                  name="lastCallSummary"
                                                  value={
                                                    formData2.lastCallSummary
                                                  }
                                                  onChange={handleInputChange2}
                                                />
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">
                                                  Status{" "}
                                                </label>
                                                <select
                                                  className="form-control select2"
                                                  name="status"
                                                  value={formData2.status}
                                                  onChange={handleInputChange2}
                                                >
                                                  <option value="">
                                                    Select{" "}
                                                  </option>
                                                  <option>Call outcome</option>
                                                  <option>
                                                    Not Connected{" "}
                                                  </option>
                                                  <option>Schedule </option>
                                                  <option>Re- Schedule </option>
                                                  <option>Always Busy</option>
                                                </select>
                                              </div>

                                              <div className="col-sm-12">
                                                <label className="ckbox">
                                                  <input
                                                    type="checkbox"
                                                    name="remindeMe"
                                                    value={formData2.remindeMe}
                                                    onChange={
                                                      handleInputChange2
                                                    }
                                                  />
                                                  <span>Reminder Me</span>
                                                </label>
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                        <div
                                          className="modal-footer"
                                          style={{
                                            borderTop: "1px solid #dee2e6",
                                            borderRadius: "0 0 10px 10px",
                                            backgroundColor: "#f8f9fa",
                                          }}
                                        >
                                          <button
                                            className="btn ripple btn-primary"
                                            type="button"
                                            style={{
                                              borderRadius: "5px",
                                              padding: "8px 20px",
                                              fontSize: "14px",
                                              fontWeight: "bold",
                                            }}
                                            onClick={handleSubmit2}
                                          >
                                            Update Call
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <button
                                    className="btn btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                    style={{
                                      color: "white",
                                      backgroundColor: "#0dcaf0",
                                      width: "160px",
                                    }}
                                    onClick={handleOpenModal3}
                                  >
                                    Update Meeting
                                  </button>

                                  <div
                                    className={`modal fade ${
                                      isModalOpen3 ? "show d-block" : ""
                                    }`}
                                    id="modaldemo-callback-form"
                                    tabIndex="-1"
                                    style={{
                                      display: isModalOpen3 ? "block" : "none",
                                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    }}
                                  >
                                    <div
                                      className="modal-dialog modal-dialog-centered modal-xl"
                                      style={{
                                        maxWidth: "40%",
                                        margin: "auto",
                                      }}
                                    >
                                      <div
                                        className="modal-content"
                                        style={{
                                          borderRadius: "10px",
                                          boxShadow:
                                            "0 0 10px rgba(0, 0, 0, 0.3)",
                                        }}
                                      >
                                        <div
                                          className="modal-header"
                                          style={{
                                            backgroundColor: "#f8f9fa",
                                            borderBottom: "1px solid #dee2e6",
                                            borderRadius: "10px 10px 0 0",
                                          }}
                                        >
                                          <h5 className="modal-title">
                                            Meeting Update
                                          </h5>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            onClick={handleCloseModal3}
                                            aria-label="Close"
                                            style={{
                                              outline: "none",
                                              cursor: "pointer",
                                            }}
                                          ></button>
                                        </div>

                                        <div
                                          className="modal-body"
                                          style={{ padding: "20px" }}
                                        >
                                          <form>
                                            <div className="row row-sm">
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">
                                                  Meeting Date:{" "}
                                                  <span className="tx-danger">
                                                    *
                                                  </span>
                                                </label>
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  name="meetingDate"
                                                  value={formData3.meetingDate}
                                                  onChange={handleInputChange3}
                                                />
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">
                                                  Meeting Time:{" "}
                                                  <span className="tx-danger">
                                                    *
                                                  </span>
                                                </label>
                                                <input
                                                  type="time"
                                                  className="form-control"
                                                  name="meetingTime"
                                                  value={formData3.meetingTime}
                                                  onChange={handleInputChange3}
                                                />
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">
                                                  Meeting Type:{" "}
                                                  <span className="tx-danger">
                                                    *
                                                  </span>
                                                </label>
                                                <select
                                                  className="form-control select select2"
                                                  name="meetingType"
                                                  value={formData3.meetingType}
                                                  onChange={handleInputChange3}
                                                >
                                                  <option>Select</option>
                                                  <option>Online</option>
                                                  <option>Offline</option>
                                                </select>
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">
                                                  Status
                                                </label>
                                                <select
                                                  className="form-control select select2"
                                                  name="status"
                                                  value={formData3.status}
                                                  onChange={handleInputChange3}
                                                >
                                                  <option value="">
                                                    Select
                                                  </option>
                                                  <option>Not Done</option>
                                                  <option>Done</option>
                                                  <option>Schedule</option>
                                                  <option>Re- Schedule</option>
                                                </select>
                                              </div>
                                              <div className="col-sm-12 form-group">
                                                <label className="form-label">
                                                  Meeting Venue
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  name="meetingVenue"
                                                  value={formData3.meetingVenue}
                                                  onChange={handleInputChange3}
                                                />
                                              </div>
                                              <div className="col-sm-12 form-group">
                                                <label className="form-label">
                                                  Last Call Summary
                                                </label>
                                                <textarea
                                                  className="form-control"
                                                  style={{
                                                    height: "60px",
                                                    borderRadius: "5px",
                                                    border: "1px solid #ced4da",
                                                  }}
                                                  defaultValue={""}
                                                  name="lastCallSummary"
                                                  value={
                                                    formData3.lastCallSummary
                                                  }
                                                  onChange={handleInputChange3}
                                                />
                                              </div>
                                              <div className="col-sm-12 ">
                                                <label className="ckbox">
                                                  <input
                                                    type="checkbox"
                                                    name="remindeMe"
                                                    value={formData3.remindeMe}
                                                    onChange={
                                                      handleInputChange3
                                                    }
                                                  />
                                                  <span>Reminder Me</span>
                                                </label>
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                        <div
                                          className="modal-footer"
                                          style={{
                                            borderTop: "1px solid #dee2e6",
                                            borderRadius: "0 0 10px 10px",
                                            backgroundColor: "#f8f9fa",
                                          }}
                                        >
                                          <button
                                            className="btn ripple btn-primary"
                                            type="button"
                                            style={{
                                              borderRadius: "5px",
                                              padding: "8px 20px",
                                              fontSize: "14px",
                                              fontWeight: "bold",
                                            }}
                                            onClick={handleSubmit3}
                                          >
                                            Update Meeting
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <Link
                                    className="btn btn-rounded btn-rounded-sm mb-3"
                                    style={{
                                      color: "white",
                                      backgroundColor: "darkred",
                                      width: "180px",
                                    }}
                                    to={`/document-list/${empid}`}
                                  >
                                    Document
                                  </Link>

                                  <Link
                                    className="btn btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                    style={{
                                      color: "white",
                                      backgroundColor: "darkred",
                                      width: "180px",
                                    }}
                                    to={`/single-payment-entry/${empid}`}
                                  >
                                    Payment Entry
                                  </Link>

                                  <Link
                                    to={`/single-payment-ladger/${empid}`}
                                    className="btn btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                    style={{
                                      color: "white",
                                      backgroundColor: "red",
                                      width: "180px",
                                      marginRight: "-7px",
                                    }}
                                  >
                                    Payment Ledger
                                  </Link>
                                </div>
                              </div>

                              <div className="card-body ">
                                <div className="row ">
                                  <div className="col-sm-10 ">
                                    <ul className="notification mb-0 ">
                                      {leadDetailsfollowups.length > 0 ? (
                                        leadDetailsfollowups.map((comment) => {
                                          if (comment.type === "leadComment") {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.freepik.com/512/3982/3982361.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          added a notes
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notes:{" "}
                                                          {comment.comment}
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Notes
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "registryModule"
                                          ) {
                                            return (
                                              <li>
                                                {/* {if(comment.type === "registryModule" && comment.){}} */}
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {/* {comment.createdAtTime} */}
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {/* {comment.createdAt} */}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0 d-flex flex-column ">
                                                    <div className=" "></div>
                                                    <div className="media-body ms-2 d-flex justify-content-center align-items-center">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn.vectorstock.com/i/500p/15/77/calculator-isometric-3d-icon-vector-6971577.jpg"
                                                          style={{ width: 75 }}
                                                        />
                                                        <p
                                                          className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light"
                                                          style={{
                                                            marginLeft: "15px",
                                                          }}
                                                        >
                                                          Cam
                                                        </p>
                                                      </div>
                                                      {/* <div className="notify-time">
                                                       
                                                      </div> */}

                                                      <div className="  w-100">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId}{" "}
                                                          drafted, CAM /
                                                          Maintenance Sheet
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Customer Name:{" "}
                                                          {employee2?.fullName}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Project:{" "}
                                                          {
                                                            employee2?.project
                                                              ?.projectName
                                                          }
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Unit Number:{" "}
                                                          {`${
                                                            employee2?.unitNo
                                                          } / ${
                                                            employee2?.schemeType
                                                          } / ${
                                                            employee2?.size
                                                          } (${
                                                            [
                                                              "plot",
                                                              "farmhouse",
                                                            ].includes(
                                                              employee2?.schemeType?.toLowerCase()
                                                            )
                                                              ? "SQ YD"
                                                              : "SQ FT"
                                                          })`}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Total Cost: Rs.{" "}
                                                          {Math.floor(
                                                            employee2?.totalCost
                                                          )}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Discount: Rs.{" "}
                                                          {Math.floor(
                                                            employee2?.discountAmount
                                                          )}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          <strong>
                                                            {" "}
                                                            Final Cost: Rs.{" "}
                                                            {Math.floor(
                                                              employee2?.totalCost -
                                                                employee2?.discountAmount
                                                            )}
                                                            {}
                                                          </strong>
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Received: Rs.{" "}
                                                          {Math.floor(
                                                            employee2?.totolReceived
                                                          )}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Final Due Cost: Rs.{" "}
                                                          <span
                                                            style={{
                                                              color: "red",
                                                            }}
                                                          >
                                                            {Math.floor(
                                                              employee2?.totalCost -
                                                                (employee2?.discountAmount +
                                                                  employee2?.totolReceived)
                                                            )}
                                                            {""} (To be
                                                            collected)
                                                          </span>
                                                        </p>
                                                        -----------------------------------------------------------------------------------------------------
                                                        {/* <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Received:{" "}
                                                          {
                                                            formData17.actualFinalCost
                                                          }
                                                          {}
                                                        </p> */}
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Name on Registry:{" "}
                                                          {comment
                                                            ?.maintenanceCharges[0]
                                                            ?.nameOnRegistry ||
                                                            ""}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Name Change Charges:{" "}
                                                          Rs.{" "}
                                                          {Math.floor(
                                                            comment
                                                              ?.maintenanceCharges[0]
                                                              ?.nameChangeCharges
                                                          ) || ""}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Aadhar:{" "}
                                                          <span className="ms-2">
                                                            {employee2?.applicantAadhaarImage ? (
                                                              <a
                                                                href={
                                                                  employee2.applicantAadhaarImage
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                              >
                                                                <i className="fa-solid fa-eye"></i>
                                                              </a>
                                                            ) : (
                                                              <i
                                                                className="fa-solid fa-eye text-muted"
                                                                title="No Aadhar Uploaded"
                                                              ></i>
                                                            )}
                                                          </span>
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Pan:{" "}
                                                          <span className="ms-2">
                                                            {employee2?.applicantPanImage ? (
                                                              <a
                                                                href={
                                                                  employee2.applicantPanImage
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                              >
                                                                <i className="fa-solid fa-eye"></i>
                                                              </a>
                                                            ) : (
                                                              <i
                                                                className="fa-solid fa-eye text-muted"
                                                                title="No Aadhar Uploaded"
                                                              ></i>
                                                            )}
                                                          </span>
                                                          {}
                                                        </p>
                                                        -----------------------------------------------------------------------------------------------------
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Cam Start Date:{" "}
                                                          {
                                                            // comment?.maintenanceCharges[0]?.camStartDate || ''
                                                            comment
                                                              ?.maintenanceCharges[0]
                                                              ?.camStartDate
                                                              ? new Date(
                                                                  comment?.maintenanceCharges[0]?.camStartDate
                                                                ).toLocaleString(
                                                                  "en-US",
                                                                  {
                                                                    day: "numeric",
                                                                    month:
                                                                      "short",
                                                                    year: "numeric",
                                                                  }
                                                                )
                                                              : ""
                                                          }
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Total Month:{" "}
                                                          {comment
                                                            ?.maintenanceCharges[0]
                                                            ?.totalMonth || ""}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          CAM End Date:{" "}
                                                          {comment
                                                            ?.maintenanceCharges[0]
                                                            ?.camEndDate
                                                            ? new Date(
                                                                comment?.maintenanceCharges[0]?.camEndDate
                                                              ).toLocaleString(
                                                                "en-US",
                                                                {
                                                                  day: "numeric",
                                                                  month:
                                                                    "short",
                                                                  year: "numeric",
                                                                }
                                                              )
                                                            : ""}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Unit Size:{" "}
                                                          {comment
                                                            ?.maintenanceCharges[0]
                                                            ?.unitSize ||
                                                            ""}{" "}
                                                          {employee2?.schemeType ===
                                                          "Shop"
                                                            ? " SQFT"
                                                            : " SQ YD"}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          CAM Rate (per{" "}
                                                          {employee2?.schemeType ===
                                                          "Shop"
                                                            ? "SQFT"
                                                            : "SQ YD"}
                                                          ):{" "}
                                                          {comment
                                                            ?.maintenanceCharges[0]
                                                            ?.camRate || ""}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Total CAM Charges: Rs.{" "}
                                                          <strong>
                                                            {Math.floor(
                                                              +comment
                                                                ?.maintenanceCharges[0]
                                                                ?.camRate *
                                                                +comment
                                                                  ?.maintenanceCharges[0]
                                                                  ?.unitSize *
                                                                +comment
                                                                  ?.maintenanceCharges[0]
                                                                  ?.totalMonth
                                                            ) || ""}{" "}
                                                          </strong>
                                                          {}
                                                        </p>
                                                        -----------------------------------------------------------------------------------------------------
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reference Given:{" "}
                                                          {applicantRefferenceCount ||
                                                            comment
                                                              ?.maintenanceCharges[0]
                                                              ?.refrenceGiven ||
                                                            0}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Months Waiver :{" "}
                                                          {comment
                                                            ?.maintenanceCharges[0]
                                                            ?.waveOffMonth ||
                                                            ""}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Discount in CAM (
                                                          Minus) : Rs.{" "}
                                                          <span
                                                            style={{
                                                              color: "red",
                                                            }}
                                                          >
                                                            {Math.floor(
                                                              comment
                                                                ?.maintenanceCharges[0]
                                                                ?.discountCam
                                                            ) || ""}
                                                          </span>
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Payable CAM Without
                                                          GST :{" "}
                                                          {comment
                                                            ?.maintenanceCharges[0]
                                                            ?.totalCam || 0}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Gst :{" "}
                                                          {comment
                                                            ?.maintenanceCharges[0]
                                                            ?.gst || ""}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Payable CAM With GST :
                                                          Rs.{" "}
                                                          {Math.floor(
                                                            comment
                                                              ?.maintenanceCharges[0]
                                                              ?.payableCam
                                                          ) || ""}
                                                          {}
                                                        </p>
                                                        -----------------------------------------------------------------------------------------------------
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Cheque Bounce:{" "}
                                                          {comment
                                                            ?.maintenanceCharges[0]
                                                            ?.chequeBounce ||
                                                            ""}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Cheque Bounce Penalty:{" "}
                                                          Rs.{" "}
                                                          {Math.floor(
                                                            comment
                                                              ?.maintenanceCharges[0]
                                                              ?.chequePenalty
                                                          ) || ""}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Cheque Bounce Charges:{" "}
                                                          Rs.{" "}
                                                          {Math.floor(
                                                            comment
                                                              ?.maintenanceCharges[0]
                                                              ?.chequeBounceCharges
                                                          ) || ""}
                                                          {}
                                                        </p>
                                                        -----------------------------------------------------------------------------------------------------
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Stamp Duty : Rs.{" "}
                                                          {Math.floor(
                                                            comment
                                                              ?.maintenanceCharges[0]
                                                              ?.stampDuty
                                                          ) || ""}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Lawyer Fees : Rs.{" "}
                                                          {Math.floor(
                                                            comment
                                                              ?.maintenanceCharges[0]
                                                              ?.lawyerFees
                                                          ) || ""}
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Interest Amount: Rs.{" "}
                                                          {Math.floor(
                                                            comment
                                                              ?.maintenanceCharges[0]
                                                              ?.intrestAmount
                                                          ) || ""}
                                                          {}
                                                        </p>
                                                        -----------------------------------------------------------------------------------------------------
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Waiver : Rs.{" "}
                                                          <span
                                                            style={{
                                                              color: "red",
                                                            }}
                                                          >
                                                            {" "}
                                                            {Math.floor(
                                                              comment
                                                                ?.maintenanceCharges[0]
                                                                ?.waiverCharges
                                                            ) || ""}
                                                          </span>
                                                          {}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Remark ( Waiver) :{" "}
                                                          {comment
                                                            ?.maintenanceCharges[0]
                                                            ?.remark || ""}
                                                          {}
                                                        </p>
                                                        -----------------------------------------------------------------------------------------------------
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Final NOC Payment :{" "}
                                                          Rs.{" "}
                                                          <strong>
                                                            {" "}
                                                            {Math.floor(
                                                              +comment
                                                                ?.maintenanceCharges[0]
                                                                ?.finalNocAmount
                                                            ) || ""}{" "}
                                                          </strong>
                                                          {}
                                                        </p>
                                                      </div>
                                                      {/* <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Cam
                                                        </p>
                                                      </div> */}
                                                    </div>
                                                  </div>
                                                  <div
                                                    className="d-flex w-100 justify-content-between align-items-start"
                                                    style={{ width: "100%" }}
                                                  >
                                                    {/* Badge showing status */}
                                                    <div>
                                                      <div
                                                        className={`badge bg-pill text-white d-inline-block text-center ${
                                                          comment
                                                            ?.maintenanceCharges[0]
                                                            ?.status ===
                                                          "Pending"
                                                            ? "bg-warning"
                                                            : comment
                                                                ?.maintenanceCharges[0]
                                                                ?.status ===
                                                              "Approved"
                                                            ? "bg-success"
                                                            : "bg-danger"
                                                        }`}
                                                        style={{
                                                          width: "310px",
                                                          fontSize: "15px",
                                                          marginBottom: "10px",
                                                          lineHeight: "1.5", // optional: helps vertically center text
                                                        }}
                                                      >
                                                        {comment
                                                          ?.maintenanceCharges?.[0]
                                                          ?.status === "Pending"
                                                          ? "Pending At Accounts"
                                                          : comment
                                                              ?.maintenanceCharges?.[0]
                                                              ?.status}
                                                      </div>
                                                      <div className="align-left">
                                                        {comment
                                                          ?.maintenanceCharges?.[0] && (
                                                          <>
                                                            {comment
                                                              .maintenanceCharges[0]
                                                              .odcRemark && (
                                                              <>
                                                                <i className="fe fe-chevrons-right me-1" />{" "}
                                                                Approve Remark:{" "}
                                                                <strong>
                                                                  {" "}
                                                                  {
                                                                    comment
                                                                      .maintenanceCharges[0]
                                                                      .odcRemark
                                                                  }{" "}
                                                                </strong>
                                                                <br />
                                                              </>
                                                            )}
                                                            {comment
                                                              .maintenanceCharges[0]
                                                              .approvedByName && (
                                                              <>
                                                                <i className="fe fe-chevrons-right me-1" />{" "}
                                                                Approved By:{" "}
                                                                <strong>
                                                                  {" "}
                                                                  {
                                                                    comment
                                                                      .maintenanceCharges[0]
                                                                      .approvedByName
                                                                  }{" "}
                                                                </strong>
                                                                <br />
                                                              </>
                                                            )}
                                                            {comment
                                                              .maintenanceCharges[0]
                                                              .formatedApprovedAt && (
                                                              <>
                                                                <i className="fe fe-chevrons-right me-1" />{" "}
                                                                Approved At:{" "}
                                                                <strong>
                                                                  {" "}
                                                                  {
                                                                    comment
                                                                      .maintenanceCharges[0]
                                                                      .formatedApprovedAt
                                                                  }{" "}
                                                                </strong>
                                                                <br />
                                                              </>
                                                            )}
                                                          </>
                                                        )}
                                                      </div>
                                                    </div>

                                                    {comment
                                                      ?.maintenanceCharges[0]
                                                      ?.status ===
                                                      "Approved" && (
                                                      <Link
                                                        className="badge bg-primary text-white d-inline-block text-center"
                                                        style={{
                                                          width: "160px",
                                                          fontSize: "15px",
                                                          marginBottom: "10px",
                                                          lineHeight: "1.5",
                                                          textDecoration:
                                                            "none",
                                                        }}
                                                        to={`/single-payment-entry/${empid}`}
                                                      >
                                                        Proceed to NOC
                                                      </Link>
                                                    )}
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "meetingUpdate"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/1821/1821951.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>
                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          Posted an update.
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Meeting Date :{" "}
                                                          {
                                                            comment.formattedDate4
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Meeting Time :{" "}
                                                          {
                                                            comment.formattedDate3
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Meeting Type :{" "}
                                                          {comment.meetingType}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Meeting Venue :{" "}
                                                          {comment.meetingVenue}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Last Call Summary :{" "}
                                                          {
                                                            comment.lastCallSummary
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Status:{" "}
                                                          {comment.status}
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Meeting
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "unitAwarded"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src={Img7}
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>
                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          Unit Awarded.
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          comment :{" "}
                                                          {comment.amount11}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Remark :{" "}
                                                          {comment.amount12}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          BSP :{" "}
                                                          {comment.amount10}
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Unit Awarded
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "undertakeingLD"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://icons.veryicon.com/png/o/business/education-service/material-formulation.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>
                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          Under Takeing LD.
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Type : {comment.type}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Attachment :{" "}
                                                          <Link
                                                            to={
                                                              comment.attachment
                                                            }
                                                            target="_blank"
                                                            title="View Attachment"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Under Takeing LD
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type ===
                                            "applicationVerified"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/approve-icon.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>
                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          Application Verified.
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Type : {comment.type}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Comment:{" "}
                                                          {comment.comment}
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Application Verified
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (comment.type === "noc") {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/3456/3456388.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>
                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          updated NOC
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          KYC:{" "}
                                                          {comment.kyc
                                                            ? "Done"
                                                            : "Not Done"}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Payment:{" "}
                                                          {comment.payment
                                                            ? "Done"
                                                            : "Not Done"}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Penalty:{" "}
                                                          {comment.penalty
                                                            ? "Done"
                                                            : "Not Done"}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Issue:{" "}
                                                          {comment.issue
                                                            ? "Done"
                                                            : "Not Done"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Status: {comment.gat}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          NOC Upload:{" "}
                                                          <Link
                                                            to={
                                                              comment.nocUpload
                                                            }
                                                            target="__blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          NOC
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "registry"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.freepik.com/512/4631/4631598.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>
                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          updated Registry
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          NOC:{" "}
                                                          {comment.noc
                                                            ? "Done"
                                                            : "Not Done"}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Registry Date:{" "}
                                                          {
                                                            comment.registrationDate
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Registry Status:{" "}
                                                          {
                                                            comment.registrationStatus
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Registry Address:{" "}
                                                          {
                                                            comment.registrationAddress
                                                          }
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Registry
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "invitation"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.freepik.com/512/4631/4631598.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>
                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          updated invitation
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Title:{" "}
                                                          {comment &&
                                                            comment.Announcement &&
                                                            `${comment.Announcement.title}`}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Invitation Date:{" "}
                                                          {comment &&
                                                            comment.Announcement &&
                                                            `${comment.Announcement.noticeDate}`}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Invitation Time:{" "}
                                                          {comment &&
                                                            comment.Announcement &&
                                                            `${comment.Announcement.noticeTime}`}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Venue:{" "}
                                                          {comment &&
                                                            comment.Announcement &&
                                                            `${comment.Announcement.address}`}
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Invitation
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "unitAllocationEoi"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>

                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0 text-dark tx-11">
                                                    05 May 2023 <br /> 12:00 PM
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4">
                                                        <img
                                                          src={Img5}
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {
                                                            employee2.allocatorId
                                                          }
                                                          , Unit & Payment Plan.
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Size ( Sq Yd):{" "}
                                                          {comment &&
                                                            comment.inventory &&
                                                            `${comment.inventory.size}`}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          BSP (Rs.):{" "}
                                                          {comment &&
                                                            comment.applicant &&
                                                            `${comment.applicant.bsp}`}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          PLC (%):{" "}
                                                          {comment &&
                                                            comment.applicant &&
                                                            `${comment.applicant.PLCs}`}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          EDC/IDC (Rs.):{" "}
                                                          {comment &&
                                                          comment.applicant &&
                                                          comment.applicant
                                                            .fixedCharges !==
                                                            null
                                                            ? `${comment.applicant.fixedCharges}`
                                                            : "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Total cost (Rs.):{" "}
                                                          {comment &&
                                                          comment.applicant &&
                                                          comment.applicant
                                                            .totalCost !== null
                                                            ? `${comment.applicant.totalCost}`
                                                            : "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Facing:{" "}
                                                          {comment &&
                                                          comment.applicant &&
                                                          comment.applicant
                                                            .facing !== null
                                                            ? `${comment.applicant.facing}`
                                                            : "N/A"}
                                                        </p>

                                                        <p
                                                          className="mb-0 tx-13 "
                                                          style={{
                                                            color: "green",
                                                          }}
                                                        >
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Status:{" "}
                                                          {comment?.inventory
                                                            ?.status || "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Type:{" "}
                                                          {comment &&
                                                            comment.inventory &&
                                                            `${comment.inventory.type}`}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Payment Plan:{" "}
                                                          {comment &&
                                                            comment.applicant &&
                                                            `${comment.applicant.paymentPlan}`}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Remark:{" "}
                                                          {comment &&
                                                            comment.inventory &&
                                                            `${comment.inventory.remark}`}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          For:{" "}
                                                          {comment &&
                                                            comment.inventory &&
                                                            `${comment.inventory.for}`}
                                                        </p>
                                                        <br />
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Amount:{" "}
                                                          {comment.amount1 ||
                                                            "N/A"}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Mode:{" "}
                                                          {comment.amount6 ||
                                                            "N/A"}
                                                        </p>

                                                        {comment.paymentLedger &&
                                                          comment.paymentLedger
                                                            .length > 0 &&
                                                          comment.paymentLedger.some(
                                                            (entry) =>
                                                              entry.collectionMode ===
                                                              "Online"
                                                          ) &&
                                                          comment.paymentLedger
                                                            .filter(
                                                              (entry) =>
                                                                entry.collectionMode ===
                                                                "Online"
                                                            )
                                                            .map((entry) => (
                                                              <p
                                                                key={entry.id}
                                                                className="mb-0 tx-13 text-dark"
                                                              >
                                                                <i className="fe fe-chevrons-right me-1" />
                                                                Transaction ID:{" "}
                                                                {entry.transactionNo ||
                                                                  "N/A"}
                                                              </p>
                                                            ))}

                                                        {comment.paymentLedger &&
                                                          comment.paymentLedger
                                                            .length > 0 &&
                                                          comment.paymentLedger.some(
                                                            (entry) =>
                                                              entry.collectionMode ===
                                                              "Cheque"
                                                          ) &&
                                                          comment.paymentLedger
                                                            .filter(
                                                              (entry) =>
                                                                entry.collectionMode ===
                                                                "Cheque"
                                                            )
                                                            .map((entry) => (
                                                              <p
                                                                key={entry.id}
                                                                className="mb-0 tx-13 text-dark"
                                                              >
                                                                <i className="fe fe-chevrons-right me-1" />
                                                                Cheque No:{" "}
                                                                {entry.chequeNo ||
                                                                  "N/A"}
                                                              </p>
                                                            ))}

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Payment Status:{" "}
                                                          {comment.amount8 ||
                                                            "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Account No:{" "}
                                                          {comment.amount4 ||
                                                            "N/A"}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Payment Date:{" "}
                                                          {comment.amount3 ||
                                                            "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Proof:{" "}
                                                          <Link
                                                            to={comment.amount7}
                                                            target="__blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Unit & Payment Plan
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "welcomeLetter"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src={Imgs}
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>
                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          Sent Welcome Letter
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          View Welcome Letter{" "}
                                                          <Link
                                                            to={
                                                              comment.welcomeLetterPDF
                                                            }
                                                            target="blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Print Welcome Letter{" "}
                                                          <Link
                                                            to={`/views-welcome-letters/${empid}`}
                                                            target="blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Welcome Letter
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.reminderType ===
                                            "Demand Notice"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.freepik.com/512/7757/7757460.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          added a Notice
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notice Type:{" "}
                                                          {comment.reminderType}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notice Date:{" "}
                                                          {
                                                            comment.formattedDates
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notice Message:{" "}
                                                          {
                                                            comment.reminderMessage
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notice View:{" "}
                                                          <Link
                                                            to={`/demand-notice/${comment.id}`}
                                                            target="__blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Notice
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.reminderType ===
                                            "Final Demand Notice"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.freepik.com/512/7757/7757460.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          added a Notice
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notice Type:{" "}
                                                          {comment.reminderType}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notice Date:{" "}
                                                          {
                                                            comment.formattedDates
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notice Message:{" "}
                                                          {
                                                            comment.reminderMessage
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notice View:{" "}
                                                          <Link
                                                            to={`/final-demand-notice/${comment.id}`}
                                                            target="__blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Notice
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "upComeingPayment"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src={Img4}
                                                          style={{ width: 40 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          Update a Up Coming
                                                          Payment
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Action:{" "}
                                                          {comment.action}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          From: {comment.from}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Date: {comment.date}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Time: {comment.time}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Venue: {comment.venue}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Amount:{" "}
                                                          {comment.amount}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Status:{" "}
                                                          {comment.payment}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Mode: {comment.mode}
                                                        </p>
                                                        {comment.mode ===
                                                          "Cash" && (
                                                          <p className="mb-0 tx-13 text-dark">
                                                            <i className="fe fe-chevrons-right me-1" />
                                                            Remark:{" "}
                                                            {comment.remark}
                                                          </p>
                                                        )}
                                                        {comment.mode ===
                                                          "Online" && (
                                                          <p className="mb-0 tx-13 text-dark">
                                                            <i className="fe fe-chevrons-right me-1" />
                                                            Transaction id:{" "}
                                                            {
                                                              comment.transaction
                                                            }
                                                          </p>
                                                        )}
                                                        {comment.mode ===
                                                          "Cheque" && (
                                                          <>
                                                            <p className="mb-0 tx-13 text-dark">
                                                              <i className="fe fe-chevrons-right me-1" />
                                                              Cheque No:{" "}
                                                              {comment.chequeNo}
                                                            </p>
                                                            <p className="mb-0 tx-13 text-dark">
                                                              <i className="fe fe-chevrons-right me-1" />
                                                              Cheque Date:{" "}
                                                              {
                                                                comment.chequeDate
                                                              }
                                                            </p>
                                                            <p className="mb-0 tx-13 text-dark">
                                                              <i className="fe fe-chevrons-right me-1" />
                                                              Cheque Details
                                                              Bank:{" "}
                                                              {
                                                                comment.chequeDetails
                                                              }
                                                            </p>
                                                          </>
                                                        )}
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Up Comeing Payment
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "cancelAllocation"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src={Img4}
                                                          style={{ width: 40 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          updated a Cancel
                                                          Allocation
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Unit Allocation:{" "}
                                                          {
                                                            comment.cancelAllocation
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Approved by:{" "}
                                                          {comment.approvedBy}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Confirmed by:{" "}
                                                          {comment.confirmedBy}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Cancelled by:{" "}
                                                          {comment.cancelledBy}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Remark:{" "}
                                                          {comment.remark}
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Cancel Allocation
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "unitChanged"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div
                                                  className="notification-body p-4 rounded shadow-sm text-center"
                                                  style={{
                                                    backgroundColor: "#f8f9fa",
                                                    borderRadius: "10px",
                                                  }}
                                                >
                                                  <div className="d-flex flex-column align-items-center">
                                                    <img
                                                      src="https://cdn-icons-png.flaticon.com/512/4757/4757506.png"
                                                      style={{
                                                        width: 50,
                                                        borderRadius: "50%",
                                                      }}
                                                      alt="Notification"
                                                    />

                                                    <div className="mt-3">
                                                      <p className="tx-14 text-dark mb-1 fw-bold">
                                                        {comment.creatorId},
                                                        Unit Changed
                                                      </p>
                                                      <p className="mb-0 tx-13 text-secondary">
                                                        {comment.comment ||
                                                          "N/A"}
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.reminderType ===
                                            "Cancellation Notice"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.freepik.com/512/7757/7757460.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          added a Notice
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notice Type:{" "}
                                                          {comment.reminderType}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notice Date:{" "}
                                                          {
                                                            comment.formattedDates
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notice Message:{" "}
                                                          {
                                                            comment.reminderMessage
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Notice View:{" "}
                                                          <Link
                                                            to={`/cancellation-notice/${comment.id}`}
                                                            target="__blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Notice
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.reminderType ===
                                            "Payment Intimation"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/8476/8476682.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          added a Reminder
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder Type:{" "}
                                                          {comment.reminderType}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder Date:{" "}
                                                          {
                                                            comment.formattedDates
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder Message:{" "}
                                                          {
                                                            comment.reminderMessage
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder View:{" "}
                                                          <Link
                                                            to={`/remainder-payment-information/${comment.id}`}
                                                            target="blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Reminder
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.reminderType ===
                                            "Plan Change"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/8476/8476682.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          added a Reminder
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder Type:{" "}
                                                          {comment.reminderType}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder Date:{" "}
                                                          {
                                                            comment.formattedDates
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder Message:{" "}
                                                          {
                                                            comment.reminderMessage
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder View:{" "}
                                                          <Link
                                                            to={`/remainder-plan-change/${comment.id}`}
                                                            target="blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>

                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Reminder
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "paymentDone"
                                          ) {
                                          } else if (
                                            comment.type ===
                                            "registryPaymentDone"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/6037/6037575.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          add a Registry Payment
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Amount:{" "}
                                                          {
                                                            comment
                                                              ?.registryPayment[0]
                                                              ?.amount
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Collection Mode:{" "}
                                                          {
                                                            comment
                                                              ?.registryPayment[0]
                                                              ?.collectionMode
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          {comment
                                                            ?.registryPayment[0]
                                                            ?.collectionMode ===
                                                            "Cash Deposit" && (
                                                            <>
                                                              Enter Discount:{" "}
                                                              {
                                                                comment
                                                                  ?.registryPayment[0]
                                                                  ?.enterDiscount
                                                              }
                                                            </>
                                                          )}
                                                          {comment
                                                            ?.registryPayment[0]
                                                            ?.collectionMode ===
                                                            "Online" && (
                                                            <>
                                                              Amrs Account:{" "}
                                                              {
                                                                comment
                                                                  ?.registryPayment[0]
                                                                  ?.amrsAccount
                                                              }
                                                            </>
                                                          )}
                                                          {comment
                                                            ?.registryPayment[0]
                                                            ?.collectionMode ===
                                                            "Cheque" && (
                                                            <>
                                                              Cheque No:{" "}
                                                              {
                                                                comment
                                                                  ?.registryPayment[0]
                                                                  ?.chequeNo
                                                              }
                                                            </>
                                                          )}
                                                        </p>
                                                        {comment
                                                          ?.registryPayment[0]
                                                          ?.collectionMode ===
                                                          "Cheque" && (
                                                          <p className="mb-0 tx-13 text-dark">
                                                            <i className="fe fe-chevrons-right  me-1" />
                                                            Cheque Date:{" "}
                                                            {
                                                              comment
                                                                ?.registryPayment[0]
                                                                ?.chequeDate
                                                            }
                                                          </p>
                                                        )}
                                                        {comment
                                                          ?.registryPayment[0]
                                                          ?.collectionMode ===
                                                          "Online" && (
                                                          <p className="mb-0 tx-13 text-dark">
                                                            <i className="fe fe-chevrons-right  me-1" />
                                                            Mode:{" "}
                                                            {
                                                              comment
                                                                ?.registryPayment[0]
                                                                ?.remark
                                                            }
                                                          </p>
                                                        )}
                                                        {comment
                                                          ?.registryPayment[0]
                                                          ?.collectionMode ===
                                                          "Cheque" && (
                                                          <p className="mb-0 tx-13 text-dark">
                                                            <i className="fe fe-chevrons-right  me-1" />
                                                            Bank Cheque:{" "}
                                                            {
                                                              comment
                                                                ?.registryPayment[0]
                                                                ?.deposteToAmrs
                                                            }
                                                          </p>
                                                        )}
                                                        {comment
                                                          ?.registryPayment[0]
                                                          ?.collectionMode ===
                                                          "Online" && (
                                                          <p className="mb-0 tx-13 text-dark">
                                                            <i className="fe fe-chevrons-right  me-1" />
                                                            Transaction No:{" "}
                                                            {
                                                              comment
                                                                ?.registryPayment[0]
                                                                ?.transactionNo
                                                            }
                                                          </p>
                                                        )}

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Payment Credit Date:{" "}
                                                          {formatDateTime(
                                                            comment
                                                              ?.registryPayment[0]
                                                              ?.paymentCredit
                                                          )}
                                                        </p>
                                                        {/* <p className="mb-0 tx-13 text-dark">
                                                                                                                    <i className="fe fe-chevrons-right me-1" />
                                                                                                                    Handover By: {comment.handOverBy}
                                                                                                                </p> */}
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Collect By:{" "}
                                                          {comment.creatorId}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Upload Receipt:{" "}
                                                          <Link
                                                            to={
                                                              comment
                                                                .registryPayment[0]
                                                                ?.registyPaymentReceipt[0]
                                                                ?.receiptPdf
                                                            }
                                                            target="_blank"
                                                            title="View Receipt"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>

                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Add Payment
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "gstInvoiceReceipt"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/6037/6037575.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {`${comment.creatorId} GST Invoice Generated`}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Comment:{" "}
                                                          {
                                                            "GST Invoice sent to client successfully!"
                                                          }
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Attachment:{" "}
                                                          <Link
                                                            to={
                                                              comment?.attachment
                                                            }
                                                            target="_blank"
                                                            title="View Receipt"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>

                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          GST Invoice
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "noDuesReceipt"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/6037/6037575.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {`${comment.creatorId} NOC Generated`}
                                                        </p>

                                                        {/* <p className="mb-0 tx-13 text-dark">
                                                                                                                    <i className="fe fe-chevrons-right me-1" />
                                                                                                                    Handover By: {comment.handOverBy}
                                                                                                                </p> */}

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Attachment:{" "}
                                                          <Link
                                                            to={
                                                              comment?.attachment
                                                            }
                                                            target="_blank"
                                                            title="View Receipt"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>

                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          NOC
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type ===
                                            "chequeBounceReceipt"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/6037/6037575.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {`${comment.creatorId} Cheque Bounce Reciept
                                                          Generated`}
                                                        </p>

                                                        {/* <p className="mb-0 tx-13 text-dark">
                                                                                                                    <i className="fe fe-chevrons-right me-1" />
                                                                                                                    Handover By: {comment.handOverBy}
                                                                                                                </p> */}

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Attachment:{" "}
                                                          <Link
                                                            to={
                                                              comment?.attachment
                                                            }
                                                            target="_blank"
                                                            title="View Receipt"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>

                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Cheque Bounce Receipt
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "intrestReceipt"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/6037/6037575.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {`${comment.creatorId} Interest Recipt
                                                          Generated`}
                                                        </p>

                                                        {/* <p className="mb-0 tx-13 text-dark">
                                                                                                                    <i className="fe fe-chevrons-right me-1" />
                                                                                                                    Handover By: {comment.handOverBy}
                                                                                                                </p> */}

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Attachment:{" "}
                                                          <Link
                                                            to={
                                                              comment?.attachment
                                                            }
                                                            target="_blank"
                                                            title="View Receipt"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>

                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Interest Receipt
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "nameChangeReceipt"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/6037/6037575.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {`${comment.creatorId} Name Change Reciept
                                                          Generated`}
                                                        </p>

                                                        {/* <p className="mb-0 tx-13 text-dark">
                                                                                                                    <i className="fe fe-chevrons-right me-1" />
                                                                                                                    Handover By: {comment.handOverBy}
                                                                                                                </p> */}

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Attachment:{" "}
                                                          <Link
                                                            to={
                                                              comment?.attachment
                                                            }
                                                            target="_blank"
                                                            title="View Receipt"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>

                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Name Change Recipt
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type ===
                                            "maintainanceReceipt"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/6037/6037575.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {`${comment.creatorId} Maintainance Reciept
                                                          Generated`}
                                                        </p>

                                                        {/* <p className="mb-0 tx-13 text-dark">
                                                                                                                    <i className="fe fe-chevrons-right me-1" />
                                                                                                                    Handover By: {comment.handOverBy}
                                                                                                                </p> */}

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Attachment:{" "}
                                                          <Link
                                                            to={
                                                              comment?.attachment
                                                            }
                                                            target="_blank"
                                                            title="View Receipt"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>

                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Maintainance Receipt
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "nocEmailSent"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/6037/6037575.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {`${comment.creatorId} Sent Noc email`}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          comment:{" "}
                                                          {comment?.comment ||
                                                            "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          NOC Email:{" "}
                                                          <Link
                                                            to={
                                                              comment?.attachment
                                                            }
                                                            target="_blank"
                                                            title="View Receipt"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>

                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Noc Email
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "registryDone"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/6037/6037575.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {`${comment.creatorId} Done Registry.`}
                                                        </p>

                                                        {/* <p className="mb-0 tx-13 text-dark">
                                                                                                                    <i className="fe fe-chevrons-right me-1" />
                                                                                                                    Handover By: {comment.handOverBy}
                                                                                                                </p> */}

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Registry Name:{" "}
                                                          <Link
                                                            to={
                                                              comment
                                                                ?.ownership[0]
                                                                ?.registryImage ||
                                                              ""
                                                            }
                                                            target="_blank"
                                                            title="View Registry Image"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                          {comment?.ownership[0]
                                                            ?.registryName ||
                                                            "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Registry Father Name:{" "}
                                                          {comment?.ownership[0]
                                                            ?.fatherName ||
                                                            "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Registry Location:{" "}
                                                          {comment?.ownership[0]
                                                            ?.registyLocation ||
                                                            "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Registry Date:{" "}
                                                          {comment?.ownership[0]
                                                            ?.registryDate ||
                                                            "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Registry Time:{" "}
                                                          {comment?.ownership[0]
                                                            ?.registryDateTime
                                                            ? new Date(
                                                                comment.ownership[0].registryDateTime
                                                              ).toLocaleTimeString()
                                                            : "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Unit No:{" "}
                                                          {comment?.ownership[0]
                                                            ?.unitNo || "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Description:{" "}
                                                          {comment?.ownership[0]
                                                            ?.description ||
                                                            "N/A"}
                                                        </p>
                                                      </div>

                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Registry Done
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "registryScheduled"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/6037/6037575.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {`${comment.creatorId} Scheduled a registry.`}
                                                        </p>

                                                        {/* <p className="mb-0 tx-13 text-dark">
                                                                                                                    <i className="fe fe-chevrons-right me-1" />
                                                                                                                    Handover By: {comment.handOverBy}
                                                                                                                </p> */}

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Registry Name:{" "}
                                                          {/* <Link
                                                            to={comment?.registrySchedule[0]?.registryImage || ''}
                                                            target="_blank"
                                                            title="View Registry Image"
                                                          >
                                                            <i className="fe fe-eye me-3" style={{ cursor: "pointer" }} />
                                                          </Link> */}
                                                          {comment
                                                            ?.registrySchedule[0]
                                                            ?.registryName ||
                                                            "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Registry Father Name:{" "}
                                                          {comment
                                                            ?.registrySchedule[0]
                                                            ?.fatherName ||
                                                            "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Registry Location:{" "}
                                                          {comment
                                                            ?.registrySchedule[0]
                                                            ?.registyLocation ||
                                                            "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Registry Date:{" "}
                                                          {comment
                                                            ?.registrySchedule[0]
                                                            ?.registryDate ||
                                                            "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Unit No:{" "}
                                                          {comment
                                                            ?.registrySchedule[0]
                                                            ?.unitNo || "N/A"}
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Description:{" "}
                                                          {comment
                                                            ?.registrySchedule[0]
                                                            ?.description ||
                                                            "N/A"}
                                                        </p>
                                                      </div>

                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Registry Scheduled
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.reminderType ===
                                            "Final Payment Intimation"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/8476/8476682.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          added a Reminder
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder Type:{" "}
                                                          {comment.reminderType}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder Date:{" "}
                                                          {
                                                            comment.formattedDates
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder Message:{" "}
                                                          {
                                                            comment.reminderMessage
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder View:{" "}
                                                          <Link
                                                            to={`/remainder-final-payment-intimation/${comment.id}`}
                                                            target="blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Reminder
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.reminderType ===
                                            "Final Cancel"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                    <br />
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.flaticon.com/512/8476/8476682.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          added a Reminder
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder Type:{" "}
                                                          {comment.reminderType}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder Date:{" "}
                                                          {
                                                            comment.formattedDates
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder Message:{" "}
                                                          {
                                                            comment.reminderMessage
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Reminder View:{" "}
                                                          <Link
                                                            to={`/remainder-final-cancel/${comment.id}`}
                                                            target="blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Reminder
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type2 === "signed" &&
                                            comment.type === "allotmentLetter"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://subbaiah.org/images/pdf.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>
                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          Send Allotment Letter
                                                          Signed
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          View Allotment Letter{" "}
                                                          <Link
                                                            to={
                                                              comment.allotmentLetterwithSign
                                                            }
                                                            target="blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Allotment Letter
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type2 === null &&
                                            comment.type === "allotmentLetter"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://subbaiah.org/images/pdf.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>
                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          Send Allotment Letter
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          View Allotment Letter{" "}
                                                          <Link
                                                            to={
                                                              comment.allotmentLetterwithoutPDF
                                                            }
                                                            target="blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Allotment Letter
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "demandLetter"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://www.burgielaw.com/wp-content/uploads/2019/07/45-bl-business-letter-of-demand.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>
                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          Sent Demand Letter
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          View Demand Letter{" "}
                                                          <Link
                                                            to={
                                                              comment.demandLetterPDF
                                                            }
                                                            target="__blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />{" "}
                                                          Print Demand Letter{" "}
                                                          <Link
                                                            to={`/demand-latter-view/${comment.id}`}
                                                            target="__blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Demand Letter
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (comment.type === "BBA") {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div
                                                        className="me-5 pt-4 pb-4"
                                                        style={{
                                                          display: "flex",
                                                          justifyContent:
                                                            "center",
                                                          alignItems: "center",
                                                          fontSize: "24px",
                                                          fontWeight: "bold",
                                                          color: "green",
                                                          padding: "20px",
                                                          borderRadius: "10px",
                                                          width: "10%",
                                                        }}
                                                      >
                                                        BBA
                                                      </div>

                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          added a BBA.
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          BBA Date :{" "}
                                                          {comment.bbaDate}
                                                        </p>
                                                        {/* <p className="mb-0 tx-13 text-dark">
                                                                                                                    <i className="fe fe-chevrons-right me-1" />
                                                                                                                    Registry Date : {comment.bss}
                                                                                                                </p> */}
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Status: {comment.abs}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          BBA Upload:{" "}
                                                          <Link
                                                            to={comment.bbaFile}
                                                            target="__blanck"
                                                            title="View"
                                                          >
                                                            <i
                                                              className="fe fe-eye me-3"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                          </Link>
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          BBA
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else if (
                                            comment.type === "callUpdate"
                                          ) {
                                            return (
                                              <li>
                                                <div className="notification-time">
                                                  <p className="mb-0 ">
                                                    {comment.createdAtDate}
                                                    <br />
                                                    {comment.createdAtTime}
                                                  </p>
                                                </div>
                                                <div className="notification-icon">
                                                  <a href="javascript:void(0);" />
                                                </div>
                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                  <p className="mb-0">
                                                    {comment.createdAt}
                                                  </p>
                                                </div>
                                                <div className="notification-body">
                                                  <div className="media mt-0">
                                                    <div className="media-body ms-2 d-flex">
                                                      <div className="me-5 pt-4 pb-4">
                                                        <img
                                                          src="https://cdn-icons-png.freepik.com/512/561/561253.png"
                                                          style={{ width: 75 }}
                                                        />
                                                      </div>
                                                      <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                          {comment.creatorId},
                                                          Posted an update.
                                                        </p>

                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Callback Date :{" "}
                                                          {
                                                            comment.formattedDate
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Callback Time :{" "}
                                                          {
                                                            comment.formattedDate2
                                                          }
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Status:{" "}
                                                          {comment.status}
                                                        </p>
                                                        <p className="mb-0 tx-13 text-dark">
                                                          <i className="fe fe-chevrons-right me-1" />
                                                          Last Call Summary:{" "}
                                                          {
                                                            comment.lastCallSummary
                                                          }
                                                        </p>
                                                      </div>
                                                      <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                          Callback
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            );
                                          } else {
                                            return null;
                                          }
                                        })
                                      ) : (
                                        <></>
                                      )}

                                      {employee2.hasSubscription === false && (
                                        <li>
                                          <div className="notification-time">
                                            <p className="mb-0 ">
                                              {employee2.createdAtDate}
                                              <br />
                                              {employee2.createdAtTime}
                                            </p>
                                          </div>

                                          <div className="notification-icon">
                                            <a href="javascript:void(0);" />
                                          </div>
                                          <div className="notification-time-date mb-2 d-block d-md-none">
                                            <p className="mb-0 text-dark tx-11">
                                              05 May 2023 <br /> 12:00 PM
                                            </p>
                                          </div>
                                          <div className="notification-body">
                                            <div className="media mt-0">
                                              <div className="media-body ms-2 d-flex">
                                                <div className="me-5 pt-4">
                                                  <img
                                                    src={Img5}
                                                    style={{ width: 75 }}
                                                  />
                                                </div>

                                                <div className="">
                                                  <p className="tx-14 text-dark mb-0 tx-semibold">
                                                    {employee2.allocatorId},
                                                    Unit Allocated.
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Lucky Draw:{" "}
                                                    <span
                                                      style={{
                                                        color:
                                                          (employee2?.luckyDraw
                                                            ?.luckyDrawName ??
                                                            "N/A") === "N/A"
                                                            ? "red"
                                                            : "inherit",
                                                      }}
                                                    >
                                                      {employee2?.luckyDraw
                                                        ?.luckyDrawName ??
                                                        "N/A"}
                                                    </span>
                                                  </p>

                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Scheme:{" "}
                                                    <span
                                                      style={{
                                                        color:
                                                          employee2.schemeId
                                                            ? "inherit"
                                                            : "red",
                                                      }}
                                                    >
                                                      {employee2.schemeId ||
                                                        "N/A"}
                                                    </span>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Project:{" "}
                                                    <span
                                                      style={{
                                                        color:
                                                          (employee2?.project
                                                            ?.projectName ??
                                                            "N/A") === "N/A"
                                                            ? "red"
                                                            : "inherit",
                                                      }}
                                                    >
                                                      {employee2?.project
                                                        ?.projectName ?? "N/A"}
                                                    </span>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Type:{" "}
                                                    <span
                                                      style={{
                                                        color: employee2
                                                          ?.inventory?.type
                                                          ? "inherit"
                                                          : "red",
                                                      }}
                                                    >
                                                      {employee2?.inventory
                                                        ?.type ?? "N/A"}
                                                    </span>
                                                  </p>
                                                  <br />
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Unit no:{" "}
                                                    <span
                                                      style={{
                                                        color: employee2.unitNo
                                                          ? "inherit"
                                                          : "red",
                                                      }}
                                                    >
                                                      {employee2.unitNo ||
                                                        "N/A"}
                                                    </span>
                                                  </p>

                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Size:{" "}
                                                    {(() => {
                                                      const type =
                                                        employee2?.inventory
                                                          ?.type;
                                                      const size =
                                                        employee2?.inventory
                                                          ?.size;
                                                      const isDataAvailable =
                                                        type && size;

                                                      if (isDataAvailable) {
                                                        return (
                                                          <>
                                                            {type === "Plot" ||
                                                            type === "Farmhouse"
                                                              ? `${size} SQ YD`
                                                              : ""}
                                                            {type === "Shop"
                                                              ? `${size} SQ FT`
                                                              : ""}
                                                          </>
                                                        );
                                                      } else {
                                                        return (
                                                          <span
                                                            style={{
                                                              color: "red",
                                                            }}
                                                          >
                                                            N/A
                                                          </span>
                                                        );
                                                      }
                                                    })()}
                                                  </p>

                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Gift:{" "}
                                                    <span
                                                      style={{
                                                        color: employee2.gift
                                                          ? "inherit"
                                                          : "red",
                                                      }}
                                                    >
                                                      {employee2.gift || "N/A"}
                                                    </span>
                                                  </p>
                                                  <br />
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    <Link
                                                      to={`/old-plan/${empid}`}
                                                      target="__blanck"
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                    >
                                                      Payment Plan:{" "}
                                                      <span
                                                        style={{
                                                          color: "#4CAF50", // Green text color
                                                          fontWeight: "bold", // Bold text
                                                          fontSize: "14px", // Font size
                                                          fontFamily:
                                                            "'Montserrat', sans-serif",
                                                        }}
                                                      >
                                                        {employee2.paymentPlan}
                                                      </span>
                                                    </Link>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    BSP: Rs.{" "}
                                                    <span
                                                      style={{
                                                        color: employee2.bsp
                                                          ? "inherit"
                                                          : "red",
                                                      }}
                                                    >
                                                      {employee2.bsp || "N/A"}
                                                    </span>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    UNIT Price: Rs.{" "}
                                                    <span
                                                      style={{
                                                        color:
                                                          employee2.unitPrice
                                                            ? "inherit"
                                                            : "red",
                                                      }}
                                                    >
                                                      {employee2.unitPrice ||
                                                        "N/A"}
                                                    </span>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Fixed Charges(EDC/IDC): Rs.{" "}
                                                    <span
                                                      style={{
                                                        color:
                                                          employee2.fixedCharges
                                                            ? "inherit"
                                                            : "red",
                                                      }}
                                                    >
                                                      {employee2.fixedCharges ||
                                                        "N/A"}
                                                    </span>
                                                  </p>

                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    EDC/IDC Amount: Rs.{" "}
                                                    <span
                                                      style={{
                                                        color:
                                                          employee2.fixedAmount
                                                            ? "inherit"
                                                            : "red",
                                                      }}
                                                    >
                                                      {employee2.fixedAmount ||
                                                        "N/A"}
                                                    </span>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    PLCs:{" "}
                                                    <span
                                                      style={{
                                                        color: employee2.PLCs
                                                          ? "inherit"
                                                          : "red",
                                                      }}
                                                    >
                                                      {employee2.PLCs || "N/A"}
                                                    </span>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    PLCs Value: Rs.{" "}
                                                    <span
                                                      style={{
                                                        color:
                                                          employee2.plcAmount
                                                            ? "inherit"
                                                            : "red",
                                                      }}
                                                    >
                                                      {employee2.plcAmount ||
                                                        "N/A"}
                                                    </span>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Total cost: Rs.{" "}
                                                    <span
                                                      style={{
                                                        color:
                                                          employee2.totalCost
                                                            ? "inherit"
                                                            : "red",
                                                      }}
                                                    >
                                                      {employee2.totalCost ||
                                                        "N/A"}
                                                    </span>
                                                  </p>
                                                  <br />
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    <span
                                                      style={{ color: "red" }}
                                                    >
                                                      {" "}
                                                      Booking Amount: Rs.{" "}
                                                      {
                                                        employee2.registrationAmount
                                                      }{" "}
                                                    </span>
                                                  </p>
                                                </div>
                                                <div className="notify-time">
                                                  <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                    Unit Allocated
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      )}

                                      {employee2.hasSubscription === false && (
                                        <li>
                                          <div className="notification-time">
                                            <p className="mb-0 ">
                                              {employee2.createdAtDate}
                                              <br />
                                              {employee2.createdAtTime}
                                            </p>
                                          </div>
                                          <div className="notification-icon">
                                            <a href="javascript:void(0);" />
                                          </div>
                                          <div className="notification-time-date mb-2 d-block d-md-none">
                                            <p className="mb-0 text-dark tx-11">
                                              05 May 2023 <br /> 12:00 PM
                                            </p>
                                          </div>
                                          <div className="notification-body">
                                            <div className="media mt-0">
                                              <div className="media-body ms-2 d-flex">
                                                <div className="me-5 pt-4">
                                                  <img
                                                    src="https://media.istockphoto.com/id/1332923866/vector/raffle-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=Jhn_kGn3Yy6DvfmJWD3dqp9vXDj8BtPL6Yixqg5w9ck="
                                                    style={{ width: 75 }}
                                                  />
                                                </div>

                                                <div className="">
                                                  <p className="tx-14 text-dark mb-0 tx-semibold">
                                                    {employee2.creatorId}, Unit
                                                    Applied.
                                                  </p>

                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Lucky Draw:{" "}
                                                    <span
                                                      style={{
                                                        color:
                                                          (employee2?.luckyDraw
                                                            ?.luckyDrawName ??
                                                            "N/A") === "N/A"
                                                            ? "red"
                                                            : "inherit",
                                                      }}
                                                    >
                                                      {employee2?.luckyDraw
                                                        ?.luckyDrawName ??
                                                        "N/A"}
                                                    </span>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Scheme: {employee2.schemeId}
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Project:{" "}
                                                    <span
                                                      style={{
                                                        color:
                                                          (employee2?.project
                                                            ?.projectName ??
                                                            "N/A") === "N/A"
                                                            ? "red"
                                                            : "inherit",
                                                      }}
                                                    >
                                                      {employee2?.project
                                                        ?.projectName ?? "N/A"}
                                                    </span>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Type:{" "}
                                                    <span
                                                      style={{
                                                        color: employee2
                                                          ?.inventory?.type
                                                          ? "inherit"
                                                          : "red",
                                                      }}
                                                    >
                                                      {employee2?.inventory
                                                        ?.type ?? "N/A"}
                                                    </span>
                                                  </p>

                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    <Link
                                                      to={`/old-plan/${empid}`}
                                                      target="__blanck"
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                    >
                                                      Payment Plan:{" "}
                                                      <span
                                                        style={{
                                                          color: "#4CAF50",
                                                          fontWeight: "bold",
                                                          fontSize: "14px",
                                                          fontFamily:
                                                            "'Montserrat', sans-serif",
                                                        }}
                                                      >
                                                        {employee2.paymentPlan}
                                                      </span>
                                                    </Link>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Size:{" "}
                                                    {(() => {
                                                      const type =
                                                        employee2?.inventory
                                                          ?.type;
                                                      const size =
                                                        employee2?.inventory
                                                          ?.size;
                                                      const isDataAvailable =
                                                        type && size;

                                                      if (isDataAvailable) {
                                                        return (
                                                          <>
                                                            {type === "Plot" ||
                                                            type === "Farmhouse"
                                                              ? `${size} SQ YD`
                                                              : ""}
                                                            {type === "Shop"
                                                              ? `${size} SQ FT`
                                                              : ""}
                                                          </>
                                                        );
                                                      } else {
                                                        return (
                                                          <span
                                                            style={{
                                                              color: "red",
                                                            }}
                                                          >
                                                            N/A
                                                          </span>
                                                        );
                                                      }
                                                    })()}
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Facing:{" "}
                                                    <span
                                                      style={{
                                                        color: employee2.facing
                                                          ? "inherit"
                                                          : "red",
                                                      }}
                                                    >
                                                      {employee2.facing ||
                                                        "N/A"}
                                                    </span>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Draw Scheme Amount:{" "}
                                                    <span
                                                      style={{
                                                        color:
                                                          employee2.amountReceived
                                                            ? "inherit"
                                                            : "red",
                                                      }}
                                                    >
                                                      {employee2.amountReceived ||
                                                        "N/A"}
                                                    </span>
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    {employee2.paymentMethod ===
                                                      "Online" && (
                                                      <>
                                                        Transaction Id:{" "}
                                                        {employee2.transactionID ||
                                                          "N/A"}
                                                      </>
                                                    )}

                                                    {employee2.paymentMethod ===
                                                      "Cash" && (
                                                      <>
                                                        Cash Remark:{" "}
                                                        {employee2.cashRemark ||
                                                          "N/A"}
                                                      </>
                                                    )}

                                                    {employee2.paymentMethod ===
                                                      "Cheque" && (
                                                      <>
                                                        ChequeNo:{" "}
                                                        {employee2.chequeNo ||
                                                          "N/A"}
                                                        <br />
                                                        <i className="fe fe-chevrons-right me-1" />{" "}
                                                        Cheque Details:{" "}
                                                        {employee2.chequeDetails ||
                                                          "N/A"}
                                                        <br />
                                                        <i className="fe fe-chevrons-right me-1" />{" "}
                                                        Cheque Date:{" "}
                                                        {employee2.formattedDate3 ||
                                                          "N/A"}
                                                      </>
                                                    )}
                                                  </p>
                                                </div>
                                                <div className="notify-time">
                                                  <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                    Unit Applied
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      )}

                                      {employee2.hasSubscription === true && (
                                        <li>
                                          <div className="notification-time">
                                            <p className="mb-0 ">
                                              {employee3.formattedCreatedAtDate}
                                              <br />
                                              {employee3.formattedCreatedAtTime}
                                            </p>
                                          </div>

                                          <div className="notification-icon">
                                            <a href="javascript:void(0);" />
                                          </div>
                                          <div className="notification-time-date mb-2 d-block d-md-none">
                                            <p className="mb-0 text-dark tx-11">
                                              05 May 2023 <br /> 12:00 PM
                                            </p>
                                          </div>
                                          <div className="notification-body">
                                            <div className="media mt-0">
                                              <div className="media-body ms-2 d-flex">
                                                <div className="me-5 pt-4">
                                                  <img
                                                    src={Img5}
                                                    style={{ width: 75 }}
                                                  />
                                                </div>

                                                <div className="">
                                                  <p className="tx-14 text-dark mb-0 tx-semibold">
                                                    {employee3.creatorId},
                                                    Applied on Date | Time:
                                                  </p>

                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Project:{" "}
                                                    {employee3 &&
                                                      employee3.project &&
                                                      `${employee3.project.projectName}`}
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Plan Name:{" "}
                                                    {employee3 &&
                                                      employee3.projectsubscription &&
                                                      `${employee3.projectsubscription.eoiType}`}
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Plan Code:{" "}
                                                    {employee3 &&
                                                      employee3.projectsubscription &&
                                                      `${employee3.projectsubscription.eoiCode}`}
                                                  </p>

                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Plan Price:{" "}
                                                    {employee3 &&
                                                      employee3.projectsubscription &&
                                                      `${employee3.projectsubscription.eoiPrice}`}
                                                  </p>

                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Plan Terms:{" "}
                                                    {employee3 &&
                                                      employee3.projectsubscription &&
                                                      `${employee3.projectsubscription.eoiTerms}`}
                                                  </p>
                                                  <br />
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Amount:{" "}
                                                    {employee3 &&
                                                      employee3.paymentLedger &&
                                                      `${employee3.paymentLedger.amount}`}
                                                  </p>

                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Mode:{" "}
                                                    {employee3 &&
                                                      employee3.paymentLedger &&
                                                      `${employee3.paymentLedger.collectionMode}`}
                                                  </p>
                                                  {employee3 &&
                                                  employee3.paymentLedger &&
                                                  employee3.paymentLedger
                                                    .collectionMode ===
                                                    "Online" ? (
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Transaction ID:{" "}
                                                      {
                                                        employee3.paymentLedger
                                                          .transactionNo
                                                      }
                                                    </p>
                                                  ) : null}

                                                  {employee3 &&
                                                  employee3.paymentLedger &&
                                                  employee3.paymentLedger
                                                    .collectionMode ===
                                                    "Cheque" ? (
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Cheque No:{" "}
                                                      {
                                                        employee3.paymentLedger
                                                          .chequeNo
                                                      }
                                                    </p>
                                                  ) : null}

                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Payment Status:{" "}
                                                    {employee3.paymentStatus}
                                                  </p>

                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Payment Date:{" "}
                                                    {
                                                      employee3.formattedPaymentCreditDate
                                                    }
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Payment Time:{" "}
                                                    {
                                                      employee3.formattedPaymentCreditTime
                                                    }
                                                  </p>
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <i className="fe fe-chevrons-right me-1" />
                                                    Proof:{" "}
                                                    <Link
                                                      to={
                                                        employee3 &&
                                                        employee3.paymentLedger &&
                                                        `${employee3.paymentLedger.paymentReceipt}`
                                                      }
                                                      target="blanck"
                                                      title="View"
                                                    >
                                                      <i
                                                        className="fe fe-eye me-3"
                                                        style={{
                                                          cursor: "pointer",
                                                        }}
                                                      />
                                                    </Link>
                                                  </p>
                                                  <br />
                                                  <p className="mb-0 tx-13 text-dark">
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                      }}
                                                    >
                                                      {employee3?.isApproved ===
                                                      1 ? (
                                                        <span
                                                          style={{
                                                            color: "green",
                                                          }}
                                                        >
                                                          Approved
                                                        </span>
                                                      ) : (
                                                        <button
                                                          onClick={
                                                            fetchEmployeeData
                                                          }
                                                          style={{
                                                            ...buttonStyles.base,
                                                            ...buttonStyles.approve,
                                                          }}
                                                          onMouseEnter={
                                                            handleMouseEnter
                                                          }
                                                          onMouseLeave={
                                                            handleMouseLeave
                                                          }
                                                          onMouseDown={
                                                            handleMouseDown
                                                          }
                                                          onMouseUp={
                                                            handleMouseUp
                                                          }
                                                        >
                                                          APPROVE
                                                        </button>
                                                      )}

                                                      {employee3?.isApproved ===
                                                        0 || null ? (
                                                        <span
                                                          style={{
                                                            color: "red",
                                                          }}
                                                        >
                                                          Not Approved
                                                        </span>
                                                      ) : (
                                                        <button
                                                          onClick={
                                                            fetchEmployeeDatas
                                                          }
                                                          style={{
                                                            ...buttonStyles.base,
                                                            ...buttonStyles.disapprove,
                                                          }}
                                                          onMouseEnter={
                                                            handleMouseEnter
                                                          }
                                                          onMouseLeave={
                                                            handleMouseLeave
                                                          }
                                                          onMouseDown={
                                                            handleMouseDown
                                                          }
                                                          onMouseUp={
                                                            handleMouseUp
                                                          }
                                                        >
                                                          DISAPPROVE
                                                        </button>
                                                      )}

                                                      {employee3?.isApproved ===
                                                        2 || null ? (
                                                        <span
                                                          style={{
                                                            color: "red",
                                                          }}
                                                        >
                                                          Hold
                                                        </span>
                                                      ) : (
                                                        <button
                                                          onClick={
                                                            fetchEmployeeDatass
                                                          }
                                                          style={{
                                                            ...buttonStyles.base,
                                                            ...buttonStyles.hold,
                                                          }}
                                                          onMouseEnter={
                                                            handleMouseEnter
                                                          }
                                                          onMouseLeave={
                                                            handleMouseLeave
                                                          }
                                                          onMouseDown={
                                                            handleMouseDown
                                                          }
                                                          onMouseUp={
                                                            handleMouseUp
                                                          }
                                                        >
                                                          HOLD
                                                        </button>
                                                      )}
                                                    </div>
                                                  </p>
                                                </div>
                                                <div className="notify-time">
                                                  <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                    Applied
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      )}
                                    </ul>
                                  </div>

                                  <div
                                    className={`modal ${
                                      isModalOpen31 ? "show" : ""
                                    }`}
                                    style={{
                                      display: isModalOpen31 ? "block" : "none",

                                      top: 0,
                                      left: 0,
                                      right: 0,
                                      bottom: 0,
                                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                                      zIndex: 9999,
                                      overflow: "auto",
                                    }}
                                    tabIndex="-1"
                                    role="dialog"
                                  >
                                    <div
                                      className="modal-dialog modal-dialog-centered modal-lg"
                                      style={{ maxWidth: "800%" }}
                                    >
                                      <div
                                        className="modal-content"
                                        style={{
                                          borderRadius: "10px",
                                          boxShadow:
                                            "0 0 10px rgba(0, 0, 0, 0.3)",
                                        }}
                                      >
                                        <div
                                          className="modal-header"
                                          style={{
                                            backgroundColor: "#f8f9fa",
                                            borderBottom: "1px solid #dee2e6",
                                            borderRadius: "10px 10px 0 0",
                                          }}
                                        >
                                          <h5 className="modal-title">
                                            View Payment Plan
                                          </h5>
                                          <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                            onClick={handleCloseModal31}
                                            style={{
                                              outline: "none",
                                              cursor: "pointer",
                                            }}
                                          >
                                            <span aria-hidden="true">
                                              &times;
                                            </span>
                                          </button>
                                        </div>
                                        <div
                                          className="modal-body d-flex justify-content-center align-items-center"
                                          style={{ padding: "20px" }}
                                        >
                                          <form style={{ width: "100%" }}>
                                            <div>
                                              <table
                                                align="center"
                                                width={750}
                                                border={0}
                                                cellSpacing={0}
                                                cellPadding={0}
                                              >
                                                <tbody>
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
                                                              <h4
                                                                style={{
                                                                  marginTop: 0,
                                                                  marginBottom: 10,
                                                                }}
                                                              >
                                                                {
                                                                  employee2.paymentPlan
                                                                }{" "}
                                                                Payment Plan
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
                                                                style={{
                                                                  borderColor:
                                                                    "#fcfcfc",
                                                                }}
                                                              >
                                                                {employee2.paymentPlan ===
                                                                  "FPP" && (
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          width:
                                                                            "60%",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        On
                                                                        Booking
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            color:
                                                                              "blue",
                                                                          }}
                                                                        >
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.onBookingPerFPP}`}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            color:
                                                                              "blue",
                                                                          }}
                                                                        >
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.onBookingFPP}`}
                                                                        </span>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                )}
                                                                {employee2.paymentPlan ===
                                                                  "PLP" && (
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          width:
                                                                            "60%",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        On
                                                                        Booking
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {" "}
                                                                          {employee2 &&
                                                                          employee2.plan &&
                                                                          employee2
                                                                            .plan
                                                                            .onBookingPerPLP
                                                                            ? `${employee2.plan.onBookingPerPLP}%`
                                                                            : ""}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.onBookingPLP}`}
                                                                        </span>
                                                                      </td>
                                                                    </tr>
                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        Within{" "}
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.days1PLP}`}
                                                                        </span>{" "}
                                                                        Days
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                          employee2.plan &&
                                                                          employee2
                                                                            .plan
                                                                            .withIn60PerPLP
                                                                            ? `${employee2.plan.withIn60PerPLP}%`
                                                                            : ""}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.withIn60PLP}`}
                                                                        </span>
                                                                      </td>
                                                                    </tr>
                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        Within{" "}
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.days2PLP}`}
                                                                        </span>{" "}
                                                                        Days
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                          employee2.plan &&
                                                                          employee2
                                                                            .plan
                                                                            .withIn90PerPLP
                                                                            ? `${employee2.plan.withIn90PerPLP}%`
                                                                            : ""}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.withIn90PLP}`}
                                                                        </span>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        Within{" "}
                                                                        {employee2 &&
                                                                          employee2.plan &&
                                                                          `${employee2.plan.days3PLP}`}{" "}
                                                                        Days
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                          employee2.plan &&
                                                                          employee2
                                                                            .plan
                                                                            .withIn120PerPLP
                                                                            ? `${employee2.plan.withIn120PerPLP}%`
                                                                            : ""}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.withIn120PLP}`}
                                                                        </span>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        Within{" "}
                                                                        {employee2 &&
                                                                          employee2.plan &&
                                                                          `${employee2.plan.days4PLP}`}{" "}
                                                                        Days
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                          employee2.plan &&
                                                                          employee2
                                                                            .plan
                                                                            .withIn150PerPLP
                                                                            ? `${employee2.plan.withIn150PerPLP}%`
                                                                            : ""}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.withIn150PLP}`}
                                                                        </span>
                                                                      </td>
                                                                    </tr>
                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        Within{" "}
                                                                        {employee2 &&
                                                                          employee2.plan &&
                                                                          `${employee2.plan.days5PLP}`}{" "}
                                                                        Days
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                          employee2.plan &&
                                                                          employee2
                                                                            .plan
                                                                            .withIn180PerPLP
                                                                            ? `${employee2.plan.withIn180PerPLP}%`
                                                                            : ""}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.withIn180PLP}`}
                                                                        </span>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        Within{" "}
                                                                        {employee2 &&
                                                                          employee2.plan &&
                                                                          `${employee2.plan.days6PLP}`}{" "}
                                                                        Days
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {" "}
                                                                          {employee2 &&
                                                                          employee2.plan &&
                                                                          employee2
                                                                            .plan
                                                                            .extraPerPLP1
                                                                            ? `${employee2.plan.extraPerPLP1}%`
                                                                            : ""}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          <span>
                                                                            {employee2 &&
                                                                            employee2.plan &&
                                                                            employee2
                                                                              .plan
                                                                              .extraValuePLP1
                                                                              ? `${employee2.plan.extraValuePLP1}`
                                                                              : ""}
                                                                          </span>
                                                                        </span>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        Within{" "}
                                                                        {employee2 &&
                                                                          employee2.plan &&
                                                                          `${employee2.plan.days7PLP}`}{" "}
                                                                        Days
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {" "}
                                                                          {employee2 &&
                                                                          employee2.plan &&
                                                                          employee2
                                                                            .plan
                                                                            .extraPerPLP2
                                                                            ? `${employee2.plan.extraPerPLP2}%`
                                                                            : ""}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          <span>
                                                                            {employee2 &&
                                                                            employee2.plan &&
                                                                            employee2
                                                                              .plan
                                                                              .extraValuePLP2
                                                                              ? `${employee2.plan.extraValuePLP2}`
                                                                              : ""}
                                                                          </span>
                                                                        </span>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        Within{" "}
                                                                        {employee2 &&
                                                                          employee2.plan &&
                                                                          `${employee2.plan.days8PLP}`}{" "}
                                                                        Days
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {" "}
                                                                          {employee2 &&
                                                                          employee2.plan &&
                                                                          employee2
                                                                            .plan
                                                                            .extraPerPLP3
                                                                            ? `${employee2.plan.extraPerPLP3}%`
                                                                            : ""}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          <span>
                                                                            {employee2 &&
                                                                            employee2.plan &&
                                                                            employee2
                                                                              .plan
                                                                              .extraValuePLP3
                                                                              ? `${employee2.plan.extraValuePLP3}`
                                                                              : ""}
                                                                          </span>
                                                                        </span>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        On
                                                                        Registry
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                          employee2.plan &&
                                                                          employee2
                                                                            .plan
                                                                            .restOnRegistryPerPLP
                                                                            ? `${employee2.plan.restOnRegistryPerPLP}%`
                                                                            : ""}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.restOnRegistryPLP}`}
                                                                        </span>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                )}
                                                                {employee2.paymentPlan ===
                                                                  "DLP" && (
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          width:
                                                                            "60%",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        On
                                                                        Booking
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.onBookingPerDLP}`}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.onBookingDLP}`}
                                                                        </span>
                                                                      </td>
                                                                    </tr>
                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        Within{" "}
                                                                        {employee2 &&
                                                                          employee2.plan &&
                                                                          `${employee2.plan.daysDLP}`}{" "}
                                                                        Days
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.withIn30PerDLP}`}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.withIn30DLP}`}
                                                                        </span>
                                                                      </td>
                                                                    </tr>
                                                                    <tr>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        On
                                                                        Registry
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.restOnRegistryPerDLP}`}
                                                                        </span>
                                                                      </td>
                                                                      <td
                                                                        style={{
                                                                          padding:
                                                                            "5px 10px",
                                                                          border:
                                                                            "1px solid #ccc",
                                                                        }}
                                                                      >
                                                                        <span>
                                                                          {employee2 &&
                                                                            employee2.plan &&
                                                                            `${employee2.plan.restOnRegistryDLP}`}
                                                                        </span>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                )}
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-sm-2">
                                    <button
                                      type="button"
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      onClick={handleNotesModel}
                                      // disabled={employee2.hasSubscription === true}
                                    >
                                      View Notes({notesCount})
                                    </button>

                                    <div
                                      className={`modal fade ${
                                        notesModelOpen ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: notesModelOpen
                                          ? "flex"
                                          : "none",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        overflow: "hidden",
                                        transition: "opacity 0.3s ease-in-out",
                                      }}
                                    >
                                      <div
                                        className="modal-dialog modal-dialog-centered modal-xl"
                                        style={{
                                          maxWidth: "90%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "12px",
                                            boxShadow:
                                              "0 0 20px rgba(0, 0, 0, 0.4)",
                                            backgroundColor: "#fff",
                                            overflow: "hidden",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#fafafa",
                                              borderBottom: "1px solid #e0e0e0",
                                              borderRadius: "12px 12px 0 0",
                                              padding: "15px 20px",
                                              display: "flex",
                                              justifyContent: "space-between",
                                              alignItems: "center",
                                              fontFamily:
                                                "'Rabbit', sans-serif",
                                            }}
                                          >
                                            <h5
                                              className="modal-title"
                                              style={{ margin: 0 }}
                                            >
                                              Notes
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseNotesModel}
                                              aria-label="Close"
                                              style={{
                                                outline: "none",
                                                cursor: "pointer",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{
                                              padding: "20px",
                                              maxHeight: "calc(100vh - 200px)",
                                              overflowY: "auto",
                                              fontFamily:
                                                "'Rabbit', sans-serif",
                                            }}
                                          >
                                            <div
                                              style={{
                                                maxHeight: "400px",
                                                overflowY: "scroll",
                                                scrollbarWidth: "thin",
                                                scrollbarColor: "#888 #f1f1f1",
                                              }}
                                            >
                                              <table className="table table-striped table-bordered text-nowrap mb-0">
                                                <thead>
                                                  <tr>
                                                    <th>Notes</th>
                                                    <th>Author</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  {notes.map((user) => (
                                                    <tr>
                                                      <td
                                                        style={{
                                                          whiteSpace:
                                                            "pre-wrap",
                                                        }}
                                                      >
                                                        {user?.comment
                                                          ?.split(" ")
                                                          .map((word, index) =>
                                                            (index + 1) % 10 ===
                                                            0
                                                              ? word + "\n"
                                                              : word
                                                          )
                                                          .join(" ")}
                                                      </td>
                                                      <td>
                                                        Performed By:{" "}
                                                        {user?.creatorId || ""}{" "}
                                                        <br />
                                                        Created On :{" "}
                                                        {user?.createdAt || ""}
                                                      </td>
                                                    </tr>
                                                  ))}
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      onClick={handleOpenModal101}
                                      disabled={
                                        employee2.hasSubscription === true
                                      }
                                    >
                                      View Applicant
                                    </button>

                                    <div
                                      className={`modal fade ${
                                        isModalOpen101 ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isModalOpen101
                                          ? "flex"
                                          : "none",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: "1100px",
                                          maxHeight: "90vh",
                                          overflow: "hidden",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 20px rgba(0, 0, 0, 0.5)",
                                            backgroundColor: "#fff",
                                            display: "flex",
                                            flexDirection: "column",
                                            maxHeight: "90vh",
                                            marginTop: "60px",
                                          }}
                                        >
                                          {/* Modal Header */}
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#007bff",
                                              color: "#fff",
                                              borderRadius: "10px 10px 0 0",
                                              padding: "15px 20px",
                                              textAlign: "center",
                                              position: "sticky",
                                              top: 0,
                                              zIndex: 10,
                                            }}
                                          >
                                            <h5
                                              className="modal-title"
                                              style={{ color: "white" }}
                                            >
                                              View Applicant
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseModal101}
                                              aria-label="Close"
                                              style={{
                                                position: "absolute",
                                                top: "15px",
                                                right: "15px",
                                                color: "#fff",
                                                fontSize: "1rem",
                                                backgroundColor: "transparent",
                                                border: "none",
                                                padding: "0.5rem",
                                              }}
                                            ></button>
                                          </div>

                                          {/* Modal Body with Scroll */}
                                          <div
                                            className="modal-body"
                                            style={{
                                              padding: "20px",
                                              fontSize: "1rem",
                                              overflowY: "auto",
                                              maxHeight: "75vh",
                                            }}
                                          >
                                            <form>
                                              <div className="row row-cols-1 row-cols-md-2 g-4">
                                                {/* Applicant Info */}
                                                <div className="col">
                                                  <div>
                                                    <span
                                                      style={{
                                                        fontWeight: "bold",
                                                        fontSize: "1.2rem",
                                                      }}
                                                    >
                                                      Applicant
                                                    </span>
                                                    <br />
                                                    <br />
                                                    <img
                                                      alt="No Photo"
                                                      src={
                                                        applicantView.applicantImage ||
                                                        "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                                      }
                                                      style={{
                                                        width: 80,
                                                        height: 80,
                                                        objectFit: "cover",
                                                        borderRadius: "50%",
                                                        border:
                                                          "2px solid #007bff",
                                                      }}
                                                    />
                                                    <br />
                                                    <br />
                                                    <strong>Name:</strong>{" "}
                                                    {applicantView.fullName ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Relation To:
                                                    </strong>{" "}
                                                    {applicantView.applicantFatherName ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>Email:</strong>{" "}
                                                    {applicantView.applicantEmail ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Mobile No:
                                                    </strong>{" "}
                                                    {applicantView.applicantMobile ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Alt Mob No:
                                                    </strong>{" "}
                                                    {applicantView.applicantAlternateNumber ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Pan No:
                                                    </strong>{" "}
                                                    {applicantView.applicantPAN ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Pan Image :
                                                    </strong>{" "}
                                                    <Link
                                                      to={
                                                        applicantView.applicantPanImage
                                                      }
                                                      target="blanck"
                                                      title="View"
                                                    >
                                                      <i
                                                        className="fe fe-eye me-3"
                                                        style={{
                                                          cursor: "pointer",
                                                        }}
                                                      />
                                                    </Link>
                                                    <br />
                                                    <strong>
                                                      Aadhaar No:
                                                    </strong>{" "}
                                                    {applicantView.applicantAadhaarNumber ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Aadhaar Image :
                                                    </strong>{" "}
                                                    <Link
                                                      to={
                                                        applicantView.applicantAadhaarImage
                                                      }
                                                      target="blanck"
                                                      title="View"
                                                    >
                                                      <i
                                                        className="fe fe-eye me-3"
                                                        style={{
                                                          cursor: "pointer",
                                                        }}
                                                      />
                                                    </Link>
                                                    <br />
                                                    <strong>
                                                      Anniversary Date:
                                                    </strong>{" "}
                                                    {applicantView.applicantAnniversay ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Address:
                                                    </strong>{" "}
                                                    {applicantView.applicantAddress ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>State:</strong>{" "}
                                                    {applicantView.applicantState ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>City:</strong>{" "}
                                                    {applicantView.applicantCity ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Pin Code:
                                                    </strong>{" "}
                                                    {applicantView.applicantPincode ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Land Mark:
                                                    </strong>{" "}
                                                    {applicantView.applicantLandMark ||
                                                      "N/A"}
                                                    <br />
                                                  </div>
                                                </div>

                                                {/* Co-Applicant Info */}
                                                <div className="col">
                                                  <div>
                                                    <span
                                                      style={{
                                                        fontWeight: "bold",
                                                        fontSize: "1.2rem",
                                                      }}
                                                    >
                                                      Co-Applicant
                                                    </span>
                                                    <br />
                                                    <br />
                                                    <img
                                                      alt="No Photo"
                                                      src={
                                                        applicantView.coApplicantImage ||
                                                        "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                                      }
                                                      style={{
                                                        width: 80,
                                                        height: 80,
                                                        objectFit: "cover",
                                                        borderRadius: "50%",
                                                        border:
                                                          "2px solid #007bff",
                                                      }}
                                                    />
                                                    <br />
                                                    <br />
                                                    <strong>Name:</strong>{" "}
                                                    {applicantView.coFullName ||
                                                      "N/A"}{" "}
                                                    <br />
                                                    <strong>
                                                      Relation To:
                                                    </strong>{" "}
                                                    {applicantView.coApplicantFatherName ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>Email:</strong>{" "}
                                                    {applicantView.coApplicantEmail ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Mobile No:
                                                    </strong>{" "}
                                                    {applicantView.coApplicantMobile ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Alt Mob No:
                                                    </strong>{" "}
                                                    {applicantView.coApplicantAlternateNumber ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Pan No:
                                                    </strong>{" "}
                                                    {applicantView.coApplicantPAN ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Pan Image :
                                                    </strong>{" "}
                                                    <Link
                                                      to={
                                                        applicantView.coApplicantPanImage
                                                      }
                                                      target="blanck"
                                                      title="View"
                                                    >
                                                      <i
                                                        className="fe fe-eye me-3"
                                                        style={{
                                                          cursor: "pointer",
                                                        }}
                                                      />
                                                    </Link>
                                                    <br />
                                                    <strong>
                                                      Aadhaar No:
                                                    </strong>{" "}
                                                    {applicantView.coApplicantAadhaarNumber ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Aadhaar Image :
                                                    </strong>{" "}
                                                    <Link
                                                      to={
                                                        applicantView.coApplicantAadhaarImage
                                                      }
                                                      target="blanck"
                                                      title="View"
                                                    >
                                                      <i
                                                        className="fe fe-eye me-3"
                                                        style={{
                                                          cursor: "pointer",
                                                        }}
                                                      />
                                                    </Link>
                                                    <br />
                                                    <strong>
                                                      Anniversary Date:
                                                    </strong>{" "}
                                                    {applicantView.coApplicantAnniversay ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Address:
                                                    </strong>{" "}
                                                    {applicantView.coApplicantAddress ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>State:</strong>{" "}
                                                    {applicantView.coApplicantState ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>City:</strong>{" "}
                                                    {applicantView.coApplicantCity ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Pin Code:
                                                    </strong>{" "}
                                                    {applicantView.coApplicantPincode ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Land Mark:
                                                    </strong>{" "}
                                                    {applicantView.coApplicantLandMark ||
                                                      "N/A"}
                                                    <br />
                                                  </div>
                                                </div>

                                                {/* Preference Info */}
                                                <div className="col">
                                                  <div>
                                                    <span
                                                      style={{
                                                        fontWeight: "bold",
                                                        fontSize: "1.2rem",
                                                      }}
                                                    >
                                                      Preference
                                                    </span>
                                                    <br />
                                                    <br />
                                                    <img
                                                      alt="No Photo"
                                                      src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                                      style={{
                                                        width: 80,
                                                        height: 80,
                                                        objectFit: "cover",
                                                        borderRadius: "50%",
                                                        border:
                                                          "2px solid #007bff",
                                                      }}
                                                    />
                                                    <br />
                                                    <br />
                                                    <strong>
                                                      Scheme:
                                                    </strong>{" "}
                                                    {applicantView.schemeId ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Project:
                                                    </strong>{" "}
                                                    {applicantView.projectId ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Unit Type:
                                                    </strong>{" "}
                                                    {applicantView.schemeType}
                                                    <br />
                                                    <strong>
                                                      Payment Plan:
                                                    </strong>{" "}
                                                    {applicantView.paymentPlan}
                                                    <br />
                                                    {/* <strong>Size Type:</strong> {applicantView.sizeType || 'N/A'}<br /> */}
                                                    <strong>Facing:</strong>{" "}
                                                    {applicantView.facing ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Amount:
                                                    </strong>{" "}
                                                    {applicantView.amountReceived ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Payment Method:
                                                    </strong>{" "}
                                                    {applicantView.paymentMethod ||
                                                      "N/A"}
                                                    <br />
                                                    {applicantView.paymentMethod ===
                                                      "Online" && (
                                                      <>
                                                        <strong>
                                                          {" "}
                                                          Transaction ID:
                                                        </strong>{" "}
                                                        {applicantView.transactionID ||
                                                          "N/A"}
                                                        <br />
                                                      </>
                                                    )}
                                                    {applicantView.paymentMethod ===
                                                      "Cash" && (
                                                      <>
                                                        <strong>
                                                          {" "}
                                                          Remark:
                                                        </strong>{" "}
                                                        {applicantView.cashRemark ||
                                                          "N/A"}
                                                        <br />
                                                      </>
                                                    )}
                                                    {applicantView.paymentMethod ===
                                                      "Cheque" && (
                                                      <>
                                                        <strong>
                                                          {" "}
                                                          Cheque No:
                                                        </strong>{" "}
                                                        {applicantView.chequeNo ||
                                                          "N/A"}
                                                        <br />
                                                      </>
                                                    )}
                                                    <strong>Advisor:</strong>{" "}
                                                    {applicantView.advisorId ||
                                                      "N/A"}
                                                    <br />
                                                    <strong>
                                                      Co-Advisor:
                                                    </strong>{" "}
                                                    {applicantView.coAdvisorId ||
                                                      "N/A"}
                                                    <br />
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      onClick={handleOpenModal22}
                                      disabled={
                                        employee2.hasSubscription === true
                                      }
                                    >
                                      Gift Change
                                    </button>

                                    {employee2.hasSubscription === true ? (
                                      <button
                                        className="btn btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                        style={{
                                          color: "white",
                                          backgroundColor: "grey",
                                        }}
                                        disabled
                                      >
                                        Plan List
                                      </button>
                                    ) : (
                                      <Link
                                        to={`/old-plan/${empid}`}
                                        disabled={
                                          employee2.hasSubscription === true
                                        }
                                        className="btn btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                        style={{
                                          color: "white",
                                          backgroundColor: "black",
                                        }}
                                      >
                                        Plan List
                                      </Link>
                                    )}

                                    <Link
                                      to={`/welcome-letter/${empid}`}
                                      className="btn btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                    >
                                      Welcome Letter
                                    </Link>

                                    <button
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      onClick={handleOpenModal21}
                                      // disabled={employee2.hasSubscription === true}
                                    >
                                      BBA
                                    </button>

                                    <div
                                      className={`modal fade ${
                                        isModalOpen21 ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isModalOpen21
                                          ? "flex"
                                          : "none",
                                        top: "20px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <div
                                        className="modal-dialog modal-dialog-centered modal-xl"
                                        style={{
                                          maxWidth: "40%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 10px rgba(0, 0, 0, 0.3)",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#f8f9fa",
                                              borderBottom: "1px solid #dee2e6",
                                              borderRadius: "10px 10px 0 0",
                                            }}
                                          >
                                            <h5 className="modal-title">BBA</h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseModal21}
                                              aria-label="Close"
                                              style={{
                                                outline: "none",
                                                cursor: "pointer",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{ padding: "20px" }}
                                          >
                                            <form>
                                              <div className="row row-sm">
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    BBA Status:{" "}
                                                    <span className="tx-danger">
                                                      *
                                                    </span>
                                                  </label>
                                                  <select
                                                    className="form-control select2"
                                                    name="status"
                                                    value={formData11.status}
                                                    onChange={
                                                      handleInputChange11
                                                    }
                                                  >
                                                    <option value="">
                                                      Select{" "}
                                                    </option>
                                                    <option>Drafted</option>
                                                    <option>Signed </option>
                                                    <option>Not Signed </option>
                                                  </select>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    BBA Date:{" "}
                                                    <span className="tx-danger">
                                                      *
                                                    </span>
                                                  </label>
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                    name="bbaDate"
                                                    value={formData11.bbaDate}
                                                    onChange={
                                                      handleInputChange11
                                                    }
                                                  />
                                                </div>

                                                {/* <div className="col-sm-6 form-group">
                                                                                                    <label className="form-label">Registry Date: <span className="tx-danger">*</span></label>
                                                                                                    <input type="date" className="form-control"
                                                                                                        name="registryDate"
                                                                                                        value={formData11.registryDate}
                                                                                                        onChange={handleInputChange11}
                                                                                                    />
                                                                                                </div> */}
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    BBA Upload:{" "}
                                                    <span className="tx-danger">
                                                      *
                                                    </span>
                                                  </label>
                                                  <input
                                                    type="file"
                                                    className="form-control"
                                                    name="bbaFile"
                                                    onChange={
                                                      handleFileChange201
                                                    }
                                                  />
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                          <div
                                            className="modal-footer"
                                            style={{
                                              borderTop: "1px solid #dee2e6",
                                              borderRadius: "0 0 10px 10px",
                                              backgroundColor: "#f8f9fa",
                                            }}
                                          >
                                            <button
                                              className="btn ripple btn-primary"
                                              type="button"
                                              style={{
                                                borderRadius: "5px",
                                                padding: "8px 20px",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                cursor: loadingsss
                                                  ? "not-allowed"
                                                  : "pointer",
                                                opacity: loadingsss ? 0.7 : 1,
                                              }}
                                              onClick={handleSubmit11}
                                              disabled={loadingsss}
                                            >
                                              {loadingsss
                                                ? "Loading..."
                                                : "Submit"}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <Link
                                      to={`/allotment-letter/${empid}`}
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      disabled={
                                        employee2.hasSubscription === true
                                      }
                                    >
                                      Allotment Letter
                                    </Link>

                                    {employee2.hasSubscription === true ? (
                                      <button
                                        className="btn btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                        style={{
                                          color: "white",
                                          backgroundColor: "black",
                                        }}
                                        disabled
                                      >
                                        Demand Letter
                                      </button>
                                    ) : (
                                      <Link
                                        to={`/demand-letter/${empid}`}
                                        className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                        style={{
                                          color: "white",
                                          backgroundColor: "black",
                                        }}
                                        disabled={
                                          employee2.hasSubscription === true
                                        }
                                      >
                                        Demand Letter
                                      </Link>
                                    )}

                                    {/* <button
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      onClick={handleOpenModal16}
                                      disabled={
                                        employee2.hasSubscription === true
                                      }
                                    >
                                      Issue NOC
                                    </button> */}
                                    {/* 
                                    <div
                                      className={`modal fade ${
                                        isModalOpen16 ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isModalOpen16
                                          ? "flex"
                                          : "none",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <div
                                        className="modal-dialog modal-dialog-centered modal-xl"
                                        style={{
                                          maxWidth: "40%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 10px rgba(0, 0, 0, 0.3)",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#f8f9fa",
                                              borderBottom: "1px solid #dee2e6",
                                              borderRadius: "10px 10px 0 0",
                                            }}
                                          >
                                            <h5 className="modal-title">NOC</h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseModal16}
                                              aria-label="Close"
                                              style={{
                                                outline: "none",
                                                cursor: "pointer",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{ padding: "20px" }}
                                          >
                                            <form>
                                              <div className="row row-sm">
                                                <div className="col-sm-12 form-group">
                                                  <div
                                                    style={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                      marginBottom: "10px",
                                                    }}
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      name="kyc"
                                                      checked={formData6.kyc}
                                                      onChange={
                                                        handleCheckboxChange3
                                                      }
                                                      style={checkboxStyle2}
                                                    />
                                                    <label
                                                      className="form-label"
                                                      htmlFor="kyc"
                                                      style={{
                                                        marginLeft: "8px",
                                                        cursor: "pointer",
                                                      }}
                                                    >
                                                      KYC:{" "}
                                                      {formData6.kyc && (
                                                        <span>Done</span>
                                                      )}
                                                    </label>
                                                  </div>

                                                  <div
                                                    style={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                      marginBottom: "10px",
                                                    }}
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      name="payment"
                                                      checked={
                                                        formData6.payment
                                                      }
                                                      onChange={
                                                        handleCheckboxChange3
                                                      }
                                                      style={checkboxStyle2}
                                                    />
                                                    <label
                                                      className="form-label"
                                                      htmlFor="payment"
                                                      style={{
                                                        marginLeft: "8px",
                                                        cursor: "pointer",
                                                      }}
                                                    >
                                                      Payment:{" "}
                                                      {formData6.payment && (
                                                        <span>Done</span>
                                                      )}
                                                    </label>
                                                  </div>

                                                  <div
                                                    style={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                      marginBottom: "10px",
                                                    }}
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      name="penalty"
                                                      checked={
                                                        formData6.penalty
                                                      }
                                                      onChange={
                                                        handleCheckboxChange4
                                                      }
                                                      style={checkboxStyle2}
                                                    />
                                                    <label
                                                      className="form-label"
                                                      htmlFor="penalty"
                                                      style={{
                                                        marginLeft: "8px",
                                                        cursor: "pointer",
                                                      }}
                                                    >
                                                      Penalty:{" "}
                                                      {formData6.penalty && (
                                                        <span>Done</span>
                                                      )}
                                                    </label>
                                                  </div>

                                                  <div
                                                    style={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                      marginBottom: "10px",
                                                    }}
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      name="issue"
                                                      checked={formData6.issue}
                                                      onChange={
                                                        handleCheckboxChange5
                                                      }
                                                      style={checkboxStyle2}
                                                    />
                                                    <label
                                                      className="form-label"
                                                      htmlFor="issue"
                                                      style={{
                                                        marginLeft: "8px",
                                                        cursor: "pointer",
                                                      }}
                                                    >
                                                      Issue:{" "}
                                                      {formData6.issue && (
                                                        <span>Done</span>
                                                      )}
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="row row-sm">
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    NOC Issued{" "}
                                                  </label>
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                    name="nocIssued"
                                                    checked={
                                                      formData6.nocIssued
                                                    }
                                                    onChange={
                                                      handleInputChange6
                                                    }
                                                  />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    NOC Status{" "}
                                                  </label>
                                                  <select
                                                    className="form-control select2"
                                                    name="status"
                                                    checked={formData6.status}
                                                    onChange={
                                                      handleInputChange6
                                                    }
                                                  >
                                                    <option value="">
                                                      Select{" "}
                                                    </option>
                                                    <option>Approved</option>
                                                    <option>
                                                      Not Approved
                                                    </option>
                                                  </select>
                                                </div>
                                              </div>

                                              <div className="row row-sm">
                                                <div className="col-sm-12 form-group">
                                                  <label htmlFor="exampleFormControlTextarea1">
                                                    NOC Upload
                                                  </label>
                                                  <input
                                                    type="file"
                                                    className="form-control"
                                                    name="nocUpload"
                                                    onChange={
                                                      handleFileChange20
                                                    }
                                                  />
                                                </div>
                                              </div>
                                            </form>
                                          </div>

                                          <div
                                            className="modal-footer"
                                            style={{
                                              borderTop: "1px solid #dee2e6",
                                              borderRadius: "0 0 10px 10px",
                                              backgroundColor: "#f8f9fa",
                                            }}
                                          >
                                            <button
                                              className="btn ripple btn-primary"
                                              type="button"
                                              onClick={handleSubmit6}
                                              style={{
                                                borderRadius: "5px",
                                                padding: "8px 20px",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              Submit
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}

                                    {/* <button
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      onClick={handleOpenModal6}
                                      disabled={
                                        employee2.hasSubscription === true
                                      }
                                    >
                                      Schedule Registry
                                    </button> */}

                                    <div
                                      className={`modal fade ${
                                        isModalOpen6 ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isModalOpen6 ? "flex" : "none",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <div
                                        className="modal-dialog modal-dialog-centered modal-xl"
                                        style={{
                                          maxWidth: "40%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 10px rgba(0, 0, 0, 0.3)",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#f8f9fa",
                                              borderBottom: "1px solid #dee2e6",
                                              borderRadius: "10px 10px 0 0",
                                            }}
                                          >
                                            <h5 className="modal-title">
                                              Registry
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseModal6}
                                              aria-label="Close"
                                              style={{
                                                outline: "none",
                                                cursor: "pointer",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{ padding: "20px" }}
                                          >
                                            <form>
                                              <div className="row row-sm">
                                                <div
                                                  className="col-sm-6 form-group"
                                                  style={formGroupStyle}
                                                >
                                                  <label
                                                    className="form-label"
                                                    style={labelStyle}
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      name="noc"
                                                      checked={
                                                        employee2 &&
                                                        employee2.inventory &&
                                                        `${employee2.inventory.NOC}` ===
                                                          "true"
                                                      }
                                                      onChange={
                                                        handleCheckboxChange
                                                      }
                                                      style={checkboxStyle}
                                                    />
                                                    NOC:{" "}
                                                    {formData7.noc && (
                                                      <span>Done</span>
                                                    )}
                                                  </label>
                                                </div>
                                              </div>

                                              <div className="row row-sm">
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    Registry Date{" "}
                                                  </label>
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                    name="registrationDate"
                                                    checked={
                                                      formData7.registrationDate
                                                    }
                                                    onChange={
                                                      handleInputChange7
                                                    }
                                                  />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    Registry Status{" "}
                                                  </label>
                                                  <select
                                                    className="form-control select2"
                                                    name="registrationStatus"
                                                    checked={
                                                      formData7.registrationStatus
                                                    }
                                                    onChange={
                                                      handleInputChange7
                                                    }
                                                  >
                                                    <option value="">
                                                      Select{" "}
                                                    </option>
                                                    <option>Schedule</option>
                                                    <option>Re-Schedule</option>
                                                    <option>Hold</option>
                                                    <option>Done</option>
                                                  </select>
                                                </div>
                                              </div>

                                              <div className="row row-sm">
                                                <div className="col-sm-12 form-group">
                                                  <label htmlFor="exampleFormControlTextarea1">
                                                    Registry Address
                                                  </label>
                                                  <textarea
                                                    className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows="3"
                                                    name="registrationAddress"
                                                    checked={
                                                      formData7.registrationAddress
                                                    }
                                                    onChange={
                                                      handleInputChange7
                                                    }
                                                  ></textarea>
                                                </div>
                                              </div>
                                            </form>
                                          </div>

                                          <div
                                            className="modal-footer"
                                            style={{
                                              borderTop: "1px solid #dee2e6",
                                              borderRadius: "0 0 10px 10px",
                                              backgroundColor: "#f8f9fa",
                                            }}
                                          >
                                            <button
                                              className="btn ripple btn-primary"
                                              type="button"
                                              onClick={handleSubmit7}
                                              style={{
                                                borderRadius: "5px",
                                                padding: "8px 20px",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              Submit
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <button
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        marginTop: "20px",
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      onClick={handleOpenModal15}
                                      disabled={
                                        employee2.hasSubscription === true
                                      }
                                    >
                                      Customer Review
                                    </button>

                                    <div
                                      className={`modal fade ${
                                        isModalOpen15 ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isModalOpen15
                                          ? "flex"
                                          : "none",
                                        top: "20px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <div
                                        className="modal-dialog modal-dialog-centered modal-xl"
                                        style={{
                                          maxWidth: "40%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 10px rgba(0, 0, 0, 0.3)",
                                            backgroundColor: "#fff",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#f8f9fa",
                                              borderBottom: "1px solid #dee2e6",
                                              borderRadius: "10px 10px 0 0",
                                            }}
                                          >
                                            <h5 className="modal-title">
                                              Add Customer Rating
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseModal15}
                                              aria-label="Close"
                                              style={{
                                                outline: "none",
                                                cursor: "pointer",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{
                                              padding: "20px",
                                              textAlign: "center",
                                            }}
                                          >
                                            <form>
                                              {/* Star Rating Icons */}
                                              <div>
                                                <FontAwesomeIcon
                                                  icon={faStar}
                                                  style={{
                                                    fontSize: "24px",
                                                    color: "green",
                                                    cursor: "pointer",
                                                  }}
                                                />
                                                <FontAwesomeIcon
                                                  icon={faStar}
                                                  style={{
                                                    fontSize: "24px",
                                                    color: "green",
                                                    cursor: "pointer",
                                                  }}
                                                />
                                                <FontAwesomeIcon
                                                  icon={faStar}
                                                  style={{
                                                    fontSize: "24px",
                                                    color: "gold",
                                                    cursor: "pointer",
                                                  }}
                                                />
                                                <FontAwesomeIcon
                                                  icon={faStar}
                                                  style={{
                                                    fontSize: "24px",
                                                    color: "gold",
                                                    cursor: "pointer",
                                                  }}
                                                />
                                              </div>

                                              {/* Styled Content Box */}
                                              <div className="row row-sm">
                                                <div
                                                  className="col-sm-12 form-group"
                                                  style={{ margin: "20px 0" }}
                                                >
                                                  <div
                                                    style={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent:
                                                        "space-between",
                                                      backgroundColor:
                                                        "#f0f0f0",
                                                      padding: "20px",
                                                      borderRadius: "10px",
                                                      boxShadow:
                                                        "0 0 10px rgba(0, 0, 0, 0.3)",
                                                    }}
                                                  >
                                                    <div>
                                                      <h4
                                                        style={{
                                                          marginBottom: "10px",
                                                          fontSize: "20px",
                                                          color: "#333",
                                                        }}
                                                      >
                                                        Your Content Title
                                                      </h4>
                                                      <p
                                                        style={{
                                                          fontSize: "16px",
                                                          lineHeight: "1.6",
                                                          color: "#666",
                                                        }}
                                                      >
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit. Nulla
                                                        volutpat felis ut sem
                                                        eleifend fermentum.
                                                        Integer quis sapien
                                                        auctor, vehicula justo
                                                        vel, volutpat odio. Sed
                                                        quis justo in dolor
                                                        vehicula viverra eu id
                                                        risus. Nullam vulputate
                                                        felis ut eros malesuada,
                                                        sit amet consequat purus
                                                        laoreet.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              {/* Field for Uploading Video */}
                                              <div
                                                className="form-group"
                                                style={{
                                                  display: "flex",
                                                  alignItems: "center",
                                                }}
                                              >
                                                <label
                                                  htmlFor="videoUpload"
                                                  style={{
                                                    fontSize: "16px",
                                                    fontWeight: "bold",
                                                    marginBottom: "5px",
                                                    color: "#333",
                                                    marginRight: "10px",
                                                  }}
                                                >
                                                  Upload Video:
                                                </label>
                                                <div
                                                  style={{
                                                    position: "relative",
                                                  }}
                                                >
                                                  <input
                                                    type="file"
                                                    id="videoUpload"
                                                    accept="video/*"
                                                    style={{
                                                      border: "1px solid #ccc",
                                                      borderRadius: "5px",
                                                      padding: "8px",
                                                      width: "200px",
                                                    }}
                                                    name="video"
                                                    onChange={
                                                      handleFileChange21
                                                    }
                                                  />
                                                  {error && (
                                                    <span
                                                      style={{
                                                        color: "red",
                                                        marginLeft: "10px",
                                                      }}
                                                    >
                                                      {error}
                                                    </span>
                                                  )}
                                                  {formData8.video && (
                                                    <FontAwesomeIcon
                                                      icon={faEye}
                                                      style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        right: "-50px",
                                                        transform:
                                                          "translateY(-50%)",
                                                        fontSize: "20px",
                                                        color: "#007bff",
                                                        cursor: "pointer",
                                                      }}
                                                      onClick={() =>
                                                        setShowVideo(!showVideo)
                                                      }
                                                    />
                                                  )}
                                                  {showVideo && videoURL && (
                                                    <div
                                                      style={{
                                                        marginTop: "20px",
                                                      }}
                                                    >
                                                      <video
                                                        width="320"
                                                        height="240"
                                                        controls
                                                      >
                                                        <source
                                                          src={videoURL}
                                                          type="video/mp4"
                                                        />
                                                        Your browser does not
                                                        support the video tag.
                                                      </video>
                                                    </div>
                                                  )}
                                                </div>
                                              </div>
                                            </form>
                                          </div>

                                          <div
                                            className="modal-footer"
                                            style={{
                                              borderTop: "1px solid #dee2e6",
                                              borderRadius: "0 0 10px 10px",
                                              backgroundColor: "#f8f9fa",
                                            }}
                                          >
                                            <button
                                              className="btn ripple btn-primary"
                                              type="button"
                                              style={{
                                                borderRadius: "5px",
                                                padding: "8px 20px",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                backgroundColor: "#007bff",
                                                color: "#fff",
                                                border: "none",
                                              }}
                                              onClick={handleSubmit8}
                                            >
                                              Submit
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div
                                      className={`modal fade ${
                                        isModalOpen7 ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isModalOpen7
                                          ? "block"
                                          : "none",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                      }}
                                    >
                                      <div
                                        className="modal-dialog modal-dialog-centered modal-xl"
                                        style={{
                                          maxWidth: "40%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 10px rgba(0, 0, 0, 0.3)",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#f8f9fa",
                                              borderBottom: "1px solid #dee2e6",
                                              borderRadius: "10px 10px 0 0",
                                            }}
                                          >
                                            <h5 className="modal-title">
                                              Up Comeing Payment
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseModal7}
                                              aria-label="Close"
                                              style={{
                                                outline: "none",
                                                cursor: "pointer",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{ padding: "20px" }}
                                          >
                                            <form>
                                              <div className="row row-sm">
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    Action{" "}
                                                    <span className="tx-danger">
                                                      *
                                                    </span>
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="action"
                                                    value={formData10.action}
                                                    onChange={
                                                      handleInputChange10
                                                    }
                                                  />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    From
                                                    <span className="tx-danger">
                                                      *
                                                    </span>
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="from"
                                                    value={formData10.from}
                                                    onChange={
                                                      handleInputChange10
                                                    }
                                                  />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    Date{" "}
                                                    <span className="tx-danger">
                                                      *
                                                    </span>
                                                  </label>
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                    name="date"
                                                    value={formData10.date}
                                                    onChange={
                                                      handleInputChange10
                                                    }
                                                  />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    Time{" "}
                                                    <span className="tx-danger">
                                                      *
                                                    </span>
                                                  </label>
                                                  <input
                                                    type="time"
                                                    className="form-control"
                                                    name="time"
                                                    value={formData10.time}
                                                    onChange={
                                                      handleInputChange10
                                                    }
                                                  />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    Status
                                                  </label>
                                                  <select
                                                    className="form-control select select2"
                                                    name="status"
                                                    value={formData10.status}
                                                    onChange={
                                                      handleInputChange10
                                                    }
                                                  >
                                                    <option>Select</option>
                                                    <option>Schedule </option>
                                                    <option>
                                                      Re- Schedule{" "}
                                                    </option>
                                                    <option>Cancel</option>
                                                  </select>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    Amount
                                                    <span className="tx-danger">
                                                      *
                                                    </span>
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="amount"
                                                    value={formData10.amount}
                                                    onChange={
                                                      handleInputChange10
                                                    }
                                                  />
                                                </div>

                                                <div className="col-sm-12 form-group">
                                                  <label className="form-label">
                                                    {" "}
                                                    Venue
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="venue"
                                                    value={formData10.venue}
                                                    onChange={
                                                      handleInputChange10
                                                    }
                                                  />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    Mode
                                                    <span className="tx-danger">
                                                      *
                                                    </span>
                                                  </label>
                                                  <select
                                                    className="form-control select select2"
                                                    name="mode"
                                                    value={formData10.mode}
                                                    onChange={
                                                      handleInputChange10
                                                    }
                                                  >
                                                    <option value="">
                                                      Select
                                                    </option>
                                                    <option value={"Cash"}>
                                                      Cash
                                                    </option>
                                                    <option value={"Online"}>
                                                      Online
                                                    </option>
                                                    <option value={"Cheque"}>
                                                      Cheque
                                                    </option>
                                                  </select>
                                                </div>

                                                {formData10.mode === "Cash" && (
                                                  <div className="col-sm-6 form-group">
                                                    <label className="form-label">
                                                      Remark
                                                    </label>
                                                    <input
                                                      className="form-control"
                                                      required=""
                                                      type="text"
                                                      name="remark"
                                                      value={formData10.remark}
                                                      onChange={
                                                        handleInputChange10
                                                      }
                                                    />
                                                  </div>
                                                )}
                                                {formData10.mode ===
                                                  "Online" && (
                                                  <div className="col-sm-6 form-group">
                                                    <label className="form-label">
                                                      Transaction ID
                                                    </label>
                                                    <input
                                                      className="form-control"
                                                      required=""
                                                      type="text"
                                                      name="transaction"
                                                      value={
                                                        formData10.transaction
                                                      }
                                                      onChange={
                                                        handleInputChange10
                                                      }
                                                    />
                                                  </div>
                                                )}

                                                {formData10.mode ===
                                                  "Cheque" && (
                                                  <>
                                                    <div className="col-sm-6 form-group">
                                                      <label className="form-label">
                                                        Cheque No
                                                      </label>
                                                      <input
                                                        className="form-control"
                                                        required=""
                                                        type="text"
                                                        name="chequeNo"
                                                        value={
                                                          formData10.chequeNo
                                                        }
                                                        onChange={
                                                          handleInputChange10
                                                        }
                                                      />
                                                    </div>
                                                    <div className="col-sm-6 form-group">
                                                      <label className="form-label">
                                                        Cheque Details: Bank
                                                      </label>

                                                      <select
                                                        className="form-control select2"
                                                        name="chequeDetails"
                                                        value={
                                                          formData10.chequeDetails
                                                        }
                                                        onChange={
                                                          handleInputChange10
                                                        }
                                                      >
                                                        <option value="">
                                                          Select{" "}
                                                        </option>
                                                        {bank.map(
                                                          (option, index) => (
                                                            <option
                                                              key={option.id}
                                                              value={option.id}
                                                            >
                                                              {option.name}
                                                            </option>
                                                          )
                                                        )}
                                                      </select>
                                                    </div>
                                                    <div className="col-sm-6 form-group">
                                                      <label className="form-label">
                                                        Cheque Date
                                                      </label>
                                                      <input
                                                        className="form-control"
                                                        required=""
                                                        type="date"
                                                        name="chequeDate"
                                                        value={
                                                          formData10.chequeDate
                                                        }
                                                        onChange={
                                                          handleInputChange10
                                                        }
                                                      />
                                                    </div>
                                                  </>
                                                )}
                                              </div>
                                            </form>
                                          </div>
                                          <div
                                            className="modal-footer"
                                            style={{
                                              borderTop: "1px solid #dee2e6",
                                              borderRadius: "0 0 10px 10px",
                                              backgroundColor: "#f8f9fa",
                                            }}
                                          >
                                            <button
                                              className="btn ripple btn-primary"
                                              type="button"
                                              style={{
                                                borderRadius: "5px",
                                                padding: "8px 20px",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                              }}
                                              onClick={handleSubmit10}
                                            >
                                              Update
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div
                                      className={`modal fade ${
                                        isModalOpen10 ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isModalOpen10
                                          ? "flex"
                                          : "none",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <div
                                        className="modal-dialog modal-dialog-centered modal-xl"
                                        style={{
                                          maxWidth: "40%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 10px rgba(0, 0, 0, 0.3)",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#f8f9fa",
                                              borderBottom: "1px solid #dee2e6",
                                              borderRadius: "10px 10px 0 0",
                                            }}
                                          >
                                            <h5 className="modal-title">
                                              Cancel Allocation
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseModal10}
                                              aria-label="Close"
                                              style={{
                                                outline: "none",
                                                cursor: "pointer",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{ padding: "20px" }}
                                          >
                                            <form>
                                              <div className="row row-sm">
                                                <div className="col-sm-12 form-group">
                                                  {users.map(
                                                    (user) =>
                                                      user.reminderType ===
                                                        "Demand Notice" && (
                                                        <div
                                                          key={user.id}
                                                          style={{
                                                            display: "flex",
                                                            alignItems:
                                                              "center",
                                                            marginBottom:
                                                              "10px",
                                                          }}
                                                        >
                                                          <input
                                                            type="checkbox"
                                                            name="kyc"
                                                            checked={true}
                                                            readOnly
                                                            style={{
                                                              marginLeft:
                                                                "10px",
                                                            }}
                                                          />{" "}
                                                          <label
                                                            className="form-label"
                                                            style={{
                                                              marginLeft: "8px",
                                                            }}
                                                          >
                                                            Demand Notice:{" "}
                                                            <span
                                                              style={{
                                                                color: "green",
                                                              }}
                                                            >
                                                              Send
                                                            </span>
                                                            <span
                                                              style={{
                                                                marginLeft:
                                                                  "12px",
                                                              }}
                                                            >
                                                              view:{" "}
                                                            </span>
                                                            <Link
                                                              to={`/demand-notice/${user.id}`}
                                                              target="__blanck"
                                                              title="View"
                                                            >
                                                              <i
                                                                className="fe fe-eye me-3"
                                                                style={{
                                                                  cursor:
                                                                    "pointer",
                                                                }}
                                                              />
                                                            </Link>
                                                            Date:{" "}
                                                            {
                                                              user.formattedDateeee
                                                            }
                                                          </label>
                                                        </div>
                                                      )
                                                  )}

                                                  {users.map(
                                                    (user) =>
                                                      user.reminderType ===
                                                        "Final Demand Letter" && (
                                                        <div
                                                          key={user.id}
                                                          style={{
                                                            display: "flex",
                                                            alignItems:
                                                              "center",
                                                            marginBottom:
                                                              "10px",
                                                          }}
                                                        >
                                                          <input
                                                            type="checkbox"
                                                            name="kyc"
                                                            checked={true}
                                                            readOnly
                                                            style={{
                                                              marginLeft:
                                                                "10px",
                                                            }}
                                                          />{" "}
                                                          <label
                                                            className="form-label"
                                                            style={{
                                                              marginLeft: "8px",
                                                            }}
                                                          >
                                                            Final Demand Notice:{" "}
                                                            <span
                                                              style={{
                                                                color: "green",
                                                              }}
                                                            >
                                                              Send
                                                            </span>
                                                            <span
                                                              style={{
                                                                marginLeft:
                                                                  "12px",
                                                              }}
                                                            >
                                                              view:{" "}
                                                            </span>
                                                            <Link
                                                              to={`/final-demand-notice/${user.id}`}
                                                              target="__blank"
                                                              title="View"
                                                            >
                                                              <i
                                                                className="fe fe-eye me-3"
                                                                style={{
                                                                  cursor:
                                                                    "pointer",
                                                                }}
                                                              />
                                                            </Link>
                                                            Date:{" "}
                                                            {
                                                              user.formattedDateeee
                                                            }
                                                          </label>
                                                        </div>
                                                      )
                                                  )}

                                                  {users.map(
                                                    (user) =>
                                                      user.reminderType ===
                                                        "Cancellation Notice" && (
                                                        <div
                                                          key={user.id}
                                                          style={{
                                                            display: "flex",
                                                            alignItems:
                                                              "center",
                                                            marginBottom:
                                                              "10px",
                                                          }}
                                                        >
                                                          <input
                                                            type="checkbox"
                                                            name="kyc"
                                                            checked={true}
                                                            readOnly
                                                            style={{
                                                              marginLeft:
                                                                "10px",
                                                            }}
                                                          />{" "}
                                                          <label
                                                            className="form-label"
                                                            style={{
                                                              marginLeft: "8px",
                                                            }}
                                                          >
                                                            Cancellation Notice:{" "}
                                                            <span
                                                              style={{
                                                                color: "green",
                                                              }}
                                                            >
                                                              Send
                                                            </span>
                                                            <span
                                                              style={{
                                                                marginLeft:
                                                                  "12px",
                                                              }}
                                                            >
                                                              view:{" "}
                                                            </span>
                                                            <Link
                                                              to={`/cancellation-notice/${user.id}`}
                                                              target="__blank"
                                                              title="View"
                                                            >
                                                              <i
                                                                className="fe fe-eye me-3"
                                                                style={{
                                                                  cursor:
                                                                    "pointer",
                                                                }}
                                                              />
                                                            </Link>
                                                            Date:{" "}
                                                            {
                                                              user.formattedDateeee
                                                            }
                                                          </label>
                                                        </div>
                                                      )
                                                  )}
                                                </div>
                                              </div>

                                              <div className="row row-sm">
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    Unit Allocation
                                                  </label>
                                                  <select
                                                    className="form-control select2"
                                                    name="unitAllocation"
                                                    value={
                                                      formData9.unitAllocation
                                                    }
                                                    onChange={
                                                      handleInputChange9
                                                    }
                                                  >
                                                    <option value="">
                                                      Select
                                                    </option>
                                                    <option>Cancel</option>
                                                    <option>Hold</option>
                                                  </select>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    Approved by
                                                  </label>
                                                  <select
                                                    className="form-control select2"
                                                    name="approvedBy"
                                                    value={formData9.approvedBy}
                                                    onChange={
                                                      handleInputChange9
                                                    }
                                                  >
                                                    <option value="">
                                                      Select
                                                    </option>
                                                    {reportingBossA.map(
                                                      (option, index) => (
                                                        <option
                                                          key={option.id}
                                                          value={option.id}
                                                        >
                                                          {option.fullName}
                                                        </option>
                                                      )
                                                    )}
                                                  </select>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    Confirmed by
                                                  </label>
                                                  <select
                                                    className="form-control select2"
                                                    name="confirmedBy"
                                                    value={
                                                      formData9.confirmedBy
                                                    }
                                                    onChange={
                                                      handleInputChange9
                                                    }
                                                  >
                                                    <option value="">
                                                      Select
                                                    </option>
                                                    {reportingBossA.map(
                                                      (option, index) => (
                                                        <option
                                                          key={option.id}
                                                          value={option.id}
                                                        >
                                                          {option.fullName}
                                                        </option>
                                                      )
                                                    )}
                                                  </select>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                  <label className="form-label">
                                                    Cancelled by
                                                  </label>
                                                  <select
                                                    className="form-control select2"
                                                    name="cancelledBy"
                                                    value={
                                                      formData9.cancelledBy
                                                    }
                                                    onChange={
                                                      handleInputChange9
                                                    }
                                                  >
                                                    <option value="">
                                                      Select
                                                    </option>
                                                    {reportingBossA.map(
                                                      (option, index) => (
                                                        <option
                                                          key={option.id}
                                                          value={option.id}
                                                        >
                                                          {option.fullName}
                                                        </option>
                                                      )
                                                    )}
                                                  </select>
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                  <label className="form-label">
                                                    Remark
                                                  </label>
                                                  <textarea
                                                    className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows="3"
                                                    name="remark"
                                                    value={formData9.remark}
                                                    onChange={
                                                      handleInputChange9
                                                    }
                                                  ></textarea>
                                                </div>
                                              </div>
                                              <div
                                                className="modal-footer"
                                                style={{
                                                  borderTop:
                                                    "1px solid #dee2e6",
                                                  borderRadius: "0 0 10px 10px",
                                                  backgroundColor: "#f8f9fa",
                                                  display: "flex",
                                                  justifyContent: "flex-end",
                                                  padding: "15px",
                                                }}
                                              >
                                                {allChecked && (
                                                  <button
                                                    className="btn ripple btn-primary"
                                                    type="button"
                                                    onClick={handleSubmit9}
                                                    style={{
                                                      borderRadius: "5px",
                                                      padding: "5px 20px",
                                                      fontSize: "14px",
                                                      fontWeight: "bold",
                                                      backgroundColor:
                                                        "#007bff",
                                                      borderColor: "#007bff",
                                                      color: "#fff",
                                                      boxShadow:
                                                        "0 2px 4px rgba(0, 0, 0, 0.2)",
                                                      transition:
                                                        "background-color 0.3s ease, border-color 0.3s ease",
                                                    }}
                                                    onMouseOver={(e) => {
                                                      e.target.style.backgroundColor =
                                                        "#0056b3";
                                                      e.target.style.borderColor =
                                                        "#004085";
                                                    }}
                                                    onMouseOut={(e) => {
                                                      e.target.style.backgroundColor =
                                                        "#007bff";
                                                      e.target.style.borderColor =
                                                        "#007bff";
                                                    }}
                                                  >
                                                    Submit
                                                  </button>
                                                )}
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div
                                      className={`modal fade ${
                                        isModalOpen20 ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isModalOpen20
                                          ? "flex"
                                          : "none",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <div
                                        className="modal-dialog modal-dialog-centered modal-xl"
                                        style={{
                                          maxWidth: "60%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 20px rgba(0, 0, 0, 0.5)",
                                            backgroundColor: "#fff",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#007bff",
                                              color: "#fff",
                                              borderRadius: "10px 10px 0 0",
                                              padding: "15px 20px",
                                              textAlign: "center",
                                            }}
                                          >
                                            <h5 className="modal-title">
                                              Change Unit
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseModal20}
                                              aria-label="Close"
                                              style={{
                                                position: "absolute",
                                                top: "15px",
                                                right: "15px",
                                                color: "#fff",
                                                fontSize: "1rem",
                                                backgroundColor: "transparent",
                                                border: "none",
                                                padding: "0.5rem",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{
                                              padding: "20px",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            <form>
                                              <div className="row row-cols-1 row-cols-md-2 g-4">
                                                <div className="col">
                                                  <div className="form-check">
                                                    <input
                                                      className="form-check-input"
                                                      type="checkbox"
                                                      id="applicantCheckbox"
                                                      style={{
                                                        marginRight: "5px",
                                                      }}
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="applicantCheckbox"
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      PROPERTY
                                                    </label>
                                                  </div>
                                                  <div>
                                                    <span
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      Property Details:
                                                    </span>
                                                    <br />
                                                    <span>Project: </span>
                                                    <br />
                                                    <span>Type: </span>
                                                    <br />
                                                    <span>Scheme: </span>
                                                    <br />
                                                    <span>Plan: </span>
                                                    <br />
                                                    <span>Payment Plan: </span>
                                                  </div>
                                                </div>
                                                <div className="col">
                                                  <div className="form-check">
                                                    <input
                                                      className="form-check-input"
                                                      type="checkbox"
                                                      id="coApplicantCheckbox"
                                                      style={{
                                                        marginRight: "5px",
                                                      }}
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="coApplicantCheckbox"
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      PREFERENCES/UNIT
                                                    </label>
                                                  </div>
                                                  <div>
                                                    <span
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      Preferences/Unit Details:
                                                    </span>
                                                    <br />
                                                    <span>Size Type: </span>
                                                    <br />
                                                    <span>Facing: </span>
                                                    <br />
                                                    <span>Unit no:</span>
                                                    <br />
                                                    <span>Area: </span>
                                                    <br />
                                                    <span>Gift: </span>
                                                  </div>
                                                </div>
                                                <div className="col">
                                                  <div className="form-check">
                                                    <input
                                                      className="form-check-input"
                                                      type="checkbox"
                                                      id="propertyCheckbox"
                                                      style={{
                                                        marginRight: "5px",
                                                      }}
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="propertyCheckbox"
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      PRICING
                                                    </label>
                                                  </div>
                                                  <div>
                                                    <span
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      Pricing:
                                                    </span>
                                                    <br />
                                                    <span>BSP:</span>
                                                    <br />
                                                    <span>
                                                      Fixed Charges(EDS/IDS):
                                                    </span>
                                                    <br />
                                                    <span>PLCs:</span>
                                                    <br />
                                                    <span>PLC(Value):</span>
                                                    <br />
                                                    <span>
                                                      Draw Scheme Amount:
                                                    </span>
                                                    <br />
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                          <div
                                            className="modal-footer"
                                            style={{
                                              backgroundColor: "#f8f9fa",
                                              borderRadius: "0 0 10px 10px",
                                              padding: "15px 20px",
                                              display: "flex",
                                              justifyContent: "space-between",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            <div style={{ textAlign: "left" }}>
                                              Payment: 20,000,00
                                            </div>
                                            <Link
                                              to={`/edit-customer/${empid}`}
                                              className="btn btn-primary"
                                              type="button"
                                              style={{
                                                borderRadius: "5px",
                                                padding: "8px 20px",
                                                fontSize: "-5rem",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              LOCKED
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <Link
                                      type="button"
                                      to={`/edit-customer/${empid}`}
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      // onClick={handleOpenModal19}

                                      disabled={
                                        employee2.hasSubscription === true
                                      }
                                    >
                                      Edit KYC
                                    </Link>

                                    <div
                                      className={`modal fade ${
                                        isModalOpen19 ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isModalOpen19
                                          ? "flex"
                                          : "none",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <div
                                        className="modal-dialog modal-dialog-centered modal-xl"
                                        style={{
                                          maxWidth: "60%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 20px rgba(0, 0, 0, 0.5)",
                                            backgroundColor: "#fff",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#007bff",
                                              color: "#fff",
                                              borderRadius: "10px 10px 0 0",
                                              padding: "15px 20px",
                                              textAlign: "center",
                                            }}
                                          >
                                            <h5 className="modal-title">
                                              Edit KYC
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseModal19}
                                              aria-label="Close"
                                              style={{
                                                position: "absolute",
                                                top: "15px",
                                                right: "15px",
                                                color: "#fff",
                                                fontSize: "1rem",
                                                backgroundColor: "transparent",
                                                border: "none",
                                                padding: "0.5rem",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{
                                              padding: "20px",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            <form>
                                              <div className="row row-cols-1 row-cols-md-2 g-4">
                                                <div className="col">
                                                  <div className="form-check">
                                                    <input
                                                      className="form-check-input"
                                                      type="checkbox"
                                                      id="applicantCheckbox"
                                                      style={{
                                                        marginRight: "5px",
                                                      }}
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="applicantCheckbox"
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      Applicant
                                                    </label>
                                                  </div>
                                                  <div>
                                                    <span
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      Applicant Details:
                                                    </span>
                                                    <br />
                                                    <span>
                                                      Name:{" "}
                                                      {
                                                        employee.applicantFirstName
                                                      }{" "}
                                                      {
                                                        employee.applicantLastName
                                                      }
                                                    </span>
                                                    <br />
                                                    <span>
                                                      Email:{" "}
                                                      {employee.applicantEmail}
                                                    </span>
                                                    <br />
                                                    <span>
                                                      Mobile:{" "}
                                                      {employee.applicantMobile}
                                                    </span>
                                                    <br />
                                                    <span>
                                                      Father's Name:{" "}
                                                      {
                                                        employee.applicantFatherName
                                                      }
                                                    </span>
                                                    <br />
                                                    <span>
                                                      Alternate Number{" "}
                                                      {
                                                        employee.applicantAlternateNumber
                                                      }
                                                    </span>
                                                  </div>
                                                </div>
                                                <div className="col">
                                                  <div className="form-check">
                                                    <input
                                                      className="form-check-input"
                                                      type="checkbox"
                                                      id="coApplicantCheckbox"
                                                      style={{
                                                        marginRight: "5px",
                                                      }}
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="coApplicantCheckbox"
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      Co-Applicant
                                                    </label>
                                                  </div>
                                                  <div>
                                                    <span
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      Co-Applicant Details:
                                                    </span>
                                                    <br />
                                                    <span>
                                                      Name:{" "}
                                                      {
                                                        employee.coApplicantFirstName
                                                      }{" "}
                                                      {
                                                        employee.coApplicantLastName
                                                      }
                                                    </span>
                                                    <br />
                                                    <span>
                                                      Email:{" "}
                                                      {
                                                        employee.coApplicantEmail
                                                      }
                                                    </span>
                                                    <br />
                                                    <span>
                                                      Mobile:
                                                      {
                                                        employee.coApplicantMobile
                                                      }
                                                    </span>
                                                    <br />
                                                    <span>
                                                      Father's Name:{" "}
                                                      {
                                                        employee.coApplicantFatherName
                                                      }
                                                    </span>
                                                    <br />
                                                    <span>
                                                      Alternate Number{" "}
                                                      {
                                                        employee.coApplicantAlternateNumber
                                                      }
                                                    </span>
                                                  </div>
                                                </div>
                                                <div className="col">
                                                  <div className="form-check">
                                                    <input
                                                      className="form-check-input"
                                                      type="checkbox"
                                                      id="propertyCheckbox"
                                                      style={{
                                                        marginRight: "5px",
                                                      }}
                                                    />
                                                    <label
                                                      className="form-check-label"
                                                      htmlFor="propertyCheckbox"
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      KYC
                                                    </label>
                                                  </div>
                                                  <div>
                                                    <span
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      Kyc Details:
                                                    </span>
                                                    <br />
                                                    <span>
                                                      Applicant Aadhaar Upload
                                                    </span>
                                                    <br />
                                                    <span>
                                                      Applicant PAN Upload
                                                    </span>
                                                    <br />
                                                    <span>
                                                      CoApplicant Aadhaar Upload
                                                    </span>
                                                    <span>
                                                      CoApplicant PAN Upload
                                                    </span>
                                                    <br />
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                          <div
                                            className="modal-footer"
                                            style={{
                                              backgroundColor: "#f8f9fa",
                                              borderRadius: "0 0 10px 10px",
                                              padding: "15px 20px",
                                              display: "flex",
                                              justifyContent: "space-between",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            <div style={{ textAlign: "left" }}>
                                              Payment: 20,000,00
                                            </div>
                                            <Link
                                              to={`/edit-customer/${empid}`}
                                              className="btn btn-primary"
                                              type="button"
                                              style={{
                                                borderRadius: "5px",
                                                padding: "8px 20px",
                                                fontSize: "-5rem",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              PROCEED TO CHANGE
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {employee2.hasSubscription === true ? (
                                      <button
                                        className="btn btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                        style={{
                                          color: "white",
                                          backgroundColor: "black",
                                        }} // Greyed out to indicate it's disabled
                                        disabled
                                      >
                                        Check Penalty
                                      </button>
                                    ) : (
                                      <Link
                                        to="/payment-ledger"
                                        className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                        style={{
                                          color: "white",
                                          backgroundColor: "black",
                                        }}
                                        disabled={
                                          employee2.hasSubscription === true
                                        }
                                      >
                                        Check Penalty
                                      </Link>
                                    )}

                                    <button
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      onClick={handleOpenModal8}
                                      disabled={
                                        employee2.hasSubscription === true
                                      }
                                    >
                                      Send Legal Notice
                                    </button>

                                    <button
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      onClick={handleOpenModal5}
                                      disabled={
                                        employee2.hasSubscription === true
                                      }
                                    >
                                      Send P Remainder
                                    </button>
                                    {/* <button
                                                                            className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                                                            style={{ marginTop: '20px', color: 'white', backgroundColor: 'black' }}
                                                                            onClick={handleOpenModal7}

                                                                        >
                                                                            Upcoming Payment
                                                                        </button> */}

                                    <button
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      onClick={handleOpenModal20}
                                      disabled={
                                        employee2.hasSubscription === true
                                      }
                                    >
                                      Change Unit
                                    </button>

                                    <button
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      onClick={handleOpenModal10}
                                      disabled={
                                        employee2.hasSubscription === true
                                      }
                                    >
                                      Cancel Allotment
                                    </button>

                                    {/* geerate cam modal button */}
                                    <button
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                        marginTop: "15px",
                                      }}
                                      onClick={handleOpenModal17}
                                      //   disabled={
                                      //     employee2.hasSubscription === true
                                      //   }
                                    >
                                      Generate Cam
                                    </button>

                                    {/* geerate cam modal */}
                                    <div
                                      className={`modal fade ${
                                        isModalOpen17 ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isModalOpen17
                                          ? "flex"
                                          : "none",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <div
                                        className=" modal-dialog-centered modal-xl"
                                        style={{
                                          // maxWidth: "50%",
                                          width: "100%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 10px rgba(0, 0, 0, 0.3)",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#f8f9fa",
                                              borderBottom: "1px solid #dee2e6",
                                              borderRadius: "10px 10px 0 0",
                                            }}
                                          >
                                            <h5 className="modal-title">
                                              Generate Maintenance Charges (
                                              CAM){" "}
                                            </h5>
                                            {/* cross close */}
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseModal17}
                                              aria-label="Close"
                                              style={{
                                                outline: "none",
                                                cursor: "pointer",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{ padding: "20px" }}
                                          >
                                            <form>
                                              <div className="row row-sm">
                                                <table className="table table-bordered">
                                                  <tbody>
                                                    {/* Customer Name */}
                                                    <tr className="">
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          Customer Name
                                                        </label>
                                                      </td>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          {employee2?.fullName}
                                                        </label>
                                                      </td>
                                                    </tr>

                                                    {/* Project Name */}
                                                    <tr>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          Project Name
                                                        </label>
                                                      </td>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          {
                                                            employee2?.project
                                                              ?.projectName
                                                          }{" "}
                                                          (For Company
                                                          Logo/Account)
                                                        </label>
                                                      </td>
                                                    </tr>

                                                    {/* Unit Number */}
                                                    <tr>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          Unit Number
                                                        </label>
                                                      </td>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          {`${
                                                            employee2?.unitNo
                                                          } / ${
                                                            employee2?.schemeType
                                                          } / ${
                                                            employee2?.size
                                                          } (${
                                                            [
                                                              "plot",
                                                              "farmhouse",
                                                            ].includes(
                                                              employee2?.schemeType?.toLowerCase()
                                                            )
                                                              ? "SQ YD"
                                                              : "SQ FT"
                                                          })`}
                                                        </label>
                                                      </td>
                                                    </tr>

                                                    {/* Total Cost */}
                                                    <tr>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",

                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          Total Cost (Rs.)
                                                        </label>
                                                      </td>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          {Math.floor(
                                                            employee2?.totalCost
                                                          )}
                                                        </label>
                                                      </td>
                                                    </tr>

                                                    {/* Discount */}
                                                    <tr>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          Discount (Rs.)
                                                        </label>
                                                      </td>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          {Math.floor(
                                                            employee2?.discountAmount
                                                          )}
                                                        </label>
                                                      </td>
                                                    </tr>

                                                    {/* Final Cost */}
                                                    <tr>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          Final Cost (Rs.)
                                                        </label>
                                                      </td>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          {Math.floor(
                                                            employee2?.totalCost -
                                                              employee2?.discountAmount
                                                          )}{" "}
                                                          (For calculation of
                                                          stamp Duty and Lawyer
                                                          fees)
                                                        </label>
                                                      </td>
                                                    </tr>

                                                    {/* Received  */}
                                                    <tr>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          Received (Rs.)
                                                        </label>
                                                      </td>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          {Math.floor(
                                                            employee2?.totolReceived
                                                          )}
                                                        </label>
                                                      </td>
                                                    </tr>

                                                    {/* Actual FInal Cost  */}
                                                    <tr>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          Final Due Cost (Rs.)
                                                        </label>
                                                      </td>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label
                                                          className="form-label"
                                                          style={{
                                                            color: "red",
                                                          }}
                                                        >
                                                          {Math.floor(
                                                            (employee2?.totalCost ||
                                                              0) -
                                                              (employee2?.discountAmount ||
                                                                0) -
                                                              (employee2?.totolReceived ||
                                                                0)
                                                          )}{" "}
                                                          (To be collected)
                                                        </label>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>

                                                {/* CAM Start Date */}
                                                {/* CAM Details Section */}
                                                <div className="border border-2 shadow mb-4">
                                                  <div className="row p-2">
                                                    {/* CAM Start Date */}
                                                    <div className="form-group col-md-2">
                                                      <label className="form-label">
                                                        CAM Start Date
                                                      </label>
                                                      <input
                                                        type="date"
                                                        className="form-control"
                                                        name="camStartDate"
                                                        value={
                                                          formData17.camStartDate
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>

                                                    {/* Total Months */}
                                                    <div className="form-group col-md-2">
                                                      <label className="form-label">
                                                        Total Months
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="totalMonth"
                                                        value={
                                                          formData17.totalMonth
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>

                                                    {/* CAM End Date */}
                                                    <div className="form-group col-md-2">
                                                      <label className="form-label">
                                                        CAM End Date
                                                      </label>
                                                      <input
                                                        type="date"
                                                        className="form-control"
                                                        name="camEndDate"
                                                        value={
                                                          formData17.camEndDate
                                                        }
                                                        disabled
                                                      />
                                                    </div>

                                                    {/* Unit Size */}
                                                    <div className="form-group col-md-2">
                                                      <label className="form-label">
                                                        Unit Size{" "}
                                                        {employee2?.schemeType ===
                                                        "Shop"
                                                          ? "(Sq ft)"
                                                          : "(Sq yd)"}
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="unitSize"
                                                        value={employee2?.size}
                                                        readOnly
                                                      />
                                                    </div>

                                                    {/* CAM Rate */}
                                                    <div className="form-group col-md-2">
                                                      <label className="form-label">
                                                        (Rate/
                                                        {employee2?.schemeType ===
                                                        "Shop"
                                                          ? "Sq ft"
                                                          : "Sq yd"}
                                                        )
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="camRate"
                                                        value={
                                                          formData17.camRate
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>
                                                    {/* Reference Given */}
                                                    <div className=" form-group col-md-2">
                                                      <label className="form-label">
                                                        Reference Given(App)
                                                      </label>
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        name="refrenceGiven"
                                                        value={
                                                          applicantRefferenceCount
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>
                                                  </div>

                                                  <div className="row p-2 mt-2">
                                                    {/* Facebook Post */}
                                                    <div className=" form-group col-md-2">
                                                      <label className="form-label">
                                                        Facebook Post (+3)
                                                      </label>
                                                      <select
                                                        className="form-control"
                                                        name="facebookPost"
                                                        value={
                                                          formData17.facebookPost
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      >
                                                        <option value="">
                                                          Select
                                                        </option>
                                                        <option value="Yes">
                                                          Yes
                                                        </option>
                                                        <option value="No">
                                                          No
                                                        </option>
                                                      </select>
                                                    </div>

                                                    {/* Instagram Post */}
                                                    <div className="col-md-2 form-group">
                                                      <label className="form-label">
                                                        Instagram Post (+1)
                                                      </label>
                                                      <select
                                                        className="form-control"
                                                        name="instagramPost"
                                                        value={
                                                          formData17.instagramPost
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      >
                                                        <option value="">
                                                          Select
                                                        </option>
                                                        <option value="Yes">
                                                          Yes
                                                        </option>
                                                        <option value="No">
                                                          No
                                                        </option>
                                                      </select>
                                                    </div>

                                                    {/* Months Waiver */}
                                                    <div className="col-md-2 form-group">
                                                      <label className="form-label">
                                                        Total Months Waiver
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="waveOffMonth"
                                                        value={
                                                          formData17.waveOffMonth
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>

                                                    {/* Discount in CAM */}
                                                    <div className="col-md-2 form-group">
                                                      <label className="form-label">
                                                        Discount in CAM (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="discountCam"
                                                        value={
                                                          formData17.discountCam
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                        readOnly
                                                      />
                                                    </div>

                                                    {/* total  CAM */}
                                                    <div className="col-md-2 form-group">
                                                      <label className="form-label">
                                                        CAM without GST (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="totalCam"
                                                        value={
                                                          formData17.totalCam
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                        readOnly
                                                      />
                                                    </div>

                                                    {/* GST */}
                                                    <div className="col-md-2 form-group">
                                                      <label className="form-label">
                                                        GST (%)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="18%"
                                                        value={formData17?.gst}
                                                        name="gst"
                                                        readOnly
                                                      />
                                                    </div>

                                                    {/* Payable CAM */}
                                                    <div className="col-md-2 form-group">
                                                      <label className="form-label">
                                                        Payable CAM (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="payableCam"
                                                        value={
                                                          formData17.payableCam
                                                        }
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="border border-2 shadow mb-4">
                                                  <div className="row p-2">
                                                    {/* Name on Registry */}
                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Name on Registry
                                                      </label>
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        name="nameOnRegistry"
                                                        placeholder={
                                                          employee2.fullName
                                                        }
                                                        value={
                                                          formData17.nameOnRegistry
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>

                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Name Charges (Rs.)
                                                      </label>
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        name="nameChangeCharges"
                                                        value={
                                                          formData17.nameChangeCharges
                                                        }
                                                        // onChange={
                                                        //   handleInputChange17
                                                        // }
                                                        readOnly
                                                      />
                                                    </div>

                                                    <div className="col-sm-2 form-group mt-4">
                                                      <label className="form-label">
                                                        Aadhar
                                                        <span className="ms-2">
                                                          {employee2?.applicantAadhaarImage ? (
                                                            <a
                                                              href={
                                                                employee2.applicantAadhaarImage
                                                              }
                                                              target="_blank"
                                                              rel="noopener noreferrer"
                                                            >
                                                              <i className="fa-solid fa-eye"></i>
                                                            </a>
                                                          ) : (
                                                            <i
                                                              className="fa-solid fa-eye text-muted"
                                                              title="No Aadhar Uploaded"
                                                            ></i>
                                                          )}
                                                        </span>
                                                      </label>
                                                    </div>

                                                    <div className="col-sm-2 form-group mt-4">
                                                      <label className="form-label">
                                                        PAN
                                                        <span className="ms-2">
                                                          {employee2?.applicantPanImage ? (
                                                            <a
                                                              href={
                                                                employee2.applicantPanImage
                                                              }
                                                              target="_blank"
                                                              rel="noopener noreferrer"
                                                            >
                                                              <i className="fa-solid fa-eye"></i>
                                                            </a>
                                                          ) : (
                                                            <i
                                                              className="fa-solid fa-eye text-muted"
                                                              title="No PAN Uploaded"
                                                            ></i>
                                                          )}
                                                        </span>
                                                      </label>
                                                    </div>

                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label ">
                                                        <span>Aadhar</span>
                                                      </label>

                                                      <input
                                                        type="file"
                                                        className="form-control"
                                                        name="applicantAadharImage"
                                                        accept="image/*,.pdf"
                                                        onChange={(e) =>
                                                          handleAdharPanFileChange(
                                                            e,
                                                            "aadharImage"
                                                          )
                                                        }
                                                      />
                                                    </div>

                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label ">
                                                        <span>PAN</span>
                                                      </label>

                                                      <input
                                                        type="file"
                                                        className="form-control"
                                                        name="applicantPanImage"
                                                        accept="image/*,.pdf"
                                                        onChange={(e) =>
                                                          handleAdharPanFileChange(
                                                            e,
                                                            "panImage"
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="border border-2 shadow mb-4">
                                                  <div className="row p-2">
                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        No of Cheque Bounce
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="chequeBounce"
                                                        value={
                                                          formData17.chequeBounce
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>

                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Bounce Penalty (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="chequePenalty"
                                                        value={
                                                          formData17.chequePenalty ||
                                                          1500
                                                        }
                                                        readOnly
                                                      />
                                                    </div>

                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Bounce Charges (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="chequeBounceCharges"
                                                        value={
                                                          formData17.chequeBounceCharges ||
                                                          0
                                                        }
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="border border-2 shadow mb-4">
                                                  <div className="row p-2">
                                                    {/* Unit Cost */}
                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Unit Cost (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        // name="stampDuty"
                                                        value={
                                                          Math.floor(
                                                            employee2?.totalCost ||
                                                              0
                                                          ) -
                                                          (employee2?.discountAmount ||
                                                            0)
                                                        }
                                                        readOnly
                                                        // onChange={
                                                        //   handleInputChange17
                                                        // }
                                                      />
                                                    </div>
                                                    {/* Stamp duty percentage*/}
                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Stamp Duty (%)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="stampDutyPer"
                                                        value={
                                                          formData17.stampDutyPer
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>

                                                    {/* Stamp duty */}
                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Stamp Duty (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="stampDuty"
                                                        value={
                                                          formData17.stampDuty
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>

                                                    {/* intrest */}
                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Intrest Amount (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="intrestAmount"
                                                        value={
                                                          formData17.intrestAmount
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="border border-2 shadow mb-4">
                                                  <div className="row p-2">
                                                    {/* Lawyer Fees  */}
                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Lawyer Fees (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="lawyerFees"
                                                        placeholder={lawyerFee}
                                                        // value={
                                                        //   formData17.lawyerFees
                                                        // }
                                                        // onChange={
                                                        //   handleInputChange17
                                                        // }
                                                        readOnly
                                                      />
                                                    </div>
                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Reference Given
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="lawyerFees"
                                                        // placeholder="15000"
                                                        value={
                                                          applicantRefferenceCount
                                                        }
                                                        // onChange={
                                                        //   handleInputChange17
                                                        // }
                                                        readOnly
                                                      />
                                                    </div>

                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Discount (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="disountLawyerFees"
                                                        // placeholder="15000"
                                                        value={
                                                          applicantRefferenceCount >=
                                                          10
                                                            ? 3000
                                                            : 0
                                                        }
                                                        // onChange={
                                                        //   handleInputChange17
                                                        // }
                                                        readOnly
                                                      />
                                                    </div>
                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Lawyer Fees (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="lawyerFees"
                                                        value={
                                                          formData17.lawyerFees
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                {/* Waiver  */}
                                                {/* <div className="col-sm-3 form-group">
                                                  <label className="form-label">
                                                    Waiver
                                                  </label>
                                                  <input
                                                    type="number"
                                                    className="form-control"
                                                    name="waiverCharges"
                                                    value={
                                                      formData17.waiverCharges
                                                    }
                                                    onChange={
                                                      handleInputChange17
                                                    }
                                                  />
                                                </div> */}

                                                {/*Remark ( Waiver)   */}
                                                {/* <div className="col-sm-3 form-group">
                                                  <label className="form-label">
                                                    Remark ( Waiver)
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="remark"
                                                    value={formData17.remark}
                                                    onChange={
                                                      handleInputChange17
                                                    }
                                                  />
                                                </div> */}

                                                <div className="border border-2 mt-2 shadow">
                                                  <div className="row p-2">
                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Waiver (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="waiverCharges"
                                                        value={
                                                          formData17.waiverCharges
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>

                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Remark (Waiver)
                                                      </label>
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        name="remark"
                                                        value={
                                                          formData17.remark
                                                        }
                                                        onChange={
                                                          handleInputChange17
                                                        }
                                                      />
                                                    </div>

                                                    {/* Send OTP Button (only if waiver > 0) */}
                                                    {isWaver && !otpSent && (
                                                      <div
                                                        className="col-sm-2 form-group"
                                                        style={{
                                                          marginTop: "30px",
                                                        }}
                                                      >
                                                        <button
                                                          className="btn btn-warning"
                                                          type="button"
                                                          onClick={
                                                            handleSendOtp
                                                          }
                                                        >
                                                          Send OTP
                                                        </button>
                                                      </div>
                                                    )}

                                                    {/* Show remark, OTP and verify only after OTP is sent */}
                                                    {otpSent && (
                                                      <>
                                                        <div className="col-sm-3 form-group">
                                                          <label className="form-label">
                                                            Enter OTP
                                                          </label>
                                                          <input
                                                            type="text"
                                                            className="form-control"
                                                            value={waverOtp}
                                                            onChange={(e) =>
                                                              setWaverOtp(
                                                                e.target.value
                                                              )
                                                            }
                                                          />
                                                        </div>

                                                        <div
                                                          className="col-sm-2 form-group"
                                                          style={{
                                                            marginTop: "30px",
                                                          }}
                                                        >
                                                          <button
                                                            className="btn btn-secondary"
                                                            type="button"
                                                            onClick={
                                                              handleVerifyOtp
                                                            }
                                                          >
                                                            Verify OTP
                                                          </button>
                                                        </div>
                                                      </>
                                                    )}

                                                    {/* Final Payable (calculated) */}
                                                    <div className="col-sm-2 form-group">
                                                      <label className="form-label">
                                                        Final NOC Payment (Rs.)
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control"
                                                        name="finalNocAmount"
                                                        value={
                                                          formData17.finalNocAmount
                                                        }
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          </div>

                                          <div
                                            className="modal-footer "
                                            style={{
                                              borderTop: "1px solid #dee2e6",
                                              borderRadius: "0 0 10px 10px",
                                              backgroundColor: "#f8f9fa",
                                              display: "flex",
                                              justifyContent: "start",
                                            }}
                                          >
                                            <div className="pb-2">
                                              <div
                                                style={{
                                                  fontSize: "13px",
                                                  color: "#6c757d",
                                                  backgroundColor: "#f1f1f1",
                                                  padding: "10px",
                                                  borderRadius: "5px",
                                                }}
                                              >
                                                <strong>Note:</strong> Wave Off
                                                Months based on Reference Given:
                                                <ul className="mb-0">
                                                  <li>
                                                    If Ref ≥ 10 → Wave Off:{" "}
                                                    <strong>12 Months</strong>
                                                  </li>
                                                  <li>
                                                    If Ref between 6 and 10 →
                                                    Wave Off:{" "}
                                                    <strong>6 Months</strong>
                                                  </li>
                                                  <li>
                                                    If Ref ≤ 6 → Wave Off:{" "}
                                                    <strong>0 Month</strong>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="pb-2">
                                              <div
                                                style={{
                                                  fontSize: "13px",
                                                  color: "#6c757d",
                                                  backgroundColor: "#f1f1f1",
                                                  padding: "10px",
                                                  borderRadius: "5px",
                                                }}
                                              >
                                                <strong>Note:</strong> Lawyer
                                                Fee (LF) Calculation Based on
                                                Final Cost:
                                                <ul className="mb-0">
                                                  <li>
                                                    If Final Cost ≤ 5 Lac → LF:{" "}
                                                    <strong>₹10,000</strong>
                                                  </li>
                                                  <li>
                                                    If Final Cost ≥ 5 Lac → LF:{" "}
                                                    <strong>₹10,000</strong>
                                                  </li>
                                                  <li>
                                                    If Final Cost ≥ 10 Lac → LF:{" "}
                                                    <strong>₹15,000</strong>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>

                                            <button
                                              className="btn ripple btn-primary"
                                              type="button"
                                              onClick={handleSubmit17}
                                              disabled={
                                                isWaver && !waverOtpVerified
                                              }
                                              style={{
                                                borderRadius: "5px",
                                                padding: "8px 20px",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              {`${
                                                formData17Loading
                                                  ? "Submitting.."
                                                  : "Submit"
                                              }`}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div
                                      className={`modal fade ${
                                        isMobileModalOpen17
                                          ? "show d-block"
                                          : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isMobileModalOpen17
                                          ? "flex"
                                          : "none",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <div
                                        className=" modal-dialog-centered modal-xl"
                                        style={{
                                          // maxWidth: "50%",
                                          width: "100%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 10px rgba(0, 0, 0, 0.3)",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#f8f9fa",
                                              borderBottom: "1px solid #dee2e6",
                                              borderRadius: "10px 10px 0 0",
                                            }}
                                          >
                                            <h5 className="modal-title">
                                              {`Client Mobile NO : ( Do Not Share With Anyone) - Tracking is On.`}
                                            </h5>
                                            {/* cross close */}
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseMobileModal17}
                                              aria-label="Close"
                                              style={{
                                                outline: "none",
                                                cursor: "pointer",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{ padding: "20px" }}
                                          >
                                            <form>
                                              <div className="row row-sm">
                                                <table className="table table-bordered">
                                                  <tbody>
                                                    {/* Customer Name */}
                                                    <tr className="">
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          {`Mobile NO `}
                                                        </label>
                                                      </td>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                          pointerEvents: "none", // Prevent interaction
                                                          opacity: 0.6, // Make it look disabled
                                                          userSelect: "none",
                                                        }}
                                                      >
                                                        <label
                                                          className="form-label"
                                                          style={{
                                                            userSelect: "none",
                                                          }}
                                                        >
                                                          {employee2?.applicantMobile
                                                            ?.split("")
                                                            .map(
                                                              (
                                                                digit,
                                                                index
                                                              ) => (
                                                                <span
                                                                  key={index}
                                                                  style={
                                                                    numberSpaceStyle
                                                                  }
                                                                >
                                                                  {digit}
                                                                </span>
                                                              )
                                                            )}
                                                        </label>
                                                      </td>
                                                    </tr>
                                                    <tr className="">
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                        }}
                                                      >
                                                        <label className="form-label">
                                                          Alt Mobile Number
                                                        </label>
                                                      </td>
                                                      <td
                                                        style={{
                                                          backgroundColor:
                                                            "#f1f1f1",
                                                          border:
                                                            "1px solid black",
                                                          pointerEvents: "none", // Prevent interaction
                                                          opacity: 0.6, // Make it look disabled
                                                        }}
                                                      >
                                                        <label
                                                          className="form-label"
                                                          style={{
                                                            userSelect: "none",
                                                          }}
                                                        >
                                                          {employee2?.applicantAlternateNumber
                                                            ?.split("")
                                                            .map(
                                                              (
                                                                digit,
                                                                index
                                                              ) => (
                                                                <span
                                                                  key={index}
                                                                  style={
                                                                    numberSpaceStyle
                                                                  }
                                                                >
                                                                  {digit}
                                                                </span>
                                                              )
                                                            )}
                                                          {console.log(
                                                            "employee2...",
                                                            employee2
                                                          )}
                                                        </label>
                                                      </td>
                                                    </tr>

                                                    {/* Project Name */}
                                                  </tbody>
                                                </table>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* issue noc */}
                                    <button
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      //   onClick={handleOpenModal17}
                                      //   disabled={
                                      //     employee2.hasSubscription === true
                                      //   }
                                    >
                                      Issue NOC
                                    </button>
                                    {/* issue noc */}

                                    {/* Schedule Registry button */}
                                    <button
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                      }}
                                      //   onClick={handleOpenModal17}
                                      //   disabled={
                                      //     employee2.hasSubscription === true
                                      //   }
                                    >
                                      Schedule Registry
                                    </button>
                                    {/* Schedule Registry button */}

                                    {/* view Phone number */}
                                    <button
                                      className="btn  btn-rounded btn-rounded-sm mb-3 btn-fullWidth"
                                      style={{
                                        color: "white",
                                        backgroundColor: "black",
                                        marginTop: "15px",
                                      }}
                                      onClick={handleOpenMobileModal17}
                                      //   disabled={
                                      //     employee2.hasSubscription === true
                                      //   }
                                    >
                                      View Phone Number
                                    </button>
                                    {/* view number */}

                                    <div
                                      className={`modal fade ${
                                        isModalOpen5 ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isModalOpen5 ? "flex" : "none",
                                        top: "20px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <div
                                        className="modal-dialog modal-dialog-centered modal-xl"
                                        style={{
                                          maxWidth: "40%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 10px rgba(0, 0, 0, 0.3)",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#f8f9fa",
                                              borderBottom: "1px solid #dee2e6",
                                              borderRadius: "10px 10px 0 0",
                                            }}
                                          >
                                            <h5 className="modal-title">
                                              Remainder
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseModal5}
                                              aria-label="Close"
                                              style={{
                                                outline: "none",
                                                cursor: "pointer",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{ padding: "20px" }}
                                          >
                                            <form>
                                              <div className="row row-sm">
                                                <div className="col-sm-12  form-group">
                                                  <label className="form-label">
                                                    Remainder:
                                                  </label>
                                                  <select
                                                    className="form-control"
                                                    name="reminderType"
                                                    value={
                                                      formData4.reminderType
                                                    }
                                                    onChange={
                                                      handleInputChange4
                                                    }
                                                  >
                                                    <option>Select</option>
                                                    <option>
                                                      Payment Intimation
                                                    </option>
                                                    <option>
                                                      Plan Change{" "}
                                                    </option>
                                                    <option>
                                                      Final Payment Intimation
                                                    </option>
                                                    <option>
                                                      Final Cancel
                                                    </option>
                                                  </select>
                                                </div>
                                              </div>

                                              <div className="row row-sm ">
                                                <div className="col-sm-12 form-group">
                                                  <label class="form-label">
                                                    Due Date:
                                                  </label>
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                    name="reminderDate"
                                                    value={
                                                      formData4.reminderDate
                                                    }
                                                    onChange={
                                                      handleInputChange4
                                                    }
                                                  />
                                                </div>
                                              </div>

                                              <div className="row row-sm ">
                                                <div className="col-sm-12 form-group">
                                                  <label for="exampleFormControlTextarea1">
                                                    Remainder Messages(Maximum
                                                    300 characters)
                                                  </label>
                                                  <textarea
                                                    class="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows="3"
                                                    name="reminderMessage"
                                                    value={
                                                      formData4.reminderMessage
                                                    }
                                                    onChange={
                                                      handleInputChange4
                                                    }
                                                  ></textarea>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                          <div
                                            className="modal-footer"
                                            style={{
                                              borderTop: "1px solid #dee2e6",
                                              borderRadius: "0 0 10px 10px",
                                              backgroundColor: "#f8f9fa",
                                            }}
                                          >
                                            <button
                                              className="btn ripple btn-primary"
                                              type="button"
                                              style={{
                                                borderRadius: "5px",
                                                padding: "8px 20px",
                                                fontSize: "14px",

                                                fontWeight: "bold",
                                                cursor: loadingss
                                                  ? "not-allowed"
                                                  : "pointer",
                                                opacity: loadingss ? 0.7 : 1,
                                              }}
                                              onClick={handleSubmit4}
                                              disabled={loadingss}
                                            >
                                              {loadingss
                                                ? "Loading..."
                                                : " Update Remainder"}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div
                                      className={`modal fade ${
                                        isModalOpen8 ? "show d-block" : ""
                                      }`}
                                      id="modaldemo-callback-form"
                                      tabIndex="-1"
                                      style={{
                                        display: isModalOpen8 ? "flex" : "none",
                                        top: "20px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                      }}
                                    >
                                      <div
                                        className="modal-dialog modal-dialog-centered modal-xl"
                                        style={{
                                          maxWidth: "40%",
                                          margin: "auto",
                                        }}
                                      >
                                        <div
                                          className="modal-content"
                                          style={{
                                            borderRadius: "10px",
                                            boxShadow:
                                              "0 0 10px rgba(0, 0, 0, 0.3)",
                                          }}
                                        >
                                          <div
                                            className="modal-header"
                                            style={{
                                              backgroundColor: "#f8f9fa",
                                              borderBottom: "1px solid #dee2e6",
                                              borderRadius: "10px 10px 0 0",
                                            }}
                                          >
                                            <h5 className="modal-title">
                                              Send Legal Notice
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              onClick={handleCloseModal8}
                                              aria-label="Close"
                                              style={{
                                                outline: "none",
                                                cursor: "pointer",
                                              }}
                                            ></button>
                                          </div>

                                          <div
                                            className="modal-body"
                                            style={{ padding: "20px" }}
                                          >
                                            <form>
                                              <div className="row row-sm">
                                                <div className="col-sm-12  form-group">
                                                  <label className="form-label">
                                                    Notice Type
                                                  </label>
                                                  <select
                                                    className="form-control"
                                                    name="reminderType"
                                                    value={
                                                      formData5.reminderType
                                                    }
                                                    onChange={
                                                      handleInputChange5
                                                    }
                                                  >
                                                    <option>Select</option>
                                                    <option>
                                                      Demand Notice
                                                    </option>
                                                    <option>
                                                      Final Demand Notice
                                                    </option>
                                                    <option>
                                                      Cancellation Notice
                                                    </option>
                                                  </select>
                                                </div>
                                              </div>

                                              <div className="row row-sm ">
                                                <div className="col-sm-12 form-group">
                                                  <label class="form-label">
                                                    {" "}
                                                    Due Date
                                                  </label>
                                                  <input
                                                    type="date"
                                                    className="form-control"
                                                    name="reminderDate"
                                                    value={
                                                      formData5.reminderDate
                                                    }
                                                    onChange={
                                                      handleInputChange5
                                                    }
                                                  />
                                                </div>
                                              </div>

                                              <div className="row row-sm ">
                                                <div className="col-sm-12 form-group">
                                                  <label for="exampleFormControlTextarea1">
                                                    Notice Messages(Maximum 300
                                                    characters)
                                                  </label>
                                                  <textarea
                                                    class="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows="3"
                                                    name="reminderMessage"
                                                    value={
                                                      formData5.reminderMessage
                                                    }
                                                    onChange={
                                                      handleInputChange5
                                                    }
                                                  ></textarea>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                          <div
                                            className="modal-footer"
                                            style={{
                                              borderTop: "1px solid #dee2e6",
                                              borderRadius: "0 0 10px 10px",
                                              backgroundColor: "#f8f9fa",
                                            }}
                                          >
                                            <button
                                              className="btn ripple btn-primary"
                                              type="button"
                                              style={{
                                                borderRadius: "5px",
                                                padding: "8px 20px",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                cursor: loadings
                                                  ? "not-allowed"
                                                  : "pointer",
                                                opacity: loadings ? 0.7 : 1,
                                              }}
                                              onClick={handleSubmit5}
                                              disabled={loadings}
                                            >
                                              {loadings
                                                ? "Loading..."
                                                : "Submit"}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* End Row */}
            </div>
          </div>
        </div>

        <div
          className={`modal fade ${isModalOpen56 ? "show d-block" : ""}`}
          id="modaldemo-callback-form"
          tabIndex="-1"
          style={{
            display: isModalOpen56 ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            style={{ maxWidth: "100%", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f1f1f1",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                  padding: "15px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "'Rabbit', sans-serif",
                }}
              >
                <h5 className="modal-title" style={{ margin: 0 }}>
                  UID: {employee2.userId} ({employee2.applicantFirstName}{" "}
                  {employee2.applicantLastName})
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal56}
                  aria-label="Close"
                  style={{ outline: "none", cursor: "pointer" }}
                ></button>
              </div>

              <div
                className="modal-body"
                style={{
                  padding: "20px",
                  maxHeight: "calc(100vh - 200px)",
                  overflowY: "auto",
                }}
              >
                <div
                  style={{
                    maxHeight: "400px",
                    overflowY: "scroll",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 #f1f1f1",
                  }}
                >
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th style={{ whiteSpace: "nowrap" }}>ID</th>
                        <th style={{ whiteSpace: "nowrap" }}>Customer Name</th>
                        <th style={{ whiteSpace: "nowrap" }}>Scheme</th>
                        <th style={{ whiteSpace: "nowrap" }}>
                          Unit Allocation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users2.map((user) => (
                        <tr key={user.id}>
                          <td>
                            {user.userId}
                            <br />
                            <Link
                              to={`/Inventory-details/${user.id}`}
                              className="btn ripple btn-primary btn-xs w-70 equal-buttons"
                              target="__blank"
                              style={{
                                display: "block",
                                marginTop: "5px",
                                textDecoration: "none",
                                color: "#fff",
                                backgroundColor: "#007bff",
                                borderColor: "#007bff",
                                padding: "3px 6px",
                                borderRadius: "4px",
                                textAlign: "center",
                              }}
                            >
                              View
                            </Link>
                          </td>
                          <td>
                            {user.applicantFirstName} {user.applicantLastName}
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              TID:
                            </span>{" "}
                            {user.ticketId}
                          </td>
                          <td>{user.schemeId}</td>
                          <td style={{ whiteSpace: "nowrap" }}>
                            <span style={{ fontWeight: "bold" }}>Project:</span>{" "}
                            {user.projectName}
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              Unit Type:
                            </span>{" "}
                            {user.schemeType}
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              Unit Number:
                            </span>{" "}
                            {user.unitNo}
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              Payment Plan:
                            </span>{" "}
                            {user.paymentPlan}
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              Lucky Draw:
                            </span>{" "}
                            {user.luckyDrawId}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`modal fade ${isModalOpen22 ? "show d-block" : ""}`}
          id="modaldemo-callback-form"
          tabIndex="-1"
          style={{
            display: isModalOpen22 ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            style={{ maxWidth: "90%", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "12px",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)",
                backgroundColor: "#fff",
                overflow: "hidden",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#fafafa",
                  borderBottom: "1px solid #e0e0e0",
                  borderRadius: "12px 12px 0 0",
                  padding: "15px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "'Rabbit', sans-serif",
                }}
              >
                <h5 className="modal-title" style={{ margin: 0 }}>
                  Gift Change
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal22}
                  aria-label="Close"
                  style={{ outline: "none", cursor: "pointer" }}
                ></button>
              </div>

              <div
                className="modal-body"
                style={{
                  padding: "20px",
                  maxHeight: "calc(100vh - 200px)",
                  overflowY: "auto",
                  fontFamily: "'Rabbit', sans-serif",
                }}
              >
                <div
                  style={{
                    maxHeight: "400px",
                    overflowY: "scroll",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 #f1f1f1",
                  }}
                >
                  <table className="table table-striped table-bordered text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Gift Details</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users3.map((user) => (
                        <tr>
                          <td>
                            <img
                              alt="avatar"
                              className="rounded-circle me-3"
                              src={
                                user.giftImage ||
                                "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                              }
                              style={{ width: 60 }}
                            />
                          </td>
                          <td>
                            Gift Name: {user.giftName}
                            <br />
                            Gift Price: {user.giftValue}
                            <br />
                            Vendor Category: {user.vendorCategory}
                            <br />
                            Vendor Sub Category: {user.vendorSubCategory}
                            <br />
                            Date: {user.giftAllocationDate}
                          </td>

                          <td>
                            <button
                              onClick={() => getEmpps(user.id)}
                              style={{
                                backgroundColor: "#007bff",
                                border: "none",
                                color: "white",
                                textAlign: "center",
                                textDecoration: "none",
                                display: "inline-block",
                                fontSize: "12px",
                                cursor:
                                  user.isGiftAllocated === false
                                    ? "not-allowed"
                                    : "pointer",
                                borderRadius: "4px",
                                width: "100%",
                                transition:
                                  "background-color 0.3s, transform 0.3s",
                                fontFamily: "Arial, sans-serif",
                                marginBottom: "10px",
                                opacity:
                                  user.isGiftAllocated === false ? 0.5 : 1,
                              }}
                              onMouseOver={(e) => {
                                if (user.isGiftAllocated !== false) {
                                  e.currentTarget.style.backgroundColor =
                                    "#0056b3";
                                }
                              }}
                              onMouseOut={(e) => {
                                if (user.isGiftAllocated !== false) {
                                  e.currentTarget.style.backgroundColor =
                                    "#007bff";
                                }
                              }}
                              onMouseDown={(e) => {
                                if (user.isGiftAllocated !== false) {
                                  e.currentTarget.style.transform =
                                    "scale(0.95)";
                                }
                              }}
                              onMouseUp={(e) => {
                                if (user.isGiftAllocated !== false) {
                                  e.currentTarget.style.transform = "scale(1)";
                                }
                              }}
                              className="ripple btn-xs"
                              disabled={user.isGiftAllocated === false}
                            >
                              Release
                            </button>

                            <br />
                            <button
                              onClick={handleOpenModal23}
                              style={{
                                backgroundColor: "#007bff",
                                border: "none",
                                color: "white",
                                textAlign: "center",
                                textDecoration: "none",
                                display: "inline-block",
                                fontSize: "12px",
                                cursor: "pointer",
                                borderRadius: "4px",
                                width: "100%",
                                transition:
                                  "background-color 0.3s, transform 0.3s",
                                fontFamily: "Arial, sans-serif",
                                marginBottom: "10px",
                              }}
                              onMouseOver={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  "#0056b3")
                              }
                              onMouseOut={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  "#007bff")
                              }
                              onMouseDown={(e) =>
                                (e.currentTarget.style.transform =
                                  "scale(0.95)")
                              }
                              onMouseUp={(e) =>
                                (e.currentTarget.style.transform = "scale(1)")
                              }
                              className="ripple btn-xs"
                            >
                              Change Gift
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`modal fade ${isModalOpen23 ? "show d-block" : ""}`}
          id="modaldemo-callback-form"
          tabIndex="-1"
          style={{
            display: isModalOpen23 ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            animation: "fadeIn 0.5s",
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            style={{ maxWidth: "30%", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                animation: "slideIn 0.5s",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">Gift Change</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal23}
                  aria-label="Close"
                  style={{ outline: "none", cursor: "pointer" }}
                ></button>
              </div>

              <div className="modal-body" style={{ padding: "20px" }}>
                <form>
                  <div className="row row-sm">
                    <div className="col-sm-12 form-group">
                      <label className="form-label">
                        Gift <span className="tx-danger">*</span>
                      </label>
                      <select
                        className="form-control form-select"
                        name="gift"
                        value={formData12.gift}
                        onChange={handleInputChan}
                      >
                        <option>Select Gift</option>
                        {gift.map((option, index) => (
                          <option key={option.name} value={option.id}>
                            {option.giftName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="modal-footer"
                style={{
                  borderTop: "1px solid #dee2e6",
                  borderRadius: "0 0 10px 10px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <button
                  className="btn ripple btn-primary"
                  onClick={getEmp}
                  type="submit"
                  style={{
                    borderRadius: "5px",
                    padding: "8px 20px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    animation: "btnFadeIn 0.5s",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* End Main Content*/}
        {/* Main Footer*/}
        <div className="main-footer text-center">
          <div className="">
            <div className="row row-sm">
              <div className="col-md-12">
                <span>
                  Copyright © 2024 <a href="javascript:void(0)">AMRS</a>.
                  Designed by <a href="http://webkype.com/">Webkype.com</a> All
                  rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvertyDetaese;
