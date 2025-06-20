import React,{useEffect, useState} from 'react'
import '../../../src/assets/css/style.css'
import '../../../src/assets/css/icon-list.css'
import '../From/create.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from '../../../src/assets/img/brand/logo.png'
import { Link, useParams } from 'react-router-dom'; 


const Create = () => {
    const { empid } = useParams();
    const [profilePicFile, setProfilePicFile] = useState(null);

    const initialFormData = {
        chalky: '',
    
    }    
    const [formData, setFormData] = useState(initialFormData);

    const apiUrl = process.env.REACT_APP_URL;
    console.log(apiUrl);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
          if (file.type.startsWith('image/')) {
            // Set profilePicFile for image files
            setProfilePicFile(file);
            setFormData((prevData) => ({
              ...prevData,
              profilePhoto: file,
    
    
            }));
          } else if (file.type === 'application/pdf') {
            // Set aadhaarUpload for PDF files
            setFormData((prevData) => ({
              ...prevData,
              attachment: file,
            }));
          } else {
            console.log('Unsupported file type');
          }
        } else {
          console.log('No file selected');
        }
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const Token = localStorage.getItem('Token');
        console.log('Token:', Token);
    
        try {
         
    
          const formDataToSend = new FormData();
          for (const key in formData) {
            if (formData[key] !== null) {
              formDataToSend.append(key, formData[key]);
            }
          }
          const url = `${apiUrl}/lead/createInvoice/${empid}`;
    
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${Token}`,
            },
            body: formDataToSend,
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
         
          console.log('Server response:', data);
    
          setFormData(initialFormData);
          
        } catch (error) {
          console.error('Error:', error);
          // Handle errors here or display appropriate messages
        }
      };
    
   
  return (
    <>
    
    <style
        dangerouslySetInnerHTML={{
            __html:
                "\n.responsive-logo img{display:none !important;}\n    .table-invoice tbody>tr>th:first-child, .table-invoice tbody>tr>td:first-child{color:#1d212f !important}\n    .table thead th, .table thead td, .table tbody td{font-size:12px !important;}\n    .table-light {  background-color: #f5f5f5 !important}\n    .table-light th, .table-light td, .table-light thead th, .table-light tbody+tbody { border-color: #e8e8f7 !important;}\n    .mg-b-100{margin-bottom:100px;}\n    .form-control{height:30px !important;padding: 7px;}\n"
        }}
    />
   

   
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
                                                    <td align="left" style={{ border: "0 !important" }}>
                                                        <h5>NOTIFY PARTY 1: BUYER</h5>
                                                        <select className="form-control select select2">
                                                            <option>Select</option>
                                                            <option>PARTY 1</option>
                                                            <option>PARTY 2</option>
                                                            <option>PARTY 3</option>
                                                        </select>
                                                        <textarea
                                                            className="form-control mt-3"
                                                            style={{ height: "60px !important" }}
                                                            defaultValue={""}
                                                        />
                                                    </td>
                                                    <td align="left" style={{ border: "0 !important" }}>
                                                        <h5>NOTIFY PARTY 2</h5>
                                                        <select className="form-control select select2">
                                                            <option>Select</option>
                                                            <option>PARTY 1</option>
                                                            <option>PARTY 2</option>
                                                            <option>PARTY 3</option>
                                                        </select>
                                                        <textarea
                                                            className="form-control mt-3"
                                                            style={{ height: "60px !important" }}
                                                            defaultValue={""}
                                                        />
                                                    </td>
                                                    <td align="left" style={{ border: "0 !important" }}>
                                                        <h5>CONSIGNEE</h5>
                                                        <select className="form-control select select2">
                                                            <option>Select</option>
                                                            <option>PARTY 1</option>
                                                            <option>PARTY 2</option>
                                                            <option>PARTY 3</option>
                                                        </select>
                                                        <textarea
                                                            className="form-control mt-3"
                                                            style={{ height: "60px" }}
                                                            defaultValue={""}
                                                        />

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
                                                                <td className="tx-center">
                                                                    {" "}
                                                                    <select className="form-control select select2">
                                                                        <option>Select</option>
                                                                        <option>BROKEN</option>
                                                                    </select>{" "}
                                                                </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tx-center">CHALKY </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tx-center">DD</td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tx-center">WHITENESS </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td className="tx-center">MOISTURE </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tx-center">GRAIN LENGTH </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr className="table-light">
                                                                <td className="tx-center">PAYMENT TERMS: </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr className="table-light">
                                                                <td className="tx-center">PORT OF LOADING: </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr className="table-light">
                                                                <td className="tx-center">
                                                                    PORT OF DESTINATION:{" "}
                                                                </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr className="table-light">
                                                                <td className="tx-center">ETD: </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr className="table-light">
                                                                <td className="tx-center">ETA: </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr className="table-light">
                                                                <td className="tx-center">
                                                                    <b>CIF: </b>
                                                                </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
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
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tx-center">
                                                                    TOTAL NO. OF BAGS{" "}
                                                                </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tx-center">TYPE </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tx-center">
                                                                    EMPTY BAGS (IF ANY)
                                                                </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tx-center">BAG MARK DESIGN</td>
                                                                <td className="tx-center">
                                                                    <input type="file" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr className="table-light">
                                                                <td className="tx-left" colSpan={2}>
                                                                    <h6 className="mb-0">QUANTITY</h6>{" "}
                                                                </td>
                                                            </tr>
                                                            <tr className="table-light">
                                                                <td className="tx-center">
                                                                    <b>150 FCL: </b>
                                                                </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr className="table-light">
                                                                <td className="tx-center">
                                                                    <b>26.5 tons: </b>{" "}
                                                                </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr className="table-light">
                                                                <td className="tx-center">
                                                                    <b>Lot Size: </b>
                                                                </td>
                                                                <td className="tx-center">
                                                                    <input type="text" className="form-control" />
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
                                                <div className="col-sm-5" align="right">
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
                                        onClick={handleSubmit}
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
   
  
</>
  )
}

export default Create