import React, { useState, useEffect } from "react";
import Prince from "../Components/Prince";
import TopHeader from "../Components/TopHeader";

const IncentivePlan = () => {
    const [content, setContent] = useState("Unit No-15 & 17 Mussoorie Heights is open for sale. Commission Slab for PLP is 7% and DP is 8% along with Rs.1,00,000 Cash Bonus for sale in SC-87.");
    const [content2, setContent2] = useState("Unit No- F3 Hill View Farms is open for sale. Earn Rs.6,40,000 on selling Unit No- F3 of Hill View Farms in SC-87 (This offer cannot be clubbed with any other incentive )");
    const [content3, setContent3] = useState("IPAD on selling 600+ sq yds individual or collective Heritage Farms in Draw SC-87 ");

    // Function to handle content change
    const handleContentChange = (event) => {
        setContent(event.target.value);
    };
    const handleContentChange2 = (event) => {
        setContent2(event.target.value);
    };
    const handleContentChange3 = (event) => {
        setContent3(event.target.value);
    };

    const textareaStyle = {
        width: '100%',
        minHeight: '50px',
        maxHeight: '50px',
        overflowY: 'auto',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        fontWeight: 'bold',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        color: '#333',
        backgroundColor: '#f0f0f0'
    };

    const textareaWrapperStyle = {
        marginBottom: '20px'
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
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Add Incentive Plan</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-3" style={{ display: "inline-block" }}>Create Incentive Plan{" "}
                                                    <select className="form-control" name="paymentPlan" style={{
                                                        border: "1px solid #ccc", padding: "1px", borderRadius: "8px",
                                                        width: "30%", height: '25px', display: "inline-block"
                                                    }}>
                                                        <option value="">Select </option>
                                                        <option>Plot</option>
                                                        <option>Farmhouse</option>
                                                        <option>Shop</option>
                                                    </select>
                                                </h6>
                                            </div>
                                            <form >

                                                <table style={{ border: "1px solid #ccc", borderCollapse: "collapse", width: "100%" }}>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ paddingRight: "16px", width: "30%" }}>
                                                                <select
                                                                    className="form-control"
                                                                    name="paymentPlan"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "1px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <option value="">Select Design</option>
                                                                    <option>VP</option>
                                                                    <option>Manager</option>
                                                                    <option>Team</option>
                                                                </select>
                                                            </td>
                                                            <td style={{ paddingLeft: "13px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="12"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px" }}>Points</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="1"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>HVA or</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="2"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>HF is</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <select
                                                                    className="form-control"
                                                                    name="paymentPlan"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <option value="">Select </option>
                                                                    <option>Mandatory</option>
                                                                    <option>Not Mandatory</option>

                                                                </select>

                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>Rs =</td>
                                                            <td style={{ paddingLeft: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    name="PLCs"
                                                                    placeholder="7000"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    {" "}
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ paddingRight: "16px", width: "30%" }}>
                                                                <select
                                                                    className="form-control"
                                                                    name="paymentPlan"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "1px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <option value="">Select Design</option>
                                                                    <option>VP</option>
                                                                    <option>Manager</option>
                                                                    <option>Team</option>
                                                                </select>
                                                            </td>
                                                            <td style={{ paddingLeft: "13px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="12"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px" }}>Points</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="1"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>HVA or</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="2"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>HF is</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <select
                                                                    className="form-control"
                                                                    name="paymentPlan"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <option value="">Select </option>
                                                                    <option>Mandatory</option>
                                                                    <option>Not Mandatory</option>

                                                                </select>

                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>Rs =</td>
                                                            <td style={{ paddingLeft: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    name="PLCs"
                                                                    placeholder="7000"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    {" "}
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ paddingRight: "16px", width: "30%" }}>
                                                                <select
                                                                    className="form-control"
                                                                    name="paymentPlan"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "1px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <option value="">Select Design</option>
                                                                    <option>VP</option>
                                                                    <option>Manager</option>
                                                                    <option>Team</option>
                                                                </select>
                                                            </td>
                                                            <td style={{ paddingLeft: "13px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="12"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px" }}>Points</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="1"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>HVA or</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="2"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>HF is</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <select
                                                                    className="form-control"
                                                                    name="paymentPlan"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <option value="">Select </option>
                                                                    <option>Mandatory</option>
                                                                    <option>Not Mandatory</option>

                                                                </select>

                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>Rs =</td>
                                                            <td style={{ paddingLeft: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    name="PLCs"
                                                                    placeholder="7000"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    {" "}
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ paddingRight: "16px", width: "30%" }}>
                                                                <select
                                                                    className="form-control"
                                                                    name="paymentPlan"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "1px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <option value="">Select Design</option>
                                                                    <option>VP</option>
                                                                    <option>Manager</option>
                                                                    <option>Team</option>
                                                                </select>
                                                            </td>
                                                            <td style={{ paddingLeft: "13px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="12"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px" }}>Points</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="1"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>HVA or</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="2"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>HF is</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <select
                                                                    className="form-control"
                                                                    name="paymentPlan"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <option value="">Select </option>
                                                                    <option>Mandatory</option>
                                                                    <option>Not Mandatory</option>

                                                                </select>

                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>Rs =</td>
                                                            <td style={{ paddingLeft: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    name="PLCs"
                                                                    placeholder="7000"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ paddingRight: "16px", width: "30%" }}>
                                                                <select
                                                                    className="form-control"
                                                                    name="paymentPlan"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "1px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <option value="">Select Design</option>
                                                                    <option>VP</option>
                                                                    <option>Manager</option>
                                                                    <option>Team</option>
                                                                </select>
                                                            </td>
                                                            <td style={{ paddingLeft: "13px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="12"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px" }}>Points</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="1"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>HVA or</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="2"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>HF is</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <select
                                                                    className="form-control"
                                                                    name="paymentPlan"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <option value="">Select </option>
                                                                    <option>Mandatory</option>
                                                                    <option>Not Mandatory</option>

                                                                </select>

                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>Rs =</td>
                                                            <td style={{ paddingLeft: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    name="PLCs"
                                                                    placeholder="7000"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ paddingRight: "16px", width: "30%" }}>
                                                                <select
                                                                    className="form-control"
                                                                    name="paymentPlan"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "1px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <option value="">Select Design</option>
                                                                    <option>VP</option>
                                                                    <option>Manager</option>
                                                                    <option>Team</option>
                                                                </select>
                                                            </td>
                                                            <td style={{ paddingLeft: "13px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="12"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px" }}>Points</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="1"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>HVA or</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    placeholder="2"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>HF is</td>
                                                            <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                <select
                                                                    className="form-control"
                                                                    name="paymentPlan"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                >
                                                                    <option value="">Select </option>
                                                                    <option>Mandatory</option>
                                                                    <option>Not Mandatory</option>

                                                                </select>

                                                            </td>
                                                            <td style={{ paddingRight: "10px", whiteSpace: "nowrap" }}>Rs =</td>
                                                            <td style={{ paddingLeft: "10px" }}>
                                                                <input
                                                                    type="text"
                                                                    name="PLCs"
                                                                    placeholder="7000"
                                                                    style={{
                                                                        border: "1px solid #ccc",
                                                                        padding: "3px",
                                                                        borderRadius: "8px",
                                                                        width: "100%"
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row row-sm">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-3" style={{ display: "inline-block" }}>Hill View Farms SC-87{" "}
                                                    <select className="form-control" name="paymentPlan" style={{
                                                        border: "1px solid #ccc", padding: "10px", borderRadius: "8px",
                                                        width: "30%", display: "inline-block", height: '40px'
                                                    }}>
                                                        <option value="">Select </option>
                                                        <option>VP</option>
                                                        <option>Manager</option>

                                                    </select>
                                                </h6>
                                            </div>
                                            <form>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                                {" "}
                                                                Hill View Farms sale  {" "}
                                                                <input
                                                                    type="text"
                                                                    name="invitationLetterDate"


                                                                    placeholder="400-600"
                                                                    style={{
                                                                        border: "1px solid #cdcdd7",
                                                                        padding: 7,
                                                                        borderRadius: 5,
                                                                        width: 100
                                                                    }}

                                                                />{" "} sq yds (individual or collective) -
                                                                <input
                                                                    type="text"
                                                                    name="invitationLetterDate"


                                                                    placeholder="I Phone 15"
                                                                    style={{
                                                                        border: "1px solid #cdcdd7",
                                                                        padding: 7,
                                                                        borderRadius: 5,
                                                                        width: 100
                                                                    }}

                                                                />{" "} or <input
                                                                    type="text"
                                                                    name="invitationLetterDate"


                                                                    placeholder="Macbook Air"
                                                                    style={{
                                                                        border: "1px solid #cdcdd7",
                                                                        padding: 7,
                                                                        borderRadius: 5,
                                                                        width: 100
                                                                    }}

                                                                />{" "}  .
                                                                <br />
                                                                <br />
                                                                Hill View Farms sale  <input
                                                                    type="text"
                                                                    name="invitationLetterDate"


                                                                    placeholder="600-800"
                                                                    style={{
                                                                        border: "1px solid #cdcdd7",
                                                                        padding: 7,
                                                                        borderRadius: 5,
                                                                        width: 100
                                                                    }}

                                                                />{" "} sq yds (individual or collective)- I Phone 15 Pro Max.
                                                                <br />

                                                                <br />
                                                                Hill View Farms sale <input
                                                                    type="text"
                                                                    name="invitationLetterDate"


                                                                    placeholder=">800"
                                                                    style={{
                                                                        border: "1px solid #cdcdd7",
                                                                        padding: 7,
                                                                        borderRadius: 5,
                                                                        width: 100
                                                                    }}

                                                                />{" "} sq yds (individual or collective)- Rs.2,00,000 Bonus Incentive

                                                            </p>

                                                        </td>
                                                    </tr>

                                                </tbody>

                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row row-sm">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-3">Shops for SC-87 </h6>
                                            </div>
                                            <form >
                                                <tbody>
                                                    <tr>
                                                        <td>



                                                            <p style={{ marginTop: 0, marginBottom: 10 }}>
                                                                {" "}
                                                                <input
                                                                    type="text"
                                                                    name="invitationLetterDate"


                                                                    placeholder="9%"
                                                                    style={{
                                                                        border: "1px solid #cdcdd7",
                                                                        padding: 7,
                                                                        borderRadius: 5,
                                                                        width: 60
                                                                    }}

                                                                />{" "} on
                                                                <input
                                                                    type="text"
                                                                    name="invitationLetterDate"


                                                                    placeholder="PLP"
                                                                    style={{
                                                                        border: "1px solid #cdcdd7",
                                                                        padding: 7,
                                                                        borderRadius: 5,
                                                                        width: 60
                                                                    }}

                                                                />{" "} and  <input
                                                                    type="text"
                                                                    name="invitationLetterDate"


                                                                    placeholder="12%"
                                                                    style={{
                                                                        border: "1px solid #cdcdd7",
                                                                        padding: 7,
                                                                        borderRadius: 5,
                                                                        width: 60
                                                                    }}

                                                                />{" "} On  <input
                                                                    type="text"
                                                                    name="invitationLetterDate"


                                                                    placeholder="DP"
                                                                    style={{
                                                                        border: "1px solid #cdcdd7",
                                                                        padding: 7,
                                                                        borderRadius: 5,
                                                                        width: 60
                                                                    }}

                                                                />{" "} Incentive Plan on selling Shops plus earn an
                                                                <input
                                                                    type="text"
                                                                    name="invitationLetterDate"


                                                                    placeholder="IPAD"
                                                                    style={{
                                                                        border: "1px solid #cdcdd7",
                                                                        padding: 7,
                                                                        borderRadius: 5,
                                                                        width: 100
                                                                    }}

                                                                />{" "} on selling  <input
                                                                    type="text"
                                                                    name="invitationLetterDate"


                                                                    placeholder="=>"
                                                                    style={{
                                                                        border: "1px solid #cdcdd7",
                                                                        padding: 7,
                                                                        borderRadius: 5,
                                                                        width: 100
                                                                    }}

                                                                />{" "}
                                                                <input
                                                                    type="text"
                                                                    name="invitationLetterDate"


                                                                    placeholder="500"
                                                                    style={{
                                                                        border: "1px solid #cdcdd7",
                                                                        padding: 7,
                                                                        borderRadius: 5,
                                                                        width: 100
                                                                    }}

                                                                />{" "} sq ft individual shops in SC-87


                                                            </p>

                                                        </td>
                                                    </tr>

                                                </tbody>

                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row row-sm">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <form  >
                                                {/* Textarea for editing the content */}
                                                <div style={textareaWrapperStyle}>
                                                    <textarea
                                                        value={content}
                                                        onChange={handleContentChange}
                                                        style={textareaStyle}
                                                    />
                                                </div>
                                                {/* Textarea for editing the content */}
                                                <div style={textareaWrapperStyle}>
                                                    <textarea
                                                        value={content2}
                                                        onChange={handleContentChange2}
                                                        style={textareaStyle}
                                                    />
                                                </div>
                                                {/* Textarea for editing the content */}
                                                <div style={textareaWrapperStyle}>
                                                    <textarea
                                                        value={content3}
                                                        onChange={handleContentChange3}
                                                        style={textareaStyle}
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row row-sm">
                                <div className="col-12 mb-3">
                                    <button

                                        className="btn btn-primary"
                                        type="button"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Content*/}
                {/* Main Footer*/}
                <div className="main-footer text-center">
                    <div className="container">
                        <div className="row row-sm">
                            <div className="col-md-12">
                                <span>
                                    Copyright © 2024 <a href="javascript:void(0)">Webkype</a>. Designed
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

export default IncentivePlan

