import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

const ShowTargetList = () => {
    const { empid } = useParams();
    const [isModalOpen5, setIsModalOpen5] = useState(false);

    const handleOpenModal5 = () => {
        setIsModalOpen5(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal5 = () => {
        setIsModalOpen5(false);
        document.body.classList.remove('modal-open');
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
                                <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
                                    <h2 className="main-content-title tx-24 mg-b-5" style={{ marginBottom: '15px', color: '#333' }}>Amit Gupta</h2>
                                    <ol className="breadcrumb" style={{ marginBottom: '0', padding: '0', listStyle: 'none', display: 'inline' }}>
                                        <li className="breadcrumb-item" style={{ display: 'inline', marginRight: '10px', fontSize: '14px' }}>
                                            <a href="#" style={{ textDecoration: 'none', color: '#666' }}>ID: {empid}</a>
                                        </li>
                                    </ol>
                                </div>

                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <button
                                            onClick={handleOpenModal5}
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Target
                                        </button>

                                        <div
                                            className={`modal fade ${isModalOpen5 ? 'show d-block' : ''}`}
                                            id="modaldemo-callback-form"
                                            tabIndex="-1"
                                            style={{
                                                display: isModalOpen5 ? 'block' : 'none',
                                                position: 'fixed',
                                                zIndex: '1050',
                                                top: '0',
                                                left: '0',
                                                width: '100%',
                                                height: '100%',
                                                overflow: 'auto',
                                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            }}
                                        >
                                            <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '90%' }}>
                                                <div className="modal-content" style={{ borderRadius: '20px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', backgroundColor: '#fff' }}>
                                                    <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '20px 20px 0 0' }}>
                                                        <h5 className="modal-title">Target</h5>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            onClick={handleCloseModal5}
                                                            aria-label="Close"
                                                            style={{ outline: 'none', cursor: 'pointer' }}
                                                        ></button>
                                                    </div>

                                                    <div className="modal-body" style={{ padding: '30px' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                                            <img
                                                                src="https://amrsapi.webkype.co/uploads/man404.jpg"
                                                                alt="Your Name"
                                                                style={{
                                                                    borderRadius: '50%',
                                                                    width: '60px',
                                                                    height: '60px',
                                                                    objectFit: 'cover',
                                                                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                                                                    marginRight: '10px',
                                                                }}
                                                            />
                                                            <p style={{ marginTop: '10px', marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>Amit Gupta</p>

                                                        </div>

                                                        <div className="row">
                                                            <div className="col-1 form-group text-center">
                                                                <p className="form-control" style={{ border: 'none', margin: '0' }}>2024</p>

                                                                <p className="form-control" style={{ border: 'none', margin: '0' }}>APRIL</p>
                                                            </div>

                                                            <div className="col form-group">

                                                                <label style={{ color: '#007bff', fontFamily: 'Roboto' }}>NO OF BOOKINGS</label>
                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">
                                                                <label style={{ color: '#007bff', fontFamily: 'Roboto' }}>POINT/BOOKING</label>
                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">
                                                                <label style={{ color: '#007bff', fontFamily: 'Roboto' }}>GIFT TARGET</label>
                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">
                                                                <label style={{ color: '#007bff', fontFamily: 'Roboto' }}>GIFT ITEM</label>
                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-1 form-group text-center">


                                                                <p className="form-control" style={{ border: 'none', margin: '0' }}>May</p>
                                                            </div>

                                                            <div className="col form-group">


                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-1 form-group text-center">


                                                                <p className="form-control" style={{ border: 'none', margin: '0' }}>June</p>
                                                            </div>

                                                            <div className="col form-group">


                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-1 form-group text-center">


                                                                <p className="form-control" style={{ border: 'none', margin: '0' }}>July</p>
                                                            </div>

                                                            <div className="col form-group">


                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-1 form-group text-center">


                                                                <p className="form-control" style={{ border: 'none', margin: '0' }}>Aug</p>
                                                            </div>

                                                            <div className="col form-group">


                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-1 form-group text-center">


                                                                <p className="form-control" style={{ border: 'none', margin: '0' }}>Sep</p>
                                                            </div>

                                                            <div className="col form-group">


                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-1 form-group text-center">


                                                                <p className="form-control" style={{ border: 'none', margin: '0' }}>Oct</p>
                                                            </div>

                                                            <div className="col form-group">


                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-1 form-group text-center">


                                                                <p className="form-control" style={{ border: 'none', margin: '0' }}>Nov</p>
                                                            </div>

                                                            <div className="col form-group">


                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-1 form-group text-center">


                                                                <p className="form-control" style={{ border: 'none', margin: '0' }}>Dec</p>
                                                            </div>

                                                            <div className="col form-group">


                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                            <div className="col form-group">

                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 20px 20px', backgroundColor: '#f8f9fa' }}>
                                                        <button className="btn ripple btn-primary" type="button" style={{ borderRadius: '5px', padding: '10px 30px', fontSize: '16px', fontWeight: 'bold' }}>
                                                            Add Target
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
                                                <div className="col-sm-6">
                                                    <input
                                                        type="search"
                                                        className="form-control form-control"
                                                        placeholder="Search..."
                                                        aria-controls="example1"
                                                    />
                                                </div>

                                                <div className="col-sm-6">
                                                    <select className="form-control select2">
                                                        <option >Month</option>
                                                        <option >Jan</option>
                                                        <option >Feb</option>
                                                        <option >March</option>
                                                        <option >April</option>
                                                    </select>
                                                </div>

                                            </div>{" "}
                                        </div>
                                    </div>
                                </div>{" "}
                            </div>
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-striped table-bordered text-nowrap mb-0">
                                                    <thead>
                                                        <tr>

                                                            <th>Year 2024</th>
                                                            <th>No of Bookings</th>
                                                            <th>Point/Booking</th>
                                                            <th>Gift Target</th>
                                                            <th>Gift Item</th>
                                                            <th>Achieved PTS</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>

                                                            <td>April</td>
                                                            <td>
                                                                10
                                                            </td>
                                                            <td>
                                                                <p className="mb-0">
                                                                    1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                            <td>
                                                                iPhone 15
                                                            </td>
                                                            <td>7</td>
                                                            <td>On Going</td>
                                                        </tr>

                                                        <tr>

                                                            <td>April</td>
                                                            <td>
                                                                10
                                                            </td>
                                                            <td>
                                                                <p className="mb-0">
                                                                    1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                            <td>
                                                                iPhone 15
                                                            </td>
                                                            <td>7</td>
                                                            <td>On Going</td>
                                                        </tr>
                                                        <tr>

                                                            <td>April</td>
                                                            <td>
                                                                10
                                                            </td>
                                                            <td>
                                                                <p className="mb-0">
                                                                    1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                            <td>
                                                                iPhone 15
                                                            </td>
                                                            <td>7</td>
                                                            <td>On Going</td>
                                                        </tr>

                                                        <tr>

                                                            <td>April</td>
                                                            <td>
                                                                10
                                                            </td>
                                                            <td>
                                                                <p className="mb-0">
                                                                    1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                            <td>
                                                                iPhone 15
                                                            </td>
                                                            <td>7</td>
                                                            <td>On Going</td>
                                                        </tr>

                                                        <tr>

                                                            <td>April</td>
                                                            <td>
                                                                10
                                                            </td>
                                                            <td>
                                                                <p className="mb-0">
                                                                    1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                            <td>
                                                                iPhone 15
                                                            </td>
                                                            <td>7</td>
                                                            <td>On Going</td>
                                                        </tr>
                                                        <tr>

                                                            <td>April</td>
                                                            <td>
                                                                10
                                                            </td>
                                                            <td>
                                                                <p className="mb-0">
                                                                    1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                            <td>
                                                                iPhone 15
                                                            </td>
                                                            <td>7</td>
                                                            <td>On Going</td>
                                                        </tr>
                                                        <tr>

                                                            <td>April</td>
                                                            <td>
                                                                10
                                                            </td>
                                                            <td>
                                                                <p className="mb-0">
                                                                    1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                            <td>
                                                                iPhone 15
                                                            </td>
                                                            <td>7</td>
                                                            <td>On Going</td>
                                                        </tr>
                                                        <tr>

                                                            <td>April</td>
                                                            <td>
                                                                10
                                                            </td>
                                                            <td>
                                                                <p className="mb-0">
                                                                    1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                            <td>
                                                                iPhone 15
                                                            </td>
                                                            <td>7</td>
                                                            <td>On Going</td>
                                                        </tr>

                                                        <tr>

                                                            <td>April</td>
                                                            <td>
                                                                10
                                                            </td>
                                                            <td>
                                                                <p className="mb-0">
                                                                    1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                            <td>
                                                                iPhone 15
                                                            </td>
                                                            <td>7</td>
                                                            <td>On Going</td>
                                                        </tr>

                                                        <tr>

                                                            <td>April</td>
                                                            <td>
                                                                10
                                                            </td>
                                                            <td>
                                                                <p className="mb-0">
                                                                    1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                            <td>
                                                                iPhone 15
                                                            </td>
                                                            <td>7</td>
                                                            <td>On Going</td>
                                                        </tr>

                                                        <tr>

                                                            <td>April</td>
                                                            <td>
                                                                10
                                                            </td>
                                                            <td>
                                                                <p className="mb-0">
                                                                    1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                            <td>
                                                                iPhone 15
                                                            </td>
                                                            <td>7</td>
                                                            <td>On Going</td>
                                                        </tr>

                                                        <tr>

                                                            <td>April</td>
                                                            <td>
                                                                10
                                                            </td>
                                                            <td>
                                                                <p className="mb-0">
                                                                    1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                8
                                                            </td>
                                                            <td>
                                                                iPhone 15
                                                            </td>
                                                            <td>7</td>
                                                            <td>On Going</td>
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


        </>

    )
}

export default ShowTargetList