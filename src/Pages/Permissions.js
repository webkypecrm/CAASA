import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { X } from 'react-feather';
import '../assets/plugins/notify/css/notifIt.css'
import toast1, { Toaster } from 'react-hot-toast';

const Permissions = () => {
    const { empid, empid2 } = useParams();
    const [checkedScreens, setCheckedScreens] = useState([]);

    const initialFormData = {
        assignPermission: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


    useEffect(() => {
        const fetchUser = async () => {

            try {
                const url = `${apiUrl}/employee/employee/${empid}`;
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    assignPermission: data.assignPermission
                }));
                // const savedScreens = JSON.parse(localStorage.getItem(`checkedScreens${empid}`));
                const savedScreens = data?.assignPermission ? data.assignPermission.split(",") : []
                if (savedScreens) {
                    setCheckedScreens(savedScreens);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchUser();
    }, []);

    // useEffect(() => {
    //     const savedScreens = JSON.parse(localStorage.getItem(`checkedScreens${empid}`));
    //     if (savedScreens) {
    //         setCheckedScreens(savedScreens); 
    //     }
    // }, [empid]);


    const fetchDataFromApi = (screens) => {
        const url = `${apiUrl}/employee/assignPermission?empId=${empid}&screens=${screens.join(',')}`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${Token}`,
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setCheckedScreens(screens);
                    localStorage.setItem(`checkedScreens${empid}`, JSON.stringify(screens));
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const handleCheckboxChange = (screens, event) => {
        event.preventDefault();
        if (empid) {

            if (event.target.id === empid) {
                const updatedScreens = checkedScreens.includes(screens)
                    ? checkedScreens.filter(screen => screen !== screens)
                    : [...checkedScreens, screens];
                fetchDataFromApi(updatedScreens);
            } else {
                console.log("Employee ID does not match. Checkbox state not changed.");
            }
        } else {
            console.log("Employee ID is not valid. Cannot change checkbox state.");
        }
    };

    return (

        <div className="page">
            <TopHeader />
            <Prince />

            <div className="main-content  pt-0">
                <div className="main-container container-fluid">
                    <div className="inner-body">
                        {/* Page Header */}
                        <div className="page-header">
                            <div>
                                <h2 className="main-content-title tx-24 mg-b-5">Permissions({empid2})</h2>
                            </div>
                        </div>

                        {/* Row */}
                        <div className="row row-sm">
                            <div className="col-lg-12">
                                <div className="card custom-card">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '100%', fontFamily: 'Arial, sans-serif', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                                                <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
                                                    <tr>
                                                        <th style={{ padding: '15px', textAlign: 'center', borderRight: '1px solid #ddd' }}>Menu</th>
                                                        <th style={{ padding: '15px', textAlign: 'center', borderRight: '1px solid #ddd' }}>Edit</th>
                                                        {/* <th style={{ padding: '15px', textAlign: 'center', borderRight: '1px solid #ddd' }}>Delete</th>
                                                        <th style={{ padding: '15px', textAlign: 'center' }}>View</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr style={{ backgroundColor: 'white' }}>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            Setup<br />
                                                        </td>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>

                                                            <label className="ckbox">
                                                                <input
                                                                    type="checkbox"
                                                                    id={empid}
                                                                    checked={checkedScreens.includes('Setup')}
                                                                    onChange={(event) => handleCheckboxChange('Setup', event)}
                                                                />

                                                                <span />
                                                            </label>

                                                        </td>

                                                    </tr>
                                                    {/* <tr style={{ backgroundColor: 'white' }}>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            Vendor

                                                        </td>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            <label className="ckbox">
                                                                <input

                                                                    type="checkbox"
                                                                    id={empid}
                                                                    checked={checkedScreens.includes('Vendor')}
                                                                    onChange={(event) => handleCheckboxChange('Vendor', event)}

                                                                />

                                                                <span />
                                                            </label>



                                                        </td>

                                                    </tr> */}
                                                    <tr style={{ backgroundColor: 'white' }}>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            Website<br />

                                                        </td>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            <label className="ckbox">
                                                                <input

                                                                    type="checkbox"
                                                                    id={empid}
                                                                    checked={checkedScreens.includes('Website')}
                                                                    onChange={(event) => handleCheckboxChange('Website', event)}

                                                                />

                                                                <span />
                                                            </label>

                                                        </td>

                                                    </tr>
                                                    <tr style={{ backgroundColor: 'white' }}>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>

                                                            HRMS
                                                        </td>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            <label className="ckbox">
                                                                <input

                                                                    type="checkbox"
                                                                    id={empid}
                                                                    checked={checkedScreens.includes('HRMS')}
                                                                    onChange={(event) => handleCheckboxChange('HRMS', event)}

                                                                />

                                                                <span />
                                                            </label>

                                                        </td>

                                                    </tr>

                                                    <tr style={{ backgroundColor: 'white' }}>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            Inventory

                                                        </td>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            <label className="ckbox">
                                                                <input

                                                                    type="checkbox"
                                                                    id={empid}
                                                                    checked={checkedScreens.includes('Inventory')}
                                                                    onChange={(event) => handleCheckboxChange('Inventory', event)}

                                                                />
                                                                <span />
                                                            </label>
                                                        </td>

                                                    </tr>
                                                    <tr style={{ backgroundColor: 'white' }}>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            Sales CRM

                                                        </td>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            <label className="ckbox">
                                                                <input

                                                                    type="checkbox"
                                                                    id={empid}
                                                                    checked={checkedScreens.includes('Sales CRM')}
                                                                    onChange={(event) => handleCheckboxChange('Sales CRM', event)}

                                                                />

                                                                <span />
                                                            </label>
                                                        </td>

                                                    </tr>

                                                    <tr style={{ backgroundColor: 'white' }}>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            Applicants
                                                        </td>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            <label className="ckbox">
                                                                <input

                                                                    type="checkbox"
                                                                    id={empid}
                                                                    checked={checkedScreens.includes('Applicants')}
                                                                    onChange={(event) => handleCheckboxChange('Applicants', event)}

                                                                />

                                                                <span />
                                                            </label>
                                                        </td>

                                                    </tr>
                                                    <tr style={{ backgroundColor: 'white' }}>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            WLD Applications

                                                        </td>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            <label className="ckbox">
                                                                <input

                                                                    type="checkbox"
                                                                    id={empid}
                                                                    checked={checkedScreens.includes('WLD Applications')}
                                                                    onChange={(event) => handleCheckboxChange('WLD Applications', event)}
                                                                />

                                                                <span />
                                                            </label>


                                                        </td>

                                                    </tr>
                                                    <tr style={{ backgroundColor: 'white' }}>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            LD Applications

                                                        </td>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            <label className="ckbox">
                                                                <input

                                                                    type="checkbox"
                                                                    id={empid}
                                                                    checked={checkedScreens.includes('LD Applications')}
                                                                    onChange={(event) => handleCheckboxChange('LD Applications', event)}
                                                                />

                                                                <span />
                                                            </label>


                                                        </td>

                                                    </tr>

                                                    <tr style={{ backgroundColor: 'white' }}>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            Eoi

                                                        </td>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            <label className="ckbox">
                                                                <input

                                                                    type="checkbox"
                                                                    id={empid}
                                                                    checked={checkedScreens.includes('Eoi')}
                                                                    onChange={(event) => handleCheckboxChange('Eoi', event)}

                                                                />

                                                                <span />
                                                            </label>


                                                        </td>

                                                    </tr>

                                                    <tr style={{ backgroundColor: 'white' }}>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            Accounts

                                                        </td>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            <label className="ckbox">
                                                                <input

                                                                    type="checkbox"
                                                                    id={empid}
                                                                    checked={checkedScreens.includes('Accounts')}
                                                                    onChange={(event) => handleCheckboxChange('Accounts', event)}

                                                                />

                                                                <span />
                                                            </label>



                                                        </td>

                                                    </tr>

                                                    <tr style={{ backgroundColor: 'white' }}>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            Report

                                                        </td>
                                                        <td style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                                            <label className="ckbox">
                                                                <input

                                                                    type="checkbox"
                                                                    id={empid}
                                                                    checked={checkedScreens.includes('Report')}
                                                                    onChange={(event) => handleCheckboxChange('Report', event)}

                                                                />

                                                                <span />
                                                            </label>



                                                        </td>

                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Row */}
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
                                Copyright © 2024 <a href="javascript:void(0)">Caasaa</a>. Designed
                                by <a href="http://webkype.com/">Webkype.com</a> All rights
                                reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Footer*/}
        </div>


    )
}

export default Permissions







