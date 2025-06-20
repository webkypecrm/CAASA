import React, { useState, useEffect } from "react";
// import MainPage from "../../Components/MainPage";
import Prince from "../../Components/Prince";
// import DropdownMenu from "../../Components/DropdownMenu";
import { useParams } from "react-router-dom";
import TopHeader from "../../Components/TopHeader";
import { toast } from "react-toastify";

function EditPlan() {
    const apiUrl = process.env.REACT_APP_URL;
    console.log(apiUrl);

    const Token = localStorage.getItem("Token");
    console.log("Token " + Token);

    const { id } = useParams();
    const [serviceProviderRates, setServiceProviderRates] = useState([]);
    const [edit, setEdit] = useState(false);
    const [newPlanRates, setNewPlanRates] = useState([]);
    const [employee, setEmployee] = useState({});
    const [planName, setPlanName] = useState("");
    const [perChange, setPerChange] = useState(0);
    const [perChangeIndex, setPerChangeIndex] = useState([]);
    const [customName, setCustomName] = useState("");
    const [changeType, setChangeType] = useState("");

    useEffect(() => {
        fetch(`${apiUrl}/plan/getAllPlansData/${id}`, {
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setServiceProviderRates(data.data);
                setNewPlanRates(data.data);
                setPlanName(data.plans.planName);
            })
            .catch((error) => {
                console.error("Error fetching Partners:", error);
            });

        getEmp();
    }, [edit]);

    async function getEmp() {
        const url = `${apiUrl}/employee/employee`;

        let response = await fetch(url, {
            method: "POST",
            headers: {
                Auth: `Bearer ${Token}`,
            },
        });
        response = await response.json();

        if (response.status === "success") {
            setEmployee(response.data);
        }
    }

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        let changedPlan = [...newPlanRates];
        changedPlan[index][name] = value;
        setNewPlanRates(changedPlan);
    };

    const handleIncrement = (field) => {
        let changedPlan = [...newPlanRates];
        if (perChangeIndex.length > 0) {
            for (let i = 0; i < perChangeIndex.length; i++) {
                changedPlan[perChangeIndex[i]][field] = (
                    parseFloat(changedPlan[perChangeIndex[i]][field]) + 1
                ).toFixed(2);
            }
            setNewPlanRates(changedPlan);
            return;
        }
        for (let i = 0; i < changedPlan.length; i++) {
            changedPlan[i][field] = (parseFloat(changedPlan[i][field]) + 1).toFixed(
                2
            );
        }
        setNewPlanRates(changedPlan);
    };

    const handleDecrement = (field) => {
        let changedPlan = [...newPlanRates];
        if (perChangeIndex.length > 0) {
            for (let i = 0; i < perChangeIndex.length; i++) {
                changedPlan[perChangeIndex[i]][field] = (
                    parseFloat(changedPlan[perChangeIndex[i]][field]) - 1
                ).toFixed(2);
            }
            setNewPlanRates(changedPlan);
            return;
        }
        for (let i = 0; i < changedPlan.length; i++) {
            changedPlan[i][field] = (parseFloat(changedPlan[i][field]) - 1).toFixed(
                2
            );
        }
        setNewPlanRates(changedPlan);
    };

    const updatePlan = async (e) => {
        e.preventDefault();
        if (e.target.textContent === "Duplicate") {
            setEdit(true);
        }
        if (edit) {
            try {
                const response = await fetch(`${apiUrl}/plan/addCustomPlan/${id}`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        planName: `${planName}_${customName}`,
                        data: [...newPlanRates],
                    }),
                });

                const responseTwo = await response.json();

                if (responseTwo.status === "false") {
                    return toast.error(responseTwo.message);
                }

                console.log("Plan Updated successfully!");
                toast.success("Plan Updated Successfully");
                setEdit(!edit);
            } catch (error) {
                console.error("Error occurred: 'HEYA1'", error);
                toast.error(error.message);
            }
        }
    };

    return (
        <div className="page">
            <TopHeader />
            <Prince />

            <div class="row row-sm w-90 m-3">
                <div class="col-lg-13 mt-3">
                    <h3> Plan :- {edit ? `${planName}_${customName}` : `${planName}`}</h3>
                    <h1 className="d-flex flex-row-reverse">
                        <button
                            className="btn btn-primary"
                            onClick={(e) => {
                                updatePlan(e);
                            }}
                        >
                            {edit ? "Update" : "Duplicate"}
                        </button>
                    </h1>
                    {edit && (
                      <>
                        <input
                            placeholder="Enter Plan Name"
                            onChange={(e) => {
                              setCustomName(e.target.value);
                            }}
                            className="form-control w-auto mb-1"
                            />
                            <small>This new plan will be used in your sales & quotation in leads</small>
                      </>
                    )}
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="text-wrap">
                                <div class="table-responsive">
                                    <table
                                        id="example-input"
                                        class="table table-bordered text-nowrap table-striped text-center"
                                    >
                                        <thead>
                                            <tr>
                                                <th
                                                    colspan={!edit ? "2" : "3"}
                                                    style={{ textAlign: "center" }}
                                                >
                                                    {/* Plan Details */}
                                                    {edit && (
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <input
                                                                    type="number"
                                                                    placeholder="Change Rate by +1 or -1"
                                                                    className="form-control"
                                                                    onChange={(e) => {
                                                                        setPerChange(e.target.value / 100);
                                                                    }}
                                                                />
                                                            </div>

                                                            <div className="col-auto">
                                                                <div class="form-check form-check-inline">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        value="byPercent"
                                                                        name="changeType"
                                                                        onChange={(e) => {
                                                                            console.log(
                                                                                e.target.name,
                                                                                e.target.value,
                                                                                "1"
                                                                            );
                                                                            setChangeType(e.target.value);
                                                                        }}
                                                                    />
                                                                    <label
                                                                        class="form-check-label"
                                                                        for="inlineRadio1"
                                                                    >
                                                                        Update By %
                                                                    </label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        value="byValue"
                                                                        name="changeType"
                                                                        onChange={(e) => {
                                                                            console.log(
                                                                                e.target.name,
                                                                                e.target.value,
                                                                                "2"
                                                                            );
                                                                            setChangeType(e.target.value);
                                                                        }}
                                                                    />
                                                                    <label
                                                                        class="form-check-label"
                                                                        for="inlineRadio2"
                                                                    >
                                                                        Update By Value
                                                                    </label>
                                                                </div>
                                                                {/* <div>
                                  <label>By %</label>
                                  <input
                                    className="col-sm"
                                    type="radio"
                                    value="byPercent"
                                    name="changeType"
                                    onChange={(e) => {
                                      console.log(
                                        e.target.name,
                                        e.target.value,
                                        "1"
                                      );
                                      setChangeType(e.target.value);
                                    }}
                                  />
                                </div>
                                <div>
                                <label >By Value</label>
                                <input
                                  className="col-sm"
                                  type="radio"
                                  value="byValue"
                                  name="changeType"
                                  onChange={(e) => {
                                    console.log(
                                      e.target.name,
                                      e.target.value,
                                      "2"
                                    );
                                    setChangeType(e.target.value);
                                  }}
                                />
                                </div> */}
                                                            </div>

                                                            <div className="col mt-1">
                                                                <button
                                                                    className="btn btn-primary btn-sm float-end"
                                                                    onClick={(e) => {
                                                                        e.preventDefault();

                                                                        let newArray = [...newPlanRates];
                                                                        if (changeType === "byValue") {
                                                                            for (
                                                                                let i = 0;
                                                                                i < perChangeIndex.length;
                                                                                i++
                                                                            ) {
                                                                                newArray[perChangeIndex[i]]["local"] =
                                                                                    parseFloat(parseFloat(
                                                                                        newArray[perChangeIndex[i]]["local"]
                                                                                    ) +
                                                                                        perChange * 100).toFixed(2);

                                                                                newArray[perChangeIndex[i]][
                                                                                    "localRTO"
                                                                                ] =
                                                                                    parseFloat(parseFloat(
                                                                                        newArray[perChangeIndex[i]][
                                                                                        "localRTO"
                                                                                        ]
                                                                                    ) +
                                                                                        perChange * 100).toFixed(2);

                                                                                newArray[perChangeIndex[i]][
                                                                                    "regional"
                                                                                ] =
                                                                                    parseFloat(parseFloat(
                                                                                        newArray[perChangeIndex[i]][
                                                                                        "regional"
                                                                                        ]
                                                                                    ) +
                                                                                        perChange * 100).toFixed(2);

                                                                                newArray[perChangeIndex[i]][
                                                                                    "regionalRTO"
                                                                                ] =
                                                                                    parseFloat(parseFloat(
                                                                                        newArray[perChangeIndex[i]][
                                                                                        "regionalRTO"
                                                                                        ]
                                                                                    ) +
                                                                                        perChange * 100).toFixed(2);

                                                                                newArray[perChangeIndex[i]]["metro"] =
                                                                                    parseFloat(parseFloat(
                                                                                        newArray[perChangeIndex[i]]["metro"]
                                                                                    ) +
                                                                                        perChange * 100).toFixed(2);

                                                                                newArray[perChangeIndex[i]][
                                                                                    "metroRTO"
                                                                                ] =
                                                                                    parseFloat(parseFloat(
                                                                                        newArray[perChangeIndex[i]][
                                                                                        "metroRTO"
                                                                                        ]
                                                                                    ) +
                                                                                        perChange * 100).toFixed(2);

                                                                                newArray[perChangeIndex[i]]["roi"] =
                                                                                    parseFloat(parseFloat(
                                                                                        newArray[perChangeIndex[i]]["roi"]
                                                                                    ) +
                                                                                        perChange * 100).toFixed(2);

                                                                                newArray[perChangeIndex[i]]["roirto"] =
                                                                                    parseFloat(parseFloat(
                                                                                        newArray[perChangeIndex[i]][
                                                                                        "roirto"
                                                                                        ]
                                                                                    ) +
                                                                                        perChange * 100).toFixed(2);

                                                                                newArray[perChangeIndex[i]]["special"] =
                                                                                    parseFloat(parseFloat(
                                                                                        newArray[perChangeIndex[i]][
                                                                                        "special"
                                                                                        ]
                                                                                    ) +
                                                                                        perChange * 100).toFixed(2);

                                                                                newArray[perChangeIndex[i]][
                                                                                    "specialRTO"
                                                                                ] =
                                                                                    parseFloat(parseFloat(
                                                                                        newArray[perChangeIndex[i]][
                                                                                        "specialRTO"
                                                                                        ]
                                                                                    ) +
                                                                                        perChange * 100).toFixed(2);

                                                                                newArray[perChangeIndex[i]]["cod"] =
                                                                                    parseFloat(parseFloat(
                                                                                        newArray[perChangeIndex[i]]["cod"]
                                                                                    ) +
                                                                                        perChange * 100).toFixed(2);

                                                                                newArray[perChangeIndex[i]][
                                                                                    "codPercentage"
                                                                                ] =
                                                                                    parseFloat(parseFloat(
                                                                                        newArray[perChangeIndex[i]][
                                                                                        "codPercentage"
                                                                                        ]
                                                                                    ) +
                                                                                        perChange * 100).toFixed(2);
                                                                            }
                                                                        } else {
                                                                            for (
                                                                                let i = 0;
                                                                                i < perChangeIndex.length;
                                                                                i++
                                                                            ) {
                                                                                newArray[perChangeIndex[i]]["local"] =
                                                                                    parseFloat(
                                                                                        newArray[perChangeIndex[i]][
                                                                                        "local"
                                                                                        ] *
                                                                                        (1 + perChange)
                                                                                    ).toFixed(1);

                                                                                newArray[perChangeIndex[i]][
                                                                                    "localRTO"
                                                                                ] = parseFloat(
                                                                                    newArray[perChangeIndex[i]][
                                                                                    "localRTO"
                                                                                    ] *
                                                                                    (1 + perChange)
                                                                                ).toFixed(1);

                                                                                newArray[perChangeIndex[i]][
                                                                                    "regional"
                                                                                ] = parseFloat(
                                                                                    newArray[perChangeIndex[i]][
                                                                                    "regional"
                                                                                    ] *
                                                                                    (1 + perChange)
                                                                                ).toFixed(1);

                                                                                newArray[perChangeIndex[i]][
                                                                                    "regionalRTO"
                                                                                ] = parseFloat(
                                                                                    newArray[perChangeIndex[i]][
                                                                                    "regionalRTO"
                                                                                    ] *
                                                                                    (1 + perChange)
                                                                                ).toFixed(1);

                                                                                newArray[perChangeIndex[i]]["metro"] =
                                                                                    parseFloat(
                                                                                        newArray[perChangeIndex[i]][
                                                                                        "metro"
                                                                                        ] *
                                                                                        (1 + perChange)
                                                                                    ).toFixed(1);

                                                                                newArray[perChangeIndex[i]][
                                                                                    "metroRTO"
                                                                                ] = parseFloat(
                                                                                    newArray[perChangeIndex[i]][
                                                                                    "metroRTO"
                                                                                    ] *
                                                                                    (1 + perChange)
                                                                                ).toFixed(1);

                                                                                newArray[perChangeIndex[i]]["roi"] =
                                                                                    parseFloat(
                                                                                        newArray[perChangeIndex[i]]["roi"] *
                                                                                        (1 + perChange)
                                                                                    ).toFixed(1);

                                                                                newArray[perChangeIndex[i]]["roirto"] =
                                                                                    parseFloat(
                                                                                        newArray[perChangeIndex[i]][
                                                                                        "roirto"
                                                                                        ] *
                                                                                        (1 + perChange)
                                                                                    ).toFixed(1);

                                                                                newArray[perChangeIndex[i]]["special"] =
                                                                                    parseFloat(
                                                                                        newArray[perChangeIndex[i]][
                                                                                        "special"
                                                                                        ] *
                                                                                        (1 + perChange)
                                                                                    ).toFixed(1);

                                                                                newArray[perChangeIndex[i]][
                                                                                    "specialRTO"
                                                                                ] = parseFloat(
                                                                                    newArray[perChangeIndex[i]][
                                                                                    "specialRTO"
                                                                                    ] *
                                                                                    (1 + perChange)
                                                                                ).toFixed(1);

                                                                                newArray[perChangeIndex[i]]["cod"] =
                                                                                    parseFloat(
                                                                                        newArray[perChangeIndex[i]]["cod"] *
                                                                                        (1 + perChange)
                                                                                    ).toFixed(1);

                                                                                newArray[perChangeIndex[i]][
                                                                                    "codPercentage"
                                                                                ] = parseFloat(
                                                                                    newArray[perChangeIndex[i]][
                                                                                    "codPercentage"
                                                                                    ] *
                                                                                    (1 + perChange)
                                                                                ).toFixed(1);
                                                                            }
                                                                        }
                                                                        console.log(newArray);
                                                                        setNewPlanRates(newArray);
                                                                    }}
                                                                >
                                                                    Change
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </th>
                                                <th colspan={!edit ? '12' : '12'} style={{ textAlign: "center" }}>
                                                    Including GST
                                                </th>
                                                {!edit && <th colspan="12" style={{ textAlign: "center" }}>
                                                    Excluding GST
                                                </th>}
                                            </tr>
                                            {edit && <tr>
                                                <th colSpan={3}></th>
                                                <th colSpan={2}> Local</th>
                                                <th colSpan={2}>Regional</th>
                                                <th colSpan={2}>Metro</th>
                                                <th colSpan={2}>ROI</th>
                                                <th colSpan={2}>Special</th>
                                            </tr>}
                                            {!edit && <tr>
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
                                            </tr>}
                                            <tr>
                                                {edit ? (
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    let newArr = [];
                                                                    for (
                                                                        let i = 0;
                                                                        i < newPlanRates.length;
                                                                        i++
                                                                    ) {
                                                                        newArr.push(i);
                                                                    }
                                                                    setPerChangeIndex(newArr);
                                                                    const allChecks =
                                                                        document.getElementsByClassName("checkBox");
                                                                    for (let i = 0; i < allChecks.length; i++) {
                                                                        allChecks[i].checked = true;
                                                                    }
                                                                } else {
                                                                    setPerChangeIndex([]);
                                                                    const allChecks =
                                                                        document.getElementsByClassName("checkBox");
                                                                    for (let i = 0; i < allChecks.length; i++) {
                                                                        allChecks[i].checked = false;
                                                                    }
                                                                }
                                                            }}
                                                        />
                                                    </td>
                                                ) : (
                                                    ""
                                                )}
                                                <th style={{ background: "#e0d8d8 !important" }}>
                                                    Courier
                                                </th>
                                                <th style={{ background: "#e0d8d8 !important" }}>
                                                    Weight( in KG)
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    Forward
                                                    {edit && <br />}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleDecrement('local')
                                                    }}
                                                        style={{ marginRight: '10px' }}>
                                                        --
                                                    </button>}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleIncrement('local')
                                                    }}>
                                                        +
                                                    </button>}
                                                </th>

                                                {<th style={{ background: "#efefff !important" }}>
                                                    RTO
                                                    {edit && <br />}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleDecrement('localRTO')
                                                    }}
                                                        style={{ marginRight: '10px' }}>
                                                        --
                                                    </button>}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleIncrement('localRTO')
                                                    }}>
                                                        +
                                                    </button>}
                                                </th>}
                                                <th style={{ background: "#efefff !important" }}>
                                                    Forward
                                                    {edit && <br />}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleDecrement('regional')
                                                    }}
                                                        style={{ marginRight: '10px' }}>
                                                        --
                                                    </button>}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleIncrement('regional')
                                                    }}>
                                                        +
                                                    </button>}
                                                </th>
                                                {<th style={{ background: "#efefff !important" }}>
                                                    RTO
                                                    {edit && <br />}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleDecrement('regionalRTO')
                                                    }}
                                                        style={{ marginRight: '10px' }}>
                                                        --
                                                    </button>}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleIncrement('regionalRTO')
                                                    }}>
                                                        +
                                                    </button>}
                                                </th>}
                                                <th style={{ background: "#efefff !important" }}>
                                                    Forward
                                                    {edit && <br />}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleDecrement('metro')
                                                    }}
                                                        style={{ marginRight: '10px' }}>
                                                        --
                                                    </button>}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleIncrement('metro')
                                                    }}>
                                                        +
                                                    </button>}
                                                </th>
                                                {<th style={{ background: "#efefff !important" }}>
                                                    RTO
                                                    {edit && <br />}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleDecrement('metroRTO')
                                                    }}
                                                        style={{ marginRight: '10px' }}>
                                                        --
                                                    </button>}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleIncrement('metroRTO')
                                                    }}>
                                                        +
                                                    </button>}
                                                </th>}
                                                <th style={{ background: "#efefff !important" }}>
                                                    Forward
                                                    {edit && <br />}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleDecrement('roi')
                                                    }}
                                                        style={{ marginRight: '10px' }}>
                                                        --
                                                    </button>}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleIncrement('roi')
                                                    }}>
                                                        +
                                                    </button>}
                                                </th>
                                                {<th style={{ background: "#efefff !important" }}>
                                                    RTO
                                                    {edit && <br />}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleDecrement('roirto')
                                                    }}
                                                        style={{ marginRight: '10px' }}>
                                                        --
                                                    </button>}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleIncrement('roirto')
                                                    }}>
                                                        +
                                                    </button>}
                                                </th>}
                                                <th style={{ background: "#efefff !important" }}>
                                                    Forward
                                                    {edit && <br />}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleDecrement('special')
                                                    }}
                                                        style={{ marginRight: '10px' }}>
                                                        --
                                                    </button>}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleIncrement('special')
                                                    }}>
                                                        +
                                                    </button>}
                                                </th>
                                                {<th style={{ background: "#efefff !important" }}>
                                                    RTO
                                                    {edit && <br />}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleDecrement('specialRTO')
                                                    }}
                                                        style={{ marginRight: '10px' }}>
                                                        --
                                                    </button>}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleIncrement('specialRTO')
                                                    }}>
                                                        +
                                                    </button>}
                                                </th>}
                                                <th style={{ background: "#efefff !important" }}>
                                                    COD{" "}
                                                    {edit && <br />}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleDecrement('cod')
                                                    }}
                                                        style={{ marginRight: '10px' }}>
                                                        --
                                                    </button>}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleIncrement('cod')
                                                    }}>
                                                        +
                                                    </button>}
                                                </th>
                                                <th style={{ background: "#efefff !important" }}>
                                                    COD%
                                                    {edit && <br />}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleDecrement('codPercentage')
                                                    }}
                                                        style={{ marginRight: '10px' }}>
                                                        --
                                                    </button>}
                                                    {edit && <button className="btn btn-primary btn-sm" onClick={() => {
                                                        handleIncrement('codPercentage')
                                                    }}>
                                                        +
                                                    </button>}
                                                </th>
                                                {!edit && <th style={{ background: "#a7c2e2 !important" }}>
                                                    Forward{" "}
                                                </th>}
                                                {!edit && <th style={{ background: "#a7c2e2 !important" }}>
                                                    RTO
                                                </th>}
                                                {!edit && <th style={{ background: "#a7c2e2 !important" }}>
                                                    Forward{" "}
                                                </th>}
                                                {!edit && <th style={{ background: "#a7c2e2 !important" }}>
                                                    RTO
                                                </th>}
                                                {!edit && <th style={{ background: "#a7c2e2 !important" }}>
                                                    Forward{" "}
                                                </th>}
                                                {!edit && <th style={{ background: "#a7c2e2 !important" }}>
                                                    RTO
                                                </th>}
                                                {!edit && <th style={{ background: "#a7c2e2 !important" }}>
                                                    Forward{" "}
                                                </th>}
                                                {!edit && <th style={{ background: "#a7c2e2 !important" }}>
                                                    RTO
                                                </th>}
                                                {!edit && <th style={{ background: "#a7c2e2 !important" }}>
                                                    Forward{" "}
                                                </th>}
                                                {!edit && <th style={{ background: "#a7c2e2 !important" }}>
                                                    RTO
                                                </th>}
                                                {!edit && <th style={{ background: "#a7c2e2 !important" }}>
                                                    COD{" "}
                                                </th>}
                                                {!edit && <th style={{ background: "#a7c2e2 !important" }}>
                                                    COD%
                                                </th>}
                                            </tr>
                                        </thead>
                                        {edit ? (
                                            <tbody>
                                                {newPlanRates?.map((spr, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                onChange={(e) => {
                                                                    if (e.target.checked) {
                                                                        let newArr = [...perChangeIndex];
                                                                        newArr.push(index);
                                                                        setPerChangeIndex(newArr);
                                                                    } else {
                                                                        let newArr = [...perChangeIndex];
                                                                        newArr = newArr.filter((data) => {
                                                                            return data !== index;
                                                                        });
                                                                        setPerChangeIndex(newArr);
                                                                    }
                                                                }}
                                                                className="checkBox"
                                                            />
                                                        </td>
                                                        <td>{spr.counrier}</td>
                                                        <td>{spr.weightSlab}</td>
                                                        <td>
                                                            <input
                                                                className="form-control input-sm p-1"
                                                                type="text"
                                                                value={parseFloat(spr.local)}
                                                                onChange={(e) => {
                                                                    handleChange(e, index);
                                                                }}
                                                                name="local"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control input-sm p-1"
                                                                type="text"
                                                                value={parseFloat(spr.localRTO)}
                                                                onChange={(e) => {
                                                                    handleChange(e, index);
                                                                }}
                                                                name="localRTO"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control input-sm p-1"
                                                                type="text"
                                                                value={parseFloat(spr.regional)}
                                                                onChange={(e) => {
                                                                    handleChange(e, index);
                                                                }}
                                                                name="regional"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control input-sm p-1"
                                                                type="text"
                                                                value={parseFloat(spr.regionalRTO)}
                                                                onChange={(e) => {
                                                                    handleChange(e, index);
                                                                }}
                                                                name="regionalRTO"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control input-sm p-1"
                                                                type="text"
                                                                value={parseFloat(spr.metro)}
                                                                onChange={(e) => {
                                                                    handleChange(e, index);
                                                                }}
                                                                name="metro"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control input-sm p-1"
                                                                type="text"
                                                                value={parseFloat(spr.metroRTO)}
                                                                onChange={(e) => {
                                                                    handleChange(e, index);
                                                                }}
                                                                name="metroRTO"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control input-sm p-1"
                                                                type="text"
                                                                value={parseFloat(spr.roi)}
                                                                onChange={(e) => {
                                                                    handleChange(e, index);
                                                                }}
                                                                name="roi"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control input-sm p-1"
                                                                type="text"
                                                                value={parseFloat(spr.roirto)}
                                                                onChange={(e) => {
                                                                    handleChange(e, index);
                                                                }}
                                                                name="roirto"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control input-sm p-1"
                                                                type="text"
                                                                value={parseFloat(spr.special)}
                                                                onChange={(e) => {
                                                                    handleChange(e, index);
                                                                }}
                                                                name="special"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control input-sm p-1"
                                                                type="text"
                                                                value={parseFloat(spr.specialRTO)}
                                                                onChange={(e) => {
                                                                    handleChange(e, index);
                                                                }}
                                                                name="specialRTO"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control input-sm p-1"
                                                                type="text"
                                                                value={parseFloat(spr.cod)}
                                                                onChange={(e) => {
                                                                    handleChange(e, index);
                                                                }}
                                                                name="cod"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control input-sm p-1"
                                                                type="text"
                                                                value={spr.codPercentage}
                                                                onChange={(e) => {
                                                                    handleChange(e, index);
                                                                }}
                                                                name="codPercentage"
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        ) : (
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
                                        )}
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

export default EditPlan;
