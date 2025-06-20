import React, { useState, useEffect, useContext } from "react";
import mediaQuery from "../mediaQueries";
import "../Components/prince.css";
import { Link, useNavigate } from "react-router-dom";
import { EmployeeContext } from "../Components/EmployeeContext";
// import { backgroundImage } from "html2canvas/dist/types/css/property-descriptors/background-image";

function Prince() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
  const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);
  const [isDropdownOpen7, setIsDropdownOpen7] = useState(false);
  const [isDropdownOpen8, setIsDropdownOpen8] = useState(false);
  const [isDropdownOpen9, setIsDropdownOpen9] = useState(false);
  const [isDropdownOpen10, setIsDropdownOpen10] = useState(false);
  const [isDropdownOpen11, setIsDropdownOpen11] = useState(false);
  const [isDropdownOpen12, setIsDropdownOpen12] = useState(false);
  const [isDropdownOpen13, setIsDropdownOpen13] = useState(false);
  const [isDropdownOpen14, setIsDropdownOpen14] = useState(false);
  const [isDropdownOpen15, setIsDropdownOpen15] = useState(false);
  const [isDropdownOpen16, setIsDropdownOpen16] = useState(false);
  const [isDropdownOpen17, setIsDropdownOpen17] = useState(false);
  const [isDropdownOpen50, setIsDropdownOpen50] = useState(false);
  const [isDropdownOpen51, setIsDropdownOpen51] = useState(false);
  const [isDropdownOpen52, setIsDropdownOpen52] = useState(false);
  const [isDropdownOpenOwnerShip, setIsDropdownOpenOwnerShip] = useState(false);

  const [isDropdownOpen53, setIsDropdownOpen53] = useState(false);
  const [isDropdownOpen54, setIsDropdownOpen54] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeStatus, setActiveStatus] = useState(null);
  const [headerData, setHeaderData] = useState({});
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState({});
  const [applicantCount, setApplicantCount] = useState({});
  const employees = useContext(EmployeeContext);
  const navigate = useNavigate();
  // const employee = useContext(EmployeeContext);

  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem("Token");

  useEffect(() => {
    async function getEmp() {
      const url = `${apiUrl}/employee/headerCrm`;

      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        setEmployee(response.data);
      }
      setLoading(false);
    }

    getEmp();
  }, []);

  useEffect(() => {
    async function getEmpCount() {
      const url = `${apiUrl}/count/applicantsCount`;

      try {
        let response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
        response = await response.json();

        if (response.status === "Success" && response.data) {
          setApplicantCount(response.data);
        } else {
          console.error("Failed to fetch applicant count:", response.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getEmpCount();
  }, [apiUrl, Token]); // Add dependencies for safety

  const toggleDropdown = () => {
    if (!isDropdownOpen) {
      setIsDropdownOpen(true);
      setIsDropdownOpen1(false);
      setIsDropdownOpen2(false);
      setIsDropdownOpen3(false);
      setIsDropdownOpen4(false);
    } else {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen) {
        // Close the dropdown only if it's open
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    setIsDropdownOpen(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen1) {
        // Close the dropdown only if it's open
        setIsDropdownOpen1(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen1]);

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsDropdownOpen1(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen2) {
        // Close the dropdown only if it's open
        setIsDropdownOpen2(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen2]);

  const toggleDropdown17 = () => {
    setIsDropdownOpen17(!isDropdownOpen17);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
    setIsDropdownOpen9(false);
    setIsDropdownOpen10(false);
    setIsDropdownOpen11(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen17) {
        // Close the dropdown only if it's open
        setIsDropdownOpen17(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen17]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen5) {
        // Close the dropdown only if it's open
        setIsDropdownOpen5(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen5]);

  const toggleDropdown6 = () => {
    setIsDropdownOpen6(!isDropdownOpen6);
    setIsDropdownOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen6) {
        // Close the dropdown only if it's open
        setIsDropdownOpen6(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen6]);

  const toggleDropdown11 = () => {
    setIsDropdownOpen11(!isDropdownOpen11);
    setIsDropdownOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
    setIsDropdownOpen9(false);
    setIsDropdownOpen10(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen11) {
        // Close the dropdown only if it's open
        setIsDropdownOpen11(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen11]);

  const toggleDropdown12 = () => {
    setIsDropdownOpen12(!isDropdownOpen12);
    setIsDropdownOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
    setIsDropdownOpen9(false);
    setIsDropdownOpen10(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen12) {
        // Close the dropdown only if it's open
        setIsDropdownOpen12(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen12]);

  const toggleDropdown53 = () => {
    setIsDropdownOpen53(!isDropdownOpen53);
    setIsDropdownOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
    setIsDropdownOpen9(false);
    setIsDropdownOpen10(false);
    setIsDropdownOpen11(false);
    setIsDropdownOpen12(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen53) {
        // Close the dropdown only if it's open
        setIsDropdownOpen53(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen53]);

  const toggleDropdown54 = () => {
    setIsDropdownOpen54(!isDropdownOpen54);
    setIsDropdownOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
    setIsDropdownOpen9(false);
    setIsDropdownOpen10(false);
    setIsDropdownOpen11(false);
    setIsDropdownOpen12(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen54) {
        // Close the dropdown only if it's open
        setIsDropdownOpen54(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen54]);

  const toggleDropdown13 = () => {
    setIsDropdownOpen13(!isDropdownOpen13);
    setIsDropdownOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
    setIsDropdownOpen9(false);
    setIsDropdownOpen10(false);
    setIsDropdownOpen11(false);
    setIsDropdownOpen12(false);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen13) {
        // Close the dropdown only if it's open
        setIsDropdownOpen13(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen13]);

  const toggleDropdown15 = () => {
    setIsDropdownOpen15(!isDropdownOpen15);
    setIsDropdownOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
    setIsDropdownOpen9(false);
    setIsDropdownOpen10(false);
    setIsDropdownOpen11(false);
    setIsDropdownOpen12(false);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen15) {
        // Close the dropdown only if it's open
        setIsDropdownOpen15(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen15]);

  const toggleDropdown16 = () => {
    setIsDropdownOpen16(!isDropdownOpen16);
    setIsDropdownOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
    setIsDropdownOpen9(false);
    setIsDropdownOpen10(false);
    setIsDropdownOpen11(false);
    setIsDropdownOpen12(false);
    setIsDropdownOpen13(false);
    setIsDropdownOpen14(false);
    setIsDropdownOpen15(false);
    setIsDropdownOpenOwnerShip(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen16) {
        // Close the dropdown only if it's open
        setIsDropdownOpen16(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen16]);

  const toggleDropdownOwnership = () => {
    setIsDropdownOpenOwnerShip(!isDropdownOpenOwnerShip);
    setIsDropdownOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
    setIsDropdownOpen9(false);
    setIsDropdownOpen10(false);
    setIsDropdownOpen11(false);
    setIsDropdownOpen12(false);
    setIsDropdownOpen13(false);
    setIsDropdownOpen14(false);
    setIsDropdownOpen15(false);
    setIsDropdownOpen16(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpenOwnerShip) {
        // Close the dropdown only if it's open
        setIsDropdownOpenOwnerShip(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpenOwnerShip]);

  const toggleDropdown50 = () => {
    setIsDropdownOpen50(!isDropdownOpen50);
    setIsDropdownOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
    setIsDropdownOpen9(false);
    setIsDropdownOpen10(false);
    setIsDropdownOpen11(false);
    setIsDropdownOpen12(false);
    setIsDropdownOpen13(false);
    setIsDropdownOpen14(false);
    setIsDropdownOpen15(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen50) {
        setIsDropdownOpen50(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen50]);

  const toggleDropdown51 = () => {
    setIsDropdownOpen51(!isDropdownOpen51);
    setIsDropdownOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
    setIsDropdownOpen9(false);
    setIsDropdownOpen10(false);
    setIsDropdownOpen11(false);
    setIsDropdownOpen12(false);
    setIsDropdownOpen13(false);
    setIsDropdownOpen14(false);
    setIsDropdownOpen15(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen51) {
        setIsDropdownOpen51(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen51]);

  const toggleDropdown52 = () => {
    setIsDropdownOpen52(!isDropdownOpen52);
    setIsDropdownOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
    setIsDropdownOpen9(false);
    setIsDropdownOpen10(false);
    setIsDropdownOpen11(false);
    setIsDropdownOpen12(false);
    setIsDropdownOpen13(false);
    setIsDropdownOpen14(false);
    setIsDropdownOpen15(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen52) {
        setIsDropdownOpen52(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen52]);

  const handleStatusChange = (status) => {
    const encodedStatus = encodeURIComponent(status);
    const newStatus = `/sale-leads/${encodedStatus}`;

    setActiveStatus(newStatus);

    // Navigate to the new status and reload the page
    navigate(newStatus);
    window.location.reload();
  };

  const linkStyle = {
    color: "white",
    fontSize: "10.5px",
    fontFamily: "'Roboto', sans-serif",
    marginTop: "8px",
  };

  const linkHoverStyle = {
    color: isHovered ? "white" : "black",
    transition: "color 0.3s",
  };

  const navBarStyle = {
    backgroundImage: "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)",
    display: "flex",
    //    position:'fixed',
    flexDirection: "row",
    alignItems: "center",
    height: "50px",
    padding: "10px 20px",
  };
  const navBarStylenav = {
    backgroundColor: "black",
    display: "flex",
    //    position:'fixed',
    flexDirection: "row",
    alignItems: "center",
    height: "50px",
    padding: "10px 20px",
  };

  const navBarStyle4 = {
    backgroundColor: "#032852",
    display: "flex",
    //    position:'fixed',
    flexDirection: "row",
    alignItems: "center",
    height: "50px",
    padding: "10px 20px",
  };

  const navBarStyles = {
    backgroundColor: "black",
    display: "flex",
    //    position:'fixed',
    flexDirection: "row",
    alignItems: "center",
    height: "50px",
    padding: "10px 20px",
  };

  const navBarStyles1 = {
    backgroundColor: "#0f2e09",
    display: "flex",
    //    position:'fixed',
    flexDirection: "row",
    alignItems: "center",
  };

  const navBarStyles2 = {
    backgroundColor: "",
    display: "flex",
    //    position:'fixed',
    flexDirection: "row",
    alignItems: "center",
  };

  const openDropdownItemStyle = {
    color: "black",
  };

  const responsiveDropdown = {
    [mediaQuery.small]: {
      display: "none",
    },
  };

  const responsiveNavItem = {
    [mediaQuery.medium]: {},
    [mediaQuery.small]: {
      width: "50%",
      textAlign: "left",
      padding: "10px 0",
    },
  };

  return (
    <>
      {employee.userType === 0 && (
        <div style={{ ...navBarStyle, paddingTop: "8px" }}>
          {employee &&
            employee.assignPermission &&
            employee.assignPermission.includes("Setup") && (
              <div
                className="nav-item dropdown"
                style={{
                  marginLeft: "-20px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen ? "show" : ""
                  }`}
                  id="navbarDropdown"
                  role="button"
                  onClick={toggleDropdown}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                  style={linkStyle}
                >
                  <i class="fa-sharp fa-solid fa-gears me-2"></i>
                  SETUP
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                  style={isDropdownOpen ? { borderRadius: "10px" } : {}}
                >
                  <Link
                    to="/master-list"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginBottom: "-10px", // Adjust this value as needed
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Master
                  </Link>
                  <Link
                    to="/master-value-list"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Master Value
                  </Link>

                  <Link
                    to="/lead-download-list"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Lead Download List
                  </Link>

                  <Link
                    to="/list-category"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Vendor Category
                  </Link>

                  <Link
                    to="/list-sub-category"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Vendor Sub Category
                  </Link>

                  <Link
                    to="/vendor-list"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Vendor List
                  </Link>

                  <Link
                    to="/list-gift"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Manage Gift
                  </Link>
                </div>
              </div>
            )}
          {employee &&
            employee.assignPermission &&
            employee.assignPermission.includes("Website") && (
              <div
                className="nav-item dropdown"
                style={{
                  marginLeft: "-8px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen12 ? "show" : ""
                  }`}
                  id="navbarDropdown12"
                  role="button"
                  onClick={toggleDropdown12}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen12}
                  style={linkStyle}
                >
                  <i class="fa-solid fa-users  me-2"></i>
                  WEBSITE
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen12 ? "show" : ""}`}
                  aria-labelledby="navbarDropdown1"
                  style={isDropdownOpen12 ? { borderRadius: "10px" } : {}}
                >
                  <Link
                    to=""
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen12
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Web Pages <span className="tx-danger">*</span>
                  </Link>

                  <Link
                    to="/blog-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen12
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Blog
                  </Link>

                  <Link
                    to="/faq-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen12
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Faq
                  </Link>

                  <Link
                    to="/testimonia-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen12
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Testimonial
                  </Link>

                  <Link
                    to="/customerReview"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen12
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Customer review
                  </Link>

                  <Link
                    to="/media-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen12
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Media Images
                  </Link>

                  <Link
                    to="/web-banner-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen12
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Web Banners
                  </Link>

                  {/* <Link
                  to=""
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Web Menu <span className="tx-danger">*</span>
                </Link> */}

                  {/* <Link
                  to=""
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Web Sub-Menu <span className="tx-danger">*</span>
                </Link> */}

                  {/* <Link
                  to=""
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Media Videos <span className="tx-danger">*</span>
                </Link> */}

                  <Link
                    to="/contact-enquiries"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen12
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Contact/Enquiries
                  </Link>

                  {/* <Link
                  to=""
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Messages <span className="tx-danger">*</span>
                </Link> */}
                </div>
              </div>
            )}
          {employee &&
            employee.assignPermission &&
            employee.assignPermission.includes("HRMS") && (
              <div
                className="nav-item dropdown"
                style={{
                  marginLeft: "-8px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen1 ? "show" : ""
                  }`}
                  id="navbarDropdown1"
                  role="button"
                  onClick={toggleDropdown1}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen1}
                  style={linkStyle}
                >
                  <i class="fa-solid fa-users  me-2"></i>
                  HRMS
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen1 ? "show" : ""}`}
                  aria-labelledby="navbarDropdown1"
                  style={isDropdownOpen1 ? { borderRadius: "10px" } : {}}
                >
                  <Link to="/staff-employee-list" className="dropdown-item">
                    <i class="angle fe fe-chevron-right"></i>
                    All Staff
                  </Link>
                  <Link
                    to="/active-employee-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Active Employee
                  </Link>
                  <Link
                    to="/inactive-employee-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    In Active Employee
                  </Link>
                  <Link
                    to="/add-candidate"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Add Candidate
                  </Link>

                  <Link
                    to="/candidate-employee-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Candidate List
                  </Link>
                  <Link
                    to="/staff-leave-attendance"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Staff Leave Attendance
                  </Link>

                  <Link
                    to="/attendance-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Staff Attendance
                  </Link>
                  <Link
                    to="/team-manager"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Team Manager
                  </Link>

                  <Link
                    to="/salary-sheet-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Salary Sheet
                  </Link>
                  <Link
                    to="/advisors-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Advisors
                  </Link>
                  <Link
                    to="/admin-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Admin Users
                  </Link>

                  <Link
                    to="/announcement-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Announcement
                  </Link>

                  <Link
                    to="/staff-point-sheet"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Staff Point Sheet
                  </Link>
                  <Link
                    to="/incentive-plan-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Incentive Plan
                  </Link>
                  <Link
                    to="/incentive-pay-out"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen1
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Incentive Payout
                  </Link>
                </div>
              </div>
            )}
          {employee &&
            employee.assignPermission &&
            employee.assignPermission.includes("Inventory") && (
              <div
                className="nav-item dropdown"
                style={{
                  marginLeft: "-8px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen2 ? "show" : ""
                  }`}
                  id="navbarDropdown2"
                  role="button"
                  onClick={toggleDropdown2}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen2}
                  style={linkStyle}
                >
                  <i class="fa-solid fa-money-check-dollar me-2"></i>
                  INVENTORY
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen2 ? "show" : ""}`}
                  aria-labelledby="navbarDropdown2"
                  style={isDropdownOpen2 ? { borderRadius: "10px" } : {}}
                  onClick={() => {
                    setIsDropdownOpen2(!isDropdownOpen2);
                  }}
                >
                  <Link to="/list-location" className="dropdown-item">
                    <i class="angle fe fe-chevron-right"></i>
                    Manage Lands
                  </Link>

                  <Link
                    to="/list-projects"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen2
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Manage Projects
                  </Link>
                  <Link
                    to="/list-scheme"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen2
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Manage Schemes
                  </Link>
                  <Link
                    to="/lucky-draw-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen2
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Lucky Draw
                  </Link>
                  <Link
                    to="/list-plan"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen2
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Manage Plans
                  </Link>
                  <Link
                    to="/inventory-checks"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen2
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Inventory
                  </Link>
                </div>
              </div>
            )}
          {employee &&
            employee.assignPermission &&
            employee.assignPermission.includes("Sales CRM") && (
              <div
                className="nav-item dropdown"
                style={{
                  marginLeft: "-8px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen6 ? "show" : ""
                  }`}
                  id="navbarDropdown6"
                  role="button"
                  onClick={toggleDropdown6}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen6}
                  style={linkStyle}
                >
                  <i class="fa-solid fa-money-check-dollar me-2"></i>
                  SALES CRM
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen6 ? "show" : ""}`}
                  aria-labelledby="navbarDropdown6"
                  style={
                    isDropdownOpen6
                      ? { backgroundColor: "white", borderRadius: "10px" }
                      : {}
                  }
                >
                  <Link
                    to="/lead-dashboard"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    CRM Dashboard
                  </Link>

                  <Link
                    to="/team-report"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Team Report
                  </Link>

                  <Link
                    to="/vendor-payout"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Vendor Payout
                  </Link>

                  <Link
                    to="/crm-project-list"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    CRM Project
                  </Link>
                  <Link
                    to="/lead-allocation"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Lead Allocation
                  </Link>
                  <Link
                    to="/lead-generation"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Lead Generation
                  </Link>
                  <Link
                    to="/lead-data-bank-list"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Lead Data Bank
                  </Link>
                  <Link
                    to="/sales-staff"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Sales Staff
                  </Link>

                  <Link
                    to="/sales-lead"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    All Sales Lead ({employees.leadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("New Lead")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    New Lead ({employees.newLeadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Not enquired")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Not Enquired ({employees.notEnquiredLeadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Not Interested")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Not Interested ({employees.notInterestedLeadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Not Connected")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Not Connected ({employees.notConnectedLeadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Hot Lead")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Hot Lead ({employees.hotleadLeadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Meeting Done")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Meeting Done ({employees.meetingDoneLeadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Form Done")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Form Done ({employees.formDoneLeadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Follow up")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Follow Up ({employees.followUpLeadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Sales Projection")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Sales Projection ({employees.salesProjectionLeadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Outstation")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Outstation ({employees.outstationLeadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Search")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Search ({employees.searchLeadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Dead Other Issue")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Dead Other Issue ({employees.deadOtherIssueLeadCount})
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Payment Received (10%)")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Payment Received(10%)
                  </Link>
                  <Link
                    to=""
                    onClick={() => handleStatusChange("Payment Received (30%)")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Payment Received(30%)
                  </Link>
                  <Link
                    to="/"
                    onClick={() => handleStatusChange("Dead Budget Issue")}
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen6
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-16px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Dead Budget Issue
                  </Link>
                </div>
              </div>
            )}
          {employee &&
            employee.assignPermission &&
            employee.assignPermission.includes("Applicants") && (
              <div
                className="nav-item dropdown"
                style={{
                  marginLeft: "-8px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen11 ? "show" : ""
                  }`}
                  id="navbarDropdown9"
                  role="button"
                  onClick={toggleDropdown11}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen11}
                  style={linkStyle}
                >
                  <i class="fa-solid fa-money-check-dollar me-2"></i>
                  APPLICANTS
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen11 ? "show" : ""}`}
                  aria-labelledby="navbarDropdown9"
                  style={
                    isDropdownOpen11
                      ? { backgroundColor: "white", borderRadius: "10px" }
                      : {}
                  }
                >
                  <Link to="/user-list" className="dropdown-item" href="#">
                    <i class="angle fe fe-chevron-right"></i>
                    Applicants({applicantCount.userCount})
                  </Link>
                </div>
              </div>
            )}
          {employee &&
            employee.assignPermission &&
            employee.assignPermission.includes("WLD Applications") && (
              <div
                className="nav-item dropdown"
                style={{
                  marginLeft: "-8px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen53 ? "show" : ""
                  }`}
                  id="navbarDropdown53"
                  role="button"
                  onClick={toggleDropdown53}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen53}
                  style={linkStyle}
                >
                  <i class="fa-solid fa-users  me-2"></i>
                  WLD APPLICATIONS
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen53 ? "show" : ""}`}
                  aria-labelledby="navbarDropdown53"
                  style={isDropdownOpen53 ? { borderRadius: "10px" } : {}}
                >
                  <Link
                    to="/wld-application"
                    className="dropdown-item"
                    style={
                      isDropdownOpen53 ? openDropdownItemStyle : linkHoverStyle
                    }
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    WLD Applications({applicantCount.wldApplicantCount})
                  </Link>

                  <Link
                    to="/wld-approved-application"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen53
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    WLD Application Approved(
                    {applicantCount.wldApplicantVerifiedCount})
                  </Link>
                  <Link
                    to="/wld-customer"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen53
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    WLD Customer({applicantCount.wldApplicantCustomerCount})
                  </Link>

                  <Link
                    to="/wld-junk-application"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen53
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    WLD Junk({applicantCount.wldApplicantJunkCount})
                  </Link>
                </div>
              </div>
            )}
          {employee &&
            employee.assignPermission &&
            employee.assignPermission.includes("LD Applications") && (
              <div
                className="nav-item dropdown"
                style={{
                  marginLeft: "-8px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen13 ? "show" : ""
                  }`}
                  id="navbarDropdown13"
                  role="button"
                  onClick={toggleDropdown13}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen13}
                  style={linkStyle}
                >
                  <i class="fa-solid fa-users  me-2"></i>
                  LD APPLICATIONS
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen13 ? "show" : ""}`}
                  aria-labelledby="navbarDropdown1"
                  style={isDropdownOpen13 ? { borderRadius: "10px" } : {}}
                >
                  <Link
                    to="/applicant-list"
                    className="dropdown-item"
                    style={
                      isDropdownOpen13 ? openDropdownItemStyle : linkHoverStyle
                    }
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    New LD Applications({applicantCount.ldApplicantCount})
                  </Link>

                  <Link
                    to="/approved-application"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen13
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Approved Application({applicantCount.verifyCount})
                  </Link>

                  <Link
                    to="/upload-updated-result"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen13
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    LD Unit Awarded({applicantCount.ldubApplicantCount})
                  </Link>

                  {/* <Link
                  to="/ldub-not-allocated"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen13 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Generate WelCome Latter
                </Link> */}

                  <Link
                    to="/ldub-not-allocated"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen13
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    LD Unit Not Awarded({applicantCount.ldunbApplicantCount})
                  </Link>

                  <Link
                    to="/case-change"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen13
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Case Change
                  </Link>

                  <Link
                    to="/unit-free-applicants"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen13
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Unit free
                  </Link>

                  <Link
                    to="/allocated-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen13
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Customer({applicantCount.customerCount})
                  </Link>

                  <Link
                    to="/junk-application"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen13
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Junk Application({applicantCount.junkCount})
                  </Link>
                  <Link
                    to="/un-approved-application"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen13
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Dis-Approved Application({applicantCount.notVerifyCount})
                  </Link>
                  {/* <Link
                  to="/not-allocated-list"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen13 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Not Allocated({employees.notAllocated})
                </Link> */}
                </div>
              </div>
            )}
          {employee &&
            employee.assignPermission &&
            employee.assignPermission.includes("Eoi") && (
              <div
                className="nav-item dropdown"
                style={{
                  marginLeft: "-8px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen17 ? "show" : ""
                  }`}
                  id="navbarDropdown17"
                  role="button"
                  onClick={toggleDropdown17}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen17}
                  style={linkStyle}
                >
                  <i class="fa-solid fa-users  me-2"></i>
                  EOI
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen17 ? "show" : ""}`}
                  aria-labelledby="navbarDropdown17"
                  style={isDropdownOpen17 ? { borderRadius: "10px" } : {}}
                >
                  <Link
                    to="/manage-eoi"
                    className="dropdown-item"
                    style={
                      isDropdownOpen17 ? openDropdownItemStyle : linkHoverStyle
                    }
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Project EOI
                  </Link>

                  <Link
                    to="/eoi-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen17
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Eoi Applications
                  </Link>

                  {/* <Link
                  to="/eoi-plan-list"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen17 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  EOI Plan
                </Link> */}

                  <Link
                    to="/approved-applicant"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen17
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Eoi Approved Applicant
                  </Link>

                  <Link
                    to="/not-eoi-application"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen17
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    N-Eoi Application
                  </Link>

                  <Link
                    to="/not-approved-eoi-application"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen17
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    N-Eoi Approved Application
                  </Link>

                  <Link
                    to="/refund-request-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen17
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Refund Request
                  </Link>
                  <Link
                    to="/inventory-view"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen17
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Inventory View
                  </Link>

                  <Link
                    to="/unit-allocation"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen17
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Unit Allocation
                  </Link>
                </div>
              </div>
            )}
          {employee &&
            employee.assignPermission &&
            employee.assignPermission.includes("Accounts") && (
              <div
                className="nav-item dropdown"
                style={{
                  marginLeft: "-8px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen15 ? "show" : ""
                  }`}
                  id="navbarDropdown15"
                  role="button"
                  onClick={toggleDropdown15}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen15}
                  style={linkStyle}
                >
                  <i class="fa-solid fa-money-check-dollar me-2"></i>
                  ACCOUNTS
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen15 ? "show" : ""}`}
                  aria-labelledby="navbarDropdown9"
                  style={
                    isDropdownOpen15
                      ? { backgroundColor: "white", borderRadius: "10px" }
                      : {}
                  }
                >
                  <Link
                    to="/all-payment-ledger"
                    className="dropdown-item"
                    href="#"
                    style={isDropdownOpen15 ? openDropdownItemStyle : linkStyle}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Payment Ledger (All)
                  </Link>
                  <Link
                    to="/company-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen15
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Company
                  </Link>

                  <Link
                    to="/bank-account-list"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen15
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Bank Accounts
                  </Link>

                  <Link
                    to="/cheque-ledger"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen15
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Cheque Ledger
                  </Link>

                  <Link
                    to="/ods-page"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen15
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    ODS
                  </Link>

                  <Link
                    to="/registry"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen15
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Registry Listing <span className="tx-danger">*</span>
                  </Link>

                  <Link
                    to="/refund-booking-amt"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen15
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Refund Request
                  </Link>

                  <Link
                    to="/refund-request-pending"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen15
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Refund Request Pending
                  </Link>
                  <Link
                    to="/refund-booking-amount-success"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen15
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Refund Success
                  </Link>

                  <Link
                    to="/refund-booking-amount-ff"
                    className="dropdown-item"
                    href="#"
                    style={{
                      ...(isDropdownOpen15
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Refund FF
                  </Link>
                </div>
              </div>
            )}
          {employee &&
            employee.assignPermission &&
            employee.assignPermission.includes("Report") && (
              <div
                className="nav-item dropdown"
                style={{
                  marginLeft: "-8px",
                  ...responsiveNavItem,
                  ...responsiveDropdown,
                }}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen16 ? "show" : ""
                  }`}
                  id="navbarDropdown16"
                  role="button"
                  onClick={toggleDropdown16}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen16}
                  style={linkStyle}
                >
                  <i class="fa-solid fa-money-check-dollar me-2"></i>
                  REPORTS
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen16 ? "show" : ""}`}
                  aria-labelledby="navbarDropdown16"
                  style={
                    isDropdownOpen16
                      ? { backgroundColor: "white", borderRadius: "10px" }
                      : {}
                  }
                >
                  <Link
                    to="/sales-leads-report"
                    className="dropdown-item"
                    style={isDropdownOpen16 ? openDropdownItemStyle : linkStyle}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Sales Leads Report
                  </Link>

                  <Link
                    to="/attendance-report"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen16
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Attendance Report
                  </Link>

                  <Link
                    to="/staff-reports"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen16
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Staff Report
                  </Link>

                  <Link
                    to="/customer-report"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen16
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Customer Report
                  </Link>

                  <Link
                    to="/notificatio-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen16
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Notificatio List
                  </Link>

                  <Link
                    to="/pricing-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen16
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Pricing List
                  </Link>

                  <Link
                    to="/file-manager-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen16
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    File Manager List
                  </Link>

                  <Link
                    to="/calendar"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen16
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Calendar
                  </Link>

                  <Link
                    to="/gallery-list"
                    className="dropdown-item"
                    style={{
                      ...(isDropdownOpen16
                        ? openDropdownItemStyle
                        : linkHoverStyle),
                      marginTop: "-10px",
                    }}
                  >
                    <i class="angle fe fe-chevron-right"></i>
                    Gallery List
                  </Link>
                </div>
              </div>
            )}
        </div>
      )}

      {loading ? (
        // Show loading spinner, counter, or message until data is fetched
        <div style={{ ...navBarStyle, color: "grey", padding: "8px" }}>
          <span
            style={{
              marginLeft: "600px",
              color: "white",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Loading Menu...
          </span>
        </div>
      ) : (
        employee.userType === 1 && (
          <div style={{ ...navBarStyle, paddingTop: "8px" }}>
            <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-20px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  isDropdownOpen ? "show" : ""
                }`}
                id="navbarDropdown"
                role="button"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                style={linkStyle}
              >
                <i class="fa-sharp fa-solid fa-gears me-2"></i>
                SETUP
              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
                style={isDropdownOpen ? { borderRadius: "10px" } : {}}
              >
                <Link
                  to="/master-list"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginBottom: "-10px", // Adjust this value as needed
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Master
                </Link>
                <Link
                  to="/master-value-list"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Master Value
                </Link>

                <Link
                  to="/lead-download-list"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Lead Download List
                </Link>

                <Link
                  to="/list-category"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Vendor Category
                </Link>

                <Link
                  to="/list-sub-category"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Vendor Sub Category
                </Link>

                <Link
                  to="/vendor-list"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Vendor List
                </Link>

                <Link
                  to="/list-gift"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Manage Gift
                </Link>
              </div>
            </div>

            {/* <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${isDropdownOpen50 ? "show" : ""}`}
                id="navbarDropdown"
                role="button"
                onClick={toggleDropdown50}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen50}
                style={linkStyle}
              >
                <i class="fa-sharp fa-solid fa-gears me-2"></i>
                VENDOR

              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen50 ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
                style={isDropdownOpen50 ? { borderRadius: "10px" } : {}}
              >


                <Link
                  to="/list-category"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen50 ? openDropdownItemStyle : linkHoverStyle),

                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Vendor Category
                </Link>

                <Link
                  to="/list-sub-category"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen50 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Vendor Sub Category
                </Link>
                <Link
                  to="/add-vendor"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen50 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Add Vendor
                </Link>
                <Link
                  to="/vendor-list"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen50 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Vendor List
                </Link>
                <Link
                  to="/list-gift"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen50 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Manage Gift
                </Link>

              </div>

            </div> */}

            <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  isDropdownOpen12 ? "show" : ""
                }`}
                id="navbarDropdown12"
                role="button"
                onClick={toggleDropdown12}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen12}
                style={linkStyle}
              >
                <i class="fa-solid fa-users  me-2"></i>
                WEBSITE
              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen12 ? "show" : ""}`}
                aria-labelledby="navbarDropdown1"
                style={isDropdownOpen12 ? { borderRadius: "10px" } : {}}
              >
                <Link
                  to=""
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen12
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Web Pages <span className="tx-danger">*</span>
                </Link>

                <Link
                  to="/blog-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen12
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Blog
                </Link>

                <Link
                  to="/faq-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen12
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Faq
                </Link>

                <Link
                  to="/testimonia-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen12
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Testimonial
                </Link>
                <Link
                  to="/customerReview"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen12
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Customer review
                </Link>

                <Link
                  to="/media-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen12
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Media Images
                </Link>

                <Link
                  to="/web-banner-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen12
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Web Banners
                </Link>

                {/* <Link
                  to=""
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Web Menu <span className="tx-danger">*</span>
                </Link> */}

                {/* <Link
                  to=""
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Web Sub-Menu <span className="tx-danger">*</span>
                </Link> */}

                {/* <Link
                  to=""
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Media Videos <span className="tx-danger">*</span>
                </Link> */}

                <Link
                  to="/contact-enquiries"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen12
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Contact/Enquiries
                </Link>

                {/* <Link
                  to=""
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen12 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Messages <span className="tx-danger">*</span>
                </Link> */}
              </div>
            </div>

            <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  isDropdownOpen1 ? "show" : ""
                }`}
                id="navbarDropdown1"
                role="button"
                onClick={toggleDropdown1}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen1}
                style={linkStyle}
              >
                <i class="fa-solid fa-users  me-2"></i>
                HRMS
              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen1 ? "show" : ""}`}
                aria-labelledby="navbarDropdown1"
                style={isDropdownOpen1 ? { borderRadius: "10px" } : {}}
              >
                <Link to="/staff-employee-list" className="dropdown-item">
                  <i class="angle fe fe-chevron-right"></i>
                  All Staff
                </Link>
                <Link
                  to="/active-employee-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Active Employee
                </Link>
                <Link
                  to="/inactive-employee-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  In Active Employee
                </Link>
                <Link
                  to="/add-candidate"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Add Candidate
                </Link>

                <Link
                  to="/candidate-employee-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Candidate List
                </Link>
                <Link
                  to="/staff-leave-attendance"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Staff Leave Attendance
                </Link>

                <Link
                  to="/attendance-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Staff Attendance
                </Link>
                <Link
                  to="/team-manager"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Team Manager
                </Link>

                <Link
                  to="/salary-sheet-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Salary Sheet
                </Link>
                <Link
                  to="/advisors-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Advisors
                </Link>
                <Link
                  to="/admin-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Admin Users
                </Link>

                <Link
                  to="/announcement-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Announcement
                </Link>

                <Link
                  to="/staff-point-sheet"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Staff Point Sheet
                </Link>
                <Link
                  to="/incentive-plan-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Incentive Plan
                </Link>
                <Link
                  to="/incentive-pay-out"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen1
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Incentive Payout
                </Link>
              </div>
            </div>

            <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  isDropdownOpen2 ? "show" : ""
                }`}
                id="navbarDropdown2"
                role="button"
                onClick={toggleDropdown2}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen2}
                style={linkStyle}
              >
                <i class="fa-solid fa-money-check-dollar me-2"></i>
                INVENTORY
              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen2 ? "show" : ""}`}
                aria-labelledby="navbarDropdown2"
                style={isDropdownOpen2 ? { borderRadius: "10px" } : {}}
                onClick={() => {
                  setIsDropdownOpen2(!isDropdownOpen2);
                }}
              >
                <Link to="/list-location" className="dropdown-item">
                  <i class="angle fe fe-chevron-right"></i>
                  Manage Lands
                </Link>

                <Link
                  to="/list-projects"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen2
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Manage Projects
                </Link>
                <Link
                  to="/list-scheme"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen2
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Manage Schemes
                </Link>
                <Link
                  to="/lucky-draw-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen2
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Lucky Draw
                </Link>
                <Link
                  to="/list-plan"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen2
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Manage Plans
                </Link>
                <Link
                  to="/inventory-checks"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen2
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Inventory
                </Link>
              </div>
            </div>

            <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  isDropdownOpen6 ? "show" : ""
                }`}
                id="navbarDropdown6"
                role="button"
                onClick={toggleDropdown6}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen6}
                style={linkStyle}
              >
                <i class="fa-solid fa-money-check-dollar me-2"></i>
                SALES CRM
              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen6 ? "show" : ""}`}
                aria-labelledby="navbarDropdown6"
                style={
                  isDropdownOpen6
                    ? { backgroundColor: "white", borderRadius: "10px" }
                    : {}
                }
              >
                <Link
                  to="/lead-dashboard"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  CRM Dashboard
                </Link>

                <Link
                  to="/team-report"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Team Report
                </Link>

                <Link
                  to="/vendor-payout"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Vendor Payout
                </Link>

                <Link
                  to="/crm-project-list"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  CRM Project
                </Link>
                <Link
                  to="/lead-allocation"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Lead Allocation
                </Link>
                <Link
                  to="/lead-generation"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Lead Generation
                </Link>
                <Link
                  to="/lead-data-bank-list"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Lead Data Bank
                </Link>
                <Link
                  to="/sales-staff"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Sales Staff
                </Link>

                <Link
                  to="/sales-lead"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  All Sales Lead ({employees.leadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("New Lead")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  New Lead ({employees.newLeadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Not enquired")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Not Enquired ({employees.notEnquiredLeadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Not Interested")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Not Interested ({employees.notInterestedLeadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Not Connected")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Not Connected ({employees.notConnectedLeadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Hot Lead")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Hot Lead ({employees.hotleadLeadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Meeting Done")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Meeting Done ({employees.meetingDoneLeadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Form Done")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Form Done ({employees.formDoneLeadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Follow up")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Follow Up ({employees.followUpLeadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Sales Projection")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Sales Projection ({employees.salesProjectionLeadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Outstation")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Outstation ({employees.outstationLeadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Search")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Search ({employees.searchLeadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Dead Other Issue")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Dead Other Issue ({employees.deadOtherIssueLeadCount})
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Payment Received (10%)")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Payment Received(10%)
                </Link>
                <Link
                  to=""
                  onClick={() => handleStatusChange("Payment Received (30%)")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Payment Received(30%)
                </Link>
                <Link
                  to="/"
                  onClick={() => handleStatusChange("Dead Budget Issue")}
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen6
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-16px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Dead Budget Issue
                </Link>
              </div>
            </div>

            <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  isDropdownOpen11 ? "show" : ""
                }`}
                id="navbarDropdown9"
                role="button"
                onClick={toggleDropdown11}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen11}
                style={linkStyle}
              >
                <i class="fa-solid fa-money-check-dollar me-2"></i>
                APPLICANTS
              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen11 ? "show" : ""}`}
                aria-labelledby="navbarDropdown9"
                style={
                  isDropdownOpen11
                    ? { backgroundColor: "white", borderRadius: "10px" }
                    : {}
                }
              >
                <Link to="/user-list" className="dropdown-item" href="#">
                  <i class="angle fe fe-chevron-right"></i>
                  Applicants({applicantCount.userCount})
                </Link>
              </div>
            </div>

            <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  isDropdownOpen53 ? "show" : ""
                }`}
                id="navbarDropdown53"
                role="button"
                onClick={toggleDropdown53}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen53}
                style={linkStyle}
              >
                <i class="fa-solid fa-users  me-2"></i>
                WLD APPLICATIONS
              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen53 ? "show" : ""}`}
                aria-labelledby="navbarDropdown53"
                style={isDropdownOpen53 ? { borderRadius: "10px" } : {}}
              >
                <Link
                  to="/wld-application"
                  className="dropdown-item"
                  style={
                    isDropdownOpen53 ? openDropdownItemStyle : linkHoverStyle
                  }
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  WLD Applications({applicantCount.wldApplicantCount})
                </Link>

                <Link
                  to="/wld-approved-application"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen53
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  WLD Application Approved(
                  {applicantCount.wldApplicantVerifiedCount})
                </Link>
                <Link
                  to="/wld-customer"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen53
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  WLD Customer({applicantCount.wldApplicantCustomerCount})
                </Link>

                <Link
                  to="/wld-junk-application"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen53
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  WLD Junk({applicantCount.wldApplicantJunkCount})
                </Link>
              </div>
            </div>

            <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  isDropdownOpen13 ? "show" : ""
                }`}
                id="navbarDropdown13"
                role="button"
                onClick={toggleDropdown13}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen13}
                style={linkStyle}
              >
                <i class="fa-solid fa-users  me-2"></i>
                LD APPLICATIONS
              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen13 ? "show" : ""}`}
                aria-labelledby="navbarDropdown1"
                style={isDropdownOpen13 ? { borderRadius: "10px" } : {}}
              >
                <Link
                  to="/applicant-list"
                  className="dropdown-item"
                  style={
                    isDropdownOpen13 ? openDropdownItemStyle : linkHoverStyle
                  }
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  New LD Applications({applicantCount.ldApplicantCount})
                </Link>

                <Link
                  to="/approved-application"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen13
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Approved Application({applicantCount.verifyCount})
                </Link>

                <Link
                  to="/upload-updated-result"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen13
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  LD Unit Awarded({applicantCount.ldubApplicantCount})
                </Link>

                {/* <Link
                  to="/ldub-not-allocated"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen13 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Generate WelCome Latter
                </Link> */}

                <Link
                  to="/ldub-not-allocated"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen13
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  LD Unit Not Awarded({applicantCount.ldunbApplicantCount})
                </Link>

                <Link
                  to="/case-change"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen13
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Case Change
                </Link>

                <Link
                  to="/unit-free-applicants"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen13
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Unit free
                </Link>

                <Link
                  to="/allocated-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen13
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Customer({applicantCount.customerCount})
                </Link>

                <Link
                  to="/junk-application"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen13
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Junk Application({applicantCount.junkCount})
                </Link>
                <Link
                  to="/un-approved-application"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen13
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Dis-Approved Application({applicantCount.notVerifyCount})
                </Link>
                {/* <Link
                  to="/not-allocated-list"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen13 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Not Allocated({employees.notAllocated})
                </Link> */}
              </div>
            </div>

            <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  isDropdownOpen17 ? "show" : ""
                }`}
                id="navbarDropdown17"
                role="button"
                onClick={toggleDropdown17}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen17}
                style={linkStyle}
              >
                <i class="fa-solid fa-users  me-2"></i>
                EOI
              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen17 ? "show" : ""}`}
                aria-labelledby="navbarDropdown17"
                style={isDropdownOpen17 ? { borderRadius: "10px" } : {}}
              >
                <Link
                  to="/manage-eoi"
                  className="dropdown-item"
                  style={
                    isDropdownOpen17 ? openDropdownItemStyle : linkHoverStyle
                  }
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Project EOI
                </Link>

                <Link
                  to="/eoi-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen17
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Eoi Applications
                </Link>

                {/* <Link
                  to="/eoi-plan-list"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen17 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  EOI Plan
                </Link> */}

                <Link
                  to="/approved-applicant"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen17
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Eoi Approved Applicant
                </Link>

                <Link
                  to="/not-eoi-application"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen17
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  N-Eoi Application
                </Link>

                <Link
                  to="/not-approved-eoi-application"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen17
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  N-Eoi Approved Application
                </Link>

                <Link
                  to="/refund-request-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen17
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Refund Request
                </Link>
                <Link
                  to="/inventory-view"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen17
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Inventory View
                </Link>

                <Link
                  to="/unit-allocation"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen17
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Unit Allocation
                </Link>
              </div>
            </div>

            <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  isDropdownOpen15 ? "show" : ""
                }`}
                id="navbarDropdown15"
                role="button"
                onClick={toggleDropdown15}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen15}
                style={linkStyle}
              >
                <i class="fa-solid fa-money-check-dollar me-2"></i>
                ACCOUNTS
              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen15 ? "show" : ""}`}
                aria-labelledby="navbarDropdown9"
                style={
                  isDropdownOpen15
                    ? { backgroundColor: "white", borderRadius: "10px" }
                    : {}
                }
              >
                <Link
                  to="/all-payment-ledger"
                  className="dropdown-item"
                  href="#"
                  style={isDropdownOpen15 ? openDropdownItemStyle : linkStyle}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Payment Ledger (All)
                </Link>
                <Link
                  to="/company-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen15
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Company
                </Link>

                <Link
                  to="/bank-account-list"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen15
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Bank Accounts
                </Link>

                <Link
                  to="/cheque-ledger"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen15
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Cheque Ledger
                </Link>
                <Link
                  to="/ods-page"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen15
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  ODS
                </Link>

                <Link
                  to="/registry"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen15
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Registry Listing <span className="tx-danger">*</span>
                </Link>

                <Link
                  to="/refund-booking-amt"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen15
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Refund Request
                </Link>

                <Link
                  to="/refund-request-pending"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen15
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Refund Request Pending
                </Link>
                <Link
                  to="/refund-booking-amount-success"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen15
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Refund Success
                </Link>

                <Link
                  to="/refund-booking-amount-ff"
                  className="dropdown-item"
                  href="#"
                  style={{
                    ...(isDropdownOpen15
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Refund FF
                </Link>
              </div>
            </div>

            {/* <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${isDropdownOpen51 ? "show" : ""}`}
                id="navbarDropdown"
                role="button"
                onClick={toggleDropdown51}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen51}
                style={linkStyle}
              >
                <i class="fa-sharp fa-solid fa-gears me-2"></i>
                REFUND

              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen51 ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
                style={isDropdownOpen51 ? { borderRadius: "10px" } : {}}
              >


                <Link
                  to="/refund-booking-amt"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen51 ? openDropdownItemStyle : linkHoverStyle),

                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Refund Request
                </Link>

                <Link
                  to="/refund-request-pending"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen51 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Refund Request Pending
                </Link>

                <Link
                  to="/refund-booking-amount-success"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen51 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Refund Success
                </Link>
                <Link
                  to="/refund-booking-amount-ff"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpen51 ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Refund FF
                </Link>

              </div>

            </div> */}

            <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  isDropdownOpen16 ? "show" : ""
                }`}
                id="navbarDropdown16"
                role="button"
                onClick={toggleDropdown16}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen16}
                style={linkStyle}
              >
                <i class="fa-solid fa-money-check-dollar me-2"></i>
                REPORTS
              </a>
              <div
                className={`dropdown-menu ${isDropdownOpen16 ? "show" : ""}`}
                aria-labelledby="navbarDropdown16"
                style={
                  isDropdownOpen16
                    ? { backgroundColor: "white", borderRadius: "10px" }
                    : {}
                }
              >
                <Link
                  to="/sales-leads-report"
                  className="dropdown-item"
                  style={isDropdownOpen16 ? openDropdownItemStyle : linkStyle}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Sales Leads Report
                </Link>

                <Link
                  to="/attendance-report"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen16
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Attendance Report
                </Link>

                <Link
                  to="/staff-reports"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen16
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Staff Report
                </Link>

                <Link
                  to="/customer-report"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen16
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Customer Report
                </Link>

                <Link
                  to="/notificatio-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen16
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Notificatio List
                </Link>

                <Link
                  to="/pricing-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen16
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Pricing List
                </Link>

                <Link
                  to="/file-manager-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen16
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  File Manager List
                </Link>

                <Link
                  to="/calendar"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen16
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Calendar
                </Link>

                <Link
                  to="/gallery-list"
                  className="dropdown-item"
                  style={{
                    ...(isDropdownOpen16
                      ? openDropdownItemStyle
                      : linkHoverStyle),
                    marginTop: "-10px",
                  }}
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Gallery List
                </Link>
              </div>
            </div>

            <div
              className="nav-item dropdown"
              style={{
                marginLeft: "-8px",
                ...responsiveNavItem,
                ...responsiveDropdown,
              }}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  isDropdownOpenOwnerShip ? "show" : ""
                }`}
                id="navbarDropdown16"
                role="button"
                onClick={toggleDropdownOwnership}
                aria-haspopup="true"
                aria-expanded={isDropdownOpenOwnerShip}
                style={linkStyle}
              >
                <i class="fa-solid fa-money-check-dollar me-2"></i>
                OWNERSHIP
              </a>
              <div
                className={`dropdown-menu ${
                  isDropdownOpenOwnerShip ? "show" : ""
                }`}
                aria-labelledby="navbarDropdown16"
                style={
                  isDropdownOpenOwnerShip
                    ? { backgroundColor: "white", borderRadius: "10px" }
                    : {}
                }
              >
                <Link
                  to="/ownership-list"
                  className="dropdown-item"
                  style={
                    isDropdownOpenOwnerShip ? openDropdownItemStyle : linkStyle
                  }
                >
                  <i class="angle fe fe-chevron-right"></i>
                  Ownership List
                </Link>

                {/* <Link
                  to="/attendance-report"
                  className="dropdown-item"
                  style={{
                    ... (isDropdownOpenOwnerShip ? openDropdownItemStyle : linkHoverStyle),
                    marginTop: '-10px',
                  }}

                >
                  <i class="angle fe fe-chevron-right"></i>
                  Attendance Report
                </Link> */}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default Prince;
