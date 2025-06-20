import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EoiProjectEdit = () => {

    const { empid } = useParams();
    const navigate = useNavigate();

    const initialFormData = {
        isEOI: 'true',
        locationId: '',
        projectName: '',
        projectLocation: '',
        status: '',
        banner: '',
        details: '',
        noOfPlot: '',
        noOfShop: '',
        noOfFarmHouse: '',

        eoiType1: '',
        eoiCode1: '',
        eoiPrice1: '',
        eoiTerms1: '',

        eoiType2: '',
        eoiCode2: '',
        eoiPrice2: '',
        eoiTerms2: '',

        eoiType3: '',
        eoiCode3: '',
        eoiPrice3: '',
        eoiTerms3: '',


        areaAllocateToProject: '',
        areaAvailableForProject: '',
        size: '',

        brochure: '',
        videoLink: '',
        photo1: '',
        photo2: '',
        photo3: '',
        photo4: '',

        eoiType4: '',
        eoiCode4: '',
        eoiPrice4: '',
        eoiTerms4: '',

        eoiType5: '',
        eoiCode5: '',
        eoiPrice5: '',
        eoiTerms5: '',

        eoiType6: '',
        eoiCode6: '',
        eoiPrice6: '',
        eoiTerms6: '',
        projectMap: '',
        companyId: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [profilePic, setProfilePic] = useState(null);
    const [location, setLocation] = useState([]);
    const [status, setStatus] = useState([]);
    const [profilePicFile1, setProfilePicFile1] = useState(null);
    const [profilePicFile2, setProfilePicFile2] = useState(null);
    const [profilePicFile3, setProfilePicFile3] = useState(null);
    const [profilePicFile4, setProfilePicFile4] = useState(null);
    const [profilePicFile5, setProfilePicFile5] = useState(null);
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [company, setCompany] = useState([]);


    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    useEffect(() => {
        const fetchUsers = async () => {
            if (!formData.locationId) return;

            try {
                const url = `${apiUrl}/location/getLocation/${formData.locationId}`;
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;

                setFormData((prevFormData) => ({
                    ...prevFormData,

                    areaAllocateToProject: data.areaAllocateToProject || '',
                    areaAvailableForProject: data.areaAvailableForProject || '',
                    size: data.size || '',


                }));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUsers();
    }, [formData.locationId, apiUrl, Token]);

    // location data get
    useEffect(() => {
        const fetchUser = async () => {

            try {
                const url = `${apiUrl}/project/getProject/${empid}`;
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
                setProfilePicFile1(data.brochure);
                setProfilePicFile2(data.photo1)
                setProfilePicFile3(data.photo2)
                setProfilePicFile4(data.photo3)
                setProfilePicFile5(data.photo4)
                setYoutubeUrl(data.videoLink);
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    locationId: data.locationId,
                    companyId: data.companyId,
                    projectName: data.projectName,
                    status: data.status,
                    banner: data.banner,
                    details: data.details,
                    noOfPlot: data.noOfPlot,
                    noOfShop: data.noOfShop,
                    noOfFarmHouse: data.noOfFarmHouse,

                    areaAllocateToProject: data.areaAllocateToProject,
                    areaAvailableForProject: data.areaAvailableForProject || '',
                    size: data.size || '',


                    eoiType1: data.eoiType1 || '',
                    eoiCode1: data.eoiCode1 || '',
                    eoiPrice1: data.eoiPrice1 || '',
                    eoiTerms1: data.eoiTerms1 || '',

                    eoiType2: data.eoiType2 || '',
                    eoiCode2: data.eoiCode2 || '',
                    eoiPrice2: data.eoiPrice2 || '',
                    eoiTerms2: data.eoiTerms2 || '',

                    eoiType3: data.eoiType3 || '',
                    eoiCode3: data.eoiCode3 || '',
                    eoiPrice3: data.eoiPrice3 || '',
                    eoiTerms3: data.eoiTerms3 || '',


                    brochure: data.brochure || '',
                    videoLink: data.videoLink || '',
                    photo1: data.photo1 || '',
                    photo2: data.photo2 || '',
                    photo3: data.photo3 || '',
                    photo4: data.photo4 || '',

                    eoiType4: data.eoiType4 || '',
                    eoiCode4: data.eoiCode4 || '',
                    eoiPrice4: data.eoiPrice4 || '',
                    eoiTerms4: data.eoiTerms4 || '',

                    eoiType5: data.eoiType5 || '',
                    eoiCode5: data.eoiCode5 || '',
                    eoiPrice5: data.eoiPrice5 || '',
                    eoiTerms5: data.eoiTerms5 || '',

                    eoiType6: data.eoiType6 || '',
                    eoiCode6: data.eoiCode6 || '',
                    eoiPrice6: data.eoiPrice6 || '',
                    eoiTerms6: data.eoiTerms6 || '',
                    projectMap: data.projectMap || '',
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

            const response = await fetch(`${apiUrl}/project/updateProject/${empid}`, {
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
            navigate("/manage-eoi");
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


    const handleFileChange1 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile);
                setProfilePicFile1(imageUrl);
                setFormData((prevData) => ({
                    ...prevData,
                    brochure: profilePicFile1,
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





    const handleFileChange23 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {


                setFormData((prevData) => ({
                    ...prevData,
                    brochure: profilePicFile,
                }));
            } else if (profilePicFile.type === 'application/pdf') {
                // Assuming other file inputs exist for these file types
                setFormData((prevData) => ({
                    ...prevData,
                    brochure: profilePicFile,

                }));


            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };


    const handleFileChange24 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {


                setFormData((prevData) => ({
                    ...prevData,
                    projectMap: profilePicFile,
                }));
            } else if (profilePicFile.type === 'application/pdf') {
                // Assuming other file inputs exist for these file types
                setFormData((prevData) => ({
                    ...prevData,
                    projectMap: profilePicFile,

                }));


            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };

    //location 
    useEffect(() => {
        fetch(`${apiUrl}/location/locationDropdown`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Token}`

            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setLocation(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    //company 
    useEffect(() => {
        const Token = localStorage.getItem('Token');
        console.log('Token:', Token);
        fetch(`${apiUrl}/company/companyDropdown`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Token}`

            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setCompany(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    //status master
    useEffect(() => {

        fetch(`${apiUrl}/master/getAllMasterData/13`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setStatus(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);



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
                                    <h2 className="main-content-title tx-24 mg-b-5">Update Eoi Project</h2>
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
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Project Name:<span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="projectName"
                                                                value={formData.projectName}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Select Land: <span className="tx-danger">*</span>
                                                            </label>
                                                            <select className="form-control select2"
                                                                name="locationId"
                                                                value={formData.locationId}
                                                                onChange={handleChange}>
                                                                <option >Select </option>
                                                                {location.map((option, index) => (
                                                                    <option key={option.id} value={option.id}>
                                                                        {option.locationName}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>

                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Land Area (Beegha)
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="size"
                                                                value={formData.size}
                                                                // onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Available Area (Beegha)
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="areaAvailableForProject"
                                                                value={formData.areaAvailableForProject}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>

                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Allocate Area (Beegha)
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="areaAllocateToProject"
                                                                value={formData.areaAllocateToProject}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>


                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Display Status: <span className="tx-danger">*</span>
                                                            </label>
                                                            <select className="form-control select2"
                                                                name="status"
                                                                value={formData.status}
                                                                onChange={handleChange}>
                                                                <option >Select </option>
                                                                {status.map((option, index) => (
                                                                    <option key={option.id} value={option.name}>
                                                                        {option.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                No Of Plot:
                                                                <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="noOfPlot"
                                                                value={formData.noOfPlot}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                No Of Shop:
                                                                <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="noOfShop"
                                                                value={formData.noOfShop}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                No Of Farm House:
                                                                <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                name="noOfFarmHouse"
                                                                value={formData.noOfFarmHouse}
                                                                onChange={handleChange}
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="col-lg-3 form-group">
                                                            <label className="form-label">
                                                                Select Company: <span className="tx-danger">*</span>
                                                            </label>
                                                            <select className="form-control select2"
                                                                name="companyId"
                                                                value={formData.companyId}
                                                                onChange={handleChange}>
                                                                <option >Select </option>
                                                                {company.map((option, index) => (
                                                                    <option key={option.id} value={option.id}>
                                                                        {option.companyName}
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
                                                <h6 className="main-content-label mb-1">Enter Details: <span className="tx-danger">*</span></h6>
                                            </div>
                                            <div className="row row-sm">
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
                                                <h6 className="main-content-label mb-1">Project Banners: <span className="tx-danger">*</span></h6>
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





                                <div className="col-xl-4 col-lg-4 col-md-4">
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
                                </div>



                                <div className="col-xl-4 col-lg-4 col-md-4">
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
                                </div>



                                <div className="col-xl-4 col-lg-4 col-md-4">
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
                                </div>


                                <div className="col-xl-4 col-lg-4 col-md-4">
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
                                </div>



                                <div className="col-xl-4 col-lg-4 col-md-4">
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
                                </div>



                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">Brochure</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="applicantPanImage"
                                                                onChange={handleFileChange23}
                                                            />

                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-1">MAP</h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                name="applicantPanImage"
                                                                onChange={handleFileChange24}
                                                            />

                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>



                                <div className="row row-sm">
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="card custom-card">
                                            <div className="card-body">
                                                <div>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <h6 className="main-content-label mb-3" style={{ marginRight: '40px', whiteSpace: 'nowrap' }}>Privilege Premium</h6>
                                                    </div>
                                                </div>
                                                <form action="form-validation.html" data-parsley-validate="">
                                                    <div className="">
                                                        <div className="row row-sm">
                                                            <div className="col-lg-2 form-group">
                                                                <label className="form-label">
                                                                    Plan Name: <span className="tx-danger">*</span>
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    name="eoiType1"
                                                                    value={formData.eoiType1}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"

                                                                />
                                                            </div>
                                                            <div className="col-lg-2 form-group">
                                                                <label className="form-label">
                                                                    Code:<span className="tx-danger">*</span>
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    name="eoiCode1"
                                                                    value={formData.eoiCode1}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"

                                                                />
                                                            </div>
                                                            <div className="col-lg-2 form-group">
                                                                <label className="form-label">
                                                                    Price:
                                                                    <span className="tx-danger">*</span>
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    name="eoiPrice1"
                                                                    value={formData.eoiPrice1}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 form-group">
                                                                <label className="form-label">
                                                                    Terms: <span className="tx-danger">*</span>
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    name="eoiTerms1"
                                                                    value={formData.eoiTerms1}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            {/* second Plan */}
                                                            <div className="col-lg-2 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiType2"
                                                                    value={formData.eoiType2}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-2 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiCode2"
                                                                    value={formData.eoiCode2}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-2 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiPrice2"
                                                                    value={formData.eoiPrice2}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiTerms2"
                                                                    value={formData.eoiTerms2}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            {/* Therd Plan */}
                                                            <div className="col-lg-2 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiType3"
                                                                    value={formData.eoiType3}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-2 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiCode3"
                                                                    value={formData.eoiCode3}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-2 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiPrice3"
                                                                    value={formData.eoiPrice3}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiTerms3"
                                                                    value={formData.eoiTerms3}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
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
                                <div className="row row-sm">
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="card custom-card">
                                            <div className="card-body">
                                                <div>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <h6 className="main-content-label mb-3" style={{ marginRight: '40px', whiteSpace: 'nowrap' }}>Privilege Premium+</h6>
                                                    </div>
                                                </div>
                                                <form action="form-validation.html" data-parsley-validate="">
                                                    <div className="">
                                                        <div className="row row-sm">
                                                            <div className="col-lg-2 form-group">
                                                                <label className="form-label">
                                                                    Plan Name: <span className="tx-danger">*</span>
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    name="eoiType4"
                                                                    value={formData.eoiType4}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"

                                                                />
                                                            </div>
                                                            <div className="col-lg-2 form-group">
                                                                <label className="form-label">
                                                                    Code:<span className="tx-danger">*</span>
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    name="eoiCode4"
                                                                    value={formData.eoiCode4}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"

                                                                />
                                                            </div>
                                                            <div className="col-lg-2 form-group">
                                                                <label className="form-label">
                                                                    Price:
                                                                    <span className="tx-danger">*</span>
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    name="eoiPrice4"
                                                                    value={formData.eoiPrice4}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 form-group">
                                                                <label className="form-label">
                                                                    Terms: <span className="tx-danger">*</span>
                                                                </label>
                                                                <input
                                                                    className="form-control"
                                                                    name="eoiTerms4"
                                                                    value={formData.eoiTerms4}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            {/* second Plan */}
                                                            <div className="col-lg-2 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiType5"
                                                                    value={formData.eoiType5}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-2 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiCode5"
                                                                    value={formData.eoiCode5}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-2 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiPrice5"
                                                                    value={formData.eoiPrice5}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiTerms5"
                                                                    value={formData.eoiTerms5}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            {/* Therd Plan */}
                                                            <div className="col-lg-2 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiType6"
                                                                    value={formData.eoiType6}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-2 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiCode6"
                                                                    value={formData.eoiCode6}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-2 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiPrice6"
                                                                    value={formData.eoiPrice6}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
                                                                    required=""
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 form-group">

                                                                <input
                                                                    className="form-control"
                                                                    name="eoiTerms6"
                                                                    value={formData.eoiTerms6}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter "
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

export default EoiProjectEdit

