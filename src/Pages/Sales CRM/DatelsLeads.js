import React, { useState, useEffect } from "react";
import TopHeader from "../../Components/TopHeader";
import Prince from "../../Components/Prince";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Img3 from '../../assets/img/svgs/callback.png'
import Img4 from '../../assets/img/svgs/4029413.png'


const DatelsLeads = () => {
  const { empid } = useParams();

  const initialFormData = {
    comment: '',
    status: '',
    attachment: '',

  };

  const initialFormData2 = {
    callBackDate: '',
    callBackTime: '',
    lastCallSummary: '',
    remindeMe: '',
    status: '',


  };

  const initialFormData3 = {

    meetingDate: '',
    meetingTime: '',
    meetingType: '',
    lastCallSummary: '',
    status: '',
    meetingVenue: '',
    remindeMe: '',

  };

  const initialFormData4 = {
    status: '',
    remark: '',
  };


  const [formData, setFormData] = useState(initialFormData);
  const [formData2, setFormData2] = useState(initialFormData2);
  const [formData3, setFormData3] = useState(initialFormData3);
  const [formData4, setFormData4] = useState(initialFormData4);

  const [profilePicFile, setProfilePicFile] = useState(null);
  const [leadDetailsfollowups, setLeadDetailsfollowups] = useState([]);
  const [status, setStatus] = useState([]);
  const [leadDetails, setLeadDetails] = useState(/* initial value */);

  const [isModalOpen, setModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [employee, setEmployee] = useState({})
  const [leadStatus, setLeadStatus] = useState('');

  const currentDate2 = new Date().toISOString().split('T')[0];
  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem('Token');


  const handleOpenModal = () => {
    setModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.classList.remove('modal-open');
  };
  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
    document.body.classList.add('modal-open');
  };
  const handleCloseModal2 = () => {
    setIsModalOpen2(false);

    document.body.classList.remove('modal-open');
  };

  const handleOpenModal3 = () => {
    setIsModalOpen3(true);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal3 = () => {
    setIsModalOpen3(false);
    document.body.classList.remove('modal-open');
  };
  const handleOpenModal4 = () => {
    setIsModalOpen4(true);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal4 = () => {
    setIsModalOpen4(false);
    document.body.classList.remove('modal-open');
  };



  // fllop
  useEffect(() => {
    const fetchLeadData = async () => {
      try {
        const Token = localStorage.getItem('Token');
        console.log('Token:', Token);

        const url = `${apiUrl}/lead/getLeadById/${empid}`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${Token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch lead data');
        }

        const data = await response.json();
        if (data && data.status === 'success' && data.data) {
          const fetchedLeadDetails = data.data;

          setLeadDetails(fetchedLeadDetails);
          if (fetchedLeadDetails && fetchedLeadDetails.status) {
            setLeadStatus(fetchedLeadDetails.status);

          }
        } else {
          console.error('Lead data not found in the API response');
        }
      } catch (error) {
        console.error('Error fetching lead data:', error);
      }
    };

    fetchLeadData();
  }, [refresh]);



  const fetchLeadData = async () => {
    try {
      const url = `${apiUrl}/lead/leadFollowUP/${empid}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch lead data');
      }

      const responseData = await response.json();

      if (responseData.status === 'success' && Array.isArray(responseData.data)) {
        const followups = responseData.data.map(followup => {
          let updatedFollowup = { ...followup };

          if (followup && followup.meetingTime) {


            // Splitting the time into hours and minutes
            const [hours, minutes] = followup.meetingTime.split(':').map(Number);

            // Convert to 12-hour format with AM/PM designation
            let formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
            const AMPM = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
            const formattedMeetingTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${AMPM}`;



            updatedFollowup.meetingTime = formattedMeetingTime;
          }

          if (followup && followup.callBackTime) {

            const [hours, minutes] = followup.callBackTime.split(':').map(Number);

            // Convert to 12-hour format with AM/PM designation
            let formattedHours = hours % 12 || 12;
            const AMPM = hours >= 12 ? 'PM' : 'AM';
            const formattedCallBackTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${AMPM}`;



            updatedFollowup.callBackTime = formattedCallBackTime;
          }

          if (followup && followup.reminders.time) {

            const [hours, minutes] = followup.reminders.time.split(':').map(Number);

            // Convert to 12-hour format with AM/PM designation
            let formattedHours = hours % 12 || 12;
            const AMPM = hours >= 12 ? 'PM' : 'AM';
            const formattedCallBackTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${AMPM}`;



            updatedFollowup.reminders.time = formattedCallBackTime;
          }

          if (followup && followup.meetingDate) {
            // Parsing the date
            const [year, month, day] = followup.meetingDate.split('-').map(Number);
            // Formatting the date
            const formattedDate = `${day}-${month}-${year}`;
            updatedFollowup.meetingDate = formattedDate;
          }
          if (followup && followup.reminders.date) {
            // Parsing the date
            const [year, month, day] = followup.reminders.date.split('-').map(Number);
            // Formatting the date
            const formattedDate = `${day}-${month}-${year}`;
            updatedFollowup.reminders.date = formattedDate;
          }

          if (followup && followup.callBackDate) {
            // Parsing the date
            const [year, month, day] = followup.callBackDate.split('-').map(Number);
            // Formatting the date
            const formattedDate = `${day}-${month}-${year}`;
            updatedFollowup.callBackDate = formattedDate;
          }

          return updatedFollowup;
        });
        setLeadDetailsfollowups(followups);
      } else {
        console.error('Lead data not found or invalid in the API response');
      }
    } catch (error) {
      console.error('Error fetching lead data:', error);
    }
  };

  useEffect(() => {
    fetchLeadData();
  }, []);



  //comment
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }

      const response = await fetch(`${apiUrl}/lead/postComment/${empid}`, {
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
      fetchLeadData();
      handleCloseModal();

      setFormData(initialFormData); // Reset the form
      toast.success(response2.message);


    } catch (error) {
      toast.error(error.message);

    }
  };
  //comment

  const handleSubmit2 = async (event) => {
    event.preventDefault();

    try {
      const Token = localStorage.getItem('Token');
      console.log('Token:', Token);

      const formDataToSend = new FormData();

      for (const key in formData2) {
        if (formData2[key] !== null) {
          formDataToSend.append(key, formData2[key]);
        }
      }

      const response = await fetch(`${apiUrl}/lead/callUpdate/${empid}`, {
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


      fetchLeadData();
      handleCloseModal2();

      setFormData2({
        callBackDate: '',
        callBackTime: '',
        lastCallSummary: '',
        remindeMe: true,
      }); // Reset the form
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith('image/')) {
        // Set profilePicFile for image files
        setProfilePicFile(file);
        setFormData((prevData) => ({
          ...prevData,
          attachment: file,


        }));
      } else if (file.type === 'application/pdf') {
        // Set aadhaarUpload for PDF files
        setFormData((prevData) => ({
          ...prevData,
          attachment: file,
        }));
      } else {
        console.log('Unsupported file type');
      }
    } else {
      console.log('No file selected');
    }
  };

  const handleChange2 = (event) => {
    const { name, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : event.target.value;

    setFormData2((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleChange8 = (event) => {
    const { name, value } = event.target;

    setFormData2((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setFormData2({
      ...formData2,
      [name]: value,
    });
  }

  const handleInputChange3 = (event) => {
    const { name, value } = event.target;
    setFormData3({
      ...formData3,
      [name]: value,
    });
  }

  const handleChange3 = (event) => {
    const { name, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : event.target.value;

    setFormData3((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit3 = async (event) => {
    event.preventDefault();

    const Token = localStorage.getItem('Token');
    console.log('Token:', Token);
    try {
      const formDataToSend = new FormData();

      for (const key in formData3) {
        if (formData3[key] !== null) {
          formDataToSend.append(key, formData3[key]);
        }
      }

      const response = await fetch(`${apiUrl}/lead/meetingUpdate/${empid}`, {
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
      fetchLeadData();
      handleCloseModal3();

      setFormData3({
        meetingDate: '',
        meetingTime: '',
        meetingType: '',
        lastCallSummary: '',
        status: '',
        meetingVenue: '',
        remindeMe: true,
      });
      toast.success(response2.message);


    } catch (error) {
      toast.error(error.message);

    }
  };


  const handleChange7 = (event) => {
    const { name, value } = event.target;

    setFormData4((prevState) => ({
      ...prevState,
      [name]: value,
    }));


  }
  const handleSubmit7 = async (event) => {
    event.preventDefault();

    const Token = localStorage.getItem('Token');
    console.log('Token:', Token);
    try {
      const formDataToSend = new FormData();

      for (const key in formData4) {
        if (formData4[key] !== null) {
          formDataToSend.append(key, formData4[key]);
        }
      }

      const response = await fetch(`${apiUrl}/lead/changeStatus/${empid}`, {
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
      fetchLeadData();
      handleCloseModal4();

      setFormData4(initialFormData4);
      toast.success(response2.message);


    } catch (error) {
      toast.error(error.message);

    }
  };


  //status master
  useEffect(() => {

    const Token = localStorage.getItem('Token');
    fetch(`${apiUrl}/master/getAllMasterData/5`, {
      headers: {
        Authorization: `Bearer ${Token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.data)) {
          setStatus(data.data);
        } else {
          console.error('API response does not contain an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching gender options:', error);
      });
  }, []);


  useEffect(() => {
    async function getEmp() {

      const Token = localStorage.getItem("Token");
      let response = await fetch(`${apiUrl}/employee/employee`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`
        },
      })
      response = await response.json();

      if (response.status === "success") {
        setEmployee(response.data);
      }
    }
    getEmp();
  }, [])

  return (
    <>

      {/* Page */}
      <div className="page">
        <TopHeader />
        <Prince />

        <div className="main-content  pt-0">
          <div className="main-container container-fluid">
            <div className="inner-body">
              {/* Page Header */}
              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">
                    <Link to='/sales-lead'>  Lead ID : {empid}</Link>
                  </h2>
                </div>
              </div>
              {/* End Page Header */}
              {/* Row */}
              <div className="row row-sm">
                <div className="col-lg-12 col-md-12">
                  <div className="card custom-card main-content-body-profile">
                    <div className="card-body pb-0">
                      <div className="profile-tab tab-menu-heading">

                      </div>
                    </div>
                    <div className="tab-content">
                      <div
                        className="main-content-body tab-pane p-3 border-top-0 active"
                        id="about"
                      >
                        <div className="row row-sm">
                          <div className="col-xl-12">
                            <div className="card custom-card border mb-3">
                              <div className="card-header pb-2">
                                <h6 className="mb-0">
                                  <span style={{ color: '#01b8ff', fontWeight: 'bold', cursor: 'pointer' }}>{leadStatus}</span>
                                  <button
                                    className="btn ripple btn-info btn-rounded pull-right btn-rounded-sm mb-1"
                                    onClick={handleOpenModal}
                                  >
                                    Post a Comment
                                  </button>


                                  <div
                                    className={`modal ${isModalOpen ? 'show' : ''}`}
                                    style={{ display: isModalOpen ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                                    tabIndex="-1"
                                    role="dialog"
                                  >
                                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '40%', margin: 'auto' }}>
                                      <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                          <h5 className="modal-title">Comment</h5>
                                          <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                            onClick={handleCloseModal}
                                          >
                                            <span aria-hidden="true">&times;</span>

                                          </button>

                                        </div>

                                        <div className="modal-body">
                                          <form>
                                            <div className="row row-sm">
                                              <div className="col-sm-12 form-group">
                                                <label className="form-label">Comment: <span className="tx-danger">*</span></label>
                                                <textarea
                                                  className="form-control"
                                                  style={{ height: 150 }}
                                                  defaultValue={""}
                                                  name="comment"
                                                  value={formData.comment}
                                                  onChange={handleInputChange}
                                                />
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">Status: </label>
                                                <select className="form-control select2"
                                                  name="status"
                                                  value={formData.status}
                                                  onChange={handleInputChange}
                                                >
                                                  <option value=''>Select </option>
                                                  {status.map((option, index) => (
                                                    <option key={option.id} value={option.name}>
                                                      {option.name}
                                                    </option>
                                                  ))}

                                                </select>
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">Attachment</label>
                                                <input type="file" className="form-control"
                                                  name="attachment"
                                                  onChange={handleFileChange} />
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                        <div className="modal-footer">
                                          <button className="btn ripple btn-primary" fetchLeadData onClick={handleSubmit} type="button">
                                            Post Update
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>



                                  <button
                                    className="btn ripple btn-info btn-rounded pull-right btn-rounded-sm mb-1 me-1"

                                    onClick={handleOpenModal2}
                                  >
                                    Call Update
                                  </button>


                                  <div
                                    className={`modal fade ${isModalOpen2 ? 'show d-block' : ''}`}
                                    id="modaldemo-callback-form"
                                    tabIndex="-1"
                                    style={{ display: isModalOpen2 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                                  >
                                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '40%', margin: 'auto' }}>
                                      <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                          <h5 className="modal-title">Call Update</h5>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            onClick={handleCloseModal2}
                                            aria-label="Close"
                                          ></button>
                                        </div>

                                        <div className="modal-body">
                                          <form>
                                            <div className="row row-sm">

                                              <div className="col-sm-12" />
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">Callback Date: <span className="tx-danger">*</span></label>
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  name="callBackDate"
                                                  value={formData2.callBackDate}
                                                  onChange={handleChange8}
                                                />
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">Callback Time: <span className="tx-danger">*</span></label>
                                                <input type="time" className="form-control"
                                                  name="callBackTime"
                                                  value={formData2.callBackTime}
                                                  onChange={handleChange2}
                                                />
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">Last Call Summary</label>
                                                <textarea
                                                  className="form-control"
                                                  style={{ height: 40 }}
                                                  defaultValue={""}
                                                  name="lastCallSummary"
                                                  value={formData2.lastCallSummary}
                                                  onChange={handleChange2}
                                                />
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">Status </label>
                                                <select className="form-control select2"
                                                  name="status"
                                                  value={formData2.status}
                                                  onChange={handleChange2}
                                                >
                                                  <option value=''>Select </option>
                                                  {status.map((option, index) => (
                                                    <option key={option.id} value={option.name}>
                                                      {option.name}
                                                    </option>
                                                  ))}

                                                </select>
                                              </div>

                                              <div className="col-sm-12 ">
                                                <label className="ckbox">
                                                  <input type="checkbox" name="remindeMe"
                                                    value={formData2.remindeMe}
                                                    onChange={handleChange2} />
                                                  <span>Reminder Me</span>
                                                </label>
                                              </div>

                                            </div>
                                          </form>
                                        </div>
                                        <div className="modal-footer">
                                          <button className="btn ripple btn-primary" onClick={handleSubmit2} type="button">
                                            Update Call
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <button
                                    className="btn ripple btn-info btn-rounded pull-right btn-rounded-sm mb-1 me-1"

                                    onClick={handleOpenModal3}
                                  >
                                    Meeting Update
                                  </button>


                                  <div
                                    className={`modal fade ${isModalOpen3 ? 'show d-block' : ''}`}
                                    id="modaldemo-callback-form"
                                    tabIndex="-1"
                                    style={{ display: isModalOpen3 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                                  >
                                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '40%', margin: 'auto' }}>
                                      <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                          <h5 className="modal-title">Meeting Update</h5>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            onClick={handleCloseModal3}
                                            aria-label="Close"
                                          ></button>
                                        </div>

                                        <div className="modal-body">
                                          <form>
                                            <div className="row row-sm">
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">Meeting Date: <span className="tx-danger">*</span></label>
                                                <input type="date" className="form-control"
                                                  name="meetingDate"
                                                  value={formData3.meetingDate}
                                                  onChange={handleChange3}

                                                  min={currentDate2}
                                                />
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">Meeting Time: <span className="tx-danger">*</span></label>
                                                <input type="time" className="form-control"
                                                  name="meetingTime"
                                                  value={formData3.meetingTime}
                                                  onChange={handleChange3}

                                                />
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label"> Meeting Type: <span className="tx-danger">*</span></label>
                                                <select className="form-control select select2"
                                                  name="meetingType"
                                                  value={formData3.meetingType}
                                                  onChange={handleChange3}

                                                >
                                                  <option>Select</option>
                                                  <option>Online</option>
                                                  <option>Offline</option>

                                                </select>
                                              </div>
                                              <div className="col-sm-6 form-group">
                                                <label className="form-label">Status</label>
                                                <select className="form-control select select2"
                                                  name="status"
                                                  value={formData3.status}
                                                  onChange={handleChange3}>
                                                  <option>Select</option>
                                                  {status.map((option, index) => (
                                                    <option key={option.id} value={option.name}>
                                                      {option.name}
                                                    </option>
                                                  ))}
                                                </select>
                                              </div>
                                              <div className="col-sm-12 form-group">
                                                <label className="form-label">Meeting Venue</label>
                                                <input type="text" className="form-control"
                                                  name="meetingVenue"
                                                  value={formData3.meetingVenue}
                                                  onChange={handleChange3} />
                                              </div>
                                              <div className="col-sm-12 form-group">
                                                <label className="form-label">Last Call Summary</label>
                                                <textarea
                                                  className="form-control"
                                                  style={{ height: 60 }}
                                                  defaultValue={""}
                                                  name="lastCallSummary"
                                                  value={formData3.lastCallSummary}
                                                  onChange={handleChange3}
                                                />
                                              </div>
                                              <div className="col-sm-12 ">
                                                <label className="ckbox">
                                                  <input type="checkbox" name="remindeMe"
                                                    value={formData3.remindeMe}
                                                    onChange={handleChange3} />
                                                  <span>Reminder Me</span>
                                                </label>
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                        <div className="modal-footer">
                                          <button className="btn ripple btn-primary" onClick={handleSubmit3} type="button">
                                            Update Meeting
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>



                                  <button
                                    className="btn ripple btn-info btn-rounded pull-right btn-rounded-sm mb-1 me-1"
                                    onClick={handleOpenModal4}
                                  >
                                    Update Status
                                  </button>


                                  <div
                                    className={`modal ${isModalOpen4 ? 'show' : ''}`}
                                    style={{ display: isModalOpen4 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                                    tabIndex="-1"
                                    role="dialog"
                                  >
                                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '40%', margin: 'auto' }}>
                                      <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                          <h5 className="modal-title">Change Lead Status</h5>
                                          <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                            onClick={handleCloseModal4}
                                          >
                                            <span aria-hidden="true">&times;</span>

                                          </button>

                                        </div>

                                        <div className="modal-body">
                                          <form>
                                            <div className="row row-sm">
                                              <div className="col-sm-12 form-group">
                                                <label className="form-label">Status: <span className="tx-danger">*</span></label>
                                                <select className="form-control select2"
                                                  name="status"
                                                  value={formData4.status}
                                                  onChange={handleChange7}
                                                >
                                                  <option >Select </option>
                                                  {status.map((option, index) => (
                                                    <option key={option.id} value={option.name}>
                                                      {option.name}
                                                    </option>
                                                  ))}

                                                </select>
                                              </div>
                                              <div className="col-sm-12 form-group">
                                                <label className="form-label">Remark: <span className="tx-danger">*</span></label>
                                                <input type="text" className="form-control"
                                                  name="remark"
                                                  value={formData4.remark}
                                                  onChange={handleChange7}
                                                />
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                        <div className="modal-footer">
                                          <button className="btn ripple btn-primary" fetchLeadData type="button" onClick={handleSubmit7}>
                                            Submit
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>


                                </h6>
                              </div>
                              <div className="card-body">
                                <div className="col-12">
                                  <ul className="notification mb-0">

                                    {leadDetailsfollowups.length > 0 ? (

                                      leadDetailsfollowups.map(comment => {
                                        if (comment.type === 'leadComment') {
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
                                                  {comment.createdAt}<br />
                                                </p>
                                              </div>
                                              <div className="notification-body">
                                                <div className="media mt-0">

                                                  <div className="media-body ms-2 d-flex">
                                                    <div className="me-5 pt-4 pb-4">
                                                      <img
                                                        src={employee.profilePhoto}
                                                        style={{ width: 75 }}
                                                      />
                                                    </div>

                                                    <div className="">
                                                      <p className="tx-14 text-dark mb-0 tx-semibold">
                                                        {comment.creatorId}, Posted an update.
                                                      </p>
                                                      <p className="tx-14 text-dark mb-0">
                                                        {comment.comment}{" "}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />   Status: {comment.status}{" "}

                                                      </p>

                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" /> Attachment : Click {<Link to={comment.attachment} target='black'>Here</Link>} to see

                                                      </p>
                                                    </div>
                                                    <div className="notify-time">
                                                      <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                        Comment
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          );


                                        } else if (comment.type === 'meetingUpdate') {
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
                                                        src={Img4}
                                                        style={{ width: 75 }}
                                                      />
                                                    </div>
                                                    <div className="">
                                                      <p className="tx-14 text-dark mb-0 tx-semibold">
                                                        {comment.creatorId}, Posted an update.
                                                      </p>
                                                      <p className="tx-14 text-dark mb-0">
                                                        {comment.lastCallSummary}
                                                        {" "}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />{" "}
                                                        Meeting Venue : {comment.meetingVenue}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Meeting Date : {comment.meetingDate}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Meeting Time : {comment.meetingTime}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Meeting Type : {comment.meetingType}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Status: {comment.status}
                                                        <span className="mb-0 text-muted tx-11 badge bg-pill bg-success-light">

                                                        </span>
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

                                        } else if (comment.type === 'meetingStartUpdate') {
                                          return (

                                            <li>
                                              <div className="notification-time">
                                                <p className="mb-0">
                                                  {comment.createdAtDate}
                                                  <br />
                                                  {comment.createdAtTime}
                                                </p>
                                              </div>

                                              <div className="notification-icon">
                                                <a href="javascript:void(0);" />
                                              </div>

                                              <div className="notification-time-date mb-2 d-block d-md-none">
                                                <p className="mb-0">{comment.createdAt}</p>
                                              </div>

                                              <div className="notification-body">
                                                <div className="media mt-0">
                                                  <div className="media-body ms-2 d-flex">
                                                    <div className="me-5 pt-4 pb-4">
                                                      <img src={Img4} style={{ width: 75 }} />
                                                    </div>

                                                    <div>
                                                      <p className="tx-14 text-dark mb-0 tx-semibold">
                                                        {comment.creatorId}, started a meeting .
                                                      </p>

                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Meeting Venue: {comment?.employeeMeeting?.location}
                                                      </p>

                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Meeting Date:{" "}
                                                        {new Date(comment?.employeeMeeting?.startDateTime).toLocaleDateString()}
                                                      </p>

                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Meeting Time:{" "}
                                                        {new Date(comment?.employeeMeeting?.startDateTime).toLocaleTimeString([], {
                                                          hour: '2-digit',
                                                          minute: '2-digit',
                                                           hour12: true
                                                        })}
                                                      </p>

                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Meeting Type: {comment?.employeeMeeting?.type}
                                                      </p>

                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Agenda : {comment?.employeeMeeting?.agenda}
                                                      </p>
                                                    </div>

                                                    <div className="notify-time">
                                                      <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                        Meeting Started
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>


                                          );


                                        } else if (comment.type === 'meetingEndUpdate') {
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
                                                        src={Img4}
                                                        style={{ width: 75 }}
                                                      />
                                                    </div>
                                                    <div>
                                                      <p className="tx-14 text-dark mb-0 tx-semibold">
                                                        {comment.creatorId}, ended a meeting.
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Meeting Venue : {comment?.employeeMeeting?.endlocation}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Meeting Type : {comment?.employeeMeeting?.type}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Start Time : {new Date(comment?.employeeMeeting?.startDateTime).toLocaleString([], {
                                                          hour: '2-digit',
                                                          minute: '2-digit',
                                                           hour12: true
                                                        })}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        End Time : {new Date(comment?.employeeMeeting?.endDateTime).toLocaleString([], {
                                                          hour: '2-digit',
                                                          minute: '2-digit',
                                                           hour12: true
                                                        })}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Agenda : {comment?.employeeMeeting?.agenda}
                                                      </p>
                                                    </div>
                                                    <div className="notify-time">
                                                      <p className="mb-0 text-muted tx-11 badge bg-pill bg-success-light">
                                                        Meeting Ended
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          );
                                        }
                                        else if (comment.type === 'assignUpdate') {
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
                                                        src={Img4}
                                                        style={{ width: 75 }}
                                                      />
                                                    </div>
                                                    <div className="">
                                                      <p className="tx-14 text-dark mb-0 tx-semibold">
                                                        {comment.creatorId}, Posted an update.
                                                      </p>

                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Full Name : {comment.assignTo.fullName}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Email : {comment.assignTo.emailId}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Phone No : {comment.assignTo.phoneNumber}
                                                      </p>

                                                    </div>
                                                    <div className="notify-time">
                                                      <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                        Assign Update
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>

                                          );

                                        } else if (comment.type === 'updateStatus') {
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
                                                        src={employee.profilePhoto}
                                                        style={{ width: 75 }}
                                                      />
                                                    </div>
                                                    <div className="">
                                                      <p className="tx-14 text-dark mb-0 tx-semibold">
                                                        {comment.creatorId}, Posted an update.
                                                      </p>


                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Status : {comment.status}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Remark : {comment.remark}
                                                      </p>


                                                    </div>
                                                    <div className="notify-time">
                                                      <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                        Lead Status
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>

                                          );

                                        } else if (comment.type === 'callUpdate') {
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
                                                        src={Img3}
                                                        style={{ width: 75 }}
                                                      />
                                                    </div>
                                                    <div className="">
                                                      <p className="tx-14 text-dark mb-0 tx-semibold">
                                                        {comment.creatorId}, Posted an update.
                                                      </p>
                                                      <p className="tx-14 text-dark mb-0">
                                                        {comment.lastCallSummary}
                                                        {" "}
                                                      </p>

                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Callback Date : {comment.callBackDate}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Callback Time : {comment.callBackTime}
                                                      </p>
                                                      <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Status: {comment.status}

                                                      </p>
                                                      {/* <p className="mb-0 tx-13 text-dark">
                                                        <i className="fe fe-chevrons-right me-1" />
                                                        Call Status:{" "}
                                                        <span className="mb-0 text-muted tx-11 badge bg-pill bg-success-light">
                                                          Scheduled.
                                                        </span>
                                                      </p> */}
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
                                          )
                                        } else {
                                          return null;
                                        }
                                      })

                                    ) : (
                                      <>

                                      </>

                                    )}

                                    <li>
                                      {leadDetails ? (
                                        <div>
                                          <div className="notification-time">
                                            <p className="mb-0">
                                              {leadDetails.createdAtDate}<br /> {leadDetails.createdAtTime}
                                            </p>
                                          </div>
                                          <div>
                                            <div className="notification-icon">
                                              <a href="javascript:void(0);" />
                                            </div>
                                            <div className="notification-time-date mb-2 d-block d-md-none">
                                              <p className="mb-0">
                                                10 May 2023 <br /> 12:00 PM
                                              </p>
                                            </div>
                                            <div className="notification-body">
                                              <div className="media mt-0">

                                                <div className="media-body ms-2 d-flex">
                                                  <div className="me-3">
                                                    <img
                                                      src="https://amrealty.webkype.com/assets/img/brand/logo.png"
                                                      style={{ width: 90 }}
                                                      alt="truck driver"
                                                    />
                                                  </div>

                                                  <div>
                                                    <p className="tx-14 text-dark mb-0 tx-semibold">
                                                      {leadDetails.createdBy} Added a New Sales lead.
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Full Name:  {leadDetails.clientName}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Email: {leadDetails.emailAddress}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Phone: +91 {leadDetails.clientNumber}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Address: {leadDetails.address}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Country: {leadDetails.country}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      State: {leadDetails.state}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      City: {leadDetails.city}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Project: {leadDetails.project}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Project Plan: {leadDetails.projectPlan}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Remark: {leadDetails.remark}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Status: {leadDetails.status}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Vendor: {leadDetails.vendor}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Plot Size: {leadDetails.plotSize}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Status: {leadDetails.status}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Activeness Meter: {leadDetails.activenessMeter}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Source: {leadDetails.source}
                                                    </p>
                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Client Budge: {leadDetails.clientBudget}
                                                    </p>

                                                    <p className="mb-0 tx-13 text-dark">
                                                      <i className="fe fe-chevrons-right me-1" />
                                                      Our Offer: {leadDetails.ourOffer}
                                                    </p>
                                                    {/* Add more static details as needed */}
                                                  </div>
                                                  <div className="notify-time">
                                                    <p className="mb-0 text-muted tx-11 badge bg-pill bg-danger-light">
                                                      New Lead
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      ) : (
                                        <p></p>
                                      )}

                                    </li>

                                  </ul>
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
        {/* End Main Content*/}
        {/* Main Footer*/}
        <div className="main-footer text-center">
          <div className="container">
            <div className="row row-sm">
              <div className="col-md-12">
                <span>
                  Copyright © 2023 <a href="javascript:void(0)">PWIP</a>. Designed
                  by <a href="http://webkype.com/">Webkype.com</a> All rights
                  reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default DatelsLeads