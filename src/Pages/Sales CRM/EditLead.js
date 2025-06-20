import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../amit.css";

const EditLead = ({ myLead, onClose }) => {
  const [leadValue, setLeadValue] = useState({});
  useEffect(() => {
    // Update state when data prop changes
    setLeadValue(myLead);
  }, [myLead]);
  const handleInputChange = (e) => {
    // Update the state when the input value changes
    setLeadValue({
      ...leadValue,
      [e.target.name]: e.target.value,
    });
  };

  const [leadSourceOptions, setLeadSourceOptions] = useState([]);
  const [leadPipelineOptions, setLeadPipelineOptions] = useState([]);
  const [businessCategoryOptions, setBusinessCategoryOptions] = useState([]);
  const [shipmentPotentialOptions, setShipmentPotentialOptions] = useState([]);
  const [clientPersonaOptions, setClientPersonaOptions] = useState([]);
  const [partnerOptions, setPartnerOptions] = useState([]);

  const apiUrl = process.env.REACT_APP_URL;

  const Token = localStorage.getItem("Token");
  console.log("Token:", Token);

  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/master/getAllMasterData/1`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setLeadSourceOptions(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/master/getAllMasterData/2`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setLeadPipelineOptions(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  //Quality
  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/master/getAllMasterData/3`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setBusinessCategoryOptions(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/master/getAllMasterData/4`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setShipmentPotentialOptions(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/master/getAllMasterData/5`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setClientPersonaOptions(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/partners/getAllPartnersdb`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPartnerOptions(data.data);
      })
      .catch((error) => {
        console.error("Error fetching Partners:", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      formData.forEach(function (value, key) {
        console.log(key + ": " + value);
      });
      const response = await fetch(
        `${apiUrl}/lead/updateLead/${leadValue.id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formData,
        }
      );

      const response2 = await response.json();

      console.log(response2);
      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      toast.success(response2.message);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div
        className={`modal bg-black-7 show`}
        style={{ display: "block" }}
        tabIndex="-1"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Update Lead: {leadValue.primaryContactName}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body" style={{ width: "100%" }}>
              <form className="row row-sm-1" onSubmit={handleSubmit}>
                <div className="col-sm-4 form-group">
                  <label className="form-label">Lead Source <span className="text-danger">*</span> </label>
                  <select
                    name="leadSource"
                    className="form-control form-select select2"
                    value={leadValue.leadSource}
                    onChange={handleInputChange}
                  >
                    {leadSourceOptions.map((data) => {
                      return (
                        <option key={data.name} value={data.name}>
                          {data.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">Lead Pipeline <span className="text-danger">*</span> </label>
                  <select
                    name="leadPipeline"
                    value={leadValue.leadPipeline}
                    className="form-control form-select select2"
                    onChange={handleInputChange}
                  >
                    <option>Select</option>
                    {leadPipelineOptions.map((data) => {
                      return <option value={data.name}>{data.name}</option>;
                    })}
                  </select>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">Primary Contact Name <span className="text-danger">*</span></label>
                  <input
                    className="form-control"
                    name="primaryContactName"
                    value={leadValue.primaryContactName}
                    placeholder="Enter"
                    required=""
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-4 form-group">
                  <label className="form-label">
                    Primary Contact Designation
                  </label>
                  <input
                    className="form-control"
                    name="primaryContactDesignation"
                    value={leadValue.primaryContactDesignation}
                    placeholder="Enter"
                    required=""
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-4 form-group">
                  <label className="form-label">Mobile Number <span className="text-danger">*</span></label>
                  <input
                    className="form-control"
                    name="mobileNumber"
                    value={leadValue.mobileNumber}
                    placeholder="Enter"
                    required=""
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">Company Name</label>
                  <input
                    className="form-control"
                    name="companyName"
                    value={leadValue.companyName}
                    required=""
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">Email ID <span className="text-danger">*</span></label>
                  <input
                    className="form-control"
                    name="emailId"
                    value={leadValue.emailId}
                    placeholder="Enter email"
                    required=""
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">Business Category</label>
                  <select
                    className="form-control form-select select2"
                    value={leadValue.businessCategory}
                    name="businessCategory"
                    onChange={handleInputChange}
                  >
                    <option>Select</option>
                    {businessCategoryOptions.map((data) => {
                      return <option value={data.name}>{data.name}</option>;
                    })}
                  </select>
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">Current Shipping Partner</label>
                  <select
                    name="currentShippingPartner"
                    value={leadValue.partner}
                    className="form-control form-select select2"
                    onChange={handleInputChange}
                  >
                    <option>Select</option>
                    {partnerOptions.map((data) => {
                      return (
                        <option value={data.courierName}>
                          {data.courierName}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">Shipment Potential</label>
                  <select
                    name="shipmentPotential"
                    value={leadValue.shipmentPotential}
                    className="form-control form-select select2"
                    onChange={handleInputChange}
                  >
                    <option>Select</option>
                    {shipmentPotentialOptions.map((data) => {
                      return <option value={data.name}>{data.name}</option>;
                    })}
                  </select>
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">
                    Min. Expected Shipment to Fship
                  </label>
                  <input
                    className="form-control"
                    name="minimumExpectedShipmentToFship"
                    required=""
                    placeholder="Enter "
                    value={leadValue.minimumExpectedShipmentToFship}
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">Client Persona</label>
                  <select
                    name="clientPersona"
                    value={leadValue.clientPersona}
                    className="form-control form-select select2"
                    onChange={handleInputChange}
                  >
                    <option>Select</option>
                    {clientPersonaOptions.map((data) => {
                      return <option value={data.name}>{data.name}</option>;
                    })}
                  </select>
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">UTM Source</label>
                  <input
                    className="form-control"
                    name="utmSource"
                    value={leadValue.utmSource}
                    placeholder="Enter "
                    required=""
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">UTM Medium</label>
                  <input
                    className="form-control"
                    name="utmMedium"
                    value={leadValue.utmMedium}
                    placeholder="Enter "
                    required=""
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>{" "}
                <div className="col-sm-4 form-group">
                  <label className="form-label">UTM Campaign</label>
                  <input
                    className="form-control"
                    name="utmCampaign"
                    value={leadValue.utmCampaign}
                    placeholder="Enter "
                    required=""
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">UTM Term</label>
                  <input
                    className="form-control"
                    name="utmTerm"
                    value={leadValue.utmTerm}
                    placeholder="Enter "
                    required=""
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-4 form-group">
                  <label className="form-label">UTM Content</label>
                  <input
                    className="form-control"
                    name="utmContent"
                    value={leadValue.utmContent}
                    placeholder="Enter "
                    required=""
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-12">
                  <button className="btn ripple btn-primary" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditLead;
