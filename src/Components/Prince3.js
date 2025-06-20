import React from 'react'
import { Link } from 'react-router-dom';

const Prince3 = () => {
    const linkStyle = {
        color: 'white',
        textDecoration: 'none', // Add text decoration to remove underline from links
    };

    const navBarStyle = {
        backgroundColor: 'darkgreen', // Use lowercase for color names
        display: 'flex',
        height: '50px',
        alignItems: 'center', // Center vertically within the navbar
        paddingLeft: '10px', // Add some padding on the left for better spacing
    };
  return (
   <>

        <div style={navBarStyle}>
            {/* Dropdown 1 */}
            <div className="nav-item">
                <a to="/Firstpage" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Dashboard
                </a>
            </div>
            <div className="nav-item">
                <a to="/Firstpage" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Sales Leads
                </a>
            </div>
            <div className="nav-item">
                <a to="/Firstpage" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Sales PO
                </a>
            </div>
            <div className="nav-item">
                <a to="/Firstpage" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Sales Invoiced
                </a>
            </div>
            <div className="nav-item">
                <a to="/Firstpage" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Sales Orders
                </a>
            </div>
            <div className="nav-item">
                <a to="/Firstpage" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Sales Report
                </a>
            </div>
            <div className="nav-item">
                <a to="/Firstpage" className="nav-link" style={linkStyle}>
                    <i className="fas fa-home me-2"></i>
                    Events
                </a>
            </div>
        </div>
   </>
  )
}

export default Prince3