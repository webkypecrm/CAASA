import React, { useEffect, useState } from "react";
import MainPage from "../../Components/MainPage";
import Prince from "../../Components/Prince";
import DropdownMenu from "../../Components/DropdownMenu";
import { Button } from "bootstrap";
import TopHeader from "../../Components/TopHeader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Prompt from "../../Components/Promt";

function Partner() {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_URL;

  const Token = localStorage.getItem("Token");
  console.log("Token " + Token);

  console.log(apiUrl);
  const [partners, setPartners] = useState([]);
  const [partnerSyncDate, setpartnerSyncDate] = useState("");
  const [search, setSearch] = useState("");

  const getAllPartners = async () => {
    const response = await fetch(`${apiUrl}/partners/getAllPartners`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    const response2 = await response.json();
    setPartners(response2.data);
    setpartnerSyncDate(response2?.partnerSyncDate);
  };

  const handleYes = () => {
    toast.promise(getAllPartners, {
      pending: "We are fetching new partner - It may take some time.... Please Wait",
      success: "Partners fetched successfully 👌",
      error: "Unable to fetch partners 🤯",
    });
  };

  const handleCancel = () => {
    toast.dismiss();
  };

  const syncPartner = (e) => {
    e.preventDefault();
    return Prompt("Do you want to sync the partners?", handleYes, handleCancel);
    // fetch(`${apiUrl}/partners/getAllPartners`, {
    //   headers: {
    //     Authorization: `Bearer ${Token}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setPartners(data.data);
    //     setpartnerSyncDate(data?.partnerSyncDate);
    //     toast.success("Partners Synced Successfully");
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching Partners:", error);
    //     toast.error("Partners Sync Failed");
    //   });
  };

  const editPartner = (e) => {
    e.preventDefault();
    navigate(`/partner/${e.target.id}`);
  };

  useEffect(() => {
    fetch(`${apiUrl}/partners/getAllPartnersdb`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPartners(data.data);
    setpartnerSyncDate(data?.partnerSyncDate);
      })
      .catch((error) => {
        console.error("Error fetching Partners:", error);
      });
  }, []);

  const filteredPartners = partners.filter((user) => {
    return (
      user?.courierId.toString().includes(search) ||
      user.courierName.toLowerCase().includes(search)
    );
  });

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    async function getEmp() {
      const url = `${apiUrl}/employee/employee`;

      const Token = localStorage.getItem("Token");
      console.log("Token " + Token);

      let response = await fetch(url, {
        method: "POST",
        headers: {
          Auth: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        setEmployee(response.data);
      }
    }
    getEmp();
  }, []);

  return (
    <div className="page">
      <TopHeader />
      <Prince />
      <div className="main-content side-content pt-0 m-0">
        <div className="main-container container-fluid">
          <div className="inner-body">
            <div className="page-header">
              <div>
                <h2 className="main-content-title tx-24 mg-b-5">
                  Partners List
                </h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Partners </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    New Partners List
                  </li>
                </ol>
              </div>
              <div className="d-flex">
                <div className="justify-content-center">
                  <a
                    href="/#"
                    className={`btn btn-primary my-2 btn-icon-text ${employee.userType === "0" ? 'd-none' : 'd-inline-block'}`}
                    style={{ color: "white" }}
                    onClick={syncPartner}
                  >
                    Sync Partner
                  </a>
                  <br />
                  Last Partner Sync: {partnerSyncDate}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card custom-card">
                  <div className="card-body py-3">
                    <form className="row">
                      <div className="col-sm-6">
                        <input
                          type="search"
                          className="form-control form-control"
                          placeholder="Search..."
                          aria-controls="example1"
                          name="search"
                          onChange={(e) => {
                            setSearch(e.target.value);
                          }}
                        />
                      </div>
                      {/* <div className="col-sm-2">
                                                <select className="form-control select2">
                                                    <option label="Choose one">Gender</option>
                                                    <option value="Firefox">Male</option>
                                                    <option value="Chrome">Female</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-2">
                                                <select className="form-control select2">
                                                    <option label="Choose one">Status</option>
                                                    <option value="Firefox">Active</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-2">
                                                <select className="form-control select2">
                                                    <option label="Choose one">Department</option>
                                                    <option value="Firefox">Mangement</option>
                                                    <option value="Firefox">Sales</option>
                                                </select>
                                            </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-sm">
              <div className="col-lg-12">
                <div className="card custom-card">
                  <div className="card-body">
                    <div className="table-responsive text-center">
                      <table className="table table-striped table-bordered text-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Logo</th>
                            <th>Name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredPartners?.map((p, i) => {
                            return (
                              <tr key={p.courierId}>
                                <td>{p.courierId}</td>
                                <td>
                                  <img
                                    src={p.logoUrl}
                                    height={"70px"}
                                    width={"70px"}
                                  ></img>
                                </td>
                                <td>{p.courierName}</td>
                                <td>
                                  <button
                                    id={p.courierId}
                                    onClick={editPartner}
                                    className="btn ripple btn-primary w-50"
                                  >
                                    Edit Partner
                                  </button>{" "}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    {/* Main Footer*/}
                    <div className="main-footer text-center">
                      <div className="container">
                        <div className="row row-sm">
                          <div className="col-md-12">
                            <span>
                              Copyright © 2023{" "}
                              <a href="javascript:void(0)">FSHIP</a>. Designed
                              by <a href="http://webkype.com/">Webkype.com</a>{" "}
                              All rights reserved.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End Footer*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
