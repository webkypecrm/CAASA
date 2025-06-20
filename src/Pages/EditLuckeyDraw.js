import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditLuckeyDraw = () => {
    const { empid } = useParams();
    const navigate = useNavigate();
    const initialFormData = {
        luckyDrawName: '',
        startDate: '',
        startTime: '',

        endDate: '',
        endTime: '',

        announcementDate: '',
        announcementTime: '',

        closeDate: '',
        closeTime: '',

        displayStatus: '',
        enableOnMobile: '',
        showAlert: '',
        description: '',
        banner: '',
        icon: '',
        schemeId: '',
        luckyDrawNameAdmin: '',

    };

    const [formData, setFormData] = useState(initialFormData);
    const [users2, setUsers2] = useState([]);
    const [scame, setScame] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [profilePic, setProfilePic] = useState(null);
    const [enableStatus, setEnableStatus] = useState('');
    const [previewUrl, setPreviewUrl] = useState("");
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const dropdownRef = useRef(null);
    const [isOpen2, setIsOpen2] = useState(false);
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem('Token');




    const toggleDropdown12 = () => {
        setIsOpen2(!isOpen2);
    };

    const handleCheckboxChange2 = (event) => {
        const { value, checked } = event.target;
        const id = parseInt(value, 10);
        if (checked) {
            setSelectedUserIds([...selectedUserIds, id]);
        } else {
            setSelectedUserIds(selectedUserIds.filter(userId => userId !== id));
        }
    };

    useEffect(() => {
        setFormData({ ...formData, schemeId: selectedUserIds });
    }, [selectedUserIds]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen2(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);



    useEffect(() => {
        const fetchScheme = async () => {
            try {
                const url = `${apiUrl}/luckyDraw/luckDraw?luckyDrawId=${empid}`;
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;
                const photo = data.banner;
                setProfilePic(photo);
                setPreviewUrl(data.icon);

                setFormData({
                    luckyDrawName: data.luckyDrawName,
                    startDate: data.startDate,
                    startTime: data.startTime,
                    endDate: data.endDate,
                    endTime: data.endTime,
                    announcementDate: data.announcementDate,
                    announcementTime: data.announcementTime,
                    closeDate: data.closeDate,
                    closeTime: data.closeTime,
                    displayStatus: data.displayStatus,
                    enableOnMobile: data.enableOnMobile,
                    showAlert: data.showAlert,
                    description: data.description,
                    banner: data.banner,
                    icon: data.icon,
                    schemeId: data.schemeId,
                    luckyDrawNameAdmin: data.luckyDrawNameAdmin,
                });

                const selectedIds = data.displayStatus.split(',').map(id => parseInt(id.trim(), 10));
                setSelectedIds(selectedIds);


                const selectedIdss = data.schemeId.split(',').map(id => parseInt(id.trim(), 10));
                setSelectedUserIds(selectedIdss);


                const enableStatus = data.enableOnMobile ? "Enable" : "Disable";
                setEnableStatus(enableStatus);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchScheme();
    }, [apiUrl, empid, Token]);

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value === "Enable" ? true : value === "Disable" ? false : value
        }));
    };



    useEffect(() => {

        const url = `${apiUrl}/scheme/schemeDropdown`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setScame(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);


    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/luckyDraw/editLukyDraw?luckyDrawId=${empid}`, {
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
            navigate("/lucky-draw-list");
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


    const handleFileChanges = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const applicantImageFile = files[0];

            if (applicantImageFile.type.startsWith("image/")) {
                const newPreviewUrl = URL.createObjectURL(applicantImageFile);

                setFormData({
                    icon: applicantImageFile,
                });

                setPreviewUrl(newPreviewUrl);
            } else if (applicantImageFile.type === "application/pdf") {
                setFormData({
                    icon: applicantImageFile,
                });

                setPreviewUrl(""); // Reset preview for PDFs
            } else {
                console.log("Unsupported file type");
            }
        } else {
            console.log("No file selected");
        }
    };

    // Cleanup to revoke the created object URL when the component unmounts
    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);


    const fetchDataFromApii = async () => {

        try {
            const response = await fetch(`${apiUrl}/scheme/schemeProject?SchemeId=${formData.schemeId}`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.status === 'success') {
                if (Array.isArray(data.data)) {
                    setUsers2(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            } else {
                console.error('API request was not successful:', data.message);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (formData.schemeId) {
            fetchDataFromApii();
        }
    }, [formData.schemeId]);


    useEffect(() => {
        setFormData(prevFormData => ({ ...prevFormData, displayStatus: selectedIds }));
    }, [selectedIds]);

    const handleCheckboxChange = (id) => {
        setSelectedIds(prevSelectedIds => {
            if (prevSelectedIds.includes(id)) {
                return prevSelectedIds.filter(selectedId => selectedId !== id);
            } else {
                return [...prevSelectedIds, id];
            }
        });
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

                <div className="main-content pt-0" >
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Edit Lucky Draw</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>

                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <h6 className="main-content-label mb-3" style={{ marginRight: '40px', whiteSpace: 'nowrap' }}>BASIC INFO</h6>

                                                </div>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Lucky Draw Name:<span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                                name="luckyDrawName"
                                                                value={formData.luckyDrawName}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Lucky Draw Name:<span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="text"
                                                                name="luckyDrawNameAdmin"
                                                                value={formData.luckyDrawNameAdmin}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">Fill Form (Start Date)</label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter"
                                                                required=""
                                                                type="date"
                                                                name="startDate"
                                                                value={formData.startDate}
                                                                onChange={(e) => {
                                                                    handleInputChange(e);
                                                                    // Ensure endDate is always after startDate
                                                                    if (new Date(formData.endDate) < new Date(e.target.value)) {
                                                                        setFormData({ ...formData, endDate: e.target.value });
                                                                    }
                                                                }}
                                                            />
                                                        </div>

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Fill Form ( Start Time)
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="time"
                                                                name="startTime"
                                                                value={formData.startTime}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Fill Form ( End Date)
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="date"
                                                                name="endDate"
                                                                value={formData.endDate}
                                                                min={formData.startDate} 
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Fill Form ( End Time)
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="time"
                                                                name="endTime"
                                                                value={formData.endTime}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Lucky Draw Open Date
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="date"
                                                                name="announcementDate"
                                                                value={formData.announcementDate}
                                                                onChange={(e) => {
                                                                    handleInputChange(e);
                                                                    const selectedDate = new Date(e.target.value);
                                                                    const nextDay = new Date(selectedDate);
                                                                    nextDay.setDate(selectedDate.getDate() + 0);
                                                                    setFormData((prevFormData) => ({
                                                                        ...prevFormData,
                                                                        closeDate: nextDay.toISOString().split("T")[0],
                                                                    }));
                                                                }}
                                                            />
                                                        </div>

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Lucky Draw Open Time
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="time"
                                                                name="announcementTime"
                                                                value={formData.announcementTime}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Lucky Draw Close Date
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="date"
                                                                name="closeDate"
                                                                value={formData.closeDate}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Lucky Draw Close Time
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="time"
                                                                name="closeTime"
                                                                value={formData.closeTime}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>

                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Enable on App:
                                                            </label>
                                                            <select
                                                                className="form-control select2"
                                                                name="enableOnMobile"
                                                                value={formData.enableOnMobile ? "Enable" : "Disable"}
                                                                onChange={handleInputChange2}
                                                            >
                                                                <option value="">Select</option>
                                                                <option value="Enable">Enable</option>
                                                                <option value="Disable">Disable</option>
                                                            </select>
                                                        </div>


                                                        <div className="col-lg-2 form-group">
                                                            <label className="form-label">
                                                                Upload Icon: <span className="tx-danger">*</span>
                                                            </label>
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter "
                                                                required=""
                                                                type="file"
                                                                name="icon"
                                                                onChange={handleFileChanges}
                                                            />
                                                        </div>


                                                        <div className="col-lg-2 form-group">
                                                            <img
                                                                src={previewUrl}
                                                                alt="Preview"
                                                                style={{ width: '70px', height: '70px', borderRadius: '10px', objectFit: 'cover' }}
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

                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-lg-12 form-group">
                                                            <label className="form-label">
                                                                Select Scheme <span className="tx-danger">*</span>
                                                            </label>
                                                            <div
                                                                className="custom-dropdown"
                                                                ref={dropdownRef}
                                                                style={{
                                                                    position: 'relative',
                                                                    display: 'inline-block',
                                                                    width: '100%',
                                                                }}
                                                            >
                                                                <button
                                                                    className="dropdown-toggle form-control"
                                                                    type="button"
                                                                    onClick={toggleDropdown12}
                                                                    style={{
                                                                        display: 'block',
                                                                        width: '100%',
                                                                        padding: '8px',
                                                                        border: '1px solid #ccc',
                                                                        cursor: 'pointer',
                                                                        textAlign: 'left',
                                                                    }}
                                                                >
                                                                    {selectedUserIds.length === 0
                                                                        ? 'Selected (0)'
                                                                        : `Selected (${selectedUserIds.length})`}
                                                                </button>
                                                                {isOpen2 && (
                                                                    <div
                                                                        className="dropdown-menu"
                                                                        style={{
                                                                            display: 'block',
                                                                            position: 'absolute',
                                                                            backgroundColor: 'white',
                                                                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                                                            padding: '12px 16px',
                                                                            zIndex: 1,
                                                                            width: '100%',
                                                                            maxHeight: '200px',
                                                                            overflowY: 'auto',
                                                                            border: '1px solid #ccc',
                                                                        }}
                                                                    >
                                                                        {scame.map((option) => (
                                                                            <div
                                                                                key={option.id}
                                                                                className="dropdown-item"
                                                                                style={{
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    gap: '8px',
                                                                                    padding: '5px 0',
                                                                                }}
                                                                            >
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={`user-${option.id}`}
                                                                                    value={option.id}
                                                                                    onChange={handleCheckboxChange2}
                                                                                    checked={selectedUserIds.includes(option.id)}
                                                                                />
                                                                                <label
                                                                                    htmlFor={`user-${option.id}`}
                                                                                    style={{ marginLeft: '5px' }}
                                                                                >
                                                                                    {option.schemeName}
                                                                                </label>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        {users2.map((user) => (
                                                            <th className="text-center">
                                                                <div className="d-flex align-items-center">
                                                                    <label className="ckbox mb-0" style={{ marginRight: '10px' }}>
                                                                        <input type="checkbox"
                                                                            checked={selectedIds.includes(user.id)}
                                                                            onChange={() => handleCheckboxChange(user.id)} />
                                                                        <span />
                                                                    </label>
                                                                    <span style={{ fontWeight: 'normal' }}>{user.projectName}</span>
                                                                </div>
                                                            </th>

                                                        ))}

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
                                                <h6 className="main-content-label mb-1">Enter Lucky Draw Description<span className="tx-danger">*</span></h6>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-sm-12 mg-t-10" style={{ height: "300px" }}>

                                                    <ReactQuill
                                                        theme="snow"

                                                        name="description"
                                                        value={formData.description}
                                                        style={{ height: "200px" }}

                                                        onChange={(value) =>
                                                            setFormData((prevState) => ({
                                                                ...prevState,
                                                                description: value,
                                                            }))
                                                        }

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
                                                <h6 className="main-content-label mb-1">Upload Banner:<span className="tx-danger">*</span></h6>
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
                                                                onChange={handleFileChange}
                                                            />
                                                            <div style={{ width: '350px', height: '200px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
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

export default EditLuckeyDraw



