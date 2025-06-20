import React, { useState, useEffect } from 'react'
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddBankAccounts = () => {

    const initialFormData = {

        title: '',
        accountName: '',
        accountNumber: '',
        bankName: '',
        branch: '',
        ifsc: '',
        displayStatus: '',
        uploadQRCode: '',
        companyId: '',
    };
    const [formData, setFormData] = useState(initialFormData);
    const [company, setCompany] = useState([]);
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem('Token');




    useEffect(() => {
        fetch(`${apiUrl}/company/companyDropdown`, {
            method: 'GET', // or 'POST' depending on the API
            headers: {
                'Authorization': `Bearer ${Token}`,
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setCompany(data.data);
                } else {
                    console.error('API response is not in the expected format for companies.');
                }
            })
            .catch((error) => {
                console.error('Error fetching company data:', error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/bank/addBankDetails`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
                body: formDataToSend,
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }

            setFormData(initialFormData);
            toast.success(response2.message);
            navigate("/bank-account-list");
        } catch (error) {
            toast.error(error.message);

        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const applicantImageFile = files[0];

            if (applicantImageFile.type.startsWith('image/')) {


                setFormData((prevData) => ({
                    ...prevData,
                    uploadQRCode: applicantImageFile,
                }));
            } else if (applicantImageFile.type === 'application/pdf') {
                // Handle PDF files
                setFormData((prevData) => ({
                    ...prevData,
                    uploadQRCode: applicantImageFile,

                }));
            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };


    return (
        <>
            <div className="page">
                <TopHeader />
                <Prince />

                {/* Main Content*/}
                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">

                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Add Bank Account</h2>
                                </div>
                            </div>

                            <div className="row row-sm">
                                <div className="col-lg-12 col-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-2">Basic Information</h6>
                                            </div>
                                            <div className="row row-sm">

                                            <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Company <span className="tx-danger">*</span>
                                                    </label>
                                                    <select className="form-control select2"
                                                       name="companyId"
                                                       value={formData.companyId}
                                                       onChange={handleInputChange}
                                                    >
                                                        <option value=''>Select Company</option>
                                                        {company.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.companyName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>



                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Title <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="title"
                                                        value={formData.title}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Account Name: <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="accountName"
                                                        value={formData.accountName}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Account Number: <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="accountNumber"
                                                        value={formData.accountNumber}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>

                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Bank Name: <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="bankName"
                                                        value={formData.bankName}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Branch: <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="branch"
                                                        value={formData.branch}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        IFSC Code: <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="ifsc"
                                                        value={formData.ifsc}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Display Status: <span className="tx-danger">*</span>
                                                    </label>
                                                    <select className="form-control"
                                                        name="displayStatus"
                                                        value={formData.displayStatus}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="">Select</option>
                                                        <option >Enable</option>
                                                        <option >Disable</option>

                                                    </select>
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Upload QR Code: <span className="tx-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        accept="/pdf"
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
                                    <a
                                        href=""
                                        className="btn btn-primary"
                                        type="submit"
                                        onClick={handleSubmit}
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

export default AddBankAccounts