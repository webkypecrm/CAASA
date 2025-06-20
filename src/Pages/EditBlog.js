import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditBlog = () => {

    const { empid } = useParams();
    const navigate = useNavigate();

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
    const [profilePic, setProfilePic] = useState(null);
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
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;



    // location data get
    useEffect(() => {
        const fetchUser = async () => {

            try {
                const url = `${apiUrl}/blog/getBlogById?id=${empid}`;
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;

                const photo = data.banner;
                setProfilePic(photo)
                // setProfilePicFile1(data.brochure);
                setProfilePicFile2(data.photo1)
                setProfilePicFile3(data.photo2)
                setProfilePicFile4(data.photo3)
                setProfilePicFile5(data.photo4)
                setProfilePicFile6(data.photo5)
                setProfilePicFile7(data.photo6)
                setProfilePicFile8(data.photo7)
                setProfilePicFile9(data.photo8)
                setProfilePicFile10(data.photo9)
                setProfilePicFile11(data.photo10)
                setYoutubeUrl(data.videoLink);
                setFormData((prevFormData) => ({
                    ...prevFormData,


                    banner: data.banner,
                    title: data.title,
                    blog: data.blog,
                    category: data.category,

                    photo1: data.photo1,
                    photo2: data.photo2,
                    photo3: data.photo3,
                    photo4: data.photo4,
                    photo5: data.photo5,
                    photo6: data.photo6,
                    photo7: data.photo7,
                    photo8: data.photo8,
                    photo9: data.photo9,
                    photo10: data.photo10,
                    videoLink: data.videoLink,





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

    // location update

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/blog/editBlog?blogId=${empid}`, {
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
                    banner: profilePicFile,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };


    const handleFileChange2 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile2 = files[0];

            if (profilePicFile2.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile2);
                setProfilePicFile2(imageUrl);
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
                const imageUrl = URL.createObjectURL(profilePicFile3);
                setProfilePicFile3(imageUrl);
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
                const imageUrl = URL.createObjectURL(profilePicFile4);
                setProfilePicFile4(imageUrl);
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
                const imageUrl = URL.createObjectURL(profilePicFile5);
                setProfilePicFile5(imageUrl);
                setFormData((prevData) => ({
                    ...prevData,
                    photo4: profilePicFile5,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };

    const getYoutubeEmbedUrl = (url) => {
        const videoId = url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    const handleUrlChange = (e) => {
        const url = e.target.value;

        // Basic validation to check if it's a YouTube URL
        const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

        if (youtubeRegex.test(url)) {
            setYoutubeUrl(url);

            // Store the YouTube URL in formData
            setFormData((prevData) => ({
                ...prevData,
                videoLink: url,
            }));
        } else {
            // Reset the video URL if the input is invalid
            setYoutubeUrl('');
            setFormData((prevData) => ({
                ...prevData,
                videoLink: '', // Clear the video link in formData
            }));
            console.log('Invalid YouTube URL');
        }
    };




    const handleFileChange6 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile51 = files[0];

            if (profilePicFile51.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile51);
                setProfilePicFile6(imageUrl);
                setFormData((prevData) => ({
                    ...prevData,
                    photo5: profilePicFile51,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };


    const handleFileChange7 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile52 = files[0];

            if (profilePicFile52.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile52);
                setProfilePicFile7(imageUrl);
                setFormData((prevData) => ({
                    ...prevData,
                    photo6: profilePicFile52,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };


    const handleFileChange8 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile53 = files[0];

            if (profilePicFile53.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile53);
                setProfilePicFile8(imageUrl);
                setFormData((prevData) => ({
                    ...prevData,
                    photo7: profilePicFile53,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };



    const handleFileChange9 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile54 = files[0];

            if (profilePicFile54.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile54);
                setProfilePicFile9(imageUrl);
                setFormData((prevData) => ({
                    ...prevData,
                    photo8: profilePicFile54,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };

    const handleFileChange10 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile55 = files[0];

            if (profilePicFile55.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile55);
                setProfilePicFile10(imageUrl);
                setFormData((prevData) => ({
                    ...prevData,
                    photo9: profilePicFile55,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };


    const handleFileChange11 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile56 = files[0];

            if (profilePicFile56.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile56);
                setProfilePicFile11(imageUrl);
                setFormData((prevData) => ({
                    ...prevData,
                    photo10: profilePicFile56,
                }));

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
                {/* Main Header*/}

                <TopHeader />
                <Prince />

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Blog Update</h2>
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
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Blog category
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="category"
                                                                value={formData.category}
                                                                onChange={(e) => {
                                                                    const value = e.target.value;
                                                                    if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 30) {
                                                                        handleChange(e);
                                                                    }
                                                                }}
                                                                // onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
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
                                                                    const value = e.target.value;
                                                                    if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 80) {
                                                                        handleChange(e);
                                                                    }
                                                                }}
                                                                // onChange={handleChange}
                                                                placeholder="Enter"
                                                                required=""
                                                                type="text"
                                                            />
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
                                                <h6 className="main-content-label mb-1">Blog Details</h6>
                                            </div>
                                            <div className="row row-sm" style={{ height: '280px' }}>
                                                <div className="col-sm-12 mg-t-10">
                                                    <ReactQuill
                                                        theme="snow"
                                                        value={formData.blog}
                                                        onChange={(value) =>
                                                            setFormData((prevState) => ({
                                                                ...prevState,
                                                                blog: value,
                                                            }))
                                                        }
                                                        style={{ height: "200px" }}
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
                                                <h6 className="main-content-label mb-1">Blog Banners: <span className="tx-danger">*</span></h6>
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



                                {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Photo 1</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="photo1"
                                                                onChange={handleFileChange2}
                                                            />
                                                            <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePicFile2 && (
                                                                    <img src={profilePicFile2} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePicFile2 && (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}



                                {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Photo 2</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="photo2"
                                                                onChange={handleFileChange3}
                                                            />
                                                            <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePicFile3 && (
                                                                    <img src={profilePicFile3} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePicFile3 && (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}



                                {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Photo 3</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="photo3"
                                                                onChange={handleFileChange4}
                                                            />
                                                            <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePicFile4 && (
                                                                    <img src={profilePicFile4} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePicFile4 && (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}


                                {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Photo 4</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="photo4"
                                                                onChange={handleFileChange5}
                                                            />
                                                            <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePicFile5 && (
                                                                    <img src={profilePicFile5} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePicFile5 && (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}


                                {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Photo 5</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="photo5"
                                                                onChange={handleFileChange6}
                                                            />
                                                            <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePicFile6 && (
                                                                    <img src={profilePicFile6} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePicFile6 && (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}


                                {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Photo 6</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="photo6"
                                                                onChange={handleFileChange7}
                                                            />
                                                            <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePicFile7 && (
                                                                    <img src={profilePicFile7} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePicFile7 && (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}



                                {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Photo 7</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="photo7"
                                                                onChange={handleFileChange8}
                                                            />
                                                            <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePicFile8 && (
                                                                    <img src={profilePicFile8} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePicFile8 && (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}


                                {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Photo 8</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="photo8"
                                                                onChange={handleFileChange9}
                                                            />
                                                            <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePicFile9 && (
                                                                    <img src={profilePicFile9} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePicFile9 && (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}


                                {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Photo 9</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="photo9"
                                                                onChange={handleFileChange10}
                                                            />
                                                            <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePicFile10 && (
                                                                    <img src={profilePicFile10} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePicFile10 && (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}



                                {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Photo 10</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="photo10"
                                                                onChange={handleFileChange11}
                                                            />
                                                            <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                                                {profilePicFile11 && (
                                                                    <img src={profilePicFile11} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                                                )}
                                                                {!profilePicFile11 && (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}



                                {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Video Upload</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                name="videoLink"
                                                                placeholder="Video URL"
                                                                onChange={handleUrlChange}
                                                            />
                                                            <div style={{
                                                                width: '350px',
                                                                height: '175px',
                                                                border: '1px solid #ccc',
                                                                marginTop: '8px',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                margin: '0 auto',
                                                                maxWidth: '100%'
                                                            }}>
                                                                {youtubeUrl ? (
                                                                    <iframe
                                                                        width="100%"
                                                                        height="100%"
                                                                        src={getYoutubeEmbedUrl(youtubeUrl)}
                                                                        frameBorder="0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowFullScreen
                                                                        title="Embedded YouTube Video"
                                                                    />
                                                                ) : (
                                                                    <p style={{ textAlign: 'center', margin: 0 }}>No Video</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}




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
                                    Copyright © 2024 <a href="javascript:void(0)">Caasaa</a>. Designed
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

export default EditBlog

