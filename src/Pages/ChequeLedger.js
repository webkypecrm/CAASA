import React, { useState, useEffect } from "react";
import TopHeader from '../Components/TopHeader'
import Prince from '../Components/Prince'
import DatePicker from 'react-datepicker';

import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IsoRounded } from "@mui/icons-material";
import Search from "./Search";
import { useLocation } from 'react-router-dom';



const ChequeLedger = () => {
    const location = useLocation();
    const totalCheque = location.state?.totalCheque || 'No data';

    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");
    const [users, setUsers] = useState([]);
    const [paidAmount, setPaidAmount] = useState('')
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [employee2, setEmployee2] = useState({})
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(500);
    const [leadCount, setLeadCount] = useState(0);
    const [isModalOpen16, setIsModalOpen16] = useState(false);
    const [isModalOpen17, setIsModalOpen17] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedDate3, setSelectedDate3] = useState(null);
    const [datas, setDatas] = useState('');
    const [datass, setDatass] = useState('');
    const [totalPayment, setTotalPayment] = useState('');
    const [total, setTotal] = useState('');
    const [isModalOpen58, setIsModalOpen58] = useState('');
    const [isModalOpen59, setIsModalOpen59] = useState('');
    const [isModalOpen60, setIsModalOpen60] = useState('');
    const [isModalOpen61, setIsModalOpen61] = useState('');
    const [isModalOpen62, setIsModalOpen62] = useState('');
    const [isModalOpen63, setIsModalOpen63] = useState('');
    const [isModalOpen64, setIsModalOpen64] = useState('');
    const [isModalOpen65, setIsModalOpen65] = useState('');
    const [paymentId, setPaymentId] = useState('');
    const [paymentId1, setPaymentId1] = useState('');
    const [paymentId2, setPaymentId2] = useState('');
    const [paymentId3, setPaymentId3] = useState('');
    const [paymentId4, setPaymentId4] = useState('');
    const [count, setCount] = useState(0);
    const [filterByObj, setFilterByObj] = useState({

        status: 'Received',
        from: '',
        to: '',
        search: '',

    });


    const handleOpenModal16 = (id) => {
        setIsModalOpen17(id);
        setIsModalOpen16(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal16 = () => {
        setIsModalOpen16(false);
        document.body.classList.remove('modal-open');
    };

    const handleOpenModal58 = async (id) => {
        setPaymentId(id);
        setIsModalOpen58(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal58 = () => {
        setIsModalOpen58(false);
        document.body.classList.remove('modal-open');
    };



    const handleOpenModal59 = async (id) => {
        setPaymentId1(id);
        setIsModalOpen59(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal59 = () => {
        setIsModalOpen59(false);
        document.body.classList.remove('modal-open');
    };

    const handleOpenModal60 = async (id) => {
        setPaymentId2(id);
        setIsModalOpen60(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal60 = () => {
        setIsModalOpen60(false);
        document.body.classList.remove('modal-open');
    };

    const handleOpenModal61 = async (id) => {
        setPaymentId3(id);
        setIsModalOpen61(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal61 = () => {
        setIsModalOpen61(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal62 = async (id) => {
        setPaymentId4(id);
        setIsModalOpen62(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal62 = () => {
        setIsModalOpen62(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal63 = async (id) => {
        setIsModalOpen63(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal63 = () => {
        setIsModalOpen63(false);
        document.body.classList.remove('modal-open');
    };

    const handleOpenModal64 = async (id) => {
        setIsModalOpen64(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal64 = () => {
        setIsModalOpen64(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal65 = async (id) => {
        // setPaymentId5(id);
        setIsModalOpen65(true);
        document.body.classList.add('modal-open');

    };

    const handleCloseModal65 = () => {
        setIsModalOpen65(false);
        document.body.classList.remove('modal-open');
    };

    const onChange = (date) => {
        setSelectedDate3(date);

    };


    useEffect(() => {
        async function getEmpp() {

            const url = `${apiUrl}/applicant/getApplicantInfo/${isModalOpen17}`;
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            })
            response = await response.json();

            if (response.status === "success") {
                setEmployee2(response.data);
            }
        }
        getEmpp();
    }, [isModalOpen17])





    // Update count whenever selectedItems changes
    useEffect(() => {
        setCount(selectedItems.length);
    }, [selectedItems]);

    const toggleSelectAll = () => {
        if (selectedItems.length === currentPageData.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(currentPageData.map(user => user.id));
        }
    };

    const formatDateTimes = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        const date = new Date(dateTimeString);
        return date.toLocaleString('en-IN', options);
    };

    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    const formatDateTime2 = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    // liST Payment
    const fetchDataFromApi = () => {

        const pageNumber = currentPage + 1;

        fetch(`${apiUrl}/payment/chequeReport?status=${filterByObj.status || totalCheque}&from=${filterByObj.from}&to=${filterByObj.to}&page=${pageNumber}&limit=${itemsPerPage}&search=${filterByObj.search}&ids=${selectedItems}&froms=${datass}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {

                    const fetchedLeadCount = data?.totalCount;
                    setLeadCount(fetchedLeadCount);
                    setPaidAmount(data.paidAmount);
                    setDatas(data.selectedDate);
                    setTotalPayment(data.totalAmount);
                    setTotal(data.totalAmount)


                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            formattedDate: item.chequeDate ? formatDateTime(item.chequeDate) : null,
                            formattedDates: item.createdAt ? formatDateTimes(item.createdAt) : null,
                            formattedDate2: item.paymentCredit ? formatDateTime2(item.paymentCredit) : null,
                            bankName: item.bankName || null,
                            accountNumber: item.amrsAccount ? item.amrsAccount.accountNumber : null,
                            applicantName: item.applicant ? item.applicant.fullName : "N/A",
                            ticketId: item.applicant ? item.applicant.ticketId : "N/A"
                        }));

                        setUsers(formattedData);
                    } else {
                        console.error('API response does not contain expected data array:', data);
                    }
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchDataFromApi();
    }, [filterByObj.status, filterByObj.from, filterByObj.to, itemsPerPage, currentPage, filterByObj.search, selectedItems, datass]);



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


    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleInputChange3 = (event) => {
        const { name, value } = event.target;

        // "All Cheque" select hone par value set karo, but API call skip karo
        setFilterByObj((prev) => ({ ...prev, [name]: value }));

        if (value === "All Cheque") {
            return; // API call skip kar diya
        }

        // Agar "All Cheque" nahi hai toh normal API call allowed hai
        fetchDataFromApi();
    };


    const currentPageData = users;


    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };


    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);



    const handleDepositeUnHold = async (id) => {
        try {
            const url = `${apiUrl}/payment/chequeReportManage?paymentId=${paymentId3}&status=UnHold`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }


            fetchDataFromApi();
            handleCloseModal61();
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleDepositeHold = async (id) => {
        try {
            const url = `${apiUrl}/payment/chequeReportManage?paymentId=${paymentId4}&status=Hold`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }


            fetchDataFromApi();
            handleCloseModal62();
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);
        }
    };



    const handleInvalid = async (id) => {
        try {
            const url = `${apiUrl}/payment/chequeReportManage?paymentId=${paymentId}&status=Invalid`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }


            fetchDataFromApi();
            handleCloseModal58();
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);
        }
    };


    const handleDeposite = async (id) => {
        try {
            const url = `${apiUrl}/payment/chequeReportManage?paymentId=${paymentId2}&status=Deposite`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }


            fetchDataFromApi();
            handleCloseModal60();
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);
        }
    };


    const handleRedeposite = async (id) => {
        try {
            const url = `${apiUrl}/payment/chequeReportManage?paymentId=${paymentId1}&status=Redeposite`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }


            fetchDataFromApi();
            handleCloseModal59();
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);
        }
    };


    const handleInvalids = async (id) => {
        try {
            const url = `${apiUrl}/payment/chequeReportManage?status=Invalid&ids=${selectedItems}`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }


            fetchDataFromApi();
            handleCloseModal64();
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);
        }
    };


    const handleDeposites = async (id) => {
        try {
            const url = `${apiUrl}/payment/chequeReportManage?status=Deposite&ids=${selectedItems}`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }


            fetchDataFromApi();
            handleCloseModal63();
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);
        }
    };


    const handleRedeposites = async (id) => {
        try {
            const url = `${apiUrl}/payment/chequeReportManage?status=Redeposite&ids=${selectedItems}`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            const response2 = await response.json();

            if (response2.status === "error") {
                throw new Error(response2.message);
            }


            fetchDataFromApi();
            handleCloseModal65();
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);
        }
    };

    const toggleCheckbox = (userId) => {
        if (selectedItems.includes(userId)) {
            setSelectedItems(selectedItems.filter(id => id !== userId));
        } else {
            setSelectedItems([...selectedItems, userId]);
        }
    };


    const handleDateChange = (e) => {
        setDatass(e.target.value);
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
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Cheque Ledger({leadCount})


                                        {/* ({datas}) */}
                                    </h2>

                                </div>


                                <div className="d-flex">
                                    <div className="justify-content-center me-2">


                                        {filterByObj.status === 'Received' &&

                                            <button
                                                className="btn btn-primary my-2 btn-icon-text"
                                                style={{ marginRight: "6px", fontSize: "12px" }}
                                                type="button"
                                                onClick={handleOpenModal63}

                                            >
                                                Deposite
                                            </button>
                                        }


                                        {filterByObj.status === 'Deposited' &&

                                            <button
                                                className="btn btn-primary my-2 btn-icon-text"
                                                style={{ marginRight: "6px", fontSize: "12px" }}
                                                type="button"
                                                onClick={handleOpenModal64}


                                            >
                                                Report
                                            </button>
                                        }


                                        {filterByObj.status === 'Deleted' &&

                                            <button
                                                className="btn btn-primary my-2 btn-icon-text"
                                                style={{ marginRight: "6px", fontSize: "12px", whiteSpace: 'nowrap' }}
                                                type="button"
                                                onClick={handleOpenModal65}


                                            >
                                                Re-Deposit
                                            </button>
                                        }
                                    </div>




                                    {/* <input
                                        className="form-control fc-datepicker"
                                        placeholder="MM/DD/YYYY"
                                        type="date"
                                        value={datass}
                                        onChange={handleDateChange}
                                        style={{ marginTop: '8px' }}
                                    /> */}
                                </div>

                            </div>
                            {/* End Page Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <input
                                                        type="search"
                                                        className="form-control form-control"
                                                        placeholder="Search Cheque No,Name,Amount "
                                                        aria-controls="example1"
                                                        name="search"
                                                        value={filterByObj.search}
                                                        onChange={handleInputChange2}

                                                    />
                                                </div>


                                                <div className="col-sm-4" style={{ marginTop: '10px' }}>
                                                    <div className="d-flex align-items-center">


                                                        <input type="radio" style={{ marginTop: '-8px' }} name="status" value="All Cheque" checked={filterByObj.status === "All Cheque"} onChange={handleInputChange3} />
                                                        <label className="me-3 ms-1" style={{ whiteSpace: 'nowrap' }}>All Cheque</label>
                                                        <div style={{ marginLeft: '10px' }}></div>
                                                        <input type="radio" style={{ marginTop: '-8px' }} name="status" value="Received" checked={filterByObj.status === "Received"} onChange={handleInputChange3} />
                                                        <label className="me-3 ms-1">Received</label>

                                                        <div style={{ marginLeft: '10px' }}></div>
                                                        <input type="radio" style={{ marginTop: '-8px' }} name="status" value="Deposited" checked={filterByObj.status === "Deposited"} onChange={handleInputChange3} />
                                                        <label className="me-3 ms-1">Deposited</label>
                                                        <div style={{ marginLeft: '10px' }}></div>

                                                        <input type="radio" style={{ marginTop: '-8px' }} name="status" value="Deleted" checked={filterByObj.status === "Deleted"} onChange={handleInputChange3} />
                                                        <label className="ms-1">Deleted</label>
                                                    </div>
                                                </div>




                                                <div className="col-lg-4" style={{ width: '700px' }} >
                                                    <div className="input-group" >
                                                        <div className="input-group-text border-end-0" >
                                                            <i className="fe fe-calendar lh--9 op-6" />
                                                        </div>
                                                        <div style={{ flex: '89' }}>
                                                            <DatePicker
                                                                selected={startDate}
                                                                onChange={handleChange}
                                                                startDate={startDate}
                                                                endDate={endDate}
                                                                selectsRange
                                                                placeholderText="Select Date Range"
                                                                dateFormat="yyyy/MM/dd"
                                                                className="form-control fc-datepicker"
                                                                style={{ fontSize: '14px' }}

                                                            />
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>{" "}
                                        </div>
                                    </div>
                                </div>{" "}
                            </div>



                            <div className="row row-sm" style={{ width: '101.5%' }}>
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card main-content-body-profile"
                                        style={{
                                            width: "100%",
                                            margin: "0 auto",
                                            padding: "20px",
                                        }}>
                                        <div
                                            className="scroll-container"
                                            style={{

                                                maxWidth: "100%",
                                            }}
                                        >
                                            <style>
                                                {`
                                .scroll-container::-webkit-scrollbar {
                                    height: 6px; /* Customize the scrollbar height */
                                }
                                .scroll-container::-webkit-scrollbar-thumb {
                                    background-color: #888; /* Customize scrollbar color */
                                    border-radius: 10px;
                                }
                                table {
                                    width: 100%;
                                    border-collapse: collapse; /* Ensure borders are not double */
                                    table-layout: auto; /* Let the table adapt */
                                    border: 1px solid #ddd; /* Add border to the table */
                                }
                                th, td {
                                    padding: 6px 8px;
                                    font-size: 14px;
                                    text-align: center;
                                    white-space: nowrap; /* Prevent text wrapping */
                                    border: 1px solid #ddd; /* Add border to the table cells */
                                }
                                th {
                                    background-color: #f2f2f2;
                                    font-weight: bold;
                                    font-size: 14px;
                                }
                                .left-aligned {
                                    text-align: left;
                                    padding-left: 8px;
                                }
                                th:nth-child(10), td:nth-child(10) {
                                    min-width: 200px;  /* Ensure Actions Performed By has enough space */
                                }
                                @media (max-width: 1200px) {
                                    /* Responsive adjustments for smaller screens */
                                    table {
                                        width: 100%;
                                    }
                                    th, td {
                                        font-size: 12px;
                                        padding: 4px 6px;
                                    }
                                }
                            `}
                                            </style>

                                            <table >
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <label className="ckbox">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedItems.length === currentPageData.length}
                                                                    onChange={toggleSelectAll}
                                                                />
                                                                <span />
                                                            </label>
                                                        </th>
                                                        <th style={{ textAlign: 'left' }}>Name</th>
                                                        <th style={{ textAlign: 'left' }}>Amount (Rs)</th>
                                                        <th style={{ textAlign: 'left' }}>Bank Cheque</th>
                                                        <th style={{ textAlign: 'left' }}>AMRS Account</th>
                                                        <th style={{ textAlign: 'left' }}>CHQ No</th>
                                                        <th style={{ textAlign: 'left' }}>Cheque Date</th>
                                                        <th style={{ textAlign: 'left' }}>Status</th>
                                                        <th style={{ textAlign: 'left' }}>Take Actions</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {currentPageData.map((user) => (
                                                        <tr key={user.id}>
                                                            <td style={{ textAlign: 'left' }}>
                                                                <label className="ckbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedItems.includes(user.id)}
                                                                        onChange={() => toggleCheckbox(user.id)}
                                                                    />
                                                                    <span />
                                                                </label>
                                                            </td>
                                                            <td style={{ textAlign: 'left', cursor: 'pointer' }} onClick={() => handleOpenModal16(user?.applicant?.id)}>
                                                                {user?.applicant?.fullName}
                                                            </td>
                                                            <td style={{ textAlign: 'left' }}>{user.amount}</td>
                                                            <td style={{ textAlign: 'left' }}>
                                                                {user?.collectionMode === 'Online'
                                                                    ? user?.remark || 'N/A'
                                                                    : user?.collectionMode === 'Cheque'
                                                                        ? user?.deposteToAmrs || 'N/A'
                                                                        : 'N/A'}
                                                            </td>
                                                            <td style={{ textAlign: 'left' }}>{user.amrsBankName || 'N/A'}</td>
                                                            <td style={{ textAlign: 'left' }}>
                                                                {user?.collectionMode === 'Cheque'
                                                                    ? user?.chequeNo || 'N/A'
                                                                    : user?.collectionMode === 'Online'
                                                                        ? user?.transactionNo || 'N/A'
                                                                        : 'N/A'}
                                                            </td>
                                                            <td style={{ textAlign: 'left' }}>
                                                                {user?.collectionMode === 'Cheque' ? user?.formattedDate || 'N/A' : 'N/A'}
                                                            </td>
                                                            <td style={{ textAlign: 'left' }}>{user.status || 'N/A'}</td>
                                                            <td style={{ textAlign: 'left' }}>
                                                                {/* {user.isHold && filterByObj.status === 'Received' && (
                                                                    <button className="btn ripple btn-primary btn-xs" style={{ marginRight: "6px", fontSize: "12px" }} onClick={() => handleOpenModal60(user.id)}>
                                                                        Deposite
                                                                    </button>
                                                                )}
                                                                {filterByObj.status !== 'Deposited' && filterByObj.status !== 'Deleted' && filterByObj.status !== 'All Cheque' && (
                                                                    <>
                                                                        {user.isHold === true && (
                                                                            <button className="btn ripple btn-success btn-xs" style={{ marginRight: "6px", fontSize: "12px" }} onClick={() => handleOpenModal61(user.id)}>
                                                                                Un-Hold
                                                                            </button>
                                                                        )}
                                                                        {user.isHold === false && (
                                                                            <button className="btn ripple btn-danger btn-xs" style={{ marginRight: "6px", fontSize: "12px" }} onClick={() => handleOpenModal62(user.id)}>
                                                                                Hold
                                                                            </button>
                                                                        )}
                                                                    </>
                                                                )}
                                                                {filterByObj.status === 'Deposited' && (
                                                                    <button className="btn ripple btn-primary btn-xs" style={{ marginRight: "6px", fontSize: "12px" }} onClick={() => handleOpenModal58(user.id)} >
                                                                        Report
                                                                    </button>
                                                                )}
                                                                {filterByObj.status === 'Deleted' && (
                                                                    <button className="btn ripple btn-primary btn-xs" style={{ marginRight: "6px", fontSize: "12px" }} onClick={() => handleOpenModal59(user.id)}>
                                                                        Re-Deposit
                                                                    </button>
                                                                )} */}

                                                                {user.isHold === false &&
                                                                    <button
                                                                        className="btn ripple btn-primary btn-xs"
                                                                        style={{ marginRight: "6px", fontSize: "12px" }}
                                                                        onClick={() => handleOpenModal60(user.id)}
                                                                    >
                                                                        Credit
                                                                    </button>

                                                                }
                                                                {user.isHold === false &&
                                                                    <button
                                                                        className="btn ripple btn-primary btn-xs"
                                                                        style={{ marginRight: "6px", fontSize: "12px", background: "#3CB371" }}
                                                                        onClick={() => handleOpenModal62(user.id)}
                                                                    >
                                                                        Hold
                                                                    </button>
                                                                }
                                                                {user.isHold === true &&
                                                                    <button
                                                                        className="btn ripple btn-primary btn-xs"
                                                                        style={{ marginRight: "6px", fontSize: "12px", background: "#E30B5C" }}
                                                                        onClick={() => handleOpenModal61(user.id)}
                                                                    >
                                                                        Un-hold
                                                                    </button>
                                                                }
                                                                {user.isHold === false &&
                                                                    <button
                                                                        className="btn ripple btn-primary btn-xs"
                                                                        style={{ marginRight: "6px", fontSize: "12px" }}
                                                                        onClick={() => handleOpenModal58(user.id)}
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                }
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>

                                                <tfoot>
                                                    <tr>
                                                        <td colSpan="9" style={{ textAlign: 'left' }}>
                                                            <strong>Total Payment:</strong> <span style={{ marginLeft: '65px' }}>{totalPayment}</span>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>



                                            <div className="d-flex align-items-center ">
                                                <div >

                                                    <select
                                                        id="itemsPerPage"
                                                        className="form-select"
                                                        value={itemsPerPage}
                                                        onChange={handleItemsPerPageChange}
                                                    >
                                                        <option value={20}>20</option>
                                                        <option value={50}>50</option>
                                                        <option value={100}>100</option>
                                                        <option value={200}>200</option>
                                                        <option value={500}>500</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="pagination d-flex justify-content-center">
                                                <ReactPaginate
                                                    previousLabel={'Previous'}
                                                    nextLabel={'Next'}
                                                    breakLabel={'...'}
                                                    breakClassName={'break-me'}
                                                    pageCount={Math.ceil(leadCount / itemsPerPage)}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={5}
                                                    onPageChange={handlePageClick}
                                                    containerClassName={'pagination'}
                                                    activeClassName={'active'}
                                                    previousLinkClassName={'page-link'}
                                                    nextLinkClassName={'page-link'}
                                                    disabledClassName={'disabled'}
                                                    pageClassName={'page-item'}
                                                    pageLinkClassName={'page-link'}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>


                {/* End Main Content*/}
                {/* Main Footer*/}
                <div className="main-footer text-center" >
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




                <div
                    className={`modal fade ${isModalOpen16 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{
                        display: isModalOpen16 ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflow: isModalOpen16 ? 'hidden' : 'auto'
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered modal-xl"
                        style={{ maxWidth: '30%', margin: 'auto' }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <div
                                className="modal-header"
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    borderBottom: '1px solid #dee2e6',
                                    borderRadius: '10px 10px 0 0'
                                }}
                            >
                                <h5 className="modal-title">View </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal16}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body" style={{ padding: '20px' }}>
                                <form>
                                    <div className="row row-sm">
                                        <div className="col-sm-12 form-group">
                                            <div style={{ marginBottom: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc1"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Ticket Id: {employee2.ticketId}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc1"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Name: {employee2.fullName}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Email: {employee2.applicantEmail}
                                                    </label>
                                                </div>

                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Mobile No: {employee2.applicantMobile}
                                                    </label>
                                                </div>

                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Unit No: {employee2.unitNo}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Lucky Draw: {employee2?.luckyDraw?.luckyDrawName}
                                                    </label>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Project: {employee2?.project?.projectName}
                                                    </label>
                                                </div>

                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label
                                                        className="form-label"
                                                        htmlFor="kyc2"
                                                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                                                    >
                                                        Schame: {employee2?.schemeId}
                                                    </label>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>



                <div
                    className={`modal ${isModalOpen58 ? 'show' : ''}`}
                    style={{ display: isModalOpen58 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Permissions</h5>
                                <button
                                    type="button"
                                    className="close"
                                    aria-label="Close"
                                    onClick={handleCloseModal58}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                <form>
                                    <div className="modal-body">
                                        <p> Are you sure you are reporting this cheque ?</p>

                                    </div>

                                    <div className="modal-footer d-flex justify-content-center">

                                        <button
                                            type="button"
                                            style={{ backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none" }}
                                            onClick={handleCloseModal58}
                                        >
                                            Close
                                        </button>


                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleInvalid}

                                        >
                                            Report
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`modal ${isModalOpen59 ? 'show' : ''}`}
                    style={{ display: isModalOpen59 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Permissions</h5>
                                <button
                                    type="button"
                                    className="close"
                                    aria-label="Close"
                                    onClick={handleCloseModal59}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                <form>
                                    <div className="modal-body">
                                        <p>Are you sure you are re-depositing this cheque ?</p>

                                    </div>

                                    <div className="modal-footer d-flex justify-content-center">

                                        <button
                                            type="button"
                                            style={{ backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none" }}
                                            onClick={handleCloseModal59}
                                        >
                                            Close
                                        </button>


                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleRedeposite}

                                        >
                                            Re-Deposit
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className={`modal ${isModalOpen60 ? 'show' : ''}`}
                    style={{ display: isModalOpen60 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Permissions</h5>
                                <button
                                    type="button"
                                    className="close"
                                    aria-label="Close"
                                    onClick={handleCloseModal60}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                <form>
                                    <div className="modal-body">
                                        <p>Are you sure you are depositing this cheque ?</p>

                                    </div>

                                    <div className="modal-footer d-flex justify-content-center">

                                        <button
                                            type="button"
                                            style={{ backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none" }}
                                            onClick={handleCloseModal60}
                                        >
                                            Close
                                        </button>


                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleDeposite}

                                        >
                                            Deposite
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className={`modal ${isModalOpen61 ? 'show' : ''}`}
                    style={{ display: isModalOpen61 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Permissions</h5>
                                <button
                                    type="button"
                                    className="close"
                                    aria-label="Close"
                                    onClick={handleCloseModal61}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                <form>
                                    <div className="modal-body">
                                        <p>Are you sure you are un-hold cheque ?</p>

                                    </div>

                                    <div className="modal-footer d-flex justify-content-center">

                                        <button
                                            type="button"
                                            style={{ backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none" }}
                                            onClick={handleCloseModal61}
                                        >
                                            Close
                                        </button>


                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleDepositeUnHold}

                                        >
                                            Un-Hold
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className={`modal ${isModalOpen62 ? 'show' : ''}`}
                    style={{ display: isModalOpen62 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Permissions</h5>
                                <button
                                    type="button"
                                    className="close"
                                    aria-label="Close"
                                    onClick={handleCloseModal62}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                <form>
                                    <div className="modal-body">
                                        <p>  Are you sure you are hold cheque ?</p>

                                    </div>

                                    <div className="modal-footer d-flex justify-content-center">

                                        <button
                                            type="button"
                                            style={{ backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none" }}
                                            onClick={handleCloseModal62}
                                        >
                                            Close
                                        </button>


                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleDepositeHold}

                                        >
                                            Hold
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>



                <div
                    className={`modal ${isModalOpen63 ? 'show' : ''}`}
                    style={{ display: isModalOpen63 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Permissions</h5>
                                <button
                                    type="button"
                                    className="close"
                                    aria-label="Close"
                                    onClick={handleCloseModal63}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                <form>
                                    <div className="modal-body">
                                        <p>Are you sure you are depositing {count} cheques ?</p>

                                    </div>

                                    <div className="modal-footer d-flex justify-content-center">

                                        <button
                                            type="button"
                                            style={{ backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none" }}
                                            onClick={handleCloseModal63}
                                        >
                                            Close
                                        </button>


                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleDeposites}

                                        >
                                            Deposite
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className={`modal ${isModalOpen64 ? 'show' : ''}`}
                    style={{ display: isModalOpen64 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Permissions</h5>
                                <button
                                    type="button"
                                    className="close"
                                    aria-label="Close"
                                    onClick={handleCloseModal64}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                <form>
                                    <div className="modal-body">
                                        <p>Are you sure you are reporting {count} cheques ?</p>

                                    </div>

                                    <div className="modal-footer d-flex justify-content-center">

                                        <button
                                            type="button"
                                            style={{ backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none" }}
                                            onClick={handleCloseModal64}
                                        >
                                            Close
                                        </button>


                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleInvalids}

                                        >
                                            Report
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className={`modal ${isModalOpen65 ? 'show' : ''}`}
                    style={{ display: isModalOpen65 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '400px', margin: 'auto' }}>
                        <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                            <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                <h5 className="modal-title">Permissions</h5>
                                <button
                                    type="button"
                                    className="close"
                                    aria-label="Close"
                                    onClick={handleCloseModal65}
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                <form>
                                    <div className="modal-body">
                                        <p>Are you sure you are re-depositing {count} cheques ?</p>

                                    </div>

                                    <div className="modal-footer d-flex justify-content-center">

                                        <button
                                            type="button"
                                            style={{ backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none" }}
                                            onClick={handleCloseModal65}
                                        >
                                            Close
                                        </button>


                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleRedeposites}

                                        >
                                            Re-Deposit
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>



            </div >






        </>

    )
}

export default ChequeLedger