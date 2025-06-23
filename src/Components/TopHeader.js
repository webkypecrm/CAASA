import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MainPage from "./MainPage";
import { useState, useEffect, useRef, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { EmployeeContext } from "../Components/EmployeeContext";
import logoWebkype from "../assets/img/brand/caasaaLogo.jpeg";




function TopHeader() {

  const Navigate = useNavigate();
  const initialFormData = { type: '', date: '', comment: '' };
  const [formData, setFormData] = useState(initialFormData);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpenToDo, setIsOpenToDo] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [users, setUsers] = useState([]);
  const [userss, setUserss] = useState([]);
  const [ipAddress, setIpAddress] = useState({})
  const [deleteId, setDeleteId] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const employeess = useContext(EmployeeContext);
  const sidebarRef = useRef(null);
  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem("Token");



  const iconStyle = {
    color: '#25D366',
    fontSize: '24px',
  };

  const badgeStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    fontSize: '12px',
    color: 'white',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    padding: '2px 6px',
  };


  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const formatDateTime = (dateTimeString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-IN', options);
  };



  const formatDateTimessss = (dateTimeString) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    const date = new Date(dateTimeString);
    return date.toLocaleTimeString('en-IN', options); // Changed to toLocaleTimeString
  };

  useEffect(() => {
    async function getEmp() {
      const url = `${apiUrl}/employee/employee`;

      let response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      response = await response.json();

      if (response.status === "success") {
        const item = response.data;
        const formattedData = {
          ...item,
          startDate: item.last_login_date ? formatDateTime(item.last_login_date) : null,
          startTime: item.last_login_date ? formatDateTime(item.last_login_date) : null,
        };

        setIpAddress(formattedData);
      }
    }

    getEmp();
  }, [apiUrl, Token]);


  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
  };

  const openFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.your-dropdown-class')) {

        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);


  const formatDateTimeee = (dateTimeString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date(dateTimeString);
    if (isNaN(date)) return "Invalid Date";
    return date.toLocaleString('en-IN', options);
  };


  const formatDateTimess = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const deletecontent = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/toDo/deleteToDo/${id}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${Token}` },
      });

      if (!response.ok) {
        throw new Error('Failed to delete');
      }

      await fetchDataFromApi();
      toast.error("ToDo deleted successfully..", {
        duration: 4000,
        style: {
          width: 'auto',
          padding: '16px',
          backgroundColor: '#FF5722',
          color: 'white',
          borderRadius: '8px',
        }
      });

    } catch (error) {
      console.error(error);
    }
  };


  const handleDeleteClick = (id) => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
    setDeleteId(id);
  };

  const handleDeleteConfirm = () => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    deletecontent(deleteId);
  };


  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(`${apiUrl}/toDo/allToDo`, {
        headers: { Authorization: `Bearer ${Token}` },
      });

      const data = await response.json();

      if (data.status !== 'success') {
        throw new Error(`API request failed: ${data.message}`);
      }

      if (!Array.isArray(data.data)) {
        throw new Error('API response does not contain employeeList array');
      }

      const formattedData = data.data.map(item => ({
        ...item,
        formattedDate: item.date ? formatDateTimeee(item.date) : null,
        formattedCallBackTimess: item.createdAt ? formatDateTimeee(item.createdAt) : null,
      }));

      setUsers(formattedData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchDataFromApi()
  }, []);

  const convertTo12HourFormat = (time) => {
    const [hours, minutes] = time.split(":");
    const hoursInt = parseInt(hours, 10);
    const suffix = hoursInt >= 12 ? "PM" : "AM";
    const hours12 = hoursInt % 12 || 12; // Convert 24-hour time to 12-hour format
    return `${hours12}:${minutes} ${suffix}`;
  };


  const fetchDataFromApii = async () => {
    try {
      const response = await fetch(`${apiUrl}/employee/employeeLeadCount`, {
        headers: { Authorization: `Bearer ${Token}` },
      });

      const data = await response.json();

      if (data.status !== 'success') {
        throw new Error(`API request failed: ${data.message}`);
      }

      if (!Array.isArray(data.data.dashboardReminders.todaySchedule)) {
        throw new Error('API response does not contain todaySchedule array');
      }

      const formattedData = data.data.dashboardReminders.todaySchedule.map(item => {
        const meetingDate = item.meetingDate ? formatDateTimess(item.meetingDate) : null;
        let meetingTime = null;

        // Check if meetingTime is a valid date string
        if (item.meetingTime) {
          const parsedTime = new Date(item.meetingTime);
          if (!isNaN(parsedTime)) {
            meetingTime = formatDateTimessss(item.meetingTime);
          } else {
            console.error('Invalid date format for meetingTime:', item.meetingTime);
          }
        }

        return {
          ...item,
          formattedCallBackDate: meetingDate,
          formattedCreatedDate: meetingTime,
        };
      });

      setUserss(formattedData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  useEffect(() => {
    fetchDataFromApii()
  }, []);



  useEffect(() => {
    async function getEmp() {
      const Token = localStorage.getItem("Token");
      try {
        let response = await fetch(`${apiUrl}/employee/employeeLeadCount`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Token}`
          },
        });
        if (response.ok) {
          const data = await response.json();
          if (data.status === "success") {
            // Check if dashboardReminders exist in the data
            if (data.data.dashboardReminders) {
              const totalReminders = data.data.dashboardReminders.remindersCount || 0;
              setEmployee(totalReminders);
            }
          }
        } else {
          throw new Error('Failed to fetch');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getEmp();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.entries(formData)
        .filter(([, value]) => value !== null)
        .forEach(([key, value]) => formDataToSend.append(key, value));

      const response = await fetch(`${apiUrl}/toDo/addToDo`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
        body: formDataToSend,
      });

      const response2 = await response.json();
      if (response2.status === "error") throw new Error(response2.message);

      fetchDataFromApi();
      setIsOpenToDo(false);
      setFormData(initialFormData);
      toast.success(response2.message);

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
  }

  const handleInputChange9 = (event) => {
    const { name, value } = event.target;

    // Keep the value in 'YYYY-MM-DD' format as required by the date input
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };


  useEffect(() => {
    async function getEmpData() {
      const url = `${apiUrl}/employee/headerCrm`;

      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        setEmployeeData(response.data);
      }

    }

    getEmpData();
  }, []);

  const logoSrc = 'https://webkype.com/frontend/assets/images/logo/webkype-logo.png';
  // const logoSrc = 'https://amrealty.webkype.com/assets/img/brand/logo.png';
  const navigateTo = (employee?.assignPermission?.includes('Sales CRM')) ? '/lead-dashboard' : '/Dashboard';




  return (
    <>


      {!employeeData.user === true &&

        <div className="navbar-container" >
          <div className="navbar-logo m-2">
            <img
              src={logoWebkype}
              style={{
                marginRight: '80px',
                width: '150px',
                height: 'auto'
              }}
              className="header-brand-img text-start float-start mb-2 error-logo-light"
              alt="logo"
              onClick={() => Navigate(navigateTo)}
              role='button'
            />

          </div>

          <div className="main-header-right d-flex flex-row-reverse">
            <button
              className="navbar-toggler navresponsive-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent-4"
              aria-controls="navbarSupportedContent-4"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fe fe-more-vertical header-icons navbar-toggler-icon" />
            </button>
            {/* Navresponsive closed */}
            <div className="navbar navbar-expand-lg  nav nav-item  navbar-nav-right responsive-navbar navbar-dark  ">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent-4"
              >
                <div className="d-flex order-lg-2 ms-auto">
                  {/* Search */}
                  <div className="dropdown header-search">
                    <a className="nav-link icon header-search">
                      <i className="fe fe-search header-icons" />
                    </a>
                    <div className="dropdown-menu">
                      <div className="main-form-search p-2">
                        <div className="input-group">
                          <div className="input-group-btn search-panel">
                            <select className="form-control select2">
                              <option label="All categories"> </option>
                              <option>Staff/Agent</option>
                              <option>Sales Lead</option>
                              <option>Subscriber</option>
                              <option>Cases/Incident</option>
                              <option>Lawyer</option>
                            </select>
                          </div>
                          <input
                            type="search"
                            className="form-control"
                            placeholder="Search for anything..."
                          />
                          <button className="btn search-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-search"
                            >
                              <circle cx={11} cy={11} r={8} />
                              <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span style={{
                    marginRight: '270px',
                    marginTop: '7px',
                    fontFamily: 'Roboto, Arial, sans-serif',
                    fontSize: '14px',
                  }}>
                    <span style={{ fontWeight: 'bold' }}>Last Login</span> = IP Address: <span style={{ color: 'blue' }}>{ipAddress.last_login_ip}</span>
                    <span style={{ marginLeft: '10px' }}>
                      Date: {ipAddress.startDate}
                    </span>
                  </span>

                  <div >
                    <img
                      src="https://res.cloudinary.com/drj0uehgx/image/upload/v1750656145/ai_logo-removebg-preview_ighzp6.png"
                      alt="logo"
                      // style={{ marginRight: '0px !impotant', width: '120px', height: 'auto' }}
                      // style={{ width: "120px"}}
                      style={{ marginTop: "-7px", marginLeft: "10px" }}
                      className="header-brand-img"
                      role="button"
                    />
                  </div>


                  <div className="dropdown">
                    <button className="nav-link icon full-screen-link" onClick={toggleFullScreen}>
                      <i className={`fe ${isFullScreen ? 'fe-minimize' : 'fe-maximize'} fullscreen-button fullscreen header-icons`} />
                    </button>
                  </div>

                  {/* Notification */}
                  <div className={`dropdown main-header-notification ${isOpen ? 'show' : ''}`}>
                    <a className="nav-link icon" href="#" onClick={toggleDropdown}>
                      <i className="fe fe-bell header-icons" />
                      <span className="badge bg-danger nav-link-badge">{employee}</span>
                    </a>

                    <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                      <div className="header-navheading">
                        <p className="main-notification-text">
                          You have {employee} unread notification
                          <span className="badge bg-pill bg-primary ms-3">View all</span>
                        </p>
                      </div>
                      {userss.map((user) => (
                        <div className="main-notification-list" key={user.id}>
                          {user.type === 'callUpdate' && (
                            <div className="media new">
                              <div className="main-img-user online">
                                <img
                                  src={user.profilePhoto || 'https://amrsapi.webkype.co/uploads/man404.jpg'}
                                  alt="Profile"
                                />
                              </div>
                              <div className="media-body">
                                <p>
                                  <strong>Call Schedule</strong>, {user.lastCallSummary}
                                </p>
                                <span style={{ fontSize: '12px' }}>
                                  <strong>Callback Date:</strong> {user.formattedCallBackDate} <br />
                                  <strong>Created Time:</strong> {user.formattedCreatedDate}
                                </span>
                              </div>
                            </div>
                          )}
                          {user.type === 'meetingUpdate' && (
                            <div className="media new">
                              <div className="main-img-user online">
                                <img
                                  src={user.profilePhoto || 'https://amrsapi.webkype.co/uploads/man404.jpg'}
                                  alt="Profile"
                                />
                              </div>
                              <div className="media-body">
                                <p>
                                  <strong>Meeting Schedule</strong>, {user.lastCallSummary}
                                </p>
                                <span style={{ fontSize: '12px' }}>
                                  <strong>Meeting Date:</strong> {user.formattedCallBackDate}  {convertTo12HourFormat(user.meetingTime || "00:00")} <br />

                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}

                      <div className="dropdown-footer">
                        <Link to="/all-notification">View All Notifications</Link>
                      </div>
                    </div>
                  </div>

                  {/* Notification */}

                  <div className="main-header-notification" style={{ position: 'relative' }}>
                    <a className="nav-link icon">
                      <FontAwesomeIcon icon={faWhatsapp} style={iconStyle} />
                      <span className="badge" style={badgeStyle}>6</span>
                    </a>
                  </div>

                  <MainPage />

                  <div className="dropdown  header-settings">
                    <a
                      href="javascript:void(0)"
                      className="nav-link icon"
                      data-bs-toggle="sidebar-right"
                      data-bs-target=".sidebar-right"
                    >
                      <i className="fe fe-align-right header-icons" onClick={(e) => { setIsOpen2(true); }} />
                    </a>
                  </div>



                  {/* Sidebar */}
                  {isOpen2 && (
                    <>
                      <div className="sidebar sidebar-right sidebar-animate sidebar-open" ref={sidebarRef} style={{ cursor: 'pointer' }}>
                        <div className="sidebar-icon">
                          <a href="javascript:void(0)" className="text-end float-end text-dark fs-20" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
                            <i className="fe fe-x" onClick={(e) => { setIsOpen2(false); }} ></i>
                          </a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                          <div className="sidebar-body" style={{ transition: "width 1s ease-in-out", width: isOpen2 ? "300px" : "0" }}>
                            <h5>Todo</h5>
                            {users.map((user) => (
                              <div className="d-flex p-3 border-top" key={user.id} style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>

                                <div className="flex-grow-1">
                                  <div>
                                    <span style={{ fontWeight: 'bold' }}>
                                      <i className="fe fe-calendar text-warning me-1"></i>
                                      Type:
                                    </span>
                                    <span>{user.type}</span>
                                  </div>
                                  <div>
                                    <span style={{ fontWeight: 'bold' }}>
                                      <i className="fe fe-message-square text-info me-1"></i>
                                      Comment:
                                    </span>
                                    <span>{user.comment}</span>
                                  </div>
                                  <div>
                                    <span style={{ fontWeight: 'bold' }}>
                                      <i className="fe fe-calendar text-warning me-1"></i>
                                      Action Date:
                                    </span>
                                    <span>{user.formattedDate}</span>
                                  </div>
                                  <div>
                                    <span style={{ fontWeight: 'bold' }}>
                                      <i className="fe fe-calendar text-warning me-1"></i>
                                      Added Date:
                                    </span>
                                    <span>{user.formattedCallBackTimess}</span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-trash-2 text-danger" data-bs-toggle="tooltip" title="Delete" data-bs-placement="top" onClick={() => handleDeleteClick(user.id)} style={{ cursor: 'pointer' }}></i>
                                </div>

                                {/* Modal component for confirmation */}
                                <div id="myModal" style={{ display: 'none', position: 'fixed', zIndex: '1', left: '0', top: '0', width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                                  <div style={{ backgroundColor: '#fefefe', margin: '15% auto', padding: '20px', border: '1px solid #888', width: '80%' }}>
                                    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                                      <h5 style={{ backgroundColor: '#0085ca', padding: '10px', borderRadius: '5px', fontSize: '15px', color: 'white' }}>Are you sure!</h5>
                                    </div>


                                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                      Hope this task is completed...
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                      <button style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#ccc', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => document.getElementById('myModal').style.display = 'none'}>Cancel</button>
                                      <button style={{ padding: '5px 10px', backgroundColor: '#dc3545', border: 'none', borderRadius: '5px', color: '#fff', cursor: 'pointer' }} onClick={handleDeleteConfirm}>Delete</button>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            ))}

                          </div>
                          <div style={{ marginTop: 'auto', marginLeft: '180px' }}>
                            <Link
                              to=""
                              onClick={(e) => { setIsOpenToDo(true) }}
                              type="button"
                              className="btn btn-primary my-2 btn-icon-text me-2"
                            >
                              <i className="fa-solid fa-plus" />  Create list
                            </Link>
                          </div>
                        </div>

                      </div>
                      {/* Apply CSS to prevent scrolling when the modal is open */}
                      <style>{`
      body {
        overflow: hidden;
      }
    `}</style>
                    </>
                  )}
                </div>



                {/* todo************* */}
                {isOpenToDo && (
                  <div className="modal-dialog modal-dialog-centered modal-sl" role="document">
                    <div
                      className="modal-content"
                      style={{
                        zIndex: '999',
                        position: 'relative',
                        right: '-50%',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <div
                        className="modal-header"
                        style={{
                          backgroundColor: '#f8f9fa',
                          borderBottom: '1px solid #dee2e6',
                          borderRadius: '10px 10px 0 0',
                        }}
                      >
                        <h5 className="modal-title">Create To-do list</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                          onClick={() => setIsOpenToDo(false)}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row row-sm">
                            <div className="col-sm-12 form-group">
                              <label className="form-label">Type:</label>
                              <select
                                className="form-control select select2 select2-hidden-accessible"
                                tabIndex="-1"
                                aria-hidden="true"
                                name="type"
                                value={formData.type}
                                onChange={handleInputChange}
                              >
                                <option>Select</option>
                                <option>Call</option>
                                <option>Meeting</option>
                                <option>Personal Meeting</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Personal Task</option>
                                <option>Leave Plan</option>
                                <option>Kids Work</option>
                                <option>Family Work</option>
                                <option>Festival</option>
                                <option>Baking Work</option>
                                <option>Payment Remainder</option>
                              </select>
                            </div>
                          </div>
                          <div className="row row-sm">
                            <div className="col-sm-12 form-group">
                              <label className="form-label">Action Date:</label>
                              <input
                                type="date"
                                className="form-control"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange9}
                              />
                            </div>
                          </div>
                          <div className="row row-sm">
                            <div className="col-sm-12 form-group">
                              <label htmlFor="exampleFormControlTextarea1">
                                Comment (Maximum 300 characters)
                              </label>
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                name="comment"
                                value={formData.comment}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              className="btn ripple btn-primary"
                              type="button"
                              onClick={handleSubmit}
                            >
                              Create list
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}


              </div>
            </div>
          </div>
        </div>
      }


      {employeeData.user === true &&

        <div className="navbar-container" >
          <div className="navbar-logo m-2">
            <img
              src={logoSrc}
              style={{ marginRight: '80px' }}
              className="header-brand-img text-start float-start mb-2 error-logo-light"
              alt="logo"

              role='button'
            />

          </div>

          <div className="main-header-right d-flex flex-row-reverse">
            <button
              className="navbar-toggler navresponsive-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent-4"
              aria-controls="navbarSupportedContent-4"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fe fe-more-vertical header-icons navbar-toggler-icon" />
            </button>
            {/* Navresponsive closed */}
            <div className="navbar navbar-expand-lg  nav nav-item  navbar-nav-right responsive-navbar navbar-dark  ">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent-4"
              >
                <div className="d-flex order-lg-2 ms-auto">
                  {/* Search */}
                  <div className="dropdown header-search">
                    <a className="nav-link icon header-search">
                      <i className="fe fe-search header-icons" />
                    </a>
                    <div className="dropdown-menu">
                      <div className="main-form-search p-2">
                        <div className="input-group">
                          <div className="input-group-btn search-panel">
                            <select className="form-control select2">
                              <option label="All categories"> </option>
                              <option>Staff/Agent</option>
                              <option>Sales Lead</option>
                              <option>Subscriber</option>
                              <option>Cases/Incident</option>
                              <option>Lawyer</option>
                            </select>
                          </div>
                          <input
                            type="search"
                            className="form-control"
                            placeholder="Search for anything..."
                          />
                          <button className="btn search-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-search"
                            >
                              <circle cx={11} cy={11} r={8} />
                              <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <span style={{
                    marginRight: '270px',
                    marginTop: '7px',
                    fontFamily: 'Roboto, Arial, sans-serif',
                    fontSize: '14px',
                  }}>
                    <span style={{ fontWeight: 'bold' }}>Last Login</span> = IP Address: <span style={{ color: 'blue' }}>{ipAddress.last_login_ip}</span>
                    <span style={{ marginLeft: '10px' }}>
                      Date: {ipAddress.startDate}
                    </span>
                  </span> */}

                  <div className="navbar-logo m-2">
                    <img
                      src="https://res.cloudinary.com/drj0uehgx/image/upload/v1750655314/ai_logo_urqoci.jpg"
                      style={{ marginRight: '80px' }}
                      className="header-brand-img text-start float-start mb-2 error-logo-light"
                      alt="logo"

                      role='button'
                    />

                  </div>

                  <div className="navbar-logo m-2">
                    <img
                      src="https://res.cloudinary.com/drj0uehgx/image/upload/v1750655314/ai_logo_urqoci.jpg"
                      alt="logo"
                      style={{ marginRight: '20px', width: '120px', height: 'auto' }}
                      className="header-brand-img"
                      role="button"
                    />
                  </div>


                  <div className="dropdown">
                    <button className="nav-link icon full-screen-link" onClick={toggleFullScreen}>
                      <i className={`fe ${isFullScreen ? 'fe-minimize' : 'fe-maximize'} fullscreen-button fullscreen header-icons`} />
                    </button>
                  </div>

                  {/* Notification */}
                  <div className={`dropdown main-header-notification ${isOpen ? 'show' : ''}`}>
                    <a className="nav-link icon" href="#" onClick={toggleDropdown}>
                      <i className="fe fe-bell header-icons" />
                      <span className="badge bg-danger nav-link-badge">{employee}</span>
                    </a>

                    <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                      <div className="header-navheading">
                        <p className="main-notification-text">
                          You have {employee} unread notification
                          <span className="badge bg-pill bg-primary ms-3">View all</span>
                        </p>
                      </div>
                      {userss.map((user) => (
                        <div className="main-notification-list" key={user.id}>
                          {user.type === 'callUpdate' && (
                            <div className="media new">
                              <div className="main-img-user online">
                                <img
                                  src={user.profilePhoto || 'https://amrsapi.webkype.co/uploads/man404.jpg'}
                                  alt="Profile"
                                />
                              </div>
                              <div className="media-body">
                                <p>
                                  <strong>Call Schedule</strong>, {user.lastCallSummary}
                                </p>
                                <span style={{ fontSize: '12px' }}>
                                  <strong>Callback Date:</strong> {user.formattedCallBackDate} <br />
                                  <strong>Created Time:</strong> {user.formattedCreatedDate}
                                </span>
                              </div>
                            </div>
                          )}
                          {user.type === 'meetingUpdate' && (
                            <div className="media new">
                              <div className="main-img-user online">
                                <img
                                  src={user.profilePhoto || 'https://amrsapi.webkype.co/uploads/man404.jpg'}
                                  alt="Profile"
                                />
                              </div>
                              <div className="media-body">
                                <p>
                                  <strong>Meeting Schedule</strong>, {user.lastCallSummary}
                                </p>
                                <span style={{ fontSize: '12px' }}>
                                  <strong>Meeting Date:</strong> {user.formattedCallBackDate}  {convertTo12HourFormat(user.meetingTime || "00:00")} <br />

                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}

                      <div className="dropdown-footer">
                        <Link to="/all-notification">View All Notifications</Link>
                      </div>
                    </div>
                  </div>

                  {/* Notification */}

                  <div className="main-header-notification" style={{ position: 'relative' }}>
                    <a className="nav-link icon">
                      <FontAwesomeIcon icon={faWhatsapp} style={iconStyle} />
                      <span className="badge" style={badgeStyle}>6</span>
                    </a>
                  </div>

                  <MainPage />

                  <div className="dropdown  header-settings">
                    <a
                      href="javascript:void(0)"
                      className="nav-link icon"
                      data-bs-toggle="sidebar-right"
                      data-bs-target=".sidebar-right"
                    >
                      <i className="fe fe-align-right header-icons" onClick={(e) => { setIsOpen2(true); }} />
                    </a>
                  </div>



                  {/* Sidebar */}
                  {isOpen2 && (
                    <>
                      <div className="sidebar sidebar-right sidebar-animate sidebar-open" ref={sidebarRef} style={{ cursor: 'pointer' }}>
                        <div className="sidebar-icon">
                          <a href="javascript:void(0)" className="text-end float-end text-dark fs-20" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
                            <i className="fe fe-x" onClick={(e) => { setIsOpen2(false); }} ></i>
                          </a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                          <div className="sidebar-body" style={{ transition: "width 1s ease-in-out", width: isOpen2 ? "300px" : "0" }}>
                            <h5>Todo</h5>
                            {users.map((user) => (
                              <div className="d-flex p-3 border-top" key={user.id} style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>

                                <div className="flex-grow-1">
                                  <div>
                                    <span style={{ fontWeight: 'bold' }}>
                                      <i className="fe fe-calendar text-warning me-1"></i>
                                      Type:
                                    </span>
                                    <span>{user.type}</span>
                                  </div>
                                  <div>
                                    <span style={{ fontWeight: 'bold' }}>
                                      <i className="fe fe-message-square text-info me-1"></i>
                                      Comment:
                                    </span>
                                    <span>{user.comment}</span>
                                  </div>
                                  <div>
                                    <span style={{ fontWeight: 'bold' }}>
                                      <i className="fe fe-calendar text-warning me-1"></i>
                                      Action Date:
                                    </span>
                                    <span>{user.formattedDate}</span>
                                  </div>
                                  <div>
                                    <span style={{ fontWeight: 'bold' }}>
                                      <i className="fe fe-calendar text-warning me-1"></i>
                                      Added Date:
                                    </span>
                                    <span>{user.formattedCallBackTimess}</span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-trash-2 text-danger" data-bs-toggle="tooltip" title="Delete" data-bs-placement="top" onClick={() => handleDeleteClick(user.id)} style={{ cursor: 'pointer' }}></i>
                                </div>

                                {/* Modal component for confirmation */}
                                <div id="myModal" style={{ display: 'none', position: 'fixed', zIndex: '1', left: '0', top: '0', width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                                  <div style={{ backgroundColor: '#fefefe', margin: '15% auto', padding: '20px', border: '1px solid #888', width: '80%' }}>
                                    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                                      <h5 style={{ backgroundColor: '#0085ca', padding: '10px', borderRadius: '5px', fontSize: '15px', color: 'white' }}>Are you sure!</h5>
                                    </div>


                                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                      Hope this task is completed...
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                      <button style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#ccc', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => document.getElementById('myModal').style.display = 'none'}>Cancel</button>
                                      <button style={{ padding: '5px 10px', backgroundColor: '#dc3545', border: 'none', borderRadius: '5px', color: '#fff', cursor: 'pointer' }} onClick={handleDeleteConfirm}>Delete</button>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            ))}

                          </div>
                          <div style={{ marginTop: 'auto', marginLeft: '180px' }}>
                            <Link
                              to=""
                              onClick={(e) => { setIsOpenToDo(true) }}
                              type="button"
                              className="btn btn-primary my-2 btn-icon-text me-2"
                            >
                              <i className="fa-solid fa-plus" />  Create list
                            </Link>
                          </div>
                        </div>

                      </div>
                      {/* Apply CSS to prevent scrolling when the modal is open */}
                      <style>{`
body {
overflow: hidden;
}
`}</style>
                    </>
                  )}
                </div>



                {/* todo************* */}
                {isOpenToDo && (
                  <div className="modal-dialog modal-dialog-centered modal-sl" role="document">
                    <div
                      className="modal-content"
                      style={{
                        zIndex: '999',
                        position: 'relative',
                        right: '-50%',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <div
                        className="modal-header"
                        style={{
                          backgroundColor: '#f8f9fa',
                          borderBottom: '1px solid #dee2e6',
                          borderRadius: '10px 10px 0 0',
                        }}
                      >
                        <h5 className="modal-title">Create To-do list</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                          onClick={() => setIsOpenToDo(false)}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row row-sm">
                            <div className="col-sm-12 form-group">
                              <label className="form-label">Type:</label>
                              <select
                                className="form-control select select2 select2-hidden-accessible"
                                tabIndex="-1"
                                aria-hidden="true"
                                name="type"
                                value={formData.type}
                                onChange={handleInputChange}
                              >
                                <option>Select</option>
                                <option>Call</option>
                                <option>Meeting</option>
                                <option>Personal Meeting</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Personal Task</option>
                                <option>Leave Plan</option>
                                <option>Kids Work</option>
                                <option>Family Work</option>
                                <option>Festival</option>
                                <option>Baking Work</option>
                                <option>Payment Remainder</option>
                              </select>
                            </div>
                          </div>
                          <div className="row row-sm">
                            <div className="col-sm-12 form-group">
                              <label className="form-label">Action Date:</label>
                              <input
                                type="date"
                                className="form-control"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange9}
                              />
                            </div>
                          </div>
                          <div className="row row-sm">
                            <div className="col-sm-12 form-group">
                              <label htmlFor="exampleFormControlTextarea1">
                                Comment (Maximum 300 characters)
                              </label>
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                name="comment"
                                value={formData.comment}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              className="btn ripple btn-primary"
                              type="button"
                              onClick={handleSubmit}
                            >
                              Create list
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}


              </div>
            </div>
          </div>
        </div>
      }





    </>
  )
}

export default TopHeader;