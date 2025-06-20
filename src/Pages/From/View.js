import React from 'react'
import '../../../src/assets/css/style.css'
import '../From/create.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Img from '../../../src/assets/img/brand/logo.png'

const View = () => {
  return (
    <>
  

    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n.responsive-logo img{display:none !important;}\n    .table-invoice tbody>tr>th:first-child, .table-invoice tbody>tr>td:first-child{color:#1d212f !important}\n    .table thead th, .table thead td, .table tbody td{font-size:12px !important;}\n    .table-light {  background-color: #f5f5f5 !important}\n    .table-light th, .table-light td, .table-light thead th, .table-light tbody+tbody { border-color: #e8e8f7 !important;}\n    .mg-b-100{margin-bottom:100px;}\n    .form-control{height:30px !important;padding: 7px;}\n"
      }}
    />
    {/* Loader */}
   
    {/* End Loader */}
    {/* Page */}
    <div className="page">
      {/* Main Content*/}
      <div className="main-content  pt-0">
        <div className="main-container container-fluid">
          <div className="inner-body">
            {/* Row */}
            <div className="row row-sm mt-5">
              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="card custom-card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-invoice table-borderless">
                        <tbody>
                          <tr>
                            <td width="10%">
                              <h5>PRE-PROFORMA CONTRACT </h5>
                              <h6>
                                <b>Contract Number :</b> PWIP/PPC/010
                              </h6>
                              <h6>
                                <b>Date :</b> 03 / 11/ 2023
                              </h6>
                              <br />
                              <br />
                              <br />
                              <h5>PWIP FOODTECH PVT LTD </h5>
                              <h6>
                                #No. 78/9, Vaishnavi Signature, Outer
                                <br />
                                Ring Road, Bellandur Village
                                <br />
                                Varthur Hobli, Bengaluru, Bengaluru
                                <br />
                                Urban, Karnataka, 560103
                              </h6>
                            </td>
                            <td
                              width="30%"
                              align="right"
                              style={{ verticalAlign: "top" }}
                            >
                              <img
                                src={Img}
                                style={{ width: 100 }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table table-invoice table-borderless">
                        <tbody>
                          <tr>
                            <td
                              align="left"
                              style={{
                                border: "0 !important",
                                verticalAlign: "top"
                              }}
                            >
                              <h5>NOTIFY PARTY 1: BUYER</h5>
                              <p>
                                PT REKSI PERDANA JAYA
                                <br />
                                JALAN PROF, DR. SRI SOIEDEWI MS SH,
                                <br />
                                BLOK A, NO. 10 JAMBI INDONESIA.
                                <br />
                                Contact Person: Mr Hadi
                                <br />
                                Email: Leonardoalvin130201@gmail.com
                              </p>
                            </td>
                            <td
                              align="left"
                              style={{
                                border: "0 !important",
                                verticalAlign: "top"
                              }}
                            >
                              <h5>NOTIFY PARTY 2</h5>
                              <p>
                                Virago Agri Pte Ltd
                                <br />
                                100 Peck Seah Street,
                                <br />
                                #08-14 PS100
                                <br />
                                Singapore 079333
                              </p>
                            </td>
                            <td
                              align="left"
                              style={{
                                border: "0 !important",
                                verticalAlign: "top"
                              }}
                            >
                              <h5>CONSIGNEE</h5>
                              <p>
                                Great Neptune Enterprise Sdn Bhd
                                <br />
                                No.49-03 Jalan Kota 2,
                                <br />
                                Taman Cahaya Kota Puteri,
                                <br />
                                81750 Masai, Johor
                                <br />
                                Contact Person: Mr Lau
                                <br />
                                Email: shipping@greatneptune.com
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="col-sm-6">
                            <table className="table table-bordered mb-0">
                              <thead>
                                <tr>
                                  <th
                                    className="tx-center agreed-rice-parameters"
                                    colSpan={2}
                                   
                                  >
                                    <h6 className="mb-0">
                                      AGREED RICE PARAMETERS
                                    </h6>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="tx-center">
                                    <b>RICE TYPE</b>{" "}
                                  </td>
                                  <td className="tx-center">
                                    <b>SWARNA PARBOILED</b>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="tx-center">BROKEN</td>
                                  <td className="tx-center">15%</td>
                                </tr>
                                <tr>
                                  <td className="tx-center">CHALKY</td>
                                  <td className="tx-center">Below 2%</td>
                                </tr>
                                <tr>
                                  <td className="tx-center">DD</td>
                                  <td className="tx-center">Below 1%</td>
                                </tr>
                                <tr>
                                  <td className="tx-center">WHITENESS </td>
                                  <td className="tx-center">30</td>
                                </tr>
                                <tr>
                                  <td className="tx-center">MOISTURE </td>
                                  <td className="tx-center">Below 13%</td>
                                </tr>
                                <tr>
                                  <td className="tx-center">GRAIN LENGTH </td>
                                  <td className="tx-center">5 mm-5.5 mm</td>
                                </tr>
                                <tr className="table-light">
                                  <td className="tx-center">PAYMENT TERMS: </td>
                                  <td className="tx-center">CAD</td>
                                </tr>
                                <tr className="table-light">
                                  <td className="tx-center">PORT OF LOADING: </td>
                                  <td className="tx-center">Anywhere in India</td>
                                </tr>
                                <tr className="table-light">
                                  <td className="tx-center">
                                    PORT OF DESTINATION:{" "}
                                  </td>
                                  <td className="tx-center">PG, Malaysia</td>
                                </tr>
                                <tr className="table-light">
                                  <td className="tx-center">ETD: </td>
                                  <td className="tx-center">
                                    1st week of November
                                  </td>
                                </tr>
                                <tr className="table-light">
                                  <td className="tx-center">ETA: </td>
                                  <td className="tx-center">
                                    3rd week of November
                                  </td>
                                </tr>
                                <tr className="table-light">
                                  <td className="tx-center">
                                    <b>CIF: </b>
                                  </td>
                                  <td className="tx-center">
                                    <b>$533 / TON</b>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-sm-6">
                            <table className="table table-bordered mb-0">
                              <thead>
                                <tr>
                                  <th
                                    className="tx-center agreed-rice-parameters"
                                    colSpan={2}
                                    
                                  >
                                    <h6 className="mb-0">
                                      BRAND &amp; PACKAGING
                                    </h6>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="tx-center">
                                    <b>BAG MARK </b>
                                  </td>
                                  <td className="tx-center">
                                    <b>JCC</b>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="tx-center">SIZE </td>
                                  <td className="tx-center">50 Kg</td>
                                </tr>
                                <tr>
                                  <td className="tx-center">
                                    TOTAL NO. OF BAGS{" "}
                                  </td>
                                  <td className="tx-center">520</td>
                                </tr>
                                <tr>
                                  <td className="tx-center">TYPE </td>
                                  <td className="tx-center">PP</td>
                                </tr>
                                <tr>
                                  <td className="tx-center">
                                    EMPTY BAGS (IF ANY)
                                  </td>
                                  <td className="tx-center">Nil</td>
                                </tr>
                                <tr>
                                  <td className="tx-center">BAG MARK DESIGN</td>
                                  <td className="tx-center">
                                    <img src="../assets/img/pngs/jcc-img.png" />
                                  </td>
                                </tr>
                                <tr className="table-light">
                                  <td className="tx-left" colSpan={2}>
                                    <h6 className="mb-0">QUANTITY</h6>{" "}
                                  </td>
                                </tr>
                                <tr className="table-light">
                                  <td className="tx-center">
                                    <b>150 FCL - </b>
                                  </td>
                                  <td className="tx-center">3,975 tons</td>
                                </tr>
                                <tr className="table-light">
                                  <td className="tx-center">
                                    <b>26.5 tons </b>{" "}
                                  </td>
                                  <td className="tx-center">per container</td>
                                </tr>
                                <tr className="table-light">
                                  <td className="tx-center">
                                    <b>Lot Size: </b>
                                  </td>
                                  <td className="tx-center">
                                    10 FCL/Lot &amp; 15 FCL/Lot
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row mg-t-100">
                          <div className="col-sm-7">
                            <h6>SIGNATURE</h6>
                          </div>
                          <div className="col-sm-5">
                            <h6>APPROVED SIGNATURE</h6>
                          </div>
                          <div className="col-sm-12">
                            <p>
                              <b>Please Note:</b> This contract is a communication
                              for confirmation on the above order. Original
                              proforma contract with respective exporter details
                              will be shared at the start of the shipment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-end">
                    <a
                      href="view-pre-proforma.html"
                      className="btn ripple btn-info mb-1"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Row */}
          </div>
        </div>
      </div>
      {/* End Main Content*/}
    </div>
    {/* End Page */}
    {/* Back-to-top */}
    <a href="#top" id="back-to-top">
    <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
    </a>
    {/* Jquery js*/}
    {/* Bootstrap js*/}
    {/* Perfect-scrollbar js */}
    {/* Sidemenu js */}
    {/* Sidebar js */}
    {/* Select2 js*/}
    {/* Color Theme js */}
    {/* Sticky js */}
    {/* Custom js */}
  </>
  )
}

export default View