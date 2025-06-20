import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import styled from 'styled-components';

// Styled Components

const TableContainer = styled.div`
    width: 100%;
    margin: 4px 0;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid #ddd;

    /* Custom scrollbar styling */
    &::-webkit-scrollbar {
        width: 12px; /* Adjust the width of the scrollbar */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc; /* Scrollbar color */
        border-radius: 6px; /* Rounded scrollbar edges */
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #aaa; /* Darker color on hover */
    }
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family: 'Roboto', sans-serif;
    background-color: #ffffff;
    border-spacing: 0;
   
`;

// Existing Input component
const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
    &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
    }
`;

// Styled components for specific fields
const SpecialInput = styled(Input)`
    background-color: #f0f8ff; /* Light blue background for visibility */
    border: 1px solid #00f;    /* Blue border for special fields */
    color: #00008b;            /* Dark blue text color */
    font-weight: bold;
`;

const HighlightedInput = styled(Input)`
    background-color: #fff0f0; /* Light red background */
   
    color: #800000;            /* Dark red text color */
    font-weight: bold;
`;

const TableHead = styled.thead`
    background-color: #f7f7f7;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
    &:hover {
        background-color: #f0f0f0;
    }
`;


const TableHeader = styled.th`
    padding: 8px 12px;
    font-size: 13px;
    font-weight: 600;
    color: #333;
    text-align: left;
    border-bottom: 1px solid #ddd;
    // position: sticky;
    top: 0;
    background-color: #f7f7f7;
    z-index: 1;
`;


const TableCell = styled.td`
    padding: 8px 12px;
    font-size: 12px;
    color: #333;
    border-bottom: 1px solid #ddd;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: ${(props) => (props.alignRight ? 'right' : 'left')};
`;


const WideInput = styled.input`
    width: 200%;
    max-width: 250px;
    padding: 6px 8px;
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    background-color: ${(props) => (props.disabled ? '#f7f7f7' : '#fff')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 2px rgba(0, 123, 255, 0.3);
    }
`;

const TableCells = styled(TableCell)`
    width: 7%;
`;

const ActionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`;

const StyledButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: background-color 0.2s, transform 0.2s;

    &:hover {
        background-color: #0056b3;
    }
    &:active {
        transform: scale(0.95);
    }
`;

const Icon = styled.i`
    font-size: 16px;
    color: #007bff;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: #0056b3;
    }
`;

const TotalTableRow = styled(TableRow)`
    background-color: #e0f0e0;
    font-weight: bold;
`;

const TotalTableCell = styled(TableCell)`
    font-size: 14px;
    background-color: #e0f0e0;
