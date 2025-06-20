import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

const ProfileList = () => {
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
                                    <h2 className="main-content-title tx-24 mg-b-5">Profile</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Pages</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Profile
                                        </li>
                                    </ol>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <button
                                            type="button"
                                            className="btn btn-white btn-icon-text my-2 me-2"
                                        >
                                            <i className="fe fe-download me-2" /> Import
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-white btn-icon-text my-2 me-2"
                                        >
                                            <i className="fe fe-filter me-2" /> Filter
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            <i className="fe fe-download-cloud me-2" /> Download Report
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* End Page Header */}
                            <div className="row square">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="panel profile-cover">
                                                <div className="d-flex align-items-start">
                                                    {" "}
                                                    <img
                                                        src="../assets/img/users/1.jpg"
                                                        className="img rounded-circle avatar-xxl"
                                                        alt=""
                                                    />
                                                    <div className="ps-sm-4 ps-2" id="img-section">
                                                        {" "}
                                                        <b>Mariyam Chandel</b>
                                                        <p className="mb-1">mariyamchandel23@gmail.com</p>
                                                        <p className="mb-1">+91 8786753535</p>
                                                        <p className="mb-1">Female </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="profile-tab tab-menu-heading mt-3">
                                                <nav className="nav main-nav-line p-3 tabs-menu profile-nav-line bg-gray-100">
                                                    <a
                                                        className="nav-link  active"
                                                        data-bs-toggle="tab"
                                                        href="#about"
                                                    >
                                                        Overview
                                                    </a>
                                                    <a className="nav-link" data-bs-toggle="tab" href="#edit">
                                                        Edit Profile
                                                    </a>
                                                    <a
                                                        className="nav-link"
                                                        data-bs-toggle="tab"
                                                        href="#timeline"
                                                    >
                                                        Timeline
                                                    </a>
                                                    <a
                                                        className="nav-link"
                                                        data-bs-toggle="tab"
                                                        href="#gallery"
                                                    >
                                                        Documents
                                                    </a>
                                                    <a
                                                        className="nav-link"
                                                        data-bs-toggle="tab"
                                                        href="#attendance"
                                                    >
                                                        Attendance
                                                    </a>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12 col-md-12">
                                    <div className=" custom-card main-content-body-profile">
                                        <div className="tab-content">
                                            <div
                                                className="main-content-body tab-pane  border-top-0 active"
                                                id="about"
                                            >
                                                <div className="row row-sm">
                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                        <div className="card custom-card border mb-4">
                                                            <div className="card-header pb-3">
                                                                <h6 className="mb-0">Current Address : </h6>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="main-profile-contact-list">
                                                                    <div className="media">
                                                                        <div className="media-icon bg-primary-transparent text-primary">
                                                                            {" "}
                                                                            <i className="icon ion-md-home" />{" "}
                                                                        </div>
                                                                        <div className="media-body">
                                                                            {" "}
                                                                            <span>Address :</span>
                                                                            <div>
                                                                                Tower B4, Flat 1004, Panchsheel Greens-2
                                                                                Sector 16A, Greater Noida West 201301{" "}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                        <div className="card custom-card border mb-4">
                                                            <div className="card-header pb-3">
                                                                <h6 className="mb-0">Permanent Address : </h6>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="main-profile-contact-list">
                                                                    <div className="media">
                                                                        <div className="media-icon bg-primary-transparent text-primary">
                                                                            {" "}
                                                                            <i className="icon ion-md-home" />{" "}
                                                                        </div>
                                                                        <div className="media-body">
                                                                            {" "}
                                                                            <span>Address :</span>
                                                                            <div>
                                                                                Tower B4, Flat 1004, Panchsheel Greens-2
                                                                                Sector 16A, Greater Noida West 201301{" "}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <div className="card custom-card border mb-4">
                                                            <div className="card-header pb-3">
                                                                <h6 className="mb-0">Onboarding : </h6>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Company :</span>
                                                                                    <div> Lawyered Private Limited </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Department :</span>
                                                                                    <div> Business Development </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Designation :</span>
                                                                                    <div> Sales Executive </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>DOJ :</span>
                                                                                    <div> 23 May 2022 </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Sales Reports to :</span>
                                                                                    <div> Himanshu Singh</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Other Report to :</span>
                                                                                    <div> Ajay kumar </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <div className="card custom-card border mb-4">
                                                            <div className="card-header pb-3">
                                                                <h6 className="mb-0">KYC &amp; Documents : </h6>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Aadhaar No, :</span>
                                                                                    <div>
                                                                                        {" "}
                                                                                        xxxx xxxx xxxx{" "}
                                                                                        <span className="text-success">
                                                                                            (Verified)
                                                                                        </span>{" "}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>PAN No. :</span>
                                                                                    <div>
                                                                                        {" "}
                                                                                        xxxxxxxxxx{" "}
                                                                                        <span className="text-success">
                                                                                            (Verified)
                                                                                        </span>{" "}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>DL No. :</span>
                                                                                    <div>
                                                                                        {" "}
                                                                                        xxxxxxxxxxxx{" "}
                                                                                        <span className="text-success">
                                                                                            (Verified)
                                                                                        </span>{" "}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <div className="card custom-card border mb-4">
                                                            <div className="card-header pb-3">
                                                                <h6 className="mb-0">Bank Details : </h6>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>User Name :</span>
                                                                                    <div> Mariyam Chandel</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Acc No. :</span>
                                                                                    <div> 4546386667637 </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Bank :</span>
                                                                                    <div> ICICI Bank Limited </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Cancel Cheque :</span>
                                                                                    <div> ICICI879892</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>IFSC :</span>
                                                                                    <div> Matched</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <div className="card custom-card border mb-0">
                                                            <div className="card-header pb-3">
                                                                <h6 className="mb-0">Salary &amp; Exit : </h6>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>DOJ :</span>
                                                                                    <div> 23 May 2022</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Offered Package :</span>
                                                                                    <div> 12,00,000 / Annum </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Offered CTC :</span>
                                                                                    <div> 80,000/- Month</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Notice Period :</span>
                                                                                    <div> 90 Days</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Work Shift :</span>
                                                                                    <div> Day Shift </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Per Day Cost :</span>
                                                                                    <div> Rs.3500 </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Per Hour Cost :</span>
                                                                                    <div>Rs.400 </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <div className="main-profile-contact-list mb-3">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    {" "}
                                                                                    <i className="icon ion-md-globe" />{" "}
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {" "}
                                                                                    <span>Consulting Fees :</span>
                                                                                    <div>5000 </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="main-content-body tab-pane border-top-0"
                                                id="edit"
                                            >
                                                {/* Row */}
                                                <div className="row row-sm">
                                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                                        <div className="card custom-card">
                                                            <div className="card-body">
                                                                <div>
                                                                    <h6 className="main-content-label mb-4">
                                                                        PROFILE PHOTO
                                                                    </h6>
                                                                </div>
                                                                <form
                                                                    action="form-validation.html"
                                                                    data-parsley-validate=""
                                                                >
                                                                    <div className="">
                                                                        <div className="row row-sm">
                                                                            <div className="col-sm-12 col-md-12">
                                                                                <input
                                                                                    type="file"
                                                                                    className="dropify"
                                                                                    data-default-file="../assets/img/media/1.jpg"
                                                                                    data-height={200}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-8 col-lg-8 col-md-8">
                                                        <div className="card custom-card">
                                                            <div className="card-body">
                                                                <div>
                                                                    <h6 className="main-content-label mb-3">
                                                                        BASIC INFO
                                                                    </h6>
                                                                </div>
                                                                <form
                                                                    action="form-validation.html"
                                                                    data-parsley-validate=""
                                                                >
                                                                    <div className="">
                                                                        <div className="row row-sm">
                                                                            <div className="col-lg-6 form-group">
                                                                                <label className="form-label">
                                                                                    Firstname:{" "}
                                                                                    <span className="tx-danger">*</span>
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="firstname"
                                                                                    placeholder="Enter firstname"
                                                                                    required=""
                                                                                    type="text"
                                                                                />
                                                                            </div>
                                                                            <div className="col-lg-6 form-group">
                                                                                <label className="form-label">
                                                                                    Lastname:{" "}
                                                                                    <span className="tx-danger">*</span>
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="lastname"
                                                                                    placeholder="Enter lastname"
                                                                                    required=""
                                                                                    type="text"
                                                                                />
                                                                            </div>
                                                                            <div className="col-lg-6 form-group">
                                                                                <label className="form-label">
                                                                                    Email ID:{" "}
                                                                                    <span className="tx-danger">*</span>
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="lastname"
                                                                                    placeholder="Enter "
                                                                                    required=""
                                                                                    type="text"
                                                                                />
                                                                            </div>
                                                                            <div className="col-lg-6 form-group">
                                                                                <label className="form-label">
                                                                                    Mobile No:{" "}
                                                                                    <span className="tx-danger">*</span>
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="lastname"
                                                                                    placeholder="Enter "
                                                                                    required=""
                                                                                    type="text"
                                                                                />
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <label className="form-label">
                                                                                    Gender:{" "}
                                                                                    <span className="tx-danger">*</span>
                                                                                </label>
                                                                                <select className="form-control select2">
                                                                                    <option>Select</option>
                                                                                    <option value="Firefox">Male</option>
                                                                                    <option value="Chrome">Female</option>
                                                                                </select>
                                                                            </div>
                                                                            {/* col-4 */}
                                                                            <div className="col-lg-6">
                                                                                <label className="form-label">
                                                                                    Date of Birth:{" "}
                                                                                    <span className="tx-danger">*</span>
                                                                                </label>
                                                                                <div className="input-group">
                                                                                    <div className="input-group-text border-end-0">
                                                                                        <i className="fe fe-calendar lh--9 op-6" />
                                                                                    </div>
                                                                                    <input
                                                                                        className="form-control fc-datepicker"
                                                                                        placeholder="MM/DD/YYYY"
                                                                                        type="text"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Row */}
                                                {/* Row */}
                                                <div className="row row-sm">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="card custom-card">
                                                            <div className="card-body">
                                                                <div>
                                                                    <h6 className="main-content-label mb-1">
                                                                        Current Address
                                                                    </h6>
                                                                </div>
                                                                <div className="row row-sm">
                                                                    <div className="col-sm-6 mg-t-10">
                                                                        <label className="form-label">Country</label>
                                                                        <select className="form-control select select2">
                                                                            <option>Select</option>
                                                                            <option>India</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm-6 mg-t-10">
                                                                        <label className="form-label">State</label>
                                                                        <select className="form-control select select2">
                                                                            <option>Select</option>
                                                                            <option>Andhra Pradesh</option>
                                                                            <option>Arunachal Pradesh</option>
                                                                            <option>Assam</option>
                                                                            <option>Bihar</option>
                                                                            <option>Chhattisgarh</option>
                                                                            <option>Goa</option>
                                                                            <option>Gujarat</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm-6 mg-t-10">
                                                                        <label className="form-label">City</label>
                                                                        <select className="form-control select select2">
                                                                            <option>Select</option>
                                                                            <option>Mumbai</option>
                                                                            <option>Delhi</option>
                                                                            <option>Bangalore</option>
                                                                            <option>Ahmedabad</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm-6 mg-t-10">
                                                                        <div className="form-group mb-0">
                                                                            <label className="form-label">Area</label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6 mg-t-10">
                                                                        <div className="form-group mb-0">
                                                                            <label className="form-label">
                                                                                Address lane
                                                                            </label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6 mg-t-10">
                                                                        <div className="form-group mb-0">
                                                                            <label className="form-label">Pin Code</label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="card custom-card">
                                                            <div className="card-body">
                                                                <div>
                                                                    <h6 className="main-content-label mb-1">
                                                                        Permanent Address{" "}
                                                                        <label
                                                                            className="ckbox"
                                                                            style={{ float: "right" }}
                                                                        >
                                                                            <input type="checkbox" />
                                                                            <span className="tx-12">
                                                                                Same as Current Address
                                                                            </span>
                                                                        </label>
                                                                    </h6>
                                                                </div>
                                                                <div className="row row-sm">
                                                                    <div className="col-sm-6 mg-t-10">
                                                                        <label className="form-label">Country</label>
                                                                        <select className="form-control select select2">
                                                                            <option>Select</option>
                                                                            <option>India</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm-6 mg-t-10">
                                                                        <label className="form-label">State</label>
                                                                        <select className="form-control select select2">
                                                                            <option>Select</option>
                                                                            <option>Andhra Pradesh</option>
                                                                            <option>Arunachal Pradesh</option>
                                                                            <option>Assam</option>
                                                                            <option>Bihar</option>
                                                                            <option>Chhattisgarh</option>
                                                                            <option>Goa</option>
                                                                            <option>Gujarat</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm-6 mg-t-10">
                                                                        <label className="form-label">City</label>
                                                                        <select className="form-control select select2">
                                                                            <option>Select</option>
                                                                            <option>Mumbai</option>
                                                                            <option>Delhi</option>
                                                                            <option>Bangalore</option>
                                                                            <option>Ahmedabad</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm-6 mg-t-10">
                                                                        <div className="form-group mb-0">
                                                                            <label className="form-label">Area</label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6 mg-t-10">
                                                                        <div className="form-group mb-0">
                                                                            <label className="form-label">
                                                                                Address lane
                                                                            </label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6 mg-t-10">
                                                                        <div className="form-group mb-0">
                                                                            <label className="form-label">Pin Code</label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Row */}
                                                {/* Row */}
                                                <div className="row row-sm">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="card custom-card">
                                                            <div className="card-body">
                                                                <div>
                                                                    <h6 className="main-content-label mb-3">
                                                                        ONBOARDING
                                                                    </h6>
                                                                </div>
                                                                <div className="row row-sm">
                                                                    <div className="col-sm-4 form-group">
                                                                        <label className="form-label">Company</label>
                                                                        <select className="form-control select select2">
                                                                            <option>Select</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm-4  form-group">
                                                                        <label className="form-label">Department</label>
                                                                        <select className="form-control select select2">
                                                                            <option>Select</option>
                                                                            <option>Sales</option>
                                                                            <option>Marketing</option>
                                                                            <option>Accounts</option>
                                                                            <option>Procurements</option>
                                                                            <option>Contracting</option>
                                                                            <option>Transport</option>
                                                                            <option>Legal</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm-4  form-group">
                                                                        <label className="form-label">
                                                                            Designation
                                                                        </label>
                                                                        <select className="form-control select select2">
                                                                            <option>Select</option>
                                                                            <option>Executive</option>
                                                                            <option>Manager</option>
                                                                            <option>Intern</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-lg-4 form-group">
                                                                        <label className="form-label">
                                                                            Date of Joining:{" "}
                                                                            <span className="tx-danger">*</span>
                                                                        </label>
                                                                        <div className="input-group">
                                                                            <div className="input-group-text border-end-0">
                                                                                <i className="fe fe-calendar lh--9 op-6" />
                                                                            </div>
                                                                            <input
                                                                                className="form-control fc-datepicker"
                                                                                placeholder="MM/DD/YYYY"
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4  form-group">
                                                                        <label className="form-label">
                                                                            Reporting Boss-A
                                                                        </label>
                                                                        <select className="form-control select select2">
                                                                            <option>Select</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm-4  form-group">
                                                                        <label className="form-label">
                                                                            Reporting Boss-B
                                                                        </label>
                                                                        <select className="form-control select select2">
                                                                            <option>Select</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm-12 form-group mb-0">
                                                                        <div className="row">
                                                                            <div className="col-sm-4">
                                                                                {" "}
                                                                                <label className="form-label">
                                                                                    Assign Permission
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-sm-8">
                                                                                <div
                                                                                    className="parsley-checkbox row"
                                                                                    id="cbWrapper"
                                                                                >
                                                                                    <div className="col-xl-3">
                                                                                        <label className="ckbox mg-b-5">
                                                                                            <input
                                                                                                data-parsley-class-handler="#cbWrapper"
                                                                                                data-parsley-errors-container="#cbErrorContainer"
                                                                                                data-parsley-mincheck={2}
                                                                                                name="browser[]"
                                                                                                required=""
                                                                                                type="checkbox"
                                                                                                defaultValue={1}
                                                                                            />
                                                                                            <span>Sales</span>
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="col-xl-3">
                                                                                        <label className="ckbox mg-b-5">
                                                                                            <input
                                                                                                name="browser[]"
                                                                                                type="checkbox"
                                                                                                defaultValue={2}
                                                                                            />
                                                                                            <span>Marketing</span>
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="col-xl-3">
                                                                                        <label className="ckbox mg-b-5">
                                                                                            <input
                                                                                                name="browser[]"
                                                                                                type="checkbox"
                                                                                                defaultValue={3}
                                                                                            />
                                                                                            <span>Accounts</span>
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="col-xl-3">
                                                                                        <label className="ckbox">
                                                                                            <input
                                                                                                name="browser[]"
                                                                                                type="checkbox"
                                                                                                defaultValue={4}
                                                                                            />
                                                                                            <span>Procurements</span>
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="col-xl-3">
                                                                                        <label className="ckbox">
                                                                                            <input
                                                                                                name="browser[]"
                                                                                                type="checkbox"
                                                                                                defaultValue={4}
                                                                                            />
                                                                                            <span>Contracting</span>
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="col-xl-3">
                                                                                        <label className="ckbox">
                                                                                            <input
                                                                                                name="browser[]"
                                                                                                type="checkbox"
                                                                                                defaultValue={4}
                                                                                            />
                                                                                            <span>Transport</span>
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="col-xl-3">
                                                                                        <label className="ckbox">
                                                                                            <input
                                                                                                name="browser[]"
                                                                                                type="checkbox"
                                                                                                defaultValue={4}
                                                                                            />
                                                                                            <span>Legal</span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Row */}
                                                {/* Row */}
                                                <div className="row row-sm">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="card custom-card">
                                                            <div className="card-body">
                                                                <div>
                                                                    <h6 className="main-content-label  mb-3">KYC</h6>
                                                                </div>
                                                                <div className="row row-sm">
                                                                    <div className="col-sm-3 ">
                                                                        <div className="form-group">
                                                                            <label className="form-label">
                                                                                Aadhaar Upload
                                                                            </label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="file"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">
                                                                                Aadhaar No
                                                                            </label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">
                                                                                PAN Upload
                                                                            </label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="file"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">PAN No</label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="form-group mb-0">
                                                                            <label className="form-label">
                                                                                Driving Licence
                                                                            </label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="file"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="form-group mb-0">
                                                                            <label className="form-label">Cheque</label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="file"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Row */}
                                                {/* Row */}
                                                <div className="row row-sm">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="card custom-card">
                                                            <div className="card-body">
                                                                <div>
                                                                    <h6 className="main-content-label  mb-3">
                                                                        Account Details
                                                                    </h6>
                                                                </div>
                                                                <div className="row row-sm">
                                                                    <div className="col-sm-3 ">
                                                                        <div className="form-group mb-0">
                                                                            <label className="form-label">
                                                                                Account No.
                                                                            </label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="form-group mb-0">
                                                                            <label className="form-label">
                                                                                Account Name
                                                                            </label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="form-group mb-0">
                                                                            <label className="form-label">
                                                                                Bank Name
                                                                            </label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="form-group mb-0">
                                                                            <label className="form-label">IFSC</label>
                                                                            <input
                                                                                className="form-control"
                                                                                required=""
                                                                                type="text"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Row */}
                                                {/* Row */}
                                                <div className="row row-sm">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="card custom-card">
                                                            <div className="card-body">
                                                                <div>
                                                                    <h6 className="main-content-label mb-3">OFFER</h6>
                                                                </div>
                                                                <div className="row row-sm ">
                                                                    <div className="col-sm-8">
                                                                        <div className="row">
                                                                            <div className="col-sm-6 form-group ">
                                                                                <label className="form-label">
                                                                                    Offered Package
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    required=""
                                                                                    type="text"
                                                                                />
                                                                            </div>
                                                                            <div className="col-sm-6 form-group">
                                                                                <label className="form-label">
                                                                                    Offered CTC
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    required=""
                                                                                    type="text"
                                                                                />
                                                                            </div>
                                                                            <div className="col-lg-6 form-group">
                                                                                <p className="form-label">Notice Period</p>
                                                                                <select className="form-control select2">
                                                                                    <option>Select </option>
                                                                                    <option>15 Days</option>
                                                                                    <option>30 Days</option>
                                                                                    <option>45 Days</option>
                                                                                    <option>60 Days</option>
                                                                                    <option>90 Days</option>
                                                                                </select>
                                                                            </div>
                                                                            {/* col-4 */}
                                                                            <div className="col-lg-6 form-group">
                                                                                <p className="form-label">Working Shift </p>
                                                                                <select className="form-control select2">
                                                                                    <option>Select </option>
                                                                                    <option>Morning</option>
                                                                                    <option>Day Shift</option>
                                                                                    <option>Evening Shift</option>
                                                                                    <option>Night Shift</option>
                                                                                </select>
                                                                            </div>
                                                                            {/* col-4 */}
                                                                            <div className="col-sm-3 form-group">
                                                                                <label className="form-label">
                                                                                    Per Hour Charges
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    required=""
                                                                                    type="text"
                                                                                />
                                                                            </div>
                                                                            <div className="col-sm-3 form-group">
                                                                                <label className="form-label">
                                                                                    Per Cases Charges
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    required=""
                                                                                    type="text"
                                                                                />
                                                                            </div>
                                                                            <div className="col-sm-3 form-group">
                                                                                <label className="form-label">
                                                                                    Per Month Charges
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    required=""
                                                                                    type="text"
                                                                                />
                                                                            </div>
                                                                            <div className="col-sm-3 form-group">
                                                                                <label className="form-label">
                                                                                    Consulting Fees{" "}
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    required=""
                                                                                    type="text"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4 form-group">
                                                                        <label className="form-label">
                                                                            Upload Offer Letter
                                                                        </label>
                                                                        <input
                                                                            id="demo"
                                                                            type="file"
                                                                            name="files"
                                                                            accept="image/jpeg, image/png, text/html, application/zip, text/css, text/js"
                                                                            multiple=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Row */}
                                                <div className="row row-sm">
                                                    <div className="col-12 mb-3">
                                                        <button className="btn btn-primary" type="submit">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="main-content-body  tab-pane border-top-0"
                                                id="timeline"
                                            >
                                                <div className="main-content-body main-content-body-profile">
                                                    <div className="card p-4">
                                                        <div className="card-body p-0 border p-0 rounded-10">
                                                            <div className="main-profile-body p-0">
                                                                <div className="row row-sm">
                                                                    <div className="col-12">
                                                                        <ul className="notification">
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">Today</span>
                                                                                    <span className="time">02:31</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">Today</span>
                                                                                    <span className="time ms-2">02:31</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md online">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/1.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Dennis Trexy
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    2 Members Accepted your Request.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    2 Hrs ago
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">Yesterday</span>
                                                                                    <span className="time">18:47</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">Yesterday</span>
                                                                                    <span className="time ms-2">18:47</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md offline">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/2.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Robbie Ruder
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Created New Template for Designing
                                                                                                    Department.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    18:47
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">Yesterday</span>
                                                                                    <span className="time">06:43</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">Yesterday</span>
                                                                                    <span className="time ms-2">06:43</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md online">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/3.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Elida Distefa
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Shipment is Out for Delivery.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    06:43
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">23 Oct</span>
                                                                                    <span className="time">03:15</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">23 Oct</span>
                                                                                    <span className="time ms-2">03:15</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md online">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/4.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Harvey Mattos
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Mentioned you in a post.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    03:15
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">15 Oct</span>
                                                                                    <span className="time">12:14</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">15 Oct</span>
                                                                                    <span className="time ms-2">12:14</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md offline">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/5.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Catrice Doshier
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    2 Members Accepted your Request.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    12:14
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">30 Sep</span>
                                                                                    <span className="time">14:04</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">30 Sep</span>
                                                                                    <span className="time ms-2">14:04</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md offline">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/6.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Mercy Ritia
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Created New Template for Designing
                                                                                                    Department.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    14:04
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">18 Sep</span>
                                                                                    <span className="time">12:26</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">18 Sep</span>
                                                                                    <span className="time ms-2">12:26</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md online">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/7.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Mark Jhon
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Shipment is Out for Delivery.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    12:26
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">03 Sep</span>
                                                                                    <span className="time">05:37</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">03 Sep</span>
                                                                                    <span className="time ms-2">05:37</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md offline">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/8.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Benedict Vallone
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Thanking you for Accepting
                                                                                                    Request.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    05:37
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">28 Aug</span>
                                                                                    <span className="time">15:24</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">28 Aug</span>
                                                                                    <span className="time ms-2">15:24</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md online">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/9.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Paul Johny
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Invited you to a Group.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    15:24
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>{" "}
                                                        </div>
                                                    </div>
                                                    {/* main-profile-body */}
                                                </div>
                                            </div>
                                            <div
                                                className="main-content-body  tab-pane border-top-0"
                                                id="gallery"
                                            >
                                                <div className="card p-4">
                                                    <div className="card-body  p-0 rounded-10">
                                                        <div className="demo-gallery">
                                                            <ul
                                                                id="lightgallery"
                                                                className="list-unstyled row row-sm"
                                                            >
                                                                <li
                                                                    className="col-sm-6 col-lg-4"
                                                                    data-responsive="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-sub-html="<h4>Gallery Image 1</h4>"
                                                                >
                                                                    <a href="" className="wd-100p">
                                                                        <img
                                                                            className="img-responsive mb-4 wd-100p"
                                                                            src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                            alt="Thumb-1"
                                                                        />{" "}
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    className="col-sm-6 col-lg-4"
                                                                    data-responsive="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-sub-html="<h4>Gallery Image 2</h4>"
                                                                >
                                                                    <a href="" className="wd-100p">
                                                                        <img
                                                                            className="img-responsive mb-4"
                                                                            src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                            alt="Thumb-1"
                                                                        />{" "}
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    className="col-sm-6 col-lg-4"
                                                                    data-responsive="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-sub-html="<h4>Gallery Image 3</h4>"
                                                                >
                                                                    <a href="" className="wd-100p">
                                                                        <img
                                                                            className="img-responsive mb-4"
                                                                            src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                            alt="Thumb-1"
                                                                        />{" "}
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    className="col-sm-6 col-lg-4"
                                                                    data-responsive="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-sub-html="<h4>Gallery Image 4</h4>"
                                                                >
                                                                    <a href="" className="wd-100p">
                                                                        <img
                                                                            className="img-responsive mb-4"
                                                                            src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                            alt="Thumb-1"
                                                                        />{" "}
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    className="col-sm-6 col-lg-4"
                                                                    data-responsive="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-sub-html="<h4>Gallery Image 5</h4>"
                                                                >
                                                                    <a href="" className="wd-100p">
                                                                        <img
                                                                            className="img-responsive mb-4"
                                                                            src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                            alt="Thumb-1"
                                                                        />{" "}
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    className="col-sm-6 col-lg-4"
                                                                    data-responsive="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-sub-html="<h4>Gallery Image 6</h4>"
                                                                >
                                                                    <a href="" className="wd-100p">
                                                                        <img
                                                                            className="img-responsive mb-4"
                                                                            src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                            alt="Thumb-1"
                                                                        />{" "}
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    className="col-sm-6 col-lg-4"
                                                                    data-responsive="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-sub-html="<h4>Gallery Image 7</h4>"
                                                                >
                                                                    <a href="" className="wd-100p">
                                                                        <img
                                                                            className="img-responsive mb-4 mb-lg-0"
                                                                            src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                            alt="Thumb-1"
                                                                        />{" "}
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    className="col-sm-6 col-lg-4"
                                                                    data-responsive="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-sub-html="<h4>Gallery Image 8</h4>"
                                                                >
                                                                    <a href="" className="wd-100p">
                                                                        <img
                                                                            className="img-responsive mb-4 mb-lg-0"
                                                                            src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                            alt="Thumb-1"
                                                                        />{" "}
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    className="col-sm-6 col-lg-4"
                                                                    data-responsive="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                    data-sub-html="<h4>Gallery Image 9</h4>"
                                                                >
                                                                    <a href="" className="wd-100p">
                                                                        <img
                                                                            className="img-responsive mb-4 mb-lg-0"
                                                                            src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                                                            alt="Thumb-1"
                                                                        />{" "}
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            {/* /Gallery */}
                                                        </div>
                                                    </div>{" "}
                                                </div>
                                            </div>
                                            <div
                                                className="main-content-body  tab-pane border-top-0"
                                                id="attendance"
                                            >
                                                <div className="main-content-body main-content-body-profile">
                                                    <div className="card p-4">
                                                        <div className="card-body p-0 border p-0 rounded-10">
                                                            <div className="main-profile-body p-0">
                                                                <div className="row row-sm">
                                                                    <div className="col-12">
                                                                        <ul className="notification">
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">Today</span>
                                                                                    <span className="time">02:31</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">Today</span>
                                                                                    <span className="time ms-2">02:31</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md online">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/1.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Dennis Trexy
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    2 Members Accepted your Request.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    2 Hrs ago
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">Yesterday</span>
                                                                                    <span className="time">18:47</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">Yesterday</span>
                                                                                    <span className="time ms-2">18:47</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md offline">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/2.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Robbie Ruder
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Created New Template for Designing
                                                                                                    Department.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    18:47
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">Yesterday</span>
                                                                                    <span className="time">06:43</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">Yesterday</span>
                                                                                    <span className="time ms-2">06:43</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md online">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/3.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Elida Distefa
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Shipment is Out for Delivery.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    06:43
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">23 Oct</span>
                                                                                    <span className="time">03:15</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">23 Oct</span>
                                                                                    <span className="time ms-2">03:15</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md online">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/4.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Harvey Mattos
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Mentioned you in a post.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    03:15
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">15 Oct</span>
                                                                                    <span className="time">12:14</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">15 Oct</span>
                                                                                    <span className="time ms-2">12:14</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md offline">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/5.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Catrice Doshier
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    2 Members Accepted your Request.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    12:14
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">30 Sep</span>
                                                                                    <span className="time">14:04</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">30 Sep</span>
                                                                                    <span className="time ms-2">14:04</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md offline">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/6.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Mercy Ritia
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Created New Template for Designing
                                                                                                    Department.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    14:04
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">18 Sep</span>
                                                                                    <span className="time">12:26</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">18 Sep</span>
                                                                                    <span className="time ms-2">12:26</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md online">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/7.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Mark Jhon
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Shipment is Out for Delivery.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    12:26
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">03 Sep</span>
                                                                                    <span className="time">05:37</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">03 Sep</span>
                                                                                    <span className="time ms-2">05:37</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md offline">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/8.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Benedict Vallone
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Thanking you for Accepting
                                                                                                    Request.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    05:37
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="notification-time">
                                                                                    <span className="date">28 Aug</span>
                                                                                    <span className="time">15:24</span>
                                                                                </div>
                                                                                <div className="notification-icon">
                                                                                    <a href="javascript:void(0);" />
                                                                                </div>
                                                                                <div className="notification-time-date mb-2 d-block d-md-none">
                                                                                    <span className="date">28 Aug</span>
                                                                                    <span className="time ms-2">15:24</span>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <div className="media mt-0">
                                                                                        <div className="main-avatar avatar-md online">
                                                                                            <img
                                                                                                alt="avatar"
                                                                                                className="rounded-6"
                                                                                                src="../assets/img/users/9.jpg"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="media-body ms-3 d-flex">
                                                                                            <div className="">
                                                                                                <p className="tx-14 text-dark mb-0 tx-semibold">
                                                                                                    Paul Johny
                                                                                                </p>
                                                                                                <p className="mb-0 tx-13 text-muted">
                                                                                                    Invited you to a Group.
                                                                                                </p>
                                                                                            </div>
                                                                                            <div className="notify-time">
                                                                                                <p className="mb-0 text-muted tx-11">
                                                                                                    15:24
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>{" "}
                                                        </div>
                                                    </div>
                                                    {/* main-profile-body */}
                                                </div>
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
                {/* Sidebar */}
                <div className="sidebar sidebar-right sidebar-animate">
                    <div className="sidebar-icon">
                        <a
                            href="#"
                            className="text-end float-end text-dark fs-20"
                            data-bs-toggle="sidebar-right"
                            data-bs-target=".sidebar-right"
                        >
                            <i className="fe fe-x" />
                        </a>
                    </div>
                    <div className="sidebar-body">
                        <h5>Todo</h5>
                        <div className="d-flex p-3">
                            <label className="ckbox">
                                <input defaultChecked="" type="checkbox" />
                                <span>Hangout With friends</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top">
                            <label className="ckbox">
                                <input type="checkbox" />
                                <span>Prepare for presentation</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top">
                            <label className="ckbox">
                                <input type="checkbox" />
                                <span>Prepare for presentation</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top">
                            <label className="ckbox">
                                <input defaultChecked="" type="checkbox" />
                                <span>System Updated</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top">
                            <label className="ckbox">
                                <input type="checkbox" />
                                <span>Do something more</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top">
                            <label className="ckbox">
                                <input type="checkbox" />
                                <span>System Updated</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top">
                            <label className="ckbox">
                                <input type="checkbox" />
                                <span>Find an Idea</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <div className="d-flex p-3 border-top mb-0">
                            <label className="ckbox">
                                <input type="checkbox" />
                                <span>Project review</span>
                            </label>
                            <span className="ms-auto">
                                <i
                                    className="fe fe-edit-2 text-primary me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Edit"
                                />
                                <i
                                    className="fe fe-trash-2 text-danger me-2"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    data-bs-placement="top"
                                    data-bs-original-title="Delete"
                                />
                            </span>
                        </div>
                        <h5>Overview</h5>
                        <div className="p-4">
                            <div className="main-traffic-detail-item">
                                <div>
                                    <span>Founder &amp; CEO</span> <span>24</span>
                                </div>
                                <div className="progress">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={20}
                                        className="progress-bar progress-bar-xs wd-20p"
                                        role="progressbar"
                                    />
                                </div>
                                {/* progress */}
                            </div>
                            <div className="main-traffic-detail-item">
                                <div>
                                    <span>UX Designer</span> <span>1</span>
                                </div>
                                <div className="progress">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={15}
                                        className="progress-bar progress-bar-xs bg-secondary wd-15p"
                                        role="progressbar"
                                    />
                                </div>
                                {/* progress */}
                            </div>
                            <div className="main-traffic-detail-item">
                                <div>
                                    <span>Recruitment</span> <span>87</span>
                                </div>
                                <div className="progress">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={45}
                                        className="progress-bar progress-bar-xs bg-success wd-45p"
                                        role="progressbar"
                                    />
                                </div>
                                {/* progress */}
                            </div>
                            <div className="main-traffic-detail-item">
                                <div>
                                    <span>Software Engineer</span> <span>32</span>
                                </div>
                                <div className="progress">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={25}
                                        className="progress-bar progress-bar-xs bg-info wd-25p"
                                        role="progressbar"
                                    />
                                </div>
                                {/* progress */}
                            </div>
                            <div className="main-traffic-detail-item">
                                <div>
                                    <span>Project Manager</span> <span>32</span>
                                </div>
                                <div className="progress">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={25}
                                        className="progress-bar progress-bar-xs bg-danger wd-25p"
                                        role="progressbar"
                                    />
                                </div>
                                {/* progress */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Sidebar */}
            </div>

        </>

    )
}

export default ProfileList