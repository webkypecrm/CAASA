import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditTeamManager = () => {

    const { empid } = useParams();
    const navigate = useNavigate();
    const initialFormData = {
        teamName: '',
        teamManagerA: '',
        teamManagerB: '',
        teamMamberIds: '',
        teamBanner: '',
        vicePresident: '',
        teamCordinator: '',

    };

    const [formData, setFormData] = useState(initialFormData);
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const [selectedUserIds10, setSelectedUserIds10] = useState([]);
    const [counts, setCounts] = useState(0);
    const [countss, setCountss] = useState(0);
    const dropdownRef = useRef(null);
    const [isOpen2, setIsOpen2] = useState(false);
    const [profilePic, setProfilePic] = useState(null);
    const [vps11, setVps11] = useState([]);
    const [vps12, setVps12] = useState([]);
    const [vps13, setVps13] = useState([]);
    const [isOpen10, setIsOpen10] = useState(false);
    const dropdownRef10 = useRef(null);


    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const toggleDropdown10 = () => {
        setIsOpen10(!isOpen10);
    };
    const toggleDropdown12 = () => {
        setIsOpen2(!isOpen2);
    };



    const handleCheckboxChange10 = (event) => {
        const { value, checked } = event.target;
        const id = parseInt(value, 10);
        if (checked) {
            setSelectedUserIds10([...selectedUserIds10, id]);
        } else {
            setSelectedUserIds10(selectedUserIds10.filter(userId => userId !== id));
        }
    };

    useEffect(() => {
        setFormData({ ...formData, teamCordinator: selectedUserIds10 });
    }, [selectedUserIds10]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef10.current && !dropdownRef10.current.contains(event.target)) {
                setIsOpen10(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef10]);


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
        setFormData({ ...formData, teamMamberIds: selectedUserIds });
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




    const fetchDataFromApiii9 = async () => {
        const url = `${apiUrl}/team/teamDropdown?designation=170&teamId=${empid}`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: { 'Authorization': `Bearer ${Token}` }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status === 'success' && Array.isArray(data.data)) {
                    setVps11(data.data);
                } else {
                    console.error('API response error:', data.message || data);
                }
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataFromApiii9();
    }, [empid]);

    //team coordinator
    const fetchDataFromApiii10 = async () => {
        const url = `${apiUrl}/team/teamDropdown?designation=172&teamId=${empid}`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: { 'Authorization': `Bearer ${Token}` }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status === 'success' && Array.isArray(data.data)) {
                    setVps12(data.data);
                } else {
                    console.error('API response error:', data.message || data);
                }
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataFromApiii10();
    }, [empid]);

    //manager
    const fetchDataFromApiii11 = async () => {
        const url = `${apiUrl}/team/teamDropdown?designation=167&teamId=${empid}`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: { 'Authorization': `Bearer ${Token}` }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status === 'success' && Array.isArray(data.data)) {
                    setVps13(data.data);
                } else {
                    console.error('API response error:', data.message || data);
                }
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataFromApiii11();
    }, [empid]);




    const handleFileChanges = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const profilePicFile = files[0];

            if (profilePicFile.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(profilePicFile);
                setProfilePic(imageUrl);
                setFormData((prevData) => ({
                    ...prevData,
                    teamBanner: profilePicFile,
                }));

            }
        } else {
            console.log('No file selected');
        }
    };



    useEffect(() => {
        if (empid) {
            const fetchUser = async () => {
                try {
                    const Token = localStorage.getItem('Token');
                    const url = `${apiUrl}/team/getTeam?id=${empid}`;

                    const result = await fetch(url, {
                        headers: {
                            Authorization: `Bearer ${Token}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    const response = await result.json();

                    if (response && response.count) {
                        // Update counts based on the response
                        setCounts(response.count.managerCount || 0);  // Handle undefined
                        setCountss(response.count.teleCallerCount || 0);  // Handle undefined
                    }

                    const data = response.data;
                    if (data) {
                        setProfilePic(data.teamBanner || '');

                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            teamManagerA: data.teamManagerA || '',
                            teamManagerB: data.teamManagerB || '',
                            teamName: data.teamName || '',
                            vicePresident: data.vicePresident || '',
                            teamCordinator: data.teamCordinator || '',
                        }));

                        // Safely parse the teamMamberIds and teamCordinator
                        const selectedIds = data.teamMamberIds ? data.teamMamberIds.split(',').map(id => parseInt(id.trim(), 10)) : [];
                        setSelectedUserIds(selectedIds);

                        const selectedCordinatorIds = data.teamCordinator ? data.teamCordinator.split(',').map(id => parseInt(id.trim(), 10)) : [];
                        setSelectedUserIds10(selectedCordinatorIds);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchUser();
        }
    }, [empid]);




    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/team/editTeam?id=${empid}`, {
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


            toast.success(response2.message);
            setFormData(initialFormData);
            navigate("/team-manager");


        } catch (error) {
            toast.error(error.message);

        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
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

                <TopHeader />
                <Prince />

                <div className="main-content pt-0" >
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Edit Team Manager</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-8 col-md-8">
                                    <div className="card custom-card">
                                        <div className="card-body">

                                            <div className="row row-sm">
                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Team Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="teamName"
                                                        value={formData.teamName}
                                                        onChange={handleChange}
                                                    />
                                                </div>


                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Select VP</label>
                                                    <select
                                                        className="form-control select2"
                                                        name="vicePresident"
                                                        value={formData.vicePresident}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select</option>
                                                        {vps11.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.fullName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Team Manager A</label>
                                                    <select
                                                        className="form-control select2"
                                                        name="teamManagerA"
                                                        value={formData.teamManagerA}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select</option>
                                                        {vps13.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.fullName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Team Manager B</label>
                                                    <select
                                                        className="form-control select2"
                                                        name="teamManagerB"
                                                        value={formData.teamManagerB}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select</option>
                                                        {vps13.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.fullName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Team Manager({counts})</label>

                                                    <div className="custom-dropdown" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                                        <button
                                                            className="dropdown-toggle form-control"
                                                            type="button"
                                                            onClick={toggleDropdown12}
                                                            style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'left' }}
                                                        >
                                                            {selectedUserIds.length > 0 ? `Selected (${selectedUserIds.length})` : 'Select'}
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
                                                                    overflowY: 'auto'
                                                                }}
                                                            >
                                                                {vps13.map((option) => (
                                                                    <div key={option.id} className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0' }}>
                                                                        <input
                                                                            type="checkbox"
                                                                            id={`user-${option.id}`}
                                                                            value={option.id}
                                                                            onChange={handleCheckboxChange2}
                                                                            checked={selectedUserIds.includes(option.id)}
                                                                        />
                                                                        <label htmlFor={`user-${option.id}`} style={{ marginLeft: '5px' }}>{option.fullName}</label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>

                                                <div className="col-sm-6 form-group">
                                                    <label className="form-label">Team Cordinator({countss})</label>


                                                    <div className="custom-dropdown" ref={dropdownRef10} style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                                        <button
                                                            className="dropdown-toggle form-control"
                                                            type="button"
                                                            onClick={toggleDropdown10}
                                                            style={{ display: 'block', width: '100%', padding: '8px', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'left' }}
                                                        >
                                                            {selectedUserIds10.length > 0 ? `Selected (${selectedUserIds10.length})` : 'Select'}
                                                        </button>
                                                        {isOpen10 && (
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
                                                                    overflowY: 'auto'
                                                                }}
                                                            >
                                                                {vps12.map((option) => (
                                                                    <div key={option.id} className="dropdown-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0' }}>
                                                                        <input
                                                                            type="checkbox"
                                                                            id={`user-${option.id}`}
                                                                            value={option.id}
                                                                            onChange={handleCheckboxChange10}
                                                                            checked={selectedUserIds10.includes(option.id)}
                                                                        />
                                                                        <label htmlFor={`user-${option.id}`} style={{ marginLeft: '5px' }}>{option.fullName}</label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-2">Upload Image:<span className="tx-danger">*</span></h6>
                                            </div>
                                            <form action="form-validation.html" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-sm-12 col-md-12">
                                                            <input
                                                                className="form-control"
                                                                type="file"
                                                                // name="profilePhoto"
                                                                // value={formData.profilePhoto}
                                                                onChange={handleFileChanges}
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
                                        href="employee-profile.html"
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

export default EditTeamManager

