import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { date } from 'yup';

const VendorEdits = () => {
    const { empid } = useParams();
    const navigate = useNavigate();
    const initialFormData = {
        category: '',
        subCategory: '',
        companyName: '',
        companyEmail: '',
        companyPhone: '',
        companyWebsite: '',
        contactName: '',
        contactEmail: '',
        contactMobile: '',
        drivingLicence: '',
        aadharNo: '',
        aadharUpload: '',
        panNo: '',
        panUpload: '',

        cheque: '',
        accountNo: '',
        accountName: '',
        bankName: '',
        ifsc: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [profilePic, setProfilePic] = useState(null);
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([]);
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


    //Category api 
    useEffect(() => {
        fetch(`${apiUrl}/category/getAllCategory`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setCategory(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setFormData({ ...formData, category: selectedCategory });

        // Fetch subcategories based on selected category
        fetch(`${apiUrl}/category/getSubCategory/${selectedCategory}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setSubCategory(data.data);
                } else {
                    console.error('API response is not in the expected format for subcategories.');
                }
            })
            .catch((error) => {
                console.error('Error fetching subcategory data:', error);
            });
    };


    let oldSelectedState = [];
    // company data get
    useEffect(() => {
        const fetchUser = async () => {

            try {
                const url = `${apiUrl}/vendor/vendor/${empid}`;
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;
                // console.log('Fetched Data:', data);
                let stateParam = data.category || 0;

                const oldSelectedStateResponse = await fetch(`${apiUrl}/category/getSubCategory/${stateParam}`);
                oldSelectedState = await oldSelectedStateResponse.json();

                setSubCategory(oldSelectedState.data);
                setFormData((prevFormData) => ({
                    ...prevFormData,

                    category: data.category,
                    subCategory: data.subCategory,
                    companyName: data.companyName,
                    companyEmail: data.companyEmail,
                    companyPhone: data.companyPhone,
                    companyWebsite: data.companyWebsite,
                    contactName: data.contactName,
                    contactEmail: data.contactEmail,
                    contactMobile: data.contactMobile,
                    drivingLicence: data.drivingLicence,
                    aadharNo: data.aadharNo,
                    aadharUpload: data.aadharUpload,
                    panNo: data.panNo,
                    panUpload: data.panUpload,
                    cheque: data.cheque,
                    accountNo: data.accountNo,
                    accountName: data.accountName,
                    bankName: data.bankName,
                    ifsc: data.ifsc,
                }));


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUser();
    }, []);



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    // company update

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/vendor/updateVendor/${empid}`, {
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

            setFormData(initialFormData); // Reset the form
            toast.success(response2.message);
            navigate("/vendor-list");
        } catch (error) {
            toast.error(error.message);
            // Handle other potential errors, like network issues
        }
    };

    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile); // Convert file to URL
                setProfilePic(imageUrl); // Set URL as profilePic
                setFormData((prevData) => ({
                    ...prevData,
                    aadharUpload: profilePicFile,
                }));
            } else if (profilePicFile.type === 'application/pdf') {
                // Assuming other file inputs exist for these file types
                setFormData((prevData) => ({
                    ...prevData,
                    aadharUpload: profilePicFile,

                }));


            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };
    const handleFileChange2 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile); // Convert file to URL
                setProfilePic(imageUrl); // Set URL as profilePic
                setFormData((prevData) => ({
                    ...prevData,
                    drivingLicence: profilePicFile,
                }));
            } else if (profilePicFile.type === 'application/pdf') {
                // Assuming other file inputs exist for these file types
                setFormData((prevData) => ({
                    ...prevData,
                    drivingLicence: profilePicFile,

                }));


            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChange3 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile); // Convert file to URL
                setProfilePic(imageUrl); // Set URL as profilePic
                setFormData((prevData) => ({
                    ...prevData,
                    panUpload: profilePicFile,
                }));
            } else if (profilePicFile.type === 'application/pdf') {
                // Assuming other file inputs exist for these file types
                setFormData((prevData) => ({
                    ...prevData,
                    panUpload: profilePicFile,

                }));


            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChange4 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile); // Convert file to URL
                setProfilePic(imageUrl); // Set URL as profilePic
                setFormData((prevData) => ({
                    ...prevData,
                    cheque: profilePicFile,
                }));
            } else if (profilePicFile.type === 'application/pdf') {
                // Assuming other file inputs exist for these file types
                setFormData((prevData) => ({
                    ...prevData,
                    cheque: profilePicFile,

                }));


            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('Token');

        if (!token) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>

            <div className="page">
                <TopHeader />
                <Prince />
                <div className="main-content  pt-0"  >
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Update Vendor</h2>

                                </div>

                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-3">BASIC INFO</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-lg-6">
                                                            <label className="form-label">
                                                                Select Category: <span className="tx-danger">*</span>

                                                            </label>
                                                            <select className="form-control select2"
                                                                name="category"
                                                                value={formData.category}
                                                                onChange={handleCategoryChange}>
                                                                <option >Select </option>
                                                                {category.map((state) => (
                                                                    <option key={state.id} value={state.id}>
                                                                        {` ${state.name}`}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        {/* col-4 */}
                                                        <div className="col-lg-6">
                                                            <label className="form-label">
                                                                Select Sub Category: <span className="tx-danger">*</span>
                                                            </label>
                                                            <select className="form-control select2"
                                                                name="subCategory"
                                                                value={formData.subCategory}
                                                                onChange={handleChange}>
                                                                <option >Select </option>
                                                                {subCategory.map((sub) => (
                                                                    <option key={sub.id} value={sub.id}>
                                                                        {sub.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        {/* col-4 */}
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
                                                <h6 className="main-content-label mb-3">COMPANY*</h6>
                                            </div>
                                            <div className="row row-sm ">
                                                <div className="col-sm-6 form-group ">
                                                    <label className="form-label">Company Name: <span className="tx-danger">*</span></label>
                                                    <input className="form-control" required="" type="text"
                                                        name="companyName"
                                                        value={formData.companyName}
                                                        onChange={handleChange} />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Company Email: <span className="tx-danger">*</span></label>
                                                    <input className="form-control" required="" type="text"
                                                        name="companyEmail"
                                                        value={formData.companyEmail}
                                                        onChange={handleChange} />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Company Phone: <span className="tx-danger">*</span></label>
                                                    <input className="form-control" required="" type="text"
                                                        name="companyPhone"
                                                        value={formData.companyPhone}
                                                        onChange={handleChange} />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Company Website</label>
                                                    <input className="form-control" required="" type="text"
                                                        name="companyWebsite"
                                                        value={formData.companyWebsite}
                                                        onChange={handleChange} />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Contact Name; <span className="tx-danger">*</span></label>
                                                    <input className="form-control" required="" type="text"
                                                        name="contactName"
                                                        value={formData.contactName}
                                                        onChange={handleChange} />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Contact Email</label>
                                                    <input className="form-control" required="" type="text"
                                                        name="contactEmail"
                                                        value={formData.contactEmail}
                                                        onChange={handleChange} />
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Contact Mobile: <span className="tx-danger">*</span></label>
                                                    <input className="form-control" required="" type="text"
                                                        name="contactMobile"
                                                        value={formData.contactMobile}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label  mb-3">KYC</h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-sm-6">
                                                    <div className="form-group mb-0">
                                                        <label className="form-label">Driving Licence</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="file"
                                                            name="drivingLicence"
                                                            onChange={handleFileChange2}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Aadhaar No</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            name="aadharNo"
                                                            value={formData.aadharNo}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 ">
                                                    <div className="form-group">
                                                        <label className="form-label">Aadhaar Upload</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="file"

                                                            name="aadharUpload"
                                                            onChange={handleFileChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="form-label">PAN No</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            name="panNo"
                                                            value={formData.panNo}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="form-label">PAN Upload</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="file"

                                                            name="panUpload"
                                                            onChange={handleFileChange3}
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
                                                            name="accountNo"
                                                            value={formData.accountNo}
                                                            onChange={handleChange}
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
                                                            name="accountName"
                                                            value={formData.accountName}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group mb-1">
                                                        <label className="form-label">Bank Name</label>
                                                        <input
                                                            className="form-control"
                                                            required=""
                                                            type="text"
                                                            name="bankName"
                                                            value={formData.bankName}
                                                            onChange={handleChange}
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
                                                            name="ifsc"
                                                            value={formData.ifsc}
                                                            onChange={handleChange}
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
                                                            name="cheque"
                                                            onChange={handleFileChange3}
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
                                    <button className="btn btn-primary" type="submit" onClick={handleUpdate}>
                                        Update
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

export default VendorEdits