import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setcnfPassword] = useState('');
    const [error, setError] = useState('');
    const [otpSent, setOtpSent] = useState(false)

    const navigate = useNavigate();
    const notify = () => toast("Login successful ");


    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email) {

            setError('Please enter email.');
            return;
        }
        const apiUrl = process.env.REACT_APP_URL;
        console.log(apiUrl);

        try {
            const response = await fetch(`${apiUrl}/employee/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const responseData = await response.json();
            console.log(responseData.data.Token, 'tokennnnnnnnnnnnnnnnnn');
            localStorage.setItem("Token", responseData.data.Token)


            if (responseData.status === 'success') {
                console.log(responseData.message);
                toast.success(responseData.message);
                setOtpSent(true)

            } else {
                toast.error(responseData.message)

            }
        } catch (error) {
            toast.error(error.message);
            console.error('Fetch error:', error);
        }
    };

    const handleForgot = async (e) => {
        e.preventDefault();

        if (!otp) {

            setError('Please enter otp.');
            return;
        }
        if (!password || !cnfPassword) {

            setError('Please enter and confirm password.');
            return;
        }
        const apiUrl = process.env.REACT_APP_URL;
        console.log(apiUrl);

        try {
            const response = await fetch(`${apiUrl}/employee/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    otp: otp,
                    newPassword: password,
                    confirmPassword: cnfPassword
                }),
            });

            const responseData = await response.json();


            if (responseData.status === 'success') {
                console.log(responseData);

                toast.success('Password Changed Successfully');
                // Navigate to the next page
                navigate('/');

            } else {
                toast.error(responseData.message)

            }
        } catch (error) {
            toast.error(error.message);
            console.error('Fetch error:', error);
        }
    };


    return (
        <div className="page main-signin-wrapper">
            <div className="row signpages text-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="row row-sm">
                            <div className="col-lg-6 col-xl-5 d-none d-lg-block text-center bg-white">
                                <div className="mt-5 pt-4 p-2 pos-absolute">
                                    <img src='https://amrealty.webkype.com/assets/img/brand/logo.png' className="d-lg-none header-brand-img text-start float-start mb-4 error-logo-light" alt="logo" />
                                    <div className="clearfix"></div>
                                    <img src='https://amrealty.webkype.com/assets/img/brand/logo.png' className=" mb-0" alt="user" style={{ width: '50%' }} />
                                    <h5 className="mt-4 txt-blue">Reset Your Account Password</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form">
                                <div
                                    className="main-container container-fluid">
                                    <div className="row row-sm">
                                        <div className="card-body mt-2 mb-2">
                                            <form onSubmit={handleLogin}>
                                                <h5 className="text-start mb-2">Reset Your Account Password</h5>
                                                {error && <div className="text-danger">{error}</div>}
                                                {!otpSent && <div className="form-group text-start">
                                                    <label>Email</label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Enter your email"
                                                        type="text"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>}
                                                {otpSent && <div className="form-group text-start">
                                                    <label>OTP</label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Enter received OTP"
                                                        type="number"

                                                        value={otp}
                                                        onChange={(e) => setOtp(e.target.value)}
                                                    />
                                                </div>}
                                                {otpSent && <div className="form-group text-start">
                                                    <label>New Password</label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Enter your password"
                                                        type="password"

                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>}
                                                {otpSent && <div className="form-group text-start">
                                                    <label>Confirm Password</label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Confirm your password"
                                                        type="password"

                                                        value={cnfPassword}
                                                        onChange={(e) => setcnfPassword(e.target.value)}
                                                    />
                                                </div>}
                                                {!otpSent && <button type="submit" className="btn ripple btn-main-primary btn-block">
                                                    Send OTP
                                                </button>}
                                                {otpSent && <button onClick={(e) => {
                                                    handleForgot(e)
                                                }} className="btn ripple btn-main-primary btn-block">
                                                    Change Password
                                                </button>}
                                            </form>
                                            {/* <div className="text-start mt-3 ms-0">
                        <div className="mb-1"><a href="forgot.html">Forgot password?</a></div>
                        <div>Don't have an account? <Link to="/signup">Register Here</Link></div>
                      </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
