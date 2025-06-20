import React, { useState, useEffect, useContext } from 'react';
import '../assets/plugins/pickr-master/themes/classic.min.css';
import '../assets/css/style.css';
import './UserProfileDropdown.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { EmployeeContext } from "../Components/EmployeeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserProfileDropdown() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [employeeData, setEmployeeData] = useState({});
  const [employeeDatas, setEmployeeDatas] = useState({});
  const navigate = useNavigate();
  const employee = useContext(EmployeeContext);
  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem("Token");


  const toggleDropdown = () => {
    if (!isDropdownOpen) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen && !event.target.closest('.your-dropdown-class')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdownOpen]);




  const logOutEmployee = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      const response = await fetch(`${apiUrl}/employee/employeeLogOut`, {
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
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };



  useEffect(() => {
    async function getEmpData() {
      const url = `${apiUrl}/employee/headerCrm`;

      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        setEmployeeData(response.data);
      }

    }

    getEmpData();
  }, []);


  useEffect(() => {
    async function getEmpDatas() {
      const url = `${apiUrl}/user/tokenVerify`;

      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        setEmployeeDatas(response.data);
      }

    }

    getEmpDatas();
  }, []);
  

  return (
    <>
      {!employeeData.user === true &&


        <div className="dropdown main-profile-menu">
          <button className="main-img-user" onClick={toggleDropdown}>
            <img src={employee.profilePhoto || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'} />

          </button>
          <div className="dropdown-menu show-dropdown" style={{ display: isDropdownOpen ? 'block' : 'none' }}>
            {/* Dropdown content */}
            <div className="header-navheading">
              <h6 className="main-notification-title">Hi, {employee && employee.fullName ? employee.fullName.charAt(0).toUpperCase() + employee.fullName.slice(1).toLowerCase() : 'N/A'}!</h6>
            </div>

            {/* Dropdown items */}
            <div className="dropdown-item border-top">
              <i className="fe fe-user" /> My Profile
            </div>

            <div className="dropdown-item" onClick={logOutEmployee}>
              <i className="fe fe-power"></i> Sign Out
            </div>
          </div>
        </div>

      }

      {employeeData.user === true &&


        <div className="dropdown main-profile-menu">
          <button className="main-img-user" onClick={toggleDropdown}>
            <img src={employeeDatas.profilePhoto || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'} />

          </button>
          <div className="dropdown-menu show-dropdown" style={{ display: isDropdownOpen ? 'block' : 'none' }}>
            {/* Dropdown content */}
            <div className="header-navheading">
              <h6 className="main-notification-title">Hi, {employeeDatas && employeeDatas.fullName ? employeeDatas.fullName.charAt(0).toUpperCase() + employeeDatas.fullName.slice(1).toLowerCase() : 'N/A'}!</h6>
            </div>

            {/* Dropdown items */}
            <div className="dropdown-item border-top">
              <i className="fe fe-user" /> My Profile
            </div>

            <Link className="dropdown-item" to='/login-users'>
              <i className="fe fe-power"></i> Sign Out
            </Link>
          </div>
        </div>

      }
    </>

  );
}

export default UserProfileDropdown;
