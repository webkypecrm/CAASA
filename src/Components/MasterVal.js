import React, { useState, useEffect } from "react";
import Prince from "./Prince";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopHeader from "./TopHeader";

function MasterVal() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const initialFormData = {
    name: '',
    mastersId: "",


  };
  const [formData, setFormData] = useState(initialFormData);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const Token = localStorage.getItem("Token");
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_URL;

  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
    document.body.classList.add('modal-open');
  };
  const handleCloseModal2 = () => {
    setIsModalOpen2(false);

    document.body.classList.remove('modal-open');
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
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.3)', // Slight transparency for background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    loaderContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '15px',  // Increased gap for better visibility
    },
    dot: {
      width: '20px',  // Increased size for better visibility
      height: '20px',
      borderRadius: '50%',
      backgroundColor: '#3498db',  // Bright blue for emphasis
      animation: 'bounce 1.2s infinite ease-in-out',
    },
  };

  // Inject keyframes into the document
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  const deleteContent = (id, mastersId) => {
    if (mastersId !== 5) {
      fetch(`${apiUrl}/master/deleteMasterData/` + id, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${Token}`,
        }
      })
        .then((res) => {
          if (res.ok) {
            fetchDataFromApi();
            toast.success("Master value deleted successfully");
          } else {
            throw new Error('Failed to delete');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert("Cannot delete Lead Status entry");
    }
  };

  const handleButtonClick = (id, mastersId) => {
    if (mastersId === 5) {
      alert("Cannot delete Lead Status entry");
    } else {
      deleteContent(id, mastersId);
    }
  };

  useEffect(() => {
  
    fetch(`${apiUrl}/master/getAllMaster`, {
      headers: {
        'Authorization': `Bearer ${Token}`,
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.data)) {
          setDepartments(data.data);
        } else {
          console.error('API response does not contain an array:', data);
        }
       
      })
      .catch(error => {
        console.error('Error fetching masters data:', error);
      });
    
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }

      const apiUrl = process.env.REACT_APP_URL;
      console.log(apiUrl);

      const response = await fetch(`${apiUrl}/master/addMasterData`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Token}`,
        },
        body: formDataToSend,
      });

      console.log(response);

      const response2 = await response.json();
      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      toast.success(response2.message);
      fetchDataFromApi();
      handleCloseModal2();
      setFormData(initialFormData);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;

    setFormData({
      ...formData,
      mastersId: selectedCountry,
    });

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }


  const fetchDataFromApi = () => {
    setLoading(true);
    fetch(`${apiUrl}/master/getAllMasterrData`, {
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
            console.error("API response does not contain users array:", data);
          }
        } else {
          console.error("API request was not successful:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
      setLoading(false);
  }
  useEffect(() => {
    fetchDataFromApi()
  }, []);


  const filteredUsers = users.filter((user) => {
    return (
      user.id.toString().includes(search) ||
      user.masterName.includes(search) ||
      (user.name.includes(search) &&
        (statusFilter === "" || user.status.toString() === statusFilter))
    );
  });


  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideIn {
            from { transform: translateY(-300px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes btnFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(styleSheet);
  }, []);



  useEffect(() => {
    const token = localStorage.getItem('Token');

    if (!token) {
      navigate('/');
    }
  }, [navigate]);

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
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">
                    Master Value List
                  </h2>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Master </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Master Values{" "}
                    </li>
                  </ol>
                </div>
                <div className="d-flex">
                  <div className="justify-content-center">
                    <button
                      onClick={handleOpenModal2}
                      className="btn btn-primary my-2 btn-icon-text"
                      type="button"
                    >
                      {" "}
                      <i className="fe fe-plus me-2" />
                      Master value
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`modal fade ${isModalOpen2 ? 'show d-block' : ''}`}
                id="modaldemo-callback-form"
                tabIndex="-1"
                style={{
                  display: isModalOpen2 ? 'flex' : 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  animation: 'fadeIn 0.5s',
                }}
              >
                <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '30%', margin: 'auto' }}>
                  <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', animation: 'slideIn 0.5s' }}>
                    <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                      <h5 className="modal-title">Add Master value</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={handleCloseModal2}
                        aria-label="Close"
                        style={{ outline: 'none', cursor: 'pointer' }}
                      ></button>
                    </div>

                    <div className="modal-body" style={{ padding: '20px' }}>
                      <form>
                        <div className="row row-sm">
                          <div className="col-sm-12 form-group">
                            <label className="form-label">Master  <span className="tx-danger">*</span></label>
                            <select onChange={handleCountryChange}
                              className='form-control form-select'
                              name="mastersId"
                              value={formData.mastersId}>
                              <option>Select Master</option>
                              {departments.map((department) => (
                                <option key={department.id} value={department.id}>
                                  {department.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-sm-12 form-group">
                            <label className="form-label">Master Value  <span className="tx-danger">*</span></label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                      <button className="btn ripple btn-primary" type="submit" style={{
                        borderRadius: '5px', padding: '8px 20px',
                        fontSize: '14px', fontWeight: 'bold',
                        animation: 'btnFadeIn 0.5s'
                      }} onClick={handleSubmit}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Page Header */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card custom-card">
                    <div className="card-body py-3">
                      <div className="row">
                        <div className="col-sm-6">
                          <input
                            type="search"
                            className="form-control form-control"
                            placeholder="Search..."
                            aria-controls="example1"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          />
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
                        {loading ? (
                          <div style={loaderStyles.overlay}>
                            <div style={loaderStyles.loaderContainer}>
                              <div style={loaderStyles.dot}></div>
                              <div style={{ ...loaderStyles.dot, animationDelay: '0.2s' }}></div>
                              <div style={{ ...loaderStyles.dot, animationDelay: '0.4s' }}></div>
                            </div>
                          </div>
                        ) : (
                          <table className="table table-striped table-bordered text-nowrap mb-0 text-center">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Master Name</th>
                                <th>Master Value</th>
                                <th> Action </th>
                              </tr>
                            </thead>
                            <tbody>
                              {filteredUsers.map((user) => (
                                <tr key={user.id}>
                                  <td>{user.id}</td>
                                  <td>
                                    {user.masterName}
                                  </td>
                                  <td>
                                    {user.name}
                                  </td>
                                  <td>
                                    <button
                                      className="btn ripple btn-primary btn-xs w-70 equal-buttons"
                                      onClick={() => handleButtonClick(user.id, user.mastersId)}
                                      disabled={user.mastersId === 5}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                           )}
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
}

export default MasterVal;
