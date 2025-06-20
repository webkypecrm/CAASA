import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TopHeader from "./Components/TopHeader";
import Prince from "./Components/Prince";
import "./App.css"; // or your custom CSS file path

const TrackEmployeeAttendance = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const { userName, userId, selectedDate } = location.state || {};

  const [filterByObj, setFilterByObj] = useState({
    type: "",
    selectedDate: selectedDate,
  });
  // const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [trackingData, setTrakingData] = useState([]);
  const [trackingLoading, setTrackingLoading] = useState(false);
  const navigation = useNavigate();
  const navigate = useNavigate();
  const Token = localStorage.getItem("Token");
  const apiUrl = process.env.REACT_APP_URL;

  const dummyData = [
    {
      id: 1,
      photo: "https://via.placeholder.com",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Office",
      actionTime: "10:00 AM (App)",
      officeGateIn: "10:25:00 (IN)",
      officeGateOut: "N/A",
      meetingWith: "N/A",
      location: "Sec 73, Magnus Tower Noida, UP",
      purpose: "Office Work",
      clientAddress: "N/A",
      newAddress: "N/A",
      message: "On Time / Late / Super Late/ Mr. Late",
    },
    {
      id: 2,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Heading To Meeting",
      actionTime: "12:45 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "12:30 PM (Out)",
      meetingWith: "Client (Mr. Rajeev Kumar)",
      location: "Sector 132, Noida UP 201301",
      purpose: "Sales",
      clientAddress: "Sector 132, Noida UP 201301",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 3,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Meeting Started",
      actionTime: "1:25 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "Client (Mr. Rajeev Kumar)",
      location: "Sector 132, Noida UP 201301",
      purpose: "Sales",
      clientAddress: "Sector 132, Noida UP 201301",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 4,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Meeting End",
      actionTime: "3:00 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "Client (Mr. Rajeev Kumar)",
      location: "Sector 132, Noida UP 201301",
      purpose: "Sales",
      clientAddress: "Sector 132, Noida UP 201301",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 5,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Office",
      actionTime: "3:15 PM (App)",
      officeGateIn: "04:25:00 (IN)",
      officeGateOut: "N/A",
      meetingWith: "N/A",
      location: "Sec 73, Magnus Tower Noida, UP",
      purpose: "Office Work",
      clientAddress: "N/A",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 6,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Heading To Meeting",
      actionTime: "5:00 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "05:15 PM (Out)",
      meetingWith: "Lead (Mrs. Suneeta Singh)",
      location: "Ghazibad C22, Plat Road UP 201301",
      purpose: "Sales",
      clientAddress: "Ghazibad C22, Plat Road UP 201301",
      newAddress: "Sector 18, Plaza Market, Noida UP 201301",
      message: "N/A",
    },
    {
      id: 7,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Meeting Started",
      actionTime: "5:30 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "Lead (Mrs. Suneeta Singh)",
      location: "Ghazibad C22, Plat Road UP 201301",
      purpose: "Sales",
      clientAddress: "Ghazibad C22, Plat Road UP 201301",
      newAddress: "Sector 18, Plaza Market, Noida UP 201301",
      message: "N/A",
    },
    {
      id: 8,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Meeting End",
      actionTime: "6:00 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "Lead (Mrs. Suneeta Singh)",
      location: "Ghazibad C22, Plat Road UP 201301",
      purpose: "Sales",
      clientAddress: "Ghazibad C22, Plat Road UP 201301",
      newAddress: "Sector 18, Plaza Market, Noida UP 201301",
      message: "N/A",
    },
    {
      id: 9,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Home",
      actionTime: "6:30 PM",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "N/A",
      location: "Panchsheel Greens-2",
      purpose: "Home",
      clientAddress: "N/A",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 10,
      photo: "",
      name: "",
      date: "",
      day: "",
      headedTo: "",
      actionTime: "",
      officeGateIn: "",
      officeGateOut: "",
      meetingWith: "",
      location: "",
      purpose: "",
      clientAddress: "",
      newAddress: "",
      message: "",
      penalty: "",
    },
    {
      id: 1,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Office",
      actionTime: "10:00 AM (App)",
      officeGateIn: "10:25:00 (IN)",
      officeGateOut: "N/A",
      meetingWith: "N/A",
      location: "Sec 73, Magnus Tower Noida, UP",
      purpose: "Office Work",
      clientAddress: "N/A",
      newAddress: "N/A",
      message: "On Time / Late / Super Late/ Mr. Late",
    },
    {
      id: 2,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Heading To Meeting",
      actionTime: "12:45 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "12:30 PM (Out)",
      meetingWith: "Client (Mr. Rajeev Kumar)",
      location: "Sector 132, Noida UP 201301",
      purpose: "Sales",
      clientAddress: "Sector 132, Noida UP 201301",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 3,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Meeting Started",
      actionTime: "1:25 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "Client (Mr. Rajeev Kumar)",
      location: "Sector 132, Noida UP 201301",
      purpose: "Sales",
      clientAddress: "Sector 132, Noida UP 201301",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 4,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Meeting End",
      actionTime: "3:00 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "Client (Mr. Rajeev Kumar)",
      location: "Sector 132, Noida UP 201301",
      purpose: "Sales",
      clientAddress: "Sector 132, Noida UP 201301",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 5,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Office",
      actionTime: "3:15 PM (App)",
      officeGateIn: "04:25:00 (IN)",
      officeGateOut: "N/A",
      meetingWith: "N/A",
      location: "Sec 73, Magnus Tower Noida, UP",
      purpose: "Office Work",
      clientAddress: "N/A",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 6,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Heading To Meeting",
      actionTime: "5:00 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "05:15 PM (Out)",
      meetingWith: "Lead (Mrs. Suneeta Singh)",
      location: "Ghazibad C22, Plat Road UP 201301",
      purpose: "Sales",
      clientAddress: "Ghazibad C22, Plat Road UP 201301",
      newAddress: "Sector 18, Plaza Market, Noida UP 201301",
      message: "N/A",
    },
    {
      id: 7,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Meeting Started",
      actionTime: "5:30 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "Lead (Mrs. Suneeta Singh)",
      location: "Ghazibad C22, Plat Road UP 201301",
      purpose: "Sales",
      clientAddress: "Ghazibad C22, Plat Road UP 201301",
      newAddress: "Sector 18, Plaza Market, Noida UP 201301",
      message: "N/A",
    },
    {
      id: 8,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Meeting End",
      actionTime: "6:00 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "Lead (Mrs. Suneeta Singh)",
      location: "Ghazibad C22, Plat Road UP 201301",
      purpose: "Sales",
      clientAddress: "Ghazibad C22, Plat Road UP 201301",
      newAddress: "Sector 18, Plaza Market, Noida UP 201301",
      message: "N/A",
    },
    {
      id: 9,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Home",
      actionTime: "6:30 PM",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "N/A",
      location: "Panchsheel Greens-2",
      purpose: "Home",
      clientAddress: "N/A",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 10,
      photo: "",
      name: "",
      date: "",
      day: "",
      headedTo: "",
      actionTime: "",
      officeGateIn: "",
      officeGateOut: "",
      meetingWith: "",
      location: "",
      purpose: "",
      clientAddress: "",
      newAddress: "",
      message: "",
      penalty: "",
    },
    {
      id: 1,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Office",
      actionTime: "10:00 AM (App)",
      officeGateIn: "10:25:00 (IN)",
      officeGateOut: "N/A",
      meetingWith: "N/A",
      location: "Sec 73, Magnus Tower Noida, UP",
      purpose: "Office Work",
      clientAddress: "N/A",
      newAddress: "N/A",
      message: "On Time / Late / Super Late/ Mr. Late",
    },
    {
      id: 2,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Heading To Meeting",
      actionTime: "12:45 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "12:30 PM (Out)",
      meetingWith: "Client (Mr. Rajeev Kumar)",
      location: "Sector 132, Noida UP 201301",
      purpose: "Sales",
      clientAddress: "Sector 132, Noida UP 201301",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 3,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Meeting Started",
      actionTime: "1:25 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "Client (Mr. Rajeev Kumar)",
      location: "Sector 132, Noida UP 201301",
      purpose: "Sales",
      clientAddress: "Sector 132, Noida UP 201301",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 4,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Meeting End",
      actionTime: "3:00 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "Client (Mr. Rajeev Kumar)",
      location: "Sector 132, Noida UP 201301",
      purpose: "Sales",
      clientAddress: "Sector 132, Noida UP 201301",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 5,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Office",
      actionTime: "3:15 PM (App)",
      officeGateIn: "04:25:00 (IN)",
      officeGateOut: "N/A",
      meetingWith: "N/A",
      location: "Sec 73, Magnus Tower Noida, UP",
      purpose: "Office Work",
      clientAddress: "N/A",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 6,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Heading To Meeting",
      actionTime: "5:00 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "05:15 PM (Out)",
      meetingWith: "Lead (Mrs. Suneeta Singh)",
      location: "Ghazibad C22, Plat Road UP 201301",
      purpose: "Sales",
      clientAddress: "Ghazibad C22, Plat Road UP 201301",
      newAddress: "Sector 18, Plaza Market, Noida UP 201301",
      message: "N/A",
    },
    {
      id: 7,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Meeting Started",
      actionTime: "5:30 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "Lead (Mrs. Suneeta Singh)",
      location: "Ghazibad C22, Plat Road UP 201301",
      purpose: "Sales",
      clientAddress: "Ghazibad C22, Plat Road UP 201301",
      newAddress: "Sector 18, Plaza Market, Noida UP 201301",
      message: "N/A",
    },
    {
      id: 8,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Meeting End",
      actionTime: "6:00 PM (App)",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "Lead (Mrs. Suneeta Singh)",
      location: "Ghazibad C22, Plat Road UP 201301",
      purpose: "Sales",
      clientAddress: "Ghazibad C22, Plat Road UP 201301",
      newAddress: "Sector 18, Plaza Market, Noida UP 201301",
      message: "N/A",
    },
    {
      id: 9,
      photo: "https://via.placeholder.com/40",
      name: "Gajendra Singh",
      date: "2 May 2025",
      day: "Monday",
      headedTo: "Home",
      actionTime: "6:30 PM",
      officeGateIn: "N/A",
      officeGateOut: "N/A",
      meetingWith: "N/A",
      location: "Panchsheel Greens-2",
      purpose: "Home",
      clientAddress: "N/A",
      newAddress: "N/A",
      message: "N/A",
    },
    {
      id: 10,
      photo: "",
      name: "",
      date: "",
      day: "",
      headedTo: "",
      actionTime: "",
      officeGateIn: "",
      officeGateOut: "",
      meetingWith: "",
      location: "",
      purpose: "",
      clientAddress: "",
      newAddress: "",
      message: "",
      penalty: "",
    },
  ];

  console.log("trackingData..,", trackingData);

  useEffect(() => {
    getUserTrackingData();
  }, []);

  function getDistanceInMeters(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Earth's radius in meters
    const toRad = (value) => (value * Math.PI) / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
  }

  // const handleChange = (dates) => {
  //   const parsedDate = new Date(dates);
  //   const year = parsedDate.getFullYear();
  //   const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  //   const day = String(parsedDate.getDate()).padStart(2, "0");
  //   const formattedDate = `${year}-${month}-${day}`;
  //   setSelectedDate(parsedDate);
  //   setFilterByObj((prevState) => ({
  //     ...prevState,
  //     dates: formattedDate,
  //   }));
  // };

  //   useEffect(() => {
  //     // Current date
  //     const currentDate = new Date();

  // const formattedDate = currentDate.toLocaleDateString("en-GB", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });

  //     setFormattedDate(formattedDate);
  //   }, []);

  //   const formatDateTime = (dateTimeString) => {
  //     const options = {
  //       year: "numeric",
  //       month: "2-digit",
  //       day: "2-digit",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //       hour12: true,
  //     };
  //     const date = new Date(dateTimeString);
  //     return date.toLocaleString("en-IN", options);
  //   };

  // const fetchDataFromApi = async () => {
  //   setLoading(true);
  //   try {
  //     // const { dates, gender, department, type } = filterByObj;
  //     const url = `${apiUrl}/tracking/getEmployeeTracking`;

  //     const response = await fetch(url, {
  //       headers: {
  //         Authorization: `Bearer ${Token}`,
  //       },
  //     });

  //     console.log("response..", response);
  //     const data = await response.json();
  //     setValues(data.count);

  //     if (data.status === "success" && Array.isArray(data.data)) {
  //       const formattedData = data.data.map((item) => ({
  //         ...item,
  //         formattedDate: item.attendances[0]?.date
  //           ? formatDateTime(item.attendances[0]?.date)
  //           : null,
  //         formattedDate2: item.attendances[0]?.date
  //           ? formatDateTime(item.attendances[0]?.date)
  //           : null,
  //       }));
  //       setUsers(formattedData);
  //     } else {
  //       console.error(
  //         "API response error:",
  //         data.message || "Invalid data format"
  //       );
  //     }
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchDataFromApi();
  // }, [filterByObj]);
  const [customDate, setCustomDate] = useState(null);
  const [meetingCount, setMeetingCount] = useState(null);

  const [customFilterObj, setCustomFilterObj] = useState({
    type: "",
    selectedDate: selectedDate,
  });

  // For <select> input
  const handleCustomSelectChange = (e) => {
    const { name, value } = e.target;
    setCustomFilterObj((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // For Date Range Picker
  const handleCustomDateChange = (date) => {
    setCustomDate(date);

    const formatDate = (d) => {
      if (!d) return "";
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const d2 = String(d.getDate()).padStart(2, "0");
      return `${y}-${m}-${d2}`;
    };

    setCustomFilterObj((prev) => ({
      ...prev,
      selectedDate: formatDate(date),
    }));
  };

  const getUserTrackingData = async () => {
    setTrackingLoading(true); // Start loading indicator for tracking data
    try {
      const url = `${apiUrl}/tracking/getEmployeeTracking?limit=1000&employeeId=${userId}&selectedDate=${customFilterObj.selectedDate}&type=${customFilterObj.type}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      console.log("response..", response.data);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Tracking API response:", data);

      if (data.status === "success" && Array.isArray(data.data)) {
        setTrakingData(data.data);
        setMeetingCount(data.meetingCount);
      } else {
        console.error(
          "API response error:",
          data.message || "Invalid data format"
        );
      }
    } catch (error) {
      console.error("Error fetching tracking data:", error.message || error);
    } finally {
      setTrackingLoading(false); // Always stop loading
    }
  };

  useEffect(() => {
    getUserTrackingData();
  }, [customFilterObj]);

  //   const filteredUsers = users.filter((user) => {
  //     const searchLowerCase = search.toLowerCase();
  //     const fullNameLowerCase = user.fullName.toLowerCase();

  //     return (
  //       user.id.toString().includes(searchLowerCase) ||
  //       fullNameLowerCase.includes(searchLowerCase) ||
  //       user.phoneNumber.includes(searchLowerCase)
  //     );
  //   });

  //   const handleInputChange2 = (e) => {
  //     const { name, value } = e.target;
  //     setFilterByObj((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   };

  const keyframes = `
    @keyframes bounce {
      0%, 100% {
        transform: scale(0.9);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.5);
        opacity: 1;
      }
    }
    `;

  const loaderStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(255, 255, 255, 0.3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    },
    loaderContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px",
    },
    dot: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: "#3498db",
      animation: "bounce 1.2s infinite ease-in-out",
    },
  };

  const blackHeaderStyle = { backgroundColor: "black", color: "white" };

  // Inject keyframes into the document
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="page">
        <TopHeader />
        <Prince />

        <div className="main-content pt-0">
          <div className="main-container container-fluid">
            <div className="inner-body">
              {/* Page Header */}
              <div className="page-header d-flex justify-content-start align-items-start flex-wrap">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">
                    {userName || "Employee"}{" "}
                    <small>
                      {/* ({formattedDate}) ({values}) */}{" "}
                      {trackingData?.length}
                    </small>
                  </h2>
                </div>
                <div style={{ marginLeft: "50px" }} >
                  <h3 className="main-content-title tx-22 mg-b-5">
                    {"Meeting Count"}{" "}
                    <small>
                      {/* ({formattedDate}) ({values}) */}{" "}
                      {meetingCount}
                    </small>
                  </h3>
                </div>
              </div>
              {/* End Page Header */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card custom-card">
                    <div className="card-body py-3">
                      <div className="row">
                        <div className="col-sm-4">
                          <input
                            type="search"
                            className="form-control form-control"
                            placeholder="Search Location"
                            aria-controls="example1"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </div>

                        <div className="col-sm-4">
                          <select
                            className="form-control select2"
                            name="type"
                            value={customFilterObj.type}
                            onChange={handleCustomSelectChange}
                          >
                            <option value="">Status</option>
                            <option>Tracking</option>
                            <option>Meeting Start</option>
                            <option>Meeting End</option>
                            <option>Meeting Scheduled</option>
                            <option>Going To Meeting</option>
                            <option>Heading To Home</option>
                            <option>client-meeting</option>
                            <option>site-visit</option>
                          </select>
                        </div>

                        <div className="col-sm-4">
                          <div className="input-group">
                            <div className="input-group-text border-end-0">
                              <i className="fe fe-calendar lh--9 op-6" />
                            </div>
                            <div style={{ flex: "1" }}>
                              <DatePicker
                                selected={customDate}
                                onChange={(date) =>
                                  handleCustomDateChange(date)
                                }
                                isClearable={true}
                                placeholderText="MM/DD/YYYY"
                                dateFormat="MM/dd/yyyy"
                                className="form-control fc-datepicker"
                                name="dateRange"
                              />
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>{" "}
              </div>
              {/* Row */}
              <div className="row row-sm">
                <div className="col-lg-12">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered text-nowrap mb-0">
                          <thead>
                            <tr className="black-header">
                              <th className=" black-header">Emp Info</th>
                              {/* <th className=" black-header">Name</th> */}
                              <th className=" black-header">Date/DAY</th>
                              {/* <th className=" black-header">DAY</th> */}
                              {/* <th className=" black-header">Action</th> */}
                              <th className=" black-header">Action/Time</th>
                              {/* <th className="black-header1">
                                Office Gate (IN)
                              </th>{" "} */}
                              {/* No black background here */}
                              {/* <th className="black-header1">
                                Office Gate (Out)
                              </th>{" "} */}
                              {/* No black background here */}
                              <th className=" black-header">TO LOCATION / MEETING WITH / TIME</th>
                              {/* <th className=" black-header">Location</th> */}
                              {/* <th className=" black-header">Current/Address</th> */}

                              <th className=" black-header">Meeting Outcome</th>
                              {/* <th className=" black-header">New Address</th> */}
                              {/* <th className=" black-header">Message</th> */}
                            </tr>
                          </thead>

                          <tbody>
                            {trackingData?.map((user) => (
                              <tr key={user.id}>
                                <td>
                                  <img
                                    src={
                                      user?.profilePhoto
                                        ? user.profilePhoto
                                        : "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                    }
                                    alt="User"
                                    width="40"
                                    height="40"
                                  style={{ marginLeft: "20px"}}
                                  />
                                  <br />
                               {user?.employee?.fullName}</td>
                                <td>
                                  {user?.enterDate
                                    ? new Date(
                                      user.enterDate
                                    ).toLocaleDateString("en-IN", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "numeric",
                                    })
                                    : ""}
                                  <br />
                                  {"          "}
                                  {new Date(user.createdAt).toLocaleDateString(
                                    "en-US",
                                    { weekday: "long" }
                                  )}
                                </td>
                                <td
                                  style={{
                                    color:
                                      user.type === "Meeting Start"
                                        ? "purple"
                                        : user.type === "Meeting End"
                                          ? "magenta"
                                          : "",
                                  }}
                                >
                                  {user.type === "Tracking" ? "Location Logged" : user.type}
                                  <br />
                                  {"  "}  <strong style={{ color: "blue" }}>
                                    At:{" "}
                                    {user?.createdAt
                                      ? new Date(
                                        user.createdAt
                                      ).toLocaleTimeString("en-IN", {
                                        hour: "numeric",
                                        minute: "2-digit",
                                        hour12: true,
                                        timeZone: "Asia/Kolkata",
                                      })
                                      : ""}
                                  </strong>
                                  <br />
                                  <img
                                    src="https://cdn-icons-gif.flaticon.com/16496/16496571.gif"
                                    alt="Logo"
                                    style={{
                                      width: "22px",
                                      height: "22px",
                                      marginRight: "6px",
                                      marginBottom: "6px",
                                    }}
                                  />{" "} {user?.location || user?.endlocation}
                                </td>
                                {/* <td>
                                  {" "}
                                  <strong style={{ color: "blue" }}>
                                    At:{" "}
                                    {user?.createdAt
                                      ? new Date(
                                        user.createdAt
                                      ).toLocaleTimeString("en-IN", {
                                        hour: "numeric",
                                        minute: "2-digit",
                                        hour12: true,
                                        timeZone: "Asia/Kolkata",
                                      })
                                      : ""}
                                  </strong>
                                </td> */}
                                {/* <td>{user.officeGateIn}</td>
                                <td>{user.officeGateOut}</td> */}
                                <td>
                                  <Link
                                    to={`/DatelsLeads/${user?.EmployeeMeeting?.followUpLead?.[0]
                                      ?.Lead?.id || ""
                                      }`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    // className="border border-4"
                                    style={{ marginLeft: "26px", color: "blue", font: "bold" }}
                                  >
                                    {user?.EmployeeMeeting?.followUpLead?.[0]
                                      ?.Lead?.clientName || ""}
                                  </Link>
                                  <br />
                                  {user?.EmployeeMeeting?.followUpLead?.[0]
                                    ?.Lead?.clientName ? (
                                    <img
                                      src="https://cdn-icons-png.flaticon.com/128/888/888856.png"
                                      alt="Logo"
                                      style={{
                                        width: "22px",
                                        height: "22px",
                                        marginRight: "6px",
                                        marginBottom: "6px",
                                      }}
                                    />
                                  ) : null}

                                  {(() => {
                                    const type = user?.type;
                                    if (type === "Heading To Home") {
                                      return (
                                        user?.employee?.currentAddressArea || ""
                                      );
                                    } else if (type === "Heading To Office") {
                                      return "8th Floor, Magnus Tower, Sector 73, Noida";
                                    } else if (type === "Meeting Scheduled") {
                                      return (
                                        user?.EmployeeMeeting?.followUpLead?.[0]
                                          ?.meetingVenue || ""
                                      );
                                    } else {
                                      // fallback for all other types like "Tracking", "Meeting Start", etc.
                                      return (
                                        user?.EmployeeMeeting?.followUpLead?.[0]
                                          ?.meetingVenue || ""
                                      );
                                    }
                                  })()}
                                  <br />
                                  {(user.type === "Meeting Scheduled" || user.type === "Meeting Start" || user.type === "Meeting End") && (
                                    <>
                                      Meeting Time:{" "}
                                      {new Date(user?.EmployeeMeeting?.followUpLead?.[0]?.dateTime).toLocaleDateString()}{" "}
                                      {new Date(user?.createdAt).toLocaleTimeString("en-IN", {
                                        hour: "numeric",
                                        minute: "2-digit",
                                        hour12: true,
                                        timeZone: "Asia/Kolkata",
                                      })}
                                    </>
                                  )}

                                  <br />
                                  {(() => {
                                    const type = user?.type;
                                    const userLat = user?.latitude;
                                    const userLong = user?.longitude;
                                    const meetingLat =
                                      user?.EmployeeMeeting?.followUpLead?.[0]
                                        ?.meetingLat;
                                    const meetingLong =
                                      user?.EmployeeMeeting?.followUpLead?.[0]
                                        ?.meetingLong;

                                    // Check if all coordinates are valid numbers
                                    const isValidCoords = (a, b) =>
                                      a !== undefined &&
                                      b !== undefined &&
                                      !isNaN(a) &&
                                      !isNaN(b);

                                    if (
                                      (type === "Meeting Start" ||
                                        type === "Meeting End") &&
                                      isValidCoords(userLat, userLong) &&
                                      isValidCoords(meetingLat, meetingLong)
                                    ) {
                                      const distance = getDistanceInMeters(
                                        userLat,
                                        userLong,
                                        meetingLat,
                                        meetingLong
                                      );
                                      if (distance > 100) {
                                        return (
                                          <strong style={{ color: "red" }}>
                                            {`⚠️ Location Mismatch Distance: ${(
                                              distance / 1000
                                            ).toFixed(2)} km`}{" "}
                                          </strong>
                                        );
                                      }
                                    }

                                    // Fallback: Show meeting venue or nothing
                                    return "";
                                  })()}
                                </td>



                                {/* <td>{user?.EmployeeMeeting?.type || ''}</td> */}
                                <td>
                                  {user.type === "Meeting End" && user?.EmployeeMeeting?.deposition || ""}
                                </td>
                                {/* <td>Not Updated</td> */}
                                {/* <td>{user.message || "ok"}</td> */}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Row */}
            </div>
          </div>
        </div>
        {/* End Main Content*/}
        {/* Main Footer*/}
        <div className="main-footer text-center">
          <div className="container">
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
        {/*End Footer*/}
      </div>
    </>
  );
};

export default TrackEmployeeAttendance;
