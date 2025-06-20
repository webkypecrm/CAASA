import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


function LoginForm() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!emailId || !password) {
      setError("Please enter both email and password.");
      return;
    }
    const apiUrl = process.env.REACT_APP_URL;


    try {
      const response = await fetch(`${apiUrl}/employee/EmployeeLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailId, password }),
      });

      const responseData = await response.json();


      if (responseData.status === "success") {

        toast.success("Login successful");
        localStorage.setItem("Token", responseData.data.Token);
        // Navigate to the next page
        navigate("/Dashboard");
      } else {
        throw new Error(responseData.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };



  return (
    <>

      <div className="page main-signin-wrapper">
        {/* Row */}
        <div className="row signpages text-center">
          <div className="col-md-12">
            <div className="card">
              <div className="row row-sm">
                <div className="col-lg-6 col-xl-5 d-none d-lg-block text-center bg-white">
                  <div className="mt-5 pt-4 p-2 pos-absolute">
                    <img
                      src='https://amrealty.webkype.com/assets/img/brand/logo.png'
                      className="d-lg-none header-brand-img text-start float-start mb-4 error-logo-light"
                      alt="logo"
                    />
                    <img
                      src='https://amrealty.webkype.com/assets/img/brand/logo.png'
                      className=" d-lg-none header-brand-img text-start float-start mb-4 error-logo"
                      alt="logo"
                    />
                    <div className="clearfix" />
                    <img
                      src='https://amrealty.webkype.com/assets/img/brand/logo.png'
                      className=" mb-1"
                      alt="user"
                      style={{ width: "80%" }}
                    />


                  </div>
                </div>
                <div className="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form ">
                  <div className="main-container container-fluid">
                    <div className="row row-sm">
                      <div className="card-body mt-2 mb-2">
                        <img
                          src="https://webkype.com/frontend/assets/images/logo/webkype-logo.png"
                          // src="../assets/img/brand/logo.png"
                          className=" d-lg-none header-brand-img text-start float-start mb-4"
                          alt="logo"
                        />
                        <div className="clearfix" />
                        <form onSubmit={handleLogin}>
                          <h5 className="text-start mb-2">
                            ERP ADMIN LOGIN
                          </h5>
                          <p className="mb-4 text-muted tx-13 ms-0 text-start">
                            Please enter Email and Password
                          </p>
                          <div className="form-group text-start">
                            <label>Email</label>
                            <input
                              className="form-control"
                              placeholder="Enter your email"
                              type="text"
                              value={emailId}
                              onChange={(e) => setEmailId(e.target.value)}
                            />
                          </div>
                          <div className="form-group text-start">
                            <label>Password</label>
                            <div className="input-group">
                              <input
                                className="form-control"
                                placeholder="Enter your password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <span
                                className="input-group-text"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ cursor: "pointer" }}
                              >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                              </span>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn ripple btn-main-primary btn-block"
                          >
                            Sign In
                          </button>
                          <br />
                          <span>Contact IT manager for password reset</span>
                        </form>

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

    </>
  );
}

export default LoginForm;
