import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Prince from "../Components/Prince";
import TopHeader from "../Components/TopHeader";
import { DatePicker, Space } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "../assets/plugins/notify/css/notifIt.css";
import toast1, { Toaster } from "react-hot-toast";
import moment from "moment";
import io from "socket.io-client";

import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const SalesDashboardss = () => {
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState(null);
  const [graphData, setGraphData] = useState({});
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [graphDatas, setGraphDatas] = useState([]);
  const [selectedDate3, setSelectedDate3] = useState(moment().year());

  const apiUrl = process.env.REACT_APP_URL;
  const Token = localStorage.getItem("Token");

  const location = useLocation();

  // Format date for API query
  const formattedDate = selectedDate
    ? selectedDate.format("MM-YYYY")
    : moment().format("MM-YYYY");

  const onChange2 = (date) => {
    setSelectedDate(date);
  };

  const disableFutureDates = (current) => {
    return current && current > moment().endOf("month");
  };

  useEffect(() => {
    async function getEmp() {
      // Use formattedDate or default to current date in MM-YYYY format
      const currentDate = moment().format("MM-YYYY");
      const url = `${apiUrl}/graph/leadReport?date=${
        formattedDate || currentDate
      }`;

      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        setGraphData(response.data);
      }
    }

    getEmp();
  }, [formattedDate]);

  const displayDate = selectedDate
    ? selectedDate.format("MMMM YYYY")
    : moment().format("MMMM YYYY");

  // second date year

  const onChange3 = (date) => {
    setSelectedDate2(date);
  };

  const formattedDates = selectedDate2 ? selectedDate2.format("YYYY") : "";

  useEffect(() => {
    async function getEmpp() {
      const currentYear = new Date().getFullYear();
      const year = formattedDates || currentYear;

      setSelectedDate3(year);

      const url = `${apiUrl}/graph/leadYearly?year=${year}`;

      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      response = await response.json();

      if (response.status === "success") {
        setGraphDatas(response.data);
      }
    }

    getEmpp();
  }, [formattedDates]);

  const disableFutureYears = (current) => {
    // Disable years after the current year
    return current && current.year() > moment().year();
  };

  const pieData = {
    labels: [
      "other",
      "Ashutosh Facebook",
      "Facebook",
      "Rinku facebook",
      "Sayyed facebook",
      "Suraj facebook",
      "Suraj WA",
    ],
    datasets: [
      {
        label: "UTM Source",
        data: [
          graphData?.utmSourceCounts?.["other"] || 0,
          graphData?.utmSourceCounts?.["Ashutosh Facebook"] || 0,
          graphData?.utmSourceCounts?.["Facebook"] || 0,
          graphData?.utmSourceCounts?.["Rinku facebook"] || 0,
          graphData?.utmSourceCounts?.["Sayyed facebook"] || 0,
          graphData?.utmSourceCounts?.["Suraj facebook"] || 0,
          graphData?.utmSourceCounts?.["Suraj WA"] || 0,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Light red
          "rgba(54, 162, 235, 0.6)", // Light blue
          "rgba(255, 206, 86, 0.6)", // Light yellow
          "rgba(75, 192, 192, 0.6)", // Light teal
          "rgba(153, 102, 255, 0.6)", // Light purple
          "rgba(255, 159, 64, 0.6)", // Light orange
          "rgba(0, 128, 128, 0.6)", // Light teal (different from other colors)
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Darker red
          "rgba(54, 162, 235, 1)", // Darker blue
          "rgba(255, 206, 86, 1)", // Darker yellow
          "rgba(75, 192, 192, 1)", // Darker teal
          "rgba(153, 102, 255, 1)", // Darker purple
          "rgba(255, 159, 64, 1)", // Darker orange
          "rgba(0, 128, 128, 1)", // Darker teal (distinct color for 'Suraj WA')
        ],
        borderWidth: 2,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#333",
          font: {
            size: 14,
            family: "Arial, sans-serif",
            weight: "600",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#333",
        borderWidth: 1,
        padding: 10,
        cornerRadius: 4,
        bodyFont: {
          size: 14,
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 800,
      easing: "easeOutExpo",
    },
  };

  const barData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Lead",
        data: [
          graphDatas?.monthlyLeadCounts?.["January"] || 0,
          graphDatas?.monthlyLeadCounts?.["February"] || 0,
          graphDatas?.monthlyLeadCounts?.["March"] || 0,
          graphDatas?.monthlyLeadCounts?.["April"] || 0,
          graphDatas?.monthlyLeadCounts?.["May"] || 0,
          graphDatas?.monthlyLeadCounts?.["June"] || 0,
          graphDatas?.monthlyLeadCounts?.["July"] || 0,
          graphDatas?.monthlyLeadCounts?.["August"] || 0,
          graphDatas?.monthlyLeadCounts?.["September"] || 0,
          graphDatas?.monthlyLeadCounts?.["October"] || 0,
          graphDatas?.monthlyLeadCounts?.["November"] || 0,
          graphDatas?.monthlyLeadCounts?.["December"] || 0,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333",
          font: {
            size: 14,
            family: "Arial, sans-serif",
            weight: "600",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#333",
        borderWidth: 1,
        padding: 10,
        cornerRadius: 4,
        bodyFont: {
          size: 14,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          borderColor: "#ddd",
          borderWidth: 1,
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
        },
      },
    },
    animation: {
      duration: 800,
      easing: "easeOutExpo",
    },
  };

  const barDatas = {
    labels: [
      "New Lead",
      "Not enquired",
      "Not Interested",
      "Not Connected",
      "Hot Lead",
      "Meeting Done",
      "Form Done",
      "Follow up",
      "Sales Projection",
      "Outstation",
      "Search",
      "Dead Other Issue",
      "Payment Received(10%)",
      "Payment Received(30%)",
      "Dead Budget Issue",
    ],
    datasets: [
      {
        label: "Lead Life Cycle",
        data: [
          graphData?.statusCounts?.["New Lead"] || 0,
          graphData?.statusCounts?.["Not enquired"] || 0,
          graphData?.statusCounts?.["Not Interested"] || 0,
          graphData?.statusCounts?.["Not Connected"] || 0,
          graphData?.statusCounts?.["Hot Lead"] || 0,
          graphData?.statusCounts?.["Meeting Done"] || 0,
          graphData?.statusCounts?.["Form Done"] || 0,
          graphData?.statusCounts?.["Follow up"] || 0,
          graphData?.statusCounts?.["Sales Projection"] || 0,
          graphData?.statusCounts?.["Outstation"] || 0,
          graphData?.statusCounts?.["Search"] || 0,
          graphData?.statusCounts?.["Dead Other Issue"] || 0,
          graphData?.statusCounts?.["Payment Received (10%)"] || 0,
          graphData?.statusCounts?.["Payment Received (30%)"] || 0,
          graphData?.statusCounts?.["Dead Budget Issue"] || 0,
        ],
        backgroundColor: "rgba(99, 155, 255, 0.8)",
        borderColor: "rgba(99, 155, 255, 1)",
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  const barOptionss = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333",
          font: {
            size: 14,
            family: "Arial, sans-serif",
            weight: "600",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#333",
        borderWidth: 1,
        padding: 10,
        cornerRadius: 4,
        bodyFont: {
          size: 14,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          borderColor: "#ddd",
          borderWidth: 1,
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
        },
      },
    },
    animation: {
      duration: 800,
      easing: "easeOutExpo",
    },
  };

  return (
    <>
      <div className="page">
        <TopHeader />
        <Prince />
        <div className="main-content  pt-0">
          <div className="main-container container-fluid">
            <div className="inner-body">
              {/* Page Header */}
              <div className="page-header">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    gap: "10px",
                    overflowX: "auto",
                    marginLeft: "40px",
                  }}
                >
                  {/* Profile Image and Text (Left side) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "10px",
                      marginTop: "10px",
                      width: "95%",
                      boxSizing: "border-box",
                      marginTop: "-10px",
                    }}
                  >
                    <Space direction="vertical" size={12}>
                      <DatePicker
                        onChange={onChange2}
                        picker="month"
                        disabledDate={disableFutureDates}
                        style={{
                          height: "35px",
                          width: "200px",
                          color: "green",
                        }}
                      />
                    </Space>{" "}
                    <span
                      style={{
                        marginLeft: "16px",
                        fontSize: "16px",
                        color: "#333",
                      }}
                    >
                      {displayDate}
                    </span>
                  </div>

                  {/* Buttons and Date Pickers (Right side) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      marginTop: "-5px",
                    }}
                  >
                    {/* First Button */}
                    <div>
                      <Link
                        to="/Dashboard"
                        style={{
                          backgroundColor:
                            location.pathname === "/Dashboard"
                              ? "#0056b3"
                              : "#007bff",
                          color: "#fff",
                          padding: "5px 10px",
                          fontSize: "14px",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer",
                          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
                          transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                          whiteSpace: "nowrap",
                        }}
                        type="button"
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#0056b3")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor =
                            location.pathname === "/Dashboard"
                              ? "#0056b3"
                              : "#007bff")
                        }
                        onMouseDown={(e) =>
                          (e.target.style.transform = "scale(0.95)")
                        }
                        onMouseUp={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      >
                        By Default Dashboard
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/sales-dashboard"
                        style={{
                          backgroundColor:
                            location.pathname === "/sales-dashboard"
                              ? "#0056b3"
                              : "#007bff",
                          color: "#fff",
                          padding: "5px 10px",
                          fontSize: "14px",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer",
                          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
                          transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                          whiteSpace: "nowrap",
                        }}
                        type="button"
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#0056b3")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor =
                            location.pathname === "/sales-dashboard"
                              ? "#0056b3"
                              : "#007bff")
                        }
                        onMouseDown={(e) =>
                          (e.target.style.transform = "scale(0.95)")
                        }
                        onMouseUp={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      >
                        Sales Dashboard
                      </Link>
                    </div>

                    <div>
                      <Link
                        to="/inventory-dashboard"
                        style={{
                          backgroundColor:
                            location.pathname === "/inventory-dashboard"
                              ? "#0056b3"
                              : "#007bff",
                          color: "#fff",
                          padding: "5px 10px",
                          fontSize: "14px",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer",
                          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
                          transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                          whiteSpace: "nowrap",
                        }}
                        type="button"
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#0056b3")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor =
                            location.pathname === "/inventory-dashboard"
                              ? "#0056b3"
                              : "#007bff")
                        }
                        onMouseDown={(e) =>
                          (e.target.style.transform = "scale(0.95)")
                        }
                        onMouseUp={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      >
                        Inventory Dashboard
                      </Link>
                    </div>

                    {/* New Button */}
                    {/* <div>
                                            <Link
                                                to='/finance-dashboard'
                                                style={{
                                                    backgroundColor: location.pathname === '/finance-dashboard' ? "#0056b3" : "#007bff",
                                                    color: "#fff",
                                                    padding: "5px 10px",
                                                    fontSize: "14px",
                                                    border: "none",
                                                    borderRadius: "3px",
                                                    cursor: "pointer",
                                                    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
                                                    transition: "background-color 0.3s ease, transform 0.2s ease",
                                                    whiteSpace: 'nowrap'
                                                }}
                                                type="button"
                                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                                                onMouseLeave={(e) => (e.target.style.backgroundColor = location.pathname === '/finance-dashboard' ? "#0056b3" : "#007bff")}
                                                onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
                                                onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                                            >
                                                Finance Dashboard
                                            </Link>
                                        </div> */}

                    <div>
                      <Link
                        to="/ods-dashboard"
                        style={{
                          backgroundColor:
                            location.pathname === "/ods-dashboard"
                              ? "#0056b3"
                              : "#007bff",
                          color: "#fff",
                          padding: "5px 10px",
                          fontSize: "14px",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer",
                          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
                          transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                          whiteSpace: "nowrap",
                        }}
                        type="button"
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#0056b3")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor =
                            location.pathname === "/ods-dashboard"
                              ? "#0056b3"
                              : "#007bff")
                        }
                        onMouseDown={(e) =>
                          (e.target.style.transform = "scale(0.95)")
                        }
                        onMouseUp={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      >
                        ODS Update
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Row*/}

              {/* Three Chart Sections in One Line */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                  gap: "2px", // Reduced gap
                  marginTop: "10px",
                  width: "95%",
                  boxSizing: "border-box",
                  marginLeft: "50px",
                }}
              >
                {/* Pie Chart Section */}
                <div
                  style={{
                    width: "32%",
                    height: "240px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    padding: "6px",
                    backgroundColor: "#fff",
                    boxSizing: "border-box",
                    position: "relative",
                  }}
                >
                  <h3
                    style={{
                      textAlign: "center",
                      marginBottom: "8px",
                      fontFamily: "Arial, sans-serif",
                      color: "#333",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Lead UTM Sources ({graphData.totalLeads})
                  </h3>
                  <div
                    style={{
                      height: "calc(100% - 36px)",
                      position: "relative",
                    }}
                  >
                    <Pie data={pieData} options={pieOptions} />
                  </div>
                </div>

                {/* Bar Chart Section */}
                <div
                  style={{
                    width: "32%",
                    height: "240px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    padding: "6px",
                    backgroundColor: "#fff",
                    boxSizing: "border-box",
                    position: "relative",
                  }}
                >
                  <h3
                    style={{
                      textAlign: "center",
                      marginBottom: "8px",
                      fontFamily: "Arial, sans-serif",
                      color: "#333",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Lead UTM Sources ({graphData.totalLeads})
                  </h3>
                  <div
                    style={{
                      height: "calc(100% - 36px)",
                      position: "relative",
                    }}
                  >
                    <Pie data={pieData} options={pieOptions} />
                  </div>
                </div>

                {/* Yearly Leads Bar Chart Section */}
                <div
                  style={{
                    width: "32%",
                    height: "240px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    padding: "8px",
                    backgroundColor: "#fff",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                      fontFamily: "Arial, sans-serif",
                      color: "#333",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    <Space
                      direction="vertical"
                      size={12}
                      style={{ marginRight: "auto" }}
                    >
                      <DatePicker
                        onChange={onChange3}
                        picker="year"
                        value={selectedDate2}
                        style={{
                          height: "35px",
                          width: "160px",
                          color: "green",
                          borderRadius: "5px",
                          borderColor: "#d9d9d9",
                          padding: "0 10px",
                        }}
                        disabledDate={disableFutureYears}
                      />
                    </Space>
                    {"  "}
                    <h3
                      style={{
                        textAlign: "center",
                        marginBottom: "10px",
                        fontFamily: "Arial, sans-serif",
                        color: "#333",
                        fontSize: "14px",
                        fontWeight: "600",
                        margin: 0,
                        textAlign: "center",
                        flex: 1,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Total Leads ({graphDatas.totalLeadCount}) ({selectedDate3}
                      )
                    </h3>
                  </div>

                  <div
                    style={{
                      height: "calc(100% - 36px)",
                      position: "relative",
                    }}
                  >
                    <Bar data={barData} options={barOptions} />
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "5px",
                  gap: "5px",
                  marginTop: "10px",
                  width: "100%",
                  boxSizing: "border-box",
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    width: "95%",
                    height: "300px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                    padding: "10px",
                    backgroundColor: "#fff",
                    boxSizing: "border-box",
                  }}
                >
                  <h3
                    style={{
                      textAlign: "center",
                      marginBottom: "10px",
                      fontFamily: "Arial, sans-serif",
                      color: "#333",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Leads By Stages ({graphData.totalLeads})
                  </h3>
                  <div
                    style={{
                      height: "calc(100% - 30px)",
                      position: "relative",
                    }}
                  >
                    <Bar data={barDatas} options={barOptionss} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-footer text-center">
          <div className="container">
            <div className="row row-sm">
              <div className="col-md-12">
                <span>
                  Copyright © 2024 <a href="javascript:void(0)">AMRS</a>.
                  Designed by <a href="http://webkype.com/">Webkype.com</a> All
                  rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesDashboardss;
