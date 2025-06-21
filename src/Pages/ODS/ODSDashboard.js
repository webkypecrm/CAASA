import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DatePicker, Space } from "antd";
import TopHeader from "../../Components/TopHeader";
import Prince from "../../Components/Prince";
import moment from "moment";
import { toast } from "react-toastify";

const ODSDashboard = () => {
  const [loading, setLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate3, setSelectedDate3] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [employee, setEmployee] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [filterByObj, setFilterByObj] = useState({
    search: "",
    from: "",
    to: "",
    status: "Pending",
  });
  const [userDetails, setUserDetails] = useState({});
  const [statusFormLoading, setStatusFormLoading] = useState(false);
  const [userDetailsForStatus, setUserDetailsForStatus] = useState({});

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [odsList, setODSList] = useState([]);
  const [listCount, setListCount] = useState([]);
  const [isModalChequeOpens, setIsModalChequeOpens] = useState(false);
  const [isModalStatusActionOpens, setIsModalStatusActionOpens] =
    useState(false);

  const intialStatusForm = {
    id: "",
    status: "",
    remark: "",
  };
  const [statusForm, setStatusForm] = useState(intialStatusForm);

  console.log("listCount...", listCount);

  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem("Token");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('Token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

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

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    // Format the start and end dates if they are not null
    const formatDate = (date) => {
      if (date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}/${month}/${day}`;
      }
      return "";
    };

    // Update the filterByObj state with the formatted date range
    const formattedStartDate = formatDate(start);
    const formattedEndDate = formatDate(end);

    setFilterByObj((prevState) => ({
      ...prevState,
      from: `${formattedStartDate}`,
      to: `${formattedEndDate}`,
    }));
  };

  useEffect(() => {
    setStatusForm({
      ...statusForm,
      id: userDetailsForStatus?.id,
    });
  }, [userDetailsForStatus]);

  const OpenChangeStatusModal = (user) => {
    console.log("uer details...", user);
    setUserDetailsForStatus(user);
    setIsModalStatusActionOpens(true);
  };

  // Handle Full Date Picker changes
  const onChange = (date) => {
    setSelectedDate3(date);
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setStatusForm({
      ...statusForm,
      [name]: value,
    });
  };

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFilterByObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle Year Picker changes
  const onChange3 = (date) => {
    setSelectedDate2(date);
  };

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

  const OpenRegistryDetailsModal = (user) => {
    console.log("uer details...", user);
    setUserDetails(user);
    setIsModalChequeOpens(true);
  };

  // Disable future dates
  const disableFutureDates = (current) => {
    return current && current > moment().endOf("month");
  };

  // Disable future years
  const disableFutureYears = (current) => {
    return current && current.year() > moment().year();
  };

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

  const fetchDataFromApi = async () => {
    setLoading(true);
    const pageNumber = currentPage + 1;
    const { to, from, search, status } = filterByObj;
    // const url = `${apiUrl}/user/getAllUser?page=${pageNumber}&limit=${itemsPerPage}&to=${to}&from=${from}&search=${search}&webUser=true`;
    const url = `${apiUrl}/registry/odcList?to=${to}&from=${from}&search=${search}&status=${status}`;

    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${Token}` },
      });

      const data = await response.json();

      if (data.status === "success" && Array.isArray(data.data)) {
        const formattedData = data.data.map((item) => ({
          ...item,
          createdAt: item.createdAt ? formatDateTime(item.createdAt) : "",
        }));
        const listCount = data.formattedCounts;
        setODSList(formattedData);
        setListCount(listCount);
      } else {
        console.error(
          "API response error:",
          data.message || "Data is not an array"
        );
      }
      //   const fetchedLeadCount = data.userCount;
      //   setLeadCount(fetchedLeadCount);
      //   setLeadCounts(data.user);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const changeOdcStatus = async () => {
    setStatusFormLoading(true);
    try {
      const url = `${apiUrl}/registry/changeOdcStaus?id=${statusForm?.id}&status=${statusForm?.status}&remark=${statusForm?.remark}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      const response2 = await response.json();
      setStatusFormLoading(false);

      if (response2.status === "error") {
        throw new Error(response2.message);
      }

      // Open the modal and then close it
      fetchDataFromApi();
      toast.success(response2.message);
      setIsModalStatusActionOpens(false);
      setStatusForm(intialStatusForm);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const CloseRegistryDetailsModal = () => {
    setIsModalChequeOpens(false);
  };
  const CloseStatusChangeModal = () => {
    setIsModalStatusActionOpens(false);
  };

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

  const currentPageData = odsList;

  useEffect(() => {
    fetchDataFromApi();
  }, [currentPage, itemsPerPage, filterByObj]);

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

  console.log("current page data...", currentPageData);

  return (
    <div className="page">
      <TopHeader />
      <Prince />
      <div className="main-content pt-0">
        <div className="main-container container-fluid">
          <div className="inner-body d-flex flex-column">
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
                      onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
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
                      onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
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
                      onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                    >
                      Inventory Dashboard
                    </Link>
                  </div>

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
                      onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
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

            <div className="row">
              <div className="col-lg-12">
                <div className="card custom-card">
                  <div className="card-body py-3">
                    <div className="row">
                      <div className="col-sm-3">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search..."
                          aria-controls="example1"
                          name="search"
                          value={filterByObj.search}
                          onChange={handleInputChange2}
                        />
                      </div>

                      <div className="col-sm-3 form-group">
                        <select
                          className="form-control select2"
                          name="status"
                        //   value={filterByObj.status || "Pending"}
                        //   onChange={handleInputChange2}
                        >
                          <option value="">Select</option>
                          {/* <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option> */}
                        </select>
                      </div>

                      <div className="col-sm-3">
                        <div className="input-group">
                          <div className="input-group-text border-end-0">
                            <i className="fe fe-calendar lh--9 op-6" />
                          </div>
                          <div style={{ flex: "1" }}>
                            <DatePicker
                              // selected={startDate}
                              // onChange={handleChange}
                              // startDate={startDate}
                              // endDate={endDate}
                              selectsRange
                              placeholderText="Select Date Range"
                              dateFormat="dd/MM/yyyy"
                              className="form-control fc-datepicker"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="d-flex col-sm-3 form-group">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="status"
                            value="Pending"
                            id="statusPending"
                            checked={filterByObj.status === "Pending"}
                            onChange={handleInputChange2}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="statusPending"
                            style={{ marginRight: "10px" }}
                          >
                            Pending {`(${listCount?.Pending})`}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="status"
                            value="Approved"
                            id="statusApproved"
                            checked={filterByObj.status === "Approved"}
                            onChange={handleInputChange2}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="statusApproved"
                            style={{ marginRight: "10px" }}
                          >
                            Approved {`(${listCount?.Approved})`}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="status"
                            value="Rejected"
                            id="statusRejected"
                            checked={filterByObj.status === "Rejected"}
                            onChange={handleInputChange2}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="statusRejected"
                          >
                            Rejected {`(${listCount?.Rejected})`}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-sm">
              <div className="col-lg-12">
                <div className="card custom-card">
                  <div className="card-body">
                    <div className="table-responsive">
                      {loading ? (
                        <div style={loaderStyles.overlay}>
                          <div style={loaderStyles.loaderContainer}>
                            <div style={loaderStyles.dot}></div>
                            <div
                              style={{
                                ...loaderStyles.dot,
                                animationDelay: "0.2s",
                              }}
                            ></div>
                            <div
                              style={{
                                ...loaderStyles.dot,
                                animationDelay: "0.4s",
                              }}
                            ></div>
                          </div>
                        </div>
                      ) : (
                        <table className="table table-striped table-bordered mb-0">
                          <thead>
                            <tr>
                              <th>
                                Drafted By{" "}
                                {/* {currentPageData?.map((data) => data.id)} */}
                              </th>
                              <th style={{ whiteSpace: "nowrap" }}>
                                {filterByObj.status === "Pending"
                                  ? "Assigned To"
                                  : filterByObj.status === "Approved"
                                    ? "Approved By"
                                    : "Rejected By"}
                              </th>
                              <th>Client Details</th>
                              <th>ODS Details</th>
                              <th>Amount</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentPageData.map((user) => (
                              <tr>
                                <td>
                                  ODS-Id{": "}
                                  {user?.id}
                                  <br />
                                  {user.applicant.fullName || "N/A"}
                                  <br />
                                  <span style={{ whiteSpace: "nowrap" }}>
                                    On:{" "}
                                    {user.createdAt
                                      ? new Intl.DateTimeFormat("en-US", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                      }).format(new Date(user.createdAt))
                                      : "N/A"}
                                  </span>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn ripple btn-info btn-xs w-50 mb-1"
                                    onClick={() => OpenChangeStatusModal(user)} // Arrow function that passes 'user'
                                    // disabled={leadCounts === true}

                                    style={{
                                      marginTop: "5px",
                                      backgroundColor:
                                        user.status === "Approved"
                                          ? "green"
                                          : user.status === "Rejected"
                                            ? "red"
                                            : "#FED16A",
                                      borderColor:
                                        user.status === "Approved"
                                          ? "green"
                                          : user.status === "Rejected"
                                            ? "#F72C5B"
                                            : "yellow",
                                      color:
                                        user.status === "Approved"
                                          ? "white"
                                          : user.status === "Rejected"
                                            ? "white"
                                            : "black",
                                      width: "30px",
                                    }}
                                  >
                                    {user.status}
                                  </button>
                                  <br />

                                  {filterByObj.status === "Pending"
                                    ? `Assigned To: ${user?.applicant?.approvedByName ||
                                    "Apurva"
                                    }`
                                    : filterByObj.status === "Approved"
                                      ? `Approved By: ${user?.applicant?.approvedByName ||
                                      "Apurva"
                                      }`
                                      : filterByObj.status === "Rejected"
                                        ? `Rejected By: ${user?.applicant?.approvedByName ||
                                        "Apurva"
                                        }`
                                        : null}

                                  <br />
                                  {filterByObj.status !== "Pending" ? (
                                    <span style={{ whiteSpace: "nowrap" }}>
                                      On:{" "}
                                      {user.createdAt
                                        ? new Intl.DateTimeFormat("en-US", {
                                          day: "2-digit",
                                          month: "long",
                                          year: "numeric",
                                          hour: "2-digit",
                                          minute: "2-digit",
                                          hour12: true,
                                        }).format(new Date(user.createdAt))
                                        : "N/A"}
                                    </span>
                                  ) : null}
                                </td>
                                <td>
                                  Name:{" "}
                                  <Link
                                    to={`/Inventory-details/${user.applicant.id}`}
                                  >
                                    {user.applicant.fullName || "N/A"}
                                  </Link>
                                  <br />
                                  Mobile:{" "}
                                  {user?.applicant?.applicantMobile || "N/A"}
                                  <br />
                                  Ticket Id:{" "}
                                  {user?.applicant?.ticketId || "N/A"}
                                  <br />
                                  Id: {user?.applicant?.userId || "N/A"}
                                </td>
                                <td>
                                  {user.totalMonth || "N/A"}
                                  {" Month"}
                                  <br />
                                  <span style={{ whiteSpace: "nowrap" }}>
                                    From:{" "}
                                    {user.camEndDate
                                      ? new Intl.DateTimeFormat("en-US", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                      }).format(new Date(user.camEndDate))
                                      : "N/A"}
                                  </span>
                                  <br />
                                  <span style={{ whiteSpace: "nowrap" }}>
                                    To:{" "}
                                    {user.camStartDate
                                      ? new Intl.DateTimeFormat("en-US", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                      }).format(new Date(user.camStartDate))
                                      : "N/A"}
                                  </span>
                                  <br />
                                  <span style={{ whiteSpace: "nowrap" }}>
                                    Size: {user?.applicant?.size || "N/A"}{" "}
                                    {`${user?.applicant?.schemeType === "Shop"
                                        ? "SQ (FT)"
                                        : "SQ (YD)"
                                      }`}
                                  </span>
                                  <br />
                                  <span style={{ whiteSpace: "nowrap" }}>
                                    Unit No: {user?.applicant?.unitNo || "N/A"}
                                  </span>
                                  <br />
                                  <span style={{ whiteSpace: "nowrap" }}>
                                    Project:{" "}
                                    {user?.applicant?.project?.projectName ||
                                      "N/A"}
                                  </span>
                                  <br />
                                </td>
                                <td>
                                  <span style={{ whiteSpace: "nowrap" }}>
                                    Cam without GST: ₹ {user?.totalCam || "N/A"}
                                  </span>
                                  <br />
                                  <span style={{ whiteSpace: "nowrap" }}>
                                    Cam with GST: ₹ {user?.payableCam || "N/A"}
                                  </span>
                                  <br />

                                  <span style={{ whiteSpace: "nowrap" }}>
                                    Lawyer Fee: ₹ {user?.lawyerFees || "N/A"}
                                  </span>
                                  <br />
                                  <span style={{ whiteSpace: "nowrap" }}>
                                    Cheque Bounce:{" ₹ "}
                                    {user?.chequeBounceCharges || "N/A"}
                                  </span>
                                  <br />
                                  <span style={{ whiteSpace: "nowrap" }}>
                                    Stamp Duty: ₹ {user?.stampDuty || "N/A"}
                                  </span>
                                  <br />
                                  <span style={{ whiteSpace: "nowrap" }}>
                                    Waiver: ₹ {user?.waiverCharges || "N/A"}
                                  </span>
                                  <br />
                                  <span style={{ whiteSpace: "nowrap" }}>
                                    Total Amount: ₹{" "}
                                    {user?.finalNocAmount || "N/A"}
                                  </span>
                                  <br />
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                    onClick={() =>
                                      OpenRegistryDetailsModal(user)
                                    } // Arrow function that passes 'user'
                                    // disabled={leadCounts === true}

                                    style={{
                                      marginTop: "5px",
                                      backgroundColor: "#17a2b8",
                                      borderColor: "#17a2b8",
                                      width: "30px",
                                    }}
                                  >
                                    View Details
                                  </button>
                                  <br />
                                  <button
                                    type="button"
                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                    // onClick={() =>
                                    //   OpenRegistryDetailsModal(user)
                                    // } // Arrow function that passes 'user'
                                    // disabled={leadCounts === true}

                                    style={{
                                      marginTop: "5px",
                                      backgroundColor: "green",
                                      borderColor: "green",
                                      width: "30px",
                                    }}
                                  >
                                    {`Paid: ₹0`}
                                  </button>
                                  <br />
                                  <button
                                    type="button"
                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                    // onClick={() =>
                                    //   OpenRegistryDetailsModal(user)
                                    // } // Arrow function that passes 'user'
                                    // disabled={leadCounts === true}

                                    style={{
                                      marginTop: "5px",
                                      backgroundColor: "#FF748B",
                                      borderColor: "#FF748B",
                                      width: "30px",
                                    }}
                                  >
                                    {`Due: ₹0`}
                                  </button>
                                  <br />
                                  <button
                                    type="button"
                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                    // onClick={() =>
                                    //   OpenRegistryDetailsModal(user)
                                    // } // Arrow function that passes 'user'
                                    // disabled={leadCounts === true}

                                    style={{
                                      marginTop: "5px",
                                      backgroundColor: "#17a2b8",
                                      borderColor: "#17a2b8",
                                      width: "30px",
                                    }}
                                  >
                                    View NOC
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                      <br />

                      {/* {!leadCounts === true && (
                                          <>
                                            <div className="d-flex align-items-center ">
                                              <div>
                                                <select
                                                  id="itemsPerPage"
                                                  className="form-select"
                                                  value={itemsPerPage}
                                                  onChange={handleItemsPerPageChange}
                                                >
                                                  <option value={20}>20</option>
                                                  <option value={50}>50</option>
                                                  <option value={100}>100</option>
                                                  <option value={200}>200</option>
                                                  <option value={500}>500</option>
                                                </select>
                                              </div>
                                            </div>
                                            <div className="pagination d-flex justify-content-center">
                                              <ReactPaginate
                                                previousLabel={"Previous"}
                                                nextLabel={"Next"}
                                                breakLabel={"..."}
                                                breakClassName={"break-me"}
                                                pageCount={Math.ceil(leadCount / itemsPerPage)}
                                                marginPagesDisplayed={2}
                                                pageRangeDisplayed={5}
                                                onPageChange={handlePageClick}
                                                containerClassName={"pagination"}
                                                activeClassName={"active"}
                                                previousLinkClassName={"page-link"}
                                                nextLinkClassName={"page-link"}
                                                disabledClassName={"disabled"}
                                                pageClassName={"page-item"}
                                                pageLinkClassName={"page-link"}
                                              />
                                            </div>
                                          </>
                                        )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CHEUQUE BOUNCE RECEIPT  */}
            <div
              className={`modal ${isModalChequeOpens ? "show" : ""}`}
              style={{
                display: isModalChequeOpens ? "block" : "none",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 9999,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "auto",
              }}
              tabIndex="-1"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered modal-sl"
                role="document"
                style={{ minWidth: "600px", margin: "auto" }}
              >
                <div
                  className="modal-content"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
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
                    <h5 className="modal-title">Registry Details</h5>
                    <button
                      type="button"
                      className="close"
                      aria-label="Close"
                      onClick={CloseRegistryDetailsModal}
                      style={{ outline: "none", cursor: "pointer" }}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div
                    className="modal-body d-flex justify-content-center align-items-center"
                    style={{ padding: "20px", textAlign: "center" }}
                  >
                    <form>
                      <div
                        className="modal-body"
                        style={{
                          padding: "20px",
                          textAlign: "left",
                          maxHeight: "70vh",
                          overflowY: "auto",
                        }}
                      >
                        <div className="  w-100">
                          <p className="tx-14 text-dark mb-0 tx-semibold">
                            {/* {comment.creatorId} drafted, CAM / Maintenance Sheet */}
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Customer Name: {userDetails?.applicant?.fullName}
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Project: {userDetails?.applicant?.projectName}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Unit Number:{" "}
                            {`${userDetails?.applicant?.unitNo} / ${userDetails?.applicant?.schemeType
                              } / ${userDetails?.applicant?.size} (${["plot", "farmhouse"].includes(
                                userDetails?.applicant?.schemeType?.toLowerCase()
                              )
                                ? "SQ YD"
                                : "SQ FT"
                              })`}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Total Cost: Rs.{" "}
                            {Math.floor(userDetails?.applicant?.totalCost)}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Discount: Rs.{" "}
                            {Math.floor(userDetails?.applicant?.discountAmount)}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            <strong>
                              {" "}
                              Final Cost: Rs.{" "}
                              {Math.floor(
                                userDetails?.applicant?.totalCost -
                                userDetails?.applicant?.discountAmount
                              )}
                              { }
                            </strong>
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Received: Rs.{" "}
                            {Math.floor(userDetails?.totolReceived)}
                            { }
                          </p>
                          <p className="mb-0 tx-13">
                            <i className="fe fe-chevrons-right me-1" />
                            Final Due Cost: Rs.{" "}
                            <span style={{ color: "red" }}>
                              {Math.floor(
                                userDetails?.applicant?.totalCost -
                                (userDetails?.applicant?.discountAmount +
                                  userDetails?.totolReceived)
                              )}
                              {""} (To be collected)
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
                            {userDetails?.nameOnRegistry || ""}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Name Change Charges: Rs.{" "}
                            {userDetails?.nameChangeCharges || ""}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Aadhar:{" "}
                            <span className="ms-2">
                              {userDetails?.applicantAadhaarImage ? (
                                <a
                                  href={userDetails.applicantAadhaarImage}
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
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Pan:{" "}
                            <span className="ms-2">
                              {userDetails?.applicantPanImage ? (
                                <a
                                  href={userDetails.applicantPanImage}
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
                            { }
                          </p>
                          -----------------------------------------------------------------------------------------------------
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Cam Start Date:{" "}
                            {
                              // comment?.maintenanceCharges[0]?.camStartDate || ''
                              userDetails?.camStartDate
                                ? new Date(
                                  userDetails?.camStartDate
                                ).toLocaleString("en-US", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })
                                : ""
                            }
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Total Month: {userDetails?.totalMonth || ""}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            CAM End Date:{" "}
                            {userDetails?.camEndDate
                              ? new Date(
                                userDetails?.camEndDate
                              ).toLocaleString("en-US", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })
                              : ""}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Unit Size: {userDetails?.unitSize || ""}{" "}
                            {userDetails?.schemeType === "Shop"
                              ? " SQFT"
                              : " SQ YD"}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            CAM Rate (per{" "}
                            {userDetails?.schemeType === "Shop"
                              ? "SQFT"
                              : "SQ YD"}
                            ): {userDetails?.camRate || ""}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Total CAM Charges:{" "}
                            <strong>
                              {Math.floor(
                                +userDetails?.camRate *
                                +userDetails?.unitSize *
                                +userDetails?.totalMonth
                              ) || ""}{" "}
                            </strong>
                            { }
                          </p>
                          -----------------------------------------------------------------------------------------------------
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Reference Given: {userDetails?.refrenceGiven || ""}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Months Waiver : {userDetails?.waveOffMonth || ""}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Discount in CAM ( Minus) : Rs.{" "}
                            <span
                              style={{
                                color: "red",
                              }}
                            >
                              {Math.floor(userDetails?.discountCam) || ""}
                            </span>
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Payable CAM Without GST :{" "}
                            {userDetails?.totalCam || 0}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Gst : {userDetails?.gst || ""}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Payable CAM With GST : Rs.{" "}
                            {Math.floor(userDetails?.payableCam) || ""}
                            { }
                          </p>
                          -----------------------------------------------------------------------------------------------------
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Cheque Bounce: {userDetails?.chequeBounce || ""}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Cheque Bounce Penalty: Rs.{" "}
                            {Math.floor(userDetails?.chequePenalty) || ""}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Cheque Bounce Charges: Rs.{" "}
                            {Math.floor(userDetails?.chequeBounceCharges) || ""}
                            { }
                          </p>
                          -----------------------------------------------------------------------------------------------------
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Stamp Duty : Rs.{" "}
                            {Math.floor(userDetails?.stampDuty) || ""}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Lawyer Fees : Rs.{" "}
                            {Math.floor(userDetails?.lawyerFees) || ""}
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Interest Amount: Rs.{" "}
                            {Math.floor(userDetails?.intrestAmount) || ""}
                            { }
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
                              {Math.floor(userDetails?.waiverCharges) || ""}
                            </span>
                            { }
                          </p>
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Remark ( Waiver) : {userDetails?.remark || ""}
                            { }
                          </p>
                          -----------------------------------------------------------------------------------------------------
                          <p className="mb-0 tx-13 text-dark">
                            <i className="fe fe-chevrons-right me-1" />
                            Final NOC Payment : Rs.{" "}
                            <strong>
                              {" "}
                              {Math.floor(+userDetails?.finalNocAmount) ||
                                ""}{" "}
                            </strong>
                            { }
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* CHEUQUE BOUNCE RECEIPT  */}

            {/* Change Status  */}
            <div
              className={`modal ${isModalStatusActionOpens ? "show" : ""}`}
              style={{
                display: isModalStatusActionOpens ? "block" : "none",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 9999,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "auto",
              }}
              tabIndex="-1"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered modal-sl"
                role="document"
                style={{ minWidth: "600px", margin: "auto" }}
              >
                <div
                  className="modal-content"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
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
                    <h5 className="modal-title">Status Change</h5>
                    <button
                      type="button"
                      className="close"
                      aria-label="Close"
                      onClick={CloseStatusChangeModal}
                      style={{ outline: "none", cursor: "pointer" }}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div
                    className="modal-body d-flex justify-content-center align-items-center"
                    style={{ padding: "20px", textAlign: "center" }}
                  >
                    <form>
                      <div
                        className="modal-body"
                        style={{
                          // padding: "20px",
                          textAlign: "left",
                          maxHeight: "70vh",
                          overflowY: "auto",
                        }}
                      >
                        <div className="  w-100">
                          <div className="row d-flex justify-content-start align-items-start ">
                            <div className="col-sm-6 form-group">
                              <label className="form-label">
                                Select Status
                              </label>
                              <select
                                className="form-control select2"
                                name="status"
                                value={statusForm.status || ""}
                                onChange={handleChange1}
                              >
                                <option value="">Status</option>
                                {/* <option value="Pending">Pending</option> */}
                                <option value="Approved">Approved</option>
                                <option value="Rejected">Rejected</option>
                              </select>
                            </div>

                            <div className="col-sm-6 form-group">
                              <label className="form-label">Remark</label>
                              <textarea
                                type="text"
                                className="form-control"
                                name="remark"
                                value={statusForm.remark || ""}
                                onChange={handleChange1}
                              ></textarea>
                            </div>

                            <button
                              type="button"
                              className="btn ripple btn-info btn-xs  mb-1"
                              onClick={changeOdcStatus}
                              style={{
                                marginTop: "5px",
                                backgroundColor: "#17a2b8",
                                borderColor: "#17a2b8",
                                width: "100px",
                              }}
                              disabled={statusFormLoading}
                            >
                              {`${statusFormLoading ? "loading..." : "Submit"}`}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Change Status  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ODSDashboard;
