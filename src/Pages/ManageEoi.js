import React, { useState, useEffect } from 'react';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { faLess } from '@fortawesome/free-brands-svg-icons';


const ManageEoi = () => {
    const initialFormData2 = {
       
        applyCost: '',
    };
    const [formData2, setFormData2] = useState(initialFormData2);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [toggleStates, setToggleStates] = useState({});
    const [loading, setLoading] = useState(true);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState('');
    const navigate = useNavigate();
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;

    const loadContent = (id) => {
        navigate(`/eoi-project-edit/${id}`);
    };


    const handleOpenModal2 = () => {
        setIsModalOpen2(true);
        document.body.classList.add('modal-open');
    };
    const handleCloseModal2 = () => {
        setIsModalOpen2(false);

        document.body.classList.remove('modal-open');
    };


    

    const handleToggle = async (userId) => {
        setIsModalOpen3(userId);
        const newState = !toggleStates[userId]; // Get the new state for the toggle
    
        // If the new state is 'false', open the modal
        if (!newState) {
            handleOpenModal2(userId);
            return; // Exit if the toggle is being turned off
        }
    
        // Update the toggle state and store it in local storage
        setToggleStates((prevStates) => {
            const newStates = { ...prevStates, [userId]: newState };
            localStorage.setItem('toggleStates', JSON.stringify(newStates)); // Persist state
            return newStates; // Return the new states
        });
    
        // Call updateStatus API only if the toggle is turned 'on'
        await updateStatus(userId, newState);
    };
    
    // Retrieve toggle states from local storage when the component mounts
    useEffect(() => {
        const savedToggleStates = localStorage.getItem('toggleStates');
        if (savedToggleStates) {
            setToggleStates(JSON.parse(savedToggleStates));
        }
    }, []);
    
    // Function to make the API call to update status
    const updateStatus = async (empId, status) => {
        const url = `${apiUrl}/project/withSubscription?projectId=${empId || isModalOpen3}&withSubscription=${status || false}`;
        
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            
            const data = await response.json(); // Ensure the response data is assigned correctly
    
            if (data.status === 'success') {
                toast.success(data.message); // Use `data.message` for the success toast
                fetchDataFromApi();
            } else {
                toast.error("Failed to update status");
            }
        } catch (error) {
            toast.error("An error occurred while updating status");
        }
    };
    
    
    
    // API Call on Modal Form Submission (updateData function)
    const updateData = async () => {
        const url = `${apiUrl}/project/applyCost?projectId=${isModalOpen3}&projectCost=${formData2.projectCost}&applyCost=${formData2.applyCost}`;
        
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            
            const data = await response.json(); // Ensure you get the response data here
    
            if (data.status === 'success') {
                toast.success(data.message); // Use `data.message` here instead of `message`
                updateStatus();
    
                // Close the modal and reset form data
                handleCloseModal2();
                setFormData2(initialFormData2);
            } else {
                toast.error("Failed to update status");
            }
        } catch (error) {
            toast.error("An error occurred while updating status");
        }
    };
    


    const handleInputChange2 = (event) => {
        const { name, value } = event.target;
        setFormData2({
            ...formData2,
            [name]: value,
        });
    }


    const deleteContent = (id) => {
        fetch(`${apiUrl}/project/deleteProject/` + id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${Token}`,
            }
        })
            .then((res) => {
                if (res.ok) {
                    fetchDataFromApi();
                    toast.success("Project deleted successfully");
                } else {
                    throw new Error('Failed to delete');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const formatDateTimes = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

  // Fetch user data from the API
const fetchDataFromApi = async () => {
    setLoading(true);
    try {
        const response = await fetch(`${apiUrl}/project/getAllProject?isEOI=true`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        });
        const data = await response.json();

        if (data.status === 'success' && Array.isArray(data.data)) {
            const formattedData = data.data.map(item => ({
                ...item,
                createdAt: item.createdAt ? formatDateTimes(item.createdAt) : '',
            }));
            setUsers(formattedData);

            // Initialize toggle states based on fetched user data
            const initialToggleStates = {};
            formattedData.forEach(user => {
                initialToggleStates[user.id] = user.withSubscription; // Assuming this determines the toggle state
            });
            setToggleStates(initialToggleStates);
            localStorage.setItem('toggleStates', JSON.stringify(initialToggleStates)); // Persist states
        } else {
            console.error('API response error:', data.message || 'Data array not found');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        setLoading(false); // Ensure loading state is reset in any case
    }
};


    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user.projectName.toLowerCase();
        return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase);
    });


    const keyframes = `
    @keyframes bounce {
      0%, 100% {
        transform: scale(0.9);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.5);
        opacity: 1;
      }
    }
    `;

    const loaderStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        },
        loaderContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
        },
        dot: {
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#3498db',
            animation: 'bounce 1.2s infinite ease-in-out',
        },
    };

    // Inject keyframes into the document
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


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
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5"> EOI Project List</h2>

                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to='/add-eoi-project'
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            <i className="fe fe-plus me-2" /> Add EOI Projects
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <input
                                                        type="search"
                                                        className="form-control"
                                                        placeholder="Search..."
                                                        aria-controls="example1"
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row row-sm">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                {loading ? (
                                                    <div style={loaderStyles.overlay}>
                                                        <div style={loaderStyles.loaderContainer}>
                                                            <div style={loaderStyles.dot}></div>
                                                            <div style={{ ...loaderStyles.dot, animationDelay: '0.2s' }}></div>
                                                            <div style={{ ...loaderStyles.dot, animationDelay: '0.4s' }}></div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <table className="table table-striped table-bordered mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th style={{ whiteSpace: 'nowrap' }}>Project Image</th>
                                                                <th style={{ whiteSpace: 'nowrap' }}>Privilege Premium Plan</th>
                                                                <th style={{ whiteSpace: 'nowrap' }}>Privilege Premium+ Plan</th>
                                                                <th>Project Information</th>
                                                                <th>Inventory</th>
                                                                <th>Date</th>
                                                                <th>Photo</th>
                                                                <th style={{ whiteSpace: 'nowrap' }}>Provisional Inventory</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {filteredUsers.map((user) => (
                                                                <tr key={user.id}>
                                                                    <td>{user.id}</td>
                                                                    <td>
                                                                        <img
                                                                            alt="avatar"
                                                                            src={user.banner || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                            style={{ width: 60 }}
                                                                        />
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        {Array.isArray(user.projectsubscription) && user.projectsubscription.length > 0 ? (
                                                                            user.projectsubscription
                                                                                .filter(subscription => subscription.isPremimum === false)
                                                                                .map((subscription, subIndex) => {
                                                                                    // Check if all fields are empty
                                                                                    const hasData = subscription.eoiType || subscription.eoiCode || subscription.eoiPrice || subscription.eoiTerms;

                                                                                    return (
                                                                                        <div key={subIndex}>
                                                                                            {hasData ? (
                                                                                                <>
                                                                                                    <strong>EOI Type:</strong> {subscription.eoiType || 'N/A'}<br />
                                                                                                    <strong>EOI Code:</strong> {subscription.eoiCode || 'N/A'}<br />
                                                                                                    <strong>EOI Price:</strong> {subscription.eoiPrice || 'N/A'}<br />
                                                                                                    <strong>EOI Terms:</strong> {subscription.eoiTerms || 'N/A'}<br />
                                                                                                    <br />
                                                                                                </>
                                                                                            ) : (
                                                                                                <div></div>
                                                                                            )}
                                                                                        </div>
                                                                                    );
                                                                                })
                                                                        ) : (
                                                                            <div>No EOI details available</div>
                                                                        )}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        {Array.isArray(user.projectsubscription) && user.projectsubscription.length > 0 ? (
                                                                            user.projectsubscription
                                                                                .filter(subscription => subscription.isPremimum === true)
                                                                                .map((subscription, subIndex) => {
                                                                                    // Check if all fields are empty
                                                                                    const hasData = subscription.eoiType || subscription.eoiCode || subscription.eoiPrice || subscription.eoiTerms;

                                                                                    return (
                                                                                        <div key={subIndex}>
                                                                                            {hasData ? (
                                                                                                <>
                                                                                                    <strong>EOI Type:</strong> {subscription?.eoiType ? subscription.eoiType : 'N/A'}<br />
                                                                                                    <strong>EOI Code:</strong> {subscription?.eoiCode ? subscription.eoiCode : 'N/A'}<br />
                                                                                                    <strong>EOI Price:</strong> {subscription?.eoiPrice ? subscription.eoiPrice : 'N/A'}<br />
                                                                                                    <strong>EOI Terms:</strong> {subscription?.eoiTerms ? subscription.eoiTerms : 'N/A'}<br />

                                                                                                    <br />
                                                                                                </>
                                                                                            ) : (
                                                                                                <div></div>
                                                                                            )}
                                                                                        </div>
                                                                                    );
                                                                                })
                                                                        ) : (
                                                                            <div>No EOI details available</div>
                                                                        )}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        <p className="mb-0">
                                                                            Land Name: {user.locationId}
                                                                            <br />
                                                                            Project Name: {user.projectName}
                                                                            <br />
                                                                            Allocated Area: {user.areaAllocateToProject ? `${user.areaAllocateToProject} Beegha` : ''}
                                                                        </p>
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        No Of Plot: {user.noOfPlot}<br />
                                                                        No Of Shop: {user.noOfShop}<br />
                                                                        No Of Farm House: {user.noOfFarmHouse}
                                                                    </td>
                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        Created Date: {user.createdAt}<br />
                                                                        Created By: {user.creatorId}
                                                                    </td>

                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        Brochure:  <Link to={user.brochure} title="Brochure" target="__blanck" >
                                                                            <i className="fe fe-eye " style={{ cursor: 'pointer' }} />
                                                                        </Link>
                                                                        <br />
                                                                        Photo 1: <Link to={user.photo1} title="Photo 1" target="__blanck" >
                                                                            <i className="fe fe-eye " style={{ cursor: 'pointer' }} />
                                                                        </Link>
                                                                        <br />
                                                                        Photo 2: <Link to={user.photo2} title="Photo 2" target="__blanck" >
                                                                            <i className="fe fe-eye " style={{ cursor: 'pointer' }} />
                                                                        </Link>
                                                                        <br />
                                                                        Photo 3: <Link to={user.photo3} title="Photo 3" target="__blanck" >
                                                                            <i className="fe fe-eye " style={{ cursor: 'pointer' }} />
                                                                        </Link>
                                                                        <br />
                                                                        Photo 4: <Link to={user.photo4} title="Photo 4" target="__blanck" >
                                                                            <i className="fe fe-eye " style={{ cursor: 'pointer' }} />
                                                                        </Link>
                                                                        <br />
                                                                        Video: <Link to={user.videoLink} title="Video" target="__blanck" >
                                                                            <i className="fe fe-eye " style={{ cursor: 'pointer' }} />
                                                                        </Link>
                                                                        <br />
                                                                        MAP: <Link to={user.projectMap} title="map" target="__blanck" >
                                                                            <i className="fe fe-eye " style={{ cursor: 'pointer' }} />
                                                                        </Link>
                                                                    </td>

                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        <Link
                                                                            to='/inventory-view'
                                                                            type="button"
                                                                            className="btn ripple btn-xs mb-1"
                                                                            style={{
                                                                                backgroundColor: 'green',
                                                                                color: 'white',
                                                                                width: '70%',
                                                                                transition: 'all 0.3s ease-in-out',
                                                                            }}
                                                                            onMouseOver={(e) => {
                                                                                e.target.style.transform = 'scale(1.05)';
                                                                                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                                                                            }}
                                                                            onMouseOut={(e) => {
                                                                                e.target.style.transform = 'scale(1)';
                                                                                e.target.style.boxShadow = 'none';
                                                                            }}
                                                                        >
                                                                            Inventory
                                                                        </Link>

                                                                        {/* <br />

                                                                        <Link
                                                                            to={`/add-eoi-plan/${user.id}`}
                                                                            type="button"
                                                                            className="btn ripple btn-xs mb-1"
                                                                            style={{
                                                                                backgroundColor: 'green',
                                                                                color: 'white',
                                                                                width: '70%', // Reduced width
                                                                                transition: 'all 0.3s ease-in-out', // Smooth transition
                                                                            }}
                                                                            onMouseOver={(e) => {
                                                                                e.target.style.transform = 'scale(1.05)';
                                                                                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                                                                            }}
                                                                            onMouseOut={(e) => {
                                                                                e.target.style.transform = 'scale(1)';
                                                                                e.target.style.boxShadow = 'none';
                                                                            }}
                                                                        >
                                                                            Add EOI Plan
                                                                        </Link>

                                                                        <br />

                                                                        <Link
                                                                            to={`/project-plan-view/${user.id}`}
                                                                            type="button"
                                                                            className="btn ripple btn-xs mb-1"
                                                                            style={{
                                                                                backgroundColor: 'green',
                                                                                color: 'white',
                                                                                width: '70%', // Reduced width
                                                                                transition: 'all 0.3s ease-in-out', // Smooth transition
                                                                            }}
                                                                            onMouseOver={(e) => {
                                                                                e.target.style.transform = 'scale(1.05)';
                                                                                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                                                                            }}
                                                                            onMouseOut={(e) => {
                                                                                e.target.style.transform = 'scale(1)';
                                                                                e.target.style.boxShadow = 'none';
                                                                            }}
                                                                        >
                                                                            Eoi Plan View
                                                                        </Link> */}
                                                                    </td>

                                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                                        <button className="btn btn-sm btn-info me-2" onClick={() => loadContent(user.id)}>
                                                                            <span className="fe fe-edit"></span>
                                                                        </button>
                                                                        <button className="btn btn-sm btn-danger" onClick={() => deleteContent(user.id)}>
                                                                            <span className="fe fe-trash-2"></span>
                                                                        </button>
                                                                        <br />
                                                                        <br />
                                                                        <div className="main-toggle-group-demo" style={{ display: 'flex', alignItems: 'center' }}>

                                                                            <div className="main-toggle-group-demo" style={{ display: 'flex', alignItems: 'center' }}>
                                                                                <div
                                                                                    className="main-toggle"
                                                                                    onClick={() => handleToggle(user.id)}
                                                                                    style={{
                                                                                        cursor: 'pointer',
                                                                                        width: '60px',
                                                                                        height: '25px',
                                                                                        backgroundColor: toggleStates[user.id] ?? user.withSubscription ? '#4caf50' : '#ccc',
                                                                                        borderRadius: '25px',
                                                                                        position: 'relative',
                                                                                        transition: 'background-color 0.3s',
                                                                                    }}
                                                                                >
                                                                                    <span
                                                                                        style={{
                                                                                            display: 'block',
                                                                                            width: '23px',
                                                                                            height: '23px',
                                                                                            backgroundColor: 'white',
                                                                                            borderRadius: '50%',
                                                                                            position: 'absolute',
                                                                                            top: '50%',
                                                                                            transform: 'translateY(-50%)',
                                                                                            left: (toggleStates[user.id] ?? user.withSubscription) ? '36px' : '1px',
                                                                                            transition: 'left 0.3s',
                                                                                        }}
                                                                                    />




                                                                                </div>


                                                                            </div>




                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>

                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div
                    className={`modal fade ${isModalOpen2 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{ display: isModalOpen2 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '20%', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Payement Update</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal2}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body" style={{ padding: '20px' }}>
                                <form>
                                    <div className="row row-sm">

                                       
                                        <div className="col-sm-12 form-group">
                                            <label className="form-label">Booking Amount <span className="tx-danger">*</span></label>
                                            <input type="text" className="form-control"
                                                name="applyCost"
                                                value={formData2.applyCost}
                                                onChange={handleInputChange2}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                <button className="btn ripple btn-primary" type="button" style={{
                                    borderRadius: '5px', padding: '8px 20px',
                                    fontSize: '14px', fontWeight: 'bold'
                                }} onClick={updateData}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


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
    );
};

export default ManageEoi


