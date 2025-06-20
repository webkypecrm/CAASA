import React, { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import NewLeads from "../Pages/Sales CRM/NewLeads";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function NewCom() {

    const [allLeads, setAllLeads] = useState([])
    const [users, setUsers] = useState([]);
    const [statusOptions, setStatusOptions] = useState([])
    const [status3, setStatus3] = useState([]);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [reportingBossA, setReportingBossA] = useState([])
    const [search, setSearch] = useState('');
    const [status2, setStatus2] = useState('');
    const [filterByObj, setFilterByObj] = useState({
        to: '',
        from: '',
        clientName: '',
        clientNumber: '',
        search: '',
        status: '',
        employeeId: '',
    });

    const { status } = useParams();
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem('Token');
    const navigation = useNavigate()
    const navigate = useNavigate()

    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };
    const loadcontent = (id) => {
        navigation(`/edit-lead/${id}`);
    };

    const loadcontent2 = (id) => {
        navigation(`/DatelsLeads/${id}`);
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus3(event.target.value);
    };

    //status master
    useEffect(() => {

        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/5`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setStatusOptions(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);


    //Boss a

    useEffect(() => {
        const Token = localStorage.getItem('Token');
        console.log('Token:', Token);

        fetch(`${apiUrl}/employee/allEmpDesig`, {
            headers: {
                'Authorization': `Bearer ${Token}` // Assuming it's a Bearer token
                // Add other headers if needed
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setReportingBossA(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    //delete lead
    const deletecontent = (id) => {
        fetch(`${apiUrl}/lead/deleteLead/` + id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${Token}`,
            }
        })
            .then((res) => {
                if (res.ok) {
                    // fetchAllLead();
                    toast.success("Lead deleted successfully");
                } else {
                    throw new Error('Failed to delete');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };
    // All leads fetch


    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };
    const formatUpdatedAt = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };


    const fetchDataFromApi = (status) => {
        // Assuming filterByObj is defined elsewhere or passed as a parameter
        const { to, from, search, clientName, clientNumber, employeeId } = filterByObj;
        const url = `${apiUrl}/lead/getAllLead?id=&mobileNumber=&emailId=&to=${to}&from=${from}&search=${search}&clientName=${clientName}&clientNumber=${clientNumber}&status=${status}&employeeId=${employeeId}`;

        fetch(url, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data);
                if (data.status === 'success') {
                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            createdAt: formatDateTime(item.createdAt),
                            updatedAt: formatUpdatedAt(item.updatedAt)
                        }));
                        const filtLeads = formattedData.filter(item => item.status === status);
                        setUsers(formattedData, filtLeads);
                    } else {
                        console.error('API response does not contain employeeList array:', data);
                    }
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchDataFromApi(status);
    }, [status, filterByObj]);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "search") {
            console.log("Search value:", value);

            if (/^\d+$/.test(value)) {
                setFilterByObj(prevState => ({
                    ...prevState,
                    search: value,
                    clientName: '',
                    clientNumber: value
                }));
            } else {
                setFilterByObj(prevState => ({
                    ...prevState,
                    search: value,
                    clientName: value,
                    clientNumber: ''
                }));
            }
        } else {
            setFilterByObj(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };


    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user.clientName.toLowerCase();

        return (
            user.id.toString().includes(searchLowerCase) ||
            fullNameLowerCase.includes(searchLowerCase) ||
            user.clientNumber.includes(searchLowerCase)
        );
    });

    const filteredUsersByStatus = status
        ? filteredUsers.filter((user) => user.status === status)
        : filteredUsers;





    // form validation end

    useEffect(() => {
        const token = localStorage.getItem('Token');

        if (!token) {
            console.log(token);
            navigate('/');
        }
    }, [navigate]);



    return (
        <>
            <div className="main-header ">
                < NewLeads />
                <div className="tab-pane actve row " style={{ marginTop: "-350px" }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card custom-card">
                                    <div className="card-body py-3">
                                        <div className="row">

                                            <div className="col-3">
                                                <label className="form-label">From:</label>
                                                <input type="date" className="form-control"
                                                    name="from"
                                                    value={filterByObj.from}
                                                    onChange={handleInputChange}

                                                />
                                            </div>
                                            <div className="col-sm-3 form-group">
                                                <label className="form-label">To:</label>
                                                <input type="date" className="form-control"
                                                    name="to"
                                                    value={filterByObj.to}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="col-2">
                                                <label className="form-label">Search:</label>
                                                <input
                                                    type="search"
                                                    className="form-control"
                                                    placeholder="Search..."
                                                    aria-controls="example1"
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-sm-2 form-group">
                                                <label className="form-label">Status:</label>
                                                <select
                                                    className="form-control"
                                                    value={status}
                                                    onChange={handleStatusChange}
                                                >
                                                    <option value="">Select</option>
                                                    {statusOptions.map((option) => (
                                                        <option key={option.id} value={option.name}>
                                                            {option.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-sm-2 form-group">
                                                <label className="form-label">Assigned:</label>
                                                <select
                                                    className="form-control select2"
                                                    name="employeeId"
                                                    value={filterByObj.employeeId}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="">Select</option>
                                                    {reportingBossA.map((option, index) => (
                                                        <option key={option.id} value={option.id}>
                                                            {option.fullName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive " style={{ backgroundColor: 'white' }}>

                        <table className="table table-striped table-bordered text-nowrap mb-0 ">
                            <thead>
                                <tr>
                                    <th>
                                        <label className="ckbox">
                                            <input type="checkbox" defaultValue={5} />
                                            <span />
                                        </label>
                                    </th>
                                    <th className='col-3'>Lead Info</th>
                                    <th className='col-3'>Client info</th>

                                    <th className='col-3'>Assign to</th>
                                    <th className='col-1'>Status</th>
                                    <th className='col-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (

                                    <tr>
                                        <td>
                                            <label className="ckbox">
                                                <input type="checkbox" defaultValue={5} />
                                                <span />
                                            </label>
                                        </td>
                                        <td>
                                            ID: {user.id}
                                            <br />
                                            Source: {user.source}
                                            <br />
                                            Vendor: {user.vendor}
                                            <br />
                                            Project: {user.project}
                                            <br />
                                            Project.Plan: {user.projectPlan}
                                            <br />
                                            Plot Size: {user.plotSize}
                                            <br />
                                            Created At: {user.createdAt}
                                            <br />
                                            Last updated: {user.updatedAt}
                                        </td>
                                        <td>
                                            C.Name: {user.clientName}
                                            <br />
                                            C.Mail: {user.emailAddress}
                                            <br />
                                            C.Number: {user.clientNumber}
                                            <br />
                                            C.Address: {user.address}
                                        </td>
                                        <td>
                                            Assign to: {user.employeeId}
                                            <br />
                                            Email: {user.emp?.emailId}
                                            <br />
                                            Phone no: {user.emp?.phoneNumber}
                                            <br />
                                            Designation: {user.emp?.designation}
                                        </td>
                                        <td>
                                            <b>{user.status}</b>
                                        </td>
                                        <td>
                                            <a onClick={() => loadcontent2(user.id)} title="View">
                                                <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                            </a>

                                            <a onClick={() => loadcontent(user.id)}>
                                                <i className="fa fa-edit me-3" style={{ cursor: 'pointer' }} />
                                            </a>
                                            <a onClick={() => deletecontent(user.id)}>
                                                <i className="fa fa-trash" style={{ cursor: 'pointer' }} />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                    <div className="main-footer text-center">
                        <div className="container">
                            <div className="row ">
                                <div className="col-md-12">
                                    <span>
                                        Copyright © 2024 <a href="">Caasaa</a>. Designed
                                        by <a href="http://webkype.com/">Webkype.com</a> All rights
                                        reserved.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NewCom