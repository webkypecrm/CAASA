import React, { useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';



const NewLeads = () => {
   
    const [statusFilter, setStatusFilter] = useState('');
    const [search, setSearch] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [refresh, setRefresh] = useState(false);
    const { status } = useParams();
    const navigate = useNavigate();
    const [leadCounts, setLeadCounts] = useState({
        newLead: 0,
        followup: 0,
        assigned: 0,
        convertToSale: 0,
        preProforma: 0,
        quotations: 0,
        lost: 0
    });
    const [users, setUsers] = useState([]);
    const [activeStatus, setActiveStatus] = useState(localStorage.getItem('activeStatus') || '');

    const navigation = useNavigate();
    const apiUrl = process.env.REACT_APP_URL;


    const handleStatusChange = (status) => {
        setActiveStatus(`/newCom/${status}`);
        localStorage.setItem('activeStatus', `/newCom/${status}`);
        // setRefresh((prevRefresh) => !prevRefresh);

    };

    useEffect(() => {
        handleStatusChange(status);
    }, [status])

   
   
   
    // ledes list api  
    const fetchData = async () => {
        try {
            const Token = localStorage.getItem('Token');
            const response = await fetch(`${apiUrl}/lead/getAllLead`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            const data = await response.json();
            setLeadCounts({
                newLead: data.newLead,
                followup: data.Followup,
               
            });

            if (data.status === 'success' && Array.isArray(data.data)) {
                setUsers(data.data);
                // setRefresh(!refresh);

            } else {
                console.error('API request was not successful or data is not an array:', data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const filteredUsers = users.filter((user) => {
        return (
            (user.id.toString().includes(search) || user.fullName.includes(search)) &&
            (statusFilter === '' || user.status.toString() === statusFilter) &&
            (genderFilter === '' || user.gender === genderFilter || (genderFilter === 'male' && user.gender === 'Male') || (genderFilter === 'female' && user.gender === 'Female'))
        );
    });


    useEffect(() => {
        const token = localStorage.getItem('Token');

        if (!token) {
            console.log(token);
            navigate('/');
        }
    }, [navigate]);

    return (
        <>

            {/* Main Header*/}
            <div className="main-header side-header sticky">
                <TopHeader />
                <Prince />


                {/* Main Content*/}
                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">All Leads</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">CRM </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            New Lead{" "}
                                        </li>
                                    </ol>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">

                                        <a
                                            href="#"
                                            className="btn btn-primary my-2 btn-icon-text"
                                           
                                        >
                                            <i className="fe fe-plus me-2" /> Add New Lead
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End Page Header */}

                {/* Row */}

                <div className="row row-sm">
                    <div className="col-lg-12">
                        <div className="card custom-card">
                            <div className="card-body">
                                <div className="text-wrap">
                                    <div className="panel panel-primary tabs-style-3 p-0 tabs-style-3-0">
                                        <div className="tab-menu-heading">
                                            <div className=" ">
                                                {/* Tabs */}
                                                <ul className="nav panel-tabs horizontal_tab">
                                                    <li className="">
                                                        <Link
                                                            to="/newCom/newLead"
                                                            className={activeStatus === '/newCom/newLead' ? 'active' : ''}
                                                            onClick={() => handleStatusChange('newLead')}
                                                        >
                                                            New ({leadCounts.newLead})
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            to="/newCom/Assigned"
                                                            className={activeStatus === '/newCom/Assigned' ? 'active' : ''}
                                                            onClick={() => handleStatusChange('Assigned')}
                                                        >
                                                            Assigned ({leadCounts.assigned})
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            to="/newCom/Followup"
                                                            className={activeStatus === '/newCom/Followup' ? 'active' : ''}
                                                            onClick={() => handleStatusChange('Followup')}
                                                        >
                                                            Followup ({leadCounts.followup})
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            to="/newCom/Quotations"
                                                            className={activeStatus === '/newCom/Quotations' ? 'active' : ''}
                                                            onClick={() => handleStatusChange('Quotations')}
                                                        >
                                                            Quotations ({leadCounts.quotations})
                                                        </Link>

                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/newCom/Pre-proforma"
                                                            className={activeStatus === '/newCom/Pre-proforma' ? 'active' : ''}
                                                            onClick={() => handleStatusChange('Pre-proforma')}
                                                        >
                                                            preProforma ({leadCounts.preProforma})
                                                        </Link>
                                                    </li>

                                                    <li>

                                                        <Link to="/newCom/Convertedtosale"
                                                            className={activeStatus === '/newCom/Convertedtosale' ? 'active' : ''}
                                                            onClick={() => handleStatusChange('Convertedtosale')}>

                                                            Convertedtosale ({leadCounts.convertToSale})

                                                        </Link>

                                                    </li>

                                                    <li>
                                                        <Link
                                                            to="/newCom/LOST"
                                                            className={activeStatus === '/newCom/LOST' ? 'active' : ''}
                                                            onClick={() => handleStatusChange('LOST')}
                                                        >
                                                            LOST  ({leadCounts.lost})
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>

    )
}

export default NewLeads