import React, { useState, useEffect } from 'react'
import MainPage from '../../Components/MainPage'
import Prince from '../../Components/Prince'
import DropdownMenu from '../../Components/DropdownMenu'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const ManageVendors = () => {
    const [users, setUsers] = useState([]);
    const [statusFilter, setStatusFilter] = useState('');
    const [search, setSearch] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const navigation = useNavigate();

    const apiUrl = process.env.REACT_APP_URL;
    console.log(apiUrl);

    const loadcontent = (id) => {
        console.log(id); // Check the value of id
        navigation(`/VendorsEdit/${id}`);
    };

    const deletecontent = (id, token) => {
        const Token = localStorage.getItem("Token");
        console.log("Token " + Token);

        if (window.confirm("Do you want to delete")) {
            fetch(`${apiUrl}/vendor/deleteVendor/` + id, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${Token}`,
                    "Content-Type": "application/json" // Adjust content type if needed
                }
            })
                .then((res) => {
                    if (res.ok) {
                        alert('Record Deleted');
                        window.location.reload(false);
                    } else {
                        throw new Error('Failed to delete');
                    }
                })
                .catch((err) => {
                    console.log(err);
                    // Handle error appropriately, maybe show an error message
                });
        }
    };

    useEffect(() => {
        const Token = localStorage.getItem("Token");
        console.log("Token " + Token);

        fetch(`${apiUrl}/vendor/vendors`, {
            headers: {
                'Authorization': `Bearer ${Token}` // Include the Token in the Authorization header
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    if (Array.isArray(data.data)) {
                        setUsers(data.data); // Update the users state with the fetched data
                    } else {
                        console.error('API response does not contain users array:', data);
                    }
                } else {
                    console.error('API request was not successful:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, []);



    const filteredUsers = users.filter((user) => {
        return (
            (user.id.toString().includes(search) || user.fullName.includes(search)) &&
            (statusFilter === '' || user.status.toString() === statusFilter) &&
            (genderFilter === '' || user.gender === genderFilter || (genderFilter === 'male' && user.gender === 'Male') || (genderFilter === 'female' && user.gender === 'Female'))
        );
    });
    return (
        <>
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
                                    <h2 className="main-content-title tx-24 mg-b-5">Vendors List</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Vendors </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Vendors List{" "}
                                        </li>
                                    </ol>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to="/AddVendors"
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" /> Add Vendors
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Page Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <input
                                                        type="search"
                                                        className="form-control form-control"
                                                        placeholder="Search..."
                                                        aria-controls="example1"
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-sm-2">
                                                    <select className="form-control select2">
                                                        <option label="Choose one">Filter1</option>
                                                        <option value="Firefox">Male</option>
                                                        <option value="Chrome">Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <select className="form-control select2">
                                                        <option label="Choose one">Filter2</option>
                                                        <option value="Firefox">Male</option>
                                                        <option value="Chrome">Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <select className="form-control select2">
                                                        <option label="Choose one">Filter3</option>
                                                        <option value="Firefox">Active</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <select className="form-control select2">
                                                        <option label="Choose one">Filter4</option>
                                                        <option value="Firefox" />
                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <select className="form-control select2">
                                                        <option label="Choose one">Filter5</option>
                                                        <option value="Firefox" />
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
                                            <div className="text-wrap">
                                                <div className="panel panel-primary tabs-style-3 p-0 tabs-style-3-0">
                                                    <div className="tab-content ">
                                                        <div className="tab-pane active" id="tab11">
                                                            <div className="table-responsive">
                                                                <table className="table table-striped table-bordered text-nowrap mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>
                                                                                <label className="ckbox">
                                                                                    <input type="checkbox" defaultValue={5} />
                                                                                    <span />
                                                                                </label>
                                                                            </th>
                                                                            <th>Source</th>
                                                                            <th>Photo</th>
                                                                            <th>Contact Person</th>
                                                                            <th>Company</th>
                                                                            <th>Bank Details</th>
                                                                            <th>Type &amp; Category</th>
                                                                            <th>Business</th>
                                                                            <th>Actions</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {filteredUsers.map((user) => (
                                                                            <tr key={user.id}>
                                                                                <td>
                                                                                    <label className="ckbox">
                                                                                        <input type="checkbox" defaultValue={5} />
                                                                                        <span />
                                                                                    </label>
                                                                                </td>
                                                                                <td>
                                                                                    <p className="mb-0">
                                                                                        ID: {user.id}
                                                                                        <br />
                                                                                        Source: By Vendor
                                                                                        {/* <br />
                                                                                        DOO: {user.dob}
                                                                                        <br />
                                                                                        AM: {user.fullName} */}
                                                                                    </p>
                                                                                </td>
                                                                                <td>
                                                                                    <img
                                                                                        alt="avatar"
                                                                                        className="rounded-circle me-3"
                                                                                        src="https://cdn0.iconfinder.com/data/icons/rcorners/512/User-512.png"
                                                                                        style={{ width: 60 }}
                                                                                    />
                                                                                </td>
                                                                                <td>
                                                                                    <p className="mb-0">
                                                                                        {user.fullName}
                                                                                        <br />
                                                                                        E: {user.email}
                                                                                        <br />
                                                                                        M: +91 {user.mobileNumber}
                                                                                    </p>
                                                                                </td>
                                                                                <td>
                                                                                    <p className="mb-0">
                                                                                        Company name: {user.companyName}
                                                                                        <br />
                                                                                        Address: {user.companyAddress}

                                                                                        <br />
                                                                                        Email:{user.companyEmail}
                                                                                        <br />
                                                                                        Website: {user.companyWebsite}
                                                                                        <br />
                                                                                        GST: {user.companyGstNo}
                                                                                    </p>
                                                                                </td>
                                                                                <td>
                                                                                    <p className="mb-0">
                                                                                        Account Name {user.accountName}
                                                                                        <br />
                                                                                        Account no: {user.accountNo}
                                                                                        <br />
                                                                                        {user.mobileNumber}
                                                                                        <br />
                                                                                        Bank name: {user.bankName}
                                                                                        <br />
                                                                                        IFSC: {user.ifsc}
                                                                                    </p>
                                                                                </td>
                                                                                <td>
                                                                                    Category: Vendor
                                                                                    <br />
                                                                                    Rice Bags, Others.
                                                                                </td>
                                                                                <td>
                                                                                    Order Placed: <a href="">10</a>
                                                                                    <br />
                                                                                    In Process Order: <a href="">5</a>
                                                                                    <br />
                                                                                    Delivered: <a href="">3</a>
                                                                                    <br />
                                                                                    PO : <a href="">1</a>
                                                                                    <br />
                                                                                    Invoice: <a href="">3</a>
                                                                                </td>
                                                                                <td>
                                                                                    <a
                                                                                        href="buyer-detail.html"
                                                                                        className="btn ripple btn-warning btn-xs w-100 mb-1 mt-1"
                                                                                    >
                                                                                        View
                                                                                    </a>
                                                                                    <br />
                                                                                    <a onClick={() => loadcontent(user.id)} className="btn ripple btn-info btn-xs w-100">

                                                                                        Edit Profile
                                                                                    </a>                                                                                    <br />
                                                                                    <a href="#" className="btn ripple btn-info btn-xs w-100 my-1"
                                                                                        onClick={() => deletecontent(user.id)}
                                                                                    >
                                                                                        Delete

                                                                                    </a>
                                                                                    <br />
                                                                                    <a
                                                                                        href=""
                                                                                        className="btn ripple btn-info btn-xs w-100"
                                                                                    >
                                                                                        Disable
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
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
            {/* End Page */}
            {/* Large Modal */}
            <div className="modal" id="modaldemo-id">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content modal-content-demo">
                        <div className="modal-header">
                            <h6 className="modal-title">ID</h6>
                            <button
                                aria-label="Close"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                type="button"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-8">
                                    <img
                                        src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <h6>ID : Law001</h6>
                                    <div className="form-group">
                                        <select className="form-control select2">
                                            <option>Status</option>
                                            <option>Approved</option>
                                            <option>Disapproved</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn ripple btn-primary w-100" type="button">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Large Modal */}
            <div className="modal" id="modaldemo-pan">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content modal-content-demo">
                        <div className="modal-header">
                            <h6 className="modal-title">PAN</h6>
                            <button
                                aria-label="Close"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                type="button"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-8">
                                    <img
                                        src="https://newadmin.webkype.com/assets/img/pngs/default-img.gif"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <h6>Pan No. : CLDPK8793</h6>
                                    <div className="form-group">
                                        <select className="form-control select2">
                                            <option>Status</option>
                                            <option>Approved</option>
                                            <option>Disapproved</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn ripple btn-primary w-100" type="button">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Large Modal */}
            {/*End Large Modal */}
            <div className="modal" id="modaldemo-cheque">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content modal-content-demo">
                        <div className="modal-header">
                            <h6 className="modal-title">Cheque</h6>
                            <button
                                aria-label="Close"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                type="button"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-8">
                                    <img
                                        src="https://newadmin.webkype.com/assets/img/pngs/cheque-img.jpg"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <h6>Cheque No. : 0123456789</h6>
                                    <div className="form-group">
                                        <select className="form-control select2">
                                            <option>Status</option>
                                            <option>Approved</option>
                                            <option>Disapproved</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn ripple btn-primary w-100" type="button">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Large Modal */}
            {/*End Large Modal */}
            <div className="modal" id="modaldemo-address">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content modal-content-demo">
                        <div className="modal-header">
                            <h6 className="modal-title">Address</h6>
                            <button
                                aria-label="Close"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                type="button"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-8">
                                    <p>
                                        3-15/10/403 Newark, Street no 5, Next To Pizza Hut, Bangalore,
                                        Karnataka, 560003, India.
                                    </p>
                                    <p className="mb-0">soniataylor344@example.com</p>
                                    <p>+91 08023310451</p>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <select className="form-control select2">
                                            <option>Status</option>
                                            <option>Approved</option>
                                            <option>Disapproved</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn ripple btn-primary w-100" type="button">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Large Modal */}
            {/*End Large Modal */}
            <div className="modal" id="modaldemo-employee-form">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content modal-content-demo">
                        <div className="modal-header">
                            <h6 className="modal-title">Employee Form</h6>
                            <button
                                aria-label="Close"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                type="button"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
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
                                        <label className="form-label">Designation</label>
                                        <select className="form-control select select2">
                                            <option>Select</option>
                                            <option>Executive</option>
                                            <option>Manager</option>
                                            <option>Intern</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 form-group">
                                        <label className="form-label">
                                            Date of Joining: <span className="tx-danger">*</span>
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
                                        <label className="form-label">Reporting Boss-A</label>
                                        <select className="form-control select select2">
                                            <option>Select</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-4  form-group">
                                        <label className="form-label">Reporting Boss-B</label>
                                        <select className="form-control select select2">
                                            <option>Select</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-12 form-group mb-0">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                {" "}
                                                <label className="form-label">Assign Permission</label>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="parsley-checkbox row" id="cbWrapper">
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
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn ripple btn-primary" type="button">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Large Modal */}
            {/* Back-to-top */}
            <a href="#top" id="back-to-top">
                <i className="fe fe-arrow-up" />
            </a>

        </>

    )
}

export default ManageVendors