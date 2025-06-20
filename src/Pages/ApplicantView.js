import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

const ApplicantView = () => {

    const [project, setProject] = useState([]);
    const [scame, setScame] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isModalOpen5, setIsModalOpen5] = useState(false);


    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2);
    };




    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal5 = () => {
        setIsModalOpen5(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal5 = () => {
        setIsModalOpen5(false);
        document.body.classList.remove('modal-open');
    };


    //project api 
    useEffect(() => {
        fetch(`${apiUrl}/project/getAllProjectDropdown`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setProject(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);

    // SCAME
    useEffect(() => {
        const Token = localStorage.getItem('Token');

        fetch(`${apiUrl}/scheme/schemeDropdown`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setScame(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    // scame type
    useEffect(() => {
        const Token = localStorage.getItem('Token');

        fetch(`${apiUrl}/master/getAllMasterData/18`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setDisplayStatus(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

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
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        View Inventory excal
                                    </h2>

                                </div>
                                <div className="d-flex">
                                    {/* <div className="justify-content-center">

                                        <button
                                           
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text  me-2"
                                        >
                                            Inport Inventory
                                        </button>

                                       

                                        <a
                                            href="add-employee.html"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >

                                            Export Inventory
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                            {/* End Page Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <input
                                                            type="search"
                                                            className="form-control form-control"
                                                            placeholder="Search..."
                                                            aria-controls="example1"
                                                        />
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <select className="form-control select2">
                                                            <option>Project</option>
                                                            <option>Blue Sapphire Mall</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <select className="form-control select2">
                                                            <option>Scheme</option>
                                                            <option>GBSSHOP-SCHEME2024</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <select className="form-control select2">
                                                            <option>Type</option>
                                                            <option>Shop</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-sm-2" style={{ marginTop: '10px' }}>
                                                        <input
                                                            type="search"
                                                            className="form-control form-control"
                                                            placeholder="Search Unit No.."
                                                            aria-controls="example1"
                                                        />
                                                    </div>
                                                    <div className="col-sm-2" style={{ marginTop: '10px' }}>
                                                        <input
                                                            type="search"
                                                            className="form-control form-control"
                                                            placeholder="Search Size Sqft.."
                                                            aria-controls="example1"
                                                        />
                                                    </div>
                                                    <div className="col-sm-2" style={{ marginTop: '10px' }}>
                                                        <input
                                                            type="search"
                                                            className="form-control form-control"
                                                            placeholder="Search PLC..."
                                                            aria-controls="example1"
                                                        />
                                                    </div>
                                                    <div className="col-sm-4" style={{ marginTop: '10px' }}>

                                                        <select className="form-control select2">
                                                            <option>Allocated To</option>
                                                            <option>Amit Kumar</option>

                                                        </select>
                                                    </div>


                                                    <div className="col-sm-2" style={{ marginTop: '10px' }}>
                                                        <select className="form-control select2">
                                                            <option>Availability</option>
                                                            <option>Available</option>
                                                            <option>Not Available</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table id="example-input" style={{ width: '100%', borderCollapse: 'collapse' }} className="table table-bordered text-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Applicant Name</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Applicant Ticket Id</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Plan Type</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Advisor</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Payment Plan</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Unit</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Area</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Gift</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Basic Amount</th>

                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '50px' }}>EDC IDC</th>

                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '50px' }}>Project Name</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'SATENDER  SINGH'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'PL-65279'} />
                                                            </td>
                                                           
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'Plot'} />
                                                            </td>


                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'aditya patel'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'PLP'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'B-122'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'111.11'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'Smart Phone'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'2835'} />
                                                            </td>


                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'150'} />

                                                            </td>

                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'AM Maple Residency-2 Phase-1'} />
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'SATENDER  SINGH'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'PL-65279'} />
                                                            </td>
                                                           
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'Plot'} />
                                                            </td>


                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'aditya patel'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'PLP'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'B-122'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'111.11'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'Smart Phone'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'2835'} />
                                                            </td>


                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'150'} />

                                                            </td>

                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'AM Maple Residency-2 Phase-1'} />
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'SATENDER  SINGH'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'PL-65279'} />
                                                            </td>
                                                           
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'Plot'} />
                                                            </td>


                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'aditya patel'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'PLP'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'B-122'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'111.11'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'Smart Phone'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'2835'} />
                                                            </td>


                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'150'} />

                                                            </td>

                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'AM Maple Residency-2 Phase-1'} />
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
                                    Copyright © 2023 <a href="javascript:void(0)">PWIP</a>. Designed
                                    by <a href="http://webkype.com/">Webkype.com</a> All rights
                                    reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Footer*/}
            </div>





            <a href="#top" id="back-to-top">
                <i className="fe fe-arrow-up" />
            </a>

        </>

    )
}

export default ApplicantView