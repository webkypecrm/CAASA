import React, { useState, useEffect } from 'react'
import MainPage from './MainPage'
import Prince from './Prince';
import DropdownMenu from './DropdownMenu'

import { Link, useNavigate, useParams } from 'react-router-dom';
import TopHeader from './TopHeader';
import { toast } from 'react-toastify';

const AddMaster = () => {
  const { empid } = useParams();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [showLoader, setShowLoader] = useState(true);
  const navigate = useNavigate();
  
  const apiUrl = process.env.REACT_APP_URL;
  console.log(apiUrl);

  const Token = localStorage.getItem("Token");
  console.log("Token " + Token);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const url = `${apiUrl}/master/getMasterById/${empid}`;
        let result = await fetch(url , {
          headers: {
              'Authorization': `Bearer ${Token}` 
          }
      });
        result = await result.json();

        const { data } = result;
        setId(data.id);
        setName(data.name);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUser();
  }, [empid]);

  const handleUpdate = async () => {
    try {
      const empdata = {
        name,
        // other properties you might need to update
      };


      const url = `${apiUrl}/master/updateMaster/${empid}`;
      let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(empdata),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`
        }
      });

      response = await response.json();

      if (response.status === 'success') {
        toast.success('Master Updated Successfully')
       
        navigate('/Master');
        // handle success scenario
      } else {
        toast.error('Master Update Failed')
        console.log('Data not updated');
        // handle failure scenario
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error);
    }
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
                  <h2 className="main-content-title tx-24 mg-b-5">Edit Master</h2>
                 
                </div>
              
              </div>
             
              <div className="row row-sm">
                <div className="col-lg-6 col-md-6">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-3"></h6>
                      </div>
                      <div className="row row-sm">

                        <div className="col-sm-4  form-group">
                          <label className="form-label">Name</label>
                          <input type="text" className="form-control"
                          name="name"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          
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
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Main Content*/}
        {/* Main Footer*/}

        {/*End Footer*/}
        {/* Sidebar */}
        <div className="sidebar sidebar-right sidebar-animate">
          <div className="sidebar-icon">
            <a
              href="#"
              className="text-end float-end text-dark fs-20"
              data-bs-toggle="sidebar-right"
              data-bs-target=".sidebar-right"
            >
              <i className="fe fe-x" />
            </a>
          </div>
          <div className="sidebar-body">
            <h5>Todo</h5>
            <div className="d-flex p-3">
              <label className="ckbox">
                <input defaultChecked="" type="checkbox" />
                <span>Hangout With friends</span>
              </label>
              <span className="ms-auto">
                <i
                  className="fe fe-edit-2 text-primary me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Edit"
                />
                <i
                  className="fe fe-trash-2 text-danger me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Delete"
                />
              </span>
            </div>
            <div className="d-flex p-3 border-top">
              <label className="ckbox">
                <input type="checkbox" />
                <span>Prepare for presentation</span>
              </label>
              <span className="ms-auto">
                <i
                  className="fe fe-edit-2 text-primary me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Edit"
                />
                <i
                  className="fe fe-trash-2 text-danger me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Delete"
                />
              </span>
            </div>
            <div className="d-flex p-3 border-top">
              <label className="ckbox">
                <input type="checkbox" />
                <span>Prepare for presentation</span>
              </label>
              <span className="ms-auto">
                <i
                  className="fe fe-edit-2 text-primary me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Edit"
                />
                <i
                  className="fe fe-trash-2 text-danger me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Delete"
                />
              </span>
            </div>
            <div className="d-flex p-3 border-top">
              <label className="ckbox">
                <input defaultChecked="" type="checkbox" />
                <span>System Updated</span>
              </label>
              <span className="ms-auto">
                <i
                  className="fe fe-edit-2 text-primary me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Edit"
                />
                <i
                  className="fe fe-trash-2 text-danger me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Delete"
                />
              </span>
            </div>
            <div className="d-flex p-3 border-top">
              <label className="ckbox">
                <input type="checkbox" />
                <span>Do something more</span>
              </label>
              <span className="ms-auto">
                <i
                  className="fe fe-edit-2 text-primary me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Edit"
                />
                <i
                  className="fe fe-trash-2 text-danger me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Delete"
                />
              </span>
            </div>
            <div className="d-flex p-3 border-top">
              <label className="ckbox">
                <input type="checkbox" />
                <span>System Updated</span>
              </label>
              <span className="ms-auto">
                <i
                  className="fe fe-edit-2 text-primary me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Edit"
                />
                <i
                  className="fe fe-trash-2 text-danger me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Delete"
                />
              </span>
            </div>
            <div className="d-flex p-3 border-top">
              <label className="ckbox">
                <input type="checkbox" />
                <span>Find an Idea</span>
              </label>
              <span className="ms-auto">
                <i
                  className="fe fe-edit-2 text-primary me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Edit"
                />
                <i
                  className="fe fe-trash-2 text-danger me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Delete"
                />
              </span>
            </div>
            <div className="d-flex p-3 border-top mb-0">
              <label className="ckbox">
                <input type="checkbox" />
                <span>Project review</span>
              </label>
              <span className="ms-auto">
                <i
                  className="fe fe-edit-2 text-primary me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Edit"
                />
                <i
                  className="fe fe-trash-2 text-danger me-2"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-placement="top"
                  data-bs-original-title="Delete"
                />
              </span>
            </div>
            <h5>Overview</h5>
            <div className="p-4">
              <div className="main-traffic-detail-item">
                <div>
                  <span>Founder &amp; CEO</span> <span>24</span>
                </div>
                <div className="progress">
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    aria-valuenow={20}
                    className="progress-bar progress-bar-xs wd-20p"
                    role="progressbar"
                  />
                </div>
                {/* progress */}
              </div>
              <div className="main-traffic-detail-item">
                <div>
                  <span>UX Designer</span> <span>1</span>
                </div>
                <div className="progress">
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    aria-valuenow={15}
                    className="progress-bar progress-bar-xs bg-secondary wd-15p"
                    role="progressbar"
                  />
                </div>
                {/* progress */}
              </div>
              <div className="main-traffic-detail-item">
                <div>
                  <span>Recruitment</span> <span>87</span>
                </div>
                <div className="progress">
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    aria-valuenow={45}
                    className="progress-bar progress-bar-xs bg-success wd-45p"
                    role="progressbar"
                  />
                </div>
                {/* progress */}
              </div>
              <div className="main-traffic-detail-item">
                <div>
                  <span>Software Engineer</span> <span>32</span>
                </div>
                <div className="progress">
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    aria-valuenow={25}
                    className="progress-bar progress-bar-xs bg-info wd-25p"
                    role="progressbar"
                  />
                </div>
                {/* progress */}
              </div>
              <div className="main-traffic-detail-item">
                <div>
                  <span>Project Manager</span> <span>32</span>
                </div>
                <div className="progress">
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    aria-valuenow={25}
                    className="progress-bar progress-bar-xs bg-danger wd-25p"
                    role="progressbar"
                  />
                </div>
                {/* progress */}
              </div>
            </div>
          </div>
        </div>
        {/* End Sidebar */}
      </div>

    </>

  )
}

export default AddMaster