import React from 'react'
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

const PricingList = () => {
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
                                        Pricing Tables
                                    </h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Pages</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Pricing Table
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
                            <div className="row row-sm" 
                            style={{
                                marginLeft: '20px',
                                marginRight: '20px',
                                // Other styles can go here
                            }}>
                                <div className="col-xl-3 col-md-6 col-sm-12 col-lg-3">
                                    <div className="card custom-card pricingTable2">
                                        <div className="pricingTable2-header">
                                            <h3>Free</h3>
                                            <span>Lorem ipsum dolor</span>
                                        </div>
                                        <div className="pricing-plans  bg-primary">
                                            <span className="price-value1">
                                                <i className="fa fa-usd" />
                                                <span>0.00</span>
                                            </span>
                                            <span className="month">/month</span>
                                        </div>
                                        <div className="pricingContent2">
                                            <ul>
                                                <li>
                                                    <b>Free</b> Ad posting
                                                </li>
                                                <li>
                                                    <b>0</b> Featured Listings
                                                </li>
                                                <li>
                                                    <b>100%</b> Secure
                                                </li>
                                                <li>
                                                    <b>Custome</b> Reviews
                                                </li>
                                                <li>
                                                    <b>24/7</b> Support
                                                </li>
                                            </ul>
                                        </div>
                                        {/* CONTENT BOX*/}
                                        <div className="pricingTable2-sign-up">
                                            <a href="#" className="btn btn-block btn-primary">
                                                sign up
                                            </a>
                                        </div>
                                        {/* BUTTON BOX*/}
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-sm-12 col-lg-3">
                                    <div className="card custom-card pricingTable2">
                                        <div className="pricingTable2-header">
                                            <h3>Premium</h3>
                                            <span>Lorem ipsum dolor</span>
                                        </div>
                                        <div className="pricing-plans bg-danger">
                                            <span className="price-value1">
                                                <i className="fa fa-usd" />
                                                <span>19</span>
                                            </span>
                                            <span className="month">/month</span>
                                        </div>
                                        <div className="pricingContent2">
                                            <ul>
                                                <li>
                                                    <b>Featured</b> Ad posting
                                                </li>
                                                <li>
                                                    <b>20</b> Featured Listings
                                                </li>
                                                <li>
                                                    <b>100%</b> Secure
                                                </li>
                                                <li>
                                                    <b>Custome</b> Reviews
                                                </li>
                                                <li>
                                                    <b>24/7</b> Support
                                                </li>
                                            </ul>
                                        </div>
                                        {/* CONTENT BOX*/}
                                        <div className="pricingTable2-sign-up">
                                            <a href="#" className="btn btn-block btn-danger">
                                                sign up
                                            </a>
                                        </div>
                                        {/* BUTTON BOX*/}
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-sm-12 col-lg-3">
                                    <div className="card custom-card pricingTable2">
                                        <div className="pricingTable2-header">
                                            <h3>Silver</h3>
                                            <span>Lorem ipsum dolor</span>
                                        </div>
                                        <div className="pricing-plans bg-success">
                                            <span className="price-value1">
                                                <i className="fa fa-usd" />
                                                <span>67</span>
                                            </span>
                                            <span className="month">/month</span>
                                        </div>
                                        <div className="pricingContent2">
                                            <ul>
                                                <li>
                                                    <b>Featured</b> Ad posting
                                                </li>
                                                <li>
                                                    <b>30</b> Featured Listings
                                                </li>
                                                <li>
                                                    <b>100%</b> Secure
                                                </li>
                                                <li>
                                                    <b>Custome</b> Reviews
                                                </li>
                                                <li>
                                                    <b>24/7</b> Support
                                                </li>
                                            </ul>
                                        </div>
                                        {/* CONTENT BOX*/}
                                        <div className="pricingTable2-sign-up">
                                            <a href="#" className="btn btn-block btn-success">
                                                sign up
                                            </a>
                                        </div>
                                        {/* BUTTON BOX*/}
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-sm-12 col-lg-3">
                                    <div className="card custom-card pricingTable2 info">
                                        <div className="pricingTable2-header">
                                            <h3>Gold</h3>
                                            <span>Lorem ipsum dolor</span>
                                        </div>
                                        <div className="pricing-plans">
                                            <span className="price-value1">
                                                <i className="fa fa-usd" />
                                                <span>78</span>
                                            </span>
                                            <span className="month">/month</span>
                                        </div>
                                        <div className="pricingContent2">
                                            <ul>
                                                <li>
                                                    <b>Featured</b> Ad posting
                                                </li>
                                                <li>
                                                    <b>40</b> Featured Listings
                                                </li>
                                                <li>
                                                    <b>100%</b> Secure
                                                </li>
                                                <li>
                                                    <b>Custome</b> Reviews
                                                </li>
                                                <li>
                                                    <b>24/7</b> Support
                                                </li>
                                            </ul>
                                        </div>
                                        {/* CONTENT BOX*/}
                                        <div className="pricingTable2-sign-up">
                                            <a href="#" className="btn btn-block btn-info">
                                                sign up
                                            </a>
                                        </div>
                                        {/* BUTTON BOX*/}
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                            {/* Row */}
                            <div className="row row-sm"
                            style={{
                                marginLeft: '20px',
                                marginRight: '20px',
                                // Other styles can go here
                            }}>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="card card-pricing custom-card">
                                        <div className="bg-transparent border-0">
                                            <div className="pricing-title">Personal</div>
                                            <h1
                                                className="h1 font-weight-normal text-center mb-0"
                                                data-pricing-value={30}
                                            >
                                                $<span className="price">49</span>
                                                <span className="h6 text-muted ms-2">/MO</span>
                                            </h1>
                                        </div>
                                        <div className="card-body pt-0 text-center">
                                            <ul className="list-unstyled mb-4">
                                                <li>10 Free Domain Name</li>
                                                <li>15 One-Click Apps</li>
                                                <li>10 Databases</li>
                                                <li>Money BackGuarntee</li>
                                                <li>24/7 support</li>
                                            </ul>
                                            <a href="#" className="btn ripple btn-light mb-2">
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="card card-pricing2 custom-card">
                                        <div className="bg-transparent border-0">
                                            <div className="pricing-title text-primary">Premium</div>
                                            <h1
                                                className="h1 font-weight-normal text-center mb-0"
                                                data-pricing-value={30}
                                            >
                                                $<span className="price">59</span>
                                                <span className="h6 text-muted ms-2">/MO</span>
                                            </h1>
                                        </div>
                                        <div className="card-body pt-0 text-center">
                                            <ul className="list-unstyled mb-4">
                                                <li>12 Free Domain Name</li>
                                                <li>20 One-Click Apps</li>
                                                <li>15 Databases</li>
                                                <li>Money BackGuarntee</li>
                                                <li>24/7 support</li>
                                            </ul>
                                            <a href="#" className="btn ripple btn-primary mb-2">
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="card card-pricing3 custom-card">
                                        <div className="bg-transparent border-0">
                                            <div className="pricing-title">Corporate</div>
                                            <h1
                                                className="h1 font-weight-normal  mb-0"
                                                data-pricing-value={30}
                                            >
                                                $<span className="price">69</span>
                                                <span className="h6 text-muted ms-2">/MO</span>
                                            </h1>
                                        </div>
                                        <div className="card-body pt-0 text-center">
                                            <ul className="list-unstyled mb-4">
                                                <li>15 Free Domain Name</li>
                                                <li>25 One-Click Apps</li>
                                                <li>20 Databases</li>
                                                <li>Money BackGuarntee</li>
                                                <li>24/7 support</li>
                                            </ul>
                                            <a href="#" className="btn ripple btn-light mb-2">
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="card card-pricing4 custom-card">
                                        <div className="bg-transparent border-0">
                                            <div className="pricing-title">Business</div>
                                            <h1
                                                className="h1 font-weight-normal mb-0"
                                                data-pricing-value={30}
                                            >
                                                $<span className="price">79</span>
                                                <span className="h6 text-muted ms-2">/MO</span>
                                            </h1>
                                        </div>
                                        <div className="card-body pt-0 text-center">
                                            <ul className="list-unstyled mb-4">
                                                <li>20 Free Domain Name</li>
                                                <li>30 One-Click Apps</li>
                                                <li>15 Databases</li>
                                                <li>Money BackGuarntee</li>
                                                <li>24/7 support</li>
                                            </ul>
                                            <a href="#" className="btn ripple btn-light mb-2">
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                            {/* Row */}
                            <div className="row row-sm"
                            style={{
                                marginLeft: '20px',
                                marginRight: '20px',
                                // Other styles can go here
                            }}>
                                <div className="col-sm-12 col-md-4">
                                    <div className="card custom-card card-pricing">
                                        <div className="bg-transparent border-0">
                                            <div className="price-img text-primary price-1 text-center">
                                                <i className="fas fa-car bg-primary-transparent" />
                                            </div>
                                            <div className="pricing-title">Basic</div>
                                            <h1
                                                className="h1 font-weight-normal mb-0"
                                                data-pricing-value={30}
                                            >
                                                $<span className="price">22</span>
                                            </h1>
                                        </div>
                                        <div className="card-body pt-0 text-center">
                                            <ul className="list-unstyled mb-4">
                                                <li>10GB Space</li>
                                                <li>3 Domain Names</li>
                                                <li>20 Email Address</li>
                                                <li>No Live Support</li>
                                            </ul>
                                            <a href="#" className="btn ripple btn-outline-primary mb-3">
                                                Purchase Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="card custom-card card-pricing">
                                        <div className="bg-transparent border-0">
                                            <div className="price-img text-secondary price-1 text-center">
                                                <i className="fas fa-plane bg-pink-transparent" />
                                            </div>
                                            <div className="pricing-title">Standard</div>
                                            <h1
                                                className="h1 font-weight-normal mb-0"
                                                data-pricing-value={30}
                                            >
                                                $<span className="price">55</span>
                                            </h1>
                                        </div>
                                        <div className="card-body pt-0 text-center">
                                            <ul className="list-unstyled mb-4">
                                                <li>10GB Space</li>
                                                <li>3 Domain Names</li>
                                                <li>20 Email Address</li>
                                                <li>No Live Support</li>
                                            </ul>
                                            <a href="#" className="btn ripple btn-outline-secondary mb-3">
                                                Purchase Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="card custom-card card-pricing">
                                        <div className="bg-transparent border-0">
                                            <div className="price-img text-info price-1 text-center">
                                                <i className="fas fa-rocket bg-info-transparent" />
                                            </div>
                                            <div className="pricing-title">Standard</div>
                                            <h1
                                                className="h1 font-weight-normal mb-0"
                                                data-pricing-value={30}
                                            >
                                                $<span className="price">99</span>
                                            </h1>
                                        </div>
                                        <div className="card-body pt-0 text-center">
                                            <ul className="list-unstyled mb-4">
                                                <li>Unlimited Space</li>
                                                <li>50 Domain Names</li>
                                                <li>Unlimited Email Address</li>
                                                <li>Live Support</li>
                                            </ul>
                                            <a href="#" className="btn ripple btn-outline-info mb-3">
                                                Purchase Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                            {/* Row */}
                            <div className="row row-sm" 
                            style={{
                                marginLeft: '20px',
                                marginRight: '20px',
                                // Other styles can go here
                            }}>
                                <div className="col-xl-12 col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">
                                                    Tabs Pricing Tables
                                                </h6>
                                                <p className="text-muted">
                                                    Below is the Using tabs year &amp; month pricing Tables
                                                    example
                                                </p>
                                            </div>
                                            <div className="pricing-tabs">
                                                <div className=" text-center">
                                                    <div className="pri-tabs-heading">
                                                        <ul className="nav nav-price">
                                                            <li>
                                                                <a
                                                                    className="active show"
                                                                    data-bs-toggle="tab"
                                                                    href="#year"
                                                                >
                                                                    Year
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="" data-bs-toggle="tab" href="#month">
                                                                    Month
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-content">
                                                        <div className="tab-pane  active show" id="year">
                                                            <div className="row row-sm">
                                                                <div className="col-sm-6 col-lg-3">
                                                                    <div className="card overflow-hidden">
                                                                        <div className="text-center card-pricing pricing1">
                                                                            <div className="p-2 text-white bg-primary fs-20">
                                                                                Free
                                                                            </div>
                                                                            <div className="p-3 font-weight-normal mb-0">
                                                                                <span className="price">$0</span>
                                                                            </div>
                                                                            <div className="card-body text-center pt-0">
                                                                                <ul className="list-unstyled mb-0">
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>2 </strong> FreeDomain Name
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>0</strong> One-Click Apps
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>0</strong> Databases
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>Money</strong> BackGuarntee
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>24/7</strong> Support
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="card-footer text-center">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn ripple btn-primary btn-block"
                                                                                >
                                                                                    Buy Now
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                                                                    <div className="card overflow-hidden">
                                                                        <div className="text-center card-pricing pricing1">
                                                                            <div className="p-2 text-white bg-secondary fs-20">
                                                                                Personal
                                                                            </div>
                                                                            <div className="p-3 font-weight-normal mb-0">
                                                                                <span className="price">$99</span>
                                                                            </div>
                                                                            <div className="card-body text-center pt-0">
                                                                                <ul className="list-unstyled mb-0">
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>2 </strong> FreeDomain Name
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>2</strong> One-Click Apps
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>1</strong> Databases
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>Money</strong> BackGuarntee
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>24/7</strong> Support
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="card-footer text-center">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn ripple btn-secondary btn-block"
                                                                                >
                                                                                    Buy Now
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                                                                    <div className="card overflow-hidden">
                                                                        <div className="text-center card-pricing pricing1">
                                                                            <div className="p-2 text-white bg-info fs-20">
                                                                                Premium
                                                                            </div>
                                                                            <div className="p-3 font-weight-normal mb-0">
                                                                                <span className="price">$199</span>
                                                                            </div>
                                                                            <div className="card-body text-center pt-0">
                                                                                <ul className="list-unstyled mb-0">
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>3 </strong> FreeDomain Name
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>5</strong> One-Click Apps
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>3</strong> Databases
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>Money</strong> BackGuarntee
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>24/7</strong> Support
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="card-footer text-center">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn ripple btn-info btn-block"
                                                                                >
                                                                                    Buy Now
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                                                                    <div className="card overflow-hidden">
                                                                        <div className="text-center card-pricing pricing1">
                                                                            <div className="p-2 text-white bg-success fs-20">
                                                                                Enterprise
                                                                            </div>
                                                                            <div className="p-3 font-weight-normal mb-0">
                                                                                <span className="price">$299</span>
                                                                            </div>
                                                                            <div className="card-body text-center pt-0">
                                                                                <ul className="list-unstyled mb-0">
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>10 </strong> FreeDomain Name
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>10</strong> One-Click Apps
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>8</strong> Databases
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>Money</strong> BackGuarntee
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>24/7</strong> Support
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="card-footer text-center">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn ripple btn-success btn-block"
                                                                                >
                                                                                    Buy Now
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane" id="month">
                                                            <div className="row row-sm">
                                                                <div className="col-sm-6 col-lg-3">
                                                                    <div className="card overflow-hidden">
                                                                        <div className="text-center card-pricing pricing1">
                                                                            <div className="p-2 text-white bg-primary fs-20">
                                                                                Free
                                                                            </div>
                                                                            <div className="p-3 font-weight-normal mb-0">
                                                                                <span className="price">$0</span>
                                                                            </div>
                                                                            <div className="card-body text-center pt-0">
                                                                                <ul className="list-unstyled mb-0">
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>2 </strong> FreeDomain Name
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>0</strong> One-Click Apps
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>0</strong> Databases
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>Money</strong> BackGuarntee
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>24/7</strong> Support
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="card-footer text-center">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn ripple btn-primary btn-block"
                                                                                >
                                                                                    Buy Now
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                                                                    <div className="card overflow-hidden">
                                                                        <div className="text-center card-pricing pricing1">
                                                                            <div className="p-2 text-white bg-secondary fs-20">
                                                                                Personal
                                                                            </div>
                                                                            <div className="p-3 font-weight-normal mb-0">
                                                                                <span className="price">$15</span>
                                                                            </div>
                                                                            <div className="card-body text-center pt-0">
                                                                                <ul className="list-unstyled mb-0">
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>2 </strong> FreeDomain Name
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>2</strong> One-Click Apps
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>1</strong> Databases
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>Money</strong> BackGuarntee
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>24/7</strong> Support
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="card-footer text-center">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn ripple btn-secondary btn-block"
                                                                                >
                                                                                    Buy Now
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                                                                    <div className="card overflow-hidden">
                                                                        <div className="text-center card-pricing pricing1">
                                                                            <div className="p-2 text-white bg-info fs-20">
                                                                                Personal
                                                                            </div>
                                                                            <div className="p-3 font-weight-normal mb-0">
                                                                                <span className="price">$25</span>
                                                                            </div>
                                                                            <div className="card-body text-center pt-0">
                                                                                <ul className="list-unstyled mb-0">
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>3 </strong> FreeDomain Name
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>5</strong> One-Click Apps
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>3</strong> Databases
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>Money</strong> BackGuarntee
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>24/7</strong> Support
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="card-footer text-center">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn ripple btn-info btn-block"
                                                                                >
                                                                                    Buy Now
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                                                                    <div className="card overflow-hidden">
                                                                        <div className="text-center card-pricing pricing1">
                                                                            <div className="p-2 text-white bg-success fs-20">
                                                                                Enterprise
                                                                            </div>
                                                                            <div className="p-3 font-weight-normal mb-0">
                                                                                <span className="price">$35</span>
                                                                            </div>
                                                                            <div className="card-body text-center pt-0">
                                                                                <ul className="list-unstyled mb-0">
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>10 </strong> FreeDomain Name
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>10</strong> One-Click Apps
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>8</strong> Databases
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-x me-2 text-danger" />
                                                                                        <strong>Money</strong> BackGuarntee
                                                                                    </li>
                                                                                    <li>
                                                                                        <i className="fe fe-check me-2 text-success" />
                                                                                        <strong>24/7</strong> Support
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="card-footer text-center">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn ripple btn-success btn-block"
                                                                                >
                                                                                    Buy Now
                                                                                </a>
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

        </>

    )
}

export default PricingList