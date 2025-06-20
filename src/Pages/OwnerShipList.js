import React, { useState, useEffect, useRef } from "react";
import TopHeader from "../Components/TopHeader";
import Prince from "../Components/Prince";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UserApplicant = () => {
  const dropdownRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [leadCount, setLeadCount] = useState(0);
  const [leadCounts, setLeadCounts] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState("");
  const [isModalOpens4, setIsModalOpens4] = useState(false);
  const [isModalOpens6, setIsModalOpens6] = useState(false);
  const [filterByObj, setFilterByObj] = useState({
    search: "",
    from: "",
    to: "",
  });

  const [isModalChequeOpens, setIsModalChequeOpens] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const intialForm = {
    registryName: "",
    fatherName: "",
    registyLocation: "",
    registryDate: "",
    registryImage: "",
    unitNo: "",
    description: "",
  };
  const [form, setFormData] = useState(intialForm);

  const navigate = useNavigate();
  const Token = localStorage.getItem("Token");
  const apiUrl = process.env.REACT_APP_URL;

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...form,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...form, registryImage: file });
  };

  const AddOwnership = async () => {
    setFormLoading(true);
    try {
      const formData = new FormData();
      formData.append("registryName", form.registryName);
      formData.append("fatherName", form.fatherName);
      formData.append("registyLocation", form.registyLocation);
      formData.append("registryDate", form.registryDate);
      formData.append("unitNo", form.unitNo);
      formData.append("description", form.description);

      // If the registry image is provided, append it as well
      if (form.registryImage) {
        formData.append("registryImage", form.registryImage);
      }

      const url = `${apiUrl}/ownership/addOwnership`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
        body: formData, // Send formData with all the fields
      });

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }

      fetchDataFromApi();
      toast.success(response2.message);
      setIsModalChequeOpens(false);
      setFormData(intialForm); // Reset the form data to initial values
    } catch (error) {
      toast.error(error.message);
    }
    setFormLoading(false);
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
    const { to, from, search } = filterByObj;
    const url = `${apiUrl}/ownership/listOwnerships?page=${pageNumber}&limit=${itemsPerPage}&search=${search}&projectId=${selectedIds}&from=${from}&to=${to}`;

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
        setUsers(formattedData);
      } else {
        console.error(
          "API response error:",
          data.message || "Data is not an array"
        );
      }
      const fetchedLeadCount = data?.pagination?.totalItems || 0;
      setLeadCount(fetchedLeadCount);
      setLeadCounts(data.user);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

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

  useEffect(() => {
    fetch(`${apiUrl}/project/applicantProjectDropdown`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setProject(data.data);
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

  const currentPageData = users;

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              <div className="page-header4 d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5 mt-2">
                    All Owners ({leadCount})
                  </h2>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="">All Registration List</Link>
                    </li>
                  </ol>
                </div>
                <button
                  type="button"
                  className="btn btn-primary mb-1"
                  onClick={() => setIsModalChequeOpens(true)}
                  style={{
                    marginTop: "5px",
                    // backgroundColor: "#17a2b8",
                    // borderColor: "#17a2b8",
                    width: "200px",
                  }}
                >
                  Add ownership
                </button>
              </div>

              {!leadCounts === true && (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card custom-card">
                      <div className="card-body py-3">
                        <div className="row d-flex justify-content-start align-items-center ">
                          <div className="col-sm-6">
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

                          <div className="col-sm-2 ">
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
                                  style={{ height: "100%" }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-2">
                            <div
                              ref={dropdownRef}
                              style={{ position: "relative", width: "380px" }}
                            >
                              {/* Dropdown Header */}
                              <div
                                className="form-control select2 "
                                style={{
                                  height: "35px",
                                  border: "1px solid #ccc",
                                  padding: "10px",
                                  cursor: "pointer",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  overflow: "hidden", // Prevent content overflow
                                  textOverflow: "ellipsis", // Show "..." if text is too long
                                  whiteSpace: "nowrap", // Keep the text on a single line
                                  borderRadius: "5px",
                                  marginTop: "1px",
                                  marginRight: "90px",
                                }}
                                onClick={() => setIsOpen((prev) => !prev)}
                              >
                                <span>
                                  {selectedIds
                                    ? project.find(
                                      (item) => item.id === selectedIds
                                    )?.projectName || "Select project"
                                    : "Select project"}
                                </span>
                              </div>

                              {/* Dropdown Items */}
                              {isOpen && (
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "35px",
                                    left: "0",
                                    width: "100%",
                                    maxHeight: "200px",
                                    overflowY: "scroll",
                                    border: "1px solid #ccc",
                                    backgroundColor: "#fff",
                                    zIndex: 1000,
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "4px",
                                  }}
                                >
                                  {/* Default option */}
                                  <div
                                    style={{
                                      padding: "10px",
                                      cursor: "pointer",
                                      borderBottom: "1px solid #eee",
                                      backgroundColor: "#fff",
                                    }}
                                    onClick={() => {
                                      setSelectedIds(null);
                                      setFilterByObj((prev) => ({
                                        ...prev,
                                        projectId: "",
                                      }));
                                      setIsOpen(false); // Close dropdown after selection
                                    }}
                                  >
                                    Select project
                                  </div>

                                  {/* Loop through project options */}
                                  {project
                                    .filter(
                                      (option) =>
                                        option.projectName &&
                                        option.projectName !== "N/A"
                                    )
                                    .map((option) => (
                                      <div
                                        key={option.id}
                                        style={{
                                          padding: "10px",
                                          cursor: "pointer",
                                          borderBottom: "1px solid #eee",
                                          backgroundColor:
                                            selectedIds === option.id
                                              ? "#f1f1f1"
                                              : "#fff",
                                          transition:
                                            "background-color 0.2s ease-in-out",
                                        }}
                                        onClick={() => {
                                          setSelectedIds(option.id);
                                          setFilterByObj((prev) => ({
                                            ...prev,
                                            projectId: option.id,
                                          }));
                                          setIsOpen(false); // Close dropdown after selection
                                        }}
                                        onMouseEnter={(e) =>
                                        (e.target.style.backgroundColor =
                                          "#f1f1f1")
                                        }
                                        onMouseLeave={(e) =>
                                        (e.target.style.backgroundColor =
                                          selectedIds === option.id
                                            ? "#f1f1f1"
                                            : "#fff")
                                        }
                                      >
                                        {option.projectName}
                                      </div>
                                    ))}
                                </div>
                              )}
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
                                <th>ID</th>
                                <th style={{ whiteSpace: "nowrap" }}>IMAGE</th>
                                <th style={{ whiteSpace: "nowrap" }}>
                                  REGISTRY DETAILS
                                </th>
                                <th style={{ whiteSpace: "nowrap" }}>FROM</th>
                                <th style={{ whiteSpace: "nowrap" }}>
                                  UNIT NO
                                </th>
                                <th style={{ whiteSpace: "nowrap" }}>
                                  PROJECT
                                </th>
                                <th style={{ whiteSpace: "nowrap" }}>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentPageData.map((user) => (
                                <tr>
                                  <td>
                                    ID: {user?.id || "N/A"}
                                    <br />
                                  </td>
                                  <td>
                                    <img
                                      src={
                                        user?.registryImage ||
                                        "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                      }
                                      alt="User"
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                      }}
                                    />
                                    <br />
                                  </td>
                                  <td>
                                    <strong style={{ color: "#007bff" }}>
                                      {" "}
                                      N:
                                    </strong>{" "}
                                    {user.registryName || "N/A"}
                                    <br />
                                    <strong style={{ color: "#007bff" }}>
                                      {" "}
                                      F N:{" "}
                                    </strong>{" "}
                                    {user.fatherName || "N/A"}
                                    <br />
                                    <strong style={{ color: "#007bff" }}>
                                      {" "}
                                      D:{" "}
                                    </strong>{" "}
                                    {user.registryDate || "N/A"}
                                  </td>

                                  <td style={{ whiteSpace: "nowrap" }}>
                                    {user.registyLocation || "N/A"}
                                  </td>
                                  <td style={{ whiteSpace: "nowrap" }}>
                                    {user.unitNo || "N/A"}
                                  </td>
                                  <td style={{ whiteSpace: "nowrap" }}>
                                    {user?.project?.projectName || "N/A"}
                                  </td>
                                  <td>
                                    <button
                                      disabled
                                      className="btn btn-primary"
                                    >
                                      U
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
                  Copyright © 2024 <a href="javascript:void(0)">Caasaa</a>.
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
                <h5 className="modal-title">Add Ownership</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => setIsModalChequeOpens(false)}
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
                      textAlign: "left",
                      maxHeight: "70vh",
                      overflowY: "auto",
                    }}
                  >
                    <div className="w-100">
                      <div className="row d-flex justify-content-start align-items-start">
                        {/* registryName */}
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Registry Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="registryName"
                            value={form.registryName || ""}
                            onChange={handleChange1}
                          />
                        </div>

                        {/* fatherName */}
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Father's Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="fatherName"
                            value={form.fatherName || ""}
                            onChange={handleChange1}
                          />
                        </div>

                        {/* registyLocation */}
                        <div className="col-sm-6 form-group">
                          <label className="form-label">
                            Registry Location
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="registyLocation"
                            value={form.registyLocation || ""}
                            onChange={handleChange1}
                          />
                        </div>

                        {/* registryDate */}
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Registry Date</label>
                          <input
                            type="date"
                            className="form-control"
                            name="registryDate"
                            value={form.registryDate || ""}
                            onChange={handleChange1}
                          />
                        </div>

                        {/* registryImage */}
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Registry Image</label>
                          <input
                            type="file"
                            className="form-control"
                            name="registryImage"
                            onCha
                            nge={handleImageChange}
                          />
                        </div>

                        {/* unitNo */}
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Unit No</label>
                          <input
                            type="text"
                            className="form-control"
                            name="unitNo"
                            value={form.unitNo || ""}
                            onChange={handleChange1}
                          />
                        </div>

                        {/* description */}
                        <div className="col-sm-12 form-group">
                          <label className="form-label">Description</label>
                          <textarea
                            className="form-control"
                            name="description"
                            value={form.description || ""}
                            onChange={handleChange1}
                          ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="button"
                          className="btn btn-primary mb-1"
                          onClick={AddOwnership}
                          style={{
                            marginTop: "5px",
                            // backgroundColor: "#17a2b8",
                            // borderColor: "#17a2b8",
                            width: "200px",
                          }}
                          disabled={formLoading}
                        >
                          {`${formLoading ? "loading..." : "Submit"}`}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CHEUQUE BOUNCE RECEIPT  */}
    </>
  );
};

export default UserApplicant;
