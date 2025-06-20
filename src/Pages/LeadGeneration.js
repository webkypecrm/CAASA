import React, { useState, useEffect, useContext } from "react";
import Prince from "../Components/Prince";
import TopHeader from "../Components/TopHeader";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LeadGeneration = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [reportingBossA, setReportingBossA] = useState([])
    const [status, setStatus] = useState([]);
    const [project, setProject] = useState([]);
    const [source, setSource] = useState([]); 
    const [sources, setSources] = useState([]);
    const [vendor, setVendor] = useState([]); 
    const [users, setUsers] = useState([]);
    const [leadCount, setLeadCount] = useState({});
    const [loading, setLoading] = useState(true);

    const [filterByObj, setFilterByObj] = useState({
        to: '',
        from: '',
        status: '',
        empId: '',
        project: '',
        source: '',
        size: '',
        search: '',
        utmSource: '',
        vendor: '',
    });

    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");


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
            background: 'rgba(255, 255, 255, 0.3)', // Slight transparency for background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        },
        loaderContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',  // Increased gap for better visibility
        },
        dot: {
            width: '20px',  // Increased size for better visibility
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#3498db',  // Bright blue for emphasis
            animation: 'bounce 1.2s infinite ease-in-out',
        },
    };

    // Inject keyframes into the document
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    //Boss a
    useEffect(() => {
        const Token = localStorage.getItem('Token');
        console.log('Token:', Token);

        fetch(`${apiUrl}/employee/allEmpDesig`, {
            headers: {
                'Authorization': `Bearer ${Token}`

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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const Token = localStorage.getItem('Token');
                const headers = Token ? { Authorization: `Bearer ${Token}` } : {};

                // Fetch project data
                let response = await fetch(`${apiUrl}/project/getAllProjectDropdown`);
                let data = await response.json();
                if (data.data && Array.isArray(data.data)) {
                    setProject(data.data);
                } else {
                    console.error('API response is not in the expected format for projects.');
                }

                // Fetch source master data
                response = await fetch(`${apiUrl}/master/getAllMasterData/25`, { headers });
                data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setSources(data.data);
                } else {
                    console.error('API response does not contain an array for sources:', data);
                }

                // Fetch vendor data
                response = await fetch(`${apiUrl}/master/getAllMasterData/26`, { headers });
                data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setVendor(data.data);
                } else {
                    console.error('API response does not contain an array for vendors:', data);
                }

                // Fetch status data
                response = await fetch(`${apiUrl}/master/getAllMasterData/5`, { headers });
                data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setStatus(data.data);
                } else {
                    console.error('API response does not contain an array for status:', data);
                }

                // Fetch source data
                response = await fetch(`${apiUrl}/master/getAllMasterData/6`, { headers });
                data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setSource(data.data);
                } else {
                    console.error('API response does not contain an array for sources:', data);
                }


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const handleChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);

        // Format the start and end dates if they are not null
        const formatDate = (date) => {
            if (date) {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}/${month}/${day}`;
            }
            return '';
        };

        // Update the filterByObj state with the formatted date range
        const formattedStartDate = formatDate(start);
        const formattedEndDate = formatDate(end);


        setFilterByObj(prevState => ({
            ...prevState,
            from: `${formattedStartDate}`,
            to: `${formattedEndDate}`
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const fetchDataFromApi = async () => {
        setLoading(true);
        const { to, from, status, empId, project, source, size, utmSource, vendor } = filterByObj;
        const url = `${apiUrl}/lead/leadReport?empId=${empId}&to=${to}&from=${from}&status=${status}&project=${project}&source=${source}&size=${size}&utmSource=${utmSource}&vendor=${vendor}`;

        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${Token}` }
            });
            const data = await response.json();
            const fetchedLeadCount = data.leadsByStatus;

            setLeadCount(fetchedLeadCount);

            if (data.status === 'success' && Array.isArray(data.data)) {
                setUsers(data.data);
            } else {
                console.error('Unexpected API response:', data);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };


    useEffect(() => {
        fetchDataFromApi();
    }, [filterByObj]);


    const handleDownload = async () => {   
        try {
            const { to, from, status, empId, project, source, size, utmSource, vendor } = filterByObj;
            const urls = `${apiUrl}/lead/downloadLeadAllocation?empId=${empId}&to=${to}&from=${from}&status=${status}&project=${project}&source=${source}&size=${size}&utmSource=${utmSource}&vendor=${vendor}`;
    
            const response = await fetch(urls, {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${Token}` }
            });
    
            // Check if the response status is OK (200-299)
            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.message || 'Error occurred while fetching the file.';
                throw new Error(errorMessage);
            }
    
            // Parse the response JSON to get the download URL
            const result = await response.json();
            
            if (result.status === 'success' && result.data) {
                // Use the direct file URL from the API response to download
                const downloadUrl = result.data;
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.setAttribute('download', 'sampleEoiInventory.xlsx'); // Optional, use a custom filename
                document.body.appendChild(link);
                link.click();
                link.remove();
                
                // Display success message
                toast.success('File downloaded successfully!');
            } else {
                throw new Error(result.message || 'Failed to get the download link.');
            }
        } catch (error) {
            console.error('Error downloading the file:', error);
            toast.error(`Error: ${error.message}`);
        }
    };


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
                                <div className="col-sm">
                                    <div className="justify-content-center">
                                        <div className="row">

                                            <div className="col-md-3">
                                                <div className="mg-b-30">
                                                    <div className="input-group">
                                                        <div className="input-group" style={{ display: "flex", justifyContent: "flex-end" }}>
                                                            <select
                                                                className="form-control"
                                                                name="status"
                                                                value={filterByObj.status}
                                                                onChange={handleInputChange}
                                                            >
                                                                <option value="">Select Status</option>
                                                                {status.map((option) => (
                                                                    <option key={option.id} value={option.name}>
                                                                        {option.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="mg-b-30">
                                                    <div className="input-group">
                                                        <div className="input-group" style={{ display: "flex", justifyContent: "flex-end" }}>
                                                            <select
                                                                className="form-control select2"
                                                                name="empId"
                                                                value={filterByObj.empId}
                                                                onChange={handleInputChange}
                                                            >
                                                                <option value=''>Select</option>
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
                                            <div className="col-md-3">
                                                <div className="mg-b-30">
                                                    <div className="input-group">
                                                        <div className="input-group" style={{ display: "flex", justifyContent: "flex-end" }}>
                                                            <select
                                                                className="form-control"
                                                                name="utmSource"
                                                                value={filterByObj.utmSource}
                                                                onChange={handleInputChange}
                                                            >
                                                                <option value="">Select UTM Source</option>
                                                                {source.map((option) => (
                                                                    <option key={option.id} value={option.name}>
                                                                        {option.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="mg-b-30">
                                                    <div className="input-group">
                                                        <div className="input-group" style={{ display: "flex", justifyContent: "flex-end" }}>
                                                            <select
                                                                className="form-control select select2"
                                                                name="project"
                                                                value={filterByObj.project}
                                                                onChange={handleInputChange}
                                                            >
                                                                <option value="">Select Project</option>
                                                                {project.map((option) => (
                                                                    <option key={option.id} value={option.id}>
                                                                        {option.projectName}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-md-3">
                                                <div className="mg-b-30">
                                                    <div className="input-group">
                                                        <div className="input-group" style={{ display: "flex", justifyContent: "flex-end" }}>
                                                            <select
                                                                className="form-control select select2"
                                                                name="source"
                                                                value={filterByObj.source}
                                                                onChange={handleInputChange}
                                                            >
                                                                <option value="">Select Source</option>
                                                                {sources.map((option) => (
                                                                    <option key={option.id} value={option.name}>
                                                                        {option.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className=" mg-b-30">
                                                    <div className="input-group" style={{ display: "flex", justifyContent: "flex-end" }}>
                                                        <select
                                                            className="form-control select select2"
                                                            name="vendor"
                                                            value={filterByObj.vendor}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value="">Select Vendor</option>
                                                            {vendor.map((option) => (
                                                                <option key={option.id} value={option.name}>
                                                                    {option.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className=" mg-b-30">
                                                    <div className="input-group" >
                                                        <DatePicker
                                                            selected={startDate}
                                                            onChange={handleChange}
                                                            startDate={startDate}
                                                            endDate={endDate}
                                                            selectsRange
                                                            placeholderText="Select Date Range"
                                                            dateFormat="dd/MM/yyyy"
                                                            className="form-control fc-datepicker"
                                                            style={{ height: '100%', width: '700px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center" style={{ marginTop: '-75px' }}>
                                       
                                        <button
                                          onClick={handleDownload}
                                            download
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text me-2"
                                        >
                                            Download 
                                        </button>
                                    </div>
                                </div>
                            </div>


                    

                            <div className="row row-sm" >
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card main-content-body-profile">
                                        <div
                                            className="scroll-container"
                                            style={{
                                                overflowX: "auto",
                                                maxWidth: "100%",
                                                display: "block",
                                                scrollbarWidth: "thick",
                                            }}
                                        >
                                            <style>
                                                {`
                        /* For WebKit browsers */
                        .scroll-container::-webkit-scrollbar {
                            height: 12px;
                        }
                        .scroll-container::-webkit-scrollbar-thumb {
                            background-color: #888;
                            border-radius: 10px;
                            border: 3px solid #ccc;
                        }
                        .scroll-container::-webkit-scrollbar-thumb:hover {
                            background-color: #555;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            border: 1px solid #fcfcfc;
                        }
                        th, td {
                            border: 1px solid #ccc;
                            padding: 8px 10px;
                            text-align: center;
                            white-space: nowrap;
                        }
                        th {
                            background-color: #f2f2f2;
                            font-weight: bold;
                        }
                        .left-aligned {
                            text-align: left;
                            padding-left: 10px;
                        }
                       
                        @media (max-width: 800px) {
                            th, td {
                                font-size: 12px;
                                padding: 4px 6px;
                            }
                            .scroll-container {
                                overflow-x: auto;
                            }
                        }
                        @media (max-width: 500px) {
                            th, td {
                                font-size: 10px;
                                padding: 2px 4px;
                            }
                        }
                            @media (max-width: 1115px) {
                            th, td {
                                font-size: 10px;
                                padding: 2px 4px;
                            }
                        }
                             @media (max-width: 1200px) {
                            th, td {
                                font-size: 10px;
                                padding: 2px 4px;
                            }
                        }
                             @media (max-width: 1300px) {
                            th, td {
                                font-size: 10px;
                                padding: 2px 4px;
                            }
                        }
                            
                            
                    `}
                                            </style>
                                            {loading ? (
                                                <div style={loaderStyles.overlay}>
                                                    <div style={loaderStyles.loaderContainer}>
                                                        <div style={loaderStyles.dot}></div>
                                                        <div style={{ ...loaderStyles.dot, animationDelay: '0.2s' }}></div>
                                                        <div style={{ ...loaderStyles.dot, animationDelay: '0.4s' }}></div>
                                                    </div>
                                                </div>
                                            ) : (

                                                <table align="center" width="100%" style={{ borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif' }}>

                                                    <thead style={{ backgroundColor: '#f4f4f4', color: '#333' }}>
                                                        <tr>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Manager Name</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Assign Lead</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>New Lead</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Not Enquired</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Not Interested</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Not Connected</th>
                                                            <th className="fixed-width-large" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Hot Lead</th>
                                                            <th className="fixed-width-large" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Meeting Done</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Form Done</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Follow Up</th>
                                                            <th className="fixed-width-large" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Sales Projection</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Outstation</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Search</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Dead Other Issue</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Payment Received(10%)</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Payment Received(30%)</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Dead Budget Issue</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Meeting Schedule</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Call Schedule</th>
                                                            <th className="fixed-width" style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Outstation Followup</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>

                                                        {users.map((user) => {
                                                            const leadCountMap = user.leadCount.reduce((acc, { status, count }) => {
                                                                acc[status] = count;
                                                                return acc;
                                                            }, {});

                                                            return (
                                                                <tr key={user.id} style={{ borderBottom: '1px solid #ddd', backgroundColor: '#fff' }}>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{user.fullName}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{user.totalLead}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['New Lead']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Not enquired']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Not Interested']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Not Connected']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Hot Lead']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Meeting Done']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Form Done']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Follow up']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Sales Projection']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Outstation']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Search']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Dead Other Issue']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Payment Received (10%)']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Payment Received (30%)']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Dead Budget Issue']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Meeting Scheduled']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Call Scheduled']}</td>
                                                                    <td className="fixed-width" style={{ padding: '10px' }}>{leadCountMap['Outstation Followup']}</td>
                                                                </tr>
                                                            );
                                                        })}

                                                    </tbody>


                                                    <tfoot style={{ backgroundColor: '#f4f4f4', color: '#333', borderTop: '2px solid #ddd' }}> 

                                                        <tr>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#032852', fontWeight: 'bold' }}>Total Lead</td>
                                                            <td className="fixed-width-large" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount.totalLeadsCount}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['1'] ? leadCount['1'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['0'] ? leadCount['0'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['2'] ? leadCount['2'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['3'] ? leadCount['3'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['6'] ? leadCount['6'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['7'] ? leadCount['7'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['8'] ? leadCount['8'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['9'] ? leadCount['9'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['10'] ? leadCount['10'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['11'] ? leadCount['11'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['12'] ? leadCount['12'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['13'] ? leadCount['13'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['14'] ? leadCount['14'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['15'] ? leadCount['15'].count : 'N/A'}</td>

                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['16'] ? leadCount['16'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['5'] ? leadCount['5'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['4'] ? leadCount['4'].count : 'N/A'}</td>
                                                            <td className="fixed-width" style={{ padding: '10px', color: '#ff0000', fontWeight: 'bold' }}>{leadCount['17'] ? leadCount['17'].count : 'N/A'}</td>
                                                        </tr>
                                                    </tfoot>

                                                </table>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>

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

    )
}

export default LeadGeneration




