import React from 'react'
import { Link } from 'react-router-dom';

const Prince2 = () => {
    const linkStyle = {
        color: 'white',
        textDecoration: 'none', // Add text decoration to remove underline from links
    };

    const navBarStyle = {
        backgroundColor: 'darkgreen', // Use lowercase for color names
        display: 'flex',
        height: '40px',
        alignItems: 'center', // Center vertically within the navbar
        paddingLeft: '10px', // Add some padding on the left for better spacing
    };
  return (
    <>
    <div style={navBarStyle}>
            {/* Dropdown 1 */}
            <div className="nav-item" style={{ marginRight: '10px' }}>
                <a to="/Firstpage" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Dashboard
                </a>
            </div>
            <div className="nav-item">
                <Link to="/MainPage2" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Employee
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/AttendanceLogs" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Attendance
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/EmployeeReportsList" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Employee Reports
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/Firstpage" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Events
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/Firstpage" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Broadcasting
                </Link>
            </div>
        </div>
    </>
  )
}

export default Prince2