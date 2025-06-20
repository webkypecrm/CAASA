import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import Prince from "../Components/Prince";
import TopHeader from "../Components/TopHeader";
import { DatePicker, Space } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import '../assets/plugins/notify/css/notifIt.css'
import toast1, { Toaster } from 'react-hot-toast';
import moment from 'moment';
import io from 'socket.io-client';

import { Bar, Pie, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const ReportOne = () => {

    const [employee, setEmployee] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDate3, setSelectedDate3] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    const location = useLocation();
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


    // Formatting dates for API query
    const formattedDate = selectedDate ? selectedDate.format('MM-YYYY') : ''; // Month and Year
    const formattedDates = selectedDate2 ? selectedDate2.format('YYYY') : ''; // Year only
    const formattedDate2 = selectedDate3 ? selectedDate3.format('DD-MM-YYYY') : ''; // Full date

    // Handle Month Picker changes
    const onChange2 = (date) => {
        setSelectedDate(date);

    };

    // Handle Full Date Picker changes
    const onChange = (date) => {
        setSelectedDate3(date);

    };

    // Handle Year Picker changes
    const onChange3 = (date) => {
        setSelectedDate2(date);
    };

    // Disable future dates
    const disableFutureDates = (current) => {
        return current && current > moment().endOf('month');
    };

    // Disable future years
    const disableFutureYears = (current) => {
        return current && current.year() > moment().year();
    };


    useEffect(() => {
        const getEmp = async () => {
            setLoading(true);

            const url = `${apiUrl}/employee/employee?monthValue=${formattedDate}&dateValue=${formattedDate2}&yearValue=${formattedDates}`;

            try {
                let response = await fetch(url, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${Token}`,
                    },
                });
                response = await response.json();

                if (response.status === "success") {
                    setEmployee(response.data);
                } else {
                    console.error('Error fetching employee data:', response.message);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching employee data:', error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };


        getEmp();

    }, [formattedDate, formattedDate2, formattedDates]);


    // Pie chart data and options
    const pieChartData = {
        labels: ["Refund Processed", "Pending Refunds", "Cancelled Refunds", "Other"],
        datasets: [
            {
                data: [30, 50, 10, 10],
                backgroundColor: [
                    "rgba(46, 204, 113, 0.8)",
                    "rgba(52, 152, 219, 0.8)",
                    "rgba(231, 76, 60, 0.8)",
                    "rgba(241, 196, 15, 0.8)",
                ],
                borderColor: "#fff",
                borderWidth: 2,
            },
        ],
    };

    const pieChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                labels: { font: { family: "Arial", size: 14, weight: "bold" } },
            },
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                titleFont: { family: "Arial", size: 14, weight: "bold" },
                bodyFont: { family: "Arial", size: 12 },
            },
        },
    };

    // Bar chart data and options
    const barChartData = {
        labels: ["Total Candidates", "Total Staff", "Total Advisors", "Total Admins", "Total Vendors", "Vendors Category", "Total Gift", "Other"],
        datasets: [
            {
                label: "Regional Performance",
                data: [85, 70, 55, 90, 50, 40, 30, 60],
                backgroundColor: [
                    "rgba(46, 204, 113, 0.8)",
                    "rgba(52, 152, 219, 0.8)",
                    "rgba(241, 196, 15, 0.8)",
                    "rgba(231, 76, 60, 0.8)",
                ],
                borderColor: "#fff",
                borderWidth: 3,
                barPercentage: 0.6,
            },
        ],
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                labels: { font: { family: "Arial", size: 14, weight: "bold" } },
            },
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                titleFont: { family: "Arial", size: 14, weight: "bold" },
                bodyFont: { family: "Arial", size: 12 },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: "#333", font: { size: 12, family: "Arial" } },
            },
            y: {
                grid: { color: "#ccc", borderDash: [5, 5] },
                ticks: { color: "#333", stepSize: 10, font: { size: 12, family: "Arial" } },
            },
        },
    };



    // second

    const revenueBarData = {
        labels: ["Lands", "Projects", "Schemes", "Lucky Draw", "Total Plot", "Farmhouse", "Shop"],
        datasets: [
            {
                label: "Revenue (in $K)",
                data: [50, 70, 40, 85, 40, 60, 40],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.8)",
                    "rgba(255, 206, 86, 0.8)",
                    "rgba(75, 192, 192, 0.8)",
                    "rgba(153, 102, 255, 0.8)",
                ],
                borderColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 1,
            },
        ],
    };


    const barChartOptionss = {
        indexAxis: "y", // Horizontal bar chart
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
                labels: { font: { family: "Arial", size: 14, weight: "bold" } },
            },
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                titleFont: { family: "Arial", size: 14, weight: "bold" },
                bodyFont: { family: "Arial", size: 12 },
            },
        },
        scales: {
            x: {
                grid: { color: "rgba(0, 0, 0, 0.1)" },
                ticks: { color: "#555", font: { size: 12, family: "Arial" } },
            },
            y: {
                grid: { color: "rgba(0, 0, 0, 0.1)" },
                ticks: { color: "#555", font: { size: 12, family: "Arial" } },
            },
        },
    };

    // Data for the Doughnut Chart
    const revenueDoughnutData = {
        labels: ["Lands", "Projects", "Schemes", "Lucky Draw", "Total Plot", "Farmhouse", "Shop"],
        datasets: [
            {
                label: "Revenue Share",
                data: [50, 70, 40, 85, 40, 60, 40],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.8)",
                    "rgba(255, 206, 86, 0.8)",
                    "rgba(75, 192, 192, 0.8)",
                    "rgba(153, 102, 255, 0.8)",
                    "rgba(255, 159, 64, 0.8)",
                    "rgba(54, 162, 235, 0.8)",
                    "rgba(255, 99, 132, 0.8)",
                ],
                borderColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 1,
            },
        ],
    };


    const doughnutChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
                labels: { font: { family: "Arial", size: 14, weight: "bold" } },
            },
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                titleFont: { family: "Arial", size: 14, weight: "bold" },
                bodyFont: { family: "Arial", size: 12 },
            },
        },
    };





    const styless = {
        container: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '-7px',
            padding: '10px',

        },
        profileImage: {
            width: 50,
            height: 50,
            borderRadius: '50%',
            objectFit: 'cover',
            marginRight: '0.8rem',
            border: '2px solid #ddd',
            // backgroundColor: '#fff'
        },
        textContainer: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
        },
        heading: {
            margin: '0',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'normal',
            color: '#333',
            fontSize: '1rem',
            lineHeight: '1.5',
            whiteSpace: 'nowrap',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
        },
        icon: {
            display: 'inline-block',
            animation: 'wave 2s ease-in-out infinite',
            marginLeft: '0.5rem',
            cursor: 'pointer',
        },
    };


    const keyframes = `
  @keyframes bounce {
    0%, 100% {
      transform: scale(0.9);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.5);
      opacity: 1;
    }
  }
  `;


    // Inject keyframes into the document
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


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
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "nowrap", gap: "10px", overflowX: "auto" }}>

                                    {/* Profile Image and Text (Left side) */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                        <div style={styless.container}>
                                            <img
                                                src={employee.profilePhoto || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                alt="user-img"
                                                style={styless.profileImage}
                                            />
                                            <div style={styless.textContainer}>
                                                <h2 style={styless.heading}>
                                                    Hello {employee.fullName} ({employee.designation})
                                                    <span style={styless.icon}>🤗</span>
                                                </h2>
                                            </div>
                                            < style>
                                                {`
      @keyframes wave {
        0% { transform: rotate(0.0deg); }
        10% { transform: rotate(14.0deg); }
        20% { transform: rotate(-8.0deg); }
        30% { transform: rotate(14.0deg); }
        40% { transform: rotate(-4.0deg); }
        50% { transform: rotate(10.0deg); }
        60% { transform: rotate(0.0deg); }
        100% { transform: rotate(0.0deg); }
      }
    `}
                                            </style>
                                        </div>
                                    </div>

                                    {/* Buttons and Date Pickers (Right side) */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: '-5px' }}>

                                        {/* First Button */}
                                        <div>
                                            <Link
                                                to='/Dashboard'
                                                style={{
                                                    backgroundColor: location.pathname === '/Dashboard' ? "#0056b3" : "#007bff", // Active color if on /Dashboard
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
                                                onMouseLeave={(e) => (e.target.style.backgroundColor = location.pathname === '/Dashboard' ? "#0056b3" : "#007bff")}
                                                onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
                                                onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                                            >
                                                By Default Dashboard
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                to='/sales-dashboard'
                                                style={{
                                                    backgroundColor: location.pathname === '/sales-dashboard' ? "#0056b3" : "#007bff",
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
                                                onMouseLeave={(e) => (e.target.style.backgroundColor = location.pathname === '/sales-dashboard' ? "#0056b3" : "#007bff")}
                                                onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
                                                onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                                            >
                                                Sales Dashboard
                                            </Link>
                                        </div>

                                        <div>
                                            <Link
                                                to='/inventory-dashboard'
                                                style={{
                                                    backgroundColor: location.pathname === '/inventory-dashboard' ? "#0056b3" : "#007bff",
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
                                                onMouseLeave={(e) => (e.target.style.backgroundColor = location.pathname === '/inventory-dashboard' ? "#0056b3" : "#007bff")}
                                                onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
                                                onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                                            >
                                                Inventory Dashboard
                                            </Link>
                                        </div>

                                        {/* New Button */}
                                        <div>
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
                                        </div>

                                        {/* Date Picker (Full Date) */}
                                        <div>
                                            <Space direction="vertical" size={12}>
                                                <DatePicker
                                                    onChange={onChange}
                                                    value={selectedDate3}
                                                    style={{ height: "35px", width: "150px" }}
                                                    format="DD-MM-YYYY"
                                                />
                                            </Space>
                                        </div>

                                        {/* Month Picker */}
                                        <div>
                                            <Space direction="vertical" size={12}>
                                                <DatePicker
                                                    onChange={onChange2}
                                                    value={selectedDate}
                                                    picker="month"
                                                    disabledDate={disableFutureDates}
                                                    style={{ height: "35px", width: "150px", color: "green" }}
                                                    format="MM-YYYY"
                                                />
                                            </Space>
                                        </div>

                                        {/* Year Picker */}
                                        <div>
                                            <Space direction="vertical" size={12}>
                                                <DatePicker
                                                    onChange={onChange3}
                                                    value={selectedDate2}
                                                    picker="year"
                                                    disabledDate={disableFutureYears}
                                                    style={{ height: "35px", width: "150px" }}
                                                    format="YYYY"
                                                />
                                            </Space>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/*Row*/}



                            <div className="row row-sm" style={{ marginTop: '-30px' }}>

                                <div className="col-sm-12 col-lg-12 col-xl-12">



                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            gap: "15px",
                                            flexWrap: "nowrap",
                                            overflowX: "auto",
                                            padding: "20px",
                                        }}
                                    >
                                        {/* First Bar Chart */}
                                        <div
                                            style={{
                                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                                                padding: "20px",
                                                borderRadius: "15px",
                                                backgroundColor: "#fff",
                                                border: "1px solid #ddd",
                                                width: "32%",
                                                minWidth: "280px",
                                                height: "250px", // Keep consistent height for all cards
                                                overflow: "hidden", // Ensure no overflow
                                                cursor: "pointer",
                                            }}
                                        >
                                            <h3
                                                style={{
                                                    textAlign: "center",
                                                    color: "#333",
                                                    fontSize: "16px",
                                                    fontWeight: "600",
                                                    marginBottom: "10px", // Adjust margin
                                                }}
                                            >
                                                Regional Performance
                                            </h3>
                                            <Bar data={barChartData} options={barChartOptions} height={220} width={null} />
                                        </div>

                                        {/* Pie Chart */}
                                        <div
                                            style={{
                                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                                                padding: "20px",
                                                borderRadius: "15px",
                                                backgroundColor: "#fff",
                                                border: "1px solid #ddd",
                                                width: "32%",
                                                minWidth: "280px",
                                                height: "250px", // Same height as other cards
                                                overflow: "hidden", // Prevent overflow
                                                cursor: "pointer",
                                            }}
                                        >
                                            <h3
                                                style={{
                                                    textAlign: "center",
                                                    color: "#333",
                                                    fontSize: "16px",
                                                    fontWeight: "600",
                                                    marginBottom: "10px", // Adjusted margin for spacing
                                                }}
                                            >
                                                Refund Distribution
                                            </h3>
                                            <div style={{ height: "200px", position: "relative" }}>
                                                <Pie data={pieChartData} options={pieChartOptions} height={200} width={null} />
                                            </div>
                                        </div>

                                        {/* Second Bar Chart */}
                                        <div
                                            style={{
                                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                                                padding: "20px",
                                                borderRadius: "15px",
                                                backgroundColor: "#fff",
                                                border: "1px solid #ddd",
                                                width: "32%",
                                                minWidth: "280px",
                                                height: "250px", // Consistent height
                                                overflow: "hidden", // Prevent overflow
                                                cursor: "pointer",
                                            }}
                                        >
                                            <h3
                                                style={{
                                                    textAlign: "center",
                                                    color: "#333",
                                                    fontSize: "16px",
                                                    fontWeight: "600",
                                                    marginBottom: "10px", // Adjusted margin
                                                }}
                                            >
                                                Regional Performance
                                            </h3>
                                            <Bar data={barChartData} options={barChartOptions} height={220} width={null} />
                                        </div>
                                    </div>


                                    {/* Second Row */}


                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            gap: "15px",
                                            flexWrap: "nowrap",
                                            overflowX: "auto",
                                            padding: "20px",
                                        }}
                                    >
                                        {/* Bar Chart */}
                                        <div
                                            style={{
                                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
                                                padding: "20px",
                                                borderRadius: "15px",
                                                backgroundColor: "#fff",
                                                border: "1px solid #e0e0e0",
                                                transition: "all 0.3s ease",
                                                width: "100%",
                                                maxWidth: "850px",
                                                cursor: "pointer",
                                                transformOrigin: "center",
                                                height: "400px", // Adjust the height of the card container
                                                overflow: "hidden", // Prevent overflow
                                            }}
                                            onClick={(e) => {
                                                e.target.style.transform = "scale(0.200)"; // More significant zoom-out effect
                                                setTimeout(() => {
                                                    e.target.style.transform = "scale(1)"; // Reset zoom after a short delay
                                                }, 200); // Time delay to reset zoom after 200ms
                                            }}
                                        >
                                            <h3 style={{ textAlign: "center", color: "#333", fontSize: "18px", fontWeight: "600" }}>
                                                Revenue by Product (Horizontal Bar)
                                            </h3>
                                            <div style={{ height: "300px" }}> {/* Adjust the height of the chart */}
                                                <Bar data={revenueBarData} options={barChartOptionss} />
                                            </div>
                                        </div>

                                        {/* Doughnut Chart */}
                                        <div
                                            style={{
                                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)", // Add shadow for depth
                                                padding: "20px",
                                                borderRadius: "15px", // Smooth rounded corners
                                                backgroundColor: "#fff",
                                                border: "1px solid #e0e0e0", // Light border for subtle structure
                                                transition: "all 0.3s ease",
                                                width: "100%",
                                                maxWidth: "850px", // Limit the card width
                                                cursor: "pointer",
                                                transformOrigin: "center",
                                                height: "auto", // Let the height adjust according to content
                                                overflow: "hidden", // Prevent content overflow
                                                display: "flex", // Flexbox for centering the content
                                                flexDirection: "column", // Stack elements vertically
                                                justifyContent: "center", // Center content vertically
                                                alignItems: "center", // Center content horizontally
                                                paddingTop: "40px", // Add space at the top for title
                                                height: "400px",
                                            }}
                                            onClick={(e) => {
                                                e.target.style.transform = "scale(0.200)"; // Zoom-out effect
                                                setTimeout(() => {
                                                    e.target.style.transform = "scale(1)"; // Reset zoom after delay
                                                }, 200);
                                            }}
                                        >
                                            <h3
                                                style={{
                                                    textAlign: "center", // Center the title
                                                    color: "#333", // Dark color for title text
                                                    fontSize: "20px", // Larger font size for readability
                                                    fontWeight: "600", // Bold font for emphasis
                                                    marginBottom: "30px", // Add space below the title
                                                }}
                                            >
                                                Revenue Share by Product (Doughnut Chart)
                                            </h3>
                                            <div
                                                style={{
                                                    width: "100%", // Full width for chart container
                                                    maxWidth: "450px", // Restrict max width of the chart
                                                    height: "300px", // Set a fixed height for the chart
                                                    display: "flex",
                                                    justifyContent: "center", // Center chart horizontally
                                                    alignItems: "center", // Center chart vertically
                                                }}
                                            >
                                                <Doughnut data={revenueDoughnutData} options={doughnutChartOptions} />
                                            </div>
                                        </div>

                                    </div>




                                    <br />
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
                                    Copyright © 2024 <a href="javascript:void(0)">AMRS</a>. Designed
                                    by <a href="http://webkype.com/">Webkype.com</a> All rights
                                    reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default ReportOne

