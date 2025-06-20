import React from 'react';

const Fwip = () => {
  const containerStyle = {
    maxWidth: '200px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'right',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const formGroupStyle = {
    textAlign: 'center',
    backgroundColor: 'white',
  };

  const linkStyle = {
    color: 'blue',
    textDecoration: 'none',
    margin: '5px',
  };

  return (
    <div style={containerStyle}>
      
      <form className='amit'>
        <div className='form-group' style={formGroupStyle}>
          <div className="header-navheading">
            <h6 className="main-notification-title">Sonia Taylor</h6>
            <p className="main-notification-text">Web Designer</p>
          </div>
          <a className="dropdown-item border-top" href="profile.html" style={linkStyle}>
            My Profile
          </a>
          <a className="dropdown-item" href="profile.html" style={linkStyle}>
            Edit Profile
          </a>
          <a className="dropdown-item" href="profile.html" style={linkStyle}>
            Account Settings
          </a>
          <a className="dropdown-item" href="profile.html" style={linkStyle}>
            Support
          </a>
          <a className="dropdown-item" href="profile.html" style={linkStyle}>
            Activity
          </a>
          <a className="dropdown-item" href="signin.html" style={linkStyle}>
            Sign Out
          </a>
        </div>
      </form>
    </div>
  );
};

export default Fwip;
