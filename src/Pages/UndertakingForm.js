import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from "../Components/TopHeader";
import Prince from "../Components/Prince";

const UndertakingForm = () => {
    const [employee4, setEmployee4] = useState({})
    const { empid } = useParams();

    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    async function getEmppps() {
        const url = `${apiUrl}/applicant/getApplicantInfo/${empid}`;
        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Token}`
            },
        });
        response = await response.json();

        if (response.status === "success") {
            setEmployee4(response.data);
        }
    }

    useEffect(() => {
        getEmppps();
    }, []);

    return (
        <>
            <div className="page">
                <TopHeader />
                <Prince />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "100vh",
                        backgroundColor: "#f7f9fc",
                        padding: "20px",
                    }}
                >


                    <div
                        className="modal-body"
                        style={{
                            padding: "30px",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            maxWidth: "900px",
                            width: "100%",
                        }}
                    >
                        <form style={{ width: "100%" }}>
                            <h3
                                style={{
                                    textAlign: "center",
                                    color: "#333",
                                    fontWeight: "600",
                                    marginBottom: "20px",
                                }}
                            >
                                UNDERTAKING
                            </h3>


                            <table
                                style={{
                                    margin: "0 auto",
                                    width: "100%",
                                    borderSpacing: "0",
                                    lineHeight: "1.6",
                                    color: "#444",
                                }}
                            >
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>
                                                I, <b>{employee4.applicantFirstName} {employee4.applicantLastName}</b>, have participated in the Lucky Draw dated
                                                <b> N/A</b> under the scheme <b>Scheme Name: {employee4.schemeId}</b>. My Ticket ID
                                                is <b>{employee4.ticketId || 'N/A'}</b>.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>
                                                Unfortunately, I did not receive an allotment against my Ticket ID
                                                under the scheme.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>
                                                I would like to request the concerned department to kindly reconsider
                                                my allotment out of cancellations, if any, under the Draw mentioned.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "20px 0" }}>
                                            <p>
                                                Applicant Name: <b>{employee4.applicantFirstName} {employee4.applicantLastName}</b> &nbsp;&nbsp;&nbsp; Date: <b>N/A</b>{" "}
                                                
                                            </p>
                                            <p>Applicant Mobile: <b>{employee4.applicantMobile || 'N/A'}</b></p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UndertakingForm;
