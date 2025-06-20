import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TopHeader from "../../Components/TopHeader";
import Prince from "../../Components/Prince";

const ODSPage = () => {
  const [odsList, setODSList] = useState([]);
  const [leadCount, setLeadCount] = useState(0);
  const [leadCounts, setLeadCounts] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterByObj, setFilterByObj] = useState({
    search: "",
    from: "",
    to: "",
    status: "Pending",
  });
  const [userDetails, setUserDetails] = useState({});
  const [userDetailsForStatus, setUserDetailsForStatus] = useState({});
  const [status, setStatus] = useState("");
  const intialStatusForm = {
    id: "",
    status: "",
    remark: "",
  };
  const [statusForm, setStatusForm] = useState(intialStatusForm);
  const [statusFormLoading, setStatusFormLoading] = useState(false);

  useEffect(() => {
    setStatusForm({
      ...statusForm,
      id: userDetailsForStatus?.id,
    });
  }, [userDetailsForStatus]);

  const [isModalChequeOpens, setIsModalChequeOpens] = useState(false);
  const [isModalStatusActionOpens, setIsModalStatusActionOpens] =
    useState(false);

  const navigate = useNavigate();
  const Token = localStorage.getItem("Token");
  const apiUrl = process.env.REACT_APP_URL;

  const handleChange = (dates) => {
    if (!dates || !Array.isArray(dates) || dates.length !== 2) {
      // Handle the case where the dates are invalid (null, undefined, or not an array of length 2)
      console.error("Expected an array with two dates but got:", dates);
      return;
    }

    const [start, end] = dates;

    // Only update the state if both start and end dates are valid
    if (start && end) {
      setStartDate(start);
      setEndDate(end);

      const formatDate = (date) => {
        if (date) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          return `${year}/${month}/${day}`;
        }
        return "";
      };

      const formattedStartDate = formatDate(start);
      const formattedEndDate = formatDate(end);

      setFilterByObj((prevState) => ({
        ...prevState,
        from: `${formattedStartDate}`,
        to: `${formattedEndDate}`,
      }));
    }
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
        setODSList(formattedData);
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

  console.log("odsList..", odsList);

  useEffect(() => {
    fetchDataFromApi();
  }, [currentPage, itemsPerPage, filterByObj]);

  const handleApproved = async (id) => {
    try {
      const url = `${apiUrl}/user/userVerifyFromAdmin?userId=${id}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }

      // Open the modal and then close it

      fetchDataFromApi();
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFilterByObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setStatusForm({
      ...statusForm,
      [name]: value,
    });
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

  console.log("statusForm...", statusForm);

  const currentPageData = odsList;

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const OpenRegistryDetailsModal = (user) => {
    console.log("uer details...", user);
    setUserDetails(user);
    setIsModalChequeOpens(true);
  };

  const OpenChangeStatusModal = (user) => {
    console.log("uer details...", user);
    setUserDetailsForStatus(user);
    setIsModalStatusActionOpens(true);
  };

  const CloseRegistryDetailsModal = () => {
    setIsModalChequeOpens(false);
  };
  const CloseStatusChangeModal = () => {
    setIsModalStatusActionOpens(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

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
              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">
                    ODS List ({odsList.length})
                  </h2>
                </div>
              </div>

              {!leadCounts === true && (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card custom-card">
                      <div className="card-body py-3">
                        <div className="row">
                          <div className="col-sm-4">
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

                          <div className="col-sm-4 form-group">
                            <select
                              className="form-control select2"
                              name="status"
                              value={filterByObj.status || "Pending"}
                              onChange={handleInputChange2}
                            >
                              {/* <option value="">Status</option> */}
                              <option value="Pending">Pending</option>
                              <option value="Approved">Approved</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </div>

                          <div className="col-sm-4">
                            <div className="input-group">
                              <div className="input-group-text border-end-0">
                                <i className="fe fe-calendar lh--9 op-6" />
                              </div>
                              <div style={{ flex: "1" }}>
                                <DatePicker
                                  selected={startDate}
                                  onChange={handleChange}
                                  startDate={startDate}
                                  endDate={endDate}
                                  selectsRange
                                  placeholderText="Select Date Range"
                                  dateFormat="dd/MM/yyyy"
                                  className="form-control fc-datepicker"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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
                                  ODS-ID:{" "}
                                  {currentPageData?.map((data) => data.id)}
                                </th>
                                <th style={{ whiteSpace: "nowrap" }}>
                                  Submitted By
                                </th>

                                <th style={{ whiteSpace: "nowrap" }}>
                                  View CAM Details
                                </th>
                                <th style={{ whiteSpace: "nowrap" }}>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentPageData.map((user) => (
                                <tr>
                                  <td>
                                    Applicant Name:{" "}
                                    {user.applicant.fullName || "N/A"}
                                    <br />
                                    Applicant Mobile:{" "}
                                    {user?.applicant?.applicantMobile || "N/A"}
                                    <br />
                                    Applicant Ticket Id:{" "}
                                    {user?.applicant?.ticketId || "N/A"}
                                    <br />
                                    Applicant Client Id:{" "}
                                    {user?.applicant?.userId || "N/A"}
                                    <br />
                                    {/* Email: {user.email || "N/A"}
                                    <br />
                                    phone Number: {user.mobileNumber || "N/A"} */}
                                  </td>
                                  <td>
                                    Submitted By:{" "}
                                    {user.applicant.submittedBy ||
                                      "RICHA BAGHEL 2"}
                                    <br />
                                    Approved By:{" "}
                                    {user?.applicant?.approvedBy || "Apurva"}
                                    <br />
                                    {/* Email: {user.email || "N/A"}
                                    <br />
                                    phone Number: {user.mobileNumber || "N/A"} */}
                                  </td>

                                  <td
                                    style={{
                                      whiteSpace: "nowrap",
                                      // backgroundColor: "#17a2b8",
                                      // borderColor: "#17a2b8",
                                    }}
                                  >
                                    <span style={{ whiteSpace: "nowrap" }}>
                                      Start_D/T:{" "}
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
                                      End_D/T::{" "}
                                      {user.createdAt
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
                                    FinalCost: ₹{user.finalNocAmount}
                                    <br />
                                    <button
                                      type="button"
                                      className="btn ripple btn-info btn-xs w-50 mb-1"
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
                                  </td>
                                  <td style={{ whiteSpace: "nowrap" }}>
                                    <span
                                      className="w-100"
                                      style={{
                                        padding: "10px",
                                        // width: "100px",
                                        borderRadius: "10px",
                                        backgroundColor:
                                          user.status === "Approved"
                                            ? "green"
                                            : user.status === "Rejected"
                                            ? "red"
                                            : "yellow",
                                      }}
                                    >
                                      {" "}
                                      {user.status}
                                    </span>
                                    <br />
                                    <br />
                                    <button
                                      type="button"
                                      className="btn ripple btn-info btn-xs w-100 mb-1"
                                      onClick={() =>
                                        OpenChangeStatusModal(user)
                                      } // Arrow function that passes 'user'
                                      // disabled={leadCounts === true}

                                      style={{
                                        marginTop: "5px",
                                        backgroundColor: "#17a2b8",
                                        borderColor: "#17a2b8",
                                        width: "30px",
                                      }}
                                    >
                                      Change Status
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                        <br />

                        {!leadCounts === true && (
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
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                        {/* {comment.creatorId}, added a */}
                        Cam / Maintance Calculate
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Customer Name: {userDetails?.applicant?.fullName}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Project: {userDetails?.applicant?.projectName}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Unit Number:{" "}
                        {`${userDetails?.applicant?.unitNo} / ${
                          userDetails?.applicant?.schemeType
                        } / ${userDetails?.applicant?.size} (${
                          ["plot", "farmhouse"].includes(
                            userDetails?.applicant?.schemeType?.toLowerCase()
                          )
                            ? "SQ YD"
                            : "SQ FT"
                        })`}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Total Cost: Rs. ₹{userDetails?.applicant?.totalCost}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Discount: Rs. {userDetails?.applicant?.discountAmount}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Received: Rs. {userDetails?.totolReceived}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Final Cost: Rs.{" "}
                        {userDetails?.applicant?.totalCost -
                          (userDetails?.discountAmount +
                            userDetails?.totolReceived)}
                        {}
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
                        Name on Registry: {userDetails?.nameOnRegistry || ""}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Name Change Charges: Rs.{" "}
                        {userDetails?.nameChangeCharges || ""}
                        {}
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
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Total Month: {userDetails?.totalMonth || ""}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        CAM End Date:{" "}
                        {userDetails?.camEndDate
                          ? new Date(userDetails?.camEndDate).toLocaleString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )
                          : ""}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Unit Size: {userDetails?.unitSize || ""}{" "}
                        {userDetails?.schemeType === "Shop"
                          ? " SQFT"
                          : " SQ YD"}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        CAM Rate (per{" "}
                        {userDetails?.schemeType === "Shop" ? "SQFT" : "SQ YD"}
                        ): {userDetails?.camRate || ""}
                        {}
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
                        {}
                      </p>
                      -----------------------------------------------------------------------------------------------------
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Reference Given: {userDetails?.refrenceGiven || ""}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Months Waiver : {userDetails?.waveOffMonth || ""}
                        {}
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
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Gst : {userDetails?.gst || ""}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Payable CAM : Rs. {userDetails?.payableCam || ""}
                        {}
                      </p>
                      -----------------------------------------------------------------------------------------------------
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        No of Cheque Bounce: {userDetails?.chequeBounce || ""}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Change Bounce Penalty: Rs.{" "}
                        {userDetails?.chequePenalty || ""}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Change Bounce Charges: Rs.{" "}
                        {userDetails?.chequeBounceCharges || ""}
                        {}
                      </p>
                      -----------------------------------------------------------------------------------------------------
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Stamp Duty : Rs. {userDetails?.stampDuty || ""}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Lawyer Changes : Rs. {userDetails?.lawyerFees || ""}
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Interest Amount: Rs. {userDetails?.intrestAmount || ""}
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
                          {userDetails?.waiverCharges || ""}
                        </span>
                        {}
                      </p>
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Remark ( Waiver) : {userDetails?.remark || ""}
                        {}
                      </p>
                      -----------------------------------------------------------------------------------------------------
                      <p className="mb-0 tx-13 text-dark">
                        <i className="fe fe-chevrons-right me-1" />
                        Final NOC Payment : Rs.{" "}
                        <strong>
                          {" "}
                          {Math.floor(
                            +userDetails?.finalNocAmount -
                              +userDetails?.waiverCharges
                          ) || ""}{" "}
                        </strong>
                        {}
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
                          <label className="form-label">Select Status</label>
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
    </>
  );
};

export default ODSPage;
