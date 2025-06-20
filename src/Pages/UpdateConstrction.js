import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import axios from 'axios';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UpdateConstruction = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const [remark, setRemark] = useState('');
    const [title, setTitle] = useState('');
    const [constructionDateStart, setConstructionDateStart] = useState('');
    const [constructionDateEnd, setConstructionDateEnd] = useState('');
    const [constructionImages, setConstructionImages] = useState([]);
    const [existingImages, setExistingImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    useEffect(() => {
        const fetchConstruction = async () => {
            try {
                const res = await axios.get(`${apiUrl}/project/getProject/${projectId}`, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                    }
                });
                const data = res.data.data;
                setRemark(data.remark || '');
                setTitle(data.title || '');
                setConstructionDateStart(data.constructionDateStart?.substr(0, 10) || '');
                setConstructionDateEnd(data.constructionDateEnd?.substr(0, 10) || '');
                setExistingImages(data.images || []);
            } catch (error) {
                console.error(error);
                toast.error('Failed to fetch construction update.');
            }
        };

        if (projectId) {
            fetchConstruction();
        }
    }, [projectId, apiUrl, Token]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setConstructionImages((prevFiles) => [...prevFiles, ...files]);
    };

    const handleDeleteExistingImage = (index) => {
        const updatedImages = [...existingImages];
        updatedImages.splice(index, 1);
        setExistingImages(updatedImages);
    };

    const handleDeleteNewImage = (index) => {
        const updatedNewImages = [...constructionImages];
        updatedNewImages.splice(index, 1);
        setConstructionImages(updatedNewImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!remark.trim()) {
            toast.error('Remark is required.');
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append('remark', remark);
            formData.append('title', title);
            formData.append('constructionDateStart', constructionDateStart);
            formData.append('constructionDateEnd', constructionDateEnd);

            constructionImages.forEach((file) => {
                formData.append('images', file);
            });

            formData.append('existingImages', JSON.stringify(existingImages));

            const res = await axios.post(`${apiUrl}/project/updateConstruction?projectId=${projectId}`, formData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success('Construction update saved successfully!');
            setTimeout(() => {
                navigate(`/construction-list/${projectId}`);    
            }, 1500);
        } catch (error) {
            console.error(error);
            toast.error('Failed to save construction update.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="page">
                <TopHeader />
                <Prince />
                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            <div className="page-header">
                                <h2 className="main-content-title tx-24 mg-b-5">Update Construction</h2>
                            </div>

                            <div className="row row-sm">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <h6 className="main-content-label mb-3">BASIC INFO</h6>

                                            <form onSubmit={handleSubmit}>
                                                <div className="row row-sm">

                                                    {/* Title */}
                                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                                        <div className="form-group">
                                                            <label className="form-label">Title</label>
                                                            <input
                                                                className="form-control"
                                                                name="title"
                                                                value={title}
                                                                onChange={(e) => setTitle(e.target.value)}
                                                                placeholder="Enter Title"
                                                                type="text"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Construction From */}
                                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                                        <div className="form-group">
                                                            <label className="form-label">Construction From</label>
                                                            <input
                                                                className="form-control"
                                                                type="date"
                                                                name="constructionDateStart"
                                                                value={constructionDateStart}
                                                                onChange={(e) => setConstructionDateStart(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Construction To */}
                                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                                        <div className="form-group">
                                                            <label className="form-label">Construction To</label>
                                                            <input
                                                                className="form-control"
                                                                type="date"
                                                                name="constructionDateEnd"
                                                                value={constructionDateEnd}
                                                                onChange={(e) => setConstructionDateEnd(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Remark */}
                                                    <div className="col-lg-8 col-md-8">
                                                        <div className="form-group">
                                                            <label className="form-label">Enter Details: <span className="tx-danger">*</span></label>
                                                            <ReactQuill
                                                                theme="snow"
                                                                value={remark}
                                                                onChange={(value) => setRemark(value)}
                                                                style={{ height: "200px" }}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Construction Images */}
                                                    <div className="col-xl-9 col-lg-9 col-md-9 mt-5">
                                                        <div className="form-group">
                                                            <label className="form-label">Construction Images: <span className="tx-danger">*</span></label>
                                                            <input
                                                                type="file"
                                                                className="form-control"
                                                                name="images"
                                                                multiple
                                                                onChange={handleFileChange}
                                                            />

                                                            {/* Existing Images */}
                                                            {/* <h6 className="mt-3">Existing Images:</h6>
                                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                                                {existingImages.length > 0 ? (
                                                                    existingImages.map((img, idx) => (
                                                                        <div key={idx} style={{ position: 'relative' }}>
                                                                            <img
                                                                                src={img.startsWith('http') ? img : `/uploads/${img}`}
                                                                                alt={`existing-${idx}`}
                                                                                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => handleDeleteExistingImage(idx)}
                                                                                style={{
                                                                                    position: 'absolute',
                                                                                    top: '-5px',
                                                                                    right: '-5px',
                                                                                    background: 'red',
                                                                                    color: 'white',
                                                                                    border: 'none',
                                                                                    borderRadius: '50%',
                                                                                    width: '20px',
                                                                                    height: '20px',
                                                                                    cursor: 'pointer',
                                                                                }}
                                                                            >
                                                                                ×
                                                                            </button>
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <p>No existing images</p>
                                                                )}
                                                            </div> */}

                                                            {/* New Images Preview */}
                                                            <h6 className="mt-3">New Images Selected:</h6>
                                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                                                {constructionImages.length > 0 ? (
                                                                    constructionImages.map((file, idx) => (
                                                                        <div key={idx} style={{ position: 'relative' }}>
                                                                            <img
                                                                                src={URL.createObjectURL(file)}
                                                                                alt={`new-${idx}`}
                                                                                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => handleDeleteNewImage(idx)}
                                                                                style={{
                                                                                    position: 'absolute',
                                                                                    top: '-5px',
                                                                                    right: '-5px',
                                                                                    background: 'red',
                                                                                    color: 'white',
                                                                                    border: 'none',
                                                                                    borderRadius: '50%',
                                                                                    width: '20px',
                                                                                    height: '20px',
                                                                                    cursor: 'pointer',
                                                                                }}
                                                                            >
                                                                                ×
                                                                            </button>
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <p>No new images selected</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Submit Button */}
                                                    <div className="col-12 mt-3">
                                                        <button type="submit" className="btn btn-primary" disabled={loading}>
                                                            {loading ? "Updating..." : "Update Construction"}
                                                        </button>
                                                    </div>

                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateConstruction;
