import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import Prince from "./Prince";
import DropdownMenu from "./DropdownMenu";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TopHeader from "./TopHeader";

const AddMaster = () => {
  const initialFormData = {
    name: "",
    // id:'',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_URL;
  console.log(apiUrl);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // Set profilePicFile for image files
        setProfilePicFile(file);
        setFormData((prevData) => ({
          ...prevData,
          profilePhoto: file,
        }));
      } else if (file.type === "application/pdf") {
        // Set aadhaarUpload for PDF files
        setFormData((prevData) => ({
          ...prevData,
          aadhaarUpload: file,
          panUpload: file,
          drivingLicence: file,
          cheque: file,
        }));
      } else {
        console.log("Unsupported file type");
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const Token = localStorage.getItem("Token");
    console.log("Token:", Token);

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }

      const response = await fetch(`${apiUrl}/master/addMaster`, {
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
      toast.success(response2.message);
      navigate("/Master");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
        setShowLoader(false);
    }, 800);

    return () => clearTimeout(timeout);
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
      {showLoader && (
                    <div id="global-loader">
                        <div className="spinner-border text-info loader-img" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
        <TopHeader />
        <Prince />
        
        <div className="main-content  pt-0">
          <div className="main-container container-fluid">
            <div className="inner-body">
              {/* Page Header */}
              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">
                    Add Master
                  </h2>
                  
                </div>
                
              </div>
             
              <div className="row row-sm">
                <div className="col-lg-6 col-md-6">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-3"></h6>
                      </div>
                      <div className="row row-sm">
                        <div className="col-sm-4  form-group">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-lg-4 form-group">
                          <div className="input-group"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Row */}
              {/* Row */}

              {/* End Row */}
              <div className="row row-sm">
                <div className="col-12 mb-3">
                  <a
                    href="employee-profile.html"
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default AddMaster;
