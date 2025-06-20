import React, { useState } from 'react'

const He = () => {
    const initialFormData = {
        fullName: '',
        email: '',
        mobileNo: '',
        companyName: '',
        companyEmail: '',
        companyPhone: '',
        companyWebsite: '',
        category: '',
        quality: '',
        quantity: '',
        dateOfDelivery: '',
        shipFrom: '',
        shipTo: '',
        rate: '',


    }
    const [formData, setFormData] = useState(initialFormData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errors, setErrors] = useState({});

    const getCurrentDate = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();
        return `${year}-${month}-${day}`;
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const Token = localStorage.getItem('Token');
        console.log('Token:', Token);

        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch('http://192.168.29.142:4000/lead/add-Lead?fullName =monika', {

                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${Token}`,
                },
                body: formDataToSend,
            });
            console.log(response)

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);

            }

            const data = await response.json();
            console.log('Form submitted successfully!', data);



            setFormData(initialFormData);
        } catch (error) {
            console.error('Error:', error);

            // Handle specific errors or display appropriate messages
        }
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        const newErrors = { ...errors };

        if (!value.trim()) {
            newErrors[name] = `${name.toLowerCase()} is required`;
        } else if (
            name === 'fullName' && !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value)
        ) {
            newErrors[name] = `Please enter a valid ${name} with only alphabetical characters`;
        } else if (
            name === 'companyName' && !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value)
        ) {
            newErrors[name] = `Please enter a valid ${name} with only alphabetical characters`;
        } else if (
            name === 'email' && (!value.trim() || !emailRegex.test(value))
        ) {

            newErrors[name] = 'Please enter a valid email address';
        }
        else if (
            name === 'companyEmail' && (!value.trim() || !emailRegex.test(value))
        ) {
            newErrors[name] = 'Please enter a valid Company Email address';
        } else if (
            name === 'mobileNo' && (!value.trim() || !/^\d{10}$/.test(value))
        ) {
            newErrors[name] = 'Please enter a valid 10-digit mobile number';
        }
        else if (
            name === 'companyPhone' && (!value.trim() || !/^\d{10}$/.test(value))
        ) {
            newErrors[name] = 'Please enter a valid 10-digit mobile number';
        } else if (
            name === 'aadhaarNo' && (!value.trim() || !/^\d{12}$/.test(value))
        ) {
            newErrors[name] = 'Please enter a valid 12-digit Aadhaar number';
        } else if (
            name === 'panNo' && (!value.trim() || !/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(value))
        ) {
            newErrors[name] = 'Please enter a valid PAN number in the format ABCDE1234F';
        } else if (
            name === 'accountNo' && (!value.trim() || !/^\d{16}$/.test(value))
        ) {
            newErrors[name] = 'Please enter a valid 16-digit account number';
        } else if (
            name === 'accountName' && !/^[A-Za-z\s]+$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid account name with only alphabetical characters';
        } else if (
            name === 'bankName' && !/^[A-Za-z\s]+$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid bank name with only alphabetical characters';
        } else if (
            name === 'ifsc' && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid IFSC code in the format ABCD0123456';
        }
        else if (
            name === 'billingPinCode' && !/^\d{6}$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid 6-digit pin code';
        }
        else if (
            name === 'offeredPackage' && !/^\d{8}$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid 8-digit offeredPackage';
        }
        else if (
            name === 'offeredCTC' && !/^\d{8}$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid 8-digit offeredCTC';
        }
        else if (
            name === 'perHourCharges' && !/^\d{8}$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid 8-digit perHourCharges';
        } else {
            delete newErrors[name]; // Remove error if field is valid
        }

        setErrors(newErrors);
    };

    const handleInputBlur = (event) => {
        const { name, value } = event.target;
        const newErrors = { ...errors };

        if (!value.trim()) {
            newErrors[name] = ``;
        } else if (
            name === 'firstName' && !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value)
        ) {
            newErrors[name] = `Please enter a valid ${name} with only alphabetical characters`;
        } else if (
            name === 'companyName' && !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value)
        ) {
            newErrors[name] = `Please enter a valid ${name} with only alphabetical characters`;
        } else if (
            name === 'email' && (!value.trim() || !emailRegex.test(value))
        ) {
            newErrors[name] = 'Please enter a valid email address';
        }
        else if (
            name === 'companyEmail' && (!value.trim() || !emailRegex.test(value))
        ) {
            newErrors[name] = 'Please enter a valid Company Email address';
        } else if (
            name === 'mobileNo' && (!value.trim() || !/^\d{10}$/.test(value))
        ) {
            newErrors[name] = 'Please enter a valid 10-digit mobile number';
        }
        else if (
            name === 'companyPhone' && (!value.trim() || !/^\d{10}$/.test(value))
        ) {
            newErrors[name] = 'Please enter a valid 10-digit mobile number';
        } else if (
            name === 'adharNumber' && (!value.trim() || !/^\d{12}$/.test(value))
        ) {
            newErrors[name] = 'Please enter a valid 16-digit Aadhaar number';
        } else if (
            name === 'panNo' && (!value.trim() || !/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(value))
        ) {
            newErrors[name] = 'Please enter a valid PAN number in the format ABCDE1234F';
        } else if (
            name === 'accountNo' && (!value.trim() || !/^\d{16}$/.test(value))
        ) {
            newErrors[name] = 'Please enter a valid 16-digit account number';
        } else if (
            name === 'accountName' && !/^[A-Za-z\s]+$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid account name with only alphabetical characters';
        } else if (
            name === 'bankName' && !/^[A-Za-z\s]+$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid bank name with only alphabetical characters';
        } else if (
            name === 'ifsc' && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid IFSC code in the format ABCD0123456';
        }
        else if (
            name === 'billingPinCode' && !/^\d{6}$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid 6-digit pin code';
        }
        else if (
            name === 'offeredPackage' && !/^\d{8}$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid 8-digit offeredPackage';
        } else if (
            name === 'offeredCTC' && !/^\d{8}$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid 8-digit offeredCTC';
        } else if (
            name === 'perHourCharges' && !/^\d{8}$/.test(value)
        ) {
            newErrors[name] = 'Please enter a valid 8-digit perHourCharges';

        } else {
            delete newErrors[name]; // Remove error if field is valid
        }

        setErrors(newErrors);
    };

    return (
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h6 className="modal-title">Add Lead</h6>
                    <button
                        aria-label="Close"
                        className="btn-close"
                        onClick={closeModal}
                        type="button"
                    />
                </div>
                <hr />
                <div className="modal-body">
                    <div className="row row-sm-1">
                        <div className="col-lg-4">
                            <label className="form-label">
                                Full Name: <span className="tx-danger">*</span>
                            </label>
                            <input
                                className="form-control"
                                name="fullName"
                                value={formData.fullName}
                                placeholder="Enter firstname"
                                required=""
                                type="text"
                                onChange={handleChange}
                                onBlur={handleInputBlur}
                            />
                            {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}
                        </div>
                        <div className="col-lg-4 form-group">
                            <label className="form-label">
                                Email ID: <span className="tx-danger">*</span>
                            </label>
                            <input
                                className="form-control"
                                name="email"
                                value={formData.email}
                                placeholder="Enter email"
                                required=""
                                type="text"
                                onChange={handleChange}
                                onBlur={handleInputBlur}
                            />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </div>
                        <div className="col-lg-4 form-group">
                            <label className="form-label">
                                Mobile No: <span className="tx-danger">*</span>
                            </label>
                            <input
                                className="form-control"
                                name="mobileNo"
                                value={formData.mobileNo}
                                placeholder="Enter mobile number"
                                required=""
                                type="text"
                                onChange={handleChange}
                                onBlur={handleInputBlur}
                            />
                            {errors.mobileNo && <p style={{ color: 'red' }}>{errors.mobileNo}</p>}
                        </div>
                        <div className="col-sm-4 form-group">
                            <label className="form-label">Company Name</label>
                            <input
                                className="form-control"
                                name="companyName"
                                value={formData.companyName}
                                required=""
                                type="text"
                                onChange={handleChange}
                                onBlur={handleInputBlur}
                            />
                            {errors.companyName && <p style={{ color: 'red' }}>{errors.companyName}</p>}
                        </div>
                        <div className="col-sm-4 form-group">
                            <label className="form-label">Company Email</label>
                            <input
                                className="form-control"
                                name="companyEmail"
                                value={formData.companyEmail}
                                required=""
                                type="text"
                                onChange={handleChange}
                                onBlur={handleInputBlur}
                            />
                            {errors.companyEmail && <p style={{ color: 'red' }}>{errors.companyEmail}</p>}
                        </div>
                        <div className="col-sm-4 form-group">
                            <label className="form-label">Company Phone</label>
                            <input
                                className="form-control"
                                name="companyPhone"
                                value={formData.companyPhone}
                                required=""
                                type="text"
                                onChange={handleChange}
                                onBlur={handleInputBlur}
                            />
                            {errors.companyPhone && <p style={{ color: 'red' }}>{errors.companyPhone}</p>}
                        </div>
                        <div className="col-sm-4 form-group">
                            <label className="form-label">Company Website</label>
                            <input
                                className="form-control"
                                name="companyWebsite"
                                value={formData.companyWebsite}
                                required=""
                                type="text"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-sm-4 form-group">
                            <label className="form-label">Category</label>
                            <select className="form-control select select2">
                                <option>Select</option>
                            </select>
                        </div>
                        <div className="col-lg-12">
                            <hr className="my-2" />
                        </div>
                    </div>
                    <div className="row row-sm">
                        <div className="col-lg-12">
                            <h6 className="main-content-label mb-3 mt-2">Requirement</h6>
                        </div>
                        <div className="col-sm-4 form-group">
                            <label className="form-label">Quality</label>
                            <select className="form-control select select2">
                                <option>Select</option>
                                <option>White Rice</option>
                            </select>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label className="form-label">Quantity</label>
                                <input
                                    className="form-control"
                                    name="quantity"
                                    value={formData.quantity}
                                    required=""
                                    type="text"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label className="form-label">Date of delivery</label>
                                <input
                                    type="date"
                                    name="dateOfDelivery"
                                    value={formData.dateOfDelivery}
                                    onChange={handleChange}
                                    max={getCurrentDate()}
                                // Restricts selection to current date or earlier
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <label className="form-label">Ship From</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text border-end-0" id="basic-addon1">
                                    <i className="fa fa-map-marker-alt" />
                                </span>
                                <input
                                    aria-describedby="basic-addon1"
                                    aria-label="Ship From"
                                    className="form-control"
                                    name="shipFrom"
                                    placeholder="Enter location"
                                    type="text"
                                    value={formData.shipFrom}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <label className="form-label">Ship To</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text border-end-0" id="basic-addon2">
                                    <i className="fa fa-map-marker-alt" />
                                </span>
                                <input
                                    aria-describedby="basic-addon2"
                                    aria-label="Ship To"
                                    className="form-control"
                                    name="shipTo"
                                    placeholder="Enter location"
                                    type="text"
                                    value={formData.shipTo}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label className="form-label">Rate</label>
                                <input
                                    className="form-control"
                                    name="rate"
                                    required=""
                                    type="text"
                                    value={formData.rate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <button className="btn ripple btn-primary" onClick={handleSubmit} type="button">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default He