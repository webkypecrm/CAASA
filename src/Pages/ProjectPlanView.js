import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';


const ProjectPlanView = () => {
    const { empid } = useParams();

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const loadcontent = (id) => {
        navigation(`/view-plan/${id}`);
    };

    const loadcontent2 = (id) => {
        navigation(`/duplicate-plan/${id}`);
    };

    const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };


    //list plan data
    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/plan/plans?isEoi=true&projectId=${empid}`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    formattedDate: item.createdAt ? formatDateTime(item.createdAt) : null,
                    formattedDate2: item.updatedAt ? formatDateTime(item.updatedAt) : null,
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
        fetchDataFromApi()
    }, []);

    const filteredUsers = users.filter((user) => {
        const searchLowerCase = search.toLowerCase();
        const fullNameLowerCase = user.projectId.toLowerCase();

        return user.id.toString().includes(searchLowerCase) || fullNameLowerCase.includes(searchLowerCase) || user.schemeId.includes(searchLowerCase) || user.schemeType.includes(searchLowerCase);
    });

    const breakContent = (content, length) => {
        const chunks = [];
        for (let i = 0; i < content.length; i += length) {
            chunks.push(content.substring(i, i + length));
        }
        return chunks.join('<br />');
    };

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
                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        EOI Plan List
                                    </h2>

                                </div>

                            </div>
                            {/* End Page Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <input
                                                        type="search"
                                                        className="form-control form-control"
                                                        placeholder="Search..."
                                                        aria-controls="example1"
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                </div>
                                            </div>{" "}
                                        </div>
                                    </div>
                                </div>{" "}
                            </div>
                            {/* Row */}
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
                                                    <table className="table table-striped table-bordered text-nowrap mb-0">
                                                        <thead>
                                                            <tr>

                                                                <th>ID</th>
                                                                <th>Plan Type</th>
                                                                <th>Plan Name</th>

                                                                <th >Project</th>


                                                                <th >Created date</th>
                                                                <th >Updated Date</th>
                                                                <th >Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {filteredUsers.map((user) => (
                                                                <tr key={user.id} style={{ backgroundColor: user.isModernPlan ? '#D3F9D8' : 'inherit' }}>
                                                                    <td>P ID-{user.id}</td>
                                                                    <td>
                                                                        {user.isModernPlan ? 'Market Plan' : 'General Plan'}
                                                                    </td>
                                                                    <td>{user.planName}</td>
                                                                    <td>
                                                                        <p className="mb-0">{user.projectId}</p>
                                                                    </td>

                                                                    <td>{user.formattedDate}</td>
                                                                    <td>{user.formattedDate2}</td>
                                                                    <td  >
                                                                        <>
                                                                            <Link to=''>
                                                                                <i className="fa fa-edit me-2" style={{ cursor: 'pointer' }} />
                                                                            </Link>
                                                                            <Link to=''>
                                                                                <i className="fa fa-trash me-2" style={{ cursor: 'pointer' }} />
                                                                            </Link>
                                                                            <a onClick={() => loadcontent(user.id)} title="View Plan">
                                                                                <i className="fe fe-eye me-3" style={{ cursor: 'pointer' }} />
                                                                            </a>
                                                                            <br />
                                                                            <Link to={user.brochureImage} target='_blank' title="Brochure Image">
                                                                                <img
                                                                                    src="https://cdn-icons-png.freepik.com/512/6679/6679083.png"
                                                                                    alt="Brochure Icon"
                                                                                    style={{ cursor: 'pointer', marginRight: '0.25rem', width: '24px', height: '24px' }}
                                                                                />
                                                                            </Link>
                                                                            {!user.isModernPlan && (
                                                                                <>
                                                                                    <a onClick={() => loadcontent2(user.id)} title="Duplicate Plan">
                                                                                        <img
                                                                                            src="https://static.vecteezy.com/system/resources/previews/000/495/223/non_2x/vector-duplicate-content-line-black-icon.jpg"
                                                                                            alt="Duplicate Icon"
                                                                                            style={{ cursor: 'pointer', marginRight: '0.25rem', width: '24px', height: '24px' }}
                                                                                        />
                                                                                    </a>
                                                                                </>
                                                                            )}
                                                                        </>
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
                            {/* End Row */}
                        </div>
                    </div>
                </div>
                {/* End Main Content*/}
                {/* Main Footer*/}
                <div className="main-footer text-center">
                    <div className="container">
                        <div className="row row-sm">
                            <div className="col-md-12">
                                <span>
                                    Copyright © 2024 <a href="javascript:void(0)">Caasaa</a>. Designed
                                    by <a href="http://webkype.com/">Webkype.com</a> All rights
                                    reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Footer*/}
            </div>
        </>

    )
}

export default ProjectPlanView



