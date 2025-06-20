import React, { useState, useEffect } from "react";
import MainPage from "../../Components/MainPage";
import Prince from "../../Components/Prince";
import DropdownMenu from "../../Components/DropdownMenu";
import { Button } from "bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TopHeader from "../../Components/TopHeader";

function EditPartner() {
  const apiUrl = process.env.REACT_APP_URL;
  console.log(apiUrl);
  const Token = localStorage.getItem("Token");
  console.log("Token:", Token);
  const navigation = useNavigate();

  const { id } = useParams();
  const [partner, setPartner] = useState([]);
  const [addContact, setAddContact] = useState(true);
  const [allContact, setAllContact] = useState([]);
  const [newContact, setNewContact] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/partners/getPartnerContact/${id}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPartner(data.data[0]);
        setAllContact(data.data[0].partnerContactInfo);
        if (data.data[0].partnerContactInfo.length > 0) {
          setAddContact(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching Partners:", error);
      });
  }, [newContact]);

  useEffect(() => {
    // Make an API request to fetch gender options
    fetch(`${apiUrl}/master/getAllMasterData/7`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setDepartment(data.data);
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
    fetch(`${apiUrl}/master/getAllMasterData/6`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setDesignation(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  // Assuming you have a state variable called contact that stores the contact information
  const [contact, setContact] = useState({
    name: "",
    email: "",
    mobile: "",
    department: "",
    designation: "",
  });

  // A function to handle the contact data of the input fields
  const contactChange = (e, i) => {
    let newObj = [...allContact];
    const { name, value } = e.target;
    newObj[i][name] = value;
    console.log(newObj, "======>>>> here");
    setAllContact([...newObj]);
  };

  // A function to handle the change of the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  // A function to handle the submit of the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("working ================>>>>>>>>>>>>>.");
    const formDataToSend = new FormData();
    for (const key in contact) {
      if (contact[key] !== null && contact[key] !== "") {
        formDataToSend.append(key, contact[key]);
      }
    }

    formDataToSend.append("previousContact", JSON.stringify(allContact));
    try {
      formDataToSend.set("isNew", false);
      if (formDataToSend.get("previousContact") === "[]") {
        formDataToSend.set("isNew", true);
        console.log("TEST1", formDataToSend.get("previousContact"));
      }
      if (
        formDataToSend.get("name") ||
        formDataToSend.get("email") ||
        formDataToSend.get("mobile") ||
        formDataToSend.get("department") ||
        formDataToSend.get("designation")
      ) {
        formDataToSend.set("isNew", true);
        console.log(
          "TEST2",
          formDataToSend.get("name"),
          formDataToSend.get("email"),
          formDataToSend.get("mobile"),
          formDataToSend.get("department"),
          formDataToSend.get("designation")
        );
      }

      const response = await fetch(
        `${apiUrl}/partners/createPartnerData/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === false) {
        throw new Error(response2.message);
      }

      setNewContact([...newContact, { ...contact }]);
      toast.success("Form submitted successfully");
      // navigation('/partners')
      window.location.reload();
      // setContact({
      //   name: "",
      //   email: "",
      //   mobile: "",
      //   department: "",
      //   designation: "",
      // });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="page">
      <TopHeader />
      <Prince />
      <div className="page-header m-4">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Add Partner</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Internal Staff
            </li>
          </ol>
        </div>
      </div>

      <div className="row m-4">
        <div
          className="col-3 card m-2 b text-center"
          style={{ height: "fit-content" }}
        >
          <h3 className="mb-2">{partner.courierName}</h3>
          <div>
            <img
              className="d-inline"
              src={partner?.logoUrl}
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
        <div
          className="contact-info card col ml-2"
          style={{ height: "fit-content" }}
        >
          <h3 className="d-inline fs-5 m-3 col">Contact Info</h3>
          {partner.partnerContactInfo?.map((data, i) => {
            return (
              <div className={`row`}>
                <div className="col m-1">
                  <h6 className="mt-4 col">Contact {i + 1}</h6>
                </div>
                <div className="col m-1">
                  <label className="row form-label" for={`name-${i + 1}`}>
                    Full Name:{" "}
                    <span className="tx-danger">{i === 0 ? "*" : ""}</span>
                  </label>
                  <input
                    className="row form-control"
                    value={data.name}
                    type="text"
                    name={`name`}
                    id={i}
                    required={i === 0}
                    onChange={(e) => {
                      contactChange(e, i);
                    }}
                  />
                </div>
                <div className="col m-1">
                  <label className="row form-label" for={`email`}>
                    Email:{" "}
                    <span className="tx-danger">{i === 0 ? "*" : ""}</span>
                  </label>
                  <input
                    className="row form-control"
                    value={data.email}
                    type="email"
                    name={`email`}
                    id={i}
                    required={i === 0}
                    onChange={(e) => {
                      contactChange(e, i);
                    }}
                  />
                </div>
                <div className="col m-1">
                  <label className="row form-label" for={`mobile`}>
                    Mobile:{" "}
                    <span className="tx-danger">{i === 0 ? "*" : ""}</span>
                  </label>
                  <input
                    className="row form-control"
                    value={data.mobile}
                    type="mobile"
                    name={`mobile`}
                    id={i}
                    required={i === 0}
                    onChange={(e) => {
                      contactChange(e, i);
                    }}
                  />
                </div>
                <div className="col m-1">
                  <label className="row form-label" for={`department`}>
                    Department:{" "}
                    <span className="tx-danger">{i === 0 ? "*" : ""}</span>
                  </label>
                  <select
                    name={`department`}
                    id={i}
                    value={data.department}
                    className="form-control form-select select2"
                    onChange={(e) => {
                      contactChange(e, i);
                    }}
                  >
                    <option>Select</option>
                    {department.map((d) => {
                      return (
                        <option
                          value={d.name}
                          selected={data.department === d.name}
                        >
                          {d.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col m-1">
                  <label className="row form-label" for={`designation`}>
                    Designation:{" "}
                    <span className="tx-danger">{i === 0 ? "*" : ""}</span>
                  </label>
                  <select
                    name={`designation`}
                    id={i}
                    value={data.designation}
                    className="form-control form-select select2"
                    onChange={(e) => {
                      contactChange(e, i);
                    }}
                  >
                    <option>Select</option>
                    {designation.map((d) => {
                      return (
                        <option
                          value={d.name}
                          selected={data.department === d.name}
                        >
                          {d.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            );
          })}

          {addContact && (
            <div className={`row`}>
              <div className="col m-1">
                <h6 className="mt-4 col">Enter Contact</h6>
              </div>
              <div className="col m-1">
                <label className="row form-label" for={`name`}>
                  Full Name:
                </label>
                <input
                  className="row form-control"
                  placeholder="Enter"
                  type="text"
                  name={`name`}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="col m-1">
                <label className="row form-label" for={`email`}>
                  Email:
                </label>
                <input
                  className="row form-control"
                  placeholder="Enter"
                  type="email"
                  name={`email`}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="col m-1">
                <label className="row form-label" for={`mobile`}>
                  Mobile:
                </label>
                <input
                  className="row form-control"
                  placeholder="Enter"
                  type="mobile"
                  name={`mobile`}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="col m-1">
                <label className="row form-label" for={`department`}>
                  Department:
                </label>
                <select
                  name={`department`}
                  className="form-control form-select select2"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option>Select</option>
                  {department.map((d) => {
                    return <option value={d.name}>{d.name}</option>;
                  })}
                </select>
              </div>
              <div className="col m-1">
                <label className="row form-label" for={`designation`}>
                  Designation:{" "}
                </label>
                <select
                  name={`designation`}
                  className="form-control form-select select2"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option>Select</option>
                  {designation.map((d) => {
                    return <option value={d.name}>{d.name}</option>;
                  })}
                </select>
              </div>
            </div>
          )}

          <div className="m-2">
            <button
              className={`btn btn-primary m-2`}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              Save
            </button>
            <button
              className={`btn btn-primary m-2`}
              onClick={(e) => {
                e.preventDefault();
                setAddContact(!addContact);
              }}
            >
              {" "}
              {addContact ? "- Remove" : "+ Add"}{" "}
            </button>
          </div>
        </div>
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
  );
}

export default EditPartner;
