import React, { useState, useEffect, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

import Img from '../assets/img/media/1.jpg'
import imgSrc from '../assets/img/media/1.jpg'




const GalleryList = () => {

    const [isBlurred, setIsBlurred] = useState(false);
    const galleryItemRef = useRef(null);
    const handleDeleteClick = (e) => {
        e.stopPropagation(); // Prevent triggering the blur toggle
        alert("Delete icon clicked!");
        // Add your delete logic here
    };

    const handlePageClick = (e) => {
        // If the click is outside the gallery item, remove the blur and icon
        if (galleryItemRef.current && !galleryItemRef.current.contains(e.target)) {
            setIsBlurred(false);
        }
    };

    useEffect(() => {
        // Add event listener to detect clicks outside the gallery item
        document.addEventListener("click", handlePageClick);
        return () => {
            // Clean up the event listener
            document.removeEventListener("click", handlePageClick);
        };
    }, []);
    return (
        <>

            <div className="page">
                <TopHeader />
                <Prince />

                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Gallery</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Pages</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Gallery
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
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Light Gallery</h6>
                                                <p className="text-muted card-sub-title">
                                                    A customizable, modular, responsive, lightbox gallery
                                                    plugin for jQuery.
                                                </p>
                                            </div>
                                            <ul id="lightgallery" className="list-unstyled row mb-0">
                                                <li
                                                    ref={galleryItemRef}
                                                    className="col-xs-6 col-sm-3 col-md-3 col-xl-3 mb-3"
                                                    data-responsive={imgSrc}
                                                    data-src={imgSrc}
                                                    data-sub-html="<h4>Gallery Image 1</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
                                                    onClick={() => setIsBlurred(!isBlurred)}
                                                    style={{
                                                        position: "relative",
                                                        cursor: "pointer",
                                                        overflow: "hidden",
                                                        borderRadius: "8px", // Rounded corners
                                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add some shadow
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            position: "relative",
                                                        }}
                                                    >
                                                        <img
                                                            className="img-responsive wd-100p"
                                                            src={imgSrc}
                                                            alt="Gallery Image"
                                                            style={{
                                                                width: "100%",
                                                                height: "auto",
                                                                transition: "filter 0.3s ease",
                                                                filter: isBlurred ? "blur(5px)" : "none",
                                                                borderRadius: "8px", // Match the container's corners
                                                            }}
                                                        />
                                                        {isBlurred && (
                                                            <div
                                                                onClick={handleDeleteClick}
                                                                style={{
                                                                    position: "absolute",
                                                                    top: "50%",
                                                                    left: "50%",
                                                                    transform: "translate(-50%, -50%)",
                                                                    fontSize: "20px",
                                                                    color: "white",
                                                                    background: "rgba(0, 0, 0, 0.7)",
                                                                    padding: "12px",
                                                                    borderRadius: "50%",
                                                                    zIndex: 1,
                                                                    cursor: "pointer",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add depth to the icon
                                                                }}
                                                            >
                                                                <FaTrash />
                                                            </div>
                                                        )}
                                                    </div>
                                                </li>
                                                <li
                                                    className="col-xs-6 col-sm-3 col-md-3 col-xl-3 mb-3"
                                                    data-responsive={Img}
                                                    data-src={Img}
                                                    data-sub-html="<h4>Gallery Image 2</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
                                                >
                                                    <a href="" className="wd-100p">
                                                        <img
                                                            className="img-responsive"
                                                            src={Img}
                                                            alt="Thumb-2"
                                                        />
                                                    </a>
                                                </li>
                                                <li
                                                    className="col-xs-6 col-sm-3 col-md-3 col-xl-3 mb-3"
                                                    data-responsive={Img}
                                                    data-src={Img}
                                                    data-sub-html="<h4>Gallery Image 2</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
                                                >
                                                    <a href="" className="wd-100p">
                                                        <img
                                                            className="img-responsive"
                                                            src={Img}
                                                            alt="Thumb-2"
                                                        />
                                                    </a>
                                                </li>
                                                <li
                                                    className="col-xs-6 col-sm-3 col-md-3 col-xl-3 mb-3"
                                                    data-responsive={Img}
                                                    data-src={Img}
                                                    data-sub-html="<h4>Gallery Image 2</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
                                                >
                                                    <a href="" className="wd-100p">
                                                        <img
                                                            className="img-responsive"
                                                            src={Img}
                                                            alt="Thumb-2"
                                                        />
                                                    </a>
                                                </li>




                                                <li
                                                    className="col-xs-6 col-sm-3 col-md-3 col-xl-3 mb-3"
                                                    data-responsive={Img}
                                                    data-src={Img}
                                                    data-sub-html="<h4>Gallery Image 2</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
                                                >
                                                    <a href="" className="wd-100p">
                                                        <img
                                                            className="img-responsive"
                                                            src={Img}
                                                            alt="Thumb-2"
                                                        />
                                                    </a>
                                                </li>
                                                <li
                                                    className="col-xs-6 col-sm-3 col-md-3 col-xl-3 mb-3"
                                                    data-responsive={Img}
                                                    data-src={Img}
                                                    data-sub-html="<h4>Gallery Image 2</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
                                                >
                                                    <a href="" className="wd-100p">
                                                        <img
                                                            className="img-responsive"
                                                            src={Img}
                                                            alt="Thumb-2"
                                                        />
                                                    </a>
                                                </li>
                                                <li
                                                    className="col-xs-6 col-sm-3 col-md-3 col-xl-3 mb-3"
                                                    data-responsive={Img}
                                                    data-src={Img}
                                                    data-sub-html="<h4>Gallery Image 2</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
                                                >
                                                    <a href="" className="wd-100p">
                                                        <img
                                                            className="img-responsive"
                                                            src={Img}
                                                            alt="Thumb-2"
                                                        />
                                                    </a>
                                                </li>
                                                <li
                                                    className="col-xs-6 col-sm-3 col-md-3 col-xl-3 mb-3"
                                                    data-responsive={Img}
                                                    data-src={Img}
                                                    data-sub-html="<h4>Gallery Image 2</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
                                                >
                                                    <a href="" className="wd-100p">
                                                        <img
                                                            className="img-responsive"
                                                            src={Img}
                                                            alt="Thumb-2"
                                                        />
                                                    </a>
                                                </li>
                                               

                                            </ul>
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
                                    Copyright © 2024 <a href="javascript:void(0)">AMRS</a>. Designed
                                    by <a href="http://webkype.com/">Webkype.com</a> All rights
                                    reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* End Page */}

        </>

    )
}

export default GalleryList