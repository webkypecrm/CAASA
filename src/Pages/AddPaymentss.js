import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';


const AddPaymentss = () => {

    const initialFormData = {
        paymentMethod: "",

    };

    const [formData, setFormData] = useState(initialFormData);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }


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
                                    <h2 className="main-content-title tx-24 mg-b-5">Add Payment</h2>

                                </div>
                                {/* <div className="d-flex">
                                    <div className="justify-content-center">
                                        <button
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            <i className="fe fe-download-cloud me-2" /> Print
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-2">Add Payment</h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-lg-3 form-group">
                                                    <label className="form-label">
                                                        Action <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="lastname"
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-lg-3 form-group">
                                                    <label className="form-label">
                                                        From  <span className="tx-danger">*</span>
                                                    </label>
                                                    <select className="form-control select2">
                                                        <option value=''>Select Client</option>
                                                        <option >Ram Kumar</option>

                                                    </select>
                                                </div>
                                                <div className="col-lg-3 form-group">
                                                    <label className="form-label">
                                                        Date <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="lastname"
                                                        placeholder="Enter"
                                                        required=""
                                                        type="date"
                                                    />
                                                </div>
                                                <div className="col-lg-3 form-group">
                                                    <label className="form-label">
                                                        Time <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="lastname"
                                                        placeholder="Enter"
                                                        required=""
                                                        type="time"
                                                    />
                                                </div>

                                                <div className="col-sm-3 mg-t-10">
                                                    <label className="form-label">
                                                        Venue <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="lastname"
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-sm-3 mg-t-10">
                                                    <label className="form-label">
                                                        Amount <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="lastname"
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-sm-3 mg-t-10">
                                                    <label className="form-label">
                                                        Status <span className="tx-danger">*</span>
                                                    </label>
                                                    <select className="form-control select2"
                                                        name="paymentMethod"
                                                        value={formData.paymentMethod}
                                                        onChange={handleInputChange}

                                                    >
                                                        <option value=''>Status</option>
                                                        <option value={'Collected'}>Collected</option>
                                                        <option value={'Re-Scheduled'}>Re-Scheduled</option>
                                                        <option value={'Hold'}>Hold</option>
                                                        <option value={'Cancelled'}>Cancelled</option>


                                                    </select>
                                                </div>
                                                {formData.paymentMethod === 'Collected' && (
                                                    <>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Provider Photo</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="file"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Payment + Selfie</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="file"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Get date & Time Stamp</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="date"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Send OTP to : Client & Confirm</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>

                                                    </>
                                                )}
                                                {formData.paymentMethod === 'Re-Scheduled' && (
                                                    <>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Transaction No</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Bank Account / No</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Mode</label>
                                                            <select className="form-control select2"


                                                            >
                                                                <option value=''>Select Mode</option>
                                                                <option >IMPS</option>
                                                                <option >RTGS</option>
                                                                <option>UPI</option>
                                                               


                                                            </select>
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Provider Photo</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="file"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Payment + Selfie</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="file"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Get date & Time Stamp</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="date"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Send OTP to : Client & Confirm</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>


                                                    </>
                                                )}
                                                {formData.paymentMethod === 'Hold' && (
                                                    <>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Cheque Date</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="date"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Cheque No</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Cheque bank</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Bank Account</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Provider Photo</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="file"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Payment + Selfie</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="file"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Get date & Time Stamp</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="date"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Send OTP to : Client & Confirm</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>


                                                    </>
                                                )}
                                                 {formData.paymentMethod === 'Cancelled' && (
                                                    <>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Check List</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Total Amount</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">From</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Date & Time</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="date"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Send OTP to Receiver / management</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Marked Received Entry*** ( Validations)</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Collected Against</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Discount</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>
                                                        <div className="col-sm-3 mg-t-10">
                                                            <label className="form-label">Remarks</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"

                                                            />
                                                        </div>



                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* End Row */}
                            <div className="row row-sm">
                                <div className="col-12 mb-3">
                                    <a
                                        href=""
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        Submit
                                    </a>
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
                                    Copyright © 2024 <a href="javascript:void(0)">AMRS</a>. Designed
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

export default AddPaymentss