`;



const SalarySheet = () => {
    const { empid } = useParams();

    const initialUser = {
        numberOfDaysInMonth: '',
        monthlyLeave: '',
        monthlySalary: '',
        totalWorkingDays: '',
        officialOff: '',
        totalPresent: '',
        daysToBePaid: '',
        totalLeave: '',
        unpaidLeave: '',
        salary: '',
        incentive: '',
        loan: '',
        deductionInSalary: '',
        balAdv: '',
        totalSalary: ''
    };

    const [users, setUsers] = useState([initialUser]);


    const [formData, setFormData] = useState(
        users.reduce((acc, user) => {
            acc[user.id] = { status: '' };
            return acc;
        }, {})
    );

    const [totalSalery, setTotalSalery] = useState('');
    const [totalPayed, setTotalPayed] = useState('');
    const [totalDeduction, setTotalDeduction] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");
    const formattedDate = empid ? moment(empid, 'MM-YYYY').format('MMMM YYYY') : '';

    const handleInputChange = (userId, event) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [userId]: {
                ...prevFormData[userId],
                [name]: value,
            },
        }));

        // Trigger the API call with the updated status
        getEmp(userId, value);
    };


    const fetchDataFromApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/salery/addSalerySheet?date=${empid}`, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            const data = await response.json();
            setTotalSalery(data.totalSalery)
            setTotalPayed(data.totalPayed)
            setTotalDeduction(data.totalDeduction)

            if (data.status === 'success') {
                if (Array.isArray(data.data)) {
                    setUsers(data.data);
                } else {
                    console.error('API response does not contain companyList array:', data);
                }
            } else {
                console.error('API request was not successful:', data.message);
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


    const handleGenerate = async (userId) => {
        // Find the user with the given ID
        const userToUpdate = users.find(user => user.id === userId);

        if (!userToUpdate) {
            console.error('User not found');
            return;
        }

        // Prepare the data to send to the API
        const data = { ...userToUpdate };  // Assign userToUpdate to data

        try {
            const response = await fetch(`${apiUrl}/salery/updateSalery?id=${userId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${Token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            // Check if the response is okay
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            if (result.status === 'success') {
                console.log('User data updated successfully');
                fetchDataFromApi();
                toast.success(result.message);
            } else {
                console.error('Failed to update user data:', result.message);
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error updating user data:', error);
            toast.error('An error occurred while updating user data');
        }
    };


    const handleChange = (index, event) => {
        const { name, value } = event.target;
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers];
            updatedUsers[index] = { ...updatedUsers[index], [name]: value };
            return updatedUsers;
        });
    };



    async function getEmp(id, status) {

        const url = `${apiUrl}/salery/saleryStatus?id=${id}&status=${status}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const data = await response.json();

            if (data.status === 'success') {
                fetchDataFromApi()
                toast.success(data.message);


            } else {
                toast.error(data.message || 'An error occurred');
            }
        } catch (error) {
            toast.error('Failed to fetch data');
        }
    }


    async function getEmpp(id, status) {

        if (id) {
            getEmp(id, status);
        }

        const url = `${apiUrl}/salery/changeIsUpdated?id=${id}&isUpdated=false`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const data = await response.json();

            if (data.status === 'success') {
                fetchDataFromApi();
                toast.success(data.message);
            } else {
                toast.error(data.message || 'An error occurred');
            }
        } catch (error) {
            toast.error('Failed to fetch data');
        }
    }

    const getEmppp = async (userId) => {
        // Find the user with the given ID
        const userToUpdate = users.find(user => user.id === userId);

        if (!userToUpdate) {
            console.error('User not found');
            return;
        }

        // Prepare the data to send to the API
        const data = { ...userToUpdate };  // Assign userToUpdate to data

        try {
            const response = await fetch(`${apiUrl}/salery/updateRow?rowId=${userId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${Token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            // Check if the response is okay
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            if (result.status === 'success') {
                console.log('User data updated successfully');
                fetchDataFromApi();
                toast.success(result.message);
            } else {
                console.error('Failed to update user data:', result.message);
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error updating user data:', error);
            toast.error('An error occurred while updating user data');
        }
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
                                        Generate Salary Sheet ({formattedDate})
                                    </h2>
                                </div>
                            </div>

                            {/* Row */}

                            <div className="row row-sm">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="">
                                            {loading ? (
                                                <div style={loaderStyles.overlay}>
                                                    <div style={loaderStyles.loaderContainer}>
                                                        <div style={loaderStyles.dot}></div>
                                                        <div style={{ ...loaderStyles.dot, animationDelay: '0.2s' }}></div>
                                                        <div style={{ ...loaderStyles.dot, animationDelay: '0.4s' }}></div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="table-responsive" style={{ marginTop: '-6px' }} >

                                                    <TableContainer>
                                                        <StyledTable>
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableHeader>ID</TableHeader>
                                                                    <TableHeader>Employee Name</TableHeader>
                                                                    <TableHeader>Salary Month</TableHeader>
                                                                    <TableHeader>Days Month</TableHeader>
                                                                    <TableHeader>Working Days</TableHeader>
                                                                    <TableHeader>Official OFF</TableHeader>
                                                                    <TableHeader>Total Present</TableHeader>
                                                                    <TableHeader>Leave Taken</TableHeader>
                                                                    <TableHeader>Paid Leave</TableHeader>
                                                                    <TableHeader>Unpaid Leave</TableHeader>
                                                                    <TableHeader>Days Paid</TableHeader>
                                                                    <TableHeader>Calculate Salary</TableHeader>
                                                                    <TableHeader>Incentive Given</TableHeader>
                                                                    <TableHeader>Loan Given</TableHeader>
                                                                    <TableHeader>Deduction Applied</TableHeader>
                                                                    <TableHeader>Bal Loan</TableHeader>
                                                                    <TableHeader>Payable salary</TableHeader>
                                                                    <TableHeader>Calculate Salary All</TableHeader>
                                                                    <TableHeader>Action</TableHeader>
                                                                    <TableHeader>Payment Status</TableHeader>
                                                                </TableRow>
                                                            </TableHead>

                                                            <tbody>

                                                                {users.map((user, index) => (
                                                                    <TableRow key={user.id}>
                                                                        <TableCell>{user.employeeId}</TableCell>
                                                                        <TableCell>{user.name}</TableCell>
                                                                        {[
                                                                            'monthlySalery',
                                                                            'numberOfDaysInMonth',
                                                                            'totalWorkingDays',
                                                                            'officialOff',
                                                                            'totalPresent',
                                                                            'totalLeave',
                                                                            'monthlyLeave',
                                                                            'unpaidLeave',
                                                                            'daysToBePaid',
                                                                            'salery',
                                                                            'incentive',
                                                                            'loan',
                                                                            'deductionInSalery',
                                                                            'balAdv',
                                                                            'totalSalery',
                                                                        ].map((field) => {
                                                                            // Determine the input component based on the field
                                                                            let InputComponent = Input; // Default input
                                                                            if (['totalPresent', 'totalLeave', 'monthlyLeave', 'unpaidLeave'].includes(field)) {
                                                                                InputComponent = HighlightedInput; // Use special input for specific fields
                                                                            } else if (['monthlySalery', 'salery', 'totalSalery', 'loan', 'balAdv'].includes(field)) {
                                                                                InputComponent = WideInput; // Use WideInput for these fields
                                                                            }

                                                                            return (
                                                                                <TableCell key={field}>
                                                                                    <InputComponent
                                                                                        type="text"
                                                                                        name={field}
                                                                                        value={user[field]}
                                                                                        onChange={(e) => handleChange(index, e)}
                                                                                        disabled={user.isUpdated}
                                                                                    />
                                                                                </TableCell>
                                                                            );
                                                                        })}



                                                                        <TableCell>
                                                                            <ActionContainer>

                                                                                <StyledButton onClick={() => getEmppp(user.id)}>
                                                                                    Calculate
                                                                                </StyledButton>

                                                                            </ActionContainer>
                                                                        </TableCell>

                                                                        <TableCell>
                                                                            <ActionContainer>
                                                                                {!user.isUpdated ? (
                                                                                    <StyledButton onClick={() => handleGenerate(user.id)}>
                                                                                        Save
                                                                                    </StyledButton>
                                                                                ) : (
                                                                                    <>
                                                                                        <Link
                                                                                            to={`/salary-slip-view/${user.id}`}
                                                                                            target="_blank"
                                                                                            title="View Salary Slip"
                                                                                        >
                                                                                            <Icon className="fe fe-eye" />
                                                                                        </Link>
                                                                                        <Icon
                                                                                            className="fa fa-edit"
                                                                                            onClick={() => getEmpp(user.id)}
                                                                                        />
                                                                                    </>
                                                                                )}
                                                                            </ActionContainer>
                                                                        </TableCell>





                                                                        <TableCells>
                                                                            {(user.status === 'undefined' || user.status === null) ? (
                                                                                <select
                                                                                    className="form-control"
                                                                                    name="status"
                                                                                    value={formData[user.id]?.status || ''}
                                                                                    onChange={(e) => handleInputChange(user.id, e)}
                                                                                >
                                                                                    <option value="">Select</option>
                                                                                    <option value="Paid">Paid</option>
                                                                                    <option value="Unpaid">Unpaid</option>
                                                                                    <option value="Hold">Hold</option>
                                                                                </select>
                                                                            ) : (
                                                                                <span style={{
                                                                                    color: user.status === 'Paid' ? 'green' :
                                                                                        user.status === 'Unpaid' ? 'red' :
                                                                                            user.status === 'Hold' ? 'orange' : 'black'
                                                                                }}>
                                                                                    {user.status}
                                                                                </span>
                                                                            )}
                                                                        </TableCells>
                                                                    </TableRow>
                                                                ))}


                                                            </tbody>

                                                            <tfoot>
                                                                <TotalTableRow>
                                                                    <TotalTableCell colSpan="1"></TotalTableCell>
                                                                    <TotalTableCell>Total:--</TotalTableCell>

                                                                    <TotalTableCell>{totalSalery}</TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell>{totalDeduction}</TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell>{totalPayed}</TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                    <TotalTableCell></TotalTableCell>
                                                                </TotalTableRow>
                                                            </tfoot>

                                                        </StyledTable>
                                                    </TableContainer>

                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                        </div>
                    </div>
                </div>


                <div className="main-footer text-center">
                    <div className="container">
                        <div className="row row-sm">
                            <div className="col-md-12">
                                <span>
                                    Copyright © 2024 <a href="javascript:void(0)">Webkype</a>. Designed
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

export default SalarySheet