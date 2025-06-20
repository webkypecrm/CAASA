import React, { useState, useEffect } from "react";
import Prince from "../../Components/Prince";
import { useNavigate } from "react-router-dom";
import TopHeader from "../../Components/TopHeader";
import { toast } from "react-toastify";
import Prompt from "../../Components/Promt";
const apiUrl = process.env.REACT_APP_URL;
const Token = localStorage.getItem("Token");

function Plan() {
  const navigate = useNavigate();

  const [plans, setPlans] = useState([]);
  const [planSyncDate, setplanSyncDate] = useState("");
  const [search, setSearch] = useState("");

  const getAllPlans = async () => {
    const response = await fetch(`${apiUrl}/plan/getAllPlans`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    const response2 = await response.json();
    setPlans(response2.data);
    setplanSyncDate(response2?.planSyncDate);
  };

  const handleYes = () => {
    toast.promise(getAllPlans, {
      pending: "We are fetching new plans - It may take some time.... Please Wait",
      success: "Plans fetched successfully 👌",
      error: "Unable to fetch plans 🤯",
    });
  };

  const handleCancel = () => {
    toast.dismiss();
  };

  const syncPlan = (e) => {
    e.preventDefault();
    return Prompt("Do you want to sync the plans?", handleYes, handleCancel);
  };

  const viewPlan = (e) => {
    e.preventDefault();
    navigate(`/plans/${e.target.id}`);
  };

  useEffect(() => {
    fetch(`${apiUrl}/plan/getAllPlansdb`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlans(data.data);
    setplanSyncDate(data?.planSyncDate);
      })
      .catch((error) => {
        console.error("Error fetching Plans:", error);
      });
  }, []);

  const filteredPlans = plans.filter((user) => {
    return (
      user?.planId.toString().includes(search) || user.planName.includes(search)
    );
  });
  const [employee, setEmployee] = useState({});

  const apiUrl = process.env.REACT_APP_URL;
  console.log(apiUrl);

  const Token = localStorage.getItem("Token");
  console.log("Token " + Token);

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
                <h2 className="main-content-title tx-24 mg-b-5">Plans List</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Plans </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    New Plans List
                  </li>
                </ol>
              </div>
              <div className="d-flex">
                <div className="justify-content-center">
                  <a
                    href="/#"
                    className={`btn btn-primary my-2 btn-icon-text ${employee.userType === "0" ? 'd-none' : 'd-inline-block'}`}
                    style={{ color: "white" }}
                    onClick={syncPlan}
                  >
                    Sync Plan
                  </a>
                  <br />
                  Last Plan Sync: {planSyncDate}
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
                            <th>Name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredPlans?.map((p, i) => {
                            return (
                              <tr key={p.planId}>
                                <td>{p.planId}</td>
                                <td>{p.planName}</td>
                                <td>
                                  <button
                                    id={p.planId}
                                    onClick={viewPlan}
                                    className="btn btn-primary ripple btn-info btn-xs w-50"
                                  >
                                    View Plan
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
                              Copyright © 2023 <a href="/#">FSHIP</a>. Designed
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

export default Plan;
