import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const FaqEdit = () => {

    const { empid } = useParams();
    const initialFormData = {
        question: '',
        answer: '',

    };

    const [formData, setFormData] = useState(initialFormData);

    const navigate = useNavigate();
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;




    useEffect(() => {
        const fetchUser = async () => {

            try {
                const url = `${apiUrl}/faq/getFaqById?id=${empid}`;
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

                    question: data.question,
                    answer: data.answer,


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

            const response = await fetch(`${apiUrl}/faq/edit?id=${empid}`, {
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
            navigate("/faq-list");
        } catch (error) {
            toast.error(error.message);

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

                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Update FAQ</h2>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">

                                            <div className="row row-sm">
                                                <div className="col-lg-12 form-group">
                                                    <label className="form-label">
                                                        Question
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="question"
                                                        value={formData.question}
                                                        onChange={handleChange}
                                                        placeholder="Enter"
                                                        required=""
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="col-lg-12 form-group" style={{ height: '300px' }}>
                                                    <label className="form-label">
                                                        Answer
                                                    </label>

                                                    <ReactQuill
                                                        theme="snow"
                                                        value={formData.answer}
                                                        onChange={(value) =>
                                                            setFormData((prevState) => ({
                                                                ...prevState,
                                                                answer: value,
                                                            }))
                                                        }
                                                        style={{ height: "200px" }}
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

export default FaqEdit
