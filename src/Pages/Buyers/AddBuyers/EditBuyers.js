import React, { useState, useEffect } from 'react'
import MainPage from '../../../Components/MainPage'
import Prince from '../../../Components/Prince'
import DropdownMenu from '../../../Components/DropdownMenu'
import { Link, useNavigate, useParams } from 'react-router-dom';


const EditBuyers = () => {

    const { empid } = useParams();

    const [id, setId] = useState('');
    
    const [fullName, setFullName] = useState('');

    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    
    const apiUrl = process.env.REACT_APP_URL;
    console.log(apiUrl);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                //signle user data api 
                const url = `${apiUrl}/employee/employee/${empid}`   //url to get the user data 

                let result = await fetch(url)
                result = await result.json();

                const { data } = result;      //Extracting the data from the result 

                //Now assign the value from the result to the state
                setId(data.id);
                setFullName(data.firstName);
                setEmail(data.email);
                setMobileNumber(data.mobileNumber);

            } catch (e) {
                console.log(e)

            }
        }

        fetchUser();

    }, [empid])
    console.log(empid);


    const handleUpdate = async () => {
        try {

            const empdata = {
                id,
                fullName,
                email,
                mobileNumber,

            };
            console.log(empid)

            //Update url 

            const url = `${apiUrl}/employee/employeeUpdate/${empid}`


            let response = await fetch(url, {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(empdata),

            })

            response = await response.json()
            if (response.status === 'success') {
                //In successfull updatation 
                console.log(response)
                


                console.log('Data updated successfully');

            } else {
               console.log("Data not update")

            }

        } catch (error) {
            console.log(error)
        }
    }




    return (
        <>

            {/* End Loader */}
            {/* Page */}

            {/* Main Header*/}
            <div className="page">
                <div className="main-container container-fluid">
                    <div className="main-header-left">
                        <a
                            className="main-header-menu-icon"
                            href="javascript:void(0)"
                            id="mainSidebarToggle"
                        >
                            <span />
                        </a>
                        <div className="hor-logo">
                            <a className="main-logo" href="index.html">
                                <img
                                    src="../assets/img/brand/logo.png"
                                    className="header-brand-img desktop-logo"
                                    alt="logo"
                                />
                                <img
                                    src="../assets/img/brand/logo-light.png"
                                    className="header-brand-img desktop-logo-dark"
                                    alt="logo"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="main-header-center">
                        <div className="responsive-logo">
                            <a href="index.html">
                                <img
                                    src="../assets/img/brand/logo.png"
                                    className="mobile-logo"
                                    alt="logo"
                                />
                            </a>
                            <a href="index.html">
                                <img
                                    src="../assets/img/brand/logo-light.png"
                                    className="mobile-logo-dark"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div className="input-group">
                            <div className="input-group-btn search-panel">
                                <DropdownMenu />
                            </div>
                            <input
                                type="search"
                                className="form-control rounded-0"
                                placeholder="Search for anything..."
                            />
                            <button className="btn search-btn">
                                <i className="fe fe-search" />
                            </button>
                        </div>
                    </div>
                    <div className="main-header-right">
                        <button
                            className="navbar-toggler navresponsive-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent-4"
                            aria-controls="navbarSupportedContent-4"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fe fe-more-vertical header-icons navbar-toggler-icon" />
                        </button>
                        {/* Navresponsive closed */}
                        <div className="navbar navbar-expand-lg  nav nav-item  navbar-nav-right responsive-navbar navbar-dark  ">
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent-4"
                            >
                                <div className="d-flex order-lg-2 ms-auto">
                                    {/* Search */}
                                    <div className="dropdown header-search">
                                        <a className="nav-link icon header-search">
                                            <i className="fe fe-search header-icons" />
                                        </a>
                                        <div className="dropdown-menu">
                                            <div className="main-form-search p-2">
                                                <div className="input-group">
                                                    <div className="input-group-btn search-panel">
                                                        <select className="form-control select2">
                                                            <option label="All categories"> </option>
                                                            <option>Staff/Agent</option>
                                                            <option>Sales Lead</option>
                                                            <option>Subscriber</option>
                                                            <option>Cases/Incident</option>
                                                            <option>Lawyer</option>
                                                        </select>
                                                    </div>
                                                    <input
                                                        type="search"
                                                        className="form-control"
                                                        placeholder="Search for anything..."
                                                    />
                                                    <button className="btn search-btn">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-search"
                                                        >
                                                            <circle cx={11} cy={11} r={8} />
                                                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Search */}
                                    {/* Theme-Layout */}
                                    <div className="dropdown d-flex main-header-theme">
                                        <a className="nav-link icon layout-setting">
                                            <span className="dark-layout">
                                                <i className="fe fe-sun header-icons" />
                                            </span>
                                            <span className="light-layout">
                                                <i className="fe fe-moon header-icons" />
                                            </span>
                                        </a>
                                    </div>
                                    {/* Theme-Layout */}
                                    {/* Full screen */}
                                    <div className="dropdown ">
                                        <a className="nav-link icon full-screen-link">
                                            <i className="fe fe-maximize fullscreen-button fullscreen header-icons" />
                                            <i className="fe fe-minimize fullscreen-button exit-fullscreen header-icons" />
                                        </a>
                                    </div>
                                    {/* Full screen */}
                                    {/* Notification */}
                                    <div className="dropdown main-header-notification">
                                        <a className="nav-link icon" href="">
                                            <i className="fe fe-bell header-icons" />
                                            <span className="badge bg-danger nav-link-badge">4</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <div className="header-navheading">
                                                <p className="main-notification-text">
                                                    You have 1 unread notification
                                                    <span className="badge bg-pill bg-primary ms-3">
                                                        View all
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="main-notification-list">
                                                <div className="media new">
                                                    <div className="main-img-user online">
                                                        <img alt="avatar" src="../assets/img/users/5.jpg" />
                                                    </div>
                                                    <div className="media-body">
                                                        <p>
                                                            Congratulate <strong>Olivia James</strong> for New
                                                            template start
                                                        </p>
                                                        <span>Oct 15 12:32pm</span>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="main-img-user">
                                                        <img alt="avatar" src="../assets/img/users/2.jpg" />
                                                    </div>
                                                    <div className="media-body">
                                                        <p>
                                                            <strong>Joshua Gray</strong> New Message Received
                                                        </p>
                                                        <span>Oct 13 02:56am</span>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="main-img-user online">
                                                        <img alt="avatar" src="../assets/img/users/3.jpg" />
                                                    </div>
                                                    <div className="media-body">
                                                        <p>
                                                            <strong>Elizabeth Lewis</strong> added new schedule
                                                            realease
                                                        </p>
                                                        <span>Oct 12 10:40pm</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-footer">
                                                <a href="javascript:void(0)">View All Notifications</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Notification */}
                                    {/* Messages */}
                                    <div className="main-header-notification">
                                        <a className="nav-link icon" href="chat.html">
                                            <i className="fe fe-message-square header-icons" />
                                            <span className="badge bg-success nav-link-badge">6</span>
                                        </a>
                                    </div>
                                    {/* Messages */}
                                    {/* Profile */}
                                    <MainPage />
                                    {/* Profile */}
                                    {/* Sidebar */}
                                    <div className="dropdown  header-settings">
                                        <a
                                            href="javascript:void(0)"
                                            className="nav-link icon"
                                            data-bs-toggle="sidebar-right"
                                            data-bs-target=".sidebar-right"
                                        >
                                            <i className="fe fe-align-right header-icons" />
                                        </a>
                                    </div>
                                    {/* Sidebar */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* End Main Header*/}
                {/* Sidemenu */}
                <Prince />
                {/* End Sidemenu */}
                {/* Main Content*/}

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Add Exporters</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Internal Staff </a>
                                        </li>
                                    </ol>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <button
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            <i className="fe fe-download-cloud me-2" /> Print
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}


                            <div className="row row-sm">
                                <div className="col-xl-3 col-lg-3 col-md-3">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-4">PROFILE PHOTO</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
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
                                <div className="col-xl-9 col-lg-9 col-md-9">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-3">BASIC INFO</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Full Name: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="fullName"
                                                                
                                                                placeholder="Enter firstname"
                                                                required=""
                                                                type="text"
                                                                value={fullName}
                                                                onChange={(e) => setFullName(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Email ID: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="email"
                                                                placeholder="Enter "
                                                               

                                                               
                                                                required=""
                                                                type="text"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Mobile No: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="mobileNumber"
                                                               
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                                value={mobileNumber}
                                                                onChange={(e) => setMobileNumber(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="col-sm-4 form-group ">
                                                            <label className="form-label">Company Name</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-sm-4 form-group">
                                                            <label className="form-label">Company Email</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-sm-4 form-group">
                                                            <label className="form-label">Company Phone</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-sm-4 ">
                                                            <label className="form-label">Company Website</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <label className="form-label">Company Address</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <label className="form-label">Company GST No</label>
                                                            <input
                                                                className="form-control"
                                                                required=""
                                                                type="text"
                                                            />
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
                                                <h6 className="main-content-label mb-1">Billing Address</h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-sm-6 mg-t-10">
                                                    <label className="form-label">Country</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="currentAddressCountry"

                                                    >

                                                        <option value="">Select a country</option>

                                                    </select>
                                                </div>
                                                <div className="col-sm-6 mg-t-10">
                                                    <label className="form-label">State</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="permanentAddressState"

                                                        
                                                    >
                                                        <option value="">Select a state</option>


                                                    </select>
                                                </div>
                                                <div className="col-sm-6 mg-t-10">
                                                    <label className="form-label">City</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="currentAddressCity"

                                                    >
                                                        <option value="">Select a city</option>

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
                                                        <label className="form-label">Address lane</label>
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
                                                    Shipping Address{" "}
                                                    <label className="ckbox" style={{ float: "right" }}>

                                                        <input
                                                            name="sameAsCurrentAddress"
                                                            type="checkbox"

                                                        />
                                                        <span className="tx-12">Same as Billing Address</span>
                                                    </label>
                                                </h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-sm-6 mg-t-10">
                                                    <label className="form-label">Country</label>
                                                    <select
                                                        className="form-control select select2"
                                                        name="currentAddressCountry"

                                                    >

                                                        <option value="">Select a country</option>

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
                                                        <label className="form-label">Address lane</label>
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
                                                        <label className="form-label">Aadhaar Upload</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="file"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label className="form-label">Aadhaar No</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <label className="form-label">PAN Upload</label>
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
                                                        <label className="form-label">Driving Licence</label>
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
                                                <div className="col-sm-3">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">GST No</label>
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
                                                <h6 className="main-content-label  mb-3">
                                                    Account Details
                                                </h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-sm-3 ">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Account No.</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Account Name</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Bank Name</label>
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
                                                <h6 className="main-content-label mb-3">ONBOARDING</h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-sm-4 form-group">
                                                    <label className="form-label"> Category</label>
                                                    <select className="form-control select select2">
                                                        <option>Select</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-4 form-group">
                                                    <label className="form-label">Sub Category</label>
                                                    <select className="form-control select select2">
                                                        <option>Select</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-4  form-group">
                                                    <label className="form-label">Company Age</label>
                                                    <input className="form-control" required="" type="text" />
                                                </div>
                                                <div className="col-sm-4 ">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Preffered Langauge</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 ">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">
                                                            Preffered Locations
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 ">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">
                                                            Bonus Wallet (Rs) - Credit
                                                        </label>
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
                            <div className="row row-sm">
                                <div className="col-12 mb-3">
                                    <button className="btn btn-primary" onClick={handleUpdate} type="submit">
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
                                    Copyright © 2023 <a href="javascript:void(0)">PWIP</a>. Designed
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

export default EditBuyers