import React, { useState, useEffect } from "react";
import MainPage from "../../Components/MainPage";
import Prince from "../../Components/Prince";
import DropdownMenu from "../../Components/DropdownMenu";
import { useParams } from "react-router-dom";
import TopHeader from "../../Components/TopHeader";
import { toast } from "react-toastify";

function CustomPlan() {

    const apiUrl = process.env.REACT_APP_URL;
    console.log(apiUrl);


    const Token = localStorage.getItem("Token");
    console.log("Token " + Token);

    const { id } = useParams();
    const [serviceProviderRates, setServiceProviderRates] = useState([]);
    const [planName, setPlanName] = useState('')

    useEffect(() => {

        fetch(`${apiUrl}/plan/getAllCustomePlanData/${id}`, {
            headers: {
                Authorization: `Bearer ${Token}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setServiceProviderRates(data.data);
                setPlanName(data.plans.planName)
            })
            .catch((error) => {
                console.error("Error fetching Partners:", error);
            });


    }, []);



    return (
        <div className="page">
            <TopHeader />
            <Prince />

            <div class="row row-sm w-90 m-3">
                <div class="col-lg-13 mt-3">
                    <h3> Plan :-  {planName}</h3>
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="text-wrap">
                                <div class="table-responsive">
                                    <table
                                        id="example-input"
                                        class="table table-bordered text-nowrap table-striped"
                                    >
                                        <thead>
                                            <tr>
                                                <th colspan="2" style={{ textAlign: "center" }}>
                                                    Plan Details
                                                </th>
                                                <th colspan="12" style={{ textAlign: "center" }}>
                                                    Including GST
                                                </th>
                                                <th colspan="12" style={{ textAlign: "center" }}>
                                                    Excluding GST
                                                </th>
                                            </tr>
                                            <tr>
                                                <th colSpan={2}></th>
                                                <th colSpan={2}> Local</th>
                                                <th colSpan={2}>Regional</th>
                                                <th colSpan={2}>Metro</th>
                                                <th colSpan={2}>ROI</th>
                                                <th colSpan={2}>Special</th>
                                                <th colSpan={2}></th>
                                                <th colSpan={2}> Local</th>
                                                <th colSpan={2}>Regional</th>
                                                <th colSpan={2}>Metro</th>
                                                <th colSpan={2}>ROI</th>
                                                <th colSpan={2}>Special</th>
                                            </tr>
                                            <tr>
                                                <th style={{ background: "#e0d8d8 !important" }}>
                                                    Courier
                                                </th>
                                                <th style={{ background: "#e0d8d8 !important" }}>
                                                    Weight( in KG)
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    Forward
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    RTO
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    Forward
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    RTO
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    Forward
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    RTO
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    Forward
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    RTO
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    Forward
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    RTO
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    COD{" "}
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    COD%
                                                </th>
                                                <th style={{ background: "#a7c2e2 !important" }}>
                                                    Forward{" "}
                                                </th>
                                                <th style={{ background: "#a7c2e2 !important" }}>
                                                    RTO{" "}
                                                </th>
                                                <th style={{ background: "#a7c2e2 !important" }}>
                                                    Forward{" "}
                                                </th>
                                                <th style={{ background: "#a7c2e2 !important" }}>
                                                    RTO{" "}
                                                </th>
                                                <th style={{ background: "#a7c2e2 !important" }}>
                                                    Forward{" "}
                                                </th>
                                                <th style={{ background: "#a7c2e2 !important" }}>
                                                    RTO{" "}
                                                </th>
                                                <th style={{ background: "#a7c2e2 !important" }}>
                                                    Forward{" "}
                                                </th>
                                                <th style={{ background: "#a7c2e2 !important" }}>
                                                    RTO{" "}
                                                </th>
                                                <th style={{ background: "#a7c2e2 !important" }}>
                                                    Forward{" "}
                                                </th>
                                                <th style={{ background: "#a7c2e2 !important" }}>
                                                    RTO{" "}
                                                </th>
                                                <th style={{ background: "#a7c2e2 !important" }}>
                                                    COD{" "}
                                                </th>
                                                <th style={{ background: "#a7c2e2 !important" }}>
                                                    COD%
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {serviceProviderRates.map((spr, index) => (
                                                <tr key={index}>
                                                    <td>{spr.counrier}</td>
                                                    <td>{spr.weightSlab}</td>
                                                    <td>{spr.local}</td>
                                                    <td>{spr.localRTO}</td>
                                                    <td>{spr.regional}</td>
                                                    <td>{spr.regionalRTO}</td>
                                                    <td>{spr.metro}</td>
                                                    <td>{spr.metroRTO}</td>
                                                    <td>{spr.roi}</td>
                                                    <td>{spr.roirto}</td>
                                                    <td>{spr.special}</td>
                                                    <td>{spr.specialRTO}</td>
                                                    <td>{spr.cod}</td>
                                                    <td>{spr.codPercentage}</td>
                                                    <td>{(parseFloat(spr.local) / 1.18).toFixed(2)}</td>
                                                    <td>{(parseFloat(spr.localRTO) / 1.18).toFixed(2)}</td>
                                                    <td>
                                                        {(parseFloat(spr.regional) / 1.18).toFixed(2)}
                                                    </td>
                                                    <td>
                                                        {(parseFloat(spr.regionalRTO) / 1.18).toFixed(2)}
                                                    </td>
                                                    <td>{(parseFloat(spr.metro) / 1.18).toFixed(2)}</td>
                                                    <td>{(parseFloat(spr.metroRTO) / 1.18).toFixed(2)}</td>
                                                    <td>{(parseFloat(spr.roi) / 1.18).toFixed(2)}</td>
                                                    <td>{(parseFloat(spr.roirto) / 1.18).toFixed(2)}</td>
                                                    <td>
                                                        {(parseFloat(spr.special) / 1.18).toFixed(2)}
                                                    </td>
                                                    <td>
                                                        {(parseFloat(spr.specialRTO) / 1.18).toFixed(2)}
                                                    </td>
                                                    <td>{(parseFloat(spr.cod) / 1.18).toFixed(2)}</td>
                                                    <td>{spr.codPercentage}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {/* Main Footer*/}
                                <div className="main-footer text-center">
                                    <div className="container">
                                        <div className="row row-sm">
                                            <div className="col-md-12">
                                                <span>
                                                    Copyright © 2023{" "}
                                                    <a href="javascript:void(0)">FSHIP</a>. Designed by{" "}
                                                    <a href="http://webkype.com/">Webkype.com</a> All
                                                    rights reserved.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Footer*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomPlan;
