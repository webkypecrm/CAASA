import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import UserProfileDropdown from '../Components/DropdownMenu'; // Import the UserProfileDropdown component

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null); // Store user data

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform client-side validation (e.g., check for empty fields)
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    const apiUrl = 'https://e685-2405-201-4055-3801-8846-e03b-3686-662d.ngrok-free.app/employee-login'; // Replace with your actual API URL

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json(); // Parse the response data

      // Check for success based on the response data (modify this condition as needed)
      if (responseData.status === 'success') {
        console.log('Login successful');
        // Store user data in state
        setUser(responseData.user);
        // Navigate to the next page
        navigate('/nextPage');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('Login failed. Please check your credentials.');
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
                {/* ... (Rest of your code remains the same) */}
                <img src={logo} alt="Logo" />

              </div>
              <div className="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form">
                <div className="main-container container-fluid">
                  <div className="row row-sm">
                    <div className="card-body mt-2 mb-2">
                      <form onSubmit={handleLogin}>
                        <h5 className="text-start mb-2">Sign in to Your Account</h5>
                        <p className="mb-4 text-muted tx-13 ms-0 text-start">Sign in to create, discover, and connect with the global community</p>
                        {error && <div className="text-danger">{error}</div>}
                        {user ? (
                          // If user is logged in, display UserProfileDropdown
                          <UserProfileDropdown user={user} />
                        ) : (
                          // Otherwise, display login form
                          <>
                            <div className="form-group text-start">
                              <label>Email</label>
                              <input
                                className="form-control"
                                placeholder="Enter your email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div className="form-group text-start">
                              <label>Password</label>
                              <input
                                className="form-control"
                                placeholder="Enter your password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                            <button type="submit" className="btn ripple btn-main-primary btn-block">
                              Sign In
                            </button>
                          </>
                        )}
                      </form>
                      <div className="text-start mt-3 ms-0">
                        <div className="mb-1"><a href="forgot.html">Forgot password?</a></div>
                        <div>Don't have an account? <Link to="/signup">Register Here</Link></div>
                      </div>
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

export default LoginForm;
