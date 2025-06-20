import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NewLeads from "./NewLeads";
import { toast } from "react-toastify";
import EditLead from "./EditLead";
import { useMemo } from "react";

function NewLeadsTable() {
  // const [allLeads, setAllLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [modelOPen, setModalOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [assignedTo, setAssignedTo] = useState("");
  const [assignedLeadId, setAssignedLeadId] = useState("");
  const { status } = useParams();

  const [countWon, setCountWon] = useState();
  const [countintergrationInPro, setCountintergrationInPro] = useState();
  const [countnegotiation, setCountnegotiation] = useState();
  const [countLOST, setCountLOST] = useState();
  const [countconatactInFuture, setCountconatactInFuture] = useState();
  const [countCallAttempted, setCountCallAttempted] = useState();
  const [countproposal, setCountproposal] = useState();
  const [countFollowup, setCountFollowup] = useState();
  const [countNew, setCountNew] = useState();

  const apiUrl = process.env.REACT_APP_URL;
  console.log(apiUrl);

  const Token = localStorage.getItem("Token");
  console.log("Token:", Token);

  const navigate = useNavigate();

  const loadcontent = (id) => {
    console.log(id); // Check the value of id
    navigate(`/DatelsLeads/${id}`);
  };

  const handleAssign = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("id", assignedTo);

    const response = await fetch(
      `${apiUrl}/lead/assignedLead/${assignedLeadId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
        body: formDataToSend,
      }
    );
    console.log(response, "hereeeee=======>>>>>>>");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    setModalOpen(false);

    const data = await response.json();
    toast.success("Assigned successfully");
    console.log("Form submitted successfully!", data);
    // navigate(`/NewLeads/new`);
  };

  const fetchAllLead = () => {
    const url = window.location.href.includes("NewLeads")
      ? `${apiUrl}/lead/getAllLead/${status}`
      : `${apiUrl}/lead/getAllMasterLeads/${status}`;

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          if (Array.isArray(data.data)) {
            // let filtLeads = data.data.filter(item => item.status === status);
            setFilteredLeads(data.data);
            setCountCallAttempted(data.callAttemted);
            setCountFollowup(data.Followup);
            setCountLOST(data.LOST);
            setCountNew(data.New);
            setCountWon(data.won);
            setCountconatactInFuture(data.conatactInFuture);
            setCountLOST(data.LOST);
            setCountintergrationInPro(data.intergrationInPro);
            setCountnegotiation(data.negotiation);
            setCountproposal(data.proposal);
          } else {
            console.error("API response does not contain users array:", data);
          }
        } else {
          console.error("API request was not successful:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  // ledes list api
  useEffect(() => {
    fetchAllLead();
    setLoaded(true);
  }, [status]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const Token = localStorage.getItem("Token");
    console.log("Token:", Token);

    fetch(`${apiUrl}/employee/employees`, {
      headers: {
        Authorization: `Bearer ${Token}`, // Include the Token in the Authorization header
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          if (Array.isArray(data.data)) {
            console.log(data.data, "all employees");
            setEmployees(data.data);
          } else {
            console.error("API response does not contain users array:", data);
          }
        } else {
          console.error("API request was not successful:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredUsers = filteredLeads.filter((user) => {
    return (
      user?.id.toString().includes(search) ||
      user.primaryContactName.toLowerCase().includes(search.toLowerCase())
    );
  });

  const [leadData, setLeadData] = useState({});
  const [IsUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleSetEditLead = (e) => {
    e.preventDefault();
    const lead = JSON.parse(e.target.dataset.lead);
    setIsUpdateModalOpen(true);
    setLeadData(lead);
  };

  const closeEditModal = () => {
    setIsUpdateModalOpen(false);
  };

  return (
    <div className="page">
      <div className="row">
        <NewLeads />
        

        <div style={{ marginTop: "150px" }}>
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
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
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
                  <div className="text-wrap">
                    <div className="panel panel-primary tabs-style-3 p-0 tabs-style-3-0">
                      <div className="tab-menu-heading">
                        <div className="tabs-menu ">
                          {/* Tabs */}
                          <ul
                            className={`nav panel-tabs ${
                              window.location.href.includes("NewLeads")
                                ? "d-flex"
                                : "d-none"
                            }`}
                          >
                            <li className="">
                              <a
                                role="button"
                                onClick={() => {
                                  navigate("/NewLeads/new");
                                }}
                                className={status === "new" ? "active" : ""}
                              >
                                New ({countNew})
                              </a>
                            </li>
                            <li>
                              <a
                                role="button"
                                onClick={() => {
                                  navigate("/NewLeads/call-attempted");
                                }}
                                className={
                                  status === "call-attempted" ? "active" : ""
                                }
                              >
                                Call Attempted ({countCallAttempted})
                              </a>
                            </li>
                            <li>
                              <a
                                role="button"
                                onClick={() => {
                                  navigate("/NewLeads/contact-in-future");
                                }}
                                className={
                                  status === "contact-in-future" ? "active" : ""
                                }
                              >
                                Contact in future ({countconatactInFuture})
                              </a>
                            </li>
                            <li>
                              <a
                                role="button"
                                onClick={() => {
                                  navigate("/NewLeads/follow-up");
                                }}
                                className={
                                  status === "follow-up" ? "active" : ""
                                }
                              >
                                Follow-up ({countFollowup})
                              </a>
                            </li>
                            <li>
                              <a
                                role="button"
                                onClick={() => {
                                  navigate("/NewLeads/proposal");
                                }}
                                className={
                                  status === "proposal" ? "active" : ""
                                }
                              >
                                Proposal ({countproposal})
                              </a>
                            </li>
                            <li>
                              <a
                                role="button"
                                onClick={() => {
                                  navigate("/NewLeads/negotiation");
                                }}
                                className={
                                  status === "negotiation" ? "active" : ""
                                }
                              >
                                Negotiation ({countnegotiation})
                              </a>
                            </li>
                            <li>
                              <a
                                role="button"
                                onClick={() => {
                                  navigate("/NewLeads/integration-inprogress");
                                }}
                                className={
                                  status === "integration-inprogress"
                                    ? "active"
                                    : ""
                                }
                              >
                                In-Integration ({countintergrationInPro})
                              </a>
                            </li>
                            <li>
                              <a
                                role="button"
                                onClick={() => {
                                  navigate("/NewLeads/closed-won-SYTS");
                                }}
                                className={
                                  status === "closed-won-SYTS" ? "active" : ""
                                }
                              >
                                Closed Won- SYTS ({countWon})
                              </a>
                            </li>
                            <li>
                              <a
                                role="button"
                                onClick={() => {
                                  navigate("/NewLeads/lost");
                                }}
                                className={status === "lost" ? "active" : ""}
                              >
                                Lost ({countLOST})
                              </a>
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
        <div className="tab-pane active row">
          {loaded ? (
            <>
              <div className="table-responsive">
                <table className="table table-striped table-bordered text-nowrap mb-0">
                  <thead>
                    <tr>
                      {/* <th>
                        <label className="ckbox">
                          <input type="checkbox" defaultValue={5} />
                          <span />
                        </label>
                      </th> */}
                      <th>ID</th>
                      <th>SOURCE</th>
                      {/* <th>PHOTO</th> */}
                      <th>UTM</th>
                      <th>CLIENT</th>
                      <th>CLIENT INFO</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id}>
                        {/* <td>
                          <label className="ckbox">
                            <input type="checkbox" defaultValue={5} />
                            <span />
                          </label>
                        </td> */}
                        <td>
                          <p>
                            LD-<b>{user.id}</b>
                          </p>
                        </td>
                        <td>
                          <p className="mb-0">
                            Source: <b>{user.leadSource}</b>
                            <br />
                            Status:{" "}
                            <b>
                              {user.masterStatus?.charAt(0).toUpperCase() +
                                user.masterStatus?.slice(1)}
                            </b>
                            <br />
                            Stage:{" "}
                            <b>
                              {user.status?.charAt(0).toUpperCase() +
                                user.status?.slice(1)}
                            </b>
                            <br />
                            Pipeline: <b>{user.leadPipeline}</b>
                            <br />
                            {user.assignedTo && (
                              <div>
                                Assigned To: <b>{user.assignedTo}</b>
                              </div>
                            )}
                            {
                              <div>
                                Company ID: 
                                <b>{user.companyId}</b>
                              </div>
                            }
                            <div>
                              KYC: 
                              <b>{user.isKycDone}</b>
                            </div>
                            <div>
                              Remark: 
                              <b>{user.remark}</b>
                            </div>
                            {
                              <div>
                                Added On: 
                                <b>
                                  {new Date(user.createdAt)
                                    .toISOString()
                                    .slice(0, 10)}
                                </b>
                              </div>
                            }
                            {/*span class="plus_btn_" data-bs-target="#modaldemo-employee-form" data-bs-toggle="modal"></span*/}
                          </p>
                        </td>
                        {/* <td>
                          <img
                            alt="avatar"
                            className="rounded-circle me-3"
                            src="../assets/img/users/5.jpg"
                            style={{ width: 60 }}
                          />
                        </td> */}
                        <td>
                          <p className="mb-0">
                            Source: <b>{user.utmSource}</b>
                            <br />
                            Medium: <b>{user.utmMedium}</b>
                            <br />
                            Campaign: <b>{user.utmCampaign}</b>
                            <br />
                            Term: <b>{user.utmTerm}</b>
                            <br />
                            Content: <b>{user.utmContent}</b>
                          </p>
                        </td>
                        <td>
                          <p className="mb-0">
                            <b>
                              {user.primaryContactName
                                ?.charAt(0)
                                .toUpperCase() +
                                user.primaryContactName?.slice(1)}
                            </b>
                            <br />
                            Emai: <b>{user.emailId}</b>
                            <br />
                            Phon: <b>{user.mobileNumber}</b>
                            {/* <br />
                                                    {(user.companyId) && <div>
                                                        CompanyId :<b>{user.companyId}</b>
                                                    </div>} */}
                          </p>
                        </td>
                        <td>
                          <p className="mb-0">
                            Company: <b>{user.companyName}</b>
                            <br />
                            Designatio:{" "}
                            <b>{user.primaryContactDesignation}</b>
                            <br />
                            Business Category: <b>{user.businessCategory}</b>
                            <br />
                            Current Shipping Partner:{" "}
                            <b>{user.currentShippingPartner}</b>
                            <br />
                            Shipment Potential:{" "}
                            <b>{user.shipmentPotential}</b>
                            <br />
                            Min Expected Shipment to Fship:{" "}
                            <b>{user.minimumExpectedShipmentToFship}</b>
                            <br />
                            Client Persona: <b>{user.clientPersona}</b>
                          </p>
                        </td>
                        <td>
                          <a
                            className="btn ripple btn-warning btn-xs w-100 mb-1 mt-1"
                            onClick={() => loadcontent(user.id)}
                          >
                            Details
                          </a>
                          {window.location.href.includes("NewLeads") && (
                            <>
                              <br />
                              <button
                                type="button"
                                className="btn ripple btn-success btn-xs w-100 mb-1"
                                onClick={handleSetEditLead}
                                data-lead={JSON.stringify(user)}
                              >
                                Edit Lead
                              </button>
                              {/* <a
                                                // href=""
                                                className="btn ripple btn-info btn-xs w-100 mb-1"
                                            >
                                                Followup
                                            </a> */}
                              <br />

                              <a
                                // href=""
                                className="btn ripple btn-info btn-xs w-100 mb-1"
                                onClick={() => {
                                  setModalOpen(true);
                                  setAssignedLeadId(user.id);
                                }}
                              >
                                Assign
                              </a>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredUsers.length === 0 && (
                  <div className="text-center row m-5">
                    <h1>No Leads Found</h1>
                  </div>
                )}
              </div>
            </>
          ) : (
            <h1 className="text-center">Loading...</h1>
          )}
          <div
            className={`modal ${modelOPen ? "show" : ""}`}
            style={{ display: modelOPen ? "block" : "none" }}
            tabIndex="-1"
            role="dialog"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-xl"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Assign</h5>
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

                <div className="modal-body" style={{ width: "100%" }}>
                  <div className="row row-sm-1">
                    <div className="col-sm-4 form-group">
                      <label className="form-label">Assign : </label>
                      <select
                        name="assignedTo"
                        value={assignedTo}
                        className="form-control form-select select2"
                        onChange={(e) => {
                          setAssignedTo(e.target.value);
                        }}
                      >
                        <option>Select</option>
                        {employees.map((data) => {
                          return (
                            <option value={data.id}>
                              {data.firstName + " " + data.lastName}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <button
                        className="btn ripple btn-primary"
                        type="button"
                        onClick={handleAssign}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
        </div>

        {/* Main Footer*/}
        <div className="main-footer text-center">
          <div className="container">
            <div className="row row-sm">
              <div className="col-md-12">
                <span>
                  Copyright © 2023 <a href="javascript:void(0)">FSHIP</a>.
                  Designed by <a href="http://webkype.com/">Webkype.com</a> All
                  rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*End Footer*/}
      </div>
    </div>
  );
}

export default NewLeadsTable;
