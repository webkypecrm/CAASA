import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

const Inventory = () => {

    const [project, setProject] = useState([]);
    const [scame, setScame] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [isModalOpen6, setIsModalOpen6] = useState(false);


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

    const handleOpenModal6 = () => {
        setIsModalOpen6(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal6 = () => {
        setIsModalOpen6(false);
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
                                        View Inventory
                                    </h2>

                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">

                                        <button
                                            onClick={handleOpenModal4}
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text  me-2"
                                        >
                                            Import Inventory
                                        </button>

                                        <div
                                            className={`modal ${isModalOpen4 ? 'show' : ''}`}
                                            style={{ display: isModalOpen4 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                                            tabIndex="-1"
                                            role="dialog"
                                        >
                                            <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '500px' }}>
                                                <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                                    <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                                        <h5 className="modal-title">Inport Inventory</h5>
                                                        <button
                                                            type="button"
                                                            className="close"
                                                            data-dismiss="modal"
                                                            aria-label="Close"
                                                            onClick={handleCloseModal4}
                                                            style={{ outline: 'none', cursor: 'pointer' }}
                                                        >
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>

                                                    <div className="modal-body" style={{ padding: '20px' }}>
                                                        <form>
                                                            <div className="row row-sm">
                                                                <div className="col-sm-12 form-group">
                                                                    <label className="form-label">File Picker</label>
                                                                    <input
                                                                        type="file"
                                                                        accept=".xls, .xlsx"

                                                                        className="form-control"
                                                                        style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '8px' }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>

                                                    <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                                        <button className="btn ripple btn-primary" type="button" style={{ borderRadius: '5px', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold' }}>
                                                            Upload
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleOpenModal6}
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >

                                            Export Inventory
                                        </button>

                                        <div
                                            className={`modal ${isModalOpen6 ? 'show' : ''}`}
                                            style={{
                                                display: isModalOpen6 ? 'block' : 'none',
                                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                position: 'fixed',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                zIndex: 9999,
                                                overflow: 'auto'
                                            }}
                                            tabIndex="-1"
                                            role="dialog"
                                        >
                                            <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '500px', margin: 'auto' }}>
                                                <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', backgroundColor: '#fff' }}>
                                                    <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0', padding: '15px', textAlign: 'center' }}>
                                                        <h5 className="modal-title" style={{ margin: 0 }}>Download</h5>
                                                        <button
                                                            type="button"
                                                            className="close"
                                                            data-dismiss="modal"
                                                            aria-label="Close"
                                                            onClick={handleCloseModal6}
                                                            style={{ outline: 'none', cursor: 'pointer', position: 'absolute', top: '10px', right: '15px', fontSize: '24px' }}
                                                        >
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>

                                                    <div className="modal-body" style={{ padding: '20px', textAlign: 'center' }}>
                                                        <form>
                                                            <div className="row row-sm">
                                                                <div className="col-sm-12 form-group">
                                                                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Please Download</span>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>

                                                    <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa', padding: '15px', textAlign: 'center' }}>
                                                        <button className="btn ripple btn-primary" type="button" style={{ borderRadius: '5px', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold' }} onClick={handleCloseModal6}>
                                                            Close
                                                        </button>
                                                        <button className="btn ripple btn-primary" type="button" style={{ borderRadius: '5px', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold' }} >
                                                            Ok
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

                                                    <div className="col-sm-3">
                                                        <select className="form-control select2">
                                                            <option>Scheme</option>
                                                            <option>GBSSHOP-SCHEME2024</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-sm-3">
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
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Project</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Scheme</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Type</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Unit No</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Size Sqft</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>PLC</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Super Ar</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Carpet</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '50px' }}>Status</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '50px' }}>Allocated To</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '50px' }}>Registry</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '50px' }}>Last Update</th>
                                                            <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Remark</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                                <select className="form-control" style={{ width: '100%' }}>
                                                                    <option>Select</option>
                                                                    <option>Blue Sapphire Mall</option>

                                                                </select>
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                                <select className="form-control" style={{ width: '100%' }}>
                                                                    <option>Select</option>
                                                                    <option>GBSSHOP-SCHEME2024</option>
                                                                </select>
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                                <select className="form-control select2" style={{ width: '100%' }}>
                                                                    <option value=''>Select Type</option>
                                                                    <option>Shop</option>
                                                                </select>
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={8765} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={61} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={61} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={61} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={61} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                                                                <div className="myTest custom-control custom-checkbox" style={{ marginRight: '10px' }}>
                                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" checked={isChecked2} onChange={handleCheckboxChange2} />
                                                                    <label className="custom-control-label" htmlFor="customCheck1"></label>
                                                                    {isChecked2 && <span>Available</span>}
                                                                </div>

                                                                <style jsx>{`
        .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
            background-color: green !important;
        }

        .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
            background-color: green !important;
        }

        .custom-checkbox .custom-control-input:not(:checked) ~ .custom-control-label::before {
            background-color: red !important;
        }

        .custom-checkbox .custom-control-input:not(:checked) ~ .custom-control-label::after {
            background-color: red !important;
        }

        .custom-checkbox .custom-control-input:active ~ .custom-control-label::before {
            background-color: #C8FFC8;
        }

        .custom-checkbox .custom-control-input:active ~ .custom-control-label::after {
            background-color: #C8FFC8;
        }
    `}</style>
                                                            </td>

                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input
                                                                    className="form-control input-sm"
                                                                    type="text"
                                                                    name="row-1-age"
                                                                    defaultValue={'Amit Kumar'}
                                                                    onClick={handleOpenModal5}
                                                                />


                                                                <div
                                                                    className={`modal ${isModalOpen5 ? 'show' : ''}`}
                                                                    style={{
                                                                        display: isModalOpen5 ? 'block' : 'none',
                                                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                                        position: 'fixed',
                                                                        top: 0,
                                                                        left: 0,
                                                                        right: 0,
                                                                        bottom: 0,
                                                                        zIndex: 9999,
                                                                        overflow: 'auto'
                                                                    }}
                                                                    tabIndex="-1"
                                                                    role="dialog"
                                                                >
                                                                    <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '400px', margin: 'auto' }}>
                                                                        <div className="modal-content" style={{ borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', backgroundColor: '#f8f9fa' }}>
                                                                            {/* Modal Header */}
                                                                            <div className="modal-header" style={{ borderBottom: '1px solid #dee2e6', borderRadius: '12px 12px 0 0', padding: '15px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                                                                <h5 className="modal-title" style={{ margin: 0, fontSize: '18px', color: '#343a40' }}>Unit Allotment</h5>
                                                                                <button
                                                                                    type="button"
                                                                                    className="close"
                                                                                    data-dismiss="modal"
                                                                                    aria-label="Close"
                                                                                    onClick={handleCloseModal5}
                                                                                    style={{ outline: 'none', cursor: 'pointer', position: 'absolute', top: '10px', right: '15px', fontSize: '24px', color: '#495057', background: 'none', border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                                                                >
                                                                                    <span aria-hidden="true">&times;</span>
                                                                                </button>
                                                                            </div>

                                                                            {/* Modal Body */}
                                                                            <div className="modal-body" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                                                                <div style={{ flex: 1 }}>
                                                                                    <h4 style={{ marginBottom: '15px', fontSize: '16px', color: '#343a40', fontWeight: 'bold' }}>IDs:</h4>
                                                                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                                                                        {/* List of IDs */}
                                                                                        <li style={{ marginBottom: '10px', fontSize: '14px', color: '#495057' }}>ID1</li>
                                                                                        <li style={{ marginBottom: '10px', fontSize: '14px', color: '#495057' }}>ID2</li>
                                                                                        <li style={{ marginBottom: '10px', fontSize: '14px', color: '#495057' }}>ID3</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div style={{ flex: 1 }}>
                                                                                    <h4 style={{ marginBottom: '15px', fontSize: '16px', color: '#343a40', fontWeight: 'bold' }}>Allocated:</h4>
                                                                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                                                                        {/* List of Unit Numbers */}
                                                                                        <li style={{ marginBottom: '10px', fontSize: '14px', color: '#495057' }}>Amit</li>
                                                                                        <li style={{ marginBottom: '10px', fontSize: '14px', color: '#495057' }}>Ram</li>
                                                                                        <li style={{ marginBottom: '10px', fontSize: '14px', color: '#495057' }}>Akash</li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div style={{ flex: 1 }}>
                                                                                    <h4 style={{ marginBottom: '15px', fontSize: '16px', color: '#343a40', fontWeight: 'bold' }}>Unit Numbers:</h4>
                                                                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                                                                        {/* List of Unit Numbers */}
                                                                                        <li style={{ marginBottom: '10px', fontSize: '14px', color: '#495057' }}>Unit 101</li>
                                                                                        <li style={{ marginBottom: '10px', fontSize: '14px', color: '#495057' }}>Unit 102</li>
                                                                                        <li style={{ marginBottom: '10px', fontSize: '14px', color: '#495057' }}>Unit 103</li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                            {/* Modal Footer */}
                                                                            {/* <button className="btn btn-primary" type="button" style={{ borderRadius: '5px', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold', backgroundColor: '#007bff', border: 'none', cursor: 'pointer', backgroundImage: 'linear-gradient(to bottom, #007bff, #0056b3)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', color: '#fff' }} onClick={handleCloseModal5}>
                                                                                Close
                                                                            </button> */}
                                                                        </div>
                                                                    </div>
                                                                </div>






                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                                    <label className="ckbox" style={{ marginRight: '5px', marginBottom: '0' }}>
                                                                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                                                                        <span />
                                                                    </label>
                                                                    {isChecked && <span>Done</span>}
                                                                </div>
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={'30 Aug 2024'} />
                                                            </td>
                                                            <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '400px' }}>
                                                                <textarea
                                                                    className="form-control"
                                                                    name="row-1-comments"
                                                                    rows={1}
                                                                    defaultValue={""}
                                                                />
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
                                    Copyright © 2024 <a href="javascript:void(0)">Webkype</a>. Designed
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

export default Inventory