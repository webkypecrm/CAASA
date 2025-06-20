import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Prince from "../Components/Prince";
import TopHeader from "../Components/TopHeader";
import { DatePicker, Space } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "../assets/plugins/notify/css/notifIt.css";
import toast1, { Toaster } from "react-hot-toast";
import moment from "moment";
import io from "socket.io-client";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate3, setSelectedDate3] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [employee, setEmployee] = useState({});
  const [employeeCheque, setEmployeeCheque] = useState({});
  const [users, setUsers] = useState([]);
  const [usersBath, setUsersBath] = useState([]);
  const [usersAnive, setUsersAnive] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [currentToastId, setCurrentToastId] = useState(null);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const [announcements2, setAnnouncements2] = useState([]);
  const [currentToastId2, setCurrentToastId2] = useState(null);
  const [currentAnnouncementIndex2, setCurrentAnnouncementIndex2] = useState(0);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem("Token");

  const location = useLocation();
  const navigate = useNavigate();
  // Formatting dates for API query
  const formattedDate = selectedDate ? selectedDate.format("MM-YYYY") : ""; // Month and Year
  const formattedDates = selectedDate2 ? selectedDate2.format("YYYY") : ""; // Year only
  const formattedDate2 = selectedDate3
    ? selectedDate3.format("DD-MM-YYYY")
    : ""; // Full date

  // Handle Month Picker changes
  const onChange2 = (date) => {
    setSelectedDate(date);
  };

  // Handle Full Date Picker changes
  const onChange = (date) => {
    setSelectedDate3(date);
  };

  // Handle Year Picker changes
  const onChange3 = (date) => {
    setSelectedDate2(date);
  };

  // Disable future dates
  const disableFutureDates = (current) => {
    return current && current > moment().endOf("month");
  };

  // Disable future years
  const disableFutureYears = (current) => {
    return current && current.year() > moment().year();
  };

  useEffect(() => {
    const getEmpCheque = async () => {
      // setLoading(true);

      const url = `${apiUrl}/dashboard/chequeCount`;

      try {
        let response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
        response = await response.json();

        if (response.status === "success") {
          setEmployeeCheque(response.data);
        } else {
          console.error("Error fetching employee data:", response.message);
        }
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        // setLoading(false);
      }
    };

    getEmpCheque();
  }, []);

  useEffect(() => {
    const getEmp = async () => {
      setLoading(true);

      const url = `${apiUrl}/employee/employee?monthValue=${formattedDate}&dateValue=${formattedDate2}&yearValue=${formattedDates}`;

      try {
        let response = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
        response = await response.json();

        if (response.status === "success") {
          setEmployee(response.data);
        } else {
          console.error("Error fetching employee data:", response.message);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    getEmp();
  }, [formattedDate, formattedDate2, formattedDates]);

  //  anacement

  const SOCKET_URL = `${apiUrl}`;
  const socket = useRef(null);

  const styles = {
    container: {
      textAlign: "center",
    },
    bannerImage: {
      width: "40px",
      height: "40px",
      borderRadius: "100%",
      margin: "0 auto 16px auto",
    },
    title: {
      marginBottom: "8px",
      textAlign: "center",
    },
    description: {
      marginBottom: "8px",
      textAlign: "center",
    },
    infoText: {
      marginBottom: "8px",
      textAlign: "center",
    },
    link: {
      marginBottom: "8px",
      textAlign: "center",
    },
    button: {
      marginTop: "16px",
      padding: "8px 16px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  const createToastContent = (announcement) => (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src={
            announcement.banner ||
            "https://fship.webkype.co/static/media/logo.3fc6bb71b3255cbac3ca.png"
          }
          alt="Announcement Banner"
          style={styles.bannerImage}
        />
      </div>
      <div style={styles.contentContainer}>
        <h6>Announcement</h6>
        <h4 style={styles.title}>{announcement.title}</h4>
        <p style={styles.description}>
          {announcement.description || "No description available."}
        </p>
        <p style={styles.infoText}>
          Date: {announcement.noticeDate || "N/A"} {announcement.noticeTime}
        </p>
        <p style={styles.link}>
          Link:{" "}
          <a href={announcement.link} target="_blank" rel="noopener noreferrer">
            {announcement.link}
          </a>
        </p>
      </div>
    </div>
  );

  // Socket setup and announcement handling
  useEffect(() => {
    if (!SOCKET_URL) {
      console.error("SOCKET_URL is not defined");
      return;
    }

    // Initialize the socket connection
    socket.current = io(SOCKET_URL);

    // Log connection ID when connected
    socket.current.on("connect", () => {
      console.log("Connected to socket server with ID:", socket.current.id);
    });

    // Handle socket announcements
    socket.current.on("announcement_update", (data) => {
      console.log("Received announcement update:", data);

      if (data && data.showAnnouncemet) {
        console.log("Valid announcement data:", data);
        setAnnouncements((prev) => [...prev, data]); // Append new announcement

        // Display the announcement using Toastify
        showAnnouncement(data);
      } else {
        console.error(
          "Announcement is missing required data or improperly formatted:",
          data
        );
      }
    });

    // Handle connection errors
    socket.current.on("connect_error", (err) => {
      console.error("Socket connection error:", err);
    });

    // Handle socket disconnection
    socket.current.on("disconnect", (reason) => {
      console.warn("Disconnected from socket server:", reason);
    });

    // Cleanup on component unmount
    return () => {
      if (socket.current) {
        socket.current.disconnect();
        console.log("Socket connection closed");
      }
    };
  }, [SOCKET_URL]);

  const showAnnouncement = (announcement) => {
    if (announcement) {
      // Create toast content using the announcement data
      const id = toast(createToastContent(announcement), {
        position: toast.POSITION.BOTTOM_RIGHT,
        style: {
          borderRadius: "8px",
          background: "#007bff",
          color: "#fff",
          padding: "1px",
          width: "300px",
          zIndex: "9999",
        },
        autoClose: false,
        closeOnClick: true,
        draggable: false,
        hideProgressBar: true,
      });
      setCurrentToastId(id);
    } else {
      console.error("Attempted to show an announcement but none was provided.");
    }
  };

  // Call and Mitting
  useEffect(() => {
    const intervalId = setInterval(() => {}, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (announcements2.length > 0) {
      showAnnouncement2(currentAnnouncementIndex2);
    }
  }, [currentAnnouncementIndex2, announcements2]);

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

  // const fetchAnnouncementsData = async () => {
  //   try {
  //     const Token = localStorage.getItem("Token");
  //     const apiUrl = process.env.REACT_APP_URL;

  //     const response = await fetch(`${apiUrl}/announcement/showNotification`, {
  //       headers: {
  //         'Authorization': `Bearer ${Token}`
  //       }
  //     });

  //     const data = await response.json();

  //     if (data.status === 'success') {
  //       const formattedData = data.data.map(item => ({
  //         ...item,
  //         meetingDate: item.meetingDate ? formatDateTime(item.meetingDate) : null,
  //         meetingTime: item.meetingTime ? formatTime(item.meetingTime) : null,
  //         callBackDate: item.callBackDate ? formatDateTime(item.callBackDate) : null,
  //         callBackTime: item.callBackTime ? formatTime(item.callBackTime) : null,
  //       }));
  //       setAnnouncements2(formattedData);

  //       const announcementIndex = data.data.findIndex(a => a.showAnnouncemet2);
  //       if (announcementIndex !== -1) {
  //         setCurrentAnnouncementIndex2(announcementIndex);
  //         showAnnouncement2(announcementIndex);
  //       }
  //     } else {
  //       console.error('API request was not successful:', data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const showAnnouncement2 = (index) => {
    const announcement = announcements2[index];
    if (announcement && announcement.showAnnouncemet) {
      const content = createToastContent2(announcement);
      const toastStyle = {
        meetingUpdate: {
          background: "#3F51B5", // Indigo
          color: "#fff",
        },
        callUpdate: {
          background: "#4caf50", // Green
          color: "#fff",
        },
      };

      if (currentToastId2) {
        toast.update(currentToastId2, {
          render: content,
          autoClose: false,
          closeOnClick: true,
          draggable: true,
          hideProgressBar: false,
          style: toastStyle[announcement.type],
          onClose: handleNextAnnouncement,
          closeButton: "",
        });
      } else {
        const id = toast(content, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: false,
          closeOnClick: true,
          draggable: true,
          hideProgressBar: false,
          style: toastStyle[announcement.type],
          onClose: handleNextAnnouncement,
          closeButton: "",
        });
        setCurrentToastId2(id);
      }
    }
  };

  const handleNextAnnouncement = () => {
    setCurrentAnnouncementIndex2(
      (prevIndex) => (prevIndex + 1) % announcements2.length
    );
  };

  const createToastContent2 = (announcement) => (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h5>
        {announcement.type === "meetingUpdate" ? "Meeting" : "Call"}{" "}
        Notification
      </h5>
      <div>
        {announcement.type === "meetingUpdate" && (
          <>
            <p>
              Description:{" "}
              {announcement.lastCallSummary || "No description available."}
            </p>
            <p>
              Date: {announcement.meetingDate || "N/A"}{" "}
              {announcement.meetingTime}
            </p>
          </>
        )}
        {announcement.type === "callUpdate" && (
          <>
            <p>
              Description:{" "}
              {announcement.lastCallSummary || "No description available."}
            </p>
            <p>
              Date: {announcement.callBackDate || "N/A"}{" "}
              {announcement.callBackTime}
            </p>
          </>
        )}
      </div>
    </div>
  );

  const fetchDataFromApi = () => {
    fetch(`${apiUrl}/employee/birthday`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          if (Array.isArray(data.data)) {
            setUsers(data.data);
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

  const fetchDataFromApiBath = () => {
    fetch(`${apiUrl}/dashboard/todayBirthday`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          if (Array.isArray(data.data)) {
            setUsersBath(data.data);
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
    fetchDataFromApiBath();
  }, []);

  const fetchDataFromApiAniv = () => {
    fetch(`${apiUrl}/dashboard/todayAnniversary`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          if (Array.isArray(data.data)) {
            setUsersAnive(data.data);
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
    fetchDataFromApiAniv();
  }, []);

  const formatTimes = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    return date.toLocaleTimeString("en-IN", options);
  };

  const fetchDataFromApiii = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/announcement/dashBoardAnnouncement`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "success") {
        if (Array.isArray(data.data)) {
          const formattedData = data.data.map((item) => ({
            ...item,
            noticeDate: item.noticeDate
              ? formatDateTime(item.noticeDate)
              : null,
            noticeTime: item.noticeDate ? formatTimes(item.noticeTime) : null,
          }));
          setUsers3(formattedData);
        } else {
          console.error(
            "API response does not contain companyList array:",
            data
          );
        }
      } else {
        console.error("API request was not successful:", data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromApiii();
  }, []);

  const fetchDataFromApiiii = async () => {
    try {
      const response = await fetch(`${apiUrl}/applicant/meetingCallList?`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "success") {
        if (Array.isArray(data.data)) {
          const formattedData = data.data.map((item) => ({
            ...item,
            meetingDate: item.meetingDate
              ? formatDateTime(item.meetingDate)
              : null,
            meetingTime: item.meetingTime
              ? formatTimes(item.meetingTime)
              : null,
            callBackDate: item.callBackDate
              ? formatDateTime(item.callBackDate)
              : null,
            callBackTime: item.callBackTime
              ? formatTimes(item.callBackTime)
              : null,
          }));
          setUsers2(formattedData);
        } else {
          console.error(
            "API response does not contain companyList array:",
            data
          );
        }
      } else {
        console.error("API request was not successful:", data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromApiiii();
  }, []);

  const styless = {
    container: {
      display: "flex",
      alignItems: "center",
      marginTop: "-7px",
      padding: "10px",
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: "50%",
      objectFit: "cover",
      marginRight: "0.8rem",
      border: "2px solid #ddd",
      // backgroundColor: '#fff'
    },
    textContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
    heading: {
      margin: "0",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "normal",
      color: "#333",
      fontSize: "1rem",
      lineHeight: "1.5",
      whiteSpace: "nowrap",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
    },
    icon: {
      display: "inline-block",
      animation: "wave 2s ease-in-out infinite",
      marginLeft: "0.5rem",
      cursor: "pointer",
    },
  };

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

  // Inject keyframes into the document
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  return (
    <>
      <div className="page">
        <TopHeader />
        <Prince />
        <div className="main-content  pt-0">
          <div className="main-container container-fluid">
            <div className="inner-body">
              {/* Page Header */}
              <div className="page-header">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    gap: "10px",
                    overflowX: "auto",
                  }}
                >
                  {/* Profile Image and Text (Left side) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <div style={styless.container}>
                      <img
                        src={
                          employee.profilePhoto ||
                          "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                        }
                        alt="user-img"
                        style={styless.profileImage}
                      />
                      <div style={styless.textContainer}>
                        <h2 style={styless.heading}>
                          Hello {employee.fullName} ({employee.designation})
                          <span style={styless.icon}>🤗</span>
                        </h2>
                      </div>
                      <style>
                        {`
      @keyframes wave {
        0% { transform: rotate(0.0deg); }
        10% { transform: rotate(14.0deg); }
        20% { transform: rotate(-8.0deg); }
        30% { transform: rotate(14.0deg); }
        40% { transform: rotate(-4.0deg); }
        50% { transform: rotate(10.0deg); }
        60% { transform: rotate(0.0deg); }
        100% { transform: rotate(0.0deg); }
      }
    `}
                      </style>
                    </div>
                  </div>

                  {/* Buttons and Date Pickers (Right side) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      marginTop: "-5px",
                    }}
                  >
                    {/* First Button */}
                    <div>
                      <Link
                        to="/Dashboard"
                        style={{
                          backgroundColor:
                            location.pathname === "/Dashboard"
                              ? "#0056b3"
                              : "#007bff", // Active color if on /Dashboard
                          color: "#fff",
                          padding: "5px 10px",
                          fontSize: "14px",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer",
                          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
                          transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                          whiteSpace: "nowrap",
                        }}
                        type="button"
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#0056b3")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor =
                            location.pathname === "/Dashboard"
                              ? "#0056b3"
                              : "#007bff")
                        }
                        onMouseDown={(e) =>
                          (e.target.style.transform = "scale(0.95)")
                        }
                        onMouseUp={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      >
                        By Default Dashboard
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/sales-dashboard"
                        style={{
                          backgroundColor:
                            location.pathname === "/sales-dashboard"
                              ? "#0056b3"
                              : "#007bff",
                          color: "#fff",
                          padding: "5px 10px",
                          fontSize: "14px",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer",
                          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
                          transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                          whiteSpace: "nowrap",
                        }}
                        type="button"
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#0056b3")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor =
                            location.pathname === "/sales-dashboard"
                              ? "#0056b3"
                              : "#007bff")
                        }
                        onMouseDown={(e) =>
                          (e.target.style.transform = "scale(0.95)")
                        }
                        onMouseUp={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      >
                        Sales Dashboard
                      </Link>
                    </div>

                    <div>
                      <Link
                        to="/inventory-dashboard"
                        style={{
                          backgroundColor:
                            location.pathname === "/inventory-dashboard"
                              ? "#0056b3"
                              : "#007bff",
                          color: "#fff",
                          padding: "5px 10px",
                          fontSize: "14px",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer",
                          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
                          transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                          whiteSpace: "nowrap",
                        }}
                        type="button"
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#0056b3")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor =
                            location.pathname === "/inventory-dashboard"
                              ? "#0056b3"
                              : "#007bff")
                        }
                        onMouseDown={(e) =>
                          (e.target.style.transform = "scale(0.95)")
                        }
                        onMouseUp={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      >
                        Inventory Dashboard
                      </Link>
                    </div>

                    {/* New Button */}
                    {/* <div>
                      <Link
                        to='/finance-dashboard'
                        style={{
                          backgroundColor: location.pathname === '/finance-dashboard' ? "#0056b3" : "#007bff",
                          color: "#fff",
                          padding: "5px 10px",
                          fontSize: "14px",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer",
                          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
                          transition: "background-color 0.3s ease, transform 0.2s ease",
                          whiteSpace: 'nowrap'
                        }}
                        type="button"
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = location.pathname === '/finance-dashboard' ? "#0056b3" : "#007bff")}
                        onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
                        onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                      >
                        Finance Dashboard
                      </Link>
                    </div> */}

                    <div>
                      <Link
                        to="/ods-dashboard"
                        style={{
                          backgroundColor:
                            location.pathname === "/ods-dashboard"
                              ? "#0056b3"
                              : "#007bff",
                          color: "#fff",
                          padding: "5px 10px",
                          fontSize: "14px",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer",
                          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
                          transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                          whiteSpace: "nowrap",
                        }}
                        type="button"
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#0056b3")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor =
                            location.pathname === "/ods-dashboard"
                              ? "#0056b3"
                              : "#007bff")
                        }
                        onMouseDown={(e) =>
                          (e.target.style.transform = "scale(0.95)")
                        }
                        onMouseUp={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      >
                        ODS Update
                      </Link>
                    </div>

                    {/* Date Picker (Full Date) */}
                    <div>
                      <Space direction="vertical" size={12}>
                        <DatePicker
                          onChange={onChange}
                          value={selectedDate3}
                          style={{ height: "35px", width: "150px" }}
                          format="DD-MM-YYYY"
                        />
                      </Space>
                    </div>

                    {/* Month Picker */}
                    <div>
                      <Space direction="vertical" size={12}>
                        <DatePicker
                          onChange={onChange2}
                          value={selectedDate}
                          picker="month"
                          disabledDate={disableFutureDates}
                          style={{
                            height: "35px",
                            width: "150px",
                            color: "green",
                          }}
                          format="MM-YYYY"
                        />
                      </Space>
                    </div>

                    {/* Year Picker */}
                    <div>
                      <Space direction="vertical" size={12}>
                        <DatePicker
                          onChange={onChange3}
                          value={selectedDate2}
                          picker="year"
                          disabledDate={disableFutureYears}
                          style={{ height: "35px", width: "150px" }}
                          format="YYYY"
                        />
                      </Space>
                    </div>
                  </div>
                </div>
              </div>

              {/* End Page Header */}
              {/*Row*/}

              {loading ? (
                <div style={loaderStyles.overlay}>
                  <div style={loaderStyles.loaderContainer}>
                    <div style={loaderStyles.dot}></div>
                    <div
                      style={{ ...loaderStyles.dot, animationDelay: "0.2s" }}
                    ></div>
                    <div
                      style={{ ...loaderStyles.dot, animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div className="row row-sm">
                  <div className="col-sm-12 col-lg-12 col-xl-8">
                    {/*Row*/}

                    <div className="row row-sm">
                      <div className="col-lg-12">
                        <div className="card custom-card mg-b-20">
                          <div className="card-body">
                            <div className="card-header border-bottom-0 pt-0 ps-0 pe-0 ">
                              <div className="row ">
                                <div
                                  className="col-sm-12 col-md-6 col-lg-6 col-xl-3"
                                  onClick={() =>
                                    navigate("/cheque-ledger", {
                                      state: {
                                        totalCheque: employeeCheque.totalCheque,
                                      },
                                    })
                                  }
                                >
                                  <div
                                    className="card custom-card"
                                    style={{
                                      backgroundColor: "rgb(234 237 247)", // Changed to gray
                                      color: "#4e342e",
                                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                      borderRadius: "8px",
                                      overflow: "hidden",
                                      transition:
                                        "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                    }}
                                    onMouseOver={(e) => {
                                      e.currentTarget.style.transform =
                                        "scale(1.02)";
                                      e.currentTarget.style.boxShadow =
                                        "0 8px 16px rgba(0, 0, 0, 0.3)";
                                      e.currentTarget.style.backgroundColor =
                                        "rgb(234 237 247)";
                                    }}
                                    onMouseOut={(e) => {
                                      e.currentTarget.style.transform =
                                        "scale(1)";
                                      e.currentTarget.style.boxShadow =
                                        "0 4px 8px rgba(0, 0, 0, 0.2)";
                                      e.currentTarget.style.backgroundColor =
                                        "rgb(234 237 247)";
                                    }}
                                  >
                                    <div className="card-body">
                                      <div className="card-item">
                                        <div
                                          className="card-item-icon card-icon"
                                          style={{
                                            textAlign: "center",
                                            marginBottom: "15px",
                                          }}
                                        >
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24} // Reduced the icon size
                                            viewBox="0 0 24 24"
                                            width={24} // Reduced the icon size
                                            style={{ fill: "#ad1457" }} // Dark pink icon color
                                          >
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Cheque
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employeeCheque.totalCheque}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                  <Link to="/cheque-ledger">
                                    <div
                                      className="card custom-card"
                                      style={{
                                        backgroundColor: "rgb(234 237 247)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                    >
                                      <div className="card-body">
                                        <div className="card-item">
                                          <div
                                            className="card-item-icon card-icon"
                                            style={{
                                              textAlign: "center",
                                              marginBottom: "15px",
                                            }}
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              height={24}
                                              viewBox="0 0 24 24"
                                              width={24}
                                              fill="#4e342e" // Dark brown icon color
                                            >
                                              <path
                                                d="M0 0h24v24H0V0z"
                                                fill="none"
                                              />
                                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-2.67 0-5.07-1.08-6.79-2.82 1.3-1.72 3.3-2.87 5.57-3.09 1.23-.12 2.38.01 3.42.34 1.61.54 2.82 1.92 3.06 3.59C17.85 18.99 15.35 20 12 20zm0-13c-1.94 0-3.5 1.56-3.5 3.5s1.56 3.5 3.5 3.5 3.5-1.56 3.5-3.5-1.56-3.5-3.5-3.5zm0 5c-1.38 0-2.5-1.12-2.5-2.5S10.62 8 12 8s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                          </div>
                                          <div className="card-item-title mb-2">
                                            <label className="main-content-label tx-13 font-weight-bold mb-1">
                                              Received Cheque
                                            </label>
                                          </div>
                                          <div className="card-item-body">
                                            <div className="card-item-stat">
                                              <h4 className="font-weight-light">
                                                {
                                                  employeeCheque.totalReceivedCheque
                                                }
                                              </h4>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                                  <Link to="/cheque-ledger">
                                    <div
                                      className="card custom-card"
                                      style={{
                                        backgroundColor: "rgb(234 237 247)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                    >
                                      <div className="card-body">
                                        <div className="card-item">
                                          <div
                                            className="card-item-icon card-icon"
                                            style={{
                                              textAlign: "center",
                                              marginBottom: "15px",
                                            }}
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              height={24}
                                              viewBox="0 0 24 24"
                                              width={24}
                                              fill="#689f38" // Dark green icon color
                                            >
                                              <path
                                                d="M0 0h24v24H0V0z"
                                                fill="none"
                                              />
                                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.87-10.13c-.16 0-.31.01-.46.03-.09-.11-.2-.2-.3-.3 1.19-1.54 1.9-3.47 1.9-5.57 0-.41-.04-.82-.11-1.22.32-.13.63-.23.97-.3.35-.07.72-.11 1.09-.11s.74.04 1.09.11c.34.07.65.17.97.3-.07.4-.11.81-.11 1.22 0 2.1.71 4.03 1.9 5.57-.1.1-.21.19-.3.3-.15-.02-.3-.03-.46-.03-1.26 0-2.52.24-3.69.71-.46-.87-1.17-1.58-2.04-2.04.47-1.17.71-2.43.71-3.69 0-.82-.13-1.63-.37-2.4.86-.48 1.85-.77 2.91-.77 1.06 0 2.05.29 2.91.77-.24.77-.37 1.58-.37 2.4 0 1.26.24 2.52.71 3.69-.87.46-1.58 1.17-2.04 2.04-1.17-.47-2.43-.71-3.69-.71z" />
                                            </svg>
                                          </div>
                                          <div className="card-item-title  mb-2">
                                            <label className="main-content-label tx-13 font-weight-bold mb-1">
                                              Deposited Cheque
                                            </label>
                                          </div>
                                          <div className="card-item-body">
                                            <div className="card-item-stat">
                                              <h4 className="font-weight-light">
                                                {
                                                  employeeCheque.totalDepositedCheque
                                                }
                                              </h4>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                                  <Link to="/cheque-ledger">
                                    <div
                                      className="card custom-card"
                                      style={{
                                        backgroundColor: "rgb(234 237 247)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                    >
                                      <div className="card-body">
                                        <div className="card-item">
                                          <div className="card-item-icon card-icon">
                                            <svg
                                              className="text-primary"
                                              xmlns="http://www.w3.org/2000/svg"
                                              height={24}
                                              viewBox="0 0 24 24"
                                              width={24}
                                              fill="#827717" // Dark green icon color
                                            >
                                              <path
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                              />
                                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM9 9h6v2H9V9zm0 4h6v2H9v-2z" />
                                            </svg>
                                          </div>
                                          <div className="card-item-title mb-2">
                                            <label className="main-content-label tx-13 font-weight-bold mb-1">
                                              Deleted Cheque
                                            </label>
                                          </div>
                                          <div className="card-item-body">
                                            <div className="card-item-stat">
                                              <h4 className="font-weight-light">
                                                {
                                                  employeeCheque.totalDeletedCheque
                                                }
                                              </h4>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                                  <Link to="/cheque-ledger">
                                    <div
                                      className="card custom-card"
                                      style={{
                                        backgroundColor: "rgb(234 237 247)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                    >
                                      <div className="card-body">
                                        <div className="card-item">
                                          <div className="card-item-icon card-icon">
                                            <svg
                                              className="text-primary"
                                              xmlns="http://www.w3.org/2000/svg"
                                              height={24}
                                              viewBox="0 0 24 24"
                                              width={24}
                                              fill="#827717" // Dark green icon color
                                            >
                                              <path
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                              />
                                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM9 9h6v2H9V9zm0 4h6v2H9v-2z" />
                                            </svg>
                                          </div>
                                          <div className="card-item-title mb-2">
                                            <label className="main-content-label tx-13 font-weight-bold mb-1">
                                              Re-Deposited Cheque
                                            </label>
                                          </div>
                                          <div className="card-item-body">
                                            <div className="card-item-stat">
                                              <h4 className="font-weight-light">
                                                {
                                                  employeeCheque.totalReDepositedCheque
                                                }
                                              </h4>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                                  <Link to="/cheque-ledger">
                                    <div
                                      className="card custom-card"
                                      style={{
                                        backgroundColor: "rgb(234 237 247)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                    >
                                      <div className="card-body">
                                        <div className="card-item">
                                          <div className="card-item-icon card-icon">
                                            <svg
                                              className="text-primary"
                                              xmlns="http://www.w3.org/2000/svg"
                                              height={24}
                                              viewBox="0 0 24 24"
                                              width={24}
                                              fill="#827717" // Dark green icon color
                                            >
                                              <path
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                              />
                                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM9 9h6v2H9V9zm0 4h6v2H9v-2z" />
                                            </svg>
                                          </div>
                                          <div className="card-item-title mb-2">
                                            <label className="main-content-label tx-13 font-weight-bold mb-1">
                                              Hold Cheque
                                            </label>
                                          </div>
                                          <div className="card-item-body">
                                            <div className="card-item-stat">
                                              <h4 className="font-weight-light">
                                                {
                                                  employeeCheque.totalReceivedHoldCheque
                                                }
                                              </h4>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                                  <Link to="/cheque-ledger">
                                    <div
                                      className="card custom-card"
                                      style={{
                                        backgroundColor: "rgb(234 237 247)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                    >
                                      <div className="card-body">
                                        <div className="card-item">
                                          <div className="card-item-icon card-icon">
                                            <svg
                                              className="text-primary"
                                              xmlns="http://www.w3.org/2000/svg"
                                              height={24}
                                              viewBox="0 0 24 24"
                                              width={24}
                                              fill="#827717" // Dark green icon color
                                            >
                                              <path
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                              />
                                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM9 9h6v2H9V9zm0 4h6v2H9v-2z" />
                                            </svg>
                                          </div>
                                          <div className="card-item-title mb-2">
                                            <label className="main-content-label tx-13 font-weight-bold mb-1">
                                              Un-Hold Cheque
                                            </label>
                                          </div>
                                          <div className="card-item-body">
                                            <div className="card-item-stat">
                                              <h4 className="font-weight-light">
                                                {
                                                  employeeCheque.totalReceivedUnHoldCheque
                                                }
                                              </h4>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row row-sm">
                      <div className="col-lg-12">
                        <div className="card custom-card mg-b-20">
                          <div className="card-body">
                            <div className="card-header border-bottom-0 pt-0 ps-0 pe-0 ">
                              <div className="row ">
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                  <div
                                    className="card custom-card"
                                    style={{
                                      backgroundColor: "rgb(234 237 247)", // Changed to gray
                                      color: "#4e342e",
                                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                      borderRadius: "8px",
                                      overflow: "hidden",
                                      transition:
                                        "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                    }}
                                    onMouseOver={(e) => {
                                      e.currentTarget.style.transform =
                                        "scale(1.02)";
                                      e.currentTarget.style.boxShadow =
                                        "0 8px 16px rgba(0, 0, 0, 0.3)";
                                      e.currentTarget.style.backgroundColor =
                                        "rgb(234 237 247)";
                                    }}
                                    onMouseOut={(e) => {
                                      e.currentTarget.style.transform =
                                        "scale(1)";
                                      e.currentTarget.style.boxShadow =
                                        "0 4px 8px rgba(0, 0, 0, 0.2)";
                                      e.currentTarget.style.backgroundColor =
                                        "rgb(234 237 247)";
                                    }}
                                  >
                                    <div className="card-body">
                                      <div className="card-item">
                                        <div
                                          className="card-item-icon card-icon"
                                          style={{
                                            textAlign: "center",
                                            marginBottom: "15px",
                                          }}
                                        >
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24} // Reduced the icon size
                                            viewBox="0 0 24 24"
                                            width={24} // Reduced the icon size
                                            style={{ fill: "#ad1457" }} // Dark pink icon color
                                          >
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Candidates
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalCanditate}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                  <div
                                    className="card custom-card"
                                    style={{
                                      backgroundColor: "rgb(234 237 247)", // Changed to gray
                                      color: "#4e342e",
                                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                      borderRadius: "8px",
                                      overflow: "hidden",
                                      transition:
                                        "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                    }}
                                    onMouseOver={(e) => {
                                      e.currentTarget.style.transform =
                                        "scale(1.02)";
                                      e.currentTarget.style.boxShadow =
                                        "0 8px 16px rgba(0, 0, 0, 0.3)";
                                      e.currentTarget.style.backgroundColor =
                                        "rgb(234 237 247)";
                                    }}
                                    onMouseOut={(e) => {
                                      e.currentTarget.style.transform =
                                        "scale(1)";
                                      e.currentTarget.style.boxShadow =
                                        "0 4px 8px rgba(0, 0, 0, 0.2)";
                                      e.currentTarget.style.backgroundColor =
                                        "rgb(234 237 247)";
                                    }}
                                  >
                                    <div className="card-body">
                                      <div className="card-item">
                                        <div
                                          className="card-item-icon card-icon"
                                          style={{
                                            textAlign: "center",
                                            marginBottom: "15px",
                                          }}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                            fill="#4e342e" // Dark brown icon color
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-2.67 0-5.07-1.08-6.79-2.82 1.3-1.72 3.3-2.87 5.57-3.09 1.23-.12 2.38.01 3.42.34 1.61.54 2.82 1.92 3.06 3.59C17.85 18.99 15.35 20 12 20zm0-13c-1.94 0-3.5 1.56-3.5 3.5s1.56 3.5 3.5 3.5 3.5-1.56 3.5-3.5-1.56-3.5-3.5-3.5zm0 5c-1.38 0-2.5-1.12-2.5-2.5S10.62 8 12 8s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Staff
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalEmployeeCount}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                                  <div
                                    className="card custom-card"
                                    style={{
                                      backgroundColor: "rgb(234 237 247)", // Changed to gray
                                      color: "#4e342e",
                                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                      borderRadius: "8px",
                                      overflow: "hidden",
                                      transition:
                                        "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                    }}
                                    onMouseOver={(e) => {
                                      e.currentTarget.style.transform =
                                        "scale(1.02)";
                                      e.currentTarget.style.boxShadow =
                                        "0 8px 16px rgba(0, 0, 0, 0.3)";
                                      e.currentTarget.style.backgroundColor =
                                        "rgb(234 237 247)";
                                    }}
                                    onMouseOut={(e) => {
                                      e.currentTarget.style.transform =
                                        "scale(1)";
                                      e.currentTarget.style.boxShadow =
                                        "0 4px 8px rgba(0, 0, 0, 0.2)";
                                      e.currentTarget.style.backgroundColor =
                                        "rgb(234 237 247)";
                                    }}
                                  >
                                    <div className="card-body">
                                      <div className="card-item">
                                        <div
                                          className="card-item-icon card-icon"
                                          style={{
                                            textAlign: "center",
                                            marginBottom: "15px",
                                          }}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                            fill="#689f38" // Dark green icon color
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.87-10.13c-.16 0-.31.01-.46.03-.09-.11-.2-.2-.3-.3 1.19-1.54 1.9-3.47 1.9-5.57 0-.41-.04-.82-.11-1.22.32-.13.63-.23.97-.3.35-.07.72-.11 1.09-.11s.74.04 1.09.11c.34.07.65.17.97.3-.07.4-.11.81-.11 1.22 0 2.1.71 4.03 1.9 5.57-.1.1-.21.19-.3.3-.15-.02-.3-.03-.46-.03-1.26 0-2.52.24-3.69.71-.46-.87-1.17-1.58-2.04-2.04.47-1.17.71-2.43.71-3.69 0-.82-.13-1.63-.37-2.4.86-.48 1.85-.77 2.91-.77 1.06 0 2.05.29 2.91.77-.24.77-.37 1.58-.37 2.4 0 1.26.24 2.52.71 3.69-.87.46-1.58 1.17-2.04 2.04-1.17-.47-2.43-.71-3.69-.71z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title  mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Advisors
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalAdvisor}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                                  <div
                                    className="card custom-card"
                                    style={{
                                      backgroundColor: "rgb(234 237 247)", // Changed to gray
                                      color: "#4e342e",
                                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                      borderRadius: "8px",
                                      overflow: "hidden",
                                      transition:
                                        "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                    }}
                                    onMouseOver={(e) => {
                                      e.currentTarget.style.transform =
                                        "scale(1.02)";
                                      e.currentTarget.style.boxShadow =
                                        "0 8px 16px rgba(0, 0, 0, 0.3)";
                                      e.currentTarget.style.backgroundColor =
                                        "rgb(234 237 247)";
                                    }}
                                    onMouseOut={(e) => {
                                      e.currentTarget.style.transform =
                                        "scale(1)";
                                      e.currentTarget.style.boxShadow =
                                        "0 4px 8px rgba(0, 0, 0, 0.2)";
                                      e.currentTarget.style.backgroundColor =
                                        "rgb(234 237 247)";
                                    }}
                                  >
                                    <div className="card-body">
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                            fill="#827717" // Dark green icon color
                                          >
                                            <path
                                              d="M0 0h24v24H0z"
                                              fill="none"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM9 9h6v2H9V9zm0 4h6v2H9v-2z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Admins
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalAdmin}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-1">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(234 237 247)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Vendors
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalVendors}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-1">
                                  <div className="card custom-card  bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(234 237 247)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Vendors Category
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalVendorCategory}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3 mt-1">
                                  <div className="card custom-card  bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(234 237 247)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title  mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Gift
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalGift}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-1">
                                  <div className="card custom-card  bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(234 237 247)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(234 237 247)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Other
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              00
                                            </h4>
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

                    {/*End row*/}

                    {/*row*/}
                    <div className="row row-sm">
                      <div className="col-lg-12">
                        <div className="card custom-card mg-b-20">
                          <div className="card-body">
                            <div className="card-header border-bottom-0 pt-0 ps-0 pe-0 ">
                              <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(205 255 211)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Lands
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalLocation}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(205 255 211)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Projects
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalProject}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                                  <div className="card custom-card  bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(205 255 211)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title  mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Schemes
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalScheme}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                  <div className="card custom-card  bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(205 255 211)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Lucky Draw
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.luckyDrawCount}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(205 255 211)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Plot
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalplot}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-3">
                                  <div className="card custom-card  bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(205 255 211)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Farmhouse
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalFarmhouse}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3 mt-3">
                                  <div className="card custom-card  bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(205 255 211)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title  mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Shop
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalShop}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-3">
                                  <div className="card custom-card  bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(205 255 211)",
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Users
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.userCount}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(205 255 211)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Applicant
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalApplicant}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(205 255 211)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title  mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Allocate
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalCustomer}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(205 255 211)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title  mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Not Allocate
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.notAllocated}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(205 255 211)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(205 255 211)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Customer
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalCustomer}
                                            </h4>
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
                      {/* col end */}
                    </div>

                    {/* Row end */}
                    {/*row*/}
                    <div className="row row-sm">
                      <div className="col-lg-12">
                        <div className="card custom-card mg-b-20">
                          <div className="card-body">
                            <div className="card-header border-bottom-0 pt-0 ps-0 pe-0 ">
                              <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(212 234 249)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Welcome Letter
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalWelcomeLetter}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                  <div className="card custom-card  bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(212 234 249)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Allotment
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalAllotment}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                  <div className="card custom-card  bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(212 234 249)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Demand
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalDemandLetter}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(212 234 249)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title  mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            NOC
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalNocOrder}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(212 234 249)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title  mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Refund
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalRegisters}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(212 234 249)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Payment Remainder
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalPaymenReminder}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(212 234 249)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Notice
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              {employee.totalNoticeLetter}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(212 234 249)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Amount
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4
                                              className="font-weight-light"
                                              style={{
                                                color: "green",
                                              }}
                                            >
                                              Rs. {employee.totalAmount}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(212 234 249)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Received
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4
                                              className="font-weight-light"
                                              style={{
                                                color: "blue",
                                              }}
                                            >
                                              Rs. {employee.totalPayment}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(212 234 249)",
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(212 234 249)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Total Due
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4
                                              className="font-weight-light"
                                              style={{
                                                color: "red",
                                              }}
                                            >
                                              Rs.{employee.dueAmount}
                                            </h4>
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
                      {/* col end */}
                    </div>

                    <div className="row row-sm">
                      <div className="col-lg-12">
                        <div className="card custom-card mg-b-20">
                          <div className="card-body">
                            <div className="card-header border-bottom-0 pt-0 ps-0 pe-0 ">
                              <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(254 249 188)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(254 249 188)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(254 249 188)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Refund Request
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              Rs. 000
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                  <div className="card custom-card  bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(254 249 188)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(254 249 188)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(254 249 188)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Refund Value
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              Rs. 000
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(254 249 188)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(254 249 188)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(254 249 188)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <path
                                              d="M0 0h24v24H0V0z"
                                              fill="none"
                                            />
                                            <path
                                              d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                                              opacity=".3"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                          </svg>
                                        </div>
                                        <div className="card-item-title  mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Refund Cancelled
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              Rs. 000
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(254 249 188)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(254 249 188)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(254 249 188)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Refund Amount
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              Rs. 000
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(254 249 188)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(254 249 188)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(254 249 188)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Refund FF
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              Rs. 000
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3">
                                  <div className="card custom-card bg-light mb-0">
                                    <div
                                      className="card-body"
                                      style={{
                                        backgroundColor: "rgb(254 249 188)", // Changed to gray
                                        color: "#4e342e",
                                        boxShadow:
                                          "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        transition:
                                          "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
                                      }}
                                      onMouseOver={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1.02)";
                                        e.currentTarget.style.boxShadow =
                                          "0 8px 16px rgba(0, 0, 0, 0.3)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(254 249 188)";
                                      }}
                                      onMouseOut={(e) => {
                                        e.currentTarget.style.transform =
                                          "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                          "0 4px 8px rgba(0, 0, 0, 0.2)";
                                        e.currentTarget.style.backgroundColor =
                                          "rgb(254 249 188)";
                                      }}
                                    >
                                      <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                          <svg
                                            className="text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            height={24}
                                            viewBox="0 0 24 24"
                                            width={24}
                                          >
                                            <g>
                                              <rect
                                                height={14}
                                                opacity=".3"
                                                width={14}
                                                x={5}
                                                y={5}
                                              />
                                              <g>
                                                <rect
                                                  fill="none"
                                                  height={24}
                                                  width={24}
                                                />
                                                <g>
                                                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                  <rect
                                                    height={5}
                                                    width={2}
                                                    x={7}
                                                    y={12}
                                                  />
                                                  <rect
                                                    height={10}
                                                    width={2}
                                                    x={15}
                                                    y={7}
                                                  />
                                                  <rect
                                                    height={3}
                                                    width={2}
                                                    x={11}
                                                    y={14}
                                                  />
                                                  <rect
                                                    height={2}
                                                    width={2}
                                                    x={11}
                                                    y={10}
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                          <label className="main-content-label tx-13 font-weight-bold mb-1">
                                            Refund Pending
                                          </label>
                                        </div>
                                        <div className="card-item-body">
                                          <div className="card-item-stat">
                                            <h4 className="font-weight-light">
                                              Rs. 000
                                            </h4>
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
                      {/* col end */}
                    </div>

                    <div className="row row-sm">
                      <div className="col-lg-12">
                        <div className="card custom-card">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table
                                style={{
                                  margin: "auto",
                                  borderCollapse: "collapse",
                                  width: "100%",
                                  fontFamily: "Arial, sans-serif",
                                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                  borderRadius: "8px",
                                }}
                              >
                                <thead
                                  style={{
                                    backgroundColor: "blue",
                                    color: "white",
                                  }}
                                >
                                  <tr>
                                    <th
                                      style={{
                                        padding: "15px",
                                        borderRight: "1px solid #ddd",
                                      }}
                                    >
                                      Team{" "}
                                    </th>
                                    <th
                                      style={{
                                        padding: "15px",
                                        borderRight: "1px solid #ddd",
                                      }}
                                    >
                                      Team Managers
                                    </th>
                                    <th
                                      style={{
                                        padding: "15px",
                                        borderRight: "1px solid #ddd",
                                      }}
                                    >
                                      Target
                                    </th>
                                    <th
                                      style={{
                                        padding: "15px",
                                        borderRight: "1px solid #ddd",
                                      }}
                                    >
                                      Earned Points
                                    </th>
                                    <th style={{ padding: "15px" }}>Rank</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr style={{ backgroundColor: "#f2f2f2" }}>
                                    <td
                                      style={{
                                        padding: "10px",
                                        borderBottom: "1px solid #ddd",
                                        borderRight: "1px solid #ddd",
                                      }}
                                    >
                                      Team A<br />
                                      Team A<br />
                                      Team A<br />
                                      Team B<br />
                                      Team B<br />
                                      Team B
                                    </td>
                                    <td
                                      style={{
                                        padding: "10px",
                                        borderBottom: "1px solid #ddd",
                                        borderRight: "1px solid #ddd",
                                      }}
                                    >
                                      Amit
                                      <br />
                                      Rakash
                                      <br />
                                      Rohan
                                      <br />
                                      Rajiv
                                      <br />
                                      John
                                      <br />
                                      Smith
                                    </td>
                                    <td
                                      style={{
                                        padding: "10px",
                                        borderBottom: "1px solid #ddd",
                                        borderRight: "1px solid #ddd",
                                      }}
                                    >
                                      100
                                      <br />
                                      12
                                      <br />
                                      15
                                      <br />
                                      18
                                      <br />
                                      80
                                      <br />
                                      45
                                    </td>
                                    <td
                                      style={{
                                        padding: "10px",
                                        borderBottom: "1px solid #ddd",
                                        borderRight: "1px solid #ddd",
                                      }}
                                    >
                                      7<br />
                                      1.5
                                      <br />
                                      2.6
                                      <br />
                                      3.1
                                      <br />
                                      5.3
                                      <br />
                                      9.2
                                    </td>
                                    <td
                                      style={{
                                        padding: "10px",
                                        borderBottom: "1px solid #ddd",
                                      }}
                                    >
                                      1<br />
                                      3<br />
                                      4<br />
                                      5<br />
                                      2<br />6
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* End Row */}
                  </div>
                  {/* col end */}
                  <div className="col-sm-12 col-lg-12 col-xl-4 mt-xl-0">
                    <div className="card custom-card card-dashboard-calendar pb-0">
                      <label className="main-content-label mb-2 pt-1">
                        Webkype Updates
                      </label>
                      <span className="d-block tx-12 mb-2 text-muted">
                        What's new today in Webkype
                      </span>
                      <table className="table table-hover m-b-0 transcations mt-2">
                        <tbody>
                          {users.map((reminder, index) => (
                            <tr key={index}>
                              <td className="wd-5p">
                                <div className="main-img-user avatar-md">
                                  <img
                                    alt="avatar"
                                    className="rounded-circle me-3"
                                    src={reminder.employeeDetails.profilePhoto}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-middle ms-3">
                                  <div className="d-inline-block">
                                    <h6 className="mb-1">
                                      {reminder.employeeDetails.fullName}
                                    </h6>
                                    <p className="mb-0 tx-13 text-muted">
                                      {reminder.message}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="text-end">
                                <div className="d-inline-block">
                                  <h6 className="mb-2 tx-0">
                                    Birthday
                                    <i
                                      className="fas fa-birthday-cake ms-2 text-success m-l-10"
                                      style={{ fontSize: "1rem" }}
                                    ></i>
                                  </h6>
                                  <p className="mb-0 tx-11 text-muted">
                                    {reminder.employeeDetails.date}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          ))}

                          {users3.map((announcement, index) => (
                            <tr key={index}>
                              <td className="wd-5p">
                                <div className="main-img-user avatar-md">
                                  <img
                                    alt="avatar"
                                    className="rounded-circle me-3"
                                    src={
                                      announcement.banner ||
                                      "https://amrealty.webkype.com/assets/img/brand/logo.png"
                                    }
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-middle ms-3">
                                  <div className="d-inline-block">
                                    <h6 className="mb-1">
                                      {announcement.title}
                                    </h6>
                                    <p className="mb-0 tx-13 text-muted">
                                      {announcement.description}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="text-end">
                                <div className="d-inline-block">
                                  <h6
                                    className="mb-2 tx-0"
                                    style={{ whiteSpace: "nowrap" }}
                                  >
                                    <span style={{ fontSize: "0.875rem" }}>
                                      Announcement
                                    </span>
                                    <i
                                      className="fas fa-bell ms-2 text-primary"
                                      style={{ fontSize: "0.875rem" }}
                                    ></i>
                                  </h6>

                                  <div
                                    className="mb-0 tx-11 text-muted"
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    <span>{announcement.noticeDate}</span>
                                    <span>{announcement.noticeTime}</span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}

                          {users2.map((call, index) => (
                            <tr key={index}>
                              {call.type === "meetingUpdate" && (
                                <>
                                  <td className="wd-5p">
                                    <div className="main-img-user avatar-md">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle me-3"
                                        src={
                                          call &&
                                          call.creatorId &&
                                          `${call.creatorId.profilePhoto}`
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-middle ms-3">
                                      <div className="d-inline-block">
                                        <h6 className="mb-1">
                                          {" "}
                                          {call &&
                                            call.creatorId &&
                                            `${call.creatorId.fullName}`}
                                        </h6>
                                        <p className="mb-0 tx-13 text-muted">
                                          {call.lastCallSummary}
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="text-end">
                                    <div className="d-inline-block">
                                      <h6 className="mb-2 tx-0">
                                        Meeting
                                        <i
                                          className="fas fa-users ms-2 text-primary"
                                          style={{ fontSize: "0.875rem" }}
                                        ></i>
                                      </h6>
                                      <div
                                        className="mb-0 tx-11 text-muted"
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        <span>{call.meetingDate}</span>
                                        <span>{call.meetingTime}</span>
                                      </div>
                                    </div>
                                  </td>
                                </>
                              )}

                              {call.type === "callUpdate" && (
                                <>
                                  <td className="wd-5p">
                                    <div className="main-img-user avatar-md">
                                      <img
                                        alt="avatar"
                                        className="rounded-circle me-3"
                                        src={
                                          call &&
                                          call.creatorId &&
                                          `${call.creatorId.profilePhoto}`
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex align-middle ms-3">
                                      <div className="d-inline-block">
                                        <h6 className="mb-1">
                                          {" "}
                                          {call &&
                                            call.creatorId &&
                                            `${call.creatorId.fullName}`}
                                        </h6>
                                        <p className="mb-0 tx-13 text-muted">
                                          {call.lastCallSummary}
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="text-end">
                                    <div className="d-inline-block">
                                      <h6 className="mb-2 tx-0">
                                        Call
                                        <i
                                          className="fas fa-phone-alt ms-2 text-primary"
                                          style={{ fontSize: "0.875rem" }}
                                        ></i>
                                      </h6>
                                      <div
                                        className="mb-0 tx-11 text-muted"
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        <span>{call.callBackDate}</span>
                                        <span>{call.callBackTime}</span>
                                      </div>
                                    </div>
                                  </td>
                                </>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="card custom-card card-dashboard-calendar pb-0">
                      <label className="main-content-label mb-2 pt-1">
                        Webkype Updates( Birthday)
                      </label>
                      {/* <span className="d-block tx-12 mb-2 text-muted">
                        Birthday
                      </span> */}
                      <table className="table table-hover m-b-0 transcations mt-2">
                        <tbody>
                          {usersBath.map((reminder, index) => (
                            <tr key={index}>
                              <td className="wd-5p">
                                <div className="main-img-user avatar-md">
                                  <img
                                    alt="avatar"
                                    className="rounded-circle me-3"
                                    src={
                                      "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                    }
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-middle ms-3">
                                  <div className="d-inline-block">
                                    <h6 className="mb-1">
                                      {reminder.fullName}
                                    </h6>
                                    <p className="mb-0 tx-13 text-muted">
                                      Ticket Id: {reminder.ticketId || "N/A"}
                                    </p>
                                    <p className="mb-0 tx-13 text-muted">
                                      Email Id:{" "}
                                      {reminder.applicantEmail || "N/A"}
                                    </p>
                                    <p className="mb-0 tx-13 text-muted">
                                      Mobile No:{" "}
                                      {reminder.applicantMobile || "N/A"}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="text-end">
                                <div className="d-inline-block">
                                  <h6 className="mb-2 tx-0">
                                    Birthday
                                    <span
                                      style={{
                                        fontSize: "1rem",
                                        marginLeft: "10px",
                                      }}
                                    >
                                      🎂
                                    </span>
                                  </h6>
                                  <p className="mb-0 tx-11 text-muted">
                                    {reminder.applicantDOB}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="card custom-card card-dashboard-calendar pb-0">
                      <label className="main-content-label mb-2 pt-1">
                        Webkype Updates(Anniversary)
                      </label>
                      {/* <span className="d-block tx-12 mb-2 text-muted">
                        Anniversary
                      </span> */}
                      <table className="table table-hover m-b-0 transcations mt-2">
                        <tbody>
                          {usersAnive.map((reminder, index) => (
                            <tr key={index}>
                              <td className="wd-5p">
                                <div className="main-img-user avatar-md">
                                  <img
                                    alt=""
                                    className="rounded-circle me-3"
                                    src={
                                      reminder.applicantImage ||
                                      "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                    }
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-middle ms-3">
                                  <div className="d-inline-block">
                                    <h6 className="mb-1">
                                      {reminder.fullName}
                                    </h6>
                                    <p className="mb-0 tx-13 text-muted">
                                      Ticket Id: {reminder.ticketId || ""}
                                    </p>
                                    <p className="mb-0 tx-13 text-muted">
                                      Email Id: {reminder.applicantEmail || ""}
                                    </p>
                                    <p className="mb-0 tx-13 text-muted">
                                      Mobile No:{" "}
                                      {reminder.applicantMobile || ""}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="text-end">
                                <div className="d-inline-block">
                                  <h6 className="mb-2 tx-0">
                                    Anniversary
                                    <i
                                      className="fas fa-birthday-cake ms-2 text-success m-l-10"
                                      style={{ fontSize: "1rem" }}
                                    ></i>
                                  </h6>
                                  <p className="mb-0 tx-11 text-muted">
                                    {reminder.applicantAnniversary || ""}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* col end */}
                </div>
              )}

              {/* Row end */}
            </div>
          </div>
        </div>
        {/* End Main Content*/}
        {/* Main Footer*/}

        <Toaster position="down-right-40px" />

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
      </div>
    </>
  );
};

export default Dashboard;
