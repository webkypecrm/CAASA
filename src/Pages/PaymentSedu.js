import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const PaymentSedu = () => {
    const { empid, empid2 } = useParams();

    const initialFormData = {
        amount: '',
        collectionMode: '',
        collectionMode: '',
        enterDiscount: '',
        paymentCredit: '',
        handOverBy: '',
        collectedBy: '',
        uploadRecipt: '',
        select: '',
        amrsAccount: '',
        transactionNo: '',
        chequeDate: '',
        chequeNo: '',
        bankCheque: '',
        deposteToAmrs: '',

    };
    const initialFormData2 = {
        brocehureImage: '',
        paymentPlanImage: '',
        basicPriceFPP: '',
        onBookingPerFPP: '',
        onBookingFPP: '',
        installMentFPP: '',
        totalValuePerFPP: '',
        totalValueFPP: '',
        basicPricePLP: '',
        onBookingPerPLP: '',
        onBookingPLP: '',
        withIn60PerPLP: '',
        withIn60PLP: '',
        withIn90PerPLP: '',
        withIn90PLP: '',
        withIn120PerPLP: '',
        withIn120PLP: '',
        withIn150PerPLP: '',
        withIn150PLP: '',
        withIn180PerPLP: '',
        withIn180PLP: '',
        restOnRegistryPerPLP: '',
        restOnRegistryPLP: '',
        basicPriceDLP: '',
        onBookingPerDLP: '',
        onBookingDLP: '',
        withIn30PerDLP: '',
        withIn30DLP: '',
        restOnRegistryPerDLP: '',
        restOnRegistryDLP: '',
        totalValuePerDLP: '',
        totalValueDLP: '',
        schemeId: '',
        projectId: '',
        companyId: '',
        planDescription: '',

        extraPLP1: '',
        extraPerPLP1: '',
        extraValuePLP1: '',

        extraPLP2: '',
        extraPerPLP2: '',
        extraValuePLP2: '',

        extraPLP3: '',
        extraPerPLP3: '',
        extraValuePLP3: '',

        totalPerPLP: '',
        totalValuePLP: '',
        note: '',
        createdAt: '',
        areaFPP: '',
        areaUnitFPP: '',

        areaPLP: '',
        areaUnitPLP: '',

        areaDLP: '',
        areaUnitDLP: '',
        companyPhoto: '',

    };

    const [formData, setFormData] = useState(initialFormData);
    const [formData2, setFormData2] = useState(initialFormData2);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [project, setProject] = useState([]);
    const [users, setUsers] = useState([]);
    const [users2, setUsers2] = useState([]);
    const [employee, setEmployee] = useState({})
    const [employee2, setEmployee2] = useState({})
    const [employee3, setEmployee3] = useState({})
    const [employee4, setEmployee4] = useState({})
    const [profilePic, setProfilePic] = useState(null);
    const [profilePics, setProfilePics] = useState(null);
    const [size, setSize] = useState([])
    const [disableInput2, setDisableInput2] = useState(true);
    const [holdStatus, setHoldStatus] = useState({});
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [holdActionId, setHoldActionId] = useState(null);
    const [paidAmount, setPaidAmount] = useState(0);
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const handleOpenModal2 = () => {
        setIsModalOpen2(true);
        document.body.classList.add('modal-open');
    };
    const handleCloseModal2 = () => {
        setIsModalOpen2(false);

        document.body.classList.remove('modal-open');
    };

    const handleOpenModal3 = () => {
        setIsModalOpen3(true);
        document.body.classList.add('modal-open');
    };
    const handleCloseModal3 = () => {
        setIsModalOpen3(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal4 = (id) => {
        setHoldActionId(id);
        setIsModalOpen4(true);
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        setHoldActionId(null);
    };

    useEffect(() => {
        async function getEmppps() {

            const url = `${apiUrl}/applicant/getApplicantInfo/${empid}`;
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            })
            response = await response.json();

            if (response.status === "success") {
                setEmployee4(response.data);
            }
        }
        getEmppps();
    }, [])

    useEffect(() => {
        async function getEmp() {

            const Token = localStorage.getItem("Token");
            let response = await fetch(`${apiUrl}/employee/employee`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            })
            response = await response.json();

            if (response.status === "success") {
                setEmployee(response.data);
            }
        }
        getEmp();
    }, [])

    //size type
    useEffect(() => {

        const Token = localStorage.getItem('Token');
        fetch(`${apiUrl}/master/getAllMasterData/24`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setSize(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);
    const handleInputChange2 = (e) => {
        if (!disableInput2) {
            setFormData({ ...formData, basicPriceFPP: e.target.value });
        }
    };


    useEffect(() => {
        const fetchUser = async () => {

            try {
                const url = `${apiUrl}/plan/planById/${empid2}`;
                console.log(url)
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;
                // console.log('Fetched Data:', data);
                const photo = data.brocehureImage;
                const photos = data.paymentPlanImage;
                setProfilePic(photo)
                setProfilePics(photos)

                setFormData((prevFormData) => ({
                    ...prevFormData,

                    brocehureImage: data.brocehureImage,
                    paymentPlanImage: data.paymentPlanImage,
                    schemeId: data.schemeId,
                    projectId: data.projectId,
                    companyId: data.companyId,
                    planDescription: data.planDescription,
                    basicPriceFPP: data.basicPriceFPP,
                    onBookingPerFPP: data.onBookingPerFPP,
                    onBookingFPP: data.onBookingFPP,
                    installMentFPP: data.installMentFPP,
                    totalValuePerFPP: data.totalValuePerFPP,
                    totalValueFPP: data.totalValueFPP,
                    createdAt: data.createdAt,
                    basicPricePLP: data.basicPricePLP,
                    onBookingPerPLP: data.onBookingPerPLP,
                    onBookingPLP: data.onBookingPLP,
                    withIn60PerPLP: data.withIn60PerPLP,
                    withIn60PLP: data.withIn60PLP,
                    withIn90PerPLP: data.withIn90PerPLP,
                    withIn90PLP: data.withIn90PLP,
                    withIn120PerPLP: data.withIn120PerPLP,
                    withIn120PLP: data.withIn120PLP,
                    withIn150PerPLP: data.withIn150PerPLP,
                    withIn150PLP: data.withIn150PLP,
                    withIn180PerPLP: data.withIn180PerPLP,
                    withIn180PLP: data.withIn180PLP,
                    restOnRegistryPerPLP: data.restOnRegistryPerPLP,
                    restOnRegistryPLP: data.restOnRegistryPLP,
                    basicPriceDLP: data.basicPriceDLP,
                    onBookingPerDLP: data.onBookingPerDLP,
                    onBookingDLP: data.onBookingDLP,
                    withIn30PerDLP: data.withIn30PerDLP,
                    withIn30DLP: data.withIn30DLP,
                    restOnRegistryPerDLP: data.restOnRegistryPerDLP,
                    restOnRegistryDLP: data.restOnRegistryDLP,
                    totalValuePerDLP: data.totalValuePerDLP,
                    totalValueDLP: data.totalValueDLP,

                    extraPLP1: data.extraPLP1,
                    extraPerPLP1: data.extraPerPLP1,
                    extraValuePLP1: data.extraValuePLP1,
                    companyPhoto: data.companyPhoto,
                    extraPLP2: data.extraPLP2,
                    extraPerPLP2: data.extraPerPLP2,
                    extraValuePLP2: data.extraValuePLP2,

                    extraPLP3: data.extraPLP3,
                    extraPerPLP3: data.extraPerPLP3,
                    extraValuePLP3: data.extraValuePLP3,

                    totalPerPLP: data.totalPerPLP,
                    totalValuePLP: data.totalValuePLP,
                    note: data.note,

                    areaFPP: data.areaFPP,
                    areaUnitFPP: data.areaUnitFPP,

                    areaPLP: data.areaPLP,
                    areaUnitPLP: data.areaUnitPLP,

                    areaDLP: data.areaDLP,
                    areaUnitDLP: data.areaUnitDLP,

                }));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUser();
    }, []);


    useEffect(() => {
        fetch(`${apiUrl}/bank/accountDropdown`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setProject(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);

    useEffect(() => {
        async function getEmpp() {

            const Token = localStorage.getItem("Token");
            let response = await fetch(`${apiUrl}/applicant/getApplicantInfo/${empid}`, {
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
    }, [])


    const handleFileChange15 = (e) => {
        const files = e.target.files;

        if (files.length > 0) {
            const applicantImageFile = files[0];

            if (applicantImageFile.type.startsWith('image/')) {


                setFormData((prevData) => ({
                    ...prevData,
                    uploadRecipt: applicantImageFile,
                }));
            } else if (applicantImageFile.type === 'application/pdf') {
                // Handle PDF files
                setFormData((prevData) => ({
                    ...prevData,
                    uploadRecipt: applicantImageFile,

                }));
            } else {
                console.log('Unsupported file type');
            }
        } else {
            console.log('No file selected');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await fetch(`${apiUrl}/payment/addPayment?applicantId=${empid}`, {
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
            handleCloseModal3()
            fetchDataFromApi()
            setFormData(initialFormData);
            toast.success(response2.message);


        } catch (error) {
            toast.error(error.message);

        }
    };
    //hold or unhold status

    useEffect(() => {
        const holdStatusFromStorage = localStorage.getItem('holdStatus');
        if (holdStatusFromStorage) {
            const holdStatus = JSON.parse(holdStatusFromStorage);
            setHoldStatus(holdStatus);
        }
    }, []);

    const toggleHoldStatus = (id) => {
        const newHoldStatus = { ...holdStatus };
        newHoldStatus[id] = !newHoldStatus[id];
        setHoldStatus(newHoldStatus);
        localStorage.setItem('holdStatus', JSON.stringify(newHoldStatus));
    };

    useEffect(() => {
        // Prevent scrolling when modal is open
        if (isModalOpen3) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen3]);
    useEffect(() => {
        // Prevent scrolling when modal is open
        if (isModalOpen4) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen4]);

    const fetchDataFromApis = (id) => {
        const isUnhold = !holdStatus[id];
        const url = `${apiUrl}/payment/modifyPaymentLedger?paymentId=${id}&isUnhold=${isUnhold}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Token}`,
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setEmployee3(data.data);
                    toggleHoldStatus(id);
                    const button = document.getElementById(`unholdButton_${id}`);
                    if (button) {
                        button.textContent = isUnhold ? 'Hold' : 'Unhold';
                        button.classList.toggle('btn-primary', !isUnhold);
                        button.classList.toggle('btn-success', isUnhold);
                    }
                } else {
                    console.error('API request was not successful:', data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };


    const handleOkButtonClick = () => {
        if (holdActionId !== null) {
            fetchDataFromApis(holdActionId);
            handleCloseModal4();
        }
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

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
        fetch(`${apiUrl}/payment/getPayment?applicantId=${empid}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    setPaidAmount(data.paidAmount);
                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            formattedDate: item.chequeDate ? formatDateTime(item.chequeDate) : null,
                            formattedDates: item.createdAt ? formatDateTimes(item.createdAt) : null,
                            formattedDate2: item.paymentCredit ? formatDateTime2(item.paymentCredit) : null,
                            bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
                            accountNumber: item.amrsAccount ? item.amrsAccount.accountNumber : null,
                        }));
                        setUsers(formattedData);
                    } else {
                        console.error('API response does not contain companyList array:', data);
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
        fetchDataFromApi()
    }, []);

    const formatTime2 = (timeString) => {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);

        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        return date.toLocaleTimeString('en-IN', options);
    };

    const fetchDataFromApisss = () => {
        fetch(`${apiUrl}/applicant/getUpcomingPayment?applicantId=${empid}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    setPaidAmount(data.paidAmount);
                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            date: item.date ? formatDateTime(item.date) : null,
                            time: item.time ? formatTime2(item.time) : null,



                        }));
                        setUsers2(formattedData);
                    } else {
                        console.error('API response does not contain companyList array:', data);
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
        fetchDataFromApisss()
    }, []);


    return (
        <>
            <div className="page">
                <TopHeader />
                <Prince />

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="page-header">
                            {/* Page Header */}
                            <div className="page-header">
                                <div className="row row-sm">
                                    <div className="col-sm-12 col-md-3">
                                        <div className="card custom-card">
                                            <div className="card-body" style={{ width: '1400px' }} >
                                                <div>
                                                    <h6>CID:{employee4.ticketId}</h6>
                                                    <h6 style={{ whiteSpace: 'nowrap' }}>
                                                        <span className="fs-20 me-20" style={{ marginBottom: '8px' }}>{employee4.applicantFirstName} {employee4.applicantLastName}</span>{" "}
                                                        <span className="badge bg-success">Customer</span>
                                                    </h6>


                                                    <span className="text-muted">
                                                        Phone:{employee4.applicantMobile}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-2 mb-3">
                                        <div className="card custom-card" >
                                            <div className="card-body" style={{ width: '400px' }}>
                                                <div>
                                                    <h6>Project:{employee4.projectId}</h6>
                                                    <h6>
                                                        <span className="fs-20 me-2">Unit:{employee4.unitNo}</span>
                                                        <span className="badge bg-danger">Unit</span>
                                                    </h6>
                                                    <span className="text-muted">Type:{employee4.schemeType}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-2">
                                        <div className="card custom-card" >
                                            <div className="card-body">
                                                <div>
                                                    <h6>Total Amount</h6>
                                                    <h6>
                                                        <span className="fs-20 me-2" style={{ color: 'blue' }}>{employee4.totalCost}</span>
                                                    </h6>
                                                    <span className="text-muted">Final Payable</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-2">
                                        <div className="card custom-card" >
                                            <div className="card-body">
                                                <div>
                                                    <h6>Total Due</h6>
                                                    <h6>
                                                        <span className="fs-20 me-2" style={{ color: 'red' }}>{employee4.totalCost - employee4.registrationAmount}</span>
                                                    </h6>
                                                    <span className="text-muted">Final Due</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-2">
                                        <div className="card custom-card" style={{ width: '240px' }}>
                                            <div className="card-body">
                                                <div>
                                                    <h6>Total Received</h6>
                                                    <h6>
                                                        <span className="fs-20 me-2" style={{ color: 'green' }}>{employee4.registrationAmount || '0'}</span>

                                                    </h6>
                                                    <span className="text-muted">
                                                        Final Received

                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div style={{ marginTop: '1px', width: '100%', backgroundColor: '#1abc9c', padding: '5px 20px' }}>
                                <h3 style={{ textAlign: 'left', color: '#ffffff', fontWeight: 'bold', fontSize: '-1rem', margin: '0' }}>Payment Schedule</h3>
                            </div>

                            <div className="row row-xl mt-4 justify-content-around" style={{ marginTop: '2px' }}>
                                <div className="col-xl-12 col-lg-12 col-md-12" >
                                    <div className="card custom-card main-content-body-profile">
                                        <div className="card-body" style={{
                                            overflowX: "auto",
                                            maxWidth: "100%",
                                            display: "block",
                                        }}>
                                            <div className="table-responsive" style={{ width: 1280 }}>

                                                {employee2.paymentPlan === 'FPP' && (
                                                    <>
                                                        <h4
                                                            className="mt-0 text-center mb-3"
                                                            style={{ color: "#2e3192" }}
                                                        >
                                                            FLEXI PAYMENT PLAN
                                                        </h4>
                                                        <table className="table table-bordered">
                                                            <thead>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <th className="tx-left" />
                                                                    <th className="tx-left" style={{ width: 350 }}>
                                                                        Basic Price ₹{" "}
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                            name="basicPriceFPP"
                                                                            value={formData.basicPriceFPP}
                                                                            disabled={disableInput2}

                                                                        />
                                                                        {" "} per {" "}
                                                                        <select className="form-control"
                                                                            name="areaUnitFPP"
                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                            value={formData.areaUnitFPP}
                                                                            disabled={disableInput2}

                                                                        >
                                                                            <option >Select</option>
                                                                            {size.map((option, index) => (
                                                                                <option key={option.id} value={option.name}>
                                                                                    {option.name}
                                                                                </option>
                                                                            ))}

                                                                        </select>

                                                                    </th>
                                                                    <th className="tx-left" />
                                                                    <th className="tx-left">
                                                                        <span style={{
                                                                            marginRight: 10,
                                                                            fontSize: "9px",
                                                                            // whiteSpace: "nowrap" 
                                                                        }}>
                                                                            Installment Amount for
                                                                        </span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 90, height: 25, display: "inline", marginRight: 10 }}
                                                                            name="areaFPP"
                                                                            value={formData.areaFPP}
                                                                            disabled={disableInput2}
                                                                        />  <span style={{ fontSize: '9px' }}>{formData.areaUnitFPP} </span>

                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">1</td>
                                                                    <td className="tx-left">On Booking</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="onBookingPerFPP"
                                                                            value={`${formData.onBookingPerFPP}%`}
                                                                            disabled={disableInput2}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="onBookingFPP"
                                                                            value={formData.onBookingFPP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">2</td>
                                                                    <td className="tx-left">
                                                                        Within 24 Months. Monthly installment Each of:-
                                                                    </td>
                                                                    <td className="tx-left" />
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="installMentFPP"
                                                                            value={formData.installMentFPP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left" />
                                                                    <td className="tx-left">Total value</td>
                                                                    <td className="tx-left">

                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="totalValueFPP"
                                                                            value={formData.totalValueFPP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </>
                                                )}
                                                {employee2.paymentPlan === 'PLP' && (
                                                    <>
                                                        <h4
                                                            className="mt-0 text-center mb-3"
                                                            style={{ color: "#2e3192" }}
                                                        >
                                                            POSSESSION LINK PLAN
                                                        </h4>
                                                        <table className="table table-bordered" style={{ width: 1280 }}>
                                                            <thead>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <th className="tx-left" />
                                                                    <th className="tx-left" style={{ width: 350 }}>
                                                                        Basic Price ₹{" "}
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                            name="basicPricePLP"
                                                                            value={formData.basicPricePLP}
                                                                            disabled={disableInput2}
                                                                        />
                                                                        {" "} per {" "}
                                                                        <select className="form-control"
                                                                            name="areaUnitPLP"
                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                            value={formData.areaUnitPLP}
                                                                            disabled={disableInput2}

                                                                        >
                                                                            <option >Select</option>
                                                                            {size.map((option, index) => (
                                                                                <option key={option.id} value={option.name}>
                                                                                    {option.name}
                                                                                </option>
                                                                            ))}

                                                                        </select>
                                                                    </th>
                                                                    <th className="tx-left" />
                                                                    <th className="tx-left">
                                                                        <span style={{
                                                                            marginRight: 10,
                                                                            fontSize: "9px",
                                                                            // whiteSpace: "nowrap" 
                                                                        }}>
                                                                            Installment Amount for
                                                                        </span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 80, height: 25, display: "inline" }}
                                                                            name="areaPLP"
                                                                            value={formData.areaPLP}
                                                                            disabled={disableInput2}
                                                                        />   <span style={{ fontSize: '9px' }}>{formData.areaUnitPLP}</span>


                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>




                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">1</td>
                                                                    <td className="tx-left">On Booking</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="onBookingPerPLP"
                                                                            value={`${formData.onBookingPerPLP}%`}
                                                                            disabled={disableInput2}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="onBookingPLP"
                                                                            value={formData.onBookingPLP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">2</td>
                                                                    <td className="tx-left">Within 60 Days-</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn60PerPLP"
                                                                            value={`${formData.withIn60PerPLP}%`}
                                                                            disabled={disableInput2}
                                                                        // style={{ color: 'white', backgroundColor: 'gray' }}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn60PLP"
                                                                            value={formData.withIn60PLP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>

                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">3</td>
                                                                    <td className="tx-left">Within 90 Days</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn90PerPLP"
                                                                            value={`${formData.withIn90PerPLP}%`}
                                                                            disabled={disableInput2}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn90PLP"
                                                                            value={formData.withIn90PLP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">4</td>
                                                                    <td className="tx-left">Within 120 Days</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn120PerPLP"
                                                                            value={`${formData.withIn120PerPLP}%`}
                                                                            disabled={disableInput2}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn120PLP"
                                                                            value={formData.withIn120PLP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>

                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">5</td>
                                                                    <td className="tx-left">Within 150 Days</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn150PerPLP"
                                                                            value={`${formData.withIn150PerPLP}%`}
                                                                            disabled={disableInput2}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn150PLP"
                                                                            value={formData.withIn150PLP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">6</td>
                                                                    <td className="tx-left">Within 180 Days</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn180PerPLP"
                                                                            value={`${formData.withIn180PerPLP}%`}
                                                                            disabled={disableInput2}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn120PLP"
                                                                            value={formData.withIn180PLP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">7</td>
                                                                    <td className="tx-left">Rest on Registry</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="restOnRegistryPerPLP"
                                                                            value={`${formData.restOnRegistryPerPLP}%`}
                                                                            disabled={disableInput2}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="restOnRegistryPLP"
                                                                            value={formData.restOnRegistryPLP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>



                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">8</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraPLP1"
                                                                            value={formData.extraPLP1}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraPerPLP1"
                                                                            value={formData.extraPerPLP1 ? `${formData.extraPerPLP1}%` : ''}
                                                                            disabled={disableInput2}

                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraValuePLP1"
                                                                            value={formData.extraValuePLP1}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>



                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">9</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraPLP2"
                                                                            value={formData.extraPLP2}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraPerPLP2"
                                                                            value={formData.extraPerPLP2 ? `${formData.extraPerPLP2}%` : ''}
                                                                            disabled={disableInput2}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraValuePLP2"
                                                                            value={formData.extraValuePLP2}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>

                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">10</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraPLP3"
                                                                            value={formData.extraPLP3}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraPerPLP3"
                                                                            value={formData.extraPerPLP3 ? `${formData.extraPerPLP3}%` : ''}
                                                                            disabled={disableInput2}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="extraValuePLP3"
                                                                            value={formData.extraValuePLP3}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left" />

                                                                    <td className="tx-left">
                                                                        Total Value
                                                                    </td>
                                                                    <td className="tx-left">

                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="totalValuePLP"
                                                                            value={formData.totalValuePLP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </>
                                                )}
                                                {employee2.paymentPlan === 'DLP' && (
                                                    <>
                                                        <h4
                                                            className="mt-0 text-center mb-3"
                                                            style={{ color: "#2e3192" }}
                                                        >
                                                            DOWN LINK PLAN
                                                        </h4>
                                                        <table className="table table-bordered" style={{ width: 1280 }}>
                                                            <thead>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <th className="tx-left" />

                                                                    <th className="tx-left" style={{ width: 350 }}>
                                                                        Basic Price ₹{" "}
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                            name="basicPriceDLP"
                                                                            value={formData.basicPriceDLP}
                                                                            disabled={disableInput2}
                                                                        />
                                                                        {" "} per {" "}
                                                                        <select className="form-control"
                                                                            name="areaUnitDLP"
                                                                            style={{ width: 90, height: 25, display: "inline" }}
                                                                            value={formData.areaUnitDLP}
                                                                            disabled={disableInput2}

                                                                        >
                                                                            <option >Select</option>
                                                                            {size.map((option, index) => (
                                                                                <option key={option.id} value={option.name}>
                                                                                    {option.name}
                                                                                </option>
                                                                            ))}

                                                                        </select>

                                                                    </th>
                                                                    <th className="tx-left" />
                                                                    <th className="tx-left">
                                                                        <span style={{
                                                                            marginRight: 10,
                                                                            fontSize: "9px",
                                                                            // whiteSpace: "nowrap" 
                                                                        }}>
                                                                            Installment Amount for
                                                                        </span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            style={{ width: 80, height: 25, display: "inline" }}
                                                                            name="areaDLP"
                                                                            value={formData.areaDLP}
                                                                            disabled={disableInput2}
                                                                        /> <span style={{ fontSize: '9px' }}>{formData.areaUnitDLP}</span>


                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">1</td>
                                                                    <td className="tx-left">On Booking</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="onBookingPerDLP"
                                                                            value={`${formData.onBookingPerDLP}%`}
                                                                            disabled={disableInput2}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="onBookingDLP"
                                                                            value={formData.onBookingDLP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">2</td>
                                                                    <td className="tx-left">Within 30 Days-</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn30PerDLP"
                                                                            value={`${formData.withIn30PerDLP}%`}
                                                                            disabled={disableInput2}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="withIn30DLP"
                                                                            value={formData.withIn30DLP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>

                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left">3</td>
                                                                    <td className="tx-left">Rest on Registry</td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="restOnRegistryPerDLP"
                                                                            value={`${formData.restOnRegistryPerDLP}%`}
                                                                            disabled={disableInput2}
                                                                        />
                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="restOnRegistryDLP"
                                                                            value={formData.restOnRegistryDLP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>
                                                                <tr style={{ background: "#d6f6ff26" }}>
                                                                    <td className="tx-left" />
                                                                    <td className="tx-left">Total Value</td>
                                                                    <td className="tx-left">

                                                                    </td>
                                                                    <td className="tx-left">
                                                                        <input type="text" className="form-control"
                                                                            style={{ height: 25 }}
                                                                            name="totalValueDLP"
                                                                            value={formData.totalValueDLP}
                                                                            disabled={disableInput2} />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div style={{ marginTop: '20px', marginBottom: '20px', width: '100%', backgroundColor: '#1abc9c', padding: '5px 20px' }}>
                                <h3 style={{ textAlign: 'left', color: '#ffffff', fontWeight: 'bold', fontSize: '-1rem', margin: '0' }}>Payment History</h3>
                                {/* Your content here */}
                            </div>

                            <div className="row row-sm">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card main-content-body-profile">
                                        <div
                                            className="scroll-container"
                                            style={{
                                                overflowX: "auto",
                                                maxWidth: "100%",
                                                display: "block",
                                                scrollbarWidth: "thick", // For Firefox
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
                        @media (max-width: 800px) {
                            .scroll-container {
                                overflow-x: auto;
                            }
                        }
                    `}
                                            </style>
                                            <table
                                                align="center"
                                                width="100%"
                                                style={{
                                                    borderCollapse: "collapse",
                                                    border: "1px solid #fcfcfc",
                                                }}
                                            >
                                                <thead>
                                                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                                                        <th style={{ border: "1px solid #ccc", textAlign: "center", width: "100px", whiteSpace: "nowrap" }}>Amount Entry</th>
                                                        <th style={{ border: "1px solid #ccc", textAlign: "center", width: "100px", whiteSpace: "nowrap" }}>Payment Mode</th>
                                                        <th style={{ padding: "2px 5px", border: "1px solid #ccc", textAlign: "center", width: "100px" }}>Method</th>
                                                        <th style={{ border: "1px solid #ccc", textAlign: "center", width: "100px", whiteSpace: "nowrap" }}>Bank Name</th>
                                                        <th style={{ padding: "2px 35px", border: "1px solid #ccc", textAlign: "center", width: "150px", whiteSpace: "nowrap" }}>Webkype Account</th>
                                                        <th style={{ padding: "2px 20px", border: "1px solid #ccc", textAlign: "center", width: "150px", whiteSpace: "nowrap" }}>CHQ/TRN No</th>
                                                        <th style={{ padding: "2px 5px", border: "1px solid #ccc", textAlign: "center", width: "100px", whiteSpace: "nowrap" }}>Cheque Date</th>
                                                        <th style={{ border: "1px solid #ccc", textAlign: "center", width: "100px" }}>Payment Date</th>
                                                        <th style={{ padding: "2px 4px", border: "1px solid #ccc", textAlign: "center", width: "200px" }}>Actions</th>
                                                        <th style={{ padding: "2px 1px", border: "1px solid #ccc", textAlign: "center", width: "150px" }}>Actions Performed By</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.map((user) => (
                                                        <tr key={user.id}>
                                                            <td style={{ padding: "3px 10px", border: "1px solid #ccc", width: "100px" }}>
                                                                {user.amount}
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc", width: "100px" }}>
                                                                {user.collectionMode}
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc", width: "100px" }}>
                                                                {user.collectionMode === 'Online' && user.select}
                                                                {user.collectionMode === 'Cash Deposit' && 'Cash'}
                                                                {user.collectionMode === 'Cheque' && 'Cheque'}
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc", width: "100px" }}>
                                                                {user.bankName}
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc", width: "150px" }}>
                                                                {user.accountNumber}
                                                            </td>
                                                            <td style={{ padding: "3px 5px", border: "1px solid #ccc", width: "150px" }}>
                                                                {user.transactionNo}
                                                                {user.chequeNo}
                                                            </td>
                                                            <td style={{ padding: "3px 10px", border: "1px solid #ccc", whiteSpace: "nowrap", width: "100px" }}>
                                                                {user.formattedDate}
                                                            </td>
                                                            <td style={{ padding: "3px 10px", border: "1px solid #ccc", whiteSpace: "nowrap", width: "100px" }}>
                                                                {user.formattedDate2}
                                                            </td>
                                                            <td style={{ padding: "3px 25px", border: "1px solid #ccc", whiteSpace: "nowrap", width: "200px" }}>
                                                                <Link to={`/view-receipt/${user.id}`} target='blank' style={{ marginRight: "8px", display: "inline-block" }} className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                    View Receipt
                                                                </Link>
                                                                <button
                                                                    type="button"
                                                                    id={`unholdButton_${user.id}`}
                                                                    style={{ marginRight: "8px", display: "inline-block" }}
                                                                    className={`btn ripple btn-${holdStatus[user.id] ? 'success' : 'primary'} btn-xs w-70 equal-buttons`}
                                                                    onClick={() => { handleOpenModal4(user.id); }}
                                                                >
                                                                    {holdStatus[user.id] ? 'Hold' : 'Unhold'}
                                                                </button>
                                                                <button style={{ marginRight: "8px", display: "inline-block" }} className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                    Delete
                                                                </button>
                                                                <a>
                                                                    <i className="fa fa-edit me-3" style={{ cursor: 'pointer' }} />
                                                                </a>
                                                            </td>
                                                            <td style={{ padding: "1px 1px", border: "1px solid #ccc", width: "150px" }}>
                                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", overflow: "hidden", marginRight: "10px" }}>
                                                                        <img src={employee.profilePhoto} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                                    </div>
                                                                    {employee.fullName}
                                                                    <br />
                                                                    {user.formattedDates}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ padding: "6px 20px", border: "1px solid #ccc", fontWeight: "bold", width: "100px" }} colSpan={8}>
                                                            Total Payment: {employee4.totalCost}
                                                        </td>
                                                        <td style={{ padding: "6px 20px", border: "1px solid #ccc", fontWeight: "bold", position: "relative", left: "120px", width: "150px" }}>
                                                            Paid Payment: {paidAmount}
                                                        </td>
                                                        <td style={{ width: "150px" }}>
                                                            <button style={{ display: "inline-block", marginLeft: "110px", whiteSpace: "nowrap" }} className="btn ripple btn-primary btn-xs w-20 equal-buttons" onClick={handleOpenModal3}>
                                                                Add Payment
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div
                                className={`modal fade ${isModalOpen3 ? 'show d-block' : ''}`}
                                id="modaldemo-callback-form"
                                tabIndex="-1"
                                style={{ display: isModalOpen3 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                            >
                                <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '40%', margin: 'auto' }}>
                                    <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                            <h5 className="modal-title">Add Payment</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={handleCloseModal3}
                                                aria-label="Close"
                                                style={{ outline: 'none', cursor: 'pointer' }}
                                            ></button>
                                        </div>

                                        <div className="modal-body" style={{ padding: '20px' }}>
                                            <form>
                                                <div className="row row-sm">

                                                    <div className="col-sm-6 form-group">
                                                        <label className="form-label">Amount: <span className="tx-danger">*</span></label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="amount"
                                                            value={formData.amount}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label"> Collection Mode: <span className="tx-danger">*</span></label>
                                                        <select className="form-control select2"

                                                            name="collectionMode"
                                                            value={formData.collectionMode}
                                                            onChange={handleInputChange}>
                                                            <option value=''>Select </option>
                                                            <option value={'Cash Deposit'}>Cash</option>
                                                            <option value={'Online'}>Online</option>
                                                            <option value={'Cheque'}>Cheque</option>

                                                        </select>
                                                    </div>
                                                    {formData.collectionMode === 'Cheque' && (
                                                        <>
                                                            <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">Cheque Date</label>
                                                                <input type="date" className="form-control"
                                                                    name="chequeDate"
                                                                    value={formData.chequeDate}
                                                                    onChange={handleInputChange} />
                                                            </div>
                                                            <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">Cheque No</label>
                                                                <input type="text" className="form-control"
                                                                    name="chequeNo"
                                                                    value={formData.chequeNo}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </div>
                                                            <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">Bank Cheque</label>
                                                                <select className="form-control select2"
                                                                    name="bankCheque"
                                                                    value={formData.bankCheque}
                                                                    onChange={handleInputChange}

                                                                >
                                                                    <option value=''>Select </option>
                                                                    {project.map((option, index) => (
                                                                        <option key={option.id} value={option.id}>
                                                                            {option.name}
                                                                        </option>
                                                                    ))}

                                                                </select>
                                                            </div>
                                                            <div className="col-sm-6 form-group" >
                                                                <label className="form-label">Deposit to Webkype</label>
                                                                <input type="text" className="form-control"
                                                                    name="deposteToAmrs"
                                                                    value={formData.deposteToAmrs}
                                                                    onChange={handleInputChange} />
                                                            </div>
                                                            {/* <div className="col-sm-6 form-group" >
                                                                <label className="form-label">Transaction No</label>
                                                                <input type="text" className="form-control"
                                                                    name="transactionNo"
                                                                    value={formData.transactionNo}
                                                                    onChange={handleInputChange} />
                                                            </div> */}




                                                        </>
                                                    )}
                                                    {formData.collectionMode === 'Cash Deposit' && (
                                                        <>

                                                            <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">Enter Discount</label>
                                                                <input type="text" className="form-control"
                                                                    name="enterDiscount"
                                                                    value={formData.enterDiscount}
                                                                    onChange={handleInputChange} />
                                                            </div>


                                                        </>
                                                    )}
                                                    {formData.collectionMode === 'Online' && (
                                                        <>
                                                            <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">Select</label>
                                                                <select className="form-control select2"
                                                                    name="select"
                                                                    value={formData.select}
                                                                    onChange={handleInputChange}

                                                                >
                                                                    <option value=''>Select </option>
                                                                    <option >IMPS</option>
                                                                    <option >NEFT</option>
                                                                    <option >RTGS</option>

                                                                </select>
                                                            </div>
                                                            <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">Webkype Account</label>
                                                                <select className="form-control select2"
                                                                    name="amrsAccount"
                                                                    value={formData.amrsAccount}
                                                                    onChange={handleInputChange}

                                                                >
                                                                    <option value=''>Select </option>
                                                                    {project.map((option, index) => (
                                                                        <option key={option.id} value={option.id}>
                                                                            {option.name}
                                                                        </option>
                                                                    ))}

                                                                </select>
                                                            </div>
                                                            <div className="col-sm-6 form-group" >
                                                                <label className="form-label">Transaction No</label>
                                                                <input type="text" className="form-control"
                                                                    name="transactionNo"
                                                                    value={formData.transactionNo}
                                                                    onChange={handleInputChange} />
                                                            </div>




                                                        </>
                                                    )}

                                                    <div className="col-sm-6 form-group">
                                                        <label className="form-label">Payment Credit Date </label>
                                                        <input type="date" className="form-control"
                                                            name="paymentCredit"
                                                            value={formData.paymentCredit}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="col-sm-6 form-group">
                                                        <label className="form-label">Handover By</label>
                                                        <input type="text" className="form-control"
                                                            name="handOverBy"
                                                            value={formData.handOverBy}
                                                            onChange={handleInputChange} />
                                                    </div>


                                                    <div className="col-sm-6">
                                                        <label className="form-label"> Collect By <span className="tx-danger">*</span></label>
                                                        <input type="text" className="form-control"
                                                            name="collectedBy"
                                                            value={formData.collectedBy}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label"> Upload Receipt<span className="tx-danger">*</span></label>
                                                        <input type="file" className="form-control"
                                                            name="uploadRecipt"
                                                            accept="/pdf"
                                                            onChange={handleFileChange15} />
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                            <button className="btn ripple btn-primary" type="button" style={{
                                                borderRadius: '5px',
                                                padding: '8px 20px', fontSize: '14px', fontWeight: 'bold'
                                            }} onClick={handleSubmit}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '20px', marginBottom: '20px', width: '100%', backgroundColor: '#1abc9c', padding: '5px 20px' }}>
                                <h3 style={{ textAlign: 'left', color: '#ffffff', fontWeight: 'bold', fontSize: '-1rem', margin: '0' }}>Scheme Amount</h3>
                                {/* Your content here */}
                            </div>


                            <div className="row row-sm">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card custom-card main-content-body-profile">

                                        <tr>
                                            <td>
                                                <table
                                                    align="center"
                                                    width="100%"
                                                    style={{
                                                        borderCollapse: "collapse",
                                                        border: "1px solid #fcfcfc",
                                                    }}
                                                >
                                                    <thead>
                                                        <tr style={{ backgroundColor: "#f2f2f2" }}>
                                                            <th style={{ padding: "10px 6px", border: "1px solid #ccc", textAlign: "center" }}>Amount Entry</th>
                                                            <th style={{ padding: "10px 6px", border: "1px solid #ccc", textAlign: "center" }}>Payment Mode</th>
                                                            <th style={{ padding: "10px 6px", border: "1px solid #ccc", textAlign: "center" }}>Bank Name</th>
                                                            <th style={{ padding: "10px 4px", border: "1px solid #ccc", textAlign: "center" }}>Bank Cheque</th>
                                                            <th style={{ padding: "10px 4px", border: "1px solid #ccc", textAlign: "center" }}>Webkype Account</th>
                                                            <th style={{ padding: "10px 4px", border: "1px solid #ccc", textAlign: "center" }}>CHQ/TRN No</th>
                                                            <th style={{ padding: "10px 4px", border: "1px solid #ccc", textAlign: "center" }}>Cheque Date</th>
                                                            <th style={{ padding: "10px 4px", border: "1px solid #ccc", textAlign: "center" }}>Payment Date</th>
                                                            <th style={{ padding: "10px 4px", border: "1px solid #ccc", textAlign: "center" }}>Actions</th>
                                                            <th style={{ padding: "10px 4px", border: "1px solid #ccc", textAlign: "center" }}>Actions Performed By</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr>
                                                            <td style={{ padding: "3px 10px", border: "1px solid #ccc" }}>
                                                                315,847.00
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc" }}>
                                                                Cheque
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc" }}>
                                                                HDFC
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc" }}>
                                                                IDFC
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc" }}>
                                                                8644
                                                            </td>

                                                            <td style={{ padding: "3px 5px", border: "1px solid #ccc" }}>
                                                                000008
                                                            </td>
                                                            <td style={{ padding: "3px 10px", border: "1px solid #ccc", whiteSpace: "nowrap" }}>
                                                                17-Apr-2024
                                                            </td>
                                                            <td style={{ padding: "3px 10px", border: "1px solid #ccc", whiteSpace: "nowrap" }}>
                                                                17-Apr-2024
                                                            </td>

                                                            <td style={{ padding: "3px 30px", border: "1px solid #ccc", whiteSpace: "nowrap" }}>
                                                                <button style={{ marginRight: "8px", display: "inline-block" }} className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                    View Receipt
                                                                </button>
                                                                <button style={{ marginRight: "8px", display: "inline-block" }} className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                    Unhold
                                                                </button>
                                                                <button style={{ marginRight: "8px", display: "inline-block" }} className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                    Delete
                                                                </button>
                                                                <a>
                                                                    <i className="fa fa-edit me-3" style={{ cursor: 'pointer' }} />
                                                                </a>
                                                            </td>




                                                            <td style={{ padding: "3px 5px", border: "1px solid #ccc" }}>
                                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", overflow: "hidden", marginRight: "10px" }}>
                                                                        <img src="https://amrsapi.webkype.co/uploads/man404.jpg" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                                    </div>
                                                                    ARTI
                                                                </div>
                                                            </td>

                                                        </tr>

                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ padding: "3px 10px", border: "1px solid #ccc" }}>
                                                                315,847.00
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc" }}>
                                                                Cheque
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc" }}>
                                                                HDFC
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc" }}>
                                                                HDFC
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc" }}>
                                                                HDFC
                                                            </td>

                                                            <td style={{ padding: "3px 5px", border: "1px solid #ccc" }}>
                                                                000008
                                                            </td>
                                                            <td style={{ padding: "3px 10px", border: "1px solid #ccc", whiteSpace: "nowrap" }}>
                                                                17-Apr-2024
                                                            </td>
                                                            <td style={{ padding: "3px 10px", border: "1px solid #ccc", whiteSpace: "nowrap" }}>
                                                                17-Apr-2024
                                                            </td>

                                                            <td style={{ padding: "3px 30px", border: "1px solid #ccc" }}>
                                                                <button style={{ marginRight: "8px", display: "inline-block" }} className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                    View Receipt
                                                                </button>
                                                                <button style={{ marginRight: "8px", display: "inline-block" }} className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                    Unhold
                                                                </button>
                                                                <button style={{ marginRight: "8px", display: "inline-block" }} className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                    Delete
                                                                </button>
                                                                <a >
                                                                    <i className="fa fa-edit me-3" style={{ cursor: 'pointer' }} />
                                                                </a>
                                                            </td>





                                                            <td style={{ padding: "3px 5px", border: "1px solid #ccc" }}>
                                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", overflow: "hidden", marginRight: "10px" }}>
                                                                        <img src="https://amrsapi.webkype.co/uploads/man404.jpg" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                                    </div>
                                                                    ARTI
                                                                </div>
                                                            </td>

                                                        </tr>

                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ padding: "3px 10px", border: "1px solid #ccc" }}>
                                                                315,847.00
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc" }}>
                                                                Cheque
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc" }}>
                                                                HDFC
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc" }}>
                                                                HDFC
                                                            </td>
                                                            <td style={{ padding: "3px 2px", border: "1px solid #ccc" }}>
                                                                HDFC
                                                            </td>

                                                            <td style={{ padding: "3px 5px", border: "1px solid #ccc" }}>
                                                                000008
                                                            </td>
                                                            <td style={{ padding: "3px 10px", border: "1px solid #ccc", whiteSpace: "nowrap" }}>
                                                                17-Apr-2024
                                                            </td>
                                                            <td style={{ padding: "3px 10px", border: "1px solid #ccc", whiteSpace: "nowrap" }}>
                                                                17-Apr-2024
                                                            </td>

                                                            <td style={{ padding: "3px 30px", border: "1px solid #ccc" }}>
                                                                <button style={{ marginRight: "8px", display: "inline-block" }} className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                    View Receipt
                                                                </button>
                                                                <button style={{ marginRight: "8px", display: "inline-block" }} className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                    Unhold
                                                                </button>
                                                                <button style={{ marginRight: "8px", display: "inline-block" }} className="btn ripple btn-primary btn-xs w-70 equal-buttons">
                                                                    Delete
                                                                </button>
                                                                <a >
                                                                    <i className="fa fa-edit me-3" style={{ cursor: 'pointer' }} />
                                                                </a>
                                                            </td>

                                                            <td style={{ padding: "3px 5px", border: "1px solid #ccc" }}>
                                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", overflow: "hidden", marginRight: "10px" }}>
                                                                        <img src="https://amrsapi.webkype.co/uploads/man404.jpg" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                                    </div>
                                                                    ARTI
                                                                </div>
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td style={{ padding: "6px 20px", border: "1px solid #ccc", fontWeight: "bold" }} colSpan={8}>
                                                                Paid Payment
                                                            </td>


                                                            <td style={{ padding: "6px 20px", border: "1px solid #ccc", fontWeight: "bold", position: "relative", left: "200px" }}>
                                                                315,847.00
                                                            </td>
                                                            <td>
                                                                <button style={{ display: "inline-block", marginLeft: "130px", whiteSpace: "nowrap" }} className="btn ripple btn-primary btn-xs w-70 equal-buttons"
                                                                    onClick={handleOpenModal2} >
                                                                    Add Payment
                                                                </button>

                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </td>
                                        </tr>
                                    </div>
                                </div>
                            </div>


                            <div
                                className={`modal fade ${isModalOpen2 ? 'show d-block' : ''}`}
                                id="modaldemo-callback-form"
                                tabIndex="-1"
                                style={{ display: isModalOpen2 ? 'flex' : 'none', top: '20px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                            >
                                <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '40%', margin: 'auto' }}>
                                    <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                            <h5 className="modal-title">Add Payment</h5>
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

                                                    <div className="col-sm-6 form-group">
                                                        <label className="form-label">Amount: <span className="tx-danger">*</span></label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="callBackDate"
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label"> Collection Mode: <span className="tx-danger">*</span></label>
                                                        <select className="form-control select2"

                                                            name="paymentMethod"
                                                            value={formData.paymentMethod}
                                                            onChange={handleInputChange}>
                                                            <option value=''>Select </option>
                                                            <option value={'Cash Deposit'}>Cash</option>
                                                            <option value={'Online'}>Online</option>
                                                            <option value={'Cheque'}>Cheque</option>

                                                        </select>
                                                    </div>
                                                    {formData.paymentMethod === 'Cheque' && (
                                                        <>
                                                            <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">Cheque Date</label>
                                                                <input type="date" className="form-control" name="chequeNo" />
                                                            </div>
                                                            <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">Cheque No</label>
                                                                <input type="text" className="form-control" name="chequeNo" />
                                                            </div>
                                                            <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">Bank Cheque</label>
                                                                <select className="form-control select2"

                                                                >
                                                                    <option value=''>Select </option>
                                                                    <option >Am Realty Solutions (HDFC)</option>
                                                                    <option >Am Realty Solutions (ICICI)</option>
                                                                    <option >Am Realty Solutions (SBI)</option>

                                                                </select>
                                                            </div>
                                                            <div className="col-sm-6 form-group" >
                                                                <label className="form-label">Deposit to Webkype</label>
                                                                <input type="text" className="form-control" name="chequeDate" />
                                                            </div>
                                                            <div className="col-sm-6 form-group" >
                                                                <label className="form-label">Transaction No</label>
                                                                <input type="text" className="form-control" name="chequeDate" />
                                                            </div>




                                                        </>
                                                    )}
                                                    {formData.paymentMethod === 'Cash Deposit' && (
                                                        <>

                                                            <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">Enter Discount</label>
                                                                <input type="text" className="form-control" name="chequeBank" />
                                                            </div>


                                                        </>
                                                    )}
                                                    {formData.paymentMethod === 'Online' && (
                                                        <>
                                                            <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">Select</label>
                                                                <select className="form-control select2"

                                                                >
                                                                    <option value=''>Select </option>
                                                                    <option >IMPS</option>
                                                                    <option >NEFT</option>
                                                                    <option >RTGS</option>

                                                                </select>
                                                            </div>
                                                            <div className="col-sm-6 form-group" style={{ marginTop: '10px' }}>
                                                                <label className="form-label">Webkype Account</label>
                                                                <select className="form-control select2"

                                                                >
                                                                    <option value=''>Select </option>
                                                                    <option >Am Realty Solutions (HDFC)</option>
                                                                    <option >Am Realty Solutions (ICICI)</option>
                                                                    <option >Am Realty Solutions (SBI)</option>

                                                                </select>
                                                            </div>
                                                            <div className="col-sm-6 form-group" >
                                                                <label className="form-label">Transaction No</label>
                                                                <input type="text" className="form-control" name="chequeDate" />
                                                            </div>




                                                        </>
                                                    )}

                                                    <div className="col-sm-6 form-group">
                                                        <label className="form-label">Payment Credit Date </label>
                                                        <input type="text" className="form-control" name="callBackTime" />
                                                    </div>
                                                    <div className="col-sm-6 form-group">
                                                        <label className="form-label">Handover By</label>
                                                        <input type="text" className="form-control" name="callBackTime" />
                                                    </div>


                                                    <div className="col-sm-6">
                                                        <label className="form-label"> Collect By <span className="tx-danger">*</span></label>
                                                        <input type="text" className="form-control" name="callBackTime" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label"> Upload Receipt<span className="tx-danger">*</span></label>
                                                        <input type="file" className="form-control" name="callBackTime" />
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', borderRadius: '0 0 10px 10px', backgroundColor: '#f8f9fa' }}>
                                            <button className="btn ripple btn-primary" type="button" style={{ borderRadius: '5px', padding: '8px 20px', fontSize: '14px', fontWeight: 'bold' }}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '20px', marginBottom: '20px', width: '100%', backgroundColor: '#1abc9c', padding: '5px 20px' }}>
                                <h3 style={{ textAlign: 'left', color: '#ffffff', fontWeight: 'bold', fontSize: '-1rem', margin: '0' }}>Upcomeing Payment</h3>
                                {/* Your content here */}
                            </div>


                            <div className="row row-sm">
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
                        @media (max-width: 800px) {
                            .scroll-container {
                                overflow-x: auto;
                            }
                        }
                    `}
                                            </style>
                                            <table
                                                align="center"
                                                width="100%"
                                                style={{
                                                    borderCollapse: "collapse",
                                                    border: "1px solid #fcfcfc",
                                                }}
                                            >
                                                <thead>
                                                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                                                        <th style={{ border: "1px solid #ccc", textAlign: "center", width: "150px", whiteSpace: "nowrap" }}>Action</th>
                                                        <th style={{ border: "1px solid #ccc", textAlign: "center", width: "150px", whiteSpace: "nowrap" }}>From</th>
                                                        <th style={{ padding: "2px 5px", border: "1px solid #ccc", textAlign: "center", width: "150px" }}>Date</th>
                                                        <th style={{ border: "1px solid #ccc", textAlign: "center", width: "150px", whiteSpace: "nowrap" }}>Time</th>
                                                        <th style={{ padding: "2px 35px", border: "1px solid #ccc", textAlign: "center", width: "200px", whiteSpace: "nowrap" }}>Venue</th>
                                                        <th style={{ padding: "2px 20px", border: "1px solid #ccc", textAlign: "center", width: "200px", whiteSpace: "nowrap" }}>Status</th>
                                                        <th style={{ padding: "2px 5px", border: "1px solid #ccc", textAlign: "center", width: "200px" }}>Amount</th>
                                                        <th style={{ border: "1px solid #ccc", textAlign: "center", width: "200px" }}>Payment Mode</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users2.length > 0 ? (
                                                        users2.map((user, index) => (
                                                            <tr key={index}>
                                                                <td style={{ padding: "3px 45px", border: "1px solid #ccc", whiteSpace: "nowrap", width: '100px' }}>{user.action}</td>
                                                                <td style={{ padding: "3px 45px", border: "1px solid #ccc", whiteSpace: "nowrap", width: '100px' }}>{user.from}</td>
                                                                <td style={{ padding: "3px 48px", border: "1px solid #ccc", whiteSpace: "nowrap", width: '100px' }}>{user.date}</td>
                                                                <td style={{ padding: "3px 48px", border: "1px solid #ccc", whiteSpace: "nowrap", width: '100px' }}>{user.time}</td>
                                                                <td style={{ padding: "3px 48px", border: "1px solid #ccc", whiteSpace: "nowrap", width: '150px' }}>{user.venue}</td>
                                                                <td style={{ padding: "3px 48px", border: "1px solid #ccc", whiteSpace: "nowrap", width: '150px' }}>{user.status}</td>
                                                                <td style={{ padding: "3px 40px", border: "1px solid #ccc", whiteSpace: "nowrap", width: '100px' }}>{user.amount}</td>
                                                                <td style={{ padding: "3px 48px", border: "1px solid #ccc", whiteSpace: "nowrap", width: '100px' }}>
                                                                    Mode: {user.mode}
                                                                    <br />
                                                                    {user.mode}
                                                                    {user.mode === 'Cash' && <span> Remark: {user.remark}</span>}
                                                                    {user.mode === 'Online' && <span> Transaction id: {user.transaction}</span>}
                                                                    {user.mode === 'Cheque' && (
                                                                        <>
                                                                            <span> Cheque No: {user.chequeNo}</span>
                                                                            <br />
                                                                            <span> Cheque Date: {user.chequeDate}</span>
                                                                            <br />
                                                                            <span> Cheque Details Bank: {user.chequeDetails}</span>
                                                                        </>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="8" style={{ padding: "3px", border: "1px solid #ccc", textAlign: "center" }}>No data available</td>
                                                        </tr>
                                                    )}
                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* End Row */}
                            <div
                                className={`modal ${isModalOpen4 ? 'show' : ''}`}
                                style={{ display: isModalOpen4 ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}
                                tabIndex="-1"
                                role="dialog"
                            >
                                <div className="modal-dialog modal-dialog-centered modal-sl" role="document" style={{ maxWidth: '300px', margin: 'auto' }}>
                                    <div className="modal-content" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                                        <div className="modal-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', borderRadius: '10px 10px 0 0' }}>
                                            <h5 className="modal-title">Permissions</h5>
                                            <button
                                                type="button"
                                                className="close"
                                                aria-label="Close"
                                                onClick={handleCloseModal4}
                                                style={{ outline: 'none', cursor: 'pointer' }}
                                            >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>

                                        <div className="modal-body d-flex justify-content-center align-items-center" style={{ padding: '20px', textAlign: 'center' }}>
                                            <form>
                                                <div className="modal-body">
                                                    Please confirm if you want to {holdStatus[holdActionId] ? 'unhold' : 'hold'} now.
                                                </div>
                                                <div className="modal-footer d-flex justify-content-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        onClick={handleCloseModal4}
                                                        style={{ marginRight: '10px' }}
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={handleOkButtonClick}
                                                    >
                                                        Ok
                                                    </button>
                                                </div>
                                            </form>
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

export default PaymentSedu

