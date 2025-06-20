import React, { useState, useEffect } from "react";
import Prince from "../../Components/Prince";
import { useNavigate } from "react-router-dom";
import TopHeader from "../../Components/TopHeader";

function CustomPlans() {
  const apiUrl = process.env.REACT_APP_URL;
  console.log(apiUrl);

  const Token = localStorage.getItem("Token");
  console.log("Token " + Token);

  const [customPlans, setCustomPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${apiUrl}/plan/getAllCustomPlan`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCustomPlans(data.data);
      })
      .catch((error) => {
        console.error("Error fetching Plans:", error);
      });
  }, []);

  const viewCustomPlan = (e) => {
    e.preventDefault();
    navigate(`/customPlan/${e.target.id}`);
  };

  return (
    <div className="page">
      <TopHeader />
      <Prince />

      <div class="row row-sm w-90 m-3">
        <div class="col-lg-13 mt-3">
          <h3> Custom Plans</h3>
          <div class="card custom-card">
            <div class="card-body">
              <div class="text-wrap">
                <div class="table-responsive">
                  <table className="table table-striped table-bordered text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Employee Name</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customPlans?.map((p, i) => {
                        return (
                          <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.planName}</td>
                            <td>
                              {p.employee?.firstName?.charAt(0).toUpperCase() +
                                p.employee?.firstName?.slice(1)}{" "}
                              {p.employee?.lastName}
                            </td>
                            <td>
                              <button
                                id={p.id}
                                onClick={viewCustomPlan}
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
                          Copyright © 2023{" "}
                          <a href="javascript:void(0)">FSHIP</a>. Designed by{" "}
                          <a href="http://webkype.com/">Webkype.com</a> All
                          rights reserved.
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
  );
}

export default CustomPlans;
