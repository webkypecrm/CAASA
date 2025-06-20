import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Gift = () => {
    const initialFormData = {
        giftName: '',
        brand: '',
        giftValue: '',
        vendorCategory: '',
        vendorSubCategory: '',
        vendorId: '',
        giftDiscription: '',
        giftImage: '',
        stock: '',

    };
    const [formData, setFormData] = useState(initialFormData);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([]);
    const [ven, setVen] = useState([]);

    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    useEffect(() => {

        const url = `${apiUrl}/vendor/vendorDropdown?&categoryId=${formData.vendorCategory}&subCategory=${formData.vendorSubCategory}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setVen(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, [formData]);

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
        setFormData({ ...formData, vendorCategory: selectedCategory });

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


    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith("image/")) {
                setProfilePicFile(profilePicFile);
                setFormData((prevData) => ({
                    ...prevData,
                    giftImage: profilePicFile,
                }));

            }
        } else {
            console.log("No file selected");
        }
    };


    // from submit scheme

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/gift/addGift`, {
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
            navigate("/list-gift");
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

                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Add Gift</h2>

                                </div>

                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-8 col-md-8">
                                    <div className="card custom-card">
                                        <div className="card-body">

                                            <div className="row row-sm">
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Gift Vendor Category: <span className="tx-danger">*</span>
                                                    </label>
                                                    <select className="form-control"
                                                        name="vendorCategory"
                                                        value={formData.vendorCategory}
                                                        onChange={handleCategoryChange}
                                                    >
                                                        <option >Select</option>
                                                        {category.map((state) => (
                                                            <option key={state.id} value={state.id}>
                                                                {` ${state.name}`}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Gift Vendor sub Category: <span className="tx-danger">*</span>
                                                    </label>
                                                    <select className="form-control select2"
                                                        name="vendorSubCategory"
                                                        value={formData.vendorSubCategory}
                                                        onChange={handleInputChange}>
                                                        <option >Select </option>
                                                        {subCategory.map((sub) => (
                                                            <option key={sub.id} value={sub.id}>
                                                                {sub.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Vendor
                                                    </label>
                                                    <select className="form-control select2"
                                                        name="vendorId"
                                                        value={formData.vendorId}
                                                        onChange={handleInputChange}>
                                                        <option >Select </option>
                                                        {ven.map((option, index) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.companyName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Gift Name
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="giftName"
                                                        value={formData.giftName}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Brand
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="brand"
                                                        value={formData.brand}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Gift Value
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="giftValue"
                                                        value={formData.giftValue}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>



                                                <div className="col-sm-12 mg-t-10">
                                                    <label className="form-label">
                                                        Gift Description
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: 200 }}
                                                        defaultValue={""}

                                                        name="giftDiscription"
                                                        value={formData.giftDiscription}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <label className="form-label">
                                                        Stock
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="stock"
                                                        value={formData.stock}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-2">Gift Image </h6>
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
                                                                name="image"
                                                                onChange={handleFileChange}
                                                            />
                                                            <div style={{ width: '350px', height: '220px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePicFile && (
                                                                    <img
                                                                        src={URL.createObjectURL(profilePicFile)}
                                                                        alt="Selected File"
                                                                        style={{ width: "100%", height: "100%" }}
                                                                    />
                                                                )}
                                                                {!profilePicFile && (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                            <div className="row row-sm">
                                <div className="col-12 mb-3">
                                    <button

                                        className="btn btn-primary"
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
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
                                    Copyright © 2024 <a href="javascript:void(0)">Webkype</a>. Designed
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

export default Gift