import React, { useState, useEffect } from 'react';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';


const ListProjects = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [toggleStates, setToggleStates] = useState({});
    const [loading, setLoading] = useState(true);
    const [projectCount, setProjectCount] = useState('');
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [inventoryId, setInventoryId] = useState('')
    const [projectDate, setProjectDate] = useState('')
    const initialFormData = {
        excelUpload: '',
    };

    const [formData3, setFormData3] = useState(initialFormData);
     const [toggleStatess, setToggleStatess] = useState({});
    const navigate = useNavigate();
    const Token = localStorage.getItem("Token");
    const apiUrl = process.env.REACT_APP_URL;
    const navigation = useNavigate()

    const handleOpenModal4 = (id, lastTimeChangeInventory) => {
        setInventoryId(id)
        setProjectDate(lastTimeChangeInventory)
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };

    const loadcontent9 = (id, user) => {
        navigation(`/project-inventorys/${id}`, {
            state: {

                projectName: user.projectName,

                // add more properties here if needed
            },
        });
    };

    const loadContent = (id) => {
        navigate(`/project-edit/${id}`);
    };

    const updateConstruction = (id) => {
        navigate(`/construction-list/${id}`);
    };


    const handleSubmit7 = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            // Append the file to formDataToSend
            formDataToSend.append('excelUpload', formData3.excelUpload);

            const response = await fetch(`${apiUrl}/inventory/createInventory`, {
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

            handleCloseModal4()
            fetchDataFromApi()
            // setRefresh(!refresh);
            setFormData3(initialFormData);
            toast.success(response2.message);


        } catch (error) {
            toast.error(error.message);


        }
    };

    const handleFileChangeInventory = (e) => {
        const file = e.target.files[0];
        // Check if file is selected
        if (file) {
            // Check if file type is correct
            if (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                setFormData3({ ...formData3, excelUpload: file });
            } else {
                alert('Please upload a valid Excel file.');
            }
        }
    };

   
       // Function to handle toggle action
       const handleToggle = async (userId) => { 
           const newState = !toggleStates[userId];
   
           setToggleStates((prevStates) => {
               const newStates = { ...prevStates, [userId]: newState };
               localStorage.setItem('toggleStates', JSON.stringify(newStates));
               return newStates;
           });
   
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
        const url = `${apiUrl}/project/updateEnable?projectId=${empId}&status=${status}`;
           try {
               let response = await fetch(url, {
                   method: 'GET',
                   headers: {
                       Authorization: `Bearer ${Token}`,
                   },
               });
               response = await response.json();
   
               if (response.status === 'success') {
                   toast.success("Status updated successfully");
               } else {
                   toast.error("Failed to update status");
               }
           } catch (error) {
               toast.error("An error occurred while updating status");
           }
       };
   
   
       // second 
   
   
       
   
       useEffect(() => {
           const savedToggleStatess = localStorage.getItem('toggleStates');
           if (savedToggleStatess) {
               setToggleStates(JSON.parse(savedToggleStatess));
           }
       }, []);
   
   
       const updateStatuss = async (empId, status) => {
           const url = `${apiUrl}/project/updateEnable?projectId=${empId}&status=${status}`;
           try {
               let response = await fetch(url, {
                   method: 'GET',
                   headers: {
                       Authorization: `Bearer ${Token}`,
                   },
               });
               response = await response.json();
   
               if (response.status === 'success') {
                   toast.success("Status updated successfully");
               } else {
                   toast.error("Failed to update status");
               }
           } catch (error) {
               toast.error("An error occurred while updating status");
           }
       };
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

    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/project/getAllProject?isEOI=false`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();
            setProjectCount(data.projectCount)

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    createdAt: item.createdAt ? formatDateTimes(item.createdAt) : '',
                }));
                setUsers(formattedData);
            } else {
                console.error('API response error:', data.message || 'Data array not found');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
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
                                    <h2 className="main-content-title tx-24 mg-b-5">Project List({projectCount})</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Project </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Project List
                                        </li>
                                    </ol>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to='/add-new-project'
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            <i className="fe fe-plus me-2" /> Add Projects
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

                                                                <th>Project Information</th>
                                                                <th>Inventory</th>
                                                                <th>Date</th>
                                                                {/* <th style={{ whiteSpace: 'nowrap' }}>Provisional Inventory</th> */}
                                                                <th>Photo</th>
                                                                <th style={{ whiteSpace: 'nowrap' }}>Projected Inventory</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {filteredUsers.map((user) => {
                                                                // Ensure googleMapLink is not null or undefined before attempting to extract the URL
                                                                const iframeSrc = user.googleMapLink || '';  // Default to empty string if it's null or undefined
                                                                const urlMatch = iframeSrc.match(/src="([^"]+)"/); // Extract the URL from the src attribute
                                                                const googleMapUrl = urlMatch ? urlMatch[1] : ''; // Get the URL if matched

                                                                return (
                                                                    <tr key={user.id}>
                                                                        <td>{user.id}</td>

                                                                        {/* Avatar */}
                                                                        <td>
                                                                            <img
                                                                                alt="avatar"
                                                                                src={user.banner || 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'}
                                                                                style={{ width: 60 }}
                                                                            />
                                                                        </td>

                                                                        {/* Project Details */}
                                                                        <td style={{ whiteSpace: 'nowrap' }}>
                                                                            <p className="mb-0">
                                                                           
                                                                           
                                                                                Project Name: <b>{user.projectName}</b>
                                                                                <br />
                                                                                Allocated Area: {user.areaAllocateToProject ? `${user.areaAllocateToProject} Beegha` : ''}
                                                                                <br />
                                                                                Land Name: {user.locationId || 'N/A'} 
                                                                                <br />
                                                                                Bank Name: {user.bankAccountId || 'N/A'}
                                                                               
                                                                               
                                                                            </p>
                                                                        </td>

                                                                        {/* Plot, Shop, Farm House Details */}
                                                                        <td style={{ whiteSpace: 'nowrap' }}>
                                                                            Plot: {user.noOfPlot}<br />
                                                                            Shop: {user.noOfShop}<br />
                                                                            Farm House: {user.noOfFarmHouse}
                                                                            <br />
                                                                            Longitude: {user.longitude}
                                                                            <br />
                                                                            Latitude: {user.latitude}
                                                                        </td>

                                                                        {/* Created Information */}
                                                                        <td style={{ whiteSpace: 'nowrap' }}>
                                                                            Created Date: {user.createdAt}<br />
                                                                            Created By: {user.creatorId}
                                                                        </td>

                                                                        {/* Links to Media */}
                                                                        <td style={{ whiteSpace: 'nowrap' }}>
                                                                            Brochure: <Link to={user.brochure} title="Brochure" target="__blank"><i className="fe fe-eye" style={{ cursor: 'pointer' }} /></Link>
                                                                            <br />
                                                                            Photo 1: <Link to={user.photo1} title="Photo 1" target="__blank"><i className="fe fe-eye" style={{ cursor: 'pointer' }} /></Link>
                                                                            <br />
                                                                            Photo 2: <Link to={user.photo2} title="Photo 2" target="__blank"><i className="fe fe-eye" style={{ cursor: 'pointer' }} /></Link>
                                                                            <br />
                                                                            Photo 3: <Link to={user.photo3} title="Photo 3" target="__blank"><i className="fe fe-eye" style={{ cursor: 'pointer' }} /></Link>
                                                                            <br />
                                                                            Photo 4: <Link to={user.photo4} title="Photo 4" target="__blank"><i className="fe fe-eye" style={{ cursor: 'pointer' }} /></Link>
                                                                            <br />
                                                                            Video: <Link to={user.videoLink} title="Video" target="__blank"><i className="fe fe-eye" style={{ cursor: 'pointer' }} /></Link>
                                                                            <br />
                                                                            MAP: <Link to={user.projectMap} title="map" target="__blank"><i className="fe fe-eye" style={{ cursor: 'pointer' }} /></Link>
                                                                            <br />
                                                                            Google Map: {googleMapUrl ? <Link to={googleMapUrl} title="map" target="__blank"><i className="fe fe-eye" style={{ cursor: 'pointer' }} /></Link> : 'N/A'}
                                                                        </td>

                                                                        {/* Inventory Management */}
                                                                        <td style={{ whiteSpace: 'nowrap' }}>
                                                                            <button
                                                                                onClick={() => handleOpenModal4(user.id, user.lastTimeChangeInventory)}
                                                                                className="btn ripple btn-info btn-xs mb-1"
                                                                                style={{
                                                                                    backgroundColor: '#17a2b8',
                                                                                    borderColor: '#17a2b8',
                                                                                    color: '#fff',
                                                                                    width: '120px',
                                                                                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                                                                                    display: 'inline-block',
                                                                                    textAlign: 'center',
                                                                                }}
                                                                                onMouseEnter={(e) => {
                                                                                    e.target.style.backgroundColor = '#138496';
                                                                                    e.target.style.transform = 'scale(1.05)';
                                                                                }}
                                                                                onMouseLeave={(e) => {
                                                                                    e.target.style.backgroundColor = '#17a2b8';
                                                                                    e.target.style.transform = 'scale(1)';
                                                                                }}
                                                                            >
                                                                                Upload Inventory
                                                                            </button>
                                                                            <br />

                                                                            {/* View Inventory Button */}
                                                                            {!user.inventoryCount === false && (
                                                                                <>
                                                                                    <button
                                                                                        onClick={() => loadcontent9(user.id, user)}
                                                                                        className="btn ripple btn-info btn-xs mb-1"
                                                                                        style={{
                                                                                            backgroundColor: '#17a2b8',
                                                                                            borderColor: '#17a2b8',
                                                                                            color: '#fff',
                                                                                            width: '120px',
                                                                                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                                                                                            display: 'inline-block',
                                                                                            textAlign: 'center',
                                                                                        }}
                                                                                        onMouseEnter={(e) => {
                                                                                            e.target.style.backgroundColor = '#138496';
                                                                                            e.target.style.transform = 'scale(1.05)';
                                                                                        }}
                                                                                        onMouseLeave={(e) => {
                                                                                            e.target.style.backgroundColor = '#17a2b8';
                                                                                            e.target.style.transform = 'scale(1)';
                                                                                        }}
                                                                                    >
                                                                                        View Inventory
                                                                                    </button>
                                                                                </>
                                                                            )}
                                                                            <br />
                                                                            <br />
                                                                            <b>Inventory Count</b>: {user.inventoryCountNumber}
                                                                            <br />
                                                                            <b>Last Time Change Inventory</b>: {user.lastTimeChangeInventory
                                                                                ? new Intl.DateTimeFormat('en-US', {
                                                                                    day: '2-digit',
                                                                                    month: 'long',
                                                                                    year: 'numeric',
                                                                                    hour: '2-digit',
                                                                                    minute: '2-digit',
                                                                                    hour12: true,
                                                                                }).format(new Date(user.lastTimeChangeInventory))
                                                                                : 'N/A'}
                                                                        </td>

                                                                        {/* Edit, Delete, and Toggle Buttons */}
                                                                        <td style={{ whiteSpace: 'nowrap' }}>
                                                                            <button className="btn btn-sm btn-info me-2" onClick={() => loadContent(user.id)}>
                                                                                <span className="fe fe-edit"></span>
                                                                            </button>
                                                                            <button className="btn btn-sm btn-danger" onClick={() => deleteContent(user.id)}>
                                                                                <span className="fe fe-trash-2"></span>
                                                                            </button>
                                                                            <br />
                                                                            <br />
                                                                            <button className="btn btn-sm btn-info" onClick={() => updateConstruction(user.id)}>
                                                                                Construction Update
                                                                            </button>
                                                                            <br />
                                                                            <br />
                                                                            <div className="main-toggle-group-demo" style={{ display: 'flex', alignItems: 'center' }}>
                                                                                <div
                                                                                    className="main-toggle"
                                                                                    onClick={() => handleToggle(user.id)}
                                                                                    style={{
                                                                                        cursor: 'pointer',
                                                                                        width: '60px',
                                                                                        height: '25px',
                                                                                        backgroundColor: toggleStates[user.id] ? '#4caf50' : '#ccc',
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
                                                                                            top: '55%',
                                                                                            transform: 'translateY(-50%)',
                                                                                            left: toggleStates[user.id] ? '36px' : '1px',
                                                                                            transition: 'left 0.3s',
                                                                                        }}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })}

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
                    className={`modal ${isModalOpen4 ? 'show' : ''}`}
                    style={{ display: isModalOpen4 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Create Inventory</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCloseModal4}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body" style={{ padding: '20px' }}>
                                <form>
                                    <div className="row row-sm">

                                        <div className="col-sm-12 form-group">
                                            <label className="form-label">Upload Inventory</label>
                                            <input

                                                type="file"
                                                accept=".xls, .xlsx"
                                                onChange={handleFileChangeInventory}
                                                className="form-control"
                                                style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '8px' }}
                                            />
                                        </div>
                                        <div className="col-sm-4 form-group">
                                            <Link
                                                to={`${apiUrl}/sample/sampleInventory.xlsx`}
                                                type="button"
                                                className="btn btn-primary my-2 btn-icon-text  me-2" l
                                                style={{ whiteSpace: 'nowrap', fontSize: '15px' }}
                                            >
                                                Sample File
                                            </Link>
                                        </div>


                                    </div>
                                </form>
                            </div>

                            <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>

                                <button className="btn ripple btn-primary" type="button"
                                    style={{ borderRadius: '5px', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold' }}
                                    onClick={handleSubmit7}
                                >
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    );
};

export default ListProjects;
