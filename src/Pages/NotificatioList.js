import React from 'react'
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
// import '../assets/plugins/select2/css/select2.min.css'
// import '../assets/css/style.css'





const NotificatioList = () => {
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
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Notification List
                                    </h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Pages</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Notification List
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
                            {/* Container */}
                            <div className="container" style={{ marginRight: '200px' }} >


                                
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
                                                        src="https://amrsapi.webkype.co/uploads/man404.jpg"
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
                                                        <p className="mb-0 text-muted tx-11">2 Hrs ago</p>
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
                                                        src="https://amrsapi.webkype.co/uploads/man404.jpg"
                                                    />
                                                </div>
                                                <div className="media-body ms-3 d-flex">
                                                    <div className="">
                                                        <p className="tx-14 text-dark mb-0 tx-semibold">
                                                            Robbie Ruder
                                                        </p>
                                                        <p className="mb-0 tx-13 text-muted">
                                                            Created New Template for Designing Department.
                                                        </p>
                                                    </div>
                                                    <div className="notify-time">
                                                        <p className="mb-0 text-muted tx-11">18:47</p>
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
                                                        src="https://amrsapi.webkype.co/uploads/man404.jpg"
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
                                                        <p className="mb-0 text-muted tx-11">06:43</p>
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
                                                        src="https://amrsapi.webkype.co/uploads/man404.jpg"
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
                                                        <p className="mb-0 text-muted tx-11">06:43</p>
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
                                                        src="https://amrsapi.webkype.co/uploads/man404.jpg"
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
                                                        <p className="mb-0 text-muted tx-11">06:43</p>
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
                                                        src="https://amrsapi.webkype.co/uploads/man404.jpg"
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
                                                        <p className="mb-0 text-muted tx-11">06:43</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                   
                                    
                                    
                                </ul>





                                <div className="text-center mb-4">
                                    <a
                                        href="javascript:void(0);"
                                        className="btn ripple btn-primary w-md"
                                        role="button"
                                    >
                                        Load more
                                    </a>
                                </div>
                            </div>
                            {/* End Container */}
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

export default NotificatioList