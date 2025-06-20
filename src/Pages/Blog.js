import React, { useState, useEffect, useRef } from "react";
import TopHeader from "../Components/TopHeader";
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const Blog = () => {


    const initialFormData = {

        banner: '',
        title: '',
        blog: '',
        category: '',

        photo1: '',
        photo2: '',
        photo3: '',
        photo4: '',
        photo5: '',
        photo6: '',
        photo7: '',
        photo8: '',
        photo9: '',
        photo10: '',
        videoLink: '',

    };

    const [formData, setFormData] = useState(initialFormData);
    const [profilePicFile, setProfilePicFile] = useState(null);

    const [profilePicFile2, setProfilePicFile2] = useState(null);
    const [profilePicFile3, setProfilePicFile3] = useState(null);
    const [profilePicFile4, setProfilePicFile4] = useState(null);
    const [profilePicFile5, setProfilePicFile5] = useState(null);
    const [profilePicFile6, setProfilePicFile6] = useState(null);
    const [profilePicFile7, setProfilePicFile7] = useState(null);
    const [profilePicFile8, setProfilePicFile8] = useState(null);
    const [profilePicFile9, setProfilePicFile9] = useState(null);
    const [profilePicFile10, setProfilePicFile10] = useState(null);
    const [profilePicFile11, setProfilePicFile11] = useState(null);
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");




    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith("image/")) {
                setProfilePicFile(profilePicFile);
                setFormData((prevData) => ({
                    ...prevData,
                    banner: profilePicFile,
                }));

            }
        } else {
            console.log("No file selected");
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/blog/addBlog`, {
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
            navigate("/blog-list");
            // Reload the page on successful submission
            // window.location.reload();

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




    const handleFileChange2 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile2 = files[0];

            if (profilePicFile2.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile2(profilePicFile2);
                setFormData((prevData) => ({
                    ...prevData,
                    photo1: profilePicFile2,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChange3 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile3 = files[0];

            if (profilePicFile3.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile3(profilePicFile3);
                setFormData((prevData) => ({
                    ...prevData,
                    photo2: profilePicFile3,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };



    const handleFileChange4 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile4 = files[0];

            if (profilePicFile4.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile4(profilePicFile4);
                setFormData((prevData) => ({
                    ...prevData,
                    photo3: profilePicFile4,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChange5 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile5 = files[0];

            if (profilePicFile5.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile5(profilePicFile5);
                setFormData((prevData) => ({
                    ...prevData,
                    photo4: profilePicFile5,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };




    const handleFileChange6 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile6 = files[0];

            if (profilePicFile6.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile6(profilePicFile6);
                setFormData((prevData) => ({
                    ...prevData,
                    photo5: profilePicFile6,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };


    const handleFileChange7 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile7 = files[0];

            if (profilePicFile7.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile7(profilePicFile7);
                setFormData((prevData) => ({
                    ...prevData,
                    photo6: profilePicFile7,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };


    const handleFileChange8 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile8 = files[0];

            if (profilePicFile8.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile8(profilePicFile8);
                setFormData((prevData) => ({
                    ...prevData,
                    photo7: profilePicFile8,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };



    const handleFileChange9 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile9 = files[0];

            if (profilePicFile9.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile9(profilePicFile9);
                setFormData((prevData) => ({
                    ...prevData,
                    photo8: profilePicFile9,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };



    const handleFileChange10 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile10 = files[0];

            if (profilePicFile10.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile10(profilePicFile10);
                setFormData((prevData) => ({
                    ...prevData,
                    photo9: profilePicFile10,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };



    const handleFileChange11 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile11 = files[0];

            if (profilePicFile11.type.startsWith('image/')) {
                // Handle image files (jpeg, png, etc.)
                setProfilePicFile11(profilePicFile11);
                setFormData((prevData) => ({
                    ...prevData,
                    photo10: profilePicFile11,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };



    const handleUrlChange = (e) => {
        const url = e.target.value;


        const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

        if (youtubeRegex.test(url)) {
            setYoutubeUrl(url);

            // Store the YouTube URL in formData
            setFormData((prevData) => ({
                ...prevData,
                videoLink: url,
            }));
        } else {
            console.log('Invalid YouTube URL');
        }
    };

    const getYoutubeEmbedUrl = (url) => {
        const videoId = url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    };



    const handleInputChangeTextAreas = (value) => {
        setFormData({ ...formData, blog: value });
    };

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
                                    <h2 className="main-content-title tx-24 mg-b-5">Add Blog</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-8 col-md-8">
                                    <div className="card custom-card">
                                        <div className="card-body">

                                            <div className="row row-sm">

                                                <div className="col-lg-6 form-group">
                                                    <label className="form-label">
                                                        Blog category
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="category"
                                                        value={formData.category}
                                                        // onChange={(e) => {
                                                        //     const value = e.target.value;
                                                        //     if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 30) {
                                                        //         handleInputChange(e);
                                                        //     }
                                                        // }}




                                                        onChange={(e) => {
                                                            if (e.target.value.length <= 30) {
                                                                handleInputChange(e);
                                                            } else {
                                                                alert("Maximum 30 characters allowed!");
                                                            }
                                                        }}
                                                        onPaste={(e) => {
                                                            let pastedText = e.clipboardData.getData("text");
                                                            if (pastedText.length > 30) {
                                                                e.preventDefault(); // Stop paste action
                                                                alert("You can only enter up to 30 characters!");
                                                            }
                                                        }}
                                                        placeholder="Enter"
                                                        required
                                                        type="text"
                                                    />

                                                </div>
                                                <div className="col-lg-6 form-group">
                                                    <label className="form-label">
                                                        Blog Title
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="title"
                                                        value={formData.title}
                                                        onChange={(e) => {
                                                            if (e.target.value.length <= 80) {
                                                                handleInputChange(e);
                                                            } else {
                                                                alert("Maximum 80 characters allowed!");
                                                            }
                                                        }}
                                                        onPaste={(e) => {
                                                            let pastedText = e.clipboardData.getData("text");
                                                            if (pastedText.length > 80) {
                                                                e.preventDefault(); // Stop paste action
                                                                alert("You can only enter up to 80 characters!");
                                                            }
                                                        }}
                                                        placeholder="Enter"
                                                        required
                                                        type="text"
                                                    />

                                                </div>

                                                <div className="col-sm-12 mg-t-10" style={{ height: "280px" }}>
                                                    <label className="form-label">
                                                        Blog Details
                                                    </label>

                                                    <ReactQuill
                                                        theme="snow"

                                                        value={formData.blog}
                                                        onChange={handleInputChangeTextAreas}
                                                        style={{ height: "200px" }}
                                                    />

                                                    {/* <textarea
                                                        className="form-control"
                                                        style={{ height: 200 }}
                                                        defaultValue={""}
                                                        name="blog"
                                                        value={formData.blog}
                                                        onChange={handleInputChange}
                                                    /> */}

                                                </div>



                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-2">Upload Banner: <span className="tx-danger">*</span></h6>
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
                                                                name="banner"
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
                                    <a
                                        href="employee-profile.html"
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

export default Blog

