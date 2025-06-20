import React, { useState, useRef, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import Img from '../assets/img/files/word.png'


const FileManager = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Create ref for dropdown menu

    // Toggle the dropdown visibility
    const toggleDropdown = (e) => {
        e.preventDefault();  // Prevent default anchor behavior
        setIsOpen(!isOpen);
    };

    // Close the dropdown if clicked outside
    const handleClickOutside = (e) => {
        // Check if the click was outside the dropdown
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);  // Close the dropdown if clicked outside
        }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener("click", handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);




    return (
        <>

            {/* Page */}
            <div className="page">

                <TopHeader />
                <Prince />

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">File Manager</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Apps</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            File Manager
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
                            {/* row */}
                            <div className="row row-sm">
                                <div className="col-lg-4 col-xl-3">
                                    <div className="card custom-card">
                                        <div className="card-body text-center">
                                            <a
                                                className="btn ripple btn-primary btn-block"
                                                data-bs-target="#modaldemo6"
                                                data-bs-toggle="modal"
                                                href=""
                                            >
                                                Add New File
                                            </a>
                                        </div>
                                        <div className="card-body tab-list-items py-3">
                                            <div className="main-content-left main-content-left-mail">
                                                <div className="main-mail-menu">
                                                    <nav className="nav main-nav-column mg-b-20">
                                                        <a className="nav-link active" href="">
                                                            <i className="fe fe-video" /> Video <span>30 MB</span>
                                                        </a>
                                                        <a className="nav-link" href="">
                                                            <i className="fe fe-image" /> Images{" "}
                                                            <span>21 MB</span>
                                                        </a>
                                                        <a className="nav-link" href="">
                                                            <i className="fe fe-music" /> Music <span>14 MB</span>
                                                        </a>
                                                        <a className="nav-link" href="">
                                                            <i className="fe fe-download" />
                                                            Download <span>8 MB</span>
                                                        </a>
                                                        <a className="nav-link" href="">
                                                            <i className="fe fe-file-text" /> Docs{" "}
                                                            <span>16 MB</span>
                                                        </a>
                                                        <a className="nav-link" href="">
                                                            <i className="fe fe-grid" /> More <span>19 MB</span>
                                                        </a>
                                                    </nav>
                                                </div>
                                                {/* main-mail-menu */}
                                            </div>
                                        </div>
                                        <div className="card-body py-3">
                                            <div className="">
                                                <div className="main-mail-menu">
                                                    <label className="main-content-label main-content-label-sm">
                                                        Label
                                                    </label>
                                                    <nav className="nav main-nav-column">
                                                        <a className="nav-link" href="#">
                                                            <i className="fe fe-folder fe fe-folder tx-10 bg-primary p-2 rounded-5" />{" "}
                                                            Social
                                                        </a>
                                                        <a className="nav-link" href="#">
                                                            <i className="fe fe-folder fe fe-folder tx-10 bg-info p-2 rounded-5" />{" "}
                                                            Promotions
                                                        </a>
                                                        <a className="nav-link" href="#">
                                                            <i className="fe fe-folder fe fe-folder tx-10 bg-success p-2 rounded-5" />{" "}
                                                            Updates
                                                        </a>
                                                        <a className="nav-link" href="#">
                                                            <i className="fe fe-folder fe fe-folder tx-10 bg-danger p-2 rounded-5" />{" "}
                                                            Settings
                                                        </a>
                                                        <a className="nav-link" href="#">
                                                            <i className="fe fe-folder fe fe-folder tx-10 bg-secondary p-2 rounded-5" />{" "}
                                                            Google Drive
                                                        </a>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xl-9">
                                    <div className="text-dark mb-2 ms-1 tx-20 font-weight-semibold">
                                        All Folders
                                    </div>
                                    {/* Row */}
                                    <div className="text-muted mb-2 tx-16">Recent Files</div>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                            <div className="card custom-card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="media align-items-center pos-relative">
                                                            <span className="tx-16 lh--7 my-auto">
                                                                <i className="bg-primary-light p-2 rounded-50 fe fe-image tx-18 me-2" />
                                                            </span>
                                                            <div className="media-body ms-3">
                                                                Image
                                                                <p className="tx-11 mg-b-0 tx-gray-500">
                                                                    Last Opened 32 mins ago
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="float-end ms-auto pos-absolute r-5 t-15 ">
                                                            <a
                                                                href="#"
                                                                className="option-dots"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="fe fe-more-vertical" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-start">
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-edit me-2" />
                                                                    open
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-download me-2" /> Download
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-share me-2" /> Share
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-trash me-2" /> Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                            <div className="card custom-card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="media align-items-center pos-relative">
                                                            <span className="tx-16 lh--7 my-auto">
                                                                <i className="bg-primary-light p-2 rounded-50 fe fe fe-smartphone tx-18 me-2" />
                                                            </span>
                                                            <div className="media-body ms-3">
                                                                APK
                                                                <p className="tx-11 mg-b-0 tx-gray-500">
                                                                    Last Opened 1 hrs ago
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="float-end ms-auto pos-absolute r-5 t-15 ">
                                                            <a
                                                                href="#"
                                                                className="option-dots"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="fe fe-more-vertical" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-start">
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-edit me-2" />
                                                                    open
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-download me-2" /> Download
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-share me-2" /> Share
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-trash me-2" /> Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                            <div className="card custom-card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="media align-items-center pos-relative">
                                                            <span className="tx-16 lh--7 my-auto">
                                                                <i className="bg-primary-light p-2 rounded-50 fe fe-video tx-18 me-2" />
                                                            </span>
                                                            <div className="media-body ms-3">
                                                                Video
                                                                <p className="tx-11 mg-b-0 tx-gray-500">
                                                                    Last Opened 28 min ago
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="float-end ms-auto pos-absolute r-5 t-15 ">
                                                            <a
                                                                href="#"
                                                                className="option-dots"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="fe fe-more-vertical" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-start">
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-edit me-2" />
                                                                    open
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-download me-2" /> Download
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-share me-2" /> Share
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-trash me-2" /> Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                            <div className="card custom-card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="media align-items-center pos-relative">
                                                            <span className="tx-16 lh--7 my-auto">
                                                                <i className="bg-primary-light p-2 rounded-50 fe fe-file-text  tx-18 me-2" />
                                                            </span>
                                                            <div className="media-body ms-3">
                                                                Documents
                                                                <p className="tx-11 mg-b-0 tx-gray-500">
                                                                    Last Opened 1 hrs ago
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="float-end ms-auto pos-absolute r-5 t-15 ">
                                                            <a
                                                                href="#"
                                                                className="option-dots"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="fe fe-more-vertical" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-start">
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-edit me-2" />
                                                                    open
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-download me-2" /> Download
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-share me-2" /> Share
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-trash me-2" /> Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                            <div className="card custom-card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="media align-items-center pos-relative">
                                                            <span className="tx-16 lh--7 my-auto">
                                                                <i className="bg-primary-light p-2 rounded-50 fe fe-music  tx-18 me-2" />
                                                            </span>
                                                            <div className="media-body ms-3">
                                                                Music
                                                                <p className="tx-11 mg-b-0 tx-gray-500">
                                                                    Last Opened 2 hrs ago
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="float-end ms-auto pos-absolute r-5 t-15 ">
                                                            <a
                                                                href="#"
                                                                className="option-dots"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="fe fe-more-vertical" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-start">
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-edit me-2" />
                                                                    open
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-download me-2" /> Download
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-share me-2" /> Share
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-trash me-2" /> Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                            <div className="card custom-card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="media align-items-center pos-relative">
                                                            <span className="tx-16 lh--7 my-auto">
                                                                <i className="bg-primary-light p-2 rounded-50 fe fe-file-text  tx-18 me-2" />
                                                            </span>
                                                            <div className="media-body ms-3">
                                                                PDF
                                                                <p className="tx-11 mg-b-0 tx-gray-500">
                                                                    Last Opened 1 hrs ago
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="float-end ms-auto pos-absolute r-5 t-15 ">
                                                            <a
                                                                href="#"
                                                                className="option-dots"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="fe fe-more-vertical" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-start">
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-edit me-2" />
                                                                    open
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-download me-2" /> Download
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-share me-2" /> Share
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-trash me-2" /> Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                            <div className="card custom-card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="media align-items-center pos-relative">
                                                            <span className="tx-16 lh--7 my-auto">
                                                                <i className="bg-primary-light p-2 rounded-50 fe fe-image tx-18 me-2" />
                                                            </span>
                                                            <div className="media-body ms-3">
                                                                Image
                                                                <p className="tx-11 mg-b-0 tx-gray-500">
                                                                    Last Opened 32 mins ago
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="float-end ms-auto pos-absolute r-5 t-15 ">
                                                            <a
                                                                href="#"
                                                                className="option-dots"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="fe fe-more-vertical" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-start">
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-edit me-2" />
                                                                    open
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-download me-2" /> Download
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-share me-2" /> Share
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-trash me-2" /> Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                            <div className="card custom-card">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="media align-items-center pos-relative">
                                                            <span className="tx-16 lh--7 my-auto">
                                                                <i className="bg-primary-light p-2 rounded-50 fe fe fe-smartphone tx-18 me-2" />
                                                            </span>
                                                            <div className="media-body ms-3">
                                                                APK
                                                                <p className="tx-11 mg-b-0 tx-gray-500">
                                                                    Last Opened 1 hrs ago
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="float-end ms-auto pos-absolute r-5 t-15 ">
                                                            <a
                                                                href="#"
                                                                className="option-dots"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="fe fe-more-vertical" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-start">
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-edit me-2" />
                                                                    open
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-download me-2" /> Download
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-share me-2" /> Share
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-trash me-2" /> Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-muted mb-2 tx-16">Folders and Files</div>
                                    <div className="row">
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="card custom-card border p-0 shadow-none">
                                                <div className="d-flex align-items-center px-4 pt-2">
                                                    <label className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            name="example-checkbox2"
                                                            defaultValue="option2"
                                                        />
                                                        <span className="custom-control-label" />
                                                    </label>
                                                    <div className="float-end ms-auto" style={{ position: 'relative' }}>
                                                        {/* Toggle Dropdown */}
                                                        <a
                                                            href="#"
                                                            className="option-dots"
                                                            onClick={toggleDropdown}
                                                            aria-haspopup="true"
                                                            aria-expanded={isOpen}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <i className="fe fe-more-vertical" />
                                                        </a>

                                                        {/* Dropdown Menu */}
                                                        {isOpen && (
                                                            <div className="dropdown-menu dropdown-menu-start show" style={{
                                                                position: 'absolute',
                                                                top: '100%',  // Position below the icon
                                                                left: '0',    // Align it to the left of the parent
                                                                zIndex: 1000, // Ensure the dropdown is on top of other elements
                                                            }}>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-edit me-2" /> Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-share me-2" /> Share
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-download me-2" /> Download
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fe fe-trash me-2" /> Delete
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 text-center">
                                                    <a href="file-manager-list.html" className="open-file">
                                                        <div className="file-manger-icon">
                                                            <img
                                                                src={Img}
                                                                alt="img"
                                                                className="br-7"
                                                            />
                                                        </div>
                                                        <h6 className="mb-1 font-weight-semibold mt-0">
                                                            videos
                                                        </h6>
                                                        <span className="text-muted">4.23gb</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="card custom-card border p-0 shadow-none">
                                                <div className="d-flex align-items-center px-4 pt-2">
                                                    <label className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            name="example-checkbox2"
                                                            defaultValue="option2"
                                                        />
                                                        <span className="custom-control-label" />
                                                    </label>
                                                    <div className="float-end ms-auto">
                                                        <a
                                                            href="#"
                                                            className="option-dots"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="fe fe-more-vertical" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-start">
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-edit me-2" /> Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-share me-2" /> Share
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-download me-2" /> Download
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-trash me-2" /> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 text-center">
                                                    <a href="#" className="open-file">
                                                        <div className="file-manger-icon">
                                                            <img
                                                                src={Img}
                                                                alt="img"
                                                                className="br-7"
                                                            />
                                                        </div>
                                                        <h6 className="mb-1 font-weight-semibold mt-0">
                                                            document.pdf
                                                        </h6>
                                                        <span className="text-muted">23kb</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="card custom-card border p-0 shadow-none">
                                                <div className="d-flex align-items-center px-4 pt-2">
                                                    <label className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            name="example-checkbox2"
                                                            defaultValue="option2"
                                                        />
                                                        <span className="custom-control-label" />
                                                    </label>
                                                    <div className="float-end ms-auto">
                                                        <a
                                                            href="#"
                                                            className="option-dots"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="fe fe-more-vertical" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-start">
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-edit me-2" /> Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-share me-2" /> Share
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-download me-2" /> Download
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-trash me-2" /> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 text-center">
                                                    <a href="#" className="open-file">
                                                        <div className="file-manger-icon">
                                                            <img
                                                                src={Img}
                                                                alt="img"
                                                                className="rounded-10"
                                                            />
                                                        </div>
                                                        <h6 className="mb-1 font-weight-semibold mt-1">
                                                            Images
                                                        </h6>
                                                        <span className="text-muted">23kb</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="card custom-card border p-0 shadow-none">
                                                <div className="d-flex align-items-center px-4 pt-2">
                                                    <label className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            name="example-checkbox2"
                                                            defaultValue="option2"
                                                        />
                                                        <span className="custom-control-label" />
                                                    </label>
                                                    <div className="float-end ms-auto">
                                                        <a
                                                            href="#"
                                                            className="option-dots"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="fe fe-more-vertical" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-start">
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-edit me-2" /> Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-share me-2" /> Share
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-download me-2" /> Download
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-trash me-2" /> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 text-center">
                                                    <a href="file-manager-list.html" className="open-file">
                                                        <div className="file-manger-icon">
                                                            <img
                                                                src={Img}
                                                                alt="img"
                                                                className="br-7"
                                                            />
                                                        </div>
                                                        <h6 className="mb-1 font-weight-semibold mt-0">
                                                            Images
                                                        </h6>
                                                        <span className="text-muted">1.23gb</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="card custom-card border p-0 shadow-none">
                                                <div className="d-flex align-items-center px-4 pt-2">
                                                    <label className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            name="example-checkbox2"
                                                            defaultValue="option2"
                                                        />
                                                        <span className="custom-control-label" />
                                                    </label>
                                                    <div className="float-end ms-auto">
                                                        <a
                                                            href="#"
                                                            className="option-dots"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="fe fe-more-vertical" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-start">
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-edit me-2" /> Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-share me-2" /> Share
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-download me-2" /> Download
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-trash me-2" /> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 text-center">
                                                    <a href="#" className="open-file">
                                                        <div className="file-manger-icon">
                                                            <img
                                                                src={Img}
                                                                alt="img"
                                                                className="rounded-10"
                                                            />
                                                        </div>
                                                        <h6 className="mb-1 font-weight-semibold mt-1">
                                                            Images
                                                        </h6>
                                                        <span className="text-muted">23kb</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="card custom-card border p-0 shadow-none">
                                                <div className="d-flex align-items-center px-4 pt-2">
                                                    <label className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            name="example-checkbox2"
                                                            defaultValue="option2"
                                                        />
                                                        <span className="custom-control-label" />
                                                    </label>
                                                    <div className="float-end ms-auto">
                                                        <a
                                                            href="#"
                                                            className="option-dots"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="fe fe-more-vertical" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-start">
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-edit me-2" /> Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-share me-2" /> Share
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-download me-2" /> Download
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-trash me-2" /> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 text-center">
                                                    <a href="#" className="open-file">
                                                        <div className="file-manger-icon">
                                                            <img
                                                                src={Img}
                                                                alt="img"
                                                                className="br-7"
                                                            />
                                                        </div>
                                                        <h6 className="mb-1 font-weight-semibold mt-0">
                                                            document.pdf
                                                        </h6>
                                                        <span className="text-muted">23kb</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="card custom-card border p-0 shadow-none">
                                                <div className="d-flex align-items-center px-4 pt-2">
                                                    <label className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            name="example-checkbox2"
                                                            defaultValue="option2"
                                                        />
                                                        <span className="custom-control-label" />
                                                    </label>
                                                    <div className="float-end ms-auto">
                                                        <a
                                                            href="#"
                                                            className="option-dots"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="fe fe-more-vertical" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-start">
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-edit me-2" /> Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-share me-2" /> Share
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-download me-2" /> Download
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-trash me-2" /> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 text-center">
                                                    <a href="file-manager-list.html" className="open-file">
                                                        <div className="file-manger-icon">
                                                            <img
                                                                src={Img}
                                                                alt="img"
                                                                className="br-7"
                                                            />
                                                        </div>
                                                        <h6 className="mb-1 font-weight-semibold mt-0">
                                                            Downloads
                                                        </h6>
                                                        <span className="text-muted">453kb</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-4 col-sm-6">
                                            <div className="card custom-card border p-0 shadow-none">
                                                <div className="d-flex align-items-center px-4 pt-2">
                                                    <label className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            name="example-checkbox2"
                                                            defaultValue="option2"
                                                        />
                                                        <span className="custom-control-label" />
                                                    </label>
                                                    <div className="float-end ms-auto">
                                                        <a
                                                            href="#"
                                                            className="option-dots"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="fe fe-more-vertical" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-start">
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-edit me-2" /> Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-share me-2" /> Share
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-download me-2" /> Download
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fe fe-trash me-2" /> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 text-center">
                                                    <a href="#" className="open-file">
                                                        <div className="file-manger-icon">
                                                            <img
                                                                src={Img}
                                                                alt="img"
                                                                className="br-7"
                                                            />
                                                        </div>
                                                        <h6 className="mb-1 font-weight-semibold mt-0">
                                                            Word document
                                                        </h6>
                                                        <span className="text-muted">23kb</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="pagination justify-content-end">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#">
                                                    Prev
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    4
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    5
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    Next
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    {/* End Row */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Content*/}
                </div>
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

                <div className="modal" id="modaldemo6">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content modal-content-demo rounded-5">
                            <div className="modal-header">
                                <h6 className="modal-title">Add file</h6>
                                <button
                                    aria-label="Close"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    type="button"
                                />
                            </div>
                            <div className="row row-sm">
                                <div className="col-lg-12 col-md-12">
                                    <div className="">
                                        <div className="card-body">
                                            <div>
                                                <h6 className=" mb-2">File Upload</h6>
                                            </div>
                                            <div>
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
                            <div className="modal-footer">
                                <button className="btn ripple btn-primary" type="button">
                                    Add
                                </button>
                                <button
                                    className="btn ripple btn-secondary"
                                    data-bs-dismiss="modal"
                                    type="button"
                                >
                                    cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End modal */}
            </div>

        </>

    )
}

export default FileManager