import React, { useState, useEffect, useRef } from "react";
import Prince from "../Components/Prince";
import TopHeader from "../Components/TopHeader";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SalaryGenerate = () => {

    const styles = {
        container: {
            fontFamily: "'Arial', sans-serif",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "20px",
            border: "1px solid #ddd",
            backgroundColor: "#f9f9f9",
            lineHeight: "1.6",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
        heading: {
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "24px",
            margin: "20px 0",
            color: "#333",
        },
        flexContainer: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
        },
        leftSection: {
            width: "48%",
            marginBottom: "0",
        },
        rightSection: {
            width: "48%",
            textAlign: "center",
            marginTop: "40px",
        },
        photo: {
            width: "120px",
            height: "80px",
            marginBottom: "10px",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        sectionTitle: {
            fontWeight: "bold",
            marginBottom: "2px",
            display: "inline-block",
        },
        sectionContent: {
            marginBottom: "5px",
        },
        tableContainer: {
            overflowX: "auto",
            marginTop: "20px",
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",
        },
        th: {
            border: "1px solid #ddd",
            padding: "12px",
            backgroundColor: "#f2f2f2",
            textAlign: "left",
            fontWeight: "bold",
            color: "#333",
        },
        td: {
            border: "1px solid #ddd",
            padding: "12px",
            textAlign: "left",
        },
        input: {
            width: "70%",
            padding: "2px",
            boxSizing: "border-box",
            border: "1px solid #ddd",
            borderRadius: "4px",
        },
        footer: {
            marginTop: "30px",
            fontSize: "14px",
            color: "#555",
            borderTop: "1px solid #ddd",
            paddingTop: "20px",
        },
        totalAmount: {
            fontWeight: "bold",
            fontSize: "16px",
        },
    };

    return (
        <div className="page">
            <TopHeader />
            <Prince />
            <div className="main-content  pt-0" style={{ marginTop: '10px' }}>
                <div className="main-container container-fluid">
                    <div className="inner-body">

                        <div style={styles.container}>
                            <h2 style={styles.heading}>PAY SLIP FOR OCTOBER 2024</h2>
                            <div style={styles.flexContainer}>
                                <div style={styles.leftSection}>
                                    <p style={styles.sectionContent}>Deepak Kumar</p>
                                    <p style={styles.sectionContent}>Sales Manager</p>
                                    <p style={styles.sectionContent}>Webkype</p>
                                    <p style={styles.sectionContent}>
                                        <span style={styles.sectionTitle}>Employee Code:</span> WISP/2015/001
                                    </p>
                                    <p style={styles.sectionContent}>
                                        <span style={styles.sectionTitle}>PAN No.:</span> BZGPS3789A
                                    </p>
                                    <p style={styles.sectionContent}>
                                        <span style={styles.sectionTitle}>Account No:</span> 100038888353
                                    </p>
                                    <p style={styles.sectionContent}>
                                        <span style={styles.sectionTitle}>PF Acc No:</span> N/A
                                    </p>
                                    <p style={styles.sectionContent}>
                                        <span style={styles.sectionTitle}>Salary of Month:</span> Oct 2021
                                    </p>
                                    <p style={styles.sectionContent}>
                                        <span style={styles.sectionTitle}>Payable days:</span> 31
                                    </p>
                                    <p style={styles.sectionContent}>
                                        <span style={styles.sectionTitle}>Leave taken:</span> 3
                                    </p>
                                </div>
                                <div style={styles.rightSection}>
                                    <img
                                        src="https://amrealty.webkype.com/assets/img/brand/logo.png"
                                        alt="Company Logo"
                                        style={styles.photo}
                                    />
                                    <p>Webkype Info Services Private Limited</p>
                                    <p>H140, B04, Sector 63, Noida, UP, 201301, India</p>
                                </div>
                            </div>
                            <div style={styles.tableContainer}>
                                <table style={styles.table}>
                                    <thead>
                                        <tr>
                                            <th style={styles.th}>Component #</th>
                                            <th style={styles.th}>Amount (A)</th>
                                            <th style={styles.th}>Deductions</th>
                                            <th style={styles.th}>Amount (B)</th>
                                            <th style={styles.th}>Total Payable Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={styles.td}>Basic</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>HRA</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Bonus</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Medical Reim.</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Special Allowance</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Conveyance</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>OR</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Skilled Based pay</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Quality Incentives</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>EVIS</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Hold Release</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Relocation Allowance</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Comp-Off Encashments</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>

                                        <tr>
                                            <td style={styles.td}>Comp-Off Encash Arrears</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Performance Pay</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Spl Incentives</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Spiff Incentives</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Leave Encashments</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>Arrears</td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                            <td style={styles.td}><input type="text" style={styles.input} defaultValue="0" /></td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td} colSpan="4">Total</td>
                                            <td style={styles.td}>77900</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div style={styles.footer}>
                                <p>This is a system generated salary slip, No need of any signature and seal. For any query or concerns please contact HR department. </p>
                                <p style={styles.totalAmount}>Net Salary: ₹77900 (One Lakh Only)</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* End Main Content*/}
            {/* Main Footer*/}
            <br />
            <br />

            <div className="main-footer text-center" >
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
    );
};

export default SalaryGenerate


