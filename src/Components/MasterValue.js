import React, { useState, useEffect } from 'react'
import MainPage from './MainPage'
import Prince from './Prince';
import DropdownMenu from './DropdownMenu'
import { Link, useNavigate } from 'react-router-dom';
import TopHeader from './TopHeader';
import { toast } from 'react-toastify';
const MasterValue = () => {
    const [genderOptions, setGenderOptions] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const initialFormData = {
        name: '',
        mastersId: "",
        

    };

    const Token = localStorage.getItem('Token');
    console.log('Token:', Token);

    const [formData, setFormData] = useState(initialFormData);
    const [departments, setDepartments] = useState([]);
    const [designations, setDesignations] = useState([]);
    const[selectedDepartmentId, setSelectedDepartmentId]= useState()
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [shouldSubmitForm, setShouldSubmitForm] = useState(false);
    const navigate = useNavigate();

    const apiUrl = process.env.REACT_APP_URL;
    console.log(apiUrl);


  useEffect(() => {
    fetch(`${apiUrl}/master/getAllMaster` ,{
    headers: {
        'Authorization': `Bearer ${Token}`,
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.data)) {
          setDepartments(data.data);
        } else {
          console.error('API response does not contain an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching masters data:', error);
      });
  } , [])

 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
}
const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith('image/')) {
        // Set profilePicFile for image files
        setProfilePicFile(file);
        setFormData((prevData) => ({
          ...prevData,
          profilePhoto: file,


        }));
      } else if (file.type === 'application/pdf') {
        // Set aadhaarUpload for PDF files
        setFormData((prevData) => ({
          ...prevData,
          aadhaarUpload: file,
          panUpload: file,
          drivingLicence: file,
          cheque: file,
        }));
      } else {
        console.log('Unsupported file type');
      }
    } else {
      console.log('No file selected');
    }
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();

  
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }
      
      const apiUrl = process.env.REACT_APP_URL;
      console.log(apiUrl);
  
      const response = await fetch(`${apiUrl}/master/addMasterData`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Token}`,
        },
        body: formDataToSend,
      }); 
      
      console.log(response);
  
      const response2 = await response.json();
      if (response2.status === "error") {
        throw new Error(response2.message);
      }
      toast.success(response2.message);
      navigate("/MasterVal");
    } catch (error) {
      toast.error(error.message);
    }
  };
  
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
   
    setFormData({
      ...formData,
      mastersId: selectedCountry,
    });
    
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
        setShowLoader(false);
    }, 800);

    return () => clearTimeout(timeout);
}, []);

  useEffect(() => {
    const token = localStorage.getItem('Token');

    if (!token) {
        navigate('/');
    }
  }, [navigate]);
    return (
        <>
            {/* Main Header*/}
            <div className="page">
            {showLoader && (
                    <div id="global-loader">
                        <div className="spinner-border text-info loader-img" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}

                <TopHeader />
                <Prince />
               
                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Master Value</h2>
                                    
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">

                                    </div>
                                </div>
                            </div>

                            <div className="row row-sm">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-3">Add Master value</h6>
                                            </div>
                                            <div className="row row-sm">

                                                <div className="col-sm-4  form-group">
                                                    <label className="form-label">Master</label>
                                                    <select onChange={handleCountryChange}
                                                     className='form-control form-select'
                                                     name="mastersId"
                                                     value={formData.mastersId}>
                                                        <option>Select Master</option>
                                                        {departments.map((department) => (
                                                            <option key={department.id} value={department.id}>
                                                                {department.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-sm-4  form-group">
                                                    <label className="form-label">Master Value</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter value"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="col-lg-4 form-group">

                                                    <div className="input-group">

                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                            {/* Row */}

                            {/* End Row */}
                            <div className="row row-sm">
                                <div className="col-12 mb-3">
                                    <button
                                       
                                        className="btn btn-primary"
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>

        </>

    )
}

export default MasterValue