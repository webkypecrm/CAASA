import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TestimonialEdit = () => {

    const { empid } = useParams();
    const navigate = useNavigate();

    const initialFormData = {
        photo: '',
        name: '',
        star: '',
        title: '',
        details: '',
        source: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [profilePic, setProfilePic] = useState(null);
    const [sourceType, setSourceType] = useState([])


    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    useEffect(() => {
        fetch(`${apiUrl}/master/getAllMasterData/28`, {
            headers: { 'Authorization': `Bearer ${Token}` }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    console.log("API Response:", data.data);
                    setSourceType(data.data);
                } else {
                    console.error('API response is not in the expected format.');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);



    // location data get
    useEffect(() => {
        const fetchUser = async () => {

            try {
                const url = `${apiUrl}/testimonial/getTestimonialById?id=${empid}`;
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;

                const photo = data.photo;
                setProfilePic(photo)


                setFormData((prevFormData) => ({
                    ...prevFormData,

                    photo: data.photo,
                    name: data.name,
                    star: data.star,
                    title: data.title,
                    details: data.details,

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



    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/testimonial/editTestimonial?id=${empid}`, {
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
            navigate("/testimonia-list");
        } catch (error) {
            toast.error(error.message);

        }
    };

    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile);
                setProfilePic(imageUrl);
                setFormData((prevData) => ({
                    ...prevData,
                    photo: profilePicFile,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };



    const handleStarClick = (value) => {
        setFormData((prev) => ({
            ...prev,
            star: prev.star === value ? value - 1 : value,
        }));
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
                {/* Main Header*/}

                <TopHeader />
                <Prince />

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Testimonial Update</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">

                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Name
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>


                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Title

                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="title"
                                                                value={formData.title}
                                                                onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>

                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Star

                                                            </label>

                                                            {[...Array(5)].map((_, i) => (
                                                                <span
                                                                    key={i}
                                                                    onClick={() => handleStarClick(i + 1)}
                                                                    style={{
                                                                        fontSize: '30px',
                                                                        cursor: 'pointer',
                                                                        color: i < formData.star ? 'green' : 'gray',
                                                                        transition: 'color 0.3s ease', // Smooth transition effect
                                                                    }}
                                                                >
                                                                    ★
                                                                </span>
                                                            ))}

                                                        </div>


                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">Source</label>
                                                            <select
                                                                className="form-control"
                                                                name="source"
                                                                value={formData.source}
                                                                onChange={handleChange}
                                                                required
                                                            >
                                                                <option value="">Select Source</option>
                                                                {sourceType.map((src, index) => (
                                                                    <option key={index} value={src.name}>
                                                                        {src.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>




                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-8 col-md-8">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Details</h6>
                                            </div>
                                            <div className="row row-sm" style={{ height: '280px' }}>
                                                <div className="col-sm-12 mg-t-10">

                                                    <textarea
                                                        className="form-control"
                                                        style={{ height: 200 }}
                                                        defaultValue={""}
                                                        name="details"
                                                        value={formData.details}
                                                        onChange={handleChange}
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
                                                <h6 className="main-content-label mb-1">Upload Photo </h6>
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
                                                                name="photo"
                                                                onChange={handleFileChange}
                                                            />
                                                            <div style={{ width: '350px', height: '180px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePic && (
                                                                    <img src={profilePic} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePic && (
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
                                    <a
                                        href=""
                                        className="btn btn-primary"
                                        type="submit"
                                        onClick={handleUpdate}
                                    >
                                        Update
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default TestimonialEdit



